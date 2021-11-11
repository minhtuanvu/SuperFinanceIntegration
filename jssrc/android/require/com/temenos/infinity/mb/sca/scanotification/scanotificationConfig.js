define(function() {
    return {
        "properties": [{
            "name": "objectService",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "dataModel",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "operation",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }],
        "apis": ["showOKRAAuthentication"],
        "events": ["onSuccessCallback", "onFailureCallback"]
    }
});