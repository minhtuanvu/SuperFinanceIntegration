define("userflxSelectCurrencyController", {
    //Type your controller code here 
});
define("flxSelectCurrencyControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSelectCurrencyController", ["userflxSelectCurrencyController", "flxSelectCurrencyControllerActions"], function() {
    var controller = require("userflxSelectCurrencyController");
    var controllerActions = ["flxSelectCurrencyControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
