import React, {Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { GridCell, Switch, SingleLineInputWithError, Button, RadioButtons, Label, FileUpload } from "@dnnsoftware/dnn-react-common";
import SettingsActions from "../../actions/settings";
import resx from "../../resources";
import utils from "../../utils";
import "./generalSettings.less";

class GeneralSettings extends Component {

    constructor() {
        super();

        this.state = {
            certUploadMode: false,
            error: {
                appId: false,
                appSecret: false,
                tenantId: false,
                redirectUri: false,
            }
        };
    }

    UNSAFE_componentWillMount() {
        const {props} = this;

        props.dispatch(SettingsActions.getSettings());
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const {state} = this;

        state.error["appId"] = (nextProps.apiKey === "");
        state.error["appSecret"] = (nextProps.apiSecret === "");
        state.error["tenantId"] = (nextProps.tenantId === "");
        state.error["redirectUri"] = (nextProps.redirectUri !== "" && !this.isValidAzureAdUrl(nextProps.redirectUri));
    }

    isValidAzureAdUrl(string) {
        let url;

        try {
            url = new URL(string);
        } catch (err) {
            return false;
        }

        return url.protocol === "https:" || url.host === "localhost";
    }

    onSettingChange(key, event) {
        let {props} = this;

        console.log("event: " + event);
        console.log("event.value: " + event.value);

        props.dispatch(SettingsActions.settingsClientModified({
            enabled: (key === "AADProviderEnabled") ? !props.enabled : props.enabled,
            useGlobalSettings: (key === "UseGlobalSettings") ? !props.useGlobalSettings : props.useGlobalSettings,
            autoRedirect: (key === "AutoRedirect") ? !props.autoRedirect : props.autoRedirect,
            autoAuthorize: (key === "AutoAuthorize") ? !props.autoAuthorize : props.autoAuthorize,
            apiKey: (key === "AppId") ? event.target.value : props.apiKey,
            apiSecret: (key === "AppSecret") ? event.target.value : props.apiSecret,
            redirectUri: (key === "RedirectUri") ? event.target.value: props.redirectUri,
            onErrorUri: (key === "OnErrorUri") ? event.target.value: props.onErrorUri,
            tenantId: (key === "TenantId") ? event.target.value : props.tenantId,
            authenticationMode: (key === "AuthenticationMode") ? event : props.authenticationMode,
            certificateThumbprint: (key === "CertificateThumbprint") ? event.target.value : props.certificateThumbprint,
            certificateFile: (key === "CertificateFile") ? event.target.value : props.certificateFile,
            certificatePassword: (key === "CertificatePassword") ? event.target.value : props.certificatePassword,
            validationCode: (key === "ValidationCode") ? event.target.value : props.validationCode
        }));
    }

    onClickCancel() {
        utils.utilities.closePersonaBar();
    }

    onClickSave() {
        event.preventDefault();
        let {props} = this;

        props.dispatch(SettingsActions.updateGeneralSettings({
            enabled: props.enabled,
            useGlobalSettings: props.useGlobalSettings,            
            autoRedirect: props.autoRedirect,
            autoAuthorize: props.autoAuthorize,
            apiKey: props.apiKey,
            apiSecret: props.apiSecret,
            redirectUri: props.redirectUri,
            onErrorUri: props.onErrorUri,
            tenantId: props.tenantId,
            authenticationMode: props.authenticationMode,
            certificateThumbprint: props.certificateThumbprint,
            certificateFile: props.certificateFile,
            certificatePassword: props.certificatePassword,
            validationCode: props.validationCode
        }, () => {
            utils.utilities.notify(resx.get("SettingsUpdateSuccess"));
            this.setState({
                clientModified: false
            });            
        }, () => {
            utils.utilities.notifyError(resx.get("SettingsError"));
        }));
    }

    switchCertUploadMode() {
        this.setState({certUploadMode: !this.state.certUploadMode});
    }

    render() {
        return (
            <div className="dnn-azuread-generalSettings">
                <GridCell columnSize={50}>
                    <p className="panel-description">{resx.get("lblTabDescription")}</p>
                    <Switch label={resx.get("lblEnabled")}
                        onText=""
                        offText=""
                        value={this.props.enabled}
                        tooltipMessage={resx.get("lblEnabled.Help")}
                        onChange={this.onSettingChange.bind(this, "AADProviderEnabled")} />
                    <Switch label={resx.get("lblAutoRedirect")}
                        onText=""
                        offText=""
                        tooltipMessage={resx.get("lblAutoRedirect.Help")}
                        value={this.props.autoRedirect}
                        onChange={this.onSettingChange.bind(this, "AutoRedirect")} />
                </GridCell>
                <GridCell columnSize={50}>
                    <div className="logo"></div>
                    <Switch label={resx.get("lblUseGlobalSettings")}
                        onText=""
                        offText=""
                        value={this.props.useGlobalSettings}
                        tooltipMessage={resx.get("lblUseGlobalSettings.Help")}
                        onChange={this.onSettingChange.bind(this, "UseGlobalSettings")} />
                    <Switch label={resx.get("lblAutoAuthorize")}
                        onText=""
                        offText=""
                        tooltipMessage={resx.get("lblAutoAuthorize.Help")}
                        value={this.props.autoAuthorize}
                        onChange={this.onSettingChange.bind(this, "AutoAuthorize")} />                        
                </GridCell>
                <GridCell columnSize={100} className="directory-section">
                    <GridCell columnSize={50}>
                        <h1>{resx.get("lblDirectory")}</h1>
                        <div className="editor-row">
                            <SingleLineInputWithError
                                withLabel={true}
                                label={resx.get("lblTenantId")}
                                enabled={true}
                                error={this.state.error.tenantId}
                                errorMessage={resx.get("lblTenantId.Error")}
                                tooltipMessage={resx.get("lblTenantId.Help")}
                                value={this.props.tenantId}
                                onChange={this.onSettingChange.bind(this, "TenantId")} />
                        </div>
                    </GridCell>
                </GridCell>
                <GridCell columnSize={100}>
                    <h1>{resx.get("lblProviderCredentials")}</h1>
                    <GridCell columnSize={50}>
                        <div className="editor-row">
                            <SingleLineInputWithError
                                withLabel={true}
                                label={resx.get("lblAppId")}
                                enabled={true}
                                error={this.state.error.appId}
                                errorMessage={resx.get("lblAppId.Error")}
                                tooltipMessage={resx.get("lblAppId.Help")}
                                value={this.props.apiKey}
                                onChange={this.onSettingChange.bind(this, "AppId")} />
                        </div>
                    </GridCell>
                    <GridCell columnSize={50}>
                        <div className="editor-row">
                            <SingleLineInputWithError
                                withLabel={true}
                                label={resx.get("lblRedirectUri")}
                                enabled={true}
                                error={this.state.error.redirectUri}
                                errorMessage={resx.get("lblRedirectUri.Error")}
                                tooltipMessage={resx.get("lblRedirectUri.Help")}
                                value={this.props.redirectUri}
                                autocomplete="off"
                                onChange={this.onSettingChange.bind(this, "RedirectUri")} />
                        </div>
                    </GridCell>
                </GridCell>
                <GridCell columnSize={100}>
                    <GridCell columnSize={25}>
                        <Label
                            label={resx.get("Authentication Mode")}
                            tooltipMessage={"This is a tooltip message"}
                            style={{ width: "145px" }}
                            tooltipStyle={{ float: "right" }}
                        />
                    </GridCell>
                    <GridCell columnSize={75}>
                        <RadioButtons
                            value={this.props.authenticationMode}
                            options={[
                                { label: resx.get("lblAuthenticationModeSecret"), value: "secret" },
                                { label: resx.get("lblAuthenticationModeCertificate"), value: "certificate" }
                            ]}
                            onChange={this.onSettingChange.bind(this, "AuthenticationMode")}
                        />
                    </GridCell>
                </GridCell>
                <GridCell columnSize={100}>
                    <GridCell columnSize={50}>
                        <div className="editor-row">
                            {this.props.authenticationMode === "secret" ? <SingleLineInputWithError
                                withLabel={true}
                                label={resx.get("lblAppSecret")}
                                type="password"
                                error={this.state.error.appSecret}
                                errorMessage={resx.get("lblAppSecret.Error")}
                                tooltipMessage={resx.get("lblAppSecret.Help")}
                                value={this.props.apiSecret}
                                autocomplete="off"
                                onChange={this.onSettingChange.bind(this, "AppSecret")}
                            /> : <SingleLineInputWithError
                                withLabel={true}
                                label={resx.get("lblCertificateThumbprint")}
                                value={this.props.certificateThumbprint}
                                enabled={false}
                                autocomplete="off"
                                onChange={this.onSettingChange.bind(this, "CertificateThumbprint")}
                            />}
                            {this.props.authenticationMode === "certificate" && !this.state.certUploadMode && <Button onClick={this.switchCertUploadMode.bind(this)}>Upload certificate...</Button>}
                        </div>
                    </GridCell>
                    <GridCell columnSize={50}>
                        <div className="editor-row">
                            <SingleLineInputWithError
                                withLabel={true}
                                label={resx.get("lblOnErrorUri")}
                                enabled={true}
                                tooltipMessage={resx.get("lblOnErrorUri.Help")}
                                errorMessage=""
                                value={this.props.onErrorUri}
                                onChange={this.onSettingChange.bind(this, "OnErrorUri")}
                            />
                        </div>
                    </GridCell>
                </GridCell>
                <GridCell columnSize={100}>
                    <GridCell columnSize={50}>
                        {this.props.authenticationMode === "certificate" && this.state.certUploadMode && <div className="editor-row">
                            <Label 
                                label={resx.get("lblCertificateFile")} 
                                tooltipMessage={"This is a tooltip message"}
                                style={{ width: "118px" }}
                                tooltipStyle={{ float: "right" }}/>
                            <FileUpload
                                utils={utils}
                                portalId={0}
                                selectedFile={null}
                                folderName={"Portals/0"}
                                validationCode={this.props.validationCode}
                                onSelectFile={this.onSettingChange.bind(this, "ValidationCode") }
                                fileFormats={["image/png", "image/jpg", "image/jpeg", "image/bmp", "image/gif", "image/jpeg", "image/svg+xml"]}
                                browseButtonText={"Browse"}
                                uploadButtonText={"Upload"}
                                linkButtonText={"Link"}
                                defaultText={"Drag"}
                                onDragOverText={"DragOver"}
                                uploadFailedText={"Upload failed"}
                                wrongFormatText={"Wrong format"}
                                imageText={"Default image title"}
                                linkInputTitleText={"Link input title"}
                                linkInputPlaceholderText={"Link Input place holder"}
                                linkInputActionText={"Link Input Action Text"}
                                uploadCompleteText={"Upload complete"}
                                uploadingText={"Uploading..."}
                                uploadDefaultText={"Upload"}
                                browseActionText={"Browse action"}
                                notSpecifiedText={"Not specified"}
                                searchFilesPlaceHolderText={"Search files"}
                                searchFoldersPlaceHolderText={"Search folders"}
                                fileText={"File"}
                                folderText={"Folder"}                            
                            />
                            <SingleLineInputWithError
                                withLabel={true}
                                label={resx.get("lblCertificatePassword")}
                                value={this.props.certificatePassword}
                                type="password"
                                autocomplete="off"
                                tooltipMessage={"This is a tooltip message"}
                                onChange={this.onSettingChange.bind(this, "CertificatePassword")}
                            />
                            <Button>
                                {resx.get("lblCertificateUpload")}
                            </Button>
                            <Button
                                onClick={this.switchCertUploadMode.bind(this)} >
                                {resx.get("lblCertificateCancel")}
                            </Button>
                        </div>}
                    </GridCell>
                </GridCell>
                <GridCell columnSize={100}>
                    <div className="buttons-box">
                        <Button
                            disabled={false}
                            type="secondary"
                            onClick={this.onClickCancel.bind(this)}
                        >
                            {resx.get("Cancel")}
                        </Button>
                        <Button
                            disabled={this.state.error.appId || this.state.error.appSecret || this.state.error.tenantId || this.state.error.redirectUri}
                            type="primary"
                            onClick={this.onClickSave.bind(this)}
                        >
                            {resx.get("SaveSettings")}
                        </Button>
                    </div>
                </GridCell>
            </div>
        );
    }
}

GeneralSettings.propTypes = {
    dispatch: PropTypes.func.isRequired,
    enabled: PropTypes.bool,
    useGlobalSettings: PropTypes.bool,    
    autoRedirect: PropTypes.bool,
    autoAuthorize: PropTypes.bool,
    apiKey: PropTypes.string,
    apiSecret: PropTypes.string,
    redirectUri: PropTypes.string,    
    onErrorUri: PropTypes.string,    
    tenantId: PropTypes.string,
    authenticationMode: PropTypes.string,
    certificateThumbprint: PropTypes.string,
    certificateFile: PropTypes.string,
    certificatePassword: PropTypes.string,
    validationCode: PropTypes.string
};


function mapStateToProps(state) {
    return {
        enabled: state.settings.enabled,
        useGlobalSettings: state.settings.useGlobalSettings,        
        autoRedirect: state.settings.autoRedirect,
        autoAuthorize: state.settings.autoAuthorize,
        apiKey: state.settings.apiKey,
        apiSecret: state.settings.apiSecret,
        redirectUri: state.settings.redirectUri,
        onErrorUri: state.settings.onErrorUri,
        tenantId: state.settings.tenantId,
        authenticationMode: state.settings.authenticationMode,
        certificateThumbprint: state.settings.certificateThumbprint,
        certificateFile: state.settings.certificateFile,
        certificatePassword: state.settings.certificatePassword,
        validationCode: state.settings.validationCode
    };
}

export default connect(mapStateToProps)(GeneralSettings);