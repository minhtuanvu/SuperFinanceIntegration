define("flxApprovalsAndRequestFilter", function() {
    return function(controller) {
        var flxApprovalsAndRequestFilter = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "sknFlxBg000000",
            "height": "60dp",
            "id": "flxApprovalsAndRequestFilter",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBg000000",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxApprovalsAndRequestFilter.setDefaultUnit(kony.flex.DP);
        var lblSeperator = new kony.ui.Label({
            "bottom": "0dp",
            "height": "1dp",
            "id": "lblSeperator",
            "isVisible": true,
            "left": "0",
            "maxNumberOfLines": 1,
            "right": 0,
            "skin": "sknLblSeparatore3e3e3",
            "text": ".",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "100%",
            "zIndex": 10000
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var imgSelect = new kony.ui.Image2({
            "centerY": "50%",
            "height": "17dp",
            "id": "imgSelect",
            "isVisible": true,
            "right": "28dp",
            "skin": "slImage",
            "src": "tickmark_green.png",
            "top": "0",
            "width": "17dp"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxText = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "60dp",
            "id": "flxText",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "29dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "80%"
        }, {}, {});
        flxText.setDefaultUnit(kony.flex.DP);
        var lblText = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblText",
            "isVisible": true,
            "left": "1dp",
            "skin": "sknlbl004B95SSPR11dp",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": "90%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblCounter = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblCounter",
            "isVisible": true,
            "left": "2dp",
            "skin": "sknlbl004B95SSPR11dp",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxText.add(lblText, lblCounter);
        flxApprovalsAndRequestFilter.add(lblSeperator, imgSelect, flxText);
        return flxApprovalsAndRequestFilter;
    }
})