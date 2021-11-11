define("TransferModuleEurope/userfrmBenNameEuropeController", {
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
        //this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        //this.view.customHeader.btnRight.onClick = this.flxBackOnClick;
        //this.view.btnContinue.onClick = this.btnContinueOnClick;
        // this.view.customHeader.btnRight.onClick = this.onClickCancel;
        this.view.txtRecipientName.onTextChange = this.navigateToVerifyDetails;
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
        this.view.postShow = scope.frmpostShow;
    },
    frmpostShow: function() {
        this.view.txtRecipientName.setFocus(true);
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
        if (transferModulePresentationController.isValidbenificiaryName(recipientName, "frmBenNameEurope")) {
            transferModulePresentationController.navigateToIBANDetails(recipientName);
        }
    },
    enableContinueButton: function() {
        this.view.btnContinue.setEnabled(true);
        this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
    },
    disableContinueButton: function() {
        this.view.btnContinue.setEnabled(false);
        this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
    },
    onClickCancel: function() {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var navigateToForm = navManager.getEntryPoint("createEuropeExternalBenificiaries");
        var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transferModPresentationController.commonFunctionForNavigation(navigateToForm);
    },
    bindGenericError: function(errorMsg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    }
});
define("TransferModuleEurope/frmBenNameEuropeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_ea6c7432e1f14920b1b2b11c30c8e5f0: function AS_Button_ea6c7432e1f14920b1b2b11c30c8e5f0(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmTransferAmountEurope");
        ntf.navigate();
    },
    AS_Form_a42799d51cbd4fb6aa6a39470e0d0148: function AS_Form_a42799d51cbd4fb6aa6a39470e0d0148(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_g19cf8f53a0043f28a7710e521a8d929: function AS_Form_g19cf8f53a0043f28a7710e521a8d929(eventobject) {
        var self = this;
        return self.frmPreShow.call(this);
    },
    AS_BarButtonItem_fbc93cc166c2404c92d8630a3408b8ed: function AS_BarButtonItem_fbc93cc166c2404c92d8630a3408b8ed(eventobject) {
        var self = this;
        this.onClickCancel();
    }
});
define("TransferModuleEurope/frmBenNameEuropeController", ["TransferModuleEurope/userfrmBenNameEuropeController", "TransferModuleEurope/frmBenNameEuropeControllerActions"], function() {
    var controller = require("TransferModuleEurope/userfrmBenNameEuropeController");
    var controllerActions = ["TransferModuleEurope/frmBenNameEuropeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
