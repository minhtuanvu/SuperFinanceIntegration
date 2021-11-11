define("PayAPersonModule/userfrmP2PCountryCodeController", {
    keypadString: '',
    timerCounter: 0,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    initActions: function() {
        this.view.btnVerify.onClick = this.validateSSNForgotPwd;
        this.view.customHeader.flxBack.onClick = this.goBack;
        this.view.customHeader.btnRight.onClick = this.onCancel;
        this.setKeyPadActions();
    },
    preShow: function() {
        this.keypadString = "";
        this.view.lblCode.text = "";
        this.view.flxPopup.setVisibility(false);
        this.initActions();
        this.renderTitleBar();
        this.handleData();
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
        // this.updateInputBullets();
    },
    getKeypadString: function() {
        var ssn = this.keypadString;
        ssn = ssn.replace(/-/g, "");
        return ssn;
    },
    //KEYPAD OPS:
    updateInputBullets: function() {
        var dummyString = '___-__-____';
        if (this.keypadString.length === 3 || this.keypadString.length === 6) {
            this.keypadString = this.keypadString + '-';
        }
        var widgets = this.view["flxInputSSN"].widgets();
        for (var i = 0; i < this.keypadString.length; i++) {
            // widgets[i].skin = "sknLbl979797SSP60px";
            if (this.keypadString[i] === '-') {
                widgets[i].text = this.keypadString[i];
            } else {
                widgets[i].text = "•";
            }
        }
        for (var i = this.keypadString.length; i < widgets.length; i++) {
            //widgets[i].skin = "sknLble3e3e3SSP60px";
            widgets[i].text = dummyString[i];
        }
        if (this.keypadString.length !== 11) {
            this.view.btnVerify.skin = "sknBtnOnBoardingInactive";
            this.view.btnVerify.setEnabled(false);
        } else {
            this.view.btnVerify.skin = "sknBtn0095e426pxEnabled";
            this.view.btnVerify.setEnabled(true);
        }
        this.view.forceLayout();
    },
    setKeypadChar: function(char) {
        if (this.keypadString.length === 11) return;
        this.keypadString = this.keypadString + char;
        this.view.lblCode.text = this.keypadString;
        //    this.updateInputBullets();
    },
    clearKeypadChar: function() {
        if (this.keypadString.length === 1) {
            this.keypadString = '';
        }
        if (this.keypadString.length !== 0) {
            if (this.keypadString[this.keypadString.length - 1] === '-') {
                this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
            }
            this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
        }
        //   this.updateInputBullets();
        this.view.lblCode.text = this.keypadString;
    },
    validateSSNForgotPwd: function() {
        var SSN = this.getKeypadString();
        var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authModule.presentationController.validateSSN(SSN);
    },
    bindViewError: function(msg) {
        applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
    },
    goBack: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    },
    onCancel: function() {
        var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authModule.presentationController.navigateToLogin();
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
define("PayAPersonModule/frmP2PCountryCodeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_c70db0fe67a34a31b574fabe559fd0f8: function AS_Button_c70db0fe67a34a31b574fabe559fd0f8(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    AS_FlexContainer_b215bf9b26784d75b8f81af736413d83: function AS_FlexContainer_b215bf9b26784d75b8f81af736413d83(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    AS_Form_i50e74e27b4443518a6fa1a6042f44d9: function AS_Form_i50e74e27b4443518a6fa1a6042f44d9(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_a90950dd1e75460aaf86c14b0db2e74f: function AS_Form_a90950dd1e75460aaf86c14b0db2e74f(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_cb307a445d0e4106b176baad7baf5b15: function AS_BarButtonItem_cb307a445d0e4106b176baad7baf5b15(eventobject) {
        var self = this;
        this.onCancel();
    }
});
define("PayAPersonModule/frmP2PCountryCodeController", ["PayAPersonModule/userfrmP2PCountryCodeController", "PayAPersonModule/frmP2PCountryCodeControllerActions"], function() {
    var controller = require("PayAPersonModule/userfrmP2PCountryCodeController");
    var controllerActions = ["PayAPersonModule/frmP2PCountryCodeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
