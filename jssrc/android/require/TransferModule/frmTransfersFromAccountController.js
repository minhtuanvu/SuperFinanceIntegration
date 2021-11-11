define("TransferModule/userfrmTransfersFromAccountController", {
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
        if (this.view.flxHeaderSearchbox.height === "40dp") {
            this.view.flxHeaderSearchbox.height = "0dp";
            // this.view.flxHeaderSearchbox.isVisible = false;
            this.view.flxSearch.height = "55dp";
            //this.view.flxSearch.isVisible = true;
            this.view.flxHeader.isVisible = true;
            this.view.flxMainContainer.top = "56dp";
        }
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
            this.view.flxMainContainer.top = "0dp";
        }
        this.view.flxMainContainer.skin = "slFSbox";
        this.initActions();
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
        transferModulePresentationController.commonFunctionForNavigation("frmTransferAmount");
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
        var transModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var processedData = transModPresentationController.processAccountsData(frmaccdata);
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
        var scope = this;
        if (this.view.flxHeaderSearchbox.height === "40dp") {
            if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
                this.view.flxHeader.isVisible = false;
                this.view.flxMainContainer.top = "0dp";
                this.view.flxHeaderSearchbox.height = "0dp";
                // this.view.flxHeaderSearchbox.isVisible = false;
                this.view.flxMainContainer.skin = "slFSbox";
                this.view.flxSearch.height = "55dp";
                //this.view.flxSearch.isVisible = true;
            } else {
                this.view.flxMainContainer.skin = "slFSbox";
                this.view.flxMainContainer.top = "56dp";
                this.view.flxHeader.isVisible = true;
                this.view.flxSearch.height = "55dp";
                // this.view.flxSearch.isVisible = true;
                this.view.flxHeaderSearchbox.height = "0dp";
                // this.view.flxHeaderSearchbox.isVisible = false;
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
            this.view.flxSearch.height = "0dp";
            // this.view.flxSearch.isVisible = false;
            this.view.flxHeader.isVisible = false;
            this.view.flxMainContainer.top = "40dp";
            this.view.customSearchbox.tbxSearch.text = "";
            this.view.flxHeaderSearchbox.height = "40dp";
            // this.view.flxHeaderSearchbox.isVisible = true;
            this.view.flxMainContainer.skin = "sknFlxScrlffffff";
            kony.timer.schedule("timerId", function() {
                scope.view.customSearchbox.tbxSearch.setFocus(true);
            }, 0.1, false);
            this.view.customSearchbox.tbxSearch.onTextChange = this.searchdata;
        }
        this.view.forcelayout();
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
define("TransferModule/frmTransfersFromAccountControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_def3e4f4dc044d52ac7bd450efab43ff: function AS_Form_def3e4f4dc044d52ac7bd450efab43ff(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_d17def117dbe4a45931a975e96d15180: function AS_Form_d17def117dbe4a45931a975e96d15180(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_g06da55ba03740b78ce8d43dbc568aa9: function AS_BarButtonItem_g06da55ba03740b78ce8d43dbc568aa9(eventobject) {
        var self = this;
        this.cancelOnClick();
    }
});
define("TransferModule/frmTransfersFromAccountController", ["TransferModule/userfrmTransfersFromAccountController", "TransferModule/frmTransfersFromAccountControllerActions"], function() {
    var controller = require("TransferModule/userfrmTransfersFromAccountController");
    var controllerActions = ["TransferModule/frmTransfersFromAccountControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
