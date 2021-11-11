define("flxTitle", function() {
    return function(controller) {
        var flxTitle = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "170px",
            "id": "flxTitle",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf9f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxTitle.setDefaultUnit(kony.flex.DP);
        var lblTitle = new kony.ui.Label({
            "centerX": "50%",
            "id": "lblTitle",
            "isVisible": true,
            "skin": "sknLbl424242SSP32px",
            "text": "Label",
            "textStyle": {},
            "top": "20dp",
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
        flxTitle.add(lblTitle);
        return flxTitle;
    }
})