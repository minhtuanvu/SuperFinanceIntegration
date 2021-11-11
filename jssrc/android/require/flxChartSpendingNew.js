define("flxChartSpendingNew", function() {
    return function(controller) {
        var flxChartSpendingNew = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxChartSpendingNew",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxChartSpendingNew.setDefaultUnit(kony.flex.DP);
        var flxSpending = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "flxSpending",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5dp",
            "width": "100%"
        }, {}, {});
        flxSpending.setDefaultUnit(kony.flex.DP);
        var lblSpendingCategory = new kony.ui.Label({
            "id": "lblSpendingCategory",
            "isVisible": true,
            "left": "20dp",
            "maxNumberOfLines": 1,
            "skin": "sknLblffffffSSP26px",
            "text": "Rent - 45%",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "10dp",
            "width": "75%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblTotalAmount = new kony.ui.Label({
            "id": "lblTotalAmount",
            "isVisible": true,
            "right": "20dp",
            "skin": "sknLblffffffSSP26px",
            "text": "$134.00",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxSpending.add(lblSpendingCategory, lblTotalAmount);
        var flxSpendingSub = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSpendingSub",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%"
        }, {}, {});
        flxSpendingSub.setDefaultUnit(kony.flex.DP);
        var lblAmountSpent = new kony.ui.Label({
            "id": "lblAmountSpent",
            "isVisible": true,
            "left": "20dp",
            "maxNumberOfLines": 1,
            "skin": "sknLblffffffSSP129Pr",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "10dp",
            "width": "50%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblPaymentMode = new kony.ui.Label({
            "id": "lblPaymentMode",
            "isVisible": true,
            "right": "20dp",
            "skin": "sknLblffffffSSP129Pr",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
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
            "top": "5dp",
            "zIndex": 1
        }, {}, {});
        flxSeperator.setDefaultUnit(kony.flex.DP);
        flxSeperator.add();
        flxChartSpendingNew.add(flxSpending, flxSpendingSub, flxSeperator);
        return flxChartSpendingNew;
    }
})