define("flxAcknowloedgmentRow", function() {
    return function(controller) {
        var flxAcknowloedgmentRow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxAcknowloedgmentRow",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxAcknowloedgmentRow.setDefaultUnit(kony.flex.DP);
        var lblTitle = new kony.ui.Label({
            "id": "lblTitle",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl727272ssp40px",
            "text": "Reference ID",
            "textStyle": {},
            "top": "14dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 2],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblDetails = new kony.ui.Label({
            "id": "lblDetails",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl000000424242SSP34PxTab",
            "text": "Label",
            "textStyle": {},
            "top": "2dp",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 2],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblExtras = new kony.ui.Label({
            "bottom": "12dp",
            "id": "lblExtras",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl424242SSPLight30px",
            "text": "Label",
            "textStyle": {},
            "top": "2dp",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var flxSeparator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5.33%",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "89.33%",
            "zIndex": 1
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        flxAcknowloedgmentRow.add(lblTitle, lblDetails, lblExtras, flxSeparator);
        return flxAcknowloedgmentRow;
    }
})