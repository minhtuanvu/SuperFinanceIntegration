function AS_AppEvents_h4ded27d9dd845f885ad538266976f45(eventobject) {
    var self = this;
    kony.lang.setUncaughtExceptionHandler(GlobalExceptionHandler.exceptionHandler);
    try {
        var ApplicationManager = require('ApplicationManager');
        applicationManager = ApplicationManager.getApplicationManager();
        //applicationManager.init();
        applicationManager.preappInitCalls();
        registerWatchCallback();
        var HIDApproveSDKManager = require('HIDApproveSDKManager');
        hidApplicationSDKManager = HIDApproveSDKManager.getHIDApproveSDKManager();
        hidApplicationSDKManager.registerWithHIDPushService();
        var regManager = applicationManager.getRegistrationManager();
        regManager.addPushNotificationSubscriber("HIDAPPROVE", hidApplicationSDKManager.receivedPushNotification.bind(this));
    } catch (err) {
        throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.App_Initialisation_Failed", GlobalExceptionHandler.ActionConstants.BLOCK, arguments.callee.name);
    }
}