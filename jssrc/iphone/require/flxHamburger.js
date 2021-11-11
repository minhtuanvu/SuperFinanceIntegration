define("flxHamburger", function() {
    return function(controller) {
        var flxHamburger = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxHamburger",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxHamburger.setDefaultUnit(kony.flex.DP);
        var flxhambuergermenu = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxhambuergermenu",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxfafafa",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxhambuergermenu.setDefaultUnit(kony.flex.DP);
        var lblHamburger = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblHamburger",
            "isVisible": true,
            "left": "60dp",
            "skin": "sknLbl424242SSP26px",
            "text": "Check Deposites",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var flxSeparator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": 0,
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        var flxIdentifier = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxIdentifier",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxda8b08",
            "top": "0dp",
            "width": "2dp",
            "zIndex": 1
        }, {}, {});
        flxIdentifier.setDefaultUnit(kony.flex.DP);
        flxIdentifier.add();
        var flxImage = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": false,
            "height": "24dp",
            "id": "flxImage",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "24dp",
            "zIndex": 1
        }, {}, {});
        flxImage.setDefaultUnit(kony.flex.DP);
        var imgHamburger = new kony.ui.Image2({
            "centerY": "50%",
            "height": "100%",
            "id": "imgHamburger",
            "isVisible": true,
            "left": "1dp",
            "skin": "slImage",
            "src": "checkdeposit.png",
            "top": "2dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImage.add(imgHamburger);
        var flxMessagesNumber = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "30dp",
            "id": "flxMessagesNumber",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "20dp",
            "skin": "sknflxRoundedWithbackground",
            "width": "30dp",
            "zIndex": 1
        }, {}, {});
        flxMessagesNumber.setDefaultUnit(kony.flex.DP);
        var lblMessagesNumber = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblMessagesNumber",
            "isVisible": false,
            "skin": "sknLblffffff20px",
            "textStyle": {},
            "width": "100%",
            "zIndex": 100
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxMessagesNumber.add(lblMessagesNumber);
        flxhambuergermenu.add(lblHamburger, flxSeparator, flxIdentifier, flxImage, flxMessagesNumber);
        flxHamburger.add(flxhambuergermenu);
        return flxHamburger;
    }
})