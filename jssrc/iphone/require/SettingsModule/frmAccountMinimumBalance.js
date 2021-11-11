define("SettingsModule/frmAccountMinimumBalance", function() {
    return function(controller) {
        function addWidgetsfrmAccountMinimumBalance() {
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
                "zIndex": 2
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
                    "flxSearch": {
                        "isVisible": false
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.Alerts.SecurityAlerts")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxBody = new kony.ui.FlexContainer({
                "bottom": 0,
                "clipBounds": true,
                "id": "flxBody",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBody.setDefaultUnit(kony.flex.DP);
            var flxBodyTxt = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "125dp",
                "id": "flxBodyTxt",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBodyTxt.setDefaultUnit(kony.flex.DP);
            var lblMinimumBalanceValue = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblMinimumBalanceValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPReg36px",
                "text": "$42,304.00",
                "textStyle": {},
                "top": "20dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblMinimumBalance = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblMinimumBalance",
                "isVisible": true,
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.Alerts.MinimumBalanceTitle"),
                "textStyle": {},
                "top": "51dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxSeperator2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1000
            }, {}, {});
            flxSeperator2.setDefaultUnit(kony.flex.DP);
            flxSeperator2.add();
            var flxSeperator4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "30dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1000
            }, {}, {});
            flxSeperator4.setDefaultUnit(kony.flex.DP);
            flxSeperator4.add();
            var btnEdit = new kony.ui.Button({
                "bottom": "7dp",
                "centerX": "50%",
                "focusSkin": "sknBtn0095e424px",
                "id": "btnEdit",
                "isVisible": true,
                "skin": "sknBtn0095e424px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.editNickName"),
                "width": "150dp",
                "zIndex": 100
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxBodyTxt.add(lblMinimumBalanceValue, lblMinimumBalance, flxSeperator2, flxSeperator4, btnEdit);
            var flxBodyTxt2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "90dp",
                "id": "flxBodyTxt2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "125dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBodyTxt2.setDefaultUnit(kony.flex.DP);
            var lblBodyTxt2 = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblBodyTxt2",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.Alerts.HowWouldYouLiketoReceiveAlerts"),
                "textStyle": {},
                "top": "17dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxSeperator5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1000
            }, {}, {});
            flxSeperator5.setDefaultUnit(kony.flex.DP);
            flxSeperator5.add();
            flxBodyTxt2.add(lblBodyTxt2, flxSeperator5);
            var flxsegments = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxsegments",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "215dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxsegments.setDefaultUnit(kony.flex.DP);
            var flxAlertSwitch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxAlertSwitch",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAlertSwitch.setDefaultUnit(kony.flex.DP);
            var flxSMS = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxSMS",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSMS.setDefaultUnit(kony.flex.DP);
            var lblSMS = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSMS",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.Alerts.SMS"),
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
            var flxSwitchSMS = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxSwitchSMS",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknflxffffffBorder0095e4Border10px",
                "width": "50dp",
                "zIndex": 1
            }, {}, {});
            flxSwitchSMS.setDefaultUnit(kony.flex.DP);
            var flxSwitchToggleSMS = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "49%",
                "clipBounds": true,
                "height": "25dp",
                "id": "flxSwitchToggleSMS",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "21dp",
                "isModalContainer": false,
                "skin": "sknflx0095e4Border0095e4Border100pxRadius",
                "width": "25dp",
                "zIndex": 1
            }, {}, {});
            flxSwitchToggleSMS.setDefaultUnit(kony.flex.DP);
            flxSwitchToggleSMS.add();
            flxSwitchSMS.add(flxSwitchToggleSMS);
            var flxSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparator.setDefaultUnit(kony.flex.DP);
            flxSeparator.add();
            var switchSMS = new kony.ui.Switch({
                "centerY": "50%",
                "height": "32dp",
                "id": "switchSMS",
                "isVisible": true,
                "leftSideText": "     ",
                "right": "20dp",
                "rightSideText": "     ",
                "selectedIndex": 0,
                "skin": "sknSwitch0095e4Op100pr000000Op10pr",
                "width": "55dp",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSMS.add(lblSMS, flxSwitchSMS, flxSeparator, switchSMS);
            var flxEmail = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxEmail",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEmail.setDefaultUnit(kony.flex.DP);
            var lblEmail = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblEmail",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.Alerts.Email"),
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
            var flxSwitchEmail = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxSwitchEmail",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknflxffffffBorder0095e4Border10px",
                "width": "50dp",
                "zIndex": 1
            }, {}, {});
            flxSwitchEmail.setDefaultUnit(kony.flex.DP);
            var flxSwitchToggleEmail = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "49%",
                "clipBounds": true,
                "height": "25dp",
                "id": "flxSwitchToggleEmail",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "21dp",
                "isModalContainer": false,
                "skin": "sknflx0095e4Border0095e4Border100pxRadius",
                "width": "25dp",
                "zIndex": 1
            }, {}, {});
            flxSwitchToggleEmail.setDefaultUnit(kony.flex.DP);
            flxSwitchToggleEmail.add();
            flxSwitchEmail.add(flxSwitchToggleEmail);
            var flxSeparatorEmail = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorEmail",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparatorEmail.setDefaultUnit(kony.flex.DP);
            flxSeparatorEmail.add();
            var switchEmail = new kony.ui.Switch({
                "centerY": "50%",
                "height": "32dp",
                "id": "switchEmail",
                "isVisible": true,
                "leftSideText": "     ",
                "right": "20dp",
                "rightSideText": "     ",
                "selectedIndex": 0,
                "skin": "sknSwitch0095e4Op100pr000000Op10pr",
                "width": "55dp",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEmail.add(lblEmail, flxSwitchEmail, flxSeparatorEmail, switchEmail);
            var flxPushNotification = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxPushNotification",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPushNotification.setDefaultUnit(kony.flex.DP);
            var lblPushNotification = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblPushNotification",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.Alerts.pushNotifications"),
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
            var flxSwitchPushNotification = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxSwitchPushNotification",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknflxffffffBorder0095e4Border10px",
                "width": "50dp",
                "zIndex": 1
            }, {}, {});
            flxSwitchPushNotification.setDefaultUnit(kony.flex.DP);
            var flxSwitchTogglePushNotification = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "49%",
                "clipBounds": true,
                "height": "25dp",
                "id": "flxSwitchTogglePushNotification",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "21dp",
                "isModalContainer": false,
                "skin": "sknflx0095e4Border0095e4Border100pxRadius",
                "width": "25dp",
                "zIndex": 1
            }, {}, {});
            flxSwitchTogglePushNotification.setDefaultUnit(kony.flex.DP);
            flxSwitchTogglePushNotification.add();
            flxSwitchPushNotification.add(flxSwitchTogglePushNotification);
            var flxSeparatorPushNotification = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorPushNotification",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparatorPushNotification.setDefaultUnit(kony.flex.DP);
            flxSeparatorPushNotification.add();
            var switchPushNotifications = new kony.ui.Switch({
                "centerY": "50%",
                "height": "32dp",
                "id": "switchPushNotifications",
                "isVisible": true,
                "leftSideText": "     ",
                "right": "20dp",
                "rightSideText": "     ",
                "selectedIndex": 0,
                "skin": "sknSwitch0095e4Op100pr000000Op10pr",
                "width": "55dp",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxPushNotification.add(lblPushNotification, flxSwitchPushNotification, flxSeparatorPushNotification, switchPushNotifications);
            flxAlertSwitch.add(flxSMS, flxEmail, flxPushNotification);
            flxsegments.add(flxAlertSwitch);
            flxBody.add(flxBodyTxt, flxBodyTxt2, flxsegments);
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
            this.add(flxHeader, flxBody, flxPopup);
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
            "addWidgets": addWidgetsfrmAccountMinimumBalance,
            "enabledForIdleTimeout": true,
            "id": "frmAccountMinimumBalance",
            "init": controller.AS_Form_bb2eb50e92fd44c7ab3008f4cda63584,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_f547c992b10e4dc7acfc770945b5a41e(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.Alerts.SecurityAlerts")
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
            "headerOverlap": true,
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