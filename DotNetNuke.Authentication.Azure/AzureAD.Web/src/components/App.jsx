import React, {Component, PropTypes} from "react";
import { connect } from "react-redux";
import PersonaBarPage from "dnn-persona-bar-page";
import PersonaBarPageHeader from "dnn-persona-bar-page-header";
import PersonaBarPageBody from "dnn-persona-bar-page-body";
import Tabs from "dnn-tabs";
import SettingsActions from "../actions/settings";
import GeneralSettings from "./general";
import SyncSettings from "./sync";

import "./style.less";

class App extends Component {

    constructor() {
        super();

    }
    onSelectTab(index) {
        this.props.dispatch(SettingsActions.switchTab(index));
    }
    render() {
        return (
            <div id="AzureADAppContainer">
                <PersonaBarPage isOpen="true">
                    <PersonaBarPageHeader title="Azure Active Directory" titleCharLimit={30}>
                    </PersonaBarPageHeader>
                    <PersonaBarPageBody>
                    <Tabs
                        onSelect={this.onSelectTab.bind(this)}
                        selectedIndex={this.props.selectedTab}
                        tabHeaders={["General Settings", "Sync Settings"]}>
                        <GeneralSettings />
                        <SyncSettings />
                    </Tabs>                        
                    </PersonaBarPageBody>
                </PersonaBarPage>
            </div>
        );
    }
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    selectedTab: PropTypes.number    
};


function mapStateToProps(state) {
    return {
        selectedTab: state.settings.selectedTab
    };
}

export default connect(mapStateToProps)(App);