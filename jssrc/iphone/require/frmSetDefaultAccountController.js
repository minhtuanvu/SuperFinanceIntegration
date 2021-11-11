define("userfrmSetDefaultAccountController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    frmPreshow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
            this.view.flxFooter.isVisible = false;
        } else {
            this.view.flxHeader.isVisible = true;
            this.view.flxFooter.isVisible = false;
            this.view.customHeader.flxSearch.setVisibility(false);
        }
        this.initActions();
        //this.setAccountsSegmentData();
        this.setSegDefaultAcct();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    initActions: function() {
        this.view.segSelectAccounts.onRowClick = this.segDefaultAccountOnClick;
        this.view.customHeader.flxBack.onClick = function() {
            var navManager = applicationManager.getNavigationManager();
            navManager.goBack();
        };
    },
    setSegDefaultAcct: function() {
        var navManager = applicationManager.getNavigationManager();
        var configManager = applicationManager.getConfigurationManager();
        var data = navManager.getCustomInfo("frmSetDefaultAccount");
        if ((data.popUpMsg !== null) && (data.popUpMsg !== "") && (data.popUpMsg !== undefined)) {
            var scopeObj = this;
            applicationManager.getDataProcessorUtility().showToastMessageSuccess(scopeObj, data.popUpMsg);
        }
        data.popUpMsg = "";
        this.view.segSelectAccounts.widgetDataMap = {
            "lblTitle": "lblTitle",
            "lblValue": "lblValue",
            "imgArrow": "imgArrow",
            "lblAccId": "lblAccId"
        };
        if (configManager.isFastTransfersFlowEnabled()) {
            data = data.filter(function(obj) {
                return (obj.lblTitle === "Transfers" || obj.lblTitle === "Pay a person") ? false : true;
            });
        }
        this.view.segSelectAccounts.setData(data);
    },
    segDefaultAccountOnClick: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var selectedAcntRow = this.view.segSelectAccounts.selectedIndex[1];
        var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        var selectedRecord = this.view.segSelectAccounts.data[selectedAcntRow];
        var data = [];
        data[0] = selectedRecord;
        navManager.setCustomInfo("frmPreferencesDefaultAccount", data);
        settingsMode.presentationController.setDataDefaultAccLogin(selectedAcntRow);
    },
});
define("frmSetDefaultAccountControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_j7acfdaa76724c8fb73ea11edfbdf6e8: function AS_Form_j7acfdaa76724c8fb73ea11edfbdf6e8(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_hc800463ee0741e4ae96e40c52c29640: function AS_Form_hc800463ee0741e4ae96e40c52c29640(eventobject) {
        var self = this;
        this.frmPreshow();
    }
});
define("frmSetDefaultAccountController", ["userfrmSetDefaultAccountController", "frmSetDefaultAccountControllerActions"], function() {
    var controller = require("userfrmSetDefaultAccountController");
    var controllerActions = ["frmSetDefaultAccountControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
