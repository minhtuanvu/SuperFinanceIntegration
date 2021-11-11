define("flxBankTimings", function() {
    return function(controller) {
        var flxBankTimings = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "25dp",
            "id": "flxBankTimings",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf9f9f9",
            "top": "5dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxBankTimings.setDefaultUnit(kony.flex.DP);
        var lblTimingTitle = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblTimingTitle",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl767676SSP26px",
            "text": "Saturday - Monday:",
            "textStyle": {},
            "width": "36%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblTimingValue = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblTimingValue",
            "isVisible": true,
            "left": "6.25%",
            "skin": "sknLbl424242SSP26px",
            "text": "8am to 10 pm",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblTimeZone = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblTimeZone",
            "isVisible": true,
            "left": "3dp",
            "skin": "sknLbl767676SSP26px",
            "text": "FT",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxBankTimings.add(lblTimingTitle, lblTimingValue, lblTimeZone);
        return flxBankTimings;
    }
})