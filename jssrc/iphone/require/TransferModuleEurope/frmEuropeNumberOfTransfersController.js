define("TransferModuleEurope/userfrmEuropeNumberOfTransfersController", {
    keypadString: '',
    init: function() {
        var scope = this;
        var currentFormObject = kony.application.getCurrentForm();
        var currentForm = currentFormObject.id;
        applicationManager.getPresentationFormUtility().initCommonActions(this, "CALLBACK", currentForm, scope.navigateCustomBack);
    },
    navigateCustomBack: function() {
        var transMod = applicationManager.getModulesPresentationController("TransferModule");
        transMod.commonFunctionForgoBack();
    },
    preShow: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
        this.keypadString = '';
        var transMod = applicationManager.getModulesPresentationController("TransferModule");
        var recur = transMod.getTransObject();
        if (recur.numberOfRecurrences !== null && recur.numberOfRecurrences !== "" && recur.numberOfRecurrences !== undefined) {
            this.keypadString = recur.numberOfRecurrences;
        }
        this.updateInputBullets();
        this.initActions();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    initActions: function() {
        var scope = this;
        this.view.btnContinue.onClick = this.clickOnContinue;
        this.view.customHeader.flxBack.onClick = this.navigateCustomBack;
        this.view.customHeader.btnRight.onClick = function() {
            scope.cancelOnClick();
        }
        this.view.flxClearAmount.onTouchEnd = this.clearKeypad;
    },
    updateInputBullets: function() {
        if (this.keypadString === "") {
            this.view.lblNumber.text = "0";
            this.view.lblNumber.skin = "skinlblDarkened";
            this.view.flxClearAmount.isVisible = false;
            this.view.btnContinue.setEnabled(false);
            this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
            this.view.btnContinue.focusSkin = "sknBtnOnBoardingInactive";
        } else {
            this.view.lblNumber.text = this.keypadString;
            this.view.lblNumber.skin = "sknLbl4a4a4aSSP42px";
            if (parseInt(this.keypadString) !== 0) {
                this.view.btnContinue.setEnabled(true);
                this.view.flxClearAmount.isVisible = true;
                this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
                this.view.btnContinue.focusSkin = "sknBtn0095e4RoundedffffffSSP26px";
            } else {
                this.view.btnContinue.setEnabled(false);
                this.view.flxClearAmount.isVisible = true;
                this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
                this.view.btnContinue.focusSkin = "sknBtnOnBoardingInactive";
            }
        }
        this.view.forceLayout();
    },
    setKeypadChar: function(char) {
        if (this.keypadString.length < 3) {
            this.keypadString = this.keypadString + char;
            this.updateInputBullets();
        }
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
    },
    clickOnContinue: function() {
        var rec = Number(this.keypadString);
        var transMod = applicationManager.getModulesPresentationController("TransferModule");
        transMod.setRecurrence(this.keypadString);
    },
    cancelOnClick: function() {
        var transMod = applicationManager.getModulesPresentationController("TransferModule");
        transMod.cancelCommon();
    },
    clearKeypad: function() {
        this.keypadString = '';
        this.updateInputBullets();
    },
});
define("TransferModuleEurope/frmEuropeNumberOfTransfersControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_a1a2c335eebc4b38b3e6ada3bf0b9914: function AS_Form_a1a2c335eebc4b38b3e6ada3bf0b9914(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_gdca5c2d92f0483c9d8e6c62f70e37ee: function AS_Form_gdca5c2d92f0483c9d8e6c62f70e37ee(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_j567c0cfab08454f877e0e0bfd4a6a5a: function AS_BarButtonItem_j567c0cfab08454f877e0e0bfd4a6a5a(eventobject) {
        var self = this;
        this.navigateCustomBack();
    },
    AS_BarButtonItem_ifbf9cb7f68b4a00bddd21c0328798a9: function AS_BarButtonItem_ifbf9cb7f68b4a00bddd21c0328798a9(eventobject) {
        var self = this;
        this.cancelOnClick();
    },
    AS_Button_i748932940ac427ebf15c1efe1a0cc6d: function AS_Button_i748932940ac427ebf15c1efe1a0cc6d(eventobject) {
        var self = this;
        this.setKeypadChar(8)
    },
    AS_Button_hbb4e7b09c3e417daf335fff96ab396a: function AS_Button_hbb4e7b09c3e417daf335fff96ab396a(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_j9d17d6938864c67b6c5bbdc35ebc3f0: function AS_Button_j9d17d6938864c67b6c5bbdc35ebc3f0(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_j2fbeb4e0c554795b8c33e890c4ddabe: function AS_Button_j2fbeb4e0c554795b8c33e890c4ddabe(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_b5eaf227ac134e08a4518d873ef5c784: function AS_Button_b5eaf227ac134e08a4518d873ef5c784(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_e6a17c36b50e44648df0f5f88a39ebfe: function AS_Button_e6a17c36b50e44648df0f5f88a39ebfe(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_e048042ffa3b45c296c823a3eaddfaf8: function AS_Button_e048042ffa3b45c296c823a3eaddfaf8(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_d35fcbe608624cb59d4f3bc4b5823316: function AS_Button_d35fcbe608624cb59d4f3bc4b5823316(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_je77dd521ad5419394a4c7c04fe14b89: function AS_Button_je77dd521ad5419394a4c7c04fe14b89(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_d062be6e4ae0456ea5c040934a879f26: function AS_Button_d062be6e4ae0456ea5c040934a879f26(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_f684fc48b119486c9266475582968363: function AS_Image_f684fc48b119486c9266475582968363(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    }
});
define("TransferModuleEurope/frmEuropeNumberOfTransfersController", ["TransferModuleEurope/userfrmEuropeNumberOfTransfersController", "TransferModuleEurope/frmEuropeNumberOfTransfersControllerActions"], function() {
    var controller = require("TransferModuleEurope/userfrmEuropeNumberOfTransfersController");
    var controllerActions = ["TransferModuleEurope/frmEuropeNumberOfTransfersControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
