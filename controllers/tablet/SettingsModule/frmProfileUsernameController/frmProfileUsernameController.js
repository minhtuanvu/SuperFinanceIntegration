define({
  timerCounter : 0,
  init: function() {
    var FormValidator = require("FormValidatorManager");
    this.fv = new FormValidator(1);
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
  },
  preShow: function() {
    this.setFlowAction();
    this.setPreShowData();
    this.updateOldUserName();
    this.fv.submissionView(this.view.btnContinue);
    this.initHeaderActions();
    var navManager = applicationManager.getNavigationManager();
    var userdata = navManager.getCustomInfo("frmProfileUsername");
    this.view.rtxRulesPwd.text = userdata.usernamePolicy;
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  validateTheUserName: function() {
    var text = this.view.tbxUsername.text;
    this.hideFlxRequirementsUsername();
    this.fv.checkAndUpdateStatusForNull(0, text);
  },
  setFlowAction: function() {
    var scopeObj = this;
    this.view.btnContinue.onClick = this.onUpdateClick;
    this.view.tbxUsername.onTextChange = this.validateTheUserName;
    this.view.tbxUsername.onTouchStart = function(){
      if(scopeObj.view.flxSecurityRequirementsUsername.isVisible === false){
      scopeObj.hideFlxRequirementsUsername();
      }
    };
  },
  setPreShowData: function() {
    this.view.tbxUsername.text = "";
    this.view.tbxUsername.setFocus(true);
  },
  updateOldUserName: function() {
    var navManager = applicationManager.getNavigationManager();
    var data = navManager.getCustomInfo('frmProfileUsername');
    this.view.lblPreviousUsername.text = data.userName;
  },
  onUpdateClick: function() {
    var updatedUserName = this.view.tbxUsername.text;
    if(updatedUserName === null || updatedUserName === undefined || updatedUserName.length < 1){
      var i18n_msg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.usernameEmptyMsg","Please enter a valid username");
      this.bindViewError(i18n_msg);
      this.showFlxSecurityRequirementsUsername();
      return;
    }
    var settings = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    var stepData = settings.presentationController.updateUserName(updatedUserName);
  },
  initHeaderActions: function() {
    var isIpad = applicationManager.getDeviceUtilManager().isIpad();
    if (!isIpad) {
      this.view.customHeaderTablet.flxBack.onClick = this.navBack;
      this.view.customHeaderTablet.btnRight.onClick = this.onClickCancel;
    }
  },
   showFlxSecurityRequirementsUsername: function() {
         this.view.flxSecurityRequirementsUsername.isVisible = true;
   },
  hideFlxRequirementsUsername: function() {
       this.view.flxSecurityRequirementsUsername.isVisible = false;
  },
  navBack: function() {
    var navManager = applicationManager.getNavigationManager();
    navManager.goBack();
  },
  onClickCancel: function() {
    var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMod.presentationController.commonFunctionForNavigation("frmSettings");
  },
  bindViewError: function(msg) {
    applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
  }
});