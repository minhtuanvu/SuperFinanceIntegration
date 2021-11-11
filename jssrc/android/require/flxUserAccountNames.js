define("flxUserAccountNames", function() {
    return function(controller) {
        var flxUserAccountNames = new kony.ui.FlexContainer({
            "clipBounds": true,
            "height": "80dp",
            "id": "flxUserAccountNames",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxUserAccountNames.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "100%",
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
        var flxImg = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerY": "50%",
            "clipBounds": true,
            "id": "flxImg",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "3%",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "10%",
            "zIndex": 1
        }, {}, {});
        flxImg.setDefaultUnit(kony.flex.DP);
        var imgDotIcon = new kony.ui.Image2({
            "height": "30dp",
            "id": "imgDotIcon",
            "isVisible": true,
            "right": "0dp",
            "skin": "slImage",
            "src": "pageoffdot.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImg.add(imgDotIcon);
        var lblNameVal = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblNameVal",
            "isVisible": true,
            "left": "15%",
            "skin": "sknLbl424242SSReg30px",
            "text": "Transaction Limit",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "80%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxSeparate = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "2%",
            "id": "flxSeparate",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSeparate.setDefaultUnit(kony.flex.DP);
        flxSeparate.add();
        flxMain.add(flxImg, lblNameVal, flxSeparate);
        flxUserAccountNames.add(flxMain);
        return flxUserAccountNames;
    }
})