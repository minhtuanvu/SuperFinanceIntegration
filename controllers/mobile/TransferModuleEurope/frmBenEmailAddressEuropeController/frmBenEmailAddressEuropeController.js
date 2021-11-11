define({ 

 //Type your controller code here 
  init: function(){
	var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
   initActions:function(){
    this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
    this.view.customHeader.btnRight.onClick = this.onClickCancel;
    this.view.btnVerify.onClick = this.onSaveEmailAddress;
  },
  preshow: function() {
    var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
    var benificiaryData=transferModulePresentationController.getBenificiaryData();
    var beneficiaryemail=benificiaryData.email;
    if(beneficiaryemail){
      this.view.txtEmailAddress.text=beneficiaryemail;
    }
    else{
      this.view.txtEmailAddress.text="";
      this.disableContinueButton();
    }
    this.view.txtEmailAddress.onTextChange =  this.updateUI;
    this.renderTitleBar();
    this.initActions()
    var navManager = ap;plicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
   onClickCancel: function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
    transferModPresentationController.commonFunctionForNavigation("frmBenVerifyDetailsEurope");
  },
   flxBackOnClick: function() {
    var navMan=applicationManager.getNavigationManager();
    navMan.goBack();
  },
   onSaveEmailAddress:function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var data ={};
     var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
     if(this.view.txtEmailAddress.text !== ""){
       data ={  
         "emailAddress" :this.view.txtEmailAddress.text
       };   
     }else{
       data ={  
         "emailAddress" :""
       };   
     }
     transferModulePresentationController.navigateToVerifyDetailsFromEmailAddress(data);
  },
  updateUI: function() {
    var emailAddress = this.view.txtEmailAddress.text;
    if(emailAddress.length >0){
      this.enableContinueButton();
    }else{
      this.disableContinueButton();
      this.onSaveEmailAddress();
    }
    this.view.forceLayout();
  },
  disableContinueButton : function(){
    this.view.btnVerify.skin = "sknBtnE2E9F0Rounded";
    this.view.btnVerify.setEnabled(false);
  },
  enableContinueButton : function(){
    this.view.btnVerify.skin = "sknBtn0095e4RoundedffffffSSP26px";
    this.view.btnVerify.setEnabled(true);
  },
   renderTitleBar :function(){
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    var isIphone = deviceUtilManager.isIPhone();
    if(!isIphone){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.flxHeader.isVisible = false;
    }
  },
  enableVerifyButton:function(){
    this.view.btnVerify.setEnabled(true);
    this.view.btnVerify.skin = "sknBtn0095e4RoundedffffffSSP26px";
  }

 });