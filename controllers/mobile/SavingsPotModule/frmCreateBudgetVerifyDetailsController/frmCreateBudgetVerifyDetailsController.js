define({
  
init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm,scope.navigateCustomBack);
  },
 
  preshow:function(){
  if(applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone"){
      this.view.flxHeader.isVisible = true;
    }
    else{
   
      this.view.flxHeader.isVisible = false;
    }
    this.initActions();
  }, 
  postShow:function(){

  },
  initActions:function(){
    this.view.customHeader.flxBack.onClick = this.goBack;
    this.view.btnContinue.onClick=this.continueOnClick;
    this.view.flxFromImage.onTouchEnd = this.budgetName;
    this.view.flxAmountImage.onTouchEnd = this.budgetAmount;
    this.view.customHeader.btnRight.onClick = this.onCancelClick;
    this.setDataToForm();
  },
  setDataToForm: function(){
    var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
    var budgetDetails = SavingsPotMod.presentationController.getBudgetDetails();
    this.view.lblBudgetNameValue.text = budgetDetails.potName;
    var currencySymbol = SavingsPotMod.presentationController.getCurrencySymbol();
    if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") {
      this.view.lblAmountValue.text = currencySymbol+budgetDetails.targetAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    else{
       this.view.lblAmountValue.text = currencySymbol+budgetDetails.targetAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },
  budgetName: function(){
    var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
    SavingsPotMod.initializeStateData(true,"frmCreateBudgetVerifyDetails");
    SavingsPotMod.commonFunctionForNavigation("frmBudgetName");
  },
  budgetAmount: function(){
    var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
    SavingsPotMod.initializeStateData(true,"frmCreateBudgetVerifyDetails");
    SavingsPotMod.commonFunctionForNavigation("frmBudgetfundAmount");
  },
  continueOnClick:function(){
       var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
       var params = SavingsPotMod.getAccountId();
       SavingsPotMod.creteSavingsBudget(params);
  },
  onCancelClick:function(){
    var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
    SavingsPotMod.clearCreateData();
    var navManager = applicationManager.getNavigationManager();
    var createGoalPermission  = applicationManager.getConfigurationManager().checkUserPermission("GOAL_POT_CREATE");
    (createGoalPermission)?navManager.navigateTo("frmSavingsType"):navManager.navigateTo("frmMySavingsPot");
  },
  goBack:function(){
    var navigationMan=applicationManager.getNavigationManager();
    navigationMan.goBack();
  },
  bindGenericError: function (errorMsg){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var scopeObj = this;
     applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
}
  
});