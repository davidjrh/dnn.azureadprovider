import React, {Component} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { GridSystem, GridCell, Switch, SingleLineInputWithError, Button, InputGroup}  from "@dnnsoftware/dnn-react-common";
import SettingsActions from "../../../actions/settings";
import resx from "../../../resources";
import "../advancedSettings.less";
import utils from "../../../utils";

/*eslint-disable quotes*/
const warningIcon = require(`!raw-loader!../../svg/error.svg`).default;

class SyncSettings extends Component {

    constructor() {
        super();

        this.state = {
            error: {
                aadTenantId: false,
                aadAppClientId: false,
                aadAppSecret: false
            }
        };
    }

    UNSAFE_componentWillMount() {
        const {props} = this;

        props.dispatch(SettingsActions.getSettings());
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const {state} = this;

        state.error["aadTenantId"] = ((nextProps.roleSyncEnabled || nextProps.userSyncEnabled || nextProps.profileSyncEnabled) && nextProps.aadTenantId === "");
        state.error["aadAppClientId"] = ((nextProps.roleSyncEnabled || nextProps.userSyncEnabled || nextProps.profileSyncEnabled) && nextProps.aadAppClientId === "");
        state.error["aadAppSecret"] = ((nextProps.roleSyncEnabled || nextProps.userSyncEnabled || nextProps.profileSyncEnabled) && nextProps.aadAppSecret === "");
    }      

    onSettingChange(key, event) {
        let {props} = this;

        props.dispatch(SettingsActions.settingsClientModified({
            aadTenantId: (key === "AadTenantId") ? event.target.value : props.aadTenantId,
            aadAppClientId: (key === "AadAppClientId") ? event.target.value : props.aadAppClientId,
            aadAppSecret: (key === "AadAppSecret") ? event.target.value : props.aadAppSecret,
            graphUseCustomParams: (key === "graphUseCustomParams") ? !props.graphUseCustomParams : props.graphUseCustomParams,
            roleSyncEnabled: (key === "roleSyncEnabled") ? !props.roleSyncEnabled : props.roleSyncEnabled,
            userSyncEnabled: (key === "userSyncEnabled") ? !props.userSyncEnabled : props.userSyncEnabled,
            profileSyncEnabled: (key === "profileSyncEnabled") ? !props.profileSyncEnabled : props.profileSyncEnabled,
            usernamePrefixEnabled: (key === "usernamePrefixEnabled") ? !props.usernamePrefixEnabled : props.usernamePrefixEnabled,
            groupNamePrefixEnabled: (key === "groupNamePrefixEnabled") ? !props.groupNamePrefixEnabled : props.groupNamePrefixEnabled
        }));
    }    

    onClickCancel() {
        utils.utilities.closePersonaBar();
    }
    
    onClickSave() {
        event.preventDefault();
        let {props} = this;

        props.dispatch(SettingsActions.updateAdvancedSyncSettings({
            aadTenantId: props.aadTenantId,
            aadAppClientId: props.aadAppClientId,
            aadAppSecret: props.aadAppSecret,
            graphUseCustomParams: props.graphUseCustomParams,
            roleSyncEnabled: props.roleSyncEnabled,
            userSyncEnabled: props.userSyncEnabled,
            profileSyncEnabled: props.profileSyncEnabled,
            usernamePrefixEnabled: props.usernamePrefixEnabled,
            groupNamePrefixEnabled: props.groupNamePrefixEnabled
        }, () => {
            utils.utilities.notify(resx.get("SettingsUpdateSuccess"));
            this.setState({
                clientModified: false
            });            
        }, () => {
            utils.utilities.notifyError(resx.get("SettingsError"));
        }));
    }
    
