define("PayAPersonModule/userfrmP2pFromAccountController", {
    frmAccountsFlag: true,
    segmentData: null,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
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
        //this.setSegmentData();
        this.initActions();
        this.setSegData();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    initActions: function() {
        var scope = this;
        this.view.customHeader.flxBack.onClick = function() {
            var navMan = applicationManager.getNavigationManager();
            navMan.goBack();
        }
        this.view.segAccounts.onRowClick = function() {
            scope.segmentRowClick();
        }
        this.view.customHeader.btnRight.onClick = function() {
            var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
            payeeMod.presentationController.cancelCommon();;
        }
        this.view.tbxSearch.onTouchStart = this.showSearch;
        this.view.customSearchbox.btnCancel.onClick = this.showSearch;
    },
    showSearch: function() {
        //   if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
        //      }
        //else {
        var scope = this;
        if (this.view.flxHeaderSearchbox.isVisible === true) {
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
            if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
                this.view.flxHeader.isVisible = false;
                this.view.flxHeaderSearchbox.isVisible = false;
                this.view.flxMainContainer.top = "0dp";
                this.view.flxSearch.isVisible = true;
            } else {
                this.view.flxHeader.isVisible = true;
                this.view.flxHeaderSearchbox.isVisible = false;
                this.view.flxMainContainer.top = "56dp";
                this.view.flxSearch.isVisible = true;
            }
        } else {
            this.view.flxSearch.isVisible = false;
            this.view.flxHeader.isVisible = false;
            this.view.flxMainContainer.top = "40dp";
            this.view.customSearchbox.tbxSearch.text = "";
            this.view.flxHeaderSearchbox.isVisible = true;
            // this.view.customSearchbox.tbxSearch.setFocus(true);
            kony.timer.schedule("timerId", function() {
                scope.view.customSearchbox.tbxSearch.setFocus(true);
            }, 0.2, false);
            this.view.customSearchbox.tbxSearch.onTextChange = this.searchdata;
        }
        // }
    },
    setSegData: function() {
        var navManager = applicationManager.getNavigationManager();
        var accData = navManager.getCustomInfo("frmP2pFromAccount");
        var processedData = applicationManager.getDataProcessorUtility().processAccountsData(accData);
        this.view.segAccounts.widgetDataMap = {
            lblAccountName: "processedName",
            lblAccountBalValue: "availableBalance",
            lblBankName: "bankName",
            lblAccountId: "accountID",
            lblAccountBal: "accountBalanceType"
        };
        this.view.segAccounts.setData(processedData);
        this.segmentData = processedData;
    },
    segmentRowClick: function() {
        var navManager = applicationManager.getNavigationManager();
        var data = this.view.segAccounts.selectedItems[0];
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        payeeMod.presentationController.setFromAccountsForP2p(data);
        payeeMod.presentationController.commonFunctionForNavigation("frmP2pAmount");
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
define("PayAPersonModule/frmP2pFromAccountControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_i963c8b3369b475da87f4b22f2891309: function AS_Form_i963c8b3369b475da87f4b22f2891309(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_c04c664732fe42e9b2aeb261b7428a9b: function AS_Form_c04c664732fe42e9b2aeb261b7428a9b(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_ca8d2fa9fbd94018aedbbb6a836d36ae: function AS_BarButtonItem_ca8d2fa9fbd94018aedbbb6a836d36ae(eventobject) {
        var self = this;
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        payeeMod.presentationController.commonFunctionForNavigation("frmTransfers");
    }
});
define("PayAPersonModule/frmP2pFromAccountController", ["PayAPersonModule/userfrmP2pFromAccountController", "PayAPersonModule/frmP2pFromAccountControllerActions"], function() {
    var controller = require("PayAPersonModule/userfrmP2pFromAccountController");
    var controllerActions = ["PayAPersonModule/frmP2pFromAccountControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
