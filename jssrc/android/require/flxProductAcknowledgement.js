define("flxProductAcknowledgement", function() {
    return function(controller) {
        var flxProductAcknowledgement = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "75dp",
            "id": "flxProductAcknowledgement",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxProductAcknowledgement.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "10dp",
            "clipBounds": true,
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "10dp",
            "isModalContainer": false,
            "right": "10dp",
            "skin": "sknFlxffffffBorderf1f1f1Radius3px",
            "top": "10dp",
            "zIndex": 1
        }, {}, {});
        flxMain.setDefaultUnit(kony.flex.DP);
        var imgProduct = new kony.ui.Image2({
            "height": "41dp",
            "id": "imgProduct",
            "isVisible": false,
            "left": "10dp",
            "skin": "slImage",
            "src": "product.png",
            "top": "5dp",
            "width": "41dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxDetails = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "id": "flxDetails",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "10dp",
            "skin": "slFbox",
            "top": "0dp",
            "zIndex": 1
        }, {}, {});
        flxDetails.setDefaultUnit(kony.flex.DP);
        var lblProduct = new kony.ui.Label({
            "id": "lblProduct",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl424242SSP26px",
            "text": "Premium Savings Account",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "7dp",
            "width": "75%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblProductInfo = new kony.ui.Label({
            "id": "lblProductInfo",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl727272SSPReg22px",
            "text": "Your account is now active",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "28dp",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxDetails.add(lblProduct, lblProductInfo);
        flxMain.add(imgProduct, flxDetails);
        flxProductAcknowledgement.add(flxMain);
        return flxProductAcknowledgement;
    }
})