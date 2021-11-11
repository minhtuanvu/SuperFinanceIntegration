define({
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  preshow : function(){
    if(applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone"){
      this.view.flxHeader.isVisible = true;
      this.view.customHeader.flxSearch.isVisible = false;
      this.view.flxTermsConditions.top="56dp";
    }
    else{
      this.view.flxHeader.isVisible = false;
      this.view.flxTermsConditions.top="0dp";
    }
    this.view.flxTermsConditions.scrollsToTop = true;
    this.view.customHeader.flxBack.onClick = this.onCloseTnC;
    this.view.rtxTermsConditionsValue.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.TermsAndConditions.message");
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  onCloseTnC : function () {
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    NUOMod.presentationController.commonFunctionForNavigation("frmOBCreditCheck");
  }
});