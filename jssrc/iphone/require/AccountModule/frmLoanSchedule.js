define("AccountModule/frmLoanSchedule", function() {
    return function(controller) {
        function addWidgetsfrmLoanSchedule() {
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
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgBack": {
                        "src": "backbutton.png"
                    },
                    "imgSearch": {
                        "height": "25dp",
                        "src": "info.png",
                        "width": "25dp"
                    },
                    "lblLocateUs": {
                        "text": "Loan Schedule"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
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
            var flxDonutChart = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": false,
                "id": "flxDonutChart",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxDonutChart.setDefaultUnit(kony.flex.DP);
            var donutChartNative = new com.temenos.infinity.accountsummary.donutChartNative({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "id": "donutChartNative",
                "isVisible": true,
                "left": "2dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "-2dp",
                "width": "100%",
                "overrides": {
                    "donutChartNative": {
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
            donutChartNative.totalTextSkin = "ICSknLbl72727217pxSSPR";
            donutChartNative.field1 = "{\"data\": \"{$.c.paidInstallmentsCount}\", \"legend\": \"Paid\", \"color\": \"2A9E05\"}";
            donutChartNative.objectServiceName = "RBObjects";
            donutChartNative.totalNumberSkin = "ICSknLbl424242SSPSB35px";
            donutChartNative.field2 = "{\"data\": \"{$.c.overDueInstallmentsCount}\", \"legend\": \"Overdue\", \"color\": \"F9256C\"}";
            donutChartNative.objectName = "Accounts";
            donutChartNative.legendSkin = "ICSknLbl72727215pxSSPR";
            donutChartNative.operationName = "getAccountDetails";
            donutChartNative.field3 = "{\"data\": \"{$.c.futureInstallmentsCount}\", \"legend\": \"Future\", \"color\": \"E3E3E3\"}";
            donutChartNative.criteria = "{\"accountID\":\"{$.c.accountID}\",\"accountType\":\"{$.c.accountType}\"}";
            donutChartNative.field4 = "";
            donutChartNative.dataSkin = "ICSknLbl424242SSPSB24px";
            donutChartNative.serviceIdentifier = "S1";
            donutChartNative.field5 = "";
            donutChartNative.field6 = "";
            flxDonutChart.add(donutChartNative);
            var flxFrom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxFrom",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxffffffRadius10RoundBorder",
                "top": "0dp",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxFrom.setDefaultUnit(kony.flex.DP);
            var lblPaidLoans = new kony.ui.Label({
                "height": "50dp",
                "id": "lblPaidLoans",
                "isVisible": true,
                "left": "18.50%",
                "skin": "sknLbl424242SSPSemiBold42px",
                "text": "37",
                "textStyle": {},
                "top": "155dp",
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
            var lblOverdueLoans = new kony.ui.Label({
                "height": "50dp",
                "id": "lblOverdueLoans",
                "isVisible": true,
                "left": "44%",
                "skin": "sknLbl424242SSPSemiBold42px",
                "text": "03",
                "textStyle": {},
                "top": "155dp",
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
            var lblFutureLoans = new kony.ui.Label({
                "height": "50dp",
                "id": "lblFutureLoans",
                "isVisible": true,
                "left": "73.50%",
                "right": "40dp",
                "skin": "sknLbl424242SSPSemiBold42px",
                "text": "200",
                "textStyle": {},
                "top": "155dp",
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
            var browserChart = new kony.ui.Browser({
                "centerX": "50%",
                "detectTelNumber": true,
                "enableZoom": false,
                "height": "160dp",
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
            var lblPercent = new kony.ui.Label({
                "centerX": "49%",
                "id": "lblPercent",
                "isVisible": true,
                "skin": "sknLbl424242SSpSemibold56px",
                "text": "240",
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
                "text": "Total",
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
                "left": "15%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "20%",
                "zIndex": 1
            }, {}, {});
            flxHori.setDefaultUnit(kony.flex.DP);
            var lblPaidLoansCircle = new kony.ui.Label({
                "height": "7dp",
                "id": "lblPaidLoansCircle",
                "isVisible": true,
                "left": "5%",
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
            var lblBudgetAmountQn = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblBudgetAmountQn",
                "isVisible": true,
                "left": "3%",
                "skin": "sknLbl727272SSPReg22px",
                "text": "Paid",
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
            flxHori.add(lblPaidLoansCircle, lblBudgetAmountQn);
            var flxRightHori = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20dp",
                "id": "flxRightHori",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": false,
                "left": "40%",
                "isModalContainer": false,
                "right": "30dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "25%",
                "zIndex": 1
            }, {}, {});
            flxRightHori.setDefaultUnit(kony.flex.DP);
            var lblCur = new kony.ui.Label({
                "height": "7dp",
                "id": "lblCur",
                "isVisible": true,
                "left": "5%",
                "skin": "sknlbldotGray",
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
            var lblCurrBalanceQn = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCurrBalanceQn",
                "isVisible": true,
                "left": "3%",
                "skin": "sknLbl727272SSPReg22px",
                "text": "Overdue",
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
            flxRightHori.add(lblCur, lblCurrBalanceQn);
            var flxOverdue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20dp",
                "id": "flxOverdue",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": false,
                "left": "70%",
                "isModalContainer": false,
                "right": "30dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "30%",
                "zIndex": 1
            }, {}, {});
            flxOverdue.setDefaultUnit(kony.flex.DP);
            var lblCurFuture = new kony.ui.Label({
                "height": "7dp",
                "id": "lblCurFuture",
                "isVisible": true,
                "left": "0dp",
                "right": "7dp",
                "skin": "sknlbldotgreen",
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
            var lblFuturePays = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblFuturePays",
                "isVisible": true,
                "skin": "sknLbl727272SSPReg22px",
                "text": "Future",
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
            flxOverdue.add(lblCurFuture, lblFuturePays);
            flxTitle.add(flxHori, flxRightHori, flxOverdue);
            flxFrom.add(lblPaidLoans, lblOverdueLoans, lblFutureLoans, browserChart, lblPercent, lblComplete, flxTitle);
            var segInstallments = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [
                    [{
                            "imgUpArrow": "arrowdown.png",
                            "lblHeader": "Transactions"
                        },
                        [{
                            "lblDate": "",
                            "lblInstallmentAmount": ""
                        }]
                    ],
                    [{
                            "imgUpArrow": "arrowdown.png",
                            "lblHeader": "Transactions"
                        },
                        [{
                            "lblDate": "",
                            "lblInstallmentAmount": ""
                        }]
                    ]
                ],
                "groupCells": false,
                "id": "segInstallments",
                "isVisible": false,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Focus",
                "rowTemplate": "flxInstallments",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "sectionHeaderTemplate": "flxInstallmentsHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxInstallments": "flxInstallments",
                    "flxInstallmentsHeader": "flxInstallmentsHeader",
                    "flxSeparator": "flxSeparator",
                    "flxShadowBottom": "flxShadowBottom",
                    "flxTypeOneShadow": "flxTypeOneShadow",
                    "flximgUp": "flximgUp",
                    "imgUpArrow": "imgUpArrow",
                    "lblDate": "lblDate",
                    "lblHeader": "lblHeader",
                    "lblInstallmentAmount": "lblInstallmentAmount"
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
            var flxNoTransactions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": 400,
                "id": "flxNoTransactions",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxNoTransactions.setDefaultUnit(kony.flex.DP);
            var lblNoTransaction = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblNoTransaction",
                "isVisible": true,
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.noTransactionMsg"),
                "textStyle": {},
                "top": "200dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxNoTransactions.add(lblNoTransaction);
            var flxTransactions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "330dp",
                "id": "flxTransactions",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxTransactions.setDefaultUnit(kony.flex.DP);
            var accountsTransactionListNative = new com.temenos.infinityComponent.accountsTransactionListNative({
                "height": "100%",
                "id": "accountsTransactionListNative",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "accountsTransactionListNative": {
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
            accountsTransactionListNative.objectServiceName = "RBObjects";
            accountsTransactionListNative.sknGroupHeaderLabel = "sknLbl424242SSPRegular26px";
            accountsTransactionListNative.ListArray = "{$.S1.Transactions}";
            accountsTransactionListNative.amountFormat = "{ \"locale\":\"\", \"positiveFormat\" : \"{CS}{D}\", \"negativeFormat\" : \"-{CS}{D}\", \"fractionDigits\":\"2\"}";
            accountsTransactionListNative.field1Value = "{\"Savings\":{\"default\":{\"text\":\"{$.L1.description}\",\"fieldType\":\"label\"},\"ST1\":{\"text\":\"{$.L1.lockReason}\",\"fieldType\":\"label\"}},\"Checking\":{\"default\":{\"text\":\"{$.L1.description}\",\"fieldType\":\"label\"},\"ST1\":{\"text\":\"{$.L1.lockReason}\",\"fieldType\":\"label\"}},\"CreditCard\":{\"default\":{\"text\":\"{$.L1.description}\",\"fieldType\":\"label\"}},\"Loan\":{\"default\":{\"text\":\"{$.L1.description}\",\"fieldType\":\"label\"},\"ST3\":{\"text\":\"{$.L1.paymentDate}\",\"fieldType\":\"date\"},\"ST4\":{\"text\":\"{$.L1.paymentDate}\",\"fieldType\":\"date\"}},\"Mortgage\":{\"default\":{\"text\":\"{$.L1.description}\",\"fieldType\":\"label\"},\"ST3\":{\"text\":\"{$.L1.paymentDate}\",\"fieldType\":\"date\"},\"ST4\":{\"text\":\"{$.L1.paymentDate}\",\"fieldType\":\"date\"}},\"Deposit\":{\"default\":{\"text\":\"{$.L1.description}\",\"fieldType\":\"label\"}}}";
            accountsTransactionListNative.displayDisputeIcon = true;
            accountsTransactionListNative.iconDisputedTransaction = "disputedtransactionicon1.png";
            accountsTransactionListNative.btnSwipeableAction1 = "{\"Savings\":{\"id\":{\"ST1\":\"Dispute\",\"ST2\":\"Dispute\"},\"text\":{\"ST2\":\"Dispute\",\"ST1\":\"Dispute\"},\"btnImage\":{\"ST1\":\"dispute.png\",\"ST2\":\"dispute.png\"},\"width\":{\"ST2\":\"70DP\",\"ST1\":\"70DP\"},\"txtSkin\":{\"ST2\":\"ICSknLblFFFFFF13PX\",\"ST1\":\"ICSknLblFFFFFF13PX\"},\"skin\":{\"ST2\":\"ICSknFlx003E75\",\"ST1\":\"ICSknFlx003E75\"},\"entitlement_keys\":[],\"entitlement_action\":{\"ST1\":true,\"ST2\":true}},\"Checking\":{\"id\":{\"ST1\":\"Dispute\",\"ST2\":\"Dispute\"},\"text\":{\"ST2\":\"Dispute\",\"ST1\":\"Dispute\"},\"btnImage\":{\"ST1\":\"dispute.png\",\"ST2\":\"dispute.png\"},\"width\":{\"ST2\":\"70DP\",\"ST1\":\"70DP\"},\"txtSkin\":{\"ST2\":\"ICSknLblFFFFFF13PX\",\"ST1\":\"ICSknLblFFFFFF13PX\"},\"skin\":{\"ST2\":\"ICSknFlx003E75\",\"ST1\":\"ICSknFlx003E75\"},\"entitlement_keys\":[],\"entitlement_action\":{\"ST1\":false,\"ST2\":true}},\"CreditCard\":{\"id\":{\"ST1\":\"Dispute\",\"ST2\":\"Dispute\"},\"text\":{\"ST2\":\"Dispute\",\"ST1\":\"Dispute\"},\"btnImage\":{\"ST1\":\"dispute.png\",\"ST2\":\"dispute.png\"},\"width\":{\"ST2\":\"70DP\",\"ST1\":\"70DP\"},\"txtSkin\":{\"ST2\":\"ICSknLblFFFFFF13PX\",\"ST1\":\"ICSknLblFFFFFF13PX\"},\"skin\":{\"ST2\":\"ICSknFlx003E75\",\"ST1\":\"ICSknFlx003E75\"},\"entitlement_keys\":[],\"entitlement_action\":{\"ST1\":false,\"ST2\":true}},\"Loan\":{\"id\":{\"ST1\":\"Dispute\",\"ST2\":\"Dispute\"},\"text\":{\"ST2\":\"Dispute\",\"ST1\":\"Dispute\"},\"btnImage\":{\"ST1\":\"dispute.png\",\"ST2\":\"dispute.png\"},\"width\":{\"ST2\":\"70DP\",\"ST1\":\"70DP\"},\"txtSkin\":{\"ST2\":\"ICSknLblFFFFFF13PX\",\"ST1\":\"ICSknLblFFFFFF13PX\"},\"skin\":{\"ST2\":\"ICSknFlx003E75\",\"ST1\":\"ICSknFlx003E75\"},\"entitlement_keys\":[],\"entitlement_action\":{\"ST1\":false,\"ST2\":true}},\"Deposit\":{\"id\":{\"ST1\":\"Dispute\",\"ST2\":\"Dispute\"},\"text\":{\"ST2\":\"Dispute\",\"ST1\":\"Dispute\"},\"btnImage\":{\"ST1\":\"dispute.png\",\"ST2\":\"dispute.png\"},\"width\":{\"ST2\":\"70DP\",\"ST1\":\"70DP\"},\"txtSkin\":{\"ST2\":\"ICSknLblFFFFFF13PX\",\"ST1\":\"ICSknLblFFFFFF13PX\"},\"skin\":{\"ST2\":\"ICSknFlx003E75\",\"ST1\":\"ICSknFlx003E75\"},\"entitlement_keys\":[],\"entitlement_action\":{\"ST1\":false,\"ST2\":true}}}";
            accountsTransactionListNative.blockedObjServiceName = "RBObjects";
            accountsTransactionListNative.btnSwipeableAction2 = "{\"Savings\":{\"id\":{\"ST1\":\"Repeat\",\"ST2\":\"Repeat\"},\"text\":{\"ST2\":\"Repeat\",\"ST1\":\"Repeat\"},\"btnImage\":{\"ST1\":\"repeat.png\",\"ST2\":\"repeat.png\"},\"width\":{\"ST2\":\"70DP\",\"ST1\":\"70DP\"},\"txtSkin\":{\"ST2\":\"ICSknLblFFFFFF13PX\",\"ST1\":\"ICSknLblFFFFFF13PX\"},\"skin\":{\"ST2\":\"ICSknFlx003E75\",\"ST1\":\"ICSknFlx003E75\"},\"entitlement_keys\":[],\"entitlement_action\":{\"ST1\":true,\"ST2\":true}},\"Checking\":{\"id\":{\"ST1\":\"Repeat\",\"ST2\":\"Repeat\"},\"text\":{\"ST2\":\"Repeat\",\"ST1\":\"Repeat\"},\"btnImage\":{\"ST1\":\"repeat.png\",\"ST2\":\"repeat.png\"},\"width\":{\"ST2\":\"70DP\",\"ST1\":\"70DP\"},\"txtSkin\":{\"ST2\":\"ICSknLblFFFFFF13PX\",\"ST1\":\"ICSknLblFFFFFF13PX\"},\"skin\":{\"ST2\":\"ICSknFlx003E75\",\"ST1\":\"ICSknFlx003E75\"},\"entitlement_keys\":[],\"entitlement_action\":{\"ST1\":false,\"ST2\":true}},\"CreditCard\":{\"id\":{\"ST1\":\"Repeat\",\"ST2\":\"Repeat\"},\"text\":{\"ST2\":\"Repeat\",\"ST1\":\"Repeat\"},\"btnImage\":{\"ST1\":\"repeat.png\",\"ST2\":\"repeat.png\"},\"width\":{\"ST2\":\"70DP\",\"ST1\":\"70DP\"},\"txtSkin\":{\"ST2\":\"ICSknLblFFFFFF13PX\",\"ST1\":\"ICSknLblFFFFFF13PX\"},\"skin\":{\"ST2\":\"ICSknFlx003E75\",\"ST1\":\"ICSknFlx003E75\"},\"entitlement_keys\":[],\"entitlement_action\":{\"ST1\":false,\"ST2\":true}},\"Loan\":{\"id\":{\"ST1\":\"Repeat\",\"ST2\":\"Repeat\"},\"text\":{\"ST2\":\"Repeat\",\"ST1\":\"Repeat\"},\"btnImage\":{\"ST1\":\"repeat.png\",\"ST2\":\"repeat.png\"},\"width\":{\"ST2\":\"70DP\",\"ST1\":\"70DP\"},\"txtSkin\":{\"ST2\":\"ICSknLblFFFFFF13PX\",\"ST1\":\"ICSknLblFFFFFF13PX\"},\"skin\":{\"ST2\":\"ICSknFlx003E75\",\"ST1\":\"ICSknFlx003E75\"},\"entitlement_keys\":[],\"entitlement_action\":{\"ST1\":false,\"ST2\":true}},\"Deposit\":{\"id\":{\"ST1\":\"Repeat\",\"ST2\":\"Repeat\"},\"text\":{\"ST2\":\"Repeat\",\"ST1\":\"Repeat\"},\"btnImage\":{\"ST1\":\"repeat.png\",\"ST2\":\"repeat.png\"},\"width\":{\"ST2\":\"70DP\",\"ST1\":\"70DP\"},\"txtSkin\":{\"ST2\":\"ICSknLblFFFFFF13PX\",\"ST1\":\"ICSknLblFFFFFF13PX\"},\"skin\":{\"ST2\":\"ICSknFlx003E75\",\"ST1\":\"ICSknFlx003E75\"},\"entitlement_keys\":[],\"entitlement_action\":{\"ST1\":false,\"ST2\":true}}}";
            accountsTransactionListNative.objectName = "Transactions";
            accountsTransactionListNative.ListIdentifier = "L1";
            accountsTransactionListNative.dateFormat = "d/m/Y";
            accountsTransactionListNative.field2Value = "{\"Savings\":{\"default\":{\"text\":\"{$.L1.amount}\",\"fieldType\":\"amount\"},\"ST1\":{\"text\":\"{$.L1.lockedAmount}\",\"fieldType\":\"amount\"}},\"Checking\":{\"default\":{\"text\":\"{$.L1.amount}\",\"fieldType\":\"amount\"},\"ST1\":{\"text\":\"{$.L1.lockedAmount}\",\"fieldType\":\"amount\"}},\"CreditCard\":{\"default\":{\"text\":\"{$.L1.amount}\",\"fieldType\":\"amount\"}},\"Loan\":{\"default\":{\"text\":\"{$.L1.amount}\",\"fieldType\":\"amount\"},\"ST3\":{\"text\":\"{$.L1.installmentAmount}\",\"fieldType\":\"amount\"},\"ST4\":{\"text\":\"{$.L1.installmentAmount}\",\"fieldType\":\"amount\"}},\"Mortgage\":{\"default\":{\"text\":\"{$.L1.amount}\",\"fieldType\":\"amount\"},\"ST3\":{\"text\":\"{$.L1.installmentAmount}\",\"fieldType\":\"amount\"},\"ST4\":{\"text\":\"{$.L1.installmentAmount}\",\"fieldType\":\"amount\"}},\"Deposit\":{\"default\":{\"text\":\"{$.L1.amount}\",\"fieldType\":\"amount\"}}}";
            accountsTransactionListNative.disputeProperty = "isDisputed";
            accountsTransactionListNative.iconNoRecordsAvailable = "norecordsavailableicon.png";
            accountsTransactionListNative.sknGroupHeaderBackground = "ICSknFlxF6F6F6";
            accountsTransactionListNative.blockedObjName = "Transactions";
            accountsTransactionListNative.sknPrimaryField1 = "sknLbl424242SSPRegular26px";
            accountsTransactionListNative.operationName = "getAccountTransactionByType";
            accountsTransactionListNative.segregationDecider = "{\"All\":\"statusDescription\",\"LoanSchedule\":\"installmentType\"}";
            accountsTransactionListNative.backendDateFormat = "Y-m-d";
            accountsTransactionListNative.field3Value = "{\"Savings\":{\"default\":{\"text\":\"{$.L1.scheduledDate}\",\"fieldType\":\"date\"},\"ST1\":{\"text\":\"{$.L1.transactionReference}\",\"fieldType\":\"label\"}},\"Checking\":{\"default\":{\"text\":\"{$.L1.scheduledDate}\",\"fieldType\":\"date\"},\"ST1\":{\"text\":\"{$.L1.transactionReference}\",\"fieldType\":\"label\"}},\"CreditCard\":{\"default\":{\"text\":\"{$.L1.scheduledDate}\",\"fieldType\":\"date\"}},\"Loan\":{\"default\":{\"text\":\"{$.L1.scheduledDate}\",\"fieldType\":\"date\"}},\"Mortgage\":{\"default\":{\"text\":\"{$.L1.scheduledDate}\",\"fieldType\":\"date\"}},\"Deposit\":{\"default\":{\"text\":\"{$.L1.scheduledDate}\",\"fieldType\":\"date\"}}}";
            accountsTransactionListNative.iconGroupExpand = "arrowup_1.png";
            accountsTransactionListNative.btnSwipeableAction3 = "{\"Savings\":{\"id\":{\"ST1\":\"Cancel\",\"ST2\":\"Cancel\"},\"text\":{\"ST2\":\"Cancel\",\"ST1\":\"Cancel\"},\"btnImage\":{\"ST1\":\"cancel.png\",\"ST2\":\"cancel.png\"},\"width\":{\"ST2\":\"70DP\",\"ST1\":\"70DP\"},\"txtSkin\":{\"ST2\":\"ICSknLblFFFFFF13PX\",\"ST1\":\"ICSknLblFFFFFF13PX\"},\"skin\":{\"ST2\":\"ICSknFlxEE0005\",\"ST1\":\"ICSknFlxEE0005\"},\"entitlement_keys\":[],\"entitlement_action\":{\"ST1\":true,\"ST2\":true}},\"Checking\":{\"id\":{\"ST1\":\"Cancel\",\"ST2\":\"Cancel\"},\"text\":{\"ST2\":\"Cancel\",\"ST1\":\"Cancel\"},\"btnImage\":{\"ST1\":\"cancel.png\",\"ST2\":\"cancel.png\"},\"width\":{\"ST2\":\"70DP\",\"ST1\":\"70DP\"},\"txtSkin\":{\"ST2\":\"ICSknLblFFFFFF13PX\",\"ST1\":\"ICSknLblFFFFFF13PX\"},\"skin\":{\"ST2\":\"ICSknFlxEE0005\",\"ST1\":\"ICSknFlxEE0005\"},\"entitlement_keys\":[],\"entitlement_action\":{\"ST1\":false,\"ST2\":true}},\"CreditCard\":{\"id\":{\"ST1\":\"Cancel\",\"ST2\":\"Cancel\"},\"text\":{\"ST2\":\"Cancel\",\"ST1\":\"Cancel\"},\"btnImage\":{\"ST1\":\"cancel.png\",\"ST2\":\"cancel.png\"},\"width\":{\"ST2\":\"70DP\",\"ST1\":\"70DP\"},\"txtSkin\":{\"ST2\":\"ICSknLblFFFFFF13PX\",\"ST1\":\"ICSknLblFFFFFF13PX\"},\"skin\":{\"ST2\":\"ICSknFlxEE0005\",\"ST1\":\"ICSknFlxEE0005\"},\"entitlement_keys\":[],\"entitlement_action\":{\"ST1\":false,\"ST2\":true}},\"Loan\":{\"id\":{\"ST1\":\"Cancel\",\"ST2\":\"Cancel\"},\"text\":{\"ST2\":\"Cancel\",\"ST1\":\"Cancel\"},\"btnImage\":{\"ST1\":\"cancel.png\",\"ST2\":\"cancel.png\"},\"width\":{\"ST2\":\"70DP\",\"ST1\":\"70DP\"},\"txtSkin\":{\"ST2\":\"ICSknLblFFFFFF13PX\",\"ST1\":\"ICSknLblFFFFFF13PX\"},\"skin\":{\"ST2\":\"ICSknFlxEE0005\",\"ST1\":\"ICSknFlxEE0005\"},\"entitlement_keys\":[],\"entitlement_action\":{\"ST1\":false,\"ST2\":true}},\"Deposit\":{\"id\":{\"ST1\":\"Cancel\",\"ST2\":\"Cancel\"},\"text\":{\"ST2\":\"Cancel\",\"ST1\":\"Cancel\"},\"btnImage\":{\"ST1\":\"cancel.png\",\"ST2\":\"cancel.png\"},\"width\":{\"ST2\":\"70DP\",\"ST1\":\"70DP\"},\"txtSkin\":{\"ST2\":\"ICSknLblFFFFFF13PX\",\"ST1\":\"ICSknLblFFFFFF13PX\"},\"skin\":{\"ST2\":\"ICSknFlxEE0005\",\"ST1\":\"ICSknFlxEE0005\"},\"entitlement_keys\":[],\"entitlement_action\":{\"ST1\":false,\"ST2\":true}}}";
            accountsTransactionListNative.blockedOperationName = "getBlockedFunds";
            accountsTransactionListNative.sknPrimaryField2 = "sknLbl424242SSPRegular26px";
            accountsTransactionListNative.criteria = "{\"accountID\":\"{$.c.accountID}\",\"transactionType\":\"{$.c.transactionType}\",\"offset\":0,\"limit\":300,\"isScheduled\":\"false\",\"order\":\"desc\"}";
            accountsTransactionListNative.segregationTypes = "{\"ST1\":{\"value\":\"Blocked\",\"displayText\":\"Blocked Funds\",\"weight\":\"1\"},\"ST2\":{\"value\":\"Pending\",\"displayText\":\"Pending Transaction\",\"weight\":\"2\"},\"ST3\":{\"value\":\"DUE\",\"displayText\":\"Overdue Installments\",\"weight\":\"1\"},\"ST4\":{\"value\":\"PAID\",\"displayText\":\"Paid Installments\",\"weight\":\"2\"},\"ST5\":{\"value\":\"Successful\",\"displayText\":\"Posted Transaction\",\"weight\":\"3\"}}";
            accountsTransactionListNative.currencyCode = "{$.c.currencyCode}";
            accountsTransactionListNative.field4Value = "";
            accountsTransactionListNative.iconGroupCollapse = "arrowdown.png";
            accountsTransactionListNative.blockedCriteria = "{\"accountID\":\"{$.c.accountID}\",\"transactionType\":\"{$.c.transactionType}\",\"offset\":0,\"limit\":300,\"isScheduled\":\"false\",\"order\":\"desc\"}";
            accountsTransactionListNative.serviceResponseIdentifier = "S1";
            accountsTransactionListNative.noRecordsAvailable = "kony.mb.OB.NoRecordsAvailable";
            accountsTransactionListNative.sknSecondaryFields = "sknLbl727272SSP26pxTab";
            accountsTransactionListNative.recordsPerPage = 20;
            accountsTransactionListNative.blockedServiceIdentifier = "S2";
            accountsTransactionListNative.sknRowSeparator = "sknFlxe3e3e3";
            accountsTransactionListNative.dataAvailability = "Service calls by component";
            accountsTransactionListNative.blockedDataAvailability = "Service calls by component";
            accountsTransactionListNative.sknRow = "f9f9";
            accountsTransactionListNative.sknSegmentShadow = "ICSknFlxShadow000fff";
            accountsTransactionListNative.sknAmount = "{\"amountField\":\"\",\"skin\":[{\"max\":0,\"skin\":\"sknLbl424242SSPRegular26px\"},{\"min\":0,\"max\":10,\"skin\":\"sknLbl424242SSPRegular26px\"},{\"min\":11,\"max\":999,\"skin\":\"sknLbl424242SSPRegular26px\"},{\"min\":1000,\"skin\":\"sknLbl424242SSPRegular26px\"}]}";
            flxTransactions.add(accountsTransactionListNative);
            var btnDownloadTransaction = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "50dp",
                "id": "btnDownloadTransaction",
                "isVisible": true,
                "skin": "sknBtn0095e426pxEnabled",
                "text": kony.i18n.getLocalizedString("kony.mb.loans.downloadInstallments"),
                "top": "20dp",
                "width": "300dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            flxMainContainer.add(flxDonutChart, flxFrom, segInstallments, flxNoTransactions, flxTransactions, btnDownloadTransaction);
            var flxFooter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": false,
                "height": "60dp",
                "id": "flxFooter",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 106
            }, {}, {});
            flxFooter.setDefaultUnit(kony.flex.DP);
            var customFooter = new com.kmb.common.customFooter({
                "height": "60dp",
                "id": "customFooter",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 300,
                "overrides": {
                    "flxBillSelected": {
                        "isVisible": false
                    },
                    "flxMoreSelect": {
                        "isVisible": false
                    },
                    "flxTransferSel": {
                        "isVisible": false
                    },
                    "imgAccounts": {
                        "src": "accounts.png"
                    },
                    "imgBillPay": {
                        "src": "billpay.png"
                    },
                    "imgMore": {
                        "src": "more.png"
                    },
                    "imgTransfer": {
                        "src": "transfer.png"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxFooter.add(customFooter);
            var flxHamburger = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "60dp",
                "clipBounds": true,
                "id": "flxHamburger",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx000000Op50",
                "top": "0dp",
                "width": "100%",
                "zIndex": 200
            }, {}, {});
            flxHamburger.setDefaultUnit(kony.flex.DP);
            var flxHamburgerWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxHamburgerWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "-100%",
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHamburgerWrapper.setDefaultUnit(kony.flex.DP);
            var flxHamburgerContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxHamburgerContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "right": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "zIndex": 10
            }, {}, {});
            flxHamburgerContainer.setDefaultUnit(kony.flex.DP);
            var Hamburger = new com.kmb.common.Hamburger({
                "height": "100%",
                "id": "Hamburger",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {}
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHamburgerContainer.add(Hamburger);
            var flxHamburgerDummy = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxHamburgerDummy",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "-50dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "50dp",
                "zIndex": 3
            }, {}, {});
            flxHamburgerDummy.setDefaultUnit(kony.flex.DP);
            flxHamburgerDummy.add();
            flxHamburgerWrapper.add(flxHamburgerContainer, flxHamburgerDummy);
            flxHamburger.add(flxHamburgerWrapper);
            this.add(flxHeader, flxMainContainer, flxFooter, flxHamburger);
        };
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
            "addWidgets": addWidgetsfrmLoanSchedule,
            "bounces": true,
            "enableScrolling": true,
            "enabledForIdleTimeout": true,
            "id": "frmLoanSchedule",
            "init": controller.AS_Form_a922d998403448818630ded4f2f79ff9,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_b5cc15906133455590bbe2ac992f9a05,
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.loans.LoanSchedule")
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
                "rightBarButtonItems": [],
                "backBarButtonItem": BBarBtnItem0
            },
            "titleBarSkin": "sknTitle1a98ffffffff30px"
        }]
    }
});