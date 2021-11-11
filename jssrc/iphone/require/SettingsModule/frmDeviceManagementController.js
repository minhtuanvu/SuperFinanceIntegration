define("SettingsModule/userfrmDeviceManagementController", {
    //Type your controller code here 
});
define("SettingsModule/frmDeviceManagementControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("SettingsModule/frmDeviceManagementController", ["SettingsModule/userfrmDeviceManagementController", "SettingsModule/frmDeviceManagementControllerActions"], function() {
    var controller = require("SettingsModule/userfrmDeviceManagementController");
    var controllerActions = ["SettingsModule/frmDeviceManagementControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
