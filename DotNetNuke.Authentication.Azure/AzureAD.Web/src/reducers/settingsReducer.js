import { settings as ActionTypes } from "../constants/actionTypes";

export default function settings(state = {
    selectedTab: 0
}, action) {
    switch (action.type) {
        case ActionTypes.RETRIEVED_SETTINGS:
            return { ...state,
                enabled: action.data.enabled,
                autoRedirect: action.data.autoRedirect,
                apiKey: action.data.apiKey,
                apiSecret: action.data.apiSecret,
                tenantId: action.data.tenantId,
                clientModified: action.data.clientModified
            };
        case ActionTypes.SETTINGS_CLIENT_MODIFIED:
            return { ...state,
                enabled: action.data.enabled,
                autoRedirect: action.data.autoRedirect,
                apiKey: action.data.apiKey,
                apiSecret: action.data.apiSecret,
                tenantId: action.data.tenantId,
                clientModified: action.data.clientModified
            };
        case ActionTypes.UPDATED_SETTINGS:
            return { ...state,
                clientModified: action.data.clientModified
            };            
        case ActionTypes.SWITCH_TAB:
            return {
                ...state,
                selectedTab: action.payload
            };            
        default:
            return { ...state
            };
    }
}
