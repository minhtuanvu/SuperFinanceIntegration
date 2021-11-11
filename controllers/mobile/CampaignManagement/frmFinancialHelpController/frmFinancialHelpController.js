define({
  rates:null,
  info:null,
  features:null,
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  preShow : function(){
    var scopeObj = this;
    var navMan=applicationManager.getNavigationManager();
    this.view.customHeader.btnRight.onClick=this.onCancelPress;
    this.view.btnAcceptContinue.onClick = this.createAccount;
     if(applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone"){
      this.view.flxHeader.isVisible = true;     
    }
    else{
      this.view.flxHeader.isVisible = false;    
    }  
    this.view.customHeader.flxBack.onClick = function(){
      var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
      accountMod.presentationController.commonFunctionForNavigation("frmDashboardAggregated"); 
    };  
  },
  onCancelPress:function(){
  var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
      accountMod.presentationController.commonFunctionForNavigation("frmDashboardAggregated"); 
},
  createAccount:function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
  var campMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CampaignManagement");
      campMod.presentationController.createFinancialHelpAccount(); 
},
  bindViewError : function(msg)
  {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getDataProcessorUtility().showToastMessageError(this,msg);
    this.cleardobfields();
  },
 
});