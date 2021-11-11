define("MoneyMovementModule/userfrmTransferActivitiesDirectDebitsController", {
    init: function() {
        var scope = this;
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "CALLBACK", currentForm, scope.navigateCustomBack);
    },
    preShow: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        } else {
            this.view.flxHeader.isVisible = true;
        }
        this.initActions();
        var navManager = applicationManager.getNavigationManager();
        if (navManager.getCustomInfo("frmTransferActivitiesDirectDebits")) {
            var response = navManager.getCustomInfo("frmTransferActivitiesDirectDebits").DELETE;
            this.showToastMessage(response);
            navManager.setCustomInfo("frmTransferActivitiesDirectDebits", null);
        }
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    showToastMessage: function(response) {
        var msg = kony.i18n.getLocalizedString('knoy.mb.transfers.directDebitToast');
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
        this.view.TransfersListMobileNative.onSwipeButtonClick = function(rowData) {};
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
            navMan.setCustomInfo("frmDirectDebitsDetails", data);
            navMan.navigateTo("frmDirectDebitsDetails");
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
        var isCombinedUser = kony.sdk.getCurrentInstance().tokens.DbxUserLogin.provider_token.params.user_attributes.isCombinedUser;
        params.entitlement = {};
        params.isCombinedUser = isCombinedUser;
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
        this.view.TransfersListMobileNative.onFilterSelect(params);
    },
    setSearchedValues: function(params) {
        this.view.TransfersListMobileNative.onSearch(params);
    },
});
define("MoneyMovementModule/frmTransferActivitiesDirectDebitsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_i7c64530fa16401eaa0ce9e38b651ee3: function AS_Form_i7c64530fa16401eaa0ce9e38b651ee3(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_cfb8e5861ea34874b87dd73fb6b1fb47: function AS_Form_cfb8e5861ea34874b87dd73fb6b1fb47(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_f61951fe659946958e4516fefd7b7504: function AS_BarButtonItem_f61951fe659946958e4516fefd7b7504(eventobject) {
        var self = this;
        this.navigateCustomBack();
    }
});
define("MoneyMovementModule/frmTransferActivitiesDirectDebitsController", ["MoneyMovementModule/userfrmTransferActivitiesDirectDebitsController", "MoneyMovementModule/frmTransferActivitiesDirectDebitsControllerActions"], function() {
    var controller = require("MoneyMovementModule/userfrmTransferActivitiesDirectDebitsController");
    var controllerActions = ["MoneyMovementModule/frmTransferActivitiesDirectDebitsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
