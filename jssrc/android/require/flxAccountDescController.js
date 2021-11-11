define("flxAccountDescController", ["userflxAccountDescController", "flxAccountDescControllerActions"], function() {
    var controller = require("userflxAccountDescController");
    var controllerActions = ["flxAccountDescControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
