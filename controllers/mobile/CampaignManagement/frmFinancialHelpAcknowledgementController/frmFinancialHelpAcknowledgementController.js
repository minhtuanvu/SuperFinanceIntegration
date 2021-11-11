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
  applicationManager.getPresentationUtility().dismissLoadingScreen();
  this.view.btnDashboard.onClick=this.navToAccounts;
  
},
 navToAccounts:function(){
   applicationManager.getPresentationUtility().showLoadingScreen();
   var campMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CampaignManagement");
      campMod.presentationController.updateCampaigningAndNavToAccounts("FinancialHelp"); 
     
},

 });