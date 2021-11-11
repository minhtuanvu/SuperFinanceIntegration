define("userflxheaderController", {
    //Type your controller code here 
});
define("flxheaderControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxheaderController", ["userflxheaderController", "flxheaderControllerActions"], function() {
    var controller = require("userflxheaderController");
    var controllerActions = ["flxheaderControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
