import React, {Component} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { GridSystem, GridCell, Switch, SingleLineInputWithError, Button, InputGroup, DropdownWithError} from "@dnnsoftware/dnn-react-common";
import SettingsActions from "../../../actions/settings";
import resx from "../../../resources";
import "../advancedSettings.less";
import utils from "../../../utils";

/*eslint-disable quotes*/
//const warningIcon = require(`!raw-loader!./../svg/error.svg`).default;

class MoreSettings extends Component {

    constructor() {
        super();

        this.state = {
            error: {}
        };
    }

    UNSAFE_componentWillMount() {
        const {props} = this;

        props.dispatch(SettingsActions.getSettings());
    }

    UNSAFE_componentWillReceiveProps() {}
    
    onSettingChange(key, event) {
        let {props} = this;

        props.dispatch(SettingsActions.settingsClientModified({
            jwtAudiences: (key === "jwtAudiences") ? event.target.value : props.jwtAudiences,
            jwtAuthEnabled: (key === "jwtAuthEnabled") ? !props.jwtAuthEnabled : props.jwtAuthEnabled,
            apiResource: (key === "apiResource") ? event.target.value : props.apiResource,
            scopes: (key === "scopes") ? event.target.value : props.scopes,
            authorizationCodePrompt: (key === "authorizationCodePrompt") ? event.value : props.authorizationCodePrompt,
            domainHint: (key === "domainHint") ? event.target.value : props.domainHint
        }));
    }    

    onClickCancel() {
        utils.utilities.closePersonaBar();
    }
    
    onClickSave() {
        event.preventDefault();
        let {props} = this;

        props.dispatch(SettingsActions.updateAdvancedMoreSettings({
            jwtAudiences: props.jwtAudiences,
            jwtAuthEnabled: props.jwtAuthEnabled,
            apiResource: props.apiResource,
            scopes: props.scopes,
            authorizationCodePrompt: props.authorizationCodePrompt,
            domainHint: props.domainHint
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
                                onChange={this.onSettingChange.bind(this, "scopes")} />
                        </GridCell> 
                    </GridSystem>
                </InputGroup>
                <InputGroup>
                    <h1 className={"sectionLabel"}>{resx.get("lblAuthorizationCode")}</h1>
                    <GridSystem numberOfColumns={2}>
                        <GridCell>
                            <DropdownWithError
                                options={[
                                    { label: resx.get("lblPromptBlank"), value: resx.get("PromptBlank") },
                                    { label: resx.get("lblPromptLogin"), value: resx.get("PromptLogin") },
                                    { label: resx.get("lblPromptNone"), value: resx.get("PromptNone") },
                                    { label: resx.get("lblPromptConsent"), value: resx.get("PromptConsent") },
                                    { label: resx.get("lblPromptSelectAccount"), value: resx.get("PromptSelectAccount") },
                                ]}
                                label={resx.get("lblAuthorizationCodePrompt")}
                                value={this.props.authorizationCodePrompt}
                                tooltipMessage={resx.get("lblAuthorizationCodePrompt.Help")}
                                onSelect={this.onSettingChange.bind(this, "authorizationCodePrompt")} />
                        </GridCell>
                        <GridCell>
                            <SingleLineInputWithError
                                label={resx.get("lblAuthorizationCodeDomainHint")}
                                value={this.props.domainHint}
                                tooltipMessage={resx.get("lblAuthorizationCodeDomainHint.Help")}
                                onChange={this.onSettingChange.bind(this, "domainHint")} />
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

MoreSettings.propTypes = {
    dispatch: PropTypes.func.isRequired,
    jwtAudiences: PropTypes.string,
    jwtAuthEnabled: PropTypes.bool,
    apiResource: PropTypes.string,
    scopes: PropTypes.string,
    authorizationCodePrompt: PropTypes.string,
    domainHint: PropTypes.string
};


function mapStateToProps(state) {
    return {
        jwtAudiences: state.settings.jwtAudiences,
        jwtAuthEnabled: state.settings.jwtAuthEnabled,
        apiResource: state.settings.apiResource,
        scopes: state.settings.scopes,
        authorizationCodePrompt: state.settings.authorizationCodePrompt,
        domainHint: state.settings.domainHint
    };
}

export default connect(mapStateToProps)(MoreSettings);