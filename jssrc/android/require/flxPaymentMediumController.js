define("userflxPaymentMediumController", {
    //Type your controller code here 
});
define("flxPaymentMediumControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxPaymentMediumController", ["userflxPaymentMediumController", "flxPaymentMediumControllerActions"], function() {
    var controller = require("userflxPaymentMediumController");
    var controllerActions = ["flxPaymentMediumControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
