define("flxMainContainerCMController", ["userflxMainContainerCMController", "flxMainContainerCMControllerActions"], function() {
    var controller = require("userflxMainContainerCMController");
    var controllerActions = ["flxMainContainerCMControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
