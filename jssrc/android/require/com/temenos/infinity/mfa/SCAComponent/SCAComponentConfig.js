define(function() {
    return {
        "properties": [{
            "name": "flowType",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "servicekey",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }],
        "apis": ["setContext"],
        "events": ["onSuccessCallback", "onFailureCallback", "onCancel"]
    }
});