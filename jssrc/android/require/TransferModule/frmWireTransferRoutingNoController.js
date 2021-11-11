define("TransferModule/userfrmWireTransferRoutingNoController", {
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
        this.view.btnContinue.setEnabled(true);
        this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
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
define("TransferModule/frmWireTransferRoutingNoControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_h95ad8d2aa2b4e5382183177db160fa8: function AS_Form_h95ad8d2aa2b4e5382183177db160fa8(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_h49dacb4bf114ec7b347f7f2c3dd22c5: function AS_Form_h49dacb4bf114ec7b347f7f2c3dd22c5(eventobject) {
        var self = this;
        this.frmPreshow();
    },
    AS_Button_e8bcf7318ee94370bd1d868566c72368: function AS_Button_e8bcf7318ee94370bd1d868566c72368(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_i9220b66bc83409d8407867a233ebb56: function AS_Button_i9220b66bc83409d8407867a233ebb56(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_ea527a6fe8ac4c13920e6b850295ad6b: function AS_Button_ea527a6fe8ac4c13920e6b850295ad6b(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_afc32c94e51b4dea939621f9d27e429b: function AS_Button_afc32c94e51b4dea939621f9d27e429b(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_af7156ddad9a4d0d88d65d37d0b0b257: function AS_Button_af7156ddad9a4d0d88d65d37d0b0b257(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_e430beba30a84da6887be8eb824b5f5e: function AS_Button_e430beba30a84da6887be8eb824b5f5e(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_h29f9e5c10e749d7935384510ff7ff99: function AS_Button_h29f9e5c10e749d7935384510ff7ff99(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_e39341725513459aab025221464c7219: function AS_Button_e39341725513459aab025221464c7219(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_fb23969958b846c684479182bbaafdaa: function AS_Button_fb23969958b846c684479182bbaafdaa(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_be299a298e174035b6233ed9bb6d8592: function AS_Button_be299a298e174035b6233ed9bb6d8592(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_e443a90d3dd34f87befdceae07810d6e: function AS_Image_e443a90d3dd34f87befdceae07810d6e(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    }
});
define("TransferModule/frmWireTransferRoutingNoController", ["TransferModule/userfrmWireTransferRoutingNoController", "TransferModule/frmWireTransferRoutingNoControllerActions"], function() {
    var controller = require("TransferModule/userfrmWireTransferRoutingNoController");
    var controllerActions = ["TransferModule/frmWireTransferRoutingNoControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
