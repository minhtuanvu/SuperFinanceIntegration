define("flxBillPayHeader", function() {
    return function(controller) {
        var flxBillPayHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxBillPayHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknflxf6f6f6Bcg",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxBillPayHeader.setDefaultUnit(kony.flex.DP);
        var flximgUp = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "15dp",
            "id": "flximgUp",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "16dp",
            "skin": "slFbox",
            "top": "17dp",
            "width": "15dp",
            "zIndex": 6
        }, {}, {});
        flximgUp.setDefaultUnit(kony.flex.DP);
        var imgUpArrow = new kony.ui.Image2({
            "centerY": "50%",
            "height": "15dp",
            "id": "imgUpArrow",
            "isVisible": true,
            "right": "0dp",
            "skin": "slImage",
            "src": "arrowup.png",
            "width": "15dp",
            "zIndex": 6
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flximgUp.add(imgUpArrow);
        var lblHeader = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblHeader",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknlblaccntinfoSectionHeader",
            "text": "Transactions",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 6
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxTypeOneShadow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "8dp",
            "id": "flxTypeOneShadow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknFlxHeaderShadow",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxTypeOneShadow.setDefaultUnit(kony.flex.DP);
        flxTypeOneShadow.add();
        var flxSeparator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        flxBillPayHeader.add(flximgUp, lblHeader, flxTypeOneShadow, flxSeparator);
        return flxBillPayHeader;
    }
})