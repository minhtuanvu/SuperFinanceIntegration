define("userflxGuidelinesController", {
    //Type your controller code here
});
define("flxGuidelinesControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxGuidelinesController", ["userflxGuidelinesController", "flxGuidelinesControllerActions"], function() {
    var controller = require("userflxGuidelinesController");
    var controllerActions = ["flxGuidelinesControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
