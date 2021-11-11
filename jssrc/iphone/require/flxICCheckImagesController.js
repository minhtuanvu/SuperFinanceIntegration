define("userflxICCheckImagesController", {
    //Type your controller code here 
});
define("flxICCheckImagesControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxICCheckImagesController", ["userflxICCheckImagesController", "flxICCheckImagesControllerActions"], function() {
    var controller = require("userflxICCheckImagesController");
    var controllerActions = ["flxICCheckImagesControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
