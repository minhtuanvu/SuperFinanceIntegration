define("flxSegSearchSwiftCode", function() {
    return function(controller) {
        var flxSegSearchSwiftCode = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "57dp",
            "id": "flxSegSearchSwiftCode",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxSegSearchSwiftCode.setDefaultUnit(kony.flex.DP);
        var flxRightWrapper = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "57dp",
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
            "src": "segmentarrow.png",
            "width": "15dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblValue = new kony.ui.Label({
            "centerY": "50%",
            "height": "20dp",
            "id": "lblValue",
            "isVisible": true,
            "right": "50dp",
            "skin": "sknLbl424242SSP93pr",
            "text": "BACRIT21",
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
        var flxBanKDetails = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxBanKDetails",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": 0,
            "width": "50%",
            "zIndex": 1
        }, {}, {});
        flxBanKDetails.setDefaultUnit(kony.flex.DP);
        var lblBankName = new kony.ui.Label({
            "id": "lblBankName",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl424242SSP26px",
            "text": "Frequency",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblAddress = new kony.ui.Label({
            "id": "lblAddress",
            "isVisible": true,
            "left": 0,
            "skin": "sknLbla0a0a022px",
            "text": "Paris,Fance",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 5,
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxBanKDetails.add(lblBankName, lblAddress);
        flxRightWrapper.add(imgArrow, lblValue, flxBanKDetails);
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
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSepartaor.setDefaultUnit(kony.flex.DP);
        flxSepartaor.add();
        flxSegSearchSwiftCode.add(flxRightWrapper, flxSepartaor);
        return flxSegSearchSwiftCode;
    }
})