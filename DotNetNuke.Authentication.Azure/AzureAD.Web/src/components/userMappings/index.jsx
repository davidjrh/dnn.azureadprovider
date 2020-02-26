import React, {Component} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SettingsActions from "../../actions/settings";
import UserMappingRow from "./userMappingRow";
import UserMappingEditor from "./userMappingEditor";
import "./style.less";
import utils from "../../utils";
import resx from "../../resources";

class UserMappings extends Component {

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

        props.dispatch(SettingsActions.getUserMappingSettings());
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const {state} = this;

        state.error["mapping"] = (nextProps.mapping === null);
    }

    onUpdateMapping(mappingDetail) {
        const {props} = this;

        let payload = {
            DnnPropertyName: mappingDetail.DnnPropertyName,
            AadClaimName: mappingDetail.AadClaimName
        };
        props.dispatch(SettingsActions.updateUserMapping(payload, () => {
            utils.utilities.notify(resx.get("MappingUpdateSuccess"));
            this.collapse();
            props.dispatch(SettingsActions.getUserMappingSettings());
        }, (error) => {
            const errorMessage = JSON.parse(error.responseText);
            utils.utilities.notifyError(errorMessage.Message);
        }));
    }

    onDeleteMapping(mappingId) {
        const {props} = this;
        utils.utilities.confirm(resx.get("MappingDeletedWarning"), resx.get("Yes"), resx.get("No"), () => {
            let originalUserMappingName = mappingId.split("-")[0];
            
            let payload = {
                dnnMappingName: originalUserMappingName
            };
            props.dispatch(SettingsActions.deleteUserMapping(payload, () => {
                utils.utilities.notify(resx.get("MappingDeleteSuccess"));
                this.collapse();
                props.dispatch(SettingsActions.getUserMappingSettings());
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
                tableFields.push({ "name": resx.get("DnnProperty.Header"), "id": "DnnProperty" });
                tableFields.push({ "name": resx.get("AadProperty.Header"), "id": "AadProperty" });
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
                let mappingId = item.DnnPropertyName + "-" + item.AadClaimName;
                return (
                    <UserMappingRow
                        mappingId={mappingId}
                        dnnPropertyName={item.DnnPropertyName}
                        aadClaimName={item.AadClaimName}
                        index={index}
                        key={"role-" + index}
                        closeOnClick={true}
                        openId={this.state.openId}
                        OpenCollapse={this.toggle.bind(this)}
                        Collapse={this.collapse.bind(this)}
                        onDelete={this.onDeleteMapping.bind(this, mappingId)}
                        id={id}>
                        <UserMappingEditor
                            mappingId={mappingId}
                            dnnPropertyName={item.DnnPropertyName}
                            aadClaimName={item.AadClaimName}
                            Collapse={this.collapse.bind(this)}
                            onUpdate={this.onUpdateMapping.bind(this)}
                            id={id}
                            openId={this.state.openId} />
                    </UserMappingRow>
                );
            });
        }
    }

    /* eslint-disable react/no-danger */
    render() {
        return (
            <div className="dnn-azuread-aad-userMappingSettings">
                <div className="items">
                    <div className="AddItemRow">
                        <div className="sectionTitle">{resx.get("lblUsersMapping")}</div>
                    </div>
                    <div className="items-grid">
                        {this.renderHeader()}
                        {this.renderMappings()}
                    </div>
                </div>
            </div>
        );
    }
}

UserMappings.propTypes = {
    mapping: PropTypes.array
};


function mapStateToProps(state) {
    return {
        mapping: state.settings.userMapping
    };
}

export default connect(mapStateToProps)(UserMappings);