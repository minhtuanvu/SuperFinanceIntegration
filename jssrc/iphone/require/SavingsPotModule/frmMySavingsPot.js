define("SavingsPotModule/frmMySavingsPot", function() {
    return function(controller) {
        function addWidgetsfrmMySavingsPot() {
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
                        "text": "My Savings Pot"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxHeaderSearchbox = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxHeaderSearchbox",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffffShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxHeaderSearchbox.setDefaultUnit(kony.flex.DP);
            var customSearchbox = new com.kmb.Search.customSearchbox({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "40dp",
                "id": "customSearchbox",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "customSearchbox": {
                        "top": "0dp"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeaderSearchbox.add(customSearchbox);
            var flxMainContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "60dp",
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "-1dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "130dp",
                "id": "flxContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxGradientBlue",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxContainer.setDefaultUnit(kony.flex.DP);
            var flxShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "5dp",
                "id": "flxShadow",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadow.setDefaultUnit(kony.flex.DP);
            flxShadow.add();
            var flxBalance = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "130dp",
                "id": "flxBalance",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "-1dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBalance.setDefaultUnit(kony.flex.DP);
            var lblAvailableBalance = new kony.ui.Label({
                "id": "lblAvailableBalance",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlblffffffsb15px",
                "text": "My Principal acc...2343",
                "textStyle": {},
                "top": "12dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxCurrentBal = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxCurrentBal",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "20dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "16dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCurrentBal.setDefaultUnit(kony.flex.DP);
            var lblCurrentBalance = new kony.ui.Label({
                "height": "25dp",
                "id": "lblCurrentBalance",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlblB8DCFF15px",
                "text": "Total Balance",
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
            flxCurrentBal.add(lblCurrentBalance);
            var lblBalanceValue = new kony.ui.Label({
                "id": "lblBalanceValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLblffffffSSP56px",
                "text": "$2,212,783.54",
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
            var flxPendingDeposit = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxPendingDeposit",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "85dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPendingDeposit.setDefaultUnit(kony.flex.DP);
            var lblPendingDeposits = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblPendingDeposits",
                "isVisible": true,
                "left": "28.00%",
                "skin": "sknLblb8dcffSSP26px",
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
            flxPendingDeposit.add(lblPendingDeposits);
            var flxPendingWithdrawals = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxPendingWithdrawals",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "105dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPendingWithdrawals.setDefaultUnit(kony.flex.DP);
            var lblPendingWithdrawals = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblPendingWithdrawals",
                "isVisible": true,
                "left": "28.00%",
                "skin": "sknLblb8dcffSSP26px",
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
            flxPendingWithdrawals.add(lblPendingWithdrawals);
            var lblDueDate = new kony.ui.Label({
                "centerX": 50,
                "id": "lblDueDate",
                "isVisible": true,
                "skin": "sknLblffffff22px",
                "text": "(Due on 12/01/2018)",
                "textStyle": {},
                "top": "105dp",
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
            var flxBank = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxBank",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "10dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "125dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBank.setDefaultUnit(kony.flex.DP);
            var flxBankName = new kony.ui.Label({
                "id": "flxBankName",
                "isVisible": true,
                "left": "26%",
                "skin": "sknLblb8dcffSSP26px",
                "text": "Bank Name",
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
            var flxBankValue = new kony.ui.Label({
                "id": "flxBankValue",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknLblb8dcffSSP26px",
                "text": "Bank of America",
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
            flxBank.add(flxBankName, flxBankValue);
            var flxOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "20dp",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxOptions",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxOptions.setDefaultUnit(kony.flex.DP);
            var btnWithdrawCash = new kony.ui.Button({
                "focusSkin": "sknbtn0a78d1SSPffffff100pr",
                "height": "100%",
                "id": "btnWithdrawCash",
                "isVisible": true,
                "left": "4%",
                "skin": "sknBtnffffffBorderffffffSSP28px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.withdrawCash"),
                "top": "0dp",
                "width": "35%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var btnStatements = new kony.ui.Button({
                "focusSkin": "sknbtn0a78d1SSPffffff100pr",
                "height": "100%",
                "id": "btnStatements",
                "isVisible": true,
                "left": "4%",
                "onClick": controller.AS_Button_a8ae3be830d345b389929cbf8da4ccec,
                "skin": "sknBtnffffffBorderffffffSSP28px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.statements"),
                "top": "0dp",
                "width": "35%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var btnThreeDots = new kony.ui.Button({
                "focusSkin": "sknbtn0a78d1SSPffffff100pr",
                "height": "100%",
                "id": "btnThreeDots",
                "isVisible": true,
                "left": "4.00%",
                "skin": "sknBtnffffffBorderffffffSSP28px",
                "text": "• • •",
                "top": 0,
                "width": "15%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxOptions.add(btnWithdrawCash, btnStatements, btnThreeDots);
            flxBalance.add(lblAvailableBalance, flxCurrentBal, lblBalanceValue, flxPendingDeposit, flxPendingWithdrawals, lblDueDate, flxBank, flxOptions);
            flxContainer.add(flxShadow, flxBalance);
            var flxSeperator2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "20dp",
                "id": "flxSeperator2",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBlueHeaderShadow",
                "top": "-40dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSeperator2.setDefaultUnit(kony.flex.DP);
            flxSeperator2.add();
            var flxConsent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "50dp",
                "id": "flxConsent",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "konympassknFlxFFFFFFBGRounded10",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxConsent.setDefaultUnit(kony.flex.DP);
            var imgSym = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgSym",
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
            var lblWarning = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblWarning",
                "isVisible": true,
                "left": "70dp",
                "skin": "sknlblFF5D6E",
                "text": "Your connection has expired. \n Tap here to renew it.",
                "textStyle": {},
                "top": 0,
                "width": "60%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxConsent.add(imgSym, lblWarning);
            var flxMyGoalsHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "f9f9",
                "height": "68dp",
                "id": "flxMyGoalsHeader",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxMyGoalsHeader.setDefaultUnit(kony.flex.DP);
            var flxMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "68dp",
                "id": "flxMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMain.setDefaultUnit(kony.flex.DP);
            var flxSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxe3e3e3",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {}, {});
            flxSeparator.setDefaultUnit(kony.flex.DP);
            flxSeparator.add();
            var lblMyGoals = new kony.ui.Label({
                "height": "25dp",
                "id": "lblMyGoals",
                "isVisible": true,
                "left": "20dp",
                "maxNumberOfLines": 1,
                "maxWidth": "40%",
                "skin": "sknLbl424242SSPSemiBold26px",
                "text": "My Goals (2)",
                "textStyle": {},
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "top": "26dp",
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
            var lblAvailableBalanceValue = new kony.ui.Label({
                "height": "25dp",
                "id": "lblAvailableBalanceValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSPSemiBold42px",
                "text": "$ 28,000",
                "textStyle": {},
                "top": "12dp",
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
            var lblAvailBal = new kony.ui.Label({
                "bottom": "15dp",
                "height": "25dp",
                "id": "lblAvailBal",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl727272SSPReg34Px",
                "text": "Available Balance",
                "textStyle": {},
                "top": "39dp",
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
            flxMain.add(flxSeparator, lblMyGoals, lblAvailableBalanceValue, lblAvailBal);
            flxMyGoalsHeader.add(flxMain);
            var segMyGoals = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgGoalStatus": "activegreendot.png",
                    "lblCur": "Label",
                    "lblGoalCompleteStatus": "Complete",
                    "lblGoalCompleteStatusPercentage": "75%",
                    "lblGoalDurationLeft": "22 Months left",
                    "lblGoalName": "Tesla Electric Car ",
                    "lblGoalStatus": "On Track",
                    "lblMaxGoalAmount": "$12,000",
                    "lblMinGoalAmount": "$1,000"
                }],
                "groupCells": false,
                "id": "segMyGoals",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Focus",
                "rowTemplate": "flxMyGoals",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxExceeded": "flxExceeded",
                    "flxMain": "flxMain",
                    "flxMyGoals": "flxMyGoals",
                    "flxProgressBar": "flxProgressBar",
                    "flxRow1": "flxRow1",
                    "flxRow2": "flxRow2",
                    "flxRow4": "flxRow4",
                    "flxSeparator": "flxSeparator",
                    "flxSpent": "flxSpent",
                    "flxTarget": "flxTarget",
                    "imgGoalStatus": "imgGoalStatus",
                    "lblCur": "lblCur",
                    "lblGoalCompleteStatus": "lblGoalCompleteStatus",
                    "lblGoalCompleteStatusPercentage": "lblGoalCompleteStatusPercentage",
                    "lblGoalDurationLeft": "lblGoalDurationLeft",
                    "lblGoalName": "lblGoalName",
                    "lblGoalStatus": "lblGoalStatus",
                    "lblMaxGoalAmount": "lblMaxGoalAmount",
                    "lblMinGoalAmount": "lblMinGoalAmount"
                },
                "widgetSkin": "sknSegffffff",
                "width": "100%",
                "zIndex": 4
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": true,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": true,
                "indicator": constants.SEGUI_NONE,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            var flxNoGoals = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "1dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "20%",
                "id": "flxNoGoals",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxNoGoals.setDefaultUnit(kony.flex.DP);
            var lblNoGoal = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblNoGoal",
                "isVisible": true,
                "skin": "sknlbl727272SSP93pr",
                "text": "You don't have Savings Goal",
                "textStyle": {},
                "top": "40dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblNoGoalPot = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblNoGoalPot",
                "isVisible": true,
                "skin": "sknlbl727272SSP93pr",
                "text": "Please create a Savings Goal.",
                "textStyle": {},
                "top": "60dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxNoGoals.add(lblNoGoal, lblNoGoalPot);
            var flxSectionSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "7dp",
                "id": "flxSectionSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSectionSeparator.setDefaultUnit(kony.flex.DP);
            flxSectionSeparator.add();
            var flxMyBudgetsHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "f9f9",
                "height": "68dp",
                "id": "flxMyBudgetsHeader",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxMyBudgetsHeader.setDefaultUnit(kony.flex.DP);
            var flxMainBudgetsHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "68dp",
                "id": "flxMainBudgetsHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainBudgetsHeader.setDefaultUnit(kony.flex.DP);
            var flxSeparator1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "right": "20dp",
                "skin": "sknFlxe3e3e3",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {}, {});
            flxSeparator1.setDefaultUnit(kony.flex.DP);
            flxSeparator1.add();
            var lblMyBudgets = new kony.ui.Label({
                "id": "lblMyBudgets",
                "isVisible": true,
                "left": "20dp",
                "maxNumberOfLines": 1,
                "maxWidth": "40%",
                "skin": "sknLbl424242SSPSemiBold26px",
                "text": "My Budgets (2)",
                "textStyle": {},
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "top": "26dp",
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
            var lblBudgetAvailBalValue = new kony.ui.Label({
                "height": "25dp",
                "id": "lblBudgetAvailBalValue",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbl424242SSPSemiBold42px",
                "text": "$ 28,000",
                "textStyle": {},
                "top": "12dp",
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
            var lblBudgetAvailBal = new kony.ui.Label({
                "bottom": "15dp",
                "height": "19dp",
                "id": "lblBudgetAvailBal",
                "isVisible": true,
                "right": "20dp",
                "skin": "sknLbla0a0a022px",
                "text": "Available Balance",
                "textStyle": {},
                "top": "39dp",
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
            flxMainBudgetsHeader.add(flxSeparator1, lblMyBudgets, lblBudgetAvailBalValue, lblBudgetAvailBal);
            flxMyBudgetsHeader.add(flxMainBudgetsHeader);
            var segMyBudgets = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgGoalStatus": "alert_2.png",
                    "imgWarnImg": "alert.png",
                    "lblBudgetAmount": "$ 10,000",
                    "lblBudgetName": "Christmas Budget",
                    "lblGoalCompleteStatus": "$4,000",
                    "lblGoalDurationLeft": "Current Balance",
                    "lblMaxBudgetVal": "100%",
                    "lblMinBudgetVal": "0%",
                    "lblTransfer": "Initiate Transfer",
                    "lblWarnImg": "Deposit pending"
                }],
                "groupCells": false,
                "id": "segMyBudgets",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Focus",
                "rowTemplate": "flxMyBudgets",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxClick": "flxClick",
                    "flxExceeded": "flxExceeded",
                    "flxMain": "flxMain",
                    "flxMyBudgets": "flxMyBudgets",
                    "flxProgressBar": "flxProgressBar",
                    "flxRow1": "flxRow1",
                    "flxRow2": "flxRow2",
                    "flxRow4": "flxRow4",
                    "flxRow5": "flxRow5",
                    "flxSeparator": "flxSeparator",
                    "flxSpent": "flxSpent",
                    "flxTarget": "flxTarget",
                    "imgGoalStatus": "imgGoalStatus",
                    "imgWarnImg": "imgWarnImg",
                    "lblBudgetAmount": "lblBudgetAmount",
                    "lblBudgetName": "lblBudgetName",
                    "lblGoalCompleteStatus": "lblGoalCompleteStatus",
                    "lblGoalDurationLeft": "lblGoalDurationLeft",
                    "lblMaxBudgetVal": "lblMaxBudgetVal",
                    "lblMinBudgetVal": "lblMinBudgetVal",
                    "lblTransfer": "lblTransfer",
                    "lblWarnImg": "lblWarnImg"
                },
                "widgetSkin": "sknSegffffff",
                "width": "100%",
                "zIndex": 4
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": true,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": true,
                "indicator": constants.SEGUI_NONE,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            var flxNoBudgets = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "1dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "20%",
                "id": "flxNoBudgets",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxNoBudgets.setDefaultUnit(kony.flex.DP);
            var lblNoBudgets = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblNoBudgets",
                "isVisible": true,
                "skin": "sknlbl727272SSP93pr",
                "text": "You don't have Savings Budget",
                "textStyle": {},
                "top": "40dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblNoBudgetPot = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblNoBudgetPot",
                "isVisible": true,
                "skin": "sknlbl727272SSP93pr",
                "text": "Please create a Savings Budget",
                "textStyle": {},
                "top": "60dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxNoBudgets.add(lblNoBudgets, lblNoBudgetPot);
            var btnCreateSavingsPot = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnCreateSavingsPot",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": "Create New Savings Pot",
                "top": "8%",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var flxSpace = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "20dp",
                "id": "flxSpace",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSpace.setDefaultUnit(kony.flex.DP);
            flxSpace.add();
            flxMainContainer.add(flxContainer, flxSeperator2, flxConsent, flxMyGoalsHeader, segMyGoals, flxNoGoals, flxSectionSeparator, flxMyBudgetsHeader, segMyBudgets, flxNoBudgets, btnCreateSavingsPot, flxSpace);
            var btnChatbot = new kony.ui.Button({
                "bottom": "70dp",
                "focusSkin": "sknbtnChatbotFocus",
                "height": "60dp",
                "id": "btnChatbot",
                "isVisible": false,
                "right": "10dp",
                "skin": "sknbtnImage",
                "width": "60dp",
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var flxGradient = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "300dp",
                "id": "flxGradient",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxGradientBlue",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxGradient.setDefaultUnit(kony.flex.DP);
            flxGradient.add();
            var flxNoTransactions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "1dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "90%",
                "id": "flxNoTransactions",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "56dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxNoTransactions.setDefaultUnit(kony.flex.DP);
            var flxContains = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "130dp",
                "id": "flxContains",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxGradientBlue",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxContains.setDefaultUnit(kony.flex.DP);
            var flxShadow1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "5dp",
                "id": "flxShadow1",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadow1.setDefaultUnit(kony.flex.DP);
            flxShadow1.add();
            var flxBalance1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "130dp",
                "id": "flxBalance1",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "-1dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBalance1.setDefaultUnit(kony.flex.DP);
            var lblAvailableBalance1 = new kony.ui.Label({
                "id": "lblAvailableBalance1",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknlblffffffsb15px",
                "text": "My Principal acc...2343",
                "textStyle": {},
                "top": "12dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxCurrentBal1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxCurrentBal1",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "20dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "16dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCurrentBal1.setDefaultUnit(kony.flex.DP);
            var lblCurrentBalance1 = new kony.ui.Label({
                "height": "25dp",
                "id": "lblCurrentBalance1",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlblB8DCFF15px",
                "text": "Total Balance",
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
            flxCurrentBal1.add(lblCurrentBalance1);
            var lblBalanceValue1 = new kony.ui.Label({
                "id": "lblBalanceValue1",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLblffffffSSP56px",
                "text": "$2,212,783.54",
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
            flxBalance1.add(lblAvailableBalance1, flxCurrentBal1, lblBalanceValue1);
            flxContains.add(flxShadow1, flxBalance1);
            var lblNoSavingsPot = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblNoSavingsPot",
                "isVisible": true,
                "skin": "sknlbl727272SSP93pr",
                "text": "You don't have Savings Pot",
                "textStyle": {},
                "top": "170dp",
                "width": "50%",
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var blNoSavingsPotMSg = new kony.ui.Label({
                "centerX": "50%",
                "id": "blNoSavingsPotMSg",
                "isVisible": true,
                "skin": "sknlbl727272SSP93pr",
                "text": "Please create a savings pot.",
                "textStyle": {},
                "top": "190dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var btnCreateSavingsPot1 = new kony.ui.Button({
                "bottom": "2%",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnCreateSavingsPot1",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": "Create New Savings Pot",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxNoTransactions.add(flxContains, lblNoSavingsPot, blNoSavingsPotMSg, btnCreateSavingsPot1);
            this.add(flxHeader, flxHeaderSearchbox, flxMainContainer, btnChatbot, flxGradient, flxNoTransactions);
        };
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": false,
            "action": controller.AS_BarButtonItem_d5f57b37ce714b9c887134435b7f515d,
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
            "addWidgets": addWidgetsfrmMySavingsPot,
            "bounces": true,
            "enableScrolling": true,
            "enabledForIdleTimeout": true,
            "id": "frmMySavingsPot",
            "init": controller.AS_Form_cb67feab8f6d40d58545aa9583690a5e,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_de54c2cd6304459b9e2af82bc8ce1a10(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": "My Savings Pot"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "bounces": true,
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