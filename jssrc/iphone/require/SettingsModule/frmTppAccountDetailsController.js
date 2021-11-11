define("SettingsModule/userfrmTppAccountDetailsController", {
    //Type your controller code here 
    initActions: function() {
        this.view.customHeader.flxBack.onClick = function() {
            var navMan = applicationManager.getNavigationManager();
            navMan.goBack();
        };
        this.mapConsentDetails();
    },
    mapConsentDetails: function() {
        var navManager = applicationManager.getNavigationManager();
        var selectedIban = navManager.getCustomInfo('frmTppAccountDetails');
        this.view.customHeader.lblLocateUs.text = selectedIban.selectedAccount.lblTitle;
        applicationManager.getPresentationUtility().showLoadingScreen();
        var settingsModule = applicationManager.getModulesPresentationController("SettingsModule");
        settingsModule.mapAccountDetails(selectedIban.rowId, selectedIban.selectedAccount.lblDetails, selectedIban.index);
    },
    setSegmentData: function(accountData) {
        this.view.segAccountDetails.widgetDataMap = this.getWidgetDataMap();
        this.view.segAccountDetails.setData(accountData);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    getWidgetDataMap: function() {
        var map = {
            lblTitle: "lblTitle",
            lblDetails: "lblDetails",
        };
        return map;
    }
});
define("SettingsModule/frmTppAccountDetailsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_e2be6b412bce4904a6ee5e4f253b2a2d: function AS_Form_e2be6b412bce4904a6ee5e4f253b2a2d(eventobject) {
        var self = this;
        return self.initActions.call(this);
    }
});
define("SettingsModule/frmTppAccountDetailsController", ["SettingsModule/userfrmTppAccountDetailsController", "SettingsModule/frmTppAccountDetailsControllerActions"], function() {
    var controller = require("SettingsModule/userfrmTppAccountDetailsController");
    var controllerActions = ["SettingsModule/frmTppAccountDetailsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
