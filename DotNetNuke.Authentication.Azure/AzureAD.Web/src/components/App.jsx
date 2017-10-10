import React, {Component, PropTypes} from "react";
import { connect } from "react-redux";
import PersonaBarPage from "dnn-persona-bar-page";
import PersonaBarPageHeader from "dnn-persona-bar-page-header";
import PersonaBarPageBody from "dnn-persona-bar-page-body";
import Button from "dnn-button";
import SingleLineInputWithError from "dnn-single-line-input-with-error";
import Label from "dnn-label";
import Switch from "dnn-switch";
import resx from "../resources";
import util from "../utils";
import {
    settings as SettingsActions
} from "../actions";

import "./style.less";

class App extends Component {

    constructor() {
        super();

        this.state = {
            settingsLoaded: false,
            enabled: false,
            instrumentationKey: "",
            clientModified: false,
            error: {
                instrumentationKey: false
            },
            triedToSubmit: false
        };
    }

    componentWillMount() {
        const {props} = this;

        if (props.settingsLoaded) {
            this.setState({
                enabled: props.enabled,
                instrumentationKey: props.instrumentationKey,
                clientModified: props.clientModified
            });
            return;
        }

        props.dispatch(SettingsActions.getSettings((data) => {
            this.setState({
                enabled: data.enabled,
                instrumentationKey: data.instrumentationKey
            });
        }));        
    }

    componentWillReceiveProps(props) {
        this.setState({
            enabled: props.enabled,
            instrumentationKey: props.instrumentationKey,
            clientModified: props.clientModified,
            triedToSubmit: false
        });
    }    

    onSettingChange(key, event) {
        let {state, props} = this;

        if (key === "Enabled") {
            state.enabled = !state.enabled;
        }
        if (key === "InstrumentationKey") {
            state.instrumentationKey = event.target.value;
        }

        let pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;            
        state.error["instrumentationKey"] = state.enabled && !pattern.test(state.instrumentationKey);

        this.setState({
            enabled: state.enabled,
            instrumentationKey: state.instrumentationKey,
            error: state.error,
            clientModified: true,
            triedToSubmit: false
        });

        props.dispatch(SettingsActions.settingsClientModified({
            enabled: state.enabled,
            instrumentationKey: state.instrumentationKey            
        }));
    }

    onCancel() {
        const {props} = this;
        util.utilities.confirm(resx.get("SettingsRestoreWarning"), resx.get("Yes"), resx.get("No"), () => {
            props.dispatch(SettingsActions.getSettings((data) => {
                this.setState({
                    enabled: data.enabled,
                    instrumentationKey: data.instrumentationKey,
                    clientModified: false,
                    error: {
                        instrumentationKey: false
                    }               
                });
            }));
        });        
    }

    onUpdate() {
        event.preventDefault();
        const {props, state} = this;

        if (state.error.instrumentationKey)
            return;

        this.setState({
            triedToSubmit: true
        });

        props.dispatch(SettingsActions.updateSettings({
            enabled: state.enabled,
            instrumentationKey: state.instrumentationKey
        }, () => {
            util.utilities.notify(resx.get("SettingsUpdateSuccess"));
            this.setState({
                clientModified: false
            });            
        }, () => {
            util.utilities.notifyError(resx.get("SettingsError"));
        }));
    }
    render() {
        const {state} = this;
        return (
            <div id="ApplicationInsightsAppContainer">
                <PersonaBarPage isOpen="true">
                    <PersonaBarPageHeader title="Application Insights">
                    </PersonaBarPageHeader>
                    <PersonaBarPageBody>
                        <h1>General settings</h1>
                        <div className="app-insights-performance" />
                        <p>In order to setup Visual Studio Application Insights monitoring, you must first provision an AppInsights account to obtain the "Instrumentation Key". 
                            <a href="https://azure.microsoft.com/en-us/services/application-insights/" target="_new">Get started with Application Insights</a>.</p>

                        <div className="editor-row">
                            <Label label={resx.get("plEnabled") } style={{ fontWeight: "bold" }}/>
                            <div className="left">
                                <Switch labelHidden={true}
                                    value={state.enabled }
                                    onChange={this.onSettingChange.bind(this, "Enabled") }
                                    />
                            </div>
                        </div>
                        <div className="editor-row">
                            <SingleLineInputWithError
                                withLabel={true}
                                label={resx.get("plInstrumentationKey") }
                                enabled={state.enabled}
                                error={this.state.error.instrumentationKey}
                                errorMessage={resx.get("InstrumentationKeyRequired")}
                                value={state.instrumentationKey || ""}
                                onChange={this.onSettingChange.bind(this, "InstrumentationKey") }
                                />
                        </div>

                        <div className="buttons-box">
                            <Button
                                disabled={!state.clientModified}
                                type="secondary"
                                onClick={this.onCancel.bind(this) }>
                                {resx.get("Cancel") }
                            </Button>
                            <Button
                                disabled={!state.clientModified || state.error.instrumentationKey}
                                type="primary"
                                onClick={this.onUpdate.bind(this) }>
                                {resx.get("Update")}
                            </Button>
                        </div>
                    </PersonaBarPageBody>
                </PersonaBarPage>
            </div>
        );
    }
}

App.PropTypes = {
    dispatch: PropTypes.func.isRequired,
    enabled: PropTypes.bool,
    instrumentationKey: PropTypes.string,
    clientModified: PropTypes.bool
};

function mapStateToProps(state) {
    return {
        enabled: state.enabled,
        instrumentationKey: state.instrumentationKey,
        clientModified: state.clientModified
    };
}

export default connect(mapStateToProps)(App);