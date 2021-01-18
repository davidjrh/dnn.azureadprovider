import { settings as ActionTypes } from "../constants/actionTypes";

export default function settings(state = {
    selectedTab: 0
}, action) {
    switch (action.type) {
        case ActionTypes.RETRIEVED_SETTINGS:
            return { ...state,
                enabled: action.data.enabled,
                useGlobalSettings: action.data.useGlobalSettings,
                autoRedirect: action.data.autoRedirect,
                autoAuthorize: action.data.autoAuthorize,
                apiKey: action.data.apiKey,
                apiSecret: action.data.apiSecret,
                redirectUri: action.data.redirectUri,
                tenantId: action.data.tenantId,
                aadAppClientId: action.data.aadAppClientId,
                aadAppSecret: action.data.aadAppSecret,
                jwtAudiences: action.data.jwtAudiences,
                roleSyncEnabled: action.data.roleSyncEnabled,
                profileSyncEnabled: action.data.profileSyncEnabled,
                jwtAuthEnabled: action.data.jwtAuthEnabled,
                apiResource: action.data.apiResource,
                scopes: action.data.scopes,
                clientModified: action.data.clientModified,
                usernamePrefixEnabled: action.data.usernamePrefixEnabled,
                groupNamePrefixEnabled: action.data.groupNamePrefixEnabled
            };
        case ActionTypes.SETTINGS_CLIENT_MODIFIED:
            return { ...state,
                enabled: action.data.enabled,
                useGlobalSettings: action.data.useGlobalSettings,
                autoRedirect: action.data.autoRedirect,
                autoAuthorize: action.data.autoAuthorize,
                apiKey: action.data.apiKey,
                apiSecret: action.data.apiSecret,
                redirectUri: action.data.redirectUri,
                tenantId: action.data.tenantId,
                aadAppClientId: action.data.aadAppClientId,
                aadAppSecret: action.data.aadAppSecret,
                jwtAudiences: action.data.jwtAudiences,
                roleSyncEnabled: action.data.roleSyncEnabled,
                profileSyncEnabled: action.data.profileSyncEnabled,
                jwtAuthEnabled: action.data.jwtAuthEnabled,
                apiResource: action.data.apiResource,
                scopes: action.data.scopes,
                clientModified: action.data.clientModified,
                usernamePrefixEnabled: action.data.usernamePrefixEnabled,
                groupNamePrefixEnabled: action.data.groupNamePrefixEnabled
            };
        case ActionTypes.UPDATED_SETTINGS:
            return { ...state,
                clientModified: action.data.clientModified
            };     
        case ActionTypes.RETRIEVED_PROFILESETTINGS:
            return { ...state,
                profileMapping: action.data.profileMapping
            };
        case ActionTypes.RETRIEVED_ROLEMAPPINGSETTINGS:
            return { ...state,
                roleMapping: action.data.roleMapping
            };
        case ActionTypes.RETRIEVED_AVAILABLEROLES:
            return { ...state,
                roles: action.data.roles
            };        
        case ActionTypes.SWITCH_TAB:
            return {
                ...state,
                selectedTab: action.payload
            };     
        case ActionTypes.SWITCH_MAPPING_SUBTAB:
            return {
                ...state,
                selectedSubTab: action.payload
            };  
        case ActionTypes.CANCELLED_PROFILEMAPPING_CLIENT_MODIFIED:
            return { ...state,
                profileMappingClientModified: action.data.profileMappingClientModified
            };
        case ActionTypes.PROFILEMAPPINGS_CLIENT_MODIFIED:
            return { ...state,
                profileMappingDetail: action.data.profileMappingDetail,
                profileMappingClientModified: action.data.profileMappingClientModified
            };
        case ActionTypes.RETRIEVED_PROFILEPROPERTIES:
            return { ...state,
                profileProperties: action.data.profileProperties
            };
        case ActionTypes.ROLEMAPPINGS_CLIENT_MODIFIED:
            return { ...state,
                roleProperties: action.data.roleProperties
            };    
        case ActionTypes.RETRIEVED_USERMAPPINGSETTINGS:
            return { ...state,
                userMapping: action.data.userMapping
            };
        case ActionTypes.USERMAPPINGS_CLIENT_MODIFIED:
            return { ...state,
                userMappingDetail: action.data.userMappingDetail,
                userMappingClientModified: action.data.userMappingClientModified
            };        
        default:
            return { ...state
            };
    }
}
