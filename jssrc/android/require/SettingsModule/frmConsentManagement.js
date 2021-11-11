define("SettingsModule/frmConsentManagement", function() {
    return function(controller) {
        function addWidgetsfrmConsentManagement() {
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
                "overrides": {
                    "btnRight": {
                        "isVisible": false,
                        "text": "Edit"
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "lblLocateUs": {
                        "left": "35%",
                        "text": "Your Consent",
                        "top": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxBodyText = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxBodyText",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "56dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxBodyText.setDefaultUnit(kony.flex.DP);
            var flxSelectMessage = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "55dp",
                "id": "flxSelectMessage",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "85%"
            }, {}, {});
            flxSelectMessage.setDefaultUnit(kony.flex.DP);
            var lblBodyText = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "59dp",
                "id": "lblBodyText",
                "isVisible": true,
                "minWidth": "9dp",
                "skin": "sknLbl424242SSP26px",
                "text": "Choose from the various sections below what you give consent for",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxSelectMessage.add(lblBodyText);
            var flxHeaderSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxHeaderSeparator",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxHeaderSeparator.setDefaultUnit(kony.flex.DP);
            flxHeaderSeparator.add();
            flxBodyText.add(flxSelectMessage, flxHeaderSeparator);
            var flxError = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxError",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%"
            }, {}, {});
            flxError.setDefaultUnit(kony.flex.DP);
            var lblError = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "59dp",
                "id": "lblError",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.consent.no.records"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxError.add(lblError);
            var flxMainContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "10dp",
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
                "top": "120dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxConsentData = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxConsentData",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxConsentData.setDefaultUnit(kony.flex.DP);
            var segConsentTypes = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [
                    [{
                            "imgErrIcon": "",
                            "lblConsent": "",
                            "lblConsentBlocked": "",
                            "lblErrorText": "",
                            "lblPlaceholder": "",
                            "lblSeparator": ""
                        },
                        [{
                            "lblDetailsConsent": "",
                            "lblValue": ""
                        }]
                    ]
                ],
                "groupCells": false,
                "id": "segConsentTypes",
                "isVisible": false,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxConsent",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "sectionHeaderTemplate": "flxConsentTitle",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxConsent": "flxConsent",
                    "flxConsentBlocked": "flxConsentBlocked",
                    "flxConsentTitle": "flxConsentTitle",
                    "flxConsentType": "flxConsentType",
                    "flxDetailsConsent": "flxDetailsConsent",
                    "flxDownShadow": "flxDownShadow",
                    "flxErrorText": "flxErrorText",
                    "flxPlaceholder": "flxPlaceholder",
                    "flxSeparator": "flxSeparator",
                    "flxTopShadow": "flxTopShadow",
                    "imgErrIcon": "imgErrIcon",
                    "lblConsent": "lblConsent",
                    "lblConsentBlocked": "lblConsentBlocked",
                    "lblDetailsConsent": "lblDetailsConsent",
                    "lblErrorText": "lblErrorText",
                    "lblPlaceholder": "lblPlaceholder",
                    "lblSeparator": "lblSeparator",
                    "lblValue": "lblValue"
                },
                "width": "99%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var segEditConsent = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [
                    [{
                            "imgErrIcon": "",
                            "lblConsent": "",
                            "lblConsentBlocked": "",
                            "lblErrorText": "",
                            "lblPlaceholder": "",
                            "lblSeparator": ""
                        },
                        [{
                            "lblDetailsConsent": "",
                            "switchSelect": {
                                "selectedIndex": 0
                            }
                        }]
                    ]
                ],
                "groupCells": false,
                "id": "segEditConsent",
                "isVisible": false,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxEditConsent",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "sectionHeaderTemplate": "flxConsentTitle",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxConsentBlocked": "flxConsentBlocked",
                    "flxConsentTitle": "flxConsentTitle",
                    "flxConsentType": "flxConsentType",
                    "flxDetailsConsent": "flxDetailsConsent",
                    "flxDownShadow": "flxDownShadow",
                    "flxEditConsent": "flxEditConsent",
                    "flxErrorText": "flxErrorText",
                    "flxPlaceholder": "flxPlaceholder",
                    "flxSeparator": "flxSeparator",
                    "flxTopShadow": "flxTopShadow",
                    "imgErrIcon": "imgErrIcon",
                    "lblConsent": "lblConsent",
                    "lblConsentBlocked": "lblConsentBlocked",
                    "lblDetailsConsent": "lblDetailsConsent",
                    "lblErrorText": "lblErrorText",
                    "lblPlaceholder": "lblPlaceholder",
                    "lblSeparator": "lblSeparator",
                    "switchSelect": "switchSelect"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxConsentData.add(segConsentTypes, segEditConsent);
            var flxSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSeparator",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "20dp",
                "width": "100%"
            }, {}, {});
            flxSeparator.setDefaultUnit(kony.flex.DP);
            flxSeparator.add();
            var flxButton = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "80dp",
                "id": "flxButton",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "25dp",
                "width": "100%"
            }, {}, {});
            flxButton.setDefaultUnit(kony.flex.DP);
            var btnSave = new kony.ui.Button({
                "focusSkin": "sknBtna0a0a0SSPReg26px",
                "height": "40dp",
                "id": "btnSave",
                "isVisible": true,
                "left": "30dp",
                "skin": "sknBtna0a0a0SSPReg26px",
                "text": "Save",
                "top": "20dp",
                "width": "85%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxButton.add(btnSave);
            flxMainContainer.add(flxConsentData, flxSeparator, flxButton);
            this.add(flxHeader, flxBodyText, flxError, flxMainContainer);
        };
        return [{
            "addWidgets": addWidgetsfrmConsentManagement,
            "enabledForIdleTimeout": false,
            "id": "frmConsentManagement",
            "init": controller.AS_Form_a4798e7ab2cb46a787ebaaf75a2f670c,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_a2167171d2ad4a25894c0f58c53453b5(eventobject);
            },
            "skin": "sknFrmffffff"
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