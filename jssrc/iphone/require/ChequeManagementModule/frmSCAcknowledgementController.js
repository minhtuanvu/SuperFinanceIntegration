define("ChequeManagementModule/userfrmSCAcknowledgementController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preshow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        this.view.btnBack.onClick = this.backOnClick;
        this.view.btnView.onClick = this.viewRequestOnClick;
        this.setUIData();
    },
    setUIData: function() {
        var transObj = applicationManager.getModulesPresentationController("ChequeManagementModule");
        var reasondata = transObj.stopReasonsList;
        var forUtility = applicationManager.getFormatUtilManager();
        var objData = transObj.getTransObject();
        this.view.lblReferenceNumber.text = scope_ChequePresentationController.referenceId;
        this.view.lblFromAccount.text = scope_ChequePresentationController.processedName;
        if (objData.checkReason) {
            var reasonkey = ""
            reasondata.forEach(function(item) {
                if (item[1] === objData.checkReason) {
                    reasonkey = item[0];
                }
            });
            this.view.lblReason.text = reasonkey;
        }
        if (objData.payeeName === "") {
            this.view.flxPayeeName.setVisibility(false);
        } else {
            this.view.flxPayeeName.setVisibility(true);
            this.view.lblPayeeName.text = objData.payeeName;
        }
        if (scope_ChequePresentationController.chequeTypeSelection === "Single Cheque") {
            this.view.lblChequeType.text = "Single";
            this.view.lblChequeNumber.text = objData.checkNumber1;
        } else {
            this.view.lblChequeType.text = "Series";
            this.view.lblChequeNumber.text = objData.checkNumber1 + "-" + objData.checkNumber2;
            this.view.flxAmount.setVisibility(false);
            this.view.flxIssueDate.setVisibility(false);
        }
        if (objData.amount === "" || objData.amount === null) {
            this.view.flxAmount.setVisibility(false);
        } else {
            this.view.flxAmount.setVisibility(true);
            this.view.lblAmountValue.text = forUtility.formatAmountandAppendCurrencySymbol(objData.amount, transObj.currencyCode);
        }
        if (objData.checkDateOfIssue === "" || objData.checkDateOfIssue === null) {
            this.view.flxIssueDate.setVisibility(false);
        } else {
            this.view.flxIssueDate.setVisibility(true);
            this.view.lblIssueDate.text = scope_ChequePresentationController.chequeIssuedDate;
        }
        if (scope_ChequePresentationController.fees !== "") {
            this.view.flxFee.setVisibility(true);
            this.view.lblFee.text = forUtility.formatAmountandAppendCurrencySymbol(scope_ChequePresentationController.fees, transObj.currencyCode);
        } else {
            this.view.flxFee.setVisibility(false);
        }
        if (objData.transactionsNotes !== null || objData.transactionsNotes !== undefined || objData.transactionsNotes !== "") {
            this.view.lblNotes.text = objData.transactionsNotes;
        } else {
            this.view.lblNotes.text = "None";
        }
    },
    backOnClick: function() {
        scope_ChequePresentationController.isReview = "";
        scope_ChequePresentationController.isInitial = true;
        var chequePresentation = applicationManager.getModulesPresentationController("ChequeManagementModule");
        var objData = chequePresentation.getTransObject();
        var selectedAccount = {};
        var accountManager = applicationManager.getAccountManager();
        selectedAccount.selectedAccountData = accountManager.getInternalAccountByID(objData.fromAccountNumber);
        var navManager = applicationManager.getNavigationManager();
        navManager.setCustomInfo("frmAccountDetails", selectedAccount);
        navManager.navigateTo("frmAccountDetails");
        chequePresentation.clearFlowValues();
        var transactionManager = applicationManager.getTransactionManager();
        transactionManager.clearTransferObject();
        /*var nav = applicationManager.getModulesPresentationController("AccountModule");
        nav.commonFunctionForNavigation("frmAccountDetails");*/
    },
    viewRequestOnClick: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.setEntryPoint("chequemanagement", "frmSCAcknowledgement");
        var navigation = applicationManager.getModulesPresentationController("ChequeManagementModule");
        navigation.commonCancel();
    }
});
define("ChequeManagementModule/frmSCAcknowledgementControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_h9bbfd3c2fec464ca15591a98965a690: function AS_Form_h9bbfd3c2fec464ca15591a98965a690(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_e0492e8c2e2642fe811899348e78c797: function AS_Form_e0492e8c2e2642fe811899348e78c797(eventobject) {
        var self = this;
        this.preshow();
    }
});
define("ChequeManagementModule/frmSCAcknowledgementController", ["ChequeManagementModule/userfrmSCAcknowledgementController", "ChequeManagementModule/frmSCAcknowledgementControllerActions"], function() {
    var controller = require("ChequeManagementModule/userfrmSCAcknowledgementController");
    var controllerActions = ["ChequeManagementModule/frmSCAcknowledgementControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
