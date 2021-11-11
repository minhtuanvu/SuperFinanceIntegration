define(function() {
    return function(controller) {
        var ActivationCodeSuccess = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "ActivationCodeSuccess",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_d9418f3ce3234d208b06eee38e3bd2c3(eventobject);
            },
            "skin": "sknFlxBgFFFFFF",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "ActivationCodeSuccess"), extendConfig({}, controller.args[1], "ActivationCodeSuccess"), extendConfig({}, controller.args[2], "ActivationCodeSuccess"));
        ActivationCodeSuccess.setDefaultUnit(kony.flex.DP);
        var flxHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0%",
            "clipBounds": true,
            "height": "56dp",
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknFlx1a98ff",
            "top": "0%",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxHeader"), extendConfig({}, controller.args[1], "flxHeader"), extendConfig({}, controller.args[2], "flxHeader"));
        flxHeader.setDefaultUnit(kony.flex.DP);
        var flxBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxBack",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxBack"), extendConfig({}, controller.args[1], "flxBack"), extendConfig({}, controller.args[2], "flxBack"));
        flxBack.setDefaultUnit(kony.flex.DP);
        var imgBack = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "20dp",
            "id": "imgBack",
            "isVisible": true,
            "skin": "slImage",
            "src": "backbutton.png",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "imgBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgBack"), extendConfig({}, controller.args[2], "imgBack"));
        flxBack.add(imgBack);
        var lblScreenName = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblScreenName",
            "isVisible": true,
            "left": "15%",
            "maxNumberOfLines": 1,
            "skin": "sknLblffffffSSP30px",
            "text": "Re-generate Activation code",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "width": "65%",
            "zIndex": 1
        }, controller.args[0], "lblScreenName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblScreenName"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblScreenName"));
        var btnCancel = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "focusSkin": "sknBtnffffffSSP28px",
            "height": "100%",
            "id": "btnCancel",
            "isVisible": false,
            "right": "20dp",
            "skin": "sknBtnffffffSSP28px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "btnCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnCancel"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnCancel"));
        flxHeader.add(flxBack, lblScreenName, btnCancel);
        var flxMainContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "93%",
            "id": "flxMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "56dp",
            "width": "100%",
            "zIndex": 30
        }, controller.args[0], "flxMainContainer"), extendConfig({}, controller.args[1], "flxMainContainer"), extendConfig({}, controller.args[2], "flxMainContainer"));
        flxMainContainer.setDefaultUnit(kony.flex.DP);
        var flxActivateCodeSuccessful = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60%",
            "id": "flxActivateCodeSuccessful",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 30
        }, controller.args[0], "flxActivateCodeSuccessful"), extendConfig({}, controller.args[1], "flxActivateCodeSuccessful"), extendConfig({}, controller.args[2], "flxActivateCodeSuccessful"));
        flxActivateCodeSuccessful.setDefaultUnit(kony.flex.DP);
        var imgGreenTick = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "70dp",
            "id": "imgGreenTick",
            "isVisible": true,
            "skin": "slImage",
            "src": "confirmation_tick.png",
            "top": "100dp",
            "width": "70dp",
            "zIndex": 1
        }, controller.args[0], "imgGreenTick"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgGreenTick"), extendConfig({}, controller.args[2], "imgGreenTick"));
        var flxSuccessMessage = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSuccessMessage",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "190dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSuccessMessage"), extendConfig({}, controller.args[1], "flxSuccessMessage"), extendConfig({}, controller.args[2], "flxSuccessMessage"));
        flxSuccessMessage.setDefaultUnit(kony.flex.DP);
        var flxActivationCodeTitle = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxActivationCodeTitle",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxActivationCodeTitle"), extendConfig({}, controller.args[1], "flxActivationCodeTitle"), extendConfig({}, controller.args[2], "flxActivationCodeTitle"));
        flxActivationCodeTitle.setDefaultUnit(kony.flex.DP);
        var lblActivatedSuccessfully = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblActivatedSuccessfully",
            "isVisible": true,
            "left": "70dp",
            "skin": "sknlbl000000SSPSemiBold72px",
            "text": "Activation code re-generated",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblActivatedSuccessfully"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblActivatedSuccessfully"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblActivatedSuccessfully"));
        flxActivationCodeTitle.add(lblActivatedSuccessfully);
        var flxActivationCodeDescription = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxActivationCodeDescription",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "20dp",
            "width": "100%"
        }, controller.args[0], "flxActivationCodeDescription"), extendConfig({}, controller.args[1], "flxActivationCodeDescription"), extendConfig({}, controller.args[2], "flxActivationCodeDescription"));
        flxActivationCodeDescription.setDefaultUnit(kony.flex.DP);
        var lblActivationDescription = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblActivationDescription",
            "isVisible": true,
            "left": "50dp",
            "skin": "sknLbl727272SSPR114pct",
            "text": "The new activation code will be delivered to your registered email address.",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblActivationDescription"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblActivationDescription"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblActivationDescription"));
        flxActivationCodeDescription.add(lblActivationDescription);
        flxSuccessMessage.add(flxActivationCodeTitle, flxActivationCodeDescription);
        var btnActivateAccount = new kony.ui.Button(extendConfig({
            "bottom": "0%",
            "focusSkin": "sknBtn055BAFSSPSemiBold26px",
            "height": "40dp",
            "id": "btnActivateAccount",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknBtn0095e426pxEnabled",
            "text": "Activate your account",
            "zIndex": 1
        }, controller.args[0], "btnActivateAccount"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnActivateAccount"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnActivateAccount"));
        flxActivateCodeSuccessful.add(imgGreenTick, flxSuccessMessage, btnActivateAccount);
        flxMainContainer.add(flxActivateCodeSuccessful);
        ActivationCodeSuccess.add(flxHeader, flxMainContainer);
        return ActivationCodeSuccess;
    }
})