define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_AppEvents_hd4fc1bedd904d29862f6382068c9886: function AS_AppEvents_hd4fc1bedd904d29862f6382068c9886(eventobject) {
        var self = this;
        try {
            var MenuHandler = applicationManager.getMenuHandler();
            return MenuHandler.appForceTouchCallBack(eventobject);
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.App_Initialisation_Failed", GlobalExceptionHandler.ActionConstants.BLOCK, arguments.callee.name);
        }
    },
    AS_AppEvents_c26b10e9c0764bde8f8f42317331324a: function AS_AppEvents_c26b10e9c0764bde8f8f42317331324a(eventobject) {
        var self = this;
        //var appManager = ApplicationManager.getApplicationManager();
        try {
            applicationManager.postAppInitiate();
            applicationManager.applicationMode = "Mobile";
            kony.application.setApplicationProperties({
                // "statusBarForegroundColor": "000000"
            });
            var registrationManager = applicationManager.getRegistrationManager();
            registrationManager.setEventTracking();
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.App_Initialisation_Failed", GlobalExceptionHandler.ActionConstants.BLOCK, arguments.callee.name);
        }
    },
    AS_AppEvents_h4ded27d9dd845f885ad538266976f45: function AS_AppEvents_h4ded27d9dd845f885ad538266976f45(eventobject) {
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
});