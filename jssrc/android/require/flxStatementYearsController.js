define("userflxStatementYearsController", {
    //Type your controller code here 
});
define("flxStatementYearsControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxStatementYearsController", ["userflxStatementYearsController", "flxStatementYearsControllerActions"], function() {
    var controller = require("userflxStatementYearsController");
    var controllerActions = ["flxStatementYearsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
