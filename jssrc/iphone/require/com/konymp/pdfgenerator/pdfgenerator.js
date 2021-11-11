define(function() {
    return function(controller) {
        var pdfgenerator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "0%",
            "id": "pdfgenerator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "0%"
        }, controller.args[0], "pdfgenerator"), extendConfig({}, controller.args[1], "pdfgenerator"), extendConfig({}, controller.args[2], "pdfgenerator"));
        pdfgenerator.setDefaultUnit(kony.flex.DP);
        var pdfGenBrowser = new kony.ui.Browser(extendConfig({
            "detectTelNumber": true,
            "enableNativeCommunication": true,
            "enableZoom": false,
            "height": "100%",
            "id": "pdfGenBrowser",
            "isVisible": true,
            "left": "0dp",
            "setAsContent": false,
            "requestURLConfig": {
                "URL": "webtopdf.html",
                "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
            },
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "pdfGenBrowser"), extendConfig({}, controller.args[1], "pdfGenBrowser"), extendConfig({
            "bounces": false
        }, controller.args[2], "pdfGenBrowser"));
        pdfgenerator.add(pdfGenBrowser);
        return pdfgenerator;
    }
})