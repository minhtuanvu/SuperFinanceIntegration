define("PayAPersonModule/userfrmP2pRecurrenceController", {
    keypadString: '',
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
        this.updateInputBullets();
        this.initActions();
    },
    initActions: function() {
        this.view.flxDummyInput.setEnabled(false);
        this.view.btnContinue.onClick = this.continueOnClick;
        this.view.customHeader.flxBack.onClick = function() {
            var navMan = applicationManager.getNavigationManager();
            navMan.goBack();
        }
        this.view.customHeader.btnRight.onClick = function() {
            var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
            payeeMod.presentationController.cancelCommon();
        }
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    continueOnClick: function() {
        var rec = Number(this.keypadString);
        if (rec === 0) {
            this.showErrorPopup(kony.i18n.getLocalizedString("kony.mb.billPay.validRecurrence"));
        } else {
            var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
            payeeMod.presentationController.transferSetRecurrence(this.keypadString);
        }
    },
    showErrorPopup: function(errorMsg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    },
    updateInputBullets: function() {
        this.view.tbxRecurrenceNumber.text = this.keypadString;
        if (this.keypadString.length !== 0) {
            this.view.btnContinue.setEnabled(true);
            this.view.btnContinue.skin = "sknBtn0095e426pxEnabled";
            this.view.btnContinue.focusSkin = "sknBtn004B9526pxFocus";
        } else {
            this.view.btnContinue.setEnabled(false);
            this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
            this.view.btnContinue.focusSkin = "sknBtnOnBoardingInactive";
        }
        this.view.forceLayout();
    },
    setKeypadChar: function(char) {
        if (this.keypadString.length === 3) return;
        this.keypadString = this.keypadString + char;
        this.updateInputBullets();
    },
    clearKeypadChar: function() {
        if (this.keypadString.length === 1) {
            this.keypadString = '';
            this.updateInputBullets();
        }
        if (this.keypadString.length !== 0) {
            this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
            this.updateInputBullets();
        }
    }
});
define("PayAPersonModule/frmP2pRecurrenceControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_c98fc7edf0ea46cc87d04b46ad58d083: function AS_FlexContainer_c98fc7edf0ea46cc87d04b46ad58d083(eventobject) {
        var self = this;
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        payeeMod.presentationController.commonFunctionForNavigation("frmTransfersDuration");
    },
    AS_Form_e75e88b671714e05a510a89a62bd5d95: function AS_Form_e75e88b671714e05a510a89a62bd5d95(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_cf40a4c7905f460fb29d019f7a83ead1: function AS_Form_cf40a4c7905f460fb29d019f7a83ead1(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_d4c4d7a3eba84cc882b880bab7e4a76a: function AS_BarButtonItem_d4c4d7a3eba84cc882b880bab7e4a76a(eventobject) {
        var self = this;
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        payeeMod.presentationController.cancelCommon();
    },
    AS_Button_fe17aa3f9c134ceaba4f0b4307809089: function AS_Button_fe17aa3f9c134ceaba4f0b4307809089(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_df0d1a1eeb6c4e37af20fa89f580ac79: function AS_Button_df0d1a1eeb6c4e37af20fa89f580ac79(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_g21ccb1e0aa64bada87756e4a335c632: function AS_Button_g21ccb1e0aa64bada87756e4a335c632(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_jcefc73fc44d4a35ba93da5dedcc1fe3: function AS_Button_jcefc73fc44d4a35ba93da5dedcc1fe3(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_f8c6f7940e1a43579e19e675d8a2659f: function AS_Button_f8c6f7940e1a43579e19e675d8a2659f(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_b82af1cd12644430bc32a22636fbecef: function AS_Button_b82af1cd12644430bc32a22636fbecef(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_e07ad692203d457790a74a821af7c955: function AS_Button_e07ad692203d457790a74a821af7c955(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_fe6a7227ee7b4ca9bc2c0f933a0bb351: function AS_Button_fe6a7227ee7b4ca9bc2c0f933a0bb351(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_e2128d45f5e94fcc85e492ac104c70aa: function AS_Button_e2128d45f5e94fcc85e492ac104c70aa(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_h067e162fc9345da99585d343d887fc3: function AS_Button_h067e162fc9345da99585d343d887fc3(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_h06747e2dadc4fdb88cc1a43838554aa: function AS_Image_h06747e2dadc4fdb88cc1a43838554aa(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    }
});
define("PayAPersonModule/frmP2pRecurrenceController", ["PayAPersonModule/userfrmP2pRecurrenceController", "PayAPersonModule/frmP2pRecurrenceControllerActions"], function() {
    var controller = require("PayAPersonModule/userfrmP2pRecurrenceController");
    var controllerActions = ["PayAPersonModule/frmP2pRecurrenceControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
