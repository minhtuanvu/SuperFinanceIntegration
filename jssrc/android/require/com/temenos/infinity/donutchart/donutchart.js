define(function() {
    return function(controller) {
        var donutchart = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "donutchart",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxMainDonut",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "donutchart"), extendConfig({}, controller.args[1], "donutchart"), extendConfig({}, controller.args[2], "donutchart"));
        donutchart.setDefaultUnit(kony.flex.DP);
        var doughnutBrowser = new kony.ui.Browser(extendConfig({
            "detectTelNumber": false,
            "enableNativeCommunication": true,
            "enableZoom": false,
            "height": "100%",
            "id": "doughnutBrowser",
            "isVisible": true,
            "left": "0dp",
            "setAsContent": false,
            "requestURLConfig": {
                "URL": "",
                "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
            },
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "doughnutBrowser"), extendConfig({}, controller.args[1], "doughnutBrowser"), extendConfig({}, controller.args[2], "doughnutBrowser"));
        var lblCssSelector = new kony.ui.Label(extendConfig({
            "id": "lblCssSelector",
            "isVisible": false,
            "left": "420dp",
            "skin": "ICSknLabelCss",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "353dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblCssSelector"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCssSelector"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblCssSelector"));
        donutchart.add(doughnutBrowser, lblCssSelector);
        return donutchart;
    }
})