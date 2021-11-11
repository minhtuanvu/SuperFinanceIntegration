define("WealthModule/frmOrders", function() {
    return function(controller) {
        function addWidgetsfrmOrders() {
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
                    "btnRight": {
                        "isVisible": false,
                        "text": "..."
                    },
                    "flxHeaderShadow": {
                        "isVisible": false
                    },
                    "flxSearch": {
                        "isVisible": true,
                        "right": "20dp"
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "imgSearch": {
                        "centerY": "50%",
                        "height": "25dp",
                        "isVisible": true,
                        "right": "0%",
                        "src": "more_header.png",
                        "width": "25dp"
                    },
                    "lblLocateUs": {
                        "centerY": "49%",
                        "text": kony.i18n.getLocalizedString("i18n.wealth.orders")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxPopup = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "10.50%",
                "id": "flxPopup",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlx2f8523",
                "top": "40%",
                "width": "100%",
                "zIndex": 1200
            }, {}, {});
            flxPopup.setDefaultUnit(kony.flex.DP);
            var flxPopupWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxPopupWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {}, {});
            flxPopupWrapper.setDefaultUnit(kony.flex.DP);
            var imgPopup = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgPopup",
                "isVisible": true,
                "left": "30dp",
                "skin": "slImage",
                "src": "imagedrag.png",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblPopup = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblPopup",
                "isVisible": true,
                "left": "65dp",
                "right": "20dp",
                "skin": "sknLbl424242SSPSemiBold26px",
                "text": "Label",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxPopupWrapper.add(imgPopup, lblPopup);
            flxPopup.add(flxPopupWrapper);
            var flxScroll = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxScroll",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknTransparentBs",
                "top": "56dp",
                "verticalScrollIndicator": true,
                "width": "100%"
            }, {}, {});
            flxScroll.setDefaultUnit(kony.flex.DP);
            var segmentDetailsWealth = new com.temenos.infinity.segmentDetailsWealth({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "id": "segmentDetailsWealth",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "segmentDetailsWealth": {
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
            segmentDetailsWealth.fieldOneValueSkin = "sknLbl424242SSPReg26px";
            segmentDetailsWealth.noRecordsFoundText = "{\"open\": \"{i.i18n.wealth.noOpenOrder}\", \"history\": \"{i.i18n.wealth.noHistoricalOrder}\",\"error\": \"{i.i18n.wealth.noOrders}\" }";
            segmentDetailsWealth.fieldOneKey = "{i.i18n.savingspot.DateAck}";
            segmentDetailsWealth.amountFormat = "{ \"locale\":\"\", \"positiveFormat\" : \"{CS}{D}\", \"negativeFormat\" : \"-{CS}{D}\", \"fractionDigits\":\"2\"}";
            segmentDetailsWealth.operationName = "getOrdersDetails";
            segmentDetailsWealth.topFlex = "Orders";
            segmentDetailsWealth.totalValueKey = "";
            segmentDetailsWealth.referenceCurrency = "referenceCurrency";
            segmentDetailsWealth.featuresAndPermission = "{\"openOrderPermission\":[\"WEALTH_ORDER_MGMT_OPEN_ORDER_VIEW\"],\"historyOrderPermission\":[\"WEALTH_ORDER_MGMT_ORDER_HISTORY_VIEW\"],\"contextualMenuFeature\":\"WEALTH_ORDER_MANAGEMENT\",\"modify\":[\"WEALTH_ORDER_MGMT_ORDER_EDIT\"], \"cancel\":[\"WEALTH_ORDER_MGMT_ORDER_CANCEL\"], \"view\":[\"WEALTH_ORDER_MGMT_ORDER_LINK_VIEW\"]}";
            segmentDetailsWealth.fieldTwoValueSkin = "sknLbl424242SSPReg26px";
            segmentDetailsWealth.dateFormat = "m/d/Y";
            segmentDetailsWealth.objectName = "OrdersDetails";
            segmentDetailsWealth.placeholderSearchText = "{i.i18n.wealth.searchOrder}";
            segmentDetailsWealth.totalValue = "";
            segmentDetailsWealth.fieldThreeValueSkin = "sknLbl424242SSPReg26px";
            segmentDetailsWealth.fieldFourKey = "{i.i18n.wealth.limitPrice}|{i.i18n.wealth.price}";
            segmentDetailsWealth.backendDateFormat = "Y-m-d";
            segmentDetailsWealth.serviceName = "WealthObjects";
            segmentDetailsWealth.orderToggleIsVisible = "true";
            segmentDetailsWealth.fieldThreeKey = "{i.i18n.wealth.type}";
            segmentDetailsWealth.requestParam = "{   \"portfolioId\":\"{$.c.portfolioId}\",\"type\":\"{$.c.type}\",   \"startDate\":\"{$.c.startDate}\",   \"endDate\":\"{$.c.endDate}\",   \"searchByInstrumentName\":\"{$.c.searchByInstrumentName}\",   \"sortBy\":\"{$.c.sortBy}\"  }";
            segmentDetailsWealth.fieldFiveValueSkin = "sknLbl424242SSPReg26px";
            segmentDetailsWealth.fieldFiveKey = "{i.i18n.wealth.stopPrice}";
            segmentDetailsWealth.serviceResponseKey = "ordersDetails";
            segmentDetailsWealth.fieldFourValueSkin = "sknLbl424242SSPReg26px";
            segmentDetailsWealth.rowSeperatorSkin = "sknflxe3e3e3border";
            segmentDetailsWealth.fieldOneValue = "tradeDate";
            segmentDetailsWealth.fieldFiveValue = "stopPrice";
            segmentDetailsWealth.fieldThreeValue = "orderType";
            segmentDetailsWealth.fieldTwoValue = "quantity";
            segmentDetailsWealth.fieldFourValue = "limitPrice|orderExecutionPrice";
            segmentDetailsWealth.fieldIdOne = "ISIN";
            segmentDetailsWealth.fieldName = "description";
            segmentDetailsWealth.actionImgSrc = "more_detail.png";
            segmentDetailsWealth.logoImgSrc = "";
            segmentDetailsWealth.logoIsVisible = "false";
            segmentDetailsWealth.actionImgIsVisible = "true";
            segmentDetailsWealth.fieldOneType = "Date";
            segmentDetailsWealth.fieldThreeType = "Text";
            segmentDetailsWealth.fieldFiveType = "Amount";
            segmentDetailsWealth.fieldFourType = "Amount";
            segmentDetailsWealth.fieldTwoType = "Text";
            segmentDetailsWealth.currencyCode = "instrumentCurrency";
            segmentDetailsWealth.fieldTwoKey = "{i.i18n.wealth.qty}";
            segmentDetailsWealth.fieldIdTwo = "holdingsType";
            segmentDetailsWealth.allFieldKeySkin = "sknlbl727272SSP93pr";
            segmentDetailsWealth.orderStatusIsVisible = "true";
            segmentDetailsWealth.statusImgSrc = "{\"Completed\": \"green.png\", \"Rejected\":\"red.png\",\"Cancelled\":\"cancelled.png\"}";
            segmentDetailsWealth.statusText = "status";
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
                "text": "No open orders",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblErrorHistory = new kony.ui.Label({
                "centerX": "60%",
                "centerY": "50%",
                "id": "lblErrorHistory",
                "isVisible": true,
                "skin": "sknlblee0005SSPReg15px",
                "text": "No history orders",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxError.add(lblError, lblErrorHistory);
            flxScroll.add(segmentDetailsWealth, flxError);
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
            var flxDownloadOrders = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "58dp",
                "id": "flxDownloadOrders",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxEBEBEB",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDownloadOrders.setDefaultUnit(kony.flex.DP);
            var lblDownloadOrders = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblDownloadOrders",
                "isVisible": true,
                "skin": "sknlbl007afsfpdr",
                "text": kony.i18n.getLocalizedString("i18n.wealth.downloadOrders"),
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
            flxDownloadOrders.add(lblDownloadOrders, lblSeparator);
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
                "skin": "sknlbl007afsfpdr",
                "text": kony.i18n.getLocalizedString("i18n.wealth.sortBy"),
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
            var CopylblSeparator0ef9d1d660bef4d = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "CopylblSeparator0ef9d1d660bef4d",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknFlxe",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopylblSeparator0ef9d1d660bef4d.setDefaultUnit(kony.flex.DP);
            CopylblSeparator0ef9d1d660bef4d.add();
            flxModify.add(lblModify, CopylblSeparator0ef9d1d660bef4d);
            var flxViewOrder = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "58dp",
                "id": "flxViewOrder",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxEBEBEB",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxViewOrder.setDefaultUnit(kony.flex.DP);
            var lblView = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblView",
                "isVisible": true,
                "skin": "sknLbl007aFFSSP",
                "text": kony.i18n.getLocalizedString("i18n.wealth.modifyOrder"),
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
            var CopylblSeparator0ffde0698c3ea48 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "CopylblSeparator0ffde0698c3ea48",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknFlxe",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopylblSeparator0ffde0698c3ea48.setDefaultUnit(kony.flex.DP);
            CopylblSeparator0ffde0698c3ea48.add();
            flxViewOrder.add(lblView, CopylblSeparator0ffde0698c3ea48);
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
            flxCancelOrder.add(lblCancelOrder);
            flxPerformAdditionalOptions.add(flxDownloadOrders, flxSortBy, flxModify, flxViewOrder, flxCancelOrder);
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
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1070
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
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
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "92%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
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
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
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
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxNo.add(lblNo);
            flxBottom.add(flxYes, flxSep2, flxNo);
            flxBtns.add(flxSep1, flxBottom);
            flxConfirmationContainer.add(lblMsg, flxBtns);
            flxConfirmationPopUp.add(flxConfirmationContainer);
            var socialshare = new com.konymp.socialshare({
                "height": "0%",
                "id": "socialshare",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "top": "0dp",
                "width": "0%",
                "overrides": {
                    "socialshare": {
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
            socialshare.title = "Kony";
            this.add(flxHeader, flxPopup, flxScroll, flxAdditionalOptions, flxConfirmationPopUp, socialshare);
        };
        return [{
            "addWidgets": addWidgetsfrmOrders,
            "bounces": false,
            "enableScrolling": false,
            "enabledForIdleTimeout": true,
            "id": "frmOrders",
            "init": controller.AS_Form_dd805e79e8e14c4486dc4debb2b18adf,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_ha94b6585ab742ab8a67fffa889d1b04(eventobject);
            },
            "skin": "sknFrmTransparent",
            "title": kony.i18n.getLocalizedString("i18n.wealth.orders")
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