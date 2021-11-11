define({ 

 init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
 
  },
  preShow:function(){
    if(applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone"){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.flxHeader.isVisible = false;
    }
   var navManager = applicationManager.getNavigationManager();
   var transactionDetail = navManager.getCustomInfo("frmViewTransactionDetails");
   var transDetail=transactionDetail.response;
    this.setDataToTransactionDetail(transDetail);
    this.initActions();
  },
  initActions:function(){
    this.view.customHeader.flxBack.onTouchEnd = this.onBack;
  },
   postShow:function(){
  
},
   onBack : function () {
    var navigationMan=applicationManager.getNavigationManager();
    navigationMan.navigateTo("frmTransactions");
  },

setDataToTransactionDetail:function(transDetail){
  //var amount=transDetail.limitPrice * transDetail.quantity;
  //var amount=transDetail.instrumentAmount;
  //var total=transDetail.total;
  var forUtility = applicationManager.getFormatUtilManager();
  var tradeDateObj=forUtility.getDateObjectfromString(transDetail.tradeDate);
  var valueDateObj=forUtility.getDateObjectfromString(transDetail.valueDate);
  var formattedTradeDate=forUtility.getFormatedDateString(tradeDateObj, forUtility.getApplicationDateFormat());
  var formattedValueDate=forUtility.getFormatedDateString(valueDateObj, forUtility.getApplicationDateFormat());
  var formattedAmount= forUtility.formatAmountandAppendCurrencySymbol(transDetail.instrumentAmount, transDetail.instrumentCurrency);
  var formattedPriceVal = forUtility.formatAmountandAppendCurrencySymbol(transDetail.limitPrice, transDetail.referenceCurrency);
  var formattedNetAmount= forUtility.formatAmountandAppendCurrencySymbol(transDetail.netAmount, transDetail.referenceCurrency);
  var formattedfees= forUtility.formatAmountandAppendCurrencySymbol(transDetail.fees, transDetail.referenceCurrency);
  var formattedTotal= forUtility.formatAmountandAppendCurrencySymbol(transDetail.total, transDetail.instrumentCurrency);
  this.view.lblInstrument.text=transDetail.description;
  this.view.lblTradeDateVal.text=formattedTradeDate;
  this.view.lblTypeVal.text=transDetail.orderType;
  this.view.lblQuantityVal.text=transDetail.quantity;
  this.view.lblPriceVal.text=formattedPriceVal;
  this.view.lblAmountVal.text=formattedAmount;
  this.view.lblExcahangeRateVal.text=transDetail.exchangeRate;
  this.view.lblnstrAmountVal.text=formattedNetAmount;
  this.view.lblValueDateVal.text=formattedValueDate;
  this.view.lblFeesVal.text=formattedfees;
  this.view.lblTotalVal.text=formattedTotal;
  this.view.lblTradeDate.text=kony.i18n.getLocalizedString("i18n.wealth.tradeDate");
  this.view.lblType.text=kony.i18n.getLocalizedString("i18n.wealth.orderType");
  this.view.lblQuantity.text=kony.i18n.getLocalizedString("i18n.wealth.quantity");
  this.view.lblPrice.text=kony.i18n.getLocalizedString("i18n.wealth.limitPrice");
  this.view.lblAmount.text=kony.i18n.getLocalizedString("i18n.wealth.amount");
  this.view.lblExchangeRate.text=kony.i18n.getLocalizedString("i18n.wealth.exchangeRate");
  this.view.lblnstrAmount.text=kony.i18n.getLocalizedString("i18n.wealth.amountInstr");
  this.view.lblValueDate.text=kony.i18n.getLocalizedString("i18n.wealth.valueDate");
  this.view.lblFees.text=kony.i18n.getLocalizedString("i18n.wealth.fees");
  this.view.lblTotal.text=kony.i18n.getLocalizedString("i18n.wealth.total");
}
 });