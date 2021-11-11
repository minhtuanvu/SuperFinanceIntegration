define("flxAccountsNoImageBillPay", function() {
    return function(controller) {
        var flxAccountsNoImageBillPay = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "slFbox",
            "height": "70dp",
            "id": "flxAccountsNoImageBillPay",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "skin": "f9f9"
        }, {}, {});
        flxAccountsNoImageBillPay.setDefaultUnit(kony.flex.DP);
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
            "id": "lblAccountBalValue",
            "isVisible": true,
            "right": "20dp",
            "skin": "sknLbl424242SSP32px",
            "textStyle": {},
            "top": "14dp",
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
            "bottom": "15dp",
            "id": "lblAccountBal",
            "isVisible": true,
            "right": "20dp",
            "skin": "sknLbla0a0a022px",
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
            "height": 20,
            "id": "lblAccountName",
            "isVisible": true,
            "left": "0dp",
            "maxNumberOfLines": 1,
            "maxWidth": "40%",
            "skin": "sknLbl424242SSP26px",
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
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblAccountNumber = new kony.ui.Label({
            "id": "lblAccountNumber",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLbl424242SSP26px",
            "textStyle": {},
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
        flxAccountName.add(lblAccountName, lblAccountNumber);
        var flxebill = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "10dp",
            "clipBounds": true,
            "height": "20dp",
            "id": "flxebill",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "60%",
            "zIndex": 1
        }, {}, {});
        flxebill.setDefaultUnit(kony.flex.DP);
        var flxAccountType = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50.00%",
            "clipBounds": false,
            "height": "20dp",
            "id": "flxAccountType",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "right": "7dp",
            "skin": "sknflxe3e3e3border",
            "width": "20dp",
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
        var imgebill = new kony.ui.Image2({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgebill",
            "isVisible": true,
            "right": "7dp",
            "skin": "slImage",
            "src": "ebill.png",
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblBankName = new kony.ui.Label({
            "bottom": "0dp",
            "centerY": "50%",
            "id": "lblBankName",
            "isVisible": true,
            "maxNumberOfLines": 1,
            "skin": "sknLbla0a0a022px",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "width": "74%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxebill.add(flxAccountType, imgebill, lblBankName);
        flxMain.add(lblAccountBalValue, lblAccountBal, flxSeparator, flxAccountName, flxebill);
        var flxViewBill = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxViewBill",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknflx3CB4F4",
            "top": "0dp",
            "width": "70dp",
            "zIndex": 1
        }, {}, {});
        flxViewBill.setDefaultUnit(kony.flex.DP);
        var imgDelete = new kony.ui.Image2({
            "centerX": "50%",
            "height": "18dp",
            "id": "imgDelete",
            "isVisible": true,
            "left": "23dp",
            "skin": "slImage",
            "src": "viewbill.png",
            "top": "17dp",
            "width": "18dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblDelete = new kony.ui.Label({
            "bottom": "12dp",
            "centerX": "50%",
            "id": "lblDelete",
            "isVisible": true,
            "skin": "sknLblffffff22px",
            "text": kony.i18n.getLocalizedString("Kony.mb.EBill.ViewBillSmall"),
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
        flxViewBill.add(imgDelete, lblDelete);
        var flxBillPay = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxBillPay",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "1dp",
            "isModalContainer": false,
            "skin": "sknFlx0095e4",
            "top": "0dp",
            "width": "70dp",
            "zIndex": 1
        }, {}, {});
        flxBillPay.setDefaultUnit(kony.flex.DP);
        var imgBillPay = new kony.ui.Image2({
            "centerX": "50%",
            "height": "18dp",
            "id": "imgBillPay",
            "isVisible": true,
            "left": "23dp",
            "skin": "slImage",
            "src": "billpayheader.png",
            "top": "17dp",
            "width": "18dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblBillPay = new kony.ui.Label({
            "bottom": "12dp",
            "centerX": "50%",
            "id": "lblBillPay",
            "isVisible": true,
            "skin": "sknLblffffff22px",
            "text": kony.i18n.getLocalizedString("Kony.mb.EBill.PayBillSmall"),
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
        flxBillPay.add(imgBillPay, lblBillPay);
        var flxPayBill = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxPayBill",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "1dp",
            "isModalContainer": false,
            "skin": "sknFlx0095e4",
            "top": "0dp",
            "width": "140dp",
            "zIndex": 1
        }, {}, {});
        flxPayBill.setDefaultUnit(kony.flex.DP);
        var CopyimgBillPay0df7fb35ec9da41 = new kony.ui.Image2({
            "centerX": "50%",
            "height": "18dp",
            "id": "CopyimgBillPay0df7fb35ec9da41",
            "isVisible": true,
            "left": "23dp",
            "skin": "slImage",
            "src": "billpayheader.png",
            "top": "17dp",
            "width": "18dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var CopylblBillPay0d9ff48aec2264b = new kony.ui.Label({
            "bottom": "12dp",
            "centerX": "50%",
            "id": "CopylblBillPay0d9ff48aec2264b",
            "isVisible": true,
            "skin": "sknLblffffff22px",
            "text": kony.i18n.getLocalizedString("Kony.mb.EBill.PayBillSmall"),
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
        flxPayBill.add(CopyimgBillPay0df7fb35ec9da41, CopylblBillPay0d9ff48aec2264b);
        flxAccountsNoImageBillPay.add(flxMain, flxViewBill, flxBillPay, flxPayBill);
        return flxAccountsNoImageBillPay;
    }
})