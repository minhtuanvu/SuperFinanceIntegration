define("flxAccountsNoImageEuro", function() {
    return function(controller) {
        var flxAccountsNoImageEuro = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "f9f9",
            "height": "100dp",
            "id": "flxAccountsNoImageEuro",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "skin": "f9f9"
        }, {}, {});
        flxAccountsNoImageEuro.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxMain.setDefaultUnit(kony.flex.DP);
        var flxDet1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxDet1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "10dp",
            "width": "100%"
        }, {}, {});
        flxDet1.setDefaultUnit(kony.flex.DP);
        var flxAccountName = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxAccountName",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "6dp",
            "width": "55%",
            "zIndex": 1
        }, {}, {});
        flxAccountName.setDefaultUnit(kony.flex.DP);
        var lblAccountName = new kony.ui.Label({
            "height": "20dp",
            "id": "lblAccountName",
            "isVisible": true,
            "left": "0dp",
            "maxNumberOfLines": 1,
            "skin": "sknLbl424242SSP26px",
            "text": "My Checking...12345",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_NONE,
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
        var lblAccountNumber = new kony.ui.Label({
            "height": "20dp",
            "id": "lblAccountNumber",
            "isVisible": true,
            "left": "0dp",
            "maxNumberOfLines": 1,
            "skin": "sknLbl424242SSP26px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
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
        var imgError = new kony.ui.Image2({
            "height": "10dp",
            "id": "imgError",
            "isVisible": false,
            "left": "5dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "5dp",
            "width": "10dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxAccountName.add(lblAccountName, lblAccountNumber, imgError);
        var flxBank = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "15dp",
            "id": "flxBank",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": "15dp",
            "skin": "slFbox",
            "top": "6dp",
            "width": "25%",
            "zIndex": 1
        }, {}, {});
        flxBank.setDefaultUnit(kony.flex.DP);
        var lblBankName = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblBankName",
            "isVisible": true,
            "left": "3dp",
            "skin": "sknlblSSP72727213pxe3e3e34px",
            "text": "Checking",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [1, 0, 1, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flximgBank = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": false,
            "height": "17dp",
            "id": "flximgBank",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": 3,
            "isModalContainer": false,
            "right": "3dp",
            "skin": "sknflxe3e3e3border",
            "width": "17dp",
            "zIndex": 10000
        }, {}, {});
        flximgBank.setDefaultUnit(kony.flex.DP);
        var imgBank = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "45%",
            "height": "11dp",
            "id": "imgBank",
            "isVisible": true,
            "skin": "slImage",
            "src": "personalaccount.png",
            "width": "11dp"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flximgBank.add(imgBank);
        var flxAccountType = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": false,
            "height": "17dp",
            "id": "flxAccountType",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": 0,
            "isModalContainer": false,
            "right": 3,
            "skin": "sknflxe3e3e3border",
            "width": "17dp",
            "zIndex": 10000
        }, {}, {});
        flxAccountType.setDefaultUnit(kony.flex.DP);
        var imgAccountType = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "45%",
            "height": "13dp",
            "id": "imgAccountType",
            "isVisible": true,
            "skin": "slImage",
            "src": "businessaccount.png",
            "width": "14dp"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxAccountType.add(imgAccountType);
        flxBank.add(lblBankName, flximgBank, flxAccountType);
        flxDet1.add(flxAccountName, flxBank);
        var flxDet2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "10dp",
            "clipBounds": true,
            "id": "flxDet2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "top": "12dp",
            "width": "100%"
        }, {}, {});
        flxDet2.setDefaultUnit(kony.flex.DP);
        var flxCurrentBalance = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxCurrentBalance",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "right": "15dp",
            "skin": "slFbox",
            "top": "0",
            "width": "35%"
        }, {}, {});
        flxCurrentBalance.setDefaultUnit(kony.flex.DP);
        var lblAccountBalValue = new kony.ui.Label({
            "id": "lblAccountBalValue",
            "isVisible": true,
            "left": "0",
            "skin": "sknLbl424242SSP32px",
            "text": "$5,678",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblAccountBal = new kony.ui.Label({
            "id": "lblAccountBal",
            "isVisible": true,
            "left": "0",
            "skin": "sknLbl727272SSPR15px",
            "text": "Available Balance",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxCurrentBalance.add(lblAccountBalValue, lblAccountBal);
        var flxAvailableBalance = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxAvailableBalance",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "30%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": 0,
            "width": "30%"
        }, {}, {});
        flxAvailableBalance.setDefaultUnit(kony.flex.DP);
        var lblAccountBalValue2 = new kony.ui.Label({
            "id": "lblAccountBalValue2",
            "isVisible": true,
            "left": "0",
            "right": "0dp",
            "skin": "sknLbl424242SSP32px",
            "text": "$5,678",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblAccountBal2 = new kony.ui.Label({
            "id": "lblAccountBal2",
            "isVisible": true,
            "left": "0",
            "right": "0dp",
            "skin": "sknLbl727272SSPR15px",
            "text": "current balance",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxAvailableBalance.add(lblAccountBalValue2, lblAccountBal2);
        flxDet2.add(flxCurrentBalance, flxAvailableBalance);
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
            "skin": "sknFlxe3e3e3",
            "width": "92%",
            "zIndex": 1
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        flxMain.add(flxDet1, flxDet2, flxSeparator);
        var flxDelete = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxDelete",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknflxff5d6e",
            "top": "0dp",
            "width": "70dp",
            "zIndex": 1
        }, {}, {});
        flxDelete.setDefaultUnit(kony.flex.DP);
        var imgDelete = new kony.ui.Image2({
            "centerX": "50%",
            "height": "15dp",
            "id": "imgDelete",
            "isVisible": true,
            "left": "23dp",
            "skin": "slImage",
            "src": "deleteicon.png",
            "top": "17dp",
            "width": "12dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblDelete = new kony.ui.Label({
            "bottom": "15dp",
            "centerX": "50%",
            "id": "lblDelete",
            "isVisible": true,
            "skin": "sknLblffffffSSPReg86pr",
            "text": "Delete",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxDelete.add(imgDelete, lblDelete);
        var flxRefresh = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxRefresh",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox",
            "top": "0dp",
            "width": "70dp",
            "zIndex": 1
        }, {}, {});
        flxRefresh.setDefaultUnit(kony.flex.DP);
        var imgRefresh = new kony.ui.Image2({
            "height": "30dp",
            "id": "imgRefresh",
            "isVisible": true,
            "left": "16dp",
            "skin": "slImage",
            "src": "recurrenceindication.png",
            "top": "10dp",
            "width": "30dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblRefresh = new kony.ui.Label({
            "bottom": "15dp",
            "centerX": "50%",
            "id": "lblRefresh",
            "isVisible": true,
            "skin": "sknLbl004B95SSPRegular20px",
            "text": "Refresh",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxRefresh.add(imgRefresh, lblRefresh);
        flxAccountsNoImageEuro.add(flxMain, flxDelete, flxRefresh);
        return flxAccountsNoImageEuro;
    }
})