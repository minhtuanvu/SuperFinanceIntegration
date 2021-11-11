define("SettingsModule/userfrmOfflineSigningController", {
    //Type your controller code here 
});
define("SettingsModule/frmOfflineSigningControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("SettingsModule/frmOfflineSigningController", ["SettingsModule/userfrmOfflineSigningController", "SettingsModule/frmOfflineSigningControllerActions"], function() {
    var controller = require("SettingsModule/userfrmOfflineSigningController");
    var controllerActions = ["SettingsModule/frmOfflineSigningControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
