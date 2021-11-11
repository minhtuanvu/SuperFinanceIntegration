define("AuthModule/userfrmForgotCreatePasswordController", {
    timerCounter: 0,
    isPasswordValid: false,
    passwordsMatch: false,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        this.view.flxPopup.setVisibility(false);
        this.initActions();
        this.handleData();
        this.renderTitleBar();
        var navManager = applicationManager.getNavigationManager();
        var userdata = navManager.getCustomInfo("frmForgotCreatePassword");
        this.view.rtxRulesPwd.text = userdata.passwordPolicy;
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        this.view.customHeader.flxBack.setVisibility(true);
        this.view.flxSecurityRequirements.setVisibility(false);
        this.view.customHeader.lblLocateUs.text = kony.i18n.getLocalizedString("kony.mb.ForgotLoginCredentials");
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.title = kony.i18n.getLocalizedString("kony.mb.ForgotLoginCredentials");
        }
    },
    renderTitleBar: function() {
        var deviceUtilManager = applicationManager.getDeviceUtilManager();
        var isIphone = deviceUtilManager.isIPhone();
        if (!isIphone) {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
    },
    handleData: function() {
        var scope = this;
        this.view.txtNewPassword.text = '';
        this.view.txtReEnterPassword.text = '';
        this.view.flxSecurityRequirements.setVisibility(false);
        this.view.imgPasswordsMatch.src = "tickmark.png";
        this.view.imgMaskUnmask.src = "viewicon.png";
        this.view.btnUpdatePassword.skin = "sknBtna0a0a0SSPReg26px";
        this.view.btnUpdatePassword.setEnabled(false);
        this.view.imgMaskUnmask.onTouchEnd = this.maskUnmaskPassword;
    },
    initActions: function() {
        this.view.customHeader.flxBack.onClick = this.goBack;
        this.view.customHeader.btnRight.onClick = this.onCancel;
        this.view.txtNewPassword.onTextChange = this.matchPasswords;
        this.view.txtReEnterPassword.onTextChange = this.matchPasswords;
        this.view.txtNewPassword.onTouchStart = this.hideFlxRequirements;
        this.view.txtNewPassword.onEndEditing = this.validatePassword;
    },
    goBack: function() {
        var navManager = applicationManager.getNavigationManager();
        if (navManager.getPreviousForm() === "frmForgotMFASecurityCode") {
            navManager.removeFormIndex("frmForgotMFASecurityCode");
        }
        navManager.goBack();
    },
    onCancel: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.clearStack();
        var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authModule.presentationController.navigateToLogin();
    },
    maskUnmaskPassword: function() {
        if (this.view.txtNewPassword.secureTextEntry === true) {
            this.view.txtNewPassword.secureTextEntry = false;
            this.view.imgMaskUnmask.src = "viewactive.png";
        } else {
            this.view.txtNewPassword.secureTextEntry = true;
            this.view.imgMaskUnmask.src = "viewicon.png";
        }
    },
    matchPasswords: function() {
        if (applicationManager.getPresentationValidationUtility().isValidTextBox(this.view.txtNewPassword.text)) {
            if (this.view.txtNewPassword.text === this.view.txtReEnterPassword.text) {
                this.view.imgPasswordsMatch.src = "greentick.png";
                this.passwordsMatch = true;
            } else {
                this.view.imgPasswordsMatch.src = "tickmark.png";
                this.passwordsMatch = false;
            }
        } else {
            this.view.imgPasswordsMatch.src = "tickmark.png";
            this.passwordsMatch = false;
        }
        if (this.passwordsMatch && this.isPasswordValid) {
            this.view.btnUpdatePassword.skin = "sknBtn0095e426pxEnabled";
            this.view.btnUpdatePassword.setEnabled(true);
        } else {
            this.view.btnUpdatePassword.skin = "sknBtna0a0a0SSPReg26px";
            this.view.btnUpdatePassword.setEnabled(false);
        }
        this.view.forceLayout();
    },
    validatePassword: function() {
        var password = this.view.txtNewPassword.text;
        var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authModule.presentationController.validatePassword(password);
    },
    updatePasswordAction: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var newPassword = this.view.txtNewPassword.text;
        var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authModule.presentationController.updatePassword(newPassword);
    },
    //     showPopupUpdatePasswordSuccessful: function () {
    passwordValid: function() {
        this.isPasswordValid = true;
        this.matchPasswords();
    },
    // utitlity function to show password rules
    showFlxSecurityRequirements: function() {
        this.isPasswordValid = false;
        this.view.flxSecurityRequirements.isVisible = true;
        /* if (this.view.flxSecurityRequirements.height !== "150dp") {
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
    hideFlxRequirements: function() {
        this.view.flxSecurityRequirements.setVisibility(false);
        /*  var scope = this;
          if (this.view.flxSecurityRequirements.height !== "0dp") {
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
    bindGenericError: function(errorMsg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    }
});
define("AuthModule/frmForgotCreatePasswordControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_ce03fcc04c4d4378a355dcbaa4497ee0: function AS_Button_ce03fcc04c4d4378a355dcbaa4497ee0(eventobject) {
        var self = this;
        this.updatePasswordAction();
    },
    AS_Button_j4fd09b548f54d51bb0108e43eae39be: function AS_Button_j4fd09b548f54d51bb0108e43eae39be(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    AS_Form_c2cf6abb111947c08cea3c53589f48c4: function AS_Form_c2cf6abb111947c08cea3c53589f48c4(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_bf368211a1ed42dda4007a81fa285b1f: function AS_Form_bf368211a1ed42dda4007a81fa285b1f(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_if1523b5f2dd440e8d6c0d66124f79ef: function AS_BarButtonItem_if1523b5f2dd440e8d6c0d66124f79ef(eventobject) {
        var self = this;
        this.onCancel();
    },
});
define("AuthModule/frmForgotCreatePasswordController", ["AuthModule/userfrmForgotCreatePasswordController", "AuthModule/frmForgotCreatePasswordControllerActions"], function() {
    var controller = require("AuthModule/userfrmForgotCreatePasswordController");
    var controllerActions = ["AuthModule/frmForgotCreatePasswordControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
