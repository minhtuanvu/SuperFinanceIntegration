define({ 
sortByCustomData : "",
segValue:{},
dateRange : [],
init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
 this.view.lblPreviousDays.text=kony.i18n.getLocalizedString("i18n.wealth.previous30Days");
  },
  preShow:function(){
     this.view.flxAdditionalOptions.setVisibility(false);
    var navManager=applicationManager.getNavigationManager();
     this.sortByCustomData = navManager.getCustomInfo("frmSortBy");
     this.dateRange = scope_WealthPresentationController.selectedDateRangeDetails;
     this.view.segmentDetailsWealth.setLblPreviousDays(this.dateRange);
      var configManager = applicationManager.getConfigurationManager();
      if(configManager.getDeploymentGeography() === 'EUROPE'){
      this.view.segmentDetailsWealth.setEuroFlow(true);
    }
      else{
         this.view.segmentDetailsWealth.setEuroFlow(false);
      }
       var params = {
                "portfolioId": scope_WealthPresentationController.portfolioId,
                "startDate": this.dateRange.startDate,
                "endDate": this.dateRange.endDate,
                "instrumentName": " ",
                "sortBy": (scope_WealthPresentationController.sortByValueTrans === "")?"tradeDate":scope_WealthPresentationController.sortByValueTrans,
            };       
    this.view.segmentDetailsWealth.setContext(params);
    if(applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone"){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.flxHeader.isVisible = false;
    }
   this.view.flxAdditionalOptions.setVisibility(false);
    navManager.setCustomInfo("frmPortfolioDetails", false);
    this.initActions();
  },
  initActions:function(){
    this.view.segmentDetailsWealth.onRowClickEvent = this.onTransactionSelect;
    this.view.segmentDetailsWealth.onMoveToDateRange   = this.timePeriod;
    this.view.customHeader.flxSearch.onTouchEnd = this.moreOptions;
    this.view.flxCancelOption.onTouchEnd = this.onCancel;
    this.view.flxSortBy.onTouchEnd = this.onClickSortBy;
    this.view.flxDownloadTransactions.onTouchEnd = this.onClickDownloadTxns;
    this.view.customHeader.flxBack.onClick =this.onBack;
    this.view.segmentDetailsWealth.onRequestEnd = function() {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    };
	this.view.segmentDetailsWealth.onRequestStart = function() {
      applicationManager.getPresentationUtility().showLoadingScreen();
    };
	this.checkPermission();
  },
  postShow:function(){

  },

  moreOptions:function(){
    this.view.flxScroll.setEnabled(false);
    this.view.flxHeader.setEnabled(false);
    this.view.flxAdditionalOptions.setVisibility(true);
	this.view.lblDownloadTransactions.text = kony.i18n.getLocalizedString("i18n.wealth.downloadTransactions");
	this.view.lblSortyBy.text = kony.i18n.getLocalizedString("i18n.wealth.sortBy");
  },
  onCancel:function(){
    this.view.flxScroll.setEnabled(true);
    this.view.flxHeader.setEnabled(true);
    this.view.flxAdditionalOptions.setVisibility(false);
  },
 
  onClickSortBy: function(){
     this.view.flxScroll.setEnabled(true);
    this.view.flxHeader.setEnabled(true);
	   var data={};
   // data.searchText= this.view.tbxSearch.text;
    var navManager = applicationManager.getNavigationManager();
    if(scope_WealthPresentationController.sortByValueTrans == ""){
      data.sortByValue="tradeDate";
      navManager.setCustomInfo("frmTransactions", data);
    }
    else{
      data.sortByValue = scope_WealthPresentationController.sortByValueTrans;
      navManager.setCustomInfo("frmTransactions", data);
    }
    var navManager = applicationManager.getNavigationManager();
    navManager.navigateTo("frmSortBy");
	},
    onBack : function () {
    var navigationMan=applicationManager.getNavigationManager();
    navigationMan.goBack();
  },
    timePeriod: function(){
      var navManager = applicationManager.getNavigationManager();
      var dateFlag = scope_WealthPresentationController.selectedDateRangeDetails;
      var selectedValue = this.view.segmentDetailsWealth.getPreviousDaysText();
      var dataSet = {};
      var period;
      if(selectedValue == "Previous 30 days"){
        period ="previous30DaysSelected";
      }
      else if(selectedValue == "3 Months"){
        period ="3MonthsSelected";
      }
      else if(selectedValue == "6 Months"){
        period ="6MonthsSelected";
      }
      else if(selectedValue == "Last year"){
        period ="lastYearSelected";
      }
      else{
        period ="freeDateSelected";
      }
      //dataSet.searchValue = this.view.tbxSearch.text;
      dataSet.flag = dateFlag.flag;
      dataSet.selectedDays = period ;
      navManager.setCustomInfo('frmTransactions', dataSet);
      navManager.navigateTo("frmDateRange");
  },

 
  onTransactionSelect:function(rowData){
     var navManager=applicationManager.getNavigationManager();
      var data={};
//      var rowIndexValue=context.rowIndex;
    var transaction = rowData.row;
     data.response=transaction;
     data.response.referenceCurrency =  rowData.referenceCurrency;
     navManager.setCustomInfo("frmViewTransactionDetails", data);
     navManager.navigateTo("frmViewTransactionDetails");
  },
	onClickDownloadTxns: function() {
       this.view.flxScroll.setEnabled(true);
    this.view.flxHeader.setEnabled(true);
      scope_WealthPresentationController.downloadParams = this.view.segmentDetailsWealth.getCriteriaObjValue(); 
      scope_WealthPresentationController.downloadParams.navPage = "Transactions";
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
   checkPermission: function(){
    var configManager = applicationManager.getConfigurationManager();
    var getPermissionDetails = JSON.parse(this.view.segmentDetailsWealth.getFeaturesAndPermissions());
    var transDetailViewPermission=false;
    if(typeof getPermissionDetails !=="undefined")
      {
        if (getPermissionDetails.viewDetails.length > 0) {
        transDetailViewPermission = configManager.checkAtLeastOnePermission(getPermissionDetails.viewDetails);
        this.view.segmentDetailsWealth.onRowClickEvent = transDetailViewPermission ? this.onTransactionSelect : "";
     }
        
      }
    
    
  },

});