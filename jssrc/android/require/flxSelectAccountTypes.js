define("flxSelectAccountTypes", function() {
    return function(controller) {
        var flxSelectAccountTypes = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxSelectAccountTypes",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknflxf6f6f6Bcg",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxSelectAccountTypes.setDefaultUnit(kony.flex.DP);
        var flxSeparator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        var lblName = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblName",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl0095e4SSPRegular22px",
            "text": "Label",
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
        var imgIcon = new kony.ui.Image2({
            "centerY": "50%",
            "height": "15dp",
            "id": "imgIcon",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "width": "15dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSelectAccountTypes.add(flxSeparator, lblName, imgIcon);
        return flxSelectAccountTypes;
    }
})