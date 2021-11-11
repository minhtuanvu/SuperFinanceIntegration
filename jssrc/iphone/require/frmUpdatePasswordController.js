define("userfrmUpdatePasswordController", {
    preShowUiSettings: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start frmUpdatePasswordController : preShowUiSettings ####");
            if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
                this.view.flxHeader.isVisible = false;
            } else {
                this.view.flxHeader.customHeader.lblLocateUs.text = "Update Password";
                this.view.flxHeader.isVisible = true;
            }
        } catch (err) {
            loggerManager.log("#### in catch " + JSON.stringify(err) + " ####");
        }
    }
});
define("frmUpdatePasswordControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_ecdc23c0137447c5935d447b7aff9b68: function AS_Form_ecdc23c0137447c5935d447b7aff9b68(eventobject) {
        var self = this;
        this.preShowUiSettings();
    }
});
define("frmUpdatePasswordController", ["userfrmUpdatePasswordController", "frmUpdatePasswordControllerActions"], function() {
    var controller = require("userfrmUpdatePasswordController");
    var controllerActions = ["frmUpdatePasswordControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
