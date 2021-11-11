define({ 

  
  createAccountAndDepositMoney : function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var campMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CampaignManagement");
    campMod.presentationController.createAccountAndAddBalance();
  },
  onClickOfBack : function(){
    var campMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
    campMod.presentationController.commonFunctionForNavigation("frmDashboardAggregated");
  }

});