define("userCopyflxMenuController", {
    //Type your controller code here 
});
define("CopyflxMenuControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("CopyflxMenuController", ["userCopyflxMenuController", "CopyflxMenuControllerActions"], function() {
    var controller = require("userCopyflxMenuController");
    var controllerActions = ["CopyflxMenuControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
