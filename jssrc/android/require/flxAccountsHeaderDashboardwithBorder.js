define("flxAccountsHeaderDashboardwithBorder", function() {
    return function(controller) {
        var flxAccountsHeaderDashboardwithBorder = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxAccountsHeaderDashboardwithBorder",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxffffff",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxAccountsHeaderDashboardwithBorder.setDefaultUnit(kony.flex.DP);
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
            "clipBounds": false,
            "height": "8px",
            "id": "flxHeaderShadows",
            "isVisible": false,
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
            "clipBounds": false,
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
        var lblTypeName = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblTypeName",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl424242SSPSemiBold42px",
            "text": "Checking Accounts (3)",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "26px",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblTypeValue = new kony.ui.Label({
            "bottom": 28,
            "id": "lblTypeValue",
            "isVisible": true,
            "right": "20dp",
            "skin": "sknLbl494949semibold45px",
            "text": "$127,912.00",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "18px",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblAccountBal = new kony.ui.Label({
            "bottom": "10dp",
            "id": "lblAccountBal",
            "isVisible": true,
            "right": "20dp",
            "skin": "sknLblA0A0A0SSP20px",
            "text": "Total Available Balance:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxAccountsHeaderDashboardwithBorder.add(flxSeparator, flxHeaderSeperator, flxHeaderShadows, lblTypeName, lblTypeValue, lblAccountBal);
        return flxAccountsHeaderDashboardwithBorder;
    }
})