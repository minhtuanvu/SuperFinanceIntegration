define(function() {
    return {
        "properties": [{
            "name": "pushId",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }],
        "apis": ["doDeviceProvisioning", "showApprovalScreen", "hideApprovalScreen", "getAllContainers", "setContainerPin", "generateSynchronousOTP", "showPinDialog", "showOrHideTxStatus", "hidePinDialog", "updatePushRegistrationToken", "preshow", "generateOCRAOTP", "setFlowActions", "getUserPendingTransactions", "updatePin"],
        "events": []
    }
});