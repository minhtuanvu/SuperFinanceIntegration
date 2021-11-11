define("ManageCustomgroup/userfrmMyAccountController", {
    //Type your controller code here 
});
define("ManageCustomgroup/frmMyAccountControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("ManageCustomgroup/frmMyAccountController", ["ManageCustomgroup/userfrmMyAccountController", "ManageCustomgroup/frmMyAccountControllerActions"], function() {
    var controller = require("ManageCustomgroup/userfrmMyAccountController");
    var controllerActions = ["ManageCustomgroup/frmMyAccountControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
