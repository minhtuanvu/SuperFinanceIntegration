define("TransferModuleEurope/userfrmEuropeSelectCurrencyController", {
    segmentData: null,
    init: function() {
        var scope = this;
        var currentFormObject = kony.application.getCurrentForm();
        var currentForm = currentFormObject.id;
        applicationManager.getPresentationFormUtility().initCommonActions(this, "CALLBACK", currentForm, scope.navigateCustomBack);
    },
    navigateCustomBack: function() {
        var transferModule = applicationManager.getModulesPresentationController("TransferModule");
        transferModule.commonFunctionForgoBack();
    },
    //Purpose is to scroll to the selected row while moving to and fro between screens.
    postShow: function() {},
    preShow: function() {
        if (this.view.flxHeaderSearchbox.isVisible === true) {
            this.view.flxHeaderSearchbox.isVisible = false;
            this.view.flxSearch.isVisible = true;
            this.view.flxHeader.isVisible = true;
            if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
                this.view.flxMainContainer.top = "0dp";
            } else {
                this.view.flxMainContainer.top = "56dp";
            }
        }
        this.view.flxMainContainer.skin = "sknFlxScrlffffff";
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
            this.view.flxMainContainer.top = "0dp";
        }
        this.initActions();
        this.view.flxSearch.height = "55dp";
        this.view.customSearchbox.tbxSearch.placeholder = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.search	");
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        this.setSegmentData();
        this.view.segCurrencySelection.onRowClick = this.onRowClick;
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    initActions: function() {
        this.view.customHeader.btnRight.onClick = this.cancelOnClick;
        this.view.customSearchbox.tbxSearch.onTextChange = this.tbxSearchOnTextChange;
        this.view.tbxSearch.onTouchStart = this.showSearch;
        this.view.customSearchbox.btnCancel.onClick = this.showSearch;
    },
    tbxSearchOnTextChange: function() {
        this.view.flxMainContainer.skin = "sknFlxScrlffffff";
        var searchtext = this.view.customSearchbox.tbxSearch.text.toLowerCase();
        var searchSegmentData = null;
        var data = this.segmentData;
        var newSegmentData = applicationManager.getDataProcessorUtility().multipleCommonSegmentSearch(["currencyCode", "currencyName"], searchtext, data);
        searchSegmentData = newSegmentData;
        if (searchSegmentData.length === 0) {
            this.view.flxNoTransactions.isVisible = true;
            this.view.segCurrencySelection.isVisible = false;
        } else {
            this.view.flxNoTransactions.isVisible = false;
            this.view.segCurrencySelection.isVisible = true;
            this.view.segCurrencySelection.setData(searchSegmentData);
        }
    },
    showSearch: function() {
        var scopeObj = this;
        if (this.view.flxHeaderSearchbox.isVisible === true) {
            //this.view.segRecipients.setData(this.segmentData);
            if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
                this.view.flxMainContainer.skin = "sknFlxScrlffffff";
                this.view.flxMainContainer.top = "0dp";
                this.view.flxHeader.isVisible = false;
                this.view.flxSearch.isVisible = true;
                this.view.flxHeaderSearchbox.isVisible = false;
            } else {
                this.view.flxMainContainer.skin = "sknFlxScrlffffff";
                this.view.flxMainContainer.top = "56dp";
                this.view.flxHeader.isVisible = true;
                this.view.flxSearch.isVisible = true;
                this.view.flxHeaderSearchbox.isVisible = false;
            }
            if (this.segmentData.length === 0) {
                this.view.flxNoTransactions.isVisible = true;
                this.view.segRecipients.isVisible = false;
            } else {
                this.view.flxNoTransactions.isVisible = false;
                this.view.segRecipients.isVisible = true;
                this.deletesegData = this.segmentData;
                this.view.segCurrencySelection.setData(this.segmentData);
            }
            this.view.flxSearch.isVisible = true;
        } else {
            this.view.flxMainContainer.skin = "sknFlxScrlffffff";
            this.view.customSearchbox.tbxSearch.text = "";
            this.view.flxSearch.isVisible = false;
            this.view.flxHeader.isVisible = false;
            this.view.flxMainContainer.top = "40dp";
            this.view.flxHeaderSearchbox.isVisible = true;
            kony.timer.schedule("timerId", function() {
                scopeObj.view.customSearchbox.tbxSearch.setFocus(true);
            }, 0.2, false);
        }
    },
    onRowClick: function() {
        var transferPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var rowindex = this.view.segCurrencySelection.selectedRowIndex[1];
        var data = this.view.segCurrencySelection.data[rowindex];
        var navManager = applicationManager.getNavigationManager();
        navManager.setEntryPoint("selectedcurrency", "frmEuropeSelectCurrency");
        var transactionManager = applicationManager.getTransactionManager();
        if (transferPresentationController.transactionMode === applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts") || transferPresentationController.transactionMode === applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.OtherKonyBankMembers")) {
            transactionManager.setTransactionAttribute("selectedCurrency", data.currencyCode);
        } else {
            transactionManager.setTransactionAttribute("transactionCurrency", data.currencyCode);
        }
        transferPresentationController.commonFunctionForNavigation("frmEuropeTransferAmount");
    },
    setSegmentData: function() {
        var transferPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        if (transferPresentationController.getEuropeFlowType() === "INTERNAL" || transferPresentationController.transactionMode === applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.OtherKonyBankMembers")) {
            transferPresentationController.getFromAndToSupportedCurrencies();
            var segCurData = transferPresentationController.getCurrenciesData();
            this.view.segCurrencySelection.widgetDataMap = this.getWidgetDataMap();
            this.view.segCurrencySelection.setData(segCurData);
            this.segmentData = segCurData;
        } else {
            var segData = transferPresentationController.getCurrencyData();
            this.view.segCurrencySelection.widgetDataMap = this.getWidgetDataMap();
            this.view.segCurrencySelection.setData(segData);
            this.segmentData = segData;
        }
    },
    getWidgetDataMap: function() {
        var map = {
            imgFlag: "imgSrc",
            lblCurrencyType: "currencyName",
            lblCurrencyShortName: "currencyCode",
            lblCurrencySymbol: "currencySymbol"
        };
        return map;
    },
    cancelOnClick: function() {
        var transferPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transferPresentationController.commonFunctionForNavigation("frmEuropeTransferAmount");
    },
});
define("TransferModuleEurope/frmEuropeSelectCurrencyControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_eb1d22f8b8604332a9cb76a5a242cc05: function AS_Form_eb1d22f8b8604332a9cb76a5a242cc05(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_f66bc0c9bb2540bdb26d318ff150fd11: function AS_Form_f66bc0c9bb2540bdb26d318ff150fd11(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_f2535773aec64e96a34f90672ae4d3ad: function AS_BarButtonItem_f2535773aec64e96a34f90672ae4d3ad(eventobject) {
        var self = this;
        this.cancelOnClick();
    }
});
define("TransferModuleEurope/frmEuropeSelectCurrencyController", ["TransferModuleEurope/userfrmEuropeSelectCurrencyController", "TransferModuleEurope/frmEuropeSelectCurrencyControllerActions"], function() {
    var controller = require("TransferModuleEurope/userfrmEuropeSelectCurrencyController");
    var controllerActions = ["TransferModuleEurope/frmEuropeSelectCurrencyControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
