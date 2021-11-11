define("userflxAccountInfoController", {
    //Type your controller code here
});
define("flxAccountInfoControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxAccountInfoController", ["userflxAccountInfoController", "flxAccountInfoControllerActions"], function() {
    var controller = require("userflxAccountInfoController");
    var controllerActions = ["flxAccountInfoControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
