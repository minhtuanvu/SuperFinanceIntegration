define("NewUserModule/frmOBSelectProducts", function() {
    return function(controller) {
        function addWidgetsfrmOBSelectProducts() {
            this.setDefaultUnit(kony.flex.DP);
            var flxSelectProducts = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "12%",
                "clipBounds": true,
                "id": "flxSelectProducts",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSelectProducts.setDefaultUnit(kony.flex.DP);
            var flxHeaderSelectProducts = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxHeaderSelectProducts",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffffShadow",
                "top": "-40dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxHeaderSelectProducts.setDefaultUnit(kony.flex.DP);
            var customSearch = new com.kmb.Search.customSearch({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "95dp",
                "id": "customSearch",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknFlx1a98ff",
                "top": "0%",
                "width": "100%",
                "overrides": {
                    "customSearch": {
                        "isVisible": true
                    },
                    "flxHeader": {
                        "isVisible": true
                    },
                    "flxHeaderShadow": {
                        "zIndex": 1
                    },
                    "flxSearchMain": {
                        "isVisible": true
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "imgSearch": {
                        "src": "searchblue.png"
                    },
                    "imgSearchIcon": {
                        "src": "search.png"
                    },
                    "tbxSearch": {
                        "centerX": "50.00%",
                        "centerY": "49.96%",
                        "placeholder": "Search Products..."
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeaderSelectProducts.add(customSearch);
            var flxHeaderSelectProductsMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "56dp",
                "id": "flxHeaderSelectProductsMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffffShadow",
                "top": "0%",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxHeaderSelectProductsMain.setDefaultUnit(kony.flex.DP);
            var customHeaderSelectProducts = new com.kmb.common.customHeader({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "customHeaderSelectProducts",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3,
                "overrides": {
                    "btnLeft": {
                        "isVisible": false,
                        "text": "Close"
                    },
                    "btnRight": {
                        "text": kony.i18n.getLocalizedString("kony.mb.common.close"),
                        "isVisible": true
                    },
                    "customHeader": {
                        "height": "100%",
                        "isVisible": true,
                        "zIndex": 3
                    },
                    "flxBack": {
                        "isVisible": false
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
                        "centerX": "50%",
                        "centerY": "50%",
                        "text": "Select Products"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeaderSelectProductsMain.add(customHeaderSelectProducts);
            var flxSelectProductsWrapper = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxSelectProductsWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSelectProductsWrapper.setDefaultUnit(kony.flex.DP);
            var flxHeaderSearchbox = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxHeaderSearchbox",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxHeaderSearchbox.setDefaultUnit(kony.flex.DP);
            var customSearchbox = new com.kmb.Search.customSearchbox({
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
                    "imgSearch": {
                        "src": "searchblue.png"
                    },
                    "imgSearchIcon": {
                        "src": "search.png"
                    },
                    "tbxSearch": {
                        "placeholder": kony.i18n.getLocalizedString("kony.mb.NAO.searchProducts")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeaderSearchbox.add(customSearchbox);
            var flxSearch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "50dp",
                "id": "flxSearch",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
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
                "skin": "sknFlx1a98ff",
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
                "placeholder": kony.i18n.getLocalizedString("kony.mb.NAO.searchProducts"),
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
            var flxHeaderShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "-5dp",
                "clipBounds": true,
                "height": "10dp",
                "id": "flxHeaderShadow",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeaderShadow.setDefaultUnit(kony.flex.DP);
            flxHeaderShadow.add();
            var flxProgressSelectProducts2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxProgressSelectProducts2",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "right": "80%",
                "skin": "sknFlxda8b08",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxProgressSelectProducts2.setDefaultUnit(kony.flex.DP);
            flxProgressSelectProducts2.add();
            var flxProgressBackgroundSelectProducts = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxProgressBackgroundSelectProducts",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxda8b08Op20",
                "top": "-2dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxProgressBackgroundSelectProducts.setDefaultUnit(kony.flex.DP);
            flxProgressBackgroundSelectProducts.add();
            var flxSeg = new kony.ui.FlexContainer({
                "clipBounds": false,
                "height": "90%",
                "id": "flxSeg",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSeg.setDefaultUnit(kony.flex.DP);
            flxSeg.add();
            var segSelectProducts = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "btnViewDetails": "VIEW DETAILS",
                    "imgCheckbox": "remeberme.png",
                    "lblProductInfo": "A straightforward personal checking solution…",
                    "lblProductSubTitle": "Checking Account",
                    "lblProductTitle": "Classic Checking Account"
                }, {
                    "btnViewDetails": "VIEW DETAILS",
                    "imgCheckbox": "remeberme.png",
                    "lblProductInfo": "Interest earning account with higher balance req…",
                    "lblProductSubTitle": "Checking Account",
                    "lblProductTitle": "Interest Checking"
                }, {
                    "btnViewDetails": "VIEW DETAILS",
                    "imgCheckbox": "remeberme.png",
                    "lblProductInfo": "A simple personal savings account with low minim…",
                    "lblProductSubTitle": "Savings Account",
                    "lblProductTitle": "Regular Savings"
                }, {
                    "btnViewDetails": "VIEW DETAILS",
                    "imgCheckbox": "remeberme.png",
                    "lblProductInfo": "High Interest earning account with higher balance…",
                    "lblProductSubTitle": "Savings Account",
                    "lblProductTitle": "Premium Savings Account"
                }],
                "groupCells": false,
                "id": "segSelectProducts",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Normal",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxSelectProduct",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_MULTI_SELECT_BEHAVIOR,
                "selectionBehaviorConfig": {
                    "imageIdentifier": "imgCheckbox",
                    "selectedStateImage": "remembermetick.png",
                    "unselectedStateImage": "remeberme.png"
                },
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "btnViewDetails": "btnViewDetails",
                    "flxSelectProduct": "flxSelectProduct",
                    "flxShadowUser": "flxShadowUser",
                    "imgCheckbox": "imgCheckbox",
                    "lblProductInfo": "lblProductInfo",
                    "lblProductSubTitle": "lblProductSubTitle",
                    "lblProductTitle": "lblProductTitle"
                },
                "widgetSkin": "seg2Normal",
                "width": "100%",
                "zIndex": 3
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
            var flxNoRecords = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": 250,
                "id": "flxNoRecords",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxNoRecords.setDefaultUnit(kony.flex.DP);
            var lblNoTransaction = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblNoTransaction",
                "isVisible": true,
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("kony.mb.OB.NoRecordsAvailable"),
                "textStyle": {},
                "top": "50%",
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
            flxNoRecords.add(lblNoTransaction);
            flxSelectProductsWrapper.add(flxHeaderSearchbox, flxSearch, flxHeaderShadow, flxProgressSelectProducts2, flxProgressBackgroundSelectProducts, flxSeg, segSelectProducts, flxNoRecords);
            flxSelectProducts.add(flxHeaderSelectProducts, flxHeaderSelectProductsMain, flxSelectProductsWrapper);
            var flxPopupDeviceLocation = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxPopupDeviceLocation",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0f2a5b0bfd49a49",
                "top": "0%",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxPopupDeviceLocation.setDefaultUnit(kony.flex.DP);
            var flxPopupDeviceLocationWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "7%",
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "116dp",
                "id": "flxPopupDeviceLocationWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "sknFlxPopupDocuments",
                "width": "245dp",
                "zIndex": 1
            }, {}, {});
            flxPopupDeviceLocationWrapper.setDefaultUnit(kony.flex.DP);
            var rtxCompleteMessage = new kony.ui.RichText({
                "centerX": "50%",
                "height": "74dp",
                "id": "rtxCompleteMessage",
                "isVisible": true,
                "linkSkin": "defRichTextLink",
                "skin": "sknRtx424242SSP24px",
                "text": kony.i18n.getLocalizedString("kony.mb.NAOS.AccessLocation"),
                "top": "0dp",
                "width": "90%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblSeparatorComplete = new kony.ui.Label({
                "centerX": "50%",
                "height": "1dp",
                "id": "lblSeparatorComplete",
                "isVisible": true,
                "left": "-2%",
                "skin": "sknLblSeparatore3e3e3",
                "textStyle": {},
                "top": "0dp",
                "width": "105%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxPopupCompleteActions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "centerX": "50%",
                "clipBounds": false,
                "height": "41dp",
                "id": "flxPopupCompleteActions",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "sknFlxPopupDocuments",
                "width": "245dp",
                "zIndex": 1
            }, {}, {});
            flxPopupCompleteActions.setDefaultUnit(kony.flex.DP);
            var btnDontAllow = new kony.ui.Button({
                "height": "100%",
                "id": "btnDontAllow",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtn0095e428px",
                "text": kony.i18n.getLocalizedString("kony.mb.NAO.DontAllow"),
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var lblSeparatorContinueTwo = new kony.ui.Label({
                "height": "100%",
                "id": "lblSeparatorContinueTwo",
                "isVisible": true,
                "left": "0%",
                "skin": "sknLblSeparatore3e3e3",
                "textStyle": {},
                "top": "-1dp",
                "width": "1dp",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var btnAllow = new kony.ui.Button({
                "height": "100%",
                "id": "btnAllow",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtn0095e428px",
                "text": kony.i18n.getLocalizedString("kony.mb.NAO.Allow"),
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxPopupCompleteActions.add(btnDontAllow, lblSeparatorContinueTwo, btnAllow);
            flxPopupDeviceLocationWrapper.add(rtxCompleteMessage, lblSeparatorComplete, flxPopupCompleteActions);
            flxPopupDeviceLocation.add(flxPopupDeviceLocationWrapper);
            var flxProductDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxProductDetails",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0.00%",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxProductDetails.setDefaultUnit(kony.flex.DP);
            var flxHeaderProductDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "7%",
                "id": "flxHeaderProductDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffffShadow",
                "top": "0%",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxHeaderProductDetails.setDefaultUnit(kony.flex.DP);
            var customHeaderProductDetails = new com.kmb.common.customHeader({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "100%",
                "id": "customHeaderProductDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "customHeader": {
                        "height": "100%"
                    },
                    "flxBack": {
                        "isVisible": true,
                        "top": "0dp"
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "closewhite.png"
                    },
                    "lblLocateUs": {
                        "centerX": "50%",
                        "text": "Regular Savings"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeaderProductDetails.add(customHeaderProductDetails);
            var flxSeparatorHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxSeparatorHeader.setDefaultUnit(kony.flex.DP);
            flxSeparatorHeader.add();
            var flxProductDetailsTabs = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "7%",
                "id": "flxProductDetailsTabs",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3Shadow",
                "top": "0%",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxProductDetailsTabs.setDefaultUnit(kony.flex.DP);
            var btnFeatures = new kony.ui.Button({
                "height": "100%",
                "id": "btnFeatures",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtnf6f6f6424242SSP24px",
                "text": kony.i18n.getLocalizedString("kony.mb.NAO.Features"),
                "top": "0dp",
                "width": "33.20%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var btnCharges = new kony.ui.Button({
                "centerX": "50%",
                "height": "100%",
                "id": "btnCharges",
                "isVisible": true,
                "skin": "sknBtnf6f6f6424242SSP24px",
                "text": kony.i18n.getLocalizedString("kony.mb.NAO.Charges"),
                "top": "0dp",
                "width": "33.20%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var btnInfo = new kony.ui.Button({
                "height": "100%",
                "id": "btnInfo",
                "isVisible": true,
                "right": "0dp",
                "skin": "sknBtnf6f6f6424242SSP24px",
                "text": kony.i18n.getLocalizedString("kony.mb.NAO.Info"),
                "top": "0dp",
                "width": "33.20%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var flxFeaturesSelected = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxFeaturesSelected",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx0095e4",
                "width": "33.20%",
                "zIndex": 4
            }, {}, {});
            flxFeaturesSelected.setDefaultUnit(kony.flex.DP);
            flxFeaturesSelected.add();
            var flxChargesSelected = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxChargesSelected",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlx0095e4",
                "width": "33.20%",
                "zIndex": 4
            }, {}, {});
            flxChargesSelected.setDefaultUnit(kony.flex.DP);
            flxChargesSelected.add();
            var flxInfoSelected = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxInfoSelected",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "sknFlx0095e4",
                "width": "33.20%",
                "zIndex": 4
            }, {}, {});
            flxInfoSelected.setDefaultUnit(kony.flex.DP);
            flxInfoSelected.add();
            flxProductDetailsTabs.add(btnFeatures, btnCharges, btnInfo, flxFeaturesSelected, flxChargesSelected, flxInfoSelected);
            var flxSeparatorButtons = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorButtons",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "-1dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxSeparatorButtons.setDefaultUnit(kony.flex.DP);
            flxSeparatorButtons.add();
            var segProductDetails = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "btnShowMore": "SHOW MORE",
                    "lblSubTitle": "Basic information about this card. Show only very brief description here. If there are more info we can show the link here as show more. It brings more info by expanding the section. ",
                    "lblTitle": "About Product",
                    "rtxData": "RichText"
                }, {
                    "btnShowMore": "SHOW MORE",
                    "lblSubTitle": "Basic information about this card. Show only very brief description here. If there are more info we can show the link here as show more. It brings more info by expanding the section. ",
                    "lblTitle": "Benifits",
                    "rtxData": "RichText"
                }, {
                    "btnShowMore": "SHOW MORE",
                    "lblSubTitle": "Basic information about this card. Show only very brief description here. If there are more info we can show the link here as show more. It brings more info by expanding the section. ",
                    "lblTitle": "Additional Features",
                    "rtxData": "RichText"
                }],
                "groupCells": false,
                "id": "segProductDetails",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxProductDetails",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "-1dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "FlexContainer0je14ed46783344": "FlexContainer0je14ed46783344",
                    "btnShowMore": "btnShowMore",
                    "flxProductDetails": "flxProductDetails",
                    "lblSubTitle": "lblSubTitle",
                    "lblTitle": "lblTitle",
                    "rtxData": "rtxData"
                },
                "width": "100%",
                "zIndex": 3
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
            flxProductDetails.add(flxHeaderProductDetails, flxSeparatorHeader, flxProductDetailsTabs, flxSeparatorButtons, segProductDetails);
            var flxBg = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45%",
                "id": "flxBg",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxGradientBlue",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBg.setDefaultUnit(kony.flex.DP);
            flxBg.add();
            var flxNoProducts = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxNoProducts",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "58dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxNoProducts.setDefaultUnit(kony.flex.DP);
            var lblNoProducts = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblNoProducts",
                "isVisible": true,
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("kony.mb.ob.NoProductsfound"),
                "textStyle": {},
                "top": "28%",
                "width": "90%",
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxNoProducts.add(lblNoProducts);
            var flxButtonWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "height": "12%",
                "id": "flxButtonWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxButtonWrapper.setDefaultUnit(kony.flex.DP);
            var btnContinueSelectProducts = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnContinueSelectProducts",
                "isVisible": true,
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
                "width": "87%",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxButtonWrapper.add(btnContinueSelectProducts);
            this.add(flxSelectProducts, flxPopupDeviceLocation, flxProductDetails, flxBg, flxNoProducts, flxButtonWrapper);
        };
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_e340180a6a3f4854b89b1a06f5d1b830,
            "metaData": {
                "title": "Close"
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
            "addWidgets": addWidgetsfrmOBSelectProducts,
            "enabledForIdleTimeout": true,
            "id": "frmOBSelectProducts",
            "init": controller.AS_Form_a821bf4e8e1548d6b291810155826455,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "preShow": function(eventobject) {
                controller.AS_Form_be7faa8ed40e4c50bc9626a7babc28ec(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.NAOSelectProduct.Title")
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