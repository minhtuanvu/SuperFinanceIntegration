define(["CommonUtilities"],function(CommonUtilities){
  return  {
init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"NO",currentForm);
  },
preShow:function(){
    if(applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone"){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.flxHeader.isVisible = false;
    }
    var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
     var type = SavingsPotMod.getSavingsType();
     if(type === "Goal"){
       this.view.btnDashboard.text = "Back To Savings Goal";
     } else {
       this.view.btnDashboard.text = "Back To Savings Budget";
     }
  this.view.btnDashboard.onClick = this.continueOnClick;
  this.setDataToForm();
  applicationManager.getPresentationUtility().dismissLoadingScreen();
},
   setDataToForm: function(){
    var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
    var budgetDetails = SavingsPotMod.presentationController.getFundWithDrawDetails();
    var potName = SavingsPotMod.presentationController.getSavingsPotName();
    var fromDetails =  SavingsPotMod.presentationController.getMaskedAccountName();
    var formatUtil = applicationManager.getFormatUtilManager();
    var amount;
    var currencySymbol = SavingsPotMod.presentationController.getCurrencySymbol();
    if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") {
      amount = budgetDetails.amount.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    else{
     amount = formatUtil.formatAmount(budgetDetails.amount);
    }
    this.view.lblFundAmountValue.text = currencySymbol+amount;
    this.view.lblToValue.text = fromDetails;
    this.view.lblFromValue.text = potName;
     var today= new Date();
      var month = today.getMonth() + 1;
      var date = today.getDate();
      if(month<10){
        month = "0" + month;
      }
      if(date<10){
        date = "0" + date;
      }
    var createdDate = month + "/" + date + "/" + today.getFullYear();
    this.view.lblDateValue.text = createdDate;
   },
  continueOnClick: function(){
     var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
     var type = SavingsPotMod.getSavingsType();
     SavingsPotMod.clearFundWithdrawData();
     SavingsPotMod.clearCreateData();
    var accountsID = SavingsPotMod.getAccountId();
    SavingsPotMod.getMySavingsPot(accountsID, type);
  }
};
});