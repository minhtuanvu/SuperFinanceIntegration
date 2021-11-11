define("userflxHoldingsWeSFController", {
    //Type your controller code here 
});
define("flxHoldingsWeSFControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxHoldingsWeSFController", ["userflxHoldingsWeSFController", "flxHoldingsWeSFControllerActions"], function() {
    var controller = require("userflxHoldingsWeSFController");
    var controllerActions = ["flxHoldingsWeSFControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
