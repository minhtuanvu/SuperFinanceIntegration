define("flxOperationHours", function() {
    return function(controller) {
        var flxOperationHours = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20dp",
            "id": "flxOperationHours",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false
        }, {}, {});
        flxOperationHours.setDefaultUnit(kony.flex.DP);
        var lblDay = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblDay",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl424242SSP93prSansRegularPro",
            "text": "Wednesday",
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
        var lblTimings = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblTimings",
            "isVisible": true,
            "left": "35%",
            "skin": "sknLbl424242SSP93prSansRegularPro",
            "text": "10:00 am to 5:00 pm",
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
        flxOperationHours.add(lblDay, lblTimings);
        return flxOperationHours;
    }
})