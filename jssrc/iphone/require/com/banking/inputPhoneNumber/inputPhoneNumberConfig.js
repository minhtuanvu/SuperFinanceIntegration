define(function() {
    return {
        "properties": [{
            "name": "mainFlx",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "inputPhoneNumber",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }],
        "apis": ["addDigit", "removeDigits", "getPhoneNumber", "setPhoneNumber", "clearPhoneNumber"],
        "events": ["onPhoneNumberEntered", "onPhoneNumberRemoved"]
    }
});