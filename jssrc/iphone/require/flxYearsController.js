define("userflxYearsController", {
    //Type your controller code here 
});
define("flxYearsControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxYearsController", ["userflxYearsController", "flxYearsControllerActions"], function() {
    var controller = require("userflxYearsController");
    var controllerActions = ["flxYearsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
