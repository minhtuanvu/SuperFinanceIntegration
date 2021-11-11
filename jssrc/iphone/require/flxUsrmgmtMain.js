define("flxUsrmgmtMain", function() {
    return function(controller) {
        var flxUsrmgmtMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxUsrmgmtMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxffffff",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxUsrmgmtMain.setDefaultUnit(kony.flex.DP);
        var flxContent = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxContent",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxContent.setDefaultUnit(kony.flex.DP);
        var flxInner1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxInner1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "50%",
            "zIndex": 1
        }, {}, {});
        flxInner1.setDefaultUnit(kony.flex.DP);
        var lblUserName = new kony.ui.Label({
            "id": "lblUserName",
            "isVisible": true,
            "skin": "sknLbl424242SSP28px",
            "text": "Abilash",
            "textStyle": {},
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblTimeStamp = new kony.ui.Label({
            "bottom": "5dp",
            "id": "lblTimeStamp",
            "isVisible": true,
            "skin": "sknlbl727272SSP93pr",
            "text": "28/07/2020",
            "textStyle": {},
            "top": "10dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxInner1.add(lblUserName, lblTimeStamp);
        var flxInner2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxInner2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "50%",
            "zIndex": 1
        }, {}, {});
        flxInner2.setDefaultUnit(kony.flex.DP);
        var lblUserLevel = new kony.ui.Label({
            "id": "lblUserLevel",
            "isVisible": true,
            "maxWidth": "100%",
            "skin": "sknLbl424242SSP100pr",
            "text": "Administrator",
            "textStyle": {},
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblUserStatus = new kony.ui.Label({
            "bottom": "5dp",
            "id": "lblUserStatus",
            "isVisible": true,
            "skin": "sknlbl727272SSP93pr",
            "text": "Suspend",
            "textStyle": {},
            "top": "10dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxInner2.add(lblUserLevel, lblUserStatus);
        flxContent.add(flxInner1, flxInner2);
        var flxSep = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "10dp",
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSep",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "top": "5dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSep.setDefaultUnit(kony.flex.DP);
        flxSep.add();
        flxUsrmgmtMain.add(flxContent, flxSep);
        return flxUsrmgmtMain;
    }
})