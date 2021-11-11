define("frmAdvanceSearchResults", function() {
    return function(controller) {
        function addWidgetsfrmAdvanceSearchResults() {
            this.setDefaultUnit(kony.flex.DP);
            var flxBlueBg = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "6.23%",
                "id": "flxBlueBg",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxGradientBlue",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxBlueBg.setDefaultUnit(kony.flex.DP);
            flxBlueBg.add();
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
                        "text": "Family Checking Account"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxHeader.add(customHeader);
            var flxTransactions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "92.90%",
                "id": "flxTransactions",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "ICSknFlxffffff",
                "top": "56dp",
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
            accountsTransactionListNative.field1Value = "{\"Savings\":{\"default\":{\"text\":\"{$.L1.description}\",\"fieldType\":\"label\"},\"ST1\":{\"text\":\"{$.L1.lockReason}\",\"fieldType\":\"label\"}},\"Checking\":{\"default\":{\"text\":\"{$.L1.description}\",\"fieldType\":\"label\"},\"ST1\":{\"text\":\"{$.L1.lockReason}\",\"fieldType\":\"label\"}},\"CreditCard\":{\"default\":{\"text\":\"{$.L1.description}\",\"fieldType\":\"label\"}},\"Loan\":{\"default\":{\"text\":\"{$.L1.description}\",\"fieldType\":\"label\"},\"ST3\":{\"text\":\"{$.L1.paymentDate}\",\"fieldType\":\"date\"},\"ST4\":{\"text\":\"{$.L1.paymentDate}\",\"fieldType\":\"date\"}},\"Deposit\":{\"default\":{\"text\":\"{$.L1.description}\",\"fieldType\":\"label\"}}}";
            accountsTransactionListNative.displayDisputeIcon = true;
            accountsTransactionListNative.iconDisputedTransaction = "disputedtransactionicon1.png";
            accountsTransactionListNative.btnSwipeableAction1 = "{\"Savings\":{\"id\":{\"ST1\":\"Dispute\",\"ST2\":\"Dispute\"},\"text\":{\"ST2\":\"Dispute\",\"ST1\":\"Dispute\"},\"btnImage\":{\"ST1\":\"dispute.png\",\"ST2\":\"dispute.png\"},\"width\":{\"ST2\":\"70DP\",\"ST1\":\"70DP\"},\"txtSkin\":{\"ST2\":\"ICSknLblFFFFFF13PX\",\"ST1\":\"ICSknLblFFFFFF13PX\"},\"skin\":{\"ST2\":\"ICSknFlx003E75\",\"ST1\":\"ICSknFlx003E75\"},\"entitlement_keys\":[],\"entitlement_action\":{\"ST1\":true,\"ST2\":true}},\"Checking\":{\"id\":{\"ST1\":\"Dispute\",\"ST2\":\"Dispute\"},\"text\":{\"ST2\":\"Dispute\",\"ST1\":\"Dispute\"},\"btnImage\":{\"ST1\":\"dispute.png\",\"ST2\":\"dispute.png\"},\"width\":{\"ST2\":\"70DP\",\"ST1\":\"70DP\"},\"txtSkin\":{\"ST2\":\"ICSknLblFFFFFF13PX\",\"ST1\":\"ICSknLblFFFFFF13PX\"},\"skin\":{\"ST2\":\"ICSknFlx003E75\",\"ST1\":\"ICSknFlx003E75\"},\"entitlement_keys\":[],\"entitlement_action\":{\"ST1\":false,\"ST2\":true}},\"CreditCard\":{\"id\":{\"ST1\":\"Dispute\",\"ST2\":\"Dispute\"},\"text\":{\"ST2\":\"Dispute\",\"ST1\":\"Dispute\"},\"btnImage\":{\"ST1\":\"dispute.png\",\"ST2\":\"dispute.png\"},\"width\":{\"ST2\":\"70DP\",\"ST1\":\"70DP\"},\"txtSkin\":{\"ST2\":\"ICSknLblFFFFFF13PX\",\"ST1\":\"ICSknLblFFFFFF13PX\"},\"skin\":{\"ST2\":\"ICSknFlx003E75\",\"ST1\":\"ICSknFlx003E75\"},\"entitlement_keys\":[],\"entitlement_action\":{\"ST1\":false,\"ST2\":true}},\"Loan\":{\"id\":{\"ST1\":\"Dispute\",\"ST2\":\"Dispute\"},\"text\":{\"ST2\":\"Dispute\",\"ST1\":\"Dispute\"},\"btnImage\":{\"ST1\":\"dispute.png\",\"ST2\":\"dispute.png\"},\"width\":{\"ST2\":\"70DP\",\"ST1\":\"70DP\"},\"txtSkin\":{\"ST2\":\"ICSknLblFFFFFF13PX\",\"ST1\":\"ICSknLblFFFFFF13PX\"},\"skin\":{\"ST2\":\"ICSknFlx003E75\",\"ST1\":\"ICSknFlx003E75\"},\"entitlement_keys\":[],\"entitlement_action\":{\"ST1\":false,\"ST2\":true}},\"Deposit\":{\"id\":{\"ST1\":\"Dispute\",\"ST2\":\"Dispute\"},\"text\":{\"ST2\":\"Dispute\",\"ST1\":\"Dispute\"},\"btnImage\":{\"ST1\":\"dispute.png\",\"ST2\":\"dispute.png\"},\"width\":{\"ST2\":\"70DP\",\"ST1\":\"70DP\"},\"txtSkin\":{\"ST2\":\"ICSknLblFFFFFF13PX\",\"ST1\":\"ICSknLblFFFFFF13PX\"},\"skin\":{\"ST2\":\"ICSknFlx003E75\",\"ST1\":\"ICSknFlx003E75\"},\"entitlement_keys\":[],\"entitlement_action\":{\"ST1\":false,\"ST2\":true}}}";
            accountsTransactionListNative.blockedObjServiceName = "RBObjects";
            accountsTransactionListNative.btnSwipeableAction2 = "{\"Savings\":{\"id\":{\"ST1\":\"Repeat\",\"ST2\":\"Repeat\"},\"text\":{\"ST2\":\"Repeat\",\"ST1\":\"Repeat\"},\"btnImage\":{\"ST1\":\"repeat.png\",\"ST2\":\"repeat.png\"},\"width\":{\"ST2\":\"70DP\",\"ST1\":\"70DP\"},\"txtSkin\":{\"ST2\":\"ICSknLblFFFFFF13PX\",\"ST1\":\"ICSknLblFFFFFF13PX\"},\"skin\":{\"ST2\":\"ICSknFlx003E75\",\"ST1\":\"ICSknFlx003E75\"},\"entitlement_keys\":[],\"entitlement_action\":{\"ST1\":true,\"ST2\":true}},\"Checking\":{\"id\":{\"ST1\":\"Repeat\",\"ST2\":\"Repeat\"},\"text\":{\"ST2\":\"Repeat\",\"ST1\":\"Repeat\"},\"btnImage\":{\"ST1\":\"repeat.png\",\"ST2\":\"repeat.png\"},\"width\":{\"ST2\":\"70DP\",\"ST1\":\"70DP\"},\"txtSkin\":{\"ST2\":\"ICSknLblFFFFFF13PX\",\"ST1\":\"ICSknLblFFFFFF13PX\"},\"skin\":{\"ST2\":\"ICSknFlx003E75\",\"ST1\":\"ICSknFlx003E75\"},\"entitlement_keys\":[],\"entitlement_action\":{\"ST1\":false,\"ST2\":true}},\"CreditCard\":{\"id\":{\"ST1\":\"Repeat\",\"ST2\":\"Repeat\"},\"text\":{\"ST2\":\"Repeat\",\"ST1\":\"Repeat\"},\"btnImage\":{\"ST1\":\"repeat.png\",\"ST2\":\"repeat.png\"},\"width\":{\"ST2\":\"70DP\",\"ST1\":\"70DP\"},\"txtSkin\":{\"ST2\":\"ICSknLblFFFFFF13PX\",\"ST1\":\"ICSknLblFFFFFF13PX\"},\"skin\":{\"ST2\":\"ICSknFlx003E75\",\"ST1\":\"ICSknFlx003E75\"},\"entitlement_keys\":[],\"entitlement_action\":{\"ST1\":false,\"ST2\":true}},\"Loan\":{\"id\":{\"ST1\":\"Repeat\",\"ST2\":\"Repeat\"},\"text\":{\"ST2\":\"Repeat\",\"ST1\":\"Repeat\"},\"btnImage\":{\"ST1\":\"repeat.png\",\"ST2\":\"repeat.png\"},\"width\":{\"ST2\":\"70DP\",\"ST1\":\"70DP\"},\"txtSkin\":{\"ST2\":\"ICSknLblFFFFFF13PX\",\"ST1\":\"ICSknLblFFFFFF13PX\"},\"skin\":{\"ST2\":\"ICSknFlx003E75\",\"ST1\":\"ICSknFlx003E75\"},\"entitlement_keys\":[],\"entitlement_action\":{\"ST1\":false,\"ST2\":true}},\"Deposit\":{\"id\":{\"ST1\":\"Repeat\",\"ST2\":\"Repeat\"},\"text\":{\"ST2\":\"Repeat\",\"ST1\":\"Repeat\"},\"btnImage\":{\"ST1\":\"repeat.png\",\"ST2\":\"repeat.png\"},\"width\":{\"ST2\":\"70DP\",\"ST1\":\"70DP\"},\"txtSkin\":{\"ST2\":\"ICSknLblFFFFFF13PX\",\"ST1\":\"ICSknLblFFFFFF13PX\"},\"skin\":{\"ST2\":\"ICSknFlx003E75\",\"ST1\":\"ICSknFlx003E75\"},\"entitlement_keys\":[],\"entitlement_action\":{\"ST1\":false,\"ST2\":true}}}";
            accountsTransactionListNative.objectName = "Transactions";
            accountsTransactionListNative.ListIdentifier = "L1";
            accountsTransactionListNative.dateFormat = "d/m/Y";
            accountsTransactionListNative.field2Value = "{\"Savings\":{\"default\":{\"text\":\"{$.L1.amount}\",\"fieldType\":\"amount\"},\"ST1\":{\"text\":\"{$.L1.lockedAmount}\",\"fieldType\":\"amount\"}},\"Checking\":{\"default\":{\"text\":\"{$.L1.amount}\",\"fieldType\":\"amount\"},\"ST1\":{\"text\":\"{$.L1.lockedAmount}\",\"fieldType\":\"amount\"}},\"CreditCard\":{\"default\":{\"text\":\"{$.L1.amount}\",\"fieldType\":\"amount\"}},\"Loan\":{\"default\":{\"text\":\"{$.L1.amount}\",\"fieldType\":\"amount\"},\"ST3\":{\"text\":\"{$.L1.installmentAmount}\",\"fieldType\":\"amount\"},\"ST4\":{\"text\":\"{$.L1.installmentAmount}\",\"fieldType\":\"amount\"}},\"Deposit\":{\"default\":{\"text\":\"{$.L1.amount}\",\"fieldType\":\"amount\"}}}";
            accountsTransactionListNative.disputeProperty = "isDisputed";
            accountsTransactionListNative.iconNoRecordsAvailable = "norecordsavailableicon.png";
            accountsTransactionListNative.sknGroupHeaderBackground = "ICSknFlxF6F6F6";
            accountsTransactionListNative.blockedObjName = "Transactions";
            accountsTransactionListNative.sknPrimaryField1 = "sknLbl424242SSPRegular26px";
            accountsTransactionListNative.operationName = "getAccountTransactionByType";
            accountsTransactionListNative.segregationDecider = "{\"All\":\"statusDescription\",\"LoanSchedule\":\"installmentType\"}";
            accountsTransactionListNative.backendDateFormat = "Y-m-d";
            accountsTransactionListNative.field3Value = "{\"Savings\":{\"default\":{\"text\":\"{$.L1.scheduledDate}\",\"fieldType\":\"date\"},\"ST1\":{\"text\":\"{$.L1.transactionReference}\",\"fieldType\":\"label\"}},\"Checking\":{\"default\":{\"text\":\"{$.L1.scheduledDate}\",\"fieldType\":\"date\"},\"ST1\":{\"text\":\"{$.L1.transactionReference}\",\"fieldType\":\"label\"}},\"CreditCard\":{\"default\":{\"text\":\"{$.L1.scheduledDate}\",\"fieldType\":\"date\"}},\"Loan\":{\"default\":{\"text\":\"{$.L1.scheduledDate}\",\"fieldType\":\"date\"}},\"Deposit\":{\"default\":{\"text\":\"{$.L1.scheduledDate}\",\"fieldType\":\"date\"}}}";
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
            accountsTransactionListNative.dataAvailability = "Context provided by form";
            accountsTransactionListNative.blockedDataAvailability = "Context provided by form";
            accountsTransactionListNative.sknRow = "f9f9";
            accountsTransactionListNative.sknSegmentShadow = "ICSknFlxShadow000fff";
            accountsTransactionListNative.sknAmount = "{\"amountField\":\"\",\"skin\":[{\"max\":0,\"skin\":\"sknLbl424242SSPRegular26px\"},{\"min\":0,\"max\":10,\"skin\":\"sknLbl424242SSPRegular26px\"},{\"min\":11,\"max\":999,\"skin\":\"sknLbl424242SSPRegular26px\"},{\"min\":1000,\"skin\":\"sknLbl424242SSPRegular26px\"}]}";
            flxTransactions.add(accountsTransactionListNative);
            var flxSearch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxSearch",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxSearch.setDefaultUnit(kony.flex.DP);
            var flxHeaderSearchbox = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxHeaderSearchbox",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxffffffShadow",
                "top": "56dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxHeaderSearchbox.setDefaultUnit(kony.flex.DP);
            var customSearchbox = new com.kmb.Search.customSearchbox({
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
                    "btnCancel": {
                        "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel")
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgSearch": {
                        "src": "searchblue.png"
                    },
                    "imgSearchIcon": {
                        "src": "search.png"
                    },
                    "tbxSearch": {
                        "isVisible": true,
                        "placeholder": "Search ",
                        "top": "0dp",
                        "width": "70%"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxDummySearch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxDummySearch",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1Radius4px",
                "top": "0dp",
                "width": "70%",
                "zIndex": 1
            }, {}, {});
            flxDummySearch.setDefaultUnit(kony.flex.DP);
            var imgSearchIcon = new kony.ui.Image2({
                "centerY": "50%",
                "height": "15dp",
                "id": "imgSearchIcon",
                "isVisible": true,
                "left": "10dp",
                "skin": "slImage",
                "src": "search.png",
                "width": "15dp",
                "zIndex": 10
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSearchTransactions = new kony.ui.Label({
                "centerY": "49%",
                "id": "lblSearchTransactions",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblSSP55555522pxOp50",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.searchTransactions"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [35, 0, 0, 0],
                "paddingInPixel": true
            }, {
                "textCopyable": false
            });
            flxDummySearch.add(imgSearchIcon, lblSearchTransactions);
            flxHeaderSearchbox.add(customSearchbox, flxDummySearch);
            var flxSearchResults = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxSearchResults",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "40dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSearchResults.setDefaultUnit(kony.flex.DP);
            var flxNoTransactions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "55%",
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
            var flxSeperator3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSeperator3.setDefaultUnit(kony.flex.DP);
            flxSeperator3.add();
            var lblNoTransaction = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblNoTransaction",
                "isVisible": true,
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.noTransactionMsg"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "200dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxNoTransactions.add(flxSeperator3, lblNoTransaction);
            var flxSegScrollContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "flxSegScrollContainer",
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
            flxSegScrollContainer.setDefaultUnit(kony.flex.DP);
            var segTransactions = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [
                    [{
                            "imgUpArrow": "imagedrag.png",
                            "lblHeader": ""
                        },
                        [{
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "12/10/2018",
                            "lblTransaction": "Money Transfer to Linda",
                            "lblTransactionAmount": "-$83.54"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "06/21/2018",
                            "lblTransaction": "Check Payment to School",
                            "lblTransactionAmount": "-$200.00"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "12/10/2018",
                            "lblTransaction": "Money Transfer to Linda",
                            "lblTransactionAmount": "-$83.54"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "06/21/2018",
                            "lblTransaction": "Check Payment to School",
                            "lblTransactionAmount": "-$200.00"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "12/10/2018",
                            "lblTransaction": "Money Transfer to Linda",
                            "lblTransactionAmount": "-$83.54"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "06/21/2018",
                            "lblTransaction": "Check Payment to School",
                            "lblTransactionAmount": "-$200.00"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "03/07/2018",
                            "lblTransaction": "Bill Pay to AT&T",
                            "lblTransactionAmount": "-$83.54"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "11/10/2018",
                            "lblTransaction": "Check Payment to School",
                            "lblTransactionAmount": "-$200.00"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "02/26/2018",
                            "lblTransaction": "Bill Pay to AT&T",
                            "lblTransactionAmount": "-$200.00"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "11/10/2018",
                            "lblTransaction": "Check Payment to School",
                            "lblTransactionAmount": "-$200.00"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "03/07/2018",
                            "lblTransaction": "Wire Trasfers to Stuvert",
                            "lblTransactionAmount": "-$83.54"
                        }]
                    ],
                    [{
                            "imgUpArrow": "imagedrag.png",
                            "lblHeader": ""
                        },
                        [{
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "12/10/2018",
                            "lblTransaction": "Money Transfer to Linda",
                            "lblTransactionAmount": "-$83.54"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "06/21/2018",
                            "lblTransaction": "Check Payment to School",
                            "lblTransactionAmount": "-$200.00"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "12/10/2018",
                            "lblTransaction": "Money Transfer to Linda",
                            "lblTransactionAmount": "-$83.54"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "06/21/2018",
                            "lblTransaction": "Check Payment to School",
                            "lblTransactionAmount": "-$200.00"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "12/10/2018",
                            "lblTransaction": "Money Transfer to Linda",
                            "lblTransactionAmount": "-$83.54"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "06/21/2018",
                            "lblTransaction": "Check Payment to School",
                            "lblTransactionAmount": "-$200.00"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "03/07/2018",
                            "lblTransaction": "Bill Pay to AT&T",
                            "lblTransactionAmount": "-$83.54"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "11/10/2018",
                            "lblTransaction": "Check Payment to School",
                            "lblTransactionAmount": "-$200.00"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "02/26/2018",
                            "lblTransaction": "Bill Pay to AT&T",
                            "lblTransactionAmount": "-$200.00"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "11/10/2018",
                            "lblTransaction": "Check Payment to School",
                            "lblTransactionAmount": "-$200.00"
                        }, {
                            "imgIndicator": "imagedrag.png",
                            "lblDate": "03/07/2018",
                            "lblTransaction": "Wire Trasfers to Stuvert",
                            "lblTransactionAmount": "-$83.54"
                        }]
                    ]
                ],
                "groupCells": false,
                "height": "85%",
                "id": "segTransactions",
                "isVisible": true,
                "left": "0dp",
                "minHeight": "85%",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxTransactions",
                "scrollingEvents": {
                    "onReachingEnd": controller.AS_Segment_h22beba7db694c8db1517644f76825b4
                },
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "sectionHeaderTemplate": "flxTransHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": true,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxSeparator": "flxSeparator",
                    "flxShadowBottom": "flxShadowBottom",
                    "flxTransHeader": "flxTransHeader",
                    "flxTransactions": "flxTransactions",
                    "flxTypeOneShadow": "flxTypeOneShadow",
                    "flxWrapper": "flxWrapper",
                    "imgIndicator": "imgIndicator",
                    "imgUpArrow": "imgUpArrow",
                    "lblDate": "lblDate",
                    "lblHeader": "lblHeader",
                    "lblTransaction": "lblTransaction",
                    "lblTransactionAmount": "lblTransactionAmount"
                },
                "widgetSkin": "seg2Normal",
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "dockSectionHeaders": true
            });
            var btnDownload = new kony.ui.Button({
                "bottom": "0dp",
                "centerX": "50%",
                "focusSkin": "sknBtn055BAF26px",
                "height": "40dp",
                "id": "btnDownload",
                "isVisible": true,
                "left": "13dp",
                "right": "10dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": "Download Transaction",
                "top": "30dp",
                "width": "80%",
                "zIndex": 9999
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSegScrollContainer.add(segTransactions, btnDownload);
            var flxSearchButton = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "10dp",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxSearchButton",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 40,
                "width": "100%",
                "zIndex": 888
            }, {}, {});
            flxSearchButton.setDefaultUnit(kony.flex.DP);
            flxSearchButton.add();
            flxSearchResults.add(flxNoTransactions, flxSegScrollContainer, flxSearchButton);
            flxSearch.add(flxHeaderSearchbox, flxSearchResults);
            this.add(flxBlueBg, flxHeader, flxTransactions, flxSearch);
        };
        return [{
            "addWidgets": addWidgetsfrmAdvanceSearchResults,
            "bounces": false,
            "enableScrolling": true,
            "enabledForIdleTimeout": true,
            "id": "frmAdvanceSearchResults",
            "init": controller.AS_Form_g8aecb3b12f147a48c6d32c2adf6dd14,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_h7b35f64326141c1aa767618f4db23d4(eventobject);
            },
            "skin": "sknFrmTopBlue"
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
            "titleBar": true,
            "titleBarSkin": "sknTitle1a98ffffffff30px",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});