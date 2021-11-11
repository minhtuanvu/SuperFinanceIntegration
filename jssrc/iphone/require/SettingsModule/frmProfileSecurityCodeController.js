define("SettingsModule/userfrmProfileSecurityCodeController", {
    timerCounter: 0,
    onNavigate: function(param) {
        var scope = this;
        if (param === "password") {
            this.view.btnVerifySecCode.onClick = function() {
                var settings = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
                settings.presentationController.getPasswordRulesAndPolicy();
                settings.presentationController.verifyOTP(scope.keypadString, 'frmProfileChangeAndUpdatePassword');
            };
        } else {
            this.view.btnVerifySecCode.onClick = function() {
                var settings = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
                settings.presentationController.getUsernameRulesAndPolicy();
                settings.presentationController.verifyOTP(scope.keypadString, 'frmProfileUsername');
            };
        }
    },
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    keypadString: '',
    showSecurityCode: function() {
        var scope = this;
        this.view.customHeader.lblLocateUs.text = "SECURITY CODE";
        this.keypadString = '';
        this.incompleteSecurityCodeView();
        this.updateInputBullets("flxInputSecurityCode");
        var navManager = applicationManager.getNavigationManager();
        var type = navManager.getCustomInfo("frmProfileSecurityCode");
        this.onNavigate(type);
        this.view.customHeader.flxBack.onClick = function() {
            var navManager = applicationManager.getNavigationManager();
            navManager.goBack();
        };
        this.view.customHeader.btnRight.onClick = function() {
            var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
            settingsMod.presentationController.commonFunctionForNavigation("frmSettings");
        };
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
            this.view.flxMainContainer.top = "56dp";
        } else {
            this.view.flxHeader.isVisible = false;
            this.view.flxMainContainer.top = "0dp";
        }
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
        this.updateInputBullets("flxInputSecurityCode");
    },
    clearKeypadChar: function() {
        if (this.keypadString.length === 1) {
            this.keypadString = '';
            this.updateInputBullets("flxInputSecurityCode");
        }
        if (this.keypadString.length !== 0) {
            this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
            if (this.keypadString.length < 6) {
                this.incompleteSecurityCodeView();
            }
            this.updateInputBullets("flxInputSecurityCode");
        }
    },
    updateInputBullets: function(inputFlx) {
        var widgets = this.view[inputFlx].widgets();
        for (var i = 0; i < this.keypadString.length; i++) {
            widgets[i].skin = "sknLbl424242SSPReg60px";
            widgets[i].text = this.keypadString[i];
        }
        for (var i = this.keypadString.length; i < widgets.length; i++) {
            widgets[i].skin = "lblBlueFocus";
            widgets[i].text = '_';
        }
        this.view.forceLayout();
    },
    enterSecurityCodePostAction: function() {
        this.view.btnVerifySecCode.setEnabled(true);
        this.view.btnVerifySecCode.skin = "sknBtn0095e4RoundedffffffSSP26px";
        this.view.flxMainContainer.forceLayout();
    },
    incompleteSecurityCodeView: function() {
        this.view.btnVerifySecCode.skin = "sknBtna0a0a0SSPReg26px";
        this.view.btnVerifySecCode.setEnabled(false);
        this.view.flxMainContainer.forceLayout();
    },
    bindGenericError: function(msg) {
        applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
    }
});
define("SettingsModule/frmProfileSecurityCodeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_ed2ecb6f943749d4b001cc3646fc572f: function AS_Form_ed2ecb6f943749d4b001cc3646fc572f(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_ba16169522e24e2ab01639f0ae498ea6: function AS_Form_ba16169522e24e2ab01639f0ae498ea6(eventobject) {
        var self = this;
        this.showSecurityCode();
    },
    AS_BarButtonItem_e2e409c6556541b6bd45576225808889: function AS_BarButtonItem_e2e409c6556541b6bd45576225808889(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmSettings");
    },
    AS_Button_dd5d7b04bfb443e1949457b76d30cc23: function AS_Button_dd5d7b04bfb443e1949457b76d30cc23(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_i4b435790a2d41449123253d1717483a: function AS_Button_i4b435790a2d41449123253d1717483a(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_hc2988cc821c4c98b6122cb91a235ada: function AS_Button_hc2988cc821c4c98b6122cb91a235ada(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_g714a4a0d07046a886daa7857118550d: function AS_Button_g714a4a0d07046a886daa7857118550d(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_af024f9d8bb948f6944420d6078fff66: function AS_Button_af024f9d8bb948f6944420d6078fff66(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_g76549894dab4af181c736d6e84cb000: function AS_Button_g76549894dab4af181c736d6e84cb000(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_dadb2f2daec641a899e6809a081878c3: function AS_Button_dadb2f2daec641a899e6809a081878c3(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_d0c31fb603c047f89db7e751f8ea167f: function AS_Button_d0c31fb603c047f89db7e751f8ea167f(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_f77b178b16f3442cb908326b51e6024a: function AS_Button_f77b178b16f3442cb908326b51e6024a(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_dbdb7dfae1d443c394244157b9327069: function AS_Button_dbdb7dfae1d443c394244157b9327069(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_g99f1d1943fb4abb8450bac1f843d825: function AS_Image_g99f1d1943fb4abb8450bac1f843d825(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    }
});
define("SettingsModule/frmProfileSecurityCodeController", ["SettingsModule/userfrmProfileSecurityCodeController", "SettingsModule/frmProfileSecurityCodeControllerActions"], function() {
    var controller = require("SettingsModule/userfrmProfileSecurityCodeController");
    var controllerActions = ["SettingsModule/frmProfileSecurityCodeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
