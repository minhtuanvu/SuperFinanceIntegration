define("MoneyMovementModule/userfrmTransferActivitiesTransfersController", {
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
        if (navManager.getCustomInfo("frmTransferActivitiesTransfers")) {
            var response = navManager.getCustomInfo("frmTransferActivitiesTransfers").DELETE;
            this.showToastMessage(response);
            navManager.setCustomInfo("frmTransferActivitiesTransfers", null);
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
        var transferModPresentationController = applicationManager.getModulesPresentationController("MoneyMovementModule");
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
            if (err["isServerUnreachable"]) {
                applicationManager.getPresentationUtility().dismissLoadingScreen();
                applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
            } else {
                if (err["errorMessage"]) applicationManager.getDataProcessorUtility().showToastMessageError(scope, err["errorMessage"]);
                else applicationManager.getDataProcessorUtility().showToastMessageError(scope, JSON.stringify(err));
            }
        };
        this.view.TransfersListMobileNative.onRowClick = function(data) {
            navMan.setCustomInfo("frmTransfersDetails", data);
            navMan.setEntryPoint("centralmoneymovement", "frmTransferActivitiesTransfers");
            navMan.navigateTo("frmTransfersDetails");
        }
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
    navigateCustomBack: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    },
    onNavigate: function() {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scope = this;
        var params = {};
        var tokenParams = kony.sdk.getCurrentInstance().tokens.DbxUserLogin.provider_token.params.security_attributes;
        // var isCombinedUser = kony.sdk.getCurrentInstance().tokens.DbxUserLogin.provider_token.params.user_attributes.isCombinedUser;
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
            navMan.navigateTo("frmTransferActivitiesRecurring");
        } else if (tabId == "Direct Debits") {
            navMan.navigateTo("frmTransferActivitiesDirectDebits");
        } else {
            navMan.navigateTo("frmTransferActivitiesTransfers");
        }
    },
    setFilteredValues: function(params, visibility, headerHeight) {
        if (kony.os.deviceInfo().name === "iPhone") {
            if (params === "All") {
                this.view.flxTransfersList.top = "132dp";
            } else {
                this.view.flxTransfersList.top = (visibility) ? 132 + Number(headerHeight) + "dp" : "132dp";
            }
        } else {
            if (params === "All") {
                this.view.flxTransfersList.top = "188dp";
            } else {
                this.view.flxTransfersList.top = (visibility) ? 188 + Number(headerHeight) + "dp" : "188dp";
            }
        }
        this.view.TransfersListMobileNative.onFilterSelect(params);
    },
    setSearchedValues: function(params) {
        this.view.TransfersListMobileNative.onSearch(params);
    },
    repeatTrans: function(transactionData) {
        var navMan = applicationManager.getNavigationManager();
        var mmModulePresentationController = applicationManager.getModulesPresentationController("MoneyMovementModule");
        mmModulePresentationController.initializeStateData(false, "");
        if (transactionData) mmModulePresentationController.setTransactionMode(transactionData.serviceName);
        mmModulePresentationController.getFromAndToAccounts(function(res) {
            mmModulePresentationController.setFromAndToAccounts(res);
            mmModulePresentationController.repeatTransfer(transactionData);
        });
    },
    editTrans: function(transactionData) {
        var navMan = applicationManager.getNavigationManager();
        var mmModulePresentationController = applicationManager.getModulesPresentationController("MoneyMovementModule");
        mmModulePresentationController.initializeStateData(false, "");
        if (transactionData) {
            mmModulePresentationController.setTransactionMode(transactionData.serviceName);
            navMan.setCustomInfo("existingAttachments", transactionData.fileNames);
            mmModulePresentationController.setTransactionMode(transactionData.serviceName);
            mmModulePresentationController.getFromAndToAccounts(function(res) {
                mmModulePresentationController.setFromAndToAccounts(res);
                mmModulePresentationController.setTransactionObject(transactionData);
            });
        }
    }
});
define("MoneyMovementModule/frmTransferActivitiesTransfersControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_ad5eb39b64e54dd4bda8bbbb63a32543: function AS_Form_ad5eb39b64e54dd4bda8bbbb63a32543(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_g722ab84c4a14185b37c5612ece53e0a: function AS_Form_g722ab84c4a14185b37c5612ece53e0a(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_e8178ac587804115808c7ab564f0667f: function AS_BarButtonItem_e8178ac587804115808c7ab564f0667f(eventobject) {
        var self = this;
        this.navigateCustomBack();
    }
});
define("MoneyMovementModule/frmTransferActivitiesTransfersController", ["MoneyMovementModule/userfrmTransferActivitiesTransfersController", "MoneyMovementModule/frmTransferActivitiesTransfersControllerActions"], function() {
    var controller = require("MoneyMovementModule/userfrmTransferActivitiesTransfersController");
    var controllerActions = ["MoneyMovementModule/frmTransferActivitiesTransfersControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
