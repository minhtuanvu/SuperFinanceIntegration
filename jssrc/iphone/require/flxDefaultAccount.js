define("flxDefaultAccount", function() {
    return function(controller) {
        var flxDefaultAccount = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "55dp",
            "id": "flxDefaultAccount",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "f9f9"
        }, {}, {});
        flxDefaultAccount.setDefaultUnit(kony.flex.DP);
        var lblAccountName = new kony.ui.Label({
            "id": "lblAccountName",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl424242SSP26px",
            "text": "Label",
            "textStyle": {},
            "top": "8dp",
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
        var lblBankName = new kony.ui.Label({
            "bottom": "4dp",
            "id": "lblBankName",
            "isVisible": true,
            "left": "40dp",
            "skin": "sknlble3e3e3border12px",
            "text": "Label",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [1, 0, 1, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblAccId = new kony.ui.Label({
            "bottom": "6dp",
            "id": "lblAccId",
            "isVisible": false,
            "left": "83dp",
            "skin": "sknLbla0a0a0SSPReg22px",
            "text": "Label",
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
        var lblAccountID = new kony.ui.Label({
            "bottom": "8dp",
            "id": "lblAccountID",
            "isVisible": false,
            "left": "70dp",
            "skin": "sknLbla0a0a0SSPReg22px",
            "text": "Label",
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
        var flxRadioBtn = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "15dp",
            "id": "flxRadioBtn",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "width": "15dp",
            "zIndex": 1
        }, {}, {});
        flxRadioBtn.setDefaultUnit(kony.flex.DP);
        var imgRadio = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "15dp",
            "id": "imgRadio",
            "isVisible": true,
            "skin": "slImage",
            "src": "radiobuttoninactive.png",
            "width": "15dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxRadioBtn.add(imgRadio);
        var flxAccountType = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "4dp",
            "clipBounds": true,
            "height": "16dp",
            "id": "flxAccountType",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "sknflxe3e3e3border",
            "width": "20dp"
        }, {}, {});
        flxAccountType.setDefaultUnit(kony.flex.DP);
        var imgAccountType = new kony.ui.Image2({
            "height": "100%",
            "id": "imgAccountType",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "personalaccount.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxAccountType.add(imgAccountType);
        flxDefaultAccount.add(lblAccountName, lblBankName, lblAccId, lblAccountID, flxSeparator, flxRadioBtn, flxAccountType);
        return flxDefaultAccount;
    }
})