define("AuthModule/userfrmDevRegLoginTypeController", {
    tempLoginMode: "",
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    setTouchId: function(flags) {
        var deviceUtilManager = applicationManager.getDeviceUtilManager();
        var isIphone = deviceUtilManager.isIPhone();
        if (flags.isTouchIdSupported) {
            if (isIphone) this.view.lblTouchId.text = kony.i18n.getLocalizedString("kony.mb.devReg.TouchId");
            else this.view.lblTouchId.text = kony.i18n.getLocalizedString("kony.mb.devReg.Biometric");
            this.view.flxTouchId.isVisible = true;
        } else this.view.flxTouchId.isVisible = false;
        if (flags.defaultAuthMode === "touchid") this.view.lblEnableTouch.text = kony.i18n.getLocalizedString("kony.mb.common.enabled");
        else this.view.lblEnableTouch.text = kony.i18n.getLocalizedString("kony.mb.common.enable");
    },
    setFaceId: function(flags) {
        if (flags.isFaceIdSupported) {
            if (flags.isFaceIdAvailable) {
                this.view.flxFaceId.isVisible = true;
                if (flags.defaultAuthMode === "faceid") this.view.lblEnableFace.text = kony.i18n.getLocalizedString("kony.mb.common.enabled");
                else this.view.lblEnableFace.text = kony.i18n.getLocalizedString("kony.mb.common.enable");
            } else {
                this.view.flxFaceId.isVisible = false;
            }
        } else {
            this.view.flxFaceId.isVisible = false;
        }
    },
    setPinLogin: function(flags) {
        let userMan = applicationManager.getUserPreferencesManager();
        if (userMan.isAppLoginPinSet()) this.view.lblGenerate.text = kony.i18n.getLocalizedString("kony.mb.Generated");
        else this.view.lblGenerate.text = kony.i18n.getLocalizedString("kony.mb.devReg.generate");
    },
    initActions: function(flags) {
        this.view.customHeader.btnRight.onClick = this.skipDefaultLogin;
        if (flags.defaultAuthMode === "touchid") this.view.flxTouchId.onClick = null;
        else this.view.flxTouchId.onClick = this.flxTouchIdNavigation;
        if (flags.defaultAuthMode === "pin") this.view.flxPin.onClick = null;
        else this.view.flxPin.onClick = this.flxPinNavigation;
        if (flags.defaultAuthMode === "faceid") this.view.flxFaceId.onClick = null;
        else this.view.flxFaceId.onClick = this.flxFaceIdNavigation;
    },
    frmPreShow: function() {
        var navManager = applicationManager.getNavigationManager();
        var flags = navManager.getCustomInfo("frmDevRegLoginType");
        this.initActions(flags);
        this.setTouchId(flags);
        this.setFaceId(flags);
        this.setPinLogin(flags);
        this.setSelectedAuthMode(flags);
        if ((flags.popUpMsg !== null) && (flags.popUpMsg !== "")) {
            var scopeObj = this;
            applicationManager.getDataProcessorUtility().showToastMessageSuccess(scopeObj, flags.popUpMsg);
        }
        flags.popUpMsg = null;
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        var navManager = applicationManager.getNavigationManager();
        navManager.setCustomInfo("frmDevRegLoginType", flags);
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    skipDefaultLogin: function() {
        this.tempLoginMode = "password";
        applicationManager.getPresentationUtility().showLoadingScreen();
        var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMode.presentationController.defaultLoginToAccounts();
    },
    setSelectedAuthMode: function(flags) {
        this.tempLoginMode = flags.defaultAuthMode;
        if (flags.defaultAuthMode === "pin") this.imgSelPinOnTouchEnd();
        else if (flags.defaultAuthMode === "touchid") this.imgSelTouchOnTouchEnd();
        else if (flags.defaultAuthMode === "faceid") this.imgSelFaceOnTouchEnd();
        else this.imgSelectUserOnTouchEnd();
    },
    imgSelectUserOnTouchEnd: function() {
        var navManager = applicationManager.getNavigationManager();
        var flags = navManager.getCustomInfo("frmDevRegLoginType");
        flags.defaultAuthMode = "password";
        navManager.setCustomInfo("frmDevRegLoginType", flags);
        this.view.lblEnableTouch.text = kony.i18n.getLocalizedString("kony.mb.common.enable");
        this.view.lblEnableFace.text = kony.i18n.getLocalizedString("kony.mb.common.enable");
        this.view.imgSelectUser.src = "tickmark_green.png";
        this.view.imgSelTouch.src = "chevron.png";
        this.view.imgSelPin.src = "chevron.png";
        this.view.imgSelFace.src = "chevron.png";
        this.view.lblLoginUserNPass.skin = "sknLblda8b08SSP26px";
        this.view.lblTouchId.skin = "sknLbl424242SSP26px";
        this.view.imgPinId.skin = "sknLbl424242SSP26px";
        this.view.lblFaceId.skin = "sknLbl424242SSP26px";
        this.tempLoginMode = "password";
        this.initActions(flags);
    },
    imgSelTouchOnTouchEnd: function() {
        this.view.imgSelectUser.src = "chevron.png";
        this.view.imgSelTouch.src = "tickmark_green.png";
        this.view.imgSelPin.src = "chevron.png";
        this.view.imgSelFace.src = "chevron.png";
        this.view.lblLoginUserNPass.skin = "sknLbl424242SSP26px";
        this.view.lblTouchId.skin = "sknLblda8b08SSP26px";
        this.view.imgPinId.skin = "sknLbl424242SSP26px";
        this.view.lblFaceId.skin = "sknLbl424242SSP26px";
        //this.flxTouchIdNavigation();
    },
    imgSelPinOnTouchEnd: function() {
        this.view.imgSelectUser.src = "chevron.png";
        this.view.imgSelTouch.src = "chevron.png";
        this.view.imgSelPin.src = "tickmark_green.png";
        this.view.imgSelFace.src = "chevron.png";
        this.view.lblLoginUserNPass.skin = "sknLbl424242SSP26px";
        this.view.lblTouchId.skin = "sknLbl424242SSP26px";
        this.view.imgPinId.skin = "sknLblda8b08SSP26px";
        this.view.lblFaceId.skin = "sknLbl424242SSP26px";
        //this.flxPinNavigation();
    },
    imgSelFaceOnTouchEnd: function() {
        this.view.imgSelectUser.src = "chevron.png";
        this.view.imgSelTouch.src = "chevron.png";
        this.view.imgSelPin.src = "chevron.png";
        this.view.imgSelFace.src = "tickmark_green.png";
        //     this.view.lblLoginUserNPass.skin = "sknLbl424242SSP26px";
        //     this.view.lblTouchId.skin = "sknLbl424242SSP26px";
        //     this.view.imgPinId.skin = "sknLbl424242SSP26px";
        //     this.view.lblFaceId.skin = "sknLblda8b08SSP26px";
        //this.flxFaceIdNavigation();
    },
    btnContinueOnClick: function() {
        var navManager = applicationManager.getNavigationManager();
        var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        switch (this.tempLoginMode) {
            case "password":
                var data = {
                    loginMode: this.tempLoginMode
                };
                navManager.setCustomInfo("frmDefaultLogin", data);
                authModule.presentationController.commonFunctionForNavigation("frmDefaultLogin");
                break;
            case "touchid":
                this.flxTouchIdNavigation();
                break;
            case "pin":
                this.flxPinNavigation();
                break;
            case "faceid":
                this.flxFaceIdNavigation();
                break;
            default:
                var data = {
                    loginMode: this.tempLoginMode
                };
                navManager.setCustomInfo("frmDefaultLogin", data);
                authModule.presentationController.commonFunctionForNavigation("frmDefaultLogin");
                break;
        }
    },
    flxPinNavigation: function() {
        //this.imgSelPinOnTouchEnd();
        var navManager = applicationManager.getNavigationManager();
        var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        this.tempLoginMode = "pin";
        var flags = navManager.getCustomInfo("frmDevRegLoginType");
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.flowType = "login";
        if (flags.defaultAuthMode === "pin") this.navigateToConfirmationForm("pin");
        else {
            let userMan = applicationManager.getUserPreferencesManager();
            if (!(userMan.isAppLoginPinSet())) {
                authModule.presentationController.commonFunctionForNavigation("frmDevRegPin");
            } else {
                authModule.presentationController.commonFunctionForNavigation("frmDevRegPinConfirmation");
            }
        }
    },
    flxTouchIdNavigation: function() {
        // this.imgSelTouchOnTouchEnd();
        this.tempLoginMode = "touchid";
        var navManager = applicationManager.getNavigationManager();
        var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        var flags = navManager.getCustomInfo("frmDevRegLoginType");
        if (flags.defaultAuthMode === "touchid") this.navigateToConfirmationForm("touchid");
        else authModule.presentationController.commonFunctionForNavigation("frmDevRegTouchId");
    },
    navigateToConfirmationForm: function(tempMode) {
        var data = {
            loginMode: tempMode
        };
        var navManager = applicationManager.getNavigationManager();
        navManager.setCustomInfo("frmDefaultLogin", data);
        var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authModule.presentationController.commonFunctionForNavigation("frmDefaultLogin");
    },
    flxFaceIdNavigation: function() {
        //  this.imgSelFaceOnTouchEnd();
        this.tempLoginMode = "faceid";
        var navManager = applicationManager.getNavigationManager();
        var flagData = navManager.getCustomInfo("frmDevRegLoginType");
        var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        //var flags = navManager.getCustomInfo("frmDevRegLoginType");
        if (flagData.defaultAuthMode === "faceid") {
            this.navigateToConfirmationForm("faceid");
        } else {
            applicationManager.getPresentationUtility().showLoadingScreen();
            authMode.presentationController.commonFunctionForNavigation("frmDevRegFaceIdSetAsDefault");
        }
    },
    navigationForFaceIdDefault: function() {
        var navManager = applicationManager.getNavigationManager();
        applicationManager.getPresentationUtility().showLoadingScreen();
        var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMode.presentationController.commonFunctionForNavigation("frmDevRegFaceIdSetAsDefault");
    },
});
define("AuthModule/frmDevRegLoginTypeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_ca77482e34f94223856a7804afbaa823: function AS_Button_ca77482e34f94223856a7804afbaa823(eventobject) {
        var self = this;
        return self.btnContinueOnClick.call(this);
    },
    AS_Button_f646377db2444d75b2f23087620046e6: function AS_Button_f646377db2444d75b2f23087620046e6(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    AS_FlexContainer_db346561f9894d04b1d3c25183e6597e: function AS_FlexContainer_db346561f9894d04b1d3c25183e6597e(eventobject) {
        var self = this;
        return self.imgSelectUserOnTouchEnd.call(this);
    },
    AS_Form_ibef816b79794444b35c68fc7e026aec: function AS_Form_ibef816b79794444b35c68fc7e026aec(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_j0a7ccc98cc44ac8a40cde4796eba76d: function AS_Form_j0a7ccc98cc44ac8a40cde4796eba76d(eventobject) {
        var self = this;
        this.frmPreShow();
    },
    AS_Image_e9f89299fd9847a1aa0724611b165426: function AS_Image_e9f89299fd9847a1aa0724611b165426(eventobject, x, y) {
        var self = this;
        return self.imgSelectUserOnTouchEnd.call(this);
    },
    AS_BarButtonItem_f8ba76af6bcd4db5bb12e98f7cfc5e2a: function AS_BarButtonItem_f8ba76af6bcd4db5bb12e98f7cfc5e2a(eventobject) {
        var self = this;
        var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMode.presentationController.defaultLoginToAccounts();
    }
});
define("AuthModule/frmDevRegLoginTypeController", ["AuthModule/userfrmDevRegLoginTypeController", "AuthModule/frmDevRegLoginTypeControllerActions"], function() {
    var controller = require("AuthModule/userfrmDevRegLoginTypeController");
    var controllerActions = ["AuthModule/frmDevRegLoginTypeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
