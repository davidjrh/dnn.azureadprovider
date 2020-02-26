import React, {Component} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SettingsActions from "../../actions/settings";
import RoleMappingRow from "./roleMappingRow";
import RoleMappingEditor from "./roleMappingEditor";
import { Collapsible } from "@dnnsoftware/dnn-react-common";
import "./style.less";
import { SvgIcons } from "@dnnsoftware/dnn-react-common";
import utils from "../../utils";
import resx from "../../resources";

class RoleMappings extends Component {

    constructor() {
        super();

        this.state = {
            openId: "",
            tableFields: [],
            error: {
                mapping: false
            }
        };
    }
    UNSAFE_componentWillMount() {
        const {props} = this;

        props.dispatch(SettingsActions.getRoleSettings());
        props.dispatch(SettingsActions.getAvailableRoles());
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const {state} = this;

        state.error["mapping"] = (nextProps.mapping === null);
    }

    onValidateMapping(mappingDetail, newDnnRoleName) {
        let originalRoleName = null;
        if (mappingDetail.MappingId) {
            originalRoleName = mappingDetail.MappingId.split("-")[0];
        }
        if (originalRoleName !== newDnnRoleName) {
            // The ItemName of this row has changed. Let's see if that property has already been mapped
            if (this.props.mapping.find(p => p.DnnRoleName === newDnnRoleName) !== undefined) {
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
    onUpdateMapping(mappingDetail) {
        const {props} = this;

        let originalRoleName = mappingDetail.MappingId ? mappingDetail.MappingId.split("|")[0] : null;
        if (originalRoleName !== mappingDetail.DnnRoleName) {
            // The RoleName of this row has changed. Let's see if that property has already been mapped
            if (this.props.mapping.find(p => p.DnnRoleName === mappingDetail.DnnRoleName) !== undefined) {
                utils.utilities.notifyError(resx.get("ErrorMappingDuplicated"));
                return;
            }
        }

        let payload = {
            originalDnnRoleName: originalRoleName,
            mappingDetail: mappingDetail
        };
        props.dispatch(SettingsActions.updateRoleMapping(payload, () => {
            utils.utilities.notify(resx.get("MappingUpdateSuccess"));
            this.collapse();
            props.dispatch(SettingsActions.getRoleSettings());
        }, (error) => {
            const errorMessage = JSON.parse(error.responseText);
            utils.utilities.notifyError(errorMessage.Message);
        }));
    }

    onDeleteMapping(mappingId) {
        const {props} = this;
        utils.utilities.confirm(resx.get("MappingDeletedWarning"), resx.get("Yes"), resx.get("No"), () => {
            let originalRoleName = mappingId.split("|")[0];
            
            let payload = {
                dnnRoleName: originalRoleName
            };
            props.dispatch(SettingsActions.deleteRoleMapping(payload, () => {
                utils.utilities.notify(resx.get("MappingDeleteSuccess"));
                this.collapse();
                props.dispatch(SettingsActions.getRoleSettings());
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
                tableFields.push({ "name": resx.get("DnnRole.Header"), "id": "DnnRole" });
                tableFields.push({ "name": resx.get("AadRole.Header"), "id": "AadRole" });
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

    renderMappings() {
        let i = 0;
        if (this.props.mapping) {
            return this.props.mapping.map((item, index) => {
                let id = "row-" + i++;
                let mappingId = item.DnnRoleName + "|" + item.AadRoleName;
                return (
                    <RoleMappingRow
                        mappingId={mappingId}
                        dnnRoleName={item.DnnRoleName}
                        aadRoleName={item.AadRoleName}
                        index={index}
                        key={"role-" + index}
                        closeOnClick={true}
                        openId={this.state.openId}
                        OpenCollapse={this.toggle.bind(this)}
                        Collapse={this.collapse.bind(this)}
                        onDelete={this.onDeleteMapping.bind(this, mappingId)}
                        id={id}>
                        <RoleMappingEditor
                            availableRoles={this.props.roles}
                            mappingId={mappingId}
                            dnnRoleName={item.DnnRoleName}
                            aadRoleName={item.AadRoleName}
                            Collapse={this.collapse.bind(this)}
                            onUpdate={this.onUpdateMapping.bind(this)}
                            onValidate={this.onValidateMapping.bind(this)}
                            id={id}
                            openId={this.state.openId} />
                    </RoleMappingRow>
                );
            });
        }
    }

    /* eslint-disable react/no-danger */
    render() {
        let opened = (this.state.openId === "add");
        return (
            <div className="dnn-azuread-aad-roleMappingSettings">
                <div className="items">
                    <div className="AddItemRow">
                        <div className="sectionTitle">{resx.get("lblRolesMapping")}</div>
                        <div className={opened ? "AddItemBox-active" : "AddItemBox"} onClick={this.toggle.bind(this, opened ? "" : "add")}>
                            <div className="add-icon" dangerouslySetInnerHTML={{ __html: SvgIcons.AddIcon }}>
                            </div> {resx.get("cmdAddRoleMapping")}
                        </div>
                    </div>
                    <div className="items-grid">
                        {this.renderHeader()}
                        <Collapsible isOpened={opened} style={{width: "100%", overflow: opened ? "visible" : "hidden"}}>
                            <RoleMappingRow
                                dnnRoleName={"-"}
                                aadRoleName={"-"}
                                deletable={false}
                                editable={false}
                                index={"add"}
                                key={"Item-add"}
                                closeOnClick={true}
                                openId={this.state.openId}
                                OpenCollapse={this.toggle.bind(this)}
                                Collapse={this.collapse.bind(this)}
                                onDelete={this.onDeleteMapping.bind(this)}
                                id={"add"}>
                                <RoleMappingEditor
                                    availableRoles={this.props.roles}
                                    Collapse={this.collapse.bind(this)}
                                    onUpdate={this.onUpdateMapping.bind(this)}
                                    onValidate={this.onValidateMapping.bind(this)}
                                    id={"add"}
                                    openId={this.state.openId} />
                            </RoleMappingRow>
                        </Collapsible>
                        {this.renderMappings()}
                    </div>
                </div>
            </div>
        );
    }
}

RoleMappings.propTypes = {
    mapping: PropTypes.array,
    roles: PropTypes.array
};


function mapStateToProps(state) {
    return {
        mapping: state.settings.roleMapping,
        roles: state.settings.roles
    };
}

export default connect(mapStateToProps)(RoleMappings);