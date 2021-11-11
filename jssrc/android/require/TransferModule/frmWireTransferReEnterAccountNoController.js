define("TransferModule/userfrmWireTransferReEnterAccountNoController", {
    timerCounter: 0,
    keypadString: '',
    init: function() {
        this.initActions();
    },
    frmPreshow: function() {
        this.keypadString = '';
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var accountNumber = transferModulePresentationController.getReEnteredAccountNumber();
        if (accountNumber) {
            this.keypadString = accountNumber;
            this.enterCodePostAction();
        } else {
            this.incompleteCodeView();
        }
        this.updateInputBullets("flxReInputAccNo");
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        this.renderTitleBar();
        //this.view.customHeader.btnRight.onClick=this.flxBackOnClick;
    },
    initActions: function() {
        var scope = this;
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        this.view.btnContinue.onClick = scope.btnContinueOnClick;
        this.view.customHeader.flxBack.onClick = scope.flxBackOnClick;
        this.view.customHeader.btnRight.onClick = scope.onClickCancel;
    },
    btnRightOnClick: function() {},
    renderTitleBar: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === 'iPhone') {
            this.view.flxHeader.setVisibility(false);
        }
    },
    btnContinueOnClick: function() {
        var match = false;
        var reEneterdAccountNumber = this.keypadString;
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var benificiaryData = transferModulePresentationController.getBenificiaryData();
        var initialAccountNumber = benificiaryData.accountNumber;
        if (initialAccountNumber === reEneterdAccountNumber) {
            match = true;
        } else {
            match = false;
        }
        if (match) {
            var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
            var isValidAccNo = transferModulePresentationController.isValidAccNum(reEneterdAccountNumber, "frmReEnterBenAccNo");
            if (isValidAccNo) {
                transferModulePresentationController.navigateToAccountType(reEneterdAccountNumber);
            }
        } else {
            this.showErrorPopup(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.cardless.wrongAccountNumberMessage"));
            this.keypadString = '';
            this.updateInputBullets("flxReInputAccNo");
            this.incompleteCodeView();
        }
    },
    flxBackOnClick: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    setKeypadChar: function(char) {
        this.keypadString = this.keypadString + char;
        if (this.keypadString.length > 0 && this.keypadString.length < 17) {
            this.enterCodePostAction();
        } else if (this.keypadString.length < 1) {
            this.incompleteCodeView();
        } else if (this.keypadString.length > 16) {
            this.keypadString = this.keypadString.slice(0, 16);
            return;
        }
        this.updateInputBullets("flxReInputAccNo");
    },
    showErrorPopup: function(errorMsg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    },
    clearKeypadChar: function() {
        if (this.keypadString.length === 1) {
            this.keypadString = '';
            this.updateInputBullets("flxReInputAccNo");
        }
        if (this.keypadString.length !== 0) {
            this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
            if (this.keypadString.length < 1) {
                this.incompleteCodeView();
            }
            this.updateInputBullets("flxReInputAccNo");
        }
        if (this.keypadString.length < 1) {
            this.incompleteCodeView();
        }
    },
    updateInputBullets: function(inputFlx) {
        var widgets = this.view[inputFlx].widgets();
        for (var i = 0; i < this.keypadString.length; i++) {
            // widgets[i].skin = "sknLbl484848sspReg50px";
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
        this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
        this.view.btnContinue.setEnabled(false);
    },
    onClickCancel: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var navigateToForm = navManager.getEntryPoint("createInternalBankBenificiary");
        var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transferModPresentationController.commonFunctionForNavigation(navigateToForm);
    },
    bindGenericError: function(errorMsg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    }
});
define("TransferModule/frmWireTransferReEnterAccountNoControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_h1f7b1e0d0074736936ad099860780c5: function AS_Form_h1f7b1e0d0074736936ad099860780c5(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_bfd35264dee64e68992b8f42cc202bb7: function AS_Form_bfd35264dee64e68992b8f42cc202bb7(eventobject) {
        var self = this;
        this.frmPreshow();
    },
    AS_Button_j2a0b7a6bffa4f75ae6612acc08282d8: function AS_Button_j2a0b7a6bffa4f75ae6612acc08282d8(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_hdf8f715aedc45c59f29fc3b4a14e8be: function AS_Button_hdf8f715aedc45c59f29fc3b4a14e8be(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_df8f8b042f484cc3b9af79a2759fd42e: function AS_Button_df8f8b042f484cc3b9af79a2759fd42e(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_g8cd482f429142d4822ce66e700d8fb4: function AS_Button_g8cd482f429142d4822ce66e700d8fb4(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_f2b289022b9c4915a600f0cf3c2248f7: function AS_Button_f2b289022b9c4915a600f0cf3c2248f7(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_h2e06c1d25bc42c7bd23e642cb4dc054: function AS_Button_h2e06c1d25bc42c7bd23e642cb4dc054(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_db52badf70f9469ea6d77917c1f693bd: function AS_Button_db52badf70f9469ea6d77917c1f693bd(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_e5d732a92630449b9c6c0ce59a198ba3: function AS_Button_e5d732a92630449b9c6c0ce59a198ba3(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_efa6b49622d34702952b8a62e9dd1ce7: function AS_Button_efa6b49622d34702952b8a62e9dd1ce7(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_adaddad8bb1246fab56416915ec51823: function AS_Button_adaddad8bb1246fab56416915ec51823(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_bb9ed9e965554b898588594cbe835861: function AS_Image_bb9ed9e965554b898588594cbe835861(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    }
});
define("TransferModule/frmWireTransferReEnterAccountNoController", ["TransferModule/userfrmWireTransferReEnterAccountNoController", "TransferModule/frmWireTransferReEnterAccountNoControllerActions"], function() {
    var controller = require("TransferModule/userfrmWireTransferReEnterAccountNoController");
    var controllerActions = ["TransferModule/frmWireTransferReEnterAccountNoControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
