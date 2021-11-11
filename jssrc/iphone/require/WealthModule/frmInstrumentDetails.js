define("WealthModule/frmInstrumentDetails", function() {
    return function(controller) {
        function addWidgetsfrmInstrumentDetails() {
            this.setDefaultUnit(kony.flex.DP);
            var flxMainContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "60dp",
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
                "top": "-1dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
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
                        "text": kony.i18n.getLocalizedString("i18n.wealth.instrument"),
                        "left": "15%",
                        "width": "50%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxInstrumentInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "225dp",
                "id": "flxInstrumentInfo",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "sknFlx1a98ff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxInstrumentInfo.setDefaultUnit(kony.flex.DP);
            var flxInstrumentName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxInstrumentName",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxInstrumentName.setDefaultUnit(kony.flex.DP);
            var imgInstrument = new kony.ui.Image2({
                "height": "26dp",
                "id": "imgInstrument",
                "isVisible": false,
                "left": "20dp",
                "skin": "slImage",
                "src": "swissfranc.png",
                "top": "10dp",
                "width": "26dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblInstrumentName = new kony.ui.Label({
                "id": "lblInstrumentName",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLblffffffSSPReg28px",
                "text": "Amazon.com Inc.",
                "textStyle": {},
                "top": "10dp",
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
            var imgFavourite = new kony.ui.Image2({
                "height": "30dp",
                "id": "imgFavourite",
                "isVisible": true,
                "right": "18dp",
                "skin": "slImage",
                "src": "inactive_star_1x.png",
                "top": "15dp",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxInstrumentName.add(imgInstrument, lblInstrumentName, imgFavourite);
            var flxInstrumentFinancials = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "100dp",
                "id": "flxInstrumentFinancials",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxInstrumentFinancials.setDefaultUnit(kony.flex.DP);
            var flxLeftContent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxLeftContent",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "60%",
                "zIndex": 1
            }, {}, {});
            flxLeftContent.setDefaultUnit(kony.flex.DP);
            var lblInstrumentSymbol = new kony.ui.Label({
                "id": "lblInstrumentSymbol",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlblffffffSSPR15px",
                "text": "USAMAZON2345 | NASDAQ",
                "textStyle": {},
                "top": "0dp",
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
            var lblInstrumentValue = new kony.ui.Label({
                "id": "lblInstrumentValue",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblffffffSSPReg28px",
                "text": "$2,399.44",
                "textStyle": {},
                "top": "9dp",
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
            var flxInstrumentRefresh = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxInstrumentRefresh",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "13dp",
                "width": "100%"
            }, {}, {});
            flxInstrumentRefresh.setDefaultUnit(kony.flex.DP);
            var lblInstrumentValueTime = new kony.ui.Label({
                "id": "lblInstrumentValueTime",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlblffffffSSPR15px",
                "text": "As of 12:30 PM CEST Oct 22",
                "textStyle": {},
                "top": "0dp",
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
            var imgRefresh = new kony.ui.Image2({
                "bottom": "10dp",
                "height": "30dp",
                "id": "imgRefresh",
                "isVisible": true,
                "left": "-8dp",
                "skin": "slImage",
                "src": "refreshwhite.png",
                "top": "-6dp",
                "width": "50dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxInstrumentRefresh.add(lblInstrumentValueTime, imgRefresh);
            flxLeftContent.add(lblInstrumentSymbol, lblInstrumentValue, flxInstrumentRefresh);
            var flxRightContent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxRightContent",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "40%",
                "zIndex": 1
            }, {}, {});
            flxRightContent.setDefaultUnit(kony.flex.DP);
            var flxInstrumentIndicator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "40%",
                "clipBounds": true,
                "height": "18dp",
                "id": "flxInstrumentIndicator",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxInstrumentIndicator.setDefaultUnit(kony.flex.DP);
            var lblCurrentValue = new kony.ui.Label({
                "id": "lblCurrentValue",
                "isVisible": true,
                "left": "1dp",
                "skin": "sknlblffffffSSPR15px",
                "text": "36.61 (+1.55%)",
                "textStyle": {},
                "top": "0dp",
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
            var imgIndicator = new kony.ui.Image2({
                "height": "12dp",
                "id": "imgIndicator",
                "isVisible": true,
                "left": "0dp",
                "right": "3dp",
                "skin": "slImage",
                "src": "whitearrowupfilled.png",
                "top": "3dp",
                "width": "12dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxInstrumentIndicator.add(lblCurrentValue, imgIndicator);
            flxRightContent.add(flxInstrumentIndicator);
            flxInstrumentFinancials.add(flxLeftContent, flxRightContent);
            var flxInstrumentOrder = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "0dp",
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxInstrumentOrder",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "93%",
                "zIndex": 1
            }, {}, {});
            flxInstrumentOrder.setDefaultUnit(kony.flex.DP);
            var btnBuy = new kony.ui.Button({
                "focusSkin": "sknBtnBgFFFFFFBorder1pxFont15px003E75",
                "height": "50dp",
                "id": "btnBuy",
                "isVisible": true,
                "left": "2dp",
                "skin": "sknBtnBgFFFFFFBorder1pxFont15px003E75",
                "text": "Buy",
                "top": "0dp",
                "width": "47%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var btnSell = new kony.ui.Button({
                "focusSkin": "sknBtnBgFFFFFFBorder1pxFont15px003E75",
                "height": "50dp",
                "id": "btnSell",
                "isVisible": true,
                "left": "18dp",
                "skin": "sknBtnBg003E75Border1pxFont15pxFFFFFF",
                "text": "Sell",
                "top": "0dp",
                "width": "47%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            flxInstrumentOrder.add(btnBuy, btnSell);
            flxInstrumentInfo.add(flxInstrumentName, flxInstrumentFinancials, flxInstrumentOrder);
            var flxCurrencyChart = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxCurrencyChart",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCurrencyChart.setDefaultUnit(kony.flex.DP);
            var investmentLineChart = new com.wealth.common.investmentLineChart({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "id": "investmentLineChart",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "20dp",
                "width": "100%",
                "overrides": {
                    "investmentLineChart": {
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
            investmentLineChart.currencySymbol = "$";
            investmentLineChart.currentFilter = "1D";
            investmentLineChart.onFilterChanged = controller.AS_UWI_i6eda175b82c4931be899e459a7b635f;
            flxCurrencyChart.add(investmentLineChart);
            var flxCurrentposition = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxCurrentposition",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxCurrentposition.setDefaultUnit(kony.flex.DP);
            var flxCurrentPos = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxCurrentPos",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxf6f6f6Bcg",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxCurrentPos.setDefaultUnit(kony.flex.DP);
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
                "top": "0dp",
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
            var lblHeader = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblHeader",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPReg30px",
                "text": kony.i18n.getLocalizedString("i18n.Wealth.Current"),
                "textStyle": {},
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
            flxCurrentPos.add(flxShadowBox, lblHeader);
            var flxSeparator8 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator8",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "minWidth": "100%",
                "isModalContainer": false,
                "right": "0dp",
                "skin": "sknFlxe3e3e3",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {}, {});
            flxSeparator8.setDefaultUnit(kony.flex.DP);
            flxSeparator8.add();
            var flxCurrentPositionDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxCurrentPositionDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxCurrentPositionDetails.setDefaultUnit(kony.flex.DP);
            var flxCurrentPostiionOne = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
                "id": "flxCurrentPostiionOne",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxCurrentPostiionOne.setDefaultUnit(kony.flex.DP);
            var flxMarketVal = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "80dp",
                "id": "flxMarketVal",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "33%"
            }, {}, {});
            flxMarketVal.setDefaultUnit(kony.flex.DP);
            var lblmarketValue = new kony.ui.Label({
                "id": "lblmarketValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPReg30px",
                "text": "$0.0",
                "textStyle": {},
                "top": "10dp",
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
            var lblMarketValLabel = new kony.ui.Label({
                "id": "lblMarketValLabel",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl727272SSPR15px",
                "text": "Market Value",
                "textStyle": {},
                "top": "5dp",
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
            flxMarketVal.add(lblmarketValue, lblMarketValLabel);
            var flxUnrealized = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "80dp",
                "id": "flxUnrealized",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "33%"
            }, {}, {});
            flxUnrealized.setDefaultUnit(kony.flex.DP);
            var lblPnlVal = new kony.ui.Label({
                "id": "lblPnlVal",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlbl2f853ssp121pr",
                "text": "$0.0",
                "textStyle": {},
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblPnlLabel = new kony.ui.Label({
                "id": "lblPnlLabel",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl727272SSPR15px",
                "text": "Unrealized P&L",
                "textStyle": {},
                "top": "5dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxUnrealized.add(lblPnlVal, lblPnlLabel);
            flxCurrentPostiionOne.add(flxMarketVal, flxUnrealized);
            var flxCurrentPositionTwo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
                "id": "flxCurrentPositionTwo",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxCurrentPositionTwo.setDefaultUnit(kony.flex.DP);
            var flxQuantity = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "80dp",
                "id": "flxQuantity",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "33%"
            }, {}, {});
            flxQuantity.setDefaultUnit(kony.flex.DP);
            var lblQuantityVal = new kony.ui.Label({
                "id": "lblQuantityVal",
                "isVisible": true,
                "left": 20,
                "skin": "sknLbl424242SSPReg30px",
                "text": "25",
                "textStyle": {},
                "top": 10,
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
            var lblQuantityLabel = new kony.ui.Label({
                "id": "lblQuantityLabel",
                "isVisible": true,
                "left": 20,
                "skin": "sknLbl727272SSPR15px",
                "text": "Quantity",
                "textStyle": {},
                "top": 5,
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
            flxQuantity.add(lblQuantityVal, lblQuantityLabel);
            var flxWeight = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "80dp",
                "id": "flxWeight",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": 0,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 2,
                "width": "33%"
            }, {}, {});
            flxWeight.setDefaultUnit(kony.flex.DP);
            var lblWeightVal = new kony.ui.Label({
                "id": "lblWeightVal",
                "isVisible": true,
                "left": "0",
                "skin": "sknLbl424242SSPReg30px",
                "text": "2.5%",
                "textStyle": {},
                "top": 10,
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblWeightLabel = new kony.ui.Label({
                "id": "lblWeightLabel",
                "isVisible": true,
                "left": "0",
                "skin": "sknLbl727272SSPR15px",
                "text": "Weight%",
                "textStyle": {},
                "top": 5,
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxWeight.add(lblWeightVal, lblWeightLabel);
            flxCurrentPositionTwo.add(flxQuantity, flxWeight);
            var flxCurrentPositionThree = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "10dp",
                "clipBounds": true,
                "height": "70dp",
                "id": "flxCurrentPositionThree",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxCurrentPositionThree.setDefaultUnit(kony.flex.DP);
            var flxAverageCost = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "80dp",
                "id": "flxAverageCost",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "33%"
            }, {}, {});
            flxAverageCost.setDefaultUnit(kony.flex.DP);
            var lblAverageCostVal = new kony.ui.Label({
                "id": "lblAverageCostVal",
                "isVisible": true,
                "left": 20,
                "skin": "sknLbl424242SSPReg30px",
                "text": "$0.0",
                "textStyle": {},
                "top": 10,
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
            var lblAverageCostLabel = new kony.ui.Label({
                "id": "lblAverageCostLabel",
                "isVisible": true,
                "left": 20,
                "skin": "sknLbl727272SSPR15px",
                "text": "Average Cost",
                "textStyle": {},
                "top": 5,
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
            flxAverageCost.add(lblAverageCostVal, lblAverageCostLabel);
            flxCurrentPositionThree.add(flxAverageCost);
            flxCurrentPositionDetails.add(flxCurrentPostiionOne, flxCurrentPositionTwo, flxCurrentPositionThree);
            flxCurrentposition.add(flxCurrentPos, flxSeparator8, flxCurrentPositionDetails);
            var flxPricingData = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxPricingData",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxPricingData.setDefaultUnit(kony.flex.DP);
            var flxPricingDataHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxPricingDataHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxf6f6f6Bcg",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxPricingDataHeader.setDefaultUnit(kony.flex.DP);
            var flxPricingShadowBox = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "9px",
                "id": "flxPricingShadowBox",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPricingShadowBox.setDefaultUnit(kony.flex.DP);
            var flxPricingRectangle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxPricingRectangle",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflx424242grad",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPricingRectangle.setDefaultUnit(kony.flex.DP);
            flxPricingRectangle.add();
            flxPricingShadowBox.add(flxPricingRectangle);
            var lblPosition = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblPosition",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPReg30px",
                "text": kony.i18n.getLocalizedString("i18n.Wealth.Pricing"),
                "textStyle": {},
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
            flxPricingDataHeader.add(flxPricingShadowBox, lblPosition);
            var flxSeparator6 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator6",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "minWidth": "100%",
                "isModalContainer": false,
                "right": "0dp",
                "skin": "sknFlxe3e3e3",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {}, {});
            flxSeparator6.setDefaultUnit(kony.flex.DP);
            flxSeparator6.add();
            var flxPricingDataDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxPricingDataDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxPricingDataDetails.setDefaultUnit(kony.flex.DP);
            var flxPricingDetailsOne = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
                "id": "flxPricingDetailsOne",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "1dp",
                "width": "100%"
            }, {}, {});
            flxPricingDetailsOne.setDefaultUnit(kony.flex.DP);
            var flxBid = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "80dp",
                "id": "flxBid",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "33%"
            }, {}, {});
            flxBid.setDefaultUnit(kony.flex.DP);
            var lblBidVal = new kony.ui.Label({
                "id": "lblBidVal",
                "isVisible": true,
                "left": 20,
                "skin": "sknLbl424242SSPReg30px",
                "text": "$0.0",
                "textStyle": {},
                "top": 10,
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
            var lblBidLabel = new kony.ui.Label({
                "id": "lblBidLabel",
                "isVisible": true,
                "left": 20,
                "skin": "sknLbl727272SSPR15px",
                "text": "Bid",
                "textStyle": {},
                "top": 5,
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
            flxBid.add(lblBidVal, lblBidLabel);
            var flxBidVol = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "80dp",
                "id": "flxBidVol",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "33%"
            }, {}, {});
            flxBidVol.setDefaultUnit(kony.flex.DP);
            var lblBidVolVal = new kony.ui.Label({
                "id": "lblBidVolVal",
                "isVisible": true,
                "left": 0,
                "skin": "sknLbl424242SSPReg30px",
                "text": "1602",
                "textStyle": {},
                "top": 10,
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
            var lblBidVolLabel = new kony.ui.Label({
                "id": "lblBidVolLabel",
                "isVisible": true,
                "left": 0,
                "skin": "sknLbl727272SSPR15px",
                "text": "Bid vol",
                "textStyle": {},
                "top": 5,
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
            flxBidVol.add(lblBidVolVal, lblBidVolLabel);
            var flxVolume = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "80dp",
                "id": "flxVolume",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": 0,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 0,
                "width": "33%"
            }, {}, {});
            flxVolume.setDefaultUnit(kony.flex.DP);
            var lblVolVal = new kony.ui.Label({
                "id": "lblVolVal",
                "isVisible": true,
                "left": "0",
                "skin": "sknLbl424242SSPReg30px",
                "text": "92365",
                "textStyle": {},
                "top": 10,
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblVolLabel = new kony.ui.Label({
                "id": "lblVolLabel",
                "isVisible": true,
                "left": "0",
                "skin": "sknLbl727272SSPR15px",
                "text": "Volume",
                "textStyle": {},
                "top": 5,
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxVolume.add(lblVolVal, lblVolLabel);
            flxPricingDetailsOne.add(flxBid, flxBidVol, flxVolume);
            var flxPricingDetailsTwo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
                "id": "flxPricingDetailsTwo",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxPricingDetailsTwo.setDefaultUnit(kony.flex.DP);
            var flxAsk = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "80dp",
                "id": "flxAsk",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "33%"
            }, {}, {});
            flxAsk.setDefaultUnit(kony.flex.DP);
            var lblAskVal = new kony.ui.Label({
                "id": "lblAskVal",
                "isVisible": true,
                "left": 20,
                "skin": "sknLbl424242SSPReg30px",
                "text": "$0.0",
                "textStyle": {},
                "top": 10,
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
            var lblAskLabel = new kony.ui.Label({
                "id": "lblAskLabel",
                "isVisible": true,
                "left": 20,
                "skin": "sknLbl727272SSPR15px",
                "text": "Ask",
                "textStyle": {},
                "top": 5,
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
            flxAsk.add(lblAskVal, lblAskLabel);
            var flxAskVol = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "80dp",
                "id": "flxAskVol",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "33%"
            }, {}, {});
            flxAskVol.setDefaultUnit(kony.flex.DP);
            var lblAskVolVal = new kony.ui.Label({
                "id": "lblAskVolVal",
                "isVisible": true,
                "left": 0,
                "skin": "sknLbl424242SSPReg30px",
                "text": "1925",
                "textStyle": {},
                "top": 10,
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
            var lblAskVolLabel = new kony.ui.Label({
                "id": "lblAskVolLabel",
                "isVisible": true,
                "left": 0,
                "skin": "sknLbl727272SSPR15px",
                "text": "Ask vol",
                "textStyle": {},
                "top": 5,
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
            flxAskVol.add(lblAskVolVal, lblAskVolLabel);
            var flxHigh = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "80dp",
                "id": "flxHigh",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": 0,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 1,
                "width": "33%"
            }, {}, {});
            flxHigh.setDefaultUnit(kony.flex.DP);
            var lblHighVal = new kony.ui.Label({
                "id": "lblHighVal",
                "isVisible": true,
                "left": "0",
                "skin": "sknLbl424242SSPReg30px",
                "text": "$3.3",
                "textStyle": {},
                "top": 10,
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblHighLabel = new kony.ui.Label({
                "id": "lblHighLabel",
                "isVisible": true,
                "left": "0",
                "skin": "sknLbl727272SSPR15px",
                "text": "52W High",
                "textStyle": {},
                "top": 5,
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxHigh.add(lblHighVal, lblHighLabel);
            flxPricingDetailsTwo.add(flxAsk, flxAskVol, flxHigh);
            var flxPricingDetailsThree = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
                "id": "flxPricingDetailsThree",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxPricingDetailsThree.setDefaultUnit(kony.flex.DP);
            var flxOpen = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "80dp",
                "id": "flxOpen",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "33%"
            }, {}, {});
            flxOpen.setDefaultUnit(kony.flex.DP);
            var lblOpenVal = new kony.ui.Label({
                "id": "lblOpenVal",
                "isVisible": true,
                "left": 20,
                "skin": "sknLbl424242SSPReg30px",
                "text": "$12.01",
                "textStyle": {},
                "top": 10,
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
            var lblOpenLabel = new kony.ui.Label({
                "id": "lblOpenLabel",
                "isVisible": true,
                "left": 20,
                "skin": "sknLbl727272SSPR15px",
                "text": "Open",
                "textStyle": {},
                "top": 5,
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
            flxOpen.add(lblOpenVal, lblOpenLabel);
            var flxClose = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "80dp",
                "id": "flxClose",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": 0,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "33%"
            }, {}, {});
            flxClose.setDefaultUnit(kony.flex.DP);
            var lblCloseVal = new kony.ui.Label({
                "id": "lblCloseVal",
                "isVisible": true,
                "left": 0,
                "skin": "sknLbl424242SSPReg30px",
                "text": "$13.25",
                "textStyle": {},
                "top": 10,
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
            var lblCloseLabel = new kony.ui.Label({
                "id": "lblCloseLabel",
                "isVisible": true,
                "left": 0,
                "skin": "sknLbl727272SSPR15px",
                "text": "Close",
                "textStyle": {},
                "top": 5,
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
            flxClose.add(lblCloseVal, lblCloseLabel);
            var flxLow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "80dp",
                "id": "flxLow",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": 0,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 0,
                "width": "33%"
            }, {}, {});
            flxLow.setDefaultUnit(kony.flex.DP);
            var lblLowVal = new kony.ui.Label({
                "id": "lblLowVal",
                "isVisible": true,
                "left": "0",
                "skin": "sknLbl424242SSPReg30px",
                "text": "$25,000.00",
                "textStyle": {},
                "top": 10,
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblLowLabel = new kony.ui.Label({
                "id": "lblLowLabel",
                "isVisible": true,
                "left": "0",
                "skin": "sknLbl727272SSPR15px",
                "text": "52W Low",
                "textStyle": {},
                "top": 5,
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxLow.add(lblLowVal, lblLowLabel);
            flxPricingDetailsThree.add(flxOpen, flxClose, flxLow);
            var flxPricingDetailsFour = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "10dp",
                "clipBounds": true,
                "height": "70dp",
                "id": "flxPricingDetailsFour",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxPricingDetailsFour.setDefaultUnit(kony.flex.DP);
            var flxLatest = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "80dp",
                "id": "flxLatest",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "45%"
            }, {}, {});
            flxLatest.setDefaultUnit(kony.flex.DP);
            var lblLatestVal = new kony.ui.Label({
                "id": "lblLatestVal",
                "isVisible": true,
                "left": 20,
                "skin": "sknLbl424242SSPReg30px",
                "text": "$13.39",
                "textStyle": {},
                "top": 10,
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
            var lblLatestLabel = new kony.ui.Label({
                "id": "lblLatestLabel",
                "isVisible": true,
                "left": 20,
                "skin": "sknLbl727272SSPR15px",
                "text": "Latest",
                "textStyle": {},
                "top": 5,
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
            flxLatest.add(lblLatestVal, lblLatestLabel);
            flxPricingDetailsFour.add(flxLatest);
            flxPricingDataDetails.add(flxPricingDetailsOne, flxPricingDetailsTwo, flxPricingDetailsThree, flxPricingDetailsFour);
            flxPricingData.add(flxPricingDataHeader, flxSeparator6, flxPricingDataDetails);
            var flxNews = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxNews",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxNews.setDefaultUnit(kony.flex.DP);
            var flxNewsHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxNewsHeader",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxf6f6f6Bcg",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxNewsHeader.setDefaultUnit(kony.flex.DP);
            var flxStockNewsShadowBox = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "9px",
                "id": "flxStockNewsShadowBox",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxStockNewsShadowBox.setDefaultUnit(kony.flex.DP);
            var flxStockRectangle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxStockRectangle",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflx424242grad",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxStockRectangle.setDefaultUnit(kony.flex.DP);
            flxStockRectangle.add();
            flxStockNewsShadowBox.add(flxStockRectangle);
            var lblNews = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblNews",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPReg30px",
                "text": kony.i18n.getLocalizedString("i18n.wealth.stockNews"),
                "textStyle": {},
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
            flxNewsHeader.add(flxStockNewsShadowBox, lblNews);
            var flxSeparator1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "minWidth": "100%",
                "isModalContainer": false,
                "right": "0dp",
                "skin": "sknFlxe3e3e3",
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {}, {});
            flxSeparator1.setDefaultUnit(kony.flex.DP);
            flxSeparator1.add();
            var segNews = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblNews": "",
                    "lblTime": "",
                    "lblTitle": ""
                }],
                "groupCells": false,
                "id": "segNews",
                "isVisible": true,
                "left": "0",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxNews",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxNews": "flxNews",
                    "flxRow1": "flxRow1",
                    "flxSeparator": "flxSeparator",
                    "lblNews": "lblNews",
                    "lblTime": "lblTime",
                    "lblTitle": "lblTitle"
                },
                "width": "100%"
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
            var flxView = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "15dp",
                "clipBounds": true,
                "id": "flxView",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%"
            }, {}, {});
            flxView.setDefaultUnit(kony.flex.DP);
            var lblViewAll = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblViewAll",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl4176a4SSPSB18px",
                "text": kony.i18n.getLocalizedString("i18n.wealth.viewAll"),
                "textStyle": {},
                "top": "10dp",
                "width": "50dp",
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var imgArrow = new kony.ui.Image2({
                "height": "15dp",
                "id": "imgArrow",
                "isVisible": true,
                "left": "3dp",
                "skin": "slImage",
                "src": "segmentarrow.png",
                "top": "11dp",
                "width": "16dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxView.add(lblViewAll, imgArrow);
            flxNews.add(flxNewsHeader, flxSeparator1, segNews, flxView);
            var flxDocuments = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "1dp",
                "clipBounds": true,
                "id": "flxDocuments",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxDocuments.setDefaultUnit(kony.flex.DP);
            var flxSeparato3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparato3",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "minWidth": "100%",
                "isModalContainer": false,
                "right": "0dp",
                "skin": "sknFlxe3e3e3",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {}, {});
            flxSeparato3.setDefaultUnit(kony.flex.DP);
            flxSeparato3.add();
            var flxDocumentHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxDocumentHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxf6f6f6Bcg",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxDocumentHeader.setDefaultUnit(kony.flex.DP);
            var flxDocumentShadowBox = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "9px",
                "id": "flxDocumentShadowBox",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDocumentShadowBox.setDefaultUnit(kony.flex.DP);
            var flxDocumentRectangle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxDocumentRectangle",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflx424242grad",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDocumentRectangle.setDefaultUnit(kony.flex.DP);
            flxDocumentRectangle.add();
            flxDocumentShadowBox.add(flxDocumentRectangle);
            var lblDocument = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDocument",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPReg30px",
                "text": kony.i18n.getLocalizedString("kony.tab.OBdocuments"),
                "textStyle": {},
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
            flxDocumentHeader.add(flxDocumentShadowBox, lblDocument);
            var flxSeparator4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "minWidth": "100%",
                "isModalContainer": false,
                "right": "0dp",
                "skin": "sknFlxe3e3e3",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {}, {});
            flxSeparator4.setDefaultUnit(kony.flex.DP);
            flxSeparator4.add();
            var segPdf = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "10dp",
                "data": [{
                    "imgDownload": "",
                    "imgPdf": "",
                    "lblName": ""
                }],
                "groupCells": false,
                "id": "segPdf",
                "isVisible": true,
                "left": "0",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxPdf",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxContent": "flxContent",
                    "flxPdf": "flxPdf",
                    "imgDownload": "imgDownload",
                    "imgPdf": "imgPdf",
                    "lblName": "lblName"
                },
                "width": "100%"
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
            flxDocuments.add(flxSeparato3, flxDocumentHeader, flxSeparator4, segPdf);
            flxMainContainer.add(flxHeader, flxInstrumentInfo, flxCurrencyChart, flxCurrentposition, flxPricingData, flxNews, flxDocuments);
            this.add(flxMainContainer);
        };
        var LBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_IMAGE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_c647060c722741aaa7917560843e9beb,
            "metaData": {
                "image": "backbutton_1.png"
            },
            "id": "LBarBtnItem0"
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
            "addWidgets": addWidgetsfrmInstrumentDetails,
            "bounces": true,
            "enableScrolling": true,
            "enabledForIdleTimeout": true,
            "id": "frmInstrumentDetails",
            "init": controller.AS_Form_b253546af97346a5acbef5b93843e3d3,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_df815f0807f3415380bc19796b708c18,
            "preShow": function(eventobject) {
                controller.AS_Form_c1b241e332e548b3a4ca94ba60450403(eventobject);
            },
            "skin": "sknFrmTitleBar",
            "title": kony.i18n.getLocalizedString("i18n.wealth.instrument")
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "bounces": true,
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
                "leftBarButtonItems": [
                    LBarBtnItem0
                ],
                "rightBarButtonItems": [],
                "backBarButtonItem": BBarBtnItem0
            },
            "titleBarSkin": "sknTitle1a98ffffffff30px"
        }]
    }
});