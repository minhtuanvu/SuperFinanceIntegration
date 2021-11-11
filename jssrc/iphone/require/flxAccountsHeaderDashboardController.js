define("userflxAccountsHeaderDashboardController", {
    //Type your controller code here
});
define("flxAccountsHeaderDashboardControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxAccountsHeaderDashboardController", ["userflxAccountsHeaderDashboardController", "flxAccountsHeaderDashboardControllerActions"], function() {
    var controller = require("userflxAccountsHeaderDashboardController");
    var controllerActions = ["flxAccountsHeaderDashboardControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
