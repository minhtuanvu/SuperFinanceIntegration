define("flxTypesController", ["userflxTypesController", "flxTypesControllerActions"], function() {
    var controller = require("userflxTypesController");
    var controllerActions = ["flxTypesControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
