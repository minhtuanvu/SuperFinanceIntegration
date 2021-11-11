define("AuthModule/userfrmForgotEnterSecurityCodeController", {
    keypadString: '',
    timerCounter: 0,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        this.view.flxPopup.setVisibility(false);
        this.initActions();
        this.renderTitleBar();
        this.handleData();
        this.view.customHeader.lblLocateUs.text = kony.i18n.getLocalizedString("kony.mb.ForgotLoginCredentials");
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.title = kony.i18n.getLocalizedString("kony.mb.ForgotLoginCredentials");
        }
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
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
        this.keypadString = "";
        this.updateInputBullets();
    },
    initActions: function() {
        this.view.btnReSend.onClick = this.requestResendOTP;
        this.view.customHeader.flxBack.onClick = this.goBack;
        this.view.customHeader.btnRight.onClick = this.onCancel;
        this.setKeyPadActions();
    },
    goBack: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    },
    onCancel: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.clearStack();
        var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authModule.presentationController.navigateToLogin();
    },
    showCreatePassword: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var otp = this.keypadString;
        var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        //authModule.presentationController.getPasswordRulesAndPolicy();
        authModule.presentationController.validateOTP(otp);
    },
    //KEYPAD OPS:
    updateInputBullets: function() {
        var scope = this;
        var widgets = this.view["flxInputSecurityCode"].widgets();
        for (var i = 0; i < this.keypadString.length; i++) {
            widgets[i].skin = "sknLbl979797SSP60px";
        }
        for (var i = this.keypadString.length; i < widgets.length - 1; i++) {
            widgets[i].skin = "lblWhiteDot";
        }
        if (this.keypadString.length !== 6) {
            this.view.btnVerify.skin = "sknBtna0a0a0SSPReg26px";
            this.view.btnVerify.setEnabled(false);
        } else {
            this.view.btnVerify.skin = "sknBtn0095e426pxEnabled";
            this.view.btnVerify.setEnabled(true);
        }
        this.view.forceLayout();
    },
    setKeypadChar: function(char) {
        if (this.keypadString.length === 6) return;
        this.keypadString = this.keypadString + char;
        this.updateInputBullets();
    },
    clearKeypadChar: function() {
        if (this.keypadString.length === 1) {
            this.keypadString = '';
            this.updateInputBullets();
        }
        if (this.keypadString.length !== 0) {
            this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
            this.updateInputBullets();
        }
    },
    requestResendOTP: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authModule.presentationController.resendOTP();
    },
    onResendOTP: function() {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        this.keypadString = "";
        this.updateInputBullets();
    },
    bindGenericError: function(errorMsg) {
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    },
    setKeyPadActions: function() {
        var scopeObj = this;
        this.view.keypad.btnOne.onClick = function() {
            scopeObj.setKeypadChar(1);
        };
        this.view.keypad.btnTwo.onClick = function() {
            scopeObj.setKeypadChar(2);
        };
        this.view.keypad.btnThree.onClick = function() {
            scopeObj.setKeypadChar(3);
        };
        this.view.keypad.btnFour.onClick = function() {
            scopeObj.setKeypadChar(4);
        };
        this.view.keypad.btnFive.onClick = function() {
            scopeObj.setKeypadChar(5);
        };
        this.view.keypad.btnSix.onClick = function() {
            scopeObj.setKeypadChar(6);
        };
        this.view.keypad.btnSeven.onClick = function() {
            scopeObj.setKeypadChar(7);
        };
        this.view.keypad.btnEight.onClick = function() {
            scopeObj.setKeypadChar(8);
        };
        this.view.keypad.btnNine.onClick = function() {
            scopeObj.setKeypadChar(9);
        };
        this.view.keypad.btnZero.onClick = function() {
            scopeObj.setKeypadChar(0);
        };
        this.view.keypad.imgClearKeypad.onTouchEnd = function() {
            scopeObj.clearKeypadChar();
        };
        // this.view.btnDot.onClick = function() {
        //    scopeObj.setKeypadChar('.');
        // };
    }
});
define("AuthModule/frmForgotEnterSecurityCodeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_df499898d2f9402c9710088a9d563164: function AS_Button_df499898d2f9402c9710088a9d563164(eventobject) {
        var self = this;
        this.showCreatePassword();
    },
    AS_FlexContainer_g7a4ac510d724900962ab8a7a740cd6d: function AS_FlexContainer_g7a4ac510d724900962ab8a7a740cd6d(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmForgotMain");
    },
    AS_Form_a1f66ff33ff94e1ca6a5cff4db952d02: function AS_Form_a1f66ff33ff94e1ca6a5cff4db952d02(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_c603c682f08e48db816333019842c835: function AS_Form_c603c682f08e48db816333019842c835(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_c0eea92597a5415bb3c805dfd283f208: function AS_BarButtonItem_c0eea92597a5415bb3c805dfd283f208(eventobject) {
        var self = this;
        this.onCancel();
    },
    AS_Button_b3e6f07f5fd94af9936d40a4296b3d84: function AS_Button_b3e6f07f5fd94af9936d40a4296b3d84(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_dd060757283f46f286a7e3cbf0809323: function AS_Button_dd060757283f46f286a7e3cbf0809323(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_h764c0886ec04401893d7e1513782888: function AS_Button_h764c0886ec04401893d7e1513782888(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_da85512aae1946ab9688fa755a1a2eac: function AS_Button_da85512aae1946ab9688fa755a1a2eac(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_e88a653f77bc477da4b10a6d9112a219: function AS_Button_e88a653f77bc477da4b10a6d9112a219(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_db2cfa52c55b4832adb14ca9970210d3: function AS_Button_db2cfa52c55b4832adb14ca9970210d3(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_f8dd5f33727d433eac544aaf34c67921: function AS_Button_f8dd5f33727d433eac544aaf34c67921(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_bd4616ab9c574cafb4880155a497c120: function AS_Button_bd4616ab9c574cafb4880155a497c120(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_i9f4738f679e46ada9a41a0d560981f8: function AS_Button_i9f4738f679e46ada9a41a0d560981f8(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_ab0be93e0f864bd6a58d9525f5194cec: function AS_Image_ab0be93e0f864bd6a58d9525f5194cec(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    }
});
define("AuthModule/frmForgotEnterSecurityCodeController", ["AuthModule/userfrmForgotEnterSecurityCodeController", "AuthModule/frmForgotEnterSecurityCodeControllerActions"], function() {
    var controller = require("AuthModule/userfrmForgotEnterSecurityCodeController");
    var controllerActions = ["AuthModule/frmForgotEnterSecurityCodeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
