define("flxFiletypeController", ["userflxFiletypeController", "flxFiletypeControllerActions"], function() {
    var controller = require("userflxFiletypeController");
    var controllerActions = ["flxFiletypeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
