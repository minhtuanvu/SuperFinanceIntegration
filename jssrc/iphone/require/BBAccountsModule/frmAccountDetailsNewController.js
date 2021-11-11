define("BBAccountsModule/userfrmAccountDetailsNewController", {
    pendingaccounts: null,
    postedaccounts: null,
    segmentData: null,
    widgetDataMapping: "",
    serviceSuccess: 0,
    //Type your controller cod
    /*
     *OnNavigate is called when the form is loaded , initialisation happen here
     */
    onNavigate: function() {
        try {
            var scope = this;
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            kony.print("onNavigate inside");
            var context = navManager.getCustomInfo("frmAccountDetailsNew");
            var params = {};
            if (context.selectedAccountData !== undefined && context.selectedAccountData !== "" && context.selectedAccountData !== null) {
                params = {
                    "accountID": context.selectedAccountData.accountID,
                    "accountType": context.selectedAccountData.accountType,
                    "currencyCode": context.selectedAccountData.currencyCode
                };
            } else {
                params = context;
            }
            params["transactionType"] = "All";
            scope.view.accountsTransactionListNative.setContext(params);
            scope.view.accountSummaryNative.setContext(params);
            var cm = applicationManager.getConfigurationManager();
            scope.view.quicklinksNative.accountType = params.accountType;
            scope.view.quicklinksNative.setParentScopeAndEntitlements(scope, {
                "features": cm.getUserFeatures(),
                "permissions": cm.getUserPermissions()
            });
        } catch (e) {
            kony.print("Exception in onNavigate" + e);
        }
    },
    /*
     * preshow is to bind the actions form widgets
     */
    frmAccountDetailsNewPreshow: function() {
        var scope = this;
        this.serviceSuccess = 0;
        try {
            this.view.flxMainContainer.skin = "slFSbox";
            //this.view.flxContainer.isVisible = true;
            this.view.customSearchbox.setVisibility(false);
            this.view.tbxSearch.setFocus(false);
            this.view.tbxSearch.text = "";
            this.view.flxNoTransactions.isVisible = false;
            //this.view.flxSearch.isVisible = true;
            this.view.customSearchbox.tbxSearch.text = "";
            this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
            navManager = applicationManager.getNavigationManager();
            if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
                this.view.flxHeader.isVisible = true;
                this.view.flxFooter.isVisible = false;
                this.view.flxBottomSpacerForiPhone.isVisible = false;
            } else {
                this.view.flxHeader.isVisible = false;
                this.view.flxFooter.isVisible = true;
                this.view.title = "";
                this.view.flxBottomSpacerForiPhone.isVisible = true;
                var configManager = applicationManager.getConfigurationManager();
                var MenuHandler = applicationManager.getMenuHandler();
                MenuHandler.setUpHamburgerForForm(scope, configManager.constants.MENUACCOUNTS);
            }
            if ((!kony.sdk.isNullOrUndefined(this.view["flxAdditionalLinks"])) && this.view["flxAdditionalLinks"] !== "") {
                var form = kony.application.getCurrentForm();
                form.remove("flxAdditionalLinks");
            }
            var confManager = applicationManager.getConfigurationManager();
            var isBusinessUser = confManager.isCombinedUser === "true" || confManager.isSMEUser === "true";
            if (isBusinessUser) {
                var statementsVisiblity = confManager.checkUserPermission("MANAGE_E_STATEMENTS");
                this.view.btnStatements.setVisibility(statementsVisiblity);
                if (statementsVisiblity === false) {
                    this.view.btnDisputeTransaction.isVisible = true;
                    this.view.btnStatements.isVisible = false;
                    this.view.btnThreeDots.isVisible = false;
                    this.view.btnWithdrawCash.width = "45%";
                    this.view.btnDisputeTransaction = "45%"
                } else {
                    this.view.btnDisputeTransaction.isVisible = false;
                    this.view.btnStatements.isVisible = true;
                    this.view.btnThreeDots.isVisible = true;
                    this.view.btnWithdrawCash.width = "35%";
                }
                this.view.flxOptions.forceLayout();
            }
            this.view.quicklinksNative.onError = function(err) {
                //alert("error in ql");
            };
            this.view.accountSummaryNative.onError = function(errorObj) {
                alert(errorObj.err);
            };
            scope.view.accountSummaryNative.requestStart = function() {
                scope.onRequestStart();
            };
            scope.view.accountSummaryNative.requestEnd = function(response) {
                scope.onRequestEnd(response);
            };
            scope.view.accountSummaryNative.onFilterClickAction = function(responseObj, userData) {
                scope.navigateToAdvanceSearch();
            };
            scope.view.accountSummaryNative.onLoanScheduleClick = function(responseObj) {
                var key = "",
                    value = "",
                    response = {};
                for (var cont in responseObj) {
                    var index = cont.split(".");
                    value = index[0];
                    key = index[1];
                    response[key] = responseObj[cont];
                }
                response["transactionType"] = "LoanSchedule";
                //  var nav = new kony.mvc.Navigation("frmLoanSchedule");
                //nav.navigate(response);
            };
            scope.view.accountSummaryNative.setSearchText = function(searchData) {
                scope.navSearch(searchData);
            };
            scope.view.accountSummaryNative.onResetSearch = function() {
                scope.cancelSearch();
            };
            scope.view.accountsTransactionListNative.onRequestStart = function() {
                scope.onRequestStart();
            };
            scope.view.accountsTransactionListNative.onRequestEnd = function() {
                scope.onRequestEnd();
            };
            scope.view.accountsTransactionListNative.swipeActionBtn = function(RowData) {
                // alert("Clicked Button " + RowData.id);
            };
            scope.view.accountsTransactionListNative.getTransactionDetails = function(data) {
                if (!JSON.stringify(data).includes("flxNoRecords")) {
                    var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
                    var navManager = applicationManager.getNavigationManager();
                    var userFeatures = applicationManager.getConfigurationManager().getUserFeatures();
                    var userPermission = applicationManager.getConfigurationManager().getUserPermissions();
                    data["userFeatures"] = userFeatures;
                    data["userPermissions"] = userPermission;
                    navManager.setCustomInfo("frmAccountsTransactionDetails", data);
                    navManager.setEntryPoint("frmAccountsTransactionDetails", "Accounts");
                    var config = applicationManager.getConfigurationManager();
                    if (!config.isDisputeConfigurationAdded) {
                        var disputePresentationController = applicationManager.getModulesPresentationController("DisputeTransactions")
                        disputePresentationController.fetchDisputeConfiguration(scope.navigateToDetails);
                    } else {
                        scope.navigateToDetails();
                    }
                }
            }
            this.view.flxAdditionalOptions.isVisible = false;
            this.view.flxPendingDeposit.isVisible = false;
            this.view.flxPendingWithdrawals.isVisible = false;
            this.view.flxCurrentBal.isVisible = true;
            this.view.flxMainContainer.setEnabled(true);
            this.view.flxLoanSchedule.isVisible = false;
            var navManager = applicationManager.getNavigationManager();
            var accountsDetails = navManager.getCustomInfo("frmAccountDetailsNew");
            this.setTransactionsDataforAggregated();
            this.setFlxOptionsBasedOnType(accountsDetails.selectedAccountData.accountType);
            // this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
            this.view.expandCollapseViewTransactions.segList.onRowClick = this.segTransactionsOnRowClick;
            this.view.btnStatements.onClick = this.getStatements;
            this.view.customSearchbox.tbxSearch.placeholder = kony.i18n.getLocalizedString("kony.mb.accdetails.searchTransactions");
            this.view.customHeader.flxSearch.onClick = this.gotoAccountInfo;
            this.view.tbxSearch.onTouchEnd = this.flxSearchOnTouchEnd;
            this.view.btnDisputeTransaction.onClick = this.disputeTransaction;
            this.view.customSearchbox.btnCancel.onClick = this.btnCancelOnClick;
            this.view.flxLoanSchedule.onClick = this.navigateToLoanSchedule;
            this.view.btnThreeDots.onClick = function() {
                scope.blockBackgroundonAdditionalOptions();
            };
            this.view.flxCancel.onTouchStart = function() {
                scope.enableBackgroundonCloseAdditionalOptions();
            };
            this.view.flxDisputeTranactions.onTouchStart = function() {
                navManager.setEntryPoint("ViewRequest", "");
                scope.view.flxAdditionalOptions.setVisibility(false);
                applicationManager.getPresentationUtility().showLoadingScreen();
                var disputeModule = applicationManager.getModulesPresentationController("DisputeTransactions");
                disputeModule.getDisputeTransactionDetails();
            };
            this.resetform();
        } catch (err) {
            //alert(err);
            kony.print("expection in preshow" + err);
        }
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    onClickViewDisputedTransactions: function() {
        var scope = this;
        var navManager = applicationManager.getNavigationManager();
        navManager.setEntryPoint("ViewRequest", "");
        scope.view.flxAdditionalOptions.setVisibility(false);
        applicationManager.getPresentationUtility().showLoadingScreen();
        var disputeModule = applicationManager.getModulesPresentationController("DisputeTransactions");
        disputeModule.getDisputeTransactionDetails();
    },
    navigateToDetails: function() {
        var moneyMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        moneyMod.presentationController.commonFunctionForNavigation("AccountModule/frmAccountsTransactionDetails");
    },
    onRequestStart: function() {
        kony.application.showLoadingScreen(null, "Please wait while transactions are being loaded.", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {});
    },
    onRequestEnd: function(response) {
        this.serviceSuccess = this.serviceSuccess + 1;;
        if (!kony.sdk.isNullOrUndefined(response) && response !== "") {
            this.view.customHeader.lblLocateUs.text = response.headerText;
            var key = "",
                value = "",
                res = {};
            for (var cont in response) {
                var index = cont.split(".");
                value = index[0];
                key = index[1];
                res[key] = response[cont];
            }
            var context = {
                "selectedAccountData": res
            }
            var navManager = applicationManager.getNavigationManager();
            navManager.setCustomInfo("frmAccountDetailsNew", context);
        } else kony.application.dismissLoadingScreen();
        if (this.serviceSuccess >= 2) {
            kony.application.dismissLoadingScreen();
        }
    },
    // Navigate to search method in transaction list controller.
    navSearch: function(searchData) {
        this.view.accountsTransactionListNative.startSearch(searchData);
    },
    // Onclick cancel reset search result.
    cancelSearch: function() {
        this.view.accountsTransactionListNative.onCancelSearch();
    },
    disputeTransaction: function() {
        try {
            applicationManager.getPresentationUtility().showLoadingScreen();
            var disputeModule = applicationManager.getModulesPresentationController("DisputeTransactions");
            disputeModule.getDisputeTransactionDetails();
        } catch (er) {}
    },
    navigateToLoanSchedule: function() {
        var navManager = applicationManager.getNavigationManager();
        var accountsDetails = navManager.getCustomInfo("frmAccountDetailsNew");
        var accountsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountsModule.presentationController.fetchLoanSchedule(accountsDetails.selectedAccountData.accountID);
    },
    blockBackgroundonAdditionalOptions: function() {
        var scope = this;
        scope.view.flxMainContainer.setEnabled(false);
        scope.view.flxAdditionalOptions.setVisibility(true);
        if (applicationManager.getPresentationFormUtility().getDeviceName() == "iPhone") {
            this.view.flxCancelOption.bottom = "80dp";
            this.view.flxPerformAdditionalOptions.bottom = "140dp";
        } else {
            this.view.flxCancelOption.bottom = "20dp";
            this.view.flxPerformAdditionalOptions.bottom = "80dp";
        }
    },
    enableBackgroundonCloseAdditionalOptions: function() {
        var scope = this;
        scope.view.flxMainContainer.setEnabled(true);
        scope.view.flxAdditionalOptions.setVisibility(false);
    },
    setFlxOptionsBasedOnType: function(accountType) {
        switch (accountType) {
            case "Checking":
                this.checkingRelatedOptions();
                break;
            case "Savings":
                this.commonOptions();
                break;
            case "Deposit":
                this.depositRelatedOptions();
                break;
            case "CreditCard":
                this.creditCardRelatedOptions();
                break;
            case "Loan":
                this.loanRelatedOptions();
                break;
        }
    },
    commonOptions: function() {
        this.view.flxPendingDeposit.isVisible = true;
        this.view.flxPendingWithdrawals.isVisible = true;
        this.view.lblPendingDeposits.text = kony.i18n.getLocalizedString("kony.mb.accdetails.pendingDeposits") + ":";
        this.view.lblPendingWithdrawals.text = kony.i18n.getLocalizedString("kony.mb.accdetails.pendingWithdrawals") + ":";
        this.view.flxCurrentBal.isVisible = false;
        this.view.btnWithdrawCash.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.withdrawCash");
        this.view.btnWithdrawCash.onClick = this.withdrawCashSavings();
    },
    withdrawCashSavings: function() {
        var navManager = applicationManager.getNavigationManager();
        var accountsDetails = navManager.getCustomInfo("frmAccountDetailsNew");
        var cardlessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
        cardlessModule.presentationController.clearTransactionObject();
        cardlessModule.presentationController.navigateToCashRecipientForm(accountsDetails.selectedAccountData);
        //cardlessModule.presentationController.navigateToQRCashWithdrawForm(accountsDetails.selectedAccountData);
    },
    depositRelatedOptions: function() {
        this.view.btnWithdrawCash.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accounts.NEWDEPOSIT");
        this.view.btnWithdrawCash.onClick = this.newDepositAction();
    },
    newDepositAction: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.setEntryPoint("Deposit", "frmAccountDetailsNew");
        var accountsDetails = navManager.getCustomInfo("frmAccountDetailsNew");
        var checkDepositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
        checkDepositModule.presentationController.navigateFromAccountDetails(accountsDetails.selectedAccountData);
    },
    checkingRelatedOptions: function() {
        this.view.flxPendingDeposit.isVisible = true;
        this.view.flxPendingWithdrawals.isVisible = true;
        this.view.lblPendingDeposits.text = kony.i18n.getLocalizedString("kony.mb.accdetails.pendingDeposits") + ":";
        this.view.lblPendingWithdrawals.text = kony.i18n.getLocalizedString("kony.mb.accdetails.pendingWithdrawals") + ":";
        this.view.flxCurrentBal.isVisible = false;
        this.view.btnWithdrawCash.text = kony.i18n.getLocalizedString("kony.mb.Transfers.MakeTransfer");
        var cm = applicationManager.getConfigurationManager();
        var navManager = applicationManager.getNavigationManager();
        if (cm.isFastTransfersFlowEnabled()) {
            applicationManager.getPresentationUtility().showLoadingScreen();
            this.view.btnWithdrawCash.onClick = function() {
                var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
                var accountsDetails = navManager.getCustomInfo("frmAccountDetailsNew");
                navManager.setEntryPoint("centralmoneymovement", "frmAccountDetailsNew");
                moneyMovementModule.transactionMode = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts");
                moneyMovementModule.setTransferFromAccountFromAccDetailsFlow(accountsDetails.selectedAccountData);
            };
        } else {
            this.view.btnWithdrawCash.onClick = function() {
                var navigateToForm = navManager.setEntryPoint("makeatransfer", "frmAccountDetailsNew");
                var accountsDetails = navManager.getCustomInfo("frmAccountDetailsNew");
                var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
                transferModulePresentationController.transactionMode = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts");
                transferModulePresentationController.navigateToTransfersChecking(accountsDetails.selectedAccountData);
            };
        }
        var configManager = applicationManager.getConfigurationManager();
        var userPermissionList = configManager.getCreateGeneralTransactionPermissionsList();
        if (Array.isArray(userPermissionList)) {
            for (var i = 0; i < userPermissionList.length; i++) {
                var checkPermission = applicationManager.getConfigurationManager().checkUserPermission(userPermissionList[i]);
                if (checkPermission === true || checkPermission === "true") {
                    this.view.btnWithdrawCash.setVisibility(true);
                    return;
                } else {
                    this.view.btnWithdrawCash.setVisibility(false);
                }
            }
        }
    },
    onClickMakeTransfer: function() {
        var cm = applicationManager.getConfigurationManager();
        var navManager = applicationManager.getNavigationManager();
        if (cm.isFastTransfersFlowEnabled()) {
            applicationManager.getPresentationUtility().showLoadingScreen();
            var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
            var accountsDetails = navManager.getCustomInfo("frmAccountDetailsNew");
            navManager.setEntryPoint("centralmoneymovement", "frmAccountDetailsNew");
            moneyMovementModule.transactionMode = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts");
            moneyMovementModule.setTransferFromAccountFromAccDetailsFlow(accountsDetails.selectedAccountData);
        } else {
            var navigateToForm = navManager.setEntryPoint("makeatransfer", "frmAccountDetailsNew");
            var accountsDetails = navManager.getCustomInfo("frmAccountDetailsNew");
            var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
            transferModulePresentationController.transactionMode = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts");
            transferModulePresentationController.navigateToTransfersChecking(accountsDetails.selectedAccountData);
        }
    },
    creditCardRelatedOptions: function() {
        var checkUserPermission = applicationManager.getConfigurationManager().checkUserPermission("TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE") ? true : false;
        if (checkUserPermission === true || checkUserPermission === "true") {
            this.view.btnWithdrawCash.isVisible = true;
        } else {
            this.view.btnWithdrawCash.isVisible = false;
        }
        this.view.btnWithdrawCash.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accounts.MAKEAPAYMENT");
        var cm = applicationManager.getConfigurationManager();
        var navManager = applicationManager.getNavigationManager();
        if (cm.isFastTransfersFlowEnabled()) {
            applicationManager.getPresentationUtility().showLoadingScreen();
            this.view.btnWithdrawCash.onClick = function() {
                var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
                var accountsDetails = navManager.getCustomInfo("frmAccountDetailsNew");
                navManager.setEntryPoint("centralmoneymovement", "frmAccountDetailsNew");
                moneyMovementModule.transactionMode = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts");
                moneyMovementModule.setTransferToAccountFromAccDetailsFlow(accountsDetails.selectedAccountData);
            };
        } else {
            this.view.btnWithdrawCash.onClick = function() {
                var navigateToForm = navManager.setEntryPoint("makeatransfer", "frmAccountDetailsNew");
                var accountsDetails = navManager.getCustomInfo("frmAccountDetailsNew");
                var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
                transferModulePresentationController.transactionMode = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts");
                transferModulePresentationController.navigateToTransfersFromDetails(accountsDetails.selectedAccountData);
            };
        }
    },
    onClickMakePayment: function() {
        var cm = applicationManager.getConfigurationManager();
        var navManager = applicationManager.getNavigationManager();
        if (cm.isFastTransfersFlowEnabled()) {
            applicationManager.getPresentationUtility().showLoadingScreen();
            var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
            var accountsDetails = navManager.getCustomInfo("frmAccountDetailsNew");
            navManager.setEntryPoint("centralmoneymovement", "frmAccountDetailsNew");
            moneyMovementModule.transactionMode = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts");
            moneyMovementModule.setTransferToAccountFromAccDetailsFlow(accountsDetails.selectedAccountData);
        } else {
            var navigateToForm = navManager.setEntryPoint("makeatransfer", "frmAccountDetailsNew");
            var accountsDetails = navManager.getCustomInfo("frmAccountDetailsNew");
            var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
            transferModulePresentationController.transactionMode = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts");
            transferModulePresentationController.navigateToTransfersFromDetails(accountsDetails.selectedAccountData);
        }
    },
    loanRelatedOptions: function() {
        var checkUserPermission = applicationManager.getConfigurationManager().checkUserPermission("TRANSFER_BETWEEN_OWN_ACCOUNT_CREATE") ? true : false;
        if (checkUserPermission === true || checkUserPermission === "true") {
            this.view.btnWithdrawCash.isVisible = true;
        } else {
            this.view.btnWithdrawCash.isVisible = false;
        }
        var checkLoanSchedulePermission = applicationManager.getConfigurationManager().checkUserPermission("VIEW_LOAN_SCHEDULE") ? true : false;
        if (checkLoanSchedulePermission === true || checkLoanSchedulePermission === "true") {
            this.view.flxLoanSchedule.isVisible = true;
        } else {
            this.view.flxLoanSchedule.isVisible = false;
        }
        this.view.btnWithdrawCash.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accounts.PAYDUEAMOUNT");
        var cm = applicationManager.getConfigurationManager();
        var navManager = applicationManager.getNavigationManager();
        if (cm.isFastTransfersFlowEnabled) {
            applicationManager.getPresentationUtility().showLoadingScreen();
            this.view.btnWithdrawCash.onClick = function() {
                var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
                var accountsDetails = navManager.getCustomInfo("frmAccountDetailsNew");
                navManager.setEntryPoint("centralmoneymovement", "frmAccountDetailsNew");
                moneyMovementModule.transactionMode = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts");
                moneyMovementModule.setTransferToAccountFromAccDetailsFlow(accountsDetails.selectedAccountData);
            };
        } else {
            this.view.btnWithdrawCash.onClick = function() {
                var navigateToForm = navManager.setEntryPoint("makeatransfer", "frmAccountDetailsNew");
                var accountsDetails = navManager.getCustomInfo("frmAccountDetailsNew");
                var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
                transferModulePresentationController.transactionMode = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts");
                transferModulePresentationController.navigateToTransfers(accountsDetails.selectedAccountData);
            };
        }
    },
    onClickLoanPayDue: function() {
        var cm = applicationManager.getConfigurationManager();
        var navManager = applicationManager.getNavigationManager();
        if (cm.isFastTransfersFlowEnabled) {
            applicationManager.getPresentationUtility().showLoadingScreen();
            var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
            var accountsDetails = navManager.getCustomInfo("frmAccountDetailsNew");
            navManager.setEntryPoint("centralmoneymovement", "frmAccountDetailsNew");
            moneyMovementModule.transactionMode = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts");
            moneyMovementModule.setTransferToAccountFromAccDetailsFlow(accountsDetails.selectedAccountData);
        } else {
            var navigateToForm = navManager.setEntryPoint("makeatransfer", "frmAccountDetailsNew");
            var accountsDetails = navManager.getCustomInfo("frmAccountDetailsNew");
            var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
            transferModulePresentationController.transactionMode = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts");
            transferModulePresentationController.navigateToTransfers(accountsDetails.selectedAccountData);
        }
    },
    /*
     *setTransactionsDataforAggregated - This function is to form an array for posted and pending transactions and sending to component to set data
     */
    setTransactionsDataforAggregated: function() {
        try {
            kony.print("entered setTransactionsDataforAggregated");
            widgetDataMapping = {
                "lblTransaction": "lblTransaction",
                "lblTransactionAmount": "lblTransactionAmount",
                "flxSeparator": "flxSeparator",
                "flxWrapper": "flxWrapper",
                "imgIndicator": "imgIndicator",
                "lblDate": "lblDate",
                "flxApprovalsReqList": "flxApprovalsReqList",
                "flxApprovalReqExpColHeader": "flxApprovalReqExpColHeader",
                "flximgUp": "flximgUp",
                "imgUpArrow": "imgUpArrow",
                "lblHeader": "lblHeader",
                "transactionId": "transactionId",
                "transactionArr": "transactionArr"
            };
            var navMan = applicationManager.getNavigationManager();
            var configManager = applicationManager.getConfigurationManager();
            var forUtility = applicationManager.getFormatUtilManager();
            var accountsDetails = navMan.getCustomInfo("frmAccountDetailsNew");
            var pendingTransactionsData = accountsDetails.pendingTransactions;
            var postedTransactionsData = accountsDetails.postedTransaction;
            this.view.lblBalanceValue.text = configManager.getCurrencyCode() + accountsDetails.selectedAccountData["availableBalance"];
            this.view.lblCurrBalValue.text = configManager.getCurrencyCode() + accountsDetails.selectedAccountData["currentBalance"];
            this.view.customHeader.lblLocateUs.text = accountsDetails.selectedAccountData["nickName"];
            //this.view.title = accountsDetails.selectedAccountData["nickName"];
            this.view.lblPendingDepositsVal.text = forUtility.formatAmountandAppendCurrencySymbol(accountsDetails.pendingDeposit, accountsDetails.currencyCode);
            this.view.lblPendingWithdrawalsVal.text = forUtility.formatAmountandAppendCurrencySymbol(accountsDetails.pendingWithdrawal, accountsDetails.currencyCode);
            var finalArr = [];
            var rowObj, transArr, rowArr;
            var combinedHeadRowArr;
            var headerTitles = ["Pending Transactions", "Posted Transactions"];
            if (pendingTransactionsData.length > 0 && postedTransactionsData.length > 0) {
                for (var j = 0; j < headerTitles.length; j++) {
                    combinedHeadRowArr = [];
                    combinedHeadRowArr.push({
                        "template": "flxApprovalReqExpColHeader",
                        "lblHeader": {
                            "text": headerTitles[j]
                        },
                        "imgUpArrow": {
                            "src": "arrowupblue.png"
                        },
                    });
                    rowArr = [];
                    if (headerTitles[j] === "Pending Transactions") {
                        transArr = pendingTransactionsData;
                        for (var i = 0; i < transArr.length; i++) {
                            rowObj = {
                                "template": "flxTransactions",
                                "lblTransaction": {
                                    "text": "" + transArr[i].description
                                },
                                "lblTransactionAmount": {
                                    "text": "" + transArr[i].Amount
                                },
                                "lblDate": {
                                    "text": "" + (transArr[i].TransactionDate)
                                },
                                "imgIndicator": {
                                    src: "recurrenceindication.png"
                                },
                                "transactionArr": transArr[i]
                            };
                            rowArr.push(rowObj);
                        }
                        this.pendingaccounts = rowArr;
                    } else {
                        transArr = postedTransactionsData;
                        for (var k = 0; k < transArr.length; k++) {
                            rowObj = {
                                "template": "flxTransactions",
                                "lblTransaction": {
                                    "text": "" + transArr[k].description
                                },
                                "lblTransactionAmount": {
                                    "text": "" + transArr[k].Amount
                                },
                                "lblDate": {
                                    "text": "" + (transArr[k].TransactionDate)
                                },
                                "imgIndicator": {
                                    src: "billpay.png"
                                },
                                "transactionArr": transArr[k]
                            };
                            rowArr.push(rowObj);
                        }
                        this.postedaccounts = rowArr;
                    }
                    combinedHeadRowArr.push(rowArr);
                    finalArr.push(combinedHeadRowArr);
                    this.segmentData = finalArr;
                    this.view.flxNoTransactions.isVisible = false;
                }
            } else if (pendingTransactionsData.length > 0) {
                combinedHeadRowArr = [];
                combinedHeadRowArr.push({
                    "template": "flxApprovalReqExpColHeader",
                    "lblHeader": {
                        "text": headerTitles[0]
                    },
                    "imgUpArrow": {
                        "src": "arrowupblue.png"
                    },
                });
                rowArr = [];
                transArr = pendingTransactionsData;
                for (var m = 0; m < transArr.length; m++) {
                    rowObj = {
                        "template": "flxTransactions",
                        "lblTransaction": {
                            "text": "" + transArr[m].description
                        },
                        "lblTransactionAmount": {
                            "text": "" + transArr[m].Amount
                        },
                        "lblDate": {
                            "text": "" + (transArr[m].TransactionDate)
                        },
                        "imgIndicator": {
                            src: "recurrenceindication.png"
                        },
                        "transactionArr": transArr[m]
                    };
                    rowArr.push(rowObj);
                }
                combinedHeadRowArr.push(rowArr);
                finalArr.push(combinedHeadRowArr);
                this.view.flxNoTransactions.isVisible = false;
                this.pendingaccounts = rowArr;
                this.segmentData = finalArr;
            } else if (postedTransactionsData.length > 0) {
                combinedHeadRowArr = [];
                combinedHeadRowArr.push({
                    "template": "flxApprovalReqExpColHeader",
                    "lblHeader": {
                        "text": headerTitles[1]
                    },
                    "imgUpArrow": {
                        "src": "arrowupblue.png"
                    },
                });
                rowArr = [];
                transArr = postedTransactionsData;
                for (var k = 0; k < transArr.length; k++) {
                    rowObj = {
                        "template": "flxTransactions",
                        "lblTransaction": {
                            "text": "" + transArr[k].description
                        },
                        "lblTransactionAmount": {
                            "text": "" + transArr[k].Amount
                        },
                        "lblDate": {
                            "text": "" + (transArr[k].TransactionDate)
                        },
                        "imgIndicator": {
                            src: "billpay.png"
                        },
                        "transactionArr": transArr[k]
                    };
                    rowArr.push(rowObj);
                }
                this.view.flxNoTransactions.isVisible = false;
                combinedHeadRowArr.push(rowArr);
                finalArr.push(combinedHeadRowArr);
                this.postedaccounts = rowArr;
                this.segmentData = finalArr;
            } else {
                //this.view.expandCollapseViewTransactions.isVisible=false;
                this.pendingaccounts = [];
                this.postedaccounts = [];
                this.segmentData = [];
                this.view.flxNoTransactions.isVisible = true;
            }
            this.view.expandCollapseViewTransactions.setDataInList(widgetDataMapping, finalArr);
        } catch (e) {
            //alert("err")
            kony.print("exception setDatainSegment");
        }
    },
    flxBackOnClick: function() {
        var navMan = applicationManager.getNavigationManager();
        //     var formflow=navMan.getCustomInfo("frmdashboardflow");
        //     var nav = new kony.mvc.Navigation("frmUnifiedDashboard");
        //     nav.navigate();
        navMan.goBack();
        //     if(formflow!==undefined)
        //     {
        //       navMan.navigateTo(formflow);
        //     }  
    },
    getStatements: function() {
        var navManager = applicationManager.getNavigationManager();
        var accountsDetails = navManager.getCustomInfo("frmAccountDetailsNew");
        navManager.setCustomInfo("frmAccountDetails", accountsDetails);
        applicationManager.getPresentationUtility().showLoadingScreen();
        var accMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accMod.presentationController.fetchAccountStataments();
    },
    gotoAccountInfo: function() {
        var scope = this;
        var navManager = applicationManager.getNavigationManager();
        var responseObj = scope.view.accountSummaryNative.getContext();
        var bbAccountsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BBAccountsModule");
        navManager.setCustomInfo("frmAccountInfoNew", responseObj);
        bbAccountsModule.presentationController.commonFunctionForNavigation("BBAccountsModule/frmAccountInfoNew");
        //     var accountsDetails = navManager.getCustomInfo("frmAccountDetailsNew");
        //     var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        //     if(String(accountsDetails.selectedAccountData.type).toLowerCase().trim() === "external") {
        //       accountModule.presentationController.fetchInfoForExternalBankAccount();
        //     } else {
        //       navManager.setCustomInfo("frmAccountInfo", accountsDetails);
        //       accountModule.presentationController.commonFunctionForNavigation("frmAccountInfoNew");
        //     }
    },
    segTransactionsOnRowClick: function() {
        var navMan = applicationManager.getNavigationManager();
        var accountsDetails = navMan.getCustomInfo("frmAccountDetailsNew");
        var type = accountsDetails.selectedAccountData["type"];
        if (type !== undefined) {
            if (type.toLowerCase().trim() === "external") {
                return;
            }
        }
        //         var selectedSectionIndex = Math.floor(this.view.expandCollapseViewTransactions.segList.selectedRowIndex[0]);
        //         var selectedRowIndex = Math.floor(this.view.expandCollapseViewTransactions.segList.selectedRowIndex[1]);
        //         var transactionData = this.view.expandCollapseViewTransactions.segList.data[selectedSectionIndex][1][selectedRowIndex].transactionArr;
        var transactionData = navMan.getCustomInfo("frmAccountsTransactionDetails");
        var accMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accMod.presentationController.setEntryPoints(transactionData.transactionType);
        if (applicationManager.getConfigurationManager().isFastTransfersFlowEnabled() && (transactionData.transactionType === "P2P" || transactionData.transactionType === "InternalTransfer" || transactionData.transactionType === "ExternalTransfer")) {
            navMan.setCustomInfo("frmMMTransactionDetails", transactionData);
            navMan.setEntryPoint("frmMMTransactionDetails", "Accounts");
            accMod.presentationController.commonFunctionForNavigation("frmMMTransactionDetails");
        } else {
            var accountsDetailsData = navMan.getCustomInfo("frmAccountDetailsNew");
            navMan.setCustomInfo("frmAccountDetails", accountsDetailsData);
            //navMan.setCustomInfo("frmAccountsTransactionDetails", transactionData);
            navMan.setEntryPoint("frmTransactionDetails", "Accounts");
            //navMan.setEntryPoint("makeatransfer","frmAccountDetails");
            accMod.presentationController.commonFunctionForNavigation("frmAccountsTransactionDetails");
        }
    },
    tbxSearchOnTextChange: function() {
        var searchtext = this.view.customSearchbox.tbxSearch.text.toLowerCase();
        if (searchtext) {
            var data = [],
                headers = [];
            if (this.pendingaccounts !== null && this.postedaccounts !== null) {
                headers.push(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.pendingTransactions"));
                headers.push(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accountdetails.postedTransactions"));
                data.push(this.pendingaccounts);
                data.push(this.postedaccounts);
            } else if (this.pendingaccounts) {
                headers.push(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.pendingTransactions"));
                data.push(this.pendingaccounts);
            } else if (this.postedaccounts) {
                headers.push(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accountdetails.postedTransactions"));
                data.push(this.postedaccounts);
            }
            this.view.expandCollapseViewTransactions.isVisible = true;
            this.view.flxNoTransactions.isVisible = false;
            this.view.flxBalance.isVisible = false;
            //this.view.segTransactions.removeAll();
            var searchobj = this.commonSectionSegmentSearch("lblTransaction", searchtext, data, headers);
            if (searchobj.length > 0) {
                //this.view.expandCollapseViewTransactions.segList1.setData(this.segmentData);
                this.view.expandCollapseViewTransactions.setDataInList(widgetDataMapping, searchobj);
            } else {
                this.view.expandCollapseViewTransactions.isVisible = false;
                this.view.flxNoTransactions.isVisible = true;
            }
        } else {
            if (this.segmentData.length > 0) {
                this.view.expandCollapseViewTransactions.isVisible = true;
                this.view.expandCollapseViewTransactions.setDataInList(widgetDataMapping, this.segmentData);
                this.view.flxNoTransactions.isVisible = false;
                this.view.flxBalance.isVisible = false;
                this.view.flxOptions.isVisible = false;
            } else {
                this.view.expandCollapseViewTransactions.setDataInList(widgetDataMapping, this.segmentData);
                this.view.flxBalance.isVisible = false;
                this.view.expandCollapseViewTransactions.isVisible = false;
                this.view.flxNoTransactions.isVisible = true;
            }
        }
    },
    flxSearchOnTouchEnd: function() {
        var scope = this;
        this.view.flxMainContainer.skin = "sknFlxScrlffffff";
        this.view.flxHeaderSearchbox.setVisibility(true);
        this.view.flxHeader.setVisibility(false);
        this.view.flxSearch.setVisibility(false);
        this.view.flxContainer.setVisibility(false);
        this.view.flxShadow.setVisibility(false);
        this.view.flxBalance.setVisibility(false);
        this.view.flxSeperator2.setVisibility(false);
        this.view.flxOptions.setVisibility(false);
        this.view.expandCollapseViewTransactions.height = "100%";
        this.view.flxNoTransactions.height = "100%";
        this.view.flxMainContainer.top = "40dp";
        // this.view.customSearchbox.tbxSearch.setFocus(true);
        this.view.customSearchbox.tbxSearch.onTextChange = this.tbxSearchOnTextChange;
        kony.timer.schedule("timerId", function() {
            scope.view.customSearchbox.tbxSearch.setFocus(true);
        }, 0.1, false);
        this.view.flxMainContainer.forceLayout();
    },
    btnCancelOnClick: function() {
        this.resetform();
    },
    commonSectionSegmentSearch: function(field, searchText, data, headers) {
        var searchdata = [],
            segEachData = [];
        try {
            for (var i = 0; i < data.length; i++) {
                segEachData = [];
                //alert("data"+JSON.stringify(data[i]));
                for (var j = 0; j < data[i].length; j++) {
                    if (data[i][j][field].text !== undefined && data[i][j][field].text.toLowerCase().indexOf(searchText) >= 0) {
                        segEachData.push(data[i][j]);
                    }
                }
                if (segEachData.length > 0) {
                    var combinedHeadRowArr = [];
                    combinedHeadRowArr.push({
                        "template": "flxApprovalReqExpColHeader",
                        "lblHeader": {
                            "text": headers[i]
                        },
                        "imgUpArrow": {
                            "src": "arrowupblue.png"
                        },
                    });
                    combinedHeadRowArr.push(segEachData);
                    searchdata.push(combinedHeadRowArr);
                }
            }
            return searchdata;
        } catch (err) {
            kony.print("Error in segment search " + err);
        }
    },
    navigateToAdvanceSearch: function() {
        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountMod.presentationController.commonFunctionForNavigation("frmAdvanceSearch");
        //custom metric API to generate Reports
        KNYMetricsService.sendCustomMetrics("frmAccountDetails", {
            "Search Transactions": "Initial Search"
        });
    },
    resetform: function() {
        this.view.flxMainContainer.skin = "slFSbox";
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxMainContainer.top = "56dp";
            this.view.flxHeader.isVisible = true;
            this.view.flxSearch.setVisibility(true);
            //  this.view.flxContainer.setVisibility(true);
            this.view.flxHeaderSearchbox.setVisibility(false);
            this.view.flxMainContainer.bottom = "0dp";
        } else {
            this.view.flxHeader.isVisible = false;
            this.view.flxMainContainer.top = "-1dp";
            this.view.flxMainContainer.bottom = "60dp";
            this.view.flxSearch.setVisibility(true);
            //this.view.flxContainer.setVisibility(true);
            this.view.flxHeaderSearchbox.setVisibility(false);
        }
        this.view.flxNoTransactions.height = "400dp";
        this.view.tbxSearch.setFocus(false);
        this.view.flxShadow.setVisibility(false);
        this.view.flxBalance.setVisibility(true);
        this.view.flxSeperator2.setVisibility(true);
        this.view.customSearchbox.tbxSearch.text = "";
        this.view.tbxSearch.text = "";
        var navManager = applicationManager.getNavigationManager();
        var accountsDetails = navManager.getCustomInfo("frmAccountDetailsNew");
        var type = accountsDetails.selectedAccountData["type"];
        if (!kony.sdk.isNullOrUndefined(type)) {
            if (type.toLowerCase().trim() === "internal") {
                this.view.flxOptions.isVisible = true;
            }
        }
        if (!kony.sdk.isNullOrUndefined(accountsDetails.selectedAccountData.externalIndicator) && accountsDetails.selectedAccountData.externalIndicator === "true") this.view.flxOptions.isVisible = false;
        this.view.expandCollapseViewTransactions.height = "preferred";
        if (this.segmentData.length > 0) {
            this.view.expandCollapseViewTransactions.setDataInList(widgetDataMapping, this.segmentData);
            this.view.expandCollapseViewTransactions.isVisible = true;
            this.view.flxNoTransactions.isVisible = false;
            this.view.flxBalance.isVisible = true;
        } else {
            this.view.flxBalance.isVisible = true;
            this.view.expandCollapseViewTransactions.isVisible = false;
            this.view.flxNoTransactions.isVisible = true;
        }
        this.view.flxMainContainer.forceLayout();
    }
});
define("BBAccountsModule/frmAccountDetailsNewControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_aa807499ad3f411f9e0b972be5cab97a: function AS_FlexContainer_aa807499ad3f411f9e0b972be5cab97a(eventobject) {
        var self = this;
        this.gotoAccountInfo();
    },
    AS_FlexContainer_b1d1a2b436bc44a2a85fd836ed7a2552: function AS_FlexContainer_b1d1a2b436bc44a2a85fd836ed7a2552(eventobject) {
        var self = this;
        return self.navigateToAdvanceSearch.call(this);
    },
    AS_Form_j2175e623bc64812a2fea9925d60ec80: function AS_Form_j2175e623bc64812a2fea9925d60ec80(eventobject) {
        var self = this;
        this.frmAccountDetailsNewPreshow();
    },
    AS_BarButtonItem_d77b90474b104785939de7dd31e31c36: function AS_BarButtonItem_d77b90474b104785939de7dd31e31c36(eventobject) {
        var self = this;
        this.flxBackOnClick();
    },
    AS_BarButtonItem_gb54c57b0f5c4505b45d40f39d620f42: function AS_BarButtonItem_gb54c57b0f5c4505b45d40f39d620f42(eventobject) {
        var self = this;
        this.gotoAccountInfo();
    }
});
define("BBAccountsModule/frmAccountDetailsNewController", ["BBAccountsModule/userfrmAccountDetailsNewController", "BBAccountsModule/frmAccountDetailsNewControllerActions"], function() {
    var controller = require("BBAccountsModule/userfrmAccountDetailsNewController");
    var controllerActions = ["BBAccountsModule/frmAccountDetailsNewControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
