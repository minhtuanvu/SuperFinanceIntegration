define("SettingsModule/frmDealAlertsList", function() {
    return function(controller) {
        function addWidgetsfrmDealAlertsList() {
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
                        "text": kony.i18n.getLocalizedString("kony.mb.Alerts.DealsAlerts")
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
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBody.setDefaultUnit(kony.flex.DP);
            var flxBodyTxt = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "90dp",
                "id": "flxBodyTxt",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBodyTxt.setDefaultUnit(kony.flex.DP);
            var lblBodyTxt = new kony.ui.Label({
                "centerY": "49.83%",
                "id": "lblBodyTxt",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLblalertA0A0A0",
                "text": kony.i18n.getLocalizedString("kony.mb.Alerts.DealsAlertMsg"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "320dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxBodyTxt.add(lblBodyTxt);
            var flxSelectAll = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxSelectAll",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "66dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSelectAll.setDefaultUnit(kony.flex.DP);
            var lblReceiveAlertsVia = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblReceiveAlertsVia",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl3e4f56SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.Alerts.ReceiveAllAlertsVia"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblStatus = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblStatus",
                "isVisible": true,
                "right": "80dp",
                "skin": "sknLbla0a0a0SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.Alerts.TurnAllOn"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSeperator3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1000
            }, {}, {});
            flxSeperator3.setDefaultUnit(kony.flex.DP);
            flxSeperator3.add();
            var flxSeperator2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1000
            }, {}, {});
            flxSeperator2.setDefaultUnit(kony.flex.DP);
            flxSeperator2.add();
            var flxSwitchSelectAll = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxSwitchSelectAll",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "20dp",
                "width": "50dp",
                "zIndex": 1
            }, {}, {});
            flxSwitchSelectAll.setDefaultUnit(kony.flex.DP);
            var flxSwitchToggleAll = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "48%",
                "clipBounds": true,
                "height": "25dp",
                "id": "flxSwitchToggleAll",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "21dp",
                "isModalContainer": false,
                "skin": "sknflx0095e4Border0095e4Border100pxRadius",
                "width": "25dp",
                "zIndex": 1
            }, {}, {});
            flxSwitchToggleAll.setDefaultUnit(kony.flex.DP);
            flxSwitchToggleAll.add();
            flxSwitchSelectAll.add(flxSwitchToggleAll);
            var switchSelectAll = new kony.ui.Switch({
                "centerY": "50%",
                "height": "32dp",
                "id": "switchSelectAll",
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
            flxSelectAll.add(lblReceiveAlertsVia, lblStatus, flxSeperator3, flxSeperator2, flxSwitchSelectAll, switchSelectAll);
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
                "top": "140dp",
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
                "height": "55dp",
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
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
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
                "height": "55dp",
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
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
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
                "height": "55dp",
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
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
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
            var switchPushNotification = new kony.ui.Switch({
                "centerY": "50%",
                "height": "32dp",
                "id": "switchPushNotification",
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
            flxPushNotification.add(lblPushNotification, flxSwitchPushNotification, flxSeparatorPushNotification, switchPushNotification);
            flxAlertSwitch.add(flxSMS, flxEmail, flxPushNotification);
            var flxSelectAccount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxSelectAccount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSelectAccount.setDefaultUnit(kony.flex.DP);
            var lblSelectAccount = new kony.ui.Label({
                "id": "lblSelectAccount",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbla0a0a0SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.Alerts.SelectBelowOptions"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "17dp",
                "width": "320dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1000
            }, {}, {});
            flxSeperator.setDefaultUnit(kony.flex.DP);
            flxSeperator.add();
            flxSelectAccount.add(lblSelectAccount, flxSeperator);
            var flxAlertList = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxAlertList",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAlertList.setDefaultUnit(kony.flex.DP);
            var segAlert = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgArrow": "chevron.png",
                    "lblAlertStatus": "",
                    "lblSubTitle": "Label",
                    "lblTitle": "New Deals Available"
                }, {
                    "imgArrow": "chevron.png",
                    "lblAlertStatus": "",
                    "lblSubTitle": "Label",
                    "lblTitle": "Deal Expiring (in 1 day)"
                }],
                "groupCells": false,
                "id": "segAlert",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxSettingsAlert",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "CopyflxSettings0c389a41e15234d": "CopyflxSettings0c389a41e15234d",
                    "flxShadowOne": "flxShadowOne",
                    "imgArrow": "imgArrow",
                    "lblAlertStatus": "lblAlertStatus",
                    "lblSubTitle": "lblSubTitle",
                    "lblTitle": "lblTitle"
                },
                "width": "100%",
                "zIndex": 1,
                "enableReordering": false
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAlertList.add(segAlert);
            flxsegments.add(flxAlertSwitch, flxSelectAccount, flxAlertList);
            flxBody.add(flxBodyTxt, flxSelectAll, flxsegments);
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
        return [{
            "addWidgets": addWidgetsfrmDealAlertsList,
            "enabledForIdleTimeout": true,
            "id": "frmDealAlertsList",
            "init": controller.AS_Form_c92936066ef34367b4b8941d24040829,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_f11139bcf63b4275b1c79dafac0bbac0(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.Alerts.DealsAlerts")
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": true,
            "inTransitionConfig": {
                "formAnimation": 3
            },
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "outTransitionConfig": {
                "formAnimation": 5
            },
            "retainScrollPosition": false,
            "titleBar": false,
            "titleBarSkin": "sknTitle1a98ffffffff30px",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});