import React, {Component} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { GridSystem, GridCell, Switch, SingleLineInputWithError, Button, InputGroup}  from "@dnnsoftware/dnn-react-common";
import SettingsActions from "../../actions/settings";
import resx from "../../resources";
import "./syncSettings.less";
import utils from "../../utils";

/*eslint-disable quotes*/
const warningIcon = require(`!raw-loader!./../svg/error.svg`).default;

class SyncSettings extends Component {

    constructor() {
        super();

        this.state = {
            error: {
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

        state.error["aadAppClientId"] = ((nextProps.roleSyncEnabled || nextProps.profileSyncEnabled) && nextProps.aadAppClientId === "");
        state.error["aadAppSecret"] = ((nextProps.roleSyncEnabled || nextProps.profileSyncEnabled) && nextProps.aadAppSecret === "");
    }      

    onSettingChange(key, event) {
        let {props} = this;

        props.dispatch(SettingsActions.settingsClientModified({
            aadAppClientId: (key === "AadAppClientId") ? event.target.value : props.aadAppClientId,
            aadAppSecret: (key === "AadAppSecret") ? event.target.value : props.aadAppSecret,
            jwtAudiences: (key === "jwtAudiences") ? event.target.value : props.jwtAudiences,
            roleSyncEnabled: (key === "roleSyncEnabled") ? !props.roleSyncEnabled : props.roleSyncEnabled,
            profileSyncEnabled: (key === "profileSyncEnabled") ? !props.profileSyncEnabled : props.profileSyncEnabled,
            jwtAuthEnabled: (key === "jwtAuthEnabled") ? !props.jwtAuthEnabled : props.jwtAuthEnabled,
            apiResource: (key === "apiResource") ? event.target.value : props.apiResource,
            scopes: (key === "scopes") ? event.target.value : props.scopes,
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

        props.dispatch(SettingsActions.updateAdvancedSettings({
            aadAppClientId: props.aadAppClientId,
            aadAppSecret: props.aadAppSecret,
            jwtAudiences: props.jwtAudiences,
            roleSyncEnabled: props.roleSyncEnabled,
            profileSyncEnabled: props.profileSyncEnabled,
            jwtAuthEnabled: props.jwtAuthEnabled,
            apiResource: props.apiResource,
            scopes: props.scopes,
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
            <div className="dnn-azuread-aad-syncSettings">
                <InputGroup>                    
                    <GridSystem  numberOfColumns={2}>
                        <GridCell columnSize={90}>              
                            <h1>{resx.get("lblSynchronization")}</h1>      
                            <p>{resx.get("lblSynchronizationDesc")}</p>
                            <Switch label={resx.get("lblRoleSyncEnabled")} onText="" offText=""
                                tooltipMessage={resx.get("lblRoleSyncEnabled.Help")}
                                value={this.props.roleSyncEnabled}
                                onChange={this.onSettingChange.bind(this, "roleSyncEnabled")} />            
                            <Switch label={resx.get("lblProfileSyncEnabled")} onText="" offText=""
                                tooltipMessage={resx.get("lblProfileSyncEnabled.Help")}
                                value={this.props.profileSyncEnabled}
                                onChange={this.onSettingChange.bind(this, "profileSyncEnabled")} />                                                  
                        </GridCell>                           
                        <GridCell columnSize={100}>
                            <h1 className={"sectionLabel"}>{resx.get("lblAADSettings")}</h1>
                            <p>{resx.get("lblGraphClient.Help")}
                            </p>                            
                            <SingleLineInputWithError
                                withLabel={true}
                                label={resx.get("lblAADAppClientId")}
                                enabled={true}
                                error={this.state.error.aadAppClientId}
                                errorMessage={resx.get("lblAADAppClientId.Error")}
                                tooltipMessage={resx.get("lblAADAppClientId.Help")}
                                value={this.props.aadAppClientId}
                                onChange={this.onSettingChange.bind(this, "AadAppClientId")}
                            />
                            <SingleLineInputWithError
                                withLabel={true}
                                label={resx.get("lblAADAppSecret")}
                                type="password"
                                enabled={true}
                                error={this.state.error.AadAppSecret}
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
                    <h1 className={"sectionLabel spacer"}>{resx.get("lblTokenValidation")}</h1>
                    <p>{resx.get("lblTokenValidation.Help")}</p>                                                 
                    <GridSystem  numberOfColumns={2}>
                        <GridCell columnSize={90}>
                            <Switch label={resx.get("lblJwtAuthEnabled")} onText="" offText=""
                                tooltipMessage={resx.get("lblJwtAuthEnabled.Help")}
                                value={this.props.jwtAuthEnabled}
                                onChange={this.onSettingChange.bind(this, "jwtAuthEnabled")} />                                                  
                        </GridCell>
                        <GridCell columnSize={100}>
                            <SingleLineInputWithError
                                withLabel={true}
                                label={resx.get("lblAudiences")}
                                enabled={true}
                                error={this.state.error.jwtAudiences}
                                errorMessage={resx.get("lblAudiences.Error")}
                                tooltipMessage={resx.get("lblAudiences.Help")}
                                value={this.props.jwtAudiences}
                                onChange={this.onSettingChange.bind(this, "jwtAudiences")}
                            />
                        </GridCell> 
                    </GridSystem>
                </InputGroup>  
                <InputGroup>
                    <h1 className={"sectionLabel"}>{resx.get("lblAPIResource")}</h1>
                    <p>{resx.get("lblAPIResourceDesc")}</p>
                    <GridSystem  numberOfColumns={2}>
                        <GridCell columnSize={90}>
                            <SingleLineInputWithError
                                withLabel={true}
                                label={resx.get("lblAppIdUri")}
                                enabled={true}
                                error={this.state.error.apiResource}
                                errorMessage=""
                                tooltipMessage={resx.get("lblAppIdUri.Help")}
                                value={this.props.apiResource}
                                onChange={this.onSettingChange.bind(this, "apiResource")} />
                        </GridCell>
                        <GridCell columnSize={100}>
                            <SingleLineInputWithError
                                withLabel={true}
                                label={resx.get("lblScopes")}
                                enabled={true}
                                error={this.state.error.scopes}
                                errorMessage=""
                                tooltipMessage={resx.get("lblScopes.Help")}
                                value={this.props.scopes}
                                onChange={this.onSettingChange.bind(this, "scopes")}
                            />
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
                                disabled={this.state.error.aadAppClientId || this.state.error.aadAppSecret }
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
    aadAppClientId: PropTypes.string,
    aadAppSecret: PropTypes.string,
    jwtAudiences: PropTypes.string,
    roleSyncEnabled: PropTypes.bool,
    profileSyncEnabled: PropTypes.bool,
    jwtAuthEnabled: PropTypes.bool,
    apiResource: PropTypes.string,
    scopes: PropTypes.string,
    usernamePrefixEnabled: PropTypes.bool,
    groupNamePrefixEnabled: PropTypes.bool
};


function mapStateToProps(state) {
    return {
        aadAppClientId: state.settings.aadAppClientId,
        aadAppSecret: state.settings.aadAppSecret,
        jwtAudiences: state.settings.jwtAudiences,
        roleSyncEnabled: state.settings.roleSyncEnabled,
        profileSyncEnabled: state.settings.profileSyncEnabled,
        jwtAuthEnabled: state.settings.jwtAuthEnabled,
        apiResource: state.settings.apiResource,
        scopes: state.settings.scopes,
        usernamePrefixEnabled: state.settings.usernamePrefixEnabled,
        groupNamePrefixEnabled: state.settings.groupNamePrefixEnabled
    };
}
export default connect(mapStateToProps)(SyncSettings);