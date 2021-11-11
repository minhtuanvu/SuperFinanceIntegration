define(function() {
    return function(controller) {
        var TransfersFlowSecurityQuestions = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "TransfersFlowSecurityQuestions",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_ef83c3b8434747339c11c8425f8e4794(eventobject);
            },
            "skin": "sknFlxBgFFFFFF",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "TransfersFlowSecurityQuestions"), extendConfig({}, controller.args[1], "TransfersFlowSecurityQuestions"), extendConfig({}, controller.args[2], "TransfersFlowSecurityQuestions"));
        TransfersFlowSecurityQuestions.setDefaultUnit(kony.flex.DP);
        var flxSecurityQuestionHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSecurityQuestionHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknHeaderBackgoround",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSecurityQuestionHeader"), extendConfig({}, controller.args[1], "flxSecurityQuestionHeader"), extendConfig({}, controller.args[2], "flxSecurityQuestionHeader"));
        flxSecurityQuestionHeader.setDefaultUnit(kony.flex.DP);
        var flxSecurityQuestionHeaderTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSecurityQuestionHeaderTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "25dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSecurityQuestionHeaderTop"), extendConfig({}, controller.args[1], "flxSecurityQuestionHeaderTop"), extendConfig({}, controller.args[2], "flxSecurityQuestionHeaderTop"));
        flxSecurityQuestionHeaderTop.setDefaultUnit(kony.flex.DP);
        var flxSecurityQuestionBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxSecurityQuestionBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "flxSecurityQuestionBack"), extendConfig({}, controller.args[1], "flxSecurityQuestionBack"), extendConfig({}, controller.args[2], "flxSecurityQuestionBack"));
        flxSecurityQuestionBack.setDefaultUnit(kony.flex.DP);
        var imgSecurityQuestionBack = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "30dp",
            "id": "imgSecurityQuestionBack",
            "isVisible": true,
            "left": "10dp",
            "src": "backicon.png",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgSecurityQuestionBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgSecurityQuestionBack"), extendConfig({}, controller.args[2], "imgSecurityQuestionBack"));
        flxSecurityQuestionBack.add(imgSecurityQuestionBack);
        var btnSecurityQuestionCancel = new kony.ui.Button(extendConfig({
            "height": "20dp",
            "id": "btnSecurityQuestionCancel",
            "isVisible": true,
            "right": "20px",
            "skin": "ICSKnBtnffffff15px",
            "text": "Cancel",
            "top": "12dp",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnSecurityQuestionCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSecurityQuestionCancel"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnSecurityQuestionCancel"));
        flxSecurityQuestionHeaderTop.add(flxSecurityQuestionBack, btnSecurityQuestionCancel);
        var lblSecurityQuestionHeader = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "height": "42dp",
            "id": "lblSecurityQuestionHeader",
            "isVisible": true,
            "left": "17dp",
            "skin": "ICSknLblfffffSSPSemiBold76px",
            "text": kony.i18n.getLocalizedString("kony.mb.enroll.securityCode"),
            "textStyle": {},
            "top": "11dp",
            "width": "300dp",
            "zIndex": 1
        }, controller.args[0], "lblSecurityQuestionHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSecurityQuestionHeader"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSecurityQuestionHeader"));
        flxSecurityQuestionHeader.add(flxSecurityQuestionHeaderTop, lblSecurityQuestionHeader);
        var flxBody = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bottom": "80dp",
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "65%",
            "horizontalScrollIndicator": true,
            "id": "flxBody",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "sknScrFlxffffff",
            "top": "0dp",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxBody"), extendConfig({}, controller.args[1], "flxBody"), extendConfig({}, controller.args[2], "flxBody"));
        flxBody.setDefaultUnit(kony.flex.DP);
        var flxSecurityQuestion = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSecurityQuestion",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSecurityQuestion"), extendConfig({}, controller.args[1], "flxSecurityQuestion"), extendConfig({}, controller.args[2], "flxSecurityQuestion"));
        flxSecurityQuestion.setDefaultUnit(kony.flex.DP);
        var lblSecurityQuestions = new kony.ui.Label(extendConfig({
            "bottom": "15dp",
            "centerX": "50%",
            "id": "lblSecurityQuestions",
            "isVisible": true,
            "skin": "ICSknLbl42424234px",
            "text": kony.i18n.getLocalizedString("kony.mb.MFA.SecurityQuestions"),
            "textStyle": {},
            "top": "15dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblSecurityQuestions"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSecurityQuestions"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSecurityQuestions"));
        flxSecurityQuestion.add(lblSecurityQuestions);
        var flxSecurityQuestionSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "5dp",
            "id": "flxSecurityQuestionSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxSeparatora6a6a6",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSecurityQuestionSeparator"), extendConfig({}, controller.args[1], "flxSecurityQuestionSeparator"), extendConfig({}, controller.args[2], "flxSecurityQuestionSeparator"));
        flxSecurityQuestionSeparator.setDefaultUnit(kony.flex.DP);
        flxSecurityQuestionSeparator.add();
        var lblError = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblError",
            "isVisible": false,
            "text": kony.i18n.getLocalizedString("kony.mb.MFA.ErrorQnA"),
            "textStyle": {},
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblError"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblError"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblError"));
        var flxSegQuestions = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxSegQuestions",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "30dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSegQuestions"), extendConfig({}, controller.args[1], "flxSegQuestions"), extendConfig({}, controller.args[2], "flxSegQuestions"));
        flxSegQuestions.setDefaultUnit(kony.flex.DP);
        var segSecurityQuestions = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "data": [{
                "lblQuestion": "Your first school name?",
                "tbxAnswer": {
                    "placeholder": kony.i18n.getLocalizedString("kony.mb.MFA.AnswerPlaceholder"),
                    "text": ""
                }
            }, {
                "lblQuestion": "What is your mother’s maiden name?",
                "tbxAnswer": {
                    "placeholder": kony.i18n.getLocalizedString("kony.mb.MFA.AnswerPlaceholder"),
                    "text": ""
                }
            }],
            "groupCells": false,
            "id": "segSecurityQuestions",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowTemplate": "flxSecurityQnA",
            "scrollingEvents": {},
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorRequired": false,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxSecurityQnA": "flxSecurityQnA",
                "lblQuestion": "lblQuestion",
                "tbxAnswer": "tbxAnswer"
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "segSecurityQuestions"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segSecurityQuestions"), extendConfig({
            "bounces": true,
            "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
            "enableDictionary": false,
            "indicator": constants.SEGUI_NONE,
            "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
            "showProgressIndicator": true
        }, controller.args[2], "segSecurityQuestions"));
        flxSegQuestions.add(segSecurityQuestions);
        flxBody.add(flxSecurityQuestion, flxSecurityQuestionSeparator, lblError, flxSegQuestions);
        var flxButtons = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "0dp",
            "clipBounds": true,
            "id": "flxButtons",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 8
        }, controller.args[0], "flxButtons"), extendConfig({}, controller.args[1], "flxButtons"), extendConfig({}, controller.args[2], "flxButtons"));
        flxButtons.setDefaultUnit(kony.flex.DP);
        var btnVerify = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "centerX": "50%",
            "height": "40dp",
            "id": "btnVerify",
            "isVisible": true,
            "right": 20,
            "skin": "sknBtn0095e426pxEnabled",
            "text": kony.i18n.getLocalizedString("kony.mb.Forgot.Verify"),
            "width": "90%",
            "zIndex": 8
        }, controller.args[0], "btnVerify"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnVerify"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnVerify"));
        flxButtons.add(btnVerify);
        var flxRememberMyDevice = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "40dp",
            "id": "flxRememberMyDevice",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "7dp",
            "isModalContainer": false,
            "top": 0,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRememberMyDevice"), extendConfig({}, controller.args[1], "flxRememberMyDevice"), extendConfig({}, controller.args[2], "flxRememberMyDevice"));
        flxRememberMyDevice.setDefaultUnit(kony.flex.DP);
        var lblRememberMyDevice = new kony.ui.Label(extendConfig({
            "centerX": "45%",
            "centerY": "50%",
            "id": "lblRememberMyDevice",
            "isVisible": true,
            "text": kony.i18n.getLocalizedString("kony.mb.devReg.remMyDevice"),
            "textStyle": {},
            "top": "8dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblRememberMyDevice"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRememberMyDevice"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblRememberMyDevice"));
        var flxCheckBox = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "30dp",
            "id": "flxCheckBox",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5dp",
            "isModalContainer": false,
            "width": "30dp",
            "zIndex": 10
        }, controller.args[0], "flxCheckBox"), extendConfig({}, controller.args[1], "flxCheckBox"), extendConfig({}, controller.args[2], "flxCheckBox"));
        flxCheckBox.setDefaultUnit(kony.flex.DP);
        var imgTermsAccepted = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "18dp",
            "id": "imgTermsAccepted",
            "isVisible": true,
            "left": "0dp",
            "src": "tickmarkbox.png",
            "width": "18dp",
            "zIndex": 1
        }, controller.args[0], "imgTermsAccepted"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgTermsAccepted"), extendConfig({}, controller.args[2], "imgTermsAccepted"));
        flxCheckBox.add(imgTermsAccepted);
        flxRememberMyDevice.add(lblRememberMyDevice, flxCheckBox);
        TransfersFlowSecurityQuestions.add(flxSecurityQuestionHeader, flxBody, flxButtons, flxRememberMyDevice);
        return TransfersFlowSecurityQuestions;
    }
})