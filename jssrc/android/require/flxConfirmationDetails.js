define("flxConfirmationDetails", function() {
    return function(controller) {
        var flxConfirmationDetails = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "80dp",
            "id": "flxConfirmationDetails",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxConfirmationDetails.setDefaultUnit(kony.flex.DP);
        var lblTitle = new kony.ui.Label({
            "id": "lblTitle",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl72727SSPReg26px",
            "text": "Product Name",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "20dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var imgdottedline = new kony.ui.Image2({
            "bottom": "1dp",
            "height": "2dp",
            "id": "imgdottedline",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "slImage",
            "src": "line.png",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblValue = new kony.ui.Label({
            "id": "lblValue",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknLbl424242SSReg30px",
            "text": "Personal Loan",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "40dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxConfirmationDetails.add(lblTitle, imgdottedline, lblValue);
        return flxConfirmationDetails;
    }
})