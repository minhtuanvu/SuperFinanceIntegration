define("userflexSelectCurrencyContainerController", {
    //Type your controller code here 
});
define("flexSelectCurrencyContainerControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flexSelectCurrencyContainerController", ["userflexSelectCurrencyContainerController", "flexSelectCurrencyContainerControllerActions"], function() {
    var controller = require("userflexSelectCurrencyContainerController");
    var controllerActions = ["flexSelectCurrencyContainerControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
