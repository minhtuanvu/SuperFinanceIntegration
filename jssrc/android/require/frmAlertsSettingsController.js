define("userfrmAlertsSettingsController", {
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
            this.view.flxFooter.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = true;
            this.view.flxFooter.isVisible = false;
        }
        this.initActions();
    },
    initActions: function() {
        this.view.segAlerts.onRowClick = function() {
            var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
            settingsMod.presentationController.commonFunctionForNavigation("frmAlertsAccountList");
        };
        this.view.customFooter.flxTransfer.onClick = function() {
            var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
            settingsMod.presentationController.commonFunctionForNavigation("frmTransfers");
        };
    }
});
define("frmAlertsSettingsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_c603f775c03b49988531fc3207293960: function AS_Form_c603f775c03b49988531fc3207293960(eventobject) {
        var self = this;
        this.preShow();
    }
});
define("frmAlertsSettingsController", ["userfrmAlertsSettingsController", "frmAlertsSettingsControllerActions"], function() {
    var controller = require("userfrmAlertsSettingsController");
    var controllerActions = ["frmAlertsSettingsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
