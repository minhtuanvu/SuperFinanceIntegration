define("userflxforexMarketValueSelectorController", {
    //Type your controller code here 
});
define("flxforexMarketValueSelectorControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxforexMarketValueSelectorController", ["userflxforexMarketValueSelectorController", "flxforexMarketValueSelectorControllerActions"], function() {
    var controller = require("userflxforexMarketValueSelectorController");
    var controllerActions = ["flxforexMarketValueSelectorControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
