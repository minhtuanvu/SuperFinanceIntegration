define("flxSettingHeader", function() {
    return function(controller) {
        var flxSettingHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "sknFlxf9f9f9",
            "height": "50dp",
            "id": "flxSettingHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf9f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxSettingHeader.setDefaultUnit(kony.flex.DP);
        var lblCategoryTitle = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblCategoryTitle",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl424242SSP26px",
            "text": "Login",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxSettingHeader.add(lblCategoryTitle);
        return flxSettingHeader;
    }
})