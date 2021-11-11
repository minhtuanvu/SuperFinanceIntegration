define("flxCashBalSummary", function() {
    return function(controller) {
        var flxCashBalSummary = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "75dp",
            "id": "flxCashBalSummary",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxCashBalSummary.setDefaultUnit(kony.flex.DP);
        var flxCashSumm = new kony.ui.FlexContainer({
            "clipBounds": true,
            "height": "100%",
            "id": "flxCashSumm",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxCashSumm.setDefaultUnit(kony.flex.DP);
        var lblCashAcc = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblCashAcc",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknlbl424242SectionHeader",
            "text": "JOHN BAliey A/c.....14567",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_NONE,
            "top": 0,
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
        var lblRefCashBal = new kony.ui.Label({
            "bottom": "12dp",
            "id": "lblRefCashBal",
            "isVisible": true,
            "right": "20dp",
            "skin": "sknLbl727272SSPReg26pxTab",
            "text": "Label",
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
        var lblCashAccBal = new kony.ui.Label({
            "id": "lblCashAccBal",
            "isVisible": true,
            "right": "20dp",
            "skin": "sknlbl424242SectionHeader",
            "text": "CHF 112,456,.45.77",
            "textStyle": {},
            "top": "12dp",
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
        flxCashSumm.add(lblCashAcc, lblRefCashBal, lblCashAccBal);
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
            "skin": "sknFlxBge3e3e3Tab",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        flxCashBalSummary.add(flxCashSumm, flxSeparator);
        return flxCashBalSummary;
    }
})