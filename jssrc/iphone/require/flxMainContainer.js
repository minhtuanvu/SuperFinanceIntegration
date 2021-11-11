define("flxMainContainer", function() {
    return function(controller) {
        var flxMainContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxMainContainer.setDefaultUnit(kony.flex.DP);
        var flxLabels = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "69dp",
            "id": "flxLabels",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxLabels.setDefaultUnit(kony.flex.DP);
        var flxLabel1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxLabel1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "10dp",
            "width": "40%",
            "zIndex": 1
        }, {}, {});
        flxLabel1.setDefaultUnit(kony.flex.DP);
        var lblChequeNo = new kony.ui.Label({
            "height": "25dp",
            "id": "lblChequeNo",
            "isVisible": true,
            "skin": "sknLbl424242SSP36pxSegments",
            "textStyle": {},
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblAccountNo = new kony.ui.Label({
            "height": "25dp",
            "id": "lblAccountNo",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbla0a0a0SSP26px",
            "textStyle": {},
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxLabel1.add(lblChequeNo, lblAccountNo);
        var flxLabel2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxLabel2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "reverseLayoutDirection": false,
            "left": "175dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "10dp",
            "width": "50%",
            "zIndex": 1
        }, {}, {});
        flxLabel2.setDefaultUnit(kony.flex.DP);
        var lblDate = new kony.ui.Label({
            "height": "25dp",
            "id": "lblDate",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLbl424242SSP100pr",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var flxStatus = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "25dp",
            "id": "flxStatus",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "25dp",
            "width": "100%"
        }, {}, {});
        flxStatus.setDefaultUnit(kony.flex.DP);
        var lblStatus = new kony.ui.Label({
            "height": "100%",
            "id": "lblStatus",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLbla0a0a0SSP26px",
            "textStyle": {},
            "top": "0",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var flxDot = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "40%",
            "id": "flxDot",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "right": "5dp",
            "skin": "sknFlx57CE42Circle",
            "top": "5dp",
            "width": "10dp"
        }, {}, {});
        flxDot.setDefaultUnit(kony.flex.DP);
        var imgDot = new kony.ui.Image2({
            "height": "100%",
            "id": "imgDot",
            "isVisible": false,
            "left": "0",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "0",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxDot.add(imgDot);
        flxStatus.add(lblStatus, flxDot);
        flxLabel2.add(lblDate, flxStatus);
        flxLabels.add(flxLabel1, flxLabel2);
        var flxSeparator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2px",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        flxMainContainer.add(flxLabels, flxSeparator);
        return flxMainContainer;
    }
})