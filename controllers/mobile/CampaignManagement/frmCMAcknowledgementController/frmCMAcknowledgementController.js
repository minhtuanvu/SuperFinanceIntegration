define({ 
init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"NO",currentForm);
  },
 preShow:function(){
   if(applicationManager.getPresentationFormUtility().getDeviceName()==="iPhone"){
      this.view.flxHeader.setVisibility(false);
    }
   applicationManager.getPresentationUtility().dismissLoadingScreen();
   this.view.btnDashboard.onClick=this.updateAccounts;
 },
  updateAccounts:function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
     var campaignMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CampaignManagement");
      campaignMod.presentationController.updateCampaigningAndNavToAccounts("loans");
      }
 

 });