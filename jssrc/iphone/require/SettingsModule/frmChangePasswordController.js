define("SettingsModule/userfrmChangePasswordController", {
    //Type your controller code here 
});
define("SettingsModule/frmChangePasswordControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("SettingsModule/frmChangePasswordController", ["SettingsModule/userfrmChangePasswordController", "SettingsModule/frmChangePasswordControllerActions"], function() {
    var controller = require("SettingsModule/userfrmChangePasswordController");
    var controllerActions = ["SettingsModule/frmChangePasswordControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
