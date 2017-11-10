import { settings as ActionTypes } from "../constants/actionTypes";
import ApplicationService from "../services/applicationService";

const settingsActions = {
    switchTab(index, callback) {
        return (dispatch) => {
            dispatch({
                type: ActionTypes.SWITCH_TAB,
                payload: index
            });
            if (callback) {
                callback();
            }
        };
    },    
    getSettings(callback) {
        return (dispatch) => {
            ApplicationService.getSettings(data => {
                dispatch({
                    type: ActionTypes.RETRIEVED_SETTINGS,
                    data: {
                        enabled: data.enabled,
                        autoRedirect: data.autoRedirect,
                        apiKey: data.apiKey,
                        apiSecret: data.apiSecret,
                        tenantId: data.tenantId,
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
                    autoRedirect: settings.autoRedirect,
                    apiKey: settings.apiKey,
                    apiSecret: settings.apiSecret,
                    tenantId: settings.tenantId,
                    clientModified: true
                }
            });
        };
    }
};

export default settingsActions;