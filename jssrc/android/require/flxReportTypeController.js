define("userflxReportTypeController", {});
define("flxReportTypeControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxReportTypeController", ["userflxReportTypeController", "flxReportTypeControllerActions"], function() {
    var controller = require("userflxReportTypeController");
    var controllerActions = ["flxReportTypeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
