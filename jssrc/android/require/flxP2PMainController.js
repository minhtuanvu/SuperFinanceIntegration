define("userflxP2PMainController", {
    //Type your controller code here
});
define("flxP2PMainControllerActions", {
    /*
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxP2PMainController", ["userflxP2PMainController", "flxP2PMainControllerActions"], function() {
    var controller = require("userflxP2PMainController");
    var controllerActions = ["flxP2PMainControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
