define("WealthModule/frmHoldings", function() {
    return function(controller) {
        function addWidgetsfrmHoldings() {
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
                        "text": kony.i18n.getLocalizedString("i18n.wealth.holdings")
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
                "skin": "sknFlxScrlffffff",
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
            segmentDetailsWealth.noRecordsFoundText = "{i.i18n.wealth.noHoldings}";
            segmentDetailsWealth.fieldOneKey = "{i.i18n.wealth.latestPrice}";
            segmentDetailsWealth.amountFormat = "{ \"locale\":\"\", \"positiveFormat\" : \"{CS}{D}\", \"negativeFormat\" : \"-{CS}{D}\", \"fractionDigits\":\"2\"}";
            segmentDetailsWealth.operationName = "getPortfolioHoldings";
            segmentDetailsWealth.topFlex = "Holdings";
            segmentDetailsWealth.totalValueKey = "{i.i18n.wealth.totalValue}";
            segmentDetailsWealth.referenceCurrency = "referenceCurrency";
            segmentDetailsWealth.featuresAndPermission = "{\"view\":[\"WEALTH_ORDER_MGMT_ORDER_LINK_VIEW\"],\"buy\":[\"WEALTH_ORDER_MGMT_BUY_ORDER_CREATE\"], \"sell\":[\"WEALTH_ORDER_MGMT_SELL_ORDER_CREATE\"]}";
            segmentDetailsWealth.fieldTwoValueSkin = "sknLbl424242SSPReg26px";
            segmentDetailsWealth.dateFormat = "m/d/Y";
            segmentDetailsWealth.objectName = "Portfolio";
            segmentDetailsWealth.placeholderSearchText = "{i.i18n.wealth.searchByInstrument}";
            segmentDetailsWealth.totalValue = "marketValue";
            segmentDetailsWealth.fieldThreeValueSkin = "sknLbl424242SSPReg26px";
            segmentDetailsWealth.fieldFourKey = "{i.i18n.wealth.pl}";
            segmentDetailsWealth.backendDateFormat = "Y-m-d";
            segmentDetailsWealth.serviceName = "WealthObjects";
            segmentDetailsWealth.orderToggleIsVisible = "false";
            segmentDetailsWealth.fieldThreeKey = "{i.i18n.wealth.avgCost}";
            segmentDetailsWealth.requestParam = "{   \"portfolioId\":\"{$.c.portfolioId}\",   \"searchByInstrumentName\":\"{$.c.searchByInstrumentName}\",   \"sortBy\":\"{$.c.sortBy}\"  , \"navPage\":\"{$.c.navPage}\" }";
            segmentDetailsWealth.fieldFiveValueSkin = "sknLbl424242SSPReg26px";
            segmentDetailsWealth.fieldFiveKey = "{i.i18n.wealth.mktValue}";
            segmentDetailsWealth.serviceResponseKey = "portfolioHoldings";
            segmentDetailsWealth.fieldFourValueSkin = "sknLbl424242SSPReg26px";
            segmentDetailsWealth.rowSeperatorSkin = "sknflxe3e3e3border";
            segmentDetailsWealth.fieldOneValue = "marketPrice";
            segmentDetailsWealth.fieldFiveValue = "marketValue,referenceCurrency";
            segmentDetailsWealth.fieldThreeValue = "costPrice";
            segmentDetailsWealth.fieldTwoValue = "quantity";
            segmentDetailsWealth.fieldFourValue = "unrealPLMkt,referenceCurrency";
            segmentDetailsWealth.fieldIdOne = "ISIN";
            segmentDetailsWealth.fieldName = "description";
            segmentDetailsWealth.actionImgSrc = "more_detail.png";
            segmentDetailsWealth.logoImgSrc = "";
            segmentDetailsWealth.logoIsVisible = "false";
            segmentDetailsWealth.actionImgIsVisible = "true";
            segmentDetailsWealth.fieldOneType = "Amount";
            segmentDetailsWealth.fieldThreeType = "Amount";
            segmentDetailsWealth.fieldFiveType = "Amount";
            segmentDetailsWealth.fieldFourType = "PL";
            segmentDetailsWealth.fieldTwoType = "Text";
            segmentDetailsWealth.currencyCode = "secCCy";
            segmentDetailsWealth.fieldTwoKey = "{i.i18n.wealth.qty}";
            segmentDetailsWealth.fieldIdTwo = "holdingsType";
            segmentDetailsWealth.allFieldKeySkin = "sknlbl727272SSP93pr";
            segmentDetailsWealth.orderStatusIsVisible = "false";
            segmentDetailsWealth.statusImgSrc = "statusImg";
            segmentDetailsWealth.statusText = "orderStatus";
            flxScroll.add(segmentDetailsWealth);
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
                "text": "Download Transactions",
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
            flxPerformance.add(lblPerformance, lblSeparator);
            var flxAccounts = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "58dp",
                "id": "flxAccounts",
                "isVisible": false,
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
                "centerY": "50%",
                "id": "lblAccounts",
                "isVisible": true,
                "skin": "sknlbl007afsfpdr",
                "text": kony.i18n.getLocalizedString("kony.mb.common.accounts"),
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
                "text": "Sort by",
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
            this.add(flxHeader, flxScroll, flxAdditionalOptions, flxPopup, socialshare);
        };
        return [{
            "addWidgets": addWidgetsfrmHoldings,
            "bounces": false,
            "enableScrolling": false,
            "enabledForIdleTimeout": true,
            "id": "frmHoldings",
            "init": controller.AS_Form_f6f38ffb5dad45a2bf492ff6b05586b0,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknFrmTransparent",
            "title": kony.i18n.getLocalizedString("i18n.wealth.holdings")
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