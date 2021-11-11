define("WealthModule/frmPortfolioDetails", function() {
    return function(controller) {
        function addWidgetsfrmPortfolioDetails() {
            this.setDefaultUnit(kony.flex.DP);
            var flxMainContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "height": "85%",
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
                "width": "90%",
                "overrides": {
                    "customHeader": {
                        "width": "90%"
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
                        "height": "25dp",
                        "isVisible": false,
                        "src": "info.png",
                        "width": "25dp"
                    },
                    "lblLocateUs": {
                        "text": "Investment...2365"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxInfo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "15dp",
                "skin": "slFbox",
                "top": "0",
                "width": "30dp",
                "zIndex": 10
            }, {}, {});
            flxInfo.setDefaultUnit(kony.flex.DP);
            var imgInfo = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "30dp",
                "id": "imgInfo",
                "isVisible": true,
                "skin": "slImage",
                "src": "info.png",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxInfo.add(imgInfo);
            flxHeader.add(customHeader, flxInfo);
            var flxContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "150dp",
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
            var flxSearchDummy = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "35dp",
                "id": "flxSearchDummy",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "5%",
                "isModalContainer": false,
                "right": "5%",
                "skin": "sknFlxIWDummyTxtffffff1PxRadius",
                "top": "0dp",
                "width": "90%",
                "zIndex": 10
            }, {}, {});
            flxSearchDummy.setDefaultUnit(kony.flex.DP);
            var imgSearchIcon = new kony.ui.Image2({
                "centerY": "50%",
                "height": "15dp",
                "id": "imgSearchIcon",
                "isVisible": true,
                "left": "15dp",
                "skin": "slImage",
                "src": "search.png",
                "width": "15dp",
                "zIndex": 10
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSearchPlaceHolder = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSearchPlaceHolder",
                "isVisible": true,
                "left": "2%",
                "skin": "sknMMGreyLabel",
                "text": kony.i18n.getLocalizedString("i18n.wealth.searchStocksEtc"),
                "textStyle": {},
                "top": "0dp",
                "width": "85%",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxSearchDummy.add(imgSearchIcon, lblSearchPlaceHolder);
            flxSearchMain.add(flxSearchDummy);
            flxSearch.add(flxSearchMain);
            var flxOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxOptions",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "15dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxOptions.setDefaultUnit(kony.flex.DP);
            var flxHoldings = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxHoldings",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "25%",
                "zIndex": 1
            }, {}, {});
            flxHoldings.setDefaultUnit(kony.flex.DP);
            var imgHoldings = new kony.ui.Image2({
                "centerX": "50%",
                "height": "32dp",
                "id": "imgHoldings",
                "isVisible": true,
                "skin": "slImage",
                "src": "holdings.png",
                "top": "1dp",
                "width": "32dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblHoldings = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblHoldings",
                "isVisible": true,
                "skin": "sknLblffffff22px",
                "text": kony.i18n.getLocalizedString("i18n.wealth.holdings"),
                "textStyle": {},
                "top": "6dp",
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
            flxHoldings.add(imgHoldings, lblHoldings);
            var flxTransactions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxTransactions",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "25%",
                "zIndex": 1
            }, {}, {});
            flxTransactions.setDefaultUnit(kony.flex.DP);
            var imgTransactions = new kony.ui.Image2({
                "centerX": "50%",
                "height": "32dp",
                "id": "imgTransactions",
                "isVisible": true,
                "skin": "slImage",
                "src": "transactions.png",
                "top": "1dp",
                "width": "32dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblTransactions = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblTransactions",
                "isVisible": true,
                "skin": "sknLblffffff22px",
                "text": kony.i18n.getLocalizedString("i18n.wealth.transactions"),
                "textStyle": {},
                "top": "6dp",
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
            flxTransactions.add(imgTransactions, lblTransactions);
            var flxOrders = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxOrders",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "25%",
                "zIndex": 1
            }, {}, {});
            flxOrders.setDefaultUnit(kony.flex.DP);
            var imgOrders = new kony.ui.Image2({
                "centerX": "50%",
                "height": "32dp",
                "id": "imgOrders",
                "isVisible": true,
                "skin": "slImage",
                "src": "orders.png",
                "top": "1dp",
                "width": "32dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblOrders = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblOrders",
                "isVisible": true,
                "skin": "sknLblffffff22px",
                "text": kony.i18n.getLocalizedString("i18n.wealth.orders"),
                "textStyle": {},
                "top": "6dp",
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
            flxOrders.add(imgOrders, lblOrders);
            var flxMore = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxMore",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "25%",
                "zIndex": 1
            }, {}, {});
            flxMore.setDefaultUnit(kony.flex.DP);
            var imgMore = new kony.ui.Image2({
                "centerX": "50%",
                "height": "32dp",
                "id": "imgMore",
                "isVisible": true,
                "skin": "slImage",
                "src": "more_wealth.png",
                "top": "1dp",
                "width": "32dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblMore = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblMore",
                "isVisible": true,
                "skin": "sknLblffffff22px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.more"),
                "textStyle": {},
                "top": "6dp",
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
            flxMore.add(imgMore, lblMore);
            flxOptions.add(flxHoldings, flxTransactions, flxOrders, flxMore);
            flxContainer.add(flxSearch, flxOptions);
            var flxPortfolioDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxPortfolioDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxf6f6f6Bcg",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxPortfolioDetails.setDefaultUnit(kony.flex.DP);
            var lblHeader = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblHeader",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242SectionHeader",
                "text": kony.i18n.getLocalizedString("i18n.wealth.portfolioDetails"),
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
            var flxSeperator1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxSeperator1.setDefaultUnit(kony.flex.DP);
            flxSeperator1.add();
            flxPortfolioDetails.add(lblHeader, flxSeperator1);
            var flxPortfolioValues = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": 150,
                "id": "flxPortfolioValues",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxPortfolioValues.setDefaultUnit(kony.flex.DP);
            var lblTotalValue = new kony.ui.Label({
                "id": "lblTotalValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("i18n.wealth.totalValue"),
                "textStyle": {},
                "top": "15dp",
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
            var lblTotalVal = new kony.ui.Label({
                "id": "lblTotalVal",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknIWLblSSPSemibold30px",
                "text": "$38,300.00",
                "textStyle": {},
                "top": "2dp",
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
            var flxPL = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxPL",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 6
            }, {}, {});
            flxPL.setDefaultUnit(kony.flex.DP);
            var flxUnrealizedPL = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxUnrealizedPL",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "50%",
                "zIndex": 6
            }, {}, {});
            flxUnrealizedPL.setDefaultUnit(kony.flex.DP);
            var lblUnrealizedPL = new kony.ui.Label({
                "id": "lblUnrealizedPL",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("i18n.wealth.unrealizedPL\:"),
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
            var lblUnrealizedPLValue = new kony.ui.Label({
                "id": "lblUnrealizedPLValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknIWlbl2F8523SemiBold15px",
                "text": "+ $672.58 (+14.42%)",
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
            flxUnrealizedPL.add(lblUnrealizedPL, lblUnrealizedPLValue);
            var flxTodayPL = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxTodayPL",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "50%",
                "zIndex": 6
            }, {}, {});
            flxTodayPL.setDefaultUnit(kony.flex.DP);
            var lblTodayPL = new kony.ui.Label({
                "id": "lblTodayPL",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("i18n.wealth.todaysPL\:"),
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
            var lblTodayPLValue = new kony.ui.Label({
                "id": "lblTodayPLValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknIWlbl2F8523SemiBold15px",
                "text": "+ $192.62 (+0.90%)",
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
            flxTodayPL.add(lblTodayPL, lblTodayPLValue);
            flxPL.add(flxUnrealizedPL, flxTodayPL);
            flxPortfolioValues.add(lblTotalValue, lblTotalVal, flxPL);
            var flxPortfolioLineChart = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "350dp",
                "id": "flxPortfolioLineChart",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxPortfolioLineChart.setDefaultUnit(kony.flex.DP);
            var investmentLineChart = new com.wealth.common.investmentLineChart({
                "height": "100%",
                "id": "investmentLineChart",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "investmentLineChart": {
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
            investmentLineChart.currencySymbol = "$";
            investmentLineChart.currentFilter = "1Y";
            investmentLineChart.onFilterChanged = controller.AS_UWI_bccc49b2a9d74f1780bc2a238e9f42fd;
            flxPortfolioLineChart.add(investmentLineChart);
            var flxAssetsTab = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxAssetsTab",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBfF6F6F6",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAssetsTab.setDefaultUnit(kony.flex.DP);
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
            var lblAssets = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAssets",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242SectionHeader",
                "text": kony.i18n.getLocalizedString("i18n.wealth.assetAllocation"),
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
            var flxSeperatorTwo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorTwo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxSeperatorTwo.setDefaultUnit(kony.flex.DP);
            flxSeperatorTwo.add();
            flxAssetsTab.add(flxShadowBox, lblAssets, flxSeperatorTwo);
            var flxAssetsSummary = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxAssetsSummary",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAssetsSummary.setDefaultUnit(kony.flex.DP);
            var segAssetSummary = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblAssetCost": "Label",
                    "lblAssetDet": "Label"
                }],
                "groupCells": false,
                "id": "segAssetSummary",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxAssetClass",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxAssestAcc": "flxAssestAcc",
                    "flxAssetClass": "flxAssetClass",
                    "flxProgress": "flxProgress",
                    "flxProgressBar": "flxProgressBar",
                    "flxSpent": "flxSpent",
                    "flxTarget": "flxTarget",
                    "lblAssetCost": "lblAssetCost",
                    "lblAssetDet": "lblAssetDet"
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
                "showProgressIndicator": false
            });
            var flxSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeperator.setDefaultUnit(kony.flex.DP);
            flxSeperator.add();
            flxAssetsSummary.add(segAssetSummary, flxSeperator);
            var flxCashAccountsTab = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxCashAccountsTab",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBfF6F6F6",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCashAccountsTab.setDefaultUnit(kony.flex.DP);
            var flxShadBox = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "9px",
                "id": "flxShadBox",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadBox.setDefaultUnit(kony.flex.DP);
            var flxRect = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxRect",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflx424242grad",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRect.setDefaultUnit(kony.flex.DP);
            flxRect.add();
            flxShadBox.add(flxRect);
            var lblCashAccounts = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCashAccounts",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242SectionHeader",
                "text": kony.i18n.getLocalizedString("i18n.wealth.cashAccounts"),
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
            var flxSeperatorThree = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorThree",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxSeperatorThree.setDefaultUnit(kony.flex.DP);
            flxSeperatorThree.add();
            flxCashAccountsTab.add(flxShadBox, lblCashAccounts, flxSeperatorThree);
            var flxCashAccountsDet = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxCashAccountsDet",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCashAccountsDet.setDefaultUnit(kony.flex.DP);
            var flxCashBal = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxCashBal",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCashBal.setDefaultUnit(kony.flex.DP);
            var lblCashBal = new kony.ui.Label({
                "id": "lblCashBal",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("i18n.wealth.cashBalance"),
                "textStyle": {},
                "top": "12dp",
                "width": "256dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxCashBal.add(lblCashBal);
            var flxCashBalanceVal = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxCashBalanceVal",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCashBalanceVal.setDefaultUnit(kony.flex.DP);
            var lblCashBalanceVal = new kony.ui.Label({
                "id": "lblCashBalanceVal",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPSemiBold42px",
                "text": "$18,450.00",
                "textStyle": {},
                "top": "0dp",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxCashBalanceVal.add(lblCashBalanceVal);
            var flxCashSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxCashSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "skin": "sknFlxBge3e3e3Tab",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxCashSeparator.setDefaultUnit(kony.flex.DP);
            flxCashSeparator.add();
            var flxCashSummary = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxCashSummary",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCashSummary.setDefaultUnit(kony.flex.DP);
            var segCashSummary = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblCashAcc": "CHF Cash",
                    "lblCashAccBal": "CHF 8,500.00"
                }, {
                    "lblCashAcc": "USD Cash",
                    "lblCashAccBal": "$6,040.00"
                }, {
                    "lblCashAcc": "EUR Cash",
                    "lblCashAccBal": "€2,000.00"
                }, {
                    "lblCashAcc": "GBP Cash",
                    "lblCashAccBal": "£1,040.00"
                }],
                "groupCells": false,
                "id": "segCashSummary",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxCashBalSummary",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxCashBalSummary": "flxCashBalSummary",
                    "flxCashSumm": "flxCashSumm",
                    "flxSeparator": "flxSeparator",
                    "lblCashAcc": "lblCashAcc",
                    "lblCashAccBal": "lblCashAccBal"
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
            flxCashSummary.add(segCashSummary);
            flxCashAccountsDet.add(flxCashBal, flxCashBalanceVal, flxCashSeparator, flxCashSummary);
            flxMainContainer.add(flxHeader, flxContainer, flxPortfolioDetails, flxPortfolioValues, flxPortfolioLineChart, flxAssetsTab, flxAssetsSummary, flxCashAccountsTab, flxCashAccountsDet);
            var flxBtns = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "100dp",
                "id": "flxBtns",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBtns.setDefaultUnit(kony.flex.DP);
            var flxCashBtns = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100dp",
                "id": "flxCashBtns",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%"
            }, {}, {});
            flxCashBtns.setDefaultUnit(kony.flex.DP);
            var btnTransferCash = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "50dp",
                "id": "btnTransferCash",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknIWBtnBgFFFFFFBorder1px003E7540px",
                "text": kony.i18n.getLocalizedString("i18n.wealth.transferCash"),
                "width": "42%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var btnConvertCurrency = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "50dp",
                "id": "btnConvertCurrency",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknIWBtnBgFFFFFFBorder1px003E7540px",
                "text": kony.i18n.getLocalizedString("i18n.wealth.convertCurrency"),
                "width": "42%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            flxCashBtns.add(btnTransferCash, btnConvertCurrency);
            flxBtns.add(flxCashBtns);
            var flxAdditionalOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxAdditionalOptions",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx000000Op50",
                "top": "0dp",
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
            var flxPerformance = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "58dp",
                "id": "flxPerformance",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxEBEBEB",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPerformance.setDefaultUnit(kony.flex.DP);
            var lblPerformance = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblPerformance",
                "isVisible": true,
                "skin": "sknlbl007afsfpdr",
                "text": kony.i18n.getLocalizedString("i18n.wealth.performance"),
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
            flxPerformance.add(lblPerformance, lblSeparator);
            var flxAccounts = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "58dp",
                "id": "flxAccounts",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxEBEBEB",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAccounts.setDefaultUnit(kony.flex.DP);
            var lblAccounts = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "49%",
                "id": "lblAccounts",
                "isVisible": true,
                "skin": "sknlbl007afsfpdr",
                "text": kony.i18n.getLocalizedString("i18n.wealth.accountsActivity"),
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
            flxAccounts.add(lblAccounts, lblSep);
            var flxReport = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "58dp",
                "id": "flxReport",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxEBEBEB",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxReport.setDefaultUnit(kony.flex.DP);
            var lblReport = new kony.ui.Label({
                "centerX": "50.04%",
                "centerY": "50.00%",
                "id": "lblReport",
                "isVisible": true,
                "skin": "sknlbl007afsfpdr",
                "text": kony.i18n.getLocalizedString("i18n.wealth.report"),
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
            flxReport.add(lblReport);
            flxPerformAdditionalOptions.add(flxPerformance, flxAccounts, flxReport);
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
                "skin": "sknLbl007affsfpdbold",
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
            flxAdditionalOptions.add(flxPerformAdditionalOptions, flxCancelOption);
            this.add(flxMainContainer, flxBtns, flxAdditionalOptions);
        };
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
            "addWidgets": addWidgetsfrmPortfolioDetails,
            "bounces": true,
            "enableScrolling": true,
            "enabledForIdleTimeout": true,
            "id": "frmPortfolioDetails",
            "init": controller.AS_Form_jce375fb40fb49598fccff815487be49,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_a8032eebea544f21bfe89e829876893e,
            "preShow": function(eventobject) {
                controller.AS_Form_a6be25fb9c3f4a569d08d92dd0d44e1e(eventobject);
            },
            "skin": "sknFrmTitleBar",
            "title": "Investment...2365"
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
                "hidesBackButton": false,
                "prompt": "",
                "leftItemsSupplementBackButton": true,
                "leftBarButtonItems": [],
                "rightBarButtonItems": [],
                "backBarButtonItem": BBarBtnItem0
            },
            "titleBarSkin": "sknTitle1a98ffffffff30px"
        }]
    }
});