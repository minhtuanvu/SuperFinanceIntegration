define(function() {
    return function(controller) {
        var customPopup = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "customPopup",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "customPopup"), extendConfig({}, controller.args[1], "customPopup"), extendConfig({}, controller.args[2], "customPopup"));
        customPopup.setDefaultUnit(kony.flex.DP);
        var flxPopupWrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxPopupWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPopupWrapper"), extendConfig({}, controller.args[1], "flxPopupWrapper"), extendConfig({}, controller.args[2], "flxPopupWrapper"));
        flxPopupWrapper.setDefaultUnit(kony.flex.DP);
        var imgPopup = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgPopup",
            "isVisible": true,
            "left": "30dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "imgPopup"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgPopup"), extendConfig({}, controller.args[2], "imgPopup"));
        var lblPopup = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblPopup",
            "isVisible": true,
            "left": "65dp",
            "right": "20dp",
            "skin": "sknLblffffffSSPReg26px",
            "text": "Label",
            "textStyle": {},
            "zIndex": 1
        }, controller.args[0], "lblPopup"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPopup"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblPopup"));
        flxPopupWrapper.add(imgPopup, lblPopup);
        customPopup.add(flxPopupWrapper);
        return customPopup;
    }
})