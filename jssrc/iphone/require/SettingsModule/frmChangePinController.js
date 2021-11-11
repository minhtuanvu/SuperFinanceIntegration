define("SettingsModule/userfrmChangePinController", {
    //Type your controller code here 
});
define("SettingsModule/frmChangePinControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("SettingsModule/frmChangePinController", ["SettingsModule/userfrmChangePinController", "SettingsModule/frmChangePinControllerActions"], function() {
    var controller = require("SettingsModule/userfrmChangePinController");
    var controllerActions = ["SettingsModule/frmChangePinControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
