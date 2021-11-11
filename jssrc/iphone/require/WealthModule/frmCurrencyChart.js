define("WealthModule/frmCurrencyChart", function() {
    return function(controller) {
        function addWidgetsfrmCurrencyChart() {
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
                        "centerY": "50%",
                        "height": kony.flex.USE_PREFFERED_SIZE,
                        "text": kony.i18n.getLocalizedString("i18n.wealth.currencyChart"),
                        "left": "15%",
                        "top": "viz.val_cleared",
                        "width": "65%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxMain = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "75dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxMain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMain.setDefaultUnit(kony.flex.DP);
            var flxConversionRate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "105dp",
                "id": "flxConversionRate",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "14dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxConversionRate.setDefaultUnit(kony.flex.DP);
            var flxOrigCurrency = new kony.ui.Label({
                "id": "flxOrigCurrency",
                "isVisible": true,
                "left": "18dp",
                "skin": "sknlbl727272SSP17px",
                "text": "1 Euro equals",
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
            var flxConvertedCurrency = new kony.ui.Label({
                "id": "flxConvertedCurrency",
                "isVisible": true,
                "left": "18dp",
                "skin": "sknLbl424242SSPSemiBold42px",
                "text": " USD",
                "textStyle": {},
                "top": "3dp",
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
            var flxConversionTimestamp = new kony.ui.Label({
                "id": "flxConversionTimestamp",
                "isVisible": true,
                "left": "18dp",
                "skin": "sknLbl727272SSPR15px",
                "text": "12 Jun, 7:19 am UTC · Disclaimer",
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
            flxConversionRate.add(flxOrigCurrency, flxConvertedCurrency, flxConversionTimestamp);
            var flxCurrencyChart = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "350dp",
                "id": "flxCurrencyChart",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "25dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCurrencyChart.setDefaultUnit(kony.flex.DP);
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
            investmentLineChart.currentFilter = "1M";
            investmentLineChart.onFilterChanged = controller.AS_UWI_b76b3c8984fa4304bf41d46c6162e8b8;
            flxCurrencyChart.add(investmentLineChart);
            var flxConversionDetails = new kony.ui.FlexContainer({
                "bottom": "75dp",
                "clipBounds": true,
                "height": "220dp",
                "id": "flxConversionDetails",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxConversionDetails.setDefaultUnit(kony.flex.DP);
            var flxCurrencyBalance = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxCurrencyBalance",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxCurrencyBalance.setDefaultUnit(kony.flex.DP);
            var flxCurrency1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxCurrency1",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "19dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            flxCurrency1.setDefaultUnit(kony.flex.DP);
            var lblCurrency1 = new kony.ui.Label({
                "id": "lblCurrency1",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl727272SSPR15px",
                "text": "Current EUR Balance",
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
                "skin": "sknLbl424242SSPSemiBold22px",
                "text": "€ 25,000.00",
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
            flxCurrency1.add(lblCurrency1, lblBalance1);
            var flxCurrency2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxCurrency2",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "19dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            flxCurrency2.setDefaultUnit(kony.flex.DP);
            var lblCurrency2 = new kony.ui.Label({
                "id": "lblCurrency2",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl727272SSPR15px",
                "text": "Current EUR Balance",
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
                "skin": "sknLbl424242SSPSemiBold22px",
                "text": "$ 1,000.00",
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
            flxCurrency2.add(lblCurrency2, lblBalance2);
            flxCurrencyBalance.add(flxCurrency1, flxCurrency2);
            var flxSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "15dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxSeparator.setDefaultUnit(kony.flex.DP);
            flxSeparator.add();
            var flxConversionToggle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxConversionToggle",
                "isVisible": true,
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
                "top": "20dp",
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxScheduleOn.setDefaultUnit(kony.flex.DP);
            var flxSeparatorTop = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "3dp",
                "id": "flxSeparatorTop",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxe3e3e3border",
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
            var imgChevron = new kony.ui.Image2({
                "centerY": "50%",
                "height": "19dp",
                "id": "imgChevron",
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
            flxScheduleDate.add(lblScheduledDate, imgChevron);
            flxDate.add(flxLabel, flxScheduleDate);
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
            flxScheduleOn.add(flxSeparatorTop, flxDate, flxSeperator);
            flxConversionDetails.add(flxCurrencyBalance, flxSeparator, flxConversionToggle, flxScheduleOn);
            flxMain.add(flxConversionRate, flxCurrencyChart, flxConversionDetails);
            var flxbtnProceed = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "70dp",
                "id": "flxbtnProceed",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxbtnProceed.setDefaultUnit(kony.flex.DP);
            var btnProceed = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "48dp",
                "id": "btnProceed",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("i18n.wealth.proceed"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxbtnProceed.add(btnProceed);
            this.add(flxHeader, flxMain, flxbtnProceed);
        };
        var BBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_IMAGE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "metaData": {
                "image": ""
            },
            "id": "BBarBtnItem0"
        });
        return [{
            "addWidgets": addWidgetsfrmCurrencyChart,
            "enabledForIdleTimeout": false,
            "id": "frmCurrencyChart",
            "init": controller.AS_Form_f0fae161f1fb42f89ddcfcf57a66fd26,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_d0b31df140914d52bf94f86a86d6fa01,
            "preShow": function(eventobject) {
                controller.AS_Form_da040ed71de840bf9830a5097d07984c(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("i18n.wealth.currencyChart")
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
                "backIndicatorImage": "backbutton.png",
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