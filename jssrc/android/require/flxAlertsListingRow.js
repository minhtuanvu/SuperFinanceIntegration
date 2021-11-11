define("flxAlertsListingRow", function() {
    return function(controller) {
        var flxAlertsListingRow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxAlertsListingRow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxffffff",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxAlertsListingRow.setDefaultUnit(kony.flex.DP);
        var flxAlertsContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxAlertsContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 2
        }, {}, {});
        flxAlertsContainer.setDefaultUnit(kony.flex.DP);
        var lblName = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblName",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl424242SSP26px",
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
        var lblValue = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblValue",
            "isVisible": true,
            "right": "50dp",
            "skin": "sknLbl72727SSPReg26px",
            "text": "500.00",
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
        var flxImage = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "40dp",
            "id": "flxImage",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "10dp",
            "skin": "slFbox",
            "top": "28dp",
            "width": 50,
            "zIndex": 1
        }, {}, {});
        flxImage.setDefaultUnit(kony.flex.DP);
        var imgArrow = new kony.ui.Image2({
            "centerY": "50%",
            "height": "23dp",
            "id": "imgArrow",
            "isVisible": true,
            "right": "0dp",
            "skin": "slImage",
            "src": "chevron_1.png",
            "top": "28dp",
            "width": "40dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImage.add(imgArrow);
        var flxSeperator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeperator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxSeperator.setDefaultUnit(kony.flex.DP);
        flxSeperator.add();
        flxAlertsContainer.add(lblName, lblValue, flxImage, flxSeperator);
        flxAlertsListingRow.add(flxAlertsContainer);
        return flxAlertsListingRow;
    }
})