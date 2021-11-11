define(function() {
    return function(controller) {
        var customAlertPopUp = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "customAlertPopUp",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlx000000op60",
            "top": "0dp",
            "width": "100%",
            "zIndex": 200
        }, controller.args[0], "customAlertPopUp"), extendConfig({}, controller.args[1], "customAlertPopUp"), extendConfig({}, controller.args[2], "customAlertPopUp"));
        customAlertPopUp.setDefaultUnit(kony.flex.DP);
        var flxContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "27.60%",
            "id": "flxContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknFlxffffffB",
            "width": "81.30%",
            "zIndex": 200
        }, controller.args[0], "flxContainer"), extendConfig({}, controller.args[1], "flxContainer"), extendConfig({}, controller.args[2], "flxContainer"));
        flxContainer.setDefaultUnit(kony.flex.DP);
        var imgTouchId = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "50dp",
            "id": "imgTouchId",
            "isVisible": true,
            "skin": "slImage",
            "src": "touchid.png",
            "top": "10%",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "imgTouchId"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgTouchId"), extendConfig({}, controller.args[2], "imgTouchId"));
        var lblTitle = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblTitle",
            "isVisible": true,
            "skin": "sknLbl3e4f56SSPReg30px",
            "text": kony.i18n.getLocalizedString("kony.mb.login.touchIdTitle"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "44%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblTitle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTitle"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTitle"));
        var lblAuthenticateMsg = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblAuthenticateMsg",
            "isVisible": true,
            "skin": "sknLbl3e4f56op50SSPReg30px",
            "text": kony.i18n.getLocalizedString("kony.mb.login.authenticationMsg"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "56%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAuthenticateMsg"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAuthenticateMsg"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAuthenticateMsg"));
        var flxBorderBottom = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxBorderBottom",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3op50",
            "top": "75%",
            "width": "100%",
            "zIndex": 5
        }, controller.args[0], "flxBorderBottom"), extendConfig({}, controller.args[1], "flxBorderBottom"), extendConfig({}, controller.args[2], "flxBorderBottom"));
        flxBorderBottom.setDefaultUnit(kony.flex.DP);
        flxBorderBottom.add();
        var flxCancel = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerX": "50%",
            "clipBounds": true,
            "id": "flxCancel",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "3%",
            "skin": "CopyslFbox",
            "top": "82%",
            "width": "25%",
            "zIndex": 1
        }, controller.args[0], "flxCancel"), extendConfig({}, controller.args[1], "flxCancel"), extendConfig({}, controller.args[2], "flxCancel"));
        flxCancel.setDefaultUnit(kony.flex.DP);
        var lblCancel = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblCancel",
            "isVisible": true,
            "right": "5%",
            "skin": "sknLbl0095e4SSPReg30px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCancel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblCancel"));
        flxCancel.add(lblCancel);
        flxContainer.add(imgTouchId, lblTitle, lblAuthenticateMsg, flxBorderBottom, flxCancel);
        customAlertPopUp.add(flxContainer);
        return customAlertPopUp;
    }
})