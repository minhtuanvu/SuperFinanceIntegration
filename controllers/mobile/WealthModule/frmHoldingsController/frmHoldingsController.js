define({
    //segmentRowDataId : [],
  sortByCustomData: "",
  segResponse: {},
  totalValue: "",
  selectedRicCode: "",
  ISINCode:"",
  holdingsId:"",
  
    init: function() {
        this.view.preShow = this.preShow;
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        this.initActions();
    },
    preShow: function() {
      this.view.flxAdditionalOptions.setVisibility(false);
          var navManager = applicationManager.getNavigationManager();
      this.sortByCustomData = navManager.getCustomInfo("frmSortBy");
      var configManager = applicationManager.getConfigurationManager();
      if(configManager.getDeploymentGeography() === 'EUROPE'){
      this.view.segmentDetailsWealth.setEuroFlow(true);
    }
      else{
         this.view.segmentDetailsWealth.setEuroFlow(false);
      }
      this.view.segmentDetailsWealth.getHoldingsTopDetails(scope_WealthPresentationController.portfolioDetails);
      
      var params = {
                "portfolioId": scope_WealthPresentationController.portfolioId,
                "navPage": "Holdings",
                "sortBy": (scope_WealthPresentationController.sortByValueHoldings === "")?"description":scope_WealthPresentationController.sortByValueHoldings,
                "searchByInstrumentName": " ",
            }
      this.view.segmentDetailsWealth.setContext(params);
         var data = {};
             navManager.setCustomInfo("frmInstrumentDetails", data);
  			 navManager.setCustomInfo("frmPortfolioDetails", false);
           
          
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        
        this.view.flxAdditionalOptions.isVisible = false;
      this.checkPermission("Holdings");
    },
  
      dummyFunc: function(param, dets) {
        var data = {};
            //var rowIndex = param.rowIndex;
            var holdings = dets.rowdetails;
            //var id = holdings.ISIN;
            holdings.totalValue = dets.totalValue;
            data.response = holdings;
            // this.segmentRowDataId = id;
            this.selectedRicCode = holdings.RICCode;
            this.ISINCode = holdings.ISIN;
            this.holdingsId = holdings.holdingsId;
        var navManager = applicationManager.getNavigationManager();
        navManager.setCustomInfo("frmInstrumentDetails", data);
            this.setUpActionSheet("Holdings");
        this.checkPermission("Holdings");
        if(holdings.isSecurityAsset===false){
          this.view.flxAccounts.isVisible=false;
          this.view.flxReport.isVisible=false; 
        }else{
          this.view.flxAccounts.isVisible=true;
          this.view.flxReport.isVisible=true;   
        }
        },
    initActions: function() {
       this.view.segmentDetailsWealth.onActionButtonClicked = this.dummyFunc;
      this.view.segmentDetailsWealth.onRequestStart = function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
      };
      this.view.segmentDetailsWealth.onRequestEnd = function() {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
      };
        this.view.flxMore.onTouchEnd = this.onClickMoreOptions;
        this.view.customHeader.flxBack.onTouchEnd = this.navigateCustomBack;
      
    },
    
    onClickMoreOptions: function() {
       this.view.flxHeader.setEnabled(false);
      this.view.flxScroll.setEnabled(false);
      this.checkPermission("MoreOptions");
        this.setUpActionSheet("MoreOptions");
    },
    setUpActionSheet: function(triggerPoint) {
        if (triggerPoint === "Holdings") {
            this.view.flxAccounts.isVisible = true;
            this.view.lblPerformance.text = kony.i18n.getLocalizedString("i18n.wealth.view");
            this.view.lblAccounts.text = kony.i18n.getLocalizedString("i18n.wealth.buy");
            this.view.lblReport.text = kony.i18n.getLocalizedString("i18n.wealth.sell");
            this.view.flxPerformance.onTouchEnd = this.onClickView;
            this.view.flxAccounts.onTouchEnd = this.onClickBuy;
            this.view.flxReport.onTouchEnd = this.onClickSell;
            this.view.flxCancelOption.onTouchEnd = this.onClickHoldingsCancel;
        } else {
            this.view.flxAccounts.isVisible = false;
            this.view.lblPerformance.text =  kony.i18n.getLocalizedString("i18n.wealth.downloadHoldings");
            this.view.lblReport.text = kony.i18n.getLocalizedString("i18n.wealth.sortBy");
            this.view.flxPerformance.onTouchEnd = this.onClickDownloadTxns;
            this.view.flxReport.onTouchEnd = this.onClickSortBy;
            this.view.flxCancelOption.onTouchEnd = this.onClickCancel;
        }
        this.view.flxAdditionalOptions.isVisible = true;
    },
    onClickView: function() {
       this.view.flxHeader.setEnabled(true);
      this.view.flxScroll.setEnabled(true);
        scope_WealthPresentationController.instrumentDetailsEntry = true;
        this.callOnNavigate('view');
    },
    onClickBuy: function() {
       this.view.flxHeader.setEnabled(true);
      this.view.flxScroll.setEnabled(true);
        this.callOnNavigate('buy')
    },
    onClickSell: function() {
      this.view.flxHeader.setEnabled(true);
      this.view.flxScroll.setEnabled(true);
        this.callOnNavigate('sell');
    },
    callOnNavigate: function(selectedHoldings) {
        scope_WealthPresentationController.searchEntryPoint = false;
        var navManager = applicationManager.getNavigationManager();

      var param = {
        "ISINCode": this.ISINCode?this.ISINCode:'',
        "RICCode": this.selectedRicCode?this.selectedRicCode:'',
        "instrumentId" : this.holdingsId
      };
        var selData = {
            'selHoldings': selectedHoldings,
           // 'response': this.segResponse.response
        };
        navManager.setCustomInfo("frmHoldings", selData);
        var controller = applicationManager.getPresentationUtility().getController('frmPlaceOrder', true);
        controller.watchlistFlow = null;
        var wealthModule = applicationManager.getModulesPresentationController("WealthModule");
        wealthModule.getInstrumentDetails(param);

    },
    onClickHoldingsCancel: function() {
       this.view.flxHeader.setEnabled(true);
      this.view.flxScroll.setEnabled(true);
        this.view.flxAdditionalOptions.isVisible = false;
    },
	onClickDownloadTxns: function() {
       this.view.flxHeader.setEnabled(true);
      this.view.flxScroll.setEnabled(true);
      scope_WealthPresentationController.downloadParams = this.view.segmentDetailsWealth.getCriteriaObjValue(); 
      scope_WealthPresentationController.downloadParams.navPage = "Holdings";
      var wealthModule = applicationManager.getModulesPresentationController("WealthModule");
        wealthModule.getDownloadList(scope_WealthPresentationController.downloadParams);
        kony.print("test"+scope_WealthPresentationController.downloadParams);
    },
   onClickDownloadMessage:function(base64String,filename)
  {
    try 
    {  
       this.view.flxPopup.setVisibility(false);
       this.view.flxAdditionalOptions.isVisible = false;
       this.view.socialshare.shareWithBase64(base64String,filename);
    }catch(error){
   
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    }
  },
    onClickCancel: function() {
      this.view.flxHeader.setEnabled(true);
      this.view.flxScroll.setEnabled(true);
        this.view.flxAdditionalOptions.isVisible = false;
    },
    navigateCustomBack: function() {
        var wealthModule = applicationManager.getModulesPresentationController("WealthModule");
        wealthModule.commonFunctionForgoBack();
    },
    onClickSortBy: function() {
      this.view.flxHeader.setEnabled(true);
      this.view.flxScroll.setEnabled(true);
        var data = {};
       // data.searchText = this.view.tbxSearch.text;
        var navManager = applicationManager.getNavigationManager();
        if (scope_WealthPresentationController.sortByValueHoldings == "") {
            data.sortByValue = "description";
            navManager.setCustomInfo("frmHoldings", data);
        } else {
            data.sortByValue = scope_WealthPresentationController.sortByValueHoldings;
            navManager.setCustomInfo("frmHoldings", data);
        }
        var wealthModule = applicationManager.getModulesPresentationController("WealthModule");
        wealthModule.commonFunctionForNavigation("frmSortBy");

    },
  checkPermission: function(triggerPoint){
     var configManager = applicationManager.getConfigurationManager();
        if (triggerPoint === "Holdings") {
            let holdingsViewPermission = false;
            let holdingsBuyPermission = false;
            let holdingsSellPermission = false;
            var getPermissionDetails = JSON.parse(this.view.segmentDetailsWealth.getFeaturesAndPermissions());
            if (typeof getPermissionDetails !== "undefined") {
                if (getPermissionDetails.view.length > 0) {
                    holdingsViewPermission = configManager.checkAtLeastOnePermission(getPermissionDetails.view);
                    this.view.flxPerformance.isVisible = holdingsViewPermission;
                }
                if (getPermissionDetails.buy.length > 0) {
                    holdingsBuyPermission = configManager.checkAtLeastOnePermission(getPermissionDetails.buy);
                    this.view.flxAccounts.isVisible = holdingsBuyPermission;
                }
                if (getPermissionDetails.sell.length > 0) {
                    holdingsSellPermission = configManager.checkAtLeastOnePermission(getPermissionDetails.sell);
                    this.view.flxReport.isVisible = holdingsSellPermission;
                }
            }
          
            if (holdingsSellPermission!==true && holdingsBuyPermission!==true && holdingsViewPermission!==true) {
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
  

});