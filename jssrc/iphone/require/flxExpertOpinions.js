define("flxExpertOpinions", function() {
    return function(controller) {
        var flxExpertOpinions = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxExpertOpinions",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxWhite",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxExpertOpinions.setDefaultUnit(kony.flex.DP);
        var flxImagestatus = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxImagestatus",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "10dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, {}, {});
        flxImagestatus.setDefaultUnit(kony.flex.DP);
        var imgStatus = new kony.ui.Image2({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgStatus",
            "isVisible": true,
            "left": "10dp",
            "skin": "slImage",
            "src": "approval.png",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImagestatus.add(imgStatus);
        var lblNote = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblNote",
            "isVisible": true,
            "left": "5dp",
            "skin": "sknLbl727272SSPR15px",
            "text": "Label",
            "textStyle": {},
            "top": "0dp",
            "width": "85%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxExpertOpinions.add(flxImagestatus, lblNote);
        return flxExpertOpinions;
    }
})