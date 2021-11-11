define("userflxCashBalSummaryController", {
    //Type your controller code here 
});
define("flxCashBalSummaryControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxCashBalSummaryController", ["userflxCashBalSummaryController", "flxCashBalSummaryControllerActions"], function() {
    var controller = require("userflxCashBalSummaryController");
    var controllerActions = ["flxCashBalSummaryControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