    /* eslint-disable react/no-danger */
    render() {
        return (
            <div className="dnn-azuread-aad-advancedSettings">
                <InputGroup>                    
                    <GridSystem numberOfColumns={2}>
                        <GridCell columnSize={90}>              
                            <h1>{resx.get("lblSynchronization")}</h1>      
                            <p>{resx.get("lblSynchronizationDesc")}</p>
                            <Switch label={resx.get("lblRoleSyncEnabled")} onText="" offText=""
                                tooltipMessage={resx.get("lblRoleSyncEnabled.Help")}
                                value={this.props.roleSyncEnabled}
                                onChange={this.onSettingChange.bind(this, "roleSyncEnabled")} />
                            <Switch label={resx.get("lblUserSyncEnabled")} onText="" offText=""
                                tooltipMessage={resx.get("lblUserSyncEnabled.Help")}
                                value={this.props.userSyncEnabled}
                                onChange={this.onSettingChange.bind(this, "userSyncEnabled")} />
                            <Switch label={resx.get("lblProfileSyncEnabled")} onText="" offText=""
                                tooltipMessage={resx.get("lblProfileSyncEnabled.Help")}
                                value={this.props.profileSyncEnabled}
                                onChange={this.onSettingChange.bind(this, "profileSyncEnabled")} />
                        </GridCell>                           
                        <GridCell columnSize={100}>
                            <h1 className={"sectionLabel"}>{resx.get("lblAADSettings")}</h1>
                            <p>{resx.get("lblGraphClient.Help")}</p>

                            <Switch label={resx.get("lblUseCustomParameters")} onText="" offText=""
                                tooltipMessage={resx.get("lblUseCustomParameters.Help")}
                                value={this.props.graphUseCustomParams}
                                onChange={this.onSettingChange.bind(this, "graphUseCustomParams")} />
                            
                            <SingleLineInputWithError
                                withLabel={true}
                                label={resx.get("lblTenantId")}
                                enabled={this.props.graphUseCustomParams}
                                error={this.props.graphUseCustomParams && this.state.error.aadTenantId}
                                errorMessage={resx.get("lblTenantId.Error")}
                                tooltipMessage={resx.get("lblTenantId.Help")}
                                value={this.props.aadTenantId}
                                onChange={this.onSettingChange.bind(this, "AadTenantId")}
                            />
                            <SingleLineInputWithError
                                withLabel={true}
                                label={resx.get("lblAADAppClientId")}
                                enabled={this.props.graphUseCustomParams}
                                error={this.props.graphUseCustomParams && this.state.error.aadAppClientId}
                                errorMessage={resx.get("lblAADAppClientId.Error")}
                                tooltipMessage={resx.get("lblAADAppClientId.Help")}
                                value={this.props.aadAppClientId}
                                onChange={this.onSettingChange.bind(this, "AadAppClientId")}
                            />
                            <SingleLineInputWithError
                                withLabel={true}
                                label={resx.get("lblAADAppSecret")}
                                type="password"
                                enabled={this.props.graphUseCustomParams}
                                error={this.props.graphUseCustomParams && this.state.error.aadAppSecret}
                                errorMessage={resx.get("lblAADAppSecret.Error")}
                                tooltipMessage={resx.get("lblAADAppSecret.Help")}
                                value={this.props.aadAppSecret}
                                onChange={this.onSettingChange.bind(this, "AadAppSecret")}
                            />
                        </GridCell>                         
                    </GridSystem>
                </InputGroup>
                <InputGroup>
                    <h1 className={"sectionLabel"}>{resx.get("lblNamePrefixes")}</h1>
                    <p>{resx.get("lblNamePrefixes.Help")}</p>
                    <GridSystem  numberOfColumns={2}>
                        <GridCell columnSize={90}>
                            <Switch label={resx.get("lblUsernamePrefixEnabled")} onText="" offText=""
                                tooltipMessage={resx.get("lblUsernamePrefixEnabled.Help")}
                                value={this.props.usernamePrefixEnabled}
                                onChange={this.onSettingChange.bind(this, "usernamePrefixEnabled")} />                                                  
                            <Switch label={resx.get("lblGroupNamePrefixEnabled")} onText="" offText=""
                                tooltipMessage={resx.get("lblGroupNamePrefixEnabled.Help")}
                                value={this.props.groupNamePrefixEnabled}
                                onChange={this.onSettingChange.bind(this, "groupNamePrefixEnabled")} />
                        </GridCell>
                        <GridCell columnSize={100}>
                            <div className="warning-container">
                                <div className="warning-icon" dangerouslySetInnerHTML={{ __html: warningIcon }} />
                                <div className="warning-msg">{resx.get("NamePrefixesWarningMessage")}</div>
                            </div>
                        </GridCell> 
                    </GridSystem>
                </InputGroup>
                <InputGroup>         
                    <GridCell columnSize={100}>
                        <div className="buttons-box">
                            <Button disabled={false} type="secondary" onClick={this.onClickCancel.bind(this)}>
                                {resx.get("Cancel")}
                            </Button>
                            <Button
                                disabled={this.props.graphUseCustomParams && (this.state.error.aadAppClientId || this.state.error.aadAppSecret || this.state.error.aadTenantId)}
                                type="primary"
                                onClick={this.onClickSave.bind(this)}>
                                {resx.get("SaveSettings")}
                            </Button>                        
                        </div>                    
                    </GridCell>  
                </InputGroup>
            </div>
        );
    }
}

SyncSettings.propTypes = {
    dispatch: PropTypes.func.isRequired,
    aadTenantId: PropTypes.string,
    aadAppClientId: PropTypes.string,
    aadAppSecret: PropTypes.string,
    graphUseCustomParams: PropTypes.bool,
    roleSyncEnabled: PropTypes.bool,
    userSyncEnabled: PropTypes.bool,
    profileSyncEnabled: PropTypes.bool,
    usernamePrefixEnabled: PropTypes.bool,
    groupNamePrefixEnabled: PropTypes.bool
};


function mapStateToProps(state) {
    return {
        aadTenantId: state.settings.aadTenantId,
        aadAppClientId: state.settings.aadAppClientId,
        aadAppSecret: state.settings.aadAppSecret,
        graphUseCustomParams: state.settings.graphUseCustomParams,
        roleSyncEnabled: state.settings.roleSyncEnabled,
        userSyncEnabled: state.settings.userSyncEnabled,
        profileSyncEnabled: state.settings.profileSyncEnabled,
        usernamePrefixEnabled: state.settings.usernamePrefixEnabled,
        groupNamePrefixEnabled: state.settings.groupNamePrefixEnabled
    };
}
export default connect(mapStateToProps)(SyncSettings);