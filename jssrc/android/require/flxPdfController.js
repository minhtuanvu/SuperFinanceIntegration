define("userflxPdfController", {
    //Type your controller code here 
});
define("flxPdfControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxPdfController", ["userflxPdfController", "flxPdfControllerActions"], function() {
    var controller = require("userflxPdfController");
    var controllerActions = ["flxPdfControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
