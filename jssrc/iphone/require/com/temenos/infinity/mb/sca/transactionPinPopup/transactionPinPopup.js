define(function() {
    return function(controller) {
        var transactionPinPopup = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "transactionPinPopup",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": true,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_c013a2505e38456185014c79ee66d9d9(eventobject);
            },
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 300
        }, controller.args[0], "transactionPinPopup"), extendConfig({}, controller.args[1], "transactionPinPopup"), extendConfig({}, controller.args[2], "transactionPinPopup"));
        transactionPinPopup.setDefaultUnit(kony.flex.DP);
        var flxEnterPin = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxEnterPin",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlx4",
            "top": "0dp",
            "width": "100%",
            "zIndex": 50
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
            "skin": "sknFlxffffffB",
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
            "isModalContainer": true,
            "skin": "CopysknFlxffffffB2",
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
            "skin": "CopysknStepNumber2",
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
            "skin": "CopyskniconButtonLabel2",
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
            "skin": "CopyskniconButtonLabel2",
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
            "skin": "CopyskniconButtonLabel2",
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
        var flxPinEntryLabels = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxPinEntryLabels",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "4%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPinEntryLabels"), extendConfig({}, controller.args[1], "flxPinEntryLabels"), extendConfig({}, controller.args[2], "flxPinEntryLabels"));
        flxPinEntryLabels.setDefaultUnit(kony.flex.DP);
        var PinEntryLabel = new kony.ui.Label(extendConfig({
            "centerX": "50.00%",
            "id": "PinEntryLabel",
            "isVisible": true,
            "skin": "sknLbl3E4F56SSPR15px",
            "text": "Enter PIN",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "PinEntryLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "PinEntryLabel"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "PinEntryLabel"));
        var lblErrorMessage = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "centerX": "50.00%",
            "id": "lblErrorMessage",
            "isVisible": false,
            "skin": "sknLblEE0005SSPR15px",
            "text": "Wrong PIN. 2 more attempts left.",
            "textStyle": {},
            "top": "12dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblErrorMessage"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblErrorMessage"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblErrorMessage"));
        flxPinEntryLabels.add(PinEntryLabel, lblErrorMessage);
        var flxProgressButtons = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "5%",
            "id": "flxProgressButtons",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "30%",
            "isModalContainer": false,
            "skin": "CopyskncontainerBkgNone2",
            "top": "3%",
            "width": "65%",
            "zIndex": 1
        }, controller.args[0], "flxProgressButtons"), extendConfig({}, controller.args[1], "flxProgressButtons"), extendConfig({}, controller.args[2], "flxProgressButtons"));
        flxProgressButtons.setDefaultUnit(kony.flex.DP);
        flxProgressButtons.add();
        var flxDialPad = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "60%",
            "id": "flxDialPad",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "CopyskncontainerBkgNone2",
            "top": "4%",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxDialPad"), extendConfig({}, controller.args[1], "flxDialPad"), extendConfig({}, controller.args[2], "flxDialPad"));
        flxDialPad.setDefaultUnit(kony.flex.DP);
        var btnOne = new kony.ui.Button(extendConfig({
            "focusSkin": "CopybtnNumberFocusf2",
            "height": "50dp",
            "id": "btnOne",
            "isVisible": true,
            "left": "9%",
            "skin": "CopybtnNumbere2",
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
            "focusSkin": "CopybtnNumberFocusf2",
            "height": "50dp",
            "id": "btnTwo",
            "isVisible": true,
            "left": "36%",
            "skin": "CopybtnNumbere2",
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
            "focusSkin": "CopybtnNumberFocusf2",
            "height": "50dp",
            "id": "btnThree",
            "isVisible": true,
            "right": "9%",
            "skin": "CopybtnNumbere2",
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
            "focusSkin": "CopybtnNumberFocusf2",
            "height": "50dp",
            "id": "btnFour",
            "isVisible": true,
            "left": "9%",
            "skin": "CopybtnNumbere2",
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
            "focusSkin": "CopybtnNumberFocusf2",
            "height": "50dp",
            "id": "btnFive",
            "isVisible": true,
            "left": "36%",
            "skin": "CopybtnNumbere2",
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
            "focusSkin": "CopybtnNumberFocusf2",
            "height": "50dp",
            "id": "btnSix",
            "isVisible": true,
            "right": "9%",
            "skin": "CopybtnNumbere2",
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
            "focusSkin": "CopybtnNumberFocusf2",
            "height": "50dp",
            "id": "btnSeven",
            "isVisible": true,
            "left": "9%",
            "skin": "CopybtnNumbere2",
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
            "focusSkin": "CopybtnNumberFocusf2",
            "height": "50dp",
            "id": "btnEight",
            "isVisible": true,
            "left": "36%",
            "skin": "CopybtnNumbere2",
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
            "focusSkin": "CopybtnNumberFocusf2",
            "height": "50dp",
            "id": "btnNine",
            "isVisible": true,
            "right": "9%",
            "skin": "CopybtnNumbere2",
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
            "focusSkin": "CopybtnNumberFocusf2",
            "height": "50dp",
            "id": "btnZero",
            "isVisible": true,
            "skin": "CopybtnNumbere2",
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
            "focusSkin": "CopysknFlxImgCancelFocus2",
            "height": "30dp",
            "id": "flxCross",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "11%",
            "skin": "CopysknFlxImgCancel2",
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
            "skin": "sknLbl0A78D1SSPR15px",
            "text": "Cancel",
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
            "skin": "CopysknFlxf2",
            "top": "0%",
            "width": "100%",
            "zIndex": 4
        }, controller.args[0], "flxBorder"), extendConfig({}, controller.args[1], "flxBorder"), extendConfig({}, controller.args[2], "flxBorder"));
        flxBorder.setDefaultUnit(kony.flex.DP);
        flxBorder.add();
        flxbottomContainer.add(flxCancelPin, flxBorder);
        flxMainContainer.add(stepCountLabel, flxPinEntryLabels, flxProgressButtons, flxDialPad, flxbottomContainer);
        flxContainer.add(flxMainContainer);
        flxEnterPin.add(flxContainer);
        transactionPinPopup.add(flxEnterPin);
        return transactionPinPopup;
    }
})