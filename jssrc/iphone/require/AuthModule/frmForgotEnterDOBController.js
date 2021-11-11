define("AuthModule/userfrmForgotEnterDOBController", {
    keypadString: '',
    timerCounter: 0,
    locale: kony.i18n.getCurrentLocale(),
    //  locale : "en",
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        this.view.flxPopup.setVisibility(false);
        this.locale = kony.i18n.getCurrentLocale();
        this.initActions();
        this.renderTitleBar();
        this.setDummyText();
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
        var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        var forgotObj = authModule.presentationController.getForgotObjectForView();
        var dateOfBirthInLocaleFormat = "";
        var dateOfBirthInBackendFormat = forgotObj.dateOfBirth;
        if (dateOfBirthInBackendFormat) {
            dateOfBirthInLocaleFormat = authModule.presentationController.getLocaleDOB(dateOfBirthInBackendFormat);
        } else {
            dateOfBirthInLocaleFormat = "";
        }
        if (dateOfBirthInLocaleFormat !== null && dateOfBirthInLocaleFormat !== "" && dateOfBirthInLocaleFormat !== undefined) {
            this.view.btnVerify.skin = "sknBtn0095e426pxEnabled";
            this.view.btnVerify.setEnabled(true);
            this.keypadString = dateOfBirthInLocaleFormat;
            this.updateInputBullets();
        } else {
            this.view.btnVerify.skin = "sknBtna0a0a0SSPReg26px";
            this.view.btnVerify.setEnabled(false);
            this.keypadString = '';
            this.updateInputBullets();
        }
    },
    initActions: function() {
        this.view.btnVerify.onClick = this.validateDOB;
        this.view.customHeader.flxBack.onClick = this.goBack;
        this.view.customHeader.btnRight.onClick = this.onCancel;
    },
    //KEYPAD OPS:
    updateInputBullets: function() {
        var scope = this,
            dummyString;
        if (this.locale == "en_US" || this.locale == "en") {
            dummyString = 'MM/DD/YYYY';
        } else if (this.locale == "en_GB" || this.locale === "fr_FR" || this.locale === "es_ES") {
            dummyString = 'DD/MM/YYYY';
        } else if (this.locale == "de_DE") {
            dummyString = 'DD.MM.YYYY';
        } else if (this.locale == "sv_SE") {
            dummyString = 'YYYY-DD-MM';
        } else {
            dummyString = 'MM/DD/YYYY';
        }
        var widgets = this.view["flxInputDOB"].widgets();
        for (var i = 0; i < this.keypadString.length; i++) {
            widgets[i].skin = "sknLbl979797SSP60px";
            widgets[i].text = this.keypadString[i];
        }
        for (var i = this.keypadString.length; i < widgets.length; i++) {
            widgets[i].skin = "sknLble3e3e3SSP60px";
            widgets[i].text = dummyString[i];
        }
        if (this.keypadString.length !== 10) {
            this.view.btnVerify.skin = "sknBtna0a0a0SSPReg26px";
            this.view.btnVerify.setEnabled(false);
        } else {
            this.view.btnVerify.skin = "sknBtn0095e426pxEnabled";
            this.view.btnVerify.setEnabled(true);
        }
        this.view.forceLayout();
    },
    setKeypadChar: function(char) {
        if (this.keypadString.length === 10) return;
        this.keypadString = this.keypadString + char;
        if (this.locale == "en_US" || this.locale == "en" || this.locale == "en_GB" || this.locale === "fr_FR" || this.locale === "es_ES") {
            if (this.keypadString.length === 2 || this.keypadString.length === 5) {
                this.keypadString = this.keypadString + '/';
            }
        } else if (this.locale == "de_DE") {
            if (this.keypadString.length === 2 || this.keypadString.length === 5) {
                this.keypadString = this.keypadString + '.';
            }
        } else if (this.locale == "sv_SE") {
            if (this.keypadString.length === 4 || this.keypadString.length === 7) {
                this.keypadString = this.keypadString + '-';
            }
        }
        this.updateInputBullets();
    },
    clearKeypadChar: function() {
        if (this.keypadString.length === 1) {
            this.keypadString = '';
            this.updateInputBullets();
        }
        if (this.keypadString.length !== 0) {
            if (this.keypadString[this.keypadString.length - 1] === '/' || this.keypadString[this.keypadString.length - 1] === '.' || this.keypadString[this.keypadString.length - 1] === '-') {
                this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
            }
            this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
            this.updateInputBullets();
        }
    },
    setDummyText: function() {
        var configManager = applicationManager.getConfigurationManager();
        var dummy = configManager.getCalendarDateFormat();
        var widgets = this.view["flxInputDOB"].widgets();
        for (var i = 0; i < this.keypadString.length; i++) {
            widgets[i].skin = "sknLbl979797SSP60px";
            widgets[i].text = dummy[i];
        }
    },
    validateDOB: function() {
        var dob = this.keypadString;
        if (dob.indexOf(".") != -1) {
            dob = dob.replace(".", "/").replace(".", "/");
        } else if (dob.indexOf("-") != -1) {
            dob = dob.replace(/-/g, "/");
        }
        if (dob.length < 10) {
            this.bindViewError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.validDOB"));
        } else {
            applicationManager.getPresentationUtility().showLoadingScreen();
            var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
            const navManager = applicationManager.getNavigationManager();
            let previousData = navManager.getCustomInfo("frmForgot");
            previousData.dob = dob;
            navManager.setCustomInfo("frmForgot", previousData);
            authModule.presentationController.verifyDOB(previousData);
        }
    },
    cleardobfields: function() {
        this.setDummyText();
        this.view.btnVerify.skin = "sknBtna0a0a0SSPReg26px";
        this.view.btnVerify.setEnabled(false);
        this.keypadString = '';
        this.updateInputBullets();
    },
    bindViewError: function(msg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
        var navManager = applicationManager.getNavigationManager();
        let previousData = navManager.getCustomInfo("frmForgot");
        previousData.dob = "";
        navManager.setCustomInfo("frmForgot", previousData);
        this.cleardobfields();
    },
    bindVerifyError: function() {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        let previousData = navManager.getCustomInfo("frmForgot");
        previousData.dob = "";
        navManager.setCustomInfo("frmForgot", previousData);
        navManager.navigateTo("frmForgotEnterEmailID");
    },
    goBack: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    },
    onCancel: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.setCustomInfo("frmForgot", undefined);
        navManager.clearStack();
        var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authModule.presentationController.navigateToLogin();
    }
});
define("AuthModule/frmForgotEnterDOBControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_f392eaa783094c9386e76dffed39a3e1: function AS_FlexContainer_f392eaa783094c9386e76dffed39a3e1(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmForgotEnterSSN");
    },
    AS_Form_f400c071ec4e44898268b8d4bb73f98d: function AS_Form_f400c071ec4e44898268b8d4bb73f98d(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_i727c94db9924ff1910384bdcd323404: function AS_Form_i727c94db9924ff1910384bdcd323404(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_e1d3c8738b1e40e685ec7381cf51e65c: function AS_BarButtonItem_e1d3c8738b1e40e685ec7381cf51e65c(eventobject) {
        var self = this;
        return self.goBack.call(this);
    },
    AS_BarButtonItem_f9d5801cb8764b678861b34f27658253: function AS_BarButtonItem_f9d5801cb8764b678861b34f27658253(eventobject) {
        var self = this;
        this.onCancel();
    },
    AS_Button_d995428196c94d1992d34e7680ead2d7: function AS_Button_d995428196c94d1992d34e7680ead2d7(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_jeaf1c244412436086fe88aca660028c: function AS_Button_jeaf1c244412436086fe88aca660028c(eventobject) {
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
define("AuthModule/frmForgotEnterDOBController", ["AuthModule/userfrmForgotEnterDOBController", "AuthModule/frmForgotEnterDOBControllerActions"], function() {
    var controller = require("AuthModule/userfrmForgotEnterDOBController");
    var controllerActions = ["AuthModule/frmForgotEnterDOBControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
