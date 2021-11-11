define("userflxTravelPlanController", {
    //Type your controller code here
});
define("flxTravelPlanControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxTravelPlanController", ["userflxTravelPlanController", "flxTravelPlanControllerActions"], function() {
    var controller = require("userflxTravelPlanController");
    var controllerActions = ["flxTravelPlanControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
