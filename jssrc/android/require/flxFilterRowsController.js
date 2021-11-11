define("userflxFilterRowsController", {
    //Type your controller code here 
});
define("flxFilterRowsControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxFilterRowsController", ["userflxFilterRowsController", "flxFilterRowsControllerActions"], function() {
    var controller = require("userflxFilterRowsController");
    var controllerActions = ["flxFilterRowsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
