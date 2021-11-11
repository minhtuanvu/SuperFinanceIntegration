define("userflxCombinedAccountsEuroController", {
    //Type your controller code here 
});
define("flxCombinedAccountsEuroControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxCombinedAccountsEuroController", ["userflxCombinedAccountsEuroController", "flxCombinedAccountsEuroControllerActions"], function() {
    var controller = require("userflxCombinedAccountsEuroController");
    var controllerActions = ["flxCombinedAccountsEuroControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
