define("CardLessModule/userfrmCardLessCountryCodeController", {
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
define("CardLessModule/frmCardLessCountryCodeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_cdb8887bf8344e46b7af2b803d4873d1: function AS_Button_cdb8887bf8344e46b7af2b803d4873d1(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    AS_FlexContainer_f49789b9788e41b59043bb4fce5e5b0a: function AS_FlexContainer_f49789b9788e41b59043bb4fce5e5b0a(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    AS_Form_f31ff03bf28147dc83ecd7528d09bfce: function AS_Form_f31ff03bf28147dc83ecd7528d09bfce(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_jdaa42e26b4b4d1b97909812a8a96c5f: function AS_Form_jdaa42e26b4b4d1b97909812a8a96c5f(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_g2fb45a18f944a30bc00d6dc07ed64be: function AS_BarButtonItem_g2fb45a18f944a30bc00d6dc07ed64be(eventobject) {
        var self = this;
        this.onCancel();
    }
});
define("CardLessModule/frmCardLessCountryCodeController", ["CardLessModule/userfrmCardLessCountryCodeController", "CardLessModule/frmCardLessCountryCodeControllerActions"], function() {
    var controller = require("CardLessModule/userfrmCardLessCountryCodeController");
    var controllerActions = ["CardLessModule/frmCardLessCountryCodeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
