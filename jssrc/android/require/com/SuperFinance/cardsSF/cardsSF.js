define(function() {
    return function(controller) {
        var cardsSF = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "cardsSF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "cardsSF"), extendConfig({}, controller.args[1], "cardsSF"), extendConfig({}, controller.args[2], "cardsSF"));
        cardsSF.setDefaultUnit(kony.flex.DP);
        var flxMainSF = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMainSF",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMainSF"), extendConfig({}, controller.args[1], "flxMainSF"), extendConfig({}, controller.args[2], "flxMainSF"));
        flxMainSF.setDefaultUnit(kony.flex.DP);
        var flxWLogoSF = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "28%",
            "id": "flxWLogoSF",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "8%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "12%",
            "width": "42%",
            "zIndex": 1
        }, controller.args[0], "flxWLogoSF"), extendConfig({}, controller.args[1], "flxWLogoSF"), extendConfig({}, controller.args[2], "flxWLogoSF"));
        flxWLogoSF.setDefaultUnit(kony.flex.DP);
        var imgWLogoSF = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgWLogoSF",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "imgWLogoSF"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgWLogoSF"), extendConfig({}, controller.args[2], "imgWLogoSF"));
        flxWLogoSF.add(imgWLogoSF);
        var lblWTitleSF = new kony.ui.Label(extendConfig({
            "id": "lblWTitleSF",
            "isVisible": true,
            "left": "8%",
            "skin": "sknLblWishesSF",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblWTitleSF"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblWTitleSF"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblWTitleSF"));
        var lblWDescSF = new kony.ui.Label(extendConfig({
            "id": "lblWDescSF",
            "isVisible": true,
            "left": "8%",
            "skin": "sknLblWDescSF",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "3%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblWDescSF"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblWDescSF"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblWDescSF"));
        var lblWCrncySF = new kony.ui.Label(extendConfig({
            "id": "lblWCrncySF",
            "isVisible": true,
            "left": "8%",
            "skin": "sknLblWishesSF",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "3%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblWCrncySF"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblWCrncySF"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblWCrncySF"));
        flxMainSF.add(flxWLogoSF, lblWTitleSF, lblWDescSF, lblWCrncySF);
        cardsSF.add(flxMainSF);
        return cardsSF;
    }
})