define("flxFilterOptionsListController", ["userflxFilterOptionsListController", "flxFilterOptionsListControllerActions"], function() {
    var controller = require("userflxFilterOptionsListController");
    var controllerActions = ["flxFilterOptionsListControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
