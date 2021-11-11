define("WealthModule/frmTransactions", function() {
    return function(controller) {
        function addWidgetsfrmTransactions() {
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
                        "text": kony.i18n.getLocalizedString("kony.mb.ApprovalRequests.Transactions")
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
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
                "skin": "sknScrFlxffffff",
                "top": "0dp",
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
            segmentDetailsWealth.noRecordsFoundText = "{i.i18n.wealth.noTransactions}";
            segmentDetailsWealth.fieldOneKey = "{i.i18n.wealth.tradeDate}";
            segmentDetailsWealth.amountFormat = "{ \"locale\":\"\", \"positiveFormat\" : \"{CS}{D}\", \"negativeFormat\" : \"-{CS}{D}\", \"fractionDigits\":\"2\"}";
            segmentDetailsWealth.operationName = "getTransactionDetails";
            segmentDetailsWealth.topFlex = "Transactions";
            segmentDetailsWealth.totalValueKey = "Total Value";
            segmentDetailsWealth.referenceCurrency = "referenceCurrency";
            segmentDetailsWealth.featuresAndPermission = "{\"viewDetails\":[\"WEALTH_PORTFOLIO_DETAILS_TRANSACTIONS_VIEW\"]}";
            segmentDetailsWealth.fieldTwoValueSkin = "sknLbl424242SSPReg26px";
            segmentDetailsWealth.dateFormat = "m/d/Y";
            segmentDetailsWealth.objectName = "Portfolio";
            segmentDetailsWealth.placeholderSearchText = "{i.i18n.wealth.searchKeywords}";
            segmentDetailsWealth.totalValue = "marketValue";
            segmentDetailsWealth.fieldThreeValueSkin = "sknLbl424242SSPReg26px";
            segmentDetailsWealth.fieldFourKey = "{i.i18n.wealth.price}";
            segmentDetailsWealth.backendDateFormat = "Y-m-d";
            segmentDetailsWealth.serviceName = "WealthObjects";
            segmentDetailsWealth.orderToggleIsVisible = "false";
            segmentDetailsWealth.fieldThreeKey = "{i.i18n.wealth.orderType}";
            segmentDetailsWealth.requestParam = "{   \"portfolioId\":\"{$.c.portfolioId}\",   \"startDate\":\"{$.c.startDate}\",   \"endDate\":\"{$.c.endDate}\",   \"searchByInstrumentName\":\"{$.c.instrumentName}\",   \"sortBy\":\"{$.c.sortBy}\"  }";
            segmentDetailsWealth.fieldFiveValueSkin = "sknLbl424242SSPReg26px";
            segmentDetailsWealth.fieldFiveKey = "{i.i18n.wealth.total}";
            segmentDetailsWealth.serviceResponseKey = "portfolioTransactions";
            segmentDetailsWealth.fieldFourValueSkin = "sknLbl424242SSPReg26px";
            segmentDetailsWealth.rowSeperatorSkin = "sknflxe3e3e3border";
            segmentDetailsWealth.fieldOneValue = "tradeDate";
            segmentDetailsWealth.fieldFiveValue = "total";
            segmentDetailsWealth.fieldThreeValue = "orderType";
            segmentDetailsWealth.fieldTwoValue = "quantity";
            segmentDetailsWealth.fieldFourValue = "limitPrice";
            segmentDetailsWealth.fieldIdOne = "ISIN";
            segmentDetailsWealth.fieldName = "description";
            segmentDetailsWealth.actionImgSrc = "chevron.png";
            segmentDetailsWealth.logoImgSrc = "";
            segmentDetailsWealth.logoIsVisible = "false";
            segmentDetailsWealth.actionImgIsVisible = "false";
            segmentDetailsWealth.fieldOneType = "Date";
            segmentDetailsWealth.fieldThreeType = "Text";
            segmentDetailsWealth.fieldFiveType = "Amount";
            segmentDetailsWealth.fieldFourType = "Amount";
            segmentDetailsWealth.fieldTwoType = "Text";
            segmentDetailsWealth.currencyCode = "instrumentCurrency";
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
                "skin": "sknlbl007afsfpdr",
                "text": kony.i18n.getLocalizedString("i18n.wealth.downloadTransactions"),
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
            flxDownloadTransactions.add(lblDownloadTransactions, lblSeparator);
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
            flxPerformAdditionalOptions.add(flxDownloadTransactions, flxSortBy);
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
                "textStyle": {},
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_IMAGE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_ge7b453e64c24cb7967a863f868bd877,
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
            "addWidgets": addWidgetsfrmTransactions,
            "bounces": false,
            "enableScrolling": false,
            "enabledForIdleTimeout": true,
            "id": "frmTransactions",
            "init": controller.AS_Form_bfc3d0e3186f4c6f9d568c91b1816820,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_c93827145925460ea3b1617810fd4b32,
            "preShow": function(eventobject) {
                controller.AS_Form_cee56b6b632d43928e4fd980c00fa040(eventobject);
            },
            "skin": "sknFrmTransparent",
            "title": kony.i18n.getLocalizedString("kony.mb.ApprovalRequests.Transactions")
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