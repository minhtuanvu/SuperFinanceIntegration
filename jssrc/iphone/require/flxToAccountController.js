define("userflxToAccountController", {
    //Type your controller code here
});
define("flxToAccountControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxToAccountController", ["userflxToAccountController", "flxToAccountControllerActions"], function() {
    var controller = require("userflxToAccountController");
    var controllerActions = ["flxToAccountControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
