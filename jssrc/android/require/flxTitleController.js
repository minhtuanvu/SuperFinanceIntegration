define("userflxTitleController", {
    //Type your controller code here 
});
define("flxTitleControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxTitleController", ["userflxTitleController", "flxTitleControllerActions"], function() {
    var controller = require("userflxTitleController");
    var controllerActions = ["flxTitleControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
