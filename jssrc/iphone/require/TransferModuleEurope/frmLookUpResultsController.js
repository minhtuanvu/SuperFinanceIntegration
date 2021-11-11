define("TransferModuleEurope/userfrmLookUpResultsController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        this.initActions();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    initActions: function() {
        var scope = this;
        this.view.segResults.onRowClick = this.segRowClick;
        this.view.customHeader.flxBack.onClick = scope.flxBackOnClick;
        this.view.customHeader.btnRight.onClick = scope.onClickCancel;
        this.view.btnSearch.onClick = function() {
            var navManager = applicationManager.getNavigationManager();
            navManager.setEntryPoint("searchCountry", "frmLookUpResults");
            var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
            transferModPresentationController.clearSwiftBICSearch();
            transferModPresentationController.commonFunctionForNavigation("frmTransferEuropeSearchSwiftCode");
        }
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        this.setSegmentData();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    onClickCancel: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transferModPresentationController.commonFunctionForNavigation("frmBenSwiftCodeEurope");
    },
    flxBackOnClick: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    setSegmentData: function() {
        this.view.segResults.widgetDataMap = this.getWidgetDataMap();
        var transferMod = applicationManager.getModulesPresentationController("TransferModule");
        var data = transferMod.getSwiftorBICCodeResults();
        if (data && data.length > 0) {
            this.view.flxNoResults.setVisibility(false);
            this.view.segResults.setVisibility(true);
            var segData = this.processData(data);
            this.view.segResults.setData(segData);
        } else {
            this.view.flxNoResults.setVisibility(true);
            this.view.segResults.setVisibility(false);
        }
    },
    getWidgetDataMap: function() {
        var dataMap = {
            lblBankName: "bankName",
            lblAddress: "formattedAddress",
            lblValue: "bic",
            flxRightWrapper: "flxRightWrapper",
            "countryRegion": "countryRegion"
        };
        return dataMap;
    },
    processData: function(data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].country && data[i].city) {
                data[i].formattedAddress = data[i].country + "," + data[i].city;
            } else if (data[i].city) {
                data[i].formattedAddress = data[i].city;
            } else if (data[i].country) {
                data[i].formattedAddress = data[i].country;
            }
        }
        return data;
    },
    segRowClick: function() {
        var rowindex;
        rowindex = Math.floor(this.view.segResults.selectedRowIndex[1]);
        selectedAccount = this.view.segResults.data[rowindex];
        var navMan = applicationManager.getNavigationManager();
        navMan.setCustomInfo("frmLookUpResults", selectedAccount);
        var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transferModPresentationController.setLookUpResultData(selectedAccount);
    }
});
define("TransferModuleEurope/frmLookUpResultsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_d028af91386a48b19ae74739d4d790e1: function AS_Form_d028af91386a48b19ae74739d4d790e1(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_f84e28bfde384d1690fdd9536925e7a0: function AS_Form_f84e28bfde384d1690fdd9536925e7a0(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_i3abeb1ac4d04000bcb2d5c19b894340: function AS_BarButtonItem_i3abeb1ac4d04000bcb2d5c19b894340(eventobject) {
        var self = this;
        this.onClickCancel();
    }
});
define("TransferModuleEurope/frmLookUpResultsController", ["TransferModuleEurope/userfrmLookUpResultsController", "TransferModuleEurope/frmLookUpResultsControllerActions"], function() {
    var controller = require("TransferModuleEurope/userfrmLookUpResultsController");
    var controllerActions = ["TransferModuleEurope/frmLookUpResultsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
