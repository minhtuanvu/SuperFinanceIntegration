define("userflxMyBudgetsController", {
    //Type your controller code here 
});
define("flxMyBudgetsControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxMyBudgetsController", ["userflxMyBudgetsController", "flxMyBudgetsControllerActions"], function() {
    var controller = require("userflxMyBudgetsController");
    var controllerActions = ["flxMyBudgetsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
