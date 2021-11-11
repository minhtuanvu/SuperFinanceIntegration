define("flxChequeDepositRow", function() {
    return function(controller) {
        var flxChequeDepositRow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxChequeDepositRow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "f9f9"
        }, {}, {});
        flxChequeDepositRow.setDefaultUnit(kony.flex.DP);
        var lblAccountName = new kony.ui.Label({
            "centerY": "35.71%",
            "id": "lblAccountName",
            "isVisible": true,
            "left": "20dp",
            "maxNumberOfLines": 1,
            "right": "120dp",
            "skin": "sknLbl424242SSP26px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblAccountBalValue = new kony.ui.Label({
            "id": "lblAccountBalValue",
            "isVisible": true,
            "right": "20dp",
            "skin": "sknLbl424242SSP32px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "25dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
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
            "skin": "sknFlxe3e3e3",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        var flxebill = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20dp",
            "id": "flxebill",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": 38,
            "width": "60%",
            "zIndex": 1
        }, {}, {});
        flxebill.setDefaultUnit(kony.flex.DP);
        var flxAccountType = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50.00%",
            "clipBounds": false,
            "height": "18dp",
            "id": "flxAccountType",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "right": "7dp",
            "skin": "sknflxe3e3e3border",
            "width": "18dp",
            "zIndex": 10000
        }, {}, {});
        flxAccountType.setDefaultUnit(kony.flex.DP);
        var imgAccountType = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "45%",
            "height": "11dp",
            "id": "imgAccountType",
            "isVisible": true,
            "skin": "slImage",
            "src": "personalaccount.png",
            "width": "11dp"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxAccountType.add(imgAccountType);
        var lblAccountBal = new kony.ui.Label({
            "height": "19dp",
            "id": "lblAccountBal",
            "isVisible": true,
            "skin": "sknLbl727272SSP26pxTab",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "80%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxebill.add(flxAccountType, lblAccountBal);
        flxChequeDepositRow.add(lblAccountName, lblAccountBalValue, flxSeparator, flxebill);
        return flxChequeDepositRow;
    }
})