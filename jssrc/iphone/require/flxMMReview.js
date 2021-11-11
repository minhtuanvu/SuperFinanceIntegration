define("flxMMReview", function() {
    return function(controller) {
        var flxMMReview = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "48dp",
            "id": "flxMMReview",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxMMReview.setDefaultUnit(kony.flex.DP);
        var lblTitle = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblTitle",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknMMLeftLabels",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var flxRightWrapper = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "48dp",
            "id": "flxRightWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {}, {});
        flxRightWrapper.setDefaultUnit(kony.flex.DP);
        var imgArrow = new kony.ui.Image2({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron_1.png",
            "width": "15dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblValue = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblValue",
            "isVisible": true,
            "right": "50dp",
            "skin": "sknMMBlueLabel",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxRightWrapper.add(imgArrow, lblValue);
        var flxSepartaor = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSepartaor",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSepartaor.setDefaultUnit(kony.flex.DP);
        flxSepartaor.add();
        flxMMReview.add(lblTitle, flxRightWrapper, flxSepartaor);
        return flxMMReview;
    }
})