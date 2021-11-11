define("TransferModuleEurope/userfrmTransfersFromAccountEuropeController", {
    transferType: '',
    segmentData: null,
    //     onNavigate: function (obj) {
    //         if (obj == undefined) {
    //             return;
    //         }
    //         var scope = this;
    //         var setType = {
    //             "mykony": function () {
    //                 scope.myKonySegmentData();
    //             },
    //             "myother": function () {
    //                 scope.myOtherSegmentData();
    //             },
    //             "otherkony": function () {
    //                 scope.otherKonySegmentData();
    //             },
    //             "otherbank": function () {
    //                 scope.otherBankSegmentData();
    //             },
    //             "international": function () {
    //                 scope.internationalSegmentData();
    //             },
    //             "wire": function () {
    //                 scope.wireSegmentData();
    //             },
    //         };
    //         this.transferType = obj;
    //         setType[obj];
    //     },
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        // applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (this.view.flxHeaderSearchbox.isVisible === true) {
            this.view.flxHeaderSearchbox.isVisible = false;
            this.view.flxSearch.isVisible = true;
            this.view.flxHeader.isVisible = true;
            this.view.flxMainContainer.top = "56dp";
        }
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
            this.view.flxMainContainer.top = "0dp";
        }
        this.initActions();
        this.view.flxMainContainer.skin = "slFSbox";
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    initActions: function() {
        var scope = this;
        this.view.flxNoTransactions.isVisible = false;
        // this.view.flxHeaderNT.isVisible=true;
        // this.view.flxSeperator3.isVisible=true;
        this.view.segAccounts.isVisible = true;
        this.view.tbxSearch.text = "";
        this.setSegmentData();
        this.view.customHeader.flxBack.onClick = function() {
            var navMan = applicationManager.getNavigationManager();
            navMan.goBack();
        }
        this.view.segAccounts.onRowClick = function() {
            scope.segmentRowClick();
        }
        this.view.customHeader.btnRight.onClick = this.cancelOnClick;
        this.view.tbxSearch.onTouchStart = this.showSearch;
        // this.view.tbxSearch.onTextChange = this.showSearch;
        this.view.customSearchbox.btnCancel.onClick = this.showSearch;
    },
    cancelOnClick: function() {
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transferModulePresentationController.cancelCommon();
        this.view.flxMainContainer.skin = "slFSbox";
    },
    segmentRowClick: function() {
        var selaccdata = [];
        var navMan = applicationManager.getNavigationManager();
        var rowindex = this.view.segAccounts.selectedRowIndex[1];
        var frmaccdata = this.view.segAccounts.data[rowindex];
        selaccdata.push(frmaccdata);
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var tranAmt = navMan.getCustomInfo("frmTransferAmount");
        transferModulePresentationController.setFromAccountsForTransactions(selaccdata[0]);
        transferModulePresentationController.commonFunctionForNavigation("frmTransferAmountEurope");
    },
    //     myKonySegmentData: function () {
    //         scope.myOtherSegmentData();
    //     },
    setSegmentData: function() {
        var frmaccdata = [];
        var navMan = applicationManager.getNavigationManager();
        var accdata = navMan.getCustomInfo("frmTransfersFromAccount");
        //   var toaccdata=navMan.getCustomInfo("frmTransfersToAccount");
        var transaMan = applicationManager.getTransactionManager();
        //  var frmdata= navMan.getCustomInfo("frmTransferAmount");
        var accountsData = accdata.fromaccounts;
        //  if(toaccdata.type===applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts"))
        if (transaMan.getTransactionObject().transactionType != null && transaMan.getTransactionObject().transactionType != undefined && transaMan.getTransactionObject().transactionType != "" && transaMan.getTransactionObject().transactionType === "InternalTransfer") {
            for (var i = 0; i < accountsData.length; i++) {
                if (accountsData[i]["accountID"] !== transaMan.getTransactionObject().toAccountNumber) {
                    frmaccdata.push(accountsData[i]);
                }
            }
        } else {
            frmaccdata = accountsData;
        }
        var  transModPT = applicationManager.getModulesPresentationController("TransferModule");
        var processedData = transModPT.processAccountsData(frmaccdata);
        if (processedData.length > 0) {
            this.view.flxNoTransactions.isVisible = false;
            this.view.segAccounts.isVisible = true;
            this.view.segAccounts.widgetDataMap = {
                lblAccountName: "processedName",
                lblBankName: "bankName",
                lblAccountBalValue: "availableBalance",
                lblAccountBal: "accountBalanceType",
                accountNumber: "accountNumber"
            };
            this.view.segAccounts.setData(processedData);
            this.segmentData = this.view.segAccounts.data;
        } else {
            this.segmentData = [];
            this.view.flxNoTransactions.isVisible = true;
            // this.view.flxHeaderNT.isVisible=false;
            // this.view.flxSeperator3.isVisible=false;
            this.view.segAccounts.isVisible = false;
        }
        // applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    //     otherKonySegmentData: function () {
    //         scope.myOtherSegmentData();
    //     },
    //     otherBankSegmentData: function () {
    //         scope.myOtherSegmentData();
    //     },
    //     internationalSegmentData: function () {
    //     },
    //     wireSegmentData: function () {
    //     },
    showSearch: function() {
        //     if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
        //     } else {
        if (this.view.flxHeaderSearchbox.isVisible == true) {
            this.view.flxHeaderSearchbox.isVisible = false;
            this.view.flxMainContainer.skin = "slFSbox";
            this.view.flxSearch.isVisible = true;
            if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
                this.view.flxHeader.isVisible = false;
                this.view.flxMainContainer.top = "0dp";
            } else {
                this.view.flxHeader.isVisible = true;
                this.view.flxMainContainer.top = "56dp";
            }
            if (this.segmentData.length > 0) {
                this.view.segAccounts.setData(this.segmentData);
                this.view.flxNoTransactions.isVisible = false;
                // this.view.flxHeaderNT.isVisible=true;
                // this.view.flxSeperator3.isVisible=true;
                this.view.segAccounts.isVisible = true;
            } else {
                this.view.flxNoTransactions.isVisible = true;
                // this.view.flxHeaderNT.isVisible=false;
                // this.view.flxSeperator3.isVisible=false;
                this.view.segAccounts.isVisible = false;
            }
        } else {
            this.view.flxMainContainer.skin = "sknFlxScrlffffff";
            this.view.flxSearch.isVisible = false;
            this.view.flxHeader.isVisible = false;
            this.view.flxMainContainer.top = "40dp";
            this.view.customSearchbox.tbxSearch.text = "";
            this.view.flxHeaderSearchbox.isVisible = true;
            this.view.customSearchbox.tbxSearch.setFocus(true);
            this.view.customSearchbox.tbxSearch.onTextChange = this.searchdata;
        }
        //}
    },
    searchdata: function() {
        var searchData;
        var navMan = applicationManager.getNavigationManager();
        var searchtext = this.view.customSearchbox.tbxSearch.text.toLowerCase();
        if (searchtext) {
            this.view.segAccounts.removeAll();
            var data = this.segmentData;
            searchData = applicationManager.getDataProcessorUtility().commonSegmentSearch("accountName", searchtext, data);
            if (searchData.length > 0) {
                this.view.segAccounts.setData(searchData);
                this.view.flxNoTransactions.isVisible = false;
                // this.view.flxHeaderNT.isVisible=true;
                // this.view.flxSeperator3.isVisible=true;
                this.view.segAccounts.isVisible = true;
            } else {
                this.view.segAccounts.isVisible = false;
                this.view.flxNoTransactions.isVisible = true;
                // this.view.flxHeaderNT.isVisible=false;
                // this.view.flxSeperator3.isVisible=false;
            }
        } else {
            if (this.segmentData.length > 0) {
                this.view.segAccounts.setData(this.segmentData);
                this.view.flxNoTransactions.isVisible = false;
                // this.view.flxHeaderNT.isVisible=true;
                // this.view.flxSeperator3.isVisible=true;
                this.view.segAccounts.isVisible = true;
            } else {
                this.view.flxNoTransactions.isVisible = true;
                // this.view.flxHeaderNT.isVisible=false;
                // this.view.flxSeperator3.isVisible=false;
                this.view.segAccounts.isVisible = false;
            }
        }
    }
});
define("TransferModuleEurope/frmTransfersFromAccountEuropeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_e271814b10b144c5ad9ea99b2f00c1e8: function AS_Form_e271814b10b144c5ad9ea99b2f00c1e8(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_d216d5996a4b4ad18eeff9c437b15a1a: function AS_Form_d216d5996a4b4ad18eeff9c437b15a1a(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_dbafd04f93884b82879cc233c6e77a3a: function AS_BarButtonItem_dbafd04f93884b82879cc233c6e77a3a(eventobject) {
        var self = this;
        this.cancelOnClick();
    }
});
define("TransferModuleEurope/frmTransfersFromAccountEuropeController", ["TransferModuleEurope/userfrmTransfersFromAccountEuropeController", "TransferModuleEurope/frmTransfersFromAccountEuropeControllerActions"], function() {
    var controller = require("TransferModuleEurope/userfrmTransfersFromAccountEuropeController");
    var controllerActions = ["TransferModuleEurope/frmTransfersFromAccountEuropeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
