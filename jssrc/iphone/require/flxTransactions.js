define("flxTransactions", function() {
    return function(controller) {
        var flxTransactions = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "f9f9",
            "height": "70dp",
            "id": "flxTransactions",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxTransactions.setDefaultUnit(kony.flex.DP);
        var lblTransaction = new kony.ui.Label({
            "id": "lblTransaction",
            "isVisible": true,
            "left": "18dp",
            "maxNumberOfLines": 1,
            "skin": "sknLbl424242SSP26px",
            "text": "Money Transfer to Linda",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "15dp",
            "width": "76%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblTransactionAmount = new kony.ui.Label({
            "bottom": "10dp",
            "centerY": "50%",
            "id": "lblTransactionAmount",
            "isVisible": true,
            "right": "18dp",
            "skin": "sknLbl424242SSP32px",
            "text": "$150,000",
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
        var flxSeparator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        var flxWrapper = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "15dp",
            "clipBounds": false,
            "height": "19dp",
            "id": "flxWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "15dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "65%",
            "zIndex": 1
        }, {}, {});
        flxWrapper.setDefaultUnit(kony.flex.DP);
        var flxImgindicator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20dp",
            "id": "flxImgindicator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, {}, {});
        flxImgindicator.setDefaultUnit(kony.flex.DP);
        var imgIndicator = new kony.ui.Image2({
            "centerY": "50%",
            "height": "16dp",
            "id": "imgIndicator",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "billpay.png",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImgindicator.add(imgIndicator);
        var lblDate = new kony.ui.Label({
            "bottom": "0dp",
            "id": "lblDate",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbla0a0a022px",
            "text": "12/10/2018",
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
        flxWrapper.add(flxImgindicator, lblDate);
        flxTransactions.add(lblTransaction, lblTransactionAmount, flxSeparator, flxWrapper);
        return flxTransactions;
    }
})