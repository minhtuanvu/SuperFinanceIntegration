define(function() {
    return function(controller) {
        var keypad = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "keypad",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "keypad"), extendConfig({}, controller.args[1], "keypad"), extendConfig({}, controller.args[2], "keypad"));
        keypad.setDefaultUnit(kony.flex.DP);
        var flxShadowTwo = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxShadowTwo",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxe3e3e3",
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
            "skin": "sknFlxF5F6FB",
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
            "skin": "f9f9",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxKeypadRowOne"), extendConfig({}, controller.args[1], "flxKeypadRowOne"), extendConfig({}, controller.args[2], "flxKeypadRowOne"));
        flxKeypadRowOne.setDefaultUnit(kony.flex.DP);
        var btnOne = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "90%",
            "id": "btnOne",
            "isVisible": true,
            "left": "4%",
            "skin": "sknBtnKeybad",
            "text": "1",
            "top": "0dp",
            "width": "26%",
            "zIndex": 1
        }, controller.args[0], "btnOne"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnOne"), extendConfig({}, controller.args[2], "btnOne"));
        var btnTwo = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "90%",
            "id": "btnTwo",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "2",
            "top": "0dp",
            "width": "26%",
            "zIndex": 1
        }, controller.args[0], "btnTwo"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnTwo"), extendConfig({}, controller.args[2], "btnTwo"));
        var btnThree = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "90%",
            "id": "btnThree",
            "isVisible": true,
            "right": "4%",
            "skin": "sknBtnKeybad",
            "text": "3",
            "top": "0dp",
            "width": "26%",
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
            "skin": "f9f9",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxKeypadRowTwo"), extendConfig({}, controller.args[1], "flxKeypadRowTwo"), extendConfig({}, controller.args[2], "flxKeypadRowTwo"));
        flxKeypadRowTwo.setDefaultUnit(kony.flex.DP);
        var btnFour = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "90%",
            "id": "btnFour",
            "isVisible": true,
            "left": "4%",
            "skin": "sknBtnKeybad",
            "text": "4",
            "width": "26%",
            "zIndex": 1
        }, controller.args[0], "btnFour"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnFour"), extendConfig({}, controller.args[2], "btnFour"));
        var btnFive = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "90%",
            "id": "btnFive",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "5",
            "width": "26%",
            "zIndex": 1
        }, controller.args[0], "btnFive"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnFive"), extendConfig({}, controller.args[2], "btnFive"));
        var btnSix = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "90%",
            "id": "btnSix",
            "isVisible": true,
            "right": "4%",
            "skin": "sknBtnKeybad",
            "text": "6",
            "width": "26%",
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
            "skin": "f9f9",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxKeypadRowThree"), extendConfig({}, controller.args[1], "flxKeypadRowThree"), extendConfig({}, controller.args[2], "flxKeypadRowThree"));
        flxKeypadRowThree.setDefaultUnit(kony.flex.DP);
        var btnSeven = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "90%",
            "id": "btnSeven",
            "isVisible": true,
            "left": "4%",
            "skin": "sknBtnKeybad",
            "text": "7",
            "width": "26%",
            "zIndex": 1
        }, controller.args[0], "btnSeven"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSeven"), extendConfig({}, controller.args[2], "btnSeven"));
        var btnEight = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "90%",
            "id": "btnEight",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "8",
            "width": "26%",
            "zIndex": 1
        }, controller.args[0], "btnEight"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnEight"), extendConfig({}, controller.args[2], "btnEight"));
        var btnNine = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "90%",
            "id": "btnNine",
            "isVisible": true,
            "right": "4%",
            "skin": "sknBtnKeybad",
            "text": "9",
            "width": "26%",
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
            "left": "1dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxKeypadRowFour"), extendConfig({}, controller.args[1], "flxKeypadRowFour"), extendConfig({}, controller.args[2], "flxKeypadRowFour"));
        flxKeypadRowFour.setDefaultUnit(kony.flex.DP);
        var btnZero = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "90%",
            "id": "btnZero",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "0",
            "width": "26%",
            "zIndex": 1
        }, controller.args[0], "btnZero"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnZero"), extendConfig({}, controller.args[2], "btnZero"));
        var imgClearKeypad = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "100%",
            "id": "imgClearKeypad",
            "isVisible": true,
            "right": "0%",
            "skin": "slImage",
            "src": "transparentbox.png",
            "top": "0dp",
            "width": "33%",
            "zIndex": 10
        }, controller.args[0], "imgClearKeypad"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgClearKeypad"), extendConfig({}, controller.args[2], "imgClearKeypad"));
        var imgClear = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "50%",
            "id": "imgClear",
            "isVisible": true,
            "right": "0%",
            "skin": "slImage",
            "src": "cancelkeypad.png",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "imgClear"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgClear"), extendConfig({}, controller.args[2], "imgClear"));
        var btnDecimalSeperator = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "focusSkin": "sknBtnKeybadFocus",
            "height": "90%",
            "id": "btnDecimalSeperator",
            "isVisible": false,
            "left": "4%",
            "skin": "sknBtnKeybad",
            "text": ",",
            "top": "0dp",
            "width": "26%",
            "zIndex": 1
        }, controller.args[0], "btnDecimalSeperator"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnDecimalSeperator"), extendConfig({}, controller.args[2], "btnDecimalSeperator"));
        flxKeypadRowFour.add(btnZero, imgClearKeypad, imgClear, btnDecimalSeperator);
        flxKeypad.add(flxKeypadRowOne, flxKeypadRowTwo, flxKeypadRowThree, flxKeypadRowFour);
        var flxVerticalSeparatorOne = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxVerticalSeparatorOne",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "33%",
            "isModalContainer": false,
            "skin": "sknFlxF5F6FB",
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
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "33%",
            "skin": "sknFlxF5F6FB",
            "top": "0dp",
            "width": "1dp",
            "zIndex": 5
        }, controller.args[0], "flxVerticalSeparatorTwo"), extendConfig({}, controller.args[1], "flxVerticalSeparatorTwo"), extendConfig({}, controller.args[2], "flxVerticalSeparatorTwo"));
        flxVerticalSeparatorTwo.setDefaultUnit(kony.flex.DP);
        flxVerticalSeparatorTwo.add();
        keypad.add(flxShadowTwo, flxKeypad, flxVerticalSeparatorOne, flxVerticalSeparatorTwo);
        return keypad;
    }
})