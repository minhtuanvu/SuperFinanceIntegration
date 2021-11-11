define("flxRecentHeader", function() {
    return function(controller) {
        var flxRecentHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "55dp",
            "id": "flxRecentHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknflxbgfffffNoborder",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxRecentHeader.setDefaultUnit(kony.flex.DP);
        var flxCurrency = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "55dp",
            "id": "flxCurrency",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "3dp",
            "width": "100%",
            "zIndex": 6
        }, {}, {});
        flxCurrency.setDefaultUnit(kony.flex.DP);
        var lblCurrency = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblCurrency",
            "isVisible": true,
            "left": "30dp",
            "skin": "sknlbl424242SSPR15px",
            "text": "USD - US Dollar",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 6
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxCurrency.add(lblCurrency);
        var flxSeparator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "width": "92%",
            "zIndex": 1
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        flxRecentHeader.add(flxCurrency, flxSeparator);
        return flxRecentHeader;
    }
})