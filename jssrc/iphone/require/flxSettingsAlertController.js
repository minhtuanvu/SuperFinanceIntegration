define("userflxSettingsAlertController", {
    //Type your controller code here
});
define("flxSettingsAlertControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSettingsAlertController", ["userflxSettingsAlertController", "flxSettingsAlertControllerActions"], function() {
    var controller = require("userflxSettingsAlertController");
    var controllerActions = ["flxSettingsAlertControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
