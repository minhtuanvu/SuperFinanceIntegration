define("userflxLinkPayeeCustomerRowController", {
    //Type your controller code here 
});
define("flxLinkPayeeCustomerRowControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxLinkPayeeCustomerRowController", ["userflxLinkPayeeCustomerRowController", "flxLinkPayeeCustomerRowControllerActions"], function() {
    var controller = require("userflxLinkPayeeCustomerRowController");
    var controllerActions = ["flxLinkPayeeCustomerRowControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
