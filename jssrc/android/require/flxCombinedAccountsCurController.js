define("userflxCombinedAccountsCurController", {
    //Type your controller code here 
});
define("flxCombinedAccountsCurControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxCombinedAccountsCurController", ["userflxCombinedAccountsCurController", "flxCombinedAccountsCurControllerActions"], function() {
    var controller = require("userflxCombinedAccountsCurController");
    var controllerActions = ["flxCombinedAccountsCurControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
