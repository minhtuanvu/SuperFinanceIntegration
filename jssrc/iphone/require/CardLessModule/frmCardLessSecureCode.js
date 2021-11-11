define("CardLessModule/frmCardLessSecureCode", function() {
    return function(controller) {
        function addWidgetsfrmCardLessSecureCode() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "56dp",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var customHeader = new com.kmb.common.customHeader({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "customHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "overrides": {
                    "btnRight": {
                        "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
                        "isVisible": true
                    },
                    "customHeader": {
                        "height": "100%",
                        "zIndex": 1
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.cardLess.createSecureCode")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": false,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxToastDummy = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "65dp",
                "id": "flxToastDummy",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxToastDummy.setDefaultUnit(kony.flex.DP);
            flxToastDummy.add();
            var flxMain = new kony.ui.FlexContainer({
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
            }, {}, {});
            flxMain.setDefaultUnit(kony.flex.DP);
            var lblEnterSecureCode = new kony.ui.Label({
                "id": "lblEnterSecureCode",
                "isVisible": true,
                "left": "30dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.cardLess.enterSecureCode"),
                "textStyle": {},
                "top": "25dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var txtSecureCode = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "tbxBlueFocus",
                "height": "40dp",
                "id": "txtSecureCode",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "maxTextLength": null,
                "placeholder": kony.i18n.getLocalizedString("kony.mb.cardLess.enterSecureCode"),
                "right": "20dp",
                "secureTextEntry": true,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "45dp",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [10, 3, 1, 3],
                "paddingInPixel": true
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
                "placeholderSkin": "sknTbxBordere3e3e3A0A0A0SSPRegular28px",
                "showClearButton": true,
                "showCloseButton": true,
                "showProgressIndicator": true,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var lblReenterCode = new kony.ui.Label({
                "id": "lblReenterCode",
                "isVisible": true,
                "left": "30dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.cardLess.reEnterSecureCode"),
                "textStyle": {},
                "top": "105dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var txtReenterCode = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "tbxBlueFocus",
                "height": "40dp",
                "id": "txtReenterCode",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "maxTextLength": null,
                "placeholder": kony.i18n.getLocalizedString("kony.mb.cardLess.reEnterSecureCode"),
                "right": "20dp",
                "secureTextEntry": true,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "125dp",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [10, 3, 1, 3],
                "paddingInPixel": true
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
                "placeholderSkin": "sknTbxBordere3e3e3A0A0A0SSPRegular28px",
                "showClearButton": true,
                "showCloseButton": true,
                "showProgressIndicator": true,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var btnContinue = new kony.ui.Button({
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnContinue",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
                "top": "215dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxMain.add(lblEnterSecureCode, txtSecureCode, lblReenterCode, txtReenterCode, btnContinue);
            flxMainContainer.add(flxToastDummy, flxMain);
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
            this.add(flxHeader, flxMainContainer, flxPopup);
        };
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_SYSTEM_ITEM,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_g2dd64bd7a294a28b955b087f4d1bffb,
            "metaData": {
                "systemItem": constants.SYSTEM_ITEM_CANCEL
            },
            "id": "RBarBtnItem0"
        });
        var BBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "metaData": {
                "title": ""
            },
            "id": "BBarBtnItem0"
        });
        return [{
            "addWidgets": addWidgetsfrmCardLessSecureCode,
            "enabledForIdleTimeout": true,
            "id": "frmCardLessSecureCode",
            "init": controller.AS_Form_bdec57f1e5f14b4885a3a43996c72cd2,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_b7e3b3e7f1844525ab260922ed1e8e86(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.cardLess.createSecureCode")
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "configureExtendBottom": false,
            "configureExtendTop": false,
            "configureStatusBarStyle": false,
            "footerOverlap": false,
            "formTransparencyDuringPostShow": "100",
            "headerOverlap": false,
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
            "needsIndicatorDuringPostShow": false,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarAttributes": {
                "barStyle": constants.BAR_STYLE_DEAFULT,
                "navigationBarHidden": false,
                "translucent": false,
                "tintColor": "ffffff00",
                "hidesBackButton": false,
                "prompt": "",
                "leftItemsSupplementBackButton": true,
                "leftBarButtonItems": [],
                "rightBarButtonItems": [RBarBtnItem0],
                "backBarButtonItem": BBarBtnItem0
            },
            "titleBarSkin": "sknTitle1a98ffffffff30px"
        }]
    }
});