define("userflxDetailsHeaderController", {
    //Type your controller code here
});
define("flxDetailsHeaderControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxDetailsHeaderController", ["userflxDetailsHeaderController", "flxDetailsHeaderControllerActions"], function() {
    var controller = require("userflxDetailsHeaderController");
    var controllerActions = ["flxDetailsHeaderControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
