define("TransferModule/frmWireTransferToAccount", function() {
    return function(controller) {
        function addWidgetsfrmWireTransferToAccount() {
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
                        "isVisible": true,
                        "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel")
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.checkDeposit.toAccountSmall")
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
                    "customSearchbox": {
                        "top": "0dp"
                    },
                    "tbxSearch": {
                        "placeholder": "Search"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeaderSearchbox.add(customSearchbox);
            var flxMainContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "70dp",
                "bounces": true,
                "clipBounds": false,
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
                "zIndex": 2
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
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
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
                "isVisible": false,
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
                "isVisible": true,
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
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
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
                "id": "segAccounts",
                "isVisible": true,
                "left": "0dp",
                "minHeight": "85%",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Normal",
                "rowSkin": "sknSegf9f9f9",
                "rowTemplate": "flxAccountsNoImage",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "sectionHeaderTemplate": "flxTransHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "-5dp",
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
                "height": "350dp",
                "id": "flxNoTransactions",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxNoTransactions.setDefaultUnit(kony.flex.DP);
            var lblNoTransaction = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblNoTransaction",
                "isVisible": true,
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("kony.mb.Transfers.NoTransaction"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "200dp",
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
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnAddRecipient",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.Transfers.AddRecipient"),
                "zIndex": 4
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
                "height": "45%",
                "id": "flxGradient",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxGradientBlue",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxGradient.setDefaultUnit(kony.flex.DP);
            flxGradient.add();
            this.add(flxHeader, flxHeaderSearchbox, flxMainContainer, btnAddRecipient, flxPopup, flxGradient);
        };
        return [{
            "addWidgets": addWidgetsfrmWireTransferToAccount,
            "bounces": false,
            "enableScrolling": true,
            "enabledForIdleTimeout": true,
            "id": "frmWireTransferToAccount",
            "init": controller.AS_Form_ca901437153c486aa9f4c6de16a2eab4,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_g5e3f90a337f47ea9604a3d8e0259d36(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.checkDeposit.toAccountSmall")
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