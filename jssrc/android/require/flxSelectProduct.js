define("flxSelectProduct", function() {
    return function(controller) {
        var flxSelectProduct = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "101dp",
            "id": "flxSelectProduct",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknFlxffffff"
        }, {}, {});
        flxSelectProduct.setDefaultUnit(kony.flex.DP);
        var flxShadowUser = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxShadowUser",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxShadowUser.setDefaultUnit(kony.flex.DP);
        flxShadowUser.add();
        var lblProductTitle = new kony.ui.Label({
            "id": "lblProductTitle",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl424242SSP26px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblProductSubTitle = new kony.ui.Label({
            "id": "lblProductSubTitle",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl424242SSP22px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "30dp",
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblProductInfo = new kony.ui.Label({
            "height": "17dp",
            "id": "lblProductInfo",
            "isVisible": true,
            "left": "20dp",
            "right": "100dp",
            "skin": "sknLbl727272SSPReg22px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "50dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var btnViewDetails = new kony.ui.Button({
            "bottom": "11dp",
            "focusSkin": "sknBtn0095e426px",
            "id": "btnViewDetails",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknBtn0095e426px",
            "text": "Button",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgCheckbox = new kony.ui.Image2({
            "centerY": "50.00%",
            "height": "35dp",
            "id": "imgCheckbox",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "remeberme.png",
            "width": "35dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSelectProduct.add(flxShadowUser, lblProductTitle, lblProductSubTitle, lblProductInfo, btnViewDetails, imgCheckbox);
        return flxSelectProduct;
    }
})