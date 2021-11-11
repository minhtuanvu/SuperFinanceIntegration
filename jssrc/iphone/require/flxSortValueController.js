define("userflxSortValueController", {
    //Type your controller code here 
});
define("flxSortValueControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSortValueController", ["userflxSortValueController", "flxSortValueControllerActions"], function() {
    var controller = require("userflxSortValueController");
    var controllerActions = ["flxSortValueControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
