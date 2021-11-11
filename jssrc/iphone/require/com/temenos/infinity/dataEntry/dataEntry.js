define(function() {
    return function(controller) {
        var dataEntry = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "dataEntry",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_c41d8b21cf794c9699bad0efb5bedd8e(eventobject);
            },
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "dataEntry"), extendConfig({}, controller.args[1], "dataEntry"), extendConfig({}, controller.args[2], "dataEntry"));
        dataEntry.setDefaultUnit(kony.flex.DP);
        var flxMainContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0%",
            "clipBounds": true,
            "id": "flxMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMainContainer"), extendConfig({}, controller.args[1], "flxMainContainer"), extendConfig({}, controller.args[2], "flxMainContainer"));
        flxMainContainer.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMain"), extendConfig({}, controller.args[1], "flxMain"), extendConfig({}, controller.args[2], "flxMain"));
        flxMain.setDefaultUnit(kony.flex.DP);
        var flxHeading = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxHeading",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxf8f8f8",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxHeading"), extendConfig({}, controller.args[1], "flxHeading"), extendConfig({}, controller.args[2], "flxHeading"));
        flxHeading.setDefaultUnit(kony.flex.DP);
        var lblHeading = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblHeading",
            "isVisible": true,
            "skin": "ICSknLblNew",
            "text": kony.i18n.getLocalizedString("kony.mb.BillPay.EnterAccNo"),
            "textStyle": {},
            "top": "4dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblHeading"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblHeading"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblHeading"));
        flxHeading.add(lblHeading);
        var flxError = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxError",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "19dp",
            "isModalContainer": false,
            "right": "19dp",
            "skin": "slFbox",
            "top": "60dp",
            "zIndex": 1
        }, controller.args[0], "flxError"), extendConfig({}, controller.args[1], "flxError"), extendConfig({}, controller.args[2], "flxError"));
        flxError.setDefaultUnit(kony.flex.DP);
        var lblErrorPrompt = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblErrorPrompt",
            "isVisible": true,
            "text": kony.i18n.getLocalizedString("kony.mb.BillPay.EnterAccNo"),
            "textStyle": {},
            "top": "4dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblErrorPrompt"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblErrorPrompt"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblErrorPrompt"));
        flxError.add(lblErrorPrompt);
        var flxCode = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxCode",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "61dp",
            "width": "80dp",
            "zIndex": 1
        }, controller.args[0], "flxCode"), extendConfig({}, controller.args[1], "flxCode"), extendConfig({}, controller.args[2], "flxCode"));
        flxCode.setDefaultUnit(kony.flex.DP);
        var lblCode = new kony.ui.Label(extendConfig({
            "id": "lblCode",
            "isVisible": true,
            "left": "10dp",
            "text": "Label",
            "textStyle": {},
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblCode"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCode"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblCode"));
        var tbxInputCode = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "defTextBoxFocus",
            "height": "40dp",
            "id": "tbxInputCode",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": 0,
            "right": 0,
            "secureTextEntry": false,
            "skin": "defTextBoxNormal",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "28dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "tbxInputCode"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxInputCode"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "placeholderSkin": "defTextBoxPlaceholder",
            "showClearButton": true,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "tbxInputCode"));
        var lblLookUp = new kony.ui.Label(extendConfig({
            "id": "lblLookUp",
            "isVisible": true,
            "left": "10dp",
            "text": "Label",
            "textStyle": {},
            "top": "70dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblLookUp"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLookUp"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblLookUp"));
        flxCode.add(lblCode, tbxInputCode, lblLookUp);
        var flxInputWord = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxInputWord",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "100dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": "61dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "flxInputWord"), extendConfig({}, controller.args[1], "flxInputWord"), extendConfig({}, controller.args[2], "flxInputWord"));
        flxInputWord.setDefaultUnit(kony.flex.DP);
        var lblWord = new kony.ui.Label(extendConfig({
            "id": "lblWord",
            "isVisible": true,
            "left": "10dp",
            "right": "0dp",
            "skin": "ICSknLabel72727215PxNew",
            "text": "Label",
            "textStyle": {},
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblWord"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblWord"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblWord"));
        var tbxInputWord = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "defTextBoxFocus",
            "height": "40dp",
            "id": "tbxInputWord",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": 0,
            "right": 0,
            "secureTextEntry": false,
            "skin": "defTextBoxNormal",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "28dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "tbxInputWord"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxInputWord"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "placeholderSkin": "ICSknTbxANew",
            "showClearButton": true,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "tbxInputWord"));
        flxInputWord.add(lblWord, tbxInputWord);
        var flxCheckbox = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxCheckbox",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknf9f9",
            "top": "154dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCheckbox"), extendConfig({}, controller.args[1], "flxCheckbox"), extendConfig({}, controller.args[2], "flxCheckbox"));
        flxCheckbox.setDefaultUnit(kony.flex.DP);
        var imgCheckbox = new kony.ui.Image2(extendConfig({
            "height": "18dp",
            "id": "imgCheckbox",
            "isVisible": true,
            "left": "20dp",
            "onTouchEnd": controller.AS_Image_j07ce39457be4124b1f265f90a34f40e,
            "skin": "slImage",
            "src": "remeberme_1.png",
            "top": "20dp",
            "width": "18dp",
            "zIndex": 1
        }, controller.args[0], "imgCheckbox"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgCheckbox"), extendConfig({}, controller.args[2], "imgCheckbox"));
        var lblCheckboxInfo = new kony.ui.Label(extendConfig({
            "id": "lblCheckboxInfo",
            "isVisible": true,
            "left": "10dp",
            "skin": "ICSknLblNew",
            "text": kony.i18n.getLocalizedString("kony.mb.BillPayEnterAccNo.CheckboxInfo"),
            "textStyle": {},
            "top": "20dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblCheckboxInfo"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCheckboxInfo"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblCheckboxInfo"));
        flxCheckbox.add(imgCheckbox, lblCheckboxInfo);
        var flxNotice = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxNotice",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "right": "10dp",
            "skin": "slFbox",
            "top": "220dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "flxNotice"), extendConfig({}, controller.args[1], "flxNotice"), extendConfig({}, controller.args[2], "flxNotice"));
        flxNotice.setDefaultUnit(kony.flex.DP);
        var tbxInputNotice = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "defTextBoxFocus",
            "height": "40dp",
            "id": "tbxInputNotice",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": 0,
            "right": 0,
            "secureTextEntry": false,
            "skin": "defTextBoxNormal",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "tbxInputNotice"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxInputNotice"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "placeholderSkin": "ICSknTbxANew",
            "showClearButton": true,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "tbxInputNotice"));
        flxNotice.add(tbxInputNotice);
        var btn1 = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "focusSkin": "ICSknBtn004B9526pxFocus",
            "height": "40dp",
            "id": "btn1",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknBtna0a0a0SSPReg26px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
            "zIndex": 1
        }, controller.args[0], "btn1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btn1"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btn1"));
        flxMain.add(flxHeading, flxError, flxCode, flxInputWord, flxCheckbox, flxNotice, btn1);
        flxMainContainer.add(flxMain);
        var flxPopup = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "10.50%",
            "id": "flxPopup",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "ICSknFlxf54b5e",
            "top": "0dp",
            "width": "100%",
            "zIndex": 200
        }, controller.args[0], "flxPopup"), extendConfig({}, controller.args[1], "flxPopup"), extendConfig({}, controller.args[2], "flxPopup"));
        flxPopup.setDefaultUnit(kony.flex.DP);
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
            "skin": "ICSknLblffffffSSPRegNew",
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
        flxPopup.add(flxPopupWrapper);
        var flxKeypad = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0%",
            "clipBounds": true,
            "height": "32%",
            "id": "flxKeypad",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxF5F6FB",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxKeypad"), extendConfig({}, controller.args[1], "flxKeypad"), extendConfig({}, controller.args[2], "flxKeypad"));
        flxKeypad.setDefaultUnit(kony.flex.DP);
        var flxKeypadWrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxKeypadWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxKeypadWrapper"), extendConfig({}, controller.args[1], "flxKeypadWrapper"), extendConfig({}, controller.args[2], "flxKeypadWrapper"));
        flxKeypadWrapper.setDefaultUnit(kony.flex.DP);
        var flxShadowTwo = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxShadowTwo",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxeNew",
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxShadowTwo"), extendConfig({}, controller.args[1], "flxShadowTwo"), extendConfig({}, controller.args[2], "flxShadowTwo"));
        flxShadowTwo.setDefaultUnit(kony.flex.DP);
        flxShadowTwo.add();
        var flxKeypadMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxKeypadMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxF5F6FB",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxKeypadMain"), extendConfig({}, controller.args[1], "flxKeypadMain"), extendConfig({}, controller.args[2], "flxKeypadMain"));
        flxKeypadMain.setDefaultUnit(kony.flex.DP);
        var flxKeypadRowOne = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "24.40%",
            "id": "flxKeypadRowOne",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxf9f9",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxKeypadRowOne"), extendConfig({}, controller.args[1], "flxKeypadRowOne"), extendConfig({}, controller.args[2], "flxKeypadRowOne"));
        flxKeypadRowOne.setDefaultUnit(kony.flex.DP);
        var btnOne = new kony.ui.Button(extendConfig({
            "focusSkin": "ICSknBtnKeybadFocus",
            "height": "100%",
            "id": "btnOne",
            "isVisible": true,
            "left": "0dp",
            "onClick": controller.AS_Button_ac53372c45d44f26ae412bca104cebfb,
            "skin": "ICSknBtnKeybad",
            "text": "1",
            "top": "0dp",
            "width": "33%",
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
            "focusSkin": "ICSknBtnKeybadFocus",
            "height": "100%",
            "id": "btnTwo",
            "isVisible": true,
            "onClick": controller.AS_Button_if2362e6624a415eb1f35d23b094013e,
            "skin": "ICSknBtnKeybad",
            "text": "2",
            "top": "0dp",
            "width": "33%",
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
            "focusSkin": "ICSknBtnKeybadFocus",
            "height": "100%",
            "id": "btnThree",
            "isVisible": true,
            "onClick": controller.AS_Button_f43b7e50ceb54219bc4118e888673a3c,
            "right": "0dp",
            "skin": "ICSknBtnKeybad",
            "text": "3",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnThree"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnThree"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnThree"));
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
            "skin": "ICSknFlxf9f9",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxKeypadRowTwo"), extendConfig({}, controller.args[1], "flxKeypadRowTwo"), extendConfig({}, controller.args[2], "flxKeypadRowTwo"));
        flxKeypadRowTwo.setDefaultUnit(kony.flex.DP);
        var btnFour = new kony.ui.Button(extendConfig({
            "focusSkin": "ICSknBtnKeybadFocus",
            "height": "100%",
            "id": "btnFour",
            "isVisible": true,
            "left": "0dp",
            "onClick": controller.AS_Button_feefe2c49cf54d73bd5576f788dff2dc,
            "skin": "ICSknBtnKeybad",
            "text": "4",
            "top": "0dp",
            "width": "33%",
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
            "focusSkin": "ICSknBtnKeybadFocus",
            "height": "100%",
            "id": "btnFive",
            "isVisible": true,
            "onClick": controller.AS_Button_f854305bb2314192bb4929a71642f618,
            "skin": "ICSknBtnKeybad",
            "text": "5",
            "top": "0dp",
            "width": "33%",
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
            "focusSkin": "ICSknBtnKeybadFocus",
            "height": "100%",
            "id": "btnSix",
            "isVisible": true,
            "onClick": controller.AS_Button_a47f0b37a5fa4362b4e10c40a6db2eb9,
            "right": "0dp",
            "skin": "ICSknBtnKeybad",
            "text": "6",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnSix"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSix"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnSix"));
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
            "skin": "ICSknFlxf9f9",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxKeypadRowThree"), extendConfig({}, controller.args[1], "flxKeypadRowThree"), extendConfig({}, controller.args[2], "flxKeypadRowThree"));
        flxKeypadRowThree.setDefaultUnit(kony.flex.DP);
        var btnSeven = new kony.ui.Button(extendConfig({
            "focusSkin": "ICSknBtnKeybadFocus",
            "height": "100%",
            "id": "btnSeven",
            "isVisible": true,
            "left": "0dp",
            "onClick": controller.AS_Button_g7a50f0cd2d24b0aa1eae8f92855d518,
            "skin": "ICSknBtnKeybad",
            "text": "7",
            "top": "0dp",
            "width": "33%",
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
            "focusSkin": "ICSknBtnKeybadFocus",
            "height": "100%",
            "id": "btnEight",
            "isVisible": true,
            "onClick": controller.AS_Button_a1a96bb3976c4f2da3785885cb76532c,
            "skin": "ICSknBtnKeybad",
            "text": "8",
            "top": "0dp",
            "width": "33%",
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
            "focusSkin": "ICSknBtnKeybadFocus",
            "height": "100%",
            "id": "btnNine",
            "isVisible": true,
            "onClick": controller.AS_Button_b03d4bade66e45beba12888925bca437,
            "right": "0dp",
            "skin": "ICSknBtnKeybad",
            "text": "9",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnNine"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNine"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnNine"));
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
            "skin": "ICSknFlxf9f9",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxKeypadRowFour"), extendConfig({}, controller.args[1], "flxKeypadRowFour"), extendConfig({}, controller.args[2], "flxKeypadRowFour"));
        flxKeypadRowFour.setDefaultUnit(kony.flex.DP);
        var btnZero = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "ICSknBtnKeybadFocus",
            "height": "100%",
            "id": "btnZero",
            "isVisible": true,
            "onClick": controller.AS_Button_gddd6ed5ad4441508e391c6e1d2f58b4,
            "skin": "ICSknBtnKeybad",
            "text": "0",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnZero"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnZero"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnZero"));
        var imgClearKeypad = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "100%",
            "id": "imgClearKeypad",
            "isVisible": true,
            "onTouchEnd": controller.AS_Image_b4b7bf19ad314be29ce6f421ded37a44,
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
            "focusSkin": "ICSknBtnKeybadFocus",
            "height": "100%",
            "id": "btnDecimalSeperator",
            "isVisible": false,
            "left": "0dp",
            "skin": "ICSknBtnKeybad",
            "text": ",",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "btnDecimalSeperator"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnDecimalSeperator"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnDecimalSeperator"));
        flxKeypadRowFour.add(btnZero, imgClearKeypad, imgClear, btnDecimalSeperator);
        flxKeypadMain.add(flxKeypadRowOne, flxKeypadRowTwo, flxKeypadRowThree, flxKeypadRowFour);
        var flxVerticalSeparatorOne = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxVerticalSeparatorOne",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "33%",
            "isModalContainer": false,
            "skin": "ICSknFlxF5F6FB",
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
            "skin": "ICSknFlxF5F6FB",
            "top": "0dp",
            "width": "1dp",
            "zIndex": 5
        }, controller.args[0], "flxVerticalSeparatorTwo"), extendConfig({}, controller.args[1], "flxVerticalSeparatorTwo"), extendConfig({}, controller.args[2], "flxVerticalSeparatorTwo"));
        flxVerticalSeparatorTwo.setDefaultUnit(kony.flex.DP);
        flxVerticalSeparatorTwo.add();
        flxKeypadWrapper.add(flxShadowTwo, flxKeypadMain, flxVerticalSeparatorOne, flxVerticalSeparatorTwo);
        flxKeypad.add(flxKeypadWrapper);
        dataEntry.add(flxMainContainer, flxPopup, flxKeypad);
        return dataEntry;
    }
})