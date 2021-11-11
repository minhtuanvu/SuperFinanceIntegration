define("flxAlertsPref", function() {
    return function(controller) {
        var flxAlertsPref = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxAlertsPref",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxAlertsPref.setDefaultUnit(kony.flex.DP);
        var flxRightWrapper = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "55dp",
            "id": "flxRightWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "50%",
            "zIndex": 1
        }, {}, {});
        flxRightWrapper.setDefaultUnit(kony.flex.DP);
        var imgArrow = new kony.ui.Image2({
            "centerY": "50%",
            "height": "15dp",
            "id": "imgArrow",
            "isVisible": true,
            "right": "0dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "12dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblValue = new kony.ui.Label({
            "centerY": "50%",
            "height": "25dp",
            "id": "lblValue",
            "isVisible": true,
            "right": "22dp",
            "skin": "sknLbla0a0a0SSP26px",
            "text": "OFF",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "75%",
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
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSepartaor.setDefaultUnit(kony.flex.DP);
        flxSepartaor.add();
        var flxAccountName = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxAccountName",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "11dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {}, {});
        flxAccountName.setDefaultUnit(kony.flex.DP);
        var lblAccountName = new kony.ui.Label({
            "id": "lblAccountName",
            "isVisible": true,
            "left": "0dp",
            "maxNumberOfLines": 1,
            "maxWidth": "40%",
            "skin": "sknLbl424242SSP26px",
            "text": "Savings Acc...",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblAccountNumber = new kony.ui.Label({
            "id": "lblAccountNumber",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLbl424242SSP26px",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxAccountName.add(lblAccountName, lblAccountNumber);
        var lblBankName = new kony.ui.Label({
            "bottom": "15dp",
            "id": "lblBankName",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbla0a0a022px",
            "text": "Bank of America",
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
        var flxImg = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "15dp",
            "clipBounds": false,
            "height": "20dp",
            "id": "flxImg",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "sknflxe3e3e3border",
            "width": "20dp"
        }, {}, {});
        flxImg.setDefaultUnit(kony.flex.DP);
        var imgUser = new kony.ui.Image2({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgUser",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "konybanklogo.png",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImg.add(imgUser);
        flxAlertsPref.add(flxRightWrapper, flxSepartaor, flxAccountName, lblBankName, flxImg);
        return flxAlertsPref;
    }
})