define("flxHeaderAccount", function() {
    return function(controller) {
        var flxHeaderAccount = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "62dp",
            "id": "flxHeaderAccount",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxWhite",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxHeaderAccount.setDefaultUnit(kony.flex.DP);
        var flxHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "62dp",
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxF6F6F6",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxHeader.setDefaultUnit(kony.flex.DP);
        var flxHeaderShadow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10dp",
            "id": "flxHeaderShadow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxShadow000fff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxHeaderShadow.setDefaultUnit(kony.flex.DP);
        flxHeaderShadow.add();
        var flxBottomShadow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2dp",
            "id": "flxBottomShadow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "top": "60dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxBottomShadow.setDefaultUnit(kony.flex.DP);
        flxBottomShadow.add();
        var lblHeader = new kony.ui.Label({
            "bottom": "18dp",
            "id": "lblHeader",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl424244222px",
            "text": "Personal Accounts (3)",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "20dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxImage = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxImage",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "-6dp",
            "skin": "slFbox",
            "top": "20dp",
            "width": "70dp",
            "zIndex": 1
        }, {}, {});
        flxImage.setDefaultUnit(kony.flex.DP);
        var imgArrow = new kony.ui.Image2({
            "height": "25dp",
            "id": "imgArrow",
            "isVisible": true,
            "left": "13dp",
            "right": "-6dp",
            "skin": "slImage",
            "src": "arrowup.png",
            "top": "0dp",
            "width": "25dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImage.add(imgArrow);
        flxHeader.add(flxHeaderShadow, flxBottomShadow, lblHeader, flxImage);
        flxHeaderAccount.add(flxHeader);
        return flxHeaderAccount;
    }
})