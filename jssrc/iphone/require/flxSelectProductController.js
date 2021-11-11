define("userflxSelectProductController", {
    //Type your controller code here
});
define("flxSelectProductControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSelectProductController", ["userflxSelectProductController", "flxSelectProductControllerActions"], function() {
    var controller = require("userflxSelectProductController");
    var controllerActions = ["flxSelectProductControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
