define("flxForexDashboard", function() {
    return function(controller) {
        var flxForexDashboard = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "58dp",
            "id": "flxForexDashboard",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxffffff",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxForexDashboard.setDefaultUnit(kony.flex.DP);
        var lblCurrency = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblCurrency",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl727272SSPR15px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "45%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblConversionValue = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblConversionValue",
            "isVisible": true,
            "right": "20dp",
            "skin": "sknLbl424242SSPR25px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "45%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxSeparatorAP = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparatorAP",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSeparatorAP.setDefaultUnit(kony.flex.DP);
        flxSeparatorAP.add();
        flxForexDashboard.add(lblCurrency, lblConversionValue, flxSeparatorAP);
        return flxForexDashboard;
    }
})