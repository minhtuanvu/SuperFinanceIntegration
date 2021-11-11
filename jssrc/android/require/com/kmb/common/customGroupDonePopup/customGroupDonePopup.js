define(function() {
    return function(controller) {
        var customGroupDonePopup = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "customGroupDonePopup",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlx000000Op50",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "customGroupDonePopup"), extendConfig({}, controller.args[1], "customGroupDonePopup"), extendConfig({}, controller.args[2], "customGroupDonePopup"));
        customGroupDonePopup.setDefaultUnit(kony.flex.DP);
        var flxContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "id": "flxContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "skin": "sknFlxffffffB",
            "width": "80%",
            "zIndex": 200
        }, controller.args[0], "flxContainer"), extendConfig({}, controller.args[1], "flxContainer"), extendConfig({}, controller.args[2], "flxContainer"));
        flxContainer.setDefaultUnit(kony.flex.DP);
        var flxImg = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "70dp",
            "id": "flxImg",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "20dp",
            "width": "70dp",
            "zIndex": 1
        }, controller.args[0], "flxImg"), extendConfig({}, controller.args[1], "flxImg"), extendConfig({}, controller.args[2], "flxImg"));
        flxImg.setDefaultUnit(kony.flex.DP);
        var Image0fca5afa287d24f = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "Image0fca5afa287d24f",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "confirmation_tick.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "Image0fca5afa287d24f"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Image0fca5afa287d24f"), extendConfig({}, controller.args[2], "Image0fca5afa287d24f"));
        flxImg.add(Image0fca5afa287d24f);
        var lblMessage = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblMessage",
            "isVisible": true,
            "skin": "skn000000BoldSsps",
            "text": "Custom group has been edited successfully",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "20dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblMessage"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMessage"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblMessage"));
        var btnDone = new kony.ui.Button(extendConfig({
            "bottom": "15dp",
            "centerX": "50%",
            "focusSkin": "sknBtn0095e4RoundedffffffSSP26px",
            "height": "48dp",
            "id": "btnDone",
            "isVisible": true,
            "skin": "sknBtn0095e4RoundedffffffSSP26px",
            "text": kony.i18n.getLocalizedString("kony.mb.statusMessage.done"),
            "top": "20dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "btnDone"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnDone"), extendConfig({}, controller.args[2], "btnDone"));
        flxContainer.add(flxImg, lblMessage, btnDone);
        customGroupDonePopup.add(flxContainer);
        return customGroupDonePopup;
    }
})