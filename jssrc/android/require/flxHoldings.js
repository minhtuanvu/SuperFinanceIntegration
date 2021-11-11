define("flxHoldings", function() {
    return function(controller) {
        var flxHoldings = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "140dp",
            "id": "flxHoldings",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxHoldings.setDefaultUnit(kony.flex.DP);
        var flxHeading = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "flxHeading",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxHeading.setDefaultUnit(kony.flex.DP);
        var imgLogo = new kony.ui.Image2({
            "centerY": "50%",
            "height": "24dp",
            "id": "imgLogo",
            "isVisible": true,
            "left": "20dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "1dp",
            "width": "24dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblHoldings = new kony.ui.Label({
            "centerY": "50%",
            "height": "23dp",
            "id": "lblHoldings",
            "isVisible": true,
            "left": "9dp",
            "skin": "sknLbl424242SSPSemiBold26px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "9dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxMore = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "flxMore",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "62%",
            "isModalContainer": false,
            "right": "20dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "25dp",
            "zIndex": 1
        }, {}, {});
        flxMore.setDefaultUnit(kony.flex.DP);
        var imgMore = new kony.ui.Image2({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgMore",
            "isVisible": true,
            "left": 0,
            "skin": "slImage",
            "src": "more.png",
            "top": 0,
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxMore.add(imgMore);
        flxHeading.add(imgLogo, lblHoldings, flxMore);
        var flxDetail = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20dp",
            "id": "flxDetail",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxDetail.setDefaultUnit(kony.flex.DP);
        var lblInstrumentDet = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblInstrumentDet",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl727272SSPLight22px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "9px",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 6
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxDetail.add(lblInstrumentDet);
        var flxHoldingsPriceDetails = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "flxHoldingsPriceDetails",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%"
        }, {}, {});
        flxHoldingsPriceDetails.setDefaultUnit(kony.flex.DP);
        var flxLatestPrice = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "20dp",
            "id": "flxLatestPrice",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "50%"
        }, {}, {});
        flxLatestPrice.setDefaultUnit(kony.flex.DP);
        var lblLatestPrice = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblLatestPrice",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknlbl727272SSP93pr",
            "text": kony.i18n.getLocalizedString("i18n.wealth.latestPrice"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 6
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblLatestPriceValue = new kony.ui.Label({
            "centerY": "50.00%",
            "id": "lblLatestPriceValue",
            "isVisible": true,
            "left": "10dp",
            "skin": "sknLbl424242SSPReg26px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "2px",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxLatestPrice.add(lblLatestPrice, lblLatestPriceValue);
        var flxMarketValue = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "20dp",
            "id": "flxMarketValue",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "50%"
        }, {}, {});
        flxMarketValue.setDefaultUnit(kony.flex.DP);
        var lblMarketValueDetail = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblMarketValueDetail",
            "isVisible": true,
            "right": "20dp",
            "skin": "sknLbl424242SSPReg26px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 6
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblMarketValue = new kony.ui.Label({
            "centerY": "50.60%",
            "id": "lblMarketValue",
            "isVisible": true,
            "right": "5dp",
            "skin": "sknlbl727272SSP93pr",
            "text": kony.i18n.getLocalizedString("i18n.wealth.mktValue"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 6
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxMarketValue.add(lblMarketValueDetail, lblMarketValue);
        flxHoldingsPriceDetails.add(flxLatestPrice, flxMarketValue);
        var flxHoldingDetails = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "35dp",
            "id": "flxHoldingDetails",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxHoldingDetails.setDefaultUnit(kony.flex.DP);
        var flxQtyAvg = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "30%",
            "clipBounds": true,
            "height": "20dp",
            "id": "flxQtyAvg",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "70%"
        }, {}, {});
        flxQtyAvg.setDefaultUnit(kony.flex.DP);
        var flxQty = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxQty",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "50%"
        }, {}, {});
        flxQty.setDefaultUnit(kony.flex.DP);
        var lblQuantity = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblQuantity",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknlbl727272SSP93pr",
            "text": kony.i18n.getLocalizedString("i18n.wealth.qty"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 6
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblQuantityValue = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblQuantityValue",
            "isVisible": true,
            "left": "5dp",
            "skin": "sknLbl424242SSPReg26px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 6
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxQty.add(lblQuantity, lblQuantityValue);
        var flxAvg = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20dp",
            "id": "flxAvg",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "45%"
        }, {}, {});
        flxAvg.setDefaultUnit(kony.flex.DP);
        var lblAvgCostValue = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblAvgCostValue",
            "isVisible": true,
            "left": "5dp",
            "skin": "sknLbl424242SSPReg26px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 6
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblAvgCost = new kony.ui.Label({
            "centerY": "49.80%",
            "id": "lblAvgCost",
            "isVisible": true,
            "skin": "sknlbl727272SSP93pr",
            "text": kony.i18n.getLocalizedString("i18n.wealth.avgCost"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 6
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxAvg.add(lblAvgCostValue, lblAvgCost);
        flxQtyAvg.add(flxQty, flxAvg);
        var flxPL = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "30%",
            "clipBounds": true,
            "height": "20dp",
            "id": "flxPL",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "30%"
        }, {}, {});
        flxPL.setDefaultUnit(kony.flex.DP);
        var lblPLValue = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblPLValue",
            "isVisible": true,
            "right": "20dp",
            "skin": "sknIbl2f8523SSPsb45px",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblPL = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblPL",
            "isVisible": true,
            "right": "5dp",
            "skin": "sknlbl727272SSP93pr",
            "text": kony.i18n.getLocalizedString("i18n.wealth.pl"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 6
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxPL.add(lblPLValue, lblPL);
        flxHoldingDetails.add(flxQtyAvg, flxPL);
        var flxBottomBorder = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "2dp",
            "id": "flxBottomBorder",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknflxe3e3e3border",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxBottomBorder.setDefaultUnit(kony.flex.DP);
        flxBottomBorder.add();
        flxHoldings.add(flxHeading, flxDetail, flxHoldingsPriceDetails, flxHoldingDetails, flxBottomBorder);
        return flxHoldings;
    }
})