define("flxAlertsList", function() {
    return function(controller) {
        var flxAlertsList = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "f9f9",
            "height": "86dp",
            "id": "flxAlertsList",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxffffff",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxAlertsList.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "f9f9",
            "height": "86dp",
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFF",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxMain.setDefaultUnit(kony.flex.DP);
        var lblTitle = new kony.ui.Label({
            "centerY": "30%",
            "id": "lblTitle",
            "isVisible": true,
            "left": "64dp",
            "skin": "sknLbl424242SSPRegular26px",
            "text": "Last Few Hours Left!",
            "textStyle": {},
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
        var lblTime = new kony.ui.Label({
            "centerY": "28%",
            "id": "lblTime",
            "isVisible": true,
            "right": "18dp",
            "skin": "sknLbla0a0a022px",
            "text": "2:30 PM",
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
        var lblAlertDesc = new kony.ui.Label({
            "id": "lblAlertDesc",
            "isVisible": true,
            "left": "64dp",
            "maxNumberOfLines": 2,
            "skin": "sknLbl3e4f56SSPLight24px",
            "text": "Label",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "40dp",
            "width": "65%",
            "zIndex": 1,
            "blur": {
                "enabled": false,
                "value": 0
            }
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_CHAR_WRAP
        });
        var imgCategory = new kony.ui.Image2({
            "centerY": "50%",
            "height": "26dp",
            "id": "imgCategory",
            "isVisible": true,
            "left": "18dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "14dp",
            "width": "26dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxMain.add(lblTitle, lblTime, lblAlertDesc, imgCategory);
        var flxDelete = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "86dp",
            "id": "flxDelete",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": -86,
            "skin": "sknflxff5d6e",
            "top": "0dp",
            "width": "86dp",
            "zIndex": 1
        }, {}, {});
        flxDelete.setDefaultUnit(kony.flex.DP);
        var imgDelete = new kony.ui.Image2({
            "centerX": "50%",
            "height": "22dp",
            "id": "imgDelete",
            "isVisible": true,
            "left": "23dp",
            "skin": "slImage",
            "src": "deleteicon.png",
            "top": "25dp",
            "width": "22dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblRemove = new kony.ui.Label({
            "bottom": "20dp",
            "centerX": "50%",
            "id": "lblRemove",
            "isVisible": true,
            "skin": "sknLblffffffSSPReg86pr",
            "text": "Remove",
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
        flxDelete.add(imgDelete, lblRemove);
        flxAlertsList.add(flxMain, flxDelete);
        return flxAlertsList;
    }
})