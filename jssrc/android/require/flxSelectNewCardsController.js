define("userflxSelectNewCardsController", {
    //Type your controller code here 
});
define("flxSelectNewCardsControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSelectNewCardsController", ["userflxSelectNewCardsController", "flxSelectNewCardsControllerActions"], function() {
    var controller = require("userflxSelectNewCardsController");
    var controllerActions = ["flxSelectNewCardsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
