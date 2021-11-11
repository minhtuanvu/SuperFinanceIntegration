define("AuthModule/userfrmDevRegTouchIdController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    touchIdpreShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
            this.view.lblTouchIdSubTitle.text = kony.i18n.getLocalizedString("kony.mb.preferences.UseDeviceBiometrics");
            this.view.lblTouchId.text = kony.i18n.getLocalizedString("kony.mb.devReg.Biometric");
        } else {
            this.view.flxHeader.isVisible = false;
            this.view.lblTouchIdSubTitle.text = kony.i18n.getLocalizedString("kony.mb.devReg.touchIdMsg");
            this.view.lblTouchId.text = kony.i18n.getLocalizedString("kony.mb.devReg.touchidTitle");
        }
        this.view.btnEnable.onClick = this.goToDefaultLogin;
        this.view.customHeader.flxBack.onClick = function() {
            var navMan = applicationManager.getNavigationManager();
            navMan.goBack();
        };
    },
    goToDefaultLogin: function() {
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.setBiometricCredentials();
        var navManager = applicationManager.getNavigationManager();
        authMod.presentationController.setTouchIdflag(true);
        authMod.presentationController.setDefaultMode("touchid");
        var data = {
            loginMode: "touchid"
        };
        navManager.setCustomInfo("frmDefaultLogin", data);
        authMod.presentationController.commonFunctionForNavigation("frmDefaultLogin");
    },
    skipAction: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMode.presentationController.defaultLoginToAccounts();
    }
});
define("AuthModule/frmDevRegTouchIdControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_e8f44906a7c6487c97cceafdb2b6f468: function AS_Button_e8f44906a7c6487c97cceafdb2b6f468(eventobject) {
        var self = this;
        return self.showPopupRegSuccessful.call(this);
    },
    AS_Button_ed971cf614f646859c8d485cda1371f0: function AS_Button_ed971cf614f646859c8d485cda1371f0(eventobject) {
        var self = this;
        this.skipAction();
    },
    AS_FlexContainer_ba06cfbee77d4a578599947b9150b4f4: function AS_FlexContainer_ba06cfbee77d4a578599947b9150b4f4(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmDevRegLoginType");
    },
    AS_Form_b02ca0e08b2b4aca851d587816bb6fbb: function AS_Form_b02ca0e08b2b4aca851d587816bb6fbb(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_b86356179e7a475f82297139e960f819: function AS_Form_b86356179e7a475f82297139e960f819(eventobject) {
        var self = this;
        this.touchIdpreShow();
    },
    AS_BarButtonItem_e4becf5457e34c0cacf55ea973981824: function AS_BarButtonItem_e4becf5457e34c0cacf55ea973981824(eventobject) {
        var self = this;
        this.skipAction();
    }
});
define("AuthModule/frmDevRegTouchIdController", ["AuthModule/userfrmDevRegTouchIdController", "AuthModule/frmDevRegTouchIdControllerActions"], function() {
    var controller = require("AuthModule/userfrmDevRegTouchIdController");
    var controllerActions = ["AuthModule/frmDevRegTouchIdControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
