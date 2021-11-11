define("flxFilterOptionsList", function() {
    return function(controller) {
        var flxFilterOptionsList = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxFilterOptionsList",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknListingOptions",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxFilterOptionsList.setDefaultUnit(kony.flex.DP);
        var lblFilterOption = new kony.ui.Label({
            "centerY": "50.00%",
            "id": "lblFilterOption",
            "isVisible": true,
            "left": "8.00%",
            "skin": "ICSknFilterOptions4176a450PxSSPRegular",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "75%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var imgFilterSelectedIcon = new kony.ui.Image2({
            "centerY": "50.00%",
            "height": "100%",
            "id": "imgFilterSelectedIcon",
            "isVisible": true,
            "left": "80%",
            "src": "correct.png",
            "top": 0,
            "width": "20%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxFilterOptionsList.add(lblFilterOption, imgFilterSelectedIcon);
        return flxFilterOptionsList;
    }
})