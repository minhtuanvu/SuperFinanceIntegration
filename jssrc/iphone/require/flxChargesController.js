define("userflxChargesController", {
    //Type your controller code here 
});
define("flxChargesControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxChargesController", ["userflxChargesController", "flxChargesControllerActions"], function() {
    var controller = require("userflxChargesController");
    var controllerActions = ["flxChargesControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
