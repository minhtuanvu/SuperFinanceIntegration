define("userflxApproachListSFController", {
    //Type your controller code here 
});
define("flxApproachListSFControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxApproachListSFController", ["userflxApproachListSFController", "flxApproachListSFControllerActions"], function() {
    var controller = require("userflxApproachListSFController");
    var controllerActions = ["flxApproachListSFControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
