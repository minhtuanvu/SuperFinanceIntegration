define({
  tempLoginMode :"",
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  setTouchId : function(flags)
  {
    if (flags.isTouchIdSupported)
      this.view.flxTouchId.isVisible = true;
    else
      this.view.flxTouchId.isVisible = false;
    this.view.lblEnableTouch.text = kony.i18n.getLocalizedString("kony.mb.common.enabled");
  },
  setFaceId:function(flags)
  {
	this.view.flxFaceId.isVisible = false;
  },
  setPinLogin : function(flags)
  {
    if(flags.isPinEnabled)
      this.view.lblGenerate.text = kony.i18n.getLocalizedString("kony.mb.Generated");
    else
      this.view.lblGenerate.text = kony.i18n.getLocalizedString("kony.mb.devReg.generate");
  },
  initActions : function(flags)
  {
    this.view.btnContinue.onClick = this.btnContinueOnClick.bind(this);
    this.view.customHeader.btnRight.onClick = this.skipDefaultLogin;
    if(flags.defaultAuthMode == "touchid")
      this.view.flxTouchId.onClick = null;
    else
      this.view.flxTouchId.onClick = this.flxTouchIdNavigation;
    if(flags.defaultAuthMode == "pin")
      this.view.flxPin.onClick = null;
    else
      this.view.flxPin.onClick = this.flxPinNavigation;
  },
  callOnFormPreShow:function()
  {
    var navManager = applicationManager.getNavigationManager();
    var flags = navManager.getCustomInfo("frmDevRegLoginType");
    this.renderTitleBar();
    this.initActions(flags);
    this.setTouchId(flags);
    this.setFaceId(flags);
    this.setPinLogin(flags);
    this.setSelectedAuthMode(flags);
    if((flags.popUpMsg!==null)&&(flags.popUpMsg!==""))
    {
      var scopeObj=this;
      applicationManager.getDataProcessorUtility().showToastMessageSuccess(scopeObj,flags.popUpMsg);
    }
    flags.popUpMsg=null;
    var navManager = applicationManager.getNavigationManager();
    navManager.setCustomInfo("frmDevRegLoginType",flags);
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  skipDefaultLogin:function()
  {
    this.tempLoginMode="password";
    applicationManager.getPresentationUtility().showLoadingScreen();
    var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    authMode.presentationController.defaultLoginToAccounts();
  },
  setSelectedAuthMode:function(flags)
  {
    this.tempLoginMode = flags.defaultAuthMode;
    if(flags.defaultAuthMode == "pin")
      this.imgSelPinOnTouchEnd();
    else if(flags.defaultAuthMode == "touchid")
      this.imgSelTouchOnTouchEnd();
    else
      this.imgSelectUserOnTouchEnd();
  },
  imgSelectUserOnTouchEnd:function()
  {
    this.view.imgSelectUser.src="tickmark_green.png";
    this.view.imgSelTouch.src="chevron.png";
    this.view.imgSelPin.src="chevron.png";
    this.view.imgSelFace.src="chevron.png";
    this.tempLoginMode = "password";
  },
  imgSelTouchOnTouchEnd:function()
  {
    this.view.imgSelectUser.src="chevron.png";
    this.view.imgSelTouch.src="tickmark_green.png";
    this.view.imgSelPin.src="chevron.png";
    this.view.imgSelFace.src="chevron.png";
    //this.flxTouchIdNavigation();
  },
  imgSelPinOnTouchEnd:function()
  {
    this.view.imgSelectUser.src="chevron.png";
    this.view.imgSelTouch.src="chevron.png";
    this.view.imgSelPin.src="tickmark_green.png";
    this.view.imgSelFace.src="chevron.png";
    //this.flxPinNavigation();
  },
  btnContinueOnClick:function()
  {
    var navManager = applicationManager.getNavigationManager();
    var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    switch(this.tempLoginMode){
      case "password":
        var data = {loginMode:this.tempLoginMode};
        navManager.setCustomInfo("frmDefaultLogin",data);
        authModule.presentationController.commonFunctionForNavigation("frmDefaultLogin");
        break;
      case "touchid":
        this.flxTouchIdNavigation();
        break;
      case "pin":
        this.flxPinNavigation();
        break;
      default:
        var data = {loginMode:this.tempLoginMode};
        navManager.setCustomInfo("frmDefaultLogin",data);
        authModule.presentationController.commonFunctionForNavigation("frmDefaultLogin");
        break;
    }
  },
  flxPinNavigation:function(){
    //this.imgSelPinOnTouchEnd();
    var navManager = applicationManager.getNavigationManager();
    var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    this.tempLoginMode = "pin";
    var flags = navManager.getCustomInfo("frmDevRegLoginType");
    var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    authMod.presentationController.flowType="login";
    if(flags.defaultAuthMode == "pin")
      this.navigateToConfirmationForm("pin");
    else{
      if(!(flags.isPinEnabled)){
        authModule.presentationController.commonFunctionForNavigation("frmDevRegPin");
      }
      else{
        authModule.presentationController.commonFunctionForNavigation("frmDevRegPinConfirmation");
      }
    }
  },
  flxTouchIdNavigation:function(){
    // this.imgSelTouchOnTouchEnd();
    this.tempLoginMode = "touchid";
    var navManager = applicationManager.getNavigationManager();
    var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    var flags = navManager.getCustomInfo("frmDevRegLoginType");
    if(flags.defaultAuthMode == "touchid")
      this.navigateToConfirmationForm("touchid");
    else
      authModule.presentationController.commonFunctionForNavigation("frmDevRegTouchId");
  },
  navigateToConfirmationForm : function(tempMode)
  {
    var data = {loginMode:tempMode};
    var navManager = applicationManager.getNavigationManager();
    navManager.setCustomInfo("frmDefaultLogin",data);
    var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    authModule.presentationController.commonFunctionForNavigation("frmDefaultLogin");
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