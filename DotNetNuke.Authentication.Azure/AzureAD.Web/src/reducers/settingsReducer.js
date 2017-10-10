import { settings as ActionTypes } from "../constants/actionTypes";

export default function settings(state = {
}, action) {
    switch (action.type) {
        case ActionTypes.RETRIEVED_SETTINGS:
            return { ...state,
                enabled: action.data.enabled,
                instrumentationKey: action.data.instrumentationKey,
                clientModified: action.data.clientModified
            };
        case ActionTypes.SETTINGS_CLIENT_MODIFIED:
            return { ...state,
                enabled: action.data.enabled,
                instrumentationKey: action.data.instrumentationKey,
                clientModified: action.data.clientModified
            };
        case ActionTypes.UPDATED_SETTINGS:
            return { ...state,
                clientModified: action.data.clientModified
            };            
        default:
            return { ...state
            };
    }
}
