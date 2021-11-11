define(function() {
    return function(controller) {
        var loginPopups = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "loginPopups",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_i08f06f3480848a3a320f6d1ea88c9c2(eventobject);
            },
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "loginPopups"), extendConfig({}, controller.args[1], "loginPopups"), extendConfig({}, controller.args[2], "loginPopups"));
        loginPopups.setDefaultUnit(kony.flex.DP);
        var flxButtons = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "8%",
            "id": "flxButtons",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxffffff",
            "top": "65%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxButtons"), extendConfig({}, controller.args[1], "flxButtons"), extendConfig({}, controller.args[2], "flxButtons"));
        flxButtons.setDefaultUnit(kony.flex.DP);
        var flxOpenNewAccount = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "50%",
            "id": "flxOpenNewAccount",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "50%",
            "zIndex": 3
        }, controller.args[0], "flxOpenNewAccount"), extendConfig({}, controller.args[1], "flxOpenNewAccount"), extendConfig({}, controller.args[2], "flxOpenNewAccount"));
        flxOpenNewAccount.setDefaultUnit(kony.flex.DP);
        var lblOpenNewAccount = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblOpenNewAccount",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl004B95SSPRegular26px",
            "text": kony.i18n.getLocalizedString("kony.mb.login.openNewAccount"),
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblOpenNewAccount"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblOpenNewAccount"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblOpenNewAccount"));
        flxOpenNewAccount.add(lblOpenNewAccount);
        var btnTouchId = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "focusSkin": "sknBtnffffff004b95SSPReg107pr",
            "height": "30dp",
            "id": "btnTouchId",
            "isVisible": false,
            "right": "18dp",
            "skin": "sknBtnffffff004b95SSPReg107pr",
            "text": kony.i18n.getLocalizedString("kony.mb.devReg.TouchId"),
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 3
        }, controller.args[0], "btnTouchId"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [1, 0, 1, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnTouchId"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnTouchId"));
        var btnFaceId = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "focusSkin": "sknBtnffffff004b95SSPReg107pr",
            "height": "30dp",
            "id": "btnFaceId",
            "isVisible": false,
            "right": "18dp",
            "skin": "sknBtnffffff004b95SSPReg107pr",
            "text": kony.i18n.getLocalizedString("kony.mb.common.FaceCaps"),
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 3
        }, controller.args[0], "btnFaceId"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [1, 0, 1, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnFaceId"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnFaceId"));
        var btnPinId = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "focusSkin": "sknBtnffffff004b95SSPReg107pr",
            "height": "30dp",
            "id": "btnPinId",
            "isVisible": false,
            "right": "18dp",
            "skin": "sknBtnffffff004b95SSPReg107pr",
            "text": kony.i18n.getLocalizedString("kony.mb.login.pinId"),
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 3
        }, controller.args[0], "btnPinId"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [1, 0, 1, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnPinId"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnPinId"));
        flxButtons.add(flxOpenNewAccount, btnTouchId, btnFaceId, btnPinId);
        var flxLoginPopups = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxLoginPopups",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "zIndex": 500
        }, controller.args[0], "flxLoginPopups"), extendConfig({}, controller.args[1], "flxLoginPopups"), extendConfig({}, controller.args[2], "flxLoginPopups"));
        flxLoginPopups.setDefaultUnit(kony.flex.DP);
        var flxEnterPin = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxEnterPin",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlx000000op60",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxEnterPin"), extendConfig({}, controller.args[1], "flxEnterPin"), extendConfig({}, controller.args[2], "flxEnterPin"));
        flxEnterPin.setDefaultUnit(kony.flex.DP);
        var flxContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "72%",
            "id": "flxContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknFlxffffffB10px",
            "width": "81%",
            "zIndex": 1
        }, controller.args[0], "flxContainer"), extendConfig({}, controller.args[1], "flxContainer"), extendConfig({}, controller.args[2], "flxContainer"));
        flxContainer.setDefaultUnit(kony.flex.DP);
        var flxMainContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "100%",
            "id": "flxMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknFlxffffffB10px",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMainContainer"), extendConfig({}, controller.args[1], "flxMainContainer"), extendConfig({}, controller.args[2], "flxMainContainer"));
        flxMainContainer.setDefaultUnit(kony.flex.DP);
        var stepCountLabel = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "60%",
            "clipBounds": true,
            "height": "40dp",
            "id": "stepCountLabel",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "34%",
            "isModalContainer": false,
            "skin": "CopyslFbox",
            "top": "2%",
            "width": "44.44%",
            "zIndex": 1
        }, controller.args[0], "stepCountLabel"), extendConfig({}, controller.args[1], "stepCountLabel"), extendConfig({}, controller.args[2], "stepCountLabel"));
        stepCountLabel.setDefaultUnit(kony.flex.DP);
        var stepNumberFlex = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": 50,
            "centerY": "33.33%",
            "clipBounds": true,
            "id": "stepNumberFlex",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "24%",
            "isModalContainer": false,
            "skin": "sknStepNumber",
            "top": "4%",
            "width": "15.85%",
            "zIndex": 1
        }, controller.args[0], "stepNumberFlex"), extendConfig({}, controller.args[1], "stepNumberFlex"), extendConfig({}, controller.args[2], "stepNumberFlex"));
        stepNumberFlex.setDefaultUnit(kony.flex.DP);
        var StepNumberCount = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "StepNumberCount",
            "isVisible": true,
            "skin": "skniconButtonLabel",
            "text": "1",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "StepNumberCount"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "StepNumberCount"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "StepNumberCount"));
        stepNumberFlex.add(StepNumberCount);
        var totalStepsLabel = new kony.ui.Label(extendConfig({
            "id": "totalStepsLabel",
            "isVisible": true,
            "left": "43.75%",
            "skin": "skniconButtonLabel",
            "text": "of 2",
            "textStyle": {},
            "top": "10.22%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "totalStepsLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "totalStepsLabel"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "totalStepsLabel"));
        var StepLabel = new kony.ui.Label(extendConfig({
            "id": "StepLabel",
            "isVisible": true,
            "left": "0%",
            "skin": "skniconButtonLabel",
            "text": "Step",
            "textStyle": {},
            "top": "10.50%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "StepLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "StepLabel"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "StepLabel"));
        stepCountLabel.add(stepNumberFlex, totalStepsLabel, StepLabel);
        var PinEntryLabel = new kony.ui.Label(extendConfig({
            "centerX": "50.00%",
            "id": "PinEntryLabel",
            "isVisible": true,
            "skin": "sknLbl3e4f56SSPReg32px",
            "text": kony.i18n.getLocalizedString("kony.mb.login.enterLoginPin"),
            "textStyle": {},
            "top": "4.50%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "PinEntryLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "PinEntryLabel"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "PinEntryLabel"));
        var flxProgressButtons = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "53.50%",
            "clipBounds": true,
            "height": "5%",
            "id": "flxProgressButtons",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "25.00%",
            "isModalContainer": false,
            "skin": "skncontainerBkgNone",
            "top": "5%",
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "flxProgressButtons"), extendConfig({}, controller.args[1], "flxProgressButtons"), extendConfig({}, controller.args[2], "flxProgressButtons"));
        flxProgressButtons.setDefaultUnit(kony.flex.DP);
        var flxProgressButton1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "11dp",
            "id": "flxProgressButton1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknFlxa0a0a0B",
            "top": "0%",
            "width": "11dp",
            "zIndex": 1
        }, controller.args[0], "flxProgressButton1"), extendConfig({}, controller.args[1], "flxProgressButton1"), extendConfig({}, controller.args[2], "flxProgressButton1"));
        flxProgressButton1.setDefaultUnit(kony.flex.DP);
        flxProgressButton1.add();
        var flxProgressButton2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "11dp",
            "id": "flxProgressButton2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "15%",
            "isModalContainer": false,
            "skin": "sknFlxa0a0a0B",
            "top": "0%",
            "width": "11dp",
            "zIndex": 1
        }, controller.args[0], "flxProgressButton2"), extendConfig({}, controller.args[1], "flxProgressButton2"), extendConfig({}, controller.args[2], "flxProgressButton2"));
        flxProgressButton2.setDefaultUnit(kony.flex.DP);
        flxProgressButton2.add();
        var flxProgressButton3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "11dp",
            "id": "flxProgressButton3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "30%",
            "isModalContainer": false,
            "skin": "sknFlxa0a0a0B",
            "top": "0%",
            "width": "11dp",
            "zIndex": 1
        }, controller.args[0], "flxProgressButton3"), extendConfig({}, controller.args[1], "flxProgressButton3"), extendConfig({}, controller.args[2], "flxProgressButton3"));
        flxProgressButton3.setDefaultUnit(kony.flex.DP);
        flxProgressButton3.add();
        var flxProgressButton4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "11dp",
            "id": "flxProgressButton4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "45%",
            "isModalContainer": false,
            "skin": "sknFlxa0a0a0B",
            "top": "0%",
            "width": "11dp",
            "zIndex": 1
        }, controller.args[0], "flxProgressButton4"), extendConfig({}, controller.args[1], "flxProgressButton4"), extendConfig({}, controller.args[2], "flxProgressButton4"));
        flxProgressButton4.setDefaultUnit(kony.flex.DP);
        flxProgressButton4.add();
        var flxProgressButton5 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "11dp",
            "id": "flxProgressButton5",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "60%",
            "isModalContainer": false,
            "skin": "sknFlxa0a0a0B",
            "top": "0%",
            "width": "11dp",
            "zIndex": 1
        }, controller.args[0], "flxProgressButton5"), extendConfig({}, controller.args[1], "flxProgressButton5"), extendConfig({}, controller.args[2], "flxProgressButton5"));
        flxProgressButton5.setDefaultUnit(kony.flex.DP);
        flxProgressButton5.add();
        var flxProgressButton6 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "11dp",
            "id": "flxProgressButton6",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "75%",
            "isModalContainer": false,
            "skin": "sknFlxa0a0a0B",
            "top": "0%",
            "width": "11dp",
            "zIndex": 1
        }, controller.args[0], "flxProgressButton6"), extendConfig({}, controller.args[1], "flxProgressButton6"), extendConfig({}, controller.args[2], "flxProgressButton6"));
        flxProgressButton6.setDefaultUnit(kony.flex.DP);
        flxProgressButton6.add();
        flxProgressButtons.add(flxProgressButton1, flxProgressButton2, flxProgressButton3, flxProgressButton4, flxProgressButton5, flxProgressButton6);
        var flxDialPad = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "60%",
            "id": "flxDialPad",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "skncontainerBkgNone",
            "top": "5%",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxDialPad"), extendConfig({}, controller.args[1], "flxDialPad"), extendConfig({}, controller.args[2], "flxDialPad"));
        flxDialPad.setDefaultUnit(kony.flex.DP);
        var btnOne = new kony.ui.Button(extendConfig({
            "focusSkin": "btnNumberFocusf1f1f1Be3e3e3",
            "height": "50dp",
            "id": "btnOne",
            "isVisible": true,
            "left": "9%",
            "skin": "btnNumbere3e3e3B",
            "text": "1",
            "top": "2%",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnOne"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnOne"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnOne"));
        var btnTwo = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "btnNumberFocusf1f1f1Be3e3e3",
            "height": "50dp",
            "id": "btnTwo",
            "isVisible": true,
            "left": "36%",
            "skin": "btnNumbere3e3e3B",
            "text": "2",
            "top": "2%",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnTwo"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnTwo"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnTwo"));
        var btnThree = new kony.ui.Button(extendConfig({
            "focusSkin": "btnNumberFocusf1f1f1Be3e3e3",
            "height": "50dp",
            "id": "btnThree",
            "isVisible": true,
            "right": "9%",
            "skin": "btnNumbere3e3e3B",
            "text": "3",
            "top": "2%",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnThree"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnThree"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnThree"));
        var btnFour = new kony.ui.Button(extendConfig({
            "focusSkin": "btnNumberFocusf1f1f1Be3e3e3",
            "height": "50dp",
            "id": "btnFour",
            "isVisible": true,
            "left": "9%",
            "skin": "btnNumbere3e3e3B",
            "text": "4",
            "top": "25%",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnFour"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnFour"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnFour"));
        var btnFive = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "btnNumberFocusf1f1f1Be3e3e3",
            "height": "50dp",
            "id": "btnFive",
            "isVisible": true,
            "left": "36%",
            "skin": "btnNumbere3e3e3B",
            "text": "5",
            "top": "25%",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnFive"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnFive"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnFive"));
        var btnSix = new kony.ui.Button(extendConfig({
            "focusSkin": "btnNumberFocusf1f1f1Be3e3e3",
            "height": "50dp",
            "id": "btnSix",
            "isVisible": true,
            "right": "9%",
            "skin": "btnNumbere3e3e3B",
            "text": "6",
            "top": "25%",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnSix"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSix"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnSix"));
        var btnSeven = new kony.ui.Button(extendConfig({
            "focusSkin": "btnNumberFocusf1f1f1Be3e3e3",
            "height": "50dp",
            "id": "btnSeven",
            "isVisible": true,
            "left": "9%",
            "skin": "btnNumbere3e3e3B",
            "text": "7",
            "top": "48%",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnSeven"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSeven"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnSeven"));
        var btnEight = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "btnNumberFocusf1f1f1Be3e3e3",
            "height": "50dp",
            "id": "btnEight",
            "isVisible": true,
            "left": "36%",
            "skin": "btnNumbere3e3e3B",
            "text": "8",
            "top": "48%",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnEight"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnEight"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnEight"));
        var btnNine = new kony.ui.Button(extendConfig({
            "focusSkin": "btnNumberFocusf1f1f1Be3e3e3",
            "height": "50dp",
            "id": "btnNine",
            "isVisible": true,
            "right": "9%",
            "skin": "btnNumbere3e3e3B",
            "text": "9",
            "top": "48%",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnNine"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNine"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnNine"));
        var btnZero = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "btnNumberFocusf1f1f1Be3e3e3",
            "height": "50dp",
            "id": "btnZero",
            "isVisible": true,
            "skin": "btnNumbere3e3e3B",
            "text": "0",
            "top": "71%",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnZero"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnZero"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnZero"));
        var flxCross = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "sknFlxImgCancelFocus",
            "height": "30dp",
            "id": "flxCross",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "11%",
            "skin": "sknFlxImgCancel",
            "top": "75%",
            "width": "40dp",
            "zIndex": 1
        }, controller.args[0], "flxCross"), extendConfig({}, controller.args[1], "flxCross"), extendConfig({}, controller.args[2], "flxCross"));
        flxCross.setDefaultUnit(kony.flex.DP);
        flxCross.add();
        flxDialPad.add(btnOne, btnTwo, btnThree, btnFour, btnFive, btnSix, btnSeven, btnEight, btnNine, btnZero, flxCross);
        var flxbottomContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "11%",
            "id": "flxbottomContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox",
            "top": "4%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxbottomContainer"), extendConfig({}, controller.args[1], "flxbottomContainer"), extendConfig({}, controller.args[2], "flxbottomContainer"));
        flxbottomContainer.setDefaultUnit(kony.flex.DP);
        var flxCancelPin = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "id": "flxCancelPin",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "3%",
            "skin": "CopyslFbox",
            "width": "25%",
            "zIndex": 1
        }, controller.args[0], "flxCancelPin"), extendConfig({}, controller.args[1], "flxCancelPin"), extendConfig({}, controller.args[2], "flxCancelPin"));
        flxCancelPin.setDefaultUnit(kony.flex.DP);
        var lblCancel = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblCancel",
            "isVisible": true,
            "right": "5%",
            "skin": "sknLbl0095e4SSPReg30px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCancel"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblCancel"));
        flxCancelPin.add(lblCancel);
        var flxBorder = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxBorder",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "top": "0%",
            "width": "100%",
            "zIndex": 4
        }, controller.args[0], "flxBorder"), extendConfig({}, controller.args[1], "flxBorder"), extendConfig({}, controller.args[2], "flxBorder"));
        flxBorder.setDefaultUnit(kony.flex.DP);
        flxBorder.add();
        flxbottomContainer.add(flxCancelPin, flxBorder);
        flxMainContainer.add(stepCountLabel, PinEntryLabel, flxProgressButtons, flxDialPad, flxbottomContainer);
        flxContainer.add(flxMainContainer);
        flxEnterPin.add(flxContainer);
        var flxFaceIdPopUp = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxFaceIdPopUp",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknFlx000000op60",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFaceIdPopUp"), extendConfig({}, controller.args[1], "flxFaceIdPopUp"), extendConfig({}, controller.args[2], "flxFaceIdPopUp"));
        flxFaceIdPopUp.setDefaultUnit(kony.flex.DP);
        var flxContainerFaceId = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "61.65%",
            "id": "flxContainerFaceId",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "99dp",
            "isModalContainer": false,
            "skin": "sknFlxffffffB",
            "top": "386dp",
            "width": "84%",
            "zIndex": 1
        }, controller.args[0], "flxContainerFaceId"), extendConfig({}, controller.args[1], "flxContainerFaceId"), extendConfig({}, controller.args[2], "flxContainerFaceId"));
        flxContainerFaceId.setDefaultUnit(kony.flex.DP);
        var lblFaceIdTitle = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblFaceIdTitle",
            "isVisible": true,
            "skin": "sknLbl3e4f56SSPReg30px",
            "text": kony.i18n.getLocalizedString("kony.mb.login.faceIdTitle"),
            "textStyle": {},
            "top": "70%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblFaceIdTitle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFaceIdTitle"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblFaceIdTitle"));
        var lblAuthenticateMsgFI = new kony.ui.Label(extendConfig({
            "centerX": "50.00%",
            "id": "lblAuthenticateMsgFI",
            "isVisible": true,
            "skin": "sknLbl3e4f56op50SSPReg30px",
            "text": kony.i18n.getLocalizedString("kony.mb.login.authenticationMsg"),
            "textStyle": {},
            "top": "77.00%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAuthenticateMsgFI"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAuthenticateMsgFI"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAuthenticateMsgFI"));
        var flxBorderBottomFI = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxBorderBottomFI",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3op50",
            "top": "87%",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxBorderBottomFI"), extendConfig({}, controller.args[1], "flxBorderBottomFI"), extendConfig({}, controller.args[2], "flxBorderBottomFI"));
        flxBorderBottomFI.setDefaultUnit(kony.flex.DP);
        flxBorderBottomFI.add();
        var flxCancelFI = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "13%",
            "id": "flxCancelFI",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "3%",
            "skin": "CopyslFbox",
            "top": "87%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCancelFI"), extendConfig({}, controller.args[1], "flxCancelFI"), extendConfig({}, controller.args[2], "flxCancelFI"));
        flxCancelFI.setDefaultUnit(kony.flex.DP);
        var lblCancelFI = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblCancelFI",
            "isVisible": true,
            "right": "5%",
            "skin": "sknLbl0095e4SSPReg30px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblCancelFI"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCancelFI"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblCancelFI"));
        flxCancelFI.add(lblCancelFI);
        var imgFaceId = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "210dp",
            "id": "imgFaceId",
            "isVisible": true,
            "skin": "slImage",
            "src": "faceid.png",
            "top": "10%",
            "width": "210dp",
            "zIndex": 1
        }, controller.args[0], "imgFaceId"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgFaceId"), extendConfig({}, controller.args[2], "imgFaceId"));
        flxContainerFaceId.add(lblFaceIdTitle, lblAuthenticateMsgFI, flxBorderBottomFI, flxCancelFI, imgFaceId);
        flxFaceIdPopUp.add(flxContainerFaceId);
        flxLoginPopups.add(flxEnterPin, flxFaceIdPopUp);
        var flxPopup = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "10.50%",
            "id": "flxPopup",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknFlxf54b5e",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1001
        }, controller.args[0], "flxPopup"), extendConfig({}, controller.args[1], "flxPopup"), extendConfig({}, controller.args[2], "flxPopup"));
        flxPopup.setDefaultUnit(kony.flex.DP);
        var customPopup = new com.kmb.common.customPopup(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "height": "100%",
            "id": "customPopup",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_DEFAULT,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "overrides": {
                "imgPopup": {
                    "src": "imagedrag.png"
                }
            }
        }, controller.args[0], "customPopup"), extendConfig({
            "overrides": {}
        }, controller.args[1], "customPopup"), extendConfig({
            "overrides": {}
        }, controller.args[2], "customPopup"));
        flxPopup.add(customPopup);
        loginPopups.add(flxButtons, flxLoginPopups, flxPopup);
        return loginPopups;
    }
})