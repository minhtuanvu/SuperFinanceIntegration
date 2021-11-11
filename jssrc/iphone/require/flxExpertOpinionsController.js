define("userflxExpertOpinionsController", {
    //Type your controller code here 
});
define("flxExpertOpinionsControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxExpertOpinionsController", ["userflxExpertOpinionsController", "flxExpertOpinionsControllerActions"], function() {
    var controller = require("userflxExpertOpinionsController");
    var controllerActions = ["flxExpertOpinionsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
