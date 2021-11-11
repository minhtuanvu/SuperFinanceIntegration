define("flxWealthRecentActivity", function() {
    return function(controller) {
        var flxWealthRecentActivity = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxWealthRecentActivity",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxWealthRecentActivity.setDefaultUnit(kony.flex.DP);
        var flxMainActivity = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxMainActivity",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFF",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxMainActivity.setDefaultUnit(kony.flex.DP);
        var flxleftContent = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "77dp",
            "id": "flxleftContent",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "10%"
        }, {}, {});
        flxleftContent.setDefaultUnit(kony.flex.DP);
        var lblRound = new kony.ui.Label({
            "height": "12dp",
            "id": "lblRound",
            "isVisible": true,
            "left": "23dp",
            "skin": "sknlblRound003E75",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "12dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxleftSepatator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "65dp",
            "id": "flxleftSepatator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "28dp",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "top": "0dp",
            "width": "1dp",
            "zIndex": 1
        }, {}, {});
        flxleftSepatator.setDefaultUnit(kony.flex.DP);
        flxleftSepatator.add();
        flxleftContent.add(lblRound, flxleftSepatator);
        var flxRightContent = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxRightContent",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "10dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "85%"
        }, {}, {});
        flxRightContent.setDefaultUnit(kony.flex.DP);
        var flxActivityDetails = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxActivityDetails",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "maxWidth": "38dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "92%",
            "zIndex": 1
        }, {}, {});
        flxActivityDetails.setDefaultUnit(kony.flex.DP);
        var lblActivityDetails = new kony.ui.Label({
            "id": "lblActivityDetails",
            "includeFontPadding": true,
            "isVisible": true,
            "left": "5dp",
            "skin": "skn424242SSPR15px",
            "text": "Label",
            "textStyle": {
                "lineSpacing": 0,
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "-5dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxActivityDetails.add(lblActivityDetails);
        var lblActivityTime = new kony.ui.Label({
            "bottom": "5dp",
            "height": "21dp",
            "id": "lblActivityTime",
            "isVisible": true,
            "left": "5dp",
            "skin": "sknlbl727272SSP17px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "50%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxRightContent.add(flxActivityDetails, lblActivityTime);
        flxMainActivity.add(flxleftContent, flxRightContent);
        flxWealthRecentActivity.add(flxMainActivity);
        return flxWealthRecentActivity;
    }
})