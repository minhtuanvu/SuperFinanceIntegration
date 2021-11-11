define("flxTransHeader", function() {
    return function(controller) {
        var flxTransHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxTransHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknflxf6f6f6Bcg",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxTransHeader.setDefaultUnit(kony.flex.DP);
        var flximgUp = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "30dp",
            "id": "flximgUp",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_a7722ae174ec40228a9886f6ea3ea459,
            "right": "16dp",
            "skin": "slFbox",
            "top": "17dp",
            "width": "30dp",
            "zIndex": 6
        }, {}, {});
        flximgUp.setDefaultUnit(kony.flex.DP);
        var imgUpArrow = new kony.ui.Image2({
            "centerY": "50%",
            "height": "15dp",
            "id": "imgUpArrow",
            "isVisible": true,
            "right": "0dp",
            "skin": "slImage",
            "src": "arrowdown.png",
            "width": "15dp",
            "zIndex": 6
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flximgUp.add(imgUpArrow);
        var lblHeader = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblHeader",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknlbl424242SectionHeader",
            "text": "Transactions",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 6
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var flxTypeOneShadow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10dp",
            "id": "flxTypeOneShadow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknFlxHeaderShadow",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxTypeOneShadow.setDefaultUnit(kony.flex.DP);
        flxTypeOneShadow.add();
        var flxShadowBottom = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "7dp",
            "id": "flxShadowBottom",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknFlxHeaderShadowBottom",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxShadowBottom.setDefaultUnit(kony.flex.DP);
        flxShadowBottom.add();
        flxTransHeader.add(flximgUp, lblHeader, flxTypeOneShadow, flxShadowBottom);
        return flxTransHeader;
    }
})