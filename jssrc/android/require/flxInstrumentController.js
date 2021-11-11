define("flxInstrumentController", ["userflxInstrumentController", "flxInstrumentControllerActions"], function() {
    var controller = require("userflxInstrumentController");
    var controllerActions = ["flxInstrumentControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
