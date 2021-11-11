define("TransferModule/userfrmEnterBenAccNumorIBANController", {
    init: function() {
        this.initActions();
    },
    frmPreShow: function() {
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var benificiaryData = transferModulePresentationController.getBenificiaryData();
        var specialCharactersSet = "~#^|$%&*!@()_-+=}{][/|?,.><`':;\"\\";
        this.view.tbxAccountNumber.restrictCharactersSet = specialCharactersSet;
        this.view.tbxAccountNumber.maxTextLength = 50;
        var accountNumber = benificiaryData.accountNumber;
        if (accountNumber) {
            this.view.tbxAccountNumber.text = accountNumber;
        } else {
            this.view.tbxAccountNumber.text = "";
            this.disableContinueButton();
        }
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        this.view.customHeader.btnRight.onClick = this.flxBackOnClick;
        this.view.btnContinue.onClick = this.btnContinueOnClick;
        this.view.customHeader.btnRight.onClick = this.onClickCancel;
        this.view.tbxAccountNumber.onTextChange = this.btnContinueHandler;
        this.view.tbxAccountNumber.setFocus(true);
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
        var recipientName = this.view.tbxAccountNumber.text;
        if (recipientName.length > 3 && recipientName.length <= 34) {
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
        var accountNumber = this.view.tbxAccountNumber.text;
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var isValidAccNoOrIBAN = transferModulePresentationController.isValidAccNumOrIBAN(accountNumber, "frmEnterBenAccNumorIBAN");
        if (isValidAccNoOrIBAN) {
            transferModulePresentationController.navigateToReEnterAccountNumber(accountNumber);
        }
    },
    bindGenericError: function(errorMsg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
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
    }
});
define("TransferModule/frmEnterBenAccNumorIBANControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_ae379a3fa4874bca8ef0643584ac1919: function AS_Form_ae379a3fa4874bca8ef0643584ac1919(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_d1dd2dbf49984316b0eca9d0fb1df3e9: function AS_Form_d1dd2dbf49984316b0eca9d0fb1df3e9(eventobject) {
        var self = this;
        return self.frmPreShow.call(this);
    },
    AS_BarButtonItem_ffeff9d3ba2641b2adafbdf365c27cc4: function AS_BarButtonItem_ffeff9d3ba2641b2adafbdf365c27cc4(eventobject) {
        var self = this;
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    AS_BarButtonItem_ebf923d10eff47afb54194adff6cd2cc: function AS_BarButtonItem_ebf923d10eff47afb54194adff6cd2cc(eventobject) {
        var self = this;
        this.onClickCancel();
    }
});
define("TransferModule/frmEnterBenAccNumorIBANController", ["TransferModule/userfrmEnterBenAccNumorIBANController", "TransferModule/frmEnterBenAccNumorIBANControllerActions"], function() {
    var controller = require("TransferModule/userfrmEnterBenAccNumorIBANController");
    var controllerActions = ["TransferModule/frmEnterBenAccNumorIBANControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
