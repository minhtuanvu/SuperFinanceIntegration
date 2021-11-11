define("AuthModule/userfrmDevRegSecCodeController", {
    keypadString: '',
    timerCounter: 0,
    showSecurityCode: function() {
        var scope = this;
        this.keypadString = '';
        this.incompleteSecurityCodeView();
        this.updateInputBullets('flxInputSecurityCode');
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        this.setKeyPadActions();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    onHide: function() {
        this.view.btnResend.setEnabled(true);
        this.cancelTimer();
    },
    incompleteSecurityCodeView: function() {
        this.view.btnVerifySecCode.skin = "sknBtna0a0a0SSPReg26px";
        this.view.btnVerifySecCode.setEnabled(false);
        this.view.flxMainContainer.forceLayout();
    },
    setKeypadChar: function(char) {
        this.keypadString = this.keypadString + char;
        if (this.keypadString.length === 6) {
            this.enterSecurityCodePostAction();
        } else if (this.keypadString.length < 6) {
            this.incompleteSecurityCodeView();
        } else if (this.keypadString.length > 6) {
            this.keypadString = this.keypadString.slice(0, 6);
            return;
        }
        this.updateInputBullets('flxInputSecurityCode');
    },
    enterSecurityCodePostAction: function() {
        this.view.btnVerifySecCode.setEnabled(true);
        this.view.btnVerifySecCode.skin = "sknBtn0095e4RoundedffffffSSP26px";
        this.view.flxMainContainer.forceLayout();
    },
    updateInputBullets: function(inputFlx) {
        var widgets = this.view[inputFlx].widgets();
        for (var i = 0; i < this.keypadString.length; i++) {
            widgets[i].skin = "sknLbl979797SSP60px";
            widgets[i].text = "•"; //this.keypadString[i];
        }
        for (var i = this.keypadString.length; i < widgets.length; i++) {
            widgets[i].skin = "lblBlueFocus";
            widgets[i].text = '_';
        }
        this.view.forceLayout();
    },
    clearKeypadChar: function() {
        if (this.keypadString.length === 1) {
            this.keypadString = '';
            this.updateInputBullets('flxInputSecurityCode');
        }
        if (this.keypadString.length !== 0) {
            this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
            if (this.keypadString.length < 6) {
                this.incompleteSecurityCodeView();
            }
            this.updateInputBullets('flxInputSecurityCode');
        }
    },
    btnVerifyOnClick: function() {
        this.view.btnResend.setEnabled(true);
        this.cancelTimer();
        var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMode.presentationController.updateDeviceRegistration();
    },
    btnResendOnClick: function() {
        this.view.btnResend.setEnabled(false);
        kony.timer.schedule("resendTimer", this.atTimerEnd, 30, false);
    },
    atTimerEnd: function() {
        this.view.btnResend.setEnabled(true);
        this.cancelTimer();
    },
    cancelTimer: function() {
        try {
            kony.timer.cancel("resendTimer");
        } catch (err) {
            kony.print(err);
        }
    },
    flxCheckBoxOnClick: function() {
        if (this.view.imgCheckBox.src === "remembermetick.png") {
            this.view.imgCheckBox.src = "remeberme.png";
        } else {
            this.view.imgCheckBox.src = "remembermetick.png";
        }
        this.view.flxCheckBox.forceLayout();
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
    },
    onCancelClick: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMode.presentationController.defaultLoginToAccounts();
        authMode.presentationController.setDeviceRegisterflag(false);
    }
});
define("AuthModule/frmDevRegSecCodeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_a22659baa66540dc8a1a1a6554fa9283: function AS_Button_a22659baa66540dc8a1a1a6554fa9283(eventobject) {
        var self = this;
        return self.btnResendOnClick.call(this);
    },
    AS_Button_bc5d5f43b2bd42a09468a7bcd8aa3aab: function AS_Button_bc5d5f43b2bd42a09468a7bcd8aa3aab(eventobject) {
        var self = this;
        return self.btnVerifyOnClick.call(this);
    },
    AS_Button_d18a4b2c7e9d46d1907cc356015b1a67: function AS_Button_d18a4b2c7e9d46d1907cc356015b1a67(eventobject) {
        var self = this;
        this.onCancelClick();
    },
    AS_FlexContainer_gf9aa11d13f74fc5a58251da770527d0: function AS_FlexContainer_gf9aa11d13f74fc5a58251da770527d0(eventobject) {
        var self = this;
        return self.flxCheckBoxOnClick.call(this);
    },
    AS_Form_i124194315294873952f7f093677bbc2: function AS_Form_i124194315294873952f7f093677bbc2(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_a6ab5e0036ee46beb04cff67c1db9e69: function AS_Form_a6ab5e0036ee46beb04cff67c1db9e69(eventobject) {
        var self = this;
        this.onHide();
    },
    AS_Form_g2663c104ed24ff4b82082382db6395d: function AS_Form_g2663c104ed24ff4b82082382db6395d(eventobject) {
        var self = this;
        this.showSecurityCode();
    },
    AS_BarButtonItem_a1513db1dafc4e5a86fe742987cca779: function AS_BarButtonItem_a1513db1dafc4e5a86fe742987cca779(eventobject) {
        var self = this;
        this.onCancelClick();
    },
    AS_Button_d995428196c94d1992d34e7680ead2d7: function AS_Button_d995428196c94d1992d34e7680ead2d7(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_b3daf730cd9c49bfb4641b44cf12a029: function AS_Button_b3daf730cd9c49bfb4641b44cf12a029(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_f1671d383324483c86104e017fa68a98: function AS_Button_f1671d383324483c86104e017fa68a98(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_ee1f4c4192904e4f934349eb25ff3430: function AS_Button_ee1f4c4192904e4f934349eb25ff3430(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_i7f9f5abb3664e5fb694af8feb4212a6: function AS_Button_i7f9f5abb3664e5fb694af8feb4212a6(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_ie3bcc135a944dd8baa8de8a0961937b: function AS_Button_ie3bcc135a944dd8baa8de8a0961937b(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_a0158c26af96430caa4ed3bfd9e600dd: function AS_Button_a0158c26af96430caa4ed3bfd9e600dd(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_i93a76d23b8647f791038f00a879241a: function AS_Button_i93a76d23b8647f791038f00a879241a(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_h3ea77cf91fc4f4d9ff45deb3685f828: function AS_Button_h3ea77cf91fc4f4d9ff45deb3685f828(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_jd2f9ffdd6924b03bb0175998407e8d3: function AS_Button_jd2f9ffdd6924b03bb0175998407e8d3(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_b8275a188bb543bda67ceee35f4a8969: function AS_Image_b8275a188bb543bda67ceee35f4a8969(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    }
});
define("AuthModule/frmDevRegSecCodeController", ["AuthModule/userfrmDevRegSecCodeController", "AuthModule/frmDevRegSecCodeControllerActions"], function() {
    var controller = require("AuthModule/userfrmDevRegSecCodeController");
    var controllerActions = ["AuthModule/frmDevRegSecCodeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
