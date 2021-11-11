define("SettingsModule/userfrmSelectTPPController", {
    //Type your controller code here 
    initActions: function() {
        this.view.customHeader.flxBack.onClick = function() {
            var navMan = applicationManager.getNavigationManager();
            navMan.goBack();
        };
        this.view.segTPP.onRowClick = this.segRowClick;
    },
    preShow: function() {
        this.initActions();
        applicationManager.getPresentationUtility().showLoadingScreen();
        var settingsModule = applicationManager.getModulesPresentationController("SettingsModule");
        settingsModule.getTPPData();
    },
    setSegmentData: function(tppData) {
        this.view.segTPP.widgetDataMap = this.getWidgetDataMap();
        this.view.segTPP.setData(tppData);
        this.view.segTPP.setVisibility(true);
        this.view.flxNoTpp.setVisibility(false);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    getWidgetDataMap: function() {
        var map = {
            imgTPP: "imgTPP",
            lblTPP: "lblTPP",
            lblDaysLeft: "lblDaysLeft"
        };
        return map;
    },
    showErrorMessage: function(errorObj) {
        if (errorObj) {
            this.view.segTPP.setVisibility(false);
            this.view.flxNoTpp.setVisibility(true);
            this.view.lblnoTpp.text = errorObj;
        }
    },
    segRowClick: function() {
        var rowId = this.view.segTPP.selectedRowIndex[1];
        var selectedBank = this.view.segTPP.data[rowId];
        var navManager = applicationManager.getNavigationManager();
        navManager.setCustomInfo('frmTppBankNameSelection', {
            selectedBank,
            rowId
        });
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmTppBankNameSelection");
    }
});
define("SettingsModule/frmSelectTPPControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_h43f3c85334b4e97afe868041f11715c: function AS_Form_h43f3c85334b4e97afe868041f11715c(eventobject) {
        var self = this;
        return self.preShow.call(this);
    }
});
define("SettingsModule/frmSelectTPPController", ["SettingsModule/userfrmSelectTPPController", "SettingsModule/frmSelectTPPControllerActions"], function() {
    var controller = require("SettingsModule/userfrmSelectTPPController");
    var controllerActions = ["SettingsModule/frmSelectTPPControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
