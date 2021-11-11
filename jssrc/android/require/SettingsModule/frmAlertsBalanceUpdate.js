define("SettingsModule/frmAlertsBalanceUpdate", function() {
    return function(controller) {
        function addWidgetsfrmAlertsBalanceUpdate() {
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
                    "flxBack": {
                        "left": "10dp"
                    },
                    "flxHeaderShadow": {
                        "isVisible": true
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "centerX": "50%",
                        "centerY": "50%",
                        "src": "backbutton.png"
                    },
                    "imgSearch": {
                        "src": "searchicon.png"
                    },
                    "lblLocateUs": {
                        "centerX": "50%",
                        "text": kony.i18n.getLocalizedString("kony.mb.Alerts.BalanceUpdateTitle"),
                        "isVisible": true,
                        "left": 0
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxEnterBalanceUpdate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxEnterBalanceUpdate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEnterBalanceUpdate.setDefaultUnit(kony.flex.DP);
            var flxEnable = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "59dp",
                "id": "flxEnable",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
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
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "19dp",
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
                "skin": "sknLbl727272SourceSanPro26pxTab",
                "text": kony.i18n.getLocalizedString("kony.mb.common.enabled"),
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
            var switchReceiveAlerts = new kony.ui.Switch({
                "centerY": "50%",
                "height": "32dp",
                "id": "switchReceiveAlerts",
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
            flxEnable.add(lblReceiveAlerts, lblStatus, switchReceiveAlerts, flxAlertSeperator);
            var flxBodyTxt = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "65dp",
                "id": "flxBodyTxt",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "59dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBodyTxt.setDefaultUnit(kony.flex.DP);
            var lblBodyTxt = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblBodyTxt",
                "isVisible": true,
                "left": 0,
                "skin": "sknLblalertA0A0A0",
                "text": "Please select the frequency of alert",
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
            var segBalanceUpdateTime = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblTitle": "1 Day"
                }, {
                    "lblTitle": "2 Days"
                }, {
                    "lblTitle": "3 Days"
                }, {
                    "lblTitle": "5 Days"
                }, {
                    "lblTitle": "Weekly"
                }, {
                    "lblTitle": "Monthly"
                }, {
                    "lblTitle": "Yearly"
                }],
                "groupCells": false,
                "id": "segBalanceUpdateTime",
                "isVisible": true,
                "left": "0",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxBalanceUpdateTime",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "124dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxBalanceUpdateTime": "flxBalanceUpdateTime",
                    "lblTitle": "lblTitle"
                },
                "widgetSkin": "segTransparant",
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblErrorMsg = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblErrorMsg",
                "isVisible": false,
                "skin": "sknLblF54B5E26px",
                "text": "Please enable receive alerts to set balance update frequency",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "84dp",
                "width": "320dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxEnterBalanceUpdate.add(flxEnable, flxBodyTxt, segBalanceUpdateTime, lblErrorMsg);
            this.add(flxHeader, flxEnterBalanceUpdate);
        };
        return [{
            "addWidgets": addWidgetsfrmAlertsBalanceUpdate,
            "enabledForIdleTimeout": true,
            "id": "frmAlertsBalanceUpdate",
            "init": controller.AS_Form_j066f465e84343dc8a983ca9c249c46f,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "preShow": function(eventobject) {
                controller.AS_Form_dbed39b5174b49a28e6f6674802765cd(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.Alerts.BalanceUpdateTitle")
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
            "titleBar": false,
            "titleBarSkin": "sknTitle1a98ffffffff30px",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});