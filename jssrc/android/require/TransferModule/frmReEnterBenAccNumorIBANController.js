define("TransferModule/userfrmReEnterBenAccNumorIBANController", {
    init: function() {
        this.initActions();
    },
    frmPreShow: function() {
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var accountNumber = transferModulePresentationController.getReEnteredAccountNumber();
        if (accountNumber) {
            this.view.tbxReEnteredAccountNumber.text = accountNumber;
        } else {
            this.view.tbxReEnteredAccountNumber.text = "";
            this.disableContinueButton();
        }
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        this.view.customHeader.btnRight.onClick = this.flxBackOnClick;
        this.view.btnContinue.onClick = this.btnContinueOnClick;
        this.view.customHeader.btnRight.onClick = this.onClickCancel;
        this.view.tbxReEnteredAccountNumber.onTextChange = this.btnContinueHandler;
        this.view.tbxReEnteredAccountNumber.setFocus(true);
        this.renderTitleBar();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    initActions: function() {
        var scope = this;
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        this.view.customHeader.flxBack.onClick = scope.flxBackOnClick;
        this.view.customHeader.btnRight.onClick = scope.flxBackOnClick;
        this.view.btnContinue.onClick = scope.btnContinueOnClick;
        this.view.customHeader.btnRight.onClick = scope.onClickCancel;
    },
    btnRightOnClick: function() {},
    renderTitleBar: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === 'iPhone') {
            this.view.flxHeader.setVisibility(false);
        }
    },
    btnContinueHandler: function() {
        var accountNumber = this.view.tbxReEnteredAccountNumber.text;
        if (accountNumber.length > 0 && accountNumber.length <= 34) {
            this.enableContinueButton();
        } else {
            this.disableContinueButton();
        }
    },
    flxBackOnClick: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    btnContinueOnClick: function() {
        var reEneterdAccountNumber = this.view.tbxReEnteredAccountNumber.text;
        var match = false;
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
            var isValidAccNoOrIBAN = transferModulePresentationController.isValidAccNumOrIBAN(reEneterdAccountNumber, "frmReEnterBenAccNumorIBAN");
            if (isValidAccNoOrIBAN) {
                transferModulePresentationController.navigateToBenName(reEneterdAccountNumber);
            }
        } else {
            this.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.cardless.wrongAccountNumberMessage"));
        }
    },
    enableContinueButton: function() {
        this.view.btnContinue.setEnabled(true);
        this.view.btnContinue.skin = "sknBtn0095e426pxEnabled";
    },
    disableContinueButton: function() {
        this.view.btnContinue.setEnabled(false);
        this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
    },
    onClickCancel: function() {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
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
define("TransferModule/frmReEnterBenAccNumorIBANControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_f4fe0105a0bf410a95554a63abee029d: function AS_Form_f4fe0105a0bf410a95554a63abee029d(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_if6474b67cf145fd8aea746388b27351: function AS_Form_if6474b67cf145fd8aea746388b27351(eventobject) {
        var self = this;
        return self.frmPreShow.call(this);
    },
    AS_BarButtonItem_hb197826046f4564a5cd2e131567a140: function AS_BarButtonItem_hb197826046f4564a5cd2e131567a140(eventobject) {
        var self = this;
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    AS_BarButtonItem_edf9be6c648b4d48901c5ef5b9740e57: function AS_BarButtonItem_edf9be6c648b4d48901c5ef5b9740e57(eventobject) {
        var self = this;
        this.onClickCancel();
    }
});
define("TransferModule/frmReEnterBenAccNumorIBANController", ["TransferModule/userfrmReEnterBenAccNumorIBANController", "TransferModule/frmReEnterBenAccNumorIBANControllerActions"], function() {
    var controller = require("TransferModule/userfrmReEnterBenAccNumorIBANController");
    var controllerActions = ["TransferModule/frmReEnterBenAccNumorIBANControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
