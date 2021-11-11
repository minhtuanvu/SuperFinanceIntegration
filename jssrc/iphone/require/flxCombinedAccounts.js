define("flxCombinedAccounts", function() {
    return function(controller) {
        var flxCombinedAccounts = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "f9f9",
            "height": "60dp",
            "id": "flxCombinedAccounts",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "skin": "f9f9"
        }, {}, {});
        flxCombinedAccounts.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
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
            "text": "$678900",
            "textStyle": {},
            "top": "4dp",
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
        var lblAccountBal = new kony.ui.Label({
            "bottom": "12dp",
            "id": "lblAccountBal",
            "isVisible": true,
            "right": "20dp",
            "skin": "sknLbla0a0a022px",
            "text": "balance",
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
        var flxSeparator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
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
            "skin": "sknLbl424242SSP26px",
            "text": "test",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_NONE,
            "top": "0dp",
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
        var lblAccountNumber = new kony.ui.Label({
            "height": "20dp",
            "id": "lblAccountNumber",
            "isVisible": true,
            "left": "0dp",
            "maxNumberOfLines": 1,
            "skin": "sknLbl424242SSP26px",
            "text": "     ",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_CHAR_WRAP
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
            "bottom": "12dp",
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
        var flxAccountType = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": false,
            "height": "17dp",
            "id": "flxAccountType",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": 0,
            "isModalContainer": false,
            "right": "3dp",
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
        var flximgBank = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": false,
            "height": "17dp",
            "id": "flximgBank",
            "isVisible": true,
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
        var lblBankName = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblBankName",
            "isVisible": true,
            "left": "3dp",
            "skin": "sknlblSSP72727213pxe3e3e34px",
            "text": "ggg",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [1, 0, 1, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxBank.add(flxAccountType, flximgBank, lblBankName);
        flxMain.add(lblAccountBalValue, lblAccountBal, flxSeparator, flxAccountName, flxBank);
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
        flxRefresh.add(imgRefresh, lblRefresh);
        flxCombinedAccounts.add(flxMain, flxDelete, flxRefresh);
        return flxCombinedAccounts;
    }
})