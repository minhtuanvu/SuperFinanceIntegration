define("SettingsModule/frmAlertsMinimumBalance", function() {
    return function(controller) {
        function addWidgetsfrmAlertsMinimumBalance() {
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
                "zIndex": 8
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var customHeader = new com.kmb.common.customHeader({
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
                "overrides": {
                    "flxHeaderShadow": {
                        "isVisible": true
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "imgSearch": {
                        "src": "searchicon.png"
                    },
                    "lblLocateUs": {
                        "centerX": "50%",
                        "text": kony.i18n.getLocalizedString("kony.mb.Alerts.MinimumBalanceTitle"),
                        "left": 0
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxEnable = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "59dp",
                "id": "flxEnable",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxf6f6f6Radius0px",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEnable.setDefaultUnit(kony.flex.DP);
            var lblReceiveAlerts = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblReceiveAlerts",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPLight36px",
                "text": kony.i18n.getLocalizedString("kony.mb.settings.ReceiveAlerts"),
                "textStyle": {},
                "top": "19dp",
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
            var switchReceiveAlerts = new kony.ui.Switch({
                "centerY": "50%",
                "height": "32dp",
                "id": "switchReceiveAlerts",
                "isVisible": true,
                "leftSideText": "     ",
                "right": "20dp",
                "rightSideText": "     ",
                "selectedIndex": 0,
                "skin": "sknSwitch0095e4Op100pr000000Op10pr",
                "top": "15dp",
                "width": "50dp",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxAlertSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxAlertSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAlertSeperator.setDefaultUnit(kony.flex.DP);
            flxAlertSeperator.add();
            flxEnable.add(lblReceiveAlerts, switchReceiveAlerts, flxAlertSeperator);
            var flxTransactionModeMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "id": "flxTransactionModeMain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "115dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransactionModeMain.setDefaultUnit(kony.flex.DP);
            var lblBodyText = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblBodyText",
                "isVisible": true,
                "skin": "sknLblalertA0A0A0",
                "text": kony.i18n.getLocalizedString("kony.mb.AlertsMinimumBalance.BodyText"),
                "textStyle": {},
                "top": "40dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxAmount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAmount.setDefaultUnit(kony.flex.DP);
            var lblAmountTitle = new kony.ui.Label({
                "id": "lblAmountTitle",
                "isVisible": true,
                "left": "19dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.Amount"),
                "textStyle": {},
                "top": "20dp",
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
            var tbxAmount = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "tbxAmount",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "placeholder": "Placeholder",
                "right": "20dp",
                "secureTextEntry": false,
                "text": "0",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "45dp",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [8, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
                "placeholderSkin": "defTextBoxPlaceholder",
                "showClearButton": true,
                "showCloseButton": true,
                "showProgressIndicator": true,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxAmountWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxAmountWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxffffffBorderf1f1f1Radius3px",
                "top": "45dp",
                "zIndex": 1
            }, {}, {});
            flxAmountWrapper.setDefaultUnit(kony.flex.DP);
            var lblDollar = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDollar",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLbl4a4a4aSSP42px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.currencySymbol"),
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblAmount = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAmount",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLbl4a4a4aSSP42px",
                "text": "0.00",
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxAmountWrapper.add(lblDollar, lblAmount);
            flxAmount.add(lblAmountTitle, tbxAmount, flxAmountWrapper);
            var flxToValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxToValue",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxToValue.setDefaultUnit(kony.flex.DP);
            var lblToValue = new kony.ui.Label({
                "id": "lblToValue",
                "isVisible": true,
                "left": "19dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": "To",
                "textStyle": {},
                "top": "20dp",
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
            var tbxToValue = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "tbxToValue",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "placeholder": "Placeholder",
                "right": "20dp",
                "secureTextEntry": false,
                "text": "0",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "45dp",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [8, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
                "placeholderSkin": "defTextBoxPlaceholder",
                "showClearButton": true,
                "showCloseButton": true,
                "showProgressIndicator": true,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxToValueWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxToValueWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxffffffBorderf1f1f1Radius3px",
                "top": "45dp",
                "zIndex": 1
            }, {}, {});
            flxToValueWrapper.setDefaultUnit(kony.flex.DP);
            var lblDollarToValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDollarToValue",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLbl4a4a4aSSP42px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.currencySymbol"),
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblToValue1 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblToValue1",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLbl4a4a4aSSP42px",
                "text": "0.00",
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxToValueWrapper.add(lblDollarToValue, lblToValue1);
            flxToValue.add(lblToValue, tbxToValue, flxToValueWrapper);
            flxTransactionModeMain.add(lblBodyText, flxAmount, flxToValue);
            var flxOpaque = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "id": "flxOpaque",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff0pxShadowTab",
                "top": "115dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxOpaque.setDefaultUnit(kony.flex.DP);
            var lblErrorMsg = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblErrorMsg",
                "isVisible": true,
                "skin": "sknLblF54B5E26px",
                "text": "Please enable the alert to update value.",
                "textStyle": {},
                "top": "20dp",
                "width": "90%",
                "zIndex": 1,
                "blur": {
                    "enabled": false,
                    "value": 0
                }
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxOpaque.add(lblErrorMsg);
            var flxTransactionModeDays = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "id": "flxTransactionModeDays",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "115dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransactionModeDays.setDefaultUnit(kony.flex.DP);
            var CopyflxEnable0jae88965766448 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "59dp",
                "id": "CopyflxEnable0jae88965766448",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxf6f6f6Radius0px",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxEnable0jae88965766448.setDefaultUnit(kony.flex.DP);
            var CopylblReceiveAlerts0a1b8453abfa549 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblReceiveAlerts0a1b8453abfa549",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPLight36px",
                "text": kony.i18n.getLocalizedString("kony.mb.settings.ReceiveAlerts"),
                "textStyle": {},
                "top": "19dp",
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
            var CopylblStatus0a87d78d1d39347 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblStatus0a87d78d1d39347",
                "isVisible": true,
                "right": "80dp",
                "skin": "sknLbl727272SourceSanPro26pxTab",
                "text": kony.i18n.getLocalizedString("kony.mb.common.enabled"),
                "textStyle": {},
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
            var switchReceiveAlertsDays = new kony.ui.Switch({
                "centerY": "50%",
                "height": "32dp",
                "id": "switchReceiveAlertsDays",
                "isVisible": true,
                "leftSideText": "     ",
                "right": "20dp",
                "rightSideText": "     ",
                "selectedIndex": 0,
                "skin": "defSwitchNormal",
                "top": "15dp",
                "width": "50dp",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopyflxAlertSeperator0efbe01986b0140 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxAlertSeperator0efbe01986b0140",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxAlertSeperator0efbe01986b0140.setDefaultUnit(kony.flex.DP);
            CopyflxAlertSeperator0efbe01986b0140.add();
            CopyflxEnable0jae88965766448.add(CopylblReceiveAlerts0a1b8453abfa549, CopylblStatus0a87d78d1d39347, switchReceiveAlertsDays, CopyflxAlertSeperator0efbe01986b0140);
            var CopylblErrorMsg0a5220eccde8946 = new kony.ui.Label({
                "centerX": "50%",
                "id": "CopylblErrorMsg0a5220eccde8946",
                "isVisible": false,
                "skin": "sknLblF54B5E26px",
                "text": kony.i18n.getLocalizedString("kony.mb.Alerts.BalanceAlerts"),
                "textStyle": {},
                "top": "20dp",
                "width": "90%",
                "zIndex": 1,
                "blur": {
                    "enabled": false,
                    "value": 0
                }
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblBodyTextDays = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblBodyTextDays",
                "isVisible": true,
                "skin": "sknLblalertA0A0A0",
                "text": "Enter duration days",
                "textStyle": {},
                "top": "40dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var CopyflxAmount0e3386cbbeb3e47 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "CopyflxAmount0e3386cbbeb3e47",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxAmount0e3386cbbeb3e47.setDefaultUnit(kony.flex.DP);
            var CopylblAmountTitle0e9faf7a07b6745 = new kony.ui.Label({
                "id": "CopylblAmountTitle0e9faf7a07b6745",
                "isVisible": false,
                "left": "19dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.Amount"),
                "textStyle": {},
                "top": "20dp",
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
            var CopytbxAmount0hf1c8796c6ae4f = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "CopytbxAmount0hf1c8796c6ae4f",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "placeholder": "Placeholder",
                "right": "20dp",
                "secureTextEntry": false,
                "text": "0",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "45dp",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [8, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
                "placeholderSkin": "defTextBoxPlaceholder",
                "showClearButton": true,
                "showCloseButton": true,
                "showProgressIndicator": true,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxRecurrenceWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxRecurrenceWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxffffffBorderf1f1f1Radius3px",
                "top": "35%",
                "zIndex": 1
            }, {}, {});
            flxRecurrenceWrapper.setDefaultUnit(kony.flex.DP);
            var lblNumber = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblNumber",
                "isVisible": true,
                "left": "10dp",
                "skin": "skinlblDarkened",
                "text": "0",
                "textStyle": {},
                "width": "80%",
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxClearAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxClearAmount",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "30dp",
                "zIndex": 5
            }, {}, {});
            flxClearAmount.setDefaultUnit(kony.flex.DP);
            var imgClose = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "15dp",
                "id": "imgClose",
                "isVisible": true,
                "skin": "slImage",
                "src": "closecircle.png",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxClearAmount.add(imgClose);
            flxRecurrenceWrapper.add(lblNumber, flxClearAmount);
            CopyflxAmount0e3386cbbeb3e47.add(CopylblAmountTitle0e9faf7a07b6745, CopytbxAmount0hf1c8796c6ae4f, flxRecurrenceWrapper);
            flxTransactionModeDays.add(CopyflxEnable0jae88965766448, CopylblErrorMsg0a5220eccde8946, lblBodyTextDays, CopyflxAmount0e3386cbbeb3e47);
            var flxKeypad = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "32%",
                "id": "flxKeypad",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxF5F6FB",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxKeypad.setDefaultUnit(kony.flex.DP);
            var btnDot = new kony.ui.Button({
                "bottom": "0dp",
                "height": "24%",
                "id": "btnDot",
                "isVisible": false,
                "left": "0dp",
                "skin": "sknBtnKeybad",
                "text": ".",
                "width": "33%",
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var keypad = new com.kmb.common.keypad({
                "height": "100%",
                "id": "keypad",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "imgClear": {
                        "src": "cancelkeypad.png"
                    },
                    "imgClearKeypad": {
                        "src": "transparentbox.png"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxKeypad.add(btnDot, keypad);
            var flxButtonContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "32%",
                "clipBounds": true,
                "height": "80dp",
                "id": "flxButtonContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxButtonContainer.setDefaultUnit(kony.flex.DP);
            var btnContinue = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnContinue",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtnOnBoardingInactive",
                "text": kony.i18n.getLocalizedString("kony.mb.Profile.UpdateChanges"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxButtonContainer.add(btnContinue);
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
                "overrides": {
                    "imgPopup": {
                        "src": "imagedrag.png"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxPopup.add(customPopup);
            this.add(flxHeader, flxEnable, flxTransactionModeMain, flxOpaque, flxTransactionModeDays, flxKeypad, flxButtonContainer, flxPopup);
        };
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
            "addWidgets": addWidgetsfrmAlertsMinimumBalance,
            "enabledForIdleTimeout": true,
            "id": "frmAlertsMinimumBalance",
            "init": controller.AS_Form_hdd4f947c1b2403aa34f842d8e01696a,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_f7b07ab94bdd47cbb4edb84cf5932043(eventobject);
            },
            "skin": "sknFrmf9f9f9",
            "title": kony.i18n.getLocalizedString("kony.mb.Alerts.MinimumBalanceTitle")
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
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
            "inTransitionConfig": {
                "transitionDirection": "none",
                "transitionDuration": 0.3,
                "transitionEffect": "none"
            },
            "needsIndicatorDuringPostShow": false,
            "outTransitionConfig": {
                "transitionDirection": "none",
                "transitionDuration": 0.3,
                "transitionEffect": "none"
            },
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
                "rightBarButtonItems": [],
                "backBarButtonItem": BBarBtnItem0
            },
            "titleBarSkin": "sknTitle1a98ffffffff30px"
        }]
    }
});