define(function() {
    return function(controller) {
        var saveNewPayee = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "saveNewPayee",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_dfaf52b2d163449d9c61361a8a7043cf(eventobject);
            },
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "saveNewPayee"), extendConfig({}, controller.args[1], "saveNewPayee"), extendConfig({}, controller.args[2], "saveNewPayee"));
        saveNewPayee.setDefaultUnit(kony.flex.DP);
        var flxHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlx1a98ff",
            "top": "2dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxHeader"), extendConfig({}, controller.args[1], "flxHeader"), extendConfig({}, controller.args[2], "flxHeader"));
        flxHeader.setDefaultUnit(kony.flex.DP);
        var imgBack = new kony.ui.Image2(extendConfig({
            "height": "30dp",
            "id": "imgBack",
            "isVisible": true,
            "left": "23dp",
            "skin": "slImage",
            "src": "backbutton.png",
            "top": "15dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgBack"), extendConfig({}, controller.args[2], "imgBack"));
        var lblHeaderLabel = new kony.ui.Label(extendConfig({
            "height": "50dp",
            "id": "lblHeaderLabel",
            "isVisible": true,
            "left": "17dp",
            "skin": "ICSknHeaderFFF",
            "text": "Payee Nickname",
            "textStyle": {},
            "top": "10dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblHeaderLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblHeaderLabel"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblHeaderLabel"));
        flxHeader.add(imgBack, lblHeaderLabel);
        var flxPayeeNickname = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxPayeeNickname",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "115dp",
            "width": "100%"
        }, controller.args[0], "flxPayeeNickname"), extendConfig({}, controller.args[1], "flxPayeeNickname"), extendConfig({}, controller.args[2], "flxPayeeNickname"));
        flxPayeeNickname.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "87.25%",
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMain"), extendConfig({}, controller.args[1], "flxMain"), extendConfig({}, controller.args[2], "flxMain"));
        flxMain.setDefaultUnit(kony.flex.DP);
        var flxDescription = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxDescription",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxDescription"), extendConfig({}, controller.args[1], "flxDescription"), extendConfig({}, controller.args[2], "flxDescription"));
        flxDescription.setDefaultUnit(kony.flex.DP);
        var lblDescription = new kony.ui.Label(extendConfig({
            "bottom": "18dp",
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblDescription",
            "isVisible": true,
            "left": "75dp",
            "skin": "ICSknLbl42424234px",
            "text": "Enter the payee nickname",
            "textStyle": {},
            "top": "13dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblDescription"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDescription"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDescription"));
        flxDescription.add(lblDescription);
        var flxSeperator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "7dp",
            "id": "flxSeperator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxSeparatora6a6a6",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSeperator"), extendConfig({}, controller.args[1], "flxSeperator"), extendConfig({}, controller.args[2], "flxSeperator"));
        flxSeperator.setDefaultUnit(kony.flex.DP);
        flxSeperator.add();
        var flxNickname = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50%",
            "id": "flxNickname",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxNickname"), extendConfig({}, controller.args[1], "flxNickname"), extendConfig({}, controller.args[2], "flxNickname"));
        flxNickname.setDefaultUnit(kony.flex.DP);
        var txtNickname = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50%",
            "focusSkin": "sknTbx424242SSPRegular28px",
            "height": "50dp",
            "id": "txtNickname",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "placeholder": "Enter Nickname",
            "secureTextEntry": false,
            "skin": "sknTbx424242SSPRegular28px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "50dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "txtNickname"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtNickname"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "showClearButton": true,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtNickname"));
        var btnContinue = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "centerX": "50%",
            "focusSkin": "ICSknBtn003E7535PX",
            "height": "50dp",
            "id": "btnContinue",
            "isVisible": true,
            "skin": "sknBtna0a0a0SSPReg26px",
            "text": "Continue",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "btnContinue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContinue"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnContinue"));
        flxNickname.add(txtNickname, btnContinue);
        flxMain.add(flxDescription, flxSeperator, flxNickname);
        flxPayeeNickname.add(flxMain);
        var flxSuccess = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "85%",
            "horizontalScrollIndicator": true,
            "id": "flxSuccess",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "top": "120dp",
            "verticalScrollIndicator": true,
            "width": "100%"
        }, controller.args[0], "flxSuccess"), extendConfig({}, controller.args[1], "flxSuccess"), extendConfig({}, controller.args[2], "flxSuccess"));
        flxSuccess.setDefaultUnit(kony.flex.DP);
        var flxMessage = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxMessage",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMessage"), extendConfig({}, controller.args[1], "flxMessage"), extendConfig({}, controller.args[2], "flxMessage"));
        flxMessage.setDefaultUnit(kony.flex.DP);
        var imgSuccess = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "70dp",
            "id": "imgSuccess",
            "isVisible": true,
            "skin": "slImage",
            "src": "success.png",
            "top": "11dp",
            "width": "70dp",
            "zIndex": 1
        }, controller.args[0], "imgSuccess"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgSuccess"), extendConfig({}, controller.args[2], "imgSuccess"));
        var lblSuccessTitle = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblSuccessTitle",
            "isVisible": true,
            "skin": "sknlbl000000SSPSemiBold24px",
            "text": "Saved Successfully",
            "textStyle": {},
            "top": "91dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblSuccessTitle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSuccessTitle"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSuccessTitle"));
        var lblSuccessDescription = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblSuccessDescription",
            "isVisible": true,
            "skin": "sknlbl000000SSP26px",
            "text": "Payee nickname saved successfully for future transactions.",
            "textStyle": {},
            "top": "145dp",
            "width": "85%",
            "zIndex": 1
        }, controller.args[0], "lblSuccessDescription"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSuccessDescription"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSuccessDescription"));
        flxMessage.add(imgSuccess, lblSuccessTitle, lblSuccessDescription);
        var flxSuccessButtons = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "0%",
            "clipBounds": true,
            "id": "flxSuccessButtons",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "reverseLayoutDirection": false,
            "left": "0dp",
            "isModalContainer": false,
            "top": "70%",
            "width": "100.00%",
            "zIndex": 1
        }, controller.args[0], "flxSuccessButtons"), extendConfig({}, controller.args[1], "flxSuccessButtons"), extendConfig({}, controller.args[2], "flxSuccessButtons"));
        flxSuccessButtons.setDefaultUnit(kony.flex.DP);
        var btnSuccessAction1 = new kony.ui.Button(extendConfig({
            "bottom": "0dp",
            "centerX": "50%",
            "focusSkin": "ICBtn003E7534px",
            "height": "50dp",
            "id": "btnSuccessAction1",
            "isVisible": true,
            "skin": "ICBtn003E7534px",
            "text": "New Transfer",
            "width": "330dp",
            "zIndex": 1
        }, controller.args[0], "btnSuccessAction1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSuccessAction1"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnSuccessAction1"));
        var btnSuccessAction2 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "ICBtn003E7534px",
            "height": "50dp",
            "id": "btnSuccessAction2",
            "isVisible": true,
            "skin": "ICSknBtnffffffRounded003e75SSP26px",
            "text": "Transfer Activities",
            "top": "20dp",
            "width": "330dp",
            "zIndex": 1
        }, controller.args[0], "btnSuccessAction2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSuccessAction2"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnSuccessAction2"));
        var btnSuccessAction3 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "ICBtn003E7534px",
            "height": "50dp",
            "id": "btnSuccessAction3",
            "isVisible": false,
            "skin": "ICSknBtnffffffRounded003e75SSP26px",
            "text": "Transfer Activities",
            "top": "10dp",
            "width": "330dp",
            "zIndex": 1
        }, controller.args[0], "btnSuccessAction3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSuccessAction3"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnSuccessAction3"));
        var btnSuccessAction4 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "ICBtn003E7534px",
            "height": "50dp",
            "id": "btnSuccessAction4",
            "isVisible": false,
            "skin": "ICSknBtnffffffRounded003e75SSP26px",
            "text": "Try again",
            "top": "8dp",
            "width": "330dp",
            "zIndex": 1
        }, controller.args[0], "btnSuccessAction4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSuccessAction4"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnSuccessAction4"));
        flxSuccessButtons.add(btnSuccessAction1, btnSuccessAction2, btnSuccessAction3, btnSuccessAction4);
        flxSuccess.add(flxMessage, flxSuccessButtons);
        var flxFail = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "85%",
            "id": "flxFail",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "119dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFail"), extendConfig({}, controller.args[1], "flxFail"), extendConfig({}, controller.args[2], "flxFail"));
        flxFail.setDefaultUnit(kony.flex.DP);
        var imgFail = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "70dp",
            "id": "imgFail",
            "isVisible": true,
            "skin": "slImage",
            "src": "failed.png",
            "top": "100dp",
            "width": "70dp",
            "zIndex": 1
        }, controller.args[0], "imgFail"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgFail"), extendConfig({}, controller.args[2], "imgFail"));
        var lblFailTitle = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblFailTitle",
            "isVisible": true,
            "skin": "sknlbl000000SSPSemiBold24px",
            "text": "Save Payee Failed",
            "textStyle": {},
            "top": "187dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblFailTitle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFailTitle"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblFailTitle"));
        var lblFailDescription = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblFailDescription",
            "isVisible": true,
            "skin": "sknlbl000000SSP26px",
            "text": "Save payee failed because of  server error.",
            "textStyle": {},
            "top": "240dp",
            "width": "65%",
            "zIndex": 1
        }, controller.args[0], "lblFailDescription"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFailDescription"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblFailDescription"));
        var flxFailureButtons = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "0dp",
            "clipBounds": true,
            "id": "flxFailureButtons",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "4dp",
            "isModalContainer": false,
            "top": "85%",
            "width": "100.00%",
            "zIndex": 1
        }, controller.args[0], "flxFailureButtons"), extendConfig({}, controller.args[1], "flxFailureButtons"), extendConfig({}, controller.args[2], "flxFailureButtons"));
        flxFailureButtons.setDefaultUnit(kony.flex.DP);
        var btnFailureAction1 = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "centerX": "50%",
            "height": "50dp",
            "id": "btnFailureAction1",
            "isVisible": true,
            "skin": "ICSknBtn003E75RoundedffffffSSP26px",
            "text": "Try Again",
            "top": "0dp",
            "width": "330dp",
            "zIndex": 1
        }, controller.args[0], "btnFailureAction1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnFailureAction1"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnFailureAction1"));
        flxFailureButtons.add(btnFailureAction1);
        flxFail.add(imgFail, lblFailTitle, lblFailDescription, flxFailureButtons);
        saveNewPayee.add(flxHeader, flxPayeeNickname, flxSuccess, flxFail);
        return saveNewPayee;
    }
})