import React, {Component} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SettingsActions from "../../actions/settings";
import ProfileMappingRow from "./profileMappingRow";
import ProfileMappingEditor from "./profileMappingEditor";
import { Collapsible } from "@dnnsoftware/dnn-react-common";
import "./style.less";
import { SvgIcons } from "@dnnsoftware/dnn-react-common";
import utils from "../../utils";
import resx from "../../resources";

class ProfileMappings extends Component {

    constructor() {
        super();

        this.state = {
            openId: "",
            tableFields: [],
            error: {
                profileMapping: false
            }
        };
    }
    UNSAFE_componentWillMount() {
        const {props} = this;

        props.dispatch(SettingsActions.getProfileSettings());
        props.dispatch(SettingsActions.getProfileProperties());
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const {state} = this;

        state.error["profileMapping"] = (nextProps.profileMapping === null);
    }

    onValidateProfileMapping(profileMappingDetail, newDnnProfilePropertyName) {
        let originalPropertyName = null;
        if (profileMappingDetail.ProfileMappingId) {
            originalPropertyName = profileMappingDetail.ProfileMappingId.split("-")[0];
        }
        if (originalPropertyName !== newDnnProfilePropertyName) {
            // The PropertyName of this row has changed. Let's see if that property has already been mapped
            if (this.props.profileMapping.find(p => p.DnnProfilePropertyName === newDnnProfilePropertyName) !== undefined) {
                return false; // Not valid; it's already in the list
            }
            else {
                return true;
            }
        }
        else {
            return true;
        }
    }
    onUpdateProfileMapping(profileMappingDetail) {
        const {props} = this;

        let originalPropertyName = profileMappingDetail.ProfileMappingId ? profileMappingDetail.ProfileMappingId.split("-")[0] : null;
        if (originalPropertyName !== profileMappingDetail.DnnProfilePropertyName) {
            // The PropertyName of this row has changed. Let's see if that property has already been mapped
            if (this.props.profileMapping.find(p => p.DnnProfilePropertyName === profileMappingDetail.DnnProfilePropertyName) !== undefined) {
                utils.utilities.notifyError(resx.get("ErrorProfileMappingDuplicated"));
                return;
            }
        }

        let payload = {
            originalDnnPropertyName: originalPropertyName,
            profileMappingDetail: profileMappingDetail
        };
        props.dispatch(SettingsActions.updateProfileMapping(payload, () => {
            utils.utilities.notify(resx.get("MappingUpdateSuccess"));
            this.collapse();
            props.dispatch(SettingsActions.getProfileSettings());
        }, (error) => {
            const errorMessage = JSON.parse(error.responseText);
            utils.utilities.notifyError(errorMessage.Message);
        }));
    }

    onDeleteProfileMapping(profileMappingId) {
        const {props} = this;
        utils.utilities.confirm(resx.get("ProfileMappingDeletedWarning"), resx.get("Yes"), resx.get("No"), () => {
            let originalPropertyName = profileMappingId.split("-")[0];
            
            let payload = {
                dnnProfilePropertyName: originalPropertyName
            };
            props.dispatch(SettingsActions.deleteProfileMapping(payload, () => {
                utils.utilities.notify(resx.get("MappingDeleteSuccess"));
                this.collapse();
                props.dispatch(SettingsActions.getProfileSettings());
            }, (error) => {
                const errorMessage = JSON.parse(error.responseText);
                utils.utilities.notifyError(errorMessage.Message);
            }));
        });
    }

    onClickCancel() {
        utils.utilities.closePersonaBar();
    }

    /* eslint-disable react/no-did-update-set-state */
    componentDidUpdate(prevProps) {
        const {props} = this;
        if (props !== prevProps) {
            let tableFields = [];
            if (tableFields.length === 0) {
                tableFields.push({ "name": resx.get("DnnProfileProperty.Header"), "id": "DnnProfileProperty" });
                tableFields.push({ "name": resx.get("AadClaim.Header"), "id": "AadClaim" });
            }
            this.setState({tableFields});
        }
    }

    uncollapse(id) {
        this.setState({
            openId: id
        });
    }

