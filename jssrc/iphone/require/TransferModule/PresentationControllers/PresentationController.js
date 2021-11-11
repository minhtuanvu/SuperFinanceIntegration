define(["AsyncManager/BusinessControllers/BusinessController"], function(AsyncManager) {
    function Transfer_PresentationController() {
        scope_TransfersPresentationController = this;
        scope_TransfersPresentationController.externalAccount = false;
        scope_TransfersPresentationController.nickName = null;
        scope_TransfersPresentationController.entryPoint = "";
        scope_TransfersPresentationController.isNickNameUpdated = "";
        scope_TransfersPresentationController.isRecipientDeleted = "";
        scope_TransfersPresentationController.limitsData = null;
        scope_TransfersPresentationController.sameBankBenificiaryAdded = "";
        scope_TransfersPresentationController.otherBankBenificiaryAdded = "";
        scope_TransfersPresentationController.internationalBenificiaryAdded = "";
        scope_TransfersPresentationController.reEnteredAccountNumber = "";
        scope_TransfersPresentationController.swiftCode = "";
        scope_TransfersPresentationController.routingNumber = "";
        scope_TransfersPresentationController.countryName = "";
        scope_TransfersPresentationController.duration = "";
        scope_TransfersPresentationController.toBankName = "";
        scope_TransfersPresentationController.bankName = "";
        scope_TransfersPresentationController.isNavigated = false;
        scope_TransfersPresentationController.transactionMode = "";
        scope_TransfersPresentationController.accDetHomeAcc = "";
        scope_TransfersPresentationController.mfaFlowType = "";
        scope_TransfersPresentationController.isAcknowledgmentFlow = false;
        scope_TransfersPresentationController.navData = {};
        /**   numberOfAsyncForInternalBen
         *  1.getFrequentSameBankAccount
         *  2.getSameBankAccount
         */
        scope_TransfersPresentationController.numberOfAsync = 1;
        /**   numberOfAsyncForExternalBen
         *  1.getFrequentOtherBankAccount
         *  2.getOtherBankAccount
         */
        /**   numberOfAsyncForInternationaAcc
         *  1.getFrequentInternationalExternalAccounts
         *  2.getAllInternationalExternalAccounts
         */
        scope_TransfersPresentationController.numberOfAsyncForInternationaAcc = 2;
        kony.mvc.Presentation.BasePresenter.call(this);
        this.asyncManager = new AsyncManager();
    }
    inheritsFrom(Transfer_PresentationController, kony.mvc.Presentation.BasePresenter);
    Transfer_PresentationController.prototype.initializePresentationController = function() {};
    Transfer_PresentationController.prototype.clearBuilderNonGeneratedAttributes = function() {
        scope_TransfersPresentationController.toBankName = "";
        scope_TransfersPresentationController.reEnteredAccountNumber = "";
        scope_TransfersPresentationController.swiftCode = "";
        scope_TransfersPresentationController.routingNumber = "";
        scope_TransfersPresentationController.countryName = "";
        scope_TransfersPresentationController.duration = "";
    };
    Transfer_PresentationController.prototype.setToBankName = function(toBankName) {
        scope_TransfersPresentationController.toBankName = toBankName;
    };
    Transfer_PresentationController.prototype.getToBankName = function() {
        return scope_TransfersPresentationController.toBankName;
    };
    Transfer_PresentationController.prototype.setDuration = function(duration) {
        scope_TransfersPresentationController.duration = duration;
    };
    Transfer_PresentationController.prototype.getDuration = function() {
        return scope_TransfersPresentationController.duration;
    };
    Transfer_PresentationController.prototype.getReEnteredAccountNumber = function() {
        return scope_TransfersPresentationController.reEnteredAccountNumber;
    };
    Transfer_PresentationController.prototype.getSwiftCode = function() {
        return scope_TransfersPresentationController.swiftCode;
    };
    Transfer_PresentationController.prototype.getRoutingNumber = function() {
        return scope_TransfersPresentationController.routingNumber;
    };
    Transfer_PresentationController.prototype.getCountryName = function() {
        return scope_TransfersPresentationController.countryName;
    };
    Transfer_PresentationController.prototype.setSwiftCode = function(swiftCode) {
        scope_TransfersPresentationController.swiftCode = swiftCode;
    };
    Transfer_PresentationController.prototype.setRoutingNumber = function(routingNumber) {
        scope_TransfersPresentationController.routingNumber = routingNumber;
    };
    Transfer_PresentationController.prototype.setCountryName = function(countryName) {
        scope_TransfersPresentationController.countryName = countryName;
    };
    Transfer_PresentationController.prototype.setReEnteredAccountNumber = function(accNum) {
        scope_TransfersPresentationController.reEnteredAccountNumber = accNum;
    };
    Transfer_PresentationController.prototype.setBankNameFromResponse = function(bankName) {
        scope_TransfersPresentationController.bankName = bankName;
    };
    Transfer_PresentationController.prototype.getBankNameFromResponse = function() {
        return scope_TransfersPresentationController.bankName;
    };
    Transfer_PresentationController.prototype.commonFunctionForNavigation = function(formName) {
        var navManager = applicationManager.getNavigationManager();
        navManager.navigateTo(formName);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    };
    Transfer_PresentationController.prototype.fetchSameBankRecepients = function() {
        var recipientsManager = applicationManager.getRecipientsManager();
        recipientsManager.fetchAllInternalBenificiaries(scope_TransfersPresentationController.fetchSameBankRecipientsPresentationSuccess, scope_TransfersPresentationController.fetchSameBankRecipientsPresentationError);
    };
    Transfer_PresentationController.prototype.fetchSameBankRecipientsPresentationSuccess = function(successResponse) {
        if (scope_TransfersPresentationController.isAcknowledgmentFlow == true) {
            scope_TransfersPresentationController.isAcknowledgmentFlow = false;
            //       var navMan=applicationManager.getNavigationManager();
            //       navMan.setCustomInfo("frmAcknowledgment",scope_TransfersPresentationController.navData);
            //       navMan.setEntryPoint("acknowledgment","frmTransfers");
            scope_TransfersPresentationController.commonFunctionForNavigation("frmAcknowledgement");
        } else scope_TransfersPresentationController.commonFunctionForNavigation("frmManageRecipientList");
    };
    Transfer_PresentationController.prototype.fetchSameBankRecipientsPresentationError = function(error) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (error["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", error);
        }
    };
    Transfer_PresentationController.prototype.getBenificiaryScheduledAndPostedTransactions = function(selectedAccountDetails) {
        var recipientsManager = applicationManager.getRecipientsManager();
        recipientsManager.setBeneficiaryObject(selectedAccountDetails);
        if (scope_TransfersPresentationController.getFlowType() === "SameBankRecipients") {
            recipientsManager.setBeneficiaryAttribute("transactionMode", applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.OtherKonyBankMembers"));
        } else if (scope_TransfersPresentationController.getFlowType() === "OtherBankRecipients") {
            recipientsManager.setBeneficiaryAttribute("transactionMode", applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.OtherBankAccounts"));
        } else if (scope_TransfersPresentationController.getFlowType() === "InternationalRecipients") {
            recipientsManager.setBeneficiaryAttribute("transactionMode", applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.InternationalTransfer"));
        }
        var benificiaryDetails = recipientsManager.getBenificiaryData();
        var transactionObj = applicationManager.getTransactionManager();
        var criteria1 = {
            "accountNumber": benificiaryDetails.accountNumber,
            "firstRecordNumber": "0",
            "lastRecordNumber": "1000"
        };
        transactionObj.fetchToExternalAccountTransactions(criteria1, scope_TransfersPresentationController.fetchBenificiaryPenTranPresSucCallback, scope_TransfersPresentationController.fetchBenificiaryPenTranPreErrCallback);
    };
    Transfer_PresentationController.prototype.fetchBenificiaryPenTranPresSucCallback = function(resTransPend) {
        var formatUtil = applicationManager.getFormatUtilManager();
        var navMan = applicationManager.getNavigationManager();
        var selectedAccount = {};
        selectedAccount.Transactions = resTransPend;
        for (var i = 0; i < selectedAccount.Transactions.length; i++) {
            var trandateobj = formatUtil.getDateObjectfromString(selectedAccount.Transactions[i]["transactionDate"], "YYYY-MM-DD");
            selectedAccount.Transactions[i]["transactionDate"] = formatUtil.getFormatedDateString(trandateobj, formatUtil.getApplicationDateFormat());
            selectedAccount.Transactions[i]["amount"] = formatUtil.formatAmountandAppendCurrencySymbol(selectedAccount.Transactions[i]["amount"], selectedAccount.Transactions[i]["transactionCurrency"]);
        }
        navMan.setCustomInfo("frmManageTransferRecipient", selectedAccount);
        scope_TransfersPresentationController.commonFunctionForNavigation("frmManageTransferRecipient");
    };
    Transfer_PresentationController.prototype.fetchBenificiaryPenTranPreErrCallback = function(resTransPendErr) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (resTransPendErr["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", resTransPendErr);
        }
    };
    Transfer_PresentationController.prototype.fetchBenificiaryPosTranPresSucCallback = function(resTransPost) {
        scope_TransfersPresentationController.asyncManager.setSuccessStatus(1, resTransPost);
        if (scope_TransfersPresentationController.asyncManager.areAllservicesDone(2)) {
            scope_TransfersPresentationController.navigateToBenificiaryTransactionDetails();
        }
    };
    Transfer_PresentationController.prototype.fetchBenificiaryPosTranErrCallback = function(resTransPostErr) {
        scope_TransfersPresentationController.asyncManager.setErrorStatus(1, resTransPostErr);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (resTransPostErr["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", resTransPostErr);
        }
    };
    Transfer_PresentationController.prototype.navigateToBenificiaryTransactionDetails = function(res) {
        var formatUtil = applicationManager.getFormatUtilManager();
        var navMan = applicationManager.getNavigationManager();
        var selectedAccount = {};
        selectedAccount.pendingTransactions = scope_TransfersPresentationController.asyncManager.getData(0);
        selectedAccount.postedTransaction = scope_TransfersPresentationController.asyncManager.getData(1);
        for (var i = 0; i < selectedAccount.pendingTransactions.length; i++) {
            var trandateobj = formatUtil.getDateObjectfromString(selectedAccount.pendingTransactions[i]["transactionDate"], "YYYY-MM-DD");
            selectedAccount.pendingTransactions[i]["transactionDate"] = formatUtil.getFormatedDateString(trandateobj, formatUtil.getApplicationDateFormat());
            selectedAccount.pendingTransactions[i]["amount"] = formatUtil.formatAmountandAppendCurrencySymbol(selectedAccount.pendingTransactions[i]["amount"], selectedAccount.pendingTransactions[i]["transactionCurrency"]);
        }
        for (var i = 0; i < selectedAccount.postedTransaction.length; i++) {
            var trandateobj = formatUtil.getDateObjectfromString(selectedAccount.postedTransaction[i]["transactionDate"], "YYYY-MM-DD");
            selectedAccount.postedTransaction[i]["transactionDate"] = formatUtil.getFormatedDateString(trandateobj, formatUtil.getApplicationDateFormat())
            selectedAccount.postedTransaction[i]["amount"] = formatUtil.formatAmountandAppendCurrencySymbol(selectedAccount.postedTransaction[i]["amount"], selectedAccount.postedTransaction[i]["transactionCurrency"]);
        }
        navMan.setCustomInfo("frmManageTransferRecipient", selectedAccount);
        scope_TransfersPresentationController.commonFunctionForNavigation("frmManageTransferRecipient");
    };
    Transfer_PresentationController.prototype.updateBenificiaryNickName = function(nickName) {
        var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var benificiaryDetails = transferModPresentationController.getBenificiaryData();
        var editDetails = benificiaryDetails;
        editDetails.nickName = nickName;
        editDetails.payeeId = editDetails.Id;
        var maskedAccountNumber = applicationManager.getDataProcessorUtility().maskAccountNumber(benificiaryDetails["accountNumber"]);
        scope_TransfersPresentationController.navData = {};
        scope_TransfersPresentationController.navData["Reference ID"] = benificiaryDetails["Id"];
        scope_TransfersPresentationController.navData["Bank Name"] = benificiaryDetails["bankName"];
        scope_TransfersPresentationController.navData["Account Number"] = maskedAccountNumber;
        //scope_TransfersPresentationController.navData["Account Type"] = benificiaryDetails["accountType"];
        scope_TransfersPresentationController.navData["Recipient Name"] = benificiaryDetails["beneficiaryName"];
        scope_TransfersPresentationController.navData["Nick Name"] = nickName;
        scope_TransfersPresentationController.navData["Linked with"] = benificiaryDetails["noOfCustomersLinked"] + " Customers ID";
        var recipientsManager = applicationManager.getRecipientsManager();
        if (transferModPresentationController.getFlowType() === "InternationalRecipients") {
            editDetails.isInternationalAccount = "true";
            recipientsManager.editABenificiary(editDetails, scope_TransfersPresentationController.updateBankRecipientsPresentationSuccess, scope_TransfersPresentationController.updateBankRecipientsPresentationError);
        } else {
            recipientsManager.editABenificiary(editDetails, scope_TransfersPresentationController.updateBankRecipientsPresentationSuccess, scope_TransfersPresentationController.updateBankRecipientsPresentationError);
        }
    };
    Transfer_PresentationController.prototype.updateBankRecipientsPresentationSuccess = function(successResponse) {
        scope_TransfersPresentationController.isNickNameUpdated = true;
        scope_TransfersPresentationController.isAcknowledgmentFlow = true;
        var navMan = applicationManager.getNavigationManager();
        navMan.setCustomInfo("frmAcknowledgment", scope_TransfersPresentationController.navData);
        navMan.setEntryPoint("acknowledgment", "frmTransfersEdit");
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var benificiaryDetails = transferModulePresentationController.getBenificiaryData();
        if (benificiaryDetails.isSameBankAccount === true && benificiaryDetails.isInternationalAccount === false) {
            scope_TransfersPresentationController.fetchSameBankRecepients();
        } else if (benificiaryDetails.isSameBankAccount === false && benificiaryDetails.isInternationalAccount === true) {
            scope_TransfersPresentationController.fetchInternationalRecepients();
        } else {
            scope_TransfersPresentationController.fetchOtherBankRecepients();
        }
    };
    Transfer_PresentationController.prototype.updateBankRecipientsPresentationError = function(errorResponse) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (errorResponse["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", errorResponse);
        } else {
            //var controller = applicationManager.getPresentationUtility().getController('frmManageEditRecipient', true);
            //controller.bindGenericError(errorResponse["errmsg"]);
            var navMan = applicationManager.getNavigationManager();
            navMan.setCustomInfo("frmAcknowledgment", {
                "error": errorResponse["errmsg"]
            });
            navMan.setEntryPoint("acknowledgment", "frmTransfersEdit");
            scope_TransfersPresentationController.isAcknowledgmentFlow = false;
            scope_TransfersPresentationController.commonFunctionForNavigation("frmAcknowledgement");
        }
    };
    Transfer_PresentationController.prototype.updateBenificiaryCIF = function(cif) {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var benificiaryDetails = transferModPresentationController.getBenificiaryData();
        var editDetails = benificiaryDetails;
        editDetails.payeeId = editDetails.Id;
        editDetails.cif = cif;
        var recipientsManager = applicationManager.getRecipientsManager();
        recipientsManager.editABenificiary(editDetails, scope_TransfersPresentationController.updateRecipientsCIFSuccess(), scope_TransfersPresentationController.updateRecipientsCIFError);
    };
    Transfer_PresentationController.prototype.updateRecipientsCIFSuccess = function() {
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var benificiaryDetails = transferModulePresentationController.getBenificiaryData();
        scope_TransfersPresentationController.isAcknowledgmentFlow = true;
        var maskedAccountNumber = applicationManager.getDataProcessorUtility().maskAccountNumber(benificiaryDetails["accountNumber"]);
        scope_TransfersPresentationController.navData = {};
        scope_TransfersPresentationController.navData["Reference ID"] = benificiaryDetails["Id"];
        scope_TransfersPresentationController.navData["Bank Name"] = benificiaryDetails["bankName"];
        scope_TransfersPresentationController.navData["Account Number"] = maskedAccountNumber;
        //scope_TransfersPresentationController.navData["Account Type"] = benificiaryDetails["accountType"];
        scope_TransfersPresentationController.navData["Recipient Name"] = benificiaryDetails["beneficiaryName"];
        scope_TransfersPresentationController.navData["Nick Name"] = benificiaryDetails["nickName"];
        scope_TransfersPresentationController.navData["Linked with"] = benificiaryDetails["totalContractCustomerSelected"] + " Customers ID";
        var navMan = applicationManager.getNavigationManager();
        navMan.setCustomInfo("frmAcknowledgment", scope_TransfersPresentationController.navData);
        navMan.setEntryPoint("acknowledgment", "frmTransfersEdit");
        if (benificiaryDetails.isSameBankAccount === true && benificiaryDetails.isInternationalAccount === false) {
            scope_TransfersPresentationController.fetchSameBankRecepients();
        } else if (benificiaryDetails.isSameBankAccount === false && benificiaryDetails.isInternationalAccount === true) {
            scope_TransfersPresentationController.fetchInternationalRecepients();
        } else {
            scope_TransfersPresentationController.fetchOtherBankRecepients();
        }
    };
    Transfer_PresentationController.prototype.updateRecipientsCIFError = function(errorResponse) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (errorResponse["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", errorResponse);
        } else {
            var navMan = applicationManager.getNavigationManager();
            navMan.setCustomInfo("frmAcknowledgment", {});
            navMan.setEntryPoint("acknowledgment", "frmTransfersEdit");
            scope_TransfersPresentationController.isAcknowledgmentFlow = false;
            scope_TransfersPresentationController.commonFunctionForNavigation("frmAcknowledgement");
        }
    };
    Transfer_PresentationController.prototype.deleteSameBankBenificiary = function() {
        var recipientsManager = applicationManager.getRecipientsManager();
        var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var benificiaryDetails = transferModPresentationController.getBenificiaryData();
        if (transferModPresentationController.getFlowType() === "SameBankRecipients") {
            recipientsManager.deleteABenificiary(benificiaryDetails, scope_TransfersPresentationController.deleteSameBankRecipientsPresentationSuccess, scope_TransfersPresentationController.deleteSameBankRecipientsPresentationError);
        } else if (transferModPresentationController.getFlowType() === "InternationalRecipients") {
            recipientsManager.deleteABenificiary(benificiaryDetails, scope_TransfersPresentationController.deleteInternationalBankRecipientsPresentationSuccess, scope_TransfersPresentationController.deleteInternationalBankRecipientsPresentationError);
        } else {
            recipientsManager.deleteABenificiary(benificiaryDetails, scope_TransfersPresentationController.deleteOtherBankRecipientsPresentationSuccess, scope_TransfersPresentationController.deleteOtherBankRecipientsPresentationError);
        }
    };
    Transfer_PresentationController.prototype.deleteInternationalBankRecipientsPresentationSuccess = function(successResponse) {
        scope_TransfersPresentationController.isRecipientDeleted = true;
        scope_TransfersPresentationController.fetchInternationalRecepients();
    };
    Transfer_PresentationController.prototype.deleteInternationalBankRecipientsPresentationError = function(errorResponse) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (errorResponse["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", errorResponse);
        } else {
            var controller = applicationManager.getPresentationUtility().getController('frmManageRecipientList', true);
            controller.bindGenericError(error.errmsg);
        }
    };
    Transfer_PresentationController.prototype.deleteSameBankRecipientsPresentationSuccess = function(successResponse) {
        scope_TransfersPresentationController.isRecipientDeleted = true;
        scope_TransfersPresentationController.fetchSameBankRecepients();
    };
    Transfer_PresentationController.prototype.deleteSameBankRecipientsPresentationError = function(errorResponse) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (errorResponse["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", errorResponse);
        } else {
            var controller = applicationManager.getPresentationUtility().getController('frmManageRecipientList', true);
            controller.bindGenericError(error.errmsg);
        }
    };
    Transfer_PresentationController.prototype.deleteOtherBankRecipientsPresentationSuccess = function(successResponse) {
        scope_TransfersPresentationController.isRecipientDeleted = true;
        scope_TransfersPresentationController.fetchOtherBankRecepients();
    };
    Transfer_PresentationController.prototype.deleteOtherBankRecipientsPresentationError = function(errorResponse) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (errorResponse["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", errorResponse);
        } else {
            var controller = applicationManager.getPresentationUtility().getController('frmManageRecipientList', true);
            controller.bindGenericError(error.errmsg);
        }
    };
    Transfer_PresentationController.prototype.fetchOtherBankRecepients = function() {
        var recipientsManager = applicationManager.getRecipientsManager();
        recipientsManager.fetchAllExternalBenificiaries(scope_TransfersPresentationController.fetchOtherBankRecepientsPresentationSuccess, scope_TransfersPresentationController.fetchOtherBankRecepientsPresentationError);
    };
    Transfer_PresentationController.prototype.getSelectedFrequencyIndex = function() {
        var transactionObj = applicationManager.getTransactionManager();
        var frequency = transactionObj.getTransactionObject().frequencyType;
        switch (frequency) {
            case "Once":
                if (transactionObj.getTransactionObject().isScheduled === "0") return 0;
                else return 1;
                break;
            case "Daily":
                return 2;
            case "Weekly":
                return 3;
            case "Every Two Weeks":
                return 4;
            case "Monthly":
                return 5;
            case "Quarterly":
                return 6;
            case "Half Yearly":
                return 7;
            case "Yearly":
                return 8;
            default:
                return "";
        }
    };
    Transfer_PresentationController.prototype.evaluateAmount = function(amount, fromAvlBal) {
        var forUtility = applicationManager.getFormatUtilManager();
        //fromAvlBal = forUtility.deFormatAmount(fromAvlBal);
        if (Number(amount) > Number(fromAvlBal)) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            var controller = applicationManager.getPresentationUtility().getController('frmTransferAmount', true);
            controller.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.amountGreaterThanAvailBal"));
        } else if (Number(amount) === 0) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            var controller = applicationManager.getPresentationUtility().getController('frmTransferAmount', true);
            controller.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.validAmount"));
        } else {
            var transactionManager = applicationManager.getTransactionManager();
            transactionManager.setTransactionAttribute("amount", amount);
            var navManager = applicationManager.getNavigationManager();
            //       var index = scope_TransfersPresentationController.getSelectedFrequencyIndex();
            //       navManager.setCustomInfo("frmTransferFrequency",{"index":index});
            navManager.navigateTo("frmTransferFrequency");
        }
    };
    Transfer_PresentationController.prototype.fetchOtherBankRecepientsPresentationSuccess = function(successResponse) {
        if (scope_TransfersPresentationController.isAcknowledgmentFlow == true) {
            scope_TransfersPresentationController.isAcknowledgmentFlow = false;
            //  var navMan=applicationManager.getNavigationManager();
            //       navMan.setCustomInfo("frmAcknowledgment",scope_TransfersPresentationController.navData);
            //       navMan.setEntryPoint("acknowledgment","frmTransfers");
            scope_TransfersPresentationController.commonFunctionForNavigation("frmAcknowledgement");
        } else scope_TransfersPresentationController.commonFunctionForNavigation("frmManageRecipientList");
    };
    Transfer_PresentationController.prototype.fetchOtherBankRecepientsPresentationError = function(error) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (error["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", error);
        }
    };
    Transfer_PresentationController.prototype.processAccountsData = function(data) {
        var accProcessedData = [];
        for (var i = 0; i < data.length; i++) {
            accProcessedData[i] = {};
            accProcessedData[i].accountName = data[i].nickName;
            accProcessedData[i].availableBalance = this.getAvailableBalanceCurrencyString(data[i]);
            accProcessedData[i].accountID = data[i].accountID;
            accProcessedData[i].bankName = data[i].bankName.trim();
            accProcessedData[i].accountBalanceType = this.getAvailableBalanceType(data[i]);
            accProcessedData[i].accountType = data[i].accountType;
            accProcessedData[i].fromAccountCurrency = data[i].currencyCode;
            accProcessedData[i].toAccountCurrency = data[i].currencyCode;
            accProcessedData[i].fromAccountBalance = data[i].availableBalance;
            var name = "";
            if (data[i].nickName === null || data[i].nickName === undefined) {
                name = data[i].accountName;
            } else {
                name = data[i].nickName;
            }
            accProcessedData[i].processedName = applicationManager.getPresentationUtility().formatText(name, 10, data[i].accountID, 4);
        }
        return accProcessedData;
    };
    Transfer_PresentationController.prototype.getAvailableBalanceCurrencyString = function(data) {
        var forUtility = applicationManager.getFormatUtilManager();
        var configManager = applicationManager.getConfigurationManager();
        var currencyCode = data["currencyCode"];
        switch (data.accountType) {
            case configManager.constants.SAVINGS:
                return forUtility.formatAmountandAppendCurrencySymbol(data["availableBalance"], currencyCode);
            case configManager.constants.CHECKING:
                return forUtility.formatAmountandAppendCurrencySymbol(data["availableBalance"], currencyCode);
            case configManager.constants.CREDITCARD:
                return forUtility.formatAmountandAppendCurrencySymbol(data["availableBalance"], currencyCode);
            case configManager.constants.DEPOSIT:
                return forUtility.formatAmountandAppendCurrencySymbol(data["currentBalance"], currencyCode);
            case configManager.constants.MORTGAGE:
                return forUtility.formatAmountandAppendCurrencySymbol(data["outstandingBalance"], currencyCode);
            case configManager.constants.LOAN:
                return forUtility.formatAmountandAppendCurrencySymbol(data["outstandingBalance"], currencyCode);
            default:
                return forUtility.formatAmountandAppendCurrencySymbol(data["availableBalance"], currencyCode);
        }
    };
    Transfer_PresentationController.prototype.getAvailableBalanceType = function(data) {
        var configManager = applicationManager.getConfigurationManager();
        switch (data.accountType) {
            case configManager.constants.SAVINGS:
                return kony.i18n.getLocalizedString("kony.mb.accdetails.availBal");
            case configManager.constants.CHECKING:
                return kony.i18n.getLocalizedString("kony.mb.accdetails.availBal");
            case configManager.constants.CREDITCARD:
                return kony.i18n.getLocalizedString("kony.mb.accdetails.availBal");
            case configManager.constants.DEPOSIT:
                return kony.i18n.getLocalizedString("kony.mb.accdetails.currBal");
            case configManager.constants.MORTGAGE:
                return kony.i18n.getLocalizedString("kony.mb.accdetails.outstandingBal");
            case configManager.constants.LOAN:
                return kony.i18n.getLocalizedString("kony.mb.accdetails.outstandingBal");
            default:
                return kony.i18n.getLocalizedString("kony.mb.accdetails.availBal");
        }
    };
    Transfer_PresentationController.prototype.showAccounts = function(type) {
        var navMan = applicationManager.getNavigationManager();
        var trasMan = applicationManager.getTransactionManager();
        //navMan.setCustomInfo("frmTransfersToAccount",{});
        var accountList = navMan.getCustomInfo("frmTransfersToAccount");
        if (accountList && accountList !== null) {
            accountList.type = type;
        } else {
            accountList = {
                "type": type
            };
        }
        navMan.setCustomInfo("frmTransfersToAccount", accountList);
        var action;
        if (type === applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts")) {
            action = scope_TransfersPresentationController.getActionByType(type);
            scope_TransfersPresentationController.setFlowType("MyKonyAccounts");
            trasMan.setTransactionAttribute("transactionType", "InternalTransfer");
            scope_TransfersPresentationController.showFromAccounts(scope_TransfersPresentationController.showInternalAccountsPresentationSuccessCallBack);
        } else if (type === applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.OtherKonyBankMembers")) {
            action = scope_TransfersPresentationController.getActionByType(type);
            scope_TransfersPresentationController.setFlowType("OtherKonyBankMembersCreateTransfer");
            trasMan.setTransactionAttribute("transactionType", "ExternalTransfer");
            scope_TransfersPresentationController.numberOfAsync = 2;
            scope_TransfersPresentationController.asyncManager.initiateAsyncProcess(scope_TransfersPresentationController.numberOfAsync);
            var recMan = applicationManager.getRecipientsManager();
            recMan.fetchAllFrequentInternalBenificiaries(scope_TransfersPresentationController.showFreqExternalAccountsPresentationSuccessCallBack, scope_TransfersPresentationController.showFreqExternalAccountsPresentationErrorCallBack);
            recMan.fetchAllInternalBenificiaries(scope_TransfersPresentationController.showAllExternalAccountsPresentationSuccessCallBack, scope_TransfersPresentationController.showAllExternalAccountsPresentationErrorCallBack);
        } else if (type == applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.OtherBankAccounts")) {
            action = scope_TransfersPresentationController.getActionByType(type);
            scope_TransfersPresentationController.setFlowType("OtherBankAccountsCreateTransfer");
            trasMan.setTransactionAttribute("transactionType", "ExternalTransfer");
            scope_TransfersPresentationController.numberOfAsync = 2;
            scope_TransfersPresentationController.asyncManager.initiateAsyncProcess(scope_TransfersPresentationController.numberOfAsync);
            var recMan = applicationManager.getRecipientsManager();
            recMan.fetchAllFrequentExternalBenificiaries(scope_TransfersPresentationController.showFreqExternalAccountsPresentationSuccessCallBack, scope_TransfersPresentationController.showFreqExternalAccountsPresentationErrorCallBack);
            recMan.fetchAllExternalBenificiaries(scope_TransfersPresentationController.showAllExternalAccountsPresentationSuccessCallBack, scope_TransfersPresentationController.showAllExternalAccountsPresentationErrorCallBack);
        } else if (type === applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.InternationalTransfer")) {
            action = scope_TransfersPresentationController.getActionByType(type);
            scope_TransfersPresentationController.setFlowType("InternationalTransferCreateTransfer");
            trasMan.setTransactionAttribute("transactionType", "ExternalTransfer");
            scope_TransfersPresentationController.numberOfAsync = 2;
            scope_TransfersPresentationController.asyncManager.initiateAsyncProcess(scope_TransfersPresentationController.numberOfAsync);
            var recMan = applicationManager.getRecipientsManager();
            recMan.fetchAllFrequentInternationalBenificiaries(scope_TransfersPresentationController.showFreqExternalAccountsPresentationSuccessCallBack, scope_TransfersPresentationController.showFreqExternalAccountsPresentationErrorCallBack);
            recMan.fetchInternationalRecepients(scope_TransfersPresentationController.showAllExternalAccountsPresentationSuccessCallBack, scope_TransfersPresentationController.showAllExternalAccountsPresentationErrorCallBack);
        }
        if (action) scope_TransfersPresentationController.fetchTransferLimits(action);
    };
    Transfer_PresentationController.prototype.fetchTransferLimits = function(action) {
        var configManager = applicationManager.getConfigurationManager();
        configManager.fetchLimitsForAnAction(action, scope_TransfersPresentationController.fetchLimitsSuccessCallBack, scope_TransfersPresentationController.fetchLimitsErrorCallBack);
    };
    Transfer_PresentationController.prototype.fetchLimitsSuccessCallBack = function(res) {
        scope_TransfersPresentationController.limitsData = res;
    };
    Transfer_PresentationController.prototype.fetchLimitsErrorCallBack = function(resFSBAErr) {
        kony.print("error in fetchLimitsErrorCallBack");
    };
    Transfer_PresentationController.prototype.getActionByType = function(type) {
        switch (type) {
            case (applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts")):
                return "TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE";
            case (applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.OtherKonyBankMembers")):
                return "INTRA_BANK_FUND_TRANSFER_CREATE";
            case (applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.OtherBankAccounts")):
                return "INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE";
            case (applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.InternationalTransfer")):
                return "INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE";
            case "PayAPerson":
                return "P2P_CREATE";
        }
    };
    Transfer_PresentationController.prototype.getTypeByAction = function(action) {
        switch (action) {
            case "TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE":
                return applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts");
            case "INTRA_BANK_FUND_TRANSFER_CREATE":
                return applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.OtherKonyBankMembers");
            case "INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE":
                return applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.OtherBankAccounts");
            case "INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE":
                return applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.InternationalTransfer");
            case "P2P_CREATE":
                return "PayAPerson";
        }
    };
    Transfer_PresentationController.prototype.setLimitsForTransaction = function(accountId) {
        var type = scope_TransfersPresentationController.transactionMode;
        var scope = this;
        if (!scope.limitsData) return;
        for (var i = 0; i < scope.limitsData["accounts"].length; i++) {
            if (scope.limitsData["accounts"][i].accountId === accountId) {
                switch (type) {
                    case (applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts")):
                        scope.setLimits("minKonyBankAccountsTransferLimit", "maxKonyBankAccountsTransferLimit", i);
                        break;
                    case (applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.OtherKonyBankMembers")):
                        scope.setLimits("minOtherKonyAccountsTransferLimit", "maxOtherKonyAccountsTransferLimit", i);
                        break;
                    case (applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.OtherBankAccounts")):
                        scope.setLimits("minOtherBankAccountsTransferLimit", "maxOtherBankAccountsTransferLimit", i);
                        break;
                    case (applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.InternationalTransfer")):
                        scope.setLimits("minInternationalAccountsTransferLimit", "maxInternationalAccountsTransferLimit", i);
                        break;
                    case "PayAPerson":
                        scope.setLimits("minP2PLimit", "maxP2PLimit", i);
                }
            }
        }
    };
    Transfer_PresentationController.prototype.setLimits = function(minLimit, maxLimit, index) {
        var scope = this;
        applicationManager.getConfigurationManager().setConfigurationValue(minLimit, this.limitsData["accounts"][index]["limits"]["MIN_TRANSACTION_LIMIT"]);
        applicationManager.getConfigurationManager().setConfigurationValue(maxLimit, this.limitsData["accounts"][index]["limits"]["MAX_TRANSACTION_LIMIT"]);
    };
    Transfer_PresentationController.prototype.showInternalAccountsPresentationSuccessCallBack = function(res) {
        var navMan = applicationManager.getNavigationManager();
        var accNav = applicationManager.getAccountManager();
        var toacc = accNav.getToTransferSupportedAccounts();
        var accountList = navMan.getCustomInfo("frmTransfersToAccount");
        accountList.internalAccounts = toacc;
        navMan.setCustomInfo("frmTransfersToAccount", accountList);
        navMan.navigateTo("frmTransfersToAccount");
    };
    Transfer_PresentationController.prototype.showFreqExternalAccountsPresentationSuccessCallBack = function(resFSBA) {
        scope_TransfersPresentationController.asyncManager.setSuccessStatus(0, resFSBA);
        if (scope_TransfersPresentationController.asyncManager.areAllservicesDone(scope_TransfersPresentationController.numberOfAsync)) {
            scope_TransfersPresentationController.navigateToShowSBAAccountDetails();
        }
    };
    Transfer_PresentationController.prototype.showFreqExternalAccountsPresentationErrorCallBack = function(resFSBAErr) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (resFSBAErr["isServerUnreachable"]) applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", resFSBAErr);
        else scope_TransfersPresentationController.asyncManager.setErrorStatus(0, resFSBAErr);
    };
    Transfer_PresentationController.prototype.showAllExternalAccountsPresentationSuccessCallBack = function(resFBA) {
        scope_TransfersPresentationController.asyncManager.setSuccessStatus(1, resFBA);
        if (scope_TransfersPresentationController.asyncManager.areAllservicesDone(scope_TransfersPresentationController.numberOfAsync)) {
            scope_TransfersPresentationController.navigateToShowSBAAccountDetails();
        }
    };
    Transfer_PresentationController.prototype.showAllExternalAccountsPresentationErrorCallBack = function(resSBAErr) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (resSBAErr["isServerUnreachable"]) applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", resSBAErr);
        else scope_TransfersPresentationController.asyncManager.setErrorStatus(0, resSBAErr);
    };
    Transfer_PresentationController.prototype.navigateToShowSBAAccountDetails = function() {
        var navMan = applicationManager.getNavigationManager();
        var accountList = navMan.getCustomInfo("frmTransfersToAccount");
        accountList.addedFlag = scope_TransfersPresentationController.externalAccount;
        accountList.frequentExternalAccounts = scope_TransfersPresentationController.asyncManager.getData(0);
        accountList.allExternalAccounts = scope_TransfersPresentationController.asyncManager.getData(1).ExternalAccounts;
        navMan.setCustomInfo("frmTransfersToAccount", accountList);
        navMan.navigateTo("frmTransfersToAccount");
        scope_TransfersPresentationController.externalAccount = false;
    };
    Transfer_PresentationController.prototype.showFromAccounts = function(successCB) {
        var accMan = applicationManager.getAccountManager();
        accMan.fetchInternalAccounts(successCB, scope_TransfersPresentationController.showFromAccountsPresentationErrorCallBack);
    };
    Transfer_PresentationController.prototype.fromAccountsPresentationSuccessCallBack = function(res) {
        var accNav = applicationManager.getAccountManager();
        var frmacc = accNav.getFromTransferSupportedAccounts();
        var navMan = applicationManager.getNavigationManager();
        navMan.setCustomInfo("frmTransfersFromAccount", {
            "fromaccounts": frmacc
        });
        navMan.navigateTo("frmTransfersFromAccount");
    };
    Transfer_PresentationController.prototype.fromAccountOnContinuePresentationSuccessCallBack = function(res) {
        var accNav = applicationManager.getAccountManager();
        var frmacc = accNav.getFromTransferSupportedAccounts();
        var navMan = applicationManager.getNavigationManager();
        navMan.setCustomInfo("frmTransfersFromAccount", {
            "fromaccounts": frmacc
        });
        navMan.navigateTo("frmTransferAmount");
    };
    Transfer_PresentationController.prototype.showFromAccountsPresentationErrorCallBack = function(error) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (error["isServerUnreachable"]) applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", error);
        else kony.print("error in showFromAccountsPresentationErrorCallBack");
    };
    /*additional date field to use in  the calendar page in the back flow*/
    Transfer_PresentationController.prototype.convertCalendarDateToLocaleDate = function(formatedDate) {
        var forUtility = applicationManager.getFormatUtilManager();
        var configManager = applicationManager.getConfigurationManager()
        var convertedDate = forUtility.getFormatedDateString(forUtility.getDateObjectFromCalendarString(formatedDate, "MM/DD/YYYY"), configManager.frontendDateFormat[configManager.getLocale()]);
        return convertedDate;
    };
    Transfer_PresentationController.prototype.transferScheduledDate = function(strtDate) {
        var formatedDate = strtDate;
        var transactionManager = applicationManager.getTransactionManager();
        transactionManager.setTransactionAttribute("scheduledDate", formatedDate);
        transactionManager.setTransactionAttribute("scheduledCalendarDate", scope_TransfersPresentationController.convertCalendarDateToLocaleDate(formatedDate));
        var navMan = applicationManager.getNavigationManager();
        navMan.navigateTo("frmTransferConfirmation");
    };
    Transfer_PresentationController.prototype.transferScheduledStrtDate = function(strtDate) {
        var formatedDate = strtDate;
        var transactionManager = applicationManager.getTransactionManager();
        transactionManager.setTransactionAttribute("frequencyStartDate", formatedDate);
        transactionManager.setTransactionAttribute("scheduledDate", formatedDate);
        transactionManager.setTransactionAttribute("scheduledCalendarDate", scope_TransfersPresentationController.convertCalendarDateToLocaleDate(formatedDate));
        var navMan = applicationManager.getNavigationManager();
        navMan.navigateTo("frmTransfersEndDate");
    };
    Transfer_PresentationController.prototype.transferScheduledEndDate = function(endDate) {
        var formatedDate = endDate;
        var transactionManager = applicationManager.getTransactionManager();
        transactionManager.setTransactionAttribute("frequencyEndDate", formatedDate);
        transactionManager.setTransactionAttribute("endCalendarDate", scope_TransfersPresentationController.convertCalendarDateToLocaleDate(formatedDate));
        var navMan = applicationManager.getNavigationManager();
        navMan.navigateTo("frmTransferConfirmation");
    };
    Transfer_PresentationController.prototype.transferSetRecurrence = function(reccurrence) {
        var transactionManager = applicationManager.getTransactionManager();
        transactionManager.setTransactionAttribute("numberOfRecurrences", reccurrence);
        var navMan = applicationManager.getNavigationManager();
        // navMan.setCustomInfo("frmTransfersStartDate","NofRR");
        navMan.navigateTo("frmTransfersStartDate");
    };
    Transfer_PresentationController.prototype.getTransObject = function() {
        var transMan = applicationManager.getTransactionManager();
        var obj = transMan.getTransactionObject();
        return obj;
    };
    Transfer_PresentationController.prototype.switchDurationType = function(index) {
        var transactionObj = applicationManager.getTransactionManager();
        var frequencyTypes = transactionObj.getAvailableFrequencyType();
        var navMan = applicationManager.getNavigationManager();
        switch (index) {
            case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.DateRange"):
                transactionObj.setTransactionAttribute("numberOfRecurrences", "");
                // transactionObj.setScheduledDate("");
                scope_TransfersPresentationController.setDuration(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.DateRange"));
                var startDate = transactionObj.getTransactionObject().scheduledDate;
                var data = {
                    "freq": "ReccDate"
                };
                navMan.setCustomInfo("frmTransfersStartDate", data);
                navMan.navigateTo("frmTransfersStartDate");
                break;
            case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.NumberofRecurrence"):
                transactionObj.setTransactionAttribute("frequencyStartDate", "");
                transactionObj.setTransactionAttribute("frequencyEndDate", "");
                var startDate = transactionObj.getTransactionObject().scheduledDate;
                var data = {
                    "freq": "NofRR"
                };
                var noOfRecur = {
                    "noofrecur": transactionObj.getTransactionObject().numberOfRecurrences
                };
                navMan.setCustomInfo("frmTransfersStartDate", data);
                navMan.setCustomInfo("frmTransfersRecurrence", noOfRecur);
                scope_TransfersPresentationController.setDuration(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.RecurrenceNo"));
                navMan.navigateTo("frmTransfersRecurrence");
                break;
        }
    };
    Transfer_PresentationController.prototype.switchFrequencyType = function(Index) {
        var transactionObj = applicationManager.getTransactionManager();
        var frequencyTypes = transactionObj.getAvailableFrequencyType();
        var navMan = applicationManager.getNavigationManager();
        var forUtility = applicationManager.getFormatUtilManager();
        switch (Index) {
            case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.TransferNow"):
                transactionObj.setTransactionAttribute("frequencyType", frequencyTypes.ONCE);
                transactionObj.setTransactionAttribute("isScheduled", "0");
                transactionObj.setTransactionAttribute("numberOfRecurrences", "");
                var dateobj = new Date();
                var month = (dateobj.getMonth() + 1);
                if (month < 10) {
                    month = "0" + month;
                }
                var formatedDate = month + "/" + dateobj.getDate() + "/" + dateobj.getFullYear()
                    //var formatedDate = (dateobj.getMonth() + 1) + "/" + dateobj.getDate() + "/" + dateobj.getFullYear()
                transactionObj.setTransactionAttribute("scheduledDate", formatedDate);
                transactionObj.setTransactionAttribute("frequencyStartDate", "");
                transactionObj.setTransactionAttribute("frequencyEndDate", "");
                // var data=transactionObj.getP2PObject();
                //navMan.setCustomInfo("frmTransferConfirmation",data);
                navMan.navigateTo("frmTransferConfirmation");
                break;
            case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.OneTime"):
                transactionObj.setTransactionAttribute("frequencyType", frequencyTypes.ONCE);
                transactionObj.setTransactionAttribute("isScheduled", "1");
                var startDate = transactionObj.getTransactionObject().scheduledDate;
                var data = {
                    "freq": "Once"
                };
                navMan.setCustomInfo("frmTransfersStartDate", data);
                navMan.navigateTo("frmTransfersStartDate");
                break;
            case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.Daily"):
                transactionObj.setTransactionAttribute("frequencyType", frequencyTypes.DAILY);
                transactionObj.setTransactionAttribute("isScheduled", "1");
                navMan.navigateTo("frmTransfersDuration");
                break;
            case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.Weekly"):
                transactionObj.setTransactionAttribute("frequencyType", frequencyTypes.WEEKLY);
                transactionObj.setTransactionAttribute("isScheduled", "1");
                navMan.navigateTo("frmTransfersDuration");
                break;
            case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.EveryTwoWeeks"):
                transactionObj.setTransactionAttribute("frequencyType", frequencyTypes.EVERYTWOWEEKS);
                transactionObj.setTransactionAttribute("isScheduled", "1");
                navMan.navigateTo("frmTransfersDuration");
                break;
            case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.Monthly"):
                transactionObj.setTransactionAttribute("frequencyType", frequencyTypes.MONTHLY);
                transactionObj.setTransactionAttribute("isScheduled", "1");
                navMan.navigateTo("frmTransfersDuration");
                break;
            case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.Quaterly"):
                transactionObj.setTransactionAttribute("frequencyType", frequencyTypes.QUARTERLY);
                transactionObj.setTransactionAttribute("isScheduled", "1");
                navMan.navigateTo("frmTransfersDuration");
                break;
            case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.HalfYearly"):
                transactionObj.setTransactionAttribute("frequencyType", frequencyTypes.HALFYEARLY);
                transactionObj.setTransactionAttribute("isScheduled", "1");
                navMan.navigateTo("frmTransfersDuration");
                break;
            case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.Yearly"):
                transactionObj.setTransactionAttribute("frequencyType", frequencyTypes.YEARLY);
                transactionObj.setTransactionAttribute("isScheduled", "1");
                navMan.navigateTo("frmTransfersDuration");
                break;
            case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.BiWeekly"):
                transactionObj.setTransactionAttribute("frequencyType", frequencyTypes.BIWEEKLY);
                transactionObj.setTransactionAttribute("isScheduled", "1");
                navMan.navigateTo("frmTransfersDuration");
                break;
            default:
                break;
        }
    };
    Transfer_PresentationController.prototype.getIndexForDuration = function() {
        var index;
        var transactionManager = applicationManager.getTransactionManager();
        //var  transactionObj=transactionManager.getP2PObject();
        if (transactionManager.getTransactionObject().frequencyEndDate) index = 0;
        else if (transactionManager.getTransactionObject().scheduledDate) index = 1;
        return index;
    };
    Transfer_PresentationController.prototype.navAfterToAcc = function() {
        //  var accdata=[];
        var accMan = applicationManager.getAccountManager();
        var transactionManager = applicationManager.getTransactionManager();
        var navMan = applicationManager.getNavigationManager();
        var accountList = navMan.getCustomInfo("frmTransfersToAccount");
        var preAccData = accMan.getTransfersPreferredAccount();
        if (transactionManager.transferObject.fromAccountNumber == "" || transactionManager.transferObject.fromAccountNumber == null || transactionManager.transferObject.fromAccountNumber == undefined) scope_TransfersPresentationController.setFromAccountsForTransactions(preAccData);
        // var frmDetails=navMan.getCustomInfo("frmTransfersFromAccount");
        //  navMan.setCustomInfo("frmTransfersFromAccount",{});
        var selectedAccountData = accountList.selectedAccountData;
        if (accountList.type === applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts")) {
            transactionManager.setTransactionAttribute("toAccountNumber", selectedAccountData["accountID"]);
            transactionManager.setTransactionAttribute("toAccountType", selectedAccountData["accountType"]);
            transactionManager.setTransactionAttribute("toAccountName", selectedAccountData["accountName"]);
            transactionManager.setTransactionAttribute("toAccountCurrency", selectedAccountData["toAccountCurrency"]);
            // transactionManager.setTransactionAttribute("toBankName",selectedAccountData["bankName"]);
            scope_TransfersPresentationController.setToBankName(selectedAccountData["bankName"]);
        } else {
            transactionManager.setTransactionAttribute("toAccountNumber", selectedAccountData["accountNumber"]);
            scope_TransfersPresentationController.setToBankName(selectedAccountData["bankName"]);
            transactionManager.setTransactionAttribute("toAccountName", selectedAccountData["nickName"]);
            transactionManager.setTransactionAttribute("toAccountType", selectedAccountData["accountType"]);
            transactionManager.setTransactionAttribute("beneficiaryId", selectedAccountData["beneficiaryId"]);
        }
        if ((preAccData === "") || (preAccData === undefined) || (preAccData === null) || ((accountList.type === applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts")) && (accountList.selectedAccountData["accountID"] === transactionManager.transferObject.fromAccountNumber))) {
            applicationManager.getPresentationUtility().showLoadingScreen();
            scope_TransfersPresentationController.showFromAccounts(scope_TransfersPresentationController.fromAccountsPresentationSuccessCallBack);
        } else {
            scope_TransfersPresentationController.showPreferredAccount();
        }
    };
    Transfer_PresentationController.prototype.getTransferObjectById = function() {
        var accdata = [],
            processAccountsData = null;
        var trasMan = applicationManager.getTransactionManager();
        var accMan = applicationManager.getAccountManager();
        if (trasMan.getTransactionObject().fromAccountNumber) {
            var accData = accMan.getInternalAccountByID(trasMan.getTransactionObject().fromAccountNumber);
            accdata.push(accData);
            processAccountsData = scope_TransfersPresentationController.processAccountsData(accdata);
        }
        return processAccountsData;
    };
    Transfer_PresentationController.prototype.getAmount = function() {
        var amount = null;
        var transactionmanager = applicationManager.getTransactionManager();
        var formatUtil = applicationManager.getFormatUtilManager();
        if (transactionmanager.getTransactionObject().amount !== undefined && transactionmanager.getTransactionObject().amount !== null && transactionmanager.getTransactionObject().amount !== "") {
            amount = formatUtil.deFormatAmount(transactionmanager.getTransactionObject().amount);
        }
        return amount;
    };
    Transfer_PresentationController.prototype.showPreferredAccount = function() {
        scope_TransfersPresentationController.showFromAccounts(scope_TransfersPresentationController.fromAccountOnContinuePresentationSuccessCallBack)
    };
    Transfer_PresentationController.prototype.navigateToReEnterAccountNumber = function(accountNumber) {
        var recipientsManager = applicationManager.getRecipientsManager();
        var benificiaryData = {};
        benificiaryData.accountNumber = accountNumber;
        recipientsManager.initializeBeneficiaryDataWithAccountNum(benificiaryData);
        if (scope_TransfersPresentationController.getFlowType() === "InternationalRecipients" || scope_TransfersPresentationController.getFlowType() === "InternationalTransferCreateTransfer") {
            var recipientsManager = applicationManager.getRecipientsManager();
            recipientsManager.setBeneficiaryAttribute("countryName", scope_TransfersPresentationController.countryName);
            recipientsManager.setBeneficiaryAttribute("swiftCode", scope_TransfersPresentationController.swiftCode);
            recipientsManager.setBeneficiaryAttribute("bankName", scope_TransfersPresentationController.bankName);
            scope_TransfersPresentationController.commonFunctionForNavigation("frmReEnterBenAccNumorIBAN");
        } else if (scope_TransfersPresentationController.getFlowType() === "OtherBankRecipients" || scope_TransfersPresentationController.getFlowType() === "OtherBankAccountsCreateTransfer") {
            var recipientsManager = applicationManager.getRecipientsManager();
            recipientsManager.setBeneficiaryAttribute("routingNumber", scope_TransfersPresentationController.routingNumber);
            scope_TransfersPresentationController.commonFunctionForNavigation("frmReEnterBenAccNo");
        } else {
            scope_TransfersPresentationController.commonFunctionForNavigation("frmReEnterBenAccNo");
        }
    };
    Transfer_PresentationController.prototype.navigateToBenName = function(accountNumber) {
        scope_TransfersPresentationController.setReEnteredAccountNumber(accountNumber);
        scope_TransfersPresentationController.commonFunctionForNavigation("frmBenName");
    };
    Transfer_PresentationController.prototype.navigateToBenificiaryName = function(accountType) {
        var recipientsManager = applicationManager.getRecipientsManager();
        recipientsManager.setBeneficiaryAttribute("accountType", accountType);
        scope_TransfersPresentationController.commonFunctionForNavigation("frmBenName");
    };
    Transfer_PresentationController.prototype.navigateToBenificiaryAccountTypeSelection = function(recipientName) {
        var recipientsManager = applicationManager.getRecipientsManager();
        recipientsManager.setBeneficiaryAttribute("beneficiaryName", recipientName);
        scope_TransfersPresentationController.commonFunctionForNavigation("frmBenAccountTypeSelect");
    };
    Transfer_PresentationController.prototype.navigateToBenificiaryVerifyDetails = function(recipientName, frmName) {
        var recipientsManager = applicationManager.getRecipientsManager();
        var configurationManager = applicationManager.getConfigurationManager();
        var flowType = scope_TransfersPresentationController.getFlowType();
        if (configurationManager.isCombinedUser === "true") {
            recipientsManager.setBeneficiaryAttribute("isBusinessPayee", recipientName);
        } else {
            recipientsManager.setBeneficiaryAttribute("beneficiaryName", recipientName);
        }
        scope_TransfersPresentationController.commonFunctionForNavigation(frmName);
    };
    Transfer_PresentationController.prototype.navigateToEnterBenificiaryAccountNumber = function(routingNumber) {
        var recipientsManager = applicationManager.getRecipientsManager();
        scope_TransfersPresentationController.setRoutingNumber(routingNumber);
        scope_TransfersPresentationController.commonFunctionForNavigation("frmEnterBenAccNo");
    };
    Transfer_PresentationController.prototype.setNickName = function(nickName) {
        var recipientsManager = applicationManager.getRecipientsManager();
        recipientsManager.setBeneficiaryAttribute("nickName", nickName);
    };
    Transfer_PresentationController.prototype.setIsVerified = function(value) {
        var recipientsManager = applicationManager.getRecipientsManager();
        recipientsManager.setBeneficiaryAttribute("isVerified", value);
    };
    Transfer_PresentationController.prototype.setIsSameBankAccount = function(value) {
        var recipientsManager = applicationManager.getRecipientsManager();
        recipientsManager.setBeneficiaryAttribute("isSameBankAccount", value);
    };
    Transfer_PresentationController.prototype.setIsInternationalAccount = function(value) {
        var recipientsManager = applicationManager.getRecipientsManager();
        recipientsManager.setBeneficiaryAttribute("isInternationalAccount", value);
    };
    Transfer_PresentationController.prototype.setBankName = function(bankName) {
        var recipientsManager = applicationManager.getRecipientsManager();
        recipientsManager.setBeneficiaryAttribute("bankName", bankName);
    };
    Transfer_PresentationController.prototype.navigateToEnterBenificiaryRoutingNumber = function(bankDetails) {
        var navMan = applicationManager.getNavigationManager();
        navMan.setCustomInfo("frmAddBenRoutNo", {
            "bankDetails": bankDetails
        });
        navMan.navigateTo("frmAddBenRoutNo");
    };
    Transfer_PresentationController.prototype.createInternalBenificiary = function() {
        var navMan = applicationManager.getNavigationManager();
        var toDetails = navMan.getCustomInfo("frmTransfersToAccount");
        if (toDetails && toDetails !== null) {
            toDetails.accountDetailsType = "Other Kony Bank Members";
        } else {
            toDetails = {
                "accountDetailsType": "Other Kony Bank Members"
            };
        }
        navMan.setCustomInfo("frmTransfersToAccount", toDetails);
        var benificiaryData = scope_TransfersPresentationController.getBenificiaryData();
        var recipientsManager = applicationManager.getRecipientsManager();
        //benificiaryData.accountType = "Savings"; //Temp addition, because mobile doesn't have UI for selecting account type
        var configManager = applicationManager.getConfigurationManager();
        if (configManager.isSMEUser === "true" || configManager.isMBBUser === "true") {
            benificiaryData.isBusinessPayee = "1";
        }
        recipientsManager.createABenificiary(benificiaryData, scope_TransfersPresentationController.createSameBankBenificiaryPresentationSuccess, scope_TransfersPresentationController.createSameBankBenificiaryPresentationError);
    };
    Transfer_PresentationController.prototype.createSameBankBenificiaryPresentationSuccess = function(succResponse) {
        scope_TransfersPresentationController.sameBankBenificiaryAdded = true;
        scope_TransfersPresentationController.isAcknowledgmentFlow = true;
        var maskedAccountNumber = applicationManager.getDataProcessorUtility().maskAccountNumber(succResponse.selectedAccountData["accountNumber"]);
        scope_TransfersPresentationController.navData = {};
        scope_TransfersPresentationController.navData["Reference ID"] = succResponse["Id"];
        scope_TransfersPresentationController.navData["Bank Name"] = succResponse.selectedAccountData["bankName"];
        scope_TransfersPresentationController.navData["Account Number"] = maskedAccountNumber;
        //scope_TransfersPresentationController.navData["Account Type"] = succResponse.selectedAccountData["accountType"];
        scope_TransfersPresentationController.navData["Recipient Name"] = succResponse.selectedAccountData["beneficiaryName"];
        scope_TransfersPresentationController.navData["Nick Name"] = succResponse.selectedAccountData["nickName"];
        scope_TransfersPresentationController.navData["Linked with"] = succResponse.selectedAccountData["totalContractCustomerSelected"] + " Customers ID";
        var navMan = applicationManager.getNavigationManager();
        navMan.setCustomInfo("frmAcknowledgment", scope_TransfersPresentationController.navData);
        navMan.setEntryPoint("acknowledgment", "frmTransfers");
        var accntType = navMan.getCustomInfo("frmTransfersToAccount");
        if (scope_TransfersPresentationController.getFlowType() === "OtherKonyBankMembersCreateTransfer") {
            navMan.setCustomInfo("frmTransfersToAccount", succResponse);
            scope_TransfersPresentationController.navAfterToAcc()
        }
        if (scope_TransfersPresentationController.getFlowType() === "SameBankRecipients") {
            scope_TransfersPresentationController.fetchSameBankRecepients();
        }
    };
    Transfer_PresentationController.prototype.createSameBankBenificiaryPresentationError = function(err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (err["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
        } else {
            // var controller = applicationManager.getPresentationUtility().getController('frmBenVerifyDetails', true);
            //controller.bindGenericError(err.errorMessage);
            var navMan = applicationManager.getNavigationManager();
            navMan.setCustomInfo("frmAcknowledgment", {
                "error": err.errorMessage
            });
            scope_TransfersPresentationController.isAcknowledgmentFlow = false;
            navMan.setEntryPoint("acknowledgment", "frmTransfers");
            scope_TransfersPresentationController.commonFunctionForNavigation("frmAcknowledgement");
        }
    };
    Transfer_PresentationController.prototype.createExternalBenificiary = function() {
        var navMan = applicationManager.getNavigationManager();
        var toDetails = navMan.getCustomInfo("frmTransfersToAccount");
        if (toDetails && toDetails !== null) {
            toDetails.accountDetailsType = "Other Bank Accounts";
        } else {
            toDetails = {
                "accountDetailsType": "Other Bank Accounts"
            };
        }
        navMan.setCustomInfo("frmTransfersToAccount", toDetails);
        var recipientsManager = applicationManager.getRecipientsManager();
        var benificiaryData = scope_TransfersPresentationController.getBenificiaryData();
        //benificiaryData.accountType = "Savings"; //Temp addition, because mobile doesn't have UI for selecting account type
        var configManager = applicationManager.getConfigurationManager();
        if (configManager.isSMEUser === "true" || configManager.isMBBUser === "true") {
            benificiaryData.isBusinessPayee = "1";
        }
        recipientsManager.createABenificiary(benificiaryData, scope_TransfersPresentationController.createOtherBankBenificiaryPresentationSuccess, scope_TransfersPresentationController.createOtherBankBenificiaryPresentationError);
    };
    Transfer_PresentationController.prototype.createOtherBankBenificiaryPresentationSuccess = function(succResponse) {
        scope_TransfersPresentationController.otherBankBenificiaryAdded = true;
        scope_TransfersPresentationController.isAcknowledgmentFlow = true;
        var navMan = applicationManager.getNavigationManager();
        var accntType = navMan.getCustomInfo("frmTransfersToAccount");
        var maskedAccountNumber = applicationManager.getDataProcessorUtility().maskAccountNumber(succResponse.selectedAccountData["accountNumber"]);
        scope_TransfersPresentationController.navData = {};
        scope_TransfersPresentationController.navData["Reference ID"] = succResponse["Id"];
        scope_TransfersPresentationController.navData["Bank Name"] = succResponse.selectedAccountData["bankName"];
        scope_TransfersPresentationController.navData["Account Number"] = maskedAccountNumber;
        //scope_TransfersPresentationController.navData["Account Type"] = succResponse.selectedAccountData["accountType"];
        scope_TransfersPresentationController.navData["Recipient Name"] = succResponse.selectedAccountData["beneficiaryName"];
        scope_TransfersPresentationController.navData["Nick Name"] = succResponse.selectedAccountData["nickName"];
        scope_TransfersPresentationController.navData["Linked with"] = succResponse.selectedAccountData["totalContractCustomerSelected"] + " Customers ID";
        var navMan = applicationManager.getNavigationManager();
        navMan.setCustomInfo("frmAcknowledgment", scope_TransfersPresentationController.navData);
        navMan.setEntryPoint("acknowledgment", "frmTransfers");
        if (scope_TransfersPresentationController.getFlowType() === "OtherBankAccountsCreateTransfer") {
            navMan.setCustomInfo("frmTransfersToAccount", succResponse);
            scope_TransfersPresentationController.navAfterToAcc()
        }
        if (scope_TransfersPresentationController.getFlowType() === "OtherBankRecipients") {
            scope_TransfersPresentationController.fetchOtherBankRecepients();
        }
    };
    Transfer_PresentationController.prototype.createOtherBankBenificiaryPresentationError = function(errResponse) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (errResponse["isServerUnreachable"]) applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", errResponse);
        else {
            kony.print("Error in create same bank recipients");
            // var controller = applicationManager.getPresentationUtility().getController('frmBenVerifyDetails', true);
            //controller.bindGenericError(errResponse.errorMessage);
            var navMan = applicationManager.getNavigationManager();
            navMan.setCustomInfo("frmAcknowledgment", {
                "error": errResponse.errorMessage
            });
            scope_TransfersPresentationController.isAcknowledgmentFlow = false;
            navMan.setEntryPoint("acknowledgment", "frmTransfers");
            scope_TransfersPresentationController.commonFunctionForNavigation("frmAcknowledgement");
        }
    };
    Transfer_PresentationController.prototype.cancelCommon = function() {
        scope_TransfersPresentationController.clearBuilderNonGeneratedAttributes();
        var transactionManager = applicationManager.getTransactionManager();
        transactionManager.clearTransferObject();
        var navManager = applicationManager.getNavigationManager();
        var navigateToForm = navManager.getEntryPoint("makeatransfer");
        if (navigateToForm === "frmDashBoard") {
            var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
            accountMod.presentationController.showDashboard();
        } else navManager.navigateTo(navigateToForm);
        //var transModPresentationController = applicationManager.getModulesPresentationController("TransactionModule");
        //transModPresentationController.getTransactions();
    };
    Transfer_PresentationController.prototype.makeATransfer = function(description) {
        var transactionManager = applicationManager.getTransactionManager();
        transactionManager.setTransactionAttribute("transactionsNotes", description);
        var transactionObj = transactionManager.getTransactionObject();
        var mfaManager = applicationManager.getMFAManager();
        var serviceName = transactionObj.serviceName;
        if (kony.sdk.isNullOrUndefined(serviceName)) {
            var displayName = applicationManager.getPresentationUtility().MFA.getDisplayNameBasedOnTransactionMode();
            applicationManager.getPresentationUtility().MFA.getServiceIdBasedOnDisplayName(displayName);
            serviceName = mfaManager.getServiceId();
        } else mfaManager.setServiceId(serviceName);
        if (serviceName) {
            var mfaParams = {
                serviceName: serviceName,
            };
            transactionManager.setTransactionAttribute("MFAAttributes", mfaParams);
        }
        if (transactionManager.getTransactionObject().transactionId != "" && transactionManager.getTransactionObject().transactionId != null && transactionManager.getTransactionObject().transactionId != null) {
            mfaManager.setMFAFlowType("UPDATE");
            var request = transactionManager.getTransactionObject();
            var requestdata = {};
            for (var prop in request) {
                if (request[prop] !== null) {
                    requestdata[prop] = request[prop];
                }
            }
            switch (scope_TransfersPresentationController.transactionMode) {
                case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts"):
                    mfaManager.setMFAFlowType("TRANSFER_BETWEEN_OWN_ACCOUNT_UPDATE");
                    scope_TransfersPresentationController.mfaFlowType = "TRANSFER_BETWEEN_OWN_ACCOUNT_UPDATE";
                    transactionManager.editTransferToOwnAccounts(requestdata, scope_TransfersPresentationController.presentationMakeATransferSuccess, scope_TransfersPresentationController.presentationMakeATransferError);
                    break;
                case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.OtherKonyBankMembers"):
                    mfaManager.setMFAFlowType("INTRA_BANK_FUND_TRANSFER_UPDATE");
                    scope_TransfersPresentationController.mfaFlowType = "INTRA_BANK_FUND_TRANSFER_UPDATE";
                    transactionManager.editIntraBankAccFundTransfer(requestdata, scope_TransfersPresentationController.presentationMakeATransferSuccess, scope_TransfersPresentationController.presentationMakeATransferError);
                    break;
                case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.OtherBankAccounts"):
                    mfaManager.setMFAFlowType("INTER_BANK_ACCOUNT_FUND_TRANSFER_UPDATE");
                    scope_TransfersPresentationController.mfaFlowType = "INTER_BANK_ACCOUNT_FUND_TRANSFER_UPDATE";
                    transactionManager.editInterBankAccFundTransfer(requestdata, scope_TransfersPresentationController.presentationMakeATransferSuccess, scope_TransfersPresentationController.presentationMakeATransferError);
                    break;
                case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.InternationalTransfer"):
                    mfaManager.setMFAFlowType("INTERNATIONAL_ACCOUNT_FUND_TRANSFER_UPDATE");
                    scope_TransfersPresentationController.mfaFlowType = "INTERNATIONAL_ACCOUNT_FUND_TRANSFER_UPDATE";
                    transactionManager.editInternationalAccFundTransfer(requestdata, scope_TransfersPresentationController.presentationMakeATransferSuccess, scope_TransfersPresentationController.presentationMakeATransferError);
                    break;
            }
        } else {
            mfaManager.setMFAFlowType("CREATE");
            transactionManager.setTransactionAttribute("serviceName", serviceName);
            var request = transactionManager.getTransactionObject();
            var requestdata = {};
            for (var prop in request) {
                if (request[prop] !== null) {
                    requestdata[prop] = request[prop];
                }
            }
            switch (scope_TransfersPresentationController.transactionMode) {
                case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts"):
                    mfaManager.setMFAFlowType("TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE");
                    scope_TransfersPresentationController.mfaFlowType = "TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE";
                    transactionManager.createTransferToOwnAccounts(requestdata, scope_TransfersPresentationController.presentationMakeATransferSuccess, scope_TransfersPresentationController.presentationMakeATransferError);
                    break;
                case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.OtherKonyBankMembers"):
                    mfaManager.setMFAFlowType("INTRA_BANK_FUND_TRANSFER_CREATE");
                    scope_TransfersPresentationController.mfaFlowType = "INTRA_BANK_FUND_TRANSFER_CREATE";
                    transactionManager.createIntraBankAccFundTransfer(requestdata, scope_TransfersPresentationController.presentationMakeATransferSuccess, scope_TransfersPresentationController.presentationMakeATransferError);
                    break;
                case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.OtherBankAccounts"):
                    mfaManager.setMFAFlowType("INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE");
                    scope_TransfersPresentationController.mfaFlowType = "INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE";
                    transactionManager.createInterBankAccFundTransfer(requestdata, scope_TransfersPresentationController.presentationMakeATransferSuccess, scope_TransfersPresentationController.presentationMakeATransferError);
                    break;
                case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.InternationalTransfer"):
                    mfaManager.setMFAFlowType("INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE");
                    scope_TransfersPresentationController.mfaFlowType = "INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE";
                    transactionManager.createInternationalAccFundTransfer(requestdata, scope_TransfersPresentationController.presentationMakeATransferSuccess, scope_TransfersPresentationController.presentationMakeATransferError);
                    break;
            }
            //   transactionManager.createTransaction(transactionManager.getTransactionObject(), this.presentationMakeATransferSuccess, this.presentationMakeATransferError);
        }
    };
    Transfer_PresentationController.prototype.presentationMakeATransferSuccess = function(resp) {
        if (resp.MFAAttributes && resp.MFAAttributes.isMFARequired == "true") {
            var mfaJSON = {
                "flowType": scope_TransfersPresentationController.mfaFlowType,
                "response": resp
            };
            applicationManager.getMFAManager().setMFAOperationType("Transfers");
            applicationManager.getMFAManager().initMFAFlow(mfaJSON);
        } else {
            var navManager = applicationManager.getNavigationManager();
            var transactionManager = applicationManager.getTransactionManager();
            var navigateToForm = navManager.getEntryPoint("makeatransfer");
            if (navigateToForm !== "frmAccountDetails") {
                var transModPresentationController = applicationManager.getModulesPresentationController("TransactionModule");
                transModPresentationController.getTransactions();
                var navMan = applicationManager.getNavigationManager();
                var data = {};
                data.type = "success";
                data.typeOfTransaction = "create";
                data.res = resp;
                navMan.setCustomInfo("frmTransfers", data);
            } else {
                var navMan = applicationManager.getNavigationManager();
                var data = {};
                data.type = "success";
                data.typeOfTransaction = "create";
                data.res = resp;
                navMan.setCustomInfo("frmAccountDetails", data);
                if (applicationManager.getConfigurationManager().isAccountDetailsServiceConfigured) {
                    var toAccountID = transactionManager.getTransactionObject().toAccountNumber;
                    var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
                    accountMod.presentationController.fetchAccountDetailsAndTransactions(scope_TransfersPresentationController.accDetHomeAcc);
                } else {
                    var accountsManager = applicationManager.getAccountManager();
                    accountsManager.fetchInternalAccounts(scope_TransfersPresentationController.fetchAccountsSuccCallBack, scope_TransfersPresentationController.fetchAccountsErrCallBack);
                }
            }
        }
    };
    Transfer_PresentationController.prototype.fetchAccountTransactions = function() {
        var transactionManager = applicationManager.getTransactionManager();
        var toAccountID = transactionManager.getTransactionObject().toAccountNumber;
        scope_TransfersPresentationController.clearBuilderNonGeneratedAttributes();
        transactionManager.clearTransferObject();
        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountMod.presentationController.fetchAccountTransactions(scope_TransfersPresentationController.accDetHomeAcc);
    };
    Transfer_PresentationController.prototype.fetchAccountsSuccCallBack = function(res) {
        scope_TransfersPresentationController.fetchAccountTransactions();
    };
    Transfer_PresentationController.prototype.fetchAccountsErrCallBack = function(err) {
        kony.print(err);
    };
    Transfer_PresentationController.prototype.presentationMakeATransferError = function(err) {
        if (err["isServerUnreachable"]) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
        } else {
            var navMan = applicationManager.getNavigationManager();
            var navigateToForm = navMan.getEntryPoint("makeatransfer");
            var transactionManager = applicationManager.getTransactionManager();
            var toAccountID = transactionManager.getTransactionObject().toAccountNumber;
            scope_TransfersPresentationController.clearBuilderNonGeneratedAttributes();
            transactionManager.clearTransferObject();
            if (navigateToForm !== "frmAccountDetails") {
                var transModPresentationController = applicationManager.getModulesPresentationController("TransactionModule");
                transModPresentationController.getTransactions();
                var navMan = applicationManager.getNavigationManager();
                var data = {};
                data.type = "error";
                data.typeOfTransaction = "create";
                data.res = err["errorMessage"];
                navMan.setCustomInfo("frmTransfers", data);
            } else {
                var navMan = applicationManager.getNavigationManager();
                var data = {};
                data.type = "error";
                data.typeOfTransaction = "create";
                data.res = err["errorMessage"];
                navMan.setCustomInfo("frmAccountDetails", data);
                if (applicationManager.getConfigurationManager().isAccountDetailsServiceConfigured) {
                    var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
                    accountMod.presentationController.fetchAccountDetailsAndTransactions(scope_TransfersPresentationController.accDetHomeAcc);
                } else var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
                accountMod.presentationController.fetchAccountTransactions(scope_TransfersPresentationController.accDetHomeAcc);
            }
        }
    };
    Transfer_PresentationController.prototype.setFromAccountsForTransactions = function(selectedfromacc) {
        var formatUtil = applicationManager.getFormatUtilManager();
        var trasMan = applicationManager.getTransactionManager();
        trasMan.setTransactionAttribute("fromAccountNumber", selectedfromacc.accountID);
        trasMan.setTransactionAttribute("fromAccountName", selectedfromacc.accountName);
        trasMan.setTransactionAttribute("fromAccountType", selectedfromacc.accountType);
        trasMan.setTransactionAttribute("fromBankName", selectedfromacc.bankName);
        if (selectedfromacc.fromAccountCurrency) {
            trasMan.setTransactionAttribute("transactionCurrency", selectedfromacc.fromAccountCurrency);
            trasMan.setTransactionAttribute("fromAccountCurrency", selectedfromacc.fromAccountCurrency);
        } else {
            trasMan.setTransactionAttribute("transactionCurrency", selectedfromacc.currencyCode);
            trasMan.setTransactionAttribute("fromAccountCurrency", selectedfromacc.currencyCode);
        }
    };
    Transfer_PresentationController.prototype.setTransactionObject = function(transactionData) {
        var formatUtil = applicationManager.getFormatUtilManager();
        var transactionObj = applicationManager.getTransactionManager();
        if (transactionData.transactionId !== undefined && transactionData.transactionId !== null) {
            transactionObj.setTransactionprimaryAttribute({
                "transactionId": transactionData.transactionId
            });
        }
        if (transactionData.amount !== undefined && transactionData.amount !== null) {
            var amount = formatUtil.deFormatAmount(transactionData.amount);
            transactionObj.setTransactionAttribute("amount", amount);
        }
        if (transactionData.frequencyType !== undefined && transactionData.frequencyType !== null) {
            transactionObj.setTransactionAttribute("frequencyType", transactionData.frequencyType);
        }
        if (transactionData.isScheduled !== undefined && transactionData.isScheduled !== null) {
            if (transactionData.isScheduled === "true") transactionObj.setTransactionAttribute("isScheduled", "1");
            else transactionObj.setTransactionAttribute("isScheduled", "0");
        }
        if (transactionData.fromAccountNumber !== undefined && transactionData.fromAccountNumber !== null) {
            transactionObj.setTransactionAttribute("fromAccountNumber", transactionData.fromAccountNumber);
        }
        //   if(transactionData.toAccountNumber!==undefined && transactionData.toAccountNumber!==null)
        if (transactionData.ExternalAccountNumber !== undefined && transactionData.ExternalAccountNumber !== null) {
            transactionObj.setTransactionAttribute("toAccountNumber", transactionData.ExternalAccountNumber);
        }
        if (transactionData.toAccountNumber !== undefined && transactionData.toAccountNumber !== null) {
            transactionObj.setTransactionAttribute("toAccountNumber", transactionData.toAccountNumber);
        }
        if (transactionData.toAccountName !== undefined && transactionData.toAccountName !== null) {
            transactionObj.setTransactionAttribute("toAccountName", transactionData.toAccountName);
        }
        if (transactionData.frequencyStartDate !== undefined && transactionData.frequencyStartDate !== null) {
            //var startdate=formatUtil.getDateObjectfromString(transactionData.frequencyStartDate,"YYYY-MM-DD");
            //var startDate= formatUtil.getFormatedDateString(startdate,formatUtil.APPLICATION_DATE_FORMAT);
            transactionObj.setTransactionAttribute("frequencyStartDate", transactionData.frequencyStartDate);
        }
        if (transactionData.frequencyEndDate !== undefined && transactionData.frequencyEndDate !== null) {
            // var enddate=formatUtil.getDateObjectfromString(transactionData.frequencyEndDate,"YYYY-MM-DD");
            //var endDate=formatUtil.getFormatedDateString(enddate,formatUtil.APPLICATION_DATE_FORMAT);
            transactionObj.setTransactionAttribute("frequencyEndDate", transactionData.frequencyEndDate);
        }
        if (transactionData.scheduledDate !== undefined && transactionData.scheduledDate !== null) {
            //var sheduleddate=formatUtil.getDateObjectfromString(transactionData.scheduledDate,"YYYY-MM-DD");
            //var sheduledDate=formatUtil.getFormatedDateString(sheduleddate,formatUtil.APPLICATION_DATE_FORMAT);
            transactionObj.setTransactionAttribute("scheduledDate", transactionData.scheduledDate);
        }
        if (transactionData.numberOfRecurrences !== undefined && transactionData.numberOfRecurrences !== null) {
            transactionObj.setTransactionAttribute("numberOfRecurrences", transactionData.numberOfRecurrences);
        }
        if (transactionData.fromAccountName !== undefined && transactionData.fromAccountName !== null) {
            transactionObj.setTransactionAttribute("fromAccountName", transactionData.fromAccountName);
        }
        if (transactionData.transactionType !== undefined && transactionData.transactionType !== null) {
            transactionObj.setTransactionAttribute("transactionType", transactionData.transactionType);
        }
        if (transactionData.fromAccountType !== undefined && transactionData.fromAccountType !== null) {
            transactionObj.setTransactionAttribute("fromAccountType", transactionData.fromAccountType);
        }
        if (transactionData.toAccountType !== undefined && transactionData.toAccountType !== null) {
            transactionObj.setTransactionAttribute("toAccountType", transactionData.toAccountType);
        }
        if (transactionData.transactionsNotes !== undefined && transactionData.transactionsNotes !== null) {
            transactionObj.setTransactionAttribute("transactionsNotes", transactionData.transactionsNotes);
        }
        if (transactionData.serviceName !== undefined && transactionData.serviceName !== null) {
            transactionObj.setTransactionAttribute("serviceName", transactionData.serviceName);
        }
        if (transactionData.fromAccountCurrency !== undefined && transactionData.fromAccountCurrency !== null) {
            transactionObj.setTransactionAttribute("fromAccountCurrency", transactionData.fromAccountCurrency);
        }
        if (transactionData.toAccountCurrency !== undefined && transactionData.toAccountCurrency !== null) {
            transactionObj.setTransactionAttribute("toAccountCurrency", transactionData.toAccountCurrency);
        }
        var transMode = scope_TransfersPresentationController.getTypeByAction(transactionData.serviceName);
        scope_TransfersPresentationController.transactionMode = transMode;
        var action = transactionData.serviceName;
        if (action) {
            var accMan = applicationManager.getAccountManager();
            var data = accMan.getInternalAccountByID(transactionData.fromAccountNumber);
            var configManager = applicationManager.getConfigurationManager();
            scope_TransfersPresentationController.numberOfAsync = 2;
            scope_TransfersPresentationController.asyncManager.initiateAsyncProcess(scope_TransfersPresentationController.numberOfAsync);
            scope_TransfersPresentationController.isNavigated = false;
            accMan.fetchInternalAccounts(scope_TransfersPresentationController.fromAccountPresentationSuccessCallBack, scope_TransfersPresentationController.fromAccountPresentationErrorCallBack);
            configManager.fetchLimitsForAnAction(action, scope_TransfersPresentationController.fetchLimitsAndFromAccSuccess, scope_TransfersPresentationController.fetchLimitsAsyncError);
        } else scope_TransfersPresentationController.showPreferredAccount();
    };
    Transfer_PresentationController.prototype.setFlowType = function(type) {
        var recipientsManager = applicationManager.getRecipientsManager();
        recipientsManager.setFlowType(type);
    };
    Transfer_PresentationController.prototype.getFlowType = function() {
        var recipientsManager = applicationManager.getRecipientsManager();
        return recipientsManager.getFlowType();
    };
    Transfer_PresentationController.prototype.getAllInternalBankBenificiaries = function() {
        var recipientsManager = applicationManager.getRecipientsManager();
        return recipientsManager.getAllInternalBenificiaries().ExternalAccounts;
    };
    Transfer_PresentationController.prototype.getAllExternalBankBenificiaries = function() {
        var recipientsManager = applicationManager.getRecipientsManager();
        return recipientsManager.getAllExternalBenificiaries().ExternalAccounts;
    };
    Transfer_PresentationController.prototype.clearBenificiaryData = function() {
        scope_TransfersPresentationController.clearBuilderNonGeneratedAttributes();
        var recipientsManager = applicationManager.getRecipientsManager();
        return recipientsManager.clearBeneficiaryObject();
    };
    Transfer_PresentationController.prototype.getBenificiaryData = function() {
        var recipientsManager = applicationManager.getRecipientsManager();
        return recipientsManager.getBenificiaryData();
    };
    Transfer_PresentationController.prototype.setIsSameBankBenificiary = function(value) {
        var recipientsManager = applicationManager.getRecipientsManager();
        recipientsManager.setIsSameBankBenificiary(value);
    };
    Transfer_PresentationController.prototype.setTransferToInfo = function() {
        var transactionManager = applicationManager.getTransactionManager();
        transactionManager.clearTransferObject();
        var navManager = applicationManager.getNavigationManager();
        var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var benificiaryDetails = transferModPresentationController.getBenificiaryData();
        var transferDetails = {};
        transferDetails.selectedAccountData = benificiaryDetails;
        var transMan = applicationManager.getTransactionManager();
        transMan.setTransactionAttribute("toAccountNumber", benificiaryDetails["accountNumber"]);
        scope_TransfersPresentationController.setToBankName(benificiaryDetails["bankName"]);
        transMan.setTransactionAttribute("toAccountName", benificiaryDetails["nickName"]);
        transMan.setTransactionAttribute("toAccountType", benificiaryDetails["accountType"]);
        transMan.setTransactionAttribute("transactionType", "ExternalTransfer");
        transMan.setTransactionAttribute("isBusiness", benificiaryDetails["isBusinessPayee"]);
        navManager.setCustomInfo("frmTransfersToAccount", transferDetails);
        var transModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transModPresentationController.navAfterToAcc();
    };
    Transfer_PresentationController.prototype.getBankName = function() {
        var configMan = applicationManager.getConfigurationManager();
        return configMan.getBankName();
    };
    /** fetches Bank Details For InternationalTransfer
     * @param {String} swiftCode swift code
     * @param {String} serviceName  service name
     */
    Transfer_PresentationController.prototype.fetchBankDetailsForInternationalTransfer = function(swiftCode, serviceName) {
        var params = {
            "swiftCode": swiftCode,
            "serviceName": serviceName
        }
        var accountsManager = applicationManager.getAccountManager();
        accountsManager.fetchBankDetails(params, this.fetchBankDetailsForInternationalTransferSuccess.bind(this), this.fetchBankDetailsForInternationalTransferFailure.bind(this))
    };
    /** Gives Details of the bank for international transfer
     * @param {object} response Success response of bank details
     */
    Transfer_PresentationController.prototype.fetchBankDetailsForInternationalTransferSuccess = function(response) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var currentForm = kony.application.getCurrentForm().id;
        var controller = applicationManager.getPresentationUtility().getController(currentForm, true);
        controller.validateSwiftcode(response.bankName);
    };
    /** Failure callback when fetching of bank details for international transfer fails
     */
    Transfer_PresentationController.prototype.fetchBankDetailsForInternationalTransferFailure = function(err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (err["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
        } else {
            var controller = applicationManager.getPresentationUtility().getController('frmBenSwiftCode', true);
            controller.bindGenericError(err.errorMessage);
        }
    };
    Transfer_PresentationController.prototype.transfersModule = function() {
        //var transModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        // transModPresentationController.showFromAccounts();
        var transactionManager = applicationManager.getTransactionManager();
        transactionManager.clearTransferObject();
        scope_TransfersPresentationController.clearBuilderNonGeneratedAttributes();
        var navMan = applicationManager.getNavigationManager();
        navMan.setCustomInfo("frmTransfersDuration", {});
        navMan.setEntryPoint("makeatransfer", "frmTransfers");
        navMan.navigateTo("frmTransactionMode");
    };
    Transfer_PresentationController.prototype.repeatTransfer = function(transactionData) {
        var formatUtil = applicationManager.getFormatUtilManager();
        var transactionObj = applicationManager.getTransactionManager();
        if (transactionData.amount !== undefined && transactionData.amount !== null) {
            var amount = transactionData.amount;
            if (transactionData.amount.indexOf("-") != -1) {
                amount = transactionData.amount.split("-")[1];
            }
            amount = formatUtil.deFormatAmount(amount);
            transactionObj.setTransactionAttribute("amount", amount);
        }
        if (transactionData.frequencyType !== undefined && transactionData.frequencyType !== null) {
            transactionObj.setTransactionAttribute("frequencyType", transactionData.frequencyType);
        }
        if (transactionData.isScheduled !== undefined && transactionData.isScheduled !== null) {
            if (transactionData.isScheduled === "true") transactionObj.setTransactionAttribute("isScheduled", "1");
            else transactionObj.setTransactionAttribute("isScheduled", "0");
        }
        if (transactionData.fromAccountNumber !== undefined && transactionData.fromAccountNumber !== null) {
            transactionObj.setTransactionAttribute("fromAccountNumber", transactionData.fromAccountNumber);
        }
        if (transactionData.toAccountType !== undefined && transactionData.toAccountType !== null) {
            transactionObj.setTransactionAttribute("toAccountType", transactionData.toAccountType);
        }
        if (transactionData.toAccountNumber !== undefined && transactionData.toAccountNumber !== null) {
            transactionObj.setTransactionAttribute("toAccountNumber", transactionData.toAccountNumber);
        }
        if (transactionData.ExternalAccountNumber !== undefined && transactionData.ExternalAccountNumber !== null) {
            transactionObj.setTransactionAttribute("toAccountNumber", transactionData.ExternalAccountNumber);
        }
        if (transactionData.toAccountName !== undefined && transactionData.toAccountName !== null) {
            transactionObj.setTransactionAttribute("toAccountName", transactionData.toAccountName);
        }
        if (transactionData.frequencyStartDate !== undefined && transactionData.frequencyStartDate !== null) {
            var startdate = formatUtil.getDateObjectfromString(transactionData.frequencyStartDate, "YYYY-MM-DD");
            var startDate = formatUtil.getFormatedDateString(startdate, formatUtil.getApplicationDateFormat());
            transactionObj.setTransactionAttribute("frequencyStartDate", startDate);
        }
        if (transactionData.frequencyEndDate !== undefined && transactionData.frequencyEndDate !== null) {
            var enddate = formatUtil.getDateObjectfromString(transactionData.frequencyEndDate, "YYYY-MM-DD");
            var endDate = formatUtil.getFormatedDateString(enddate, formatUtil.getApplicationDateFormat());
            transactionObj.setTransactionAttribute("frequencyEndDate", endDate);
        }
        if (transactionData.scheduledDate !== undefined && transactionData.scheduledDate !== null) {
            transactionObj.setTransactionAttribute("scheduledDate", transactionData.scheduledDate);
        }
        if (transactionData.numberOfRecurrences !== undefined && transactionData.numberOfRecurrences !== null) {
            transactionObj.setTransactionAttribute("numberOfRecurrences", transactionData.numberOfRecurrences);
        }
        if (transactionData.fromAccountName !== undefined && transactionData.fromAccountName !== null) {
            transactionObj.setTransactionAttribute("fromAccountName", transactionData.fromAccountName);
        }
        if (transactionData.transactionType !== undefined && transactionData.transactionType !== null) {
            transactionObj.setTransactionAttribute("transactionType", transactionData.transactionType);
        }
        if (transactionData.fromAccountType !== undefined && transactionData.fromAccountType !== null) {
            transactionObj.setTransactionAttribute("fromAccountType", transactionData.fromAccountType);
        }
        if (transactionData.serviceName !== undefined && transactionData.serviceName !== null) {
            transactionObj.setTransactionAttribute("serviceName", transactionData.serviceName);
        }
        if (transactionData.fromAccountCurrency !== undefined && transactionData.fromAccountCurrency !== null) {
            transactionObj.setTransactionAttribute("fromAccountCurrency", transactionData.fromAccountCurrency);
        }
        if (transactionData.toAccountCurrency !== undefined && transactionData.toAccountCurrency !== null) {
            transactionObj.setTransactionAttribute("toAccountCurrency", transactionData.toAccountCurrency);
        }
        var transMode = scope_TransfersPresentationController.getTypeByAction(transactionData.serviceName);
        scope_TransfersPresentationController.transactionMode = transMode;
        var action = transactionData.serviceName;
        if (action) {
            scope_TransfersPresentationController.numberOfAsync = 2;
            var accMan = applicationManager.getAccountManager();
            var configManager = applicationManager.getConfigurationManager();
            scope_TransfersPresentationController.asyncManager.initiateAsyncProcess(scope_TransfersPresentationController.numberOfAsync);
            scope_TransfersPresentationController.isNavigated = false;
            accMan.fetchInternalAccounts(scope_TransfersPresentationController.fromAccountPresentationSuccessCallBack, scope_TransfersPresentationController.fromAccountPresentationErrorCallBack);
            configManager.fetchLimitsForAnAction(action, scope_TransfersPresentationController.fetchLimitsAndFromAccSuccess, scope_TransfersPresentationController.fetchLimitsAsyncError);
        }
        // scope_TransfersPresentationController.showPreferredAccount();
    };
    Transfer_PresentationController.prototype.fetchLimitsAndFromAccSuccess = function(res) {
        scope_TransfersPresentationController.limitsData = res;
        scope_TransfersPresentationController.asyncManager.setSuccessStatus(1, res);
        if (scope_TransfersPresentationController.asyncManager.areAllMandatoryservicesDone(scope_TransfersPresentationController.numberOfAsync, [1]) && !scope_TransfersPresentationController.isNavigated) {
            var accNav = applicationManager.getAccountManager();
            var frmacc = accNav.getFromTransferSupportedAccounts();
            var navMan = applicationManager.getNavigationManager();
            navMan.setCustomInfo("frmTransfersFromAccount", {
                "fromaccounts": frmacc
            });
            scope_TransfersPresentationController.isNavigated = true;
            navMan.navigateTo("frmTransferAmount");
        }
    };
    Transfer_PresentationController.prototype.fromAccountPresentationSuccessCallBack = function(res) {
        scope_TransfersPresentationController.asyncManager.setSuccessStatus(0, res);
        if (scope_TransfersPresentationController.asyncManager.areAllMandatoryservicesDone(scope_TransfersPresentationController.numberOfAsync, [1]) && !scope_TransfersPresentationController.isNavigated) {
            var accNav = applicationManager.getAccountManager();
            var frmacc = accNav.getFromTransferSupportedAccounts();
            var navMan = applicationManager.getNavigationManager();
            navMan.setCustomInfo("frmTransfersFromAccount", {
                "fromaccounts": frmacc
            });
            scope_TransfersPresentationController.isNavigated = true;
            navMan.navigateTo("frmTransferAmount");
        }
    };
    Transfer_PresentationController.prototype.fromAccountPresentationErrorCallBack = function(resTransPostErr) {
        scope_TransfersPresentationController.asyncManager.setErrorStatus(0, resTransPostErr);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (resTransPostErr["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", resTransPostErr);
        }
    };
    Transfer_PresentationController.prototype.fetchLimitsAsyncError = function(error) {
        scope_TransfersPresentationController.asyncManager.setErrorStatus(1, error);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (scope_TransfersPresentationController.asyncManager.areAllMandatoryservicesDone(scope_TransfersPresentationController.numberOfAsync, [1]) && !scope_TransfersPresentationController.isNavigated) {
            var accNav = applicationManager.getAccountManager();
            var frmacc = accNav.getFromTransferSupportedAccounts();
            var navMan = applicationManager.getNavigationManager();
            navMan.setCustomInfo("frmTransfersFromAccount", {
                "fromaccounts": frmacc
            });
            scope_TransfersPresentationController.isNavigated = true;
            navMan.navigateTo("frmTransferAmount");
        }
        kony.print("error in fetchLimitsAsyncError");
    };
    Transfer_PresentationController.prototype.deleteTransaction = function(data) {
        var transactionObj = applicationManager.getTransactionManager().getTransactionObject();
        var transactionType = transactionObj.transactionType;
        var criteria = {
            "transactionId": data.transactionId
        };
        var transactionObj = applicationManager.getTransactionManager();
        //  transactionObj.deleteTransaction(criteria, scope_TransfersPresentationController.deleteSuccess, scope_TransfersPresentationController.deleteError);
        switch (scope_TransfersPresentationController.transactionMode) {
            case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts"):
                transactionObj.cancelTransferToOwnAccounts(criteria, scope_TransfersPresentationController.deleteSuccess, scope_TransfersPresentationController.deleteError);
                break;
            case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.OtherKonyBankMembers"):
                transactionObj.cancelIntraBankAccFundTransfer(criteria, scope_TransfersPresentationController.deleteSuccess, scope_TransfersPresentationController.deleteError);
                break;
            case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.OtherBankAccounts"):
                transactionObj.cancelInterBankAccFundTransfer(criteria, scope_TransfersPresentationController.deleteSuccess, scope_TransfersPresentationController.deleteError);
                break;
            case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.InternationalTransfer"):
                transactionObj.cancelInternationalAccFundTransfer(criteria, scope_TransfersPresentationController.deleteSuccess, scope_TransfersPresentationController.deleteError);
                break;
        }
    };
    Transfer_PresentationController.prototype.deleteRecurrenceTransaction = function(data) {
        var criteria = {
            "transactionId": data.transactionId
        };
        var transactionManager = applicationManager.getTransactionManager();
        //  transactionObj.deleteRecurrenceTransaction(criteria, scope_TransfersPresentationController.deleteSuccess, scope_TransfersPresentationController.deleteError);
        switch (scope_TransfersPresentationController.transactionMode) {
            case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts"):
                transactionManager.cancelOccurrenceTransferToOwnAccounts(criteria, scope_TransfersPresentationController.deleteSuccess, scope_TransfersPresentationController.deleteError);
                break;
            case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.OtherKonyBankMembers"):
                transactionManager.cancelOccurrenceIntraBankAccFundTransfer(criteria, scope_TransfersPresentationController.deleteSuccess, scope_TransfersPresentationController.deleteError);
                break;
            case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.OtherBankAccounts"):
                transactionManager.cancelOccurrenceInterBankAccFundTransfer(criteria, scope_TransfersPresentationController.deleteSuccess, scope_TransfersPresentationController.deleteError);
                break;
            case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.InternationalTransfer"):
                transactionManager.cancelOccurrenceInternationalAccFundTransfer(criteria, scope_TransfersPresentationController.deleteSuccess, scope_TransfersPresentationController.deleteError);
                break;
        }
    };
    Transfer_PresentationController.prototype.deleteSuccess = function(res) {
        //alert(JSON.stringify(res));
        var transModPresentationController = applicationManager.getModulesPresentationController("TransactionModule");
        transModPresentationController.getTransactions();
        var navMan = applicationManager.getNavigationManager();
        var data = {};
        data.type = "success";
        data.typeOfTransaction = "delete";
        data.res = res;
        navMan.setCustomInfo("frmTransfers", data);
    };
    Transfer_PresentationController.prototype.deleteError = function(err) {
        //alert(JSON.stringify(err));
        if (err["isServerUnreachable"]) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
        } else {
            var navMan = applicationManager.getNavigationManager();
            var transModPresentationController = applicationManager.getModulesPresentationController("TransactionModule");
            transModPresentationController.getTransactions();
            var data = {};
            data.type = "error";
            data.res = err["errorMessage"];
            navMan.setCustomInfo("frmTransfers", data);
        }
    };
    Transfer_PresentationController.prototype.navigateToTransfers = function(data) {
        var navMan = applicationManager.getNavigationManager();
        var transMan = applicationManager.getTransactionManager();
        scope_TransfersPresentationController.clearBuilderNonGeneratedAttributes();
        transMan.clearTransferObject();
        scope_TransfersPresentationController.accDetHomeAcc = data["accountID"]
        transMan.setTransactionAttribute("toAccountNumber", data["accountID"]);
        scope_TransfersPresentationController.setToBankName(data["bankName"]);
        transMan.setTransactionAttribute("toAccountName", data["nickName"]);
        transMan.setTransactionAttribute("toAccountType", data["accountType"]);
        transMan.setTransactionAttribute("transactionType", "InternalTransfer");
        //alert(transMan.getP2PObject());
        //scope_TransfersPresentationController.showFromAccounts();
        var accMan = applicationManager.getAccountManager();
        var preAccData = accMan.getTransfersPreferredAccount();
        if (preAccData) {
            scope_TransfersPresentationController.setFromAccountsForTransactions(preAccData);
            scope_TransfersPresentationController.showFromAccounts(scope_TransfersPresentationController.fromAccountOnContinuePresentationSuccessCallBack);
            //navMan.navigateTo("frmTransferAmount");
        } else {
            scope_TransfersPresentationController.showFromAccounts(scope_TransfersPresentationController.fromAccountsPresentationSuccessCallBack);
            // navMan.navigateTo("frmTransfersFromAccount");
        }
        //  scope_TransfersPresentationController.showPreferredAccount();
    };
    Transfer_PresentationController.prototype.navigateToTransfersFromDetails = function(data) {
        var navMan = applicationManager.getNavigationManager();
        var transMan = applicationManager.getTransactionManager();
        scope_TransfersPresentationController.clearBuilderNonGeneratedAttributes();
        transMan.clearTransferObject();
        scope_TransfersPresentationController.accDetHomeAcc = data["accountID"]
        transMan.setTransactionAttribute("toAccountNumber", data["accountID"]);
        scope_TransfersPresentationController.setToBankName(data["bankName"]);
        transMan.setTransactionAttribute("toAccountName", data["nickName"]);
        transMan.setTransactionAttribute("toAccountType", data["accountType"]);
        transMan.setTransactionAttribute("transactionType", "InternalTransfer");
        //alert(transMan.getP2PObject());
        //scope_TransfersPresentationController.showFromAccounts();
        var accMan = applicationManager.getAccountManager();
        var preAccData = accMan.getTransfersPreferredAccount();
        scope_TransfersPresentationController.numberOfAsync = 2;
        if (preAccData) {
            var configManager = applicationManager.getConfigurationManager();
            var action = data.serviceName;
            if (action) {
                scope_TransfersPresentationController.setFromAccountsForTransactions(preAccData);
                scope_TransfersPresentationController.asyncManager.initiateAsyncProcess(scope_TransfersPresentationController.numberOfAsync);
                scope_TransfersPresentationController.isNavigated = false;
                accMan.fetchInternalAccounts(scope_TransfersPresentationController.fromAccountOnContinueAsyncPresentationSuccessCallBack, scope_TransfersPresentationController.fetchInternalAccPresentationErrorCallBack);
                configManager.fetchLimitsForAnAction(action, scope_TransfersPresentationController.limitsOnContinueAsyncPresentationSuccessCallBack, scope_TransfersPresentationController.limitsOnContinueAsyncPresentationErrorCallBack);
            } else {
                scope_TransfersPresentationController.setFromAccountsForTransactions(preAccData);
                scope_TransfersPresentationController.showFromAccounts(scope_TransfersPresentationController.fromAccountOnContinuePresentationSuccessCallBack);
            }
            //navMan.navigateTo("frmTransferAmount");
        } else {
            var configManager = applicationManager.getConfigurationManager();
            var action = data.serviceName;
            if (action) {
                scope_TransfersPresentationController.asyncManager.initiateAsyncProcess(scope_TransfersPresentationController.numberOfAsync);
                scope_TransfersPresentationController.isNavigated = false;
                accMan.fetchInternalAccounts(scope_TransfersPresentationController.fromAccountsAsyncPresentationSuccessCallBack, scope_TransfersPresentationController.fetchInternalAccPresentationErrorCallBack);
                configManager.fetchLimitsForAnAction(action, scope_TransfersPresentationController.limitsAsyncPresentationSuccessCallBack, scope_TransfersPresentationController.limitsAsyncPresentationErrorCallBack);
            } else scope_TransfersPresentationController.showFromAccounts(scope_TransfersPresentationController.fromAccountsPresentationSuccessCallBack);
            // navMan.navigateTo("frmTransfersFromAccount");
        }
        //  scope_TransfersPresentationController.showPreferredAccount();
    };
    Transfer_PresentationController.prototype.fromAccountOnContinueAsyncPresentationSuccessCallBack = function(res) {
        scope_TransfersPresentationController.asyncManager.setSuccessStatus(0, res);
        if (scope_TransfersPresentationController.asyncManager.areAllMandatoryservicesDone(scope_TransfersPresentationController.numberOfAsync, [1]) && !scope_TransfersPresentationController.isNavigated) {
            var accNav = applicationManager.getAccountManager();
            var frmacc = accNav.getFromTransferSupportedAccounts();
            var navMan = applicationManager.getNavigationManager();
            navMan.setCustomInfo("frmTransfersFromAccount", {
                "fromaccounts": frmacc
            });
            scope_TransfersPresentationController.isNavigated = true;
            navMan.navigateTo("frmTransferAmount");
        }
    };
    Transfer_PresentationController.prototype.limitsOnContinueAsyncPresentationSuccessCallBack = function(res) {
        scope_TransfersPresentationController.limitsData = res;
        scope_TransfersPresentationController.asyncManager.setSuccessStatus(1, res);
        if (scope_TransfersPresentationController.asyncManager.areAllMandatoryservicesDone(scope_TransfersPresentationController.numberOfAsync, [1]) && !scope_TransfersPresentationController.isNavigated) {
            var accNav = applicationManager.getAccountManager();
            var frmacc = accNav.getFromTransferSupportedAccounts();
            var navMan = applicationManager.getNavigationManager();
            navMan.setCustomInfo("frmTransfersFromAccount", {
                "fromaccounts": frmacc
            });
            scope_TransfersPresentationController.isNavigated = true;
            navMan.navigateTo("frmTransferAmount");
        }
    };
    Transfer_PresentationController.prototype.limitsOnContinueAsyncPresentationErrorCallBack = function(error) {
        scope_TransfersPresentationController.asyncManager.setErrorStatus(1, error);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (scope_TransfersPresentationController.asyncManager.areAllMandatoryservicesDone(scope_TransfersPresentationController.numberOfAsync, [1]) && !scope_TransfersPresentationController.isNavigated) {
            var accNav = applicationManager.getAccountManager();
            var frmacc = accNav.getFromTransferSupportedAccounts();
            var navMan = applicationManager.getNavigationManager();
            navMan.setCustomInfo("frmTransfersFromAccount", {
                "fromaccounts": frmacc
            });
            scope_TransfersPresentationController.isNavigated = true;
            navMan.navigateTo("frmTransferAmount");
        }
        kony.print("error in limitsOnContinueAsyncPresentationErrorCallBack");
    };
    Transfer_PresentationController.prototype.fromAccountsAsyncPresentationSuccessCallBack = function(res) {
        scope_TransfersPresentationController.asyncManager.setSuccessStatus(0, res);
        if (scope_TransfersPresentationController.asyncManager.areAllMandatoryservicesDone(scope_TransfersPresentationController.numberOfAsync, [1]) && !scope_TransfersPresentationController.isNavigated) {
            var accNav = applicationManager.getAccountManager();
            var frmacc = accNav.getFromTransferSupportedAccounts();
            var navMan = applicationManager.getNavigationManager();
            navMan.setCustomInfo("frmTransfersFromAccount", {
                "fromaccounts": frmacc
            });
            scope_TransfersPresentationController.isNavigated = true;
            navMan.navigateTo("frmTransfersFromAccount");
        }
    };
    Transfer_PresentationController.prototype.limitsAsyncPresentationErrorCallBack = function(error) {
        scope_TransfersPresentationController.asyncManager.setErrorStatus(1, error);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (scope_TransfersPresentationController.asyncManager.areAllMandatoryservicesDone(scope_TransfersPresentationController.numberOfAsync, [1]) && !scope_TransfersPresentationController.isNavigated) {
            scope_TransfersPresentationController.isNavigated = true;
            var accNav = applicationManager.getAccountManager();
            var frmacc = accNav.getFromTransferSupportedAccounts();
            var navMan = applicationManager.getNavigationManager();
            navMan.setCustomInfo("frmTransfersFromAccount", {
                "fromaccounts": frmacc
            });
            navMan.navigateTo("frmTransfersFromAccount");
        }
        kony.print("error in limitsAsyncPresentationErrorCallBack");
    };
    Transfer_PresentationController.prototype.limitsAsyncPresentationSuccessCallBack = function(res) {
        scope_TransfersPresentationController.limitsData = res;
        scope_TransfersPresentationController.asyncManager.setSuccessStatus(1, res);
        if (scope_TransfersPresentationController.asyncManager.areAllMandatoryservicesDone(scope_TransfersPresentationController.numberOfAsync, [1]) && !scope_TransfersPresentationController.isNavigated) {
            var accNav = applicationManager.getAccountManager();
            var frmacc = accNav.getFromTransferSupportedAccounts();
            var navMan = applicationManager.getNavigationManager();
            navMan.setCustomInfo("frmTransfersFromAccount", {
                "fromaccounts": frmacc
            });
            scope_TransfersPresentationController.isNavigated = true;
            navMan.navigateTo("frmTransfersFromAccount");
        }
    };
    Transfer_PresentationController.prototype.fetchInternalAccPresentationErrorCallBack = function(error) {
        scope_TransfersPresentationController.asyncManager.setErrorStatus(0, error);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (error["isServerUnreachable"]) applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", error);
        else kony.print("error in fetchInternalAccPresentationErrorCallBack");
    };
    Transfer_PresentationController.prototype.navigateToTransfersChecking = function(data) {
        scope_TransfersPresentationController.clearBuilderNonGeneratedAttributes();
        var transMan = applicationManager.getTransactionManager();
        transMan.clearTransferObject();
        scope_TransfersPresentationController.accDetHomeAcc = data["accountID"];
        var navMan = applicationManager.getNavigationManager();
        navMan.setCustomInfo("frmTransfersDuration", {});
        navMan.navigateTo("frmTransactionMode");
        scope_TransfersPresentationController.setFromAccountsForTransactions(data);
    };
    Transfer_PresentationController.prototype.fetchInternationalRecepients = function() {
        var recipientsManager = applicationManager.getRecipientsManager();
        recipientsManager.fetchInternationalRecepients(scope_TransfersPresentationController.fetchInternationalRecepientsPresentationSuccess, scope_TransfersPresentationController.fetchInternationalRecepientsPresentationError);
    };
    Transfer_PresentationController.prototype.fetchInternationalRecepientsPresentationSuccess = function() {
        if (scope_TransfersPresentationController.isAcknowledgmentFlow == true) {
            scope_TransfersPresentationController.isAcknowledgmentFlow = false;
            //       var navMan=applicationManager.getNavigationManager();
            //       navMan.setCustomInfo("frmAcknowledgment",scope_TransfersPresentationController.navData);
            //       navMan.setEntryPoint("acknowledgment","frmTransfers");
            scope_TransfersPresentationController.commonFunctionForNavigation("frmAcknowledgement");
        } else scope_TransfersPresentationController.commonFunctionForNavigation("frmManageRecipientList");
    };
    Transfer_PresentationController.prototype.fetchInternationalRecepientsPresentationError = function(error) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (error["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", error);
        }
    };
    Transfer_PresentationController.prototype.navigateToEnterBenificiaryAccountNumberFromSwiftCode = function(swiftCode, bankName) {
        var recipientsManager = applicationManager.getRecipientsManager();
        scope_TransfersPresentationController.setSwiftCode(swiftCode);
        scope_TransfersPresentationController.setBankNameFromResponse(bankName);
        scope_TransfersPresentationController.commonFunctionForNavigation("frmEnterBenAccNumorIBAN");
        // scope_TransfersPresentationController.commonFunctionForNavigation("frmEnterBenAccNo");
    };
    Transfer_PresentationController.prototype.navigateToEnterSwiftCode = function(countryName) {
        var recipientsManager = applicationManager.getRecipientsManager();
        scope_TransfersPresentationController.setCountryName(countryName);
        scope_TransfersPresentationController.commonFunctionForNavigation("frmBenSwiftCode");
    };
    Transfer_PresentationController.prototype.createInternationalBenificiary = function() {
        var navMan = applicationManager.getNavigationManager();
        var recipientsManager = applicationManager.getRecipientsManager();
        var benificiaryData = scope_TransfersPresentationController.getBenificiaryData();
        //benificiaryData.accountType = "Savings"; //Temp addition, because mobile doesn't have UI for selecting account type
        var configManager = applicationManager.getConfigurationManager();
        if (configManager.isSMEUser === "true" || configManager.isMBBUser === "true") {
            benificiaryData.isBusinessPayee = "1";
        }
        recipientsManager.createABenificiary(benificiaryData, scope_TransfersPresentationController.createInternationalBenificiaryPresentationSuccess, scope_TransfersPresentationController.createInternationalBenificiaryPresentationError);
    };
    Transfer_PresentationController.prototype.createInternationalBenificiaryPresentationSuccess = function(succResponse) {
        scope_TransfersPresentationController.internationalBenificiaryAdded = true;
        scope_TransfersPresentationController.isAcknowledgmentFlow = true;
        var navMan = applicationManager.getNavigationManager();
        var accntType = navMan.getCustomInfo("frmTransfersToAccount");
        var maskedAccountNumber = applicationManager.getDataProcessorUtility().maskAccountNumber(succResponse.selectedAccountData["accountNumber"]);
        scope_TransfersPresentationController.navData = {};
        scope_TransfersPresentationController.navData["Reference ID"] = succResponse["Id"];
        scope_TransfersPresentationController.navData["Bank Name"] = succResponse.selectedAccountData["bankName"];
        scope_TransfersPresentationController.navData["Account Number"] = maskedAccountNumber;
        //scope_TransfersPresentationController.navData["Account Type"] = succResponse.selectedAccountData["accountType"];
        scope_TransfersPresentationController.navData["Recipient Name"] = succResponse.selectedAccountData["beneficiaryName"];
        scope_TransfersPresentationController.navData["Nick Name"] = succResponse.selectedAccountData["nickName"];
        scope_TransfersPresentationController.navData["Linked with"] = succResponse.selectedAccountData["totalContractCustomerSelected"] + " Customers ID";
        var navMan = applicationManager.getNavigationManager();
        navMan.setCustomInfo("frmAcknowledgment", scope_TransfersPresentationController.navData);
        navMan.setEntryPoint("acknowledgment", "frmTransfers");
        if (scope_TransfersPresentationController.getFlowType() === "InternationalTransferCreateTransfer") {
            navMan.setCustomInfo("frmTransfersToAccount", succResponse);
            scope_TransfersPresentationController.navAfterToAcc()
        }
        if (scope_TransfersPresentationController.getFlowType() === "InternationalRecipients") {
            scope_TransfersPresentationController.fetchInternationalRecepients();
        }
    };
    Transfer_PresentationController.prototype.createInternationalBenificiaryPresentationError = function(err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (err["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
        } else {
            // var controller = applicationManager.getPresentationUtility().getController('frmBenVerifyDetails', true);
            //controller.bindGenericError(err.errorMessage);
            var navMan = applicationManager.getNavigationManager();
            navMan.setCustomInfo("frmAcknowledgment", {
                "error": err.errorMessage
            });
            scope_TransfersPresentationController.isAcknowledgmentFlow = false;
            navMan.setEntryPoint("acknowledgment", "frmTransfers");
            scope_TransfersPresentationController.commonFunctionForNavigation("frmAcknowledgement");
        }
    };
    Transfer_PresentationController.prototype.getAllInternationalBenificiaries = function(err) {
        var recipientManager = applicationManager.getRecipientsManager();
        return recipientManager.getAllInternationalBenificiaries().ExternalAccounts;
    }
    Transfer_PresentationController.prototype.navigateToTransfersRecipientDetails = function(data) {
        var recipientsManager = applicationManager.getRecipientsManager();
        recipientsManager.setBeneficiaryObject(data);
        recipientsManager.setBeneficiaryAttribute("transactionMode", applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.InternationalTransfer"));
        scope_TransfersPresentationController.commonFunctionForNavigation("frmManageTransferRecipientInfo");
    }
    Transfer_PresentationController.prototype.fetchCountriesList = function() {
        var recipientsManager = applicationManager.getRecipientsManager();
        recipientsManager.fetchCountriesList(scope_TransfersPresentationController.fetchCountriesListSuccessCallBack, scope_TransfersPresentationController.fetchCountriesListErrorCallBack);
    };
    Transfer_PresentationController.prototype.fetchCountriesListSuccessCallBack = function(countryList) {
        var navMan = applicationManager.getNavigationManager();
        navMan.setCustomInfo("frmBenCountry", countryList);
        scope_TransfersPresentationController.commonFunctionForNavigation("frmBenCountry");
    };
    Transfer_PresentationController.prototype.fetchCountriesListErrorCallBack = function(err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (err["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
        } else {
            var controller = applicationManager.getPresentationUtility().getController('frmManageRecipientList', true);
            controller.bindGenericError(err.errorMessage);
        }
    };
    Transfer_PresentationController.prototype.isValidAccNumOrIBAN = function(accNum, formName) {
        var validationUtility = applicationManager.getValidationUtilManager();
        var isValidAccountNumber = validationUtility.isValidAccountNumber(accNum);
        var isValidIBAN = validationUtility.isValidIBAN(accNum);
        if (isValidAccountNumber || isValidIBAN) {
            return true;
        } else {
            var controller = applicationManager.getPresentationUtility().getController(formName, true);
            controller.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.InvalidAccountNumberOrIBAN"));
            return false;
        }
    };
    Transfer_PresentationController.prototype.isValidAccNum = function(accNum, formName) {
        var validationUtility = applicationManager.getValidationUtilManager();
        if (validationUtility.isValidAccountNumber(accNum)) {
            return true;
        } else {
            var controller = applicationManager.getPresentationUtility().getController(formName, true);
            controller.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.InvalidAccountNumber"));
            return false;
        }
    };
    Transfer_PresentationController.prototype.isValidSwiftCode = function(swiftCode, formName) {
        var validationUtility = applicationManager.getValidationUtilManager();
        if (validationUtility.isValidSwiftCode(swiftCode)) {
            return true;
        } else {
            var controller = applicationManager.getPresentationUtility().getController(formName, true);
            controller.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.InvalidSwiftCode"));
            return false;
        }
    };
    Transfer_PresentationController.prototype.setBenificiaryDetails = function(benificiaryData) {
        var recipientsManager = applicationManager.getRecipientsManager();
        recipientsManager.setBeneficiaryObject(benificiaryData);
    };
    Transfer_PresentationController.prototype.isEligibleTransferType = function(transferType) {
        var configManager = applicationManager.getConfigurationManager();
        return configManager.getConfigurationValue(transferType);
    };
    Transfer_PresentationController.prototype.evaluateMinMaxAmountLimits = function(amount) {
        var configManager = applicationManager.getConfigurationManager();
        var maxlimit, minlimit;
        switch (scope_TransfersPresentationController.transactionMode) {
            case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts"):
                maxlimit = configManager.getConfigurationValue("maxKonyBankAccountsTransferLimit");
                minlimit = configManager.getConfigurationValue("minKonyBankAccountsTransferLimit");
                break;
            case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.OtherKonyBankMembers"):
                maxlimit = configManager.getConfigurationValue("maxOtherKonyAccountsTransferLimit");
                minlimit = configManager.getConfigurationValue("minOtherKonyAccountsTransferLimit");
                break;
            case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.OtherBankAccounts"):
                maxlimit = configManager.getConfigurationValue("maxOtherBankAccountsTransferLimit");
                minlimit = configManager.getConfigurationValue("minOtherBankAccountsTransferLimit");
                break;
            case applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.InternationalTransfer"):
                maxlimit = configManager.getConfigurationValue("maxInternationalAccountsTransferLimit");
                minlimit = configManager.getConfigurationValue("minInternationalAccountsTransferLimit");
                break;
        }
        if (Number(amount) > Number(maxlimit)) {
            return {
                "max": maxlimit
            };
        }
        if (Number(amount) < Number(minlimit)) {
            return {
                "min": minlimit
            };
        }
        return "valid";
    };
    Transfer_PresentationController.prototype.navToContractDetails = function(recipientName) {
        var recipientsManager = applicationManager.getRecipientsManager();
        if (recipientName !== undefined) {
            recipientsManager.setBeneficiaryAttribute("beneficiaryName", recipientName);
        }
        var flowType = scope_TransfersPresentationController.getFlowType();
        var featureAction = scope_TransfersPresentationController.getFeatureAction(flowType);
        scope_TransfersPresentationController.getContractDetails(featureAction);
    };
    Transfer_PresentationController.prototype.getFeatureAction = function(flowType) {
        var action;
        switch (flowType) {
            case "SameBankRecipients":
            case "OtherKonyBankMembersCreateTransfer":
                action = "INTRA_BANK_FUND_TRANSFER_CREATE_RECEPIENT";
                break;
            case "InternationalRecipients":
            case "InternationalTransferCreateTransfer":
                action = "INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE_RECEPIENT";
                break;
            default:
                action = "INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE_RECEPIENT";
        }
        return action;
    };
    Transfer_PresentationController.prototype.getContractDetails = function(featureAction) {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var recipientsManager = applicationManager.getRecipientsManager();
        recipientsManager.fetchContractDetails(featureAction, scope_TransfersPresentationController.getContractDetailsSuccessCallBack, scope_TransfersPresentationController.getContractDetailsErrorCallback);
    };
    Transfer_PresentationController.prototype.getContractDetailsSuccessCallBack = function(response) {
        var controller = applicationManager.getPresentationUtility().getController('frmContracts', true);
        var flowType = scope_TransfersPresentationController.getFlowType();
        var navMan = applicationManager.getNavigationManager();
        var previousForm = navMan.getEntryPoint("contracts");
        if (response.contracts.length == 0) {
            var controller = applicationManager.getPresentationUtility().getController(previousForm, true);
            controller.bindGenericError("User Doesn't have access to any contracts");
        }
        if (response.contracts.length == 1 && response.contracts[0].contractCustomers.length == 1) {
            if (flowType === "editTransfer") {
                var editController = applicationManager.getPresentationUtility().getController(previousForm, true);
                editController.isEditLinkedCustomerAvailable = false;
            } else {
                var cif = []
                cif.push({
                    "contractId": response.contracts[0].contractId,
                    "coreCustomerId": response.contracts[0].contractCustomers[0].coreCustomerId
                });
                applicationManager.getRecipientsManager().setBeneficiaryAttribute("cif", JSON.stringify(cif));
                applicationManager.getRecipientsManager().setBeneficiaryAttribute("totalContractCustomerSelected", 1);
                scope_TransfersPresentationController.commonFunctionForNavigation("frmBenVerifyDetails");
            }
        } else {
            var controller = applicationManager.getPresentationUtility().getController('frmContracts', true);
            controller.bindContractsData(response);
            if (flowType === "editTransfer") {
                var editController = applicationManager.getPresentationUtility().getController(previousForm, true);
                editController.isEditLinkedCustomerAvailable = true;
            } else {
                scope_TransfersPresentationController.commonFunctionForNavigation("frmContracts");
            }
        }
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    };
    Transfer_PresentationController.prototype.getContractDetailsErrorCallback = function(err) {
        var navMan = applicationManager.getNavigationManager();
        var previousForm = navMan.getEntryPoint("contracts");
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (err["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
        } else {
            var controller = applicationManager.getPresentationUtility().getController(previousForm, true);
            controller.bindGenericError(response.errorMessage);
        }
    };
    Transfer_PresentationController.prototype.getTnCcontent = function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var config = applicationManager.getConfigurationManager();
        var locale = config.getLocale();
        var termsAndConditions = config.getTermsAndConditions();
        var param = {
            "languageCode": termsAndConditions[locale],
            "termsAndConditionsCode": termsAndConditions["WireTransfers_TnC"]
        };
        var termsAndConditions = applicationManager.getTermsAndConditionsManager();
        termsAndConditions.fetchTermsAndConditionsPostLogin(param, scope_TransfersPresentationController.getTermsandConditionsSuccessCallBack, scope_TransfersPresentationController.getTermsandConditionsErrorCallback);
    };
    Transfer_PresentationController.prototype.getTermsandConditionsSuccessCallBack = function(response) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var configManager = applicationManager.getConfigurationManager();
        navManager.setCustomInfo("frmSupportInfo", {
            "richTextData": "<font face='SourceSansPro-Regular'>" + response.termsAndConditionsContent,
            "flowType": "Wire_Transfer",
            "contentTypeID": response.contentTypeId,
            "header": configManager.constants.TERMS
        });
        var info = applicationManager.getNavigationManager().getCustomInfo("frmSupportInfo");
        if (info.contentTypeID == "URL") {
            kony.application.openURL(info.content);
        } else {
            navManager.navigateTo("frmSupportInfo");
        }
    };
    Transfer_PresentationController.prototype.getTermsandConditionsErrorCallback = function(err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (err["isServerUnreachable"]) {
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
        } else {
            var controller = applicationManager.getPresentationUtility().getController('frmWireTransferActivate', true);
            controller.bindGenericError(err.errorMessage);
        }
    };
    return Transfer_PresentationController;
});