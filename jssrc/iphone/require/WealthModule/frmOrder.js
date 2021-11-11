define("WealthModule/frmOrder", function() {
    return function(controller) {
        function addWidgetsfrmOrder() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "56dp",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 8
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
                "width": "80%",
                "overrides": {
                    "btnLeft": {
                        "isVisible": false
                    },
                    "btnRight": {
                        "isVisible": false
                    },
                    "customHeader": {
                        "width": "80%"
                    },
                    "flxHeaderShadow": {
                        "isVisible": false
                    },
                    "flxSearch": {
                        "isVisible": true
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "imgSearch": {
                        "height": "25dp",
                        "isVisible": false,
                        "src": "info.png",
                        "width": "25dp"
                    },
                    "lblLocateUs": {
                        "text": kony.i18n.getLocalizedString("i18n.wealth.orders")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxMore = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxMore",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx1a98ff",
                "top": "0dp",
                "width": "20%"
            }, {}, {});
            flxMore.setDefaultUnit(kony.flex.DP);
            var imgMore = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "25dp",
                "id": "imgMore",
                "isVisible": true,
                "left": "0dp",
                "right": "15%",
                "skin": "slImage",
                "src": "more_header.png",
                "width": "25dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMore.add(imgMore);
            flxHeader.add(customHeader, flxMore);
            var flxContentMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxContentMain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxContentMain.setDefaultUnit(kony.flex.DP);
            var flxContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
                "id": "flxContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxGradientBlue",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxContainer.setDefaultUnit(kony.flex.DP);
            var flxSearch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "55dp",
                "id": "flxSearch",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
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
                "centerY": "49%",
                "focusSkin": "sknTbxSSPf1f1f1B",
                "height": "35dp",
                "id": "tbxSearch",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "18dp",
                "placeholder": "Search by Instrument Name, Order Type etc.",
                "right": "20dp",
                "secureTextEntry": false,
                "skin": "sknTbxSSPf1f1f1B",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [35, 3, 30, 3],
                "paddingInPixel": true
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_SEARCH,
                "placeholderSkin": "sknTbxPlaceholderDefault",
                "showClearButton": false,
                "showCloseButton": true,
                "showProgressIndicator": true,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var imgClose = new kony.ui.Image2({
                "centerY": "50.00%",
                "height": "30dp",
                "id": "imgClose",
                "isVisible": false,
                "left": "85%",
                "skin": "slImage",
                "src": "clearcircle.png",
                "top": "0dp",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSearchMain.add(imgSearchIcon, tbxSearch, imgClose);
            flxSearch.add(flxSearchMain);
            flxContainer.add(flxSearch);
            var flxMainContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "82%",
                "horizontalScrollIndicator": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknScrFlxffffff",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxOrder = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxOrder",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "19dp",
                "isModalContainer": false,
                "skin": "sknFlxTabBg767680",
                "top": "10dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxOrder.setDefaultUnit(kony.flex.DP);
            var flxTglOpen = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "25dp",
                "id": "flxTglOpen",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "2dp",
                "isModalContainer": false,
                "skin": "sknFlxTransparent",
                "top": "0dp",
                "width": "52%"
            }, {}, {});
            flxTglOpen.setDefaultUnit(kony.flex.DP);
            var btnTglOpen = new kony.ui.Button({
                "centerX": "50%",
                "centerY": "50%",
                "focusSkin": "sknBtnFFFFFFSSPSB15px",
                "height": "25dp",
                "id": "btnTglOpen",
                "isVisible": true,
                "left": 0,
                "skin": "sknBtnFFFFFFSSPSB15px",
                "text": kony.i18n.getLocalizedString("i18n.wealth.openOrders"),
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            flxTglOpen.add(btnTglOpen);
            var flxTglHistory = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "25dp",
                "id": "flxTglHistory",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "right": "2dp",
                "skin": "sknFlxTransparent",
                "top": "0dp",
                "width": "52%"
            }, {}, {});
            flxTglHistory.setDefaultUnit(kony.flex.DP);
            var btnTglHistory = new kony.ui.Button({
                "centerX": "50%",
                "centerY": "50%",
                "focusSkin": "sknBtnFFFFFFSSPSB15px",
                "height": "25dp",
                "id": "btnTglHistory",
                "isVisible": true,
                "left": 0,
                "skin": "sknbtn000000SSPSB15px",
                "text": kony.i18n.getLocalizedString("i18n.wealth.history"),
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            flxTglHistory.add(btnTglHistory);
            flxOrder.add(flxTglOpen, flxTglHistory);
            var flxShadowBox = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "9px",
                "id": "flxShadowBox",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadowBox.setDefaultUnit(kony.flex.DP);
            var flxRectangle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxRectangle",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflx424242grad",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRectangle.setDefaultUnit(kony.flex.DP);
            flxRectangle.add();
            flxShadowBox.add(flxRectangle);
            var segmentDetails = new com.temenos.infinity.segmentDetails({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "id": "segmentDetails",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2%",
                "width": "100%",
                "overrides": {
                    "segList": {
                        "data": [{
                            "imgChevron": "chevron.png",
                            "imgLogo": "imagedrag.png",
                            "lblFiveKey": kony.i18n.getLocalizedString("i18n.wealth.type"),
                            "lblFiveValue": "Buy",
                            "lblFourKey": kony.i18n.getLocalizedString("i18n.wealth.qty"),
                            "lblFourValue": "10",
                            "lblId": "US02079K1079 | NASDAQ",
                            "lblName": "Alphabet C class",
                            "lblOneKey": kony.i18n.getLocalizedString("i18n.wealth.tradeDate"),
                            "lblOneValue": "07/22/2020",
                            "lblThreeKey": kony.i18n.getLocalizedString("i18n.wealth.total"),
                            "lblThreeValue": "$11,000.00",
                            "lblTwoKey": kony.i18n.getLocalizedString("i18n.wealth.price"),
                            "lblTwoValue": "$10.90"
                        }, {
                            "imgChevron": "chevron.png",
                            "imgLogo": "imagedrag.png",
                            "lblFiveKey": kony.i18n.getLocalizedString("i18n.wealth.type"),
                            "lblFiveValue": "Buy",
                            "lblFourKey": kony.i18n.getLocalizedString("i18n.wealth.qty"),
                            "lblFourValue": "10",
                            "lblId": "US02079K1079 | NASDAQ",
                            "lblName": "Alphabet C class",
                            "lblOneKey": kony.i18n.getLocalizedString("i18n.wealth.tradeDate"),
                            "lblOneValue": "07/22/2020",
                            "lblThreeKey": kony.i18n.getLocalizedString("i18n.wealth.total"),
                            "lblThreeValue": "$11,000.00",
                            "lblTwoKey": kony.i18n.getLocalizedString("i18n.wealth.price"),
                            "lblTwoValue": "$10.90"
                        }, {
                            "imgChevron": "chevron.png",
                            "imgLogo": "imagedrag.png",
                            "lblFiveKey": kony.i18n.getLocalizedString("i18n.wealth.type"),
                            "lblFiveValue": "Buy",
                            "lblFourKey": kony.i18n.getLocalizedString("i18n.wealth.qty"),
                            "lblFourValue": "10",
                            "lblId": "US02079K1079 | NASDAQ",
                            "lblName": "Alphabet C class",
                            "lblOneKey": kony.i18n.getLocalizedString("i18n.wealth.tradeDate"),
                            "lblOneValue": "07/22/2020",
                            "lblThreeKey": kony.i18n.getLocalizedString("i18n.wealth.total"),
                            "lblThreeValue": "$11,000.00",
                            "lblTwoKey": kony.i18n.getLocalizedString("i18n.wealth.price"),
                            "lblTwoValue": "$10.90"
                        }, {
                            "imgChevron": "chevron.png",
                            "imgLogo": "imagedrag.png",
                            "lblFiveKey": kony.i18n.getLocalizedString("i18n.wealth.type"),
                            "lblFiveValue": "Buy",
                            "lblFourKey": kony.i18n.getLocalizedString("i18n.wealth.qty"),
                            "lblFourValue": "10",
                            "lblId": "US02079K1079 | NASDAQ",
                            "lblName": "Alphabet C class",
                            "lblOneKey": kony.i18n.getLocalizedString("i18n.wealth.tradeDate"),
                            "lblOneValue": "07/22/2020",
                            "lblThreeKey": kony.i18n.getLocalizedString("i18n.wealth.total"),
                            "lblThreeValue": "$11,000.00",
                            "lblTwoKey": kony.i18n.getLocalizedString("i18n.wealth.price"),
                            "lblTwoValue": "$10.90"
                        }, {
                            "imgChevron": "chevron.png",
                            "imgLogo": "imagedrag.png",
                            "lblFiveKey": kony.i18n.getLocalizedString("i18n.wealth.type"),
                            "lblFiveValue": "Buy",
                            "lblFourKey": kony.i18n.getLocalizedString("i18n.wealth.qty"),
                            "lblFourValue": "10",
                            "lblId": "US02079K1079 | NASDAQ",
                            "lblName": "Alphabet C class",
                            "lblOneKey": kony.i18n.getLocalizedString("i18n.wealth.tradeDate"),
                            "lblOneValue": "07/22/2020",
                            "lblThreeKey": kony.i18n.getLocalizedString("i18n.wealth.total"),
                            "lblThreeValue": "$11,000.00",
                            "lblTwoKey": kony.i18n.getLocalizedString("i18n.wealth.price"),
                            "lblTwoValue": "$10.90"
                        }, {
                            "imgChevron": "chevron.png",
                            "imgLogo": "imagedrag.png",
                            "lblFiveKey": kony.i18n.getLocalizedString("i18n.wealth.type"),
                            "lblFiveValue": "Buy",
                            "lblFourKey": kony.i18n.getLocalizedString("i18n.wealth.qty"),
                            "lblFourValue": "10",
                            "lblId": "US02079K1079 | NASDAQ",
                            "lblName": "Alphabet C class",
                            "lblOneKey": kony.i18n.getLocalizedString("i18n.wealth.tradeDate"),
                            "lblOneValue": "07/22/2020",
                            "lblThreeKey": kony.i18n.getLocalizedString("i18n.wealth.total"),
                            "lblThreeValue": "$11,000.00",
                            "lblTwoKey": kony.i18n.getLocalizedString("i18n.wealth.price"),
                            "lblTwoValue": "$10.90"
                        }, {
                            "imgChevron": "chevron.png",
                            "imgLogo": "imagedrag.png",
                            "lblFiveKey": kony.i18n.getLocalizedString("i18n.wealth.type"),
                            "lblFiveValue": "Buy",
                            "lblFourKey": kony.i18n.getLocalizedString("i18n.wealth.qty"),
                            "lblFourValue": "10",
                            "lblId": "US02079K1079 | NASDAQ",
                            "lblName": "Alphabet C class",
                            "lblOneKey": kony.i18n.getLocalizedString("i18n.wealth.tradeDate"),
                            "lblOneValue": "07/22/2020",
                            "lblThreeKey": kony.i18n.getLocalizedString("i18n.wealth.total"),
                            "lblThreeValue": "$11,000.00",
                            "lblTwoKey": kony.i18n.getLocalizedString("i18n.wealth.price"),
                            "lblTwoValue": "$10.90"
                        }, {
                            "imgChevron": "chevron.png",
                            "imgLogo": "imagedrag.png",
                            "lblFiveKey": kony.i18n.getLocalizedString("i18n.wealth.type"),
                            "lblFiveValue": "Buy",
                            "lblFourKey": kony.i18n.getLocalizedString("i18n.wealth.qty"),
                            "lblFourValue": "10",
                            "lblId": "US02079K1079 | NASDAQ",
                            "lblName": "Alphabet C class",
                            "lblOneKey": kony.i18n.getLocalizedString("i18n.wealth.tradeDate"),
                            "lblOneValue": "07/22/2020",
                            "lblThreeKey": kony.i18n.getLocalizedString("i18n.wealth.total"),
                            "lblThreeValue": "$11,000.00",
                            "lblTwoKey": kony.i18n.getLocalizedString("i18n.wealth.price"),
                            "lblTwoValue": "$10.90"
                        }, {
                            "imgChevron": "chevron.png",
                            "imgLogo": "imagedrag.png",
                            "lblFiveKey": kony.i18n.getLocalizedString("i18n.wealth.type"),
                            "lblFiveValue": "Buy",
                            "lblFourKey": kony.i18n.getLocalizedString("i18n.wealth.qty"),
                            "lblFourValue": "10",
                            "lblId": "US02079K1079 | NASDAQ",
                            "lblName": "Alphabet C class",
                            "lblOneKey": kony.i18n.getLocalizedString("i18n.wealth.tradeDate"),
                            "lblOneValue": "07/22/2020",
                            "lblThreeKey": kony.i18n.getLocalizedString("i18n.wealth.total"),
                            "lblThreeValue": "$11,000.00",
                            "lblTwoKey": kony.i18n.getLocalizedString("i18n.wealth.price"),
                            "lblTwoValue": "$10.90"
                        }, {
                            "imgChevron": "chevron.png",
                            "imgLogo": "imagedrag.png",
                            "lblFiveKey": kony.i18n.getLocalizedString("i18n.wealth.type"),
                            "lblFiveValue": "Buy",
                            "lblFourKey": kony.i18n.getLocalizedString("i18n.wealth.qty"),
                            "lblFourValue": "10",
                            "lblId": "US02079K1079 | NASDAQ",
                            "lblName": "Alphabet C class",
                            "lblOneKey": kony.i18n.getLocalizedString("i18n.wealth.tradeDate"),
                            "lblOneValue": "07/22/2020",
                            "lblThreeKey": kony.i18n.getLocalizedString("i18n.wealth.total"),
                            "lblThreeValue": "$11,000.00",
                            "lblTwoKey": kony.i18n.getLocalizedString("i18n.wealth.price"),
                            "lblTwoValue": "$10.90"
                        }],
                        "widgetDataMap": {
                            "flxBottomBorder": "flxBottomBorder",
                            "flxClick": "flxClick",
                            "flxDetail": "flxDetail",
                            "flxDetailFive": "flxDetailFive",
                            "flxDetailFour": "flxDetailFour",
                            "flxDetailOne": "flxDetailOne",
                            "flxDetailThree": "flxDetailThree",
                            "flxDetailTwo": "flxDetailTwo",
                            "flxDetailsList": "flxDetailsList",
                            "flxMain": "flxMain",
                            "flxRowFour": "flxRowFour",
                            "flxRowOne": "flxRowOne",
                            "flxRowThree": "flxRowThree",
                            "flxRowTwo": "flxRowTwo",
                            "imgChevron": "imgChevron",
                            "imgLogo": "imgLogo",
                            "lblFiveKey": "lblFiveKey",
                            "lblFiveValue": "lblFiveValue",
                            "lblFourKey": "lblFourKey",
                            "lblFourValue": "lblFourValue",
                            "lblId": "lblId",
                            "lblName": "lblName",
                            "lblOneKey": "lblOneKey",
                            "lblOneValue": "lblOneValue",
                            "lblThreeKey": "lblThreeKey",
                            "lblThreeValue": "lblThreeValue",
                            "lblTwoKey": "lblTwoKey",
                            "lblTwoValue": "lblTwoValue"
                        }
                    },
                    "segmentDetails": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "height": "viz.val_cleared",
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
            var flxError = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "10%",
                "id": "flxError",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxError.setDefaultUnit(kony.flex.DP);
            var lblError = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblError",
                "isVisible": true,
                "skin": "sknlblee0005SSPReg15px",
                "text": "No open order",
                "textStyle": {},
                "top": "5dp",
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
            flxError.add(lblError);
            var flxTimePeriod = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxTimePeriod",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0",
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxTimePeriod.setDefaultUnit(kony.flex.DP);
            var flxTime = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerY": "50%",
                "clipBounds": true,
                "id": "flxTime",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTime.setDefaultUnit(kony.flex.DP);
            var flxByTimePeriod = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxByTimePeriod",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 0,
                "width": "40%"
            }, {}, {});
            flxByTimePeriod.setDefaultUnit(kony.flex.DP);
            var lblTimePeriod = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblTimePeriod",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("i18n.wealth.byTimePeriod"),
                "textStyle": {},
                "top": "0dp",
                "width": "85%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxByTimePeriod.add(lblTimePeriod);
            var flxPreviousDays = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxPreviousDays",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "40%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "60%"
            }, {}, {});
            flxPreviousDays.setDefaultUnit(kony.flex.DP);
            var lblPreviousDays = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblPreviousDays",
                "isVisible": true,
                "right": "45dp",
                "skin": "sknLbl4176A4SSPReg26px",
                "text": kony.i18n.getLocalizedString("i18n.wealth.previous30Days"),
                "textStyle": {},
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
            var imgPreviousDay = new kony.ui.Image2({
                "centerY": "50%",
                "height": "19dp",
                "id": "imgPreviousDay",
                "isVisible": true,
                "right": "20dp",
                "skin": "slImage",
                "src": "chevron.png",
                "width": "19dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxPreviousDays.add(lblPreviousDays, imgPreviousDay);
            flxTime.add(flxByTimePeriod, flxPreviousDays);
            var flxSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "3dp",
                "id": "flxSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxe3e3e3border",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeperator.setDefaultUnit(kony.flex.DP);
            flxSeperator.add();
            flxTimePeriod.add(flxTime, flxSeperator);
            var flxHistoryContentMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxHistoryContentMain",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxHistoryContentMain.setDefaultUnit(kony.flex.DP);
            var flxHistoryMainContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxHistoryMainContainer",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknFlxScrlffffff",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxHistoryMainContainer.setDefaultUnit(kony.flex.DP);
            flxHistoryMainContainer.add();
            var segmentHistoryDetails = new com.temenos.infinity.segmentHistoryDetails({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "id": "segmentHistoryDetails",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "segHistory": {
                        "data": [{
                            "imgChevron": "chevron.png",
                            "imgLogo": "imagedrag.png",
                            "lblFiveKey": kony.i18n.getLocalizedString("i18n.wealth.type"),
                            "lblFiveValue": "Buy",
                            "lblFourKey": kony.i18n.getLocalizedString("i18n.wealth.qty"),
                            "lblFourValue": "10",
                            "lblId": "US02079K1079 | NASDAQ",
                            "lblName": "Alphabet C class",
                            "lblOneKey": kony.i18n.getLocalizedString("i18n.wealth.tradeDate"),
                            "lblOneValue": "07/22/2020",
                            "lblStatus": kony.i18n.getLocalizedString("kony.mb.transfers.Completed"),
                            "lblThreeKey": kony.i18n.getLocalizedString("i18n.wealth.total"),
                            "lblThreeValue": "$11,000.00",
                            "lblTwoKey": kony.i18n.getLocalizedString("i18n.wealth.price"),
                            "lblTwoValue": "$10.90"
                        }, {
                            "imgChevron": "chevron.png",
                            "imgLogo": "imagedrag.png",
                            "lblFiveKey": kony.i18n.getLocalizedString("i18n.wealth.type"),
                            "lblFiveValue": "Buy",
                            "lblFourKey": kony.i18n.getLocalizedString("i18n.wealth.qty"),
                            "lblFourValue": "10",
                            "lblId": "US02079K1079 | NASDAQ",
                            "lblName": "Alphabet C class",
                            "lblOneKey": kony.i18n.getLocalizedString("i18n.wealth.tradeDate"),
                            "lblOneValue": "07/22/2020",
                            "lblStatus": kony.i18n.getLocalizedString("kony.mb.transfers.Completed"),
                            "lblThreeKey": kony.i18n.getLocalizedString("i18n.wealth.total"),
                            "lblThreeValue": "$11,000.00",
                            "lblTwoKey": kony.i18n.getLocalizedString("i18n.wealth.price"),
                            "lblTwoValue": "$10.90"
                        }, {
                            "imgChevron": "chevron.png",
                            "imgLogo": "imagedrag.png",
                            "lblFiveKey": kony.i18n.getLocalizedString("i18n.wealth.type"),
                            "lblFiveValue": "Buy",
                            "lblFourKey": kony.i18n.getLocalizedString("i18n.wealth.qty"),
                            "lblFourValue": "10",
                            "lblId": "US02079K1079 | NASDAQ",
                            "lblName": "Alphabet C class",
                            "lblOneKey": kony.i18n.getLocalizedString("i18n.wealth.tradeDate"),
                            "lblOneValue": "07/22/2020",
                            "lblStatus": kony.i18n.getLocalizedString("kony.mb.transfers.Completed"),
                            "lblThreeKey": kony.i18n.getLocalizedString("i18n.wealth.total"),
                            "lblThreeValue": "$11,000.00",
                            "lblTwoKey": kony.i18n.getLocalizedString("i18n.wealth.price"),
                            "lblTwoValue": "$10.90"
                        }, {
                            "imgChevron": "chevron.png",
                            "imgLogo": "imagedrag.png",
                            "lblFiveKey": kony.i18n.getLocalizedString("i18n.wealth.type"),
                            "lblFiveValue": "Buy",
                            "lblFourKey": kony.i18n.getLocalizedString("i18n.wealth.qty"),
                            "lblFourValue": "10",
                            "lblId": "US02079K1079 | NASDAQ",
                            "lblName": "Alphabet C class",
                            "lblOneKey": kony.i18n.getLocalizedString("i18n.wealth.tradeDate"),
                            "lblOneValue": "07/22/2020",
                            "lblStatus": kony.i18n.getLocalizedString("kony.mb.transfers.Completed"),
                            "lblThreeKey": kony.i18n.getLocalizedString("i18n.wealth.total"),
                            "lblThreeValue": "$11,000.00",
                            "lblTwoKey": kony.i18n.getLocalizedString("i18n.wealth.price"),
                            "lblTwoValue": "$10.90"
                        }, {
                            "imgChevron": "chevron.png",
                            "imgLogo": "imagedrag.png",
                            "lblFiveKey": kony.i18n.getLocalizedString("i18n.wealth.type"),
                            "lblFiveValue": "Buy",
                            "lblFourKey": kony.i18n.getLocalizedString("i18n.wealth.qty"),
                            "lblFourValue": "10",
                            "lblId": "US02079K1079 | NASDAQ",
                            "lblName": "Alphabet C class",
                            "lblOneKey": kony.i18n.getLocalizedString("i18n.wealth.tradeDate"),
                            "lblOneValue": "07/22/2020",
                            "lblStatus": kony.i18n.getLocalizedString("kony.mb.transfers.Completed"),
                            "lblThreeKey": kony.i18n.getLocalizedString("i18n.wealth.total"),
                            "lblThreeValue": "$11,000.00",
                            "lblTwoKey": kony.i18n.getLocalizedString("i18n.wealth.price"),
                            "lblTwoValue": "$10.90"
                        }, {
                            "imgChevron": "chevron.png",
                            "imgLogo": "imagedrag.png",
                            "lblFiveKey": kony.i18n.getLocalizedString("i18n.wealth.type"),
                            "lblFiveValue": "Buy",
                            "lblFourKey": kony.i18n.getLocalizedString("i18n.wealth.qty"),
                            "lblFourValue": "10",
                            "lblId": "US02079K1079 | NASDAQ",
                            "lblName": "Alphabet C class",
                            "lblOneKey": kony.i18n.getLocalizedString("i18n.wealth.tradeDate"),
                            "lblOneValue": "07/22/2020",
                            "lblStatus": kony.i18n.getLocalizedString("kony.mb.transfers.Completed"),
                            "lblThreeKey": kony.i18n.getLocalizedString("i18n.wealth.total"),
                            "lblThreeValue": "$11,000.00",
                            "lblTwoKey": kony.i18n.getLocalizedString("i18n.wealth.price"),
                            "lblTwoValue": "$10.90"
                        }, {
                            "imgChevron": "chevron.png",
                            "imgLogo": "imagedrag.png",
                            "lblFiveKey": kony.i18n.getLocalizedString("i18n.wealth.type"),
                            "lblFiveValue": "Buy",
                            "lblFourKey": kony.i18n.getLocalizedString("i18n.wealth.qty"),
                            "lblFourValue": "10",
                            "lblId": "US02079K1079 | NASDAQ",
                            "lblName": "Alphabet C class",
                            "lblOneKey": kony.i18n.getLocalizedString("i18n.wealth.tradeDate"),
                            "lblOneValue": "07/22/2020",
                            "lblStatus": kony.i18n.getLocalizedString("kony.mb.transfers.Completed"),
                            "lblThreeKey": kony.i18n.getLocalizedString("i18n.wealth.total"),
                            "lblThreeValue": "$11,000.00",
                            "lblTwoKey": kony.i18n.getLocalizedString("i18n.wealth.price"),
                            "lblTwoValue": "$10.90"
                        }, {
                            "imgChevron": "chevron.png",
                            "imgLogo": "imagedrag.png",
                            "lblFiveKey": kony.i18n.getLocalizedString("i18n.wealth.type"),
                            "lblFiveValue": "Buy",
                            "lblFourKey": kony.i18n.getLocalizedString("i18n.wealth.qty"),
                            "lblFourValue": "10",
                            "lblId": "US02079K1079 | NASDAQ",
                            "lblName": "Alphabet C class",
                            "lblOneKey": kony.i18n.getLocalizedString("i18n.wealth.tradeDate"),
                            "lblOneValue": "07/22/2020",
                            "lblStatus": kony.i18n.getLocalizedString("kony.mb.transfers.Completed"),
                            "lblThreeKey": kony.i18n.getLocalizedString("i18n.wealth.total"),
                            "lblThreeValue": "$11,000.00",
                            "lblTwoKey": kony.i18n.getLocalizedString("i18n.wealth.price"),
                            "lblTwoValue": "$10.90"
                        }, {
                            "imgChevron": "chevron.png",
                            "imgLogo": "imagedrag.png",
                            "lblFiveKey": kony.i18n.getLocalizedString("i18n.wealth.type"),
                            "lblFiveValue": "Buy",
                            "lblFourKey": kony.i18n.getLocalizedString("i18n.wealth.qty"),
                            "lblFourValue": "10",
                            "lblId": "US02079K1079 | NASDAQ",
                            "lblName": "Alphabet C class",
                            "lblOneKey": kony.i18n.getLocalizedString("i18n.wealth.tradeDate"),
                            "lblOneValue": "07/22/2020",
                            "lblStatus": kony.i18n.getLocalizedString("kony.mb.transfers.Completed"),
                            "lblThreeKey": kony.i18n.getLocalizedString("i18n.wealth.total"),
                            "lblThreeValue": "$11,000.00",
                            "lblTwoKey": kony.i18n.getLocalizedString("i18n.wealth.price"),
                            "lblTwoValue": "$10.90"
                        }, {
                            "imgChevron": "chevron.png",
                            "imgLogo": "imagedrag.png",
                            "lblFiveKey": kony.i18n.getLocalizedString("i18n.wealth.type"),
                            "lblFiveValue": "Buy",
                            "lblFourKey": kony.i18n.getLocalizedString("i18n.wealth.qty"),
                            "lblFourValue": "10",
                            "lblId": "US02079K1079 | NASDAQ",
                            "lblName": "Alphabet C class",
                            "lblOneKey": kony.i18n.getLocalizedString("i18n.wealth.tradeDate"),
                            "lblOneValue": "07/22/2020",
                            "lblStatus": kony.i18n.getLocalizedString("kony.mb.transfers.Completed"),
                            "lblThreeKey": kony.i18n.getLocalizedString("i18n.wealth.total"),
                            "lblThreeValue": "$11,000.00",
                            "lblTwoKey": kony.i18n.getLocalizedString("i18n.wealth.price"),
                            "lblTwoValue": "$10.90"
                        }],
                        "widgetDataMap": {
                            "flxBottomBorder": "flxBottomBorder",
                            "flxClick": "flxClick",
                            "flxDetail": "flxDetail",
                            "flxDetailFive": "flxDetailFive",
                            "flxDetailFour": "flxDetailFour",
                            "flxDetailOne": "flxDetailOne",
                            "flxDetailThree": "flxDetailThree",
                            "flxDetailTwo": "flxDetailTwo",
                            "flxHistoryDetailsList": "flxHistoryDetailsList",
                            "flxMain": "flxMain",
                            "flxRowFour": "flxRowFour",
                            "flxRowOne": "flxRowOne",
                            "flxRowThree": "flxRowThree",
                            "flxRowTwo": "flxRowTwo",
                            "imgChevron": "imgChevron",
                            "imgLogo": "imgLogo",
                            "lblFiveKey": "lblFiveKey",
                            "lblFiveValue": "lblFiveValue",
                            "lblFourKey": "lblFourKey",
                            "lblFourValue": "lblFourValue",
                            "lblId": "lblId",
                            "lblName": "lblName",
                            "lblOneKey": "lblOneKey",
                            "lblOneValue": "lblOneValue",
                            "lblStatus": "lblStatus",
                            "lblThreeKey": "lblThreeKey",
                            "lblThreeValue": "lblThreeValue",
                            "lblTwoKey": "lblTwoKey",
                            "lblTwoValue": "lblTwoValue"
                        }
                    },
                    "segmentHistoryDetails": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "height": "viz.val_cleared",
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
            flxHistoryContentMain.add(flxHistoryMainContainer, segmentHistoryDetails);
            var flxHistoryError = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "10%",
                "id": "flxHistoryError",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHistoryError.setDefaultUnit(kony.flex.DP);
            var lblHistoryError = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblHistoryError",
                "isVisible": true,
                "skin": "sknlblee0005SSPReg15px",
                "text": "No historical order",
                "textStyle": {},
                "top": "5dp",
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
            flxHistoryError.add(lblHistoryError);
            flxMainContainer.add(flxOrder, flxShadowBox, segmentDetails, flxError, flxTimePeriod, flxHistoryContentMain, flxHistoryError);
            flxContentMain.add(flxContainer, flxMainContainer);
            var flxAdditionalOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "100%",
                "id": "flxAdditionalOptions",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx000000Op50",
                "width": "100%",
                "zIndex": 1070
            }, {}, {});
            flxAdditionalOptions.setDefaultUnit(kony.flex.DP);
            var flxPerformAdditionalOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": 80,
                "clipBounds": true,
                "id": "flxPerformAdditionalOptions",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxffffffRadiusffffff10px",
                "zIndex": 2
            }, {}, {});
            flxPerformAdditionalOptions.setDefaultUnit(kony.flex.DP);
            var flxModify = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "58dp",
                "id": "flxModify",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxEBEBEB",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxModify.setDefaultUnit(kony.flex.DP);
            var lblModify = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblModify",
                "isVisible": true,
                "skin": "sknLbl007aFFSSP",
                "text": kony.i18n.getLocalizedString("i18n.wealth.modifyOrder"),
                "textStyle": {},
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
            var lblSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "lblSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknFlxe",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            lblSeparator.setDefaultUnit(kony.flex.DP);
            lblSeparator.add();
            flxModify.add(lblModify, lblSeparator);
            var flxCancelOrder = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "58dp",
                "id": "flxCancelOrder",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxEBEBEB",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCancelOrder.setDefaultUnit(kony.flex.DP);
            var lblCancelOrder = new kony.ui.Label({
                "centerX": "50.04%",
                "centerY": "50.00%",
                "id": "lblCancelOrder",
                "isVisible": true,
                "skin": "sknLblRed0ea08208b3c9142",
                "text": kony.i18n.getLocalizedString("i18n.wealth.cancelOrder"),
                "textStyle": {},
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
            flxCancelOrder.add(lblCancelOrder);
            flxPerformAdditionalOptions.add(flxModify, flxCancelOrder);
            var flxCancelOption = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "20dp",
                "clipBounds": true,
                "height": "50dp",
                "id": "flxCancelOption",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxffffffRadiusffffff10px",
                "zIndex": 1070
            }, {}, {});
            flxCancelOption.setDefaultUnit(kony.flex.DP);
            var flxCancel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "50dp",
                "id": "flxCancel",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1070
            }, {}, {});
            flxCancel.setDefaultUnit(kony.flex.DP);
            var lblCancel = new kony.ui.Label({
                "centerX": "50.04%",
                "centerY": "50.00%",
                "id": "lblCancel",
                "isVisible": true,
                "skin": "sknLbl007aFFSSPBold",
                "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1070
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxCancel.add(lblCancel);
            flxCancelOption.add(flxCancel);
            var flxTop = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "180dp",
                "clipBounds": true,
                "id": "flxTop",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTop.setDefaultUnit(kony.flex.DP);
            flxTop.add();
            flxAdditionalOptions.add(flxPerformAdditionalOptions, flxCancelOption, flxTop);
            var flxHistoryAdditionalOption = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "100%",
                "id": "flxHistoryAdditionalOption",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx000000Op50",
                "width": "100%",
                "zIndex": 1070
            }, {}, {});
            flxHistoryAdditionalOption.setDefaultUnit(kony.flex.DP);
            var flxHistoryPerformAdditionalOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": 80,
                "clipBounds": true,
                "id": "flxHistoryPerformAdditionalOptions",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxffffffRadiusffffff10px",
                "zIndex": 2
            }, {}, {});
            flxHistoryPerformAdditionalOptions.setDefaultUnit(kony.flex.DP);
            var flxDownloadTransactions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "58dp",
                "id": "flxDownloadTransactions",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxEBEBEB",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDownloadTransactions.setDefaultUnit(kony.flex.DP);
            var lblDownloadTransactions = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblDownloadTransactions",
                "isVisible": true,
                "skin": "sknLbl007aFFSSP",
                "text": kony.i18n.getLocalizedString("i18n.wealth.downloadOrders"),
                "textStyle": {},
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
            var CopylblSeparator0aa315ddbb50442 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "CopylblSeparator0aa315ddbb50442",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknFlxe",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopylblSeparator0aa315ddbb50442.setDefaultUnit(kony.flex.DP);
            CopylblSeparator0aa315ddbb50442.add();
            flxDownloadTransactions.add(lblDownloadTransactions, CopylblSeparator0aa315ddbb50442);
            var flxSortBy = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "58dp",
                "id": "flxSortBy",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxEBEBEB",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSortBy.setDefaultUnit(kony.flex.DP);
            var lblSortyBy = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblSortyBy",
                "isVisible": true,
                "skin": "sknLbl007aFFSSP",
                "text": kony.i18n.getLocalizedString("i18n.wealth.sortBy"),
                "textStyle": {},
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
            var lblSep = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "lblSep",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            lblSep.setDefaultUnit(kony.flex.DP);
            lblSep.add();
            flxSortBy.add(lblSortyBy, lblSep);
            flxHistoryPerformAdditionalOptions.add(flxDownloadTransactions, flxSortBy);
            var flxHistoryCancelOption = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "20dp",
                "clipBounds": true,
                "height": "50dp",
                "id": "flxHistoryCancelOption",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxffffffRadiusffffff10px",
                "zIndex": 1070
            }, {}, {});
            flxHistoryCancelOption.setDefaultUnit(kony.flex.DP);
            var flxHistoryCancel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "50dp",
                "id": "flxHistoryCancel",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1070
            }, {}, {});
            flxHistoryCancel.setDefaultUnit(kony.flex.DP);
            var lblHistoryCancel = new kony.ui.Label({
                "centerX": "50.04%",
                "centerY": "50.00%",
                "id": "lblHistoryCancel",
                "isVisible": true,
                "skin": "sknLbl007aFFSSPBold",
                "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1070
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxHistoryCancel.add(lblHistoryCancel);
            flxHistoryCancelOption.add(flxHistoryCancel);
            var flxHistoryTop = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "180dp",
                "clipBounds": true,
                "id": "flxHistoryTop",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHistoryTop.setDefaultUnit(kony.flex.DP);
            flxHistoryTop.add();
            flxHistoryAdditionalOption.add(flxHistoryPerformAdditionalOptions, flxHistoryCancelOption, flxHistoryTop);
            var flxConfirmationPopUp = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxConfirmationPopUp",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": 0,
                "isModalContainer": false,
                "skin": "sknFlx000000Op50",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxConfirmationPopUp.setDefaultUnit(kony.flex.DP);
            var flxConfirmationContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50.00%",
                "centerY": "50.00%",
                "clipBounds": true,
                "height": "147dp",
                "id": "flxConfirmationContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "sknFlxffffffB",
                "width": "76.80%",
                "zIndex": 200
            }, {}, {});
            flxConfirmationContainer.setDefaultUnit(kony.flex.DP);
            var lblMsg = new kony.ui.Label({
                "bottom": "23dp",
                "centerX": "50.00%",
                "centerY": 50,
                "id": "lblMsg",
                "isVisible": true,
                "skin": "sknlbl424242SSPR15dp",
                "text": "Are you sure, do you want to remove this attachment?",
                "textStyle": {},
                "width": "92%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxBtns = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "52dp",
                "id": "flxBtns",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": 0,
                "isModalContainer": false,
                "skin": "CopyslFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBtns.setDefaultUnit(kony.flex.DP);
            var flxSep1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSep1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSep1.setDefaultUnit(kony.flex.DP);
            flxSep1.add();
            var flxBottom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxBottom",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%"
            }, {}, {});
            flxBottom.setDefaultUnit(kony.flex.DP);
            var flxYes = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxYes",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "49%",
                "zIndex": 1
            }, {}, {});
            flxYes.setDefaultUnit(kony.flex.DP);
            var lblYes = new kony.ui.Label({
                "centerX": "50.00%",
                "centerY": "50.00%",
                "id": "lblYes",
                "isVisible": true,
                "skin": "sknlbl004B95SSPR15dp",
                "text": kony.i18n.getLocalizedString("kony.mb.common.AlertYes"),
                "textStyle": {},
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxYes.add(lblYes);
            var flxSep2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxSep2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3op50",
                "top": "0",
                "width": "1dp",
                "zIndex": 1
            }, {}, {});
            flxSep2.setDefaultUnit(kony.flex.DP);
            flxSep2.add();
            var flxNo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxNo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "49%",
                "zIndex": 1
            }, {}, {});
            flxNo.setDefaultUnit(kony.flex.DP);
            var lblNo = new kony.ui.Label({
                "centerX": "50.00%",
                "centerY": "50.00%",
                "id": "lblNo",
                "isVisible": true,
                "skin": "sknlbl004B95SSPR15dp",
                "text": kony.i18n.getLocalizedString("kony.mb.common.AlertNo"),
                "textStyle": {},
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxNo.add(lblNo);
            flxBottom.add(flxYes, flxSep2, flxNo);
            flxBtns.add(flxSep1, flxBottom);
            flxConfirmationContainer.add(lblMsg, flxBtns);
            flxConfirmationPopUp.add(flxConfirmationContainer);
            this.add(flxHeader, flxContentMain, flxAdditionalOptions, flxHistoryAdditionalOption, flxConfirmationPopUp);
        };
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_IMAGE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_ce7dc1520a6c47ce9b410717a772b6ba,
            "metaData": {
                "image": "more_header.png"
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
            "addWidgets": addWidgetsfrmOrder,
            "bounces": false,
            "enableScrolling": false,
            "enabledForIdleTimeout": true,
            "id": "frmOrder",
            "init": controller.AS_Form_c8662a741cb3434db53080ff47c20265,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknFrmTransparent",
            "title": kony.i18n.getLocalizedString("i18n.wealth.orders")
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