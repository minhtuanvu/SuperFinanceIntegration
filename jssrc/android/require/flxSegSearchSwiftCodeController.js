define("flxSegSearchSwiftCodeController", ["userflxSegSearchSwiftCodeController", "flxSegSearchSwiftCodeControllerActions"], function() {
    var controller = require("userflxSegSearchSwiftCodeController");
    var controllerActions = ["flxSegSearchSwiftCodeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
