define({
 init : function(){
   
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
     applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
 
  preShow : function(){
   if(applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone"){
      this.view.flxHeader.isVisible = true;
    }
    else{
     this.view.flxHeader.isVisible = false;
    }
   this.initActions();
  },
  initActions:function(){
     this.view.customHeader.flxBack.onClick = function() {
        var controller = applicationManager.getModulesPresentationController("ChequeManagementModule");
          controller.commonFunctionForgoBack();
        }
    this.view.btntermsandconditions.onClick=this.btnOnClick;  
    this.view.btnContinue.onClick=this.btnContinueFunction; 
    this.view.flxCheckBox.onClick=this.toggleCheckBox;
    this.view.customHeader.btnRight.onClick = this.onCancelClick;
   /*
   this.view.flxMainContainer.setVisibility(true);
        this.view.flxTermsConditions.setVisibility(false);
      this.view.customHeader.flxBack.setVisibility(true);*/
    applicationManager.getPresentationUtility().dismissLoadingScreen(); 
  },
  postShow:function(){
   
    if(scope_ChequePresentationController.isInitial===true){
      scope_ChequePresentationController.isInitial=false;
      this.view.imgTermsAccepted.src="tickmarkbox.png";
   this.view.btnContinue.setEnabled(false);
    this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
    }else{
   if(this.view.imgTermsAccepted.src==="a.png"){
       this.view.btnContinue.setEnabled(true);
      this.view.btnContinue.skin = "sknBtn0095e426pxEnabled";
     }else{
      this.view.imgTermsAccepted.src="tickmarkbox.png";
      this.view.btnContinue.setEnabled(false);
      this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
     }
     }
    
    
 },
 
  btnOnClick:function()
  {
    applicationManager.getPresentationUtility().showLoadingScreen(); 
     var chequeManagement = applicationManager.getModulesPresentationController("ChequeManagementModule");
  chequeManagement.getTermsConditionsData();
    
  },
  updateUIOnSuccess:function(data){
    applicationManager.getPresentationUtility().dismissLoadingScreen(); 
    this.view.flxMainContainer.setVisibility(false);  
    this.view.flxTermsConditions.setVisibility(true); 
      this.view.customHeader.flxBack.setVisibility(false);
    this.view.isContent=true;
    this.view.rtxTermsConditionsValue.text=data.termsAndConditionsContent;
  },
  
  btnContinueFunction:function(){
     // applicationManager.getPresentationUtility().showLoadingScreen();
    var onContinue = applicationManager.getModulesPresentationController("ChequeManagementModule");
  onContinue.commonFunctionForNavigation("frmSCReview");
  },
  onCancelClick : function(){
   
    if(this.view.isContent==true){
      this.view.isContent=false;
   
      this.view.flxMainContainer.setVisibility(true);
        this.view.flxTermsConditions.setVisibility(false);
      this.view.customHeader.flxBack.setVisibility(true);
  }else{
   var presentation = applicationManager.getModulesPresentationController("ChequeManagementModule");
    presentation.commonCancel();
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