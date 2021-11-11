define(["CommonUtilities"],function(CommonUtilities){
  return  {
  keypadString:'0.00',
  isPeriodUsed : false,
  timerCounter: 0,
  init : function(){
    var scope=this;
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm,scope.navigateCustomBack);
  },
 
  preShow: function(){
    if(applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone"){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.title=kony.i18n.getLocalizedString("i18n.savingspot.BudgetAmount");
      this.view.flxHeader.isVisible = false;
    }
      var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
    var flow=SavingsPotMod.presentationController.getSavingsFlow();
        var currencySymbol = SavingsPotMod.presentationController.getCurrencySymbol();
        this.view.lblDollar.text=currencySymbol;
    if(flow){
     var navManager = applicationManager.getNavigationManager();
	var goalDetails = navManager.getCustomInfo("frmBudgetPotDetails");
   this.setReference(goalDetails.targetAmount);
    }
    else{
      var savingsObj= SavingsPotMod.presentationController.getCreateObject();
    this.setReference(savingsObj.targetAmount);
    }
    this.view.customHeader.btnRight.onClick = this.onCancelClick;
    this.view.btnContinue.onClick=this.btnContinueFunction;
    this.view.customHeader.flxBack.onTouchEnd = this.navigateCustomBack;
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  postShow: function(){
    this.updateAmountValue();
  },
     setReference : function(targetAmount){
    if(targetAmount)
    {
       this.keypadString = targetAmount;
    }
    else
      {
        if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") 
          this.keypadString="0,00";
      else
          this.keypadString="0.00";
      }
  },
  setKeypadChar: function (char) {
    CommonUtilities.setKeypadChar(this,char);
    this.updateAmountValue();
  },
  clearKeypadChar: function () {
    CommonUtilities.clearKeypadChar(this);
    this.updateAmountValue();
  },
  updateAmountValue: function(){
    if(this.keypadString==='0.00'|| ((applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE" && this.keypadString==='0,00'))){
      this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
      this.view.btnContinue.setEnabled(false);
      this.view.lblAmount.text = this.view.keypad.formatAmount(this.keypadString);
    }else{
      keypadStringCommas =   CommonUtilities.updateAmountValue(this);
      this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
      this.view.btnContinue.setEnabled(true);
      this.view.lblAmount.text = this.view.keypad.formatAmount(keypadStringCommas);
    }
  },
    navigateCustomBack: function() {
    var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
    SavingsPotMod.commonFunctionForgoBack();
  },
  onBack : function () {
    var navigationMan=applicationManager.getNavigationManager();
    navigationMan.goBack();
  },
    onCancelClick : function(){
       var navManager = applicationManager.getNavigationManager();
      var previousForm = navManager.getPreviousForm();
      var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
      var flow=SavingsPotMod.getSavingsFlow();
        if(flow)
          {  
             SavingsPotMod.commonFunctionForNavigation("frmEditBudget");
          }
    else{
      if (previousForm === "frmBudgetfundAmount") {    
          SavingsPotMod.commonFunctionForNavigation("frmCreateBudgetVerifyDetails");
       } else {
         SavingsPotMod.clearCreateData();
         var createGoalPermission  = applicationManager.getConfigurationManager().checkUserPermission("GOAL_POT_CREATE");
    	 (createGoalPermission)?navManager.navigateTo("frmSavingsType"):navManager.navigateTo("frmMySavingsPot");
       }
  }},
  btnContinueFunction:function(){
     if(this.keypadString!=='0.00')
      { 
        var navManager = applicationManager.getNavigationManager();
        var budgetamount = this.keypadString;
        var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
		var flow=SavingsPotMod.presentationController.getSavingsFlow();
        if(flow)
          { 
		var goalDetails = navManager.getCustomInfo("frmBudgetPotDetails");
    goalDetails.targetAmount=budgetamount;
    navManager.setCustomInfo("frmBudgetPotDetails",goalDetails);
            SavingsPotMod.presentationController.navToBudgetVerifyDetails(budgetamount,"frmEditBudget");
      }
        else{
        
        SavingsPotMod.presentationController.navToBudgetVerifyDetails(budgetamount,"frmCreateBudgetVerifyDetails");
  }}
  }
};
});
