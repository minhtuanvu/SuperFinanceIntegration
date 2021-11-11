define("userflxCountryCodeListICController", {
    //Type your controller code here 
});
define("flxCountryCodeListICControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxCountryCodeListICController", ["userflxCountryCodeListICController", "flxCountryCodeListICControllerActions"], function() {
    var controller = require("userflxCountryCodeListICController");
    var controllerActions = ["flxCountryCodeListICControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
