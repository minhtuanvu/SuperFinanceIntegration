define("flxCombinedStatementsHeader", function() {
    return function(controller) {
        var flxCombinedStatementsHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxCombinedStatementsHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknflxf6f6f6Bcg",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxCombinedStatementsHeader.setDefaultUnit(kony.flex.DP);
        var flxContent = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxContent",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "3dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 6
        }, {}, {});
        flxContent.setDefaultUnit(kony.flex.DP);
        var flxImgUp = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "30dp",
            "id": "flxImgUp",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "2%",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_ac650cd4012c4f648b82aae03273687c,
            "right": 0,
            "skin": "slFbox",
            "top": "17dp",
            "width": "10%",
            "zIndex": 6
        }, {}, {});
        flxImgUp.setDefaultUnit(kony.flex.DP);
        var imgUpArrow = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50.00%",
            "height": "20dp",
            "id": "imgUpArrow",
            "isVisible": true,
            "left": "0dp",
            "right": "0dp",
            "skin": "slImage",
            "src": "arrowdown.png",
            "width": "20dp",
            "zIndex": 6
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImgUp.add(imgUpArrow);
        var lblHeader = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblHeader",
            "isVisible": true,
            "left": "15%",
            "skin": "sknLbl424242SSP26px",
            "text": "Personal Account",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "60%",
            "zIndex": 6
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxSelectall = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": 0,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSelectall",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_eb7a16aaebd44d94974c4f1f9f6c6afc,
            "right": "1%",
            "skin": "slFbox",
            "top": "0dp",
            "width": "16%",
            "zIndex": 6
        }, {}, {});
        flxSelectall.setDefaultUnit(kony.flex.DP);
        var imgSelectall = new kony.ui.Image2({
            "centerY": "50.00%",
            "height": "30dp",
            "id": "imgSelectall",
            "isVisible": true,
            "right": "24dp",
            "skin": "slImage",
            "src": "inactivebox.png",
            "width": "30dp",
            "zIndex": 6
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSelectall.add(imgSelectall);
        flxContent.add(flxImgUp, lblHeader, flxSelectall);
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
        var flxTypeOneShadowtop = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "5dp",
            "id": "flxTypeOneShadowtop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknFlxHeaderShadow",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxTypeOneShadowtop.setDefaultUnit(kony.flex.DP);
        flxTypeOneShadowtop.add();
        flxCombinedStatementsHeader.add(flxContent, flxShadowBottom, flxTypeOneShadowtop);
        return flxCombinedStatementsHeader;
    }
})