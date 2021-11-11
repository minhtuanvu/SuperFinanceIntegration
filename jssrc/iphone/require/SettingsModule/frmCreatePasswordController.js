define("SettingsModule/userfrmCreatePasswordController", {
    //Type your controller code here 
});
define("SettingsModule/frmCreatePasswordControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("SettingsModule/frmCreatePasswordController", ["SettingsModule/userfrmCreatePasswordController", "SettingsModule/frmCreatePasswordControllerActions"], function() {
    var controller = require("SettingsModule/userfrmCreatePasswordController");
    var controllerActions = ["SettingsModule/frmCreatePasswordControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
