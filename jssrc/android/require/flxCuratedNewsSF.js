define("flxCuratedNewsSF", function() {
    return function(controller) {
        var flxCuratedNewsSF = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "90dp",
            "id": "flxCuratedNewsSF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxCuratedNewsSF.setDefaultUnit(kony.flex.DP);
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
        var flxMainNewsSF = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "90%",
            "id": "flxMainNewsSF",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "92%",
            "zIndex": 1
        }, {}, {});
        flxMainNewsSF.setDefaultUnit(kony.flex.DP);
        var flxLeftArrowSF = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "90%",
            "id": "flxLeftArrowSF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "12%",
            "zIndex": 1
        }, {}, {});
        flxLeftArrowSF.setDefaultUnit(kony.flex.DP);
        var imgLeftArrowSF = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "20dp",
            "id": "imgLeftArrowSF",
            "isVisible": true,
            "skin": "slImage",
            "src": "leftarrow_normal.png",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxLeftArrowSF.add(imgLeftArrowSF);
        var flxNewsDtlsSF = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxNewsDtlsSF",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "2%",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "74%",
            "zIndex": 1
        }, {}, {});
        flxNewsDtlsSF.setDefaultUnit(kony.flex.DP);
        var lblNewsTitleSF = new kony.ui.Label({
            "centerX": "50%",
            "id": "lblNewsTitleSF",
            "isVisible": true,
            "skin": "sknLblTransTitleSF",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "12%",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblNewsDescSF = new kony.ui.Label({
            "centerX": "50%",
            "id": "lblNewsDescSF",
            "isVisible": true,
            "skin": "sknLblDescSF",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "2%",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxNewsDtlsSF.add(lblNewsTitleSF, lblNewsDescSF);
        var flxDotsSF = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "90%",
            "id": "flxDotsSF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0%",
            "skin": "slFbox",
            "width": "12%",
            "zIndex": 1
        }, {}, {});
        flxDotsSF.setDefaultUnit(kony.flex.DP);
        var imgDotsSF = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "20dp",
            "id": "imgDotsSF",
            "isVisible": true,
            "skin": "slImage",
            "src": "dots_normal.png",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxDotsSF.add(imgDotsSF);
        flxMainNewsSF.add(flxLeftArrowSF, flxNewsDtlsSF, flxDotsSF);
        var flxDotsLneSF = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "3%",
            "centerX": "50%",
            "clipBounds": true,
            "height": "2dp",
            "id": "flxDotsLneSF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "85%",
            "zIndex": 1
        }, {}, {});
        flxDotsLneSF.setDefaultUnit(kony.flex.DP);
        var imgDotsLne = new kony.ui.Image2({
            "height": "100%",
            "id": "imgDotsLne",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxDotsLneSF.add(imgDotsLne);
        flxParentSF.add(flxMainNewsSF, flxDotsLneSF);
        flxCuratedNewsSF.add(flxParentSF);
        return flxCuratedNewsSF;
    }
})