define("userflxICAcknowledgeRowController", {
    //Type your controller code here 
});
define("flxICAcknowledgeRowControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxICAcknowledgeRowController", ["userflxICAcknowledgeRowController", "flxICAcknowledgeRowControllerActions"], function() {
    var controller = require("userflxICAcknowledgeRowController");
    var controllerActions = ["flxICAcknowledgeRowControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
