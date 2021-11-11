define("flxAccountsHeaderDashboard", function() {
    return function(controller) {
        var flxAccountsHeaderDashboard = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "82dp",
            "id": "flxAccountsHeaderDashboard",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxffffff",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxAccountsHeaderDashboard.setDefaultUnit(kony.flex.DP);
        var lblTypeName = new kony.ui.Label({
            "centerY": "47dp",
            "id": "lblTypeName",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknlbl424242SSPSB15px",
            "text": "Checking Accounts (3)",
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
        var lblTypeValue = new kony.ui.Label({
            "id": "lblTypeValue",
            "isVisible": true,
            "right": "20dp",
            "skin": "sknlbl424242SSPSB15px",
            "text": "$127,912.00",
            "textStyle": {},
            "top": "30dp",
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
        var lblAccountBal = new kony.ui.Label({
            "bottom": "15dp",
            "id": "lblAccountBal",
            "isVisible": true,
            "right": "20dp",
            "skin": "sknLblA0A0A0SSP20px",
            "text": "Available Balance",
            "textStyle": {},
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
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "sknFlxe3e3e3",
            "zIndex": 1
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        var flxHeaderSeperator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxHeaderSeperator",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "right": "0dp",
            "skin": "sknFlxe3e3e3",
            "top": "12dp",
            "zIndex": 1
        }, {}, {});
        flxHeaderSeperator.setDefaultUnit(kony.flex.DP);
        flxHeaderSeperator.add();
        var flxHeaderShadows = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "12dp",
            "id": "flxHeaderShadows",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf9f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxHeaderShadows.setDefaultUnit(kony.flex.DP);
        var flxTypeOneShadow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "6dp",
            "id": "flxTypeOneShadow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknFlxHeaderShadow2",
            "top": "0dp",
            "width": "100%",
            "zIndex": 2
        }, {}, {});
        flxTypeOneShadow.setDefaultUnit(kony.flex.DP);
        flxTypeOneShadow.add();
        var flxShadowBottom = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": 0,
            "clipBounds": true,
            "height": "10dp",
            "id": "flxShadowBottom",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknFlxHeaderShadowBottom2",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxShadowBottom.setDefaultUnit(kony.flex.DP);
        flxShadowBottom.add();
        flxHeaderShadows.add(flxTypeOneShadow, flxShadowBottom);
        flxAccountsHeaderDashboard.add(lblTypeName, lblTypeValue, lblAccountBal, flxSeparator, flxHeaderSeperator, flxHeaderShadows);
        return flxAccountsHeaderDashboard;
    }
})