    collapse() {
        if (this.state.openId !== "") {
            this.setState({
                openId: ""
            });
        }
    }

    toggle(openId) {
        if (openId !== "") {
            this.uncollapse(openId);
        }
    }

    renderHeader() {
        let tableHeaders = this.state.tableFields.map((field) => {
            let className = "header-" + field.id;
            return <div className={className} key={"header-" + field.id}>
                <span>{field.name}&nbsp; </span>
            </div>;
        });
        return <div className="header-row">{tableHeaders}</div>;
    }

    renderedProfileMappings() {
        let i = 0;
        if (this.props.profileMapping) {
            return this.props.profileMapping.map((item, index) => {
                let id = "row-" + i++;
                let profileMappingId = item.DnnProfilePropertyName + "-" + item.AadClaimName;
                return (
                    <ProfileMappingRow
                        profileMappingId={profileMappingId}
                        dnnProfilePropertyName={item.DnnProfilePropertyName}
                        aadClaimName={item.AadClaimName}
                        index={index}
                        key={"profile-" + index}
                        closeOnClick={true}
                        openId={this.state.openId}
                        OpenCollapse={this.toggle.bind(this)}
                        Collapse={this.collapse.bind(this)}
                        onDelete={this.onDeleteProfileMapping.bind(this, profileMappingId)}
                        id={id}>
                        <ProfileMappingEditor
                            availableProperties={this.props.profileProperties}
                            profileMappingId={profileMappingId}
                            dnnProfilePropertyName={item.DnnProfilePropertyName}
                            aadClaimName={item.AadClaimName}
                            Collapse={this.collapse.bind(this)}
                            onUpdate={this.onUpdateProfileMapping.bind(this)}
                            onValidate={this.onValidateProfileMapping.bind(this)}
                            id={id}
                            openId={this.state.openId} />
                    </ProfileMappingRow>
                );
            });
        }
    }

    /* eslint-disable react/no-danger */
    render() {
        let opened = (this.state.openId === "add");
        return (
            <div className="dnn-azuread-aad-profileMappingSettings">
                <div className="profile-items">
                    <div className="AddItemRow">
                        <div className="sectionTitle">{resx.get("lblProfilePropertiesMapping")}</div>
                        <div className={opened ? "AddItemBox-active" : "AddItemBox"} onClick={this.toggle.bind(this, opened ? "" : "add")}>
                            <div className="add-icon" dangerouslySetInnerHTML={{ __html: SvgIcons.AddIcon }}>
                            </div> {resx.get("cmdAddProfileMapping")}
                        </div>
                    </div>
                    <div className="profile-items-grid">
                        {this.renderHeader()}
                        <Collapsible isOpened={opened} style={{width: "100%", overflow: opened ? "visible" : "hidden"}}>
                            <ProfileMappingRow
                                dnnProfilePropertyName={"-"}
                                aadClaimName={"-"}
                                deletable={false}
                                editable={false}
                                index={"add"}
                                key={"profileItem-add"}
                                closeOnClick={true}
                                openId={this.state.openId}
                                OpenCollapse={this.toggle.bind(this)}
                                Collapse={this.collapse.bind(this)}
                                onDelete={this.onDeleteProfileMapping.bind(this)}
                                id={"add"}>
                                <ProfileMappingEditor
                                    availableProperties={this.props.profileProperties}
                                    Collapse={this.collapse.bind(this)}
                                    onUpdate={this.onUpdateProfileMapping.bind(this)}
                                    onValidate={this.onValidateProfileMapping.bind(this)}
                                    id={"add"}
                                    openId={this.state.openId} />
                            </ProfileMappingRow>
                        </Collapsible>
                        {this.renderedProfileMappings()}
                    </div>
                </div>
            </div>
        );
    }
}

ProfileMappings.propTypes = {
    profileMapping: PropTypes.array,
    profileProperties: PropTypes.array
};


function mapStateToProps(state) {
    return {
        profileMapping: state.settings.profileMapping,
        profileProperties: state.settings.profileProperties
    };
}

export default connect(mapStateToProps)(ProfileMappings);