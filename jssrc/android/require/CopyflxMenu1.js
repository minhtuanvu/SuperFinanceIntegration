define("CopyflxMenu1", function() {
    return function(controller) {
        var CopyflxMenu1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "CopyflxMenu1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        CopyflxMenu1.setDefaultUnit(kony.flex.DP);
        var lblMenu = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblMenu",
            "isVisible": true,
            "left": "5%",
            "skin": "CopyCopydefLabel",
            "text": "Add New Service",
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
        CopyflxMenu1.add(lblMenu);
        return CopyflxMenu1;
    }
})