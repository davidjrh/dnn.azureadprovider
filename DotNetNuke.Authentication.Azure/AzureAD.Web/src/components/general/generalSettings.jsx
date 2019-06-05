import React, {Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { GridCell, Switch, SingleLineInputWithError, Button } from "@dnnsoftware/dnn-react-common";
import SettingsActions from "../../actions/settings";
import resx from "../../resources";
import utils from "../../utils";
import "./generalSettings.less";

class GeneralSettings extends Component {

    constructor() {
        super();

        this.state = {
            error: {
                appId: false,
                appSecret: false,
                tenantId: false
            }
        };
    }

    UNSAFE_componentWillMount() {
        const {props} = this;

        props.dispatch(SettingsActions.getSettings());
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const {state} = this;

        state.error["appId"] = (nextProps.apiKey === "");
        state.error["appSecret"] = (nextProps.apiSecret === "");
        state.error["tenantId"] = (nextProps.tenantId === "");
    }

    onSettingChange(key, event) {
        let {props} = this;

        props.dispatch(SettingsActions.settingsClientModified({
            enabled: (key === "AADProviderEnabled") ? !props.enabled : props.enabled,
            autoRedirect: (key === "AutoRedirect") ? !props.autoRedirect : props.autoRedirect,
            apiKey: (key === "AppId") ? event.target.value : props.apiKey,
            apiSecret: (key === "AppSecret") ? event.target.value : props.apiSecret,
            tenantId: (key === "TenantId") ? event.target.value : props.tenantId
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
            tenantId: props.tenantId
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
            <div className="dnn-azuread-generalSettings">
                <GridCell columnSize={50}>
                    <p className="panel-description">{resx.get("lblTabDescription")}</p>
                    <Switch label={resx.get("lblEnabled")}
                        onText=""
                        offText=""
                        value={this.props.enabled}
                        tooltipMessage={resx.get("lblEnabled.Help")}
                        onChange={this.onSettingChange.bind(this, "AADProviderEnabled")} />
                    <Switch label={resx.get("lblAutoRedirect")}
                        onText=""
                        offText=""
                        tooltipMessage={resx.get("lblAutoRedirect.Help")}
                        value={this.props.autoRedirect}
                        onChange={this.onSettingChange.bind(this, "AutoRedirect")} />
                </GridCell>
                <GridCell columnSize={50}>
                    <div className="logo"></div>
                </GridCell>
                <GridCell columnSize={100} className="directory-section">
                    <GridCell columnSize={50}>
                        <h1>{resx.get("lblDirectory")}</h1>
                        <div className="editor-row">
                            <SingleLineInputWithError
                                withLabel={true}
                                label={resx.get("lblTenantId")}
                                enabled={true}
                                error={this.state.error.tenantId}
                                errorMessage={resx.get("lblTenantId.Error")}
                                tooltipMessage={resx.get("lblTenantId.Help")}
                                value={this.props.tenantId}
                                onChange={this.onSettingChange.bind(this, "TenantId")} />
                        </div>
                    </GridCell>
                </GridCell>
                <GridCell columnSize={100}>
                    <h1>{resx.get("lblProviderCredentials")}</h1>
                    <GridCell columnSize={50}>
                        <div className="editor-row">
                            <SingleLineInputWithError
                                withLabel={true}
                                label={resx.get("lblAppId")}
                                enabled={true}
                                error={this.state.error.appId}
                                errorMessage={resx.get("lblAppId.Error")}
                                tooltipMessage={resx.get("lblAppId.Help")}
                                value={this.props.apiKey}
                                onChange={this.onSettingChange.bind(this, "AppId")} />
                        </div>
                    </GridCell>
                    <GridCell columnSize={50}>
                        <div className="editor-row">
                            <SingleLineInputWithError
                                withLabel={true}
                                label={resx.get("lblAppSecret")}
                                type="password"
                                enabled={true}
                                error={this.state.error.appSecret}
                                errorMessage={resx.get("lblAppSecret.Error")}
                                tooltipMessage={resx.get("lblAppSecret.Help")}
                                value={this.props.apiSecret}
                                autocomplete="off"
                                onChange={this.onSettingChange.bind(this, "AppSecret")} />
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
                            {resx.get("Cancel")}
                        </Button>
                        <Button
                            disabled={this.state.error.appId || this.state.error.appSecret || this.state.error.tenantId}
                            type="primary"
                            onClick={this.onClickSave.bind(this)}
                        >
                            {resx.get("SaveSettings")}
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
    tenantId: PropTypes.string
};


function mapStateToProps(state) {
    return {
        enabled: state.settings.enabled,
        autoRedirect: state.settings.autoRedirect,
        apiKey: state.settings.apiKey,
        apiSecret: state.settings.apiSecret,
        tenantId: state.settings.tenantId
    };
}

export default connect(mapStateToProps)(GeneralSettings);