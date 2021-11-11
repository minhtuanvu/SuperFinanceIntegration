define("userflxMakeTravelHeaderController", {
    //Type your controller code here
});
define("flxMakeTravelHeaderControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxMakeTravelHeaderController", ["userflxMakeTravelHeaderController", "flxMakeTravelHeaderControllerActions"], function() {
    var controller = require("userflxMakeTravelHeaderController");
    var controllerActions = ["flxMakeTravelHeaderControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
