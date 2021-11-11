define("userflxSelectUserIdController", {
    //Type your controller code here 
});
define("flxSelectUserIdControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSelectUserIdController", ["userflxSelectUserIdController", "flxSelectUserIdControllerActions"], function() {
    var controller = require("userflxSelectUserIdController");
    var controllerActions = ["flxSelectUserIdControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
