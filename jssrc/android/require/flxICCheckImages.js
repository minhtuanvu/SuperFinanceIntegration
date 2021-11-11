define("flxICCheckImages", function() {
    return function(controller) {
        var flxICCheckImages = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "370dp",
            "id": "flxICCheckImages",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxICCheckImages.setDefaultUnit(kony.flex.DP);
        var flxFrontImg = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50.00%",
            "clipBounds": true,
            "height": "173dp",
            "id": "flxFrontImg",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFFBorder0bdca66796d484cRA",
            "top": "10dp",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flxFrontImg.setDefaultUnit(kony.flex.DP);
        var flxFrontHeading = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "flxFrontHeading",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxFrontHeading.setDefaultUnit(kony.flex.DP);
        var lblFront = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblFront",
            "isVisible": true,
            "left": "10dp",
            "skin": "ICSknLbl727272SSPReg22px",
            "text": "Front Image",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 110
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxFrontDownload = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxFrontDownload",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "5dp",
            "skin": "CopyslFbox",
            "top": "0dp",
            "width": "30dp"
        }, {}, {});
        flxFrontDownload.setDefaultUnit(kony.flex.DP);
        var imgFrontDownload = new kony.ui.Image2({
            "centerY": "50%",
            "height": "30dp",
            "id": "imgFrontDownload",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "download_1.png",
            "top": "0dp",
            "width": "30dp"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxFrontDownload.add(imgFrontDownload);
        flxFrontHeading.add(lblFront, flxFrontDownload);
        var flxSeperatorFront = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2dp",
            "id": "flxSeperatorFront",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSeperatorFront.setDefaultUnit(kony.flex.DP);
        flxSeperatorFront.add();
        var lblFrontCheckNotAvailable = new kony.ui.Label({
            "centerX": "50%",
            "id": "lblFrontCheckNotAvailable",
            "isVisible": true,
            "left": 6,
            "skin": "ICSknLbl727272SSPReg22px",
            "text": "Check Image not available",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "40dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 110
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var imgFront = new kony.ui.Image2({
            "centerX": "50.00%",
            "height": "60%",
            "id": "imgFront",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "checksmall_1.png",
            "top": "10dp",
            "width": "80%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxFrontImg.add(flxFrontHeading, flxSeperatorFront, lblFrontCheckNotAvailable, imgFront);
        var flxBackImg = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "173dp",
            "id": "flxBackImg",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFFBorder0bdca66796d484cRA",
            "top": "10dp",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flxBackImg.setDefaultUnit(kony.flex.DP);
        var flxBackHeading = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "flxBackHeading",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxBackHeading.setDefaultUnit(kony.flex.DP);
        var flxBackDownload = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxBackDownload",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "5dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "30dp"
        }, {}, {});
        flxBackDownload.setDefaultUnit(kony.flex.DP);
        var imgBackDownload = new kony.ui.Image2({
            "centerY": "50%",
            "height": "30dp",
            "id": "imgBackDownload",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "download_1.png",
            "top": "0dp",
            "width": "30dp"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxBackDownload.add(imgBackDownload);
        var lblBack = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblBack",
            "isVisible": true,
            "left": "10dp",
            "skin": "ICSknLbl727272SSPReg22px",
            "text": "Back Image",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 110
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxBackHeading.add(flxBackDownload, lblBack);
        var flxSeperatoBack = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2dp",
            "id": "flxSeperatoBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSeperatoBack.setDefaultUnit(kony.flex.DP);
        flxSeperatoBack.add();
        var lblBackCheckNotAvailable = new kony.ui.Label({
            "centerX": "50%",
            "id": "lblBackCheckNotAvailable",
            "isVisible": true,
            "left": 6,
            "skin": "ICSknLbl727272SSPReg22px",
            "text": "Check Image not available",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "40dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 110
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var imgBack = new kony.ui.Image2({
            "centerX": "50%",
            "height": "60%",
            "id": "imgBack",
            "isVisible": true,
            "skin": "slImage",
            "src": "checksmall_1.png",
            "top": "10dp",
            "width": "80%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxBackImg.add(flxBackHeading, flxSeperatoBack, lblBackCheckNotAvailable, imgBack);
        flxICCheckImages.add(flxFrontImg, flxBackImg);
        return flxICCheckImages;
    }
})