define("userflxLocationController", {
    //Type your controller code here
});
define("flxLocationControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxLocationController", ["userflxLocationController", "flxLocationControllerActions"], function() {
    var controller = require("userflxLocationController");
    var controllerActions = ["flxLocationControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
