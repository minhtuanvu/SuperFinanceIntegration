define("userflxForexMarketValueHeaderController", {
    //Type your controller code here 
});
define("flxForexMarketValueHeaderControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxForexMarketValueHeaderController", ["userflxForexMarketValueHeaderController", "flxForexMarketValueHeaderControllerActions"], function() {
    var controller = require("userflxForexMarketValueHeaderController");
    var controllerActions = ["flxForexMarketValueHeaderControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
