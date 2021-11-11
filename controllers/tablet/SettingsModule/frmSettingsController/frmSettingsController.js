define({
	init: function() {
		var navManager = applicationManager.getNavigationManager();
		var currentForm = navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
	},
	preShow: function() {
		this.setFlowActions();
		this.renderTitleAndMenuBar();
		this.initialUiSettings();
      	this.checkForToastMessage();
		this.showPopUpMessage();
      	this.setAccountSettings();
		var configManager = applicationManager.getConfigurationManager();
		var MenuHandler =  applicationManager.getMenuHandler();
		MenuHandler.setUpHamburgerForForm(this, configManager.constants.MENUSETTINGS);
		var navManager = applicationManager.getNavigationManager();
		var currentForm = navManager.getCurrentForm();
		applicationManager.getPresentationFormUtility().logFormName(currentForm);
		applicationManager.getPresentationUtility().dismissLoadingScreen();
	},
	setFlowActions: function() {
        if(!applicationManager.getDeviceUtilManager().isIpad()){
          this.view.customHeader.flxBack.onClick = this.backNavigation;
        }
		this.view.segSettingsLogin.onRowClick = this.segloginOnClick;
      	this.view.segSettingsDefaultAccount.onRowClick = this.segDefaultAccountOnClick;
      	this.view.segSettingsAlerts.onRowClick= this.segAlertsOnClick;
      	this.view.segSettingsProfile.onRowClick = this.onRowClickOfProfile;
	},
	backNavigation: function() {
    	var navManager = applicationManager.getNavigationManager();
		navManager.goBack();
	},
	showPopUpMessage: function() {
		var navManager = applicationManager.getNavigationManager();
		var msgData = navManager.getCustomInfo("frmSettings");
		if (msgData.popUpMsg) {
        	var scopeObj = this;
        	applicationManager.getDataProcessorUtility().showToastMessageSuccess(scopeObj, msgData.popUpMsg);
      	}
		msgData.popUpMsg = "";
		navManager.setCustomInfo("frmSettings", msgData);
	},
  showPwdUpdatedSuccess: function() {
        var scopeObj = this;
        this.timerCounter = parseInt(this.timerCounter) + 1;
        var timerId = "timerPopupError" + this.timerCounter;
        this.view.flxPopup.skin = "sknFlx43ce6e";
        this.view.customPopup.imgPopup.src = "confirmation.png";
        this.view.customPopup.lblPopup.text = kony.i18n.getLocalizedString("kony.mb.Profile.changePassword");
        this.view.flxPopup.setVisibility(true);
        kony.timer.schedule(timerId, function() {
            scopeObj.view.flxPopup.setVisibility(false);
        }, 1.5, false);
    },
    showUsernameUpdatedSuccess: function() {
        var scopeObj = this;
        this.timerCounter = parseInt(this.timerCounter) + 1;
        var timerId = "timerPopupError" + this.timerCounter;
        this.view.flxPopup.skin = "sknFlx43ce6e";
        this.view.customPopup.imgPopup.src = "confirmation.png";
        this.view.customPopup.lblPopup.text = kony.i18n.getLocalizedString("kony.mb.Profile.changeUsername");
        this.view.flxPopup.setVisibility(true);
        kony.timer.schedule(timerId, function() {
            scopeObj.view.flxPopup.setVisibility(false);
        }, 1.5, false);
    },
	initialUiSettings: function() {
		this.setSegLoginData();
      	this.setSegAlertsData();
	},
  setSegAlertsData: function() {
    	var userPrefManager = applicationManager.getUserPreferencesManager();
    	var alertsTurnedOn = userPrefManager.getAlertsInfo();
    	var data = this.view.segSettingsAlerts.data;
    	this.view.segSettingsAlerts.widgetDataMap = {
        	"lblProfileHeading": "lblProfileHeading",
        	"lblTitle": "lblTitle",
        	"lblValue": "alertStatus"
    	};
    	if (alertsTurnedOn === "true") {
        	data[0][1][0].alertStatus = "On";
    	} else {
        	data[0][1][0].alertStatus = "Off";
    	}
      	data[0][1][1].alertStatus = "";
  		data[0][1][2].alertStatus = "";
    	this.view.segSettingsAlerts.setData(data);
      	this.view.forceLayout();
},
	getSettingsStatus: function() {
    	var navManager = applicationManager.getNavigationManager();
    	var loginData = navManager.getCustomInfo("frmSettings");
    	var tempLoginMode = loginData.defLoginMode;
      	var settingsStatus = {
          accountStatus: "",
          regStatus: "",
          defaultStatus: ""
        };
      	switch(tempLoginMode) {
        	case "password":
          		settingsStatus.defaultStatus = kony.i18n.getLocalizedString("kony.mb.login.password");
          	break;
          	case "pin":
          		settingsStatus.defaultStatus = kony.i18n.getLocalizedString("kony.mb.devReg.pin");
          	break;
          	case "touchid":
	          	settingsStatus.defaultStatus = kony.i18n.getLocalizedString("kony.mb.devReg.touchidTitle");
            break;
      	    case "faceid":
            	settingsStatus.defaultStatus = kony.i18n.getLocalizedString("kony.mb.common.FaceCaps");
          	break;
        }
      	settingsStatus.accountStatus = kony.i18n.getLocalizedString(loginData.accPreview ?  "kony.mb.On" : "kony.mb.Off" );
    	settingsStatus.regStatus = kony.i18n.getLocalizedString(loginData.deviceReg ? "kony.mb.On" : "kony.mb.Off" );
      	return settingsStatus;
	},
	setSegLoginData : function() {
		this.getSettingsStatus();
		var data = [
			[
				{"lblProfileHeading": "Sign In"/*Login*/},
				[ {"lblTitle":"Account Preview", "lblValue": this.getSettingsStatus().accountStatus, "imgArrow": "chevron.png"},
                  {"lblTitle":"Device Registration", "lblValue": this.getSettingsStatus().regStatus, "imgArrow": "chevron.png"},
				  {"lblTitle":"Default Sign In"/*Login*/, "lblValue": this.getSettingsStatus().defaultStatus, "imgArrow": "chevron.png"}
				]
			]];
		this.view.segSettingsLogin.setData(data);
	},
	segloginOnClick: function() {
		var activeRow = this.view.segSettingsLogin.selectedIndex[1];
      	var rowTitle = this.view.segSettingsLogin.data[0][1][activeRow].lblTitle;
		var navManager = applicationManager.getNavigationManager();
		switch (rowTitle) {
			case "Account Preview":
            	this.gotoAcctPreview();
			break;
			case "Device Registration":
            	this.gotoDevRegistration();
			break;
			case "Default Sign In"/*Login*/:
            	this.gotoDefaultLogin();
			break;
			default:
			var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
			settingsMod.presentationController.commonFunctionForNavigation("frmSettings");
		}
      	return activeRow;
	},
	segDefaultAccountOnClick: function() {
        kony.ui.Alert("to be done");
        return;
		// applicationManager.getPresentationUtility().showLoadingScreen();
		// var navManager = applicationManager.getNavigationManager();
		// var selectedAcntRow = this.view.segSettingsDefaultAccount.selectedIndex[1];
		// var settingsMode = applicationManager.getModule("SettingsModule");
		// var selectedRecord = this.view.segSettingsDefaultAccount.data[0][1][selectedAcntRow];
		// var data = [];
		// data[0] = selectedRecord;
		// navManager.setCustomInfo("frmPreferencesDefaultAccount", data);
		// settingsMode.presentationController.setDataDefaultLogin(selectedAcntRow);
	},
	gotoAcctPreview: function() {
		applicationManager.getPresentationUtility().showLoadingScreen();
		var navManager = applicationManager.getNavigationManager();
		var loginData = navManager.getCustomInfo("frmSettings");
		navManager.setCustomInfo("frmPreferencesAccountPreview", loginData);
		var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
		settingsMod.presentationController.commonFunctionForNavigation("frmPreferencesAccountPreview");
	},
	updateSegmentData: function(feature, status) {
		var record = {"lblTitle": feature, "lblValue": status, "imgArrow": "segmentarrow.png"};
		this.view.segSettingsLogin.setDataAt(record, this.segloginOnClick());
	},
	gotoDevRegistration: function() {
		applicationManager.getPresentationUtility().showLoadingScreen();
		var navManager = applicationManager.getNavigationManager();
		var loginData = navManager.getCustomInfo("frmSettings");
		var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
		if (loginData.deviceReg) {
			settingsMod.presentationController.commonFunctionForNavigation("frmPreferencesDeviceDeRegistration");
		} else {
			navManager.setCustomInfo("frmPreferencesDeviceRegistration", loginData);
			settingsMod.presentationController.commonFunctionForNavigation("frmPreferencesDeviceRegistration");
		}
	},
	gotoDefaultLogin: function() {
		applicationManager.getPresentationUtility().showLoadingScreen();
		var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
		var navManager = applicationManager.getNavigationManager();
		var flagData = authMod.presentationController.getAuthFlags();
		flagData.popUpMsg = "";
		navManager.setCustomInfo("frmPreferencesDefaultLogin", flagData);
		var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
		settingsMod.presentationController.commonFunctionForNavigation("frmPreferencesDefaultLogin");
	},
	renderTitleAndMenuBar: function() {
		var deviceUtilManager = applicationManager.getDeviceUtilManager();
		var isIpad = deviceUtilManager.isIpad();
		if (!isIpad) {
			this.view.flxFooter.isVisible = false;
		} else {
			this.view.flxFooter.isVisible = true;
		}
	},
   checkForToastMessage : function(){
      var navigationManager = applicationManager.getNavigationManager();
      var data = navigationManager.getCustomInfo('frmProfileUsername');
      if(data && data.updateUsernameStatus ==='usernameUpdated'){
        var i18n_string = applicationManager.getPresentationUtility().getStringFromi18n('kony.mb.Profile.changeUsername');
        applicationManager.getDataProcessorUtility().showToastMessageSuccess(this,i18n_string);
        data.updateUsernameStatus = null;
        navigationManager.setCustomInfo('frmProfileUsername',data);
      }
     var data1 = navigationManager.getCustomInfo('frmProfileChangeAndUpdatePassword');
     if(data1 === "passwordUpdated"){
       var i18n_str = applicationManager.getPresentationUtility().getStringFromi18n('kony.mb.Profile.changePassword');
       applicationManager.getDataProcessorUtility().showToastMessageSuccess(this,i18n_str);
       navigationManager.setCustomInfo('frmProfileChangeAndUpdatePassword',null);
     }
   },
  segAlertsOnClick : function(){
     alertType = this.view.segSettingsAlerts.selectedIndex[1];
    var navManager = applicationManager.getNavigationManager();
    switch(alertType){
      case 0:
         	this.gotoAccountAlerts();
        	break;
      case 1:
        	//alert("gotoDealsAndSecurityAlerts");
        	this.gotoDealsAndSecurityAlerts();
        	break;
      case 2:
        	this.gotoDealsAndSecurityAlerts();
            break;
    }
  },
  gotoAccountAlerts : function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    try{
       	var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
      	settingsModule.presentationController.getAllAccountAlerts();
        }
      catch(exception){
      }
  },
  getAllAccountAlertsSuccess: function(response){
    var navManager = applicationManager.getNavigationManager();
    navManager.setCustomInfo("frmAlertsAccountList", response);
    var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMod.presentationController.commonFunctionForNavigation("frmAlertsAccountList");
  },
  getAllAccountAlertsFailure : function(response){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
  gotoDealsAndSecurityAlerts : function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
	var navManager = applicationManager.getNavigationManager();
	navManager.setCustomInfo("frmSettingsAlertType", alertType);
    try{
      	var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
      	settingsModule.presentationController.getDealsAndSecurityAlerts();
      }
      catch(exception){
      }
  },
  getDealsAndSecurityAlertsSuccess: function(response){
    var navManager = applicationManager.getNavigationManager();
    response.push(alertType);
    navManager.setCustomInfo("frmAlertsDealsAndSecurity", response);
    var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsMod.presentationController.commonFunctionForNavigation("frmAlertsDealsAndSecurity");
  },
  getDealsAndSecurityAlertsFailure : function(response){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  onRowClickOfProfile: function() {
    var selectedIndex = this.view.segSettingsProfile.selectedRowIndex;
    selectedIndex = parseInt(selectedIndex[1]);
    var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    if (selectedIndex === 0) {
      //settingsMod.presentationController.navigateToChangeUserName();
      var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
      settingsMode.presentationController.getUsernameRulesAndPolicy();
    }
    if (selectedIndex === 1) {
      //settingsMod.presentationController.navigateToChangePassword();
      var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
      settingsMode.presentationController.getPasswordRulesAndPolicy();
    }
    if (selectedIndex === 2) {
      settingsMod.presentationController.navigateToProfilePersonalDetails();
    }
  },
	setAccountSettings: function() {
		var data = [
			[
				{lblProfileHeading: "Account Settings"},
				[
					{lblTitle: "Account Preferences", lblValue: "", imgArrow: "chevron.png"},
					{lblTitle: "Set Default Account", lblValue: "", imgArrow: "chevron.png"},
				]
			]
        ];
		this.view.segSettingsDefaultAccount.setData(data);
	}
});