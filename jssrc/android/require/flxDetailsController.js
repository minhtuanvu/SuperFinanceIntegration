define("userflxDetailsController", {
    //Type your controller code here
});
define("flxDetailsControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxDetailsController", ["userflxDetailsController", "flxDetailsControllerActions"], function() {
    var controller = require("userflxDetailsController");
    var controllerActions = ["flxDetailsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
