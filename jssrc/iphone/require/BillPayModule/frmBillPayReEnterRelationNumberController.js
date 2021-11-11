define("BillPayModule/userfrmBillPayReEnterRelationNumberController", {
    keypadString: '',
    timerCounter: 0,
    /*onNavigate: function(obj) {
        if (obj === undefined) {
            return;
        }
        if (obj === "addManually") {
        }
    },*/
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    frmPreshow: function() {
        var scope = this;
        this.setDataToForm();
        this.view.btnContinue.onClick = function() {
            if (scope.isRelationNoMatched()) {
                var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
                billPayMod.presentationController.navToPhoneNumber(scope.keypadString, "frmBillPayPhoneNumber");
            } else {
                scope.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.missmatchRelationNumber"));
                scope.keypadString = '';
                scope.updateInputBullets("flxInputRelationNumber");
                scope.incompleteCodeView();
            }
        };
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        this.view.customHeader.btnRight.onClick = this.btnRightOnClick;
        this.renderTitleBar();
        this.updateInputBullets("flxInputRelationNumber");
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    bindGenericError: function(msg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
    },
    btnRightOnClick: function() {
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayMod.presentationController.navToFormBasedOnEntryPoint("createBillPayPayee");
    },
    renderTitleBar: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === 'iPhone') {
            this.view.flxHeader.setVisibility(false);
        } else {
            this.view.flxHeader.setVisibility(true);
        }
    },
    //     btnContinueOnClick: function() {
    //     },
    flxBackOnClick: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    },
    setKeypadChar: function(char) {
        this.keypadString = this.keypadString + char;
        if (this.keypadString.length >= 1 && this.keypadString.length <= 18) {
            this.enterCodePostAction();
        } else if (this.keypadString.length < 1) {
            this.incompleteCodeView();
        } else if (this.keypadString.length > 18) {
            this.keypadString = this.keypadString.slice(0, 18);
            return;
        }
        this.updateInputBullets("flxInputRelationNumber");
    },
    clearKeypadChar: function() {
        if (this.keypadString.length === 1) {
            this.incompleteCodeView();
            this.keypadString = '';
            this.updateInputBullets("flxInputRelationNumber");
        }
        if (this.keypadString.length !== 0) {
            this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
            if (this.keypadString.length < 1) {
                this.incompleteCodeView();
            }
            this.updateInputBullets("flxInputRelationNumber");
        }
    },
    updateInputBullets: function(inputFlx) {
        if (this.keypadString === '') {
            this.view.lblAccountNumber.text = '|';
        } else {
            this.view.lblAccountNumber.text = this.keypadString;
        }
    },
    enterCodePostAction: function() {
        this.view.btnContinue.setEnabled(true);
        this.view.btnContinue.skin = "sknBtn0095e426pxEnabled";
    },
    incompleteCodeView: function() {
        this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
        this.view.btnContinue.setEnabled(false);
    },
    isRelationNoMatched: function() {
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var accNum = billPayMod.presentationController.getBillPayAccountNumber();
        if (accNum === this.keypadString) {
            return true;
        } else {
            return false;
        }
    },
    setDataToForm: function() {
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var reenter = billPayMod.presentationController.getBillPayReEnterAccountNumber();
        if (reenter) {
            this.keypadString = reenter;
            this.enterCodePostAction();
        } else {
            this.keypadString = "";
            this.incompleteCodeView();
        }
    }
});
define("BillPayModule/frmBillPayReEnterRelationNumberControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_d54b13b8c0e941018a70d58d2a2e6512: function AS_Form_d54b13b8c0e941018a70d58d2a2e6512(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_d31f55894cbb487aa16c5741aa8312f6: function AS_Form_d31f55894cbb487aa16c5741aa8312f6(eventobject) {
        var self = this;
        return self.frmPreshow.call(this);
    },
    AS_BarButtonItem_id9ca1faed054878b6246e067cc9a7af: function AS_BarButtonItem_id9ca1faed054878b6246e067cc9a7af(eventobject) {
        var self = this;
        this.btnRightOnClick();
    },
    AS_Button_fcf63c9a1dfe40f4bf92028d80dd0b13: function AS_Button_fcf63c9a1dfe40f4bf92028d80dd0b13(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_a6187ba5b94041beac5f10079909ff8c: function AS_Button_a6187ba5b94041beac5f10079909ff8c(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_f8b6b1770c6f4c7d8a7103092cb5e15f: function AS_Button_f8b6b1770c6f4c7d8a7103092cb5e15f(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_b7f0bbf0ab81412c83bfcb3d44eb9404: function AS_Button_b7f0bbf0ab81412c83bfcb3d44eb9404(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_ea4c6ec394d64c67a7bad2e9a1e7f775: function AS_Button_ea4c6ec394d64c67a7bad2e9a1e7f775(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_a75a938d7e96437abe585bcfc87cc564: function AS_Button_a75a938d7e96437abe585bcfc87cc564(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_d0b9e4dcf9864d54bd690c41a29f6fef: function AS_Button_d0b9e4dcf9864d54bd690c41a29f6fef(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_gaefd142a9474929b3bcb3c8cf2b7733: function AS_Button_gaefd142a9474929b3bcb3c8cf2b7733(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_g9a4781dfb4f41f88552086a1ee6d652: function AS_Button_g9a4781dfb4f41f88552086a1ee6d652(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_fbf6d350a0b84f80bc7f1d7c0ad179ab: function AS_Button_fbf6d350a0b84f80bc7f1d7c0ad179ab(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_ifac66d25f4f4966a3958ed711670048: function AS_Image_ifac66d25f4f4966a3958ed711670048(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    }
});
define("BillPayModule/frmBillPayReEnterRelationNumberController", ["BillPayModule/userfrmBillPayReEnterRelationNumberController", "BillPayModule/frmBillPayReEnterRelationNumberControllerActions"], function() {
    var controller = require("BillPayModule/userfrmBillPayReEnterRelationNumberController");
    var controllerActions = ["BillPayModule/frmBillPayReEnterRelationNumberControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
