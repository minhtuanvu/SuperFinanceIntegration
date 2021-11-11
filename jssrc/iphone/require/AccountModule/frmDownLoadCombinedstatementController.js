define("AccountModule/userfrmDownLoadCombinedstatementController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preshow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        this.view.customHeader.lblLocateUs.centerX = "50%";
        var navMan = applicationManager.getNavigationManager();
        navMan.setCustomInfo("CombinedStatementStartDate", "");
        navMan.setCustomInfo("CombinedStatementEndDate", "");
        this.view.btnBackToStatement.onClick = this.backToStatements;
        this.view.onDeviceBack = function() {
            kony.print("Device Back")
        };
    },
    backToStatements: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.setCustomInfo("isGenerateNewStatementInvoked", true);
        navMan.navigateTo("frmAccStatements");
    }
});
define("AccountModule/frmDownLoadCombinedstatementControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_adad127d6f0f4f68b4ba4d5fdd9fd0c9: function AS_Form_adad127d6f0f4f68b4ba4d5fdd9fd0c9(eventobject) {
        var self = this;
        return self.init.call(this);
    },
    AS_Form_h42ef592f01849a480ff2ebb85ae0db5: function AS_Form_h42ef592f01849a480ff2ebb85ae0db5(eventobject) {
        var self = this;
        return self.preshow.call(this);
    }
});
define("AccountModule/frmDownLoadCombinedstatementController", ["AccountModule/userfrmDownLoadCombinedstatementController", "AccountModule/frmDownLoadCombinedstatementControllerActions"], function() {
    var controller = require("AccountModule/userfrmDownLoadCombinedstatementController");
    var controllerActions = ["AccountModule/frmDownLoadCombinedstatementControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
