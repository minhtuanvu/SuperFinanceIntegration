define("userflxJointHoldersController", {
    //Type your controller code here 
});
define("flxJointHoldersControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxJointHoldersController", ["userflxJointHoldersController", "flxJointHoldersControllerActions"], function() {
    var controller = require("userflxJointHoldersController");
    var controllerActions = ["flxJointHoldersControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
