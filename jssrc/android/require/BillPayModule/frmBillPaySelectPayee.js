define("BillPayModule/frmBillPaySelectPayee", function() {
    return function(controller) {
        function addWidgetsfrmBillPaySelectPayee() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "56dp",
                "id": "flxHeader",
                "isVisible": false,
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
                    "flxHeaderShadow": {
                        "isVisible": false
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.BillPaySearchPayee.Title")
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
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxMainContainer",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
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
                            "imgUpArrow": "arrowup.png",
                            "lblHeader": ""
                        },
                        [{
                            "imgAccountType": "",
                            "imgInfo": "",
                            "imgebill": "",
                            "lblPayeeInfo": "",
                            "lblPayeeName": ""
                        }]
                    ],
                    [{
                            "imgUpArrow": "arrowup.png",
                            "lblHeader": ""
                        },
                        [{
                            "imgAccountType": "",
                            "imgInfo": "info.png",
                            "imgebill": "ebill.png",
                            "lblPayeeInfo": "Label",
                            "lblPayeeName": "Label"
                        }, {
                            "imgAccountType": "",
                            "imgInfo": "info.png",
                            "imgebill": "ebill.png",
                            "lblPayeeInfo": "Label",
                            "lblPayeeName": "Label"
                        }, {
                            "imgAccountType": "",
                            "imgInfo": "info.png",
                            "imgebill": "ebill.png",
                            "lblPayeeInfo": "Label",
                            "lblPayeeName": "Label"
                        }, {
                            "imgAccountType": "",
                            "imgInfo": "info.png",
                            "imgebill": "ebill.png",
                            "lblPayeeInfo": "Label",
                            "lblPayeeName": "Label"
                        }, {
                            "imgAccountType": "",
                            "imgInfo": "info.png",
                            "imgebill": "ebill.png",
                            "lblPayeeInfo": "Label",
                            "lblPayeeName": "Label"
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
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxSelectPayee",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "sectionHeaderTemplate": "flxBillPayHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "-5dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxBillPayHeader": "flxBillPayHeader",
                    "flxInfo": "flxInfo",
                    "flxRowAction": "flxRowAction",
                    "flxSelectPayee": "flxSelectPayee",
                    "flxSeparator": "flxSeparator",
                    "flxTypeOneShadow": "flxTypeOneShadow",
                    "flxebill": "flxebill",
                    "flximgUp": "flximgUp",
                    "imgInfo": "imgInfo",
                    "imgUpArrow": "imgUpArrow",
                    "imgebill": "imgebill",
                    "lblHeader": "lblHeader",
                    "lblPayeeInfo": "lblPayeeInfo",
                    "lblPayeeName": "lblPayeeName"
                },
                "widgetSkin": "seg2Normal",
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
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.noTransactionMsg"),
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
            flxMainContainer.add(flxToastDummy, flxSearch, flxShadow, segAccounts, flxNoTransactions);
            var flxMainContainerNew = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxMainContainerNew",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxMainContainerNew.setDefaultUnit(kony.flex.DP);
            var payeeLinkedCustomerID = new com.temenos.infinity.payeeLinkedCustomerID({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "payeeLinkedCustomerID",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "payeeLinkedCustomerID": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            payeeLinkedCustomerID.isSearchEnabled = true;
            payeeLinkedCustomerID.searchTextBoxSkin = "ICSknTbxSSPffffffNew";
            payeeLinkedCustomerID.objectService = "RBObjects";
            payeeLinkedCustomerID.rowExpandIcon = "downarrow_blue.png";
            payeeLinkedCustomerID.searchPlaceholderText = "Search by customer name or id";
            payeeLinkedCustomerID.dataGridContractLayerResponseRootPath = "contracts";
            payeeLinkedCustomerID.dataGridCustomerLayerResponseRootPath = "contractCustomers";
            payeeLinkedCustomerID.button1 = "{   \"text\": \"Continue\",   \"action\": {     \"level\": \"Component\",     \"method\": \"createCIFData\",     \"callbackAction\": {       \"level\": \"form\",       \"method\": \"continueAction\"     }   } }";
            payeeLinkedCustomerID.objectName = "InfinityUser";
            payeeLinkedCustomerID.rowCollpaseIcon = "uparrow_blue.png";
            payeeLinkedCustomerID.searchTextBoxIcon = "search_10.png";
            payeeLinkedCustomerID.dataGridContractLayerLabel1 = "contractName";
            payeeLinkedCustomerID.dataGridCustomerLayerLabel1 = "coreCustomerName";
            payeeLinkedCustomerID.separatorSuffixLinkedCustomers = "{   \"separator\": \"of\",   \"suffix\": \"Customers ID\" }";
            payeeLinkedCustomerID.button1Edit = "{   \"text\": \"Edit Payee\",   \"action\": {     \"level\": \"form\",     \"method\": \"continueActionEdit\"   } }";
            payeeLinkedCustomerID.getOperation = "getInfinityUserContractCustomers";
            payeeLinkedCustomerID.checkboxSelectedIcon = "checkbox.png";
            payeeLinkedCustomerID.dataGridContractLayerLabel2 = "contractId";
            payeeLinkedCustomerID.dataGridCustomerLayerLabel2 = "coreCustomerId";
            payeeLinkedCustomerID.lblHeading = "Select contracts or customer ID's to link recipient with";
            payeeLinkedCustomerID.datagridHeadingLabelSkin = "ICSknLbl424242SSP26px";
            payeeLinkedCustomerID.getOperationCriteria = "{}";
            payeeLinkedCustomerID.checkboxUnSelectedIcon = "checkbox_normal_1.png";
            payeeLinkedCustomerID.dataGridContractLayerLabel3 = "";
            payeeLinkedCustomerID.editobjectService = "PayeeObjects";
            payeeLinkedCustomerID.datagridContractRowSkin = "";
            payeeLinkedCustomerID.dataGridIcon1 = "isPrimary";
            payeeLinkedCustomerID.businessPayeeIcon = "{\"mapping\":\"{$.c.imgIconLink}\"}";
            payeeLinkedCustomerID.getOperationIdentifier = "ContractCustomersGet";
            payeeLinkedCustomerID.editobjectName = "Recipients";
            payeeLinkedCustomerID.datagridCustomerRowSkin = "";
            payeeLinkedCustomerID.dataGridIcon2 = "isBusiness";
            payeeLinkedCustomerID.personalPayeeIcon = "{\"mapping\":\"{$.c.imgIconLinkPersonal}\"}";
            payeeLinkedCustomerID.editOperation = "editBillPayPayee";
            payeeLinkedCustomerID.datagridContractLayerLabel1skin = "sknLbl424242SSP26px";
            payeeLinkedCustomerID.editOperationCriteria = "{   \"payeeId\": \"{$.c.payeeId}\",   \"cif\": \"{$.c.cif}\" }";
            payeeLinkedCustomerID.datagridContractLayerLabel2skin = "sknLbl727272SSPR15px";
            payeeLinkedCustomerID.editOperationIdentifier = "billPayeeEdit";
            payeeLinkedCustomerID.datagridCustomerLayerLabel1skin = "sknLbl424242SSP26px";
            payeeLinkedCustomerID.datagridCustomerLayerLabel2skin = "sknLbl727272SSPR15px";
            payeeLinkedCustomerID.sknActionButton = "ICSknbtnfocus003e75New";
            payeeLinkedCustomerID.sknActionButtonBlocked = "ICSknsknBtnBlockedSSPFFFFFF15Px";
            payeeLinkedCustomerID.sknActionButtonFocus = "ICSknbtnfocus003e75New";
            flxMainContainerNew.add(payeeLinkedCustomerID);
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
            var btnAddPayee = new kony.ui.Button({
                "bottom": "20dp",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "40dp",
                "id": "btnAddPayee",
                "isVisible": false,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtnDarkTheme",
                "text": kony.i18n.getLocalizedString("kony.mb.BillPay.AddPayee"),
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxGradient = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40%",
                "id": "flxGradient",
                "isVisible": false,
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
            this.add(flxHeader, flxHeaderSearchbox, flxMainContainer, flxMainContainerNew, flxPopup, btnAddPayee, flxGradient);
        };
        return [{
            "addWidgets": addWidgetsfrmBillPaySelectPayee,
            "bounces": false,
            "enableScrolling": true,
            "enabledForIdleTimeout": true,
            "id": "frmBillPaySelectPayee",
            "init": controller.AS_Form_ce70925ad0c34812a2f20c0b657bdba3,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_b74f5c38158f472d9c922718d0cb026d(eventobject);
            },
            "skin": "slForm",
            "title": kony.i18n.getLocalizedString("kony.mb.BillPaySearchPayee.Title")
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