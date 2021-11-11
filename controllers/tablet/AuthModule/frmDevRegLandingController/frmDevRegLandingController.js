define({
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  preShow : function(){
    this.renderTitleBar();
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    this.view.btnSkipRegistration.onClick = this.onbtnSkipRegistrationClick.bind(this);
    this.view.btnRigister.onClick = this.onBtnRegisterOnClick;
    this.setDetails();
  },
  onbtnSkipRegistrationClick : function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    authMode.presentationController.defaultLoginToAccounts();
    authMode.presentationController.setDeviceRegisterflag(false);
  },
  onBtnRegisterOnClick : function(){
    var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    authMod.presentationController.commonFunctionForNavigation("frmDevRegSecCode");
  },
  setDetails : function(){
    var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    var Phoneno = authMode.presentationController.getMobileNo();
    this.view.lblMobNoValue.text = applicationManager.getDataProcessorUtility().maskAccountNumber(Phoneno);
    var userEmail = authMode.presentationController.getEmail();
    this.view.lblEmailIdValue.text = applicationManager.getDataProcessorUtility().maskAccountEmail(userEmail);
  },
  renderTitleBar :function(){
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    var isIpad = deviceUtilManager.isIpad();
    if(!isIpad){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.flxHeader.isVisible = false;
    }
  },
});