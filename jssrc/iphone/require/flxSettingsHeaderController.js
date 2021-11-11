define("userflxSettingsHeaderController", {
    //Type your controller code here
});
define("flxSettingsHeaderControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSettingsHeaderController", ["userflxSettingsHeaderController", "flxSettingsHeaderControllerActions"], function() {
    var controller = require("userflxSettingsHeaderController");
    var controllerActions = ["flxSettingsHeaderControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
