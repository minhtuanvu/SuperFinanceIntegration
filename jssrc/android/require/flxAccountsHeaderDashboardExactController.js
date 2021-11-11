define("userflxAccountsHeaderDashboardExactController", {
    //Type your controller code here
});
define("flxAccountsHeaderDashboardExactControllerActions", {
    //Type your controller code here
});
define("flxAccountsHeaderDashboardExactController", ["userflxAccountsHeaderDashboardExactController", "flxAccountsHeaderDashboardExactControllerActions"], function() {
    var controller = require("userflxAccountsHeaderDashboardExactController");
    var controllerActions = ["flxAccountsHeaderDashboardExactControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
