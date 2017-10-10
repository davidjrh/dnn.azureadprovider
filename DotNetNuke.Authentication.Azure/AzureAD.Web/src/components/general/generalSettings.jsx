import React, {Component, PropTypes} from "react";
import { connect } from "react-redux";
import GridCell from "dnn-grid-cell";
import Switch from "dnn-switch";
import SettingsActions from "../../actions/settings";
import SingleLineInputWithError from "dnn-single-line-input-with-error";
import Button from "dnn-button";
import styles from "./generalSettings.less";

class GeneralSettings extends Component {

    constructor() {
        super();

    }
    render() {
        return (
            <div className={styles.generalSettings}>
                <GridCell columnSize={50}>
                    <p>The DNN Azure Active Directory Provider is an Authentication provider for DNN Platform that uses Azure Active Directory OAuth2 authentication to authenticate users.</p>
                    <Switch label="Enabled" onText="" offText="" value={true}
                        tooltipMessage="Enables the Azure Active Directory authentication provider for this portal" />
                    <Switch label="Auto-redirect" onText="" offText="" 
                        tooltipMessage="If enabled, the login page will automatically redirect to the Azure AD login page"
                    />
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
                                value={""}
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
                                value={""}
                                type="password"
                                autocomplete="off"
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
                                value={""}
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
                                value={""}
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
                                value={""}
                                type="password"
                                autocomplete="off"
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
                                value={""}
                                />
                        </div>                                                   
                    </GridCell>             
                </GridCell>   
                <GridCell columnSize={100}>
                    <div className="buttons-box">
                        <Button
                            disabled={false}
                            type="secondary"
                            >
                            Cancel
                        </Button>
                        <Button
                            disabled={false}
                            type="primary"
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
    dispatch: PropTypes.func.isRequired
};


function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps)(GeneralSettings);