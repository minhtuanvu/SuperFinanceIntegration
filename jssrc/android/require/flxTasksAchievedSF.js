define("flxTasksAchievedSF", function() {
    return function(controller) {
        var flxTasksAchievedSF = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxTasksAchievedSF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxTasksAchievedSF.setDefaultUnit(kony.flex.DP);
        var flxParentSF = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "90%",
            "id": "flxParentSF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknFlxBorderTransSF",
            "width": "94%",
            "zIndex": 1
        }, {}, {});
        flxParentSF.setDefaultUnit(kony.flex.DP);
        var flxTickImgSF = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "60%",
            "id": "flxTickImgSF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "2%",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "12%",
            "zIndex": 1
        }, {}, {});
        flxTickImgSF.setDefaultUnit(kony.flex.DP);
        var imgTickSF = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "30dp",
            "id": "imgTickSF",
            "isVisible": true,
            "skin": "slImage",
            "src": "tick_fusion.png",
            "width": "30dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxTickImgSF.add(imgTickSF);
        var lblTaskTitleSF = new kony.ui.Label({
            "id": "lblTaskTitleSF",
            "isVisible": true,
            "left": "18%",
            "skin": "sknLblTransTitleSF",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblTaskDate = new kony.ui.Label({
            "bottom": "15%",
            "id": "lblTaskDate",
            "isVisible": true,
            "left": "18%",
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
        flxParentSF.add(flxTickImgSF, lblTaskTitleSF, lblTaskDate);
        flxTasksAchievedSF.add(flxParentSF);
        return flxTasksAchievedSF;
    }
})