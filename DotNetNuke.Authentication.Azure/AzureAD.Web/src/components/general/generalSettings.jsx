import React, {Component, PropTypes} from "react";
import { connect } from "react-redux";
import GridCell from "dnn-grid-cell";
import Switch from "dnn-switch";
import SettingsActions from "../../actions/settings";
import SingleLineInputWithError from "dnn-single-line-input-with-error";
import Button from "dnn-button";
import resx from "../../resources";
import styles from "./generalSettings.less";
import utils from "../../utils";

class GeneralSettings extends Component {

    constructor() {
        super();
    }

    componentWillMount() {
        const {props} = this;

        props.dispatch(SettingsActions.getSettings());
    }

    onSettingChange(key, event) {
        let {props} = this;

        props.dispatch(SettingsActions.settingsClientModified({
            enabled: (key === "AADProviderEnabled") ? !props.enabled : props.enabled,
            autoRedirect: (key === "AutoRedirect") ? !props.autoRedirect : props.autoRedirect,
            apiKey: (key === "AppId") ? event.target.value : props.apiKey,
            apiSecret: (key === "AppSecret") ? event.target.value : props.apiSecret,
            authorizationEndpoint: (key === "ApiEndpoint") ? event.target.value : props.authorizationEndpoint,
            graphEndpoint: (key === "GraphEndpoint") ? event.target.value : props.graphEndpoint,
            tokenEndpoint: (key === "TokenEndpoint") ? event.target.value : props.tokenEndpoint,
            appUri: (key === "AppUri") ? event.target.value : props.appUri
        }));
    }

    onClickCancel() {
        utils.utilities.closePersonaBar();
    }

    onClickSave() {
        event.preventDefault();
        let {props} = this;

        props.dispatch(SettingsActions.updateSettings({
            enabled: props.enabled,
            autoRedirect: props.autoRedirect,
            apiKey: props.apiKey,
            apiSecret: props.apiSecret,
            appUri: props.appUri,
            authorizationEndpoint: props.authorizationEndpoint,
            graphEndpoint: props.graphEndpoint,
            tokenEndpoint: props.tokenEndpoint
        }, () => {
            utils.utilities.notify(resx.get("SettingsUpdateSuccess"));
            this.setState({
                clientModified: false
            });            
        }, () => {
            utils.utilities.notifyError(resx.get("SettingsError"));
        }));
    }

    render() {
        return (
            <div className={styles.generalSettings}>
                <GridCell columnSize={50}>
                    <p>The DNN Azure Active Directory Provider is an Authentication provider for DNN Platform that uses Azure Active Directory OAuth2 authentication to authenticate users.</p>
                    <Switch label="Enabled"
                            onText=""
                            offText=""
                            value={this.props.enabled}
                            tooltipMessage="Enables the Azure Active Directory authentication provider for this portal"
                            onChange={this.onSettingChange.bind(this, "AADProviderEnabled")} />
                    <Switch label="Auto-redirect"
                            onText=""
                            offText=""
                            tooltipMessage="If enabled, the login page will automatically redirect to the Azure AD login page"
                            value={this.props.autoRedirect}
                            onChange={this.onSettingChange.bind(this, "AutoRedirect")} />
                </GridCell>
                <GridCell columnSize={50}>
                    <div className="logo"></div>
                </GridCell>
                <GridCell columnSize={100}>
                    <GridCell columnSize={50}>
                        <h1>Provider credentials</h1>
                        <div className="editor-row">
                            <SingleLineInputWithError
                                withLabel={true}
                                label="App ID"
                                enabled={true}
                                error={false}
                                errorMessage={"You must specify a "}
                                tooltipMessage="aa"
                                value={this.props.apiKey}
                                onChange={this.onSettingChange.bind(this, "AppId")}
                                />
                        </div>
                        <div className="editor-row">
                            <SingleLineInputWithError
                                withLabel={true}
                                label="Secret"
                                enabled={true}
                                error={false}
                                errorMessage={"You must specify a "}
                                tooltipMessage="aa"
                                value={this.props.apiSecret}
                                autocomplete="off"
                                onChange={this.onSettingChange.bind(this, "AppSecret")}
                                />
                        </div>
                        <div className="editor-row">
                            <SingleLineInputWithError
                                withLabel={true}
                                label="App Uri"
                                enabled={true}
                                error={false}
                                errorMessage={"You must specify a "}
                                tooltipMessage="aa"
                                value={this.props.appUri}
                                onChange={this.onSettingChange.bind(this, "AppUri")}
                                />
                        </div>
                    </GridCell>
                    <GridCell columnSize={50}>
                        <h1>Endpoints</h1>
                        <div className="editor-row">
                            <SingleLineInputWithError
                                withLabel={true}
                                label="Api Endpoint"
                                enabled={true}
                                error={false}
                                errorMessage={"You must specify a "}
                                tooltipMessage="aa"
                                value={this.props.authorizationEndpoint}
                                onChange={this.onSettingChange.bind(this, "ApiEndpoint")}
                                />
                        </div>
                        <div className="editor-row">
                            <SingleLineInputWithError
                                withLabel={true}
                                label="Graph Endpoint"
                                enabled={true}
                                error={false}
                                errorMessage={"You must specify a "}
                                tooltipMessage="aa"
                                value={this.props.graphEndpoint}
                                autocomplete="off"
                                onChange={this.onSettingChange.bind(this, "GraphEndpoint")}
                                />
                        </div>
                        <div className="editor-row">
                            <SingleLineInputWithError
                                withLabel={true}
                                label="Token Endpoint"
                                enabled={true}
                                error={false}
                                errorMessage={"You must specify a "}
                                tooltipMessage="aa"
                                value={this.props.tokenEndpoint}
                                onChange={this.onSettingChange.bind(this, "TokenEndpoint")}
                                />
                        </div>
                    </GridCell>
                </GridCell>
                <GridCell columnSize={100}>
                    <div className="buttons-box">
                        <Button
                            disabled={false}
                            type="secondary"
                            onClick={this.onClickCancel.bind(this)}
                        >
                            Cancel
                        </Button>
                        <Button
                            disabled={false}
                            type="primary"
                            onClick={this.onClickSave.bind(this)}
                        >
                            Save Settings
                        </Button>
                    </div>
                </GridCell>
            </div>
        );
    }
}

GeneralSettings.propTypes = {
    dispatch: PropTypes.func.isRequired,
    enabled: PropTypes.bool,
    autoRedirect: PropTypes.bool,
    apiKey: PropTypes.string,
    apiSecret: PropTypes.string,
    authorizationEndpoint: PropTypes.string,
    graphEndpoint: PropTypes.string,
    tokenEndpoint: PropTypes.string,
    appUri: PropTypes.string
};


function mapStateToProps(state) {
    return {
        enabled: state.settings.enabled,
        autoRedirect: state.settings.autoRedirect,
        apiKey: state.settings.apiKey,
        apiSecret: state.settings.apiSecret,
        authorizationEndpoint: state.settings.authorizationEndpoint,
        graphEndpoint: state.settings.graphEndpoint,
        tokenEndpoint: state.settings.tokenEndpoint,
        appUri: state.settings.appUri
    };
}

export default connect(mapStateToProps)(GeneralSettings);