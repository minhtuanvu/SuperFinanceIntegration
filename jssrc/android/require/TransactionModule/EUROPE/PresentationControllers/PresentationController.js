define(["AsyncManager/BusinessControllers/BusinessController"], function(AsyncManager) {
    function Transaction_PresentationController() {
        scope_Trans_Pre = this;
        kony.mvc.Presentation.BasePresenter.call(this);
        this.asyncManager = new AsyncManager();
        scope_Trans_Pre.transactionsData = null;
        scope_Trans_Pre.blockedFundsData = null;
        /**   numberOfAsyncForUserTransactions
         *  1.getPendingUserTransactions
         *  2.getPostedUserTransactions
         */
        scope_Trans_Pre.numberOfAsyncForUserTransactions = 2;
        /**   numberOfAsyncForTransactions
         *  1.getPostedTransfersAndP2pTransactions
         *  2.getScheduledTransferAndP2pTransactions
         */
        scope_Trans_Pre.numberOfAsyncForTransactions = 2;
        scope_Trans_Pre.formName = "";
    }
    inheritsFrom(Transaction_PresentationController, kony.mvc.Presentation.BasePresenter);
    Transaction_PresentationController.prototype.setPendPostTransactions = function(response) {
        scope_Trans_Pre.transactionsData = response;
    };
    Transaction_PresentationController.prototype.commonFunctionForNavigation = function(formName) {
        var navManager = applicationManager.getNavigationManager();
        navManager.navigateTo(formName);
    };
    Transaction_PresentationController.prototype.getPendPostTransactions = function() {
        return scope_Trans_Pre.transactionsData;
    };
    Transaction_PresentationController.prototype.setBlockedFundsData = function(response) {
        scope_Trans_Pre.blockedFundsData = response;
    };
    Transaction_PresentationController.prototype.getBlockedFundsData = function() {
        return scope_Trans_Pre.blockedFundsData;
    };
    Transaction_PresentationController.prototype.initializePresentationController = function() {};
    Transaction_PresentationController.prototype.getPendingPostedTransactions = function(searchOptions) {
        scope_Trans_Pre.asyncManager.initiateAsyncProcess(scope_Trans_Pre.numberOfAsyncForUserTransactions);
        scope_Trans_Pre.getPendingTransactions(searchOptions);
        scope_Trans_Pre.getPostedTransactions(searchOptions);
    };
    Transaction_PresentationController.prototype.getPendingTransactions = function(searchOptions) {
        searchOptions.isScheduled = "1";
        var transactionManager = applicationManager.getTransactionManager();
        transactionManager.fetchPendingTransactions(searchOptions, this.getPendingTransactionsPresentationSuccessCallback, this.getPendingTransactionsPresentationErrorCallback);
    };
    Transaction_PresentationController.prototype.getPendingTransactionsPresentationSuccessCallback = function(resSuccess) {
        scope_Trans_Pre.asyncManager.setSuccessStatus(0, resSuccess);
        scope_Trans_Pre.navigateTofrmAdvanceSearchResults();
    };
    Transaction_PresentationController.prototype.getPendingTransactionsPresentationErrorCallback = function(resErr) {
        scope_Trans_Pre.asyncManager.setErrorStatus(0, resErr);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (resErr["isServerUnreachable"]) applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", resErr);
    };
    Transaction_PresentationController.prototype.getPostedTransactions = function(searchOptions) {
        searchOptions.isScheduled = "0";
        var transactionManager = applicationManager.getTransactionManager();
        transactionManager.fetchPostedTransactions(searchOptions, this.getPostedTransactionsPresentationSuccessCallback, this.getPostedTransactionsPresentationErrorCallback);
    };
    Transaction_PresentationController.prototype.getPostedTransactionsPresentationSuccessCallback = function(resSuccess) {
        scope_Trans_Pre.asyncManager.setSuccessStatus(1, resSuccess);
        scope_Trans_Pre.navigateTofrmAdvanceSearchResults();
    };
    Transaction_PresentationController.prototype.getPostedTransactionsPresentationErrorCallback = function(resErr) {
        scope_Trans_Pre.asyncManager.setErrorStatus(1, resErr);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (resErr["isServerUnreachable"]) applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", resErr);
    };
    Transaction_PresentationController.prototype.getBlockedTransactions = function(searchOptions) {
        var transactionManager = applicationManager.getTransactionManager();
        transactionManager.fetchAccountBlockedFunds(searchOptions, this.getBlockedTransactionsPresentationSuccessCallback, this.getBlockedTransactionsPresentationErrorCallback);
    };
    Transaction_PresentationController.prototype.getBlockedTransactionsPresentationSuccessCallback = function(resSuccess) {
        scope_Trans_Pre.navigateToAccountDetails(resSuccess);
    };
    Transaction_PresentationController.prototype.getBlockedTransactionsPresentationErrorCallback = function(resErr) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (resErr["isServerUnreachable"]) applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", resErr);
    };
    Transaction_PresentationController.prototype.navigateToAccountDetails = function(res) {
        if (res != undefined && res != null) {
            var navMan = applicationManager.getNavigationManager();
            var transactionDetails = {};
            transactionDetails.blockedTransactions = res;
            transactionDetails.isSearchResults = true;
            var accountManager = applicationManager.getAccountManager();
            var selectedAccount = navMan.getCustomInfo("frmAccountDetails");
            for (var i = 0; i < transactionDetails.blockedTransactions.length; i++) {
                var forUtility = applicationManager.getFormatUtilManager();
                var fromdateobj = forUtility.getDateObjectfromString(transactionDetails.blockedTransactions[i]["fromDate"], "YYYY-MM-DD");
                var todateobj = forUtility.getDateObjectfromString(transactionDetails.blockedTransactions[i]["toDate"], "YYYY-MM-DD");
                transactionDetails.blockedTransactions[i]["fromDate"] = forUtility.getFormatedDateString(fromdateobj, forUtility.getApplicationDateFormat());
                transactionDetails.blockedTransactions[i]["toDate"] = forUtility.getFormatedDateString(todateobj, forUtility.getApplicationDateFormat());
                transactionDetails.blockedTransactions[i]["lockedAmount"] = forUtility.formatAmountandAppendCurrencySymbol(transactionDetails.blockedTransactions[i]["lockedAmount"]);
                transactionDetails.blockedTransactions[i]["description"] = transactionDetails.blockedTransactions[i]["lockReason"];
                transactionDetails.blockedTransactions[i]["template"] = "flxBlockedFunds";
                transactionDetails.blockedTransactions[i]["transactionType"] = "BlockedFund";
                transactionDetails.blockedTransactions[i]["accountType"] = selectedAccount.selectedAccountData.accountType;
                transactionDetails.blockedTransactions[i]["description"] = transactionDetails.blockedTransactions[i]["lockReason"];
            }
            scope_Trans_Pre.setBlockedFundsData(transactionDetails)
            var currentForm = kony.application.getCurrentForm().id;
            if (currentForm === "frmAdvanceSearch") navMan.navigateTo("frmAccountDetails");
        }
    };
    Transaction_PresentationController.prototype.navigateTofrmAdvanceSearchResults = function(res) {
        if (scope_Trans_Pre.asyncManager.areAllservicesDone(scope_Trans_Pre.numberOfAsyncForUserTransactions)) {
            var navMan = applicationManager.getNavigationManager();
            var transactionDetails = {};
            transactionDetails.pendingTransactions = scope_Trans_Pre.asyncManager.getData(0);
            transactionDetails.postedTransactions = scope_Trans_Pre.asyncManager.getData(1);
            // navMan.setCustomInfo("frmAdvanceSearch",transactionDetails);
            scope_Trans_Pre.setPendPostTransactions(transactionDetails);
            var controller = applicationManager.getPresentationUtility().getController('frmAdvanceSearchResults', true);
            controller.setTransactionData();
            navMan.navigateTo("frmAdvanceSearchResults");
        }
    };
    Transaction_PresentationController.prototype.getCustomRange = function(beginingDate, endDate) {
        if (endDate - beginingDate >= 0) {
            var fotmatUtilManager = applicationManager.getFormatUtilManager();
            var startDate = fotmatUtilManager.getFormatedDateString(beginingDate, fotmatUtilManager.getBackendDateTimeFormat());
            var lastDate = fotmatUtilManager.getFormatedDateString(endDate, fotmatUtilManager.getBackendDateTimeFormat());
            //     var startDate = JSON.stringify(sDate);
            //     var lastDate = JSON.stringify(lDate);
            return {
                "searchStartDate": startDate,
                "searchEndDate": lastDate
            };
        } else {
            return null;
        }
    };
    Transaction_PresentationController.prototype.getDateRange = function(noOfDays) {
        var fotmatUtilManager = applicationManager.getFormatUtilManager();
        var startDate = fotmatUtilManager.getFormatedDateString(fotmatUtilManager.getPreviousDate(noOfDays), fotmatUtilManager.getBackendDateTimeFormat());
        var lastDate = fotmatUtilManager.getFormatedDateString(new Date(), fotmatUtilManager.getBackendDateTimeFormat());
        return {
            "searchStartDate": startDate,
            "searchEndDate": lastDate
        };
    };
    Transaction_PresentationController.prototype.getDateRangeForMonths = function(noOfMonths) {
        var fotmatUtilManager = applicationManager.getFormatUtilManager();
        var d = new Date();
        var month = d.getMonth();
        d.setMonth(d.getMonth() - noOfMonths);
        while (d.getMonth() === month) {
            d.setDate(d.getDate() - 1);
        }
        var startDate = fotmatUtilManager.getFormatedDateString(d, fotmatUtilManager.getBackendDateTimeFormat());
        var lastDate = fotmatUtilManager.getFormatedDateString(new Date(), fotmatUtilManager.getBackendDateTimeFormat());
        return {
            "searchStartDate": startDate,
            "searchEndDate": lastDate
        };
    };
    Transaction_PresentationController.prototype.getTransactions = function(formName) {
        applicationManager.getPresentationUtility().showLoadingScreen();
        scope_Trans_Pre.formName = formName;
        scope_Trans_Pre.asyncManager.initiateAsyncProcess(scope_Trans_Pre.numberOfAsyncForTransactions);
        scope_Trans_Pre.getUserPostedTransactions();
        kony.print("delay");
        scope_Trans_Pre.getUserScheduledTransactions();
    };
    Transaction_PresentationController.prototype.getUserPostedTransactions = function() {
        var transactionManager = applicationManager.getTransactionManager();
        var params = {
            "firstRecordNumber": 0,
            "lastRecordNumber": 100,
            "isScheduled": 0,
            "sortBy": "transactionDate",
            "order": "desc"
        };
        transactionManager.fetchUserpostedTransactions(scope_Trans_Pre.getUserPostedTransactionsSuccessCallback, scope_Trans_Pre.getUserPostedTransactionsErrorCallback, params);
    };
    Transaction_PresentationController.prototype.getUserPostedTransactionsSuccessCallback = function(resSuccess) {
        scope_Trans_Pre.asyncManager.setSuccessStatus(0, resSuccess);
        if (scope_Trans_Pre.asyncManager.areAllservicesDone(scope_Trans_Pre.numberOfAsyncForTransactions)) {
            scope_Trans_Pre.navToTransferLanding();
        }
    };
    Transaction_PresentationController.prototype.getUserPostedTransactionsErrorCallback = function(resErr) {
        scope_Trans_Pre.asyncManager.setErrorStatus(0, resErr);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (resErr["isServerUnreachable"]) applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", resErr);
    };
    Transaction_PresentationController.prototype.getUserScheduledTransactions = function() {
        var transactionManager = applicationManager.getTransactionManager();
        var params = {
            "firstRecordNumber": 0,
            "lastRecordNumber": 100,
            "isScheduled": 1,
            "sortBy": "scheduledDate",
            "order": "desc"
        };
        transactionManager.fetchUserScheduledTransactions(scope_Trans_Pre.getUserScheduledTransactionsSuccessCallback, scope_Trans_Pre.getUserScheduledTransactionsErrorCallback, params);
    };
    Transaction_PresentationController.prototype.getUserScheduledTransactionsSuccessCallback = function(resSuccess) {
        scope_Trans_Pre.asyncManager.setSuccessStatus(1, resSuccess);
        if (scope_Trans_Pre.asyncManager.areAllservicesDone(scope_Trans_Pre.numberOfAsyncForTransactions)) {
            scope_Trans_Pre.navToTransferLanding();
        }
    };
    Transaction_PresentationController.prototype.getUserScheduledTransactionsErrorCallback = function(resErr) {
        scope_Trans_Pre.asyncManager.setErrorStatus(1, resErr);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (resErr["isServerUnreachable"]) applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", resErr);
    };
    Transaction_PresentationController.prototype.navToTransferLanding = function() {
        var navMan = applicationManager.getNavigationManager();
        var formatUtil = applicationManager.getFormatUtilManager();
        var transactions = {};
        if (scope_Trans_Pre.formName) var data = navMan.getCustomInfo(scope_Trans_Pre.formName);
        else var data = navMan.getCustomInfo("frmTransfers");
        if (data !== undefined && data !== null) transactions = data;
        transactions.postedTransaction = scope_Trans_Pre.asyncManager.getData(0);
        transactions.scheduledTransactions = scope_Trans_Pre.asyncManager.getData(1);
        for (var i = 0; i < transactions.scheduledTransactions.length; i++) {
            if (transactions.scheduledTransactions[i]["isScheduled"] === "true") var trandateobj = formatUtil.getDateObjectfromString(transactions.scheduledTransactions[i]["scheduledDate"], "YYYY-MM-DD");
            else var trandateobj = formatUtil.getDateObjectfromString(transactions.scheduledTransactions[i]["transactionDate"], "YYYY-MM-DD");
            transactions.scheduledTransactions[i]["scheduledDate"] = formatUtil.getFormatedDateString(trandateobj, formatUtil.getApplicationDateFormat())
            if (transactions.scheduledTransactions[i]["frequencyStartDate"] !== null && transactions.scheduledTransactions[i]["frequencyStartDate"] !== undefined && transactions.scheduledTransactions[i]["frequencyStartDate"] !== "") {
                var trandateobj = formatUtil.getDateObjectfromString(transactions.scheduledTransactions[i]["frequencyStartDate"], "YYYY-MM-DD");
                transactions.scheduledTransactions[i]["frequencyStartDate"] = formatUtil.getFormatedDateString(trandateobj, formatUtil.getApplicationDateFormat())
            }
            if (transactions.scheduledTransactions[i]["frequencyEndDate"] !== null && transactions.scheduledTransactions[i]["frequencyEndDate"] !== undefined && transactions.scheduledTransactions[i]["frequencyEndDate"] !== "") {
                var trandateobj = formatUtil.getDateObjectfromString(transactions.scheduledTransactions[i]["frequencyEndDate"], "YYYY-MM-DD");
                transactions.scheduledTransactions[i]["frequencyEndDate"] = formatUtil.getFormatedDateString(trandateobj, formatUtil.getApplicationDateFormat())
            }
            transactions.scheduledTransactions[i]["unformattedAmount"] = transactions.scheduledTransactions[i]["amount"] + "";
            transactions.scheduledTransactions[i]["amount"] = formatUtil.formatAmountandAppendCurrencySymbol(transactions.scheduledTransactions[i]["amount"], transactions.scheduledTransactions[i]["transactionCurrency"]);
            if (transactions.scheduledTransactions[i]["transactionType"] === "P2P") transactions.scheduledTransactions[i].image = "payapersonsmall.png";
            else transactions.scheduledTransactions[i].image = "maketransfersmall.png";
            var name = "";
            if (transactions.scheduledTransactions[i].fromNickName === null || transactions.scheduledTransactions[i].fromNickName === undefined) {
                name = transactions.scheduledTransactions[i].fromAccountName;
            } else {
                name = transactions.scheduledTransactions[i].fromNickName;
            }
            transactions.scheduledTransactions[i].processedName = applicationManager.getPresentationUtility().formatText(name, 10, transactions.scheduledTransactions[i].fromAccountNumber, 4);
        }
        for (var i = 0; i < transactions.postedTransaction.length; i++) {
            if (transactions.postedTransaction[i]["isScheduled"] === "true") var trandateobj = formatUtil.getDateObjectfromString(transactions.postedTransaction[i]["scheduledDate"], "YYYY-MM-DD");
            else var trandateobj = formatUtil.getDateObjectfromString(transactions.postedTransaction[i]["transactionDate"], "YYYY-MM-DD");
            transactions.postedTransaction[i]["scheduledDate"] = formatUtil.getFormatedDateString(trandateobj, formatUtil.getApplicationDateFormat())
            if (transactions.postedTransaction[i]["frequencyStartDate"] !== null && transactions.postedTransaction[i]["frequencyStartDate"] !== undefined && transactions.postedTransaction[i]["frequencyStartDate"] !== "") {
                var trandateobj = formatUtil.getDateObjectfromString(transactions.postedTransaction[i]["frequencyStartDate"], "YYYY-MM-DD");
                transactions.postedTransaction[i]["frequencyStartDate"] = formatUtil.getFormatedDateString(trandateobj, formatUtil.getApplicationDateFormat())
            }
            if (transactions.postedTransaction[i]["frequencyEndDate"] !== null && transactions.postedTransaction[i]["frequencyEndDate"] !== undefined && transactions.postedTransaction[i]["frequencyEndDate"] !== "") {
                var trandateobj = formatUtil.getDateObjectfromString(transactions.postedTransaction[i]["frequencyEndDate"], "YYYY-MM-DD");
                transactions.postedTransaction[i]["frequencyEndDate"] = formatUtil.getFormatedDateString(trandateobj, formatUtil.getApplicationDateFormat())
            }
            transactions.postedTransaction[i]["unformattedAmount"] = transactions.postedTransaction[i]["amount"] + "";
            transactions.postedTransaction[i]["amount"] = formatUtil.formatAmountandAppendCurrencySymbol(transactions.postedTransaction[i]["amount"], transactions.postedTransaction[i]["transactionCurrency"]);
            if (transactions.postedTransaction[i]["transactionType"] === "P2P") transactions.postedTransaction[i].image = "payapersonsmall.png";
            else transactions.postedTransaction[i].image = "maketransfersmall.png";
            var name = "";
            if (transactions.postedTransaction[i].fromNickName === null || transactions.postedTransaction[i].fromNickName === undefined) {
                name = transactions.postedTransaction[i].fromAccountName;
            } else {
                name = transactions.postedTransaction[i].fromNickName;
            }
            transactions.postedTransaction[i].processedName = applicationManager.getPresentationUtility().formatText(name, 10, transactions.postedTransaction[i].fromAccountNumber, 4);
        }
        if (scope_Trans_Pre.formName) {
            navMan.setCustomInfo(scope_Trans_Pre.formName, transactions);
            navMan.navigateTo(scope_Trans_Pre.formName);
            scope_Trans_Pre.formName = "";
        } else {
            navMan.setCustomInfo("frmTransfers", transactions);
            navMan.navigateTo("frmTransfersEurope");
        }
    };
    /**
     * code for getting the posted transactions for pagenation
     * @member of Transaction_presentationController
     * @param {JSON}
     */
    Transaction_PresentationController.prototype.getNextPostedTransactions = function(searchOptions, segData) {
        searchOptions.isScheduled = "0";
        var paginationManager = applicationManager.getPaginationManager();
        paginationManager.paging(scope_Trans_Pre.getPostedTransForPNSuccess, scope_Trans_Pre.getPostedTransForPNError, scope_Trans_Pre.getPostedTransForPN, segData, 1, searchOptions);
    };
    Transaction_PresentationController.prototype.getPostedTransForPN = function(searchOptions, getPostedTransForPNSuccess, getPostedTransForPNError) {
        var transactionManager = applicationManager.getTransactionManager();
        transactionManager.fetchPostedTransactions(searchOptions, getPostedTransForPNSuccess, getPostedTransForPNError);
    };
    Transaction_PresentationController.prototype.getPostedTransForPNSuccess = function(resSuccess) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var controller = applicationManager.getPresentationUtility().getController('frmAdvanceSearchResults', true);
        controller.assignScrollEndData(resSuccess);
    };
    Transaction_PresentationController.prototype.getPostedTransForPNError = function(resErr) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (resErr["isServerUnreachable"]) applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", resErr);
    };
    Transaction_PresentationController.prototype.setEntryPoints = function(transactionType) {
        var navMan = applicationManager.getNavigationManager();
        switch (transactionType) {
            case "InternalTransfer":
                navMan.setEntryPoint("makeatransfer", "frmTransfersEurope");
                break;
            case "ExternalTransfer":
                navMan.setEntryPoint("makeatransfer", "frmTransfersEurope");
                break;
            case "P2P":
                navMan.setEntryPoint("payaperson", "frmTransfersEurope");
                break;
        }
    };
    /**
     * code for getting scheduled transactions Europe flow
     * @member of Transaction_presentationController
     * @param {JSON}
     */
    Transaction_PresentationController.prototype.getScheduledTransactionsEurope = function() {
        var transactionManager = applicationManager.getTransactionManager();
        var params = {
            "firstRecordNumber": 0,
            "lastRecordNumber": 100,
            "isScheduled": 1,
            "sortBy": "scheduledDate",
            "order": "desc"
        };
        transactionManager.fetchUserScheduledTransactions(scope_Trans_Pre.getUserScheduledTransactionsEuropeSuccessCallback, scope_Trans_Pre.getUserScheduledTransactionsEuropeErrorCallback, params);
    };
    Transaction_PresentationController.prototype.getUserScheduledTransactionsEuropeSuccessCallback = function(res) {
        var transModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transModPresentationController.transactionTabSelected = "SCHEDULED";
        var navMan = applicationManager.getNavigationManager();
        var formatUtil = applicationManager.getFormatUtilManager();
        var transactions = scope_Trans_Pre.filterTransactionsBasedOnPermissions(res);
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i]["transactionType"] === "InternalTransfer") {
                transactions[i]["transferImage"] = "transfer.png";
            } else {
                transactions[i]["transferImage"] = "payapersonsmall.png";
            }
            if (transactions[i]["isScheduled"] === "true") var trandateobj = formatUtil.getDateObjectfromString(transactions[i]["scheduledDate"], "YYYY-MM-DD");
            else var trandateobj = formatUtil.getDateObjectfromString(transactions[i]["transactionDate"], "YYYY-MM-DD");
            transactions[i]["scheduledDate"] = formatUtil.getFormatedDateString(trandateobj, formatUtil.getApplicationDateFormat())
            if (transactions[i]["frequencyStartDate"] !== null && transactions[i]["frequencyStartDate"] !== undefined && transactions[i]["frequencyStartDate"] !== "") {
                var trandateobj = formatUtil.getDateObjectfromString(transactions[i]["frequencyStartDate"], "YYYY-MM-DD");
                transactions[i]["frequencyStartDate"] = formatUtil.getFormatedDateString(trandateobj, formatUtil.getApplicationDateFormat())
            }
            if (transactions[i]["frequencyEndDate"] !== null && transactions[i]["frequencyEndDate"] !== undefined && transactions[i]["frequencyEndDate"] !== "") {
                var trandateobj = formatUtil.getDateObjectfromString(transactions[i]["frequencyEndDate"], "YYYY-MM-DD");
                transactions[i]["frequencyEndDate"] = formatUtil.getFormatedDateString(trandateobj, formatUtil.getApplicationDateFormat())
            }
            transactions[i]["unformattedAmount"] = transactions[i]["amount"] + "";
            transactions[i]["amount"] = formatUtil.formatAmountandAppendCurrencySymbol(transactions[i]["amount"], transactions[i]["transactionCurrency"] || transactions[i]["payeeCurrency"]);
            if (transactions[i]["transactionType"] === "P2P") transactions[i].image = "payapersonsmall.png";
            else transactions[i].image = "maketransfersmall.png";
            var name = "";
            if (transactions[i].fromNickName === null || transactions[i].fromNickName === undefined) {
                name = transactions[i].fromAccountName;
            } else {
                name = transactions[i].fromNickName;
            }
            transactions[i].processedName = applicationManager.getPresentationUtility().formatText(name, 10, transactions[i].fromAccountNumber, 4);
        }
        var transactionData = navMan.getCustomInfo("frmEuropeTransferActivities");
        if (transactionData) {
            transactionData.scheduledTransactionsDetails = transactions;
        } else {
            transactionData = {
                "scheduledTransactionsDetails": transactions
            };
        }
        navMan.setCustomInfo("frmEuropeTransferActivities", transactionData);
        if (navMan.getCurrentForm() === "frmEuropeTransferActivities") {
            var controller = applicationManager.getPresentationUtility().getController('frmEuropeTransferActivities', true);
            controller.setTabSelectedSkins();
            controller.setDataToSegment(transactions);
        } else {
            transModPresentationController.filterTypeSelected = "BOTH";
            navMan.navigateTo("frmEuropeTransferActivities");
        }
    };
    Transaction_PresentationController.prototype.filterTransactionsBasedOnPermissions = function(transactions) {
        var configManager = applicationManager.getConfigurationManager();
        return transactions.filter(function(transaction) {
            if (transaction.serviceName === "INTRA_BANK_FUND_TRANSFER_CREATE" && configManager.checkUserPermission("INTRA_BANK_FUND_TRANSFER_VIEW")) {
                return true;
            } else if (transaction.serviceName === "INTER_BANK_ACCOUNT_FUND_TRANSFER_CREATE" && configManager.checkUserPermission("INTER_BANK_ACCOUNT_FUND_TRANSFER_VIEW")) {
                return true;
            } else if (transaction.serviceName === "INTERNATIONAL_ACCOUNT_FUND_TRANSFER_CREATE" && configManager.checkUserPermission("INTERNATIONAL_ACCOUNT_FUND_TRANSFER_VIEW")) {
                return true;
            } else if (transaction.serviceName === "TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE" && configManager.checkUserPermission("TRANSFER_BETWEEN_OWN_ACCOUNT_VIEW")) {
                return true;
            } else {
                return false;
            }
        });
    };
    Transaction_PresentationController.prototype.getUserScheduledTransactionsEuropeErrorCallback = function(resErr) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (resErr["isServerUnreachable"]) applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", resErr);
    };
    Transaction_PresentationController.prototype.getPastTransactionsEurope = function() {
        var transactionManager = applicationManager.getTransactionManager();
        var params = {
            "firstRecordNumber": 0,
            "lastRecordNumber": 100,
            "isScheduled": 0,
            "sortBy": "transactionDate",
            "order": "desc"
        };
        transactionManager.fetchUserpostedTransactions(scope_Trans_Pre.getUserPostedTransactionsEuropeSuccessCallback, scope_Trans_Pre.getUserPostedTransactionsEuropeErrorCallback, params);
    };
    Transaction_PresentationController.prototype.getUserPostedTransactionsEuropeSuccessCallback = function(res) {
        var transModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transModPresentationController.transactionTabSelected = "PAST";
        var navMan = applicationManager.getNavigationManager();
        var formatUtil = applicationManager.getFormatUtilManager();
        var transactions = scope_Trans_Pre.filterTransactionsBasedOnPermissions(res);
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i]["transactionType"] === "InternalTransfer") {
                transactions[i]["transferImage"] = "transfer.png";
            } else {
                transactions[i]["transferImage"] = "payapersonsmall.png";
            }
            var title = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.TransactionMode.Title") + " " + transactions[i].toAccountName;
            transactions[i]["title"] = title;
            var trandateobj = formatUtil.getDateObjectfromString(transactions[i]["scheduledDate"], "YYYY-MM-DD");
            transactions[i]["scheduledDate"] = formatUtil.getFormatedDateString(trandateobj, formatUtil.getApplicationDateFormat())
            if (transactions[i]["frequencyStartDate"] !== null && transactions[i]["frequencyStartDate"] !== undefined && transactions[i]["frequencyStartDate"] !== "") {
                var trandateobj = formatUtil.getDateObjectfromString(transactions[i]["frequencyStartDate"], "YYYY-MM-DD");
                transactions[i]["frequencyStartDate"] = formatUtil.getFormatedDateString(trandateobj, formatUtil.getApplicationDateFormat())
            }
            if (transactions[i]["frequencyEndDate"] !== null && transactions[i]["frequencyEndDate"] !== undefined && transactions[i]["frequencyEndDate"] !== "") {
                var trandateobj = formatUtil.getDateObjectfromString(transactions[i]["frequencyEndDate"], "YYYY-MM-DD");
                transactions[i]["frequencyEndDate"] = formatUtil.getFormatedDateString(trandateobj, formatUtil.getApplicationDateFormat())
            }
            transactions[i]["unformattedAmount"] = transactions[i]["amount"] + "";
            transactions[i]["amount"] = formatUtil.formatAmountandAppendCurrencySymbol(transactions[i]["amount"], transactions[i]["transactionCurrency"]);
            if (transactions[i]["transactionType"] === "P2P") transactions[i].image = "payapersonsmall.png";
            else transactions[i].image = "maketransfersmall.png";
            var name = "";
            if (transactions[i].fromNickName === null || transactions[i].fromNickName === undefined) {
                name = transactions[i].fromAccountName;
            } else {
                name = transactions[i].fromNickName;
            }
            transactions[i].processedName = applicationManager.getPresentationUtility().formatText(name, 10, transactions[i].fromAccountNumber, 4);
        }
        var transactionData = navMan.getCustomInfo("frmEuropeTransferActivities");
        if (transactionData) {
            transactionData.pastTransactionsDetails = transactions;
        } else {
            transactionData = {
                "pastTransactionsDetails": transactions
            };
        }
        navMan.setCustomInfo("frmEuropeTransferActivities", transactionData);
        if (navMan.getCurrentForm() === "frmEuropeTransferActivities") {
            var controller = applicationManager.getPresentationUtility().getController('frmEuropeTransferActivities', true);
            controller.setTabSelectedSkins();
            controller.setDataToSegment(transactions);
        } else {
            navMan.navigateTo("frmEuropeTransferActivities");
        }
    };
    Transaction_PresentationController.prototype.getUserPostedTransactionsEuropeErrorCallback = function(resErr) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (resErr["isServerUnreachable"]) applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", resErr);
    };
    return Transaction_PresentationController;
});