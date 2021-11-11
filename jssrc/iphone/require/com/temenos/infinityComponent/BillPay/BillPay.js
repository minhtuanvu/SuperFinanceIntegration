define(function() {
    return function(controller) {
        var BillPay = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "BillPay",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_e496eb0297e74955ac117e8c2999c75b(eventobject);
            },
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "BillPay"), extendConfig({}, controller.args[1], "BillPay"), extendConfig({}, controller.args[2], "BillPay"));
        BillPay.setDefaultUnit(kony.flex.DP);
        var flxFromAccountMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxFromAccountMain",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFromAccountMain"), extendConfig({}, controller.args[1], "flxFromAccountMain"), extendConfig({}, controller.args[2], "flxFromAccountMain"));
        flxFromAccountMain.setDefaultUnit(kony.flex.DP);
        var flxHeader1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxHeader1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlx",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxHeader1"), extendConfig({}, controller.args[1], "flxHeader1"), extendConfig({}, controller.args[2], "flxHeader1"));
        flxHeader1.setDefaultUnit(kony.flex.DP);
        var flxFromHeaderTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "59dp",
            "id": "flxFromHeaderTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxFromHeaderTop"), extendConfig({}, controller.args[1], "flxFromHeaderTop"), extendConfig({}, controller.args[2], "flxFromHeaderTop"));
        flxFromHeaderTop.setDefaultUnit(kony.flex.DP);
        var flxFromBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "13dp",
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxFromBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "32dp",
            "width": "20%"
        }, controller.args[0], "flxFromBack"), extendConfig({}, controller.args[1], "flxFromBack"), extendConfig({}, controller.args[2], "flxFromBack"));
        flxFromBack.setDefaultUnit(kony.flex.DP);
        var imgFromBack = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgFromBack",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "backbutton.png",
            "width": "12dp",
            "zIndex": 1
        }, controller.args[0], "imgFromBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgFromBack"), extendConfig({}, controller.args[2], "imgFromBack"));
        flxFromBack.add(imgFromBack);
        var flxFromSectionTitle = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxFromSectionTitle",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxFromSectionTitle"), extendConfig({}, controller.args[1], "flxFromSectionTitle"), extendConfig({}, controller.args[2], "flxFromSectionTitle"));
        flxFromSectionTitle.setDefaultUnit(kony.flex.DP);
        var lblFromAccName = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblFromAccName",
            "isVisible": true,
            "skin": "ICSknLblFFFFFSSPSB34Px",
            "text": "From",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblFromAccName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFromAccName"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblFromAccName"));
        flxFromSectionTitle.add(lblFromAccName);
        var btnFromCancel = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "focusSkin": "ICSKnBtnffffff15px",
            "id": "btnFromCancel",
            "isVisible": true,
            "right": "20dp",
            "skin": "ICSKnBtnffffff15px",
            "text": "Cancel",
            "width": "65dp",
            "zIndex": 1
        }, controller.args[0], "btnFromCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnFromCancel"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnFromCancel"));
        flxFromHeaderTop.add(flxFromBack, flxFromSectionTitle, btnFromCancel);
        var flxFromSearch = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "10dp",
            "clipBounds": true,
            "height": "42dp",
            "id": "flxFromSearch",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "10dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFromSearch"), extendConfig({}, controller.args[1], "flxFromSearch"), extendConfig({}, controller.args[2], "flxFromSearch"));
        flxFromSearch.setDefaultUnit(kony.flex.DP);
        var flxSearch = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSearch",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxSearch"), extendConfig({}, controller.args[1], "flxSearch"), extendConfig({}, controller.args[2], "flxSearch"));
        flxSearch.setDefaultUnit(kony.flex.DP);
        var imgFromSearch = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgFromSearch",
            "isVisible": true,
            "left": "30dp",
            "skin": "slImage",
            "src": "search_2.png",
            "top": "10dp",
            "width": "20dp",
            "zIndex": 10
        }, controller.args[0], "imgFromSearch"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgFromSearch"), extendConfig({}, controller.args[2], "imgFromSearch"));
        var tbxSearch = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerY": "50%",
            "focusSkin": "defTextBoxFocus",
            "height": "100%",
            "id": "tbxSearch",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": kony.i18n.getLocalizedString("kony.mb.MM.FromAccountPlaceholder"),
            "secureTextEntry": false,
            "skin": "sknTbxFontSSPR727272BdrE9E9E9",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "tbxSearch"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [9, 0, 1, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxSearch"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "placeholderSkin": "defTextBoxPlaceholder",
            "showClearButton": false,
            "showCloseButton": false,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "tbxSearch"));
        var imgFromCloseIcon = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgFromCloseIcon",
            "isVisible": false,
            "right": "31dp",
            "skin": "slImage",
            "src": "closecircle.png",
            "width": "20dp",
            "zIndex": 10
        }, controller.args[0], "imgFromCloseIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgFromCloseIcon"), extendConfig({}, controller.args[2], "imgFromCloseIcon"));
        flxSearch.add(imgFromSearch, tbxSearch, imgFromCloseIcon);
        flxFromSearch.add(flxSearch);
        flxHeader1.add(flxFromHeaderTop, flxFromSearch);
        var flxFromDesc = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "55dp",
            "id": "flxFromDesc",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFromDesc"), extendConfig({}, controller.args[1], "flxFromDesc"), extendConfig({}, controller.args[2], "flxFromDesc"));
        flxFromDesc.setDefaultUnit(kony.flex.DP);
        var lblDesc = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "100%",
            "id": "lblDesc",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSkn42424245SPPRpx",
            "text": "Select an account to pay from",
            "textStyle": {},
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblDesc"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDesc"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDesc"));
        flxFromDesc.add(lblDesc);
        var flxSeparator43 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator43",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSeparator43"), extendConfig({}, controller.args[1], "flxSeparator43"), extendConfig({}, controller.args[2], "flxSeparator43"));
        flxSeparator43.setDefaultUnit(kony.flex.DP);
        flxSeparator43.add();
        var segAccounts = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "data": [
                [{
                        "imgArrow": "arrowup.png",
                        "lblHeader": "Personal Accounts(3)"
                    },
                    [{
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }]
                ],
                [{
                        "imgArrow": "arrowup.png",
                        "lblHeader": "Personal Accounts(3)"
                    },
                    [{
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }, {
                        "imgAccount": "personalicon.png",
                        "lblField1": "Account Nick Name..1222",
                        "lblField2": " €5.765,08",
                        "lblField3": "Checking",
                        "lblField4": "Available Balance"
                    }]
                ]
            ],
            "groupCells": false,
            "height": "600dp",
            "id": "segAccounts",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "seg2Normal",
            "rowTemplate": "flxSelectAccountBillPay",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "sectionHeaderTemplate": "flxHeaderAccount",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": false,
            "separatorThickness": 0,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxAccount": "flxAccount",
                "flxAccountType": "flxAccountType",
                "flxBank": "flxBank",
                "flxBottomShadow": "flxBottomShadow",
                "flxHeader": "flxHeader",
                "flxHeaderAccount": "flxHeaderAccount",
                "flxHeaderShadow": "flxHeaderShadow",
                "flxImage": "flxImage",
                "flxMain": "flxMain",
                "flxSelectAccountBillPay": "flxSelectAccountBillPay",
                "flxSeparator": "flxSeparator",
                "imgAccount": "imgAccount",
                "imgArrow": "imgArrow",
                "lblField1": "lblField1",
                "lblField2": "lblField2",
                "lblField3": "lblField3",
                "lblField4": "lblField4",
                "lblHeader": "lblHeader"
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "segAccounts"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segAccounts"), extendConfig({
            "bounces": true,
            "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
            "enableDictionary": false,
            "indicator": constants.SEGUI_NONE,
            "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
            "showProgressIndicator": true
        }, controller.args[2], "segAccounts"));
        var flxNoRecords = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "height": "220dp",
            "id": "flxNoRecords",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "3dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxNoRecords"), extendConfig({}, controller.args[1], "flxNoRecords"), extendConfig({}, controller.args[2], "flxNoRecords"));
        flxNoRecords.setDefaultUnit(kony.flex.DP);
        var lblRecords = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblRecords",
            "isVisible": true,
            "left": "97dp",
            "skin": "slLabel",
            "text": "No Records found",
            "textStyle": {},
            "top": "72dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblRecords"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRecords"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblRecords"));
        flxNoRecords.add(lblRecords);
        flxFromAccountMain.add(flxHeader1, flxFromDesc, flxSeparator43, segAccounts, flxNoRecords);
        var flxBillRecipient = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxBillRecipient",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxBillRecipient"), extendConfig({}, controller.args[1], "flxBillRecipient"), extendConfig({}, controller.args[2], "flxBillRecipient"));
        flxBillRecipient.setDefaultUnit(kony.flex.DP);
        var flxHeaderMainBillRecipient = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "59dp",
            "id": "flxHeaderMainBillRecipient",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlx",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxHeaderMainBillRecipient"), extendConfig({}, controller.args[1], "flxHeaderMainBillRecipient"), extendConfig({}, controller.args[2], "flxHeaderMainBillRecipient"));
        flxHeaderMainBillRecipient.setDefaultUnit(kony.flex.DP);
        var flxHeaderBillRecipient = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxHeaderBillRecipient",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxHeaderBillRecipient"), extendConfig({}, controller.args[1], "flxHeaderBillRecipient"), extendConfig({}, controller.args[2], "flxHeaderBillRecipient"));
        flxHeaderBillRecipient.setDefaultUnit(kony.flex.DP);
        var flxHeaderBackBillRecipient = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxHeaderBackBillRecipient",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "10%"
        }, controller.args[0], "flxHeaderBackBillRecipient"), extendConfig({}, controller.args[1], "flxHeaderBackBillRecipient"), extendConfig({}, controller.args[2], "flxHeaderBackBillRecipient"));
        flxHeaderBackBillRecipient.setDefaultUnit(kony.flex.DP);
        var imgBackBillRecipient = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgBackBillRecipient",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "backbutton.png",
            "width": "12dp",
            "zIndex": 1
        }, controller.args[0], "imgBackBillRecipient"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgBackBillRecipient"), extendConfig({}, controller.args[2], "imgBackBillRecipient"));
        flxHeaderBackBillRecipient.add(imgBackBillRecipient);
        var flxHeaderTitleBillRecipient = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxHeaderTitleBillRecipient",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "10dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "65%"
        }, controller.args[0], "flxHeaderTitleBillRecipient"), extendConfig({}, controller.args[1], "flxHeaderTitleBillRecipient"), extendConfig({}, controller.args[2], "flxHeaderTitleBillRecipient"));
        flxHeaderTitleBillRecipient.setDefaultUnit(kony.flex.DP);
        var lblBillRecipient = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblBillRecipient",
            "isVisible": true,
            "skin": "ICSknLblFFFFFSSPSB34Px",
            "text": kony.i18n.getLocalizedString("i18n.BillPay.BillRecipient"),
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblBillRecipient"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBillRecipient"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblBillRecipient"));
        flxHeaderTitleBillRecipient.add(lblBillRecipient);
        var btnCancelBillRecipient = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "focusSkin": "ICSKnBtnffffff15px",
            "id": "btnCancelBillRecipient",
            "isVisible": true,
            "right": "20dp",
            "skin": "ICSKnBtnffffff15px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
            "width": "58dp",
            "zIndex": 1
        }, controller.args[0], "btnCancelBillRecipient"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnCancelBillRecipient"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnCancelBillRecipient"));
        flxHeaderBillRecipient.add(flxHeaderBackBillRecipient, flxHeaderTitleBillRecipient, btnCancelBillRecipient);
        flxHeaderMainBillRecipient.add(flxHeaderBillRecipient);
        var flxSelectBillRecipient = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "55dp",
            "id": "flxSelectBillRecipient",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSelectBillRecipient"), extendConfig({}, controller.args[1], "flxSelectBillRecipient"), extendConfig({}, controller.args[2], "flxSelectBillRecipient"));
        flxSelectBillRecipient.setDefaultUnit(kony.flex.DP);
        var lblSelectBillRecipient = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "100%",
            "id": "lblSelectBillRecipient",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSkn42424245SPPRpx",
            "text": "Select who the bill recipient is",
            "textStyle": {},
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblSelectBillRecipient"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSelectBillRecipient"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSelectBillRecipient"));
        flxSelectBillRecipient.add(lblSelectBillRecipient);
        var flxBillRecipientFromDetail = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "72dp",
            "id": "flxBillRecipientFromDetail",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknflx424242",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxBillRecipientFromDetail"), extendConfig({}, controller.args[1], "flxBillRecipientFromDetail"), extendConfig({}, controller.args[2], "flxBillRecipientFromDetail"));
        flxBillRecipientFromDetail.setDefaultUnit(kony.flex.DP);
        var lblBrFrom = new kony.ui.Label(extendConfig({
            "id": "lblBrFrom",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl727272SSPReg34px",
            "text": "From:",
            "textStyle": {},
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 10
        }, controller.args[0], "lblBrFrom"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBrFrom"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblBrFrom"));
        var flxBrSubvalue = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "55.44%",
            "id": "flxBrSubvalue",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "51dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "17dp",
            "width": "77.07%"
        }, controller.args[0], "flxBrSubvalue"), extendConfig({}, controller.args[1], "flxBrSubvalue"), extendConfig({}, controller.args[2], "flxBrSubvalue"));
        flxBrSubvalue.setDefaultUnit(kony.flex.DP);
        var flxBrSubValueWrapper1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20dp",
            "id": "flxBrSubValueWrapper1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": 5,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxBrSubValueWrapper1"), extendConfig({}, controller.args[1], "flxBrSubValueWrapper1"), extendConfig({}, controller.args[2], "flxBrSubValueWrapper1"));
        flxBrSubValueWrapper1.setDefaultUnit(kony.flex.DP);
        var lblBrSubValue1 = new kony.ui.Label(extendConfig({
            "id": "lblBrSubValue1",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknlbl4176a4SSPSB18px",
            "text": "Account Nick Name...123",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblBrSubValue1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBrSubValue1"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblBrSubValue1"));
        flxBrSubValueWrapper1.add(lblBrSubValue1);
        var flxBrSubValueWrapper2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxBrSubValueWrapper2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": "5dp",
            "skin": "slFbox",
            "top": "3dp",
            "width": "100%"
        }, controller.args[0], "flxBrSubValueWrapper2"), extendConfig({}, controller.args[1], "flxBrSubValueWrapper2"), extendConfig({}, controller.args[2], "flxBrSubValueWrapper2"));
        flxBrSubValueWrapper2.setDefaultUnit(kony.flex.DP);
        var lblBrSubValue2Value = new kony.ui.Label(extendConfig({
            "id": "lblBrSubValue2Value",
            "isVisible": true,
            "left": "5dp",
            "right": 0,
            "skin": "ICSknlblSSP72727213px",
            "text": "12344",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblBrSubValue2Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBrSubValue2Value"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblBrSubValue2Value"));
        var lblBrSubValue2Label = new kony.ui.Label(extendConfig({
            "id": "lblBrSubValue2Label",
            "isVisible": true,
            "left": 10,
            "right": "0dp",
            "skin": "ICSknlblSSP72727213px",
            "text": "Available Balance:",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblBrSubValue2Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBrSubValue2Label"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblBrSubValue2Label"));
        flxBrSubValueWrapper2.add(lblBrSubValue2Value, lblBrSubValue2Label);
        flxBrSubvalue.add(flxBrSubValueWrapper1, flxBrSubValueWrapper2);
        var flxBrChevron = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxBrChevron",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "11%",
            "zIndex": 2
        }, controller.args[0], "flxBrChevron"), extendConfig({}, controller.args[1], "flxBrChevron"), extendConfig({}, controller.args[2], "flxBrChevron"));
        flxBrChevron.setDefaultUnit(kony.flex.DP);
        var imgBrCheveron = new kony.ui.Image2(extendConfig({
            "centerY": "50.00%",
            "height": "20dp",
            "id": "imgBrCheveron",
            "isVisible": true,
            "right": "19dp",
            "skin": "slImage",
            "src": "chevron.png",
            "top": "0dp",
            "width": "15dp",
            "zIndex": 2
        }, controller.args[0], "imgBrCheveron"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgBrCheveron"), extendConfig({}, controller.args[2], "imgBrCheveron"));
        flxBrChevron.add(imgBrCheveron);
        flxBillRecipientFromDetail.add(lblBrFrom, flxBrSubvalue, flxBrChevron);
        var flxShadowBillRecipient = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "5dp",
            "id": "flxShadowBillRecipient",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxSeparatora6a6a6",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxShadowBillRecipient"), extendConfig({}, controller.args[1], "flxShadowBillRecipient"), extendConfig({}, controller.args[2], "flxShadowBillRecipient"));
        flxShadowBillRecipient.setDefaultUnit(kony.flex.DP);
        flxShadowBillRecipient.add();
        var btnBillRecipient = new kony.ui.Button(extendConfig({
            "focusSkin": "ICSknBtnF6F6F615px",
            "height": "50dp",
            "id": "btnBillRecipient",
            "isVisible": false,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknBtnF6F6F615px",
            "text": "I am the bill recipient",
            "top": "20dp",
            "width": "90%"
        }, controller.args[0], "btnBillRecipient"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnBillRecipient"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnBillRecipient"));
        var btnSomeoneElseBill = new kony.ui.Button(extendConfig({
            "focusSkin": "ICSknBtn42424215px",
            "height": "50dp",
            "id": "btnSomeoneElseBill",
            "isVisible": false,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknBtn42424215px",
            "text": "I am paying someone elses bill",
            "top": "0",
            "width": "90%"
        }, controller.args[0], "btnSomeoneElseBill"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSomeoneElseBill"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnSomeoneElseBill"));
        var segSelectBillRecipient = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "data": [{
                "lblFrequency": kony.i18n.getLocalizedString("i18n.BillPay.SelectRecipient.option1")
            }, {
                "lblFrequency": kony.i18n.getLocalizedString("i18n.BillPay.SelectRecipient.option2")
            }],
            "groupCells": false,
            "height": "75%",
            "id": "segSelectBillRecipient",
            "isVisible": true,
            "left": "0",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "seg2Normal",
            "rowTemplate": "flxFrequency",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": false,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "20dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxFrequency": "flxFrequency",
                "flxMain": "flxMain",
                "lblFrequency": "lblFrequency"
            },
            "width": "100%"
        }, controller.args[0], "segSelectBillRecipient"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segSelectBillRecipient"), extendConfig({
            "bounces": true,
            "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
            "enableDictionary": false,
            "indicator": constants.SEGUI_NONE,
            "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
            "showProgressIndicator": true
        }, controller.args[2], "segSelectBillRecipient"));
        flxBillRecipient.add(flxHeaderMainBillRecipient, flxSelectBillRecipient, flxBillRecipientFromDetail, flxShadowBillRecipient, btnBillRecipient, btnSomeoneElseBill, segSelectBillRecipient);
        var flxMainPayeeDetails = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMainPayeeDetails",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "flxMainPayeeDetails"), extendConfig({}, controller.args[1], "flxMainPayeeDetails"), extendConfig({}, controller.args[2], "flxMainPayeeDetails"));
        flxMainPayeeDetails.setDefaultUnit(kony.flex.DP);
        var flxHeaderComp = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "59dp",
            "id": "flxHeaderComp",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlx",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxHeaderComp"), extendConfig({}, controller.args[1], "flxHeaderComp"), extendConfig({}, controller.args[2], "flxHeaderComp"));
        flxHeaderComp.setDefaultUnit(kony.flex.DP);
        var flxHeaderTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxHeaderTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxHeaderTop"), extendConfig({}, controller.args[1], "flxHeaderTop"), extendConfig({}, controller.args[2], "flxHeaderTop"));
        flxHeaderTop.setDefaultUnit(kony.flex.DP);
        var flxVerifyBackPayeeDetails = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxVerifyBackPayeeDetails",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "10%"
        }, controller.args[0], "flxVerifyBackPayeeDetails"), extendConfig({}, controller.args[1], "flxVerifyBackPayeeDetails"), extendConfig({}, controller.args[2], "flxVerifyBackPayeeDetails"));
        flxVerifyBackPayeeDetails.setDefaultUnit(kony.flex.DP);
        var imgVerifyBackPayeeDetails = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgVerifyBackPayeeDetails",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "backbutton.png",
            "width": "12dp",
            "zIndex": 1
        }, controller.args[0], "imgVerifyBackPayeeDetails"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgVerifyBackPayeeDetails"), extendConfig({}, controller.args[2], "imgVerifyBackPayeeDetails"));
        flxVerifyBackPayeeDetails.add(imgVerifyBackPayeeDetails);
        var flxVerifyNamePayeeDetails = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxVerifyNamePayeeDetails",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "10dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "70%"
        }, controller.args[0], "flxVerifyNamePayeeDetails"), extendConfig({}, controller.args[1], "flxVerifyNamePayeeDetails"), extendConfig({}, controller.args[2], "flxVerifyNamePayeeDetails"));
        flxVerifyNamePayeeDetails.setDefaultUnit(kony.flex.DP);
        var lblVerifyNamePayeeDetails = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblVerifyNamePayeeDetails",
            "isVisible": true,
            "skin": "ICSknLblFFFFFSSPSB34Px",
            "text": "Bill Payer’s Details",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblVerifyNamePayeeDetails"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblVerifyNamePayeeDetails"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblVerifyNamePayeeDetails"));
        flxVerifyNamePayeeDetails.add(lblVerifyNamePayeeDetails);
        var btnVerifyCancelPayeeDetails = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "focusSkin": "ICSKnBtnffffff15px",
            "height": "20dp",
            "id": "btnVerifyCancelPayeeDetails",
            "isVisible": true,
            "right": "20dp",
            "skin": "ICSKnBtnffffff15px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "btnVerifyCancelPayeeDetails"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnVerifyCancelPayeeDetails"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnVerifyCancelPayeeDetails"));
        flxHeaderTop.add(flxVerifyBackPayeeDetails, flxVerifyNamePayeeDetails, btnVerifyCancelPayeeDetails);
        flxHeaderComp.add(flxHeaderTop);
        var FlxHeaderPayeeDetails = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "FlxHeaderPayeeDetails",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "FlxHeaderPayeeDetails"), extendConfig({}, controller.args[1], "FlxHeaderPayeeDetails"), extendConfig({}, controller.args[2], "FlxHeaderPayeeDetails"));
        FlxHeaderPayeeDetails.setDefaultUnit(kony.flex.DP);
        var lblConfirmRecievedBill = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lblConfirmRecievedBill",
            "isVisible": true,
            "left": "0",
            "skin": "ICSkn42424245SPPRpx",
            "text": "Confirm the bill payer’s details",
            "textStyle": {},
            "width": "100%"
        }, controller.args[0], "lblConfirmRecievedBill"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblConfirmRecievedBill"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblConfirmRecievedBill"));
        FlxHeaderPayeeDetails.add(lblConfirmRecievedBill);
        var flxBillPayFromDetail = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "72dp",
            "id": "flxBillPayFromDetail",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknflx424242",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxBillPayFromDetail"), extendConfig({}, controller.args[1], "flxBillPayFromDetail"), extendConfig({}, controller.args[2], "flxBillPayFromDetail"));
        flxBillPayFromDetail.setDefaultUnit(kony.flex.DP);
        var lblBpdFrom = new kony.ui.Label(extendConfig({
            "id": "lblBpdFrom",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl727272SSPReg34px",
            "text": "From:",
            "textStyle": {},
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 10
        }, controller.args[0], "lblBpdFrom"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBpdFrom"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblBpdFrom"));
        var flxBpdSubvalue = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "55.44%",
            "id": "flxBpdSubvalue",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "51dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "17dp",
            "width": "77.07%"
        }, controller.args[0], "flxBpdSubvalue"), extendConfig({}, controller.args[1], "flxBpdSubvalue"), extendConfig({}, controller.args[2], "flxBpdSubvalue"));
        flxBpdSubvalue.setDefaultUnit(kony.flex.DP);
        var flxBpdSubValueWrapper1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20dp",
            "id": "flxBpdSubValueWrapper1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": 5,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxBpdSubValueWrapper1"), extendConfig({}, controller.args[1], "flxBpdSubValueWrapper1"), extendConfig({}, controller.args[2], "flxBpdSubValueWrapper1"));
        flxBpdSubValueWrapper1.setDefaultUnit(kony.flex.DP);
        var lblBpdSubValue1 = new kony.ui.Label(extendConfig({
            "id": "lblBpdSubValue1",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknlbl4176a4SSPSB18px",
            "text": "Account Nick Name...123",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblBpdSubValue1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBpdSubValue1"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblBpdSubValue1"));
        flxBpdSubValueWrapper1.add(lblBpdSubValue1);
        var flxBpdSubValueWrapper2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxBpdSubValueWrapper2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": "5dp",
            "skin": "slFbox",
            "top": "3dp",
            "width": "100%"
        }, controller.args[0], "flxBpdSubValueWrapper2"), extendConfig({}, controller.args[1], "flxBpdSubValueWrapper2"), extendConfig({}, controller.args[2], "flxBpdSubValueWrapper2"));
        flxBpdSubValueWrapper2.setDefaultUnit(kony.flex.DP);
        var lblBpdSubValue2Value = new kony.ui.Label(extendConfig({
            "id": "lblBpdSubValue2Value",
            "isVisible": true,
            "left": "5dp",
            "right": 0,
            "skin": "ICSknlblSSP72727213px",
            "text": "12344",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblBpdSubValue2Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBpdSubValue2Value"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblBpdSubValue2Value"));
        var lblBpdSubValue2Label = new kony.ui.Label(extendConfig({
            "id": "lblBpdSubValue2Label",
            "isVisible": true,
            "left": 10,
            "right": "0dp",
            "skin": "ICSknlblSSP72727213px",
            "text": "Available Balance:",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblBpdSubValue2Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBpdSubValue2Label"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblBpdSubValue2Label"));
        flxBpdSubValueWrapper2.add(lblBpdSubValue2Value, lblBpdSubValue2Label);
        flxBpdSubvalue.add(flxBpdSubValueWrapper1, flxBpdSubValueWrapper2);
        var flxBpdChevron = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxBpdChevron",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "11%",
            "zIndex": 2
        }, controller.args[0], "flxBpdChevron"), extendConfig({}, controller.args[1], "flxBpdChevron"), extendConfig({}, controller.args[2], "flxBpdChevron"));
        flxBpdChevron.setDefaultUnit(kony.flex.DP);
        var imgBpdCheveron = new kony.ui.Image2(extendConfig({
            "centerY": "50.00%",
            "height": "20dp",
            "id": "imgBpdCheveron",
            "isVisible": true,
            "right": "19dp",
            "skin": "slImage",
            "src": "chevron.png",
            "top": "0dp",
            "width": "15dp",
            "zIndex": 2
        }, controller.args[0], "imgBpdCheveron"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgBpdCheveron"), extendConfig({}, controller.args[2], "imgBpdCheveron"));
        flxBpdChevron.add(imgBpdCheveron);
        flxBillPayFromDetail.add(lblBpdFrom, flxBpdSubvalue, flxBpdChevron);
        var flxSeparatorShadow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "20dp",
            "clipBounds": false,
            "height": "5dp",
            "id": "flxSeparatorShadow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxSeparatora6a6a6",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "flxSeparatorShadow"), extendConfig({}, controller.args[1], "flxSeparatorShadow"), extendConfig({}, controller.args[2], "flxSeparatorShadow"));
        flxSeparatorShadow.setDefaultUnit(kony.flex.DP);
        flxSeparatorShadow.add();
        var flxBodyPayeeDetails = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "75%",
            "id": "flxBodyPayeeDetails",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": "3dp",
            "width": "90%"
        }, controller.args[0], "flxBodyPayeeDetails"), extendConfig({}, controller.args[1], "flxBodyPayeeDetails"), extendConfig({}, controller.args[2], "flxBodyPayeeDetails"));
        flxBodyPayeeDetails.setDefaultUnit(kony.flex.DP);
        var flxDetails = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "145dp",
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "horizontalScrollIndicator": true,
            "id": "flxDetails",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "slFSbox",
            "top": "0",
            "verticalScrollIndicator": true,
            "width": "100%"
        }, controller.args[0], "flxDetails"), extendConfig({}, controller.args[1], "flxDetails"), extendConfig({}, controller.args[2], "flxDetails"));
        flxDetails.setDefaultUnit(kony.flex.DP);
        var flxPayerNamepayeeDetails = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "10dp",
            "clipBounds": true,
            "id": "flxPayerNamepayeeDetails",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "flxPayerNamepayeeDetails"), extendConfig({}, controller.args[1], "flxPayerNamepayeeDetails"), extendConfig({}, controller.args[2], "flxPayerNamepayeeDetails"));
        flxPayerNamepayeeDetails.setDefaultUnit(kony.flex.DP);
        var lblPayerNameKeypayeeDetails = new kony.ui.Label(extendConfig({
            "id": "lblPayerNameKeypayeeDetails",
            "isVisible": true,
            "left": "0",
            "skin": "ICSknLbl72727217pxSSPR",
            "text": "Payer Name:",
            "textStyle": {},
            "top": "0",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblPayerNameKeypayeeDetails"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPayerNameKeypayeeDetails"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblPayerNameKeypayeeDetails"));
        var lblPayerNameValue = new kony.ui.Label(extendConfig({
            "id": "lblPayerNameValue",
            "isVisible": true,
            "left": "0",
            "skin": "ICSkn424242SPPR45px",
            "text": "Cristiano Burlano",
            "textStyle": {},
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblPayerNameValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPayerNameValue"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblPayerNameValue"));
        flxPayerNamepayeeDetails.add(lblPayerNameKeypayeeDetails, lblPayerNameValue);
        var lblSeparator1payeeDetails = new kony.ui.Label(extendConfig({
            "height": "1dp",
            "id": "lblSeparator1payeeDetails",
            "isVisible": false,
            "left": "0",
            "skin": "lblSeparator",
            "textStyle": {},
            "top": "0",
            "width": "100%"
        }, controller.args[0], "lblSeparator1payeeDetails"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSeparator1payeeDetails"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSeparator1payeeDetails"));
        var flxSeparatorName = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparatorName",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "ICSknFlxE3E3E31PX",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "flxSeparatorName"), extendConfig({}, controller.args[1], "flxSeparatorName"), extendConfig({}, controller.args[2], "flxSeparatorName"));
        flxSeparatorName.setDefaultUnit(kony.flex.DP);
        flxSeparatorName.add();
        var flxAddresspayeeDetails = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "10dp",
            "clipBounds": true,
            "id": "flxAddresspayeeDetails",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "10dp",
            "width": "100%"
        }, controller.args[0], "flxAddresspayeeDetails"), extendConfig({}, controller.args[1], "flxAddresspayeeDetails"), extendConfig({}, controller.args[2], "flxAddresspayeeDetails"));
        flxAddresspayeeDetails.setDefaultUnit(kony.flex.DP);
        var lblAddressKeypayeeDetails = new kony.ui.Label(extendConfig({
            "id": "lblAddressKeypayeeDetails",
            "isVisible": true,
            "left": "0",
            "skin": "ICSknLbl72727217pxSSPR",
            "text": "Address:",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblAddressKeypayeeDetails"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddressKeypayeeDetails"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAddressKeypayeeDetails"));
        var lblAddressValue = new kony.ui.Label(extendConfig({
            "id": "lblAddressValue",
            "isVisible": true,
            "left": "0",
            "skin": "ICSkn424242SPPR45px",
            "text": "ia della Berleta 4",
            "textStyle": {},
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblAddressValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddressValue"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAddressValue"));
        flxAddresspayeeDetails.add(lblAddressKeypayeeDetails, lblAddressValue);
        var flxSeparatorAddress = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparatorAddress",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "ICSknFlxE3E3E31PX",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "flxSeparatorAddress"), extendConfig({}, controller.args[1], "flxSeparatorAddress"), extendConfig({}, controller.args[2], "flxSeparatorAddress"));
        flxSeparatorAddress.setDefaultUnit(kony.flex.DP);
        flxSeparatorAddress.add();
        var lblSeparator2payeeDetails = new kony.ui.Label(extendConfig({
            "height": "1dp",
            "id": "lblSeparator2payeeDetails",
            "isVisible": false,
            "left": "0",
            "skin": "lblSeparator",
            "text": "Label",
            "textStyle": {},
            "top": "0",
            "width": "100%"
        }, controller.args[0], "lblSeparator2payeeDetails"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSeparator2payeeDetails"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSeparator2payeeDetails"));
        var flxPostalpayeeDetails = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "10dp",
            "clipBounds": true,
            "id": "flxPostalpayeeDetails",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "10dp",
            "width": "100%"
        }, controller.args[0], "flxPostalpayeeDetails"), extendConfig({}, controller.args[1], "flxPostalpayeeDetails"), extendConfig({}, controller.args[2], "flxPostalpayeeDetails"));
        flxPostalpayeeDetails.setDefaultUnit(kony.flex.DP);
        var lblPostalCodeKeypayeeDetails = new kony.ui.Label(extendConfig({
            "id": "lblPostalCodeKeypayeeDetails",
            "isVisible": true,
            "left": "0",
            "skin": "ICSknLbl72727217pxSSPR",
            "text": "Postal Code:",
            "textStyle": {},
            "top": "0",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblPostalCodeKeypayeeDetails"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPostalCodeKeypayeeDetails"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblPostalCodeKeypayeeDetails"));
        var lblPostalCodeValuePayeeDetails = new kony.ui.Label(extendConfig({
            "id": "lblPostalCodeValuePayeeDetails",
            "isVisible": true,
            "left": "0",
            "skin": "ICSkn424242SPPR45px",
            "text": "80365",
            "textStyle": {},
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblPostalCodeValuePayeeDetails"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPostalCodeValuePayeeDetails"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblPostalCodeValuePayeeDetails"));
        flxPostalpayeeDetails.add(lblPostalCodeKeypayeeDetails, lblPostalCodeValuePayeeDetails);
        var flxSeparatorPostalCode = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparatorPostalCode",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "ICSknFlxE3E3E31PX",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "flxSeparatorPostalCode"), extendConfig({}, controller.args[1], "flxSeparatorPostalCode"), extendConfig({}, controller.args[2], "flxSeparatorPostalCode"));
        flxSeparatorPostalCode.setDefaultUnit(kony.flex.DP);
        flxSeparatorPostalCode.add();
        var lblSeparator3payeeDetails = new kony.ui.Label(extendConfig({
            "height": "1dp",
            "id": "lblSeparator3payeeDetails",
            "isVisible": false,
            "left": "0",
            "skin": "lblSeparator",
            "text": "Label",
            "textStyle": {},
            "top": "0",
            "width": "100%"
        }, controller.args[0], "lblSeparator3payeeDetails"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSeparator3payeeDetails"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSeparator3payeeDetails"));
        var flxLocationpayeeDetails = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "10dp",
            "clipBounds": true,
            "id": "flxLocationpayeeDetails",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "10dp",
            "width": "100%"
        }, controller.args[0], "flxLocationpayeeDetails"), extendConfig({}, controller.args[1], "flxLocationpayeeDetails"), extendConfig({}, controller.args[2], "flxLocationpayeeDetails"));
        flxLocationpayeeDetails.setDefaultUnit(kony.flex.DP);
        var lblLocationKeypayeeDetails = new kony.ui.Label(extendConfig({
            "id": "lblLocationKeypayeeDetails",
            "isVisible": true,
            "left": "0",
            "skin": "ICSknLbl72727217pxSSPR",
            "text": "Location:",
            "textStyle": {},
            "top": "0",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblLocationKeypayeeDetails"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLocationKeypayeeDetails"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblLocationKeypayeeDetails"));
        var lblLocationValue = new kony.ui.Label(extendConfig({
            "id": "lblLocationValue",
            "isVisible": true,
            "left": "0",
            "skin": "ICSkn424242SPPR45px",
            "text": "Bologna",
            "textStyle": {},
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblLocationValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLocationValue"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblLocationValue"));
        flxLocationpayeeDetails.add(lblLocationKeypayeeDetails, lblLocationValue);
        var flxSeparatorLocation = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparatorLocation",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "ICSknFlxE3E3E31PX",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "flxSeparatorLocation"), extendConfig({}, controller.args[1], "flxSeparatorLocation"), extendConfig({}, controller.args[2], "flxSeparatorLocation"));
        flxSeparatorLocation.setDefaultUnit(kony.flex.DP);
        flxSeparatorLocation.add();
        var lblSeparator4payeeDetails = new kony.ui.Label(extendConfig({
            "height": "1dp",
            "id": "lblSeparator4payeeDetails",
            "isVisible": false,
            "left": "0",
            "skin": "lblSeparator",
            "text": "Label",
            "textStyle": {},
            "top": "0",
            "width": "100%"
        }, controller.args[0], "lblSeparator4payeeDetails"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSeparator4payeeDetails"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSeparator4payeeDetails"));
        var flxProvincepayeeDetails = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "10dp",
            "clipBounds": true,
            "id": "flxProvincepayeeDetails",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "10dp",
            "width": "100%"
        }, controller.args[0], "flxProvincepayeeDetails"), extendConfig({}, controller.args[1], "flxProvincepayeeDetails"), extendConfig({}, controller.args[2], "flxProvincepayeeDetails"));
        flxProvincepayeeDetails.setDefaultUnit(kony.flex.DP);
        var lblProvincepayeeDetails = new kony.ui.Label(extendConfig({
            "id": "lblProvincepayeeDetails",
            "isVisible": true,
            "left": "0",
            "skin": "ICSknLbl72727217pxSSPR",
            "text": "Province:",
            "textStyle": {},
            "top": "0",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblProvincepayeeDetails"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblProvincepayeeDetails"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblProvincepayeeDetails"));
        var lblProvinceValue = new kony.ui.Label(extendConfig({
            "id": "lblProvinceValue",
            "isVisible": true,
            "left": "0",
            "skin": "ICSkn424242SPPR45px",
            "text": "Bologna",
            "textStyle": {},
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblProvinceValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblProvinceValue"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblProvinceValue"));
        flxProvincepayeeDetails.add(lblProvincepayeeDetails, lblProvinceValue);
        var flxSeparatorProvince = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparatorProvince",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "ICSknFlxE3E3E31PX",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "flxSeparatorProvince"), extendConfig({}, controller.args[1], "flxSeparatorProvince"), extendConfig({}, controller.args[2], "flxSeparatorProvince"));
        flxSeparatorProvince.setDefaultUnit(kony.flex.DP);
        flxSeparatorProvince.add();
        var lblSeparator5payeeDetails = new kony.ui.Label(extendConfig({
            "bottom": "10dp",
            "height": "1dp",
            "id": "lblSeparator5payeeDetails",
            "isVisible": false,
            "left": "0",
            "skin": "lblSeparator",
            "text": "Label",
            "textStyle": {},
            "top": "0",
            "width": "100%"
        }, controller.args[0], "lblSeparator5payeeDetails"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSeparator5payeeDetails"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSeparator5payeeDetails"));
        flxDetails.add(flxPayerNamepayeeDetails, lblSeparator1payeeDetails, flxSeparatorName, flxAddresspayeeDetails, flxSeparatorAddress, lblSeparator2payeeDetails, flxPostalpayeeDetails, flxSeparatorPostalCode, lblSeparator3payeeDetails, flxLocationpayeeDetails, flxSeparatorLocation, lblSeparator4payeeDetails, flxProvincepayeeDetails, flxSeparatorProvince, lblSeparator5payeeDetails);
        var flxButtonsContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "20dp",
            "centerX": "50%",
            "clipBounds": true,
            "height": "120dp",
            "id": "flxButtonsContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%"
        }, controller.args[0], "flxButtonsContainer"), extendConfig({}, controller.args[1], "flxButtonsContainer"), extendConfig({}, controller.args[2], "flxButtonsContainer"));
        flxButtonsContainer.setDefaultUnit(kony.flex.DP);
        var btnContinuepayeeDetails = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtn003e75",
            "height": "50dp",
            "id": "btnContinuepayeeDetails",
            "isVisible": true,
            "left": "0",
            "skin": "sknBtn003e75",
            "text": "Continue",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "btnContinuepayeeDetails"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContinuepayeeDetails"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnContinuepayeeDetails"));
        var btnModifyDetails = new kony.ui.Button(extendConfig({
            "focusSkin": "ICSknSecondaryBtnSSPReg34px",
            "height": "50dp",
            "id": "btnModifyDetails",
            "isVisible": true,
            "left": "0",
            "skin": "ICSknSecondaryBtnSSPReg34px",
            "text": "Modify My Details",
            "top": "20dp",
            "width": "100%"
        }, controller.args[0], "btnModifyDetails"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnModifyDetails"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnModifyDetails"));
        flxButtonsContainer.add(btnContinuepayeeDetails, btnModifyDetails);
        flxBodyPayeeDetails.add(flxDetails, flxButtonsContainer);
        flxMainPayeeDetails.add(flxHeaderComp, FlxHeaderPayeeDetails, flxBillPayFromDetail, flxSeparatorShadow, flxBodyPayeeDetails);
        var flxMainEditPayeeDetails = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMainEditPayeeDetails",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "flxMainEditPayeeDetails"), extendConfig({}, controller.args[1], "flxMainEditPayeeDetails"), extendConfig({}, controller.args[2], "flxMainEditPayeeDetails"));
        flxMainEditPayeeDetails.setDefaultUnit(kony.flex.DP);
        var flxHeaderEditpayee = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "59dp",
            "id": "flxHeaderEditpayee",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlx",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxHeaderEditpayee"), extendConfig({}, controller.args[1], "flxHeaderEditpayee"), extendConfig({}, controller.args[2], "flxHeaderEditpayee"));
        flxHeaderEditpayee.setDefaultUnit(kony.flex.DP);
        var flxHeaderTopEditpayee = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxHeaderTopEditpayee",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxHeaderTopEditpayee"), extendConfig({}, controller.args[1], "flxHeaderTopEditpayee"), extendConfig({}, controller.args[2], "flxHeaderTopEditpayee"));
        flxHeaderTopEditpayee.setDefaultUnit(kony.flex.DP);
        var flxVerifyBackEditpayee = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxVerifyBackEditpayee",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "10%"
        }, controller.args[0], "flxVerifyBackEditpayee"), extendConfig({}, controller.args[1], "flxVerifyBackEditpayee"), extendConfig({}, controller.args[2], "flxVerifyBackEditpayee"));
        flxVerifyBackEditpayee.setDefaultUnit(kony.flex.DP);
        var imgVerifyBackEditpayee = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgVerifyBackEditpayee",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "backbutton.png",
            "width": "12dp",
            "zIndex": 1
        }, controller.args[0], "imgVerifyBackEditpayee"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgVerifyBackEditpayee"), extendConfig({}, controller.args[2], "imgVerifyBackEditpayee"));
        flxVerifyBackEditpayee.add(imgVerifyBackEditpayee);
        var flxVerifyNameEditpayee = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxVerifyNameEditpayee",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "10dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "65%"
        }, controller.args[0], "flxVerifyNameEditpayee"), extendConfig({}, controller.args[1], "flxVerifyNameEditpayee"), extendConfig({}, controller.args[2], "flxVerifyNameEditpayee"));
        flxVerifyNameEditpayee.setDefaultUnit(kony.flex.DP);
        var lblVerifyNameEditpayee = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblVerifyNameEditpayee",
            "isVisible": true,
            "skin": "ICSknLblFFFFFSSPSB34Px",
            "text": "Bill Payer’s Details",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblVerifyNameEditpayee"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblVerifyNameEditpayee"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblVerifyNameEditpayee"));
        flxVerifyNameEditpayee.add(lblVerifyNameEditpayee);
        var btnVerifyCancelEditpayee = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "focusSkin": "ICSKnBtnffffff15px",
            "id": "btnVerifyCancelEditpayee",
            "isVisible": true,
            "right": "20dp",
            "skin": "ICSKnBtnffffff15px",
            "text": "Cancel",
            "width": "65dp",
            "zIndex": 1
        }, controller.args[0], "btnVerifyCancelEditpayee"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnVerifyCancelEditpayee"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnVerifyCancelEditpayee"));
        flxHeaderTopEditpayee.add(flxVerifyBackEditpayee, flxVerifyNameEditpayee, btnVerifyCancelEditpayee);
        flxHeaderEditpayee.add(flxHeaderTopEditpayee);
        var flxMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "flxMain"), extendConfig({}, controller.args[1], "flxMain"), extendConfig({}, controller.args[2], "flxMain"));
        flxMain.setDefaultUnit(kony.flex.DP);
        var flxMainHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxMainHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "flxMainHeader"), extendConfig({}, controller.args[1], "flxMainHeader"), extendConfig({}, controller.args[2], "flxMainHeader"));
        flxMainHeader.setDefaultUnit(kony.flex.DP);
        var lblHeaderBillPayersDetails = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lblHeaderBillPayersDetails",
            "isVisible": true,
            "left": "0",
            "skin": "ICSkn42424245SPPRpx",
            "text": "Enter the bill payer’s details",
            "textStyle": {},
            "width": "100%"
        }, controller.args[0], "lblHeaderBillPayersDetails"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblHeaderBillPayersDetails"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblHeaderBillPayersDetails"));
        flxMainHeader.add(lblHeaderBillPayersDetails);
        var flxSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "20dp",
            "clipBounds": false,
            "height": "5dp",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlxSeparatora6a6a6",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "flxSeparator"), extendConfig({}, controller.args[1], "flxSeparator"), extendConfig({}, controller.args[2], "flxSeparator"));
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        var flxBpdErrorMessage = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "5%",
            "id": "flxBpdErrorMessage",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "flxBpdErrorMessage"), extendConfig({}, controller.args[1], "flxBpdErrorMessage"), extendConfig({}, controller.args[2], "flxBpdErrorMessage"));
        flxBpdErrorMessage.setDefaultUnit(kony.flex.DP);
        var lblBpdErrorMessage = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblBpdErrorMessage",
            "isVisible": true,
            "left": "25dp",
            "skin": "ICSknLblEE000534px",
            "text": "Label",
            "textStyle": {},
            "top": "0",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblBpdErrorMessage"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBpdErrorMessage"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblBpdErrorMessage"));
        flxBpdErrorMessage.add(lblBpdErrorMessage);
        var flxBody = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "80%",
            "id": "flxBody",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "3dp",
            "width": "100%"
        }, controller.args[0], "flxBody"), extendConfig({}, controller.args[1], "flxBody"), extendConfig({}, controller.args[2], "flxBody"));
        flxBody.setDefaultUnit(kony.flex.DP);
        var flxBodyInformation = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "centerX": "50%",
            "clipBounds": true,
            "enableScrolling": true,
            "height": "75%",
            "horizontalScrollIndicator": true,
            "id": "flxBodyInformation",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "slFSbox",
            "top": "0",
            "verticalScrollIndicator": true,
            "width": "90%"
        }, controller.args[0], "flxBodyInformation"), extendConfig({}, controller.args[1], "flxBodyInformation"), extendConfig({}, controller.args[2], "flxBodyInformation"));
        flxBodyInformation.setDefaultUnit(kony.flex.DP);
        var flxPayerName = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "15dp",
            "centerX": "49.97%",
            "clipBounds": true,
            "id": "flxPayerName",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxPayerName"), extendConfig({}, controller.args[1], "flxPayerName"), extendConfig({}, controller.args[2], "flxPayerName"));
        flxPayerName.setDefaultUnit(kony.flex.DP);
        var lblPayerNameKey = new kony.ui.Label(extendConfig({
            "id": "lblPayerNameKey",
            "isVisible": true,
            "left": "10dp",
            "skin": "ICSknLbl727272SSPReg34px",
            "text": "Payer Name:",
            "textStyle": {},
            "top": "0",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblPayerNameKey"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPayerNameKey"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblPayerNameKey"));
        var txtboxEnterPayerNameKeyValue = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "bottom": "10dp",
            "centerX": "50%",
            "focusSkin": "ICSknTxtE9E9E91px34px",
            "height": "50dp",
            "id": "txtboxEnterPayerNameKeyValue",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0",
            "placeholder": "Enter Payee Name",
            "secureTextEntry": false,
            "skin": "ICSknTxtE9E9E91px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "5dp",
            "width": "100%"
        }, controller.args[0], "txtboxEnterPayerNameKeyValue"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [2, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtboxEnterPayerNameKeyValue"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "placeholderSkin": "ICSknTxtBoxSSPRegPlaceholer15px",
            "showClearButton": true,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtboxEnterPayerNameKeyValue"));
        flxPayerName.add(lblPayerNameKey, txtboxEnterPayerNameKeyValue);
        var flxAddressEditpapyee = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "15dp",
            "clipBounds": true,
            "id": "flxAddressEditpapyee",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "flxAddressEditpapyee"), extendConfig({}, controller.args[1], "flxAddressEditpapyee"), extendConfig({}, controller.args[2], "flxAddressEditpapyee"));
        flxAddressEditpapyee.setDefaultUnit(kony.flex.DP);
        var lblAddressKey = new kony.ui.Label(extendConfig({
            "id": "lblAddressKey",
            "isVisible": true,
            "left": "9dp",
            "skin": "ICSknLbl727272SSPReg34px",
            "text": "Address:",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblAddressKey"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddressKey"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAddressKey"));
        var txtBoxEnterAddressKeyValue = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "bottom": "10dp",
            "focusSkin": "ICSknTxtE9E9E91px34px",
            "height": "50dp",
            "id": "txtBoxEnterAddressKeyValue",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0",
            "placeholder": "Enter Address",
            "secureTextEntry": false,
            "skin": "ICSknTxtE9E9E91px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "5dp",
            "width": "100%"
        }, controller.args[0], "txtBoxEnterAddressKeyValue"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [2, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtBoxEnterAddressKeyValue"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "placeholderSkin": "ICSknTxtBoxSSPRegPlaceholer15px",
            "showClearButton": true,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtBoxEnterAddressKeyValue"));
        flxAddressEditpapyee.add(lblAddressKey, txtBoxEnterAddressKeyValue);
        var flxPostalCodeEditpayee = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "10dp",
            "clipBounds": true,
            "id": "flxPostalCodeEditpayee",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "flxPostalCodeEditpayee"), extendConfig({}, controller.args[1], "flxPostalCodeEditpayee"), extendConfig({}, controller.args[2], "flxPostalCodeEditpayee"));
        flxPostalCodeEditpayee.setDefaultUnit(kony.flex.DP);
        var lblPostalCodeKey = new kony.ui.Label(extendConfig({
            "id": "lblPostalCodeKey",
            "isVisible": true,
            "left": "9dp",
            "skin": "ICSknLbl727272SSPReg34px",
            "text": "Postal Code:",
            "textStyle": {},
            "top": "0",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblPostalCodeKey"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPostalCodeKey"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblPostalCodeKey"));
        var txtBoxEnterPostalCodeValue = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "bottom": "10dp",
            "focusSkin": "ICSknTxtE9E9E91px34px",
            "height": "50dp",
            "id": "txtBoxEnterPostalCodeValue",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0",
            "placeholder": "Enter Postal Code",
            "secureTextEntry": false,
            "skin": "ICSknTxtE9E9E91px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "5dp",
            "width": "100%"
        }, controller.args[0], "txtBoxEnterPostalCodeValue"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [2, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtBoxEnterPostalCodeValue"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "placeholderSkin": "ICSknTxtBoxSSPRegPlaceholer15px",
            "showClearButton": true,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtBoxEnterPostalCodeValue"));
        flxPostalCodeEditpayee.add(lblPostalCodeKey, txtBoxEnterPostalCodeValue);
        var flxLocation = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "10dp",
            "clipBounds": true,
            "id": "flxLocation",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "flxLocation"), extendConfig({}, controller.args[1], "flxLocation"), extendConfig({}, controller.args[2], "flxLocation"));
        flxLocation.setDefaultUnit(kony.flex.DP);
        var lblLocationKey = new kony.ui.Label(extendConfig({
            "id": "lblLocationKey",
            "isVisible": true,
            "left": "9dp",
            "skin": "ICSknLbl727272SSPReg34px",
            "text": "Location:",
            "textStyle": {},
            "top": "0",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblLocationKey"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLocationKey"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblLocationKey"));
        var txtBoxEnterLocationValue = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "bottom": "10dp",
            "focusSkin": "ICSknTxtE9E9E91px34px",
            "height": "50dp",
            "id": "txtBoxEnterLocationValue",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0",
            "placeholder": "Enter Location",
            "secureTextEntry": false,
            "skin": "ICSknTxtE9E9E91px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "5dp",
            "width": "100%"
        }, controller.args[0], "txtBoxEnterLocationValue"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [2, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtBoxEnterLocationValue"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "placeholderSkin": "ICSknTxtBoxSSPRegPlaceholer15px",
            "showClearButton": true,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtBoxEnterLocationValue"));
        flxLocation.add(lblLocationKey, txtBoxEnterLocationValue);
        var flxProvince = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "10dp",
            "clipBounds": true,
            "id": "flxProvince",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "flxProvince"), extendConfig({}, controller.args[1], "flxProvince"), extendConfig({}, controller.args[2], "flxProvince"));
        flxProvince.setDefaultUnit(kony.flex.DP);
        var lblProvinceKey = new kony.ui.Label(extendConfig({
            "id": "lblProvinceKey",
            "isVisible": true,
            "left": "9dp",
            "skin": "CopydefLabel0f388b4f29a8b4d",
            "text": "Province:",
            "textStyle": {},
            "top": "0",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblProvinceKey"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblProvinceKey"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblProvinceKey"));
        var txtBoxEnterProvinceValue = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "bottom": "10dp",
            "focusSkin": "ICSknTxtE9E9E91px34px",
            "height": "50dp",
            "id": "txtBoxEnterProvinceValue",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0",
            "placeholder": "Enter Province",
            "secureTextEntry": false,
            "skin": "ICSknTxtE9E9E91px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "5dp",
            "width": "100%"
        }, controller.args[0], "txtBoxEnterProvinceValue"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [2, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtBoxEnterProvinceValue"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "placeholderSkin": "ICSknTxtBoxSSPRegPlaceholer15px",
            "showClearButton": true,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtBoxEnterProvinceValue"));
        flxProvince.add(lblProvinceKey, txtBoxEnterProvinceValue);
        flxBodyInformation.add(flxPayerName, flxAddressEditpapyee, flxPostalCodeEditpayee, flxLocation, flxProvince);
        var flxButtons = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerX": "50%",
            "clipBounds": true,
            "id": "flxButtons",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": "50dp",
            "width": "90%"
        }, controller.args[0], "flxButtons"), extendConfig({}, controller.args[1], "flxButtons"), extendConfig({}, controller.args[2], "flxButtons"));
        flxButtons.setDefaultUnit(kony.flex.DP);
        var btnContinueEditPayeeDetails = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtn003e75",
            "height": "50dp",
            "id": "btnContinueEditPayeeDetails",
            "isVisible": true,
            "left": "0",
            "skin": "ICSknBtnE3E9F0DisableBorder1px",
            "text": "Continue",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "btnContinueEditPayeeDetails"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContinueEditPayeeDetails"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnContinueEditPayeeDetails"));
        flxButtons.add(btnContinueEditPayeeDetails);
        flxBody.add(flxBodyInformation, flxButtons);
        flxMain.add(flxMainHeader, flxSeparator, flxBpdErrorMessage, flxBody);
        flxMainEditPayeeDetails.add(flxHeaderEditpayee, flxMain);
        var flxMainBillerName = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMainBillerName",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMainBillerName"), extendConfig({}, controller.args[1], "flxMainBillerName"), extendConfig({}, controller.args[2], "flxMainBillerName"));
        flxMainBillerName.setDefaultUnit(kony.flex.DP);
        var flxBillerNameHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "59dp",
            "id": "flxBillerNameHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlx003E75",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxBillerNameHeader"), extendConfig({}, controller.args[1], "flxBillerNameHeader"), extendConfig({}, controller.args[2], "flxBillerNameHeader"));
        flxBillerNameHeader.setDefaultUnit(kony.flex.DP);
        var flxNameTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxNameTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxNameTop"), extendConfig({}, controller.args[1], "flxNameTop"), extendConfig({}, controller.args[2], "flxNameTop"));
        flxNameTop.setDefaultUnit(kony.flex.DP);
        var flxBillerNameBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxBillerNameBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "10%"
        }, controller.args[0], "flxBillerNameBack"), extendConfig({}, controller.args[1], "flxBillerNameBack"), extendConfig({}, controller.args[2], "flxBillerNameBack"));
        flxBillerNameBack.setDefaultUnit(kony.flex.DP);
        var imgBackBillerName = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgBackBillerName",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "backbutton.png",
            "width": "12dp",
            "zIndex": 1
        }, controller.args[0], "imgBackBillerName"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgBackBillerName"), extendConfig({}, controller.args[2], "imgBackBillerName"));
        flxBillerNameBack.add(imgBackBillerName);
        var lblBillerNameSectionTitle = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblBillerNameSectionTitle",
            "isVisible": true,
            "skin": "ICSknLblFFFFFSSPSB34Px",
            "text": "Payable To",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblBillerNameSectionTitle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBillerNameSectionTitle"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblBillerNameSectionTitle"));
        var btnCancelBiller = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "btnCancelBiller",
            "isVisible": true,
            "right": "20dp",
            "skin": "ICSKnBtnffffff15px",
            "text": "Cancel",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnCancelBiller"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnCancelBiller"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnCancelBiller"));
        flxNameTop.add(flxBillerNameBack, lblBillerNameSectionTitle, btnCancelBiller);
        flxBillerNameHeader.add(flxNameTop);
        var flxBillerName = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "55dp",
            "id": "flxBillerName",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxBillerName"), extendConfig({}, controller.args[1], "flxBillerName"), extendConfig({}, controller.args[2], "flxBillerName"));
        flxBillerName.setDefaultUnit(kony.flex.DP);
        var lblBillerName = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblBillerName",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSkn42424245SPPRpx",
            "text": "Enter the biller's name",
            "textStyle": {},
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblBillerName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBillerName"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblBillerName"));
        flxBillerName.add(lblBillerName);
        var flxPayableFromDetail = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "72dp",
            "id": "flxPayableFromDetail",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknflx424242",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxPayableFromDetail"), extendConfig({}, controller.args[1], "flxPayableFromDetail"), extendConfig({}, controller.args[2], "flxPayableFromDetail"));
        flxPayableFromDetail.setDefaultUnit(kony.flex.DP);
        var lblPtFrom = new kony.ui.Label(extendConfig({
            "id": "lblPtFrom",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl727272SSPReg34px",
            "text": "From:",
            "textStyle": {},
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 10
        }, controller.args[0], "lblPtFrom"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPtFrom"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblPtFrom"));
        var flxPtSubvalue1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "55.44%",
            "id": "flxPtSubvalue1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "51dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "17dp",
            "width": "77.07%"
        }, controller.args[0], "flxPtSubvalue1"), extendConfig({}, controller.args[1], "flxPtSubvalue1"), extendConfig({}, controller.args[2], "flxPtSubvalue1"));
        flxPtSubvalue1.setDefaultUnit(kony.flex.DP);
        var flxPtSubValue1Wrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20dp",
            "id": "flxPtSubValue1Wrapper",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": 5,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxPtSubValue1Wrapper"), extendConfig({}, controller.args[1], "flxPtSubValue1Wrapper"), extendConfig({}, controller.args[2], "flxPtSubValue1Wrapper"));
        flxPtSubValue1Wrapper.setDefaultUnit(kony.flex.DP);
        var lblPtSubValue1 = new kony.ui.Label(extendConfig({
            "id": "lblPtSubValue1",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknlbl4176a4SSPSB18px",
            "text": "Account Nick Name...123",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblPtSubValue1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPtSubValue1"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblPtSubValue1"));
        flxPtSubValue1Wrapper.add(lblPtSubValue1);
        var flxPtSubValue2Wrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxPtSubValue2Wrapper",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": "5dp",
            "skin": "slFbox",
            "top": "3dp",
            "width": "100%"
        }, controller.args[0], "flxPtSubValue2Wrapper"), extendConfig({}, controller.args[1], "flxPtSubValue2Wrapper"), extendConfig({}, controller.args[2], "flxPtSubValue2Wrapper"));
        flxPtSubValue2Wrapper.setDefaultUnit(kony.flex.DP);
        var lblPtSubValue2Label = new kony.ui.Label(extendConfig({
            "id": "lblPtSubValue2Label",
            "isVisible": true,
            "left": "5dp",
            "right": 0,
            "skin": "ICSknlblSSP72727213px",
            "text": "12344",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblPtSubValue2Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPtSubValue2Label"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblPtSubValue2Label"));
        var lblPtSubValue2Value = new kony.ui.Label(extendConfig({
            "id": "lblPtSubValue2Value",
            "isVisible": true,
            "left": 10,
            "right": "0dp",
            "skin": "ICSknlblSSP72727213px",
            "text": "Available Balance:",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblPtSubValue2Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPtSubValue2Value"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblPtSubValue2Value"));
        flxPtSubValue2Wrapper.add(lblPtSubValue2Label, lblPtSubValue2Value);
        flxPtSubvalue1.add(flxPtSubValue1Wrapper, flxPtSubValue2Wrapper);
        var flxPtChevron = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxPtChevron",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "11%",
            "zIndex": 2
        }, controller.args[0], "flxPtChevron"), extendConfig({}, controller.args[1], "flxPtChevron"), extendConfig({}, controller.args[2], "flxPtChevron"));
        flxPtChevron.setDefaultUnit(kony.flex.DP);
        var imgPtCheveron = new kony.ui.Image2(extendConfig({
            "centerY": "50.00%",
            "height": "20dp",
            "id": "imgPtCheveron",
            "isVisible": true,
            "right": "19dp",
            "skin": "slImage",
            "src": "chevron.png",
            "top": "0dp",
            "width": "15dp",
            "zIndex": 2
        }, controller.args[0], "imgPtCheveron"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgPtCheveron"), extendConfig({}, controller.args[2], "imgPtCheveron"));
        flxPtChevron.add(imgPtCheveron);
        flxPayableFromDetail.add(lblPtFrom, flxPtSubvalue1, flxPtChevron);
        var flxShadowBiller = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "5dp",
            "id": "flxShadowBiller",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxSeparatora6a6a6",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxShadowBiller"), extendConfig({}, controller.args[1], "flxShadowBiller"), extendConfig({}, controller.args[2], "flxShadowBiller"));
        flxShadowBiller.setDefaultUnit(kony.flex.DP);
        flxShadowBiller.add();
        var flxPtErrorMessage = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "5%",
            "id": "flxPtErrorMessage",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxPtErrorMessage"), extendConfig({}, controller.args[1], "flxPtErrorMessage"), extendConfig({}, controller.args[2], "flxPtErrorMessage"));
        flxPtErrorMessage.setDefaultUnit(kony.flex.DP);
        var lblPayableToErrMsg = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblPayableToErrMsg",
            "isVisible": true,
            "left": "25dp",
            "skin": "ICSknLblEE000534px",
            "text": "Label",
            "textStyle": {},
            "top": "0",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblPayableToErrMsg"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPayableToErrMsg"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblPayableToErrMsg"));
        flxPtErrorMessage.add(lblPayableToErrMsg);
        var flxBiller = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "90dp",
            "id": "flxBiller",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "50dp",
            "width": "100%"
        }, controller.args[0], "flxBiller"), extendConfig({}, controller.args[1], "flxBiller"), extendConfig({}, controller.args[2], "flxBiller"));
        flxBiller.setDefaultUnit(kony.flex.DP);
        var lblEnterBillerName = new kony.ui.Label(extendConfig({
            "id": "lblEnterBillerName",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl727272SSPReg34px",
            "text": kony.i18n.getLocalizedString("i18n.billPayee.review.payableTo"),
            "textStyle": {},
            "top": 0,
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblEnterBillerName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblEnterBillerName"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblEnterBillerName"));
        var tbxBillerName = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50%",
            "focusSkin": "ICSknTxtE9E9E91px34px",
            "height": "50dp",
            "id": "tbxBillerName",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTxtE9E9E91px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "2dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "tbxBillerName"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxBillerName"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "placeholderSkin": "ICSknTxtE9E9E91px34px",
            "showClearButton": false,
            "showCloseButton": false,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "tbxBillerName"));
        flxBiller.add(lblEnterBillerName, tbxBillerName);
        var btnContinueBiller = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "centerY": "20%",
            "focusSkin": "sknBtn003e75",
            "height": "50dp",
            "id": "btnContinueBiller",
            "isVisible": true,
            "left": "20dp",
            "right": 20,
            "skin": "ICSknBtnE3E9F0DisableBorder1px",
            "text": "Continue",
            "top": "97dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "btnContinueBiller"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContinueBiller"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnContinueBiller"));
        flxMainBillerName.add(flxBillerNameHeader, flxBillerName, flxPayableFromDetail, flxShadowBiller, flxPtErrorMessage, flxBiller, btnContinueBiller);
        var flxBillerAccountNumber = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxBillerAccountNumber",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxBillerAccountNumber"), extendConfig({}, controller.args[1], "flxBillerAccountNumber"), extendConfig({}, controller.args[2], "flxBillerAccountNumber"));
        flxBillerAccountNumber.setDefaultUnit(kony.flex.DP);
        var flxAccountNumberContent = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60%",
            "id": "flxAccountNumberContent",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxAccountNumberContent"), extendConfig({}, controller.args[1], "flxAccountNumberContent"), extendConfig({}, controller.args[2], "flxAccountNumberContent"));
        flxAccountNumberContent.setDefaultUnit(kony.flex.DP);
        var flxBillerAccountNumberHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "59dp",
            "id": "flxBillerAccountNumberHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlx",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxBillerAccountNumberHeader"), extendConfig({}, controller.args[1], "flxBillerAccountNumberHeader"), extendConfig({}, controller.args[2], "flxBillerAccountNumberHeader"));
        flxBillerAccountNumberHeader.setDefaultUnit(kony.flex.DP);
        var flxAccountHeadertop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxAccountHeadertop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxAccountHeadertop"), extendConfig({}, controller.args[1], "flxAccountHeadertop"), extendConfig({}, controller.args[2], "flxAccountHeadertop"));
        flxAccountHeadertop.setDefaultUnit(kony.flex.DP);
        var flxAccNumBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxAccNumBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "10%"
        }, controller.args[0], "flxAccNumBack"), extendConfig({}, controller.args[1], "flxAccNumBack"), extendConfig({}, controller.args[2], "flxAccNumBack"));
        flxAccNumBack.setDefaultUnit(kony.flex.DP);
        var imgAccountNumBack = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgAccountNumBack",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "backbutton.png",
            "width": "12dp",
            "zIndex": 1
        }, controller.args[0], "imgAccountNumBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgAccountNumBack"), extendConfig({}, controller.args[2], "imgAccountNumBack"));
        flxAccNumBack.add(imgAccountNumBack);
        var lblAccountNumHeader = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblAccountNumHeader",
            "isVisible": true,
            "skin": "ICSknLblFFFFFSSPSB34Px",
            "text": "Account Number",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAccountNumHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAccountNumHeader"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAccountNumHeader"));
        var btnAccCancel = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "id": "btnAccCancel",
            "isVisible": true,
            "right": "20dp",
            "skin": "ICSKnBtnffffff15px",
            "text": "Cancel",
            "width": "60dp",
            "zIndex": 1
        }, controller.args[0], "btnAccCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnAccCancel"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnAccCancel"));
        flxAccountHeadertop.add(flxAccNumBack, lblAccountNumHeader, btnAccCancel);
        flxBillerAccountNumberHeader.add(flxAccountHeadertop);
        var flxAccountMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "32%",
            "clipBounds": true,
            "height": "82%",
            "id": "flxAccountMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAccountMain"), extendConfig({}, controller.args[1], "flxAccountMain"), extendConfig({}, controller.args[2], "flxAccountMain"));
        flxAccountMain.setDefaultUnit(kony.flex.DP);
        var flxAccountNumMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "32%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxAccountNumMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAccountNumMain"), extendConfig({}, controller.args[1], "flxAccountNumMain"), extendConfig({}, controller.args[2], "flxAccountNumMain"));
        flxAccountNumMain.setDefaultUnit(kony.flex.DP);
        var flxAccNumSubHeaderMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "55dp",
            "id": "flxAccNumSubHeaderMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAccNumSubHeaderMain"), extendConfig({}, controller.args[1], "flxAccNumSubHeaderMain"), extendConfig({}, controller.args[2], "flxAccNumSubHeaderMain"));
        flxAccNumSubHeaderMain.setDefaultUnit(kony.flex.DP);
        var lblAccNumSubHeader = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblAccNumSubHeader",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSkn42424245SPPRpx",
            "text": "Enter the recipient's  account number",
            "textStyle": {},
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblAccNumSubHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAccNumSubHeader"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAccNumSubHeader"));
        flxAccNumSubHeaderMain.add(lblAccNumSubHeader);
        var flxAccountNumberFromDetail = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "72dp",
            "id": "flxAccountNumberFromDetail",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknflx424242",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAccountNumberFromDetail"), extendConfig({}, controller.args[1], "flxAccountNumberFromDetail"), extendConfig({}, controller.args[2], "flxAccountNumberFromDetail"));
        flxAccountNumberFromDetail.setDefaultUnit(kony.flex.DP);
        var lblAcnFrom = new kony.ui.Label(extendConfig({
            "id": "lblAcnFrom",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl727272SSPReg34px",
            "text": "From:",
            "textStyle": {},
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 10
        }, controller.args[0], "lblAcnFrom"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAcnFrom"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAcnFrom"));
        var flxAcnSubvalue = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "55.44%",
            "id": "flxAcnSubvalue",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "51dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "17dp",
            "width": "77.07%"
        }, controller.args[0], "flxAcnSubvalue"), extendConfig({}, controller.args[1], "flxAcnSubvalue"), extendConfig({}, controller.args[2], "flxAcnSubvalue"));
        flxAcnSubvalue.setDefaultUnit(kony.flex.DP);
        var flxAcnSubValueWrapper1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20dp",
            "id": "flxAcnSubValueWrapper1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": 5,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxAcnSubValueWrapper1"), extendConfig({}, controller.args[1], "flxAcnSubValueWrapper1"), extendConfig({}, controller.args[2], "flxAcnSubValueWrapper1"));
        flxAcnSubValueWrapper1.setDefaultUnit(kony.flex.DP);
        var lblAcnSubValue1 = new kony.ui.Label(extendConfig({
            "id": "lblAcnSubValue1",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknlbl4176a4SSPSB18px",
            "text": "Account Nick Name...123",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAcnSubValue1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAcnSubValue1"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAcnSubValue1"));
        flxAcnSubValueWrapper1.add(lblAcnSubValue1);
        var flxAcnSubValueWrapper2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxAcnSubValueWrapper2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": "5dp",
            "skin": "slFbox",
            "top": "3dp",
            "width": "100%"
        }, controller.args[0], "flxAcnSubValueWrapper2"), extendConfig({}, controller.args[1], "flxAcnSubValueWrapper2"), extendConfig({}, controller.args[2], "flxAcnSubValueWrapper2"));
        flxAcnSubValueWrapper2.setDefaultUnit(kony.flex.DP);
        var lblAcnSubValue2 = new kony.ui.Label(extendConfig({
            "id": "lblAcnSubValue2",
            "isVisible": true,
            "left": "5dp",
            "right": 0,
            "skin": "ICSknlblSSP72727213px",
            "text": "12344",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAcnSubValue2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAcnSubValue2"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAcnSubValue2"));
        var lblAcnSubValue2Label = new kony.ui.Label(extendConfig({
            "id": "lblAcnSubValue2Label",
            "isVisible": true,
            "left": 10,
            "right": "0dp",
            "skin": "ICSknlblSSP72727213px",
            "text": "Available Balance:",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAcnSubValue2Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAcnSubValue2Label"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAcnSubValue2Label"));
        flxAcnSubValueWrapper2.add(lblAcnSubValue2, lblAcnSubValue2Label);
        flxAcnSubvalue.add(flxAcnSubValueWrapper1, flxAcnSubValueWrapper2);
        var flxAcnChevron = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxAcnChevron",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "11%",
            "zIndex": 2
        }, controller.args[0], "flxAcnChevron"), extendConfig({}, controller.args[1], "flxAcnChevron"), extendConfig({}, controller.args[2], "flxAcnChevron"));
        flxAcnChevron.setDefaultUnit(kony.flex.DP);
        var imgAcnCheveron = new kony.ui.Image2(extendConfig({
            "centerY": "50.00%",
            "height": "20dp",
            "id": "imgAcnCheveron",
            "isVisible": true,
            "right": "19dp",
            "skin": "slImage",
            "src": "chevron.png",
            "top": "0dp",
            "width": "15dp",
            "zIndex": 2
        }, controller.args[0], "imgAcnCheveron"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgAcnCheveron"), extendConfig({}, controller.args[2], "imgAcnCheveron"));
        flxAcnChevron.add(imgAcnCheveron);
        flxAccountNumberFromDetail.add(lblAcnFrom, flxAcnSubvalue, flxAcnChevron);
        var flxAccNumSubHeaderSeperator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "5dp",
            "id": "flxAccNumSubHeaderSeperator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxSeparatora6a6a6",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAccNumSubHeaderSeperator"), extendConfig({}, controller.args[1], "flxAccNumSubHeaderSeperator"), extendConfig({}, controller.args[2], "flxAccNumSubHeaderSeperator"));
        flxAccNumSubHeaderSeperator.setDefaultUnit(kony.flex.DP);
        flxAccNumSubHeaderSeperator.add();
        var flxAccNumMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "85%",
            "id": "flxAccNumMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAccNumMain"), extendConfig({}, controller.args[1], "flxAccNumMain"), extendConfig({}, controller.args[2], "flxAccNumMain"));
        flxAccNumMain.setDefaultUnit(kony.flex.DP);
        var flxAccNoErrorMessage = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10%",
            "id": "flxAccNoErrorMessage",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxAccNoErrorMessage"), extendConfig({}, controller.args[1], "flxAccNoErrorMessage"), extendConfig({}, controller.args[2], "flxAccNoErrorMessage"));
        flxAccNoErrorMessage.setDefaultUnit(kony.flex.DP);
        var lblAccNoErrMsg = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblAccNoErrMsg",
            "isVisible": true,
            "left": "25dp",
            "skin": "ICSknLblEE000534px",
            "text": "Label",
            "textStyle": {},
            "top": "0",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblAccNoErrMsg"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAccNoErrMsg"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAccNoErrMsg"));
        flxAccNoErrorMessage.add(lblAccNoErrMsg);
        var flxAccountNumber = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxAccountNumber",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "sknflxe3e3e3border",
            "top": "25%",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxAccountNumber"), extendConfig({}, controller.args[1], "flxAccountNumber"), extendConfig({}, controller.args[2], "flxAccountNumber"));
        flxAccountNumber.setDefaultUnit(kony.flex.DP);
        var lblAccNo = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblAccNo",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl494949regular44px",
            "textStyle": {},
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblAccNo"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAccNo"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAccNo"));
        flxAccountNumber.add(lblAccNo);
        var btnAccNumContinue = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "centerX": "50.00%",
            "focusSkin": "sknBtn003e75",
            "height": "48dp",
            "id": "btnAccNumContinue",
            "isVisible": true,
            "left": "20dp",
            "onClick": controller.AS_Button_c31b0ae667614bebaf74e3fefc251c50,
            "right": "20dp",
            "skin": "ICSknBtnE3E9F0DisableBorder1px",
            "text": "Continue",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "btnAccNumContinue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnAccNumContinue"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnAccNumContinue"));
        var lblEnterAccountNumber = new kony.ui.Label(extendConfig({
            "id": "lblEnterAccountNumber",
            "isVisible": false,
            "left": "20dp",
            "skin": "ICSknLbl727272SSPReg34px",
            "text": kony.i18n.getLocalizedString("kony.i18n.verifyDetails.accountNumber"),
            "textStyle": {},
            "top": "18%",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblEnterAccountNumber"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblEnterAccountNumber"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblEnterAccountNumber"));
        flxAccNumMain.add(flxAccNoErrorMessage, flxAccountNumber, btnAccNumContinue, lblEnterAccountNumber);
        flxAccountNumMain.add(flxAccNumSubHeaderMain, flxAccountNumberFromDetail, flxAccNumSubHeaderSeperator, flxAccNumMain);
        flxAccountMain.add(flxAccountNumMain);
        flxAccountNumberContent.add(flxBillerAccountNumberHeader, flxAccountMain);
        var flxAccountNumKeypad = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "0dp",
            "clipBounds": true,
            "id": "flxAccountNumKeypad",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxAccountNumKeypad"), extendConfig({}, controller.args[1], "flxAccountNumKeypad"), extendConfig({}, controller.args[2], "flxAccountNumKeypad"));
        flxAccountNumKeypad.setDefaultUnit(kony.flex.DP);
        var flxAccNoShadowSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "4dp",
            "id": "flxAccNoShadowSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxSeparatora6a6a6",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAccNoShadowSeparator"), extendConfig({}, controller.args[1], "flxAccNoShadowSeparator"), extendConfig({}, controller.args[2], "flxAccNoShadowSeparator"));
        flxAccNoShadowSeparator.setDefaultUnit(kony.flex.DP);
        flxAccNoShadowSeparator.add();
        var flxAccNumKeypadRowOne = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "53dp",
            "id": "flxAccNumKeypadRowOne",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICflxf1",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAccNumKeypadRowOne"), extendConfig({}, controller.args[1], "flxAccNumKeypadRowOne"), extendConfig({}, controller.args[2], "flxAccNumKeypadRowOne"));
        flxAccNumKeypadRowOne.setDefaultUnit(kony.flex.DP);
        var btnAN1 = new kony.ui.Button(extendConfig({
            "height": "100%",
            "id": "btnAN1",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICsknBtnKeybadBorder",
            "text": "1",
            "top": "0dp",
            "width": "33.30%",
            "zIndex": 1
        }, controller.args[0], "btnAN1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnAN1"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnAN1"));
        var btnAN2 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "height": "100%",
            "id": "btnAN2",
            "isVisible": true,
            "skin": "ICsknBtnKeybadBorder",
            "text": "2",
            "top": "0dp",
            "width": "33.30%",
            "zIndex": 1
        }, controller.args[0], "btnAN2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnAN2"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnAN2"));
        var btnAN3 = new kony.ui.Button(extendConfig({
            "height": "100%",
            "id": "btnAN3",
            "isVisible": true,
            "right": "0dp",
            "skin": "ICsknBtnKeybadBorder",
            "text": "3",
            "top": "0dp",
            "width": "33.30%",
            "zIndex": 1
        }, controller.args[0], "btnAN3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnAN3"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnAN3"));
        flxAccNumKeypadRowOne.add(btnAN1, btnAN2, btnAN3);
        var flxAccNumKeypadRowTwo = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "53dp",
            "id": "flxAccNumKeypadRowTwo",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICflxf1",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAccNumKeypadRowTwo"), extendConfig({}, controller.args[1], "flxAccNumKeypadRowTwo"), extendConfig({}, controller.args[2], "flxAccNumKeypadRowTwo"));
        flxAccNumKeypadRowTwo.setDefaultUnit(kony.flex.DP);
        var btnAN4 = new kony.ui.Button(extendConfig({
            "height": "100%",
            "id": "btnAN4",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICsknBtnKeybadBorder",
            "text": "4",
            "top": "0dp",
            "width": "33.30%",
            "zIndex": 1
        }, controller.args[0], "btnAN4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnAN4"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnAN4"));
        var btnAN5 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "height": "100%",
            "id": "btnAN5",
            "isVisible": true,
            "skin": "ICsknBtnKeybadBorder",
            "text": "5",
            "top": "0dp",
            "width": "33.30%",
            "zIndex": 1
        }, controller.args[0], "btnAN5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnAN5"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnAN5"));
        var btnAN6 = new kony.ui.Button(extendConfig({
            "height": "100%",
            "id": "btnAN6",
            "isVisible": true,
            "right": "0dp",
            "skin": "ICsknBtnKeybadBorder",
            "text": "6",
            "top": "0dp",
            "width": "33.30%",
            "zIndex": 1
        }, controller.args[0], "btnAN6"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnAN6"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnAN6"));
        flxAccNumKeypadRowTwo.add(btnAN4, btnAN5, btnAN6);
        var flxAccNumKeypadRowThree = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "53dp",
            "id": "flxAccNumKeypadRowThree",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICflxf1",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAccNumKeypadRowThree"), extendConfig({}, controller.args[1], "flxAccNumKeypadRowThree"), extendConfig({}, controller.args[2], "flxAccNumKeypadRowThree"));
        flxAccNumKeypadRowThree.setDefaultUnit(kony.flex.DP);
        var btnAN7 = new kony.ui.Button(extendConfig({
            "height": "100%",
            "id": "btnAN7",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICsknBtnKeybadBorder",
            "text": "7",
            "top": "0dp",
            "width": "33.30%",
            "zIndex": 1
        }, controller.args[0], "btnAN7"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnAN7"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnAN7"));
        var btnAN8 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "height": "100%",
            "id": "btnAN8",
            "isVisible": true,
            "skin": "ICsknBtnKeybadBorder",
            "text": "8",
            "top": "0dp",
            "width": "33.30%",
            "zIndex": 1
        }, controller.args[0], "btnAN8"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnAN8"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnAN8"));
        var btnAN9 = new kony.ui.Button(extendConfig({
            "height": "100%",
            "id": "btnAN9",
            "isVisible": true,
            "right": "0dp",
            "skin": "ICsknBtnKeybadBorder",
            "text": "9",
            "top": "0dp",
            "width": "33.30%",
            "zIndex": 1
        }, controller.args[0], "btnAN9"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnAN9"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnAN9"));
        flxAccNumKeypadRowThree.add(btnAN7, btnAN8, btnAN9);
        var flxAccNumKeypadRowFour = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "58dp",
            "id": "flxAccNumKeypadRowFour",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "1dp",
            "isModalContainer": false,
            "skin": "ICflxf1",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAccNumKeypadRowFour"), extendConfig({}, controller.args[1], "flxAccNumKeypadRowFour"), extendConfig({}, controller.args[2], "flxAccNumKeypadRowFour"));
        flxAccNumKeypadRowFour.setDefaultUnit(kony.flex.DP);
        var btnAN0 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "height": "100%",
            "id": "btnAN0",
            "isVisible": true,
            "skin": "ICsknBtnKeybadBorder",
            "text": "0",
            "top": "0dp",
            "width": "33.30%",
            "zIndex": 1
        }, controller.args[0], "btnAN0"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnAN0"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnAN0"));
        var imgANTwoClear = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "100%",
            "id": "imgANTwoClear",
            "isVisible": false,
            "right": "0%",
            "skin": "slImage",
            "src": "transparentbox_3.png",
            "top": "0dp",
            "width": "33.30%",
            "zIndex": 10
        }, controller.args[0], "imgANTwoClear"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgANTwoClear"), extendConfig({}, controller.args[2], "imgANTwoClear"));
        var imgANClearImage = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "50%",
            "id": "imgANClearImage",
            "isVisible": true,
            "right": "0%",
            "skin": "slImage",
            "src": "cancelkeypad_3.png",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "imgANClearImage"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgANClearImage"), extendConfig({}, controller.args[2], "imgANClearImage"));
        var btnANDecimal = new kony.ui.Button(extendConfig({
            "height": "100%",
            "id": "btnANDecimal",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICsknBtnKeybadBgLightGrey",
            "text": ",",
            "top": "0dp",
            "width": "33.30%",
            "zIndex": 1
        }, controller.args[0], "btnANDecimal"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnANDecimal"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnANDecimal"));
        flxAccNumKeypadRowFour.add(btnAN0, imgANTwoClear, imgANClearImage, btnANDecimal);
        flxAccountNumKeypad.add(flxAccNoShadowSeparator, flxAccNumKeypadRowOne, flxAccNumKeypadRowTwo, flxAccNumKeypadRowThree, flxAccNumKeypadRowFour);
        flxBillerAccountNumber.add(flxAccountNumberContent, flxAccountNumKeypad);
        var flxMainNotes = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMainNotes",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMainNotes"), extendConfig({}, controller.args[1], "flxMainNotes"), extendConfig({}, controller.args[2], "flxMainNotes"));
        flxMainNotes.setDefaultUnit(kony.flex.DP);
        var flxHeaderNotes = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "59dp",
            "id": "flxHeaderNotes",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlx003E75",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxHeaderNotes"), extendConfig({}, controller.args[1], "flxHeaderNotes"), extendConfig({}, controller.args[2], "flxHeaderNotes"));
        flxHeaderNotes.setDefaultUnit(kony.flex.DP);
        var flxHeaderTopNotes = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxHeaderTopNotes",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxHeaderTopNotes"), extendConfig({}, controller.args[1], "flxHeaderTopNotes"), extendConfig({}, controller.args[2], "flxHeaderTopNotes"));
        flxHeaderTopNotes.setDefaultUnit(kony.flex.DP);
        var flxNotesBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxNotesBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "10%"
        }, controller.args[0], "flxNotesBack"), extendConfig({}, controller.args[1], "flxNotesBack"), extendConfig({}, controller.args[2], "flxNotesBack"));
        flxNotesBack.setDefaultUnit(kony.flex.DP);
        var imgBackNotes = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgBackNotes",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "backbutton.png",
            "width": "12dp",
            "zIndex": 1
        }, controller.args[0], "imgBackNotes"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgBackNotes"), extendConfig({}, controller.args[2], "imgBackNotes"));
        flxNotesBack.add(imgBackNotes);
        var lblReasonForPayment = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblReasonForPayment",
            "isVisible": true,
            "skin": "ICSknLblFFFFFSSPSB34Px",
            "text": "Reason For Payment",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblReasonForPayment"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblReasonForPayment"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblReasonForPayment"));
        var btnCancelNotes = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "btnCancelNotes",
            "isVisible": true,
            "right": "20dp",
            "skin": "ICSKnBtnffffff15px",
            "text": "Cancel",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnCancelNotes"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnCancelNotes"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnCancelNotes"));
        flxHeaderTopNotes.add(flxNotesBack, lblReasonForPayment, btnCancelNotes);
        flxHeaderNotes.add(flxHeaderTopNotes);
        var flxEnterANote = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "55dp",
            "id": "flxEnterANote",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxEnterANote"), extendConfig({}, controller.args[1], "flxEnterANote"), extendConfig({}, controller.args[2], "flxEnterANote"));
        flxEnterANote.setDefaultUnit(kony.flex.DP);
        var lblEnterANote = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblEnterANote",
            "isVisible": true,
            "left": "-1dp",
            "skin": "ICSkn42424245SPPRpx",
            "text": "Enter a note for the purpose of the bill",
            "textStyle": {},
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblEnterANote"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblEnterANote"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblEnterANote"));
        flxEnterANote.add(lblEnterANote);
        var flxReasonFromDetail = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "72dp",
            "id": "flxReasonFromDetail",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknflx424242",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxReasonFromDetail"), extendConfig({}, controller.args[1], "flxReasonFromDetail"), extendConfig({}, controller.args[2], "flxReasonFromDetail"));
        flxReasonFromDetail.setDefaultUnit(kony.flex.DP);
        var lblRfpFrom = new kony.ui.Label(extendConfig({
            "id": "lblRfpFrom",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl727272SSPReg34px",
            "text": "From:",
            "textStyle": {},
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 10
        }, controller.args[0], "lblRfpFrom"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRfpFrom"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblRfpFrom"));
        var flxRfpSubvalue = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "55.44%",
            "id": "flxRfpSubvalue",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "51dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "17dp",
            "width": "77.07%"
        }, controller.args[0], "flxRfpSubvalue"), extendConfig({}, controller.args[1], "flxRfpSubvalue"), extendConfig({}, controller.args[2], "flxRfpSubvalue"));
        flxRfpSubvalue.setDefaultUnit(kony.flex.DP);
        var flxRfpSubValueWrapper1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20dp",
            "id": "flxRfpSubValueWrapper1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": 5,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxRfpSubValueWrapper1"), extendConfig({}, controller.args[1], "flxRfpSubValueWrapper1"), extendConfig({}, controller.args[2], "flxRfpSubValueWrapper1"));
        flxRfpSubValueWrapper1.setDefaultUnit(kony.flex.DP);
        var lblRfpSubValue1 = new kony.ui.Label(extendConfig({
            "id": "lblRfpSubValue1",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknlbl4176a4SSPSB18px",
            "text": "Account Nick Name...123",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblRfpSubValue1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRfpSubValue1"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblRfpSubValue1"));
        flxRfpSubValueWrapper1.add(lblRfpSubValue1);
        var flxRfpSubValueWrapper2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxRfpSubValueWrapper2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": "5dp",
            "skin": "slFbox",
            "top": "3dp",
            "width": "100%"
        }, controller.args[0], "flxRfpSubValueWrapper2"), extendConfig({}, controller.args[1], "flxRfpSubValueWrapper2"), extendConfig({}, controller.args[2], "flxRfpSubValueWrapper2"));
        flxRfpSubValueWrapper2.setDefaultUnit(kony.flex.DP);
        var lblRfpSubValue2 = new kony.ui.Label(extendConfig({
            "id": "lblRfpSubValue2",
            "isVisible": true,
            "left": "5dp",
            "right": 0,
            "skin": "ICSknlblSSP72727213px",
            "text": "12344",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblRfpSubValue2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRfpSubValue2"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblRfpSubValue2"));
        var lblRfpSubValue2Label = new kony.ui.Label(extendConfig({
            "id": "lblRfpSubValue2Label",
            "isVisible": true,
            "left": 10,
            "right": "0dp",
            "skin": "ICSknlblSSP72727213px",
            "text": "Available Balance:",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblRfpSubValue2Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRfpSubValue2Label"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblRfpSubValue2Label"));
        flxRfpSubValueWrapper2.add(lblRfpSubValue2, lblRfpSubValue2Label);
        flxRfpSubvalue.add(flxRfpSubValueWrapper1, flxRfpSubValueWrapper2);
        var flxRfpChevron = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxRfpChevron",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "11%",
            "zIndex": 2
        }, controller.args[0], "flxRfpChevron"), extendConfig({}, controller.args[1], "flxRfpChevron"), extendConfig({}, controller.args[2], "flxRfpChevron"));
        flxRfpChevron.setDefaultUnit(kony.flex.DP);
        var imgRfpCheveron = new kony.ui.Image2(extendConfig({
            "centerY": "50.00%",
            "height": "20dp",
            "id": "imgRfpCheveron",
            "isVisible": true,
            "right": "19dp",
            "skin": "slImage",
            "src": "chevron.png",
            "top": "0dp",
            "width": "15dp",
            "zIndex": 2
        }, controller.args[0], "imgRfpCheveron"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgRfpCheveron"), extendConfig({}, controller.args[2], "imgRfpCheveron"));
        flxRfpChevron.add(imgRfpCheveron);
        flxReasonFromDetail.add(lblRfpFrom, flxRfpSubvalue, flxRfpChevron);
        var flxShadow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "5dp",
            "id": "flxShadow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxSeparatora6a6a6",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxShadow"), extendConfig({}, controller.args[1], "flxShadow"), extendConfig({}, controller.args[2], "flxShadow"));
        flxShadow.setDefaultUnit(kony.flex.DP);
        flxShadow.add();
        var flxRfpErrorMessage = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "5%",
            "id": "flxRfpErrorMessage",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxRfpErrorMessage"), extendConfig({}, controller.args[1], "flxRfpErrorMessage"), extendConfig({}, controller.args[2], "flxRfpErrorMessage"));
        flxRfpErrorMessage.setDefaultUnit(kony.flex.DP);
        var lblRfpErrorMessage = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblRfpErrorMessage",
            "isVisible": true,
            "left": "25dp",
            "skin": "ICSknLblEE000534px",
            "text": "Label",
            "textStyle": {},
            "top": "0",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblRfpErrorMessage"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRfpErrorMessage"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblRfpErrorMessage"));
        flxRfpErrorMessage.add(lblRfpErrorMessage);
        var flxReasonForPayments = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "15%",
            "id": "flxReasonForPayments",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "15dp",
            "width": "100%"
        }, controller.args[0], "flxReasonForPayments"), extendConfig({}, controller.args[1], "flxReasonForPayments"), extendConfig({}, controller.args[2], "flxReasonForPayments"));
        flxReasonForPayments.setDefaultUnit(kony.flex.DP);
        var lblEnterReason = new kony.ui.Label(extendConfig({
            "id": "lblEnterReason",
            "isVisible": false,
            "left": "20dp",
            "skin": "ICSknLbl727272SSPReg34px",
            "text": kony.i18n.getLocalizedString("i18n.billPayee.review.reasonForPayment"),
            "textStyle": {},
            "top": "10%",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblEnterReason"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblEnterReason"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblEnterReason"));
        var flxTextArea = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "80%",
            "id": "flxTextArea",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "10%",
            "width": "100%"
        }, controller.args[0], "flxTextArea"), extendConfig({}, controller.args[1], "flxTextArea"), extendConfig({}, controller.args[2], "flxTextArea"));
        flxTextArea.setDefaultUnit(kony.flex.DP);
        var tbxNotes = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerY": "50%",
            "focusSkin": "ICSknTxtE9E9E91px34px",
            "height": "50dp",
            "id": "tbxNotes",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "right": "20dp",
            "secureTextEntry": false,
            "skin": "ICSknTxtE9E9E91px34px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": 0,
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "tbxNotes"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxNotes"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "placeholderSkin": "ICSknTxtE9E9E91px34px",
            "showClearButton": false,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "tbxNotes"));
        var txtAreaNotes = new kony.ui.TextArea2(extendConfig({
            "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
            "centerY": "50%",
            "focusSkin": "ICSknTxtAreaE3E3E31px34px",
            "height": "50dp",
            "id": "txtAreaNotes",
            "isVisible": false,
            "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "numberOfVisibleLines": 3,
            "placeholder": "Placeholder",
            "right": "20dp",
            "skin": "ICSknTxtAreaE3E3E31px34px",
            "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
            "top": "0",
            "width": "90%"
        }, controller.args[0], "txtAreaNotes"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtAreaNotes"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTAREA_KEYBOARD_LABEL_DONE,
            "showCloseButton": true,
            "showProgressIndicator": false,
            "placeholderSkin": "ICSknTxtAreaE3E3E31px34px"
        }, controller.args[2], "txtAreaNotes"));
        var btnClear = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "15%",
            "id": "btnClear",
            "isVisible": false,
            "left": -50,
            "skin": "slImage",
            "src": "clear_field.png",
            "width": "5%"
        }, controller.args[0], "btnClear"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnClear"), extendConfig({}, controller.args[2], "btnClear"));
        flxTextArea.add(tbxNotes, txtAreaNotes, btnClear);
        flxReasonForPayments.add(lblEnterReason, flxTextArea);
        var btnContinueNotes = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "centerY": "20%",
            "focusSkin": "sknBtn003e75",
            "height": "50dp",
            "id": "btnContinueNotes",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknBtnE3E9F0DisableBorder1px",
            "text": "Continue",
            "top": "97dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "btnContinueNotes"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnContinueNotes"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnContinueNotes"));
        flxMainNotes.add(flxHeaderNotes, flxEnterANote, flxReasonFromDetail, flxShadow, flxRfpErrorMessage, flxReasonForPayments, btnContinueNotes);
        var flxbillPaymentAmountDetails = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxbillPaymentAmountDetails",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxbillPaymentAmountDetails"), extendConfig({}, controller.args[1], "flxbillPaymentAmountDetails"), extendConfig({}, controller.args[2], "flxbillPaymentAmountDetails"));
        flxbillPaymentAmountDetails.setDefaultUnit(kony.flex.DP);
        var flxAmountMaincontainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxAmountMaincontainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxAmountMaincontainer"), extendConfig({}, controller.args[1], "flxAmountMaincontainer"), extendConfig({}, controller.args[2], "flxAmountMaincontainer"));
        flxAmountMaincontainer.setDefaultUnit(kony.flex.DP);
        var flxAmountHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "59dp",
            "id": "flxAmountHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlx",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAmountHeader"), extendConfig({}, controller.args[1], "flxAmountHeader"), extendConfig({}, controller.args[2], "flxAmountHeader"));
        flxAmountHeader.setDefaultUnit(kony.flex.DP);
        var flxAmountHeaderTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxAmountHeaderTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxAmountHeaderTop"), extendConfig({}, controller.args[1], "flxAmountHeaderTop"), extendConfig({}, controller.args[2], "flxAmountHeaderTop"));
        flxAmountHeaderTop.setDefaultUnit(kony.flex.DP);
        var flxAmountBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxAmountBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "10%"
        }, controller.args[0], "flxAmountBack"), extendConfig({}, controller.args[1], "flxAmountBack"), extendConfig({}, controller.args[2], "flxAmountBack"));
        flxAmountBack.setDefaultUnit(kony.flex.DP);
        var imgAmountBack = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgAmountBack",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "backbutton.png",
            "width": "12dp",
            "zIndex": 1
        }, controller.args[0], "imgAmountBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgAmountBack"), extendConfig({}, controller.args[2], "imgAmountBack"));
        flxAmountBack.add(imgAmountBack);
        var lblAmountName = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblAmountName",
            "isVisible": true,
            "skin": "ICSknLblFFFFFSSPSB34Px",
            "text": "Amount",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAmountName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAmountName"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAmountName"));
        var btnAmountCancel = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "btnAmountCancel",
            "isVisible": true,
            "right": "20dp",
            "skin": "ICSKnBtnffffff15px",
            "text": "Cancel",
            "width": "60dp",
            "zIndex": 1
        }, controller.args[0], "btnAmountCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnAmountCancel"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnAmountCancel"));
        flxAmountHeaderTop.add(flxAmountBack, lblAmountName, btnAmountCancel);
        flxAmountHeader.add(flxAmountHeaderTop);
        var flxMainContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "32%",
            "clipBounds": true,
            "height": "60%",
            "id": "flxMainContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMainContainer"), extendConfig({}, controller.args[1], "flxMainContainer"), extendConfig({}, controller.args[2], "flxMainContainer"));
        flxMainContainer.setDefaultUnit(kony.flex.DP);
        var flxTransactionModeMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "32%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxTransactionModeMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTransactionModeMain"), extendConfig({}, controller.args[1], "flxTransactionModeMain"), extendConfig({}, controller.args[2], "flxTransactionModeMain"));
        flxTransactionModeMain.setDefaultUnit(kony.flex.DP);
        var flxRow1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "72dp",
            "id": "flxRow1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknflx424242",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxRow1"), extendConfig({}, controller.args[1], "flxRow1"), extendConfig({}, controller.args[2], "flxRow1"));
        flxRow1.setDefaultUnit(kony.flex.DP);
        var lblField1 = new kony.ui.Label(extendConfig({
            "id": "lblField1",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl727272SSPReg34px",
            "text": kony.i18n.getLocalizedString("kony.i18n.verifyDetails.from"),
            "textStyle": {},
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 10
        }, controller.args[0], "lblField1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField1"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField1"));
        var flxSubValueWrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "55.44%",
            "id": "flxSubValueWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "51dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "17dp",
            "width": "77.07%"
        }, controller.args[0], "flxSubValueWrapper"), extendConfig({}, controller.args[1], "flxSubValueWrapper"), extendConfig({}, controller.args[2], "flxSubValueWrapper"));
        flxSubValueWrapper.setDefaultUnit(kony.flex.DP);
        var flxSubValue1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20dp",
            "id": "flxSubValue1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": 5,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxSubValue1"), extendConfig({}, controller.args[1], "flxSubValue1"), extendConfig({}, controller.args[2], "flxSubValue1"));
        flxSubValue1.setDefaultUnit(kony.flex.DP);
        var lblSubValue1 = new kony.ui.Label(extendConfig({
            "id": "lblSubValue1",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknlbl4176a4SSPSB18px",
            "text": "Account Nick Name...123",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblSubValue1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSubValue1"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblSubValue1"));
        flxSubValue1.add(lblSubValue1);
        var flxSubValue2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSubValue2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": "5dp",
            "skin": "slFbox",
            "top": "3dp",
            "width": "100%"
        }, controller.args[0], "flxSubValue2"), extendConfig({}, controller.args[1], "flxSubValue2"), extendConfig({}, controller.args[2], "flxSubValue2"));
        flxSubValue2.setDefaultUnit(kony.flex.DP);
        var lblAmountBalance = new kony.ui.Label(extendConfig({
            "id": "lblAmountBalance",
            "isVisible": true,
            "left": "5dp",
            "right": 0,
            "skin": "ICSknlblSSP72727213px",
            "text": "$ 5200",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAmountBalance"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAmountBalance"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAmountBalance"));
        var lblAmountAvailableBalance = new kony.ui.Label(extendConfig({
            "id": "lblAmountAvailableBalance",
            "isVisible": true,
            "left": 10,
            "right": "0dp",
            "skin": "ICSknlblSSP72727213px",
            "text": "Available Balance:",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAmountAvailableBalance"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAmountAvailableBalance"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAmountAvailableBalance"));
        flxSubValue2.add(lblAmountBalance, lblAmountAvailableBalance);
        flxSubValueWrapper.add(flxSubValue1, flxSubValue2);
        var flxCheveron = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxCheveron",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "11%",
            "zIndex": 2
        }, controller.args[0], "flxCheveron"), extendConfig({}, controller.args[1], "flxCheveron"), extendConfig({}, controller.args[2], "flxCheveron"));
        flxCheveron.setDefaultUnit(kony.flex.DP);
        var imgAmountCheveron = new kony.ui.Image2(extendConfig({
            "centerY": "50.00%",
            "height": "20dp",
            "id": "imgAmountCheveron",
            "isVisible": true,
            "right": "19dp",
            "skin": "slImage",
            "src": "chevron.png",
            "top": "0dp",
            "width": "15dp",
            "zIndex": 2
        }, controller.args[0], "imgAmountCheveron"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgAmountCheveron"), extendConfig({}, controller.args[2], "imgAmountCheveron"));
        flxCheveron.add(imgAmountCheveron);
        flxRow1.add(lblField1, flxSubValueWrapper, flxCheveron);
        var flxRowSeperator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxRowSeperator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxSeparatora6a6a6",
            "top": "0dp",
            "width": "100%",
            "zIndex": 4
        }, controller.args[0], "flxRowSeperator"), extendConfig({}, controller.args[1], "flxRowSeperator"), extendConfig({}, controller.args[2], "flxRowSeperator"));
        flxRowSeperator.setDefaultUnit(kony.flex.DP);
        flxRowSeperator.add();
        var flxAmountWrapperConatiner = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "height": "80%",
            "id": "flxAmountWrapperConatiner",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "1dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxAmountWrapperConatiner"), extendConfig({}, controller.args[1], "flxAmountWrapperConatiner"), extendConfig({}, controller.args[2], "flxAmountWrapperConatiner"));
        flxAmountWrapperConatiner.setDefaultUnit(kony.flex.DP);
        var flxErrorMessage = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10%",
            "id": "flxErrorMessage",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxErrorMessage"), extendConfig({}, controller.args[1], "flxErrorMessage"), extendConfig({}, controller.args[2], "flxErrorMessage"));
        flxErrorMessage.setDefaultUnit(kony.flex.DP);
        var lblErrMsg = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lblErrMsg",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLblEE000534px",
            "text": "You have insufficient funds for this payment.",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 2
        }, controller.args[0], "lblErrMsg"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblErrMsg"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblErrMsg"));
        flxErrorMessage.add(lblErrMsg);
        var flxAmount = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "90%",
            "id": "flxAmount",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "11%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAmount"), extendConfig({}, controller.args[1], "flxAmount"), extendConfig({}, controller.args[2], "flxAmount"));
        flxAmount.setDefaultUnit(kony.flex.DP);
        var lblAmountLabel = new kony.ui.Label(extendConfig({
            "id": "lblAmountLabel",
            "isVisible": true,
            "left": "25dp",
            "skin": "ICSknLbl727272SSPReg34px",
            "text": kony.i18n.getLocalizedString("kony.i18n.verifyDetails.amount"),
            "textStyle": {},
            "top": "5%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAmountLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAmountLabel"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAmountLabel"));
        var flxAmountWrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxAmountWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "sknflxe3e3e3border",
            "top": "2%",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxAmountWrapper"), extendConfig({}, controller.args[1], "flxAmountWrapper"), extendConfig({}, controller.args[2], "flxAmountWrapper"));
        flxAmountWrapper.setDefaultUnit(kony.flex.DP);
        var lblDollar = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "100%",
            "id": "lblDollar",
            "isVisible": true,
            "right": "92%",
            "skin": "ICSkn4A4A4ASSP72PX",
            "text": kony.i18n.getLocalizedString("kony.mb.common.currencySymbol"),
            "textStyle": {},
            "width": "4%",
            "zIndex": 5
        }, controller.args[0], "lblDollar"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDollar"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblDollar"));
        var tbxAmount = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerY": "50%",
            "focusSkin": "sknTxtD8D8D8SSP42pxTab",
            "id": "tbxAmount",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "9%",
            "secureTextEntry": false,
            "skin": "ICSknTbx42424261px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "width": "80%",
            "zIndex": 5
        }, controller.args[0], "tbxAmount"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxAmount"), extendConfig({
            "autoCorrect": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "placeholderSkin": "sknTbxFontSSPRSemiBold170",
            "showClearButton": true,
            "showCloseButton": true,
            "showProgressIndicator": true,
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "tbxAmount"));
        var ImageClear = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "18dp",
            "id": "ImageClear",
            "isVisible": true,
            "right": "5%",
            "skin": "slImage",
            "src": "clear_field.png",
            "top": "10dp",
            "width": "5%",
            "zIndex": 5
        }, controller.args[0], "ImageClear"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "ImageClear"), extendConfig({}, controller.args[2], "ImageClear"));
        flxAmountWrapper.add(lblDollar, tbxAmount, ImageClear);
        flxAmount.add(lblAmountLabel, flxAmountWrapper);
        var btnAmountContinue = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "centerX": "50%",
            "focusSkin": "sknBtn003e75",
            "height": "50dp",
            "id": "btnAmountContinue",
            "isVisible": true,
            "left": "20dp",
            "onClick": controller.AS_Button_c31b0ae667614bebaf74e3fefc251c50,
            "right": "20dp",
            "skin": "ICSknBtnE3E9F0DisableBorder1px",
            "text": "Continue",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "btnAmountContinue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnAmountContinue"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnAmountContinue"));
        flxAmountWrapperConatiner.add(flxErrorMessage, flxAmount, btnAmountContinue);
        flxTransactionModeMain.add(flxRow1, flxRowSeperator, flxAmountWrapperConatiner);
        flxMainContainer.add(flxTransactionModeMain);
        flxAmountMaincontainer.add(flxAmountHeader, flxMainContainer);
        var flxAmountKeypad = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "0dp",
            "clipBounds": true,
            "id": "flxAmountKeypad",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxAmountKeypad"), extendConfig({}, controller.args[1], "flxAmountKeypad"), extendConfig({}, controller.args[2], "flxAmountKeypad"));
        flxAmountKeypad.setDefaultUnit(kony.flex.DP);
        var flxShadowSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "4dp",
            "id": "flxShadowSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxSeparatora6a6a6",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxShadowSeparator"), extendConfig({}, controller.args[1], "flxShadowSeparator"), extendConfig({}, controller.args[2], "flxShadowSeparator"));
        flxShadowSeparator.setDefaultUnit(kony.flex.DP);
        flxShadowSeparator.add();
        var flxKeypadRowOne = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "53dp",
            "id": "flxKeypadRowOne",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICflxf1",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxKeypadRowOne"), extendConfig({}, controller.args[1], "flxKeypadRowOne"), extendConfig({}, controller.args[2], "flxKeypadRowOne"));
        flxKeypadRowOne.setDefaultUnit(kony.flex.DP);
        var btn1 = new kony.ui.Button(extendConfig({
            "height": "100%",
            "id": "btn1",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICsknBtnKeybadBorder",
            "text": "1",
            "top": "0dp",
            "width": "33.30%",
            "zIndex": 1
        }, controller.args[0], "btn1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btn1"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btn1"));
        var btn2 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "height": "100%",
            "id": "btn2",
            "isVisible": true,
            "skin": "ICsknBtnKeybadBorder",
            "text": "2",
            "top": "0dp",
            "width": "33.30%",
            "zIndex": 1
        }, controller.args[0], "btn2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btn2"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btn2"));
        var btn3 = new kony.ui.Button(extendConfig({
            "height": "100%",
            "id": "btn3",
            "isVisible": true,
            "right": "0dp",
            "skin": "ICsknBtnKeybadBorder",
            "text": "3",
            "top": "0dp",
            "width": "33.30%",
            "zIndex": 1
        }, controller.args[0], "btn3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btn3"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btn3"));
        flxKeypadRowOne.add(btn1, btn2, btn3);
        var flxKeypadRowTwo = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "53dp",
            "id": "flxKeypadRowTwo",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICflxf1",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxKeypadRowTwo"), extendConfig({}, controller.args[1], "flxKeypadRowTwo"), extendConfig({}, controller.args[2], "flxKeypadRowTwo"));
        flxKeypadRowTwo.setDefaultUnit(kony.flex.DP);
        var btn4 = new kony.ui.Button(extendConfig({
            "height": "100%",
            "id": "btn4",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICsknBtnKeybadBorder",
            "text": "4",
            "top": "0dp",
            "width": "33.30%",
            "zIndex": 1
        }, controller.args[0], "btn4"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btn4"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btn4"));
        var btn5 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "height": "100%",
            "id": "btn5",
            "isVisible": true,
            "skin": "ICsknBtnKeybadBorder",
            "text": "5",
            "top": "0dp",
            "width": "33.30%",
            "zIndex": 1
        }, controller.args[0], "btn5"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btn5"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btn5"));
        var btn6 = new kony.ui.Button(extendConfig({
            "height": "100%",
            "id": "btn6",
            "isVisible": true,
            "right": "0dp",
            "skin": "ICsknBtnKeybadBorder",
            "text": "6",
            "top": "0dp",
            "width": "33.30%",
            "zIndex": 1
        }, controller.args[0], "btn6"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btn6"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btn6"));
        flxKeypadRowTwo.add(btn4, btn5, btn6);
        var flxKeypadRowThree = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "53dp",
            "id": "flxKeypadRowThree",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICflxf1",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxKeypadRowThree"), extendConfig({}, controller.args[1], "flxKeypadRowThree"), extendConfig({}, controller.args[2], "flxKeypadRowThree"));
        flxKeypadRowThree.setDefaultUnit(kony.flex.DP);
        var btn7 = new kony.ui.Button(extendConfig({
            "height": "100%",
            "id": "btn7",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICsknBtnKeybadBorder",
            "text": "7",
            "top": "0dp",
            "width": "33.30%",
            "zIndex": 1
        }, controller.args[0], "btn7"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btn7"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btn7"));
        var btn8 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "height": "100%",
            "id": "btn8",
            "isVisible": true,
            "skin": "ICsknBtnKeybadBorder",
            "text": "8",
            "top": "0dp",
            "width": "33.30%",
            "zIndex": 1
        }, controller.args[0], "btn8"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btn8"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btn8"));
        var btn9 = new kony.ui.Button(extendConfig({
            "height": "100%",
            "id": "btn9",
            "isVisible": true,
            "right": "0dp",
            "skin": "ICsknBtnKeybadBorder",
            "text": "9",
            "top": "0dp",
            "width": "33.30%",
            "zIndex": 1
        }, controller.args[0], "btn9"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btn9"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btn9"));
        flxKeypadRowThree.add(btn7, btn8, btn9);
        var flxKeypadRowFour = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "53dp",
            "id": "flxKeypadRowFour",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "1dp",
            "isModalContainer": false,
            "skin": "ICflxf1",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxKeypadRowFour"), extendConfig({}, controller.args[1], "flxKeypadRowFour"), extendConfig({}, controller.args[2], "flxKeypadRowFour"));
        flxKeypadRowFour.setDefaultUnit(kony.flex.DP);
        var btnDecimalSeperator = new kony.ui.Button(extendConfig({
            "height": "100%",
            "id": "btnDecimalSeperator",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICsknBtnKeybadBgLightGrey",
            "top": "0dp",
            "width": "33.30%",
            "zIndex": 1
        }, controller.args[0], "btnDecimalSeperator"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnDecimalSeperator"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnDecimalSeperator"));
        var btn0 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "height": "100%",
            "id": "btn0",
            "isVisible": true,
            "skin": "ICsknBtnKeybadBorder",
            "text": "0",
            "top": "0dp",
            "width": "33.30%",
            "zIndex": 1
        }, controller.args[0], "btn0"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btn0"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btn0"));
        var imgClear = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "50%",
            "id": "imgClear",
            "isVisible": true,
            "right": "0%",
            "skin": "slImage",
            "src": "cancelkeypad_3.png",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, controller.args[0], "imgClear"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgClear"), extendConfig({}, controller.args[2], "imgClear"));
        flxKeypadRowFour.add(btnDecimalSeperator, btn0, imgClear);
        flxAmountKeypad.add(flxShadowSeparator, flxKeypadRowOne, flxKeypadRowTwo, flxKeypadRowThree, flxKeypadRowFour);
        flxbillPaymentAmountDetails.add(flxAmountMaincontainer, flxAmountKeypad);
        var flxVerifyDetails = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxVerifyDetails",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxVerifyDetails"), extendConfig({}, controller.args[1], "flxVerifyDetails"), extendConfig({}, controller.args[2], "flxVerifyDetails"));
        flxVerifyDetails.setDefaultUnit(kony.flex.DP);
        var flxVerifyDetailsMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "90%",
            "id": "flxVerifyDetailsMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxVerifyDetailsMain"), extendConfig({}, controller.args[1], "flxVerifyDetailsMain"), extendConfig({}, controller.args[2], "flxVerifyDetailsMain"));
        flxVerifyDetailsMain.setDefaultUnit(kony.flex.DP);
        var flxVerifyHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "59dp",
            "id": "flxVerifyHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlx003E75",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxVerifyHeader"), extendConfig({}, controller.args[1], "flxVerifyHeader"), extendConfig({}, controller.args[2], "flxVerifyHeader"));
        flxVerifyHeader.setDefaultUnit(kony.flex.DP);
        var flxVerifyHeaderTop = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxVerifyHeaderTop",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxVerifyHeaderTop"), extendConfig({}, controller.args[1], "flxVerifyHeaderTop"), extendConfig({}, controller.args[2], "flxVerifyHeaderTop"));
        flxVerifyHeaderTop.setDefaultUnit(kony.flex.DP);
        var flxVerifyBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxVerifyBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "10%"
        }, controller.args[0], "flxVerifyBack"), extendConfig({}, controller.args[1], "flxVerifyBack"), extendConfig({}, controller.args[2], "flxVerifyBack"));
        flxVerifyBack.setDefaultUnit(kony.flex.DP);
        var imgVerifyBack = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgVerifyBack",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "backbutton.png",
            "width": "12dp",
            "zIndex": 1
        }, controller.args[0], "imgVerifyBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgVerifyBack"), extendConfig({}, controller.args[2], "imgVerifyBack"));
        flxVerifyBack.add(imgVerifyBack);
        var flxVerifyName = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxVerifyName",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "10dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "60%",
            "zIndex": 1
        }, controller.args[0], "flxVerifyName"), extendConfig({}, controller.args[1], "flxVerifyName"), extendConfig({}, controller.args[2], "flxVerifyName"));
        flxVerifyName.setDefaultUnit(kony.flex.DP);
        var lblVerifyName = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblVerifyName",
            "isVisible": true,
            "skin": "ICSknLblFFFFFSSPSB34Px",
            "text": "Review Payment Details",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblVerifyName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblVerifyName"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblVerifyName"));
        flxVerifyName.add(lblVerifyName);
        var btnVerifyCancel = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "focusSkin": "ICSKnBtnffffff15px",
            "height": "20dp",
            "id": "btnVerifyCancel",
            "isVisible": true,
            "right": "20dp",
            "skin": "ICSKnBtnffffff15px",
            "text": "Cancel",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "btnVerifyCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnVerifyCancel"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnVerifyCancel"));
        flxVerifyHeaderTop.add(flxVerifyBack, flxVerifyName, btnVerifyCancel);
        flxVerifyHeader.add(flxVerifyHeaderTop);
        var flxReviewMain = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bottom": "70dp",
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "90%",
            "horizontalScrollIndicator": true,
            "id": "flxReviewMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "sknFlxScrlffffff",
            "top": "0dp",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxReviewMain"), extendConfig({}, controller.args[1], "flxReviewMain"), extendConfig({}, controller.args[2], "flxReviewMain"));
        flxReviewMain.setDefaultUnit(kony.flex.DP);
        var flxMMAmount = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxMMAmount",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMMAmount"), extendConfig({}, controller.args[1], "flxMMAmount"), extendConfig({}, controller.args[2], "flxMMAmount"));
        flxMMAmount.setDefaultUnit(kony.flex.DP);
        var flxVerifyAccNumWarnMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "110dp",
            "id": "flxVerifyAccNumWarnMain",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxffffff",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxVerifyAccNumWarnMain"), extendConfig({}, controller.args[1], "flxVerifyAccNumWarnMain"), extendConfig({}, controller.args[2], "flxVerifyAccNumWarnMain"));
        flxVerifyAccNumWarnMain.setDefaultUnit(kony.flex.DP);
        var flxVerifyAccNumWarn = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxVerifyAccNumWarn",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "2%",
            "isModalContainer": false,
            "right": "2%",
            "skin": "ICSknFlxffffffBorder1Px333333",
            "top": "15dp",
            "width": "95%",
            "zIndex": 10
        }, controller.args[0], "flxVerifyAccNumWarn"), extendConfig({}, controller.args[1], "flxVerifyAccNumWarn"), extendConfig({}, controller.args[2], "flxVerifyAccNumWarn"));
        flxVerifyAccNumWarn.setDefaultUnit(kony.flex.DP);
        var imgVerifyWarn = new kony.ui.Image2(extendConfig({
            "height": "20dp",
            "id": "imgVerifyWarn",
            "isVisible": true,
            "left": "2dp",
            "right": "0dp",
            "skin": "slImage",
            "src": "warninground.png",
            "top": "5dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "imgVerifyWarn"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgVerifyWarn"), extendConfig({}, controller.args[2], "imgVerifyWarn"));
        var lblVerifyAccNumWarnDesc = new kony.ui.Label(extendConfig({
            "id": "lblVerifyAccNumWarnDesc",
            "isVisible": true,
            "left": "30dp",
            "skin": "ICSknLbl727272SSPReg34px",
            "text": kony.i18n.getLocalizedString("i18n.verifyDetails.fesibilityInlineHeader"),
            "textStyle": {},
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblVerifyAccNumWarnDesc"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblVerifyAccNumWarnDesc"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblVerifyAccNumWarnDesc"));
        flxVerifyAccNumWarn.add(imgVerifyWarn, lblVerifyAccNumWarnDesc);
        flxVerifyAccNumWarnMain.add(flxVerifyAccNumWarn);
        var flxToAndFrom = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxToAndFrom",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 5
        }, controller.args[0], "flxToAndFrom"), extendConfig({}, controller.args[1], "flxToAndFrom"), extendConfig({}, controller.args[2], "flxToAndFrom"));
        flxToAndFrom.setDefaultUnit(kony.flex.DP);
        var flxToAcc = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "72dp",
            "id": "flxToAcc",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "Copyf",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxToAcc"), extendConfig({}, controller.args[1], "flxToAcc"), extendConfig({}, controller.args[2], "flxToAcc"));
        flxToAcc.setDefaultUnit(kony.flex.DP);
        var lblFrom = new kony.ui.Label(extendConfig({
            "id": "lblFrom",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl727272SSPReg34px",
            "text": "From:",
            "textStyle": {},
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblFrom"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFrom"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblFrom"));
        var flxFromAcc = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "55.44%",
            "id": "flxFromAcc",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "51dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "17dp",
            "width": "77.07%",
            "zIndex": 10
        }, controller.args[0], "flxFromAcc"), extendConfig({}, controller.args[1], "flxFromAcc"), extendConfig({}, controller.args[2], "flxFromAcc"));
        flxFromAcc.setDefaultUnit(kony.flex.DP);
        var flxFromAccType = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "18dp",
            "id": "flxFromAccType",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": 5,
            "skin": "slFbox",
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "flxFromAccType"), extendConfig({}, controller.args[1], "flxFromAccType"), extendConfig({}, controller.args[2], "flxFromAccType"));
        flxFromAccType.setDefaultUnit(kony.flex.DP);
        var flxAccType = new kony.ui.Label(extendConfig({
            "id": "flxAccType",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknlbl4176a4SSPSB18px",
            "text": "Account Nick Name...123",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "flxAccType"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "flxAccType"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "flxAccType"));
        var flxAccImg = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "13dp",
            "id": "flxAccImg",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "5dp",
            "skin": "CopyflxIconShadow",
            "top": "0dp",
            "width": "13dp"
        }, controller.args[0], "flxAccImg"), extendConfig({}, controller.args[1], "flxAccImg"), extendConfig({}, controller.args[2], "flxAccImg"));
        flxAccImg.setDefaultUnit(kony.flex.DP);
        var imgAccType = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "13dp",
            "id": "imgAccType",
            "isVisible": true,
            "skin": "slImage",
            "src": "businessaccount_1.png",
            "width": "13dp"
        }, controller.args[0], "imgAccType"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgAccType"), extendConfig({}, controller.args[2], "imgAccType"));
        flxAccImg.add(imgAccType);
        flxFromAccType.add(flxAccType, flxAccImg);
        var flxAvailableBalanceFrom = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxAvailableBalanceFrom",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": "5dp",
            "skin": "Copyf",
            "top": "3dp",
            "width": "100%"
        }, controller.args[0], "flxAvailableBalanceFrom"), extendConfig({}, controller.args[1], "flxAvailableBalanceFrom"), extendConfig({}, controller.args[2], "flxAvailableBalanceFrom"));
        flxAvailableBalanceFrom.setDefaultUnit(kony.flex.DP);
        var lblBalanceValue = new kony.ui.Label(extendConfig({
            "id": "lblBalanceValue",
            "isVisible": true,
            "left": "5dp",
            "right": 0,
            "skin": "ICSknlblSSP72727213px",
            "text": "12344",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblBalanceValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBalanceValue"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblBalanceValue"));
        var lblBalanceLabel = new kony.ui.Label(extendConfig({
            "id": "lblBalanceLabel",
            "isVisible": true,
            "left": 10,
            "right": "0dp",
            "skin": "ICSknlblSSP72727213px",
            "text": "Available Balance:",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblBalanceLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBalanceLabel"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblBalanceLabel"));
        var imgVerifyFromAmountWarn = new kony.ui.Image2(extendConfig({
            "height": "20dp",
            "id": "imgVerifyFromAmountWarn",
            "isVisible": false,
            "right": "0dp",
            "skin": "slImage",
            "src": "warninground.png",
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "imgVerifyFromAmountWarn"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgVerifyFromAmountWarn"), extendConfig({}, controller.args[2], "imgVerifyFromAmountWarn"));
        flxAvailableBalanceFrom.add(lblBalanceValue, lblBalanceLabel, imgVerifyFromAmountWarn);
        flxFromAcc.add(flxFromAccType, flxAvailableBalanceFrom);
        var flxFromArrow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxFromArrow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "11%",
            "zIndex": 10
        }, controller.args[0], "flxFromArrow"), extendConfig({}, controller.args[1], "flxFromArrow"), extendConfig({}, controller.args[2], "flxFromArrow"));
        flxFromArrow.setDefaultUnit(kony.flex.DP);
        var imgFromArrow = new kony.ui.Image2(extendConfig({
            "centerY": "50.00%",
            "height": "20dp",
            "id": "imgFromArrow",
            "isVisible": true,
            "right": "19dp",
            "skin": "slImage",
            "src": "segmentarrow.png",
            "width": "15dp",
            "zIndex": 2
        }, controller.args[0], "imgFromArrow"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgFromArrow"), extendConfig({}, controller.args[2], "imgFromArrow"));
        flxFromArrow.add(imgFromArrow);
        flxToAcc.add(lblFrom, flxFromAcc, flxFromArrow);
        var flxSeperator1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeperator1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxe9e9e9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 4
        }, controller.args[0], "flxSeperator1"), extendConfig({}, controller.args[1], "flxSeperator1"), extendConfig({}, controller.args[2], "flxSeperator1"));
        flxSeperator1.setDefaultUnit(kony.flex.DP);
        flxSeperator1.add();
        var flxTo = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "72dp",
            "id": "flxTo",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxTo"), extendConfig({}, controller.args[1], "flxTo"), extendConfig({}, controller.args[2], "flxTo"));
        flxTo.setDefaultUnit(kony.flex.DP);
        var lblTo = new kony.ui.Label(extendConfig({
            "id": "lblTo",
            "isVisible": true,
            "left": "20dp",
            "skin": "CopysknMMLeftLabels",
            "text": "To",
            "textStyle": {},
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 10
        }, controller.args[0], "lblTo"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTo"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblTo"));
        var flxToAccont = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "55.44%",
            "id": "flxToAccont",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "51dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "17dp",
            "width": "77.07%"
        }, controller.args[0], "flxToAccont"), extendConfig({}, controller.args[1], "flxToAccont"), extendConfig({}, controller.args[2], "flxToAccont"));
        flxToAccont.setDefaultUnit(kony.flex.DP);
        var flxToAccType = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "21dp",
            "id": "flxToAccType",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": 5,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxToAccType"), extendConfig({}, controller.args[1], "flxToAccType"), extendConfig({}, controller.args[2], "flxToAccType"));
        flxToAccType.setDefaultUnit(kony.flex.DP);
        var lblToAccType = new kony.ui.Label(extendConfig({
            "id": "lblToAccType",
            "isVisible": true,
            "right": "0dp",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblToAccType"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblToAccType"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblToAccType"));
        var flxAccTypeImg = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "13dp",
            "id": "flxAccTypeImg",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "5dp",
            "skin": "CopyflxIconShadow",
            "top": "0dp",
            "width": "13dp"
        }, controller.args[0], "flxAccTypeImg"), extendConfig({}, controller.args[1], "flxAccTypeImg"), extendConfig({}, controller.args[2], "flxAccTypeImg"));
        flxAccTypeImg.setDefaultUnit(kony.flex.DP);
        var imgToAccImg = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "13dp",
            "id": "imgToAccImg",
            "isVisible": true,
            "skin": "slImage",
            "src": "businessaccount_1.png",
            "width": "13dp"
        }, controller.args[0], "imgToAccImg"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgToAccImg"), extendConfig({}, controller.args[2], "imgToAccImg"));
        flxAccTypeImg.add(imgToAccImg);
        flxToAccType.add(lblToAccType, flxAccTypeImg);
        var flxAvailableBalanceTo = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxAvailableBalanceTo",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": "5dp",
            "skin": "Copyf",
            "top": "3dp",
            "width": "100%"
        }, controller.args[0], "flxAvailableBalanceTo"), extendConfig({}, controller.args[1], "flxAvailableBalanceTo"), extendConfig({}, controller.args[2], "flxAvailableBalanceTo"));
        flxAvailableBalanceTo.setDefaultUnit(kony.flex.DP);
        var lblAvailableBalanceToValue = new kony.ui.Label(extendConfig({
            "bottom": "0dp",
            "id": "lblAvailableBalanceToValue",
            "isVisible": true,
            "left": 10,
            "right": "0dp",
            "skin": "ICsknLbla1",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAvailableBalanceToValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAvailableBalanceToValue"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAvailableBalanceToValue"));
        var lblAvailableBalanceToLabel = new kony.ui.Label(extendConfig({
            "bottom": "0dp",
            "id": "lblAvailableBalanceToLabel",
            "isVisible": true,
            "right": "-5dp",
            "skin": "ICsknLbla1",
            "textStyle": {},
            "top": "2dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAvailableBalanceToLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAvailableBalanceToLabel"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAvailableBalanceToLabel"));
        flxAvailableBalanceTo.add(lblAvailableBalanceToValue, lblAvailableBalanceToLabel);
        flxToAccont.add(flxToAccType, flxAvailableBalanceTo);
        var flxToArrow = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxToArrow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "11%",
            "zIndex": 2
        }, controller.args[0], "flxToArrow"), extendConfig({}, controller.args[1], "flxToArrow"), extendConfig({}, controller.args[2], "flxToArrow"));
        flxToArrow.setDefaultUnit(kony.flex.DP);
        var CopyimgFromArrow0e9241c1468a94d = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "CopyimgFromArrow0e9241c1468a94d",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron_2.png",
            "top": "0dp",
            "width": "15dp",
            "zIndex": 2
        }, controller.args[0], "CopyimgFromArrow0e9241c1468a94d"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopyimgFromArrow0e9241c1468a94d"), extendConfig({}, controller.args[2], "CopyimgFromArrow0e9241c1468a94d"));
        flxToArrow.add(CopyimgFromArrow0e9241c1468a94d);
        flxTo.add(lblTo, flxToAccont, flxToArrow);
        var flxSeparator2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator2",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxf1f1f1",
            "top": "0dp",
            "width": "100%",
            "zIndex": 4
        }, controller.args[0], "flxSeparator2"), extendConfig({}, controller.args[1], "flxSeparator2"), extendConfig({}, controller.args[2], "flxSeparator2"));
        flxSeparator2.setDefaultUnit(kony.flex.DP);
        flxSeparator2.add();
        flxToAndFrom.add(flxToAcc, flxSeperator1, flxTo, flxSeparator2);
        var flxConfirmationDetails = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxConfirmationDetails",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlxffffff",
            "top": "0dp",
            "width": "100%",
            "zIndex": 4
        }, controller.args[0], "flxConfirmationDetails"), extendConfig({}, controller.args[1], "flxConfirmationDetails"), extendConfig({}, controller.args[2], "flxConfirmationDetails"));
        flxConfirmationDetails.setDefaultUnit(kony.flex.DP);
        var flxField1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxField1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxField1"), extendConfig({}, controller.args[1], "flxField1"), extendConfig({}, controller.args[2], "flxField1"));
        flxField1.setDefaultUnit(kony.flex.DP);
        var lblField1Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField1Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl727272SSPReg34px",
            "text": "Bill Payer:",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField1Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField1Label"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField1Label"));
        var lblField1Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField1Value",
            "isVisible": true,
            "right": "50dp",
            "skin": "sknlbl4176a4SSPSB18px",
            "text": "John",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField1Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField1Value"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField1Value"));
        var imgArrow1 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow1",
            "isVisible": true,
            "right": "19dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "imgArrow1"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow1"), extendConfig({}, controller.args[2], "imgArrow1"));
        var flxCfmSeparator1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxCfmSeparator1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxe9e9e9",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCfmSeparator1"), extendConfig({}, controller.args[1], "flxCfmSeparator1"), extendConfig({}, controller.args[2], "flxCfmSeparator1"));
        flxCfmSeparator1.setDefaultUnit(kony.flex.DP);
        flxCfmSeparator1.add();
        flxField1.add(lblField1Label, lblField1Value, imgArrow1, flxCfmSeparator1);
        var flxField2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxField2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxField2"), extendConfig({}, controller.args[1], "flxField2"), extendConfig({}, controller.args[2], "flxField2"));
        flxField2.setDefaultUnit(kony.flex.DP);
        var lblField2Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField2Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl727272SSPReg34px",
            "text": "Payable To:",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField2Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField2Label"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField2Label"));
        var lblField2Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField2Value",
            "isVisible": true,
            "right": "50dp",
            "skin": "sknlbl4176a4SSPSB18px",
            "text": "Croce Russa",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField2Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField2Value"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField2Value"));
        var imgArrow2 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow2",
            "isVisible": true,
            "right": "19dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "imgArrow2"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow2"), extendConfig({}, controller.args[2], "imgArrow2"));
        var flxCfmSeparator2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxCfmSeparator2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxe9e9e9",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCfmSeparator2"), extendConfig({}, controller.args[1], "flxCfmSeparator2"), extendConfig({}, controller.args[2], "flxCfmSeparator2"));
        flxCfmSeparator2.setDefaultUnit(kony.flex.DP);
        flxCfmSeparator2.add();
        flxField2.add(lblField2Label, lblField2Value, imgArrow2, flxCfmSeparator2);
        var flxField3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxField3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxField3"), extendConfig({}, controller.args[1], "flxField3"), extendConfig({}, controller.args[2], "flxField3"));
        flxField3.setDefaultUnit(kony.flex.DP);
        var lblField3Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField3Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl727272SSPReg34px",
            "text": "Recipient Account Number:",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField3Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField3Label"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField3Label"));
        var lblField3Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField3Value",
            "isVisible": true,
            "right": "50dp",
            "skin": "sknlbl4176a4SSPSB18px",
            "text": "900050",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField3Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField3Value"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField3Value"));
        var imgArrow3 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow3",
            "isVisible": true,
            "right": "19dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "imgArrow3"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow3"), extendConfig({}, controller.args[2], "imgArrow3"));
        var flxCfmSeparator3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxCfmSeparator3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxe9e9e9",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCfmSeparator3"), extendConfig({}, controller.args[1], "flxCfmSeparator3"), extendConfig({}, controller.args[2], "flxCfmSeparator3"));
        flxCfmSeparator3.setDefaultUnit(kony.flex.DP);
        flxCfmSeparator3.add();
        var flxVerifyAccNumberWarn = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxVerifyAccNumberWarn",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "reverseLayoutDirection": false,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "Copyf",
            "top": "37dp",
            "width": "100%"
        }, controller.args[0], "flxVerifyAccNumberWarn"), extendConfig({}, controller.args[1], "flxVerifyAccNumberWarn"), extendConfig({}, controller.args[2], "flxVerifyAccNumberWarn"));
        flxVerifyAccNumberWarn.setDefaultUnit(kony.flex.DP);
        var lblVerifyInvalidAccNum = new kony.ui.Label(extendConfig({
            "id": "lblVerifyInvalidAccNum",
            "isVisible": true,
            "left": "45dp",
            "skin": "ICsknLblFFA50030Px",
            "text": "Available Balance:",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblVerifyInvalidAccNum"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblVerifyInvalidAccNum"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblVerifyInvalidAccNum"));
        var imgVerifyAccWarn = new kony.ui.Image2(extendConfig({
            "height": "20dp",
            "id": "imgVerifyAccWarn",
            "isVisible": true,
            "left": "20dp",
            "skin": "slImage",
            "src": "warninground.png",
            "top": "0dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "imgVerifyAccWarn"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgVerifyAccWarn"), extendConfig({}, controller.args[2], "imgVerifyAccWarn"));
        flxVerifyAccNumberWarn.add(lblVerifyInvalidAccNum, imgVerifyAccWarn);
        flxField3.add(lblField3Label, lblField3Value, imgArrow3, flxCfmSeparator3, flxVerifyAccNumberWarn);
        var flxField4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxField4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxField4"), extendConfig({}, controller.args[1], "flxField4"), extendConfig({}, controller.args[2], "flxField4"));
        flxField4.setDefaultUnit(kony.flex.DP);
        var lblField4Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField4Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl727272SSPReg34px",
            "text": "Reason for Payment:",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField4Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField4Label"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField4Label"));
        var lblField4Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField4Value",
            "isVisible": true,
            "right": "50dp",
            "skin": "sknlbl4176a4SSPSB18px",
            "text": "Payment to ",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField4Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField4Value"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField4Value"));
        var imgArrow4 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow4",
            "isVisible": true,
            "right": "19dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "imgArrow4"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow4"), extendConfig({}, controller.args[2], "imgArrow4"));
        var flxCfmSeparator4 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxCfmSeparator4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxe9e9e9",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCfmSeparator4"), extendConfig({}, controller.args[1], "flxCfmSeparator4"), extendConfig({}, controller.args[2], "flxCfmSeparator4"));
        flxCfmSeparator4.setDefaultUnit(kony.flex.DP);
        flxCfmSeparator4.add();
        flxField4.add(lblField4Label, lblField4Value, imgArrow4, flxCfmSeparator4);
        var flxField5 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxField5",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxField5"), extendConfig({}, controller.args[1], "flxField5"), extendConfig({}, controller.args[2], "flxField5"));
        flxField5.setDefaultUnit(kony.flex.DP);
        var lblField5Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField5Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl727272SSPReg34px",
            "text": "Amount:",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField5Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField5Label"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField5Label"));
        var lblField5Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField5Value",
            "isVisible": true,
            "right": "50dp",
            "skin": "sknlbl4176a4SSPSB18px",
            "text": "1.24",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField5Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField5Value"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField5Value"));
        var imgArrow5 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow5",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "imgArrow5"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow5"), extendConfig({}, controller.args[2], "imgArrow5"));
        var flxCfmSeparator5 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxCfmSeparator5",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxe9e9e9",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCfmSeparator5"), extendConfig({}, controller.args[1], "flxCfmSeparator5"), extendConfig({}, controller.args[2], "flxCfmSeparator5"));
        flxCfmSeparator5.setDefaultUnit(kony.flex.DP);
        flxCfmSeparator5.add();
        flxField5.add(lblField5Label, lblField5Value, imgArrow5, flxCfmSeparator5);
        var flxField6 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxField6",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxField6"), extendConfig({}, controller.args[1], "flxField6"), extendConfig({}, controller.args[2], "flxField6"));
        flxField6.setDefaultUnit(kony.flex.DP);
        var lblField6Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField6Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl727272SSPReg34px",
            "text": "Acceptance Fee:",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField6Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField6Label"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField6Label"));
        var lblField6Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField6Value",
            "isVisible": true,
            "right": "20dp",
            "skin": "ICSknLbl42424215px",
            "text": "1.24",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField6Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField6Value"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField6Value"));
        var imgArrow6 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow6",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "imgArrow6"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow6"), extendConfig({}, controller.args[2], "imgArrow6"));
        var flxfield6Separator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxfield6Separator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxe9e9e9",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxfield6Separator"), extendConfig({}, controller.args[1], "flxfield6Separator"), extendConfig({}, controller.args[2], "flxfield6Separator"));
        flxfield6Separator.setDefaultUnit(kony.flex.DP);
        flxfield6Separator.add();
        flxField6.add(lblField6Label, lblField6Value, imgArrow6, flxfield6Separator);
        var flxField7 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxField7",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxField7"), extendConfig({}, controller.args[1], "flxField7"), extendConfig({}, controller.args[2], "flxField7"));
        flxField7.setDefaultUnit(kony.flex.DP);
        var lblField7Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField7Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl727272SSPReg34px",
            "text": "Payment Fee:",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField7Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField7Label"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField7Label"));
        var lblField7Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField7Value",
            "isVisible": true,
            "right": "20dp",
            "skin": "ICSknLbl42424215px",
            "text": "1.24",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField7Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField7Value"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField7Value"));
        var imgArrow7 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow7",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "imgArrow7"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow7"), extendConfig({}, controller.args[2], "imgArrow7"));
        var flxfield7Separator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxfield7Separator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxe9e9e9",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxfield7Separator"), extendConfig({}, controller.args[1], "flxfield7Separator"), extendConfig({}, controller.args[2], "flxfield7Separator"));
        flxfield7Separator.setDefaultUnit(kony.flex.DP);
        flxfield7Separator.add();
        flxField7.add(lblField7Label, lblField7Value, imgArrow7, flxfield7Separator);
        var flxField8 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxField8",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxField8"), extendConfig({}, controller.args[1], "flxField8"), extendConfig({}, controller.args[2], "flxField8"));
        flxField8.setDefaultUnit(kony.flex.DP);
        var lblField8Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField8Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl727272SSPReg34px",
            "text": "Total Amount:",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField8Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField8Label"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField8Label"));
        var lblField8Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField8Value",
            "isVisible": true,
            "right": "20dp",
            "skin": "ICSknLbl42424215px",
            "text": "1.24",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField8Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField8Value"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField8Value"));
        var imgArrow8 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow8",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "chevron.png",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "imgArrow8"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow8"), extendConfig({}, controller.args[2], "imgArrow8"));
        var flxfield8Separator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxfield8Separator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxe9e9e9",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxfield8Separator"), extendConfig({}, controller.args[1], "flxfield8Separator"), extendConfig({}, controller.args[2], "flxfield8Separator"));
        flxfield8Separator.setDefaultUnit(kony.flex.DP);
        flxfield8Separator.add();
        flxField8.add(lblField8Label, lblField8Value, imgArrow8, flxfield8Separator);
        var flxField9 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "54dp",
            "id": "flxField9",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxField9"), extendConfig({}, controller.args[1], "flxField9"), extendConfig({}, controller.args[2], "flxField9"));
        flxField9.setDefaultUnit(kony.flex.DP);
        var lblField9Label = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField9Label",
            "isVisible": true,
            "left": "20dp",
            "skin": "ICSknLbl727272SSPReg34px",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField9Label"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField9Label"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField9Label"));
        var lblField9Value = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblField9Value",
            "isVisible": true,
            "right": "20dp",
            "skin": "ICSknLbl42424215px",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblField9Value"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblField9Value"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblField9Value"));
        var imgArrow9 = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow9",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "transparent.png",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "imgArrow9"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow9"), extendConfig({}, controller.args[2], "imgArrow9"));
        var flxfield9Separator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxfield9Separator",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxe9e9e9",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxfield9Separator"), extendConfig({}, controller.args[1], "flxfield9Separator"), extendConfig({}, controller.args[2], "flxfield9Separator"));
        flxfield9Separator.setDefaultUnit(kony.flex.DP);
        flxfield9Separator.add();
        flxField9.add(lblField9Label, lblField9Value, imgArrow9, flxfield9Separator);
        var flxVerifyFromWanrn = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxVerifyFromWanrn",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5%",
            "isModalContainer": false,
            "skin": "ICSknFlxffffffBorder1Px333333",
            "top": "20dp",
            "width": "90%",
            "zIndex": 10
        }, controller.args[0], "flxVerifyFromWanrn"), extendConfig({}, controller.args[1], "flxVerifyFromWanrn"), extendConfig({}, controller.args[2], "flxVerifyFromWanrn"));
        flxVerifyFromWanrn.setDefaultUnit(kony.flex.DP);
        var imgVerifyFromWanrnDesc = new kony.ui.Image2(extendConfig({
            "height": "20dp",
            "id": "imgVerifyFromWanrnDesc",
            "isVisible": true,
            "left": "10dp",
            "right": "0dp",
            "skin": "slImage",
            "src": "warninground.png",
            "top": "5dp",
            "width": "20dp",
            "zIndex": 1
        }, controller.args[0], "imgVerifyFromWanrnDesc"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgVerifyFromWanrnDesc"), extendConfig({}, controller.args[2], "imgVerifyFromWanrnDesc"));
        var lblVerifyFromWanrnDesc = new kony.ui.Label(extendConfig({
            "id": "lblVerifyFromWanrnDesc",
            "isVisible": true,
            "left": "40dp",
            "skin": "ICSknLbl727272SSPReg34px",
            "text": "You have insufficient funds for this payment.  You can change the account to pay from or lower the bill amount.",
            "textStyle": {},
            "top": "0dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblVerifyFromWanrnDesc"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblVerifyFromWanrnDesc"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblVerifyFromWanrnDesc"));
        flxVerifyFromWanrn.add(imgVerifyFromWanrnDesc, lblVerifyFromWanrnDesc);
        var flxNotes = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxNotes",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "ICSknFlxffffff",
            "top": "20dp",
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxNotes"), extendConfig({}, controller.args[1], "flxNotes"), extendConfig({}, controller.args[2], "flxNotes"));
        flxNotes.setDefaultUnit(kony.flex.DP);
        var rtxtLegalNotes = new kony.ui.RichText(extendConfig({
            "id": "rtxtLegalNotes",
            "isVisible": true,
            "left": "20dp",
            "linkSkin": "ICSknRTextLink4176A434Px",
            "right": "20dp",
            "skin": "ICSknRText42424234px",
            "text": "<b>Legal notes: </b> the postal bulletin payment service is made available... <a href=\"#\" style=\"color: #4176A4\">Read All</a>",
            "top": "0"
        }, controller.args[0], "rtxtLegalNotes"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "rtxtLegalNotes"), extendConfig({
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "rtxtLegalNotes"));
        flxNotes.add(rtxtLegalNotes);
        var flxAddress = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxAddress",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "20dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "10dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flxAddress"), extendConfig({}, controller.args[1], "flxAddress"), extendConfig({}, controller.args[2], "flxAddress"));
        flxAddress.setDefaultUnit(kony.flex.DP);
        var lblAddressLabel = new kony.ui.Label(extendConfig({
            "id": "lblAddressLabel",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopysknMMLeftLabels",
            "text": "Beneficiary Address:",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAddressLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddressLabel"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAddressLabel"));
        var imgBeneArrow = new kony.ui.Image2(extendConfig({
            "height": "20dp",
            "id": "imgBeneArrow",
            "isVisible": true,
            "right": "0dp",
            "skin": "slImage",
            "src": "chevron.png",
            "top": "-15dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "imgBeneArrow"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgBeneArrow"), extendConfig({}, controller.args[2], "imgBeneArrow"));
        var lblAddress1 = new kony.ui.Label(extendConfig({
            "id": "lblAddress1",
            "isVisible": true,
            "left": "0dp",
            "text": "1010, Easy st, hill view Oxford, Nova",
            "textStyle": {},
            "top": "3dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAddress1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddress1"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAddress1"));
        var lblAddress2 = new kony.ui.Label(extendConfig({
            "id": "lblAddress2",
            "isVisible": true,
            "left": "0dp",
            "text": "scota BOL 1E0",
            "textStyle": {},
            "top": "1dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblAddress2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddress2"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblAddress2"));
        var flxMobile = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxMobile",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxMobile"), extendConfig({}, controller.args[1], "flxMobile"), extendConfig({}, controller.args[2], "flxMobile"));
        flxMobile.setDefaultUnit(kony.flex.DP);
        var lblMobileLabel = new kony.ui.Label(extendConfig({
            "id": "lblMobileLabel",
            "isVisible": true,
            "left": "0dp",
            "text": "Mobile:",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblMobileLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMobileLabel"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblMobileLabel"));
        var lblMobileValue = new kony.ui.Label(extendConfig({
            "id": "lblMobileValue",
            "isVisible": true,
            "left": "5dp",
            "text": "(+1)-123-1234-1234",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblMobileValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMobileValue"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblMobileValue"));
        flxMobile.add(lblMobileLabel, lblMobileValue);
        var flxEmail = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxEmail",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxEmail"), extendConfig({}, controller.args[1], "flxEmail"), extendConfig({}, controller.args[2], "flxEmail"));
        flxEmail.setDefaultUnit(kony.flex.DP);
        var lblEmailLabel = new kony.ui.Label(extendConfig({
            "id": "lblEmailLabel",
            "isVisible": true,
            "left": "0dp",
            "text": "Email:",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblEmailLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblEmailLabel"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblEmailLabel"));
        var lblEmailValue = new kony.ui.Label(extendConfig({
            "id": "lblEmailValue",
            "isVisible": true,
            "left": "5dp",
            "text": "name@email.com",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblEmailValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblEmailValue"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblEmailValue"));
        flxEmail.add(lblEmailLabel, lblEmailValue);
        var flxCity = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxCity",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxCity"), extendConfig({}, controller.args[1], "flxCity"), extendConfig({}, controller.args[2], "flxCity"));
        flxCity.setDefaultUnit(kony.flex.DP);
        var lblCityLabel = new kony.ui.Label(extendConfig({
            "id": "lblCityLabel",
            "isVisible": true,
            "left": "0dp",
            "text": "City:",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblCityLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCityLabel"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblCityLabel"));
        var lblCityValue = new kony.ui.Label(extendConfig({
            "id": "lblCityValue",
            "isVisible": true,
            "left": "5dp",
            "text": "Chennai",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblCityValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCityValue"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblCityValue"));
        flxCity.add(lblCityLabel, lblCityValue);
        var flxState = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxState",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxState"), extendConfig({}, controller.args[1], "flxState"), extendConfig({}, controller.args[2], "flxState"));
        flxState.setDefaultUnit(kony.flex.DP);
        var lblStateLabel = new kony.ui.Label(extendConfig({
            "id": "lblStateLabel",
            "isVisible": true,
            "left": "0dp",
            "text": "State:",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblStateLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblStateLabel"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblStateLabel"));
        var lblStateValue = new kony.ui.Label(extendConfig({
            "id": "lblStateValue",
            "isVisible": true,
            "left": "5dp",
            "text": "Tamilnadu",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblStateValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblStateValue"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblStateValue"));
        flxState.add(lblStateLabel, lblStateValue);
        var flxCountry = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxCountry",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxCountry"), extendConfig({}, controller.args[1], "flxCountry"), extendConfig({}, controller.args[2], "flxCountry"));
        flxCountry.setDefaultUnit(kony.flex.DP);
        var lblCountryLabel = new kony.ui.Label(extendConfig({
            "id": "lblCountryLabel",
            "isVisible": true,
            "left": "0dp",
            "text": "Country:",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblCountryLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCountryLabel"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblCountryLabel"));
        var lblCountryValue = new kony.ui.Label(extendConfig({
            "id": "lblCountryValue",
            "isVisible": true,
            "left": "5dp",
            "text": "India",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblCountryValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCountryValue"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblCountryValue"));
        flxCountry.add(lblCountryLabel, lblCountryValue);
        var flxPostalCode = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxPostalCode",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxPostalCode"), extendConfig({}, controller.args[1], "flxPostalCode"), extendConfig({}, controller.args[2], "flxPostalCode"));
        flxPostalCode.setDefaultUnit(kony.flex.DP);
        var lblPostalCodeLabel = new kony.ui.Label(extendConfig({
            "id": "lblPostalCodeLabel",
            "isVisible": true,
            "left": "0dp",
            "text": "Postal Code:",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblPostalCodeLabel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPostalCodeLabel"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblPostalCodeLabel"));
        var lblPostalCodeValue = new kony.ui.Label(extendConfig({
            "id": "lblPostalCodeValue",
            "isVisible": true,
            "left": "5dp",
            "text": "626001",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblPostalCodeValue"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPostalCodeValue"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblPostalCodeValue"));
        flxPostalCode.add(lblPostalCodeLabel, lblPostalCodeValue);
        flxAddress.add(lblAddressLabel, imgBeneArrow, lblAddress1, lblAddress2, flxMobile, flxEmail, flxCity, flxState, flxCountry, flxPostalCode);
        var flxAddressSeparator = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxAddressSeparator",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxf1",
            "top": "20dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxAddressSeparator"), extendConfig({}, controller.args[1], "flxAddressSeparator"), extendConfig({}, controller.args[2], "flxAddressSeparator"));
        flxAddressSeparator.setDefaultUnit(kony.flex.DP);
        flxAddressSeparator.add();
        flxConfirmationDetails.add(flxField1, flxField2, flxField3, flxField4, flxField5, flxField6, flxField7, flxField8, flxField9, flxVerifyFromWanrn, flxNotes, flxAddress, flxAddressSeparator);
        var flxSpace = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "flxSpace",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "ICSknFlxffffff",
            "top": "-1dp",
            "width": "100%",
            "zIndex": 5
        }, controller.args[0], "flxSpace"), extendConfig({}, controller.args[1], "flxSpace"), extendConfig({}, controller.args[2], "flxSpace"));
        flxSpace.setDefaultUnit(kony.flex.DP);
        flxSpace.add();
        flxMMAmount.add(flxVerifyAccNumWarnMain, flxToAndFrom, flxConfirmationDetails, flxSpace);
        flxReviewMain.add(flxMMAmount);
        flxVerifyDetailsMain.add(flxVerifyHeader, flxReviewMain);
        var flxbtnConfirm = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "70dp",
            "id": "flxbtnConfirm",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "width": "100%",
            "zIndex": 100
        }, controller.args[0], "flxbtnConfirm"), extendConfig({}, controller.args[1], "flxbtnConfirm"), extendConfig({}, controller.args[2], "flxbtnConfirm"));
        flxbtnConfirm.setDefaultUnit(kony.flex.DP);
        var btnVerifyConfirm = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "centerX": "50%",
            "focusSkin": "ICBtn003E7534px",
            "height": "48dp",
            "id": "btnVerifyConfirm",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICBtn003E7534px",
            "text": "Confirm",
            "zIndex": 1
        }, controller.args[0], "btnVerifyConfirm"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnVerifyConfirm"), extendConfig({
            "showProgressIndicator": false
        }, controller.args[2], "btnVerifyConfirm"));
        flxbtnConfirm.add(btnVerifyConfirm);
        flxVerifyDetails.add(flxVerifyDetailsMain, flxbtnConfirm);
        var flxBillpayLeagalNote = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxBillpayLeagalNote",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "flxBillpayLeagalNote"), extendConfig({}, controller.args[1], "flxBillpayLeagalNote"), extendConfig({}, controller.args[2], "flxBillpayLeagalNote"));
        flxBillpayLeagalNote.setDefaultUnit(kony.flex.DP);
        var flxBillpayLegalNoteMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxBillpayLegalNoteMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxBillpayLegalNoteMain"), extendConfig({}, controller.args[1], "flxBillpayLegalNoteMain"), extendConfig({}, controller.args[2], "flxBillpayLegalNoteMain"));
        flxBillpayLegalNoteMain.setDefaultUnit(kony.flex.DP);
        var flxLegalNoteHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "59dp",
            "id": "flxLegalNoteHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlx",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxLegalNoteHeader"), extendConfig({}, controller.args[1], "flxLegalNoteHeader"), extendConfig({}, controller.args[2], "flxLegalNoteHeader"));
        flxLegalNoteHeader.setDefaultUnit(kony.flex.DP);
        var flxLegalNoteHeaderMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxLegalNoteHeaderMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxLegalNoteHeaderMain"), extendConfig({}, controller.args[1], "flxLegalNoteHeaderMain"), extendConfig({}, controller.args[2], "flxLegalNoteHeaderMain"));
        flxLegalNoteHeaderMain.setDefaultUnit(kony.flex.DP);
        var imgBack = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "imgBack",
            "isVisible": false,
            "left": "23dp",
            "skin": "slImage",
            "src": "backbutton.png",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgBack"), extendConfig({}, controller.args[2], "imgBack"));
        var lblLegalNoteHeader = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblLegalNoteHeader",
            "isVisible": true,
            "skin": "ICSknLblFFFFFSSPSB34Px",
            "text": "Legal Notes",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblLegalNoteHeader"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLegalNoteHeader"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblLegalNoteHeader"));
        var btnrightLegalNote = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "focusSkin": "ICSKnBtnffffff15px",
            "height": "20dp",
            "id": "btnrightLegalNote",
            "isVisible": true,
            "right": "20dp",
            "skin": "ICSKnBtnffffff15px",
            "text": "Close",
            "width": "50dp",
            "zIndex": 1
        }, controller.args[0], "btnrightLegalNote"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnrightLegalNote"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnrightLegalNote"));
        flxLegalNoteHeaderMain.add(imgBack, lblLegalNoteHeader, btnrightLegalNote);
        flxLegalNoteHeader.add(flxLegalNoteHeaderMain);
        var flxLeagNoteContent = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "100%",
            "horizontalScrollIndicator": true,
            "id": "flxLeagNoteContent",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "sknFlxScrlffffff",
            "top": "59dp",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxLeagNoteContent"), extendConfig({}, controller.args[1], "flxLeagNoteContent"), extendConfig({}, controller.args[2], "flxLeagNoteContent"));
        flxLeagNoteContent.setDefaultUnit(kony.flex.DP);
        var lblLeagalContent = new kony.ui.Label(extendConfig({
            "id": "lblLeagalContent",
            "isVisible": true,
            "left": "25dp",
            "right": "25dp",
            "skin": "CopysknMMLeftLabels",
            "text": "The postal payment service is made available thanks to the collaboration between Infinity Bank and Poste Italiane S.p.a The customer acknowledges that the service depends on technical functions provided by Poste Italiane S.p.A. or in any case by third parties, who do not depend on and are not controlled by Infinity Bank. Payment transactions must therefore be considered carried out subject to successful completion. It is also recalled that the incorrect indication, when filling in the bulletin, of the header, account number and personal details of the beneficiary may affect the success of the operation. The customer is responsible for the data indicated when filling in the postal order and undertakes to indemnify and hold Infinity Bank harmless. from any dispute or controversy that may arise, including with third parties, regarding the content of the bulletin itself\"",
            "textStyle": {},
            "top": "20dp",
            "zIndex": 1
        }, controller.args[0], "lblLeagalContent"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLeagalContent"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblLeagalContent"));
        flxLeagNoteContent.add(lblLeagalContent);
        flxBillpayLegalNoteMain.add(flxLegalNoteHeader, flxLeagNoteContent);
        flxBillpayLeagalNote.add(flxBillpayLegalNoteMain);
        var flxCancelPopUp = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxCancelPopUp",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": 0,
            "isModalContainer": false,
            "skin": "sknFlx000000Op50",
            "top": 0,
            "width": "100%",
            "zIndex": 10
        }, controller.args[0], "flxCancelPopUp"), extendConfig({}, controller.args[1], "flxCancelPopUp"), extendConfig({}, controller.args[2], "flxCancelPopUp"));
        flxCancelPopUp.setDefaultUnit(kony.flex.DP);
        var flxMainPopUp = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerY": "50%",
            "clipBounds": true,
            "id": "flxMainPopUp",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxMainPopUp"), extendConfig({}, controller.args[1], "flxMainPopUp"), extendConfig({}, controller.args[2], "flxMainPopUp"));
        flxMainPopUp.setDefaultUnit(kony.flex.DP);
        var flxContainerPopUp = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "148dp",
            "id": "flxContainerPopUp",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknflxf2f2f2Popup",
            "width": "80%",
            "zIndex": 500
        }, controller.args[0], "flxContainerPopUp"), extendConfig({}, controller.args[1], "flxContainerPopUp"), extendConfig({}, controller.args[2], "flxContainerPopUp"));
        flxContainerPopUp.setDefaultUnit(kony.flex.DP);
        var lblHeader1 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "24dp",
            "id": "lblHeader1",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknLbl000000fsemibold47px",
            "text": "Cancel Payment",
            "textStyle": {},
            "top": "23dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblHeader1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblHeader1"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblHeader1"));
        var lblMessage = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "id": "lblMessage",
            "isVisible": true,
            "left": "127dp",
            "skin": "ICSknLbl000000freg39px",
            "text": "Tap \"Yes\" to cancel this payment",
            "textStyle": {},
            "top": "6dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblMessage"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMessage"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblMessage"));
        var flxButton = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "56dp",
            "id": "flxButton",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "20dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxButton"), extendConfig({}, controller.args[1], "flxButton"), extendConfig({}, controller.args[2], "flxButton"));
        flxButton.setDefaultUnit(kony.flex.DP);
        var flxSep = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2dp",
            "id": "flxSep",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlx3a3a43opacity53",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxSep"), extendConfig({}, controller.args[1], "flxSep"), extendConfig({}, controller.args[2], "flxSep"));
        flxSep.setDefaultUnit(kony.flex.DP);
        flxSep.add();
        var flxBottom1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxBottom1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxBottom1"), extendConfig({}, controller.args[1], "flxBottom1"), extendConfig({}, controller.args[2], "flxBottom1"));
        flxBottom1.setDefaultUnit(kony.flex.DP);
        var flxYes = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxYes",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "49%",
            "zIndex": 1
        }, controller.args[0], "flxYes"), extendConfig({}, controller.args[1], "flxYes"), extendConfig({}, controller.args[2], "flxYes"));
        flxYes.setDefaultUnit(kony.flex.DP);
        var btnYes = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "focusSkin": "ICSknbtnf2f2f245px",
            "height": "100%",
            "id": "btnYes",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknbtnf2f2f245px",
            "text": "Yes",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "btnYes"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnYes"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnYes"));
        flxYes.add(btnYes);
        var flxNo = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxNo",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "49%",
            "zIndex": 1
        }, controller.args[0], "flxNo"), extendConfig({}, controller.args[1], "flxNo"), extendConfig({}, controller.args[2], "flxNo"));
        flxNo.setDefaultUnit(kony.flex.DP);
        var btnNo = new kony.ui.Button(extendConfig({
            "focusSkin": "ICSknf2f2f245px",
            "height": "100%",
            "id": "btnNo",
            "isVisible": true,
            "left": "0dp",
            "skin": "ICSknf2f2f245px",
            "text": "No",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "btnNo"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNo"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnNo"));
        flxNo.add(btnNo);
        var flxSep2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxSep2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "ICSknFlx3a3a43opacity14",
            "top": "0dp",
            "width": "2dp",
            "zIndex": 1
        }, controller.args[0], "flxSep2"), extendConfig({}, controller.args[1], "flxSep2"), extendConfig({}, controller.args[2], "flxSep2"));
        flxSep2.setDefaultUnit(kony.flex.DP);
        flxSep2.add();
        flxBottom1.add(flxYes, flxNo, flxSep2);
        flxButton.add(flxSep, flxBottom1);
        flxContainerPopUp.add(lblHeader1, lblMessage, flxButton);
        flxMainPopUp.add(flxContainerPopUp);
        flxCancelPopUp.add(flxMainPopUp);
        var flxError = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxError",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxError"), extendConfig({}, controller.args[1], "flxError"), extendConfig({}, controller.args[2], "flxError"));
        flxError.setDefaultUnit(kony.flex.DP);
        var flxErrorHeaderMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "59dp",
            "id": "flxErrorHeaderMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "ICSknFlx003E75",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxErrorHeaderMain"), extendConfig({}, controller.args[1], "flxErrorHeaderMain"), extendConfig({}, controller.args[2], "flxErrorHeaderMain"));
        flxErrorHeaderMain.setDefaultUnit(kony.flex.DP);
        var flxErrorHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxErrorHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxErrorHeader"), extendConfig({}, controller.args[1], "flxErrorHeader"), extendConfig({}, controller.args[2], "flxErrorHeader"));
        flxErrorHeader.setDefaultUnit(kony.flex.DP);
        var flxErrorHeaderBack = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxErrorHeaderBack",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "10%"
        }, controller.args[0], "flxErrorHeaderBack"), extendConfig({}, controller.args[1], "flxErrorHeaderBack"), extendConfig({}, controller.args[2], "flxErrorHeaderBack"));
        flxErrorHeaderBack.setDefaultUnit(kony.flex.DP);
        var imgErrorHeaderBack = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "imgErrorHeaderBack",
            "isVisible": true,
            "left": "10dp",
            "skin": "slImage",
            "src": "backbutton.png",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "imgErrorHeaderBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgErrorHeaderBack"), extendConfig({}, controller.args[2], "imgErrorHeaderBack"));
        flxErrorHeaderBack.add(imgErrorHeaderBack);
        var flxErrorHeaderName = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxErrorHeaderName",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "10dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "60%",
            "zIndex": 1
        }, controller.args[0], "flxErrorHeaderName"), extendConfig({}, controller.args[1], "flxErrorHeaderName"), extendConfig({}, controller.args[2], "flxErrorHeaderName"));
        flxErrorHeaderName.setDefaultUnit(kony.flex.DP);
        var lblErrorHeaderName = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblErrorHeaderName",
            "isVisible": true,
            "skin": "ICSknLblFFFFFSSPSB34Px",
            "text": "Review Payment Details",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblErrorHeaderName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblErrorHeaderName"), extendConfig({
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        }, controller.args[2], "lblErrorHeaderName"));
        flxErrorHeaderName.add(lblErrorHeaderName);
        var btnErrorright = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "focusSkin": "ICSKnBtnffffff15px",
            "height": "20dp",
            "id": "btnErrorright",
            "isVisible": false,
            "right": "20dp",
            "skin": "ICSKnBtnffffff15px",
            "text": "Cancel",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "btnErrorright"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnErrorright"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnErrorright"));
        flxErrorHeader.add(flxErrorHeaderBack, flxErrorHeaderName, btnErrorright);
        flxErrorHeaderMain.add(flxErrorHeader);
        var flxFailureContent = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": false,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "60%",
            "horizontalScrollIndicator": true,
            "id": "flxFailureContent",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "slFSbox",
            "top": "59dp",
            "verticalScrollIndicator": true,
            "width": "100%"
        }, controller.args[0], "flxFailureContent"), extendConfig({}, controller.args[1], "flxFailureContent"), extendConfig({}, controller.args[2], "flxFailureContent"));
        flxFailureContent.setDefaultUnit(kony.flex.DP);
        var imgFail = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "35%",
            "height": "70dp",
            "id": "imgFail",
            "isVisible": true,
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
            "skin": "sknIWLblSSPSemibold30px",
            "text": "There was a problem with your payment information",
            "textStyle": {},
            "top": "18dp",
            "width": "75%",
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
            "text": "The payment has the errors. Tap 'Retry' to correct the errors",
            "textStyle": {},
            "top": "18dp",
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
        flxFailureContent.add(imgFail, lblFailTitle, lblFailDescription);
        var flxFailureButtons = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "30%",
            "id": "flxFailureButtons",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "width": "100.00%",
            "zIndex": 1
        }, controller.args[0], "flxFailureButtons"), extendConfig({}, controller.args[1], "flxFailureButtons"), extendConfig({}, controller.args[2], "flxFailureButtons"));
        flxFailureButtons.setDefaultUnit(kony.flex.DP);
        var btnFailureAction1 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "sknBtn003e75",
            "height": "50dp",
            "id": "btnFailureAction1",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknBtn003e75",
            "text": "Retry",
            "top": "8%",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "btnFailureAction1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnFailureAction1"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnFailureAction1"));
        var btnFailureAction2 = new kony.ui.Button(extendConfig({
            "focusSkin": "ICSknSecondaryBtnSSPReg34px",
            "height": "50dp",
            "id": "btnFailureAction2",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknSecondayBtnFFFFFBg03E7534px",
            "text": "Cancel Payment",
            "top": "8%",
            "width": "90%"
        }, controller.args[0], "btnFailureAction2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnFailureAction2"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnFailureAction2"));
        var btnError3 = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "ICSknSecondayBtnFFFFFBg03E7534px",
            "height": "50dp",
            "id": "btnError3",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICSknSecondayBtnFFFFFBg03E7534px",
            "text": "Additional",
            "top": "8%",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "btnError3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnError3"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnError3"));
        flxFailureButtons.add(btnFailureAction1, btnFailureAction2, btnError3);
        var btnFailureAction3 = new kony.ui.Button(extendConfig({
            "bottom": "44dp",
            "centerX": "50%",
            "focusSkin": "ICBtn003E7534px",
            "height": "50dp",
            "id": "btnFailureAction3",
            "isVisible": false,
            "left": "20dp",
            "right": "20dp",
            "skin": "ICBtn003E7534px",
            "text": "My Accounts",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "btnFailureAction3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnFailureAction3"), extendConfig({
            "showProgressIndicator": true
        }, controller.args[2], "btnFailureAction3"));
        flxError.add(flxErrorHeaderMain, flxFailureContent, flxFailureButtons, btnFailureAction3);
        BillPay.add(flxFromAccountMain, flxBillRecipient, flxMainPayeeDetails, flxMainEditPayeeDetails, flxMainBillerName, flxBillerAccountNumber, flxMainNotes, flxbillPaymentAmountDetails, flxVerifyDetails, flxBillpayLeagalNote, flxCancelPopUp, flxError);
        return BillPay;
    }
})