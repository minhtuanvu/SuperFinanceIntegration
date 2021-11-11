define(['CommonUtilities'], function(CommonUtilities) {
  return {
    //segmentRowDataId : [],
    sortByCustomData: "",
    segResponse: {},
    totalValue: "",
    selectedRicCode: "",
    selectedISINCode: "",
    selectedWatchlistId: "",
    accountData: "",
    cashAcc: {},
    init: function() {
      this.view.preShow = this.preShow;
      var navManager = applicationManager.getNavigationManager();
      var currentForm = navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
      this.initActions();
    },
    preShow: function() {
      this.view.flxAdditionalOptions.setVisibility(false);
      this.view.flxConfirmationPopUp.setVisibility(false);
      var navManager = applicationManager.getNavigationManager();
      this.sortByCustomData = navManager.getCustomInfo("frmSortBy");
      var params = {
        "portfolioId": scope_WealthPresentationController.watchlistPortfolioId,
        "navPage": "Watchlist",
        "sortBy": (scope_WealthPresentationController.sortByValueWatchlist === "")?"instrumentName":scope_WealthPresentationController.sortByValueWatchlist,
        "searchByInstrumentName": " ",
      };
      this.view.segmentDetailsWealth.setContext(params);
      this.view.segmentDetailsWealth.requestParam.portfolioId = scope_WealthPresentationController.watchlistPortfolioId;
      var data = {};
      navManager.setCustomInfo("frmInstrumentDetails", data); 
      if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
        this.view.flxHeader.isVisible = true;
      } else {
        this.view.flxHeader.isVisible = false;
      }
      this.view.flxAdditionalOptions.setVisibility(false);
      this.view.flxAdditionalOptions.isVisible = false;  
      this.view.segmentDetailsWealth.onMoveToCashAccounts = this.cashAccounts; 
      var wealthModule = applicationManager.getModulesPresentationController("WealthModule");
      this.accountData = wealthModule.getWatchlistAccountsList(); 
      var investmentAccList = this.accountData.response.PortfolioList.portfolioList;
      scope_WealthPresentationController.watchlistAccountName = CommonUtilities.truncateStringWithGivenLength(investmentAccList[0].accountName + "....", 26) + CommonUtilities.getLastFourDigit(investmentAccList[0].accountNumber);
      scope_WealthPresentationController.watchlistPortfolioId = investmentAccList[0].accountNumber;
      this.getAssetsAllocation();
      this.checkPermission("Watchlist");
    },
    cashAccounts: function() {
      var navManager = applicationManager.getNavigationManager();
      var data = {};
      var investmentAccList = this.accountData.response.PortfolioList.portfolioList;
      scope_WealthPresentationController.watchlistCashAccountsList.response = investmentAccList;
      scope_WealthPresentationController.watchlistCashAccountsList.accountName = scope_WealthPresentationController.watchlistAccountName || CommonUtilities.truncateStringWithGivenLength(investmentAccList[0].accountName + "....", 26) + CommonUtilities.getLastFourDigit(investmentAccList[0].accountNumber);
      navManager.navigateTo("frmCashAccounts");
    },
    getAssetsAllocation: function() {
      var inputParams = {
        "portfolioId": scope_WealthPresentationController.watchlistPortfolioId,
      };
      var wealthModule = applicationManager.getModulesPresentationController("WealthModule");
      wealthModule.getAssetsAllocation(inputParams);
    },
    dummyFunc: function(param, dets) {
      var data = {};
      var watchlist = dets.rowdetails;
      watchlist.totalValue = dets.totalValue;
      data.response = watchlist;
      this.selectedRicCode = watchlist.RIC;
      this.selectedISINCode = watchlist.ISINCode;
      this.selectedWatchlistId = watchlist.instrumentId;
      var navManager = applicationManager.getNavigationManager();
      navManager.setCustomInfo("frmInstrumentDetails", data);
      this.setUpActionSheet("Watchlist");
      this.checkPermission("Watchlist");
    },
    initActions: function() {
      var self = this;
      this.view.segmentDetailsWealth.onActionButtonClicked = this.dummyFunc;
      this.view.segmentDetailsWealth.onRequestStart = function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
      };
      this.view.segmentDetailsWealth.onRequestEnd = function() {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
      };
      this.view.flxMore.onTouchEnd = self.onClickMoreOptions;
      this.view.customHeader.flxBack.onTouchEnd = this.navigateCustomBack;
    },
    onClickMoreOptions: function() {
      this.checkPermission("MoreOptions");
      this.setUpActionSheet("MoreOptions");
    },
    setUpActionSheet: function(triggerPoint) {   
      if (triggerPoint === "Watchlist") {
        this.view.flxAccounts.isVisible = true;
        this.view.flxDelete.isVisible = true;
        this.view.lblPerformance.text = kony.i18n.getLocalizedString("i18n.wealth.view");
        this.view.lblAccounts.text = kony.i18n.getLocalizedString("i18n.wealth.buy");
        this.view.lblReport.text = kony.i18n.getLocalizedString("i18n.wealth.sell");
        this.view.lblDelete.text = "Delete";
        this.view.flxPerformance.onTouchEnd = this.onClickView;
        this.view.flxAccounts.onTouchEnd = this.onClickBuy;
        this.view.flxReport.onTouchEnd = this.onClickSell;
        this.view.flxDelete.onTouchEnd = this.onClickDelete;
        this.view.flxYes.onTouchEnd = this.onClickDeleteYes;
        this.view.flxNo.onTouchEnd = this.onClickDeleteNo;
        this.view.flxCancelOption.onTouchEnd = this.onClickWatchlistCancel;
      } else {
        this.view.flxAccounts.isVisible = false;
        this.view.flxDelete.isVisible = false;
        this.view.lblPerformance.text = "Download";
        this.view.lblReport.text = kony.i18n.getLocalizedString("i18n.wealth.sortBy");
        this.view.flxPerformance.onTouchEnd = this.onClickDownloadTxns;
        this.view.flxReport.onTouchEnd = this.onClickSortBy;
        this.view.flxCancelOption.onTouchEnd = this.onClickCancel;
      }
      this.view.flxAdditionalOptions.isVisible = true;
    },
    checkPermission: function(triggerPoint){
      var configManager = applicationManager.getConfigurationManager();
      if (triggerPoint === "Watchlist") {
        let watchListViewPermission = false;
        let watchListBuyPermission = false;
        let watchListSellPermission = false;
        let watchListDeletePermission = false;
        var getPermissionDetails = JSON.parse(this.view.segmentDetailsWealth.getFeaturesAndPermissions());
        if (typeof getPermissionDetails !== "undefined") {
          if (getPermissionDetails.view.length > 0) {
            watchListViewPermission = configManager.checkAtLeastOnePermission(getPermissionDetails.view);
            this.view.flxPerformance.isVisible = watchListViewPermission;
          }
          if (getPermissionDetails.buy.length > 0) {
            watchListBuyPermission = configManager.checkAtLeastOnePermission(getPermissionDetails.buy);
            this.view.flxAccounts.isVisible = watchListBuyPermission;
          }
          if (getPermissionDetails.sell.length > 0) {
            watchListSellPermission = configManager.checkAtLeastOnePermission(getPermissionDetails.sell);
            this.view.flxReport.isVisible = watchListSellPermission;
          }
          if (getPermissionDetails.delete.length > 0) {
            watchListDeletePermission = configManager.checkAtLeastOnePermission(getPermissionDetails.delete);
            this.view.flxDelete.isVisible = watchListDeletePermission;
          }
        }
        if (watchListSellPermission!==true && watchListBuyPermission!==true && watchListViewPermission!==true && watchListDeletePermission!==true) {
          this.view.segmentDetailsWealth.setVisibleActionImage(false);
        }
        else {
          this.view.segmentDetailsWealth.setVisibleActionImage(true);
        }
      } else {
            this.view.flxReport.isVisible = true;
            this.view.flxPerformance.isVisible = true;
        }
    },
    onClickView: function() {
      scope_WealthPresentationController.instrumentDetailsEntry = true;
      this.callOnNavigate('view');
    },
    onClickBuy: function() {
      this.callOnNavigate('buy');
    },
    onClickSell: function() {
      this.callOnNavigate('sell');
    },
    onClickDelete: function() {
      this.view.flxConfirmationPopUp.isVisible = true;  
      this.view.flxAdditionalOptions.isVisible = false;
    },
    onClickDeleteNo: function() {
      this.view.flxConfirmationPopUp.isVisible = false;
    },
    onClickDeleteYes: function() {
      this.onClickDeleteInstrument();
    },
    onClickDeleteInstrument: function() {
      var ricId = this.selectedRicCode;
      var param = {
        "RICCode":ricId,
        "operation": "Remove"
      };
      var wealthModule = applicationManager.getModulesPresentationController("WealthModule");
      wealthModule.updateUserFavouriteInstruments(param);
    },
    callOnNavigate: function(selectedWatchlist) {
      scope_WealthPresentationController.searchEntryPoint = false;
      var navManager = applicationManager.getNavigationManager();
      var ricId = this.selectedRicCode;
      var isin = this.selectedISINCode;
      var watchlistId = this.selectedWatchlistId;
      var param = {
        "ISINCode": isin,
        "RICCode":ricId,
        "instrumentId" : watchlistId
      };
      var selData = {
        'selWatchlist': selectedWatchlist,
        // 'response': this.segResponse.response
      };
      navManager.setCustomInfo("frmWatchlist", selData);
      var wealthModule = applicationManager.getModulesPresentationController("WealthModule");
      wealthModule.getInstrumentDetails(param);
    },
    onClickWatchlistCancel: function() {
      this.view.flxAdditionalOptions.isVisible = false;
    },
    onClickDownloadTxns: function() {
      scope_WealthPresentationController.downloadParams = this.view.segmentDetailsWealth.getCriteriaObjValue();
      scope_WealthPresentationController.downloadParams.navPage = "Watchlist";
      var wealthModule = applicationManager.getModulesPresentationController("WealthModule");
      wealthModule.getDownloadList(scope_WealthPresentationController.downloadParams);
      kony.print("test"+scope_WealthPresentationController.downloadParams);
    },
    onClickDownloadMessage:function(base64String,filename) {
      try {  
        this.view.flxPopup.setVisibility(false);
        this.view.flxAdditionalOptions.isVisible = false;
        this.view.socialshare.shareWithBase64(base64String,filename);         
      }catch(error){
        applicationManager.getPresentationUtility().dismissLoadingScreen();
      }
    },
    onClickCancel: function() {
      this.view.flxAdditionalOptions.isVisible = false;
    },
    navigateCustomBack: function() {
      var wealthModule = applicationManager.getModulesPresentationController("WealthModule");
      wealthModule.commonFunctionForgoBack();
    },
    onClickSortBy: function() {
      var data = {};
      // data.searchText = this.view.tbxSearch.text;
      var navManager = applicationManager.getNavigationManager();
      if (scope_WealthPresentationController.sortByValueWatchlist === "") {
        data.sortByValue = "instrumentName";
        navManager.setCustomInfo("frmWatchlist", data);
      } else {
        data.sortByValue = scope_WealthPresentationController.sortByValueWatchlist;
        navManager.setCustomInfo("frmWatchlist", data);
      }
      var wealthModule = applicationManager.getModulesPresentationController("WealthModule");
      wealthModule.commonFunctionForNavigation("frmSortBy");
    },
    populateCashBalance: function(responseObj){   
      let forUtility = applicationManager.getFormatUtilManager();
      let cashAccFromResponse = responseObj.cashAccounts;
      this.cashAcc = [];
      var trimmedAccName = "";
      this.cashAcc = this.checkCashBalance(cashAccFromResponse);
      scope_WealthPresentationController.portfolioCashAccounts = this.cashAcc;
      var cashList;
      var cashData = [];
      for (var i in this.cashAcc) {
        cashList = {
          accountName: CommonUtilities.truncateStringWithGivenLength(this.cashAcc[i].accountName + "....", 26) + CommonUtilities.getLastFourDigit(this.cashAcc[i].accountNumber),
          cashBalance: forUtility.formatAmountandAppendCurrencySymbol(this.cashAcc[i].balance, this.cashAcc[i].currency),
          refCashBalance: forUtility.formatAmountandAppendCurrencySymbol(this.cashAcc[i].referenceCurrencyValue, responseObj.totalCashBalanceCurrency),
          refCurrency: this.cashAcc[i].currency,
          accountNumber: this.cashAcc[i].accountNumber
        };
        cashData.push(cashList);
      }
      scope_WealthPresentationController.totalCashBalance = responseObj.totalCashBalance;
      scope_WealthPresentationController.totalCashBalanceCurrency = responseObj.totalCashBalanceCurrency;
      var cashBalTotal = forUtility.formatAmountandAppendCurrencySymbol(responseObj.totalCashBalance, responseObj.totalCashBalanceCurrency);
      scope_WealthPresentationController.accountNumber = cashData[0].accountNumber;
      var navMan = applicationManager.getNavigationManager();
      var dataSet = {};
      dataSet.cashData = cashData;
      dataSet.response = cashData[0].refCurrency + "-" + cashData[0].accountName.slice(-4);
      dataSet.accountName = cashData[0].refCurrency + " " + cashData[0].accountName;
      navMan.setCustomInfo('frmCashAccounts', dataSet);
    },
    checkCashBalance: function(cashArr) {
      if (scope_WealthPresentationController.newAccountsArr.length > 0) {
        cashArr.push(...scope_WealthPresentationController.newAccountsArr);
      }
      if(scope_WealthPresentationController.balanceArr.length > 0){
        for(i in scope_WealthPresentationController.balanceArr){
          cashArr.forEach(function(e) {
            if (e.currency === scope_WealthPresentationController.balanceArr[i].currency) {
              e.balance = scope_WealthPresentationController.balanceArr[i].amount;
            }
          });
        }
      }
      return cashArr;
    }
  };
});