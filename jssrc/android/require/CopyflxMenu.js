define("CopyflxMenu", function() {
    return function(controller) {
        var CopyflxMenu = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "CopyflxMenu",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        CopyflxMenu.setDefaultUnit(kony.flex.DP);
        var lblMenu = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblMenu",
            "isVisible": true,
            "left": "5%",
            "skin": "CopydefLabel0bca860897bc84c",
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
        CopyflxMenu.add(lblMenu);
        return CopyflxMenu;
    }
})