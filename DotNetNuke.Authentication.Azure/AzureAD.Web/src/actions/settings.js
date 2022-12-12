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
    switchMappingSubTab(index, callback) {
        return (dispatch) => {
            dispatch({
                type: ActionTypes.SWITCH_MAPPING_SUBTAB,
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
                        useGlobalSettings: data.useGlobalSettings,                        
                        autoRedirect: data.autoRedirect,
                        autoAuthorize: data.autoAuthorize,
                        apiKey: data.apiKey,
                        apiSecret: data.apiSecret,
                        redirectUri: data.redirectUri,
                        onErrorUri: data.onErrorUri,
                        tenantId: data.tenantId,
                        aadAppClientId: data.aadAppClientId,                        
                        aadAppSecret: data.aadAppSecret,
                        jwtAudiences: data.jwtAudiences,
                        roleSyncEnabled: data.roleSyncEnabled,
                        userSyncEnabled: data.userSyncEnabled,
                        profileSyncEnabled: data.profileSyncEnabled,
                        jwtAuthEnabled: data.jwtAuthEnabled,
                        apiResource: data.apiResource,
                        scopes: data.scopes,
                        usernamePrefixEnabled: data.usernamePrefixEnabled,
                        groupNamePrefixEnabled: data.groupNamePrefixEnabled,
                        authorizationCodePrompt: data.authorizationCodePrompt,
                        domainHint: data.domainHint,
                        clientModified: false
                    }
                });
                if (callback) {
                    callback(data);
                }
            });
        };
    },
    updateGeneralSettings(payload, callback, failureCallback) {
        return (dispatch) => {
            ApplicationService.updateGeneralSettings(payload, data => {
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
    updateAdvancedSyncSettings(payload, callback, failureCallback) {
        return (dispatch) => {
            ApplicationService.updateAdvancedSyncSettings(payload, data => {
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
    updateAdvancedMoreSettings(payload, callback, failureCallback) {
        return (dispatch) => {
            ApplicationService.updateAdvancedMoreSettings(payload, data => {
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
                    useGlobalSettings: settings.useGlobalSettings,
                    autoRedirect: settings.autoRedirect,
                    autoAuthorize: settings.autoAuthorize,
                    apiKey: settings.apiKey,
                    apiSecret: settings.apiSecret,
                    redirectUri: settings.redirectUri,
                    onErrorUri: settings.onErrorUri,
                    tenantId: settings.tenantId,
                    aadAppClientId: settings.aadAppClientId,
                    aadAppSecret: settings.aadAppSecret,
                    jwtAudiences: settings.jwtAudiences,
                    roleSyncEnabled: settings.roleSyncEnabled,
                    userSyncEnabled: settings.userSyncEnabled,
                    profileSyncEnabled: settings.profileSyncEnabled,
                    jwtAuthEnabled: settings.jwtAuthEnabled,
                    apiResource: settings.apiResource,
                    scopes: settings.scopes,
                    usernamePrefixEnabled: settings.usernamePrefixEnabled,
                    groupNamePrefixEnabled: settings.groupNamePrefixEnabled,
                    authorizationCodePrompt: settings.authorizationCodePrompt,
                    domainHint: settings.domainHint,
                    clientModified: true
                }
            });
        };
    },
    getProfileSettings(callback) {
        return (dispatch) => {
            ApplicationService.getProfileSettings(data => {
                dispatch({
                    type: ActionTypes.RETRIEVED_PROFILESETTINGS,
                    data: {
                        profileMapping: data
                    }
                });
                if (callback) {
                    callback(data);
                }
            });
        };
    },
    getProfileProperties(callback) {
        return (dispatch) => {
            ApplicationService.getProfileProperties(data => {
                dispatch({
                    type: ActionTypes.RETRIEVED_PROFILEPROPERTIES,
                    data: {
                        profileProperties: data
                    }
                });
                if (callback) {
                    callback(data);
                }
            });
        };
    },
    cancelProfileMappingClientModified() {
        return (dispatch) => {
            dispatch({
                type: ActionTypes.CANCELLED_PROFILEMAPPING_CLIENT_MODIFIED,
                data: {
                    profileMappingClientModified: false
                }
            });
        };
    },
    profileMappingClientModified(parameter) {
        return (dispatch) => {
            dispatch({
                type: ActionTypes.PROFILEMAPPINGS_CLIENT_MODIFIED,
                data: {
                    profileMappingDetail: parameter,
                    profileMappingClientModified: true
                }
            });
        };
    },
    updateProfileMapping(payload, callback, failureCallback) {
        return () => {
            ApplicationService.updateProfileMapping(payload, data => {
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
    deleteProfileMapping(payload, callback, failureCallback) {
        return () => {
            ApplicationService.deleteProfileMapping(payload, data => {
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
    getRoleSettings(callback) {
        return (dispatch) => {
            ApplicationService.getRoleMappingSettings(data => {
                dispatch({
                    type: ActionTypes.RETRIEVED_ROLEMAPPINGSETTINGS,
                    data: {
                        roleMapping: data
                    }
                });
                if (callback) {
                    callback(data);
                }
            });
        };
    },
    getAvailableRoles(callback) {
        return (dispatch) => {
            ApplicationService.getAvailableRoles(data => {
                dispatch({
                    type: ActionTypes.RETRIEVED_AVAILABLEROLES,
                    data: {
                        roles: data
                    }
                });
                if (callback) {
                    callback(data);
                }
            });
        };
    },
    roleMappingClientModified(parameter) {
        return (dispatch) => {
            dispatch({
                type: ActionTypes.ROLEMAPPINGS_CLIENT_MODIFIED,
                data: {
                    roleMappingDetail: parameter,
                    roleMappingClientModified: true
                }
            });
        };
    },
    updateRoleMapping(payload, callback, failureCallback) {
        return () => {
            ApplicationService.updateRoleMapping(payload, data => {
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
    deleteRoleMapping(payload, callback, failureCallback) {
        return () => {
            ApplicationService.deleteRoleMapping(payload, data => {
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
    getUserMappingSettings(callback) {
        return (dispatch) => {
            ApplicationService.getUserMappingSettings(data => {
                dispatch({
                    type: ActionTypes.RETRIEVED_USERMAPPINGSETTINGS,
                    data: {
                        userMapping: data
                    }
                });
                if (callback) {
                    callback(data);
                }
            });
        };
    },
    updateUserMapping(payload, callback, failureCallback) {
        return () => {
            ApplicationService.updateUserMapping(payload, data => {
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
    userMappingClientModified(parameter) {
        return (dispatch) => {
            dispatch({
                type: ActionTypes.USERMAPPINGS_CLIENT_MODIFIED,
                data: {
                    userMappingDetail: parameter,
                    userMappingClientModified: true
                }
            });
        };
    },    
};

export default settingsActions;