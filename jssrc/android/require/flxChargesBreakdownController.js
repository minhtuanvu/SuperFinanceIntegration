define("flxChargesBreakdownController", ["userflxChargesBreakdownController", "flxChargesBreakdownControllerActions"], function() {
    var controller = require("userflxChargesBreakdownController");
    var controllerActions = ["flxChargesBreakdownControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
