define("userflxUserPermissionController", {
    //Type your controller code here 
});
define("flxUserPermissionControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxUserPermissionController", ["userflxUserPermissionController", "flxUserPermissionControllerActions"], function() {
    var controller = require("userflxUserPermissionController");
    var controllerActions = ["flxUserPermissionControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
