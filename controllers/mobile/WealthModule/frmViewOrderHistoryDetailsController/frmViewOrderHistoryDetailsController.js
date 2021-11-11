define({ 

 init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
 
  },
  preShow:function(){
	this.view.flxStopPrice.isVisible = false;
	this.view.flxLimitPrice.isVisible = false;
	this.view.flxPrice.isVisible = false;
    if(applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone"){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.flxHeader.isVisible = false;
    }
   var navManager = applicationManager.getNavigationManager();
   var OrderHistoryDetail = navManager.getCustomInfo("frmViewOrderHistoryDetails");
   var OrderHistory=OrderHistoryDetail.response;
    this.setDataToOrderHistoryDetail(OrderHistory);
    this.initActions();
  },
  initActions:function(){
    this.view.customHeader.flxBack.onTouchEnd = this.onBack;
  },
   postShow:function(){
  
},
   onBack : function () {
	    var navMan=applicationManager.getNavigationManager();
        navMan.navigateTo("frmOrders");
	},

setDataToOrderHistoryDetail:function(orderDetail){
  
  var forUtility = applicationManager.getFormatUtilManager();
  var tradeDateObj=forUtility.getDateObjectfromString(orderDetail.tradeDate);
  var formattedTradeDate=forUtility.getFormatedDateString(tradeDateObj, forUtility.getApplicationDateFormat());
  this.view.lblInstrument.text=orderDetail.description;
  this.view.lblTradeDateVal.text=formattedTradeDate;
  this.view.lblTypeVal.text=orderDetail.orderType;
  this.view.lblStatusVal.text=orderDetail.status;
  this.view.lblQuantityVal.text=orderDetail.quantity;
  this.view.lblOrderRefValue.text=orderDetail.orderReference;
  this.view.lblOrderRefId.text=kony.i18n.getLocalizedString("i18n.konybb.common.referenceId")+":";
  this.view.lblType.text=kony.i18n.getLocalizedString("i18n.wealth.type");
  this.view.lblQuantity.text=kony.i18n.getLocalizedString("i18n.wealth.quantity");
  this.view.lblStatus.text=kony.i18n.getLocalizedString("kony.mb.achfiledetail.status")+":";
  
  if (orderDetail.status==="Completed" && orderDetail.orderExecutionPrice !== "") {  
   var formattedPriceVal = forUtility.formatAmountandAppendCurrencySymbol(orderDetail.orderExecutionPrice, orderDetail.referenceCurrency);
  this.view.lblPriceVal.text=formattedPriceVal;
  this.view.lblPrice.text=kony.i18n.getLocalizedString("i18n.wealth.price");
  this.view.flxPrice.isVisible = true;
	}
	 
   if (orderDetail.stopPrice !== "") {  
  var formattedStopPriceVal = forUtility.formatAmountandAppendCurrencySymbol(orderDetail.stopPrice, orderDetail.referenceCurrency);
  this.view.lblStopPriceVal.text=formattedStopPriceVal;
  this.view.lblStopPrice.text=kony.i18n.getLocalizedString("i18n.wealth.stopPrice");
  this.view.flxStopPrice.isVisible = true;
	}
	
  if (orderDetail.limitPrice !== "") {  
  var formattedLimitPriceVal = forUtility.formatAmountandAppendCurrencySymbol(orderDetail.limitPrice, orderDetail.referenceCurrency);
  this.view.lblLimitPriceVal.text=formattedLimitPriceVal;
  this.view.lblLimitPrice.text=kony.i18n.getLocalizedString("i18n.wealth.limitPrice");
  this.view.flxLimitPrice.isVisible = true;
  }
}
 });