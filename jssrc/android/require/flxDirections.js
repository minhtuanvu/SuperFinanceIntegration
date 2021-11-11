define("flxDirections", function() {
    return function(controller) {
        var flxDirections = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxDirections",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "f9f9"
        }, {}, {});
        flxDirections.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "102%",
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "-1%",
            "isModalContainer": false,
            "top": "0%",
            "width": "102%",
            "zIndex": 1
        }, {}, {});
        flxMain.setDefaultUnit(kony.flex.DP);
        var flxImgDirection = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "103%",
            "id": "flxImgDirection",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0.03%",
            "isModalContainer": false,
            "skin": "sknFlxDirection",
            "top": "-2.00%",
            "width": "16%",
            "zIndex": 1
        }, {}, {});
        flxImgDirection.setDefaultUnit(kony.flex.DP);
        var imgDirection = new kony.ui.Image2({
            "bottom": "0dp",
            "centerX": "50%",
            "centerY": "50%",
            "height": "50dp",
            "id": "imgDirection",
            "isVisible": true,
            "left": "0dp",
            "right": "0dp",
            "skin": "slImage",
            "src": "arrow3.png",
            "top": "0dp",
            "width": "40dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImgDirection.add(imgDirection);
        var flxDirectionData = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxDirectionData",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "16%",
            "isModalContainer": false,
            "top": "0%",
            "width": "84%",
            "zIndex": 1
        }, {}, {});
        flxDirectionData.setDefaultUnit(kony.flex.DP);
        var lblDirection = new kony.ui.Label({
            "height": "50%",
            "id": "lblDirection",
            "isVisible": true,
            "left": "8%",
            "skin": "sknlbl727272SSP93pr",
            "text": "Head southwest on S El Camino Real toward W 4th Ave",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "40%",
            "width": "80%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxDirectionsWrapper = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxDirectionsWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "8%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "15%",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flxDirectionsWrapper.setDefaultUnit(kony.flex.DP);
        var lblDistance = new kony.ui.Label({
            "id": "lblDistance",
            "isVisible": true,
            "left": "0%",
            "skin": "sknLbl424242SSP93pr",
            "text": "80 Feet ",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblSeparator = new kony.ui.Label({
            "height": "80%",
            "id": "lblSeparator",
            "isVisible": true,
            "left": "3%",
            "skin": "sknLblf1f1f1Op100",
            "text": ".",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10%",
            "width": "1dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblTime = new kony.ui.Label({
            "id": "lblTime",
            "isVisible": true,
            "left": "3%",
            "skin": "sknLbl424242SSP93pr",
            "text": "20 Seconds",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxDirectionsWrapper.add(lblDistance, lblSeparator, lblTime);
        flxDirectionData.add(lblDirection, flxDirectionsWrapper);
        var lblSeparator2 = new kony.ui.Label({
            "bottom": "3%",
            "height": "1dp",
            "id": "lblSeparator2",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblf1f1f1Op100",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxMain.add(flxImgDirection, flxDirectionData, lblSeparator2);
        flxDirections.add(flxMain);
        return flxDirections;
    }
})