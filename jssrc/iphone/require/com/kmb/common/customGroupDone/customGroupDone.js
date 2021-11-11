define(function() {
    return function(controller) {
        var customGroupDone = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "customGroupDone",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlx000000Op50",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "customGroupDone"), extendConfig({}, controller.args[1], "customGroupDone"), extendConfig({}, controller.args[2], "customGroupDone"));
        customGroupDone.setDefaultUnit(kony.flex.DP);
        var flxContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerX": "50%",
            "centerY": "40%",
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
        var flxEdit = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "0dp",
            "clipBounds": true,
            "id": "flxEdit",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": 0,
            "isModalContainer": false,
            "skin": "CopyslFbox",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxEdit"), extendConfig({}, controller.args[1], "flxEdit"), extendConfig({}, controller.args[2], "flxEdit"));
        flxEdit.setDefaultUnit(kony.flex.DP);
        var flxEditCustomView = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "60dp",
            "id": "flxEditCustomView",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "20dp",
            "width": "60dp",
            "zIndex": 1
        }, controller.args[0], "flxEditCustomView"), extendConfig({}, controller.args[1], "flxEditCustomView"), extendConfig({}, controller.args[2], "flxEditCustomView"));
        flxEditCustomView.setDefaultUnit(kony.flex.DP);
        var imgGreenTick = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "100%",
            "id": "imgGreenTick",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "confirmation_tick.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "imgGreenTick"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgGreenTick"), extendConfig({}, controller.args[2], "imgGreenTick"));
        flxEditCustomView.add(imgGreenTick);
        var lblMessage = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblMessage",
            "isVisible": true,
            "skin": "sknLbl000000SSPSemiBold48px",
            "text": "Custom group has been edited successfully",
            "textStyle": {},
            "top": "20dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblMessage"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMessage"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblMessage"));
        var btnDone = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "centerX": "50%",
            "focusSkin": "sknBtn0095e4RoundedffffffSSP26px",
            "height": "48dp",
            "id": "btnDone",
            "isVisible": true,
            "skin": "sknBtn0095e4RoundedffffffSSP26px",
            "text": kony.i18n.getLocalizedString("kony.mb.statusMessage.done"),
            "top": "20dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "btnDone"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnDone"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnDone"));
        flxEdit.add(flxEditCustomView, lblMessage, btnDone);
        flxContainer.add(flxEdit);
        customGroupDone.add(flxContainer);
        return customGroupDone;
    }
})