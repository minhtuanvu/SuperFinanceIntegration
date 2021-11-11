define("UnifiedTransferFlow/frmDomesticTransfer", function() {
    return function(controller) {
        function addWidgetsfrmDomesticTransfer() {
            this.setDefaultUnit(kony.flex.DP);
            var flxDomesticBank = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "flxDomesticBank",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxDomesticBank.setDefaultUnit(kony.flex.DP);
            var flxContent = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "100%",
                "id": "flxContent",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "ICSknBGFFFFFFNoBorder",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxContent.setDefaultUnit(kony.flex.DP);
            var MakeATransfer = new com.temenos.infinityComponent.MakeATransfer({
                "height": "100%",
                "id": "MakeATransfer",
                "isVisible": true,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "MakeATransfer": {
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
            MakeATransfer.fromAccountObjectName = "Accounts";
            MakeATransfer.fromAccountsTitle = "Transfer From";
            MakeATransfer.sknHeaderLbl = "ICSknLblfffffSSPSemiBold76px";
            MakeATransfer.fieldFromLblAmtScrn = "{i.kony.i18n.verifyDetails.from}";
            MakeATransfer.toAccountsTitle = "Transfer To";
            MakeATransfer.currencyPageTitle = "{i.i18n.common.Currency}";
            MakeATransfer.paymentMethodTitle = "{i.kony.mb.TransfersEurope.PaymentMethod}";
            MakeATransfer.titleBICSwiftCode = "BIC/SWIFT Code";
            MakeATransfer.swiftLookupHeader = "SWIFT BIC Search";
            MakeATransfer.titleRequiredCode = "Required Code";
            MakeATransfer.titleCalenderSendOn = "{\"optionValues\": \"Send On,Start Date,End Date\",\"selectedValue\": \"$.c.date\"}";
            MakeATransfer.verifySectionTitle = "Verify Details";
            MakeATransfer.titleAddAddress = "{i.kony.address.AddAddress}";
            MakeATransfer.toAccObjServiceName = "PayeeObjects";
            MakeATransfer.cancelButton = "{i.kony.mb.common.Cancel}";
            MakeATransfer.searchObjectName = "";
            MakeATransfer.amountLable1 = "{i.i18n.unifiedTransfer.outstandingDue}";
            MakeATransfer.frequencyPageTitle = "{i.kony.mb.transaction.frequency}";
            MakeATransfer.feesPaidTitle = "{i.i18n.TransfersEur.FeesPaidBy}";
            MakeATransfer.titleReferenceLbl = "FX Rate Reference";
            MakeATransfer.titleIntermediaryBIC = "Intermediary BIC";
            MakeATransfer.titleE2ERef = "{i.kony.i18n.verifyDetails.e2eRef}";
            MakeATransfer.titleRecipientName = "{i.i18n.unified.recipientsName}";
            MakeATransfer.titleAccountNumber = "{i.kony.mb.enroll.accountNumber}";
            MakeATransfer.titlePayeeNickname = "Payee Nickname";
            MakeATransfer.titlePayeeNicknameSuccess = "Payee Nickname";
            MakeATransfer.contactTypeTitle = "{i.i18n.unified.contactType}";
            MakeATransfer.countryCodeTitle = "{i.kony.mb.TransfersEurope.CountryCode}";
            MakeATransfer.iconActive = "active.png";
            MakeATransfer.transferType = "{$.c.transferType}";
            MakeATransfer.dvfConfig = "{\"$.TRANSFERTYPE.T1\":{\"amount\":\"AMOUNT\",\"date\":\"DATE\"},\"$.TRANSFERTYPE.T2\":{\"amount\":\"AMOUNT\",\"date\":\"DATE\"},\"$.TRANSFERTYPE.T3\":{\"amount\":\"AMOUNT\",\"date\":\"DATE\"},\"$.TRANSFERTYPE.T4\":{\"amount\":\"AMOUNT\",\"date\":\"DATE\"}}";
            MakeATransfer.countryObjectServiceName = "RBObjects";
            MakeATransfer.lblCalenderDate = "11/12/2020";
            MakeATransfer.transferTypes = "{\"T1\":\"Within Same Bank\",\"T2\":\"Domestic Transfer\",\"T3\":\"International Transfer\",\"T4\":\"Pay a Person\"}";
            MakeATransfer.txtInputSendOn = "{\"text\": \"{$.c.calenderValues}\",\"inputMode\": \"ANY\",\"length\": {\"min\": 5,\"max\": 20}}";
            MakeATransfer.segregationTypes = "{   \"ST1\": {     \"value\": \"Retail\",     \"displayText\": \"Retail Accounts\",     \"weight\": \"1\"   },   \"ST2\": {     \"value\": \"Business\",     \"displayText\": \"Business Accounts\",     \"weight\": \"2\"   } }";
            MakeATransfer.calenderContinueBtn = "{\"id\": \"calenderBtn\",\"text\": \"Continue\",\"widgth\":\"50%\"}";
            MakeATransfer.dataIdentifier = "L1";
            MakeATransfer.accountTypesList = "{Savings,Checking,Loan,deposit,credit card}";
            MakeATransfer.dataObject = "{$.S1.Transactions}";
            MakeATransfer.flowType = "{\"FT1\": \"ADD\", \"FT2\": \"EDIT\"}";
            MakeATransfer.swiftSrchObjServiceName = "RBObjects";
            MakeATransfer.transObjectName = "Transaction";
            MakeATransfer.ValObjectServiceName = "TransactionObjects";
            MakeATransfer.DateObjectServiceName = "RBObjects";
            MakeATransfer.sendOnDateLabel = "{i.i18n.TransfersEur.SendOn}";
            MakeATransfer.addressObjectService = "RBObjects";
            MakeATransfer.IBANObjectServiceName = "RBObjects";
            MakeATransfer.getBeneficiaryService = "RBObjects";
            MakeATransfer.lblSupportingDocuments = "{i.kony.i18n.verifyDetails.supportingDocumentsOptional}";
            MakeATransfer.creditcardObjServName = "RBObjects";
            MakeATransfer.IBANSwiftObjectServiceName = "RBObjects";
            MakeATransfer.valOTTobjectServiceName = "RBObjects";
            MakeATransfer.OTTserviceResponseIdentifier = "O2";
            MakeATransfer.CCObjectServiceName = "RBObjects";
            MakeATransfer.loanCriteria = "{\"accountID\":\"{$.c.toAccountNumber}\"}";
            MakeATransfer.swiftSrchObjectName = "SwiftCode";
            MakeATransfer.fromAccountOperationName = "getAccountsPostLogin";
            MakeATransfer.fromdescriptionLabel = "Select an account to transfer from";
            MakeATransfer.fieldFromValueAmtScrn = "{ \"text\": \"{$.c.fromAccountName}\", \"fieldType\": \"Label\" }";
            MakeATransfer.todescriptionLabel = "Select a recipient to transfer to";
            MakeATransfer.dropdownTransferCurrency = "{\"optionValues\":\"USD,EUR,GBP,YEN,INR\",\"optionBackendValues\":\"USD,EUR,GBP,YEN,INR\",\"selectedValue\":\"$.c.transferCurrency\"}";
            MakeATransfer.lblPaymentMethod = "{i.i18n.unified.selectPaymentMethod}";
            MakeATransfer.swiftLookupDescription = "To find your SWIFT code please enter bank details";
            MakeATransfer.requiredCodeLbl = "You can fill any one of the field provided below out of 3 (or) you can fill all of the three fields as well.";
            MakeATransfer.fieldFromLbl = "kony.i18n.verifyDetails.from";
            MakeATransfer.lblAddAddress = "{i.kony.address.AddressText}";
            MakeATransfer.toAccObjectName = "Recipients";
            MakeATransfer.sknHeaderBg = "ICSknFlxBg003e7515px";
            MakeATransfer.searchProperties = "{\"text\":\"{$.c.searchKey}\",\"placeHolder\":\"Search by account name or number\",\"inputMode\":\"ANY\"}";
            MakeATransfer.searchOperationName = "";
            MakeATransfer.amountValue1 = "{\"mapping\":[{\"internal\":{\"creditcard\":{\"fieldMap\":\"outstandingBalance\"},\"Loan\":{\"fieldMap\":\"outstandingBalance\"},\"other\":{\"fieldMap\":\"outstandingBalance\"}},\"format\":{\"locale\":\"en-US\",\"positiveFormat\":\"{CS}{D}\",\"negativeFormat\":\"-{CS}{D}\",\"fractionDigits\":\"2\"}}],\"fieldType\":\"Amount\",\"currency\":\"currencyCode\",\"labelType\":\"value\"}";
            MakeATransfer.dropdownFrequency = "{\"optionValues\":\"Once,Daily,Weekly,Every Two Weeks,Monthly,Quarterly,Every Six Months,Annually\",\"optionBackendValues\":\"Once,Daily,Weekly,Every Two Weeks,Monthly,Quarterly,Every Six Months,Annually\",\"selectedValue\":\"$.c.transferCurrency\"}";
            MakeATransfer.lblFeesPaidBy = "{i.i18n.unified.selectFeesPaidBy}";
            MakeATransfer.lblfxRateReference = "FX Rate Ref(Optional)";
            MakeATransfer.lblIntermediaryBIC = "Intermediary BIC(Optional):";
            MakeATransfer.lblE2ERef = "{i.kony.i18n.verifyDetails.e2eReference}";
            MakeATransfer.lblRecipientName = "{i.i18n.unified.enterRecipientsName}";
            MakeATransfer.lblAccountNumber = "{i.kony.reqCode.EnterAccountNumber}";
            MakeATransfer.lblPayeeNickname = "Payee Nickname";
            MakeATransfer.lblPayeeNicknameSuccess = "Saved Successfully";
            MakeATransfer.countrySearchProperty = "{\"mapping\":\"{$.c.searchKey}\",\"placeHolder\":\"{i.kony.mb.common.search}\",\"inputType\":\"ANY\"}";
            MakeATransfer.iconAdd = "addicon.png";
            MakeATransfer.minAmount = "{\"$.TRANSFERTYPE.T1\":{\"amount\":\"3\"},\"$.TRANSFERTYPE.T2\":{\"amount\":\"3\"},\"$.TRANSFERTYPE.T3\":{\"amount\":\"3\"},\"$.TRANSFERTYPE.T4\":{\"amount\":\"3\"}}";
            MakeATransfer.countryObjectName = "Country";
            MakeATransfer.transObjectServiceName = "TransactionObjects";
            MakeATransfer.countryObject = "Country";
            MakeATransfer.listBoxDropDownImage = "listboxarw.png";
            MakeATransfer.contactTypeDescription = "{i.i18n.unified.contactTypeDescription}";
            MakeATransfer.ValObjName = "Transaction";
            MakeATransfer.DateObjectName = "Transactions";
            MakeATransfer.startDateLabel = "{i.kony.mb.common.StartDate}";
            MakeATransfer.IBANObjectName = "Transactions";
            MakeATransfer.getBeneficiaryObject = "ExternalAccounts";
            MakeATransfer.selectedFileValue = "{$.c.supportingDocuments}";
            MakeATransfer.creaditcardObjectName = "Accounts";
            MakeATransfer.IBANSwiftObjectName = "SwiftCode";
            MakeATransfer.valOTTcriteria = "{\"amount\":\"{$.c.transferAmount}\",\"transactionId\":\"\",\"frequencyType\":\"{$.c.frequency}\",\"fromAccountNumber\":\"{$.c.fromAccountNumber}\",\"isScheduled\":\"0\",\"frequencyStartDate\":\"{$.c.ISOStartDate}\",\"frequencyEndDate\":\"{$.c.ISOEndDate}\",\"scheduledDate\":\"{$.c.ISOSendOn}\",\"toAccountNumber\":\"{$.c.toAccountNumber}\",\"paymentType\":\"\",\"paidBy\":\"{$.c.selectedServiceFeesPaidBy}\",\"swiftCode\":\"{$.c.swiftCode}\",\"serviceName\":\"INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE\",\"beneficiaryName\":\"{$.c.beneficiaryName}\",\"beneficiaryNickname\":\"{$.c.beneficiaryNickName}\",\"transactionsNotes\":\"{$.c.notes}\",\"transactionType\":\"ExternalTransfer\",\"transactionCurrency\":\"{$.c.transactionCurrency}\",\"fromAccountCurrency\":\"{$.c.fromAccountCurrency}\",\"toAccountCurrency\":\"{$.c.transactionCurrency}\",\"numberOfRecurrences\":\"{$.c.numberOfRecurrences}\",\"ExternalAccountNumber\":\"{$.c.toAccountNumber}\",\"uploadedattachments\":\"{$.c.supportingDocuments}\",\"userId\":\"{$.c.Id}\",\"deletedDocuments\":\"\",\"transactionAmount\":\"{$.c.transferAmount}\",\"validate\":\"true\"}";
            MakeATransfer.OTTobjectServiceName = "RBObjects";
            MakeATransfer.CCObjectname = "Transactions";
            MakeATransfer.transferTypePermission = "{\"Within Same Bank\":\"TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE\",\"Domestic Transfer\":\"INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE\",\"International Transfer\":\"INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE\",\"Pay a Person\":\"INTRA_BANK_FUND_TRANSFER_CREATE\"}";
            MakeATransfer.loanObjectName = "Accounts";
            MakeATransfer.supportedFileFormat = "{\"jpeg\":{\"type\":\"image/jpeg\",\"imgSrc\":\"jpeg.png\"},\"pdf\":{\"type\":\"application/pdf\",\"imgSrc\":\"pdf.png\"}}";
            MakeATransfer.lblMobileNumber = "{i.kony.mb.common.phoneNo}";
            MakeATransfer.lblBICSwiftCode = "BIC/SWIFT:";
            MakeATransfer.swiftSrchOperationName = "getBICFromBankDetails";
            MakeATransfer.fromField1Value = "{\"default\":{\"text\":\"{$.L1.accountName}\",\"mapping\":[{\"fieldMap\":\"{$.L1.accountName}\",\"format\":{\"truncateLength\":20,\"appendString\":\"....\"}},{\"fieldMap\":\"{$.L1.accountID}\",\"format\":{\"sliceLength\":-4}}],\"Visibility\":true,\"width\":\"50%\",\"isMaskingEnabled\":true,\"fieldType\":\"AccountName\",\"labelType\":\"Value\"}}";
            MakeATransfer.fromAccountsCriteria = "{}";
            MakeATransfer.defaultFrequency = "Once";
            MakeATransfer.fieldFromBalanceLblAmtScrn = "Available Balance";
            MakeATransfer.toField1Value = "{\"default\":{\"mapping\":[{\"internal\":{\"creditcard\":{\"fieldMap\":\"accountName\"},\"Loan\":{\"fieldMap\":\"accountName\"},\"other\":{\"fieldMap\":\"accountName\"}},\"external\":{\"fieldMap\":\"beneficiaryName\"},\"format\":{\"truncateLength\":22,\"appendString\":\"....\"}},{\"internal\":{\"creditcard\":{\"fieldMap\":\"accountID\"},\"Loan\":{\"fieldMap\":\"accountID\"},\"other\":{\"fieldMap\":\"accountID\"}},\"external\":{\"fieldMap\":\"accountNumber\"},\"format\":{\"sliceLength\":-4}}],\"fieldType\":\"AccountName\",\"labelType\":\"value\"},\"ST1\":{\"text\":\"{$.L1.beneficiaryName}\",\"mapping\":[{\"fieldMap\":\"{$.L1.beneficiaryName}\",\"format\":{\"truncateLength\":22,\"appendString\":\"....\"}},{\"fieldMap\":\"{$.L1.accountNumber}\",\"format\":{\"sliceLength\":-4}}],\"fieldType\":\"AccountName\",\"labelType\":\"value\"},\"ST2\":{\"text\":\"{$.L1.beneficiaryName}\",\"mapping\":[{\"fieldMap\":\"{$.L1.beneficiaryName}\",\"format\":{\"truncateLength\":22,\"appendString\":\"....\"}},{\"fieldMap\":\"{$.L1.accountNumber}\",\"format\":{\"sliceLength\":-4}}],\"fieldType\":\"AccountName\",\"labelType\":\"value\"}}";
            MakeATransfer.paymentMethodOption1 = "{\"optionValue\":\"{i.i18n.unified.paymentMethodHeader1}\",\"description\":\"{i.i18n.unified.paymentMethodDescription1}\",\"optionSeleted\":\"false\"}";
            MakeATransfer.txtInputBICSwiftCode = "{\"text\": \"{$.c.BICSwiftCode}\",\"placeHolder\": \"Enter BIC/SWIFT Code\",\"inputMode\": \"ANY\",\"length\": {\"min\": 8,\"max\": 11}}";
            MakeATransfer.searchField1Label = "Bank Name:";
            MakeATransfer.swiftSrchCriteria = "{\"bankName\":\"\",\"country\":\"\",\"city\":\"\",\"branch\":\"\"}";
            MakeATransfer.requiredCodeField1Lbl = "BIC/SWIFT:";
            MakeATransfer.fieldFromValue = "{ \"text\": \"{$.c.fromAccountName}\", \"fieldType\": \"Label\" }";
            MakeATransfer.addAddressField1Lbl = "{\"text\":\"{i.i18n.ProfileManagement.PhoneNumber}\"}";
            MakeATransfer.toAccOperationName = "getExternalPayees";
            MakeATransfer.sknCancelBtn = "ICSKnBtnffffff15px";
            MakeATransfer.lblEmptyRecord = "{\"default\":\"No Results Found\"}";
            MakeATransfer.searchCriteria = "{\"accountID\":\"{$.c.accountID}\",\"transactionType\":\"All\",\"offset\":0,\"limit\":10,\"isScheduled\":\"false\",\"sortBy\":\"transactionDate\",\"order\":\"desc\"}";
            MakeATransfer.amountLable2 = "{i.kony.mb.EuropeTransfer.StatementDue}";
            MakeATransfer.feesPaidOption1 = "{\"optionValue\":\"{i.i18n.unified.feesPaidByHeader1}\",\"description\":\"{i.i18n.unified.feesPaidByDescription1}\",\"optionSeleted\":\"false\"}";
            MakeATransfer.txtInputfxRateReference = "{\"text\":\"{$.c.fxRateRef}\",\"placeHolder\":\"Enter FX Rate Ref\",\"inputMode\":\"ANY\",\"restrictChars\":\"!@#$%^&*()_>.\",\"length\":{\"min\":5,\"max\":20}}";
            MakeATransfer.txtInputIntermediaryBIC = "{   \"text\": \"{$.c.intermediaryBIC}\",   \"placeHolder\": \"Enter Intermediary BIC\",   \"inputMode\": \"Alpha Numeric\",   \"length\": {   \"min\": 8,   \"max\": 11   }  }";
            MakeATransfer.txtInputE2ERef = "{\"text\":\"{$.c.e2eReference}\",\"placeHolder\":\"{i.kony.i18n.verifyDetails.EnterE2E}\",\"inputMode\":\"ANY\",\"length\":{\"min\":5,\"max\":20}}";
            MakeATransfer.txtInputRecipientName = "{\"text\":\"{$.c.beneficiaryName}\",\"placeHolder\":\"{i.kony.mb.P2P.EnterRecipientName}\",\"inputMode\":\"ANY\",\"length\":{\"min\":5,\"max\":20}}";
            MakeATransfer.lblReEnterAccountNumber = "{i.kony.reqCode.reEnterAccountNumber}";
            MakeATransfer.txtInputPayeeNickname = "{   \"text\": \"{$.c.payeeNickname}\",   \"placeHolder\": \"Enter Payee Nickname\",   \"inputMode\": \"ANY\",   \"length\": {   \"min\": 5,   \"max\": 20   }  }";
            MakeATransfer.lblPayeeNicknameSuccessDescription = "Payee nickname saved successfully for future transactions";
            MakeATransfer.iconRightArrow = "arrow_1x.png";
            MakeATransfer.countryOperationName = "getAllCountries";
            MakeATransfer.countryFlagVisibility = "false";
            MakeATransfer.transOperationName = "InterBankAccFundTransfer";
            MakeATransfer.getCountriesOperation = "getAllCountries";
            MakeATransfer.ValCriteria = "{\"amount\":\"{$.c.transferAmount}\",\"transactionId\":\"\",\"frequencyType\":\"{$.c.frequency}\",\"fromAccountNumber\":\"{$.c.fromAccountNumber}\",\"isScheduled\":\"0\",\"frequencyStartDate\":\"{$.c.ISOStartDate}\",\"frequencyEndDate\":\"{$.c.ISOEndDate}\",\"scheduledDate\":\"{$.c.ISOSendOn}\",\"toAccountNumber\":\"{$.c.toAccountNumber}\",\"paymentType\":\"\",\"paidBy\":\"{$.c.selectedServiceFeesPaidBy}\",\"swiftCode\":\"{$.c.swiftCode}\",\"serviceName\":\"\",\"beneficiaryName\":\"{$.c.beneficiaryName}\",\"beneficiaryNickname\":\"{$.c.beneficiaryNickName}\",\"transactionsNotes\":\"{$.c.notes}\",\"transactionType\":\"ExternalTransfer\",\"transactionCurrency\":\"{$.c.transactionCurrency}\",\"fromAccountCurrency\":\"{$.c.fromAccountCurrency}\",\"toAccountCurrency\":\"{$.c.transactionCurrency}\",\"numberOfRecurrences\":\"{$.c.numberOfRecurrences}\",\"ExternalAccountNumber\":\"{$.c.toAccountNumber}\",\"uploadedattachments\":\"{$.c.supportingDocuments}\",\"userId\":\"{$.c.Id}\",\"deletedDocuments\":\"\",\"transactionAmount\":\"{$.c.transferAmount}\",\"validate\":\"true\"}";
            MakeATransfer.DateOperationName = "getBankDate";
            MakeATransfer.endDateLabel = "{i.kony.mb.Transfers.EndDate}";
            MakeATransfer.IBANCriteria = "{\"IBAN\":\"{$.c.payeeAccountNumberOrIBAN}\"}";
            MakeATransfer.getBeneficiaryOperation = "getBeneficiaryName";
            MakeATransfer.creditcardOperationName = "getCreditCardAccounts";
            MakeATransfer.IBANSwiftOperationName = "getSwiftCode";
            MakeATransfer.valOTTobjectName = "Transactions";
            MakeATransfer.OTTobjectName = "Transactions";
            MakeATransfer.CCoperationname = "createCreditCardTransfer";
            MakeATransfer.loanObjectServiceName = "RBObjects";
            MakeATransfer.txtInputMobileNumber = "{\"mapping\":\"{$.c.mobileNumber}\",\"placeHolder\":\"{i.i18n.unified.enterNumber}\",\"inputType\":\"Numeric\",\"defaultCountryCode\":\"+93\",\"length\":{\"min\":5,\"max\":20}}";
            MakeATransfer.fromField2Value = "{\"default\":{\"text\":\"{$.L1.availableBalance}\",\"mapping\":[{\"fieldMap\":\"{$.L1.availableBalance}\",\"format\":{\"locale\":\"en-US\",\"positiveFormat\":\"{CS}{D}\",\"negativeFormat\":\"-{CS}{D}\",\"fractionDigits\":\"2\"}}],\"Visibility\":true,\"width\":\"50%\",\"currency\":\"currencyCode\",\"fieldType\":\"Amount\",\"labelType\":\"Value\"},\"CreditCard\":{\"text\":\"{$.L1.availableCredit}\",\"mapping\":[{\"fieldMap\":\"{$.L1.availableCredit}\",\"format\":{\"locale\":\"en-US\",\"positiveFormat\":\"{CS}{D}\",\"negativeFormat\":\"-{CS}{D}\",\"fractionDigits\":\"2\"}}],\"Visibility\":true,\"width\":\"50%\",\"currency\":\"currencyCode\",\"fieldType\":\"Amount\",\"labelType\":\"Value\"},\"Loan\":{\"text\":\"{$.L1.outstandingBalance}\",\"mapping\":[{\"fieldMap\":\"{$.L1.outstandingBalance}\",\"format\":{\"locale\":\"en-US\",\"positiveFormat\":\"{CS}{D}\",\"negativeFormat\":\"-{CS}{D}\",\"fractionDigits\":\"2\"}}],\"Visibility\":true,\"width\":\"50%\",\"currency\":\"currencyCode\",\"fieldType\":\"Amount\",\"labelType\":\"Value\"}}";
            MakeATransfer.fromServiceResponseIdentifier = "S1";
            MakeATransfer.fieldFromBalanceValueAmtScrn = "{ \"text\": \"{$.c.fromAvailableBalance}\", \"fieldType\": \"Amount\" }";
            MakeATransfer.toField2Value = "{\"default\":{\"mapping\":[{\"internal\":{\"creditcard\":{\"fieldMap\":\"outstandingBalance\"},\"Loan\":{\"fieldMap\":\"outstandingBalance\"},\"other\":{\"fieldMap\":\"availableBalance\"}},\"format\":{\"locale\":\"en-US\",\"positiveFormat\":\"{CS}{D}\",\"negativeFormat\":\"-{CS}{D}\",\"fractionDigits\":\"2\"}}],\"fieldType\":\"Amount\",\"currency\":\"currencyCode\",\"labelType\":\"value\"},\"ST1\":{\"mapping\":[{\"fieldMap\":\"currentBalance\",\"format\":{\"locale\":\"en-US\",\"positiveFormat\":\"{CS}{D}\",\"negativeFormat\":\"-{CS}{D}\",\"fractionDigits\":\"2\"}}],\"fieldType\":\"Amount\",\"currency\":\"currencyCode\",\"labelType\":\"value\"},\"ST2\":{\"mapping\":[{\"fieldMap\":\"currentBalance\",\"format\":{\"locale\":\"en-US\",\"positiveFormat\":\"{CS}{D}\",\"negativeFormat\":\"-{CS}{D}\",\"fractionDigits\":\"2\"}}],\"fieldType\":\"Amount\",\"currency\":\"currencyCode\",\"labelType\":\"value\"}}";
            MakeATransfer.paymentMethodOption2 = "{\"optionValue\":\"{i.i18n.unified.paymentMethodHeader2}\",\"description\":\"{i.i18n.unified.paymentMethodDescription2}\",\"optionSeleted\":\"false\"}";
            MakeATransfer.btnBICSwiftCode = "{\"id\":\"btnBICSwiftCode\",\"text\": \"Continue\",\"widgth\":\"50%\"}";
            MakeATransfer.searchField1Value = "{\"id\":\"bankName\",\"text\":\"{$.c.bankName}\",\"placeHolder\":\"Enter Bank Name\",\"inputMode\":\"ANY\",\"Mandatory\":false}";
            MakeATransfer.swiftSrchServiceResIdentifier = "O1";
            MakeATransfer.requiredCodeField1Value = "{\"text\": \"{$.c.intermediaryBIC/SWIFT}\",\"placeHolder\": \"Enter Intermediary BIC\",\"inputMode\": \"ANY\",\"textIAnputRequired\":true,\"length\": {\"min\": 5,\"max\": 20}}";
            MakeATransfer.fieldFromBalanceLbl = "kony.i18n.verifyDetails.availableBalance";
            MakeATransfer.addAddressField1Value = "{\"text\":\"{$.c.phone}\",\"placeHolder\":\"(+1)-123-1234-1234\",\"inputMode\":\"NUMERIC\",\"fieldType\":\"phoneNumber\",\"length\":{\"min\":5,\"max\":20}}";
            MakeATransfer.toAccCriteria = "{}";
            MakeATransfer.sknSearchBox = "ICSknTbxSSPR42424215px";
            MakeATransfer.amountValue2 = "{\"mapping\":[{\"internal\":{\"creditcard\":{\"fieldMap\":\"paymentDue\"},\"Loan\":{\"fieldMap\":\"paymentDue\"},\"other\":{\"fieldMap\":\"paymentDue\"}},\"format\":{\"locale\":\"en-US\",\"positiveFormat\":\"{CS}{D}\",\"negativeFormat\":\"-{CS}{D}\",\"fractionDigits\":\"2\"}}],\"fieldType\":\"Amount\",\"currency\":\"currencyCode\",\"labelType\":\"value\"}";
            MakeATransfer.feesPaidOption2 = "{\"optionValue\":\"Beneficiary\",\"description\":\"{i.i18n.unified.feesPaidByDescription2}\",\"optionSeleted\":\"false\"}";
            MakeATransfer.referenceBtn = "{  \"id\":\"referenceBtn\",   \"text\": \"Continue\", \"widgth\":\"50%\"   }";
            MakeATransfer.IntermediaryBtn = "{  \"id\":\"IntermediaryBtn\",   \"text\": \"Continue\", \"widgth\":\"50%\"   }";
            MakeATransfer.E2EBtn = "{\"id\":\"E2EBtn\",\"text\":\"{i.i18n.common.proceed}\"}";
            MakeATransfer.txtInputAccountNumber = "{\"text\":\"{$.c.toAccountNumber}\",\"inputMode\":\"NUMBER\",\"placeHolder\":\"{i.kony.mb.addBen.enterBenAccNumorIBAN}\",\"mask\":true,\"restrictChars\":\"~#^|$%&*!@()_-+=}{][/|?,.><`':;\\\"\\\\\",\"length\":{\"min\":5,\"max\":20},\"IBANLength\":{\"min\":5,\"max\":31}}";
            MakeATransfer.payeeNicknameBtn = "{  \"id\":\"payeeNickname\",   \"text\": \"Continue\", \"widgth\":\"50%\"   }";
            MakeATransfer.payeeNicknameNewTransfer = "{  \"id\":\"payeeNicknameNewTransfer\",  \"text\": \"New Transfer\", \"widgth\":\"50%\"  }";
            MakeATransfer.iconBack = "backbutton.png";
            MakeATransfer.countryCriteria = "{}";
            MakeATransfer.transCriteria = "{\"amount\":\"{$.c.transferAmount}\",\"transactionId\":\"\",\"frequencyType\":\"{$.c.frequency}\",\"fromAccountNumber\":\"{$.c.fromAccountNumber}\",\"isScheduled\":\"0\",\"frequencyStartDate\":\"{$.c.ISOStartDate}\",\"frequencyEndDate\":\"{$.c.ISOEndDate}\",\"scheduledDate\":\"{$.c.ISOSendOn}\",\"toAccountNumber\":\"{$.c.toAccountNumber}\",\"paymentType\":\"\",\"paidBy\":\"{$.c.selectedServiceFeesPaidBy}\",\"swiftCode\":\"{$.c.swiftCode}\",\"serviceName\":\"\",\"beneficiaryName\":\"{$.c.beneficiaryName}\",\"beneficiaryNickname\":\"{$.c.beneficiaryNickName}\",\"transactionsNotes\":\"{$.c.notes}\",\"transactionType\":\"ExternalTransfer\",\"transactionCurrency\":\"{$.c.transactionCurrency}\",\"fromAccountCurrency\":\"{$.c.fromAccountCurrency}\",\"toAccountCurrency\":\"{$.c.transactionCurrency}\",\"numberOfRecurrences\":\"{$.c.numberOfRecurrences}\",\"ExternalAccountNumber\":\"{$.c.toAccountNumber}\",\"uploadedattachments\":\"{$.c.supportingDocuments}\",\"userId\":\"{$.c.Id}\",\"deletedDocuments\":\"\",\"transactionAmount\":\"{$.c.transferAmount}\"}";
            MakeATransfer.recipientRestrictChars = "!@#&*_'-.,";
            MakeATransfer.ValOperationName = "InterBankAccFundTransfer";
            MakeATransfer.getCountriesCriteria = "{}";
            MakeATransfer.DateCriteria = "{}";
            MakeATransfer.IBANOperationName = "isValidIBAN";
            MakeATransfer.getBeneficiaryCriteria = "{\"accountNumber\":\"{$.c.toAccountNumber}\"}";
            MakeATransfer.iphoneFileExtension = "\"com.adobe.pdf\"";
            MakeATransfer.creditcardCriteria = "{}";
            MakeATransfer.IBANSwiftCriteria = "{\"iban\":\"{$.c.payeeAccountNumberOrIBAN}\"}";
            MakeATransfer.valOTTserviceResponseIdentifier = "O1";
            MakeATransfer.OTTcriteria = "{\"amount\":\"{$.c.transferAmount}\",\"transactionId\":\"\",\"frequencyType\":\"{$.c.frequency}\",\"fromAccountNumber\":\"{$.c.fromAccountNumber}\",\"isScheduled\":\"0\",\"frequencyStartDate\":\"{$.c.ISOStartDate}\",\"frequencyEndDate\":\"{$.c.ISOEndDate}\",\"scheduledDate\":\"{$.c.ISOSendOn}\",\"toAccountNumber\":\"{$.c.toAccountNumber}\",\"paymentType\":\"\",\"paidBy\":\"{$.c.selectedServiceFeesPaidBy}\",\"swiftCode\":\"{$.c.swiftCode}\",\"serviceName\":\"INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE\",\"beneficiaryName\":\"{$.c.beneficiaryName}\",\"beneficiaryNickname\":\"{$.c.beneficiaryNickName}\",\"transactionsNotes\":\"{$.c.notes}\",\"transactionType\":\"ExternalTransfer\",\"transactionCurrency\":\"{$.c.transactionCurrency}\",\"fromAccountCurrency\":\"{$.c.fromAccountCurrency}\",\"toAccountCurrency\":\"{$.c.transactionCurrency}\",\"numberOfRecurrences\":\"{$.c.numberOfRecurrences}\",\"ExternalAccountNumber\":\"{$.c.toAccountNumber}\",\"uploadedattachments\":\"{$.c.supportingDocuments}\",\"userId\":\"{$.c.Id}\",\"deletedDocuments\":\"\",\"transactionAmount\":\"{$.c.transferAmount}\"}";
            MakeATransfer.selectedDateFormat = "d/m/Y";
            MakeATransfer.CCServiceResponseIdenfier = "C1";
            MakeATransfer.loanOperationName = "getAccountDetails";
            MakeATransfer.fileSize = "{\"maxSize\":\"2\",\"maxFiles\":\"5\"}";
            MakeATransfer.recipientBtn = "{\"id\":\"recipientBtn\",\"text\":\"{i.kony.mb.common.continue}\",\"widgth\":\"50%\"}";
            MakeATransfer.lblEmail = "{i.i18n.unified.emailAddress}";
            MakeATransfer.fromField3Value = "{\"default\":{\"text\":\"{$.L1.accountType}\",\"Visibility\":true,\"width\":\"50%\",\"fieldType\":\"Account Type\",\"labelType\":\"Value\"}}";
            MakeATransfer.fieldToLabelAmtScrn = "To:";
            MakeATransfer.toField3Value = "{\"mapping\":[{\"internal\":{\"creditcard\":{\"fieldMap\":\"accountType\"},\"Loan\":{\"fieldMap\":\"accountType\"},\"other\":{\"fieldMap\":\"accountType\"}},\"external\":{\"fieldMap\":\"bankName\"}}],\"fieldType\":\"Label\"}";
            MakeATransfer.paymentMethodOption3 = "{\"optionValue\":\"{i.i18n.unified.paymentMethodHeader3}\",\"description\":\"{i.i18n.unified.paymentMethodDescription3}\",\"optionSeleted\":\"false\"}";
            MakeATransfer.btnBICSWIFTLookup = "{\"id\":\"btnBICSWIFTLookupBtn\",\"text\": \"Look Up\",\"widgth\":\"50%\"}";
            MakeATransfer.searchField2Label = "Branch Name:";
            MakeATransfer.requiredCodeField2Lbl = "Clearing Code 1:";
            MakeATransfer.fieldFromBalanceValue = "{ \"text\": \"{$.c.fromAvailableBalance}\", \"fieldType\": \"Amount\" }";
            MakeATransfer.addAddressField2Lbl = "{\"text\":\"{i.kony.address.EmailAddress}\"}";
            MakeATransfer.toAccServiceResIdentifier = "L1";
            MakeATransfer.sknSearchTextArea = "";
            MakeATransfer.amountLable3 = "{i.kony.mb.EuropeTransfer.MinimumDue}";
            MakeATransfer.feesPaidOption3 = "{\"optionValue\":\"{i.i18n.unified.feesPaidByHeader3}\",\"description\":\"{i.i18n.unified.feesPaidByDescription3}\",\"optionSeleted\":\"false\"}";
            MakeATransfer.txtInputReEnterAccountNumber = "{\"text\":\"{$.c.toAccountNumber}\",\"inputMode\":\"NUMBER\",\"placeHolder\":\"{i.kony.mb.addBen.ReenterBenAccNumorIBAN}\",\"mask\":false,\"restrictChars\":\"~#^|$%&*!@()_-+=}{][/|?,.><`':;\\\"\\\\\",\"length\":{\"min\":5,\"max\":20},\"IBANLength\":{\"min\":5,\"max\":31}}";
            MakeATransfer.payeeNicknameTransferActivities = "{  \"id\":\"payeeNicknameTransferActivities\",  \"text\": \"New Transfer\", \"widgth\":\"50%\" }";
            MakeATransfer.iconBusiness = "business.png";
            MakeATransfer.fromObjectServiceName = "RBObjects";
            MakeATransfer.countryIdentifier = "countriesList";
            MakeATransfer.transServiceResponseIdentifier = "T1";
            MakeATransfer.ValServiceResponseIdentifier = "T3";
            MakeATransfer.getCountriesIdentifier = "countriesList";
            MakeATransfer.DateServiceResponseIdentifier = "D1";
            MakeATransfer.creditcardResponseIdentifier = "CA";
            MakeATransfer.bankNameKeyIdentifier = "bankName";
            MakeATransfer.valOTToperationName = "createOneTimeTransfer";
            MakeATransfer.OTToperationName = "createOneTimeTransfer";
            MakeATransfer.daysToRestrict = "";
            MakeATransfer.CCcriteria = "{\"amount\":\"{$.c.transferAmount}\",\"transactionId\":\"\",\"frequencyType\":\"{$.c.frequency}\",\"fromAccountNumber\":\"{$.c.fromAccountNumber}\",\"isScheduled\":\"0\",\"frequencyStartDate\":\"{$.c.ISOStartDate}\",\"frequencyEndDate\":\"{$.c.ISOEndDate}\",\"scheduledDate\":\"{$.c.ISOSendOn}\",\"toAccountNumber\":\"{$.c.toAccountNumber}\",\"paymentType\":\"{$.c.selectedServicePayment}\",\"paidBy\":\"{$.c.selectedServiceFeesPaidBy}\",\"swiftCode\":\"{$.c.swiftCode}\",\"serviceName\":\"\",\"beneficiaryName\":\"{$.c.beneficiaryName}\",\"beneficiaryNickname\":\"{$.c.beneficiaryNickName}\",\"transactionsNotes\":\"{$.c.notes}\",\"transactionType\":\"ExternalTransfer\",\"transactionCurrency\":\"{$.c.transactionCurrency}\",\"fromAccountCurrency\":\"{$.c.fromAccountCurrency}\",\"toAccountCurrency\":\"{$.c.transactionCurrency}\",\"numberOfRecurrences\":\"{$.c.numberOfRecurrences}\",\"ExternalAccountNumber\":\"{$.c.toAccountNumber}\",\"uploadedattachments\":\"{$.c.supportingDocuments}\",\"userId\":\"{$.c.Id}\",\"deletedDocuments\":\"\",\"transactionAmount\":\"{$.c.transferAmount}\"}";
            MakeATransfer.txtInputEmail = "{\"mapping\":\"{$.c.emailId}\",\"placeHolder\":\"{i.i18n.unified.emailPlaceholder}\",\"inputType\":\"Email\"}";
            MakeATransfer.fromField4Value = "{\"default\":{\"text\":\"{i.i18n.accounts.availableBalance}\",\"Visibility\":true,\"width\":\"50%\",\"labelType\":\"Label\"}}";
            MakeATransfer.fieldToValueAmtScrn = "{\"text\":\"{$.c.toAccountName}\",\"fieldType\":\"Label\"}";
            MakeATransfer.toField4Value = "{\"creditcard\":\"Currenct Balance\",\"loan\":\"Outstanding Balance\",\"default\":\"Available Balance\"}";
            MakeATransfer.paymentMethodOption4 = "{\"optionValue\":\"{i.i18n.unified.paymentMethodHeader4}\",\"description\":\"{i.i18n.unified.paymentMethodDescription4}\",\"optionSeleted\":\"false\"}";
            MakeATransfer.searchField2Value = "{\"id\":\"branchName\",\"text\":\"{$.c.branchName}\",\"placeHolder\":\"Enter Branch Name\",\"inputMode\":\"ANY\",\"Mandatory\":false}";
            MakeATransfer.requiredCodeField2Value = "{\"text\": \"{$.c.clearingCode1}\",\"placeHolder\": \"Enter clearing code 1\",\"inputMode\": \"ANY\",\"length\": {\"min\": 5,\"max\": 20}}";
            MakeATransfer.fieldToLabel = "kony.i18n.verifyDetails.to";
            MakeATransfer.addAddressField2Value = "{\"text\":\"{$.c.email}\",\"placeHolder\":\"{i.kony.address.EnterEmailAddress}\",\"inputMode\":\"ANY\",\"fieldType\":\"emailAddress\",\"length\":{\"min\":5,\"max\":20}}";
            MakeATransfer.sknDescriptionBg = "sknFlxffffff";
            MakeATransfer.amountValue3 = "{\"mapping\":[{\"internal\":{\"creditcard\":{\"fieldMap\":\"minimumDue\"},\"Loan\":{\"fieldMap\":\"currentAmountDue\"},\"other\":{\"fieldMap\":\"currentAmountDue\"}},\"format\":{\"locale\":\"en-US\",\"positiveFormat\":\"{CS}{D}\",\"negativeFormat\":\"-{CS}{D}\",\"fractionDigits\":\"2\"}}],\"fieldType\":\"Amount\",\"currency\":\"currencyCode\",\"labelType\":\"value\"}";
            MakeATransfer.accountNumberBtn = "{\"AccNumText\":\"{i.i18n.common.proceed}\",\"ReEnterAccNumText\":\"{i.i18n.common.proceed}\",\"AccNumID\":\"accNumBtn\",\"ReEnterAccNumID\":\"reEnterAccNumBtn\"}";
            MakeATransfer.iconCalenderArrowLeft = "calenderarrowleft";
            MakeATransfer.lblBICSwiftQuestion = "Please enter BIC/SWIFT Code";
            MakeATransfer.defaultFeesPaidBy = "{i.i18n.unified.feesPaidByHeader3}";
            MakeATransfer.statesObject = "States";
            MakeATransfer.currentServiceBankDate = "{$.D1.currentWorkingDate}";
            MakeATransfer.selectOption1 = "{\"text\":\"{i.i18n.unified.takePhoto}\",\"visible\":true}";
            MakeATransfer.countryServiceIdentifier = "records";
            MakeATransfer.swiftCodeKeyIdentifier = "bic";
            MakeATransfer.dateContinue = "{\"text\":\"{i.i18n.common.proceed}\",\"skin\":\"ICBtn003E7534px\"}";
            MakeATransfer.filterTypeList = "{\"list\":\"Loan,CreditCard\",\"identifier\":\"fromAccountType\"}";
            MakeATransfer.phoneNumberChooseBtn = "{\"id\":\"phoneNumberChooseBtn\",\"text\":\"{i.i18n.unified.pickFromContactList}\"}";
            MakeATransfer.fieldToBalanceLblAmtScrn = "{\"text\":\"{$.c.toBalanceLabel}\"}";
            MakeATransfer.toAccountBtn = "{\"id\":\"toAccountBtn\",\"text\":\"Transfer New Payee\",\"widgth\":\"50%\"}";
            MakeATransfer.searchField3Label = "City:";
            MakeATransfer.requiredCodeField3Lbl = "Clearing Code 2:";
            MakeATransfer.fieldToValue = "{ \"text\": \"{$.c.toAccountName}\", \"fieldType\": \"Label\" }";
            MakeATransfer.addAddressField3Lbl = "{\"text\":\"{i.i18n.TransfersEur.AddressLine01}:\"}";
            MakeATransfer.sknDescriptionLbl = "ICSknLbl42424234px";
            MakeATransfer.otherAmountLabel = "{i.kony.mb.Loans.OtherAmount}";
            MakeATransfer.iconCalenderArrowRight = "calenderarrowright";
            MakeATransfer.accNumErrorMessage = "{\"invalidAccNumber\":\"{i.kony.reqCode.invalidAccNumber}\",\"invalidAccNumberOrIBAN\":\"{i.i18n.TransfersEur.InvalidIBANMessage}\"}";
            MakeATransfer.defaultPaymentMethod = "{\"EUR\":\"SEPA\",\"other\":\"SWIFT\"}";
            MakeATransfer.getStatesOperation = "getAllRegions";
            MakeATransfer.selectOption2 = "{\"text\":\"{i.i18n.unified.photoLibrary}\",\"visible\":true}";
            MakeATransfer.serviceFeesPaidValues = "{\"Me\":{\"paidBy\":\"OUR\"},\"Beneficiary\":{\"paidBy\":\"BEN\"},\"Both (Shared)\":{\"paidBy\":\"SHA\"}}";
            MakeATransfer.enableBankDate = false;
            MakeATransfer.fieldToBalanceValueAmtScrn = "{\"text\":\"{$.c.toAvailableBalance}\",\"fieldType\":\"label\"}";
            MakeATransfer.searchField3Value = "{\"id\":\"city\",\"text\":\"{$.c.city}\",\"placeHolder\":\"Enter City\",\"inputMode\":\"ANY\",\"Mandatory\":false}";
            MakeATransfer.requiredCodeField3Value = "{\"text\": \"{$.c.clearingCode2}\",\"placeHolder\": \"Enter clearing code 2\",\"inputMode\": \"ANY\",\"length\": {\"min\": 5,\"max\": 20}}";
            MakeATransfer.fieldToBalanceLbl = "{$.c.toBalanceLabel}";
            MakeATransfer.addAddressField3Value = "{\"text\":\"{$.c.addressLine1}\",\"placeHolder\":\"{i.kony.address.AddressLine01}\",\"inputMode\":\"ANY\",\"fieldType\":\"addressLine01\",\"length\":{\"min\":5,\"max\":20}}";
            MakeATransfer.sknDescriptionSeparator = "sknFlxSeparatora6a6a6";
            MakeATransfer.otherAmountValue = "{\"fieldType\":\"Amount\",\"format\":{\"locale\":\"en-US\",\"positiveFormat\":\"{CS}{D}\",\"negativeFormat\":\"-{CS}{D}\",\"fractionDigits\":\"2\"}}";
            MakeATransfer.iconCancelKeypad = "";
            MakeATransfer.paymentMethodOption5 = "{\"optionValue\":\"RINGS\",\"description\":\"Here need two line information content to help user to better understand the method.\",\"optionSeleted\":\"false\"}";
            MakeATransfer.getStatesCriteria = "{}";
            MakeATransfer.reEnterAccNumErrorMessage = "{i.kony.mb.Manage.missmatchAccountNumber}";
            MakeATransfer.contactOROption = "{i.kony.mb.Forgot.Or}";
            MakeATransfer.serviceDefaultFeesPaid = "{\"name\":\"Both (shared)\",\"value\":\"SHA\"}";
            MakeATransfer.selectOption3 = "{\"text\":\"{i.i18n.unified.googleDrive}\",\"visible\":true}";
            MakeATransfer.fieldToBalanceValue = "{ \"text\": \"{$.c.toAvailableBalance}\", \"fieldType\": \"Amount\" }";
            MakeATransfer.emailChooseBtn = "{\"id\":\"emailChooseBtn\",\"text\":\"{i.kony.mb.p2p.pickFromContacts}\"}";
            MakeATransfer.otherAmtBtn = "{\"id\":\"otherAmtBtn\",\"text\":\"Continue\",\"widgth\":\"50%\"}";
            MakeATransfer.lblTransferCurrency = "Currency:";
            MakeATransfer.searchField4Label = "Country:";
            MakeATransfer.requiredCodeBtn = "{\"id\":\"requiredCodeBtn\",\"text\": \"Continue\",\"widgth\":\"50%\"}";
            MakeATransfer.addAddressField4Lbl = "{\"text\":\"{i.i18n.TransfersEur.AddressLine02}:\"}";
            MakeATransfer.paymentMethodOption6 = "{\"optionValue\":\"BISERA\",\"description\":\"Here need two line information content to help user to better understand the method.\",\"optionSeleted\":\"false\"}";
            MakeATransfer.getStatesIdentifier = "statesList";
            MakeATransfer.sknGroupHeaderLbl = "sknLbl424242SSPReg33px";
            MakeATransfer.iconChevron = "arrowdown.png";
            MakeATransfer.selectOption4 = "{\"text\":\"{i.i18n.unified.dropBox}\",\"visible\":false}";
            MakeATransfer.accountNumberExistMsg = "{i.i18n.unified.accountNumberAlreadyExist}";
            MakeATransfer.otherAmtHeader = "Amount";
            MakeATransfer.transferCurrency = "{\"selectedValue\":\"$.c.currency\",\"textIAnputRequired\":true}";
            MakeATransfer.searchField4Value = "{\"id\":\"country\",\"text\":\"{$.c.country}\",\"placeHolder\":\"Enter Country\",\"inputMode\":\"ANY\",\"Mandatory\":false}";
            MakeATransfer.swiftBICBtn = "{\"id\":\"swiftBICBtn\",\"text\": \"Look Up\",\"widgth\":\"50%\"}";
            MakeATransfer.verifyField1Label = "kony.i18n.verifyDetails.transferCurrency";
            MakeATransfer.addAddressField4Value = "{\"text\":\"{$.c.addressLine2}\",\"placeHolder\":\"{i.kony.address.AddressLine02}\",\"inputMode\":\"ANY\",\"fieldType\":\"addressLine02\",\"length\":{\"min\":5,\"max\":20}}";
            MakeATransfer.sknGroupHeaderBg = "ICSknFlxF6F6F6";
            MakeATransfer.iconChevronRight = "";
            MakeATransfer.contactEmailError = "{i.i18n.unified.contactEmailErrorMsg}";
            MakeATransfer.cancelOption = "{\"text\":\"{i.kony.mb.common.Cancel}\"}";
            MakeATransfer.accountNumberNotMatch = "{i.i18n.unified.accountNumberRecordsMisMatch}";
            MakeATransfer.servicePaymentMethodValues = "{\"SEPA\":{\"paymentType\":\"SEPA\"},\"Instant\":{\"paymentType\":\"Instant\"},\"SWIFT\":{\"paymentType\":\"SWIFT\"},\"Local CCY Clearing\":{\"paymentType\":\"Local CCY Clearing\"},\"RINGS\":{\"paymentType\":\"RINGS\"},\"BISERA\":{\"paymentType\":\"BISERA\"}}";
            MakeATransfer.contactTypeBtn = "{\"id\":\"contactTypeBtn\",\"text\":\"{i.kony.mb.common.continue}\"}";
            MakeATransfer.lblTransferAmount = "Amount:";
            MakeATransfer.getDetailsBtn = "{\"id\":\"getDetailsBtn\",\"text\": \"Get Details\",\"widgth\":\"50%\"}";
            MakeATransfer.clearingCode1Btn = "";
            MakeATransfer.verifyField1Value = "{\"text\":\"{$.c.currency}\",\"fieldType\":\"Label\",\"optional\":false}";
            MakeATransfer.addAddressField5Lbl = "{\"text\":\"{i.i18n.TransfersEur.City}:\"}";
            MakeATransfer.sknPrimaryField1 = "sknLbl424242SSPRegular26px";
            MakeATransfer.iconChevronWhiteLeft = "";
            MakeATransfer.serviceDefaultPaymentMethod = "{\"EUR\":{\"name\":\"SEPA\",\"value\":\"SEPA\"},\"other\":{\"name\":\"SWIFT\",\"value\":\"SWIFT\"}}";
            MakeATransfer.txtInputTransferAmount = "{\"fieldType\":\"Amount\",\"format\":{\"locale\":\"en-US\",\"positiveFormat\":\"{CS}{D}\",\"negativeFormat\":\"-{CS}{D}\",\"fractionDigits\":\"2\"}}";
            MakeATransfer.lblSwiftSearchResult = "Please select the preferred details";
            MakeATransfer.clearingCode2Btn = "";
            MakeATransfer.verifyField2Label = "kony.i18n.verifyDetails.amount";
            MakeATransfer.addAddressField5Value = "{\"text\":\"{$.c.city}\",\"placeHolder\":\"{i.kony.address.EnterCity}\",\"inputMode\":\"ANY\",\"fieldType\":\"city\",\"length\":{\"min\":5,\"max\":20}}";
            MakeATransfer.sknPrimaryField2 = "sknLbl424242SSPRegular26px";
            MakeATransfer.iconChevronWhiteRight = "";
            MakeATransfer.removeDocsTitle = "{i.kony.mb.Europe.RemoveAttachmentPopupMsg}";
            MakeATransfer.amountBtn = "{\"id\":\"amountBtn\",\"text\": \"Continue\",\"widgth\":\"50%\"}";
            MakeATransfer.searchResultValue = "{\"label\":\"BIC/SWIFT:\",\"resultHeading\":\"{$.O1.bic}\",\"resultDescription\":\"{$.O1.branchDetails}\",\"optionSelected\":false}";
            MakeATransfer.verifyField2Value = "{\"text\":\"{$.c.formattedTransferAmount}\",\"fieldType\":\"Label\",\"optional\":false}";
            MakeATransfer.addAddressField6Lbl = "{\"text\":\"{i.i18n.common.state}:\"}";
            MakeATransfer.sknSecondaryFields = "sknLbl727272SSP26pxTab";
            MakeATransfer.iconClear = "clear_1x.png";
            MakeATransfer.sizepopupTitle = "{i.i18n.unified.supportingDocuments}";
            MakeATransfer.verifyField3Label = "";
            MakeATransfer.addAddressField6Value = "{\"text\":\"{$.c.state}\",\"placeHolder\":\"{i.kony.address.EnterStateName}\",\"inputMode\":\"ANY\",\"fieldType\":\"state\",\"length\":{\"min\":5,\"max\":20}}";
            MakeATransfer.sknRowSeparator = "sknFlxe3e3e3";
            MakeATransfer.iconConfirmationTick = "";
            MakeATransfer.btnUseSwift = "{\"id\":\"useSwift\",\"text\":\"Use Swift\",\"widgth\":\"50%\"}";
            MakeATransfer.popupActionbtns = "{\"yesButton\":\"{i.i18n.common.yes}\",\"noButton\":\"{i.i18n.common.no}\",\"closeButton\":\"{i.i18n.common.close}\"}";
            MakeATransfer.transferAmountHeader = "Amount";
            MakeATransfer.fileSizeError = "{i.i18n.unified.attachmentSizeErrorMessage}";
            MakeATransfer.verifyField3Value = "";
            MakeATransfer.addAddressField7Lbl = "{\"text\":\"{i.i18n.ProfileManagement.country}\"}";
            MakeATransfer.sknRow = "";
            MakeATransfer.iconCurrencySelection = "";
            MakeATransfer.researchSwiftBtn = "{\"id\":\"swiftSearchAgain\",\"text\":\"Search Again\",\"widgth\":\"50%\"}";
            MakeATransfer.fileTypeError = "{i.kony.mb.Europe.AttachmentTypeErrorMsg2}";
            MakeATransfer.verifyField4Label = "kony.i18n.verifyDetails.frequency";
            MakeATransfer.addAddressField7Value = "{\"text\":\"{$.c.country}\",\"placeHolder\":\"{i.kony.address.EnterCountryName}\",\"inputMode\":\"ANY\",\"fieldType\":\"country\",\"length\":{\"min\":5,\"max\":20}}";
            MakeATransfer.sknSegmentShadow = "ICSknFlxShadow000fff";
            MakeATransfer.iconDownload = "";
            MakeATransfer.verifyField4Value = "{\"text\":\"{$.c.frequency}\",\"fieldType\":\"Label\",\"optional\":false}";
            MakeATransfer.addAddressField8Lbl = "{\"text\":\"{i.kony.mb.common.postalCode}:\"}";
            MakeATransfer.sknDisabledContexualBtn = "sknBtnOnBoardingInactive";
            MakeATransfer.iconConfirmationError = "";
            MakeATransfer.verifyField5Label = "kony.i18n.verifyDetails.sendOn";
            MakeATransfer.addAddressField8Value = "{\"text\":\"{$.c.zipcode}\",\"placeHolder\":\"{i.kony.address.EnterPostalCode}\",\"inputMode\":\"NUMERIC\",\"fieldType\":\"postalCode\",\"length\":{\"min\":5,\"max\":20}}";
            MakeATransfer.sknInputBoxPlaceholder = "";
            MakeATransfer.iconGroupExpand = "groupexpandicon.png";
            MakeATransfer.verifyField5Value = "{\"text\":\"{$.c.sendOnUI}\",\"fieldType\":\"Label\",\"optional\":false}";
            MakeATransfer.sknInputBoxBorder = "ICSknTxt003E751px";
            MakeATransfer.iconGroupCollapse = "groupcollapseicon.png";
            MakeATransfer.verifyField6Label = "kony.i18n.verifyDetails.startDate";
            MakeATransfer.boxSkn = "";
            MakeATransfer.iconInactive = "";
            MakeATransfer.verifyField6Value = "{\"text\":\"{$.c.startDateUI}\",\"fieldType\":\"Label\",\"optional\":false}";
            MakeATransfer.selectedBoxSkn = "";
            MakeATransfer.iconInfo = "";
            MakeATransfer.verifyField7Label = "kony.i18n.verifyDetails.endDate";
            MakeATransfer.titleSkn = "";
            MakeATransfer.iconSearch = "search_1.png";
            MakeATransfer.addAddressBtn = "{\"id\":\"addAddressBtn\",\"text\":\"{i.i18n.ProfileManagement.Save}\"}";
            MakeATransfer.verifyField7Value = "{\"text\":\"{$.c.endDateUI}\",\"fieldType\":\"Label\",\"optional\":false}";
            MakeATransfer.descriptionSkn = "";
            MakeATransfer.verifyField8Label = "kony.i18n.verifyDetails.removeRepeatingTransfer";
            MakeATransfer.lookUpSkn = "ICSknBtn4176A434px";
            MakeATransfer.iconPersonal = "";
            MakeATransfer.addAddressErrorMsg = "{i.kony.address.addressErrorMsg}";
            MakeATransfer.verifyField8Value = "{\"text\":\"{i.kony.i18n.verifyDetails.removeRepeatingTransfer}\",\"fieldType\":\"Label\",\"optional\":false}";
            MakeATransfer.successLabelSkn = "";
            MakeATransfer.iconSelectGrnTick = "selectedtick.png";
            MakeATransfer.addressRestrictCharacterSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()_-\\\\?/+={[]}:;,.<>'`|\\\"";
            MakeATransfer.verifyField9Label = "kony.i18n.verifyDetails.accountNumber";
            MakeATransfer.errorValidationSkn = "ICSknLblEE000534px";
            MakeATransfer.businessIcon = "business.png";
            MakeATransfer.phoneNumberRestrictCharacterSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&\"*_?={[]}:;,.<>'`|";
            MakeATransfer.verifyField9Value = "{\"text\":\"{$.c.accountNumber}\",\"fieldType\":\"Label\",\"optional\":false}";
            MakeATransfer.sknEnableContexualBtn = "ICSknBtn003E7535PX";
            MakeATransfer.retailIcon = "personal.png";
            MakeATransfer.citiBankImg = "citi.png";
            MakeATransfer.sknQuestionLbl = "sknLbl727272SSPReg22px";
            MakeATransfer.verifyField10Label = "kony.i18n.verifyDetails.feesPaidBy";
            MakeATransfer.chaseBankImg = "chase.png";
            MakeATransfer.verifyField10Value = "{\"text\":\"{$.c.selectedFeesPaidBy}\",\"fieldType\":\"Label\",\"optional\":true}";
            MakeATransfer.textBoxNormalSkin = "ICSknTxtE3E3E31px34px";
            MakeATransfer.boaBankImg = "boa.png";
            MakeATransfer.verifyField11Label = "kony.i18n.verifyDetails.intermediatoryBIC";
            MakeATransfer.textBoxErrorSkin = "ICSknTxtF54B5EBorder";
            MakeATransfer.hdfcBankImg = "business.png";
            MakeATransfer.verifyField11Value = "{\"text\":\"{$.c.intermediaryBIC}\",\"fieldType\":\"Label\",\"optional\":true}";
            MakeATransfer.sknSegOptionSelected = "ICSknFlx04A615Selected";
            MakeATransfer.sknVerifyFieldLabel = "sknMMLeftLabels";
            MakeATransfer.infinityBankImg = "business.png";
            MakeATransfer.verifyField12Label = "kony.i18n.verifyDetails.e2eReference";
            MakeATransfer.sknSegOptionNotSelected = "ICSknFlxE3E3E3NotSelected";
            MakeATransfer.sknVerifyFieldValue = "sknMMBlueLabel";
            MakeATransfer.externalBankImg = "external.png";
            MakeATransfer.verifyField12Value = "{\"text\":\"{$.c.e2eReference}\",\"fieldType\":\"Label\",\"optional\":true}";
            MakeATransfer.sknVerifyChargesValue = "ICSknLbl42424234px";
            MakeATransfer.listBoxSkin = "ICSknLstBxE3E3E334px";
            MakeATransfer.verifyField13Label = "kony.i18n.verifyDetails.clearingCode1";
            MakeATransfer.sknSegCurrencyValues = "sknLbl424242SSP26px";
            MakeATransfer.iconSearchClose = "closecircle.png";
            MakeATransfer.listBoxFocusSkin = "ICSknLstBxFocusSkin";
            MakeATransfer.sknFeesPaidOptionHeader = "ICSknLbl424242B41px";
            MakeATransfer.verifyField13Value = "{\"text\":\"{$.c.clearingCode1}\",\"fieldType\":\"Label\",\"optional\":false}";
            MakeATransfer.listBoxPlaceHolderSkin = "";
            MakeATransfer.sknFeesPaidOptionDescription = "ICSknLbl72727230px";
            MakeATransfer.verifyField14Label = "kony.i18n.verifyDetails.clearingCode2";
            MakeATransfer.verifyField14Value = "{\"text\":\"{$.c.clearingCode2}\",\"fieldType\":\"Label\",\"optional\":false}";
            MakeATransfer.subTitleSkin = "ICSknLbl72727234px";
            MakeATransfer.verifyField15Label = "kony.i18n.verifyDetails.bicSwift";
            MakeATransfer.accNumInputLineSkin = "ICSknFlxE3E3E3Border";
            MakeATransfer.verifyField15Value = "{\"text\":\"{$.c.swiftCode}\",\"fieldType\":\"Label\",\"optional\":false}";
            MakeATransfer.accNumInputFieldSkin = "ICSknLbl94949487px";
            MakeATransfer.verifyField16Label = "";
            MakeATransfer.reEnterAccNumInputFieldSkin = "ICSknLbl42424255px";
            MakeATransfer.verifyField16Value = "";
            MakeATransfer.sknCameraWidget = "ICSkn007aff45px";
            MakeATransfer.verifyField17Label = "kony.i18n.verifyDetails.paymentMethod";
            MakeATransfer.sknSelectOption = "ICSkn007AFFSFReg45px";
            MakeATransfer.verifyField17Value = "{\"text\":\"{$.c.selectedPaymentMethod}\",\"fieldType\":\"Label\",\"optional\":true}";
            MakeATransfer.sknSupportingActionBtns = "ICSknBtn4176A434px";
            MakeATransfer.verifyField18Label = "kony.i18n.verifyDetails.supportingDocumentsOptional";
            MakeATransfer.sknRemoveSupportingDocsTitle = "ICSknLbl42424234px";
            MakeATransfer.verifyField18Value = "{ \"text\": \"{iconSrc},{$.c.supportingDocuments}\", \"fieldType\": \"TextWithIcon\" }";
            MakeATransfer.sknSupportingTextHeader = "ICSknLbl000000SB39px";
            MakeATransfer.sknPopupCloseButton = "ICSkn007AFFSFReg34px";
            MakeATransfer.sknPopupCancelButton = "ICSknLbl007AFFSFDisplayBold45px";
            MakeATransfer.sknFlexNormal = "ICSknFlxE3E3E3Border";
            MakeATransfer.sknHighlightedFlex = "ICSknFlx003E75Border1px";
            MakeATransfer.sknVerifyBalanceValues = "";
            MakeATransfer.sknhighlightedDate = "";
            MakeATransfer.verifyTransferBtn = "{\"id\":\"verifyTransferBtn\",\"text\": \"Transfer\",\"widgth\":\"50%\"}";
            MakeATransfer.sknCurrencyselection = "ICSknFlxF6F6F6Radius26px";
            MakeATransfer.verifyNotesLabel = "kony.i18n.verifyDetails.note";
            MakeATransfer.verifyNotesValue = "{\"text\":\"{$.c.notes}\",\"placeHolder\":\"Payment Details (optional)\",\"min\":4,\"max\":140}";
            MakeATransfer.verifyBeneAddLbl = "kony.i18n.verifyDetails.beneficiaryAddressOptional";
            MakeATransfer.verifyBeneMobile = "{$.c.phone}";
            MakeATransfer.verifyBeneZipcode = "{$.c.zipcode}";
            MakeATransfer.verifyBeneCountry = "{$.c.country}";
            MakeATransfer.verifyBeneAddLine1 = "{$.c.addressLine1}";
            MakeATransfer.verifyBeneCity = "{$.c.city}";
            MakeATransfer.verifyBeneEmail = "{$.c.email}";
            MakeATransfer.verifyBeneState = "{$.c.state}";
            MakeATransfer.verifyBeneAddLine2 = "{$.c.addressLine2}";
            MakeATransfer.lblReadOnlyField1Label = "{i.kony.i18n.verifyDetails.transactionFee}";
            MakeATransfer.lblReadOnlyField1Value = "{\"text\":\"{$.c.TXNFEE}\",\"fieldType\":\"label\"}";
            MakeATransfer.lblReadOnlyField2Label = "{i.kony.i18n.verifyDetails.brokerFee}:";
            MakeATransfer.lblReadOnlyField2Value = "{\"text\":\"{$.c.BROKERFEE}\",\"fieldType\":\"label\"}";
            MakeATransfer.lblReadOnlyField3Label = "{i.kony.i18n.verifyDetails.totalDebitAmount}";
            MakeATransfer.lblReadOnlyField3Value = "{\"text\":\"{$.c.totalAmount}\",\"fieldType\":\"label\"}";
            MakeATransfer.lblReadOnlyField4Label = "{i.kony.i18n.verifyDetails.exchangeRate}";
            MakeATransfer.lblReadOnlyField4Value = "{\"text\":\"{$.c.exchangeRate}\",\"fieldType\":\"label\"}";
            MakeATransfer.lblReadOnlyField5Label = "{i.kony.i18n.verifyDetails.fxRateReference}:";
            MakeATransfer.lblReadOnlyField5Value = "{\"text\":\"{$.c.fxRateReference}\",\"fieldType\":\"label\"}";
            MakeATransfer.lblReadOnlyField6Label = "{i.kony.i18n.verifyDetails.dueDate}:";
            MakeATransfer.lblReadOnlyField6Value = "{\"text\":\"{$.c.dueDate}\",\"fieldType\":\"label\"}";
            MakeATransfer.lblReadOnlyField7Label = "{i.kony.i18n.verifyDetails.outstandingDue}:";
            MakeATransfer.lblReadOnlyField7Value = "{\"text\":\"{$.c.outstandingDue}\",\"fieldType\":\"label\"}";
            MakeATransfer.lblReadOnlyField8Label = "Service charge:";
            MakeATransfer.lblReadOnlyField8Value = "{\"text\":\"{$.c.serviceCharge}\",\"fieldType\":\"label\"}";
            flxContent.add(MakeATransfer);
            flxDomesticBank.add(flxContent);
            var flxBlue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70%",
                "id": "flxBlue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "ICSknFlxBg003e7515px",
                "top": "-20dp",
                "width": "100%"
            }, {}, {});
            flxBlue.setDefaultUnit(kony.flex.DP);
            flxBlue.add();
            this.add(flxDomesticBank, flxBlue);
        };
        return [{
            "addWidgets": addWidgetsfrmDomesticTransfer,
            "enabledForIdleTimeout": false,
            "id": "frmDomesticTransfer",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "onDeviceBack": controller.AS_Form_fa152b1db6d643c69f9f61875086928f,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "ICSknTitleBar003e75Bg",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});