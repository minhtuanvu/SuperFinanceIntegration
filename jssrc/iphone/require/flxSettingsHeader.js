define("flxSettingsHeader", function() {
    return function(controller) {
        var flxSettingsHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxSettingsHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBfF6F6F6",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxSettingsHeader.setDefaultUnit(kony.flex.DP);
        var flxTopShadow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10dp",
            "id": "flxTopShadow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxHeaderShadow",
            "top": "-3dp",
            "width": "100%"
        }, {}, {});
        flxTopShadow.setDefaultUnit(kony.flex.DP);
        flxTopShadow.add();
        var lblProfileHeading = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblProfileHeading",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl424242SSPReg33px",
            "text": "Profile",
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
        var lblSeperator = new kony.ui.Label({
            "bottom": "0dp",
            "height": "1dp",
            "id": "lblSeperator",
            "isVisible": true,
            "left": "0dp",
            "right": "0dp",
            "skin": "sknLblSeparatore3e3e3",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxSettingsHeader.add(flxTopShadow, lblProfileHeading, lblSeperator);
        return flxSettingsHeader;
    }
})