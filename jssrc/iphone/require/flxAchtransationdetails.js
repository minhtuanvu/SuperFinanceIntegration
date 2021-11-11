define("flxAchtransationdetails", function() {
    return function(controller) {
        var flxAchtransationdetails = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxAchtransationdetails",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxWhite",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxAchtransationdetails.setDefaultUnit(kony.flex.DP);
        var flxtemplate = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxtemplate",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxtemplate.setDefaultUnit(kony.flex.DP);
        var flxkeys = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxkeys",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "10dp",
            "width": "100%"
        }, {}, {});
        flxkeys.setDefaultUnit(kony.flex.DP);
        var lblKey = new kony.ui.Label({
            "id": "lblKey",
            "isVisible": true,
            "left": "18dp",
            "skin": "sknLbl727272SSPReg22px",
            "text": "Label",
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
        var lblColon = new kony.ui.Label({
            "id": "lblColon",
            "isVisible": true,
            "left": "5dp",
            "skin": "sknLbl727272SSPReg22px",
            "text": ":",
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
        flxkeys.add(lblKey, lblColon);
        var flxValue = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxValue",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 110
        }, {}, {});
        flxValue.setDefaultUnit(kony.flex.DP);
        var lblSubValue = new kony.ui.Label({
            "id": "lblSubValue",
            "isVisible": true,
            "right": "18dp",
            "skin": "sknLbl727272SSPReg22px",
            "text": "Label",
            "textStyle": {},
            "top": "4dp",
            "width": "40%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblValue = new kony.ui.Label({
            "bottom": "10dp",
            "id": "lblValue",
            "isVisible": true,
            "left": "18dp",
            "right": "20dp",
            "skin": "sknLbl424242SSP26px",
            "text": "label",
            "textStyle": {},
            "top": "4dp",
            "width": "50%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var flxUserType = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20dp",
            "id": "flxUserType",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "18dp",
            "isModalContainer": false,
            "skin": "sknflxe3e3e3border",
            "top": "4dp",
            "width": "20dp",
            "zIndex": 1
        }, {}, {});
        flxUserType.setDefaultUnit(kony.flex.DP);
        var imgUserType = new kony.ui.Image2({
            "height": "20dp",
            "id": "imgUserType",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "personalaccount.png",
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxUserType.add(imgUserType);
        flxValue.add(lblSubValue, lblValue, flxUserType);
        var flxSeperatorTrans3 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": 1,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeperatorTrans3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "4%",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "width": "92%",
            "zIndex": 1700
        }, {}, {});
        flxSeperatorTrans3.setDefaultUnit(kony.flex.DP);
        flxSeperatorTrans3.add();
        flxtemplate.add(flxkeys, flxValue, flxSeperatorTrans3);
        flxAchtransationdetails.add(flxtemplate);
        return flxAchtransationdetails;
    }
})