define("userflxNoPendingController", {
    //Type your controller code here 
});
define("flxNoPendingControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxNoPendingController", ["userflxNoPendingController", "flxNoPendingControllerActions"], function() {
    var controller = require("userflxNoPendingController");
    var controllerActions = ["flxNoPendingControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
