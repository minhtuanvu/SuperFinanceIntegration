define("NewUserModule/frmOBLogin", function() {
    return function(controller) {
        function addWidgetsfrmOBLogin() {
            this.setDefaultUnit(kony.flex.DP);
            var flxWelcome = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "7.10%",
                "id": "flxWelcome",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxfafafa",
                "top": "120dp",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxWelcome.setDefaultUnit(kony.flex.DP);
            var flxBorderTop = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxBorderTop",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3op50",
                "top": "0dp",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxBorderTop.setDefaultUnit(kony.flex.DP);
            flxBorderTop.add();
            var flxBorderBottom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxBorderBottom",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3op50",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxBorderBottom.setDefaultUnit(kony.flex.DP);
            flxBorderBottom.add();
            var lblWelcomeMessage = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblWelcomeMessage",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP22px",
                "text": kony.i18n.getLocalizedString("kony.mb.OB.ApplicationInProgress"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "1dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxWelcome.add(flxBorderTop, flxBorderBottom, lblWelcomeMessage);
            var flxContent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxContent",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "top": "160dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxContent.setDefaultUnit(kony.flex.DP);
            var tbxUsername = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "tbxBlueFocus",
                "height": "40dp",
                "id": "tbxUsername",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "onTextChange": controller.AS_TextField_afad49684c4846dbbc6d840c9f982402,
                "placeholder": kony.i18n.getLocalizedString("kony.mb.login.username"),
                "right": "20dp",
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "60dp",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [10, 3, 1, 3],
                "paddingInPixel": true
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var tbxPassword = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "tbxBlueFocus",
                "height": "40dp",
                "id": "tbxPassword",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "onTextChange": controller.AS_TextField_b1967963ee25426d98f8621042f23cdc,
                "placeholder": kony.i18n.getLocalizedString("kony.mb.login.password"),
                "right": "20dp",
                "secureTextEntry": true,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "120dp",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [10, 3, 1, 3],
                "paddingInPixel": true
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxPwdVisiblityToggle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxPwdVisiblityToggle",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "82.50%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "120dp",
                "width": "33dp",
                "zIndex": 1
            }, {}, {});
            flxPwdVisiblityToggle.setDefaultUnit(kony.flex.DP);
            var imgPwdVisiblityToggle = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "15dp",
                "id": "imgPwdVisiblityToggle",
                "isVisible": true,
                "skin": "slImage",
                "src": "view.png",
                "width": "17dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxPwdVisiblityToggle.add(imgPwdVisiblityToggle);
            var btnLogIn = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnLogIn",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
                "top": "230dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxContent.add(tbxUsername, tbxPassword, flxPwdVisiblityToggle, btnLogIn);
            var flxPopup = new kony.ui.FlexContainer({
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
                "zIndex": 200
            }, {}, {});
            flxPopup.setDefaultUnit(kony.flex.DP);
            var customPopup = new com.kmb.common.customPopup({
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
                "overrides": {}
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxPopup.add(customPopup);
            var customAlertPopUp = new com.kmb.common.customAlertPopUp({
                "height": "100%",
                "id": "customAlertPopUp",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlx000000op60",
                "top": "0dp",
                "width": "100%",
                "zIndex": 200,
                "overrides": {
                    "customAlertPopUp": {
                        "isVisible": false
                    },
                    "flxCancel": {
                        "width": "100%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            customAlertPopUp.flxCancel.onClick = controller.AS_FlexContainer_h7fac806874f4ed782bcfd56778f4612;
            var btnCancel = new kony.ui.Button({
                "focusSkin": "sknBtnffffffSSP28px",
                "id": "btnCancel",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknBtnffffffSSP28px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
                "top": "5dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 11
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxTop = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "120dp",
                "id": "flxTop",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx1a98ff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxTop.setDefaultUnit(kony.flex.DP);
            var imgKonyLogo = new kony.ui.Image2({
                "centerX": "50.00%",
                "centerY": "54%",
                "height": "70dp",
                "id": "imgKonyLogo",
                "isVisible": true,
                "src": "konylogo.png",
                "width": "130dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTop.add(imgKonyLogo);
            this.add(flxWelcome, flxContent, flxPopup, customAlertPopUp, btnCancel, flxTop);
        };
        return [{
            "addWidgets": addWidgetsfrmOBLogin,
            "enableScrolling": false,
            "enabledForIdleTimeout": true,
            "id": "frmOBLogin",
            "init": controller.AS_Form_f6bb8a6b7f224d4cb54a9fd448b45245,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "preShow": function(eventobject) {
                controller.AS_Form_g6901881d074452ea065024d657c48c5(eventobject);
            },
            "skin": "sknFrm1a98ffGradient10"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});