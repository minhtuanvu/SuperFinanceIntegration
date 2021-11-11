define("userflxAssetClassController", {
    //Type your controller code here 
});
define("flxAssetClassControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxAssetClassController", ["userflxAssetClassController", "flxAssetClassControllerActions"], function() {
    var controller = require("userflxAssetClassController");
    var controllerActions = ["flxAssetClassControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
