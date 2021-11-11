define("userflxEmptyHeaderController", {
    //Type your controller code here
});
define("flxEmptyHeaderControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxEmptyHeaderController", ["userflxEmptyHeaderController", "flxEmptyHeaderControllerActions"], function() {
    var controller = require("userflxEmptyHeaderController");
    var controllerActions = ["flxEmptyHeaderControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
