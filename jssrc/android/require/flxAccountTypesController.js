define("flxAccountTypesController", ["userflxAccountTypesController", "flxAccountTypesControllerActions"], function() {
    var controller = require("userflxAccountTypesController");
    var controllerActions = ["flxAccountTypesControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
