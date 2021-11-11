define("flxWorkTransSF", function() {
    return function(controller) {
        var flxWorkTransSF = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "75dp",
            "id": "flxWorkTransSF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxWorkTransSF.setDefaultUnit(kony.flex.DP);
        var flxParentSF = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxParentSF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxParentSF.setDefaultUnit(kony.flex.DP);
        var flxMainSF = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "82%",
            "id": "flxMainSF",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "skin": "sknFlxBorderTransSF",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flxMainSF.setDefaultUnit(kony.flex.DP);
        var flxImgSF = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "80%",
            "id": "flxImgSF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "4%",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "12%",
            "zIndex": 1
        }, {}, {});
        flxImgSF.setDefaultUnit(kony.flex.DP);
        var imgTransSF = new kony.ui.Image2({
            "height": "100%",
            "id": "imgTransSF",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImgSF.add(imgTransSF);
        var flxTransTitleSF = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "80%",
            "id": "flxTransTitleSF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "6%",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "55%",
            "zIndex": 1
        }, {}, {});
        flxTransTitleSF.setDefaultUnit(kony.flex.DP);
        var lblTransTitleSF = new kony.ui.Label({
            "id": "lblTransTitleSF",
            "isVisible": true,
            "left": "0%",
            "skin": "sknLblTransTitleSF",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblTransDescSF = new kony.ui.Label({
            "bottom": "5%",
            "id": "lblTransDescSF",
            "isVisible": true,
            "left": "0%",
            "skin": "sknLblDescSF",
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
        flxTransTitleSF.add(lblTransTitleSF, lblTransDescSF);
        var lblTransAmtSF = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblTransAmtSF",
            "isVisible": true,
            "left": "3%",
            "skin": "sknLblWishesSF",
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
        flxMainSF.add(flxImgSF, flxTransTitleSF, lblTransAmtSF);
        flxParentSF.add(flxMainSF);
        flxWorkTransSF.add(flxParentSF);
        return flxWorkTransSF;
    }
})