define("userflxAchtransationdetailsController", {
    //Type your controller code here 
});
define("flxAchtransationdetailsControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxAchtransationdetailsController", ["userflxAchtransationdetailsController", "flxAchtransationdetailsControllerActions"], function() {
    var controller = require("userflxAchtransationdetailsController");
    var controllerActions = ["flxAchtransationdetailsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
