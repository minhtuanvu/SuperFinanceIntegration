define("BillPayModule/userfrmBillPayPolicyNumberController", {
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
        this.updateInputBullets("flxInputPolicyNumber");
        this.view.btnContinue.onClick = function() {
            var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
            billPayMod.presentationController.setBillPayPhoneNumber(scope.keypadString);
            var navMan = applicationManager.getNavigationManager();
            navMan.setEntryPoint("contracts", navMan.getCurrentForm());
            billPayMod.presentationController.getContractDetails("BILL_PAY_CREATE_PAYEES");
            //billPayMod.presentationController.commonFunctionForNavigation("frmBillPayVerifyDetails");
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
    //btnContinueOnClick: function() {},
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
        this.updateInputBullets("flxInputPolicyNumber");
    },
    clearKeypadChar: function() {
        if (this.keypadString.length === 1) {
            this.incompleteCodeView();
            this.keypadString = '';
            this.updateInputBullets("flxInputPolicyNumber");
        }
        if (this.keypadString.length !== 0) {
            this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
            if (this.keypadString.length < 1) {
                this.incompleteCodeView();
            }
            this.updateInputBullets("flxInputPolicyNumber");
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
    setDataToForm: function() {
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var phoneNo = billPayMod.presentationController.getBillPayPhoneNumber();
        if (phoneNo) {
            this.keypadString = phoneNo;
            this.enterCodePostAction();
        } else {
            this.keypadString = "";
            this.incompleteCodeView();
        }
    }
});
define("BillPayModule/frmBillPayPolicyNumberControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_b48d7b0691f04bd6afd7d51c321f581f: function AS_Form_b48d7b0691f04bd6afd7d51c321f581f(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_f93318e71afe40babcadc26942261ce0: function AS_Form_f93318e71afe40babcadc26942261ce0(eventobject) {
        var self = this;
        return self.frmPreshow.call(this);
    },
    AS_BarButtonItem_g504474b2f114fd8900bb8d9ad371af8: function AS_BarButtonItem_g504474b2f114fd8900bb8d9ad371af8(eventobject) {
        var self = this;
        this.btnRightOnClick();
    },
    AS_Button_ebd103afd5ac4094a7ed8b722a6b414f: function AS_Button_ebd103afd5ac4094a7ed8b722a6b414f(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_a77123ffe1784ea1b6e96d1903a55fcf: function AS_Button_a77123ffe1784ea1b6e96d1903a55fcf(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_ff92a8b559364374a3165eef090fcda1: function AS_Button_ff92a8b559364374a3165eef090fcda1(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_b8bfd045777b47f2a7d3a687e02cf7ea: function AS_Button_b8bfd045777b47f2a7d3a687e02cf7ea(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_eed52d3dd1e34105b935e47d94fc2439: function AS_Button_eed52d3dd1e34105b935e47d94fc2439(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_bf8c2bed519145f4ac4ed4f415f4c181: function AS_Button_bf8c2bed519145f4ac4ed4f415f4c181(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_b1b467c0ff254bd791f466bf4dfed28e: function AS_Button_b1b467c0ff254bd791f466bf4dfed28e(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_j5e1ccfaeedc4896a4437980c395dded: function AS_Button_j5e1ccfaeedc4896a4437980c395dded(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_e1206afff4da4b83a5349a7fcf79e4a2: function AS_Button_e1206afff4da4b83a5349a7fcf79e4a2(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_ee43bef0993c4052ad048a1016413dfd: function AS_Button_ee43bef0993c4052ad048a1016413dfd(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_h207d9440b3e44f78f48b49c70c29ffd: function AS_Image_h207d9440b3e44f78f48b49c70c29ffd(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    }
});
define("BillPayModule/frmBillPayPolicyNumberController", ["BillPayModule/userfrmBillPayPolicyNumberController", "BillPayModule/frmBillPayPolicyNumberControllerActions"], function() {
    var controller = require("BillPayModule/userfrmBillPayPolicyNumberController");
    var controllerActions = ["BillPayModule/frmBillPayPolicyNumberControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
