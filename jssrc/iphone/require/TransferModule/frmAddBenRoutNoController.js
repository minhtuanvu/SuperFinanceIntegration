define("TransferModule/userfrmAddBenRoutNoController", {
    keypadString: '',
    init: function() {
        this.initActions();
    },
    frmPreshow: function() {
        this.keypadString = '';
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var routingNumber = transferModulePresentationController.getRoutingNumber();
        if (routingNumber) {
            this.keypadString = routingNumber;
            this.enterCodePostAction();
        } else {
            this.incompleteCodeView();
        }
        this.preshowHideBankDetails();
        this.updateInputBullets("flxInputRoutingNo");
        this.renderTitleBar();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        // this.view.customHeader.btnRight.onClick=this.flxBackOnClick;
    },
    initActions: function() {
        var scope = this;
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        this.view.btnContinue.onClick = scope.btnContinueOnClick;
        this.view.customHeader.btnRight.onClick = scope.onClickCancel;
        this.view.customHeader.flxBack.onClick = scope.flxBackOnClick;
    },
    btnRightOnClick: function() {},
    renderTitleBar: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === 'iPhone') {
            this.view.flxHeader.setVisibility(false);
        }
    },
    btnContinueOnClick: function() {
        var routingNumber = this.keypadString;
        var navManager = applicationManager.getNavigationManager();
        var accDetails = navManager.getCustomInfo("frmAddBenRoutNo");
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transferModulePresentationController.navigateToEnterBenificiaryAccountNumber(routingNumber);
    },
    flxBackOnClick: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    setKeypadChar: function(char) {
        this.keypadString = this.keypadString + char;
        if (this.keypadString.length > 0 && this.keypadString.length < 10) {
            this.enterCodePostAction();
        } else if (this.keypadString.length < 1) {
            this.incompleteCodeView();
        } else if (this.keypadString.length > 9) {
            this.keypadString = this.keypadString.slice(0, 9);
            return;
        }
        this.updateInputBullets("flxInputRoutingNo");
    },
    clearKeypadChar: function() {
        if (this.keypadString.length === 1) {
            this.keypadString = '';
            this.updateInputBullets("flxInputRoutingNo");
        }
        if (this.keypadString.length !== 0) {
            this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
            if (this.keypadString.length < 1) {
                this.incompleteCodeView();
            }
            this.updateInputBullets("flxInputRoutingNo");
        }
        if (this.keypadString.length < 1) {
            this.incompleteCodeView();
        } else {
            this.enterCodePostAction();
        }
    },
    updateInputBullets: function(inputFlx) {
        var widgets = this.view[inputFlx].widgets();
        for (var i = 0; i < this.keypadString.length; i++) {
            // widgets[i].skin = "sknLbl979797SSP60px";
            widgets[i].text = this.keypadString[i];
        }
        for (var i = this.keypadString.length; i < widgets.length; i++) {
            //widgets[i].skin = "sknLble3e3e3SSP60px";
            widgets[i].text = '_';
        }
        this.view.forceLayout();
    },
    enterCodePostAction: function() {
        if (this.keypadString.length > 6 && this.keypadString.length < 11) {
            this.view.btnContinue.setEnabled(true);
            this.view.btnContinue.skin = "sknBtn0095e426pxEnabled";
        } else {
            this.incompleteCodeView();
        }
    },
    incompleteCodeView: function() {
        this.view.lblBankName.setVisibility(false);
        this.view.lblAddLine1.setVisibility(false);
        this.view.lblAddLine2.setVisibility(false);
        this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
        this.view.btnContinue.setEnabled(false);
    },
    preshowHideBankDetails: function() {
        this.view.lblBankName.setVisibility(false);
        this.view.lblAddLine1.setVisibility(false);
        this.view.lblAddLine2.setVisibility(false);
    },
    onClickCancel: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var navigateToForm = navManager.getEntryPoint("createInternalBankBenificiary");
        var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transferModPresentationController.commonFunctionForNavigation(navigateToForm);
    }
});
define("TransferModule/frmAddBenRoutNoControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_bfad32340fec4c1a9097d9fb06513b64: function AS_Form_bfad32340fec4c1a9097d9fb06513b64(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_c8ddd26eb42a483080574e355df7c3cc: function AS_Form_c8ddd26eb42a483080574e355df7c3cc(eventobject) {
        var self = this;
        this.frmPreshow();
    },
    AS_BarButtonItem_bf4be38265bd4c459868f206047f9f31: function AS_BarButtonItem_bf4be38265bd4c459868f206047f9f31(eventobject) {
        var self = this;
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    AS_BarButtonItem_d4c317fa01224e0c95152a404465d816: function AS_BarButtonItem_d4c317fa01224e0c95152a404465d816(eventobject) {
        var self = this;
        this.onClickCancel();
    },
    AS_Button_d995428196c94d1992d34e7680ead2d7: function AS_Button_d995428196c94d1992d34e7680ead2d7(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_caaee584431948e8bb65f2060b7a3f12: function AS_Button_caaee584431948e8bb65f2060b7a3f12(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_f1671d383324483c86104e017fa68a98: function AS_Button_f1671d383324483c86104e017fa68a98(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_ee1f4c4192904e4f934349eb25ff3430: function AS_Button_ee1f4c4192904e4f934349eb25ff3430(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_i7f9f5abb3664e5fb694af8feb4212a6: function AS_Button_i7f9f5abb3664e5fb694af8feb4212a6(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_ie3bcc135a944dd8baa8de8a0961937b: function AS_Button_ie3bcc135a944dd8baa8de8a0961937b(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_a0158c26af96430caa4ed3bfd9e600dd: function AS_Button_a0158c26af96430caa4ed3bfd9e600dd(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_i93a76d23b8647f791038f00a879241a: function AS_Button_i93a76d23b8647f791038f00a879241a(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_h3ea77cf91fc4f4d9ff45deb3685f828: function AS_Button_h3ea77cf91fc4f4d9ff45deb3685f828(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_jd2f9ffdd6924b03bb0175998407e8d3: function AS_Button_jd2f9ffdd6924b03bb0175998407e8d3(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_b8275a188bb543bda67ceee35f4a8969: function AS_Image_b8275a188bb543bda67ceee35f4a8969(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    }
});
define("TransferModule/frmAddBenRoutNoController", ["TransferModule/userfrmAddBenRoutNoController", "TransferModule/frmAddBenRoutNoControllerActions"], function() {
    var controller = require("TransferModule/userfrmAddBenRoutNoController");
    var controllerActions = ["TransferModule/frmAddBenRoutNoControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
