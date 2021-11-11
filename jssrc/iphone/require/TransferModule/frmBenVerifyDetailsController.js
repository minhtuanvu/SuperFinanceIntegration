define("TransferModule/userfrmBenVerifyDetailsController", {
    timerCounter: 0,
    init: function() {
        this.initActions();
    },
    frmPreShow: function() {
        this.renderTitleBar();
        this.populateDetails();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        var configurationManager = applicationManager.getConfigurationManager();
        if (configurationManager.isCombinedUser === "true") {
            var navigationManager = applicationManager.getNavigationManager();
            var businessPayee = navigationManager.getCustomInfo("isBusinessPayee");
            if (businessPayee === "0") {
                this.view.flxIndications.isVisible = true;
                this.view.imgIndication.isVisible = true;
                this.view.imgIndication.src = "personalaccount.png"
                this.view.lblAccHolderValue.left = "50dp";
            } else if (businessPayee === "1") {
                this.view.flxIndications.isVisible = true;
                this.view.imgIndication.isVisible = true;
                this.view.imgIndication.src = "businessaccount.png"
                this.view.lblAccHolderValue.left = "50dp";
            }
        } else {
            this.view.flxIndications.isVisible = false;
            this.view.imgIndication.isVisible = false;
            this.view.lblAccHolderValue.left = "20dp";
        }
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
    flxBackOnClick: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    btnContinueOnClick: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var benificiaryData = transferModulePresentationController.getBenificiaryData();
        var nickName = this.view.txtAccNickName.text;
        if (nickName === "" || nickName === null || nickName === undefined) {
            nickName = benificiaryData.beneficiaryName;
        }
        transferModulePresentationController.isAcknowledgmentFlow = true;
        transferModulePresentationController.setNickName(nickName);
        transferModulePresentationController.setIsVerified(true);
        if (transferModulePresentationController.getFlowType() === "InternationalRecipients" || transferModulePresentationController.getFlowType() === "InternationalTransferCreateTransfer") {
            transferModulePresentationController.setIsInternationalAccount(true);
            transferModulePresentationController.setIsSameBankAccount(false);
            transferModulePresentationController.setBankName(this.view.lblBankNameValue.text);
            transferModulePresentationController.createInternationalBenificiary();
        } else {
            transferModulePresentationController.setIsInternationalAccount(false);
            if (transferModulePresentationController.getFlowType() === "SameBankRecipients" || transferModulePresentationController.getFlowType() === "OtherKonyBankMembersCreateTransfer") {
                transferModulePresentationController.setIsSameBankAccount(true);
                transferModulePresentationController.setBankName(this.view.lblBankNameValue.text);
                transferModulePresentationController.createInternalBenificiary();
            } else {
                transferModulePresentationController.setIsSameBankAccount(false);
                transferModulePresentationController.setBankName(this.view.lblBankNameValue.text);
                transferModulePresentationController.createExternalBenificiary(benificiaryData);
            }
        }
    },
    populateDetails: function() {
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var benificiaryData = transferModulePresentationController.getBenificiaryData();
        var bankName = transferModulePresentationController.getBankName();
        var accountNumber = JSON.parse(JSON.stringify(benificiaryData.accountNumber));
        var maskedAccountNumber = applicationManager.getDataProcessorUtility().maskAccountNumber(accountNumber);
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var specialCharactersSet = "~#^|$%&*!@()_-+=}{][/|?,.><`':;\"\\";
        this.view.txtAccNickName.restrictCharactersSet = specialCharactersSet.replace("!@#&*_'-.,", '');
        this.view.txtAccNickName.maxTextLength = 50;
        if (transferModulePresentationController.getFlowType() === "InternationalRecipients" || transferModulePresentationController.getFlowType() === "InternationalTransferCreateTransfer") {
            this.view.lblAccHolderValue.text = benificiaryData.beneficiaryName;
            this.view.lblAccNoValue.text = maskedAccountNumber;
            this.view.lblAccTypeVal.text = benificiaryData.accountType;
            this.view.flxRoutingNo.setVisibility(true);
            this.view.flxBankName.isVisible = true;
            this.view.lblBankNameValue.isVisible = true;
            this.view.lblRoutingNo.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.SwiftCode");
            this.view.lblBankNameValue.text = transferModulePresentationController.getBankNameFromResponse();
            this.view.lblCardIssueDateVal.text = benificiaryData.swiftCode;
            this.view.txtAccNickName.text = benificiaryData.beneficiaryName;
            this.view.flxBankLocation.isVisible = false;
            this.view.lblBankLocationValue.text = benificiaryData.countryName;
            this.view.lblLinkedWithValue.text = benificiaryData.totalContractCustomerSelected + " Customers ID";
        } else {
            if (transferModulePresentationController.getFlowType() === "SameBankRecipients" || transferModulePresentationController.getFlowType() === "OtherKonyBankMembersCreateTransfer") {
                this.view.lblAccHolderValue.text = benificiaryData.beneficiaryName;
                this.view.lblAccNoValue.text = maskedAccountNumber;
                this.view.lblAccTypeVal.text = benificiaryData.accountType;
                this.view.lblBankNameValue.text = bankName;
                this.view.flxRoutingNo.setVisibility(false);
                this.view.txtAccNickName.text = benificiaryData.beneficiaryName;
                this.view.flxBankLocation.isVisible = false;
                this.view.lblLinkedWithValue.text = benificiaryData.totalContractCustomerSelected + " Customers ID";
            } else {
                this.view.lblAccHolderValue.text = benificiaryData.beneficiaryName;
                this.view.lblAccNoValue.text = maskedAccountNumber;
                this.view.lblAccTypeVal.text = benificiaryData.accountType;
                this.view.flxRoutingNo.setVisibility(true);
                this.view.lblRoutingNo.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.RoutingNumber");
                this.view.flxBankName.isVisible = true;
                this.view.lblBankNameValue.isVisible = true;
                this.view.lblBankNameValue.text = "Infinity";
                this.view.lblCardIssueDateVal.text = benificiaryData.routingNumber;
                this.view.txtAccNickName.text = benificiaryData.beneficiaryName;
                this.view.flxBankLocation.isVisible = false;
                this.view.lblLinkedWithValue.text = benificiaryData.totalContractCustomerSelected + " Customers ID";
            }
        }
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
define("TransferModule/frmBenVerifyDetailsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_bd79a6424eca40bdafc21a3eac7cccc1: function AS_Form_bd79a6424eca40bdafc21a3eac7cccc1(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_a99baf744b7c486d99f940bd5269188d: function AS_Form_a99baf744b7c486d99f940bd5269188d(eventobject) {
        var self = this;
        return self.frmPreShow.call(this);
    },
    AS_BarButtonItem_f1809c17bdf5451d8d5feb8bdd859d1e: function AS_BarButtonItem_f1809c17bdf5451d8d5feb8bdd859d1e(eventobject) {
        var self = this;
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    AS_BarButtonItem_b9f606be00bc43a78961035c30cfec1b: function AS_BarButtonItem_b9f606be00bc43a78961035c30cfec1b(eventobject) {
        var self = this;
        this.onClickCancel();
    }
});
define("TransferModule/frmBenVerifyDetailsController", ["TransferModule/userfrmBenVerifyDetailsController", "TransferModule/frmBenVerifyDetailsControllerActions"], function() {
    var controller = require("TransferModule/userfrmBenVerifyDetailsController");
    var controllerActions = ["TransferModule/frmBenVerifyDetailsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
