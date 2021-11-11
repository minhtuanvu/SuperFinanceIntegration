define(function() {
    return {
        "properties": [{
            "name": "identityServiceName",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "pinPopupTitleSkin",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "pinPopupNumbersSkin",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "pinPopupClearButtonSkin",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "pinPopupTitleText",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "popupCancelButtonSkin",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "popupCancelBtnText",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }],
        "apis": ["initiateLoginFlow", "showPinDialog", "setSdkComponentInstance", "setFlowActions"],
        "events": ["onLoginSuccess", "onPopupVisible", "onLoginFailure"]
    }
});