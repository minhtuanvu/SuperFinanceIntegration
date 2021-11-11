define("userflxPayeeListAutoICController", {
    //Type your controller code here 
});
define("flxPayeeListAutoICControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxPayeeListAutoICController", ["userflxPayeeListAutoICController", "flxPayeeListAutoICControllerActions"], function() {
    var controller = require("userflxPayeeListAutoICController");
    var controllerActions = ["flxPayeeListAutoICControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
