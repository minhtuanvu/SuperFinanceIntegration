define("userflxCustomMainController", {
    //Type your controller code here 
});
define("flxCustomMainControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxCustomMainController", ["userflxCustomMainController", "flxCustomMainControllerActions"], function() {
    var controller = require("userflxCustomMainController");
    var controllerActions = ["flxCustomMainControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
