define(['CommonUtilities'], function (CommonUtilities) {
  return {
  init : function(){
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  preShow: function() {
    
    this.view.flxNoTransactions.top="0dp";
    this.view.flxMainContainer.skin="slFbox";
       if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
       this.view.flxHeader.isVisible = false;
        this.view.flxMainContainer.top = "0dp";
       }
       else
        this.view.flxMainContainer.top = "56dp";
    this.view.segAccounts.rowFocusSkin = "sknFlxf9f9f9";
    this.view.flxNoTransactions.isVisible=false;
    this.view.segAccounts.isVisible=true;
    this.setSegmentData();
    this.initActions();
    this.bindGenericSuccess();
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  initActions: function() {
    var scope = this;
    this.view.customHeader.flxBack.onClick = this.navigateCustomBack;
    this.view.segAccounts.onRowClick = function() {
      scope.segmentRowClick();
    };
  },
  navigateCustomBack: function() {
    var disputeTransactions = applicationManager.getModulesPresentationController("DisputeTransactions");
    disputeTransactions.commonFunctionForgoBack();
  },
  segmentRowClick: function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var rowindex;
    rowindex = Math.floor(this.view.segAccounts.selectedRowIndex[1]);
    selectedAccount = this.view.segAccounts.data[rowindex];
    var navMan=applicationManager.getNavigationManager();
    navMan.setCustomInfo("frmDisputedTransactionsList",selectedAccount);
    var disputeModule = applicationManager.getModulesPresentationController("DisputeTransactions");
    disputeModule.commonFunctionForNavigation("frmDisputeTransactionDetails");
  },
  setSegmentData: function() {
    this.view.segAccounts.widgetDataMap=this.getWidgetDataMap();
    var disputeTransactions= applicationManager.getModulesPresentationController("DisputeTransactions");
    var data = disputeTransactions.getAlldisputeTransactions();
    if(data && data.length>0){
      this.view.flxNoTransactions.setVisibility(false);
      this.view.segAccounts.setVisibility(true);
      var segData=this.processData(data);
      this.view.segAccounts.setData(segData); 
    }
    else{
      this.view.flxNoTransactions.setVisibility(true);
     this.view.segAccounts.setVisibility(false);
    }
    
  },
  getWidgetDataMap: function () {
    var dataMap = {
      lblAccountName: "description",
      lblBankName: "orderStatus",
      lblAccountBalValue: "formattedAmount",
      lblAccountBal:"formattedDisputeDate",
      flxMain: "flxMain",
      "orderId": "orderId",
      "template": "flxAccountsNoImage"
    };
    return dataMap;
  },
  processData : function(data){
    var forUtility = applicationManager.getFormatUtilManager();
    for(var i=0;i<data.length;i++){
      if(data[i].orderedDate){
        var trandateobj=forUtility.getDateObjectfromString(data[i].orderedDate, "YYYY-MM-DD");
        var formattedDisputeDate =  forUtility.getFormatedDateString(trandateobj, forUtility.getApplicationDateFormat());
        data[i].formattedDisputeDate=formattedDisputeDate;
      } else {
        data[i].formattedDisputeDate = "-";
      }
      if(data[i].transactionDate){
        var trandateobj=forUtility.getDateObjectfromString(data[i].transactionDate, "YYYY-MM-DD");
         var formattedTransactionDate =  forUtility.getFormatedDateString(trandateobj, forUtility.getApplicationDateFormat());
        data[i].formattedTransactionDate=formattedTransactionDate;
      } else {
        data[i].formattedTransactionDate = "-";
      }
      if(data[i].amount){
        var configManager = applicationManager.getConfigurationManager();
        if(data[i].transactionCurrency){
          var formattedAmount= CommonUtilities.formatCurrencyWithCommas(data[i].amount, true, data[i].transactionCurrency);
          data[i].formattedAmount=formattedAmount;
        }
        else{
          var formattedAmount= CommonUtilities.formatCurrencyWithCommas(data[i].amount, false);
          data[i].formattedAmount=formattedAmount;
        }
       } else {
         data[i].formattedAmount = "-";
       }
      if(data[i].fromAccountNumber && data[i].fromAccountName){
        data[i].formattedfromAccountName=applicationManager.getPresentationUtility().formatText(data[i].fromAccountName, 10, data[i].fromAccountNumber, 4);
      } else {
        data[i].formattedfromAccountName = "-";
      }
      if (data[i].statusDescription || data[i].orderStatus ) {
        data[i].orderStatus = data[i].statusDescription || data[i].orderStatus;
      } else {
        data[i].orderStatus = "-";
      }
      if (data[i].disputeId || data[i].orderId) {
        data[i].orderId = data[i].disputeId || data[i].orderId;
      } else {
        data[i].orderId = "-";
      }
    }
    return data;
  },
  bindGenericSuccess : function(){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var disputeTransactions = applicationManager.getModulesPresentationController("DisputeTransactions");
    if(disputeTransactions.isRequestCancelled){
      disputeTransactions.isRequestCancelled=false;
     applicationManager.getDataProcessorUtility().showToastMessageSuccess(this,applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.disputeTransaction.cancelledDisputepopup"));
    }
  },
  }
});
