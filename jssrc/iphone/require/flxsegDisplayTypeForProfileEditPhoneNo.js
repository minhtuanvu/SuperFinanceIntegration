define("flxsegDisplayTypeForProfileEditPhoneNo", function() {
    return function(controller) {
        var flxsegDisplayTypeForProfileEditPhoneNo = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxsegDisplayTypeForProfileEditPhoneNo",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxsegDisplayTypeForProfileEditPhoneNo.setDefaultUnit(kony.flex.DP);
        var flxRowcontainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxRowcontainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxRowcontainer.setDefaultUnit(kony.flex.DP);
        var flxPhoneNoTypeToggle = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "90%",
            "id": "flxPhoneNoTypeToggle",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "30dp",
            "skin": "slFbox",
            "top": "0%",
            "width": "33dp",
            "zIndex": 1
        }, {}, {});
        flxPhoneNoTypeToggle.setDefaultUnit(kony.flex.DP);
        var imgPhoneNoTypeToggle = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "30dp",
            "id": "imgPhoneNoTypeToggle",
            "isVisible": true,
            "skin": "slImage",
            "src": "radiobuttoninactive_big.png",
            "width": "30dp",
            "zIndex": 1,
            "blur": {
                "enabled": false,
                "value": 0
            }
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxPhoneNoTypeToggle.add(imgPhoneNoTypeToggle);
        var lblTitle = new kony.ui.Label({
            "bottom": "21dp",
            "id": "lblTitle",
            "isVisible": true,
            "left": "20dp",
            "maxWidth": "50dp",
            "minHeight": "19dp",
            "skin": "sknLbl424242SSP26px",
            "text": "Label",
            "textStyle": {},
            "top": "17dp",
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
        flxRowcontainer.add(flxPhoneNoTypeToggle, lblTitle);
        flxsegDisplayTypeForProfileEditPhoneNo.add(flxRowcontainer);
        return flxsegDisplayTypeForProfileEditPhoneNo;
    }
})