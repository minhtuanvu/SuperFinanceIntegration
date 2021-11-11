define({ 

 navigateToDashboard : function(){
   var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CampaignManagement");
      accountMod.presentationController.updateCampaigningAndNavToAccounts("specialBonus");  
 }
 });