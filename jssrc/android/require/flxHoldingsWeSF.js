define("flxHoldingsWeSF", function() {
    return function(controller) {
        var flxHoldingsWeSF = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100dp",
            "id": "flxHoldingsWeSF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxHoldingsWeSF.setDefaultUnit(kony.flex.DP);
        var flxParentSF = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxParentSF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxParentSF.setDefaultUnit(kony.flex.DP);
        var flxMainSF = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "90%",
            "id": "flxMainSF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknFlxHoldingsSF",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flxMainSF.setDefaultUnit(kony.flex.DP);
        var flxHLogoSF = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "55%",
            "id": "flxHLogoSF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "7%",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "15%",
            "zIndex": 1
        }, {}, {});
        flxHLogoSF.setDefaultUnit(kony.flex.DP);
        var imgHlogoSF = new kony.ui.Image2({
            "height": "100%",
            "id": "imgHlogoSF",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxHLogoSF.add(imgHlogoSF);
        var flxRDtlsSF = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxRDtlsSF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "30%",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "65%",
            "zIndex": 1
        }, {}, {});
        flxRDtlsSF.setDefaultUnit(kony.flex.DP);
        var lblRTitleSF = new kony.ui.Label({
            "id": "lblRTitleSF",
            "isVisible": true,
            "left": "0%",
            "skin": "sknLblHoldingsTitleSF",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblRDescSF = new kony.ui.Label({
            "id": "lblRDescSF",
            "isVisible": true,
            "left": "0%",
            "skin": "sknLblDescSF",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "45%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxRL1SF = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "8dp",
            "id": "flxRL1SF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknFlxBg1HoldingsSF",
            "top": "73%",
            "width": "18%",
            "zIndex": 1
        }, {}, {});
        flxRL1SF.setDefaultUnit(kony.flex.DP);
        flxRL1SF.add();
        var flxRL2SF = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "8dp",
            "id": "flxRL2SF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "22%",
            "isModalContainer": false,
            "skin": "sknFlxBg2HoldingsSF",
            "top": "73%",
            "width": "18%",
            "zIndex": 1
        }, {}, {});
        flxRL2SF.setDefaultUnit(kony.flex.DP);
        flxRL2SF.add();
        flxRDtlsSF.add(lblRTitleSF, lblRDescSF, flxRL1SF, flxRL2SF);
        flxMainSF.add(flxHLogoSF, flxRDtlsSF);
        flxParentSF.add(flxMainSF);
        flxHoldingsWeSF.add(flxParentSF);
        return flxHoldingsWeSF;
    }
})