define("flxApprovalsAndRequestHistory", function() {
    return function(controller) {
        var flxApprovalsAndRequestHistory = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "52dp",
            "id": "flxApprovalsAndRequestHistory",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBg000000",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxApprovalsAndRequestHistory.setDefaultUnit(kony.flex.DP);
        var lblSeperator = new kony.ui.Label({
            "bottom": 1,
            "height": "1dp",
            "id": "lblSeperator",
            "isVisible": true,
            "left": "0",
            "maxNumberOfLines": 1,
            "right": 0,
            "skin": "sknLblSeparatore3e3e3",
            "text": ".",
            "textStyle": {},
            "top": 50,
            "width": "100%",
            "zIndex": 10000
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var imgSelect = new kony.ui.Image2({
            "centerY": "50%",
            "height": "17dp",
            "id": "imgSelect",
            "isVisible": true,
            "right": "12dp",
            "skin": "slImage",
            "src": "tickmark_green.png",
            "top": "0",
            "width": "17dp"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "cacheConfig": {
                "cachePolicy": "kony.net.cache.USE_PROTOCOL_CACHE_POLICY",
                "cacheStoragePolicy": "kony.net.cache.DISK_AND_MEMORY"
            }
        });
        var lblText = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblText",
            "isVisible": true,
            "left": "29dp",
            "maxHeight": "70%",
            "skin": "sknlbl424242SSPR11dp",
            "textStyle": {},
            "top": "0",
            "width": "83%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxApprovalsAndRequestHistory.add(lblSeperator, imgSelect, lblText);
        return flxApprovalsAndRequestHistory;
    }
})