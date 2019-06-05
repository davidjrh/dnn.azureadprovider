import React, {Component} from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import {GridCell, Switch, SingleLineInputWithError, Button}  from "@dnnsoftware/dnn-react-common";
//import SettingsActions from "../../actions/settings";

import styles from "./syncSettings.less";

class SyncSettings extends Component {

    constructor() {
        super();

    }
    render() {
        return (
            <div className={styles.syncSettings}>
                <GridCell columnSize={100}>
                    <p>The synchornization process automatically syncs roles and users from your Azure AD tenant
                        into your DNN instance. You can filter which roles and users you want to sync.
                    </p>
                </GridCell>
                <GridCell columnSize={50}>              
                    <h1>Role and User sync</h1>      
                    <Switch label="Role Sync" onText="" offText="" value={true}
                        tooltipMessage="Enables the Azure Active Directory authentication provider for this portal" />
                    <div className="editor-row">
                        <SingleLineInputWithError
                            withLabel={true}
                            label="Role Regular Expression Filter"
                            enabled={true}
                            error={false}
                            errorMessage={"You must specify a "}
                            tooltipMessage="aa"
                            value={""}
                            />
                    </div>
                    <Switch label="User Sync" onText="" offText="" value={true}
                        tooltipMessage="Enables the Azure Active Directory authentication provider for this portal" />
                    <div className="editor-row">
                        <SingleLineInputWithError
                            withLabel={true}
                            label="User Regular Expression Filter"
                            enabled={true}
                            error={false}
                            errorMessage={"You must specify a "}
                            tooltipMessage="aa"
                            value={""}
                            />
                    </div>                    
                </GridCell>                
                <GridCell columnSize={50}> 
                </GridCell>                
                <GridCell columnSize={100}> 
                    <GridCell columnSize={50}> 
                        <h1>Profile Sync</h1>
                        <Switch label="Profile Sync" onText="" offText="" value={true}
                        tooltipMessage="Enables the Azure Active Directory authentication provider for this portal" />
                        
                    </GridCell>                
                    <GridCell columnSize={50}> 
                    </GridCell>                
                    <GridCell columnSize={100}> 
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

SyncSettings.propTypes = {
    dispatch: PropTypes.func.isRequired
};


//function mapStateToProps(state) {
function mapStateToProps() {
    return {
    };
}

export default connect(mapStateToProps)(SyncSettings);