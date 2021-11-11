define("flxMainContainerCM", function() {
    return function(controller) {
        var flxMainContainerCM = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxMainContainerCM",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxMainContainerCM.setDefaultUnit(kony.flex.DP);
        var flxSeparator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1%",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        var flxLabels = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxLabels",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "skin": "f9f9",
            "width": "100%"
        }, {}, {});
        flxLabels.setDefaultUnit(kony.flex.DP);
        var flxLabel1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxLabel1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "10dp",
            "width": "60%",
            "zIndex": 1
        }, {}, {});
        flxLabel1.setDefaultUnit(kony.flex.DP);
        var lblChequeNo = new kony.ui.Label({
            "height": "50%",
            "id": "lblChequeNo",
            "isVisible": true,
            "skin": "sknlbl424242ssp40px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblAccountNo = new kony.ui.Label({
            "height": "50%",
            "id": "lblAccountNo",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbla0a0a0SSP26px",
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
        flxLabel1.add(lblChequeNo, lblAccountNo);
        var flxLabel2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxLabel2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "width": "25%",
            "zIndex": 1
        }, {}, {});
        flxLabel2.setDefaultUnit(kony.flex.DP);
        var lblAmount = new kony.ui.Label({
            "height": "50%",
            "id": "lblAmount",
            "isVisible": true,
            "left": "0",
            "skin": "sknLbl424242SSP100pr",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblStatus = new kony.ui.Label({
            "height": "50%",
            "id": "lblStatus",
            "isVisible": true,
            "skin": "sknLbla0a0a0SSP26px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxStatus = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50%",
            "id": "flxStatus",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "skin": "f9f9",
            "width": "100%"
        }, {}, {});
        flxStatus.setDefaultUnit(kony.flex.DP);
        var imgDot = new kony.ui.Image2({
            "height": "100%",
            "id": "imgDot",
            "isVisible": true,
            "skin": "slImage",
            "src": "imagedrag.png",
            "width": "20%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxStatus.add(imgDot);
        flxLabel2.add(lblAmount, lblStatus, flxStatus);
        flxLabels.add(flxLabel1, flxLabel2);
        flxMainContainerCM.add(flxSeparator, flxLabels);
        return flxMainContainerCM;
    }
})