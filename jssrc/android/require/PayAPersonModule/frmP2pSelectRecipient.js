define("PayAPersonModule/frmP2pSelectRecipient", function() {
    return function(controller) {
        function addWidgetsfrmP2pSelectRecipient() {
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
                        "text": kony.i18n.getLocalizedString("kony.mb.P2pSelectRecipient.Title")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(flxSeparatorHeader, customHeader);
            var flxHeaderSearchbox = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxHeaderSearchbox",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffffShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxHeaderSearchbox.setDefaultUnit(kony.flex.DP);
            var customSearchbox = new com.kmb.Search.customSearchbox({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "40dp",
                "id": "customSearchbox",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "imgSearch": {
                        "src": "searchblue.png"
                    },
                    "imgSearchIcon": {
                        "src": "search.png"
                    },
                    "tbxSearch": {
                        "placeholder": "Search..."
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeaderSearchbox.add(customSearchbox);
            var flxMainContainer = new kony.ui.FlexContainer({
                "bottom": "70dp",
                "clipBounds": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxSearch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "55dp",
                "id": "flxSearch",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "25dp",
                "isModalContainer": false,
                "skin": "sknFlxGradientBlue",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxSearch.setDefaultUnit(kony.flex.DP);
            var flxSearchMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxSearchMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "-0.50%",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxSearchMain.setDefaultUnit(kony.flex.DP);
            var imgSearchIcon = new kony.ui.Image2({
                "centerY": "50%",
                "height": "15dp",
                "id": "imgSearchIcon",
                "isVisible": true,
                "left": "30dp",
                "skin": "slImage",
                "src": "search.png",
                "width": "15dp",
                "zIndex": 10
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var tbxSearch = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxSSPf1f1f1B",
                "height": "35dp",
                "id": "tbxSearch",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "placeholder": kony.i18n.getLocalizedString("kony.mb.ExternalAccounts.Search"),
                "right": "20dp",
                "secureTextEntry": false,
                "skin": "sknTbxSSPf1f1f1B",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [35, 3, 1, 3],
                "paddingInPixel": true
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_SEARCH,
                "placeholderSkin": "sknTbxPlaceholderDefault",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxSearchMain.add(imgSearchIcon, tbxSearch);
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
            flxSearch.add(flxSearchMain, flxSeperator);
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
            var segAccounts = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [
                    [{
                            "imgUpArrow": "imagedrag.png",
                            "lblHeader": "Label"
                        },
                        [{
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }]
                    ],
                    [{
                            "imgUpArrow": "imagedrag.png",
                            "lblHeader": "Label"
                        },
                        [{
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }]
                    ]
                ],
                "groupCells": false,
                "height": "100%",
                "id": "segAccounts",
                "isVisible": true,
                "left": "0dp",
                "minHeight": "85%",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxAccountsNoImage",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "sectionHeaderTemplate": "flxTransHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxAccountName": "flxAccountName",
                    "flxAccountsNoImage": "flxAccountsNoImage",
                    "flxDelete": "flxDelete",
                    "flxMain": "flxMain",
                    "flxSeparator": "flxSeparator",
                    "flxShadowBottom": "flxShadowBottom",
                    "flxTransHeader": "flxTransHeader",
                    "flxTypeOneShadow": "flxTypeOneShadow",
                    "imgDelete": "imgDelete",
                    "imgUpArrow": "imgUpArrow",
                    "lblAccountBal": "lblAccountBal",
                    "lblAccountBalValue": "lblAccountBalValue",
                    "lblAccountName": "lblAccountName",
                    "lblAccountNumber": "lblAccountNumber",
                    "lblBankName": "lblBankName",
                    "lblDelete": "lblDelete",
                    "lblHeader": "lblHeader"
                },
                "widgetSkin": "sknSegffffff",
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "dockSectionHeaders": true
            });
            var flxNoTransactions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "400dp",
                "id": "flxNoTransactions",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "55dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxNoTransactions.setDefaultUnit(kony.flex.DP);
            var lblNoTransaction = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblNoTransaction",
                "isVisible": true,
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("kony.mb.P2P.NoPayeesAvailable"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "145dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxNoTransactions.add(lblNoTransaction);
            flxMainContainer.add(flxSearch, flxShadow, segAccounts, flxNoTransactions);
            var btnAddRecipient = new kony.ui.Button({
                "bottom": "20dp",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "40dp",
                "id": "btnAddRecipient",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtnDarkTheme",
                "text": kony.i18n.getLocalizedString("kony.mb.Transfers.AddRecipient"),
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
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
            var flxGradient = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40%",
                "id": "flxGradient",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxGradientBlue",
                "top": "56dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxGradient.setDefaultUnit(kony.flex.DP);
            flxGradient.add();
            this.add(flxHeader, flxHeaderSearchbox, flxMainContainer, btnAddRecipient, flxPopup, flxGradient);
        };
        return [{
            "addWidgets": addWidgetsfrmP2pSelectRecipient,
            "bounces": false,
            "enableScrolling": false,
            "enabledForIdleTimeout": true,
            "id": "frmP2pSelectRecipient",
            "init": controller.AS_Form_fdd83db3f76b455fafaf0a0764970164,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_b5290ee6406a4712a781b4588fd46a8d(eventobject);
            },
            "skin": "sknFrm1a98fftoffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.P2pSelectRecipient.Title")
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