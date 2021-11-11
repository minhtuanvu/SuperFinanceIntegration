define("userflxTransfersManageController", {
    //Type your controller code here 
});
define("flxTransfersManageControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxTransfersManageController", ["userflxTransfersManageController", "flxTransfersManageControllerActions"], function() {
    var controller = require("userflxTransfersManageController");
    var controllerActions = ["flxTransfersManageControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
