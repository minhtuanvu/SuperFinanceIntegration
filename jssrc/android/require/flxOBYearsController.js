define("userflxOBYearsController", {
    //Type your controller code here
});
define("flxOBYearsControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxOBYearsController", ["userflxOBYearsController", "flxOBYearsControllerActions"], function() {
    var controller = require("userflxOBYearsController");
    var controllerActions = ["flxOBYearsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
