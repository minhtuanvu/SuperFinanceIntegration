define("flxUserPermission", function() {
    return function(controller) {
        var flxUserPermission = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "75dp",
            "id": "flxUserPermission",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxUserPermission.setDefaultUnit(kony.flex.DP);
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
            "skin": "f9f9",
            "top": "0dp",
            "width": "92%",
            "zIndex": 1
        }, {}, {});
        flxMain.setDefaultUnit(kony.flex.DP);
        var lblNameVal = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblNameVal",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl424242SSregular144px",
            "text": "Transaction Limits",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxImg = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerY": "50%",
            "clipBounds": true,
            "id": "flxImg",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": 0,
            "skin": "slFbox",
            "width": "10%",
            "zIndex": 1
        }, {}, {});
        flxImg.setDefaultUnit(kony.flex.DP);
        var imgArrowIcon = new kony.ui.Image2({
            "height": "20dp",
            "id": "imgArrowIcon",
            "isVisible": true,
            "right": "0dp",
            "skin": "slImage",
            "src": "segmentarrow.png",
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImg.add(imgArrowIcon);
        var flxSeparate = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "3%",
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
        flxMain.add(lblNameVal, flxImg, flxSeparate);
        flxUserPermission.add(flxMain);
        return flxUserPermission;
    }
})