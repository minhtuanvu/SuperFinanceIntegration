define("flxCharges", function() {
    return function(controller) {
        var flxCharges = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxCharges",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxCharges.setDefaultUnit(kony.flex.DP);
        var flxResults = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxResults",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxResults.setDefaultUnit(kony.flex.DP);
        var lblTitle = new kony.ui.Label({
            "id": "lblTitle",
            "isVisible": true,
            "left": "15dp",
            "skin": "sknLbl000000424242SSP34PxTab",
            "text": "Chrage Name",
            "textStyle": {},
            "top": "11dp",
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
        var lblDetails = new kony.ui.Label({
            "id": "lblDetails",
            "isVisible": true,
            "left": "45%",
            "skin": "sknLbl000000424242SSP34PxTab",
            "text": "Charge Amount",
            "textStyle": {},
            "top": "11dp",
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
        flxResults.add(lblTitle, lblDetails);
        flxCharges.add(flxResults);
        return flxCharges;
    }
})