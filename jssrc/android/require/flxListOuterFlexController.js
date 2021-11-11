define("userflxListOuterFlexController", {
    //Type your controller code here
});
define("flxListOuterFlexControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxListOuterFlexController", ["userflxListOuterFlexController", "flxListOuterFlexControllerActions"], function() {
    var controller = require("userflxListOuterFlexController");
    var controllerActions = ["flxListOuterFlexControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
