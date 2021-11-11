define("ApprovalsReqModule/frmApprovalHistory", function() {
    return function(controller) {
        function addWidgetsfrmApprovalHistory() {
            this.setDefaultUnit(kony.flex.DP);
            var filter = new com.banking.approvalsAndRequests.filter({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "id": "filter",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlxBg000000",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10000000000000,
                "overrides": {
                    "filter": {
                        "isVisible": false,
                        "zIndex": 10000000000000
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8%",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
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
                    "btnLeft": {
                        "isVisible": false
                    },
                    "btnRight": {
                        "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
                        "isVisible": false
                    },
                    "flxBack": {
                        "left": "4dp"
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
                    "lblLocateUs": {
                        "centerX": "viz.val_cleared",
                        "text": "Approval History"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxBody = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "92%",
                "id": "flxBody",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxBody.setDefaultUnit(kony.flex.DP);
            var flxSearch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "8%",
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
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx1a98ff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxSearchMain.setDefaultUnit(kony.flex.DP);
            var imgSearchIcon = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
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
            var txtSearch = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "focusSkin": "sknTbxSSPf1f1f1B",
                "height": "40dp",
                "id": "txtSearch",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "placeholder": kony.i18n.getLocalizedString("Kony.mb.ACHTransactions.search"),
                "right": "20dp",
                "secureTextEntry": false,
                "skin": "sknTbxSSPf1f1f1B",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [35, 3, 1, 3],
                "paddingInPixel": true
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_SEARCH,
                "placeholderSkin": "sknTbxPlaceholderDefault",
                "showClearButton": true,
                "showCloseButton": true,
                "showProgressIndicator": true,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var imgAdvSearch = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgAdvSearch",
                "isVisible": false,
                "right": "25dp",
                "skin": "slImage",
                "src": "advansecsearch.png",
                "top": "13dp",
                "width": "20dp",
                "zIndex": 10
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnCancelSearch = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "sknBtn0095e428px",
                "height": "30dp",
                "id": "btnCancelSearch",
                "isVisible": false,
                "right": "15dp",
                "skin": "sknBtnffffffSSP28px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxSearchMain.add(imgSearchIcon, txtSearch, imgAdvSearch, btnCancelSearch);
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
            var flxfilter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8%",
                "id": "flxfilter",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxf6f6f6Bcg",
                "top": "8%",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxfilter.setDefaultUnit(kony.flex.DP);
            var flxcontent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxcontent",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%"
            }, {}, {});
            flxcontent.setDefaultUnit(kony.flex.DP);
            var flxShowfilter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxShowfilter",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_d6c6974a6fde4caeb3788096c9eaed28,
                "right": "1.50%",
                "skin": "slFbox",
                "top": "0dp",
                "width": "15%"
            }, {}, {});
            flxShowfilter.setDefaultUnit(kony.flex.DP);
            var imgfliter = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "25dp",
                "id": "imgfliter",
                "isVisible": true,
                "skin": "slImage",
                "src": "filters.png",
                "top": "0dp",
                "width": "25dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxShowfilter.add(imgfliter);
            var lblFiltertype = new kony.ui.Label({
                "centerY": "54%",
                "id": "lblFiltertype",
                "isVisible": true,
                "left": "5.30%",
                "skin": "sknlabel424242Regular42px",
                "text": "All ",
                "textStyle": {},
                "top": "16dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxShadowBottom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "4dp",
                "id": "flxShadowBottom",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadowBottom",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadowBottom.setDefaultUnit(kony.flex.DP);
            flxShadowBottom.add();
            flxcontent.add(flxShowfilter, lblFiltertype, flxShadowBottom);
            flxfilter.add(flxcontent);
            var flxsegmentscroll = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "84%",
                "horizontalScrollIndicator": true,
                "id": "flxsegmentscroll",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknFlxScrlffffff",
                "top": "16%",
                "verticalScrollIndicator": true,
                "width": "100%"
            }, {}, {});
            flxsegmentscroll.setDefaultUnit(kony.flex.DP);
            var segApprovalHistory = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgStatus": "approval.png",
                    "lblDate": "Label",
                    "lblName": "Label",
                    "lblPaymentMode": "Label",
                    "lblPaymentType": "Label"
                }, {
                    "imgStatus": "approval.png",
                    "lblDate": "Label",
                    "lblName": "Label",
                    "lblPaymentMode": "Label",
                    "lblPaymentType": "Label"
                }, {
                    "imgStatus": "approval.png",
                    "lblDate": "Label",
                    "lblName": "Label",
                    "lblPaymentMode": "Label",
                    "lblPaymentType": "Label"
                }, {
                    "imgStatus": "approval.png",
                    "lblDate": "Label",
                    "lblName": "Label",
                    "lblPaymentMode": "Label",
                    "lblPaymentType": "Label"
                }, {
                    "imgStatus": "approval.png",
                    "lblDate": "Label",
                    "lblName": "Label",
                    "lblPaymentMode": "Label",
                    "lblPaymentType": "Label"
                }, {
                    "imgStatus": "approval.png",
                    "lblDate": "Label",
                    "lblName": "Label",
                    "lblPaymentMode": "Label",
                    "lblPaymentType": "Label"
                }, {
                    "imgStatus": "approval.png",
                    "lblDate": "Label",
                    "lblName": "Label",
                    "lblPaymentMode": "Label",
                    "lblPaymentType": "Label"
                }, {
                    "imgStatus": "approval.png",
                    "lblDate": "Label",
                    "lblName": "Label",
                    "lblPaymentMode": "Label",
                    "lblPaymentType": "Label"
                }, {
                    "imgStatus": "approval.png",
                    "lblDate": "Label",
                    "lblName": "Label",
                    "lblPaymentMode": "Label",
                    "lblPaymentType": "Label"
                }, {
                    "imgStatus": "approval.png",
                    "lblDate": "Label",
                    "lblName": "Label",
                    "lblPaymentMode": "Label",
                    "lblPaymentType": "Label"
                }, {
                    "imgStatus": "approval.png",
                    "lblDate": "Label",
                    "lblName": "Label",
                    "lblPaymentMode": "Label",
                    "lblPaymentType": "Label"
                }, {
                    "imgStatus": "approval.png",
                    "lblDate": "Label",
                    "lblName": "Label",
                    "lblPaymentMode": "Label",
                    "lblPaymentType": "Label"
                }, {
                    "imgStatus": "approval.png",
                    "lblDate": "Label",
                    "lblName": "Label",
                    "lblPaymentMode": "Label",
                    "lblPaymentType": "Label"
                }, {
                    "imgStatus": "approval.png",
                    "lblDate": "Label",
                    "lblName": "Label",
                    "lblPaymentMode": "Label",
                    "lblPaymentType": "Label"
                }, {
                    "imgStatus": "approval.png",
                    "lblDate": "Label",
                    "lblName": "Label",
                    "lblPaymentMode": "Label",
                    "lblPaymentType": "Label"
                }, {
                    "imgStatus": "approval.png",
                    "lblDate": "Label",
                    "lblName": "Label",
                    "lblPaymentMode": "Label",
                    "lblPaymentType": "Label"
                }, {
                    "imgStatus": "approval.png",
                    "lblDate": "Label",
                    "lblName": "Label",
                    "lblPaymentMode": "Label",
                    "lblPaymentType": "Label"
                }, {
                    "imgStatus": "approval.png",
                    "lblDate": "Label",
                    "lblName": "Label",
                    "lblPaymentMode": "Label",
                    "lblPaymentType": "Label"
                }, {
                    "imgStatus": "approval.png",
                    "lblDate": "Label",
                    "lblName": "Label",
                    "lblPaymentMode": "Label",
                    "lblPaymentType": "Label"
                }, {
                    "imgStatus": "approval.png",
                    "lblDate": "Label",
                    "lblName": "Label",
                    "lblPaymentMode": "Label",
                    "lblPaymentType": "Label"
                }, {
                    "imgStatus": "approval.png",
                    "lblDate": "Label",
                    "lblName": "Label",
                    "lblPaymentMode": "Label",
                    "lblPaymentType": "Label"
                }, {
                    "imgStatus": "approval.png",
                    "lblDate": "Label",
                    "lblName": "Label",
                    "lblPaymentMode": "Label",
                    "lblPaymentType": "Label"
                }],
                "groupCells": false,
                "id": "segApprovalHistory",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxApprovalHistory",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxApprovalHistory": "flxApprovalHistory",
                    "flxImagestatus": "flxImagestatus",
                    "flxcontent": "flxcontent",
                    "flxcontentbottom": "flxcontentbottom",
                    "flxcontenttop": "flxcontenttop",
                    "flxsep": "flxsep",
                    "imgStatus": "imgStatus",
                    "lblDate": "lblDate",
                    "lblName": "lblName",
                    "lblPaymentMode": "lblPaymentMode",
                    "lblPaymentType": "lblPaymentType"
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
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
            var lblNodatafound = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "10%",
                "id": "lblNodatafound",
                "isVisible": false,
                "left": "0dp",
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.noTransactionMsg"),
                "textStyle": {},
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxsegmentscroll.add(segApprovalHistory, lblNodatafound);
            flxBody.add(flxSearch, flxfilter, flxsegmentscroll);
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
                "zIndex": 106
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
                    "flxBillSelected": {
                        "isVisible": false
                    },
                    "flxMoreSelect": {
                        "isVisible": false
                    },
                    "flxTransferSel": {
                        "isVisible": false
                    },
                    "imgAccounts": {
                        "src": "accounts.png"
                    },
                    "imgBillPay": {
                        "src": "billpay.png"
                    },
                    "imgMore": {
                        "src": "more.png"
                    },
                    "imgTransfer": {
                        "src": "transfer.png"
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
                "zIndex": 103
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
            this.add(filter, flxHeader, flxBody, flxFooter, flxPopup, flxHamburger);
        };
        var LBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_IMAGE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_cbeed36595b04ec7ae0aec7dd289776c,
            "metaData": {
                "image": "backbutton_1.png"
            },
            "id": "LBarBtnItem0"
        });
        return [{
            "addWidgets": addWidgetsfrmApprovalHistory,
            "enabledForIdleTimeout": true,
            "id": "frmApprovalHistory",
            "init": controller.AS_Form_c723364f0fb847109c50089490d865d8,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm"
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
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarAttributes": {
                "barStyle": constants.BAR_STYLE_DEAFULT,
                "navigationBarHidden": false,
                "translucent": false,
                "tintColor": "4b88f100",
                "hidesBackButton": false,
                "prompt": "",
                "leftItemsSupplementBackButton": false,
                "leftBarButtonItems": [
                    LBarBtnItem0
                ],
                "rightBarButtonItems": []
            },
            "titleBarSkin": "sknTitle003e75Bg"
        }]
    }
});