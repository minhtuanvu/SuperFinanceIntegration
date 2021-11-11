define("flxtmpContainer", function() {
    return function(controller) {
        var flxtmpContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "80dp",
            "id": "flxtmpContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxtmpContainer.setDefaultUnit(kony.flex.DP);
        var imgLogo = new kony.ui.Image2({
            "height": "100%",
            "id": "imgLogo",
            "isVisible": true,
            "left": "8%",
            "skin": "slImage",
            "src": "hidlogo.png",
            "top": "0dp",
            "width": "20%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblContainerName = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblContainerName",
            "isVisible": true,
            "left": "35%",
            "skin": "CopysknLblHelvitica0h6a2b16393df49",
            "text": "HID Global",
            "textStyle": {},
            "top": "18dp",
            "width": "40%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var imgArrow = new kony.ui.Image2({
            "centerY": "50%",
            "height": "100%",
            "id": "imgArrow",
            "isVisible": true,
            "right": "4%",
            "skin": "CopyslImage0ca4b499498864b",
            "src": "delete.png",
            "width": "50dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgCheck = new kony.ui.Image2({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgCheck",
            "isVisible": false,
            "left": "4%",
            "skin": "CopyslImage0ca4b499498864b",
            "src": "blank.png",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnDelete = new kony.ui.Button({
            "height": "50dp",
            "id": "btnDelete",
            "isVisible": true,
            "onClick": controller.AS_Button_e66c67cebd064509a782d6a21b6c7af6,
            "right": "4%",
            "skin": "CopydefBtnNormal0b0f12afcaffc49",
            "top": "15dp",
            "width": "60dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "showProgressIndicator": true
        });
        flxtmpContainer.add(imgLogo, lblContainerName, imgArrow, imgCheck, btnDelete);
        return flxtmpContainer;
    }
})