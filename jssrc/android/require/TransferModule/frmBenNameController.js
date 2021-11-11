define("TransferModule/userfrmBenNameController", {
    init: function() {
        this.initActions();
    },
    frmPreShow: function() {
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var benificiaryData = transferModulePresentationController.getBenificiaryData();
        var beneficiaryName = benificiaryData.beneficiaryName;
        if (beneficiaryName) {
            this.view.txtRecipientName.text = beneficiaryName;
        } else {
            this.view.txtRecipientName.text = "";
            this.disableContinueButton();
        }
        var specialCharactersSet = "~#^|$%&*!@()_-+=}{][/|?,.><`':;\"\\";
        this.view.txtRecipientName.restrictCharactersSet = specialCharactersSet.replace("!@#&*_'-.,", '');
        this.view.txtRecipientName.maxTextLength = 50;
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        this.view.customHeader.btnRight.onClick = this.flxBackOnClick;
        this.view.btnContinue.onClick = this.btnContinueOnClick;
        this.view.customHeader.btnRight.onClick = this.onClickCancel;
        this.view.txtRecipientName.onTextChange = this.navigateToVerifyDetails;
        this.view.txtRecipientName.setFocus(true);
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
    navigateToVerifyDetails: function() {
        var recipientName = this.view.txtRecipientName.text;
        if (recipientName.length > 0) {
            this.enableContinueButton();
        } else {
            this.disableContinueButton();
        }
    },
    btnContinueHandler: function() {
        if ((this.view.txtFirstName.text !== '') && (this.view.txtFirstName.text !== null) && (this.view.txtLastName.text !== '') && (this.view.txtLastName.text !== null)) {
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
        var recipientName = this.view.txtRecipientName.text;
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var configurationManager = applicationManager.getConfigurationManager();
        if (configurationManager.isCombinedUser === "true") {
            transferModulePresentationController.navigateToBenificiaryAccountTypeSelection(recipientName);
        } else {
            var navMan = applicationManager.getNavigationManager();
            navMan.setEntryPoint("contracts", navMan.getCurrentForm());
            //transferModulePresentationController.navigateToBenificiaryVerifyDetails(recipientName,"frmContracts");
            transferModulePresentationController.navToContractDetails(recipientName);
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
define("TransferModule/frmBenNameControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_j413c98784484a93bc3ced3b89b790d5: function AS_Form_j413c98784484a93bc3ced3b89b790d5(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_i9c0f8e1b85a40ed9e6363c67bf657c5: function AS_Form_i9c0f8e1b85a40ed9e6363c67bf657c5(eventobject) {
        var self = this;
        return self.frmPreShow.call(this);
    },
    AS_BarButtonItem_e5aa7918f0674b2fbde23fd145c625aa: function AS_BarButtonItem_e5aa7918f0674b2fbde23fd145c625aa(eventobject) {
        var self = this;
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    AS_BarButtonItem_a427f350b20e4104911cb35d215ce3ed: function AS_BarButtonItem_a427f350b20e4104911cb35d215ce3ed(eventobject) {
        var self = this;
        this.onClickCancel();
    }
});
define("TransferModule/frmBenNameController", ["TransferModule/userfrmBenNameController", "TransferModule/frmBenNameControllerActions"], function() {
    var controller = require("TransferModule/userfrmBenNameController");
    var controllerActions = ["TransferModule/frmBenNameControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
