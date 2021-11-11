define("flxAccountPreviewCombined", function() {
    return function(controller) {
        var flxAccountPreviewCombined = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "24%",
            "id": "flxAccountPreviewCombined",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "f9f9"
        }, {}, {});
        flxAccountPreviewCombined.setDefaultUnit(kony.flex.DP);
        var lblAccountName = new kony.ui.Label({
            "id": "lblAccountName",
            "isVisible": true,
            "left": "30dp",
            "maxNumberOfLines": 1,
            "skin": "sknLbl72727SSPReg26px",
            "text": "Label",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "20%",
            "width": "45%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblAccountBalValue = new kony.ui.Label({
            "id": "lblAccountBalValue",
            "isVisible": true,
            "right": "6%",
            "skin": "sknLbl424242SSPReg26px",
            "text": "Label",
            "textStyle": {},
            "top": "20%",
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
            "id": "lblAccountBal",
            "isVisible": true,
            "right": "6%",
            "skin": "sknLbla0a0a0SSPReg22px",
            "text": "Label",
            "textStyle": {},
            "top": "50%",
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
        var flxAccountDetails = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "45%",
            "id": "flxAccountDetails",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "30dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "50%",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, {}, {});
        flxAccountDetails.setDefaultUnit(kony.flex.DP);
        var flxAccountType = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "19dp",
            "id": "flxAccountType",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": 0,
            "isModalContainer": false,
            "right": "3dp",
            "skin": "sknflxe3e3e3border",
            "top": 0,
            "width": "19dp",
            "zIndex": 10000
        }, {}, {});
        flxAccountType.setDefaultUnit(kony.flex.DP);
        var imgBusinessAccount = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "13dp",
            "id": "imgBusinessAccount",
            "isVisible": true,
            "skin": "slImage",
            "src": "personalaccount.png",
            "width": "13dp"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxAccountType.add(imgBusinessAccount);
        var lblAccountType = new kony.ui.Label({
            "id": "lblAccountType",
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
        flxAccountDetails.add(flxAccountType, lblAccountType);
        flxAccountPreviewCombined.add(lblAccountName, lblAccountBalValue, lblAccountBal, flxAccountDetails);
        return flxAccountPreviewCombined;
    }
})