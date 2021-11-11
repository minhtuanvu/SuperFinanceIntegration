define("WealthModule/frmInstrumentOrder", function() {
    return function(controller) {
        function addWidgetsfrmInstrumentOrder() {
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
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "lblLocateUs": {
                        "centerX": "viz.val_cleared",
                        "text": kony.i18n.getLocalizedString("i18n.wealth.buy"),
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
            var flxContentWrapper = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "100%",
                "id": "flxContentWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxContentWrapper.setDefaultUnit(kony.flex.DP);
            var flxMainContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "84%",
                "horizontalScrollIndicator": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknFlxScrlffffff",
                "top": "56dp",
                "verticalScrollIndicator": true,
                "width": "100%"
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var lblError = new kony.ui.Label({
                "id": "lblError",
                "isVisible": false,
                "left": "30dp",
                "skin": "sknlblee0005SSPReg15px",
                "text": "Invalid Input ! FROM and TO currency cannot be same",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxInstrumentDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxInstrumentDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "19dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "3dp",
                "width": "90%",
                "zIndex": 10
            }, {}, {});
            flxInstrumentDetails.setDefaultUnit(kony.flex.DP);
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
                "left": "0dp",
                "skin": "sknLbl00000018px",
                "text": "Amazon.com Inc.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxInstrumentName.add(imgInstrument, lblInstrumentName);
            var flxInstrumentInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxInstrumentInfo",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "8dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxInstrumentInfo.setDefaultUnit(kony.flex.DP);
            var flxCurrentPrice = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxCurrentPrice",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "65%",
                "zIndex": 1
            }, {}, {});
            flxCurrentPrice.setDefaultUnit(kony.flex.DP);
            var lblCurrentPrice = new kony.ui.Label({
                "id": "lblCurrentPrice",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknMMLeftLabels",
                "text": kony.i18n.getLocalizedString("i18n.wealth.currentPrice"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
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
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxInstrumentRefresh.setDefaultUnit(kony.flex.DP);
            var lblInstrumentValueTime = new kony.ui.Label({
                "id": "lblInstrumentValueTime",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl727272SSPR15px",
                "text": "As of 12:30 PM CEST Oct 22",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "2dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgRefresh = new kony.ui.Image2({
                "bottom": "10dp",
                "height": "30dp",
                "id": "imgRefresh",
                "isVisible": true,
                "left": "-15dp",
                "skin": "slImage",
                "src": "refreshblue.png",
                "top": "-3dp",
                "width": "50dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxInstrumentRefresh.add(lblInstrumentValueTime, imgRefresh);
            flxCurrentPrice.add(lblCurrentPrice, flxInstrumentRefresh);
            var flxInstrumentPrice = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxInstrumentPrice",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "35%",
                "zIndex": 1
            }, {}, {});
            flxInstrumentPrice.setDefaultUnit(kony.flex.DP);
            var lblCurrentValue = new kony.ui.Label({
                "id": "lblCurrentValue",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl424242SSPSemiBold26px",
                "text": "$2,399.44",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPriceMovement = new kony.ui.Label({
                "id": "lblPriceMovement",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknIbl2f8523SSPsb45px",
                "text": "+36.61 (+1.55%)",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "2dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxInstrumentPrice.add(lblCurrentValue, lblPriceMovement);
            flxInstrumentInfo.add(flxCurrentPrice, flxInstrumentPrice);
            flxInstrumentDetails.add(flxInstrumentName, flxInstrumentInfo);
            var flxSeparator0 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator0",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3Shadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxSeparator0.setDefaultUnit(kony.flex.DP);
            flxSeparator0.add();
            var flxOrderType = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknFlxf9f9f9",
                "height": "50dp",
                "id": "flxOrderType",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxOrderType.setDefaultUnit(kony.flex.DP);
            var lblOrderType = new kony.ui.Label({
                "id": "lblOrderType",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknMMLeftLabels",
                "text": kony.i18n.getLocalizedString("i18n.wealth.orderType"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblOrderTypeValue = new kony.ui.Label({
                "id": "lblOrderTypeValue",
                "isVisible": true,
                "right": "50dp",
                "skin": "sknLbl4176A4SSPReg26px",
                "text": "Market",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": "45%",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxToImg = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxToImg",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "11%",
                "zIndex": 2
            }, {}, {});
            flxToImg.setDefaultUnit(kony.flex.DP);
            var imgArrow2 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgArrow2",
                "isVisible": true,
                "right": "20dp",
                "skin": "slImage",
                "src": "chevron.png",
                "top": "0dp",
                "width": "15dp",
                "zIndex": 2
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxToImg.add(imgArrow2);
            flxOrderType.add(lblOrderType, lblOrderTypeValue, flxToImg);
            var flxSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "7dp",
                "width": "90%",
                "zIndex": 10
            }, {}, {});
            flxSeparator.setDefaultUnit(kony.flex.DP);
            flxSeparator.add();
            var flxSeperator1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3Shadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxSeperator1.setDefaultUnit(kony.flex.DP);
            flxSeperator1.add();
            var flxValidity = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknFlxf9f9f9",
                "height": "50dp",
                "id": "flxValidity",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxValidity.setDefaultUnit(kony.flex.DP);
            var lblValidity = new kony.ui.Label({
                "id": "lblValidity",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknMMLeftLabels",
                "text": kony.i18n.getLocalizedString("i18n.wealth.validity"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblValidityValue = new kony.ui.Label({
                "id": "lblValidityValue",
                "isVisible": true,
                "right": "50dp",
                "skin": "sknLbl4176A4SSPReg26px",
                "text": "Day Order",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": "50%",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxFromAmountImage = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxFromAmountImage",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "11%",
                "zIndex": 2
            }, {}, {});
            flxFromAmountImage.setDefaultUnit(kony.flex.DP);
            var imgArrow1 = new kony.ui.Image2({
                "centerY": "50.00%",
                "height": "20dp",
                "id": "imgArrow1",
                "isVisible": true,
                "right": "20dp",
                "skin": "slImage",
                "src": "chevron.png",
                "top": "0dp",
                "width": "15dp",
                "zIndex": 2
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFromAmountImage.add(imgArrow1);
            flxValidity.add(lblValidity, lblValidityValue, flxFromAmountImage);
            var flxSeparator2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3Shadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxSeparator2.setDefaultUnit(kony.flex.DP);
            flxSeparator2.add();
            var flxSellAllToggle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknFlxf9f9f9",
                "height": "50dp",
                "id": "flxSellAllToggle",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSellAllToggle.setDefaultUnit(kony.flex.DP);
            var flxSellHorizontal = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "flxSellHorizontal",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxSellHorizontal.setDefaultUnit(kony.flex.DP);
            var lblSellAll = new kony.ui.Label({
                "id": "lblSellAll",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknMMLeftLabels",
                "text": "Sell All",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSellQuantity = new kony.ui.Label({
                "id": "lblSellQuantity",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLbl424242SSPSemiBold26px",
                "text": "(24)",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxSellHorizontal.add(lblSellAll, lblSellQuantity);
            var flxToggle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxToggle",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "20dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "11%",
                "zIndex": 2
            }, {}, {});
            flxToggle.setDefaultUnit(kony.flex.DP);
            var imgToggle = new kony.ui.Image2({
                "centerY": "50.00%",
                "height": "40dp",
                "id": "imgToggle",
                "isVisible": true,
                "right": 0,
                "skin": "slImage",
                "src": "checkboxempty.png",
                "top": "0dp",
                "width": "40dp",
                "zIndex": 2
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxToggle.add(imgToggle);
            flxSellAllToggle.add(flxSellHorizontal, flxToggle);
            var CopyflxSeparator0c38d1998b9a840 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxSeparator0c38d1998b9a840",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3Shadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            CopyflxSeparator0c38d1998b9a840.setDefaultUnit(kony.flex.DP);
            CopyflxSeparator0c38d1998b9a840.add();
            var flxFieldsWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxFieldsWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "90%"
            }, {}, {});
            flxFieldsWrapper.setDefaultUnit(kony.flex.DP);
            var lblQuantityError = new kony.ui.Label({
                "id": "lblQuantityError",
                "isVisible": false,
                "left": "0dp",
                "skin": "sknlblee0005SSPReg15px",
                "text": "Error",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxFieldsRow1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxFieldsRow1",
                "isVisible": true,
                "layoutType": kony.flex.RESPONSIVE_GRID,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "responsiveConfig": {
                    "offset": {
                        "landscape": 0,
                        "portrait": 0
                    },
                    "span": {
                        "landscape": 6,
                        "portrait": 12
                    }
                }
            }, {}, {});
            flxFieldsRow1.setDefaultUnit(kony.flex.DP);
            var flxQuantityField = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxQuantityField",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "48%",
                "responsiveConfig": {
                    "offset": {
                        "landscape": 0,
                        "portrait": 0
                    },
                    "span": {
                        "landscape": 6,
                        "portrait": 6
                    }
                }
            }, {}, {});
            flxQuantityField.setDefaultUnit(kony.flex.DP);
            var lblAmountTitle = new kony.ui.Label({
                "id": "lblAmountTitle",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknlbl727272SSP17px",
                "text": kony.i18n.getLocalizedString("i18n.wealth.enterQuantity"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxQuantityWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxQuantityWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknflxe3e3e3border",
                "top": "5dp",
                "width": "95%",
                "zIndex": 1
            }, {}, {});
            flxQuantityWrapper.setDefaultUnit(kony.flex.DP);
            var lblDollar = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDollar",
                "isVisible": false,
                "left": "10dp",
                "skin": "sknLbl4a4a4aSSP42px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.currencySymbol"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblAmount = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAmount",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknlbl424242ssp40px",
                "text": "0.00",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgClear = new kony.ui.Image2({
                "height": "25dp",
                "id": "imgClear",
                "isVisible": false,
                "right": "20dp",
                "skin": "slImage",
                "src": "clearcircle.png",
                "top": "14dp",
                "width": "25dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxQuantityWrapper.add(lblDollar, lblAmount, imgClear);
            flxQuantityField.add(lblAmountTitle, flxQuantityWrapper);
            var flxLimitPrice = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxLimitPrice",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": 20,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "46%",
                "responsiveConfig": {
                    "offset": {
                        "landscape": 0,
                        "portrait": 0
                    },
                    "span": {
                        "landscape": 6,
                        "portrait": 6
                    }
                }
            }, {}, {});
            flxLimitPrice.setDefaultUnit(kony.flex.DP);
            var lblLimitPrice = new kony.ui.Label({
                "id": "lblLimitPrice",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknlbl727272SSP17px",
                "text": kony.i18n.getLocalizedString("i18n.wealth.limitPriceWoColon"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxLimitPriceWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxLimitPriceWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "right": "10dp",
                "skin": "sknflxe3e3e3border",
                "top": "5dp",
                "width": "98%",
                "zIndex": 1
            }, {}, {});
            flxLimitPriceWrapper.setDefaultUnit(kony.flex.DP);
            var lblLimit = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblLimit",
                "isVisible": false,
                "left": "10dp",
                "skin": "sknLbl4a4a4aSSP42px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.currencySymbol"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblLimitPriceField = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblLimitPriceField",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknlbl424242ssp40px",
                "text": "0.00",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgClear1 = new kony.ui.Image2({
                "height": "25dp",
                "id": "imgClear1",
                "isVisible": false,
                "right": "20dp",
                "skin": "slImage",
                "src": "clearcircle.png",
                "top": "14dp",
                "width": "25dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxLimitPriceWrapper.add(lblLimit, lblLimitPriceField, imgClear1);
            flxLimitPrice.add(lblLimitPrice, flxLimitPriceWrapper);
            var flxStopPrice = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxStopPrice",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "48%",
                "responsiveConfig": {
                    "offset": {
                        "landscape": 0,
                        "portrait": 0
                    },
                    "span": {
                        "landscape": 6,
                        "portrait": 6
                    }
                }
            }, {}, {});
            flxStopPrice.setDefaultUnit(kony.flex.DP);
            var lblStopPrice = new kony.ui.Label({
                "id": "lblStopPrice",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknlbl727272SSP17px",
                "text": "Stop Price:",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxStopPriceWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxStopPriceWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknflxe3e3e3border",
                "top": "5dp",
                "width": "95%",
                "zIndex": 1
            }, {}, {});
            flxStopPriceWrapper.setDefaultUnit(kony.flex.DP);
            var lblStop = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblStop",
                "isVisible": false,
                "left": "10dp",
                "skin": "sknLbl4a4a4aSSP42px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.currencySymbol"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblStopPriceField = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblStopPriceField",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknlbl424242ssp40px",
                "text": "0.00",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgClear2 = new kony.ui.Image2({
                "height": "25dp",
                "id": "imgClear2",
                "isVisible": false,
                "right": "20dp",
                "skin": "slImage",
                "src": "clearcircle.png",
                "top": "14dp",
                "width": "25dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxStopPriceWrapper.add(lblStop, lblStopPriceField, imgClear2);
            flxStopPrice.add(lblStopPrice, flxStopPriceWrapper);
            flxFieldsRow1.add(flxQuantityField, flxLimitPrice, flxStopPrice);
            flxFieldsWrapper.add(lblQuantityError, flxFieldsRow1);
            var flxNote = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxNote",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxNote.setDefaultUnit(kony.flex.DP);
            var lblNote = new kony.ui.Label({
                "id": "lblNote",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl727272SSP17px",
                "text": kony.i18n.getLocalizedString("i18n.wealth.estimatedTotal"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblEstimatedValue = new kony.ui.Label({
                "id": "lblEstimatedValue",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLbl424242SSPSemiBold26px",
                "text": "$2345.67",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxNote.add(lblNote, lblEstimatedValue);
            flxMainContainer.add(lblError, flxInstrumentDetails, flxSeparator0, flxOrderType, flxSeparator, flxSeperator1, flxValidity, flxSeparator2, flxSellAllToggle, CopyflxSeparator0c38d1998b9a840, flxFieldsWrapper, flxNote);
            var flxKeypad = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "40%",
                "id": "flxKeypad",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxF5F6FB",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxKeypad.setDefaultUnit(kony.flex.DP);
            var flxShadowTwo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxShadowTwo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxShadowTwo.setDefaultUnit(kony.flex.DP);
            flxShadowTwo.add();
            var flxDone = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "15%",
                "id": "flxDone",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDone.setDefaultUnit(kony.flex.DP);
            var lblDone = new kony.ui.Label({
                "id": "lblDone",
                "isVisible": true,
                "right": "18dp",
                "skin": "sknLbl007aFFSSP",
                "text": "Done",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxDone.add(lblDone);
            var keypad = new com.kmb.common.keypad({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "85%",
                "id": "keypad",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "btnEight": {
                        "text": kony.i18n.getLocalizedString("kony.mb.CM.eight")
                    },
                    "btnFive": {
                        "text": kony.i18n.getLocalizedString("kony.mb.CM.five")
                    },
                    "btnFour": {
                        "text": kony.i18n.getLocalizedString("kony.mb.CM.four")
                    },
                    "btnNine": {
                        "text": kony.i18n.getLocalizedString("kony.mb.CM.nine")
                    },
                    "btnOne": {
                        "text": kony.i18n.getLocalizedString("kony.mb.CM.one")
                    },
                    "btnSeven": {
                        "text": kony.i18n.getLocalizedString("kony.mb.CM.seven")
                    },
                    "btnSix": {
                        "text": kony.i18n.getLocalizedString("kony.mb.CM.six")
                    },
                    "btnThree": {
                        "text": kony.i18n.getLocalizedString("kony.mb.CM.three")
                    },
                    "btnTwo": {
                        "text": kony.i18n.getLocalizedString("kony.mb.CM.two")
                    },
                    "btnZero": {
                        "text": kony.i18n.getLocalizedString("kony.mb.CM.zero")
                    },
                    "imgClear": {
                        "src": "cancelkeypad.png"
                    },
                    "imgClearKeypad": {
                        "centerY": "45.24%",
                        "right": "0.00%",
                        "src": "transparentbox.png"
                    },
                    "keypad": {
                        "height": "85%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            keypad.btnEight.onClick = controller.AS_Button_f9c508702b034e8da0a8e843a5c4cdeb;
            keypad.btnFive.onClick = controller.AS_Button_d94b95781e8f43df80cfc9d2004bf88f;
            keypad.btnFour.onClick = controller.AS_Button_c26b6f6589df4c42bd7483139dfda0d0;
            keypad.btnNine.onClick = controller.AS_Button_bee339f0dd66489da193354b618fab95;
            keypad.btnOne.onClick = controller.AS_Button_be0a4d4326bf4c529691829aefba8f7d;
            keypad.btnSeven.onClick = controller.AS_Button_a9f0b69f28fd4668bce35cd46b300227;
            keypad.btnSix.onClick = controller.AS_Button_i0ead3f6bdc444e8989fb54993990ff7;
            keypad.btnThree.onClick = controller.AS_Button_cc500f1bc2a3449981c8a30197ff16d8;
            keypad.btnTwo.onClick = controller.AS_Button_hed4af78ee5e460da2e6c196001b9c78;
            keypad.btnZero.onClick = controller.AS_Button_ed4568d10abc42ff8d6341015d54a231;
            keypad.imgClearKeypad.onTouchEnd = controller.AS_Image_e0db88dfca654f7c8036aa8781c0b6c7;
            var btnDot = new kony.ui.Button({
                "bottom": "0dp",
                "height": "24%",
                "id": "btnDot",
                "isVisible": false,
                "left": "0dp",
                "onClick": controller.AS_Button_i7b2bbdfab4744ef917cab71739b92df,
                "skin": "sknBtnKeybad",
                "text": ".",
                "width": "33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxKeypad.add(flxShadowTwo, flxDone, keypad, btnDot);
            flxContentWrapper.add(flxMainContainer, flxKeypad);
            var flxButton = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "1%",
                "clipBounds": true,
                "height": "50dp",
                "id": "flxButton",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxButton.setDefaultUnit(kony.flex.DP);
            var btnContinue = new kony.ui.Button({
                "bottom": "5dp",
                "centerX": "50.00%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnContinue",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtnE2E9F0Rounded",
                "text": kony.i18n.getLocalizedString("kony.tab.common.Continue"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxButton.add(btnContinue);
            this.add(flxHeader, flxContentWrapper, flxButton);
        };
        return [{
            "addWidgets": addWidgetsfrmInstrumentOrder,
            "enabledForIdleTimeout": true,
            "id": "frmInstrumentOrder",
            "init": controller.AS_Form_b095621f3eb54793b9b2300af9157c65,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_e56c64c5156944f6af9b56fdc68e374b,
            "preShow": function(eventobject) {
                controller.AS_Form_a33f704bec384c3896b482da8315e95c(eventobject);
            },
            "skin": "sknFrmf9f9f9",
            "title": kony.i18n.getLocalizedString("i18n.wealth.buy")
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