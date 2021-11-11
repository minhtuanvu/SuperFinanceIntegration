define("userCopyflxMenu1Controller", {
    //Type your controller code here 
});
define("CopyflxMenu1ControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("CopyflxMenu1Controller", ["userCopyflxMenu1Controller", "CopyflxMenu1ControllerActions"], function() {
    var controller = require("userCopyflxMenu1Controller");
    var controllerActions = ["CopyflxMenu1ControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
