define("userflxChequeController", {
    //Type your controller code here 
});
define("flxChequeControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxChequeController", ["userflxChequeController", "flxChequeControllerActions"], function() {
    var controller = require("userflxChequeController");
    var controllerActions = ["flxChequeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
