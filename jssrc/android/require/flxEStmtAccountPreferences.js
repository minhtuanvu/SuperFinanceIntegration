define("flxEStmtAccountPreferences", function() {
    return function(controller) {
        var flxEStmtAccountPreferences = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "55dp",
            "id": "flxEStmtAccountPreferences",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknFlxffffff"
        }, {}, {});
        flxEStmtAccountPreferences.setDefaultUnit(kony.flex.DP);
        var lblAccountHolderName = new kony.ui.Label({
            "id": "lblAccountHolderName",
            "isVisible": true,
            "left": "20dp",
            "maxNumberOfLines": 1,
            "right": "40dp",
            "skin": "sknLbl424242SSP26px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "8dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblBankName = new kony.ui.Label({
            "bottom": "4dp",
            "id": "lblBankName",
            "isVisible": true,
            "left": "45dp",
            "skin": "sknlble3e3e3border12px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 0, 1, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var imgBank = new kony.ui.Image2({
            "centerY": "50%",
            "height": "30dp",
            "id": "imgBank",
            "isVisible": false,
            "left": "35dp",
            "skin": "slImage",
            "src": "bankofamerica.png",
            "width": "30dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
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
            "skin": "sknFlxf1f1f1",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        var imgChevron = new kony.ui.Image2({
            "centerY": "50%",
            "height": "18dp",
            "id": "imgChevron",
            "isVisible": true,
            "right": "15dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxAccountType = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "4dp",
            "clipBounds": true,
            "height": "16dp",
            "id": "flxAccountType",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "sknflxe3e3e3border",
            "width": "20dp"
        }, {}, {});
        flxAccountType.setDefaultUnit(kony.flex.DP);
        var imgAccountType = new kony.ui.Image2({
            "centerY": "50%",
            "height": "100%",
            "id": "imgAccountType",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "businessaccount.png",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxAccountType.add(imgAccountType);
        flxEStmtAccountPreferences.add(lblAccountHolderName, lblBankName, imgBank, flxSeparator, imgChevron, flxAccountType);
        return flxEStmtAccountPreferences;
    }
})