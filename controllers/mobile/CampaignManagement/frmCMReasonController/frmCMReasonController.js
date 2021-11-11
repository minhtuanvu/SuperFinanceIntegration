define({
 init : function(){
    var scope=this;
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
     applicationManager.getPresentationFormUtility().initCommonActions(this,"CALLBACK",currentForm,scope.mfaDeviceBack);
  },
  mfaDeviceBack:function()
  {
    var navigationMan=applicationManager.getNavigationManager();
    var formdata=navigationMan.getCustomInfo("frmTermsAndCondition");
    switch(formdata.flowType)
      {
        case "Enroll": navigationMan.goBack();
          break;
      }
  },
  preShow : function(){
   
    this.populateData();
    if(applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone"){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.title=kony.i18n.getLocalizedString("kony.mb.TermsAndConditions.Title");
      this.view.flxHeader.isVisible = false;
    }
    this.view.btnContinue.setEnabled(false);
    this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
    this.view.btntermsandconditions.onClick=this.btnOnClick;  
    this.view.btnContinue.onClick=this.btnContinueFunction; 
    this.view.flxCheckBox.onClick=this.toggleCheckBox;
    this.view.customHeader.btnRight.onClick = this.onCancelClick;
    applicationManager.getPresentationUtility().dismissLoadingScreen(); 
  },
  populateData:function()
  {
    var navigationMan=applicationManager.getNavigationManager();
    var formdata=navigationMan.getCustomInfo("frmTermsAndCondition");
    this.view.rtxTermsConditionsValue.text=formdata.content;
    switch(formdata.flowType)
      {
        case "Login": this.view.flxMainContainer.setVisibility(true);  
                      this.view.flxTermsConditions.setVisibility(false); 
          break;
		case "Enroll":  this.view.flxMainContainer.setVisibility(false);
                        this.view.flxTermsConditions.setVisibility(true);
          break;
      }
  },
  btnOnClick:function()
  {
    this.view.flxMainContainer.setVisibility(false);  
    this.view.flxTermsConditions.setVisibility(true);  
    
  },
  btnContinueFunction:function(){
      applicationManager.getPresentationUtility().showLoadingScreen();
     var informationPC = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("InformationModule");
     informationPC.presentationController.acceptTermsAndCondition();
  },
  onCancelClick : function(){
    var navigationMan=applicationManager.getNavigationManager();
    var formdata=navigationMan.getCustomInfo("frmTermsAndCondition");
    switch(formdata.flowType)
    {
      case "Login": this.loginCancel();
        break;
      case "Enroll": this.enrollCancel();
        break;  
    }
  },
  enrollCancel:function()
  {
    var navigationMan=applicationManager.getNavigationManager();
    navigationMan.goBack();
  },
  loginCancel:function()
  {
     if(this.view.flxTermsConditions.isVisible===true)
      {
    this.view.flxMainContainer.setVisibility(true);  
    this.view.flxTermsConditions.setVisibility(false); 
      }
    else
      {
     var informationPC = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("InformationModule");
     informationPC.presentationController.cancelOnClick();
      }
  },
  toggleCheckBox:function()
  {
    if(this.view.imgTermsAccepted.src==="tickmarkbox.png")
    {
      this.view.imgTermsAccepted.src="a.png";
      this.view.btnContinue.setEnabled(true);
      this.view.btnContinue.skin = "sknBtn0095e426pxEnabled";
    }
    else
    {
      this.view.imgTermsAccepted.src="tickmarkbox.png";
      this.view.btnContinue.setEnabled(false);
      this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
    }
  }
  
});