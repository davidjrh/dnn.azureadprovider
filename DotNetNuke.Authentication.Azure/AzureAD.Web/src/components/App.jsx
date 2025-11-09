import React, {Component} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {PersonaBarPage, PersonaBarPageHeader, PersonaBarPageBody, DnnTabs as Tabs} from "@dnnsoftware/dnn-react-common";
import SettingsActions from "../actions/settings";
import GeneralSettings from "./general";
import SyncSettings from "./advanced/sync";
import MoreSettings from "./advanced/more";
import ProfileMappings from "./profileMappings";
import UserMappings from "./userMappings";
import RoleMappings from "./roleMappings";
import resx from "../resources";

import "./style.less";

class App extends Component {

    constructor() {
        super();

    }
    onSelectTab(index) {
        this.props.dispatch(SettingsActions.switchTab(index));
    }
    onSelectSubTab(index) {
        this.props.dispatch(SettingsActions.switchMappingSubTab(index));
    }
    render() {
        return (
            <div id="AzureADAppContainer">
                <PersonaBarPage isOpen="true">
                    <PersonaBarPageHeader title="Microsoft Entra ID" titleCharLimit={30}>
                    </PersonaBarPageHeader>
                    <PersonaBarPageBody>
                        <Tabs
                            onSelect={this.onSelectTab.bind(this)}
                            selectedIndex={this.props.selectedTab}
                            tabHeaders={[resx.get("GeneralSettings"),resx.get("AdvancedSettings"), resx.get("Mappings")]}>
                            <GeneralSettings />
                            <Tabs onSelect={this.onSelectSubTab.bind(this) }
                                selectedIndex={this.props.selectedMappingSubTab}
                                tabHeaders={[
                                    resx.get("TabSynchronization"),
                                    resx.get("TabMore")]}
                                type="secondary">
                                <SyncSettings />
                                <MoreSettings />
                            </Tabs>
                            <Tabs onSelect={this.onSelectSubTab.bind(this) }
                                selectedIndex={this.props.selectedMappingSubTab}
                                tabHeaders={[
                                    resx.get("TabUserMappings"),
                                    resx.get("TabUserProfileMappings"),
                                    resx.get("TabRoleMappings")]}
                                type="secondary">
                                <UserMappings />
                                <ProfileMappings />
                                <RoleMappings />
                            </Tabs>
                        </Tabs>                        
                    </PersonaBarPageBody>
                </PersonaBarPage>
            </div>
        );
    }
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    selectedTab: PropTypes.number,
    selectedMappingSubTab: PropTypes.number    
};


function mapStateToProps(state) {
    return {
        selectedTab: state.settings.selectedTab,
        selectedMappingSubTab: state.settings.selectedMappingSubTab
    };
}

export default connect(mapStateToProps)(App);