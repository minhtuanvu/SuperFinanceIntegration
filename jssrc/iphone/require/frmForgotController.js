define("userfrmForgotController", {
    keypadString: '',
    currentInputModule: 'cvv',
    timerCounter: 0,
    onNavigate: function(obj) {
        if (obj === "forgotUsername") {
            this.showEnterSSN();
        } else if (obj === "forgotPassword") {
            this.showForgotMain();
        }
    },
    preShow: function() {
        this.view.flxPopup.setVisibility(false);
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
    },
    showForgotMain: function() {
        var scope = this;
        this.view.flxForgotMain.isVisible = true;
        this.view.flxEnterInfo.isVisible = false;
        this.view.flxKeypad.isVisible = false;
        this.view.flxCreatePassword.isVisible = false;
        this.view.lblUserName.text = "Hi! John Doe";
        this.view.rtxForgotInfo.text = "Please select the below verification method for security reasons";
        this.view.imgSelectCVV.src = "entercvvicon.png";
        this.view.rtxSelectCVV.text = "Enter <b>CVV Code</b> </br>of your Credit/debit card";
        this.view.flxSelectCVV.onClick = function() {
            scope.showEnterCVV();
        }
        this.view.imgSelectSecurityCode.src = "securitycode.png";
        this.view.rtxSelectSecurityCode.text = "Send <b>SECURITY CODE</b> to registered</br>Mobile Number 79XXXXXXX654";
        this.view.flxSelectSecurityCode.onClick = function() {
            scope.showEnterSecurityCode();
        }
    },
    showForgotOptions: function() {
        var scope = this;
        this.view.flxForgotMain.isVisible = true;
        this.view.flxEnterInfo.isVisible = false;
        this.view.flxKeypad.isVisible = false;
        this.view.flxCreatePassword.isVisible = false;
        this.view.lblUserName.text = "Welcome Back";
        this.view.rtxForgotInfo.text = "We found you with </br>username: <b>john.bailey</b>";
        this.view.imgSelectCVV.src = "loginicon.png";
        this.view.rtxSelectCVV.text = "Login as john.bailey";
        this.view.flxSelectCVV.onClick = function() {
            var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
            authModule.presentationController.commonFunctionForNavigation("frmLogin");
        }
        this.view.imgSelectSecurityCode.src = "resetpassword.png";
        this.view.rtxSelectSecurityCode.text = "Reset your password";
        this.view.flxSelectSecurityCode.onClick = function() {
            scope.showForgotMain();
        }
    },
    showEnterView: function(view, title, subtitle, resendAction, verifyAction, verifyActionText) {
        this.view.flxForgotMain.isVisible = false;
        this.view.flxEnterInfo.isVisible = true;
        this.view.flxKeypad.isVisible = true;
        this.view.flxCreatePassword.isVisible = false;
        this.view.flxEnterInfo.flxInputDOB.isVisible = false;
        this.view.flxEnterInfo.flxInputSecurityCode.isVisible = false;
        this.view.flxEnterInfo.flxInputCVV.isVisible = false;
        this.view.flxEnterInfo.flxInputSSN.isVisible = false;
        this.view.flxEnterInfo[view].isVisible = true;
        if (view === "flxInputSSN" || view === "flxInputDOB") {
            this.view.btnReSend.isVisible = false;
        }
        this.view.lblEnterInfoTitle.text = title;
        this.view.lblEnterInfoSubtitle.text = subtitle;
        this.view.btnReSend.onClick = resendAction;
        this.view.btnVerify.onClick = verifyAction;
        this.view.btnVerify.text = verifyActionText;
    },
    //CVV OPS:
    showEnterCVV: function() {
        var scope = this;
        this.keypadString = '';
        this.currentInputModule = 'cvv';
        this.updateInputBullets();
        this.showEnterView("flxInputCVV", "Enter CVV Number", "Please enter the CVV code of your credit/debit card", function() {
            kony.ui.Alert('Resend action comes here.');
        }, function() {
            scope.showCreatePassword();
        }, "VERIFY");
    },
    //SECURITY CODE OPS:
    showEnterSecurityCode: function() {
        var scope = this;
        this.keypadString = '';
        this.currentInputModule = 'securitycode';
        this.updateInputBullets();
        this.showEnterView("flxInputSecurityCode", "Enter security code", "Please enter the 5 digit security code sent to your phone number 9XXXXXX876", function() {
            kony.ui.Alert("Resend action comes here");
        }, function() {
            scope.showCreatePassword();
        }, "VERIFY");
    },
    //SSN OPS:
    showEnterSSN: function() {
        var scope = this;
        this.keypadString = '';
        this.currentInputModule = 'ssn';
        this.updateInputBullets();
        var ssn = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Forgot.EnterSSNTitle");
        this.showEnterView("flxInputSSN", "Enter your information below to find you", ssn, null, function() {
            scope.showEnterDOB();
        }, "NEXT");
    },
    //DOB OPS:
    showEnterDOB: function() {
        var scope = this;
        this.keypadString = '';
        this.currentInputModule = 'dob';
        this.updateInputBullets();
        this.showEnterView("flxInputDOB", "Enter your information below to find you", "Date of Birth (DOB)", null, function() {
            scope.showForgotOptions();
        }, "DONE");
    },
    //PASSWORD OPS:
    showCreatePassword: function() {
        this.view.flxCreatePassword.isVisible = true;
        this.view.flxForgotMain.isVisible = false;
        this.view.flxEnterInfo.isVisible = false;
        this.view.flxKeypad.isVisible = false;
        this.view.txtNewPassword.text = '';
        this.view.txtReEnterPassword.text = '';
        this.view.imgMaskUnmask.src = "viewicon.png";
        this.view.imgPasswordsMatch.src = "tickmark.png";
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
        if (this.view.txtNewPassword.text === this.view.txtReEnterPassword.text) {
            this.view.imgPasswordsMatch.src = "greentick.png";
            this.view.forceLayout();
        } else {
            this.view.imgPasswordsMatch.src = "tickmark.png";
            this.view.forceLayout();
        }
    },
    updatePasswordAction: function() {
        if (this.view.imgPasswordsMatch.src === "greentick.png") {
            this.showPopupUpdatePasswordSuccessful();
        } else {
            //ERROR SCENARIO:
        }
    },
    //KEYPAD OPS:
    updateInputBullets: function() {
        var scope = this;
        var updateBullets = {
            'cvv': function() {
                scope.updateInputBulletsOf("flxInputCVV");
            },
            'securitycode': function() {
                scope.updateInputBulletsOf("flxInputSecurityCode");
            },
            'ssn': function() {
                scope.updateInputBulletsOf("flxInputSSN");
            },
            'dob': function() {
                scope.updateInputBulletsDOB("flxInputDOB");
            }
        };
        updateBullets[this.currentInputModule]();
    },
    updateInputBulletsDOB: function(inputFlx) {
        var dummyString = 'MM/DD/YYYY';
        if (this.keypadString.length === 3 || this.keypadString.length === 6) {
            this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
        } else if (this.keypadString.length === 2 || this.keypadString.length === 5) {
            this.keypadString = this.keypadString + '/';
        }
        var widgets = this.view[inputFlx].widgets();
        for (var i = 0; i < this.keypadString.length; i++) {
            widgets[i].skin = "sknLbl979797SSP60px";
            widgets[i].text = this.keypadString[i];
        }
        for (var i = this.keypadString.length; i < widgets.length; i++) {
            widgets[i].skin = "sknLble3e3e3SSP60px";
            widgets[i].text = dummyString[i];
        }
        this.view.forceLayout();
    },
    updateInputBulletsOf: function(inputFlx) {
        var widgets = this.view[inputFlx].widgets();
        for (var i = 0; i < this.keypadString.length; i++) {
            widgets[i].skin = "sknLbl979797SSP60px";
        }
        for (var i = this.keypadString.length; i < widgets.length - 1; i++) {
            widgets[i].skin = "sknLble3e3e3SSP60px";
        }
        this.view.forceLayout();
    },
    setKeypadChar: function(char) {
        if (this.keypadString.length === 3 && this.currentInputModule === 'cvv') return;
        if (this.keypadString.length === 5 && this.currentInputModule === 'securitycode') return;
        if (this.keypadString.length === 9 && this.currentInputModule === 'ssn') return;
        if (this.keypadString.length === 10 && this.currentInputModule === 'dob') return;
        this.keypadString = this.keypadString + char;
        this.updateInputBullets();
    },
    clearKeypadChar: function() {
        if (this.keypadString.length === 1) {
            this.keypadString = '';
            this.updateInputBullets();
        }
        if (this.keypadString.length !== 0) {
            if (this.keypadString[this.keypadString.length - 1] === '/') {
                this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
            }
            this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
            this.updateInputBullets();
        }
    },
    showPopupUpdatePasswordSuccessful: function() {
        var scopeObj = this;
        this.timerCounter = parseInt(this.timerCounter) + 1;
        var timerId = "timerPopupPwdSuccess" + this.timerCounter;
        this.view.flxPopup.skin = "sknFlx43ce6e";
        this.view.customPopup.imgPopup.src = "confirmation.png";
        this.view.customPopup.lblPopup.text = kony.i18n.getLocalizedString("kony.mb.login.pwdUpdateMsg");
        this.view.flxPopup.setVisibility(true);
        kony.timer.schedule(timerId, function() {
            scopeObj.view.flxPopup.setVisibility(false);
            var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
            authModule.presentationController.commonFunctionForNavigation("frmLogin");
        }, 1.5, false);
    },
});
define("frmForgotControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_aab545f81a1c4f47affe37a4cdc55bee: function AS_Button_aab545f81a1c4f47affe37a4cdc55bee(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_e1f1c41fe7d44867a920c07a950f3919: function AS_Button_e1f1c41fe7d44867a920c07a950f3919(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_c923dc19a9774630809dbf1eac84ef77: function AS_Button_c923dc19a9774630809dbf1eac84ef77(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_iefb8edcfed943aca43b48792841ff2f: function AS_Button_iefb8edcfed943aca43b48792841ff2f(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_a12285c762cf412d9f6102a988611213: function AS_Button_a12285c762cf412d9f6102a988611213(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_d8b909fa79c44a4091cf79223208f2ec: function AS_Button_d8b909fa79c44a4091cf79223208f2ec(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_a1023abf0b4c4cb0a3ef0dc077d5beac: function AS_Button_a1023abf0b4c4cb0a3ef0dc077d5beac(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_f1d09ef398934f4bbb8845ad69b59fce: function AS_Button_f1d09ef398934f4bbb8845ad69b59fce(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_j1452105f35d4dd4bcfe9c63743aedf9: function AS_Button_j1452105f35d4dd4bcfe9c63743aedf9(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_c1d6d18914744401b3b59984194f25f6: function AS_Button_c1d6d18914744401b3b59984194f25f6(eventobject) {
        var self = this;
        this.updatePasswordAction();
    },
    AS_Button_c5e7351752814e16b831be1813834fb1: function AS_Button_c5e7351752814e16b831be1813834fb1(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_FlexContainer_c517a825eadb4d838da5c367f3a93ee1: function AS_FlexContainer_c517a825eadb4d838da5c367f3a93ee1(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    AS_Form_d5fb87ad5e294c5bbdf2cf31bc616005: function AS_Form_d5fb87ad5e294c5bbdf2cf31bc616005(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_Image_c27ce138468443439c3ff0be229242d0: function AS_Image_c27ce138468443439c3ff0be229242d0(eventobject, x, y) {
        var self = this;
        this.maskUnmaskPassword();
    },
    AS_BarButtonItem_j8bf0d4c0a9c411ab014bb76eef85901: function AS_BarButtonItem_j8bf0d4c0a9c411ab014bb76eef85901(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    AS_TextField_cd739bc8adc341698cd73d7ffa2d3773: function AS_TextField_cd739bc8adc341698cd73d7ffa2d3773(eventobject, changedtext) {
        var self = this;
        this.matchPasswords();
    }
});
define("frmForgotController", ["userfrmForgotController", "frmForgotControllerActions"], function() {
    var controller = require("userfrmForgotController");
    var controllerActions = ["frmForgotControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
