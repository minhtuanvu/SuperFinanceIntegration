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
     this.view.btnFeatures.onClick=this.btnFeaturesOnClick;
    this.view.btnCharges.onClick=this.btnChargesonClick;
    this.view.btnContinue.onClick=this.navToLoanAmount;
    this.view.customHeader.btnRight.onClick =this.onCancelClick;
   this.view.lblAccNoValue.text = applicationManager.getConfigurationManager().getCurrencyCode() + "10,000";
    var data = navMan.getCustomInfo("frmNAOProductDetails");
     if(applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone"){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.flxHeader.isVisible = false;     
    }
    
    this.view.customHeader.imgBack.src="closewhite.png";
    this.view.customHeader.flxBack.onClick = function(){
    };
   
   
  },
   btnFeaturesOnClick:function(){
      this.view.flxFeaturesSelected.isVisible=true;
      this.view.flxChargesSelected.isVisible=false;
      this.view.flxFeatures.isVisible=true;
     this.view.btnFeatures.skin="sknBtnf6f6f6424242SSPLight24px";
     this.view.btnCharges.skin="sknBtnBgD8D8D8SSPLight30pxBrd24px";
     this.view.btnFeatures.focusSkin="sknBtnf6f6f6424242SSPLight24px";
     this.view.btnCharges.focusSkin="sknBtnBgD8D8D8SSPLight30pxBrd24px";
      this.view.flxAmountandCharges.isVisible=false;
      this.view.flxInfoSelected.isVisible=false;
      this.view.segProductDetails.setVisibility(true);
    },
   btnChargesonClick:function(){
      this.view.flxFeaturesSelected.isVisible=false;
     this.view.flxChargesSelected.isVisible=true;
     this.view.flxFeatures.isVisible=false;
     this.view.btnFeatures.skin="sknBtnBgD8D8D8SSPLight30pxBrd24px";
     this.view.btnCharges.skin="sknBtnf6f6f6424242SSPLight24px";
     this.view.btnFeatures.focusSkin="sknBtnBgD8D8D8SSPLight30pxBrd24px";
     this.view.btnCharges.focusSkin="sknBtnf6f6f6424242SSPLight24px";
     this.view.flxAmountandCharges.isVisible=true;
      this.view.flxInfoSelected.isVisible=false;
      this.view.segProductDetails.setVisibility(false);

    },
  navToLoanAmount :function(){
      var data={
      "duration":this.view.lblAccTypeVal.text,
      "interestRate":this.view.lblCardIssueDateVal.text
    };
    applicationManager.getPresentationUtility().showLoadingScreen();
     var campaignMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CampaignManagement");
      campaignMod.presentationController.navToFromAccountDeposits(data);
       },
  onCancelClick:function(){
  var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
      accountMod.presentationController.commonFunctionForNavigation("frmDashboardAggregated"); 
}
});