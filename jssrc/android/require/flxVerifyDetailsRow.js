define("flxVerifyDetailsRow", function() {
    return function(controller) {
        var flxVerifyDetailsRow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxVerifyDetailsRow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxVerifyDetailsRow.setDefaultUnit(kony.flex.DP);
        var lblTitle = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblTitle",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl72727234px",
            "text": "Frequency :",
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
        var flxRightWrapper = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "48dp",
            "id": "flxRightWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {}, {});
        flxRightWrapper.setDefaultUnit(kony.flex.DP);
        var imgArrow = new kony.ui.Image2({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "15dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblValue = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblValue",
            "isVisible": true,
            "right": "50dp",
            "skin": "ICSknLbl4176A434px",
            "text": "Number of Transfers",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxRightWrapper.add(imgArrow, lblValue);
        var flxSepartaor = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSepartaor",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxE9E9E91px",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSepartaor.setDefaultUnit(kony.flex.DP);
        flxSepartaor.add();
        flxVerifyDetailsRow.add(lblTitle, flxRightWrapper, flxSepartaor);
        return flxVerifyDetailsRow;
    }
})