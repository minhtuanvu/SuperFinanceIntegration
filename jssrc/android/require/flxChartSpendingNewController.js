define("userflxChartSpendingNewController", {
    //Type your controller code here
});
define("flxChartSpendingNewControllerActions", {
    //Type your controller code here
});
define("flxChartSpendingNewController", ["userflxChartSpendingNewController", "flxChartSpendingNewControllerActions"], function() {
    var controller = require("userflxChartSpendingNewController");
    var controllerActions = ["flxChartSpendingNewControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
