define("userflxPFMBudgetController", {
    //Type your controller code here
});
define("flxPFMBudgetControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxPFMBudgetController", ["userflxPFMBudgetController", "flxPFMBudgetControllerActions"], function() {
    var controller = require("userflxPFMBudgetController");
    var controllerActions = ["flxPFMBudgetControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
