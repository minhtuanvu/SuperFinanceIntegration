define({
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  preShow : function(){
    var scopeObj = this;
    var navMan=applicationManager.getNavigationManager();
    var data = navMan.getCustomInfo("frmNAOProductDetails");
     if(applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone"){
      this.view.flxHeader.isVisible = true;
      this.view.customHeader.lblLocateUs.text= data.productName;
    }
    else{
      this.view.flxHeader.isVisible = false;
      this.view.title = data.productName;
    }
    this.view.customHeader.imgBack.src="closewhite.png";
    this.view.customHeader.flxBack.onClick = function(){
      scopeObj.navtoSelectProduct();
    };
      scopeObj.view.lblProductDescription.text=data.productDescription;
      scopeObj.view.segProductDetails.setVisibility(false);
  },
  navtoSelectProduct : function(){
      var NAOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewAccountOpeningModule");
      NAOMod.presentationController.commonFunctionForNavigation("frmNAOSelectProduct");
  }
});