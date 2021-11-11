define("userflxSelectPayeeController", {
    //Type your controller code here
});
define("flxSelectPayeeControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSelectPayeeController", ["userflxSelectPayeeController", "flxSelectPayeeControllerActions"], function() {
    var controller = require("userflxSelectPayeeController");
    var controllerActions = ["flxSelectPayeeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
