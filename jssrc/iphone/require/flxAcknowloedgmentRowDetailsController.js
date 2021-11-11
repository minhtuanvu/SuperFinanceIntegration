define("flxAcknowloedgmentRowDetailsController", ["userflxAcknowloedgmentRowDetailsController", "flxAcknowloedgmentRowDetailsControllerActions"], function() {
    var controller = require("userflxAcknowloedgmentRowDetailsController");
    var controllerActions = ["flxAcknowloedgmentRowDetailsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
