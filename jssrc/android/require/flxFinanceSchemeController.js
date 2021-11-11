define("flxFinanceSchemeController", ["userflxFinanceSchemeController", "flxFinanceSchemeControllerActions"], function() {
    var controller = require("userflxFinanceSchemeController");
    var controllerActions = ["flxFinanceSchemeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
