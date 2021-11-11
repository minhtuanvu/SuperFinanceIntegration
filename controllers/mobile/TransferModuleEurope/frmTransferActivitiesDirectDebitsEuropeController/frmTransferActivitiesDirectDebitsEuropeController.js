define({
  init: function () {
    var scope=this;
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "CALLBACK", currentForm, scope.navigateCustomBack);
  },
  preShow: function () {
    if (kony.os.deviceInfo().name === "iPhone") {
      this.view.flxHeader.isVisible = false;
    }
    else {
      this.view.flxHeader.isVisible = true;
    }
    this.initActions();
    var navManager = applicationManager.getNavigationManager();
    if (navManager.getCustomInfo("frmTransferActivitiesDirectDebitsEurope")) {
      var response = navManager.getCustomInfo("frmTransferActivitiesDirectDebitsEurope").DELETE;
      this.showToastMessage(response);
      navManager.setCustomInfo("frmTransferActivitiesDirectDebitsEurope", null);
    }
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  
  showToastMessage: function(response) {
    if(response.buttonIdentifier){
      if(response.buttonIdentifier ==="Cancel1"){
        var msg = kony.i18n.getLocalizedString('knoy.mb.transfers.directDebitToast');
        if (response.orderId) {
          msg = msg + "\n" + kony.i18n.getLocalizedString('kony.mb.common.refNumberColon') + " " + response.orderId;
        }  
        applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, msg);
      } 
      if(response.buttonIdentifier ==="Cancel2"){
      if (response.directDebitId || response.orderId) {
        var msg = kony.i18n.getLocalizedString('i18n.DirectDebit.SkipToast')+(response.directDebitId||response.orderId);
      }
      applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, msg);
      }
    }else{
      var msg = kony.i18n.getLocalizedString('knoy.mb.transfers.directDebitToast');
      if (response.orderId) {
        msg = msg + "\n" + kony.i18n.getLocalizedString('kony.mb.common.refNumberColon') + " " + response.orderId;
      }  
      applicationManager.getDataProcessorUtility().showToastMessageSuccess(this, msg);
    }
  },
  
  initActions: function () {
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
    this.view.TransfersListMobileNative.onSwipeButtonClick = function(rowData) {};
    this.view.TransfersListMobileNative.onDeleteSuccess = function(response) {
      scope.showToastMessage(response);
    };
    this.view.TransfersListMobileNative.onDeleteError = function(err) {
      if (err["isServerUnreachable"]) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
      } else { 
        if (err["errorMessage"])
          applicationManager.getDataProcessorUtility().showToastMessageError(scope, err["errorMessage"]);
        else
          applicationManager.getDataProcessorUtility().showToastMessageError(scope, JSON.stringify(err));
      }
    };
    this.view.TransfersListMobileNative.onRowClick = function(data) {
      navMan.setCustomInfo("frmDirectDebitsDetailsEurope", data);
      navMan.navigateTo("frmDirectDebitsDetailsEurope");
    };
    this.view.TransfersListMobileNative.onFetchError = function(err){
      if (err["isServerUnreachable"]) {
      	applicationManager.getPresentationUtility().dismissLoadingScreen();
      	applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
      } else { 
    	applicationManager.getDataProcessorUtility().showToastMessageError(scope, err["errorMessage"]);
      }
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    };
  },
  navigateCustomBack: function () {
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
    this.view.tabs.onError=this.onError;
    this.view.tabs.onTabClick=this.onTabClick;
    this.view.SearchAndFilter.onFilterSelect = this.setFilteredValues;
    this.view.SearchAndFilter.onSearchTextChange = this.setSearchedValues;
    this.view.SearchAndFilter.onError = this.onError;
    this.view.TransfersListMobileNative.setContext(params);
  },
  onError: function(err){
    kony.application.dismissLoadingScreen();
    alert(JSON.stringify(err));
  },
  onTabClick: function(tabId){
    var navMan = applicationManager.getNavigationManager();
    if(tabId == "Recurring")
     {
       navMan.navigateTo("frmTransferActivitiesRecurringEurope");
     } else if (tabId == "Direct Debits") {
       navMan.navigateTo("frmTransferActivitiesDirectDebitsEurope");
     } else {
       navMan.navigateTo("frmTransferActivitiesTransfersEurope");
     }
  },
  setFilteredValues: function(params,visibility,headerHeight) {
    this.view.TransfersListMobileNative.onFilterSelect(params);
  },
  setSearchedValues: function(params) {
    this.view.TransfersListMobileNative.onSearch(params);
  },
});