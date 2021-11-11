define("userflxHistoryDetailsListController", {
    //Type your controller code here 
});
define("flxHistoryDetailsListControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxHistoryDetailsListController", ["userflxHistoryDetailsListController", "flxHistoryDetailsListControllerActions"], function() {
    var controller = require("userflxHistoryDetailsListController");
    var controllerActions = ["flxHistoryDetailsListControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
