define("flxAccounts", function() {
    return function(controller) {
        var flxAccounts = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "f9f9",
            "height": "70dp",
            "id": "flxAccounts",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "skin": "f9f9"
        }, {}, {});
        flxAccounts.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxMain.setDefaultUnit(kony.flex.DP);
        var lblAccountBalValue = new kony.ui.Label({
            "height": "20dp",
            "id": "lblAccountBalValue",
            "isVisible": true,
            "right": "20dp",
            "skin": "sknLbl424242SSP32px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "17dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblAccountBal = new kony.ui.Label({
            "bottom": "15dp",
            "id": "lblAccountBal",
            "isVisible": true,
            "right": "20dp",
            "skin": "sknLbla0a0a022px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
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
        var imgWarn = new kony.ui.Image2({
            "bottom": "15dp",
            "centerX": "50%",
            "height": "25dp",
            "id": "imgWarn",
            "isVisible": true,
            "skin": "slImage",
            "src": "alert_2.png",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxAccountName = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxAccountName",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {}, {});
        flxAccountName.setDefaultUnit(kony.flex.DP);
        var lblAccountName = new kony.ui.Label({
            "height": "20dp",
            "id": "lblAccountName",
            "isVisible": true,
            "left": "0dp",
            "maxNumberOfLines": 1,
            "maxWidth": "40%",
            "skin": "sknLbl424242SSP26px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "4dp",
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
            "left": "1dp",
            "maxNumberOfLines": 1,
            "skin": "sknLbl424242SSP26px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "4dp",
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
            "bottom": "10dp",
            "clipBounds": false,
            "height": "15dp",
            "id": "flxBank",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "65%",
            "zIndex": 1
        }, {}, {});
        flxBank.setDefaultUnit(kony.flex.DP);
        var imgAccountType = new kony.ui.Image2({
            "centerY": "50%",
            "height": "15dp",
            "id": "imgAccountType",
            "isVisible": false,
            "left": "0",
            "right": 5,
            "skin": "slImage",
            "src": "businessaccount.png",
            "width": "15dp"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgBank = new kony.ui.Image2({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgBank",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "konybanklogo.png",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblBankName = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblBankName",
            "isVisible": true,
            "left": "1dp",
            "skin": "sknlble3e3e3border12px",
            "text": "testing",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 0, 1, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxBank.add(imgAccountType, imgBank, lblBankName);
        flxMain.add(lblAccountBalValue, lblAccountBal, flxSeparator, imgWarn, flxAccountName, flxBank);
        var flxDelete = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
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
            "height": "70dp",
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
        flxAccounts.add(flxMain, flxDelete, flxRefresh);
        return flxAccounts;
    }
})