define("AuthModule/userfrmDevRegPinController", {
    newPin: '',
    reEnteredPin: '',
    timerCounter: 0,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    showPinCode: function() {
        var scope = this;
        this.newPin = '';
        this.reEnteredPin = '';
        this.incompletePinCodeView();
        this.updateInputBullets('flxInputCode');
        this.updateInputBullets('flxInputSecurityCode');
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        this.view.customHeader.flxBack.onClick = function() {
            var navMan = applicationManager.getNavigationManager();
            navMan.goBack();
        };
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    incompletePinCodeView: function() {
        this.view.btnNext.skin = "sknBtna0a0a0SSPReg26px";
        this.view.btnNext.setEnabled(false);
        this.view.flxEnterPin.forceLayout();
        this.view.flxEnterPin.setVisibility(true);
        this.view.flxRenterNewPin.setVisibility(false);
        this.view.forceLayout();
    },
    incompleteReEnterPinCodeView: function() {
        this.view.btnEnable.skin = "sknBtna0a0a0SSPReg26px";
        this.view.btnEnable.setEnabled(false);
        this.view.flxRenterNewPin.forceLayout();
        this.view.forceLayout();
    },
    setKeypadChar: function(char) {
        if (this.view.flxEnterPin.isVisible === true) {
            this.newPin = this.newPin + char;
            if (this.newPin.length === 6) {
                this.enterNewPinPostAction();
            } else if (this.newPin.length < 6) {
                this.incompletePinCodeView();
            } else if (this.newPin.length > 6) {
                this.newPin = this.newPin.slice(0, 6);
                return;
            }
            this.updateInputBullets('flxInputSecurityCode');
        } else {
            this.reEnteredPin = this.reEnteredPin + char;
            if (this.reEnteredPin.length === 6) {
                this.enterReneterNewPinPostAction();
            } else if (this.reEnteredPin.length < 6) {
                this.incompleteReEnterPinCodeView();
            } else if (this.reEnteredPin.length > 6) {
                this.reEnteredPin = this.reEnteredPin.slice(0, 6);
                return;
            }
            this.updateInputBullets('flxInputCode');
        }
    },
    enterNewPinPostAction: function() {
        this.view.btnNext.setEnabled(true);
        this.view.btnNext.skin = "sknBtn0095e4RoundedffffffSSP26px";
        this.view.flxEnterPin.forceLayout();
    },
    enterReneterNewPinPostAction: function() {
        this.view.btnEnable.setEnabled(true);
        this.view.btnEnable.skin = "sknBtn0095e4RoundedffffffSSP26px";
        this.view.flxEnterPin.forceLayout();
    },
    updateInputBullets: function(inputFlx) {
        var widgets = [];
        if (this.view.flxEnterPin.isVisible === true) {
            widgets = this.view[inputFlx].widgets();
            for (var i = 0; i < this.newPin.length; i++) {
                widgets[i].skin = "sknLbl979797SSP60px";
                widgets[i].text = kony.i18n.getLocalizedString("kony.mb.common.dot");
            }
            for (var i = this.newPin.length; i < widgets.length; i++) {
                widgets[i].skin = "lblBlueFocus";
                widgets[i].text = '_';
            }
        } else {
            widgets = this.view[inputFlx].widgets();
            for (var k = 0; k < this.reEnteredPin.length; k++) {
                widgets[k].skin = "sknLbl424242SSPReg60px";
                widgets[k].text = kony.i18n.getLocalizedString("kony.mb.common.dot");
            }
            for (var m = this.reEnteredPin.length; m < widgets.length; m++) {
                widgets[m].skin = "lblBlueFocus";
                widgets[m].text = '_';
            }
        }
        this.view.forceLayout();
    },
    clearKeypadChar: function() {
        if (this.view.flxEnterPin.isVisible === true) {
            if (this.newPin.length === 1) {
                this.newPin = '';
                this.updateInputBullets('flxInputSecurityCode');
            }
            if (this.newPin.length !== 0) {
                this.newPin = this.newPin.substr(0, this.newPin.length - 1);
                if (this.newPin.length < 6) {
                    this.incompletePinCodeView();
                }
                this.updateInputBullets('flxInputSecurityCode');
            }
        } else {
            if (this.reEnteredPin.length === 1) {
                this.reEnteredPin = '';
                this.updateInputBullets('flxInputCode');
            }
            if (this.reEnteredPin.length !== 0) {
                this.reEnteredPin = this.reEnteredPin.substr(0, this.reEnteredPin.length - 1);
                if (this.reEnteredPin.length < 6) {
                    this.incompleteReEnterPinCodeView();
                }
                this.updateInputBullets('flxInputCode');
            }
        }
    },
    btnNextOnClick: function() {
        this.view.flxRenterNewPin.setVisibility(true);
        this.view.flxEnterPin.setVisibility(false);
        this.incompleteReEnterPinCodeView();
        this.view.forceLayout();
    },
    btnEnableOnClick: function() {
        if (this.newPin === this.reEnteredPin) {
            var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
            authMod.presentationController.enablePin(this.newPin);
        } else {
            applicationManager.getDataProcessorUtility().showToastMessageError(this, kony.i18n.getLocalizedString("kony.mb.PIN.and.Reenter.PIN.does.not.match"));
        }
    },
    btnSkipOnClick: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.skipNavigation();
    },
});
define("AuthModule/frmDevRegPinControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_d057008ae99e444f869efc1a4e927b40: function AS_Button_d057008ae99e444f869efc1a4e927b40(eventobject) {
        var self = this;
        return self.btnEnableOnClick.call(this);
    },
    AS_Button_c05e5eed34314d15b4e7c55177e7eb20: function AS_Button_c05e5eed34314d15b4e7c55177e7eb20(eventobject) {
        var self = this;
        this.btnNextOnClick();
    },
    AS_Button_a75c17f385f04325b9fbbf6b8aedf8a3: function AS_Button_a75c17f385f04325b9fbbf6b8aedf8a3(eventobject) {
        var self = this;
        this.btnSkipOnClick();
    },
    AS_Form_d57865ac2e0d4b0bba1d116a65a03227: function AS_Form_d57865ac2e0d4b0bba1d116a65a03227(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_fb730bf3de024b13a6aef94b22930a7f: function AS_Form_fb730bf3de024b13a6aef94b22930a7f(eventobject) {
        var self = this;
        this.showPinCode();
    },
    AS_BarButtonItem_df627969401742f59997c6ebedab7e07: function AS_BarButtonItem_df627969401742f59997c6ebedab7e07(eventobject) {
        var self = this;
        this.btnSkipOnClick();
    },
    AS_Button_d995428196c94d1992d34e7680ead2d7: function AS_Button_d995428196c94d1992d34e7680ead2d7(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_c29becbf3bf2448faec6815fe47620c2: function AS_Button_c29becbf3bf2448faec6815fe47620c2(eventobject) {
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
define("AuthModule/frmDevRegPinController", ["AuthModule/userfrmDevRegPinController", "AuthModule/frmDevRegPinControllerActions"], function() {
    var controller = require("AuthModule/userfrmDevRegPinController");
    var controllerActions = ["AuthModule/frmDevRegPinControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
