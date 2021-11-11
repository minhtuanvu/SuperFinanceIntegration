define("userflxClearViewAllController", {});
define("flxClearViewAllControllerActions", {});
define("flxClearViewAllController", ["userflxClearViewAllController", "flxClearViewAllControllerActions"], function() {
    var controller = require("userflxClearViewAllController");
    var controllerActions = ["flxClearViewAllControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
