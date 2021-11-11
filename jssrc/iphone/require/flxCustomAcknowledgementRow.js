define("flxCustomAcknowledgementRow", function() {
    return function(controller) {
        var flxCustomAcknowledgementRow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxCustomAcknowledgementRow",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxCustomAcknowledgementRow.setDefaultUnit(kony.flex.DP);
        var flxmain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxmain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxmain.setDefaultUnit(kony.flex.DP);
        var lblKey = new kony.ui.Label({
            "id": "lblKey",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknlbl949494SSPR13px",
            "text": "Selected Personal Accounts",
            "textStyle": {},
            "top": "14dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 2],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblValue = new kony.ui.Label({
            "id": "lblValue",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl42424215px",
            "text": "3",
            "textStyle": {},
            "top": "2dp",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 2],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var flxSeparatorbottom = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparatorbottom",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5.33%",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "89.33%",
            "zIndex": 1
        }, {}, {});
        flxSeparatorbottom.setDefaultUnit(kony.flex.DP);
        flxSeparatorbottom.add();
        flxmain.add(lblKey, lblValue, flxSeparatorbottom);
        flxCustomAcknowledgementRow.add(flxmain);
        return flxCustomAcknowledgementRow;
    }
})