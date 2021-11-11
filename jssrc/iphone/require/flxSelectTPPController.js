define("flxSelectTPPController", ["userflxSelectTPPController", "flxSelectTPPControllerActions"], function() {
    var controller = require("userflxSelectTPPController");
    var controllerActions = ["flxSelectTPPControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
