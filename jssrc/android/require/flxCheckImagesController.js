define("userflxCheckImagesController", {
    //Type your controller code here
});
define("flxCheckImagesControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxCheckImagesController", ["userflxCheckImagesController", "flxCheckImagesControllerActions"], function() {
    var controller = require("userflxCheckImagesController");
    var controllerActions = ["flxCheckImagesControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
