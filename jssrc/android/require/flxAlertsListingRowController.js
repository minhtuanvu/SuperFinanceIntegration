define("userflxAlertsListingRowController", {
    //Type your controller code here 
});
define("flxAlertsListingRowControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxAlertsListingRowController", ["userflxAlertsListingRowController", "flxAlertsListingRowControllerActions"], function() {
    var controller = require("userflxAlertsListingRowController");
    var controllerActions = ["flxAlertsListingRowControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
