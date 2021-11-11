define("userflxDefaultAccountController", {
    //Type your controller code here
});
define("flxDefaultAccountControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxDefaultAccountController", ["userflxDefaultAccountController", "flxDefaultAccountControllerActions"], function() {
    var controller = require("userflxDefaultAccountController");
    var controllerActions = ["flxDefaultAccountControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
