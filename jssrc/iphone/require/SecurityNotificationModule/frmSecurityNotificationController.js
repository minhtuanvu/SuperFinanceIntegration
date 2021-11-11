define("SecurityNotificationModule/userfrmSecurityNotificationController", {
    //Type your controller code here 
});
define("SecurityNotificationModule/frmSecurityNotificationControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("SecurityNotificationModule/frmSecurityNotificationController", ["SecurityNotificationModule/userfrmSecurityNotificationController", "SecurityNotificationModule/frmSecurityNotificationControllerActions"], function() {
    var controller = require("SecurityNotificationModule/userfrmSecurityNotificationController");
    var controllerActions = ["SecurityNotificationModule/frmSecurityNotificationControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
