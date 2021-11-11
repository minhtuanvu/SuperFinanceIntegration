define("WealthModule/frmWatchlist", function() {
    return function(controller) {
        function addWidgetsfrmWatchlist() {
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
                        "text": "Watchlist"
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
                "width": "20%",
                "zIndex": 1
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
            segmentDetailsWealth.noRecordsFoundText = "No records to show";
            segmentDetailsWealth.fieldOneKey = "";
            segmentDetailsWealth.amountFormat = "{ \"locale\":\"\", \"positiveFormat\" : \"{CS}{D}\", \"negativeFormat\" : \"-{CS}{D}\", \"fractionDigits\":\"2\"}";
            segmentDetailsWealth.operationName = "getFavoriteInstruments";
            segmentDetailsWealth.topFlex = "Watchlist";
            segmentDetailsWealth.totalValueKey = "";
            segmentDetailsWealth.referenceCurrency = "referenceCurrency";
            segmentDetailsWealth.featuresAndPermission = "{\"sell\":[\"WEALTH_ORDER_MGMT_SELL_ORDER_CREATE\"], \"buy\":[\"WEALTH_ORDER_MGMT_BUY_ORDER_CREATE\"], \"view\":[\"WEALTH_WATCHLIST_INSTRUMENT_VIEW\"], \"delete\":[\"WEALTH_WATCHLIST_INSTRUMENT_CREATE\"]}";
            segmentDetailsWealth.fieldTwoValueSkin = "sknLbl424242SSPReg26px";
            segmentDetailsWealth.dateFormat = "m/d/Y";
            segmentDetailsWealth.objectName = "InstrumentDetails";
            segmentDetailsWealth.placeholderSearchText = "Search by keywords";
            segmentDetailsWealth.totalValue = "";
            segmentDetailsWealth.fieldThreeValueSkin = "sknLbl424242SSPReg26px";
            segmentDetailsWealth.fieldFourKey = "";
            segmentDetailsWealth.backendDateFormat = "Y-m-d";
            segmentDetailsWealth.serviceName = "WealthObjects";
            segmentDetailsWealth.orderToggleIsVisible = "false";
            segmentDetailsWealth.fieldThreeKey = "Latest:";
            segmentDetailsWealth.requestParam = "{\"searchByInstrumentName\":\"{$.c.searchByInstrumentName}\",   \"sortBy\":\"{$.c.sortBy}\"}";
            segmentDetailsWealth.fieldFiveValueSkin = "sknLbl424242SSPReg26px";
            segmentDetailsWealth.fieldFiveKey = "";
            segmentDetailsWealth.serviceResponseKey = "favoriteInstruments";
            segmentDetailsWealth.fieldFourValueSkin = "sknLbl424242SSPReg26px";
            segmentDetailsWealth.rowSeperatorSkin = "sknflxe3e3e3border";
            segmentDetailsWealth.fieldOneValue = "RIC";
            segmentDetailsWealth.fieldFiveValue = "";
            segmentDetailsWealth.fieldThreeValue = "lastRate";
            segmentDetailsWealth.fieldTwoValue = "percentageChange";
            segmentDetailsWealth.fieldFourValue = "";
            segmentDetailsWealth.fieldIdOne = "ISINCode";
            segmentDetailsWealth.fieldName = "instrumentName";
            segmentDetailsWealth.actionImgSrc = "more_detail.png";
            segmentDetailsWealth.logoImgSrc = "";
            segmentDetailsWealth.logoIsVisible = "false";
            segmentDetailsWealth.actionImgIsVisible = "true";
            segmentDetailsWealth.fieldOneType = "Hidden";
            segmentDetailsWealth.fieldThreeType = "Amount";
            segmentDetailsWealth.fieldFiveType = "Amount";
            segmentDetailsWealth.fieldFourType = "PL";
            segmentDetailsWealth.fieldTwoType = "Percentage";
            segmentDetailsWealth.currencyCode = "referenceCurrency";
            segmentDetailsWealth.fieldTwoKey = "Change:";
            segmentDetailsWealth.fieldIdTwo = "exchange";
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
                "skin": "CopysknFlxe",
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
            var lblSeparatorReport = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "lblSeparatorReport",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknFlxe",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            lblSeparatorReport.setDefaultUnit(kony.flex.DP);
            lblSeparatorReport.add();
            flxReport.add(lblReport, lblSeparatorReport);
            var flxDelete = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "58dp",
                "id": "flxDelete",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxEBEBEB",
                "top": "-1dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDelete.setDefaultUnit(kony.flex.DP);
            var lblDelete = new kony.ui.Label({
                "centerX": "50.04%",
                "centerY": "50.00%",
                "id": "lblDelete",
                "isVisible": true,
                "skin": "sknLblDelete125ee0005",
                "text": "Delete",
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
            flxDelete.add(lblDelete);
            flxPerformAdditionalOptions.add(flxPerformance, flxAccounts, flxReport, flxDelete);
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
                "text": "Are you sure you want to remove this from favorite instruments? ",
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
            this.add(flxHeader, flxScroll, flxAdditionalOptions, flxPopup, flxConfirmationPopUp, socialshare);
        };
        return [{
            "addWidgets": addWidgetsfrmWatchlist,
            "bounces": false,
            "enableScrolling": false,
            "enabledForIdleTimeout": true,
            "id": "frmWatchlist",
            "init": controller.AS_Form_g6d83dc42b484582b03e84958b14342a,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknFrmTransparent",
            "title": "Watchlist"
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