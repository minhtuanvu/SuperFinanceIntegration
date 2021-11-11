define("userflxSettingHeaderController", {
    //Type your controller code here
});
define("flxSettingHeaderControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSettingHeaderController", ["userflxSettingHeaderController", "flxSettingHeaderControllerActions"], function() {
    var controller = require("userflxSettingHeaderController");
    var controllerActions = ["flxSettingHeaderControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
