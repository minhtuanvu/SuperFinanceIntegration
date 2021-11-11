define("flxUserTransactionMgmt", function() {
    return function(controller) {
        var flxUserTransactionMgmt = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "90dp",
            "id": "flxUserTransactionMgmt",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxffffff",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxUserTransactionMgmt.setDefaultUnit(kony.flex.DP);
        var flxBody = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxBody",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "11dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "30dp",
            "width": "95%",
            "zIndex": 1
        }, {}, {});
        flxBody.setDefaultUnit(kony.flex.DP);
        var flxSubHeader1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50.00%",
            "clipBounds": true,
            "height": "50dp",
            "id": "flxSubHeader1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5dp",
            "isModalContainer": false,
            "skin": "CopyslFbox",
            "top": "32dp",
            "width": "30%",
            "zIndex": 1
        }, {}, {});
        flxSubHeader1.setDefaultUnit(kony.flex.DP);
        var lblPerTransaction = new kony.ui.Label({
            "id": "lblPerTransaction",
            "isVisible": true,
            "left": "0dp",
            "skin": "a0a0a0",
            "text": "Per Transaction",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblPTAmt = new kony.ui.Label({
            "id": "lblPTAmt",
            "isVisible": true,
            "left": "0dp",
            "skin": "lblBodyText",
            "text": "$ 1,000",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "20dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxSubHeader1.add(lblPerTransaction, lblPTAmt);
        var flxSubHeader2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50.00%",
            "clipBounds": true,
            "height": "50dp",
            "id": "flxSubHeader2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5dp",
            "isModalContainer": false,
            "skin": "CopyslFbox",
            "top": "32dp",
            "width": "30%",
            "zIndex": 1
        }, {}, {});
        flxSubHeader2.setDefaultUnit(kony.flex.DP);
        var lblDaily = new kony.ui.Label({
            "id": "lblDaily",
            "isVisible": true,
            "left": "0dp",
            "skin": "a0a0a0",
            "text": "Per Transaction",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblDailyAmt = new kony.ui.Label({
            "id": "lblDailyAmt",
            "isVisible": true,
            "left": "0dp",
            "skin": "lblBodyText",
            "text": "$ 1,000",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "20dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxSubHeader2.add(lblDaily, lblDailyAmt);
        var flxSubHeader3 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50.00%",
            "clipBounds": true,
            "height": "50dp",
            "id": "flxSubHeader3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5dp",
            "isModalContainer": false,
            "skin": "CopyslFbox",
            "top": "32dp",
            "width": "30%",
            "zIndex": 1
        }, {}, {});
        flxSubHeader3.setDefaultUnit(kony.flex.DP);
        var lblWeekly = new kony.ui.Label({
            "id": "lblWeekly",
            "isVisible": true,
            "left": "0dp",
            "skin": "a0a0a0",
            "text": "Per Transaction",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblWeeklyAmt = new kony.ui.Label({
            "id": "lblWeeklyAmt",
            "isVisible": true,
            "left": "0dp",
            "skin": "lblBodyText",
            "text": "$ 1,000",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "20dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxSubHeader3.add(lblWeekly, lblWeeklyAmt);
        flxBody.add(flxSubHeader1, flxSubHeader2, flxSubHeader3);
        var flxSeparator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "5dp",
            "centerX": "50%",
            "clipBounds": true,
            "height": "2dp",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": 14,
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "top": 86,
            "width": "92%",
            "zIndex": 6
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        var lblHeader = new kony.ui.Label({
            "id": "lblHeader",
            "isVisible": true,
            "left": "15dp",
            "skin": "lblBodyText",
            "text": "Transaction limit",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 10,
            "width": "95%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxUserTransactionMgmt.add(flxBody, flxSeparator, lblHeader);
        return flxUserTransactionMgmt;
    }
})