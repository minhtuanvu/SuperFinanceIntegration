define("userflxAdditionalFeaturesController", {
    //Type your controller code here 
});
define("flxAdditionalFeaturesControllerActions", {
    //Type your controller code here 
});
define("flxAdditionalFeaturesController", ["userflxAdditionalFeaturesController", "flxAdditionalFeaturesControllerActions"], function() {
    var controller = require("userflxAdditionalFeaturesController");
    var controllerActions = ["flxAdditionalFeaturesControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
