define(function() {
    return {
        "properties": [{
            "name": "headerText",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "mainFlx",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "firstRowSkin",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "secondRowSkin",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "buttonContinue",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "buttonCancel",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }],
        "apis": ["setData", "getSelectedItem"],
        "events": ["onClickContinue", "onClickCancel"]
    }
});