define({ 
init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"NO",currentForm);
  },
preShow:function(){
  applicationManager.getPresentationUtility().dismissLoadingScreen();
  if(applicationManager.getPresentationFormUtility().getDeviceName()==="iPhone"){
      this.view.flxHeader.setVisibility(false);
    }
   var navManager = applicationManager.getNavigationManager();	
   var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
   var accountName = SavingsPotMod.getMaskedAccountName();
  this.view.btnDashboard.onClick = this.continueOnClick; 
  if(navManager.getPreviousForm() === "frmEditBudget" || navManager.getPreviousForm() === "frmBudgetPotDetails"){
  var budgetDetails = navManager.getCustomInfo("frmBudgetPotDetails");
  this.view.lblGoalCloseAck.text = "Closed "+budgetDetails.potName+" savings budget & moved total current balance to "+accountName+" account";
    } else {
  var goalDetails = navManager.getCustomInfo("frmSavingsGoalViewDetails");
  this.view.lblGoalCloseAck.text = "Closed "+goalDetails.potName+" savings goal & moved total current balance to "+accountName+" account";
      }
  applicationManager.getPresentationUtility().dismissLoadingScreen();
},
   postShow:function(){
    
  },
  continueOnClick: function(){
    var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
    SavingsPotMod.setSavingsFlow("");
    SavingsPotMod.clearCreateData();
    var accountsID = SavingsPotMod.getAccountId();
    SavingsPotMod.getAllSavingsPot(accountsID);
  }
 });