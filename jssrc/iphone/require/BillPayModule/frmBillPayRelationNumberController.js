define("BillPayModule/userfrmBillPayRelationNumberController", {
    keypadString: '',
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
        this.updateInputBullets("flxInputRelationNumber");
        this.view.btnContinue.onClick = function() {
            var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            billPayMod.presentationController.setBillPayAccountNumber(scope.keypadString);
            billPayMod.presentationController.commonFunctionForNavigation("frmBillPayReEnterRelationNumber");
        };
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        this.view.customHeader.btnRight.onClick = this.btnRightOnClick;
        this.renderTitleBar();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
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
        } else {
            this.enterCodePostAction();
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
        if (this.view.lblAccountNumber.text.length > 1 && this.view.lblAccountNumber.text.length < 50) {
            this.view.btnContinue.setEnabled(true);
            this.view.btnContinue.skin = "sknBtn0095e426pxEnabled";
        } else {
            this.incompleteCodeView();
        }
    },
    incompleteCodeView: function() {
        this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
        this.view.btnContinue.setEnabled(false);
    },
    setDataToForm: function() {
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var accNum = billPayMod.presentationController.getBillPayAccountNumber();
        if (accNum) {
            this.keypadString = accNum;
            this.enterCodePostAction();
        } else {
            this.keypadString = "";
            this.incompleteCodeView();
        }
    }
});
define("BillPayModule/frmBillPayRelationNumberControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_h7d676f1c0d74bde887892f2aa7450c7: function AS_Form_h7d676f1c0d74bde887892f2aa7450c7(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_c2a3520d9e99485d9c77256583801878: function AS_Form_c2a3520d9e99485d9c77256583801878(eventobject) {
        var self = this;
        return self.frmPreshow.call(this);
    },
    AS_BarButtonItem_c49f8a527b2646a3a3c4391921adc75c: function AS_BarButtonItem_c49f8a527b2646a3a3c4391921adc75c(eventobject) {
        var self = this;
        this.btnRightOnClick();
    },
    AS_Button_jc91160d104c45afa5f4f0455cea48bb: function AS_Button_jc91160d104c45afa5f4f0455cea48bb(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_ae9c2a4b90ab4403885d4fee3081c3be: function AS_Button_ae9c2a4b90ab4403885d4fee3081c3be(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_c42eb373c5534beba79ddc262ac01302: function AS_Button_c42eb373c5534beba79ddc262ac01302(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_cd0d90002f20424c9f5ceeef0272af2f: function AS_Button_cd0d90002f20424c9f5ceeef0272af2f(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_g444091b07834053970fd98ff695ca14: function AS_Button_g444091b07834053970fd98ff695ca14(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_jec37f6b2c3142bf8eaf25c687f4e318: function AS_Button_jec37f6b2c3142bf8eaf25c687f4e318(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_f0a8742f439e47ba98785539912c20cd: function AS_Button_f0a8742f439e47ba98785539912c20cd(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_d498351255e844b4b2125094b22c1e9b: function AS_Button_d498351255e844b4b2125094b22c1e9b(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_b1031ac8a0824d9691426dd0764dc179: function AS_Button_b1031ac8a0824d9691426dd0764dc179(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_fc33f6ab7d77484592f8dd2256b43627: function AS_Button_fc33f6ab7d77484592f8dd2256b43627(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_a4b1439d73b24c3ead2fee2e0167eb75: function AS_Image_a4b1439d73b24c3ead2fee2e0167eb75(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    }
});
define("BillPayModule/frmBillPayRelationNumberController", ["BillPayModule/userfrmBillPayRelationNumberController", "BillPayModule/frmBillPayRelationNumberControllerActions"], function() {
    var controller = require("BillPayModule/userfrmBillPayRelationNumberController");
    var controllerActions = ["BillPayModule/frmBillPayRelationNumberControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
