define("userflxProductAcknowledgementController", {
    //Type your controller code here
});
define("flxProductAcknowledgementControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxProductAcknowledgementController", ["userflxProductAcknowledgementController", "flxProductAcknowledgementControllerActions"], function() {
    var controller = require("userflxProductAcknowledgementController");
    var controllerActions = ["flxProductAcknowledgementControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
