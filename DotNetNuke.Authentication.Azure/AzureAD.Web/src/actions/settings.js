import { settings as ActionTypes } from "../constants/actionTypes";
import ApplicationService from "../services/applicationService";

const settingsActions = {
    getSettings(callback) {
        return (dispatch) => {
            ApplicationService.getSettings(data => {
                dispatch({
                    type: ActionTypes.RETRIEVED_SETTINGS,
                    data: {
                        enabled: data.enabled,
                        instrumentationKey: data.instrumentationKey,
                        clientModified: false
                    }
                });
                if (callback) {
                    callback(data);
                }
            });
        };
    },
    updateSettings(payload, callback, failureCallback) {
        return (dispatch) => {
            ApplicationService.updateSettings(payload, data => {
                dispatch({
                    type: ActionTypes.UPDATED_SETTINGS,
                    data: {
                        clientModified: false
                    }
                });
                if (callback) {
                    callback(data);
                }
            }, data => {
                if (failureCallback) {
                    failureCallback(data);
                }
            });
        };
    },
    settingsClientModified(settings) {
        return (dispatch) => {
            dispatch({
                type: ActionTypes.SETTINGS_CLIENT_MODIFIED,
                data: {
                    enabled: settings.enabled,
                    instrumentationKey: settings.instrumentationKey,
                    clientModified: true
                }
            });
        };
    }
};

export default settingsActions;