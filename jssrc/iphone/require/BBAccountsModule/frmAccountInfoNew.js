define("BBAccountsModule/frmAccountInfoNew", function() {
    return function(controller) {
        function addWidgetsfrmAccountInfoNew() {
            this.setDefaultUnit(kony.flex.DP);
            var flxContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "ICSknFlxffffff",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxContainer.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7%",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
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
                        "isVisible": true,
                        "text": "Edit"
                    },
                    "flxHeader": {
                        "isVisible": true
                    },
                    "flxHeaderShadow": {
                        "zIndex": 100
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
                        "centerY": "50%",
                        "isVisible": true,
                        "text": "Family Checking Account"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            customHeader.flxBack.onClick = controller.AS_FlexContainer_d429bfcf2e0d4c6dacef6a9ae7a9612d;
            flxHeader.add(customHeader);
            var flxContainerCheckingAcc = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxContainerCheckingAcc",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknScrFlxffffff",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxContainerCheckingAcc.setDefaultUnit(kony.flex.DP);
            var flxBankNamechecking = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxBankNamechecking",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBankNamechecking.setDefaultUnit(kony.flex.DP);
            var imgBankLogo1 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "22dp",
                "id": "imgBankLogo1",
                "isVisible": true,
                "left": "21dp",
                "skin": "slImage",
                "src": "bankofamerica.png",
                "top": "27dp",
                "width": "22dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblBankName1 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblBankName1",
                "isVisible": true,
                "left": "61dp",
                "skin": "sknLbl727272SSPR15px",
                "text": "Bank of America",
                "textStyle": {},
                "top": "13dp",
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
            flxBankNamechecking.add(imgBankLogo1, lblBankName1);
            var flxSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperator.setDefaultUnit(kony.flex.DP);
            flxSeperator.add();
            var flxBalDetContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxBalDetContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBalDetContainer.setDefaultUnit(kony.flex.DP);
            var segBankdetails = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "15dp",
                "data": [
                    [{
                            "lblHeader": kony.i18n.getLocalizedString("kony.mb.accdetails.balDetails")
                        },
                        [{
                            "lblTitle": "Available balance:",
                            "lblValue": "$200,00.0"
                        }, {
                            "lblTitle": "current balance",
                            "lblValue": "$909.0"
                        }, {
                            "lblTitle": "payment deposit",
                            "lblValue": "$609.0"
                        }, {
                            "lblTitle": "payment withdrawal",
                            "lblValue": "$609.0"
                        }, {
                            "lblTitle": "cashin (in 5 days)",
                            "lblValue": "$609.0"
                        }, {
                            "lblTitle": "cashout (in 5days)",
                            "lblValue": "$609.0"
                        }]
                    ]
                ],
                "groupCells": false,
                "id": "segBankdetails",
                "isVisible": true,
                "left": "2dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxbankdetails",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "sectionHeaderTemplate": "flxheader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxBalDetails": "flxBalDetails",
                    "flxShadow": "flxShadow",
                    "flxShadowBottomInfo": "flxShadowBottomInfo",
                    "flxTypeOneShadowInfo1": "flxTypeOneShadowInfo1",
                    "flxbankdetails": "flxbankdetails",
                    "flxbankdetailscontainer": "flxbankdetailscontainer",
                    "flxheader": "flxheader",
                    "lblHeader": "lblHeader",
                    "lblTitle": "lblTitle",
                    "lblValue": "lblValue"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": true,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": false,
                "indicator": constants.SEGUI_NONE,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": false
            });
            flxBalDetContainer.add(segBankdetails);
            var flxSeperator2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperator2.setDefaultUnit(kony.flex.DP);
            flxSeperator2.add();
            var flxAccDetailContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxAccDetailContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxAccDetailContainer.setDefaultUnit(kony.flex.DP);
            var segAccountdetails = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "10dp",
                "data": [
                    [{
                            "lblHeader": kony.i18n.getLocalizedString("kony.mb.enroll.accountDetails")
                        },
                        [{
                            "imgAccNoToggle": "view.png",
                            "lblTitle": "Account Number",
                            "lblValue": "XXX0905XXXXXX55"
                        }, {
                            "imgAccNoToggle": "",
                            "lblTitle": "Account Number",
                            "lblValue": "XXX0905XXXXXX55"
                        }, {
                            "imgAccNoToggle": "",
                            "lblTitle": "Account Number",
                            "lblValue": "XXX0905XXXXXX55"
                        }, {
                            "imgAccNoToggle": "",
                            "lblTitle": "Account Number",
                            "lblValue": "XXX0905XXXXXX55"
                        }, {
                            "imgAccNoToggle": "",
                            "lblTitle": "Account Number",
                            "lblValue": "XXX0905XXXXXX55"
                        }]
                    ]
                ],
                "groupCells": false,
                "id": "segAccountdetails",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxAccountdetails",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "sectionHeaderTemplate": "flxheader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxAccNoToggle": "flxAccNoToggle",
                    "flxAccountdetails": "flxAccountdetails",
                    "flxBalDetails": "flxBalDetails",
                    "flxRowcontainer": "flxRowcontainer",
                    "flxShadow": "flxShadow",
                    "flxShadowBottomInfo": "flxShadowBottomInfo",
                    "flxTypeOneShadowInfo1": "flxTypeOneShadowInfo1",
                    "flxheader": "flxheader",
                    "imgAccNoToggle": "imgAccNoToggle",
                    "lblHeader": "lblHeader",
                    "lblTitle": "lblTitle",
                    "lblValue": "lblValue"
                },
                "width": "100%",
                "zIndex": 1
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
            flxAccDetailContainer.add(segAccountdetails);
            var flxSeperator3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperator3.setDefaultUnit(kony.flex.DP);
            flxSeperator3.add();
            var btnCallBank = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "48dp",
                "id": "btnCallBank",
                "isVisible": true,
                "left": "6%",
                "right": "6%",
                "skin": "sknBtn0095e426pxEnabled",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.callBank"),
                "top": "20dp",
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var btnMsgBank = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn004B9526pxFocus",
                "height": "48dp",
                "id": "btnMsgBank",
                "isVisible": true,
                "left": "6%",
                "right": "6%",
                "skin": "sknBtn0095e426pxEnabled",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.msgBank"),
                "top": "20dp",
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxContainerCheckingAcc.add(flxBankNamechecking, flxSeperator, flxBalDetContainer, flxSeperator2, flxAccDetailContainer, flxSeperator3, btnCallBank, btnMsgBank);
            var flxInformationContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "95%",
                "id": "flxInformationContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxInformationContainer.setDefaultUnit(kony.flex.DP);
            var information = new com.temenos.infinity.accountdetails.information({
                "height": "100%",
                "id": "information",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "information": {
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
            information.titleTab1 = "{\"Savings\":\"Account Summary\",\"Checking\":\"Account Summary\",\"Loan\":\"Balance Details\",\"Mortgage\":\"Balance Details\",\"Deposit\":\"Account Summary\",\"CreditCard\":\"Account Summary\"}";
            information.visibleTab3 = true;
            information.visibleTab4 = false;
            information.amountFormat = "{ \"locale\":\"\", \"positiveFormat\" : \"{CS}{D}\", \"negativeFormat\" : \"-({CS}{D})\", \"fractionDigits\":\"2\"}";
            information.visibleTab2 = true;
            information.objectServiceName = "RBObjects";
            information.accountTypeContextPath = "{$.c.Accounts[0].accountType}";
            information.bankNameSkin = "{\"skin\":\"ICSknLbl72727215pxSSPR\"}";
            information.dateFormat = "{\"format\" : \"m/d/Y\"}";
            information.maskingRequired = "{\"MASKING\" : true}";
            information.nickName = "{$.c.Accounts[0].nickName}";
            information.currencyCodeContextPath = "{$.c.Accounts[0].currencyCode}";
            information.titleTab2 = "{\"Savings\":\"Interest Detail\",\"Checking\":\"Interest Detail\",\"Loan\":\"Interest Detail\",\"Mortgage\":\"Interest Detail\",\"Deposit\":\"Interest Detail\",\"CreditCard\":\"Balance & Bill Detail\"}";
            information.titleTab3 = "{\"Savings\":\"Account Info\",\"Checking\":\"Account Info\",\"Loan\":\"Account Info\",\"Mortgage\":\"Account Info\",\"Deposit\":\"Account Info\",\"CreditCard\":\"Account Info\"}";
            information.titleTab4 = "";
            information.field1LabelTab1 = "{\"Savings\":\"{i.kony.mb.accdetails.availBal}:\",\"Checking\":\"{i.kony.mb.accdetails.availBal}:\",\"Loan\":\"{i.kony.mb.accdetails.principalAmt}:\",\"Mortgage\":\"{i.kony.mb.accdetails.principalAmt}:\",\"Deposit\":\"{i.kony.mb.accdetails.currBal}:\",\"CreditCard\":\"{i.kony.mb.accdetails.currBal}:\"}";
            information.objectName = "Accounts";
            information.tabHeaderSkin = "{\"skin\":\"ICSknLbl424242SSPR18px\"}";
            information.backendDateFormat = "{\"format\" : \"Y-m-d\"}";
            information.accountNumberFormat = "{\"format\" : \"\\\\d(?=\\\\d{4})\", \"replaceCharacter\" : \"X\",  \"modifiers\" : \"g\"}";
            information.accountName = "{$.c.Accounts[0].accountName}";
            information.operationName = "getAccountDetails";
            information.field1LabelTab2 = "{\"Savings\":\"{i.kony.mb.accdetails.paidOn}:\",\"Checking\":\"{i.kony.mb.accdetails.paidOn}:\",\"Loan\":\"{i.kony.mb.accdetails.interestRate}:\",\"Mortgage\":\"{i.kony.mb.accdetails.interestRate}:\",\"Deposit\":\"{i.kony.mb.accdetails.lastPaidInterest}:\",\"CreditCard\":\"{i.kony.mb.account.minimumDueAmount}:\"}";
            information.field1LabelTab3 = "{\"Savings\":\"{i.kony.mb.accdetails.routingNumber}:\",\"Checking\":\"{i.kony.mb.accdetails.routingNumber}:\",\"Deposit\":{\"default\":\"{i.kony.mb.accdetails.primaryAccHolder}:\",\"business\":\"{i.kony.mb.accdetails.CompanyName}:\"}}";
            information.field1LabelTab4 = "";
            information.field1ValueTab1 = "{\"Savings\":{\"value\":\"{$.c.Accounts[0].availableBalance}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Checking\":{\"value\":\"{$.c.Accounts[0].availableBalance}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Loan\":{\"value\":\"{$.c.Accounts[0].originalAmount}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Mortgage\":{\"value\":\"{$.c.Accounts[0].originalAmount}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Deposit\":{\"value\":\"{$.c.Accounts[0].currentBalance}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"CreditCard\":{\"value\":\"{$.c.Accounts[0].currentBalance}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.labelNameSkin = "{\"skin\":\"ICSknLbl72727215pxSSPR\"}";
            information.userTypeContextPath = "business";
            information.maskVizIcon = "{\"maskeyeicon\":\"view.png\"}";
            information.noOfEllipsis = 3;
            information.field1TypeTab1 = "DetailsAmount";
            information.field1ValueTab2 = "{\"Savings\":{\"value\":\"{$.c.Accounts[0].lastPaymentDate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Checking\":{\"value\":\"{$.c.Accounts[0].lastPaymentDate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Loan\":{\"value\":\"{$.c.Accounts[0].interestRate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Mortgage\":{\"value\":\"{$.c.Accounts[0].interestRate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Deposit\":{\"value\":\"{$.c.Accounts[0].dividendLastPaidAmount}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"CreditCard\":{\"value\":\"{$.c.Accounts[0].minimumDue}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.field1ValueTab3 = "{\"Savings\":{\"value\":\"{$.c.Accounts[0].routingNumber}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Checking\":{\"value\":\"{$.c.Accounts[0].routingNumber}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Deposit\":{\"value\":\"{$.c.Accounts[0].accountHolder.fullname}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.criteria = "{\"accountID\":\"{$.c.Accounts[0].accountID}\",\"accountType\":\"{$.c.Accounts[0].accountType}\"}";
            information.field1ValueTab4 = "";
            information.defaultValueSkin = "{\"skin\":\"ICSknLbl42424215pxSSPR\"}";
            information.unmaskVizIcon = "{\"unmaskeyeicon\":\"strikedeyeicon.png\"}";
            information.noOfCharacters = 14;
            information.field2LabelTab1 = "{\"Savings\":\"{i.kony.mb.accdetails.currBal}:\",\"Checking\":\"{i.kony.mb.accdetails.currBal}:\",\"Loan\":\"{i.kony.mb.accdetails.outstandingBal}:\",\"Mortgage\":\"{i.kony.mb.accdetails.outstandingBal}:\"}";
            information.field1TypeTab2 = "{\"Savings\":\"Date\",\"Checking\":\"Date\",\"Loan\":\"Percentage\",\"Mortgage\":\"Percentage\",\"Deposit\":\"DetailsAmount\",\"CreditCard\":\"DetailsAmount\"}";
            information.field1TypeTab3 = "{\"Savings\":\"Label\",\"Checking\":\"Label\",\"Deposit\":\"Label\"}";
            information.serviceIdentifier = "S1";
            information.field1TypeTab4 = "";
            information.dateValueSkin = "{\"skin\":\"ICSknLbl42424215pxSSPR\"}";
            information.businessAccount = "{$.c.Accounts[0].isBusinessAccount}";
            information.field2ValueTab1 = "{\"Savings\":{\"value\":\"{$.c.Accounts[0].currentBalance}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Checking\":{\"value\":\"{$.c.Accounts[0].currentBalance}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Loan\":{\"value\":\"{$.c.Accounts[0].outstandingBalance}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Mortgage\":{\"value\":\"{$.c.Accounts[0].outstandingBalance}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.field2LabelTab2 = "{\"Savings\":\"{i.kony.mb.accdetails.creditIntRate}:\",\"Checking\":\"{i.kony.mb.accdetails.creditIntRate}:\",\"Loan\":\"{i.kony.mb.accdetails.interestPaidYTD}:\",\"Mortgage\":\"{i.kony.mb.accdetails.interestPaidYTD}:\",\"Deposit\":\"{i.kony.mb.accdetails.paidInterest}:\",\"CreditCard\":\"{i.i18n.accountDetail.paymentDueDate}:\"}";
            information.field2LabelTab3 = "{\"Savings\":\"{i.kony.mb.accdetails.accNumber}:\",\"Checking\":\"{i.kony.mb.accdetails.accNumber}:\",\"Loan\":\"{i.kony.mb.accdetails.accNumber}:\",\"Mortgage\":\"{i.kony.mb.accdetails.accNumber}:\",\"Deposit\":\"{i.kony.mb.accdetails.accNumber}:\",\"CreditCard\":{\"default\":\"{i.kony.mb.accdetails.primaryAccHolder}:\",\"business\":\"{i.kony.mb.accdetails.CompanyName}:\"}}";
            information.field2LabelTab4 = "";
            information.percentageValueSkin = "{\"skin\":\"ICSknLbl42424215pxSSPR\"}";
            information.field2ValueTab4 = "";
            information.field2TypeTab1 = "{\"Savings\":\"DetailsAmount\",\"Checking\":\"DetailsAmount\",\"Loan\":\"DetailsAmount\",\"Mortgage\":\"DetailsAmount\"}";
            information.field2ValueTab2 = "{\"Savings\":{\"value\":\"{$.c.Accounts[0].dividendRate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Checking\":{\"value\":\"{$.c.Accounts[0].dividendRate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Loan\":{\"value\":\"{$.c.Accounts[0].interestPaidYTD}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Mortgage\":{\"value\":\"{$.c.Accounts[0].interestPaidYTD}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Deposit\":{\"value\":\"{$.c.Accounts[0].dividendPaidYTD}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"CreditCard\":{\"value\":\"{$.c.Accounts[0].dueDate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.field2ValueTab3 = "{\"Savings\":{\"value\":\"{$.c.Accounts[0].accountID}\",\"width\":\"\",\"labelWidth\":\"\",\"left\":\"10dp\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\",\"reverseLayoutDirection\":true},\"Checking\":{\"value\":\"{$.c.Accounts[0].accountID}\",\"width\":\"\",\"labelWidth\":\"\",\"left\":\"10dp\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\",\"reverseLayoutDirection\":true},\"Loan\":{\"value\":\"{$.c.Accounts[0].accountID}\",\"width\":\"\",\"labelWidth\":\"\",\"left\":\"10dp\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\",\"reverseLayoutDirection\":true},\"Mortgage\":{\"value\":\"{$.c.Accounts[0].accountID}\",\"width\":\"\",\"labelWidth\":\"\",\"left\":\"10dp\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\",\"reverseLayoutDirection\":true},\"Deposit\":{\"value\":\"{$.c.Accounts[0].accountID}\",\"width\":\"\",\"labelWidth\":\"\",\"left\":\"10dp\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\",\"reverseLayoutDirection\":true},\"CreditCard\":{\"value\":\"{$.c.Accounts[0].accountHolder.fullname}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.positiveValueSkin = "{\"skin\":\"ICSknLbl42424215pxSSPR\"}";
            information.field3LabelTab1 = "{\"Savings\":\"{i.kony.mb.accdetails.pendingDeposits}:\",\"Checking\":\"{i.kony.mb.accdetails.pendingDeposits}:\",\"Loan\":\"{i.kony.mb.Loans.TotalOverdue}:\",\"Mortgage\":\"{i.kony.mb.Loans.TotalOverdue}:\",\"CreditCard\":\"{i.kony.mb.accdetails.availCred}:\"}";
            information.field2TypeTab2 = "{\"Savings\":\"Percentage\",\"Checking\":\"Percentage\",\"Loan\":\"DetailsAmount\",\"Mortgage\":\"DetailsAmount\",\"Deposit\":\"DetailsAmount\",\"CreditCard\":\"Date\"}";
            information.field2TypeTab3 = "{\"Savings\":\"AccountNumberNative\",\"Checking\":\"AccountNumberNative\",\"Loan\":\"AccountNumberNative\",\"Mortgage\":\"AccountNumberNative\",\"Deposit\":\"AccountNumberNative\",\"CreditCard\":\"Label\"}";
            information.field2TypeTab4 = "";
            information.negativeValueSkin = "{\"skin\":\"sknlblff000015pxSSPR\"}";
            information.field3ValueTab1 = "{\"Savings\":{\"value\":\"{$.c.Accounts[0].pendingDeposit}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Checking\":{\"value\":\"{$.c.Accounts[0].pendingDeposit}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Loan\":{\"value\":\"{$.c.Accounts[0].paymentDue}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Mortgage\":{\"value\":\"{$.c.Accounts[0].paymentDue}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"CreditCard\":{\"value\":\"{$.c.Accounts[0].availableCredit}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.field3LabelTab2 = "{\"Loan\":\"{i.kony.mb.accdetails.repaymentFrequency}:\",\"Mortgage\":\"{i.kony.mb.accdetails.repaymentFrequency}:\",\"Deposit\":\"{i.kony.mb.accdetails.settlementAccount}:\",\"CreditCard\":\"{i.kony.mb.account.lastStatementBalance}:\"}";
            information.field3LabelTab3 = "{\"Savings\":{\"default\":\"{i.kony.mb.accdetails.customerName}:\",\"business\":\"{i.kony.mb.accdetails.CompanyName}:\"},\"Checking\":{\"default\":\"{i.kony.mb.accdetails.customerName}:\",\"business\":\"{i.kony.mb.accdetails.CompanyName}:\"},\"Loan\":\"{i.kony.mb.accountdetails.accountType}:\",\"Mortgage\":\"{i.kony.mb.accountdetails.accountType}:\",\"Deposit\":\"{i.kony.mb.accdetails.jointAccHolder}:\",\"CreditCard\":\"{i.kony.mb.accdetails.cardIssueDate}:\"}";
            information.field3LabelTab4 = "";
            information.accountNumberSkin = "{\"skin\":\"ICSknLbl42424215pxSSPR\"}";
            information.field3TypeTab1 = "DetailsAmount";
            information.field3ValueTab2 = "{\"Loan\":{\"value\":\"{$.c.Accounts[0].rePaymentFrequency}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Mortgage\":{\"value\":\"{$.c.Accounts[0].rePaymentFrequency}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Deposit\":{\"value\":\"{$.c.Accounts[0].payoutAccount}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"CreditCard\":{\"value\":\"{$.c.Accounts[0].lastStatementBalance}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.field3ValueTab3 = "{\"Savings\":{\"value\":\"{$.c.Accounts[0].accountHolder.fullname}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Checking\":{\"value\":\"{$.c.Accounts[0].accountHolder.fullname}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"CreditCard\":{\"value\":\"{$.c.Accounts[0].openingDate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Loan\":{\"value\":\"{$.c.Accounts[0].accountType}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Mortgage\":{\"value\":\"{$.c.Accounts[0].accountType}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Deposit\":{\"value\":\"{$.c.Accounts[0].jointHolder}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.field3ValueTab4 = "";
            information.maskIconSkin = "{\"skin\":\"sknGlyster72727215Px\"}";
            information.unmaskIconSkin = "{\"skin\":\"sknGlyster72727215Px\"}";
            information.field4LabelTab1 = "{\"Savings\":\"{i.kony.mb.accdetails.pendingWithdrawals}:\",\"Checking\":\"{i.kony.mb.accdetails.pendingWithdrawals}:\",\"Loan\":\"{i.kony.mb.accounts.CurrentDue}:\",\"Mortgage\":\"{i.kony.mb.accounts.CurrentDue}:\",\"Deposit\":\"{i.kony.mb.accdetails.maturityDate}\",\"CreditCard\":\"{i.kony.mb.accdetails.currDueAmt}:\"}";
            information.field3TypeTab2 = "{\"Loan\":\"Label\",\"Mortgage\":\"Label\",\"Deposit\":\"Label\",\"CreditCard\":\"DetailsAmount\"}";
            information.field3TypeTab3 = "{\"Savings\":\"Label\",\"Checking\":\"Label\",\"CreditCard\":\"Date\",\"Loan\":\"Label\",\"Mortgage\":\"Label\",\"Deposit\":\"Label\"}";
            information.field3TypeTab4 = "";
            information.field4LabelTab2 = "";
            information.field4ValueTab1 = "{\"Savings\":{\"value\":\"{$.c.Accounts[0].pendingWithdrawal}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Checking\":{\"value\":\"{$.c.Accounts[0].pendingWithdrawal}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Loan\":{\"value\":\"{$.c.Accounts[0].nextPaymentAmount}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Mortgage\":{\"value\":\"{$.c.Accounts[0].nextPaymentAmount}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Deposit\":{\"value\":\"{$.c.Accounts[0].maturityDate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"CreditCard\":{\"value\":\"{$.c.Accounts[0].currentAmountDue}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.field4LabelTab3 = "{\"Savings\":\"{i.kony.mb.accdetails.swiftCode}:\",\"Checking\":\"{i.kony.mb.accdetails.swiftCode}:\",\"Loan\":\"{i.kony.mb.accdetails.routingNumber}:\",\"Mortgage\":\"{i.kony.mb.accdetails.routingNumber}:\"}";
            information.field4LabelTab4 = "";
            information.buttonSkin = "{\"skin\":\"ICSknLbl003E7515pxSSPR\"}";
            information.field4ValueTab2 = "";
            information.field4TypeTab1 = "{\"Savings\":\"DetailsAmount\",\"Checking\":\"DetailsAmount\",\"Loan\":\"DetailsAmount\",\"Mortgage\":\"DetailsAmount\",\"Deposit\":\"Date\",\"CreditCard\":\"DetailsAmount\"}";
            information.field4ValueTab3 = "{\"Savings\":{\"value\":\"{$.c.Accounts[0].swiftCode}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Checking\":{\"value\":\"{$.c.Accounts[0].swiftCode}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Loan\":{\"value\":\"{$.c.Accounts[0].routingNumber}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Mortgage\":{\"value\":\"{$.c.Accounts[0].routingNumber}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.field4ValueTab4 = "";
            information.editLabelSkin = "{\"skin\":\"ICSknLblSSPf5f5f515Px\"}";
            information.field4TypeTab2 = "";
            information.field5LabelTab1 = "";
            information.field4TypeTab3 = "{\"Savings\":\"Label\",\"Checking\":\"Label\",\"Loan\":\"Label\",\"Mortgage\":\"Label\"}";
            information.field4TypeTab4 = "";
            information.pageHeaderLabelSkin = "{\"skin\":\"ICSknHeaderFFF34px\"}";
            information.field5LabelTab2 = "{\"Loan\":\"{i.kony.mb.account.lastPaymentAmount}:\",\"Mortgage\":\"{i.kony.mb.account.lastPaymentAmount}:\"}";
            information.field5ValueTab1 = "";
            information.field5LabelTab3 = "{\"Savings\":{\"default\":\"{i.kony.mb.accdetails.jointholder1}:\",\"business\":\"{i.kony.mb.accdetails.customerName}\"},\"Checking\":{\"default\":\"{i.kony.mb.accdetails.jointholder1}:\",\"business\":\"{i.kony.mb.accdetails.customerName}\"},\"Loan\":\"{i.kony.mb.accdetails.swiftCode}:\",\"Mortgage\":\"{i.kony.mb.accdetails.swiftCode}:\"}";
            information.field5LabelTab4 = "";
            information.headerBgSkin = "{\"skin\":\"ICSknFlxBg003e7515px\"}";
            information.field5ValueTab2 = "{\"Loan\":{\"value\":\"{$.c.Accounts[0].lastPaymentAmount}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Mortgage\":{\"value\":\"{$.c.Accounts[0].lastPaymentAmount}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.field5TypeTab1 = "";
            information.field5ValueTab3 = "{\"Savings\":{\"value\":\"{$.c.Accounts[0].jointHolders[0].fullname}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Checking\":{\"value\":\"{$.c.Accounts[0].jointHolders[0].fullname}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Loan\":{\"value\":\"{$.c.Accounts[0].swiftCode}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Mortgage\":{\"value\":\"{$.c.Accounts[0].swiftCode}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.field5ValueTab4 = "";
            information.bankNameBGSkin = "{\"skin\":\"ICSknFlxffffffShadowNoborder\"}";
            information.field5TypeTab2 = "DetailsAmount";
            information.field6LabelTab1 = "{\"Savings\":\"{i.kony.mb.accdetails.overdraftLimit}:\",\"Checking\":\"{i.kony.mb.accdetails.overdraftLimit}:\",\"Loan\":\"{i.kony.mb.accdetails.dueDate}:\",\"Mortgage\":\"{i.kony.mb.accdetails.dueDate}:\",\"CreditCard\":\"{i.kony.mb.accdetails.creditLimit}:\",\"Deposit\":\"{i.kony.mb.accdetails.interestAccrued}:\"}";
            information.field5TypeTab3 = "{\"Savings\":\"Label\",\"Checking\":\"Label\",\"CreditCard\":\"Amount\",\"Loan\":\"Label\",\"Mortgage\":\"Label\"}";
            information.field5TypeTab4 = "";
            information.tabHeaderBGSkin = "{\"skin\":\"ICSknFlxF6F6F6\"}";
            information.field6LabelTab2 = "{\"Savings\":\"{i.kony.mb.accdetails.lastPaidInterest}:\",\"Checking\":\"{i.kony.mb.accdetails.lastPaidInterest}:\",\"Loan\":\"{i.kony.mb.account.lastPaymentDate}:\",\"Mortgage\":\"{i.kony.mb.account.lastPaymentDate}:\",\"Deposit\":\"{i.kony.mb.accdetails.creditIntRate}:\",\"CreditCard\":\"{i.kony.mb.account.lastPaymentAmount}:\"}";
            information.field6LabelTab3 = "{\"Savings\":{\"default\":\"{i.kony.mb.accdetails.jointholder2}:\",\"business\":\"\"},\"Checking\":{\"default\":\"{i.kony.mb.accdetails.jointholder2}:\",\"business\":\"\"},\"Loan\":{\"default\":\"{i.kony.mb.accdetails.customerName}:\",\"business\":\"{i.kony.mb.accdetails.CompanyName}:\"},\"Mortgage\":{\"default\":\"{i.kony.mb.accdetails.customerName}:\",\"business\":\"{i.kony.mb.accdetails.CompanyName}:\"}}";
            information.field6LabelTab4 = "";
            information.field6ValueTab1 = "{\"Savings\":{\"value\":\"{$.c.Accounts[0].transferLimit}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Checking\":{\"value\":\"{$.c.Accounts[0].transferLimit}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Loan\":{\"value\":\"{$.c.Accounts[0].nextPaymentDate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Mortgage\":{\"value\":\"{$.c.Accounts[0].nextPaymentDate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"CreditCard\":{\"value\":\"{$.c.Accounts[0].creditLimit}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Deposit\":{\"value\":\"{$.c.Accounts[0].accruedInterest}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.tabDetailsBGSkin = "{\"skin\":\"ICSknFlxffffffShadowNoborder\"}";
            information.field6TypeTab1 = "{\"Savings\":\"DetailsAmount\",\"Checking\":\"DetailsAmount\",\"Loan\":\"Date\",\"Mortgage\":\"Date\",\"CreditCard\":\"DetailsAmount\",\"Deposit\":\"DetailsAmount\"}";
            information.field6ValueTab2 = "{\"Savings\":{\"value\":\"{$.c.Accounts[0].dividendLastPaidAmount}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Checking\":{\"value\":\"{$.c.Accounts[0].dividendLastPaidAmount}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Loan\":{\"value\":\"{$.c.Accounts[0].lastPaymentDate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Mortgage\":{\"value\":\"{$.c.Accounts[0].lastPaymentDate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Deposit\":{\"value\":\"{$.c.Accounts[0].dividendRate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"CreditCard\":{\"value\":\"{$.c.Accounts[0].lastPaymentAmount}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.field6ValueTab3 = "{\"Savings\":{\"value\":\"{$.c.Accounts[0].jointHolders[1].fullname}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Checking\":{\"value\":\"{$.c.Accounts[0].jointHolders[1].fullname}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Loan\":{\"value\":\"{$.c.Accounts[0].accountHolder.fullname}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Mortgage\":{\"value\":\"{$.c.Accounts[0].accountHolder.fullname}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.field6ValueTab4 = "";
            information.field7LabelTab1 = "";
            information.field6TypeTab2 = "{\"Savings\":\"DetailsAmount\",\"Checking\":\"DetailsAmount\",\"Loan\":\"Date\",\"Mortgage\":\"Date\",\"Deposit\":\"Percentage\",\"CreditCard\":\"DetailsAmount\"}";
            information.field6TypeTab3 = "{\"Savings\":\"Label\",\"Checking\":\"Label\",\"Loan\":\"Label\",\"Mortgage\":\"Label\"}";
            information.field6TypeTab4 = "";
            information.field7ValueTab1 = "";
            information.field7LabelTab2 = "{\"Savings\":\"{i.kony.mb.accdetails.paidInterest}:\",\"Checking\":\"{i.kony.mb.accdetails.paidInterest}:\",\"Loan\":\"{i.kony.mb.accdetails.SanctionedAmount}:\",\"Mortgage\":\"{i.kony.mb.accdetails.SanctionedAmount}:\",\"Deposit\":\"{i.kony.mb.accdetails.paidOn}:\",\"CreditCard\":\"{i.kony.mb.account.lastPaymentDate}:\"}";
            information.field7LabelTab3 = "{\"Savings\":\"{i.kony.mb.TransfersEurope.IBAN}:\",\"Checking\":\"{i.kony.mb.TransfersEurope.IBAN}:\"}";
            information.field7LabelTab4 = "";
            information.field7TypeTab1 = "";
            information.field7ValueTab2 = "{\"Savings\":{\"value\":\"{$.c.Accounts[0].dividendPaidYTD}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Checking\":{\"value\":\"{$.c.Accounts[0].dividendPaidYTD}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Loan\":{\"value\":\"{$.c.Accounts[0].sanctionedAmount}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Mortgage\":{\"value\":\"{$.c.Accounts[0].sanctionedAmount}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Deposit\":{\"value\":\"{$.c.Accounts[0].dividendLastPaidDate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"CreditCard\":{\"value\":\"{$.c.Accounts[0].lastPaymentDate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.field7ValueTab3 = "{\"Savings\":{\"value\":\"{$.c.Accounts[0].IBAN}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Checking\":{\"value\":\"{$.c.Accounts[0].IBAN}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.field7ValueTab4 = "";
            information.field7TypeTab2 = "{\"Savings\":\"DetailsAmount\",\"Checking\":\"DetailsAmount\",\"Loan\":\"DetailsAmount\",\"Mortgage\":\"DetailsAmount\",\"Deposit\":\"Date\",\"CreditCard\":\"Date\"}";
            information.field8LabelTab1 = "";
            information.field7TypeTab3 = "{\"Savings\":\"Label\",\"Checking\":\"Label\"}";
            information.field7TypeTab4 = "";
            information.field8LabelTab2 = "{\"Savings\":\"{i.kony.mb.accdetails.interestAccrued}:\",\"Checking\":\"{i.kony.mb.accdetails.interestAccrued}:\",\"Loan\":\"{i.kony.mb.accdetails.sanctionedDate}:\",\"Mortgage\":\"{i.kony.mb.accdetails.sanctionedDate}:\",\"CreditCard\":\"{i.kony.mb.accdetails.rewrdBal}:\"}";
            information.field8ValueTab1 = "";
            information.field8LabelTab3 = "{\"Savings\":{\"default\":\"{i.kony.mb.accdetails.jointholder3}:\",\"business\":\"\"},\"Checking\":{\"default\":\"{i.kony.mb.accdetails.jointholder3}:\",\"business\":\"\"},\"Loan\":\"{i.kony.mb.accdetails.jointAccHolder}:\",\"Mortgage\":\"{i.kony.mb.accdetails.jointAccHolder}:\"}";
            information.field8LabelTab4 = "";
            information.field8ValueTab2 = "{\"Savings\":{\"value\":\"{$.c.Accounts[0].accruedInterest}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Checking\":{\"value\":\"{$.c.Accounts[0].accruedInterest}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Loan\":{\"value\":\"{$.c.Accounts[0].sanctionedDate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Mortgage\":{\"value\":\"{$.c.Accounts[0].sanctionedDate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"CreditCard\":{\"value\":\"{$.c.Accounts[0].availableCredit}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.field8TypeTab1 = "";
            information.field8ValueTab3 = "{\"Savings\":{\"value\":{\"default\":\"{$.c.Accounts[0].jointHolders[2].fullname}\",\"business\":\"\"},\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Checking\":{\"value\":{\"default\":\"{$.c.Accounts[0].jointHolders[2].fullname}\",\"business\":\"\"},\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Loan\":{\"value\":\"{$.c.Accounts[0].jointHolders[0].fullname}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Mortgage\":{\"value\":\"{$.c.Accounts[0].jointHolders[0].fullname}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.field8ValueTab4 = "";
            information.field8TypeTab2 = "{\"Savings\":\"DetailsAmount\",\"Checking\":\"DetailsAmount\",\"Loan\":\"Date\",\"Mortgage\":\"Date\",\"CreditCard\":\"DetailsAmount\"}";
            information.field9LabelTab1 = "";
            information.field8TypeTab3 = "{\"Savings\":\"Label\",\"Checking\":\"Label\",\"Loan\":\"Label\",\"Mortgage\":\"Label\"}";
            information.field8TypeTab4 = "";
            information.field9LabelTab2 = "{\"Loan\":\"{i.kony.mb.accdetails.principalAmt}:\",\"Mortgage\":\"{i.kony.mb.accdetails.principalAmt}:\",\"CreditCard\":\"{i.kony.mb.accdetails.interestRate}:\",\"Deposit\":\"{i.kony.mb.accdetails.interestDue}:\"}";
            information.field9ValueTab1 = "";
            information.field9LabelTab3 = "{\"Savings\":{\"default\":\"{i.kony.mb.accdetails.jointholder4}:\",\"business\":\"\"},\"Checking\":{\"default\":\"{i.kony.mb.accdetails.jointholder4}:\",\"business\":\"\"}}";
            information.field9LabelTab4 = "";
            information.field9ValueTab2 = "{\"CreditCard\":{\"value\":\"{$.c.Accounts[0].interestRate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Loan\":{\"value\":\"{$.c.Accounts[0].originalAmount}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Mortgage\":{\"value\":\"{$.c.Accounts[0].originalAmount}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Deposit\":{\"value\":\"{$.c.Accounts[0].termInterestDue}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.field9TypeTab1 = "";
            information.field9ValueTab3 = "{\"Savings\":{\"value\":{\"default\":\"{$.c.Accounts[0].jointHolders[3].fullname}\",\"business\":\"\"},\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Checking\":{\"value\":{\"default\":\"{$.c.Accounts[0].jointHolders[3].fullname}\",\"business\":\"\"},\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.field9ValueTab4 = "";
            information.field9TypeTab2 = "{\"CreditCard\":\"Percentage\",\"Loan\":\"DetailsAmount\",\"Mortgage\":\"DetailsAmount\",\"Deposit\":\"DetailsAmount\"}";
            information.field10LabelTab1 = "";
            information.field9TypeTab3 = "{\"Savings\":\"Label\",\"Checking\":\"Label\"}";
            information.field9TypeTab4 = "";
            information.field10LabelTab2 = "{\"Loan\":\"{i.kony.mb.accdetails.maturityDate}:\",\"Mortgage\":\"{i.kony.mb.accdetails.maturityDate}:\",\"Deposit\":\"{i.kony.mb.accdetails.dueDate}:\"}";
            information.field10ValueTab1 = "";
            information.field10LabelTab3 = "{\"Savings\":{\"default\":\"{i.kony.mb.accdetails.jointholder5}:\",\"business\":\"\"},\"Checking\":{\"default\":\"{i.kony.mb.accdetails.jointholder5}:\",\"business\":\"\"}}";
            information.field10LabelTab4 = "";
            information.field10ValueTab2 = "{\"Loan\":{\"value\":\"{$.c.Accounts[0].maturityDate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Mortgage\":{\"value\":\"{$.c.Accounts[0].maturityDate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Deposit\":{\"value\":\"{$.c.Accounts[0].interestDueDate}\",\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.field10TypeTab1 = "";
            information.field10ValueTab3 = "{\"Savings\":{\"value\":{\"default\":\"{$.c.Accounts[0].jointHolders[4].fullname}\",\"business\":\"\"},\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"},\"Checking\":{\"value\":{\"default\":\"{$.c.Accounts[0].jointHolders[4].fullname}\",\"business\":\"\"},\"width\":\"100%\",\"labelWidth\":\"100%\",\"height\":\"100%\",\"contentAlignment\":\"CONTENT_ALIGN_TOP_RIGHT\"}}";
            information.field10ValueTab4 = "";
            information.field10TypeTab2 = "Date";
            information.field10TypeTab3 = "{\"Savings\":\"Label\",\"Checking\":\"Label\"}";
            information.field10TypeTab4 = "";
            flxInformationContainer.add(information);
            flxContainer.add(flxHeader, flxContainerCheckingAcc, flxInformationContainer);
            var flxPopupNickName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "flxPopupNickName",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0f2a5b0bfd49a49",
                "top": "0%",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxPopupNickName.setDefaultUnit(kony.flex.DP);
            var flxPopupContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "40dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "200dp",
                "id": "flxPopupContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "sknFlxPopupDocuments",
                "width": "88%",
                "zIndex": 5
            }, {}, {});
            flxPopupContainer.setDefaultUnit(kony.flex.DP);
            var btnEditNickName = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknbtnf6f6f6FocusSSP114prRadius10px",
                "height": "50dp",
                "id": "btnEditNickName",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtn0095e428px",
                "text": kony.i18n.getLocalizedString("kony.mb.accdetails.editNickName"),
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var flxSeperatorone = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorone",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorone.setDefaultUnit(kony.flex.DP);
            flxSeperatorone.add();
            var btnRefresh = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknbtnf6f6f6FocusSSP114prRadius10px",
                "height": "50dp",
                "id": "btnRefresh",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtn0095e428px",
                "text": kony.i18n.getLocalizedString("kony.mb.Accounts.refresh"),
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var flxSeperatortwo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatortwo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperatortwo.setDefaultUnit(kony.flex.DP);
            flxSeperatortwo.add();
            var btnDelete = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknbtnf6f6f6FocusSSP114prRadius10px",
                "height": "50dp",
                "id": "btnDelete",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtn0095e428px",
                "text": kony.i18n.getLocalizedString("kony.mb.externalBank.DeleteAccount"),
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            var flxSeperatorthree = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperatorthree",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperatorthree.setDefaultUnit(kony.flex.DP);
            flxSeperatorthree.add();
            var btnCancel = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknbtnf6f6f6FocusSSP114prRadius10px",
                "height": "50dp",
                "id": "btnCancel",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtn0095e428px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": false
            });
            flxPopupContainer.add(btnEditNickName, flxSeperatorone, btnRefresh, flxSeperatortwo, btnDelete, flxSeperatorthree, btnCancel);
            var flxDismiss = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "140dp",
                "clipBounds": true,
                "id": "flxDismiss",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDismiss.setDefaultUnit(kony.flex.DP);
            flxDismiss.add();
            flxPopupNickName.add(flxPopupContainer, flxDismiss);
            this.add(flxContainer, flxPopupNickName);
        };
        var RBarBtnItem0 = new kony.ui.BarButtonItem({
            "type": constants.BAR_BUTTON_TITLE,
            "tintColor": "ffffff00",
            "style": constants.BAR_ITEM_STYLE_PLAIN,
            "enabled": true,
            "action": controller.AS_BarButtonItem_e773273879fc4a22b5af46c01ff14310,
            "metaData": {
                "title": "Edit"
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
            "addWidgets": addWidgetsfrmAccountInfoNew,
            "enabledForIdleTimeout": true,
            "id": "frmAccountInfoNew",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": function(eventobject) {
                controller.AS_Form_abe7c5dc28714f9084b2841a6c7567a5(eventobject);
            },
            "skin": "sknFrmoa78d1Gradient50",
            "title": "Family Checking Account"
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