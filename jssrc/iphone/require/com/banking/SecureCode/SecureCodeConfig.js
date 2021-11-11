define(function() {
    return {
        "properties": [{
            "name": "requiredLength",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "unfilledSymbol",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "enableSSN",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "filledSymbol",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "ssnCodeSeparator",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }],
        "apis": ["addDigit", "removeDigit", "getEnteredCode", "clear"],
        "events": ["onCodeEntered", "onCodeRevoked"]
    }
});