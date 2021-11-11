define("TransferModuleEurope/userfrmTransferActivitiesTransfersEuropeController", {
    init: function() {
        var scope = this;
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "CALLBACK", currentForm, scope.navigateCustomBack);
    },
    preShow: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
            this.view.flxTransfersList.top = "132dp";
        } else {
            this.view.flxHeader.isVisible = true;
            this.view.flxTransfersList.top = "188dp";
        }
        var navManager = applicationManager.getNavigationManager();
        this.initActions();
        if (navManager.getCustomInfo("frmTransferActivitiesTransfersEurope")) {
            var response = navManager.getCustomInfo("frmTransferActivitiesTransfersEurope").DELETE;
            var attachmentError = navManager.getCustomInfo("frmTransferActivitiesTransfersEurope").attachmentError;
            if (attachmentError) {
                this.errorMessage(attachmentError);
            }
            if (response) {
                this.showToastMessage(response);
            }
            navManager.setCustomInfo("frmTransferActivitiesTransfersEurope", null);
        }
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    showToastMessage: function(response) {
        var msg = kony.i18n.getLocalizedString('kony.mb.transfers.transferCancelToast') + (response.transactionId || response.referenceId);
        applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, msg);
    },
    initActions: function() {
        var scope = this;
        var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var navMan = applicationManager.getNavigationManager();
        this.view.customHeader.flxBack.onClick = this.navigateCustomBack;
        this.view.TransfersListMobileNative.onRequestStart = function() {
            applicationManager.getPresentationUtility().showLoadingScreen();
        };
        this.view.TransfersListMobileNative.onRequestEnd = function() {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
        };
        this.view.TransfersListMobileNative.getTransactionsData = function() {};
        this.view.TransfersListMobileNative.onSwipeButtonClick = function(rowData) {
            if (rowData.id === "repeat") {
                scope.repeatTrans(rowData);
            } else if (rowData.id === "edit") {
                scope.editTrans(rowData)
            }
        };
        this.view.TransfersListMobileNative.onDeleteSuccess = function(response) {
            scope.showToastMessage(response);
        };
        this.view.TransfersListMobileNative.onDeleteError = function(err) {
            this.errorMessage(err);
        };
        this.view.TransfersListMobileNative.onRowClick = function(data) {
            applicationManager.getPresentationUtility().showLoadingScreen();
            var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
            transferModPresentationController.retriveAttachments(data, scope.attachmentsSuccessCallback.bind(this, data));
        };
        this.view.TransfersListMobileNative.onFetchError = function(err) {
            if (err["isServerUnreachable"]) {
                applicationManager.getPresentationUtility().dismissLoadingScreen();
                applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
            } else {
                applicationManager.getDataProcessorUtility().showToastMessageError(scope, err["errorMessage"]);
            }
            applicationManager.getPresentationUtility().dismissLoadingScreen();
        };
    },
    errorMessage: function(err) {
        if (err["isServerUnreachable"]) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
        } else {
            if (err["errorMessage"]) applicationManager.getDataProcessorUtility().showToastMessageError(this, err["errorMessage"]);
            else applicationManager.getDataProcessorUtility().showToastMessageError(this, JSON.stringify(err));
        }
    },
    attachmentsSuccessCallback: function(data, response) {
        if (response && response.fileNames) {
            data.fileNames = response.fileNames;
        }
        var navMan = applicationManager.getNavigationManager();
        navMan.setCustomInfo("frmTransfersDetailsEurope", data);
        navMan.setEntryPoint("europeTransferFlow", "frmTransferActivitiesTransfersEurope");
        navMan.navigateTo("frmTransfersDetailsEurope");
    },
    navigateCustomBack: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    },
    onNavigate: function() {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scope = this;
        var params = {};
        var tokenParams = kony.sdk.getCurrentInstance().tokens.DbxUserLogin.provider_token.params.security_attributes;
        //var isCombinedUser = kony.sdk.getCurrentInstance().tokens.DbxUserLogin.provider_token.params.user_attributes.isCombinedUser;
        var accountManager = applicationManager.getAccountManager();
        var accountNumberBusinessAccountMap = this.getAccountMap(accountManager.getInternalAccounts());
        var isCombinedUser = this.getCombinedUserFlag(accountNumberBusinessAccountMap);
        params.entitlement = {};
        params.isCombinedUser = isCombinedUser;
        params.accountNumberBusinessAccountMap = accountNumberBusinessAccountMap;
        params.entitlement.features = JSON.parse(tokenParams.features);
        params.entitlement.permissions = JSON.parse(tokenParams.permissions);
        this.view.tabs.setContext(params);
        var selectedTab = this.view.tabs.defaultTab;
        this.view.tabs.setSelectedTab(selectedTab);
        this.view.tabs.onError = this.onError;
        this.view.tabs.onTabClick = this.onTabClick;
        this.view.SearchAndFilter.onFilterSelect = this.setFilteredValues;
        this.view.SearchAndFilter.onSearchTextChange = this.setSearchedValues;
        this.view.SearchAndFilter.onError = this.onError;
        this.view.TransfersListMobileNative.setContext(params);
    },
    getCombinedUserFlag: function(accountMap) {
        let booleanSet = new Set();
        for (let key in accountMap) {
            booleanSet.add(accountMap[key]);
        }
        return booleanSet.size > 1;
    },
    getAccountMap: function(accountList) {
        var accountMap = {};
        accountList.forEach(function(account) {
            accountMap[account.accountID] = account.isBusinessAccount;
        });
        return accountMap;
    },
    onError: function(err) {
        kony.application.dismissLoadingScreen();
        alert(JSON.stringify(err));
    },
    onTabClick: function(tabId) {
        var navMan = applicationManager.getNavigationManager();
        if (tabId == "Recurring") {
            navMan.navigateTo("frmTransferActivitiesRecurringEurope");
        } else if (tabId == "Direct Debits") {
            navMan.navigateTo("frmTransferActivitiesDirectDebitsEurope");
        } else {
            navMan.navigateTo("frmTransferActivitiesTransfersEurope");
        }
    },
    setFilteredValues: function(params, visibility, headerHeight) {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxTransfersList.top = (visibility) ? 132 + Number(headerHeight) + "dp" : "132dp";
        } else {
            this.view.flxTransfersList.top = (visibility) ? 188 + Number(headerHeight) + "dp" : "188dp";
        }
        this.view.TransfersListMobileNative.onFilterSelect(params);
    },
    setSearchedValues: function(params) {
        this.view.TransfersListMobileNative.onSearch(params);
    },
    repeatTrans: function(transactionData) {
        var navMan = applicationManager.getNavigationManager();
        var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transferModPresentationController.initializeStateData(false, "");
        if (transactionData) transferModPresentationController.setTransactionMode(transactionData.serviceName);
        if (transferModPresentationController.transactionMode === applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts")) {
            transferModPresentationController.setEuropeFlowType("INTERNAL");
            transferModPresentationController.getFromAccounts(function(res) {
                transferModPresentationController.setFromAndToAccounts(res);
                transferModPresentationController.repeatTransfer(transactionData);
            });
        } else {
            transferModPresentationController.setEuropeFlowType("EXTERNAL");
            transferModPresentationController.getFromAndToAccounts(function(res) {
                transferModPresentationController.setFromAndToAccounts(res);
                transferModPresentationController.repeatTransfer(transactionData);
            });
        }
    },
    editTrans: function(transactionData) {
        var navMan = applicationManager.getNavigationManager();
        var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transferModPresentationController.initializeStateData(false, "");
        if (transactionData) {
            transferModPresentationController.setTransactionMode(transactionData.serviceName);
            navMan.setCustomInfo("existingAttachments", transactionData.fileNames);
        }
        if (transferModPresentationController.transactionMode === applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfer.MyKonyAccounts")) {
            transferModPresentationController.setEuropeFlowType("INTERNAL");
            transferModPresentationController.getFromAccounts(function(res) {
                transferModPresentationController.setFromAndToAccounts(res);
                transferModPresentationController.setTransactionObject(transactionData);
            });
        } else {
            transferModPresentationController.setEuropeFlowType("EXTERNAL");
            transferModPresentationController.getFromAndToAccounts(function(res) {
                transferModPresentationController.setFromAndToAccounts(res);
                transferModPresentationController.setTransactionObject(transactionData);
            });
        }
    }
});
define("TransferModuleEurope/frmTransferActivitiesTransfersEuropeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_afb26ff07e25422684ab4bc751ac41e4: function AS_Form_afb26ff07e25422684ab4bc751ac41e4(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_d37a0e12769848e1a1cd5cb62694157e: function AS_Form_d37a0e12769848e1a1cd5cb62694157e(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_e30f2075d06b473b90918a822f47d047: function AS_BarButtonItem_e30f2075d06b473b90918a822f47d047(eventobject) {
        var self = this;
        this.navigateCustomBack();
    }
});
define("TransferModuleEurope/frmTransferActivitiesTransfersEuropeController", ["TransferModuleEurope/userfrmTransferActivitiesTransfersEuropeController", "TransferModuleEurope/frmTransferActivitiesTransfersEuropeControllerActions"], function() {
    var controller = require("TransferModuleEurope/userfrmTransferActivitiesTransfersEuropeController");
    var controllerActions = ["TransferModuleEurope/frmTransferActivitiesTransfersEuropeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
