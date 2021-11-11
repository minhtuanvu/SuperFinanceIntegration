define("BBAccountsModule/frmAccountDetailsNew", function() {
    return function(controller) {
        function addWidgetsfrmAccountDetailsNew() {
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
                    "flxHeader": {
                        "left": "0%",
                        "top": "0%"
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
                        "centerX": "viz.val_cleared",
                        "isVisible": true,
                        "left": "15%",
                        "text": "Family Checking Account"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            customHeader.flxSearch.onClick = controller.AS_FlexContainer_aa807499ad3f411f9e0b972be5cab97a;
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
                    },
                    "flxSearch": {
                        "isVisible": false
                    },
                    "imgSearchIcon": {
                        "src": "search.png"
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
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknScrFlxffffff",
                "top": "-1%",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxAccountsContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "388dp",
                "id": "flxAccountsContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxGradientBlue",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxAccountsContainer.setDefaultUnit(kony.flex.DP);
            var accountSummaryNative = new com.temenos.infinity.accountSummaryNative({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "id": "accountSummaryNative",
                "isVisible": true,
                "left": "0%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "overrides": {
                    "accountSummaryNative": {
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
            accountSummaryNative.objectServiceName = "RBObjects";
            accountSummaryNative.accountTypeContextPath = "{$.c.accountType}";
            accountSummaryNative.backgroundSkin = "{\"skin\":\"slFbox\"}";
            accountSummaryNative.field1Label = "{\"default\":{\"default\":\"{i.kony.mb.accdetails.availBal}\",\"retail\":\"{i.kony.mb.accdetails.currBal}\"},\"Loan\":{\"default\":\"{i.kony.mb.accdetails.outstandingBal}\"},\"Mortgage\":{\"default\":\"{i.kony.mb.accdetails.outstandingBal}\"},\"Deposit\":{\"default\":\"{i.kony.mb.accdetails.currBal}\"},\"CreditCard\":{\"default\":\"{i.kony.mb.accdetails.currBal}\"}}";
            accountSummaryNative.amountFormat = "{\"locale\":\"\",\"positiveFormat\":\"{CS}{D}\",\"negativeFormat\":\"-({CS}{D})\",\"fractionDigits\":\"2\"}";
            accountSummaryNative.nickName = "{$.S1.Accounts[0].nickName}";
            accountSummaryNative.dateFormat = "{\"format\" : \"m/d/Y\"}";
            accountSummaryNative.labelSkin = "{\"skin\": \"ICSknRichTextFFFFFFSSPL14px\" }";
            accountSummaryNative.objectName = "Accounts";
            accountSummaryNative.userTypeContextPath = "{$.c.userType}";
            accountSummaryNative.field1Value = "{\"default\":{\"default\":\"{$.S1.Accounts[0].availableBalance}\",\"retail\":\"{$.S1.Accounts[0].currentBalance}\",\"lblwidth\":\"100%\",\"contentAlign\":\"CONTENT_ALIGN_TOP_CENTER\"},\"Loan\":{\"default\":\"{$.S1.Accounts[0].outstandingBalance}\",\"lblwidth\":\"100%\",\"contentAlign\":\"CONTENT_ALIGN_TOP_CENTER\"},\"Mortgage\":{\"default\":\"{$.S1.Accounts[0].outstandingBalance}\",\"lblwidth\":\"100%\",\"contentAlign\":\"CONTENT_ALIGN_TOP_CENTER\"},\"Deposit\":{\"default\":\"{$.S1.Accounts[0].currentBalance}\",\"lblwidth\":\"100%\",\"contentAlign\":\"CONTENT_ALIGN_TOP_CENTER\"},\"CreditCard\":{\"default\":\"{$.S1.Accounts[0].currentBalance}\",\"lblwidth\":\"100%\",\"contentAlign\":\"CONTENT_ALIGN_TOP_CENTER\"}}";
            accountSummaryNative.accountName = "{$.S1.Accounts[0].accountName}";
            accountSummaryNative.backendDateFormat = "{\"format\" : \"Y-m-d\"}";
            accountSummaryNative.highlightedLabelSkin = "{ \"skin\": \"sknLblb8dcffSSP32px\" }";
            accountSummaryNative.operationName = "getAccountDetails";
            accountSummaryNative.currencyCodeContextPath = "{$.c.currencyCode}";
            accountSummaryNative.field1Type = "{\"default\":\"BalanceAmount\"}";
            accountSummaryNative.noOfEllipsis = 3;
            accountSummaryNative.textSkin = "{\"skin\":\"ICSknLabelFFFFFFSSPSB14px\"}";
            accountSummaryNative.criteria = "{\"accountID\":\"{$.c.accountID}\"}";
            accountSummaryNative.field2Label = "{\"default\":{\"default\":\"{i.kony.mb.accdetails.pendingDeposits}:\"},\"Loan\":{\"default\":\"{i.kony.mb.Loans.TotalOverdue}:\"},\"Mortgage\":{\"default\":\"{i.kony.mb.Loans.TotalOverdue}:\"},\"CreditCard\":{\"default\":\"{i.kony.mb.accdetails.availCred}:\"}}";
            accountSummaryNative.noOfCharacters = 15;
            accountSummaryNative.highlightedValueSkin = "{\"skin\":\"sknLblffffffSSP56px\"}";
            accountSummaryNative.identifier = "S1";
            accountSummaryNative.field2Value = "{\"default\":{\"default\":\"{$.S1.Accounts[0].pendingDeposit}\"},\"Loan\":{\"default\":\"{$.S1.Accounts[0].paymentDue}\"},\"Mortgage\":{\"default\":\"{$.S1.Accounts[0].paymentDue}\"},\"CreditCard\":{\"default\":\"{$.S1.Accounts[0].availableCredit}\"}}";
            accountSummaryNative.businessAccount = "{$.S1.Accounts[0].isBusinessAccount}";
            accountSummaryNative.positiveAmountSkin = "{\"skin\":\"ICSknLabelFFFFFFSSPSB14px\"}";
            accountSummaryNative.field2Type = "{\"default\":\"Amount\"}";
            accountSummaryNative.negativeAmountSkin = "{\"skin\":\"ICSknLabelFFFFFFSSPSB14px\"}";
            accountSummaryNative.field3Label = "{\"default\":{\"default\":\"{i.kony.mb.accdetails.pendingWithdrawals}:\"},\"Loan\":{\"default\":\"{i.kony.mb.accounts.CurrentDue}:\"},\"Mortgage\":{\"default\":\"{i.kony.mb.accounts.CurrentDue}:\"},\"Deposit\":{\"default\":\"{i.kony.mb.accdetails.maturityDate}:\"},\"CreditCard\":{\"default\":\"{i.kony.mb.accdetails.currDueAmt}:\"}}";
            accountSummaryNative.dateSkin = "{\"skin\":\"ICSknLabelSSPSB014px\"}";
            accountSummaryNative.field3Value = "{\"default\":{\"default\":\"{$.S1.Accounts[0].pendingWithdrawal}\"},\"Loan\":{\"default\":\"{$.S1.Accounts[0].nextPaymentAmount}\"},\"Mortgage\":{\"default\":\"{$.S1.Accounts[0].nextPaymentAmount}\"},\"Deposit\":{\"default\":\"{$.S1.Accounts[0].maturityDate}\"},\"CreditCard\":{\"default\":\"{$.S1.Accounts[0].currentAmountDue}\"}}";
            accountSummaryNative.field3Type = "{\"default\":\"Amount\",\"Deposit\":\"Date\"}";
            accountSummaryNative.field4Label = "{\"default\":{\"default\":\"{i.kony.mb.accdetails.blockedAmout}:\"},\"Loan\":{\"default\":\"{i.kony.mb.accdetails.dueDate}:\"},\"Mortgage\":{\"default\":\"{i.kony.mb.accdetails.dueDate}:\"},\"Deposit\":{\"default\":\"{i.kony.mb.accdetails.customerName}:\"},\"CreditCard\":{\"default\":\"{i.kony.mb.accountdetails.dueon}:\"}}";
            accountSummaryNative.field4Value = "{\"default\":{\"default\":\"{$.S1.Accounts[0].blockedAmount}\"},\"Loan\":{\"default\":\"{$.S1.Accounts[0].nextPaymentDate}\"},\"Mortgage\":{\"default\":\"{$.S1.Accounts[0].nextPaymentDate}\"},\"Deposit\":{\"default\":\"{$.S1.Accounts[0].accountHolder.fullname}\"},\"CreditCard\":{\"default\":\"{$.S1.Accounts[0].dueDate}\"}}";
            accountSummaryNative.field4Type = "{\"default\":\"Amount\",\"Deposit\":\"Label\",\"CreditCard\":\"Date\",\"Loan\":\"Date\",\"Mortgage\":\"Date\"}";
            var quicklinksNative = new com.temenos.infinity.quicklinksNative({
                "bottom": "28dp",
                "height": "81dp",
                "id": "quicklinksNative",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "top": "25dp",
                "width": "100%",
                "overrides": {
                    "quicklinksNative": {
                        "right": "viz.val_cleared",
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
            quicklinksNative.sknLink = "ICSkn000000Op0";
            quicklinksNative.accountType = "SAVINGS";
            quicklinksNative.sknLinkValue = "ICSknLblFFFFFF15PxSSP";
            quicklinksNative.link1CTA = "{\"Savings\":{\"text\":\"Withdraw Cash\",\"image\":\"withdrawcash.png\",\"action\":\"withdrawCashSavings\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":false},\"Checking\":{\"text\":\"Make Transfer\",\"image\":\"transfer_money.png\",\"action\":\"onClickMakeTransfer\",\"context\":\"\",\"entitlement\":[\"BILL_PAY_CREATE\",\"DOMESTIC_WIRE_TRANSFER_CREATE\",\"INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE\",\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE\",\"INTERNATIONAL_WIRE_TRANSFER_CREATE\",\"INTRA_BANK_FUND_TRANSFER_CREATE\",\"P2P_CREATE\",\"TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE\"],\"entitlement_action\":false},\"Loan\":{\"text\":\"Pay Due Amount\",\"image\":\"pay_due.png\",\"action\":\"onClickLoanPayDue\",\"context\":\"\",\"entitlement\":[\"TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE\"],\"entitlement_action\":false},\"Credit Card\":{\"text\":\"Make a Payment\",\"image\":\"pay_bill.png\",\"action\":\"onClickMakePayment\",\"context\":\"\",\"entitlement\":[\"TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE\"],\"entitlement_action\":false},\"Deposit\":{\"text\":\"New Deposit\",\"image\":\"new_deposit.png\",\"action\":\"newDepositAction\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":false},\"Default\":{\"text\":\"Savings Pot\",\"image\":\"savings_pot.png\",\"action\":\"savingsPotOptions\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":false}}";
            quicklinksNative.sknAddLink = "ICSkn000000Op0";
            quicklinksNative.link2CTA = "{\"Savings\":{\"text\":\"Statements\",\"image\":\"statements.png\",\"action\":\"getStatements\",\"context\":\"\",\"entitlement\":[\"MANAGE_E_STATEMENTS\"],\"entitlement_action\":false},\"Checking\":{\"text\":\"Statements\",\"image\":\"statements.png\",\"action\":\"getStatements\",\"context\":\"\",\"entitlement\":[\"MANAGE_E_STATEMENTS\"],\"entitlement_action\":false},\"Loan\":{\"text\":\"Statements\",\"image\":\"statements.png\",\"action\":\"getStatements\",\"context\":\"\",\"entitlement\":[\"MANAGE_E_STATEMENTS\"],\"entitlement_action\":false},\"Credit Card\":{\"text\":\"Statements\",\"image\":\"statements.png\",\"action\":\"getStatements\",\"context\":\"\",\"entitlement\":[\"MANAGE_E_STATEMENTS\"],\"entitlement_action\":false},\"Deposit\":{\"text\":\"Statements\",\"image\":\"statements.png\",\"action\":\"getStatements\",\"context\":\"\",\"entitlement\":[\"MANAGE_E_STATEMENTS\"],\"entitlement_action\":false},\"Default\":{\"text\":\"Statements\",\"image\":\"statements.png\",\"action\":\"getStatements\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":false}}";
            quicklinksNative.sknAddLinkValue = "ICSknLbl007AFF100PSSP";
            quicklinksNative.link3CTA = "{\"Savings\":{\"text\":\"View Disputed Transactions\",\"image\":\"request_cheque.png\",\"action\":\"onClickViewDisputedTransactions\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":false},\"Checking\":{\"text\":\"View Disputed Transactions\",\"image\":\"request_cheque.png\",\"action\":\"onClickViewDisputedTransactions\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":false},\"Deposit\":{\"text\":\"View Disputed Transactions\",\"image\":\"request_cheque.png\",\"action\":\"onClickViewDisputedTransactions\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":false},\"Loan\":{\"text\":\"Loan Schedule\",\"image\":\"loan_schedule.png\",\"action\":\"navigateToLoanSchedule\",\"context\":\"\",\"entitlement\":[\"VIEW_LOAN_SCHEDULE\"],\"entitlement_action\":false}}";
            quicklinksNative.sknAddLinkSeperator = "ICSknFlx000000BGP";
            quicklinksNative.link4CTA = "{\"Loan\":{\"text\":\"View Disputed Transactions\",\"image\":\"request_cheque.png\",\"action\":\"onClickViewDisputedTransactions\",\"context\":\"\",\"entitlement\":[],\"entitlement_action\":false}}";
            quicklinksNative.sknContainer = "ICSknFlxFFFFFF10PFFFFFFR";
            quicklinksNative.link5CTA = "";
            quicklinksNative.sknBackground = "ICSkn000000BG50P";
            quicklinksNative.link6CTA = "";
            quicklinksNative.sknCancelLink = "ICSknLbl007AFF100PSSPBold";
            quicklinksNative.link7CTA = "";
            quicklinksNative.link8CTA = "";
            quicklinksNative.link9CTA = "";
            quicklinksNative.link10CTA = "";
            quicklinksNative.isPrimaryVisible = true;
            quicklinksNative.linkCancel = "";
            flxAccountsContainer.add(accountSummaryNative, quicklinksNative);
            var flxContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "255dp",
                "id": "flxContainer",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxGradientBlue",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxContainer.setDefaultUnit(kony.flex.DP);
            var flxSearch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "55dp",
                "id": "flxSearch",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "25dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSearch.setDefaultUnit(kony.flex.DP);
            var flxSearchMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxSearchMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "-0.50%",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxSearchMain.setDefaultUnit(kony.flex.DP);
            var imgSearchIcon = new kony.ui.Image2({
                "centerY": "50%",
                "height": "15dp",
                "id": "imgSearchIcon",
                "isVisible": true,
                "left": "30dp",
                "skin": "slImage",
                "src": "search.png",
                "width": "15dp",
                "zIndex": 10
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var tbxSearch = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknlbl949494SSPR18px",
                "height": "35dp",
                "id": "tbxSearch",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "placeholder": kony.i18n.getLocalizedString("kony.mb.accdetails.searchTransactions"),
                "right": "20dp",
                "secureTextEntry": false,
                "skin": "sknlbl949494SSPR18px",
                "text": kony.i18n.getLocalizedString("kony.mb.checkDeposits.searchText"),
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [35, 3, 30, 3],
                "paddingInPixel": true
            }, {
                "autoCorrect": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_SEARCH,
                "placeholderSkin": "sknTbxPlaceholderDefault",
                "showClearButton": false,
                "showCloseButton": true,
                "showProgressIndicator": true,
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var imgAdvSearch = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgAdvSearch",
                "isVisible": true,
                "onTouchEnd": controller.AS_Image_id80c8d6a82c4875a56a150aed47720a,
                "right": "30dp",
                "skin": "slImage",
                "src": "advansecsearch.png",
                "top": "13dp",
                "width": "20dp",
                "zIndex": 10
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxAdvSearch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxAdvSearch",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_b1d1a2b436bc44a2a85fd836ed7a2552,
                "right": "10dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "50dp",
                "zIndex": 1000
            }, {}, {});
            flxAdvSearch.setDefaultUnit(kony.flex.DP);
            flxAdvSearch.add();
            flxSearchMain.add(imgSearchIcon, tbxSearch, imgAdvSearch, flxAdvSearch);
            var flxSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1000
            }, {}, {});
            flxSeperator.setDefaultUnit(kony.flex.DP);
            flxSeperator.add();
            flxSearch.add(flxSearchMain, flxSeperator);
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
                "height": "200dp",
                "id": "flxBalance",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "-1dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBalance.setDefaultUnit(kony.flex.DP);
            var lblAvailableBalance = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblAvailableBalance",
                "isVisible": true,
                "skin": "sknlblB8DCFFSSPR15px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.availBal"),
                "textStyle": {},
                "top": "12dp",
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
            var lblBalanceValue = new kony.ui.Label({
                "centerX": "50.00%",
                "id": "lblBalanceValue",
                "isVisible": true,
                "skin": "sknLblffffffSSP56px",
                "text": "+$10,783.54",
                "textStyle": {},
                "top": "35dp",
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
            var flxCurrentBal = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxCurrentBal",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "83dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCurrentBal.setDefaultUnit(kony.flex.DP);
            var lblCurrentBalance = new kony.ui.Label({
                "id": "lblCurrentBalance",
                "isVisible": true,
                "left": "29%",
                "skin": "sknlblffffffSSPL13px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.currBal"),
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
            var lblCurrBalValue = new kony.ui.Label({
                "id": "lblCurrBalValue",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLblffffffSSPSemibold14px",
                "text": "$12,783.54",
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
            flxCurrentBal.add(lblCurrentBalance, lblCurrBalValue);
            var lblDueDate = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblDueDate",
                "isVisible": false,
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
            var flxPendingDeposit = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxPendingDeposit",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "80dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPendingDeposit.setDefaultUnit(kony.flex.DP);
            var lblPendingDeposits = new kony.ui.Label({
                "centerX": "45%",
                "id": "lblPendingDeposits",
                "isVisible": true,
                "skin": "sknLblb8dcffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.pendingDeposits"),
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
            var lblPendingDepositsVal = new kony.ui.Label({
                "id": "lblPendingDepositsVal",
                "isVisible": true,
                "left": "2%",
                "skin": "sknlblfffffSSSemibold14dp",
                "text": "$100.0",
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
            flxPendingDeposit.add(lblPendingDeposits, lblPendingDepositsVal);
            var flxPendingWithdrawals = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxPendingWithdrawals",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "102dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPendingWithdrawals.setDefaultUnit(kony.flex.DP);
            var lblPendingWithdrawals = new kony.ui.Label({
                "centerX": "45%",
                "id": "lblPendingWithdrawals",
                "isVisible": true,
                "left": "28%",
                "skin": "sknLblb8dcffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.pendingWithdrawals"),
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
            var lblPendingWithdrawalsVal = new kony.ui.Label({
                "id": "lblPendingWithdrawalsVal",
                "isVisible": true,
                "left": "2%",
                "skin": "sknlblfffffSSSemibold14dp",
                "text": "$100.0",
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
            flxPendingWithdrawals.add(lblPendingWithdrawals, lblPendingWithdrawalsVal);
            var flxOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "20dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "48dp",
                "id": "flxOptions",
                "isVisible": true,
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
                "text": kony.i18n.getLocalizedString("kony.mb.AdvanceSearch.Withdrawalcash"),
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
                "left": "4%",
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
            var btnDisputeTransaction = new kony.ui.Button({
                "focusSkin": "sknbtn0a78d1SSPffffff100pr",
                "height": "100%",
                "id": "btnDisputeTransaction",
                "isVisible": false,
                "left": "2%",
                "right": "3%",
                "skin": "sknBtnffffffBorderffffffSSP28px",
                "text": kony.i18n.getLocalizedString("kony.mb.disputedTransactions.DisputedTransactions"),
                "top": "0dp",
                "width": "45%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            flxOptions.add(btnWithdrawCash, btnStatements, btnThreeDots, btnDisputeTransaction);
            flxBalance.add(lblAvailableBalance, lblBalanceValue, flxCurrentBal, lblDueDate, flxPendingDeposit, flxPendingWithdrawals, flxOptions);
            flxContainer.add(flxSearch, flxShadow, flxBalance);
            var flxSeperator2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "20dp",
                "id": "flxSeperator2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBlueHeaderShadow",
                "top": "-20dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSeperator2.setDefaultUnit(kony.flex.DP);
            flxSeperator2.add();
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
            var expandCollapseViewTransactions = new com.kmb.common.expandCollapseView.expandCollapseView({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "id": "expandCollapseViewTransactions",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "expandCollapseView": {
                        "isVisible": false
                    },
                    "flxHeaderBar1": {
                        "isVisible": false
                    },
                    "imgUpArrow1": {
                        "src": "uparrow_blue.png"
                    },
                    "segList": {
                        "data": [{
                            "imgIndicator": "",
                            "lblDate": "12/06/2020",
                            "lblTransaction": "Name",
                            "lblTransactionAmount": "200.00"
                        }, {
                            "imgIndicator": "",
                            "lblDate": "12/06/2020",
                            "lblTransaction": "NAme1",
                            "lblTransactionAmount": "300.00"
                        }, {
                            "imgIndicator": "",
                            "lblDate": "12/06/2020",
                            "lblTransaction": "reg",
                            "lblTransactionAmount": "222"
                        }],
                        "isVisible": true
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxTransactionListContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "67%",
                "id": "flxTransactionListContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxTransactionListContainer.setDefaultUnit(kony.flex.DP);
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
            accountsTransactionListNative.dataAvailability = "Service calls by component";
            accountsTransactionListNative.blockedDataAvailability = "Service calls by component";
            accountsTransactionListNative.sknRow = "f9f9";
            accountsTransactionListNative.sknSegmentShadow = "ICSknFlxShadow000fff";
            accountsTransactionListNative.sknAmount = "{\"amountField\":\"\",\"skin\":[{\"max\":0,\"skin\":\"sknLbl424242SSPRegular26px\"},{\"min\":0,\"max\":10,\"skin\":\"sknLbl424242SSPRegular26px\"},{\"min\":11,\"max\":999,\"skin\":\"sknLbl424242SSPRegular26px\"},{\"min\":1000,\"skin\":\"sknLbl424242SSPRegular26px\"}]}";
            flxTransactionListContainer.add(accountsTransactionListNative);
            var flxBottomSpacerForiPhone = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "85dp",
                "id": "flxBottomSpacerForiPhone",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxBottomSpacerForiPhone.setDefaultUnit(kony.flex.DP);
            flxBottomSpacerForiPhone.add();
            flxMainContainer.add(flxAccountsContainer, flxContainer, flxSeperator2, flxNoTransactions, expandCollapseViewTransactions, flxTransactionListContainer, flxBottomSpacerForiPhone);
            var flxGradient = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "300dp",
                "id": "flxGradient",
                "isVisible": true,
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
            var flxFooter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": false,
                "height": "60dp",
                "id": "flxFooter",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 120
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
                "autogrowMode": kony.flex.AUTOGROW_NONE,
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
                "overrides": {}
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            flxPopup.add(customPopup);
            var flxAdditionalOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxAdditionalOptions",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx000000Op50",
                "top": "0dp",
                "width": "100%",
                "zIndex": 107
            }, {}, {});
            flxAdditionalOptions.setDefaultUnit(kony.flex.DP);
            var flxPerformAdditionalOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "80dp",
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
            var flxLoanSchedule = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "50dp",
                "id": "flxLoanSchedule",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxLoanSchedule.setDefaultUnit(kony.flex.DP);
            var lblLoanSchedule = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblLoanSchedule",
                "isVisible": true,
                "skin": "sknLbl0095e4SSPRegular26px",
                "text": kony.i18n.getLocalizedString("kony.mb.loans.LoanSchedule"),
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
            var flxsepLoanSchedule = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxsepLoanSchedule",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxsepLoanSchedule.setDefaultUnit(kony.flex.DP);
            flxsepLoanSchedule.add();
            flxLoanSchedule.add(lblLoanSchedule, flxsepLoanSchedule);
            var flxUploadProfilePicture = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "50dp",
                "id": "flxUploadProfilePicture",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxUploadProfilePicture.setDefaultUnit(kony.flex.DP);
            var lbluploadProfilePicture = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lbluploadProfilePicture",
                "isVisible": true,
                "skin": "sknLbl0095e4SSPRegular26px",
                "text": kony.i18n.getLocalizedString("kony.mb.ProfilePersonalDetails.UploadProfilePicture"),
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
            var Copyflxs0i8fb78088bf442 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "Copyflxs0i8fb78088bf442",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            Copyflxs0i8fb78088bf442.setDefaultUnit(kony.flex.DP);
            Copyflxs0i8fb78088bf442.add();
            flxUploadProfilePicture.add(lbluploadProfilePicture, Copyflxs0i8fb78088bf442);
            var flxChangeProfilePicture = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "50dp",
                "id": "flxChangeProfilePicture",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxChangeProfilePicture.setDefaultUnit(kony.flex.DP);
            var lblChangeProfilePicture = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblChangeProfilePicture",
                "isVisible": true,
                "skin": "sknLbl0095e4SSPRegular26px",
                "text": kony.i18n.getLocalizedString("kony.mb.ProfilePersonalDetails.ChangeProfilePicture"),
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
            var Copyflxs0edc8877e250947 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "Copyflxs0edc8877e250947",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            Copyflxs0edc8877e250947.setDefaultUnit(kony.flex.DP);
            Copyflxs0edc8877e250947.add();
            flxChangeProfilePicture.add(lblChangeProfilePicture, Copyflxs0edc8877e250947);
            var flxRemoveProfilePicture = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "50dp",
                "id": "flxRemoveProfilePicture",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRemoveProfilePicture.setDefaultUnit(kony.flex.DP);
            var lblRemoveProfilePicture = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblRemoveProfilePicture",
                "isVisible": true,
                "skin": "sknLbl0095e4SSPRegular26px",
                "text": kony.i18n.getLocalizedString("kony.mb.profilePersonalDetails.RemoveProfilePicture"),
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
            var Copyflxs0a346519724b140 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "Copyflxs0a346519724b140",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            Copyflxs0a346519724b140.setDefaultUnit(kony.flex.DP);
            Copyflxs0a346519724b140.add();
            flxRemoveProfilePicture.add(lblRemoveProfilePicture, Copyflxs0a346519724b140);
            var flxEditPhoneNumbers = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "50dp",
                "id": "flxEditPhoneNumbers",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEditPhoneNumbers.setDefaultUnit(kony.flex.DP);
            var lblEditPhoneNumbers = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblEditPhoneNumbers",
                "isVisible": true,
                "skin": "sknLbl0095e4SSPRegular26px",
                "text": kony.i18n.getLocalizedString("kony.mb.ProfilePersonalDetails.EditPhoneNumbers"),
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
            var flxse = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxse",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxse.setDefaultUnit(kony.flex.DP);
            flxse.add();
            flxEditPhoneNumbers.add(lblEditPhoneNumbers, flxse);
            var flxDisputeTranactions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "50dp",
                "id": "flxDisputeTranactions",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDisputeTranactions.setDefaultUnit(kony.flex.DP);
            var lblViewDisputedTransactions = new kony.ui.Label({
                "centerX": "50.04%",
                "centerY": "50.00%",
                "id": "lblViewDisputedTransactions",
                "isVisible": true,
                "skin": "sknLbl0095e4SSPRegular26px",
                "text": kony.i18n.getLocalizedString("kony.mb.Accounts.ViewDisputedTransactions"),
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
            flxDisputeTranactions.add(lblViewDisputedTransactions);
            var flxEditEmail = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "sknflxf6f6f6Radius0px",
                "height": "50dp",
                "id": "flxEditEmail",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEditEmail.setDefaultUnit(kony.flex.DP);
            var lblEditEmail = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblEditEmail",
                "isVisible": true,
                "skin": "sknLbl0095e4SSPRegular26px",
                "text": kony.i18n.getLocalizedString("kony.mb.ProfilePersonalDetails.EditEmail"),
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
            var FLXSEP = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "FLXSEP",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FLXSEP.setDefaultUnit(kony.flex.DP);
            FLXSEP.add();
            flxEditEmail.add(lblEditEmail, FLXSEP);
            flxPerformAdditionalOptions.add(flxLoanSchedule, flxUploadProfilePicture, flxChangeProfilePicture, flxRemoveProfilePicture, flxEditPhoneNumbers, flxDisputeTranactions, flxEditEmail);
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
                "zIndex": 2
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
                "zIndex": 1
            }, {}, {});
            flxCancel.setDefaultUnit(kony.flex.DP);
            var lblCancel = new kony.ui.Label({
                "centerX": "50.04%",
                "centerY": "50.00%",
                "id": "lblCancel",
                "isVisible": true,
                "skin": "sknLbl0095e4SSPReg30px",
                "text": kony.i18n.getLocalizedString("kony.tab.common.CANCEL"),
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
            flxCancel.add(lblCancel);
            flxCancelOption.add(flxCancel);
            var flxTop = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "230dp",
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
            this.add(flxHeader, flxHeaderSearchbox, flxMainContainer, flxGradient, flxFooter, flxHamburger, flxPopup, flxAdditionalOptions);
        };
        var LBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_IMAGE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_d77b90474b104785939de7dd31e31c36,
            "metaData": {
                "image": "backbutton_1.png"
            },
            "id": "LBarBtnItem0"
        });
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_IMAGE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_gb54c57b0f5c4505b45d40f39d620f42,
            "metaData": {
                "image": "info.png"
            },
            "id": "RBarBtnItem0"
        });
        return [{
            "addWidgets": addWidgetsfrmAccountDetailsNew,
            "bounces": false,
            "enableScrolling": false,
            "enabledForIdleTimeout": true,
            "id": "frmAccountDetailsNew",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_j2175e623bc64812a2fea9925d60ec80(eventobject);
            },
            "skin": "sknFrmffffff",
            "title": "Family Checking Account"
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
                "leftItemsSupplementBackButton": false,
                "leftBarButtonItems": [
                    LBarBtnItem0
                ],
                "rightBarButtonItems": [RBarBtnItem0]
            },
            "titleBarSkin": "sknTitle1a98ffffffff30px"
        }]
    }
});