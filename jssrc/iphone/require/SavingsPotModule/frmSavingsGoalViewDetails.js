define("SavingsPotModule/frmSavingsGoalViewDetails", function() {
    return function(controller) {
        function addWidgetsfrmSavingsGoalViewDetails() {
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
                        "text": kony.i18n.getLocalizedString("kony.mb.common.Edit"),
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
                        "height": kony.flex.USE_PREFFERED_SIZE,
                        "left": "15%",
                        "text": "Tesla Electric Car",
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
                "bottom": "0dp",
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
            var flxFrom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxFrom",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5%",
                "isModalContainer": false,
                "skin": "sknFlxffffffRadius10RoundBorder",
                "top": "20dp",
                "width": "90%",
                "zIndex": 5
            }, {}, {});
            flxFrom.setDefaultUnit(kony.flex.DP);
            var lblGaol = new kony.ui.Label({
                "height": "40dp",
                "id": "lblGaol",
                "isVisible": false,
                "left": "40dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("i18n.savingspot.goalAmount"),
                "textStyle": {},
                "top": "140dp",
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
            var lblGoalAmountvalue = new kony.ui.Label({
                "height": "50dp",
                "id": "lblGoalAmountvalue",
                "isVisible": true,
                "left": "40dp",
                "skin": "sknLbl424242SSPSemiBold42px",
                "text": "$12,000.00",
                "textStyle": {},
                "top": "165dp",
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
            var imgGoalAmount = new kony.ui.Image2({
                "height": "15dp",
                "id": "imgGoalAmount",
                "isVisible": false,
                "left": "20dp",
                "skin": "slImage",
                "src": "pageoffdot.png",
                "top": "153dp",
                "width": "15dp",
                "zIndex": 5
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblCurrentbalance = new kony.ui.Label({
                "height": "40dp",
                "id": "lblCurrentbalance",
                "isVisible": false,
                "right": "40dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.accounts.CurrentBalance"),
                "textStyle": {},
                "top": "140dp",
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
            var lblCurrentBalancevalue = new kony.ui.Label({
                "height": "50dp",
                "id": "lblCurrentBalancevalue",
                "isVisible": true,
                "right": "40dp",
                "skin": "sknLbl424242SSPSemiBold42px",
                "text": "$12,000.00",
                "textStyle": {},
                "top": "165dp",
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
            var imgcurrentBalance = new kony.ui.Image2({
                "height": "15dp",
                "id": "imgcurrentBalance",
                "isVisible": false,
                "right": "137dp",
                "skin": "slImage",
                "src": "pageondot_0b0de5c075ac444.png",
                "top": "153dp",
                "width": "15dp",
                "zIndex": 5
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxRemainingSavings = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "20dp",
                "clipBounds": true,
                "id": "flxRemainingSavings",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "5%",
                "isModalContainer": false,
                "skin": "sknFlxffffffRadius10RoundBorder",
                "top": "220dp",
                "width": "90%",
                "zIndex": 5
            }, {}, {});
            flxRemainingSavings.setDefaultUnit(kony.flex.DP);
            var flxSavings = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxSavings",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxSavings.setDefaultUnit(kony.flex.DP);
            var lblRemainingSavings = new kony.ui.Label({
                "height": "100%",
                "id": "lblRemainingSavings",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": "Remaining Savings:",
                "textStyle": {},
                "top": "0dp",
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
            var lblSavingsAmount = new kony.ui.Label({
                "height": "100%",
                "id": "lblSavingsAmount",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknLbl424242SSPSemiBold42px",
                "text": "$11,000.00",
                "textStyle": {},
                "top": "0dp",
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
            flxSavings.add(lblRemainingSavings, lblSavingsAmount);
            var flxInSufficient = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "10dp",
                "clipBounds": true,
                "id": "flxInSufficient",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2dp",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxInSufficient.setDefaultUnit(kony.flex.DP);
            var imgAlert = new kony.ui.Image2({
                "height": "30dp",
                "id": "imgAlert",
                "isVisible": true,
                "left": "12dp",
                "skin": "slImage",
                "src": "alert.png",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 5
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblMessage = new kony.ui.Label({
                "id": "lblMessage",
                "isVisible": true,
                "left": "40dp",
                "skin": "sknLbl424242SSP28px",
                "text": "Your Accont balance isn't Sufficient to make monthly debit Amount",
                "textStyle": {},
                "top": "5dp",
                "width": "85%",
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxInSufficient.add(imgAlert, lblMessage);
            var flxLastDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "5dp",
                "clipBounds": true,
                "height": "45dp",
                "id": "flxLastDate",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxLastDate.setDefaultUnit(kony.flex.DP);
            var lbllastPaid = new kony.ui.Label({
                "height": "40dp",
                "id": "lbllastPaid",
                "isVisible": true,
                "left": "40dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": "Last Paid:",
                "textStyle": {},
                "top": "0dp",
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
            var lbllastPaidValue = new kony.ui.Label({
                "height": "40dp",
                "id": "lbllastPaidValue",
                "isVisible": true,
                "left": "100dp",
                "skin": "sknLbl727272SSPReg22px",
                "text": "08/13/2020",
                "textStyle": {},
                "top": "0dp",
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
            flxLastDate.add(lbllastPaid, lbllastPaidValue);
            flxRemainingSavings.add(flxSavings, flxInSufficient, flxLastDate);
            var browserChart = new kony.ui.Browser({
                "centerX": "50%",
                "detectTelNumber": true,
                "enableZoom": false,
                "height": "180dp",
                "id": "browserChart",
                "isVisible": true,
                "left": "24dp",
                "setAsContent": false,
                "requestURLConfig": {
                    "URL": "chartist/goaldonut.html",
                    "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
                },
                "top": "-10dp",
                "width": "50%",
                "zIndex": 1
            }, {}, {
                "browserType": constants.BROWSER_TYPE_WKWEBVIEW
            });
            var flxOnTrack = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxOnTrack",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "right": "5dp",
                "skin": "slFbox",
                "top": "12dp",
                "width": "110dp",
                "zIndex": 5
            }, {}, {});
            flxOnTrack.setDefaultUnit(kony.flex.DP);
            var lblDot = new kony.ui.Label({
                "height": "8dp",
                "id": "lblDot",
                "isVisible": true,
                "skin": "lbldotgreen",
                "text": "Label",
                "textStyle": {},
                "top": "12dp",
                "width": "8dp",
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblOnTrack = new kony.ui.Label({
                "height": "30dp",
                "id": "lblOnTrack",
                "isVisible": true,
                "skin": "sknLbl424242SSReg30px",
                "text": "On Track",
                "textStyle": {},
                "top": "-1dp",
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
            var imgDot = new kony.ui.Image2({
                "height": "15dp",
                "id": "imgDot",
                "isVisible": false,
                "skin": "slImage",
                "src": "activegreendot.png",
                "top": "8dp",
                "width": "15dp",
                "zIndex": 5
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxOnTrack.add(lblDot, lblOnTrack, imgDot);
            var flxNotonTrack = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxNotonTrack",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "5dp",
                "skin": "slFbox",
                "top": "12dp",
                "width": "130dp",
                "zIndex": 5
            }, {}, {});
            flxNotonTrack.setDefaultUnit(kony.flex.DP);
            var lblNotOnTrack = new kony.ui.Label({
                "height": "30dp",
                "id": "lblNotOnTrack",
                "isVisible": true,
                "left": "40dp",
                "skin": "sknLbl424242SSReg30px",
                "text": "Not On Track",
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
            var imgDotred = new kony.ui.Image2({
                "height": "15dp",
                "id": "imgDotred",
                "isVisible": true,
                "left": "10dp",
                "skin": "slImage",
                "src": "japaneseyen.png",
                "top": "8dp",
                "width": "15dp",
                "zIndex": 5
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxNotonTrack.add(lblNotOnTrack, imgDotred);
            var lblPercent = new kony.ui.Label({
                "centerX": "49%",
                "id": "lblPercent",
                "isVisible": true,
                "skin": "sknLbl424242SSpSemibold56px",
                "text": "0%",
                "textStyle": {},
                "top": "60dp",
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
            var lblComplete = new kony.ui.Label({
                "centerX": "49%",
                "id": "lblComplete",
                "isVisible": true,
                "skin": "sknLbl727272SSPR15px",
                "text": "Complete",
                "textStyle": {},
                "top": "90dp",
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
                "top": "155dp",
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
                "height": "20dp",
                "id": "imgBudget",
                "isVisible": true,
                "left": "15dp",
                "skin": "slImage",
                "src": "inactivegreydot.png",
                "top": "0dp",
                "width": "20dp",
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
                "text": "Goal Amount",
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
                "right": "30dp",
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
            var imgCur = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgCur",
                "isVisible": false,
                "left": "15dp",
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
                "top": "6dp",
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
            flxRightHori.add(lblCurrBalanceQn, imgCur, lblCur);
            flxTitle.add(flxHori, flxRightHori);
            flxFrom.add(lblGaol, lblGoalAmountvalue, imgGoalAmount, lblCurrentbalance, lblCurrentBalancevalue, imgcurrentBalance, flxRemainingSavings, browserChart, flxOnTrack, flxNotonTrack, lblPercent, lblComplete, flxTitle);
            var flxDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "12dp",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxDetails.setDefaultUnit(kony.flex.DP);
            var flxWithDraw = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknFlxf9f9f9",
                "height": "38dp",
                "id": "flxWithDraw",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxWithDraw.setDefaultUnit(kony.flex.DP);
            var lblWithdraw = new kony.ui.Label({
                "id": "lblWithdraw",
                "isVisible": true,
                "left": "25dp",
                "skin": "sknMMLeftLabels",
                "text": kony.i18n.getLocalizedString("i18n.savingspot.withdrawnAmount"),
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
            var lblWithdrawValue = new kony.ui.Label({
                "id": "lblWithdrawValue",
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
            flxWithDraw.add(lblWithdraw, lblWithdrawValue);
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
            var flxMonthlyAmount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknFlxf9f9f9",
                "height": "38dp",
                "id": "flxMonthlyAmount",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMonthlyAmount.setDefaultUnit(kony.flex.DP);
            var lblMonthlyAmount = new kony.ui.Label({
                "id": "lblMonthlyAmount",
                "isVisible": true,
                "left": "25dp",
                "skin": "sknMMLeftLabels",
                "text": "Periodic Contribution:",
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
            var lblMonthlyAmountValue = new kony.ui.Label({
                "id": "lblMonthlyAmountValue",
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
            flxMonthlyAmount.add(lblMonthlyAmount, lblMonthlyAmountValue);
            var flxMonths = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknFlxf9f9f9",
                "height": "38dp",
                "id": "flxMonths",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMonths.setDefaultUnit(kony.flex.DP);
            var lblMonths = new kony.ui.Label({
                "id": "lblMonths",
                "isVisible": true,
                "left": "25dp",
                "skin": "sknMMLeftLabels",
                "text": kony.i18n.getLocalizedString("i18n.savingspot.periodOfMonthsAck"),
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
            var lblMonthsValue = new kony.ui.Label({
                "id": "lblMonthsValue",
                "isVisible": true,
                "right": "25dp",
                "skin": "sknLbl424242SSP28px",
                "text": "25",
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
            flxMonths.add(lblMonths, lblMonthsValue);
            var flxFrequency = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknFlxf9f9f9",
                "height": "38dp",
                "id": "flxFrequency",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFrequency.setDefaultUnit(kony.flex.DP);
            var lblFrequency = new kony.ui.Label({
                "id": "lblFrequency",
                "isVisible": true,
                "left": "25dp",
                "skin": "sknMMLeftLabels",
                "text": "Frequency Day:",
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
            var lblFrequencyvalue = new kony.ui.Label({
                "id": "lblFrequencyvalue",
                "isVisible": true,
                "right": "25dp",
                "skin": "sknLbl424242SSP28px",
                "text": "22nd of every Month",
                "textStyle": {},
                "top": "10dp",
                "width": "50%",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxFrequency.add(lblFrequency, lblFrequencyvalue);
            var flxCreateddate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknFlxf9f9f9",
                "height": "38dp",
                "id": "flxCreateddate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCreateddate.setDefaultUnit(kony.flex.DP);
            var lblCreatedDate = new kony.ui.Label({
                "id": "lblCreatedDate",
                "isVisible": true,
                "left": "25dp",
                "skin": "sknMMLeftLabels",
                "text": kony.i18n.getLocalizedString("i18n.savingspot.createdDate"),
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
            var lblCreatedDateValue = new kony.ui.Label({
                "id": "lblCreatedDateValue",
                "isVisible": true,
                "right": "25dp",
                "skin": "sknLbl424242SSP28px",
                "text": "06/06/2025",
                "textStyle": {},
                "top": "10dp",
                "width": "50%",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxCreateddate.add(lblCreatedDate, lblCreatedDateValue);
            var flxStartDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknFlxf9f9f9",
                "height": "38dp",
                "id": "flxStartDate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxStartDate.setDefaultUnit(kony.flex.DP);
            var lblStartDate = new kony.ui.Label({
                "id": "lblStartDate",
                "isVisible": true,
                "left": "25dp",
                "skin": "sknMMLeftLabels",
                "text": kony.i18n.getLocalizedString("i18n.savingspot.startDate"),
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
            var lblStartDateValue = new kony.ui.Label({
                "id": "lblStartDateValue",
                "isVisible": true,
                "right": "25dp",
                "skin": "sknLbl424242SSP28px",
                "text": "06/06/2025",
                "textStyle": {},
                "top": "10dp",
                "width": "50%",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxStartDate.add(lblStartDate, lblStartDateValue);
            var flxFinalDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknFlxf9f9f9",
                "height": "38dp",
                "id": "flxFinalDate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFinalDate.setDefaultUnit(kony.flex.DP);
            var lblFinalDate = new kony.ui.Label({
                "id": "lblFinalDate",
                "isVisible": true,
                "left": "25dp",
                "skin": "sknMMLeftLabels",
                "text": kony.i18n.getLocalizedString("i18n.savingspot.finalDateAck"),
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
            var lblFinalDateValue = new kony.ui.Label({
                "id": "lblFinalDateValue",
                "isVisible": true,
                "right": "25dp",
                "skin": "sknLbl424242SSP28px",
                "text": "06/06/2025",
                "textStyle": {},
                "top": "10dp",
                "width": "50%",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxFinalDate.add(lblFinalDate, lblFinalDateValue);
            flxDetails.add(flxWithDraw, flxExcessAmount, flxMonthlyAmount, flxMonths, flxFrequency, flxCreateddate, flxStartDate, flxFinalDate);
            var flxButtons = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxButtons",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "30dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxButtons.setDefaultUnit(kony.flex.DP);
            var btnSaveConfirm = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnSaveConfirm",
                "isVisible": true,
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("i18n.savingspot.fund"),
                "top": "5dp",
                "width": "91%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var btnClose = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtnffffffBorder0095e40095e4SSP28px",
                "height": "40dp",
                "id": "btnClose",
                "isVisible": true,
                "skin": "sknBtnffffffBorder0095e40095e4SSP28px",
                "text": kony.i18n.getLocalizedString("i18n.savingspot.withdraw"),
                "width": "91%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var btnCloseSavingsGoal = new kony.ui.Button({
                "bottom": "20dp",
                "focusSkin": "sknBtnffffffBorder0095e40095e4SSP28px",
                "height": "40dp",
                "id": "btnCloseSavingsGoal",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtnffffffBorder0095e40095e4SSP28px",
                "text": kony.i18n.getLocalizedString("i18n.savingspot.closeSavingGoal"),
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
            flxButtons.add(btnSaveConfirm, btnClose, btnCloseSavingsGoal);
            flxMain.add(flxFrom, flxDetails, flxButtons);
            var flxPopup = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "10.50%",
                "id": "flxPopup",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxf54b5e",
                "top": "0dp",
                "width": "100%",
                "zIndex": 200
            }, {}, {});
            flxPopup.setDefaultUnit(kony.flex.DP);
            var customPopup = new com.kmb.common.customPopup({
                "height": "100%",
                "id": "customPopup",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "imgPopup": {
                        "src": "imagedrag.png"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxPopup.add(customPopup);
            this.add(flxHeader, flxMain, flxPopup);
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
            "addWidgets": addWidgetsfrmSavingsGoalViewDetails,
            "enabledForIdleTimeout": true,
            "id": "frmSavingsGoalViewDetails",
            "init": controller.AS_Form_d27cd2348a2b48b0a057d2e8aa6ae817,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_a098dcbf1079495b91cb8ae700400da6,
            "preShow": function(eventobject) {
                controller.AS_Form_f827d80c4ae946249988ed2360f45f85(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": "Tesla Electric Car"
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