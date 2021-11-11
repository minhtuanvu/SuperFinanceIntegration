define("userflxDetailsListController", {
    //Type your controller code here 
});
define("flxDetailsListControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxDetailsListController", ["userflxDetailsListController", "flxDetailsListControllerActions"], function() {
    var controller = require("userflxDetailsListController");
    var controllerActions = ["flxDetailsListControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
