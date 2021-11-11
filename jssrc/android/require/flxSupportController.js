define("userflxSupportController", {
    //Type your controller code here
});
define("flxSupportControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSupportController", ["userflxSupportController", "flxSupportControllerActions"], function() {
    var controller = require("userflxSupportController");
    var controllerActions = ["flxSupportControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
