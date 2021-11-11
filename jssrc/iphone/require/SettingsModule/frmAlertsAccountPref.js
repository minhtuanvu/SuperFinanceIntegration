define("SettingsModule/frmAlertsAccountPref", function() {
    return function(controller) {
        function addWidgetsfrmAlertsAccountPref() {
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
                "zIndex": 4
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var flxSeparatorHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorHeader",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSeparatorHeader.setDefaultUnit(kony.flex.DP);
            flxSeparatorHeader.add();
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
                    "btnRight": {
                        "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
                        "isVisible": true
                    },
                    "flxHeader": {
                        "isVisible": true
                    },
                    "flxHeaderShadow": {
                        "isVisible": false
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
                        "centerX": "viz.val_cleared",
                        "centerY": "49.86%",
                        "left": "15.00%",
                        "text": "Account Alerts"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(flxSeparatorHeader, customHeader);
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
                "zIndex": 201
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
            var flxAlertsAccountLevel = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxAlertsAccountLevel",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknFlxScrlffffff",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxAlertsAccountLevel.setDefaultUnit(kony.flex.DP);
            var flxToastDummy = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "65dp",
                "id": "flxToastDummy",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxToastDummy.setDefaultUnit(kony.flex.DP);
            flxToastDummy.add();
            var flxShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "5dp",
                "id": "flxShadow",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadow.setDefaultUnit(kony.flex.DP);
            flxShadow.add();
            var flxSeperator2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "25dp",
                "id": "flxSeperator2",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBlueHeaderShadow",
                "top": "-25dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSeperator2.setDefaultUnit(kony.flex.DP);
            flxSeperator2.add();
            var flxDescription = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "48dp",
                "id": "flxDescription",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxDescription.setDefaultUnit(kony.flex.DP);
            var lblDescription = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblDescription",
                "isVisible": true,
                "left": "0dp",
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.alerts.selectAccountAlertPref"),
                "textStyle": {
                    "lineSpacing": 0,
                    "letterSpacing": 0,
                    "baseline": 0,
                    "maxLineHeight": 0,
                    "minLineHeight": 0
                },
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
            flxDescription.add(lblDescription);
            var segTransactions = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [
                    [{
                            "imgUpArrow": "arrowdown.png",
                            "lblHeader": "Transactions"
                        },
                        [{
                            "imgArrow": "chevron.png",
                            "lblAccountName": "Savings Acc...",
                            "lblAccountNumber": "123",
                            "lblBankName": "Bank of America",
                            "lblValue": "OFF"
                        }, {
                            "imgArrow": "chevron.png",
                            "lblAccountName": "Savings Acc...",
                            "lblAccountNumber": "123",
                            "lblBankName": "Bank of America",
                            "lblValue": "OFF"
                        }, {
                            "imgArrow": "chevron.png",
                            "lblAccountName": "Savings Acc...",
                            "lblAccountNumber": "123",
                            "lblBankName": "Bank of America",
                            "lblValue": "OFF"
                        }, {
                            "imgArrow": "chevron.png",
                            "lblAccountName": "Savings Acc...",
                            "lblAccountNumber": "123",
                            "lblBankName": "Bank of America",
                            "lblValue": "OFF"
                        }, {
                            "imgArrow": "chevron.png",
                            "lblAccountName": "Savings Acc...",
                            "lblAccountNumber": "123",
                            "lblBankName": "Bank of America",
                            "lblValue": "OFF"
                        }, {
                            "imgArrow": "chevron.png",
                            "lblAccountName": "Savings Acc...",
                            "lblAccountNumber": "123",
                            "lblBankName": "Bank of America",
                            "lblValue": "OFF"
                        }]
                    ],
                    [{
                            "imgUpArrow": "arrowdown.png",
                            "lblHeader": "Transactions"
                        },
                        [{
                            "imgArrow": "chevron.png",
                            "lblAccountName": "Savings Acc...",
                            "lblAccountNumber": "123",
                            "lblBankName": "Bank of America",
                            "lblValue": "OFF"
                        }, {
                            "imgArrow": "chevron.png",
                            "lblAccountName": "Savings Acc...",
                            "lblAccountNumber": "123",
                            "lblBankName": "Bank of America",
                            "lblValue": "OFF"
                        }, {
                            "imgArrow": "chevron.png",
                            "lblAccountName": "Savings Acc...",
                            "lblAccountNumber": "123",
                            "lblBankName": "Bank of America",
                            "lblValue": "OFF"
                        }, {
                            "imgArrow": "chevron.png",
                            "lblAccountName": "Savings Acc...",
                            "lblAccountNumber": "123",
                            "lblBankName": "Bank of America",
                            "lblValue": "OFF"
                        }, {
                            "imgArrow": "chevron.png",
                            "lblAccountName": "Savings Acc...",
                            "lblAccountNumber": "123",
                            "lblBankName": "Bank of America",
                            "lblValue": "OFF"
                        }]
                    ]
                ],
                "groupCells": false,
                "height": "100%",
                "id": "segTransactions",
                "isVisible": true,
                "left": "0dp",
                "minHeight": "85%",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "sknSegffffff",
                "rowTemplate": "flxAlertsPref",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sknSegffffff",
                "sectionHeaderTemplate": "flxTransHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxAccountName": "flxAccountName",
                    "flxAlertsPref": "flxAlertsPref",
                    "flxRightWrapper": "flxRightWrapper",
                    "flxSepartaor": "flxSepartaor",
                    "flxShadowBottom": "flxShadowBottom",
                    "flxTransHeader": "flxTransHeader",
                    "flxTypeOneShadow": "flxTypeOneShadow",
                    "imgArrow": "imgArrow",
                    "imgUpArrow": "imgUpArrow",
                    "lblAccountName": "lblAccountName",
                    "lblAccountNumber": "lblAccountNumber",
                    "lblBankName": "lblBankName",
                    "lblHeader": "lblHeader",
                    "lblValue": "lblValue"
                },
                "widgetSkin": "sknSegffffff",
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": false,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": true,
                "indicator": constants.SEGUI_NONE,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            var flxNoTransactions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxNoTransactions",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxNoTransactions.setDefaultUnit(kony.flex.DP);
            var lblNoTransaction = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblNoTransaction",
                "isVisible": true,
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.noTransactionMsg"),
                "textStyle": {},
                "top": "30%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var btnTransferToNewAccount = new kony.ui.Button({
                "bottom": "0dp",
                "centerX": "50%",
                "focusSkin": "sknMMBtn0a9f281107bc246",
                "height": "30dp",
                "id": "btnTransferToNewAccount",
                "isVisible": true,
                "left": "110dp",
                "skin": "sknMMBtn0a9f281107bc246",
                "text": kony.i18n.getLocalizedString("kony.mb.MM.TransferToNewRecipient"),
                "top": "40%",
                "width": "60%",
                "zIndex": 202
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            flxNoTransactions.add(lblNoTransaction, btnTransferToNewAccount);
            var flxNoP2P = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "110dp",
                "id": "flxNoP2P",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox0e6f1958661e64a",
                "top": "100%",
                "width": "100%"
            }, {}, {});
            flxNoP2P.setDefaultUnit(kony.flex.DP);
            var lblNoP2P = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblNoP2P",
                "isVisible": true,
                "left": "0",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.MM.NoP2PRecipients"),
                "textStyle": {},
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxNoP2P.add(lblNoP2P);
            var flxNoAccounts = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "10dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "75%",
                "id": "flxNoAccounts",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "102dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxNoAccounts.setDefaultUnit(kony.flex.DP);
            var lblNoAccounts = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblNoAccounts",
                "isVisible": true,
                "skin": "sknLbl424242SSP32px",
                "text": kony.i18n.getLocalizedString("kony.mb.MM.NoAccountToTransferTo"),
                "textStyle": {},
                "top": "20%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblNoAccounts2 = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblNoAccounts2",
                "isVisible": true,
                "skin": "sknLbl424242SSP32px",
                "text": kony.i18n.getLocalizedString("kony.mb.MM.AddRecipientToSendMoney"),
                "textStyle": {},
                "top": "25%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxSeparatorNoAccounts = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorNoAccounts",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "1dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparatorNoAccounts.setDefaultUnit(kony.flex.DP);
            flxSeparatorNoAccounts.add();
            flxNoAccounts.add(lblNoAccounts, lblNoAccounts2, flxSeparatorNoAccounts);
            flxAlertsAccountLevel.add(flxToastDummy, flxShadow, flxSeperator2, flxDescription, segTransactions, flxNoTransactions, flxNoP2P, flxNoAccounts);
            var flxAlertsAccountType = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxAlertsAccountType",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknFlxScrlffffff",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxAlertsAccountType.setDefaultUnit(kony.flex.DP);
            var flxToastDummy1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "65dp",
                "id": "flxToastDummy1",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxToastDummy1.setDefaultUnit(kony.flex.DP);
            flxToastDummy1.add();
            var flxShadow1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "5dp",
                "id": "flxShadow1",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadow1.setDefaultUnit(kony.flex.DP);
            flxShadow1.add();
            var flxSeperator1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "25dp",
                "id": "flxSeperator1",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBlueHeaderShadow",
                "top": "-25dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSeperator1.setDefaultUnit(kony.flex.DP);
            flxSeperator1.add();
            var flxDescription1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "48dp",
                "id": "flxDescription1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxDescription1.setDefaultUnit(kony.flex.DP);
            var lblDescriptionAccTypes = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblDescriptionAccTypes",
                "isVisible": true,
                "left": "0dp",
                "right": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.alerts.selectAccountTypeAlertPref"),
                "textStyle": {
                    "lineSpacing": 0,
                    "letterSpacing": 0,
                    "baseline": 0,
                    "maxLineHeight": 0,
                    "minLineHeight": 0
                },
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
            var flxSubHeaderSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSubHeaderSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSubHeaderSeperator.setDefaultUnit(kony.flex.DP);
            flxSubHeaderSeperator.add();
            flxDescription1.add(lblDescriptionAccTypes, flxSubHeaderSeperator);
            var segTransactions1 = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "imgArrow": "chevron_1.png",
                    "lblName": "Label",
                    "lblValue": "500.00"
                }, {
                    "imgArrow": "chevron_1.png",
                    "lblName": "Label",
                    "lblValue": "500.00"
                }, {
                    "imgArrow": "chevron_1.png",
                    "lblName": "Label",
                    "lblValue": "500.00"
                }, {
                    "imgArrow": "chevron_1.png",
                    "lblName": "Label",
                    "lblValue": "500.00"
                }, {
                    "imgArrow": "chevron_1.png",
                    "lblName": "Label",
                    "lblValue": "500.00"
                }],
                "groupCells": false,
                "height": "100%",
                "id": "segTransactions1",
                "isVisible": true,
                "left": "0dp",
                "minHeight": "85%",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "sknSegffffff",
                "rowTemplate": "flxAlertsListingRow",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sknSegffffff",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxAlertsContainer": "flxAlertsContainer",
                    "flxAlertsListingRow": "flxAlertsListingRow",
                    "flxImage": "flxImage",
                    "flxSeperator": "flxSeperator",
                    "imgArrow": "imgArrow",
                    "lblName": "lblName",
                    "lblValue": "lblValue"
                },
                "widgetSkin": "sknSegffffff",
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": false,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": true,
                "indicator": constants.SEGUI_NONE,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            var flxNoTransactions1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxNoTransactions1",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxNoTransactions1.setDefaultUnit(kony.flex.DP);
            var lblNoAccountTypes = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblNoAccountTypes",
                "isVisible": true,
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.noTransactionMsg"),
                "textStyle": {},
                "top": "30%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxNoTransactions1.add(lblNoAccountTypes);
            flxAlertsAccountType.add(flxToastDummy1, flxShadow1, flxSeperator1, flxDescription1, segTransactions1, flxNoTransactions1);
            this.add(flxHeader, flxPopup, flxAlertsAccountLevel, flxAlertsAccountType);
        };
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": false,
            "action": controller.AS_BarButtonItem_e6dec38ef4f64095a0272ebffd07eba0,
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
            "addWidgets": addWidgetsfrmAlertsAccountPref,
            "bounces": false,
            "enableScrolling": false,
            "enabledForIdleTimeout": true,
            "id": "frmAlertsAccountPref",
            "init": controller.AS_Form_bfe67e5136c4472cac09fcdda698c3d8,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_f19e3aa1a46147578d4201e513828b68,
            "preShow": function(eventobject) {
                controller.AS_Form_f0e065ab34b94d2a87f412f812c9367d(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": "Account Alerts"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "bounces": false,
            "configureExtendBottom": false,
            "configureExtendTop": false,
            "configureStatusBarStyle": false,
            "footerOverlap": false,
            "formTransparencyDuringPostShow": "100",
            "headerOverlap": false,
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
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