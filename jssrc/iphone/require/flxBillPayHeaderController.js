define("flxBillPayHeaderController", ["userflxBillPayHeaderController", "flxBillPayHeaderControllerActions"], function() {
    var controller = require("userflxBillPayHeaderController");
    var controllerActions = ["flxBillPayHeaderControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
