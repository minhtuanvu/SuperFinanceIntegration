define({
  flag: '0',
  timerCounter: 0,
  init : function(){
    var FormValidator = require("FormValidatorManager")
	this.fv = new FormValidator(3);
	var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  preShow: function () {
    var scopeObj = this;
    if(applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone"){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.flxHeader.isVisible = false;
    }
    this.fv.submissionView(this.view.btnContinueUsernamePassword);
    this.view.flxMainContainer.setVisibility(true);
    this.view.flxPopup.setVisibility(false);
    this.view.txtUsername.setFocus(true);
    this.view.txtUsername.text = "";
    this.view.txtPassword.text = "";
    this.view.txtReEnterPassword.text = "";
    this.hideFlxRequirementsPassword();
    this.hideFlxRequirementsUsername();
    this.view.flxSecurityRequirements.isVisible = false;
    this.view.flxSecurityRequirementsUsername.isVisible = false;
    var navMan=applicationManager.getNavigationManager();
    var data=navMan.getCustomInfo("frmOBEmail");
	//var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    var userdata  = data.usernamePolicy;
    var pwddata = data.passwordPolicy;
    scopeObj.view.rtxRulesUsername.text = userdata;
    scopeObj.view.rtxRulesPwd.text = pwddata;
    this.initActions();
	var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    this.view.txtPassword.secureTextEntry = true;
    this.view.imgMaskUnmask.src = "viewicon.png";
    this.view.imgPasswordsMatch.src = "tickmark.png";
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  validateUsername :function(){
    var scope =this;
    var text = this.view.txtUsername.text;
    var validationUtility = applicationManager.getValidationUtilManager();
    if(text && validationUtility.isUsernameValidForPolicy(text)) {
      scope.hideFlxRequirementsUsername();
      this.fv.checkAndUpdateStatusForNull(0, text);
    }else {
	   scope.showFlxSecurityRequirementsUsername();
    }
  },
  validatePassword:function(){
    var scope=this;
    var text = this.view.txtPassword.text;
    if(scope.isValidPassword()){
      scope.hideFlxRequirementsPassword();
      this.fv.checkAndUpdateStatusForNull(1, text);
    }
    else{
      scope.showFlxSecurityRequirementsPassword();
    }
  },
  validateReenterPassword : function(){
    var text = this.view.txtReEnterPassword.text;
    this.fv.checkAndUpdateStatusForNull(2, text);
  },
  validateAndNavigate: function () {
    this.flag = 0;
    var self = this;
    if (this.view.txtUsername.text === "john") {
      self.showPopupIncorrectCredentials("username");
      return;
    } else if (this.view.txtUsername.text === null) {
      self.showPopupIncorrectCredentials("Enterusername");
      return;
    } else {
      this.flag++;
    }
    if (this.view.txtPassword.text !== this.view.txtReEnterPassword.text || this.view.txtPassword.text === null) {
      self.showPopupIncorrectCredentials("password");
      self.view.imgPasswordsMatch.src = "tickmark.png";
      return;
    } else if (this.view.txtPassword.text !== null && this.view.txtPassword.text === this.view.txtReEnterPassword.text) {
      self.view.imgPasswordsMatch.src = "greentick.png";
      this.flag++;
    }
    if (this.flag === 2) {
      var??NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
      NUOMod.presentationController.commonFunctionForNavigation("frmOBSelectProducts");
    }
  },
  matchPassword: function () {
    var self = this;
    if (this.view.txtPassword.text !== this.view.txtReEnterPassword.text || this.view.txtPassword.text === null) {
      //self.showPopupIncorrectCredentials("password");
      self.view.imgPasswordsMatch.src = "tickmark.png";
      return false;
    } else if (this.view.txtPassword.text && this.view.txtReEnterPassword.text && this.view.txtPassword.text !== null && this.view.txtPassword.text === this.view.txtReEnterPassword.text) {
      self.view.imgPasswordsMatch.src = "greentick.png";
      this.flag++;
      return true;
    }
  },
  showPopupIncorrectCredentials: function (par) {
    if(par === "Enterusername") {
    //  this.view.customPopup.lblPopup.text = kony.i18n.getLocalizedString("kony.mb.OnBoarding.Enterusername");
      applicationManager.getDataProcessorUtility().showToastMessageError(scope,kony.i18n.getLocalizedString("kony.mb.OnBoarding.Enterusername"));
    }if(par === "username") {
      //this.view.customPopup.lblPopup.text = kony.i18n.getLocalizedString("kony.mb.enroll.usernameUnavailableMsg");
      applicationManager.getDataProcessorUtility().showToastMessageError(scope,kony.i18n.getLocalizedString("kony.mb.enroll.usernameUnavailableMsg"));
    } else if(par === "password") {
      //this.view.customPopup.lblPopup.text = kony.i18n.getLocalizedString("kony.mb.enroll.passwordNotMatch");
      applicationManager.getDataProcessorUtility().showToastMessageError(scope,kony.i18n.getLocalizedString("kony.mb.enroll.passwordNotMatch"));
    }else if(par === "invalidpassword") {
      //this.view.customPopup.lblPopup.text = kony.i18n.getLocalizedString("kony.mb.common.invalidPassword");
      applicationManager.getDataProcessorUtility().showToastMessageError(scope,kony.i18n.getLocalizedString("kony.mb.common.invalidPassword"));
    } else if(par === "invalidusername") {
      //this.view.customPopup.lblPopup.text = kony.i18n.getLocalizedString("kony.mb.OnBoarding.invalidusername");
      //scope.showFlxSecurityRequirementsUsername();
      applicationManager.getDataProcessorUtility().showToastMessageError(scope,kony.i18n.getLocalizedString("kony.mb.OnBoarding.invalidusername"));
    }
    /*var scopeObj = this;
    this.timerCounter = parseInt(this.timerCounter) + 1;
    var timerId = "timerPopupError2" + this.timerCounter;
    this.view.flxPopup.skin = "sknFlxf54b5e";
    this.view.customPopup.imgPopup.src = "errormessage.png";
    //this.view.customPopup.lblPopup.text = kony.i18n.getLocalizedString("kony.mb.OnBoarding.error");
    this.view.flxPopup.setVisibility(true);
    kony.timer.schedule(timerId, function () {
      scopeObj.view.flxPopup.setVisibility(false);
    }, 1.5, false);*/
  },
  initActions : function(){
    var scope = this;
    this.view.txtPassword.onTouchStart=this.hideFlxRequirementsPassword;
    this.view.txtUsername.onTouchStart=this.hideFlxRequirementsUsername;
    scope.view.txtUsername.onEndEditing = function(){
      if(scope.view.txtUsername.text) {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        authMod.presentationController.checkUserAvailability(scope.view.txtUsername.text);
      }
      else {
        scope.bindError("Enterusername");
        scope.hideFlxRequirementsUsername();
      }
    };
    scope.view.txtPassword.onEndEditing = function(){
      if(scope.isValidPassword())
      scope.matchPassword();
      else{
        if(scope.view.txtPassword.text.length>0)
        scope.bindError("invalidpassword");
        scope.hideFlxRequirementsPassword();
      }
    };
    scope.view.txtUsername.onTextChange = function(){
      scope.validateUsername();
      //scope.showFlxSecurityRequirementsUsername();
    };
    scope.view.txtPassword.onTextChange = function(){
      scope.validatePassword();
      scope.matchPassword();
    };
    scope.view.txtReEnterPassword.onEndEditing = function(){
      scope.matchPassword();
    };
    scope.view.txtReEnterPassword.onTextChange = function () {
      scope.validateReenterPassword();
      scope.matchPassword();
    };
    scope.view.btnContinueUsernamePassword.onClick = this.createUserIfAvailable;
      //this.checkValidUserName;
    scope.view.imgMaskUnmask.onTouchEnd = function () {
      if (scope.view.imgMaskUnmask.src === "viewactive.png") {
        scope.view.txtPassword.secureTextEntry = true;
        scope.view.imgMaskUnmask.src = "viewicon.png";
        scope.view.flxPassword.forceLayout();
      } else {
        scope.view.txtPassword.secureTextEntry = false;
        scope.view.imgMaskUnmask.src = "viewactive.png";
        scope.view.flxPassword.forceLayout();
      }
    };
    scope.view.customHeader.btnRight.onClick = this.cancelOnClick;
  },
  cancelOnClick:function()
  {
	 var navManager = applicationManager.getNavigationManager();
    navManager.clearStack();
    var??NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
	NUOMod.presentationController.commonFunctionForNavigation("frmLogin");
  },
  bindError : function(par){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if(par === "Enterusername") {
      applicationManager.getDataProcessorUtility().showToastMessageError(this,kony.i18n.getLocalizedString("kony.mb.OnBoarding.Enterusername"));
    }if(par === "username") {
      applicationManager.getDataProcessorUtility().showToastMessageError(this,kony.i18n.getLocalizedString("kony.mb.enroll.usernameUnavailableMsg"));
    } else if(par === "password") {
      applicationManager.getDataProcessorUtility().showToastMessageError(this,kony.i18n.getLocalizedString("kony.mb.enroll.passwordNotMatch"));
    }else if(par === "invalidpassword") {
      applicationManager.getDataProcessorUtility().showToastMessageError(this,kony.i18n.getLocalizedString("kony.mb.common.invalidPassword"));
    } else if(par === "invalidusername") {
      applicationManager.getDataProcessorUtility().showToastMessageError(this,kony.i18n.getLocalizedString("kony.mb.OnBoarding.invalidusername"));
    }
    this.view.forceLayout();
  },
   checkValidUserName : function(){
    var scope = this;
      if(scope.view.txtUsername.text) {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        authMod.presentationController.checkUserAvailability(scope.view.txtUsername.text, scope.createUserIfAvailable,function(err){
        scope.bindError("username");
        });
      } else {
        scope.bindError("Enterusername");
        scope.showFlxSecurityRequirementsUsername();
      }
    },
  isValidPassword : function(){
    var password = this.view.txtPassword.text;
    var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    return NUOMod.presentationController.validatePassword(password);
  },
  createUserIfAvailable : function (res) {
    var scope = this;
    var newUserMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
    if(newUserMod.presentationController.userAvailable)
    {
      //newUserMod.presentationController.userAvailable = true;
      var userName=scope.view.txtUsername.text;
      var password=scope.view.txtPassword.text;
      var reenter=scope.view.txtReEnterPassword;
      if(userName && password && reenter && scope.matchPassword()){
        applicationManager.getPresentationUtility().showLoadingScreen();
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        authMod.presentationController.createNewUser(userName,password,reenter, this);
      }
      else if(!userName){
        scope.bindError("Enterusername");
        scope.showFlxSecurityRequirementsUsername();
      }else if(!password){
        scope.bindError("invalidpassword");
        scope.showFlxSecurityRequirementsPassword();
      }else if(!reenter){
        scope.bindError("password");
      }
      else if(!scope.matchPassword()){
        scope.bindError("password");
      }
    }
    else
    {
      newUserMod.presentationController.userAvailable = false;
      scope.bindError("username");
    }
  },
  bindGenericError : function(msg)
  {
    applicationManager.getDataProcessorUtility().showToastMessageError(this,msg);
  },
  // utitlity function to show password rules
  showFlxSecurityRequirementsPassword: function() {
         //this.isPasswordValid = false;
         this.view.flxSecurityRequirements.isVisible = true;
         this.view.forceLayout();
      /*   if (this.view.flxSecurityRequirements.height !== "150dp") {
             this.view.flxSecurityRequirements.animate(
                 kony.ui.createAnimation({
                     "0": {
                         "anchorPoint": {
                             "x": 0.5,
                             "y": 0.5
                         },
                         "stepConfig": {
                             "timingFunction": kony.anim.EASE
                         },
                         "rectified": true,
                         "height": "0dp",
                     },
                     "100": {
                         "anchorPoint": {
                             "x": 0.5,
                             "y": 0.5
                         },
                         "stepConfig": {
                             "timingFunction": kony.anim.EASE
                         },
                         "rectified": true,
                         "height": "150dp",
                     }
                 }), {
                     "delay": 0,
                     "iterationCount": 1,
                     "fillMode": kony.anim.FILL_MODE_FORWARDS,
                     "duration": 0.5
                 }, {
                     "animationEnd": function() {}
                 });
         } */
     },
   // utitlity function to hide password rules
     hideFlxRequirementsPassword: function() {
         var scope = this;
       scope.view.flxSecurityRequirements.isVisible = false;
       this.view.forceLayout();
        /* if (this.view.flxSecurityRequirements.height !== "0dp") {
             this.view.flxSecurityRequirements.animate(
                 kony.ui.createAnimation({
                     "0": {
                         "anchorPoint": {
                             "x": 0.5,
                             "y": 0.5
                         },
                         "stepConfig": {
                             "timingFunction": kony.anim.EASE
                         },
                         "rectified": true,
                         "height": "150dp",
                     },
                     "100": {
                         "anchorPoint": {
                             "x": 0.5,
                             "y": 0.5
                         },
                         "stepConfig": {
                             "timingFunction": kony.anim.EASE
                         },
                         "rectified": true,
                         "height": "0dp",
                     }
                 }), {
                     "delay": 0,
                     "iterationCount": 1,
                     "fillMode": kony.anim.FILL_MODE_FORWARDS,
                     "duration": 0.5
                 }, {
                     "animationEnd": function() {
                         scope.view.flxSecurityRequirements.isVisible = true;
                     }
                 });
         } */
     },
  showFlxSecurityRequirementsUsername: function() {
         //this.isPasswordValid = false;
         this.view.flxSecurityRequirementsUsername.isVisible = true;
         this.view.forceLayout();
        /* if (this.view.flxSecurityRequirementsUsername.height !== "190dp") {
             this.view.flxSecurityRequirementsUsername.animate(
                 kony.ui.createAnimation({
                     "0": {
                         "anchorPoint": {
                             "x": 0.5,
                             "y": 0.5
                         },
                         "stepConfig": {
                             "timingFunction": kony.anim.EASE
                         },
                         "rectified": true,
                         "height": "0dp",
                     },
                     "100": {
                         "anchorPoint": {
                             "x": 0.5,
                             "y": 0.5
                         },
                         "stepConfig": {
                             "timingFunction": kony.anim.EASE
                         },
                         "rectified": true,
                         "height": "190dp",
                     }
                 }), {
                     "delay": 0,
                     "iterationCount": 1,
                     "fillMode": kony.anim.FILL_MODE_FORWARDS,
                     "duration": 0.5
                 }, {
                     "animationEnd": function() {}
                 });
         } */
     },
   // utitlity function to hide password rules
     hideFlxRequirementsUsername: function() {
         var scope = this;
       	 scope.view.flxSecurityRequirementsUsername.isVisible = false;
         this.view.forceLayout();
        /* if (this.view.flxSecurityRequirementsUsername.height !== "0dp") {
             this.view.flxSecurityRequirementsUsername.animate(
                 kony.ui.createAnimation({
                     "0": {
                         "anchorPoint": {
                             "x": 0.5,
                             "y": 0.5
                         },
                         "stepConfig": {
                             "timingFunction": kony.anim.EASE
                         },
                         "rectified": true,
                         "height": "190dp",
                     },
                     "100": {
                         "anchorPoint": {
                             "x": 0.5,
                             "y": 0.5
                         },
                         "stepConfig": {
                             "timingFunction": kony.anim.EASE
                         },
                         "rectified": true,
                         "height": "0dp",
                     }
                 }), {
                     "delay": 0,
                     "iterationCount": 1,
                     "fillMode": kony.anim.FILL_MODE_FORWARDS,
                     "duration": 0.5
                 }, {
                     "animationEnd": function() {
                         scope.view.flxSecurityRequirementsUsername.isVisible = true;
                     }
                 });
         } */
     },
});