define(function() {
    return {
        "properties": [{
            "name": "data",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "widgetDataMap",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }],
        "apis": ["setData", "removeAll", "setDataToSegment"],
        "events": ["onRowClick"]
    }
});