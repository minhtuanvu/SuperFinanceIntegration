define("userflxUsrmgmtMainController", {
    //Type your controller code here 
});
define("flxUsrmgmtMainControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxUsrmgmtMainController", ["userflxUsrmgmtMainController", "flxUsrmgmtMainControllerActions"], function() {
    var controller = require("userflxUsrmgmtMainController");
    var controllerActions = ["flxUsrmgmtMainControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
