define("userflxNAOPersonalDetailsController", {
    //Type your controller code here
});
define("flxNAOPersonalDetailsControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxNAOPersonalDetailsController", ["userflxNAOPersonalDetailsController", "flxNAOPersonalDetailsControllerActions"], function() {
    var controller = require("userflxNAOPersonalDetailsController");
    var controllerActions = ["flxNAOPersonalDetailsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
