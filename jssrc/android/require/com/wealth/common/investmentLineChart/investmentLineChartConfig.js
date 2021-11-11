define(function() {
    return {
        "properties": [{
            "name": "skin1",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "currencySymbol",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "currentFilter",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }],
        "apis": ["setChartData", "setChartFilters"],
        "events": ["onFilterChanged"]
    }
});