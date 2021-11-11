define("SettingsModule/frmSettings", function() {
    return function(controller) {
        function addWidgetsfrmSettings() {
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
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "hamburger.png"
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.Hamburger.Settings")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxMainContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "60dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "56dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var segSettingsLogin = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [
                    [{
                            "lblProfileHeading": kony.i18n.getLocalizedString("kony.mb.login.logIn"),
                            "lblSeperator": "Profile"
                        },
                        [{
                            "imgArrow": "chevron.png",
                            "lblTitle": kony.i18n.getLocalizedString("kony.mb.login.accountPreview"),
                            "lblValue": kony.i18n.getLocalizedString("kony.mb.Off")
                        }, {
                            "imgArrow": "chevron.png",
                            "lblTitle": kony.i18n.getLocalizedString("kony.mb.devReg.defaultLogin"),
                            "lblValue": kony.i18n.getLocalizedString("kony.mb.login.password")
                        }]
                    ]
                ],
                "groupCells": false,
                "id": "segSettingsLogin",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxSettings",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "sectionHeaderTemplate": "flxSettingsHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxRightWrapper": "flxRightWrapper",
                    "flxSepartaor": "flxSepartaor",
                    "flxSettings": "flxSettings",
                    "flxSettingsHeader": "flxSettingsHeader",
                    "flxTopShadow": "flxTopShadow",
                    "imgArrow": "imgArrow",
                    "lblProfileHeading": "lblProfileHeading",
                    "lblSeperator": "lblSeperator",
                    "lblTitle": "lblTitle",
                    "lblValue": "lblValue"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": true,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": false,
                "indicator": constants.SEGUI_NONE,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            var segSettingsDeviceManagement = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [
                    [{
                            "lblProfileHeading": kony.i18n.getLocalizedString("kony.mb.sca.DeviceManagement"),
                            "lblSeperator": "Profile"
                        },
                        [{
                            "imgArrow": "chevron.png",
                            "lblTitle": kony.i18n.getLocalizedString("kony.mb.sca.RegisteredDevices"),
                            "lblValue": ""
                        }]
                    ]
                ],
                "groupCells": false,
                "id": "segSettingsDeviceManagement",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxSettings",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "sectionHeaderTemplate": "flxSettingsHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxRightWrapper": "flxRightWrapper",
                    "flxSepartaor": "flxSepartaor",
                    "flxSettings": "flxSettings",
                    "flxSettingsHeader": "flxSettingsHeader",
                    "flxTopShadow": "flxTopShadow",
                    "imgArrow": "imgArrow",
                    "lblProfileHeading": "lblProfileHeading",
                    "lblSeperator": "lblSeperator",
                    "lblTitle": "lblTitle",
                    "lblValue": "lblValue"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": true,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": false,
                "indicator": constants.SEGUI_NONE,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            var segSettingsProfile = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [
                    [{
                            "lblProfileHeading": kony.i18n.getLocalizedString("kony.mb.Settings.Profile"),
                            "lblSeperator": "Profile"
                        },
                        [{
                            "imgArrow": "chevron.png",
                            "lblTitle": kony.i18n.getLocalizedString("kony.mb.ProfileChangeUsername.Title"),
                            "lblValue": " "
                        }, {
                            "imgArrow": "chevron.png",
                            "lblTitle": kony.i18n.getLocalizedString("kony.mb.ProfileChangeAndUpdatePassword.Title"),
                            "lblValue": " "
                        }, {
                            "imgArrow": "chevron.png",
                            "lblTitle": kony.i18n.getLocalizedString("kony.mb.ProfilePersonalDetails.Title"),
                            "lblValue": " "
                        }, {
                            "imgArrow": "chevron.png",
                            "lblTitle": kony.i18n.getLocalizedString("kony.mb.Login.ChangeLanguage"),
                            "lblValue": ""
                        }]
                    ]
                ],
                "groupCells": false,
                "id": "segSettingsProfile",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "sknSegf9f9f9",
                "rowTemplate": "flxSettings",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "sectionHeaderTemplate": "flxSettingsHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxRightWrapper": "flxRightWrapper",
                    "flxSepartaor": "flxSepartaor",
                    "flxSettings": "flxSettings",
                    "flxSettingsHeader": "flxSettingsHeader",
                    "flxTopShadow": "flxTopShadow",
                    "imgArrow": "imgArrow",
                    "lblProfileHeading": "lblProfileHeading",
                    "lblSeperator": "lblSeperator",
                    "lblTitle": "lblTitle",
                    "lblValue": "lblValue"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": true,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": false,
                "indicator": constants.SEGUI_NONE,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            var segSettingsAlerts = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [
                    [{
                            "lblProfileHeading": kony.i18n.getLocalizedString("kony.mb.Settings.Alerts"),
                            "lblSeperator": "Profile"
                        },
                        [{
                            "imgArrow": "chevron.png",
                            "lblTitle": kony.i18n.getLocalizedString("kony.mb.Alerts.SecurityAlerts"),
                            "lblValue": "Off"
                        }, {
                            "imgArrow": "chevron.png",
                            "lblTitle": kony.i18n.getLocalizedString("kony.mb.alerts.TransactionAlerts"),
                            "lblValue": "On"
                        }]
                    ]
                ],
                "groupCells": false,
                "id": "segSettingsAlerts",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxSettings",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "sectionHeaderTemplate": "flxSettingsHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxRightWrapper": "flxRightWrapper",
                    "flxSepartaor": "flxSepartaor",
                    "flxSettings": "flxSettings",
                    "flxSettingsHeader": "flxSettingsHeader",
                    "flxTopShadow": "flxTopShadow",
                    "imgArrow": "imgArrow",
                    "lblProfileHeading": "lblProfileHeading",
                    "lblSeperator": "lblSeperator",
                    "lblTitle": "lblTitle",
                    "lblValue": "lblValue"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": true,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": false,
                "indicator": constants.SEGUI_NONE,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            var segSettingsDefaultAccount = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [
                    [{
                            "lblProfileHeading": kony.i18n.getLocalizedString("kony.mb.default.account"),
                            "lblSeperator": "Profile"
                        },
                        [{
                            "imgArrow": "chevron.png",
                            "lblTitle": kony.i18n.getLocalizedString("kony.mb.Hamburger.Transfers"),
                            "lblValue": "My Credit Card2"
                        }, {
                            "imgArrow": "chevron.png",
                            "lblTitle": kony.i18n.getLocalizedString("kony.mb.Hamburger.BillPay"),
                            "lblValue": "My Checking"
                        }, {
                            "imgArrow": "chevron.png",
                            "lblTitle": kony.i18n.getLocalizedString("kony.mb.Manage.PayAPerson"),
                            "lblValue": "Johns Credit Card"
                        }, {
                            "imgArrow": "chevron.png",
                            "lblTitle": kony.i18n.getLocalizedString("kony.mb.transaction.cashWithdrawal"),
                            "lblValue": "My Checking"
                        }, {
                            "imgArrow": "chevron.png",
                            "lblTitle": kony.i18n.getLocalizedString("kony.mb.AdvanceSearch.Deposits"),
                            "lblValue": "My Credit Card2"
                        }]
                    ]
                ],
                "groupCells": false,
                "id": "segSettingsDefaultAccount",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "sknSegf9f9f9",
                "rowTemplate": "flxSettings",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "sectionHeaderTemplate": "flxSettingsHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxRightWrapper": "flxRightWrapper",
                    "flxSepartaor": "flxSepartaor",
                    "flxSettings": "flxSettings",
                    "flxSettingsHeader": "flxSettingsHeader",
                    "flxTopShadow": "flxTopShadow",
                    "imgArrow": "imgArrow",
                    "lblProfileHeading": "lblProfileHeading",
                    "lblSeperator": "lblSeperator",
                    "lblTitle": "lblTitle",
                    "lblValue": "lblValue"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": true,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": false,
                "indicator": constants.SEGUI_NONE,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            var segConsentManagement = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [
                    [{
                            "lblProfileHeading": kony.i18n.getLocalizedString("kony.mb.consent.management"),
                            "lblSeperator": "Profile"
                        },
                        [{
                            "imgArrow": "chevron.png",
                            "lblTitle": kony.i18n.getLocalizedString("kony.mb.your.consent"),
                            "lblValue": ""
                        }]
                    ]
                ],
                "groupCells": false,
                "id": "segConsentManagement",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "sknSegf9f9f9",
                "rowTemplate": "flxSettings",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "sectionHeaderTemplate": "flxSettingsHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxRightWrapper": "flxRightWrapper",
                    "flxSepartaor": "flxSepartaor",
                    "flxSettings": "flxSettings",
                    "flxSettingsHeader": "flxSettingsHeader",
                    "flxTopShadow": "flxTopShadow",
                    "imgArrow": "imgArrow",
                    "lblProfileHeading": "lblProfileHeading",
                    "lblSeperator": "lblSeperator",
                    "lblTitle": "lblTitle",
                    "lblValue": "lblValue"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": true,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": false,
                "indicator": constants.SEGUI_NONE,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            var segManageAccountAcces = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [
                    [{
                            "lblProfileHeading": kony.i18n.getLocalizedString("kony.mb.default.account"),
                            "lblSeperator": "Profile"
                        },
                        [{
                            "imgArrow": "chevron.png",
                            "lblTitle": kony.i18n.getLocalizedString("kony.mb.Hamburger.Transfers"),
                            "lblValue": "My Credit Card2"
                        }, {
                            "imgArrow": "chevron.png",
                            "lblTitle": kony.i18n.getLocalizedString("kony.mb.Hamburger.BillPay"),
                            "lblValue": "My Checking"
                        }, {
                            "imgArrow": "chevron.png",
                            "lblTitle": kony.i18n.getLocalizedString("kony.mb.Manage.PayAPerson"),
                            "lblValue": "Johns Credit Card"
                        }, {
                            "imgArrow": "chevron.png",
                            "lblTitle": kony.i18n.getLocalizedString("kony.mb.transaction.cashWithdrawal"),
                            "lblValue": "My Checking"
                        }, {
                            "imgArrow": "chevron.png",
                            "lblTitle": kony.i18n.getLocalizedString("kony.mb.AdvanceSearch.Deposits"),
                            "lblValue": "My Credit Card2"
                        }]
                    ]
                ],
                "groupCells": false,
                "id": "segManageAccountAcces",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "sknSegf9f9f9",
                "rowTemplate": "flxSettings",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "sectionHeaderTemplate": "flxSettingsHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxRightWrapper": "flxRightWrapper",
                    "flxSepartaor": "flxSepartaor",
                    "flxSettings": "flxSettings",
                    "flxSettingsHeader": "flxSettingsHeader",
                    "flxTopShadow": "flxTopShadow",
                    "imgArrow": "imgArrow",
                    "lblProfileHeading": "lblProfileHeading",
                    "lblSeperator": "lblSeperator",
                    "lblTitle": "lblTitle",
                    "lblValue": "lblValue"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": true,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": false,
                "indicator": constants.SEGUI_NONE,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            var flxGap = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "15dp",
                "id": "flxGap",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxGap.setDefaultUnit(kony.flex.DP);
            flxGap.add();
            flxMainContainer.add(segSettingsLogin, segSettingsDeviceManagement, segSettingsProfile, segSettingsAlerts, segSettingsDefaultAccount, segConsentManagement, segManageAccountAcces, flxGap);
            var flxFooter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": false,
                "height": "60dp",
                "id": "flxFooter",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFooter.setDefaultUnit(kony.flex.DP);
            var customFooter = new com.kmb.common.customFooter({
                "height": "60dp",
                "id": "customFooter",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 300,
                "overrides": {
                    "flxAccSelect": {
                        "isVisible": false
                    },
                    "flxBillSelected": {
                        "isVisible": false
                    },
                    "flxTransferSel": {
                        "isVisible": false
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxFooter.add(customFooter);
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
            var flxHamburger = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "63dp",
                "clipBounds": true,
                "id": "flxHamburger",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx000000Op50",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxHamburger.setDefaultUnit(kony.flex.DP);
            var flxHamburgerWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxHamburgerWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "-100%",
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHamburgerWrapper.setDefaultUnit(kony.flex.DP);
            var flxHamburgerContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxHamburgerContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "zIndex": 10
            }, {}, {});
            flxHamburgerContainer.setDefaultUnit(kony.flex.DP);
            var Hamburger = new com.kmb.common.Hamburger({
                "height": "100%",
                "id": "Hamburger",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
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
            flxHamburgerContainer.add(Hamburger);
            var flxHamburgerDummy = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxHamburgerDummy",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "-50dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "50dp",
                "zIndex": 3
            }, {}, {});
            flxHamburgerDummy.setDefaultUnit(kony.flex.DP);
            flxHamburgerDummy.add();
            flxHamburgerWrapper.add(flxHamburgerContainer, flxHamburgerDummy);
            flxHamburger.add(flxHamburgerWrapper);
            this.add(flxHeader, flxMainContainer, flxFooter, flxPopup, flxHamburger);
        };
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "metaData": {
                "title": ""
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
            "addWidgets": addWidgetsfrmSettings,
            "enabledForIdleTimeout": true,
            "id": "frmSettings",
            "init": controller.AS_Form_a053d9d61c084847beec05ca1e4648f9,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_c352a26e529d4107b89465fac8c184b0(eventobject);
            },
            "skin": "sknFrmTitleBar",
            "title": kony.i18n.getLocalizedString("kony.mb.Hamburger.Settings")
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
            "needsIndicatorDuringPostShow": false,
            "retainScrollPosition": true,
            "titleBar": true,
            "titleBarAttributes": {
                "barStyle": constants.BAR_STYLE_DEAFULT,
                "navigationBarHidden": false,
                "translucent": false,
                "tintColor": "ffffff00",
                "hidesBackButton": true,
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