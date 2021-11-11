define("flxUsrmgmtMain1", function() {
    return function(controller) {
        var flxUsrmgmtMain1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxUsrmgmtMain1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxffffff",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxUsrmgmtMain1.setDefaultUnit(kony.flex.DP);
        var flxContent = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxContent",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxContent.setDefaultUnit(kony.flex.DP);
        var flxInner2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxInner2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxInner2.setDefaultUnit(kony.flex.DP);
        var lblCompanyName = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblCompanyName",
            "isVisible": true,
            "left": "7%",
            "skin": "sknLbl0095e4SSPReg32px",
            "text": "Temenos UK - 5629",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": "68%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var imgConfirmTick = new kony.ui.Image2({
            "height": "100%",
            "id": "imgConfirmTick",
            "isVisible": true,
            "left": "20dp",
            "skin": "slImage",
            "src": "correct.png",
            "top": "0dp",
            "width": "20%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxInner2.add(lblCompanyName, imgConfirmTick);
        var flxSep1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSep1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSep1.setDefaultUnit(kony.flex.DP);
        flxSep1.add();
        flxContent.add(flxInner2, flxSep1);
        flxUsrmgmtMain1.add(flxContent);
        return flxUsrmgmtMain1;
    }
})