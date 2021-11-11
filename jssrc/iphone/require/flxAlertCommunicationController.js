define("userflxAlertCommunicationController", {
    //Type your controller code here 
});
define("flxAlertCommunicationControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxAlertCommunicationController", ["userflxAlertCommunicationController", "flxAlertCommunicationControllerActions"], function() {
    var controller = require("userflxAlertCommunicationController");
    var controllerActions = ["flxAlertCommunicationControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
