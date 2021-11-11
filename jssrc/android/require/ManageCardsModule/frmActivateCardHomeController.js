define("ManageCardsModule/userfrmActivateCardHomeController", {
    //Type your controller code here 
});
define("ManageCardsModule/frmActivateCardHomeControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("ManageCardsModule/frmActivateCardHomeController", ["ManageCardsModule/userfrmActivateCardHomeController", "ManageCardsModule/frmActivateCardHomeControllerActions"], function() {
    var controller = require("ManageCardsModule/userfrmActivateCardHomeController");
    var controllerActions = ["ManageCardsModule/frmActivateCardHomeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
