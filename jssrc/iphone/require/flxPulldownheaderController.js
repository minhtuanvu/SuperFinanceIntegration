define("userflxPulldownheaderController", {
    //Type your controller code here 
});
define("flxPulldownheaderControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxPulldownheaderController", ["userflxPulldownheaderController", "flxPulldownheaderControllerActions"], function() {
    var controller = require("userflxPulldownheaderController");
    var controllerActions = ["flxPulldownheaderControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
