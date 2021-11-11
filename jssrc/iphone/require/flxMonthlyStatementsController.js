define("flxMonthlyStatementsController", ["userflxMonthlyStatementsController", "flxMonthlyStatementsControllerActions"], function() {
    var controller = require("userflxMonthlyStatementsController");
    var controllerActions = ["flxMonthlyStatementsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
