define("flxUsrmgmtMain2Controller", ["userflxUsrmgmtMain2Controller", "flxUsrmgmtMain2ControllerActions"], function() {
    var controller = require("userflxUsrmgmtMain2Controller");
    var controllerActions = ["flxUsrmgmtMain2ControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
