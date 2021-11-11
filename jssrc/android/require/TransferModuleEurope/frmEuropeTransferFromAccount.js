define("TransferModuleEurope/frmEuropeTransferFromAccount", function() {
    return function(controller) {
        function addWidgetsfrmEuropeTransferFromAccount() {
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
                    "flxHeaderShadow": {
                        "isVisible": false
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "lblLocateUs": {
                        "centerX": "viz.val_cleared",
                        "centerY": "49.86%",
                        "text": kony.i18n.getLocalizedString("kony.mb.common.from"),
                        "left": "15.00%"
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
                "height": "0dp",
                "id": "flxHeaderSearchbox",
                "isVisible": true,
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
                    "btnCancel": {
                        "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel")
                    },
                    "imgSearch": {
                        "src": "searchblue.png"
                    },
                    "imgSearchIcon": {
                        "src": "search.png"
                    },
                    "tbxSearch": {
                        "placeholder": "Search "
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
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknFlxScrlffffff",
                "top": "56dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
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
            var flxSearch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "55dp",
                "id": "flxSearch",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlx1a98ff",
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
                "height": "19dp",
                "id": "imgSearchIcon",
                "isVisible": true,
                "left": "30dp",
                "skin": "slImage",
                "src": "search.png",
                "width": "20dp",
                "zIndex": 10
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
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
                "placeholder": kony.i18n.getLocalizedString("kony.mb.MM.FromAccountPlaceholder"),
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
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
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
            var segTransactions = new kony.ui.SegmentedUI2({
                "data": [
                    [{
                            "imgUpArrow": "arrowdown.png",
                            "lblHeader": "Transactions"
                        },
                        [{
                            "accountTypeIcon": "imagedrag.png",
                            "imgBankIcon": "imagedrag.png",
                            "imgBankIconType": "imagedrag.png",
                            "imgDelete": "deleteicon.png",
                            "imgTick": "tickmark_green.png",
                            "lblAccountBal": "Available Balance",
                            "lblAccountBalValue": "$25,500",
                            "lblAccountName": "Checking",
                            "lblAccountNumber": "",
                            "lblBankName": "Chase Bank",
                            "lblDelete": "Delete"
                        }, {
                            "accountTypeIcon": "imagedrag.png",
                            "imgBankIcon": "imagedrag.png",
                            "imgBankIconType": "imagedrag.png",
                            "imgDelete": "deleteicon.png",
                            "imgTick": "tickmark_green.png",
                            "lblAccountBal": "Available Balance",
                            "lblAccountBalValue": "$25,500",
                            "lblAccountName": "Checking",
                            "lblAccountNumber": "",
                            "lblBankName": "Chase Bank",
                            "lblDelete": "Delete"
                        }, {
                            "accountTypeIcon": "imagedrag.png",
                            "imgBankIcon": "imagedrag.png",
                            "imgBankIconType": "imagedrag.png",
                            "imgDelete": "deleteicon.png",
                            "imgTick": "tickmark_green.png",
                            "lblAccountBal": "Available Balance",
                            "lblAccountBalValue": "$25,500",
                            "lblAccountName": "Checking",
                            "lblAccountNumber": "",
                            "lblBankName": "Chase Bank",
                            "lblDelete": "Delete"
                        }, {
                            "accountTypeIcon": "imagedrag.png",
                            "imgBankIcon": "imagedrag.png",
                            "imgBankIconType": "imagedrag.png",
                            "imgDelete": "deleteicon.png",
                            "imgTick": "tickmark_green.png",
                            "lblAccountBal": "Available Balance",
                            "lblAccountBalValue": "$25,500",
                            "lblAccountName": "Checking",
                            "lblAccountNumber": "",
                            "lblBankName": "Chase Bank",
                            "lblDelete": "Delete"
                        }, {
                            "accountTypeIcon": "imagedrag.png",
                            "imgBankIcon": "imagedrag.png",
                            "imgBankIconType": "imagedrag.png",
                            "imgDelete": "deleteicon.png",
                            "imgTick": "tickmark_green.png",
                            "lblAccountBal": "Available Balance",
                            "lblAccountBalValue": "$25,500",
                            "lblAccountName": "Checking",
                            "lblAccountNumber": "",
                            "lblBankName": "Chase Bank",
                            "lblDelete": "Delete"
                        }, {
                            "accountTypeIcon": "imagedrag.png",
                            "imgBankIcon": "imagedrag.png",
                            "imgBankIconType": "imagedrag.png",
                            "imgDelete": "deleteicon.png",
                            "imgTick": "tickmark_green.png",
                            "lblAccountBal": "Available Balance",
                            "lblAccountBalValue": "$25,500",
                            "lblAccountName": "Checking",
                            "lblAccountNumber": "",
                            "lblBankName": "Chase Bank",
                            "lblDelete": "Delete"
                        }]
                    ],
                    [{
                            "imgUpArrow": "arrowdown.png",
                            "lblHeader": "Transactions"
                        },
                        [{
                            "accountTypeIcon": "imagedrag.png",
                            "imgBankIcon": "imagedrag.png",
                            "imgBankIconType": "imagedrag.png",
                            "imgDelete": "deleteicon.png",
                            "imgTick": "tickmark_green.png",
                            "lblAccountBal": "Available Balance",
                            "lblAccountBalValue": "$25,500",
                            "lblAccountName": "Checking",
                            "lblAccountNumber": "",
                            "lblBankName": "Chase Bank",
                            "lblDelete": "Delete"
                        }, {
                            "accountTypeIcon": "imagedrag.png",
                            "imgBankIcon": "imagedrag.png",
                            "imgBankIconType": "imagedrag.png",
                            "imgDelete": "deleteicon.png",
                            "imgTick": "tickmark_green.png",
                            "lblAccountBal": "Available Balance",
                            "lblAccountBalValue": "$25,500",
                            "lblAccountName": "Checking",
                            "lblAccountNumber": "",
                            "lblBankName": "Chase Bank",
                            "lblDelete": "Delete"
                        }, {
                            "accountTypeIcon": "imagedrag.png",
                            "imgBankIcon": "imagedrag.png",
                            "imgBankIconType": "imagedrag.png",
                            "imgDelete": "deleteicon.png",
                            "imgTick": "tickmark_green.png",
                            "lblAccountBal": "Available Balance",
                            "lblAccountBalValue": "$25,500",
                            "lblAccountName": "Checking",
                            "lblAccountNumber": "",
                            "lblBankName": "Chase Bank",
                            "lblDelete": "Delete"
                        }, {
                            "accountTypeIcon": "imagedrag.png",
                            "imgBankIcon": "imagedrag.png",
                            "imgBankIconType": "imagedrag.png",
                            "imgDelete": "deleteicon.png",
                            "imgTick": "tickmark_green.png",
                            "lblAccountBal": "Available Balance",
                            "lblAccountBalValue": "$25,500",
                            "lblAccountName": "Checking",
                            "lblAccountNumber": "",
                            "lblBankName": "Chase Bank",
                            "lblDelete": "Delete"
                        }, {
                            "accountTypeIcon": "imagedrag.png",
                            "imgBankIcon": "imagedrag.png",
                            "imgBankIconType": "imagedrag.png",
                            "imgDelete": "deleteicon.png",
                            "imgTick": "tickmark_green.png",
                            "lblAccountBal": "Available Balance",
                            "lblAccountBalValue": "$25,500",
                            "lblAccountName": "Checking",
                            "lblAccountNumber": "",
                            "lblBankName": "Chase Bank",
                            "lblDelete": "Delete"
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
                "rowTemplate": "flxAccountsNoImageTransfers",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sknSegffffff",
                "sectionHeaderTemplate": "flxTransHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "accountTypeFlx": "accountTypeFlx",
                    "accountTypeIcon": "accountTypeIcon",
                    "flxAccountName": "flxAccountName",
                    "flxAccountsNoImageTransfers": "flxAccountsNoImageTransfers",
                    "flxBankIconType": "flxBankIconType",
                    "flxBankName": "flxBankName",
                    "flxDelete": "flxDelete",
                    "flxMain": "flxMain",
                    "flxSeparator": "flxSeparator",
                    "flxShadowBottom": "flxShadowBottom",
                    "flxTransHeader": "flxTransHeader",
                    "flxTypeOneShadow": "flxTypeOneShadow",
                    "flximgUp": "flximgUp",
                    "imgBankIcon": "imgBankIcon",
                    "imgBankIconType": "imgBankIconType",
                    "imgDelete": "imgDelete",
                    "imgTick": "imgTick",
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
                "height": "100%",
                "id": "flxNoTransactions",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "101dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxNoTransactions.setDefaultUnit(kony.flex.DP);
            var lblNoTransaction = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblNoTransaction",
                "isVisible": true,
                "skin": "sknLblLifestyleHeaderSF",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.noTransactionMsg"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20%",
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
            var flxGradient = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "98dp",
                "id": "flxGradient",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxGradientBlue",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxGradient.setDefaultUnit(kony.flex.DP);
            flxGradient.add();
            var flxNoAccounts = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "10dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "82%",
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
                "text": kony.i18n.getLocalizedString("kony.mb.MM.NoAccountToTransferFrom"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblAddABankAccount = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblAddABankAccount",
                "isVisible": true,
                "skin": "sknLbl424242SSP32px",
                "text": kony.i18n.getLocalizedString("kony.mb.MM.AddABankAccount"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "25%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
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
            flxNoAccounts.add(lblNoAccounts, lblAddABankAccount, flxSeparatorNoAccounts);
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
                "top": "54dp",
                "width": "100%",
                "zIndex": 1
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
                "text": kony.i18n.getLocalizedString("kony.mb.MM.fromAccountSelectionTitle"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxDescription.add(lblDescription);
            flxMainContainer.add(flxToastDummy, flxSearch, flxShadow, flxSeperator2, segTransactions, flxNoTransactions, flxGradient, flxNoAccounts, flxDescription);
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
            var flxHamburger = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
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
                "right": "50dp",
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
                "overrides": {
                    "imgLogout": {
                        "src": "logout.png"
                    },
                    "imgUser": {
                        "src": "userimg.png"
                    }
                }
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
                "right": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "50dp",
                "zIndex": 3
            }, {}, {});
            flxHamburgerDummy.setDefaultUnit(kony.flex.DP);
            flxHamburgerDummy.add();
            flxHamburgerWrapper.add(flxHamburgerContainer, flxHamburgerDummy);
            flxHamburger.add(flxHamburgerWrapper);
            var flxGradientBottom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "30%",
                "id": "flxGradientBottom",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx0095e4",
                "top": "25%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxGradientBottom.setDefaultUnit(kony.flex.DP);
            flxGradientBottom.add();
            var flxOuterGradient = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "223dp",
                "id": "flxOuterGradient",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx1a98ff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxOuterGradient.setDefaultUnit(kony.flex.DP);
            flxOuterGradient.add();
            this.add(flxHeader, flxHeaderSearchbox, flxMainContainer, flxPopup, flxHamburger, flxGradientBottom, flxOuterGradient);
        };
        return [{
            "addWidgets": addWidgetsfrmEuropeTransferFromAccount,
            "allowHorizontalBounce": false,
            "bounces": false,
            "enableScrolling": false,
            "enabledForIdleTimeout": true,
            "id": "frmEuropeTransferFromAccount",
            "init": controller.AS_Form_h2d2d5eb97f24496aabca1ab3d453f51,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_f659b2118edf4f6bb359d61dd27170d4,
            "preShow": function(eventobject) {
                controller.AS_Form_abb385a9c1c04b4cb523a1056c3cf553(eventobject);
            },
            "skin": "sknFrmBgSF",
            "title": kony.i18n.getLocalizedString("kony.mb.common.from")
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