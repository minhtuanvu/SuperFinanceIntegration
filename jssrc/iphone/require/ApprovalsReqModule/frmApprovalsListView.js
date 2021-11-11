define("ApprovalsReqModule/frmApprovalsListView", function() {
    return function(controller) {
        function addWidgetsfrmApprovalsListView() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
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
                    "flxBack": {
                        "zIndex": 3
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("kony.mb.approvalRequest.approvalHeaderName")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxGradientBG = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "45%",
                "id": "flxGradientBG",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxGradientBlue",
                "zIndex": 1
            }, {}, {});
            flxGradientBG.setDefaultUnit(kony.flex.DP);
            flxGradientBG.add();
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
                "top": "106dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadow.setDefaultUnit(kony.flex.DP);
            flxShadow.add();
            var flxMainContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "0dp",
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
                "placeholder": kony.i18n.getLocalizedString("kony.mb.achsearch.placeholder"),
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
                "width": "20dp",
                "zIndex": 10
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSearchMain.add(imgSearchIcon, tbxSearch, imgAdvSearch);
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
            var flxContent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxContent",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "0dp",
                "width": "100%",
                "zIndex": 6
            }, {}, {});
            flxContent.setDefaultUnit(kony.flex.DP);
            var flxImgUp = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxImgUp",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "18dp",
                "skin": "slFbox",
                "top": "17dp",
                "width": "30dp",
                "zIndex": 6
            }, {}, {});
            flxImgUp.setDefaultUnit(kony.flex.DP);
            var imgUpArrow = new kony.ui.Image2({
                "centerY": "50.00%",
                "height": "30dp",
                "id": "imgUpArrow",
                "isVisible": true,
                "right": "0dp",
                "skin": "slImage",
                "src": "filters.png",
                "width": "30dp",
                "zIndex": 6
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxImgUp.add(imgUpArrow);
            var lblHeader = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblHeader",
                "isVisible": true,
                "left": "18dp",
                "skin": "sknLbl424242SSP26px",
                "text": "...",
                "textStyle": {},
                "width": "80%",
                "zIndex": 6
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
                "height": "7dp",
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
            var flxTypeOneShadowtop = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7dp",
                "id": "flxTypeOneShadowtop",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTypeOneShadowtop.setDefaultUnit(kony.flex.DP);
            flxTypeOneShadowtop.add();
            flxContent.add(flxImgUp, lblHeader, flxShadowBottom, flxTypeOneShadowtop);
            var flxExpandCollapseView = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "flxExpandCollapseView",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknFlxScrlffffff",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxExpandCollapseView.setDefaultUnit(kony.flex.DP);
            var segApprovalList = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgApproveAP": "approvetick.png",
                    "imgRejectAP": "cancelreject.png",
                    "lblApproveAP": "Approve",
                    "lblDateAP": "... Label",
                    "lblPayment": "...Label",
                    "lblRejectAP": "Reject",
                    "lblTransactionAP": "Label..",
                    "lblTransactionAmountAP": "label"
                }, {
                    "imgApproveAP": "approvetick.png",
                    "imgRejectAP": "cancelreject.png",
                    "lblApproveAP": "Approve",
                    "lblDateAP": "... Label",
                    "lblPayment": "...Label",
                    "lblRejectAP": "Reject",
                    "lblTransactionAP": "Label..",
                    "lblTransactionAmountAP": "label"
                }, {
                    "imgApproveAP": "approvetick.png",
                    "imgRejectAP": "cancelreject.png",
                    "lblApproveAP": "Approve",
                    "lblDateAP": "... Label",
                    "lblPayment": "...Label",
                    "lblRejectAP": "Reject",
                    "lblTransactionAP": "Label..",
                    "lblTransactionAmountAP": "label"
                }, {
                    "imgApproveAP": "approvetick.png",
                    "imgRejectAP": "cancelreject.png",
                    "lblApproveAP": "Approve",
                    "lblDateAP": "... Label",
                    "lblPayment": "...Label",
                    "lblRejectAP": "Reject",
                    "lblTransactionAP": "Label..",
                    "lblTransactionAmountAP": "label"
                }, {
                    "imgApproveAP": "approvetick.png",
                    "imgRejectAP": "cancelreject.png",
                    "lblApproveAP": "Approve",
                    "lblDateAP": "... Label",
                    "lblPayment": "...Label",
                    "lblRejectAP": "Reject",
                    "lblTransactionAP": "Label..",
                    "lblTransactionAmountAP": "label"
                }, {
                    "imgApproveAP": "approvetick.png",
                    "imgRejectAP": "cancelreject.png",
                    "lblApproveAP": "Approve",
                    "lblDateAP": "... Label",
                    "lblPayment": "...Label",
                    "lblRejectAP": "Reject",
                    "lblTransactionAP": "Label..",
                    "lblTransactionAmountAP": "label"
                }, {
                    "imgApproveAP": "approvetick.png",
                    "imgRejectAP": "cancelreject.png",
                    "lblApproveAP": "Approve",
                    "lblDateAP": "... Label",
                    "lblPayment": "...Label",
                    "lblRejectAP": "Reject",
                    "lblTransactionAP": "Label..",
                    "lblTransactionAmountAP": "label"
                }, {
                    "imgApproveAP": "approvetick.png",
                    "imgRejectAP": "cancelreject.png",
                    "lblApproveAP": "Approve",
                    "lblDateAP": "... Label",
                    "lblPayment": "...Label",
                    "lblRejectAP": "Reject",
                    "lblTransactionAP": "Label..",
                    "lblTransactionAmountAP": "label"
                }, {
                    "imgApproveAP": "approvetick.png",
                    "imgRejectAP": "cancelreject.png",
                    "lblApproveAP": "Approve",
                    "lblDateAP": "... Label",
                    "lblPayment": "...Label",
                    "lblRejectAP": "Reject",
                    "lblTransactionAP": "Label..",
                    "lblTransactionAmountAP": "label"
                }, {
                    "imgApproveAP": "approvetick.png",
                    "imgRejectAP": "cancelreject.png",
                    "lblApproveAP": "Approve",
                    "lblDateAP": "... Label",
                    "lblPayment": "...Label",
                    "lblRejectAP": "Reject",
                    "lblTransactionAP": "Label..",
                    "lblTransactionAmountAP": "label"
                }, {
                    "imgApproveAP": "approvetick.png",
                    "imgRejectAP": "cancelreject.png",
                    "lblApproveAP": "Approve",
                    "lblDateAP": "... Label",
                    "lblPayment": "...Label",
                    "lblRejectAP": "Reject",
                    "lblTransactionAP": "Label..",
                    "lblTransactionAmountAP": "label"
                }, {
                    "imgApproveAP": "approvetick.png",
                    "imgRejectAP": "cancelreject.png",
                    "lblApproveAP": "Approve",
                    "lblDateAP": "... Label",
                    "lblPayment": "...Label",
                    "lblRejectAP": "Reject",
                    "lblTransactionAP": "Label..",
                    "lblTransactionAmountAP": "label"
                }, {
                    "imgApproveAP": "approvetick.png",
                    "imgRejectAP": "cancelreject.png",
                    "lblApproveAP": "Approve",
                    "lblDateAP": "... Label",
                    "lblPayment": "...Label",
                    "lblRejectAP": "Reject",
                    "lblTransactionAP": "Label..",
                    "lblTransactionAmountAP": "label"
                }, {
                    "imgApproveAP": "approvetick.png",
                    "imgRejectAP": "cancelreject.png",
                    "lblApproveAP": "Approve",
                    "lblDateAP": "... Label",
                    "lblPayment": "...Label",
                    "lblRejectAP": "Reject",
                    "lblTransactionAP": "Label..",
                    "lblTransactionAmountAP": "label"
                }, {
                    "imgApproveAP": "approvetick.png",
                    "imgRejectAP": "cancelreject.png",
                    "lblApproveAP": "Approve",
                    "lblDateAP": "... Label",
                    "lblPayment": "...Label",
                    "lblRejectAP": "Reject",
                    "lblTransactionAP": "Label..",
                    "lblTransactionAmountAP": "label"
                }, {
                    "imgApproveAP": "approvetick.png",
                    "imgRejectAP": "cancelreject.png",
                    "lblApproveAP": "Approve",
                    "lblDateAP": "... Label",
                    "lblPayment": "...Label",
                    "lblRejectAP": "Reject",
                    "lblTransactionAP": "Label..",
                    "lblTransactionAmountAP": "label"
                }, {
                    "imgApproveAP": "approvetick.png",
                    "imgRejectAP": "cancelreject.png",
                    "lblApproveAP": "Approve",
                    "lblDateAP": "... Label",
                    "lblPayment": "...Label",
                    "lblRejectAP": "Reject",
                    "lblTransactionAP": "Label..",
                    "lblTransactionAmountAP": "label"
                }, {
                    "imgApproveAP": "approvetick.png",
                    "imgRejectAP": "cancelreject.png",
                    "lblApproveAP": "Approve",
                    "lblDateAP": "... Label",
                    "lblPayment": "...Label",
                    "lblRejectAP": "Reject",
                    "lblTransactionAP": "Label..",
                    "lblTransactionAmountAP": "label"
                }, {
                    "imgApproveAP": "approvetick.png",
                    "imgRejectAP": "cancelreject.png",
                    "lblApproveAP": "Approve",
                    "lblDateAP": "... Label",
                    "lblPayment": "...Label",
                    "lblRejectAP": "Reject",
                    "lblTransactionAP": "Label..",
                    "lblTransactionAmountAP": "label"
                }, {
                    "imgApproveAP": "approvetick.png",
                    "imgRejectAP": "cancelreject.png",
                    "lblApproveAP": "Approve",
                    "lblDateAP": "... Label",
                    "lblPayment": "...Label",
                    "lblRejectAP": "Reject",
                    "lblTransactionAP": "Label..",
                    "lblTransactionAmountAP": "label"
                }],
                "groupCells": false,
                "id": "segApprovalList",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxApprovalListView",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxApprovalListView": "flxApprovalListView",
                    "flxApproveAP": "flxApproveAP",
                    "flxContentsAP": "flxContentsAP",
                    "flxRejectAP": "flxRejectAP",
                    "flxSeparatorAP": "flxSeparatorAP",
                    "imgApproveAP": "imgApproveAP",
                    "imgRejectAP": "imgRejectAP",
                    "lblApproveAP": "lblApproveAP",
                    "lblDateAP": "lblDateAP",
                    "lblPayment": "lblPayment",
                    "lblRejectAP": "lblRejectAP",
                    "lblTransactionAP": "lblTransactionAP",
                    "lblTransactionAmountAP": "lblTransactionAmountAP"
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
            flxExpandCollapseView.add(segApprovalList);
            flxMainContainer.add(flxSearch, flxContent, flxExpandCollapseView);
            var flxFooterMenu = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": false,
                "height": "60dp",
                "id": "flxFooterMenu",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxFooterMenu.setDefaultUnit(kony.flex.DP);
            var customFooter = new com.kmb.common.customFooter({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
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
            flxFooterMenu.add(customFooter);
            var flxRejectMenu = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxRejectMenu",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxRejectMenu.setDefaultUnit(kony.flex.DP);
            var rejectPopUp = new com.kmb.common.rejectPopUp({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "rejectPopUp",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlx000000Op50",
                "top": "0dp",
                "width": "100%",
                "overrides": {}
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxRejectMenu.add(rejectPopUp);
            var flxPopup = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10.50%",
                "id": "flxPopup",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf54b5e",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
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
            this.add(flxHeader, flxGradientBG, flxShadow, flxMainContainer, flxFooterMenu, flxRejectMenu, flxPopup);
        };
        return [{
            "addWidgets": addWidgetsfrmApprovalsListView,
            "enabledForIdleTimeout": false,
            "id": "frmApprovalsListView",
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
            "titleBar": false,
            "titleBarSkin": "slTitleBar"
        }]
    }
});