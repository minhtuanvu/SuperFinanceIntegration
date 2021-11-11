define("flxSelectAccounts", function() {
    return function(controller) {
        var flxSelectAccounts = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSelectAccounts",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxSelectAccounts.setDefaultUnit(kony.flex.DP);
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
        var imgSelectAccounts = new kony.ui.Image2({
            "centerY": "50%",
            "height": "30dp",
            "id": "imgSelectAccounts",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "a.png",
            "top": "0",
            "width": "30dp"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxSeparator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator",
            "isVisible": false,
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
            "top": "10dp",
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
            "text": "Account Nick..3008",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "4dp",
            "width": "80%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxAccountName.add(lblAccountName);
        var flxBank = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "15dp",
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
            "height": "22dp",
            "id": "flxAccountType",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": 0,
            "isModalContainer": false,
            "right": "3dp",
            "skin": "sknflxe3e3e3border",
            "width": "22dp",
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
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxAccountType.add(imgAccountType);
        var flximgBank = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": false,
            "height": "22dp",
            "id": "flximgBank",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": 3,
            "isModalContainer": false,
            "right": "3dp",
            "skin": "sknflxe3e3e3border",
            "width": "22dp",
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
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flximgBank.add(imgBank);
        var imgAccountType1 = new kony.ui.Image2({
            "centerY": "50%",
            "height": "25dp",
            "id": "imgAccountType1",
            "isVisible": false,
            "left": "0",
            "skin": "slImage",
            "src": "personalaccount.png",
            "top": "0",
            "width": "25dp"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgBank1 = new kony.ui.Image2({
            "centerY": "50%",
            "height": "25dp",
            "id": "imgBank1",
            "isVisible": false,
            "left": "5dp",
            "skin": "slImage",
            "src": "personalaccount.png",
            "width": "25dp",
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
            "left": "5dp",
            "skin": "sknlbl727272Brf6f6f6Reg98",
            "text": "gggg",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [2, 0, 2, 1],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxBank.add(flxAccountType, flximgBank, imgAccountType1, imgBank1, lblBankName);
        flxMain.add(imgSelectAccounts, flxSeparator, flxAccountName, flxBank);
        flxSelectAccounts.add(flxMain);
        return flxSelectAccounts;
    }
})