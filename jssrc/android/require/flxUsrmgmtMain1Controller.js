define("flxUsrmgmtMain1Controller", ["userflxUsrmgmtMain1Controller", "flxUsrmgmtMain1ControllerActions"], function() {
    var controller = require("userflxUsrmgmtMain1Controller");
    var controllerActions = ["flxUsrmgmtMain1ControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
