define("userflxSuggestedOffersController", {
    //Type your controller code here
});
define("flxSuggestedOffersControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSuggestedOffersController", ["userflxSuggestedOffersController", "flxSuggestedOffersControllerActions"], function() {
    var controller = require("userflxSuggestedOffersController");
    var controllerActions = ["flxSuggestedOffersControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
