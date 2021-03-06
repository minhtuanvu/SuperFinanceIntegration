define({
	init: function() {
    	var navManager = applicationManager.getNavigationManager();
    	var currentForm = navManager.getCurrentForm();
    	applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
	},
	preShow: function() {
    	this.view.flxPopup.setVisibility(false);
    	this.initActions();
      	this.initHeaderActions();
    	var navManager = applicationManager.getNavigationManager();
    	var currentForm = navManager.getCurrentForm();
    	applicationManager.getPresentationFormUtility().logFormName(currentForm);
    	applicationManager.getPresentationUtility().dismissLoadingScreen();
	},
	initActions: function() {
	    this.view.btnNext.onClick = this.btnNextOnClick;
	    this.view.digitkeypad.onDigitEntered = this.addDigit;
	    this.view.digitkeypad.onDigitRemoved = this.removeDigit;
	    this.view.SecureCode.onCodeEntered = this.changeContinueBtnState.bind(this, true);
	    this.view.SecureCode.onCodeRevoked = this.changeContinueBtnState.bind(this, false);
	},
  	initHeaderActions: function() {
		var isIpad = applicationManager.getDeviceUtilManager().isIpad();
		if (!isIpad) {
          	this.view.customHeader.btnRight.onClick = this.cancelHandleAction;
          	this.view.customHeader.flxBack.onClick = this.backNavigation;
		}
	},
 	cancelHandleAction: function() {
    	var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
      	settingsMod.presentationController.commonFunctionForNavigation("frmPreferencesPin");
    },
  	backNavigation: function() {
      	var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
      	settingsMod.presentationController.commonFunctionForNavigation("frmPreferencesResetStep2");
    },
	addDigit: function(char) {
		var inputPin = this.view.SecureCode;
		inputPin.addDigit(char);
	},
	removeDigit: function() {
		var inputPin = this.view.SecureCode;
		inputPin.removeDigit();
	},
	changeContinueBtnState: function(isEnable) {
	    this.view.btnNext.setEnabled(isEnable);
	    this.view.btnNext.skin = isEnable ? "sknBtn0a78d1SSP36pxTab" : "sknBtna0a0a0SSP36pxTab";
  	},
	bindGenericError: function(errorMsg) {
		var self = this;
		applicationManager.getDataProcessorUtility().showToastMessageError(self, errorMsg);
	},
	btnNextOnClick: function() {
    	var inputPin = this.view.SecureCode;
    	var code = inputPin.getEnteredCode();
    	applicationManager.getPresentationUtility().showLoadingScreen();
    	var navManger = applicationManager.getNavigationManager();
    	var updatedPin = navManger.getCustomInfo("frmPreferencesResetStep3");
    	if (inputPin.getEnteredCode() === updatedPin) {
      		var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
      		settingsMode.presentationController.updatePin(code);
    	} else {
      		applicationManager.getPresentationUtility().dismissLoadingScreen();
      		applicationManager.getDataProcessorUtility().showToastMessageError(this, kony.i18n.getLocalizedString("kony.mb.Please.enter.a.valild.pin"), this.clearKeyPadString);
    	}
  	},
	clearKeyPadString: function() {
		var inputPin = this.view.SecureCode;
		inputPin.clear();
	}
});