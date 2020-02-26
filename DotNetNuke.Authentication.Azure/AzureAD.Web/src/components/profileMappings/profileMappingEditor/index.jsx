import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./style.less";
import { SingleLineInputWithError, GridSystem, Button, InputGroup, DropdownWithError } from "@dnnsoftware/dnn-react-common";
import SettingsActions from "../../../actions/settings";
import util from "../../../utils";
import resx from "../../../resources";

class ProfileMappingEditor extends Component {
    constructor() {
        super();

        this.state = {
            profileMappingDetail: {
                DnnProfilePropertyName: "",
                AadClaimName: ""
            },
            error: {
                dnnProfilePropertyName: false,
                aadClaimName: false
            },
            triedToSubmit: false
        };
    }
    
    componentWillMount() {
        const {props} = this;
        const {state} = this;

        state.profileMappingDetail["ProfileMappingId"] = props.profileMappingId;
        state.profileMappingDetail["DnnProfilePropertyName"] = props.dnnProfilePropertyName;
        state.profileMappingDetail["AadClaimName"] = props.aadClaimName;

        state.error["dnnProfilePropertyName"] = (props.dnnProfilePropertyName === null);
        state.error["aadClaimName"] = (props.aadClaimName === null);
    }

    /* eslint-disable react/no-did-update-set-state */
    componentDidUpdate(prevProps) {
        const {props, state} = this;
        if ((props !== prevProps) && props.profileMappingDetail ) {
            if (props.profileMappingDetail["DnnProfilePropertyName"] === undefined || props.profileMappingDetail["DnnProfilePropertyName"] === "") {
                state.error["dnnProfilePropertyName"] = true;
            }
            else if (props.profileMappingDetail["DnnProfilePropertyName"] !== "" && props.profileMappingDetail["DnnProfilePropertyName"] !== undefined) {
                state.error["dnnProfilePropertyName"] = false;
            }
    
            this.setState({
                profileMappingDetail: Object.assign({}, props.profileMappingDetail),
                triedToSubmit: false,
                error: state.error
            });
        }
    }

    onSettingChange(key, event) {
        let {state, props} = this;
        let profileMappingDetail = Object.assign({}, state.profileMappingDetail);

        if (key === "DnnProfilePropertyName") {
            state.error["dnnProfilePropertyName"] = !props.onValidate(profileMappingDetail, event.value);
        }

        if (profileMappingDetail[key] === "" && key === "AadClaimName") {
            state.error["aadClaimName"] = true;
        }
        else if (profileMappingDetail[key] !== "" && key === "AadClaimName") {
            state.error["aadClaimName"] = false;
        }

        if (key === "DnnProfilePropertyName") {
            profileMappingDetail[key] = event.value;
        }
        else {
            profileMappingDetail[key] = typeof (event) === "object" ? event.target.value : event;
        }

        this.setState({
            profileMappingDetail: profileMappingDetail,
            triedToSubmit: false,
            error: state.error
        });

        props.dispatch(SettingsActions.profileMappingClientModified(profileMappingDetail));
    }

    getProfilePropertyOptions() {
        let options = [];
    
        if (this.props.availableProperties !== undefined) {
            options = this.props.availableProperties.map((item) => {
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
        if (state.error.dnnProfilePropertyName || state.error.aadClaimName) {
            return;
        }

        props.onUpdate(state.profileMappingDetail);
        props.Collapse();
    }

    onCancel() {
        const {props} = this;

        if (props.profileMappingClientModified) {
            util.utilities.confirm(resx.get("SettingsRestoreWarning"), resx.get("Yes"), resx.get("No"), () => {
                props.dispatch(SettingsActions.cancelProfileMappingClientModified());
                props.Collapse();
            });
        }
        else {
            props.Collapse();
        }
    }

    /* eslint-disable react/no-danger */
    render() {
        if (this.state.profileMappingDetail !== undefined || this.props.id === "add") {
            const columnOne = <div key="column-one" className="left-column">
                <InputGroup>
                    <DropdownWithError
                        withLabel={true}
                        label={resx.get("lblDnnProfilePropertyName")}
                        tooltipMessage={resx.get("lblDnnProfilePropertyName.Help")}
                        error={this.state.error.dnnProfilePropertyName}
                        errorMessage={resx.get("ErrorProfileMappingDuplicated")}
                        options={this.getProfilePropertyOptions()}
                        value={this.state.profileMappingDetail.DnnProfilePropertyName}
                        onSelect={this.onSettingChange.bind(this, "DnnProfilePropertyName")}
                    />
                </InputGroup>
            </div>;
            const columnTwo = <div key="column-two" className="right-column">
                <InputGroup>
                    <SingleLineInputWithError
                        withLabel={true}
                        label={resx.get("lblAadClaimName")}
                        tooltipMessage={resx.get("lblAadClaimName.Help")}
                        inputStyle={{ margin: "0" }}
                        error={this.state.error.aadClaimName}
                        errorMessage={resx.get("InvalidAadClaimName")}
                        value={this.state.profileMappingDetail.AadClaimName}
                        onChange={this.onSettingChange.bind(this, "AadClaimName")}
                    />
                </InputGroup>
            </div>;

            return (
                <div className="profilemapping-editor">
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

ProfileMappingEditor.propTypes = {
    dispatch: PropTypes.func.isRequired,
    profileMappingDetail: PropTypes.object,
    profileMappingId: PropTypes.string,
    dnnProfilePropertyName: PropTypes.string,
    aadClaimName: PropTypes.string,
    Collapse: PropTypes.func,
    onUpdate: PropTypes.func,
    id: PropTypes.string,
    profileMappingClientModified: PropTypes.bool,
    availableProperties: PropTypes.array,
    onValidate: PropTypes.func
};

function mapStateToProps() {
    return {
        // profileMappingDetail: state.siteBehavior.aliasDetail,
        // profileMappingClientModified: state.siteBehavior.siteAliasClientModified
    };
}

export default connect(mapStateToProps)(ProfileMappingEditor);