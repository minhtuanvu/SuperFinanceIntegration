define("CopyflxtmpContainer", function() {
    return function(controller) {
        var CopyflxtmpContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "80dp",
            "id": "CopyflxtmpContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        CopyflxtmpContainer.setDefaultUnit(kony.flex.DP);
        var imgLogo = new kony.ui.Image2({
            "height": "100%",
            "id": "imgLogo",
            "isVisible": true,
            "left": "8%",
            "skin": "slImage",
            "src": "hidlogo_1.png",
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
            "skin": "CopyCopysknLblHelvitica2",
            "text": "HID Global",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "18dp",
            "width": "40%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var imgArrow = new kony.ui.Image2({
            "centerY": "50%",
            "height": "100%",
            "id": "imgArrow",
            "isVisible": true,
            "right": "4%",
            "skin": "CopyCopyslImage",
            "src": "delete_1.png",
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
            "skin": "CopyCopyslImage",
            "src": "blank_1.png",
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
            "onClick": controller.AS_Button_ef20af1c62de4553988b2b947f43fcd6,
            "right": "4%",
            "skin": "CopyCopydefBtnNormal1",
            "top": "15dp",
            "width": "60dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        CopyflxtmpContainer.add(imgLogo, lblContainerName, imgArrow, imgCheck, btnDelete);
        return CopyflxtmpContainer;
    }
})