define("userflxHoldingsController", {
    //Type your controller code here 
});
define("flxHoldingsControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxHoldingsController", ["userflxHoldingsController", "flxHoldingsControllerActions"], function() {
    var controller = require("userflxHoldingsController");
    var controllerActions = ["flxHoldingsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
