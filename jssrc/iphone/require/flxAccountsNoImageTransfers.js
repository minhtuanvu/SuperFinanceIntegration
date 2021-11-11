define("flxAccountsNoImageTransfers", function() {
    return function(controller) {
        var flxAccountsNoImageTransfers = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "slFbox",
            "height": "70dp",
            "id": "flxAccountsNoImageTransfers",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "skin": "f9f9"
        }, {}, {});
        flxAccountsNoImageTransfers.setDefaultUnit(kony.flex.DP);
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
        var flxBankName = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": 10,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxBankName",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "90%"
        }, {}, {});
        flxBankName.setDefaultUnit(kony.flex.DP);
        var accountTypeFlx = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "100%",
            "id": "accountTypeFlx",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "flxIconShadow7px7d7d7dBorder4pxe3e3e3",
            "top": "1dp",
            "width": "16dp",
            "zIndex": 1
        }, {}, {});
        accountTypeFlx.setDefaultUnit(kony.flex.DP);
        var accountTypeIcon = new kony.ui.Image2({
            "bottom": 0,
            "centerY": "40.63%",
            "height": "15dp",
            "id": "accountTypeIcon",
            "isVisible": true,
            "left": 0,
            "right": 5,
            "skin": "slImage",
            "src": "imagedrag.png",
            "width": "15dp"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        accountTypeFlx.add(accountTypeIcon);
        var imgBankIcon = new kony.ui.Image2({
            "bottom": 0,
            "centerY": "50%",
            "height": "15dp",
            "id": "imgBankIcon",
            "isVisible": false,
            "left": 0,
            "right": 5,
            "skin": "slImage",
            "src": "imagedrag.png",
            "width": "15dp"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxBankIconType = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxBankIconType",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "25dp"
        }, {}, {});
        flxBankIconType.setDefaultUnit(kony.flex.DP);
        var imgBankIconType = new kony.ui.Image2({
            "bottom": 0,
            "centerY": "50%",
            "height": "20dp",
            "id": "imgBankIconType",
            "isVisible": true,
            "left": 0,
            "right": 5,
            "skin": "slImage",
            "src": "imagedrag.png",
            "width": "20dp"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxBankIconType.add(imgBankIconType);
        var lblBankName = new kony.ui.Label({
            "bottom": "1dp",
            "id": "lblBankName",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl727272SourceSansPro30pxTab",
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
        flxBankName.add(accountTypeFlx, imgBankIcon, flxBankIconType, lblBankName);
        var lblAccountBalValue = new kony.ui.Label({
            "id": "lblAccountBalValue",
            "isVisible": true,
            "right": "20dp",
            "skin": "sknLbl424242SSP36pxSegments",
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
        var lblAccountBal = new kony.ui.Label({
            "bottom": "10dp",
            "id": "lblAccountBal",
            "isVisible": true,
            "right": "20dp",
            "skin": "sknLbl727272SourceSansPro30pxTab",
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
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        var imgTick = new kony.ui.Image2({
            "centerY": "50%",
            "height": "15dp",
            "id": "imgTick",
            "isVisible": false,
            "right": "8dp",
            "skin": "slImage",
            "src": "tickmark_green.png",
            "top": "0",
            "width": "15dp"
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
            "top": "12dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {}, {});
        flxAccountName.setDefaultUnit(kony.flex.DP);
        var lblAccountName = new kony.ui.Label({
            "id": "lblAccountName",
            "isVisible": true,
            "left": "0dp",
            "maxNumberOfLines": 1,
            "maxWidth": "40%",
            "skin": "sknLbl424242SSP36pxSegments",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "0dp",
            "width": "60%",
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
            "skin": "sknLbl424242SSP36pxSegments",
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
        flxMain.add(flxBankName, lblAccountBalValue, lblAccountBal, flxSeparator, imgTick, flxAccountName);
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
        flxAccountsNoImageTransfers.add(flxMain, flxDelete);
        return flxAccountsNoImageTransfers;
    }
})