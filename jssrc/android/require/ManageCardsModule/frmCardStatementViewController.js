define("ManageCardsModule/userfrmCardStatementViewController", {
    //Type your controller code here 
});
define("ManageCardsModule/frmCardStatementViewControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("ManageCardsModule/frmCardStatementViewController", ["ManageCardsModule/userfrmCardStatementViewController", "ManageCardsModule/frmCardStatementViewControllerActions"], function() {
    var controller = require("ManageCardsModule/userfrmCardStatementViewController");
    var controllerActions = ["ManageCardsModule/frmCardStatementViewControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
