define("WealthModule/frmConvertCurrency", function() {
    return function(controller) {
        function addWidgetsfrmConvertCurrency() {
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
                        "text": kony.i18n.getLocalizedString("i18n.wealth.convertCurrency"),
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
                "height": "53%",
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
            var flxConversionToggle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxConversionToggle",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "19dp",
                "isModalContainer": false,
                "skin": "sknFlxTabBg767680",
                "top": "20dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxConversionToggle.setDefaultUnit(kony.flex.DP);
            var flxTglConvertNow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "25dp",
                "id": "flxTglConvertNow",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "2dp",
                "isModalContainer": false,
                "skin": "sknFlxTransparent",
                "top": "0dp",
                "width": "52%"
            }, {}, {});
            flxTglConvertNow.setDefaultUnit(kony.flex.DP);
            var btnTglConvertNow = new kony.ui.Button({
                "centerX": "50%",
                "centerY": "50%",
                "height": "25dp",
                "id": "btnTglConvertNow",
                "isVisible": true,
                "left": 0,
                "skin": "sknBtnFFFFFFBdr10px",
                "text": kony.i18n.getLocalizedString("i18n.wealth.convertNow"),
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
            flxTglConvertNow.add(btnTglConvertNow);
            var flxTglScheduleLater = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "25dp",
                "id": "flxTglScheduleLater",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "right": "2dp",
                "skin": "sknFlxTransparent",
                "top": "0dp",
                "width": "52%"
            }, {}, {});
            flxTglScheduleLater.setDefaultUnit(kony.flex.DP);
            var btnTglScheduleLater = new kony.ui.Button({
                "centerX": "50%",
                "centerY": "50%",
                "height": "25dp",
                "id": "btnTglScheduleLater",
                "isVisible": true,
                "left": 0,
                "skin": "sknbtn000000SSPSemiBold15px",
                "text": kony.i18n.getLocalizedString("i18n.wealth.scheduleLater"),
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
            flxTglScheduleLater.add(btnTglScheduleLater);
            flxConversionToggle.add(flxTglConvertNow, flxTglScheduleLater);
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
            var flxScheduleOn = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxScheduleOn",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "7dp",
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxScheduleOn.setDefaultUnit(kony.flex.DP);
            var flxSeparatorTop = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorTop",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": 0,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparatorTop.setDefaultUnit(kony.flex.DP);
            flxSeparatorTop.add();
            var flxDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerY": "50%",
                "clipBounds": true,
                "id": "flxDate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDate.setDefaultUnit(kony.flex.DP);
            var flxLabel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxLabel",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 0,
                "width": "50%"
            }, {}, {});
            flxLabel.setDefaultUnit(kony.flex.DP);
            var lblScheduleOn = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblScheduleOn",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("i18n.wealth.scheduledon"),
                "textStyle": {},
                "top": "0dp",
                "width": "55%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxLabel.add(lblScheduleOn);
            var flxScheduleDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxScheduleDate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "50%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "50%"
            }, {}, {});
            flxScheduleDate.setDefaultUnit(kony.flex.DP);
            var lblScheduledDate = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblScheduledDate",
                "isVisible": true,
                "right": "45dp",
                "skin": "sknLbl4176A4SSPReg26px",
                "text": "06/14/2020",
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
            var imgChevron1 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "19dp",
                "id": "imgChevron1",
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
            flxScheduleDate.add(lblScheduledDate, imgChevron1);
            flxDate.add(flxLabel, flxScheduleDate);
            var flxSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
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
            flxScheduleOn.add(flxSeparatorTop, flxDate, flxSeperator);
            var flxCurrencyDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxCurrencyDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "100%"
            }, {}, {});
            flxCurrencyDetails.setDefaultUnit(kony.flex.DP);
            var flxCurrencyLabels = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxCurrencyLabels",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "100%"
            }, {}, {});
            flxCurrencyLabels.setDefaultUnit(kony.flex.DP);
            var lblFromCurrency = new kony.ui.Label({
                "id": "lblFromCurrency",
                "isVisible": true,
                "left": "7.50%",
                "skin": "sknlbl727272SSP17px",
                "text": kony.i18n.getLocalizedString("i18n.wealth.fromCurrency"),
                "textStyle": {},
                "top": 0,
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblToCurrency = new kony.ui.Label({
                "id": "lblToCurrency",
                "isVisible": true,
                "left": "63%",
                "skin": "sknlbl727272SSP17px",
                "text": kony.i18n.getLocalizedString("i18n.wealth.toCurrency"),
                "textStyle": {},
                "top": 0,
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxCurrencyLabels.add(lblFromCurrency, lblToCurrency);
            var flxCurrencyExchange = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxCurrencyExchange",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "35dp",
                "width": "100%"
            }, {}, {});
            flxCurrencyExchange.setDefaultUnit(kony.flex.DP);
            var flxFrom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxFrom",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "5%",
                "isModalContainer": false,
                "skin": "sknflxe3e3e3border",
                "top": "0",
                "width": "35%"
            }, {}, {});
            flxFrom.setDefaultUnit(kony.flex.DP);
            var imgFrom = new kony.ui.Image2({
                "height": "21dp",
                "id": "imgFrom",
                "isVisible": true,
                "left": "10dp",
                "skin": "slImage",
                "src": "euro.png",
                "top": "10dp",
                "width": "25dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblFrom = new kony.ui.Label({
                "bottom": "15dp",
                "id": "lblFrom",
                "isVisible": true,
                "left": "10dp",
                "right": "10dp",
                "skin": "sknlbl424242ssp40px",
                "text": "EURO",
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
            flxFrom.add(imgFrom, lblFrom);
            var imgExchange = new kony.ui.Image2({
                "height": "40dp",
                "id": "imgExchange",
                "isVisible": true,
                "left": "5%",
                "skin": "slImage",
                "src": "currency_switch.png",
                "top": "5dp",
                "width": "40dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxTo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxTo",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "4.50%",
                "isModalContainer": false,
                "skin": "sknflxe3e3e3border",
                "top": "0",
                "width": "35%"
            }, {}, {});
            flxTo.setDefaultUnit(kony.flex.DP);
            var imgTo = new kony.ui.Image2({
                "height": "21dp",
                "id": "imgTo",
                "isVisible": true,
                "left": "10dp",
                "skin": "slImage",
                "src": "usdollar.png",
                "top": "10dp",
                "width": "25dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblTo = new kony.ui.Label({
                "bottom": "15dp",
                "id": "lblTo",
                "isVisible": true,
                "left": "10dp",
                "right": "10dp",
                "skin": "sknlbl424242ssp40px",
                "text": "USD",
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
            flxTo.add(imgTo, lblTo);
            flxCurrencyExchange.add(flxFrom, imgExchange, flxTo);
            var flxCurrencyBalance = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxCurrencyBalance",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "90dp",
                "width": "100%"
            }, {}, {});
            flxCurrencyBalance.setDefaultUnit(kony.flex.DP);
            var flxCurrency1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxCurrency1",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "5%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "35%",
                "zIndex": 1
            }, {}, {});
            flxCurrency1.setDefaultUnit(kony.flex.DP);
            var lblCurrentBalance1 = new kony.ui.Label({
                "id": "lblCurrentBalance1",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl727272SSPR15px",
                "text": "Current Balance",
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
            var lblBalance1 = new kony.ui.Label({
                "id": "lblBalance1",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl424242SSPSemiBold26px",
                "text": "€ 25,000.00",
                "textStyle": {},
                "top": "2dp",
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
            flxCurrency1.add(lblCurrentBalance1, lblBalance1);
            var flxCurrency2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxCurrency2",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "19.50%",
                "isModalContainer": false,
                "right": 0,
                "skin": "slFbox",
                "top": "0dp",
                "width": "32.20%",
                "zIndex": 1
            }, {}, {});
            flxCurrency2.setDefaultUnit(kony.flex.DP);
            var lblCurrency2 = new kony.ui.Label({
                "id": "lblCurrency2",
                "isVisible": true,
                "left": 0,
                "skin": "sknLbl727272SSPR15px",
                "text": "Current Balance",
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
            var lblBalance2 = new kony.ui.Label({
                "id": "lblBalance2",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl424242SSPSemiBold26px",
                "text": "$ 1,000.00",
                "textStyle": {},
                "top": "2dp",
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
            flxCurrency2.add(lblCurrency2, lblBalance2);
            flxCurrencyBalance.add(flxCurrency1, flxCurrency2);
            flxCurrencyDetails.add(flxCurrencyLabels, flxCurrencyExchange, flxCurrencyBalance);
            var lblAmountTitle = new kony.ui.Label({
                "id": "lblAmountTitle",
                "isVisible": true,
                "left": "30dp",
                "skin": "sknlbl727272SSP17px",
                "text": kony.i18n.getLocalizedString("i18n.wealth.enterAmount"),
                "textStyle": {},
                "top": "15dp",
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
            var flxAmountWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxAmountWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "flxBlueFocus",
                "top": "5dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxAmountWrapper.setDefaultUnit(kony.flex.DP);
            var lblDollar = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDollar",
                "isVisible": false,
                "left": "10dp",
                "skin": "sknLbl4a4a4aSSP42px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.currencySymbol"),
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblAmount = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAmount",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLbl424242SSPRegular42px",
                "text": "0.00",
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var imgClear = new kony.ui.Image2({
                "height": "25dp",
                "id": "imgClear",
                "isVisible": true,
                "right": "5dp",
                "skin": "slImage",
                "src": "clearcircle.png",
                "top": "14dp",
                "width": "25dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAmountWrapper.add(lblDollar, lblAmount, imgClear);
            var flxNote = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxNote",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
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
                "skin": "sknLbl727272SSPR15px",
                "text": kony.i18n.getLocalizedString("i18n.wealth.approximateAmountNote"),
                "textStyle": {},
                "top": "10dp",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxNote.add(lblNote);
            var flxConversionDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "25dp",
                "clipBounds": true,
                "id": "flxConversionDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "15dp",
                "width": "100%"
            }, {}, {});
            flxConversionDetails.setDefaultUnit(kony.flex.DP);
            var lblCurrency = new kony.ui.Label({
                "id": "lblCurrency",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPSemiBold42px",
                "text": "969.00 USD",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxCurrencyContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxCurrencyContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxCurrencyContainer.setDefaultUnit(kony.flex.DP);
            var lblCurrency1 = new kony.ui.Label({
                "id": "lblCurrency1",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlbl424242ssp40px",
                "text": "1 Euro equals 1.14 USD",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxShowChart = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxShowChart",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "right": "15dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "25%"
            }, {}, {});
            flxShowChart.setDefaultUnit(kony.flex.DP);
            var lblShowChart = new kony.ui.Label({
                "id": "lblShowChart",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknlbl4176a4SSPSB18px",
                "text": "Show Chart",
                "textStyle": {},
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var imgChevron = new kony.ui.Image2({
                "height": "16dp",
                "id": "imgChevron",
                "isVisible": true,
                "right": "0dp",
                "skin": "slImage",
                "src": "chevron.png",
                "top": "1dp",
                "width": "27dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxShowChart.add(lblShowChart, imgChevron);
            flxCurrencyContainer.add(lblCurrency1, flxShowChart);
            flxConversionDetails.add(lblCurrency, flxCurrencyContainer);
            flxMainContainer.add(lblError, flxConversionToggle, flxSeparator, flxScheduleOn, flxCurrencyDetails, lblAmountTitle, flxAmountWrapper, flxNote, flxConversionDetails);
            var flxKeypad = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "40%",
                "id": "flxKeypad",
                "isVisible": true,
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
                "textStyle": {},
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
            keypad.btnEight.onClick = controller.AS_Button_a4dfed3b25964acb9cbd5d4ceeb12641;
            keypad.btnFive.onClick = controller.AS_Button_bef3dc2e333f4c88be57fc5510227061;
            keypad.btnFour.onClick = controller.AS_Button_dc152db74e14455987eece06f930e911;
            keypad.btnNine.onClick = controller.AS_Button_d2a28eee55c14930bb61d191a86fb9f9;
            keypad.btnOne.onClick = controller.AS_Button_c8caf79e2ad24f608a2d291812df861a;
            keypad.btnSeven.onClick = controller.AS_Button_i372484f22f84cafa98a7a3819328b38;
            keypad.btnSix.onClick = controller.AS_Button_bc518c2be1d94b94888551fa72bef783;
            keypad.btnThree.onClick = controller.AS_Button_gb809f9987494b39bfab5e05b28f465f;
            keypad.btnTwo.onClick = controller.AS_Button_e7379b7e3c2f426ab23c4f68840241ec;
            keypad.btnZero.onClick = controller.AS_Button_id9572d80f654f7d9d1ee897e4886b8a;
            keypad.imgClearKeypad.onTouchEnd = controller.AS_Image_j8a433e99c0746c6b0f73e1eed64c79a;
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
            }, {
                "showProgressIndicator": false
            });
            flxKeypad.add(flxShadowTwo, flxDone, keypad, btnDot);
            flxContentWrapper.add(flxMainContainer, flxKeypad);
            var flxButton = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "1%",
                "clipBounds": true,
                "height": "50dp",
                "id": "flxButton",
                "isVisible": false,
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
                "text": kony.i18n.getLocalizedString("i18n.wealth.convert"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxButton.add(btnContinue);
            this.add(flxHeader, flxContentWrapper, flxButton);
        };
        var LBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_IMAGE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_a57d8703e58745699e5263fe09e577cc,
            "metaData": {
                "image": "backbutton_1.png"
            },
            "id": "LBarBtnItem0"
        });
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_f8db3f1d242b40bb892f30098586a2c3,
            "metaData": {
                "title": "Cancel"
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
            "addWidgets": addWidgetsfrmConvertCurrency,
            "enabledForIdleTimeout": true,
            "id": "frmConvertCurrency",
            "init": controller.AS_Form_d98ba7cd2fe04c49831d1bc5dd100f82,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_abbf621158bb4c968729aaaa46c125bb,
            "preShow": function(eventobject) {
                controller.AS_Form_dac44b67e0634f5dad84261b0489b782(eventobject);
            },
            "skin": "sknFrmf9f9f9",
            "title": kony.i18n.getLocalizedString("i18n.wealth.convertCurrency")
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
                "leftBarButtonItems": [
                    LBarBtnItem0
                ],
                "rightBarButtonItems": [RBarBtnItem0],
                "backBarButtonItem": BBarBtnItem0
            },
            "titleBarSkin": "sknTitle1a98ffffffff30px"
        }]
    }
});