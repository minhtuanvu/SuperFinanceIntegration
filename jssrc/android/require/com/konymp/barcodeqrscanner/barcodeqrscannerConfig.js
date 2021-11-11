define(function() {
    return {
        "properties": [{
            "name": "closeButtonVisibility",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "closeButtonImage",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "cameraToggleVisibility",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "cameraToggleImage",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "flashButtonVisibility",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "flashButtonImage",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "cameraFacing",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "renderAutomatic",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "enableContinuousScanning",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }],
        "apis": ["resumeScan", "flashControl", "renderScan", "stopScan"],
        "events": ["afterScan", "onClickClose", "errorCallback"]
    }
});