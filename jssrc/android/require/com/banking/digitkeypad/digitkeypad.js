define(function() {
    return function(controller) {
        var digitkeypad = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "digitkeypad",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxF5F6FBTab",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "digitkeypad"), extendConfig({}, controller.args[1], "digitkeypad"), extendConfig({}, controller.args[2], "digitkeypad"));
        digitkeypad.setDefaultUnit(kony.flex.DP);
        var flxShadowTwo = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "4dp",
            "id": "flxShadowTwo",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxMBGeeeeeeA6a6a6Tab",
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxShadowTwo"), extendConfig({}, controller.args[1], "flxShadowTwo"), extendConfig({}, controller.args[2], "flxShadowTwo"));
        flxShadowTwo.setDefaultUnit(kony.flex.DP);
        flxShadowTwo.add();
        var flxKeypad = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxKeypad",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxF5F6FBTab",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxKeypad"), extendConfig({}, controller.args[1], "flxKeypad"), extendConfig({}, controller.args[2], "flxKeypad"));
        flxKeypad.setDefaultUnit(kony.flex.DP);
        var flxKeypadRowOne = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "24.40%",
            "id": "flxKeypadRowOne",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxF5F6FBTab",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxKeypadRowOne"), extendConfig({}, controller.args[1], "flxKeypadRowOne"), extendConfig({}, controller.args[2], "flxKeypadRowOne"));
        flxKeypadRowOne.setDefaultUnit(kony.flex.DP);
        var btnOne = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnBgFFFFFFSSP70PxTab",
            "height": "100%",
            "id": "btnOne",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknBtnBgFFFFFFSSP70PxTab",
            "text": "1",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnOne"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnOne"), extendConfig({}, controller.args[2], "btnOne"));
        var btnTwo = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnBgFFFFFFSSP70PxTab",
            "height": "100%",
            "id": "btnTwo",
            "isVisible": true,
            "skin": "sknBtnBgFFFFFFSSP70PxTab",
            "text": "2",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnTwo"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnTwo"), extendConfig({}, controller.args[2], "btnTwo"));
        var btnThree = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnBgFFFFFFSSP70PxTab",
            "height": "100%",
            "id": "btnThree",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknBtnBgFFFFFFSSP70PxTab",
            "text": "3",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnThree"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnThree"), extendConfig({}, controller.args[2], "btnThree"));
        flxKeypadRowOne.add(btnOne, btnTwo, btnThree);
        var flxKeypadRowTwo = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "24.60%",
            "id": "flxKeypadRowTwo",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxF5F6FBTab",
            "top": "2dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxKeypadRowTwo"), extendConfig({}, controller.args[1], "flxKeypadRowTwo"), extendConfig({}, controller.args[2], "flxKeypadRowTwo"));
        flxKeypadRowTwo.setDefaultUnit(kony.flex.DP);
        var btnFour = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnBgFFFFFFSSP70PxTab",
            "height": "100%",
            "id": "btnFour",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknBtnBgFFFFFFSSP70PxTab",
            "text": "4",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnFour"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnFour"), extendConfig({}, controller.args[2], "btnFour"));
        var btnFive = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnBgFFFFFFSSP70PxTab",
            "height": "100%",
            "id": "btnFive",
            "isVisible": true,
            "skin": "sknBtnBgFFFFFFSSP70PxTab",
            "text": "5",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnFive"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnFive"), extendConfig({}, controller.args[2], "btnFive"));
        var btnSix = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnBgFFFFFFSSP70PxTab",
            "height": "100%",
            "id": "btnSix",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknBtnBgFFFFFFSSP70PxTab",
            "text": "6",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnSix"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSix"), extendConfig({}, controller.args[2], "btnSix"));
        flxKeypadRowTwo.add(btnFour, btnFive, btnSix);
        var flxKeypadRowThree = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "24.40%",
            "id": "flxKeypadRowThree",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxF5F6FBTab",
            "top": "2dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxKeypadRowThree"), extendConfig({}, controller.args[1], "flxKeypadRowThree"), extendConfig({}, controller.args[2], "flxKeypadRowThree"));
        flxKeypadRowThree.setDefaultUnit(kony.flex.DP);
        var btnSeven = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnBgFFFFFFSSP70PxTab",
            "height": "100%",
            "id": "btnSeven",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknBtnBgFFFFFFSSP70PxTab",
            "text": "7",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnSeven"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSeven"), extendConfig({}, controller.args[2], "btnSeven"));
        var btnEight = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtnBgFFFFFFSSP70PxTab",
            "height": "100%",
            "id": "btnEight",
            "isVisible": true,
            "skin": "sknBtnBgFFFFFFSSP70PxTab",
            "text": "8",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnEight"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnEight"), extendConfig({}, controller.args[2], "btnEight"));
        var btnNine = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnBgFFFFFFSSP70PxTab",
            "height": "100%",
            "id": "btnNine",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknBtnBgFFFFFFSSP70PxTab",
            "text": "9",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNine"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNine"), extendConfig({}, controller.args[2], "btnNine"));
        flxKeypadRowThree.add(btnSeven, btnEight, btnNine);
        var flxKeypadRowFour = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "24.40%",
            "id": "flxKeypadRowFour",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknFlxF5F6FBTab",
            "top": "2dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxKeypadRowFour"), extendConfig({}, controller.args[1], "flxKeypadRowFour"), extendConfig({}, controller.args[2], "flxKeypadRowFour"));
        flxKeypadRowFour.setDefaultUnit(kony.flex.DP);
        var btnDot = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnBgFFFFFFSSP70PxTab",
            "height": "100%",
            "id": "btnDot",
            "isVisible": true,
            "left": 0,
            "skin": "sknBtnBgFFFFFFSSP70PxTab",
            "text": "•",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnDot"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnDot"), extendConfig({}, controller.args[2], "btnDot"));
        var btnZero = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnBgFFFFFFSSP70PxTab",
            "height": "100%",
            "id": "btnZero",
            "isVisible": true,
            "left": "33%",
            "skin": "sknBtnBgFFFFFFSSP70PxTab",
            "text": "0",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnZero"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnZero"), extendConfig({}, controller.args[2], "btnZero"));
        var flxClear = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxClear",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0%",
            "skin": "slFbox",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "flxClear"), extendConfig({}, controller.args[1], "flxClear"), extendConfig({}, controller.args[2], "flxClear"));
        flxClear.setDefaultUnit(kony.flex.DP);
        var imgClear = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "21dp",
            "id": "imgClear",
            "isVisible": true,
            "skin": "slImage",
            "src": "cancelkeypad_1.png",
            "width": "28dp",
            "zIndex": 1
        }, controller.args[0], "imgClear"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgClear"), extendConfig({}, controller.args[2], "imgClear"));
        var imgClearKeypad = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "imgClearKeypad",
            "isVisible": true,
            "skin": "slImage",
            "src": "transparentbox_1.png",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "imgClearKeypad"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgClearKeypad"), extendConfig({}, controller.args[2], "imgClearKeypad"));
        flxClear.add(imgClear, imgClearKeypad);
        flxKeypadRowFour.add(btnDot, btnZero, flxClear);
        flxKeypad.add(flxKeypadRowOne, flxKeypadRowTwo, flxKeypadRowThree, flxKeypadRowFour);
        var flxVerticalSeparatorOne = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxVerticalSeparatorOne",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "33%",
            "isModalContainer": false,
            "top": "0dp",
            "width": "1dp",
            "zIndex": 5
        }, controller.args[0], "flxVerticalSeparatorOne"), extendConfig({}, controller.args[1], "flxVerticalSeparatorOne"), extendConfig({}, controller.args[2], "flxVerticalSeparatorOne"));
        flxVerticalSeparatorOne.setDefaultUnit(kony.flex.DP);
        flxVerticalSeparatorOne.add();
        var flxVerticalSeparatorTwo = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxVerticalSeparatorTwo",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "33%",
            "top": "0dp",
            "width": "1dp",
            "zIndex": 5
        }, controller.args[0], "flxVerticalSeparatorTwo"), extendConfig({}, controller.args[1], "flxVerticalSeparatorTwo"), extendConfig({}, controller.args[2], "flxVerticalSeparatorTwo"));
        flxVerticalSeparatorTwo.setDefaultUnit(kony.flex.DP);
        flxVerticalSeparatorTwo.add();
        digitkeypad.add(flxShadowTwo, flxKeypad, flxVerticalSeparatorOne, flxVerticalSeparatorTwo);
        return digitkeypad;
    }
})