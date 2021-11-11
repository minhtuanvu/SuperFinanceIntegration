define("SavingsPotModule/frmBudgetPotDetails", function() {
    return function(controller) {
        function addWidgetsfrmBudgetPotDetails() {
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
                "zIndex": 4
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
                "zIndex": 1,
                "overrides": {
                    "btnRight": {
                        "text": kony.i18n.getLocalizedString("kony.mb.common.Edit"),
                        "isVisible": true
                    },
                    "customHeader": {
                        "height": "100%",
                        "zIndex": 1
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "imgSearch": {
                        "src": "searchicon.png"
                    },
                    "lblLocateUs": {
                        "text": "Christmas Budget Mock"
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
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "flxScroll",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxScroll.setDefaultUnit(kony.flex.DP);
            var flxHeadCard = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "275dp",
                "id": "flxHeadCard",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "sknFlxffffffRadius10RoundBorder",
                "top": "10dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxHeadCard.setDefaultUnit(kony.flex.DP);
            var flxChart = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "140dp",
                "id": "flxChart",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxChart.setDefaultUnit(kony.flex.DP);
            var browserChart = new kony.ui.Browser({
                "centerX": "50%",
                "detectTelNumber": true,
                "enableZoom": false,
                "height": "150dp",
                "id": "browserChart",
                "isVisible": true,
                "left": "0dp",
                "setAsContent": false,
                "requestURLConfig": {
                    "URL": "chartist/gaugechart.html",
                    "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
                },
                "top": "0dp",
                "width": "55%",
                "zIndex": 1
            }, {}, {});
            var lblLeft = new kony.ui.Label({
                "centerX": "33%",
                "id": "lblLeft",
                "isVisible": true,
                "skin": "sknLbl727272ssp40px",
                "text": "0%",
                "textStyle": {},
                "top": "115dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblRight = new kony.ui.Label({
                "centerX": "65%",
                "id": "lblRight",
                "isVisible": true,
                "skin": "sknLbl727272ssp40px",
                "text": "100%",
                "textStyle": {},
                "top": "115dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 100
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblComplete = new kony.ui.Label({
                "centerX": "48%",
                "id": "lblComplete",
                "isVisible": true,
                "skin": "sknLbl727272ssp40px",
                "text": "Paid",
                "textStyle": {},
                "top": "85dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblPercent = new kony.ui.Label({
                "centerX": "49%",
                "id": "lblPercent",
                "isVisible": true,
                "left": "122dp",
                "skin": "sknLbl424242SSpSemibold56px",
                "text": "60%",
                "textStyle": {},
                "top": "50dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxChart.add(browserChart, lblLeft, lblRight, lblComplete, lblPercent);
            var flxTitle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "28dp",
                "id": "flxTitle",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTitle.setDefaultUnit(kony.flex.DP);
            var flxHori = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20dp",
                "id": "flxHori",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "46%",
                "zIndex": 1
            }, {}, {});
            flxHori.setDefaultUnit(kony.flex.DP);
            var imgBudget = new kony.ui.Image2({
                "centerY": "50%",
                "height": "15dp",
                "id": "imgBudget",
                "isVisible": true,
                "left": "15dp",
                "skin": "slImage",
                "src": "inactivegreydot.png",
                "top": "0dp",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblBudgetAmountQn = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblBudgetAmountQn",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("i18n.savingspot.BudgetAmount"),
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
            flxHori.add(imgBudget, lblBudgetAmountQn);
            var flxRightHori = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20dp",
                "id": "flxRightHori",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "20dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "45%",
                "zIndex": 1
            }, {}, {});
            flxRightHori.setDefaultUnit(kony.flex.DP);
            var lblCurrBalanceQn = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCurrBalanceQn",
                "isVisible": true,
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.accounts.CurrentBalance"),
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
            var imgCurr = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgCurr",
                "isVisible": false,
                "right": "0dp",
                "skin": "slImage",
                "src": "pageondot.png",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblCur = new kony.ui.Label({
                "height": "7dp",
                "id": "lblCur",
                "isVisible": true,
                "left": "0dp",
                "right": "7dp",
                "skin": "lbldotblue",
                "text": "Label",
                "textStyle": {},
                "top": "7dp",
                "width": "7dp",
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxRightHori.add(lblCurrBalanceQn, imgCurr, lblCur);
            flxTitle.add(flxHori, flxRightHori);
            var flxAnswer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "38dp",
                "id": "flxAnswer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAnswer.setDefaultUnit(kony.flex.DP);
            var lblBudgetAmountAns = new kony.ui.Label({
                "id": "lblBudgetAmountAns",
                "isVisible": true,
                "left": "35dp",
                "skin": "sknLbl424242SSPSemiBold42px",
                "text": "$10,000.00",
                "textStyle": {},
                "top": "0dp",
                "width": "45%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblCurrBalanceAns = new kony.ui.Label({
                "id": "lblCurrBalanceAns",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSPSemiBold42px",
                "text": "$4,000.00",
                "textStyle": {},
                "top": "0dp",
                "width": "45%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxAnswer.add(lblBudgetAmountAns, lblCurrBalanceAns);
            var flxWarn = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "flxWarn",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFFRoundedE3E3E32px",
                "top": "0dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxWarn.setDefaultUnit(kony.flex.DP);
            var lblWarn = new kony.ui.Image2({
                "centerY": "50%",
                "height": "18dp",
                "id": "lblWarn",
                "isVisible": true,
                "left": "20dp",
                "skin": "slImage",
                "src": "alert.png",
                "width": "18dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblMessage = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblMessage",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("i18n.savingspot.partiallyFunded"),
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
            flxWarn.add(lblWarn, lblMessage);
            flxHeadCard.add(flxChart, flxTitle, flxAnswer, flxWarn);
            var flxDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "150dp",
                "id": "flxDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "1dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "12dp",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxDetails.setDefaultUnit(kony.flex.DP);
            var flxWithdrawn = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "35dp",
                "id": "flxWithdrawn",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxWithdrawn.setDefaultUnit(kony.flex.DP);
            var lblWithdrawn = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblWithdrawn",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknMMLeftLabels",
                "text": kony.i18n.getLocalizedString("i18n.savingspot.withdrawnAmount"),
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
            var lblWithdrawnValue = new kony.ui.Label({
                "centerY": "50%",
                "height": "30dp",
                "id": "lblWithdrawnValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP28px",
                "text": "$500.00",
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
            flxWithdrawn.add(lblWithdrawn, lblWithdrawnValue);
            var flxExcessAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknFlxf9f9f9",
                "height": "38dp",
                "id": "flxExcessAmount",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxExcessAmount.setDefaultUnit(kony.flex.DP);
            var lblExcessAmount = new kony.ui.Label({
                "id": "lblExcessAmount",
                "isVisible": true,
                "left": "25dp",
                "skin": "sknMMLeftLabels",
                "text": "Excess Amount:",
                "textStyle": {},
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblExcessAmountValue = new kony.ui.Label({
                "id": "lblExcessAmountValue",
                "isVisible": true,
                "right": "25dp",
                "skin": "sknLbl424242SSP28px",
                "text": "$1,000.00",
                "textStyle": {},
                "top": "10dp",
                "width": "45%",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxExcessAmount.add(lblExcessAmount, lblExcessAmountValue);
            var flxDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "35dp",
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
            var lblDate = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDate",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknMMLeftLabels",
                "text": kony.i18n.getLocalizedString("i18n.savingspot.createdDate"),
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
            var lblDateValue = new kony.ui.Label({
                "centerY": "50%",
                "height": "30dp",
                "id": "lblDateValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSP28px",
                "text": "07/27/2020",
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
            flxDate.add(lblDate, lblDateValue);
            flxDetails.add(flxWithdrawn, flxExcessAmount, flxDate);
            flxScroll.add(flxHeadCard, flxDetails);
            var flxBottom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "3%",
                "clipBounds": true,
                "id": "flxBottom",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxBottom.setDefaultUnit(kony.flex.DP);
            var btnFund = new kony.ui.Button({
                "bottom": "20dp",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnFund",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e426pxEnabled",
                "text": kony.i18n.getLocalizedString("i18n.savingspot.fund"),
                "top": "30dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var btnWithdraw = new kony.ui.Button({
                "bottom": "20dp",
                "focusSkin": "sknBtnffffffBorder0095e40095e4SSP28px",
                "height": "40dp",
                "id": "btnWithdraw",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtnffffffBorder0095e40095e4SSP28px",
                "text": kony.i18n.getLocalizedString("i18n.savingspot.withdraw"),
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var btnCloseSavingsBudget = new kony.ui.Button({
                "bottom": "20dp",
                "focusSkin": "sknBtnffffffBorder0095e40095e4SSP28px",
                "height": "40dp",
                "id": "btnCloseSavingsBudget",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtnffffffBorder0095e40095e4SSP28px",
                "text": kony.i18n.getLocalizedString("i18n.savingspot.closeBudget"),
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxBottom.add(btnFund, btnWithdraw, btnCloseSavingsBudget);
            this.add(flxHeader, flxScroll, flxBottom);
        };
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "metaData": {
                "title": ""
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
            "addWidgets": addWidgetsfrmBudgetPotDetails,
            "enabledForIdleTimeout": true,
            "id": "frmBudgetPotDetails",
            "init": controller.AS_Form_d4e307bd24304dad8dc1d88e8295c8a7,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_ibd701b6204b46f6ba793c79083f0e93(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": "Christmas Budget Mock"
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