define("flxBlockedFundsController", ["userflxBlockedFundsController", "flxBlockedFundsControllerActions"], function() {
    var controller = require("userflxBlockedFundsController");
    var controllerActions = ["flxBlockedFundsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
