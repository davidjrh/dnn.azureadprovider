import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./style.less";
import { SingleLineInputWithError, GridSystem, Button, InputGroup, DropdownWithError } from "@dnnsoftware/dnn-react-common";
import SettingsActions from "../../../actions/settings";
import util from "../../../utils";
import resx from "../../../resources";

class RoleMappingEditor extends Component {
    constructor() {
        super();

        this.state = {
            mappingDetail: {
                DnnRoleName: "",
                AadRoleName: ""
            },
            error: {
                dnnRoleName: false,
                aadRoleName: false
            },
            triedToSubmit: false
        };
    }
    
    componentWillMount() {
        const {props} = this;
        const {state} = this;

        state.mappingDetail["MappingId"] = props.mappingId;
        state.mappingDetail["DnnRoleName"] = props.dnnRoleName;
        state.mappingDetail["AadRoleName"] = props.aadRoleName;

        state.error["dnnRoleName"] = (props.dnnRoleName === null);
        state.error["aadRoleName"] = (props.aadRoleName === null);
    }

    /* eslint-disable react/no-did-update-set-state */
    componentDidUpdate(prevProps) {
        const {props, state} = this;
        if ((props !== prevProps) && props.mappingDetail ) {
            if (props.mappingDetail["DnnRoleName"] === undefined || props.mappingDetail["DnnRoleName"] === "") {
                state.error["dnnRoleName"] = true;
            }
            else if (props.mappingDetail["DnnRoleName"] !== "" && props.mappingDetail["DnnRoleName"] !== undefined) {
                state.error["dnnRoleName"] = false;
            }
    
            this.setState({
                mappingDetail: Object.assign({}, props.mappingDetail),
                triedToSubmit: false,
                error: state.error
            });
        }
    }

    onSettingChange(key, event) {
        let {state, props} = this;
        let mappingDetail = Object.assign({}, state.mappingDetail);

        if (key === "DnnRoleName") {
            state.error["dnnRoleName"] = !props.onValidate(mappingDetail, event.value);
        }

        if (mappingDetail[key] === "" && key === "AadRoleName") {
            state.error["aadRoleName"] = true;
        }
        else if (mappingDetail[key] !== "" && key === "AadRoleName") {
            state.error["aadRoleName"] = false;
        }

        if (key === "DnnRoleName") {
            mappingDetail[key] = event.value;
        }
        else {
            mappingDetail[key] = typeof (event) === "object" ? event.target.value : event;
        }

        this.setState({
            mappingDetail: mappingDetail,
            triedToSubmit: false,
            error: state.error
        });

        props.dispatch(SettingsActions.roleMappingClientModified(mappingDetail));
    }

    getRolePropertyOptions() {
        let options = [];
    
        if (this.props.availableRoles !== undefined) {
            options = this.props.availableRoles.map((item) => {
                return { label: item, value: item };
            });
        }
        return options;
    }

    onSave() {
        const {props, state} = this;
        this.setState({
            triedToSubmit: true
        });
        if (state.error.dnnRoleName || state.error.aadRoleName) {
            return;
        }

        props.onUpdate(state.mappingDetail);
        props.Collapse();
    }

    onCancel() {
        const {props} = this;

        if (props.mappingClientModified) {
            util.utilities.confirm(resx.get("SettingsRestoreWarning"), resx.get("Yes"), resx.get("No"), () => {
                props.dispatch(SettingsActions.cancelRoleMappingClientModified());
                props.Collapse();
            });
        }
        else {
            props.Collapse();
        }
    }

    /* eslint-disable react/no-danger */
    render() {
        if (this.state.mappingDetail !== undefined || this.props.id === "add") {
            const columnOne = <div key="column-one" className="left-column">
                <InputGroup>
                    <DropdownWithError
                        enabled={true}
                        withLabel={true}
                        label={resx.get("lblDnnRoleName")}
                        tooltipMessage={resx.get("lblDnnRoleName.Help")}
                        error={this.state.error.dnnRoleName}
                        errorMessage={resx.get("ErrorMappingDuplicated")}
                        options={this.getRolePropertyOptions()}
                        value={this.state.mappingDetail.DnnRoleName}
                        onSelect={this.onSettingChange.bind(this, "DnnRoleName")}
                    />
                </InputGroup>
            </div>;
            const columnTwo = <div key="column-two" className="right-column">
                <InputGroup>
                    <SingleLineInputWithError
                        withLabel={true}
                        label={resx.get("lblAadRoleName")}
                        tooltipMessage={resx.get("lblAadRoleName.Help")}
                        inputStyle={{ margin: "0" }}
                        error={this.state.error.aadRoleName}
                        errorMessage={resx.get("InvalidAadRoleName")}
                        value={this.state.mappingDetail.AadRoleName}
                        onChange={this.onSettingChange.bind(this, "AadRoleName")}
                    />
                </InputGroup>
            </div>;

            return (
                <div className="rolemapping-editor">
                    <GridSystem numberOfColumns={2}>{[columnOne, columnTwo]}</GridSystem>
                    <div className="editor-buttons-box">
                        <Button
                            type="secondary"
                            onClick={this.onCancel.bind(this)}>
                            {resx.get("Cancel")}
                        </Button>
                        <Button
                            type="primary"
                            onClick={this.onSave.bind(this)}>
                            {resx.get("SaveSettings")}
                        </Button>
                    </div>
                </div>
            );
        }
        else return <div />;
    }
}

RoleMappingEditor.propTypes = {
    dispatch: PropTypes.func.isRequired,
    mappingDetail: PropTypes.object,
    mappingId: PropTypes.string,
    dnnRoleName: PropTypes.string,
    aadRoleName: PropTypes.string,
    Collapse: PropTypes.func,
    onUpdate: PropTypes.func,
    id: PropTypes.string,
    mappingClientModified: PropTypes.bool,
    availableRoles: PropTypes.array,
    onValidate: PropTypes.func
};

function mapStateToProps() {
    return {
        // profileMappingDetail: state.siteBehavior.aliasDetail,
        // profileMappingClientModified: state.siteBehavior.siteAliasClientModified
    };
}

export default connect(mapStateToProps)(RoleMappingEditor);