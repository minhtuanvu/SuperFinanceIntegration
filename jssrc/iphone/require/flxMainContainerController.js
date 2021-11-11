define("flxMainContainerController", ["userflxMainContainerController", "flxMainContainerControllerActions"], function() {
    var controller = require("userflxMainContainerController");
    var controllerActions = ["flxMainContainerControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
