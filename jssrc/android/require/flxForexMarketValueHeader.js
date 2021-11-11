define("flxForexMarketValueHeader", function() {
    return function(controller) {
        var flxForexMarketValueHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "45dp",
            "id": "flxForexMarketValueHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFF",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxForexMarketValueHeader.setDefaultUnit(kony.flex.DP);
        var flxHeaderContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxHeaderContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxFFFFFFBorderE3E3E3Radius3px",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxHeaderContainer.setDefaultUnit(kony.flex.DP);
        var lblCurrency = new kony.ui.Label({
            "id": "lblCurrency",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl727272SSPR",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5dp",
            "width": "85%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblmarketValue = new kony.ui.Label({
            "id": "lblmarketValue",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl424242SSPR25px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "19dp",
            "width": "85%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxImageContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxImageContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, {}, {});
        flxImageContainer.setDefaultUnit(kony.flex.DP);
        var imageExpandCollapse = new kony.ui.Image2({
            "centerY": "50%",
            "height": "20dp",
            "id": "imageExpandCollapse",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "0dp",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImageContainer.add(imageExpandCollapse);
        flxHeaderContainer.add(lblCurrency, lblmarketValue, flxImageContainer);
        flxForexMarketValueHeader.add(flxHeaderContainer);
        return flxForexMarketValueHeader;
    }
})