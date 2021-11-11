define("userflxFilterCustomViewsController", {
    //Type your controller code here 
});
define("flxFilterCustomViewsControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxFilterCustomViewsController", ["userflxFilterCustomViewsController", "flxFilterCustomViewsControllerActions"], function() {
    var controller = require("userflxFilterCustomViewsController");
    var controllerActions = ["flxFilterCustomViewsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
