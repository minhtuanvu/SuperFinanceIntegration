define("flxPayeeListAutoIC", function() {
    return function(controller) {
        var flxPayeeListAutoIC = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxPayeeListAutoIC",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxPayeeListAutoIC.setDefaultUnit(kony.flex.DP);
        var lblPayeeName = new kony.ui.Label({
            "id": "lblPayeeName",
            "isVisible": true,
            "left": "24dp",
            "right": "46dp",
            "skin": "ICSknLbl424242SSP26px",
            "text": "A & A CUSTOMS BROKERS LTD.",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "20dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblSegSeparator = new kony.ui.Label({
            "bottom": "2dp",
            "height": "1dp",
            "id": "lblSegSeparator",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknlblSeparator",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "100%",
            "zIndex": 3
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxPayeeListAutoIC.add(lblPayeeName, lblSegSeparator);
        return flxPayeeListAutoIC;
    }
})