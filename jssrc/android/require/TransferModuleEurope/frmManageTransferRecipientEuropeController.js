define("TransferModuleEurope/userfrmManageTransferRecipientEuropeController", {
    onNavigate: function(obj) {
        if (obj === undefined) {
            return;
        }
    },
    init: function() {
        this.initActions();
    },
    preShow: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
        var navManager = applicationManager.getNavigationManager();
        var transactionDetails = navManager.getCustomInfo("frmManageTransferRecipientEurope");
        var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var benificiaryDetails = transferModPresentationController.getBenificiaryData();
        var txns = transactionDetails.Transactions;
        this.view.customHeader.lblLocateUs.text = benificiaryDetails.nickName;
        this.view.title = benificiaryDetails.nickName;
        this.setAccountDetails(benificiaryDetails);
        this.setTransactions(txns);
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    initActions: function() {
        var scope = this;
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        this.view.btnTransfer.setVisibility(false);
        this.view.btnTransfer.onClick = function() {
            var transModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
            transModPresentationController.setTransferToInfo();
            var navMan = applicationManager.getNavigationManager();
            navMan.setEntryPoint("makeatransfer", "frmManageTransferRecipientEurope");
        };
        this.view.segTransactions.onRowClick = this.segTransactionsOnRowClick;
        this.view.customHeader.flxBack.onClick = function() {
            var navMan = applicationManager.getNavigationManager();
            navMan.goBack();
        };
        this.view.customHeader.flxSearch.onClick = function() {
            scope.showBenificiaryDetails();
        };
    },
    iphoneInformationIcononClick: function() {
        this.showBenificiaryDetails();
    },
    showBenificiaryDetails: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transferModulePresentationController.commonFunctionForNavigation("frmManageTransferRecipientInfoEurope");
    },
    setAccountDetails: function(accountDetails) {
        this.view.lblBankName.text = accountDetails.bankName;
        this.view.lblAccountType.text = accountDetails.accountType;
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        if (transferModulePresentationController.getFlowType() === "SameBankRecipients") {
            this.view.imgBank.isVisible = false;
        } else {
            this.view.imgBank.isVisible = true;
            this.view.imgBank.src = "externalbank.png";
        }
    },
    setTransactions: function(data) {
        var segmentData = [];
        for (var i = 0; i < data.length; i++) {
            if (data[i].transactionType === "ExternalTransfer") {
                data[i].fromAccountName = data[i].fromNickName;
                data[i].scheduledDate = data[i].transactionDate;
                segmentData.push(data[i]);
            }
        }
        var dataMap = this.getDataMap();
        this.view.segTransactions.widgetDataMap = dataMap;
        this.view.segTransactions.isVisible = true;
        if (segmentData.length > 0) {
            this.view.flxNoTransactions.isVisible = false;
            this.view.segTransactions.setData(segmentData);
        } else {
            this.view.segTransactions.isVisible = false;
            this.view.flxNoTransactions.isVisible = true;
        }
    },
    getDataMap: function() {
        var dataMap = {};
        dataMap = {
            "lblAccountName": "description",
            "lblAccountBal": "transactionDate",
            "lblAccountBalValue": "amount",
            "lblTypeName": "lblHeader",
            "lblTypeValue": ""
        };
        return dataMap;
    },
    segTransactionsOnRowClick: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.setEntryPoint("makeatransfer", "frmManageTransferRecipientEurope");
        var transactionDetails = navManager.getCustomInfo("frmManageTransferRecipientEurope");
        var data = this.view.segTransactions.selectedRowItems[0];
        navManager.setCustomInfo("frmEuropeTransactionDetails", data);
        navManager.setEntryPoint("frmEuropeTransactionDetails", "ManageTransferRecipient");
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transferModulePresentationController.commonFunctionForNavigation("frmEuropeTransactionDetails");
    }
});
define("TransferModuleEurope/frmManageTransferRecipientEuropeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_b66e7f25aafc446e8c885218ebf657f5: function AS_Form_b66e7f25aafc446e8c885218ebf657f5(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_cba584c4c7e94cbfa17ca0d2f395ddc1: function AS_Form_cba584c4c7e94cbfa17ca0d2f395ddc1(eventobject) {
        var self = this;
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    AS_Form_ef820b9f1a1a4792be3c7b5c99a155b8: function AS_Form_ef820b9f1a1a4792be3c7b5c99a155b8(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_e7502db0dc3445c7aaf6f71e419308d3: function AS_BarButtonItem_e7502db0dc3445c7aaf6f71e419308d3(eventobject) {
        var self = this;
        this.iphoneInformationIcononClick();
    }
});
define("TransferModuleEurope/frmManageTransferRecipientEuropeController", ["TransferModuleEurope/userfrmManageTransferRecipientEuropeController", "TransferModuleEurope/frmManageTransferRecipientEuropeControllerActions"], function() {
    var controller = require("TransferModuleEurope/userfrmManageTransferRecipientEuropeController");
    var controllerActions = ["TransferModuleEurope/frmManageTransferRecipientEuropeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
