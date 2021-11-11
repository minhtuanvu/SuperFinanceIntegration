define("flxApprovalReqExpColHeader", function() {
    return function(controller) {
        var flxApprovalReqExpColHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxApprovalReqExpColHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknflxf6f6f6Bcg",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxApprovalReqExpColHeader.setDefaultUnit(kony.flex.DP);
        var flxContent = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxContent",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
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
            "isModalContainer": false,
            "right": "18dp",
            "skin": "slFbox",
            "top": "17dp",
            "width": "30dp",
            "zIndex": 6
        }, {}, {});
        flxImgUp.setDefaultUnit(kony.flex.DP);
        var imgUpArrow = new kony.ui.Image2({
            "centerY": "50.00%",
            "height": "30dp",
            "id": "imgUpArrow",
            "isVisible": true,
            "right": "0dp",
            "skin": "slImage",
            "src": "arrowdownblue.png",
            "width": "30dp",
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
            "left": "18dp",
            "skin": "sknLbl424242SSP26px",
            "text": "...",
            "textStyle": {},
            "width": "80%",
            "zIndex": 6
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
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
            "height": "7dp",
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
        flxContent.add(flxImgUp, lblHeader, flxShadowBottom, flxTypeOneShadowtop);
        flxApprovalReqExpColHeader.add(flxContent);
        return flxApprovalReqExpColHeader;
    }
})