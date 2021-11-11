define("flxSelectAccountBillPay", function() {
    return function(controller) {
        var flxSelectAccountBillPay = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxSelectAccountBillPay",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxWhite",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxSelectAccountBillPay.setDefaultUnit(kony.flex.DP);
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
        var flxSeparator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "1dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        var flxAccount = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "23dp",
            "id": "flxAccount",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "22dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {}, {});
        flxAccount.setDefaultUnit(kony.flex.DP);
        var lblField1 = new kony.ui.Label({
            "id": "lblField1",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknLbl424244222px",
            "text": "Account Nick Name..1222",
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
        flxAccount.add(lblField1);
        var flxBank = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "5dp",
            "clipBounds": true,
            "height": "25dp",
            "id": "flxBank",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "22dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "42dp",
            "width": "50%",
            "zIndex": 1
        }, {}, {});
        flxBank.setDefaultUnit(kony.flex.DP);
        var flxImage = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "10dp",
            "clipBounds": true,
            "height": "20dp",
            "id": "flxImage",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknflxe3e3e3border",
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, {}, {});
        flxImage.setDefaultUnit(kony.flex.DP);
        var imgAccount = new kony.ui.Image2({
            "bottom": "10dp",
            "height": "20dp",
            "id": "imgAccount",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "personalicon.png",
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImage.add(imgAccount);
        var flxAccountType = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "10dp",
            "clipBounds": true,
            "height": "20dp",
            "id": "flxAccountType",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "25dp",
            "isModalContainer": false,
            "skin": "sknflxe3e3e3border",
            "top": "0dp",
            "width": "80dp",
            "zIndex": 1
        }, {}, {});
        flxAccountType.setDefaultUnit(kony.flex.DP);
        var lblField3 = new kony.ui.Label({
            "id": "lblField3",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl727272SSP26pxTab",
            "text": "Checking",
            "textStyle": {},
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxAccountType.add(lblField3);
        flxBank.add(flxImage, flxAccountType);
        var lblField2 = new kony.ui.Label({
            "id": "lblField2",
            "isVisible": true,
            "right": "19dp",
            "skin": "ICSknLbl424244222px",
            "text": " €5.765,08",
            "textStyle": {},
            "top": "15dp",
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
        var lblField4 = new kony.ui.Label({
            "bottom": "10dp",
            "id": "lblField4",
            "isVisible": true,
            "right": "21dp",
            "skin": "sknLbl727272SSP26pxTab",
            "text": "Available Balance",
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
        flxMain.add(flxSeparator, flxAccount, flxBank, lblField2, lblField4);
        flxSelectAccountBillPay.add(flxMain);
        return flxSelectAccountBillPay;
    }
})