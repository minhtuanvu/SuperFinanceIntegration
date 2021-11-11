define("userflxbankdetailsController", {
    //Type your controller code here 
});
define("flxbankdetailsControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxbankdetailsController", ["userflxbankdetailsController", "flxbankdetailsControllerActions"], function() {
    var controller = require("userflxbankdetailsController");
    var controllerActions = ["flxbankdetailsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
