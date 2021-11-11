define("userflxCountryCodeController", {
    //Type your controller code here 
});
define("flxCountryCodeControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxCountryCodeController", ["userflxCountryCodeController", "flxCountryCodeControllerActions"], function() {
    var controller = require("userflxCountryCodeController");
    var controllerActions = ["flxCountryCodeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
