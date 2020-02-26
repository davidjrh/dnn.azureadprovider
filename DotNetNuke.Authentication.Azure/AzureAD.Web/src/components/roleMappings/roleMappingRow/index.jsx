import React, { Component } from "react";
import PropTypes from "prop-types";
import { Collapsible, SvgIcons } from "@dnnsoftware/dnn-react-common";
import "./style.less";

class RoleMappingRow extends Component {
    /* eslint-disable react/no-did-mount-set-state */
    componentDidMount() {
        let opened = (this.props.openId !== "" && this.props.id === this.props.openId);
        this.setState({
            opened
        });
    }

    toggle() {
        if ((this.props.openId !== "" && this.props.id === this.props.openId)) {
            this.props.Collapse();
        }
        else {
            this.props.OpenCollapse(this.props.id);
        }
    }

    /* eslint-disable react/no-danger */
    render() {
        const {props} = this;
        let opened = (this.props.openId !== "" && this.props.id === this.props.openId);
        return (
            <div className={"collapsible-component-item" + (opened ? " row-opened" : "")}>
                <div className={"collapsible-item " + !opened} >
                    <div className={"row"}>
                        <div title={props.name} className="role-item item-row-dnnrole">
                            {props.dnnRoleName}</div>
                        <div className="role-item item-row-aadrole">
                            {props.aadRoleName}</div>
                        <div className="role-item item-row-actionButtons">
                            {props.deletable &&
                                <div className={opened ? "delete-icon-hidden" : "delete-icon"} dangerouslySetInnerHTML={{ __html: SvgIcons.TrashIcon }} onClick={props.onDelete.bind(this)}></div>
                            }
                            {props.editable &&
                                <div className={opened ? "edit-icon-active" : "edit-icon"} dangerouslySetInnerHTML={{ __html: SvgIcons.EditIcon }} onClick={this.toggle.bind(this)}></div>
                            }
                        </div>
                    </div>
                </div>
                <Collapsible fixedHeight={205} keepContent={true} isOpened={opened} style={{ float: "left", width: "100%", overflow: "inherit" }}>{opened && props.children}</Collapsible>
            </div>
        );
    }
}

RoleMappingRow.propTypes = {
    mappingId: PropTypes.string,
    dnnRoleName: PropTypes.string,
    aadRoleName: PropTypes.string,
    deletable: PropTypes.bool,
    editable: PropTypes.bool,
    OpenCollapse: PropTypes.func,
    Collapse: PropTypes.func,
    onDelete: PropTypes.func,
    id: PropTypes.string,
    openId: PropTypes.string
};

RoleMappingRow.defaultProps = {
    collapsed: true,
    deletable: true,
    editable: true
};
export default (RoleMappingRow);
