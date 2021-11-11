define("flxTotalBalance", function() {
    return function(controller) {
        var flxTotalBalance = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxTotalBalance",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxTotalBalance.setDefaultUnit(kony.flex.DP);
        var flxSpendingSub = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSpendingSub",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "10dp",
            "width": "100%"
        }, {}, {});
        flxSpendingSub.setDefaultUnit(kony.flex.DP);
        var lblAmountSpent = new kony.ui.Label({
            "id": "lblAmountSpent",
            "isVisible": true,
            "left": "20dp",
            "maxNumberOfLines": 1,
            "skin": "sknLblffffffSSP129Pr",
            "text": "Rent - 45%",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "10dp",
            "width": "50%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblPaymentMode = new kony.ui.Label({
            "id": "lblPaymentMode",
            "isVisible": true,
            "right": "20dp",
            "skin": "sknLblffffffSSP129Pr",
            "text": "$134.00",
            "textStyle": {},
            "top": "10dp",
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
        flxSpendingSub.add(lblAmountSpent, lblPaymentMode);
        var flxSeperator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": 0,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeperator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "right": "0dp",
            "skin": "sknFlxBgFFFFFF",
            "top": "15dp",
            "zIndex": 1
        }, {}, {});
        flxSeperator.setDefaultUnit(kony.flex.DP);
        flxSeperator.add();
        flxTotalBalance.add(flxSpendingSub, flxSeperator);
        return flxTotalBalance;
    }
})