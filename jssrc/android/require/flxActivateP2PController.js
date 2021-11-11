define("userflxActivateP2PController", {
    //Type your controller code here 
});
define("flxActivateP2PControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxActivateP2PController", ["userflxActivateP2PController", "flxActivateP2PControllerActions"], function() {
    var controller = require("userflxActivateP2PController");
    var controllerActions = ["flxActivateP2PControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
