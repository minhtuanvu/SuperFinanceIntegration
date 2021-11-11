define("flxListOuterFlex", function() {
    return function(controller) {
        var flxListOuterFlex = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "55dp",
            "id": "flxListOuterFlex",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "f9f9"
        }, {}, {});
        flxListOuterFlex.setDefaultUnit(kony.flex.DP);
        var lblTitle = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblTitle",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl424242SSP26px",
            "text": "Label",
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
        var btnActive = new kony.ui.Image2({
            "centerY": "50%",
            "height": "20dp",
            "id": "btnActive",
            "isVisible": false,
            "right": "6.25%",
            "skin": "slImage",
            "src": "active.png",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxShadowOne = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxShadowOne",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxShadowOne.setDefaultUnit(kony.flex.DP);
        flxShadowOne.add();
        var switchSMS = new kony.ui.Switch({
            "centerY": "50%",
            "height": "32dp",
            "id": "switchSMS",
            "isVisible": true,
            "leftSideText": "     ",
            "right": "20dp",
            "rightSideText": "     ",
            "selectedIndex": 0,
            "skin": "sknSwitch0095e4Op100pr000000Op10pr",
            "width": "55dp",
            "zIndex": 1
        }, {
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxListOuterFlex.add(lblTitle, btnActive, flxShadowOne, switchSMS);
        return flxListOuterFlex;
    }
})