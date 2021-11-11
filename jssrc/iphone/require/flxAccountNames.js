define("flxAccountNames", function() {
    return function(controller) {
        var flxAccountNames = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "slFbox",
            "height": "56dp",
            "id": "flxAccountNames",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "f9f9"
        }, {}, {});
        flxAccountNames.setDefaultUnit(kony.flex.DP);
        var lblAccountName = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblAccountName",
            "isVisible": true,
            "left": "8%",
            "skin": "sknLbl424242SSP32px",
            "text": "Savings",
            "textStyle": {},
            "top": "16dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var flxSeparator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": 1,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "8%",
            "isModalContainer": false,
            "right": "8%",
            "skin": "sknFlxf1f1f1",
            "width": "84%",
            "zIndex": 1
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        flxAccountNames.add(lblAccountName, flxSeparator);
        return flxAccountNames;
    }
})