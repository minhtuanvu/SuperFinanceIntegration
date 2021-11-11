define("frmAlertsSettings", function() {
    return function(controller) {
        function addWidgetsfrmAlertsSettings() {
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
                "zIndex": 301
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
                        "text": kony.i18n.getLocalizedString("kony.mb.Hamburger.Settings")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxBodyOuter = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxBodyOuter",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "bgflx",
                "top": "56dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBodyOuter.setDefaultUnit(kony.flex.DP);
            var segAlerts = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [
                    [{
                            "lblCategoryTitle": "Login"
                        },
                        [{
                            "imgArrow": "chevron.png",
                            "lblStatus": "Off",
                            "lblTitle": "Account Preview "
                        }, {
                            "imgArrow": "chevron.png",
                            "lblStatus": "On",
                            "lblTitle": "Device Registration"
                        }, {
                            "imgArrow": "chevron.png",
                            "lblStatus": "Password",
                            "lblTitle": "Default Login"
                        }]
                    ],
                    [{
                            "lblCategoryTitle": "Profile"
                        },
                        [{
                            "imgArrow": "chevron.png",
                            "lblStatus": "",
                            "lblTitle": "Change Username"
                        }, {
                            "imgArrow": "chevron.png",
                            "lblStatus": "",
                            "lblTitle": "Change Password"
                        }, {
                            "imgArrow": "chevron.png",
                            "lblStatus": "",
                            "lblTitle": "Personal Details"
                        }]
                    ],
                    [{
                            "lblCategoryTitle": "Alerts"
                        },
                        [{
                            "imgArrow": "chevron.png",
                            "lblStatus": "On",
                            "lblTitle": "Account Alerts"
                        }, {
                            "imgArrow": "chevron.png",
                            "lblStatus": "On",
                            "lblTitle": "Security Alerts"
                        }, {
                            "imgArrow": "chevron.png",
                            "lblStatus": "On",
                            "lblTitle": "Deals Alerts"
                        }]
                    ],
                    [{
                            "lblCategoryTitle": "Default Account"
                        },
                        [{
                            "imgArrow": "chevron.png",
                            "lblStatus": "My Credit Card",
                            "lblTitle": "Transfers"
                        }, {
                            "imgArrow": "chevron.png",
                            "lblStatus": "My Checking",
                            "lblTitle": "Bill Pay"
                        }, {
                            "imgArrow": "chevron.png",
                            "lblStatus": "Johns Credit Card",
                            "lblTitle": "Pay a Person"
                        }, {
                            "imgArrow": "chevron.png",
                            "lblStatus": "My Checking",
                            "lblTitle": "Cash Withdrawal"
                        }, {
                            "imgArrow": "chevron.png",
                            "lblStatus": "My Credit Card2",
                            "lblTitle": "Deposits"
                        }]
                    ]
                ],
                "groupCells": false,
                "id": "segAlerts",
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
                "sectionHeaderTemplate": "flxSettingHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxSettingHeader": "flxSettingHeader",
                    "flxSettings": "flxSettings",
                    "flxShadowOne": "flxShadowOne",
                    "imgArrow": "imgArrow",
                    "lblCategoryTitle": "lblCategoryTitle",
                    "lblStatus": "lblStatus",
                    "lblTitle": "lblTitle"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBodyOuter.add(segAlerts);
            var flxFooter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": false,
                "height": "75dp",
                "id": "flxFooter",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0bf3a57a27ba346",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxFooter.setDefaultUnit(kony.flex.DP);
            var customFooter = new com.kmb.common.customFooter({
                "bottom": 0,
                "height": "60dp",
                "id": "customFooter",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "f9f9",
                "width": "100%",
                "zIndex": 300,
                "overrides": {
                    "customFooter": {
                        "bottom": 0,
                        "top": "viz.val_cleared"
                    },
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
            this.add(flxHeader, flxBodyOuter, flxFooter);
        };
        return [{
            "addWidgets": addWidgetsfrmAlertsSettings,
            "enabledForIdleTimeout": true,
            "id": "frmAlertsSettings",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_c603f775c03b49988531fc3207293960(eventobject);
            },
            "skin": "sknFrmf9f9f9",
            "title": kony.i18n.getLocalizedString("kony.mb.Hamburger.Settings")
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "inTransitionConfig": {
                "formAnimation": 0
            },
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "outTransitionConfig": {
                "formAnimation": 0
            },
            "retainScrollPosition": false,
            "titleBar": false,
            "titleBarSkin": "sknTitle1a98ffffffff30px",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});