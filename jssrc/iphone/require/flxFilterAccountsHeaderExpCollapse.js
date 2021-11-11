define("flxFilterAccountsHeaderExpCollapse", function() {
    return function(controller) {
        var flxFilterAccountsHeaderExpCollapse = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "focusSkin": "sknflxf6f6f6Bg",
            "height": "60dp",
            "id": "flxFilterAccountsHeaderExpCollapse",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknflxf6f6f6Bg",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxFilterAccountsHeaderExpCollapse.setDefaultUnit(kony.flex.DP);
        var flxShadow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10dp",
            "id": "flxShadow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxDropShadow",
            "top": "0",
            "width": "100%"
        }, {}, {});
        flxShadow.setDefaultUnit(kony.flex.DP);
        flxShadow.add();
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
        var lblHeader = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblHeader",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknlbl424242SectionHeader",
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
        var flxImgUp = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "30dp",
            "id": "flxImgUp",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "width": "30dp",
            "zIndex": 6
        }, {}, {});
        flxImgUp.setDefaultUnit(kony.flex.DP);
        var imgUpArrow = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50.00%",
            "height": "20dp",
            "id": "imgUpArrow",
            "isVisible": true,
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
        var flxSeparatorHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "1dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparatorHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "sknflxe3e3e3border",
            "zIndex": 1
        }, {}, {});
        flxSeparatorHeader.setDefaultUnit(kony.flex.DP);
        flxSeparatorHeader.add();
        flxContent.add(lblHeader, flxImgUp, flxSeparatorHeader);
        flxFilterAccountsHeaderExpCollapse.add(flxShadow, flxContent);
        return flxFilterAccountsHeaderExpCollapse;
    }
})