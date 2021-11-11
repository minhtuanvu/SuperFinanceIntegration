define("EnrollModule/userfrmEnrollDOBController", {
    timerCounter: 0,
    keypadString: '',
    locale: kony.i18n.getCurrentLocale(),
    // locale : "sv",
    init: function() {
        var FormValidator = require("FormValidatorManager")
        this.fv = new FormValidator(1);
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        this.view.customHeaderPersonalInfo.lblLocateUs.text = "Date of Birth";
        //this.view.customHeaderPersonalInfo.btnRight.text = "Cancel";
        this.locale = kony.i18n.getCurrentLocale();
        this.setDummyText();
        var dateOfBirthInLocaleFormat = "";
        var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
        dateOfBirthInBackendFormat = enrollMod.presentationController.getEnrollDOB();
        if (dateOfBirthInBackendFormat) {
            dateOfBirthInLocaleFormat = enrollMod.presentationController.getLocaleDOB(dateOfBirthInBackendFormat);
        } else {
            dateOfBirthInLocaleFormat = "";
        }
        if (dateOfBirthInLocaleFormat !== null && dateOfBirthInLocaleFormat !== "" && dateOfBirthInLocaleFormat !== undefined) {
            this.view.btnVerifyDOB.skin = "sknBtn0095e4RoundedffffffSSP26px";
            this.view.btnVerifyDOB.setEnabled(true);
            this.keypadString = dateOfBirthInLocaleFormat;
            this.updateInputBullets();
        } else {
            this.view.btnVerifyDOB.skin = "sknBtnOnBoardingInactive";
            this.view.btnVerifyDOB.setEnabled(false);
            this.keypadString = '';
            this.updateInputBullets();
        }
        this.setFlowActions();
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeaderPersonalInfo.isVisible = true;
        } else {
            this.view.flxHeaderPersonalInfo.isVisible = false;
        }
        this.fv.submissionView(this.view.btnVerifyDOB);
        this.fv.checkDOBLength(this.keypadString);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    setDummyText: function() {
        var configManager = applicationManager.getConfigurationManager();
        var dummy = configManager.getCalendarDateFormat();
        var widgets = this.view["flxDOB"].widgets();
        for (var i = 0; i < this.keypadString.length; i++) {
            widgets[i].skin = "sknLbl979797SSP60px";
            widgets[i].text = dummy[i];
        }
    },
    setFlowActions: function() {
        var scope = this;
        this.view.btnVerifyDOB.onClick = function() {
            scope.validateDOB();
        };
        this.view.customHeaderPersonalInfo.flxBack.onClick = function() {
            scope.navToLastName();
        };
        this.view.customHeaderPersonalInfo.btnRight.onClick = function() {
            scope.onClickCancel();
        };
    },
    navToSSN: function() {
        var  enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
        enrollMod.presentationController.commonFunctionForNavigation("frmEnrollSSn");
    },
    navToLastName: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    },
    onClickCancel: function() {
        var  enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
        enrollMod.presentationController.resetEnrollObj();
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
        this.fv.checkDOBLength(this.keypadString);
        //     if(this.view.lblYearFour.text !== "" && this.view.lblYearFour.text !== "_")
        //       this.view.btnVerifyDOB.skin = "sknBtn0095e4RoundedffffffSSP26px";
        //    else
        //     this.view.btnVerifyDOB.skin = "sknBtnOnBoardingInactive";
    },
    clearKeypadChar: function() {
        if (this.keypadString.length === 1) {
            this.keypadString = '';
            this.updateInputBullets();
        }
        if (this.keypadString.length !== 0) {
            if (this.keypadString[this.keypadString.length - 1] === '/' || this.keypadString[this.keypadString.length - 1] === '.') {
                this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
            }
            this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
            this.updateInputBullets();
        }
        this.fv.checkDOBLength(this.keypadString);
    },
    updateInputBullets: function() {
        var scope = this;
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
        //var dummyString = 'MM/DD/YYYY';
        // if (this.keypadString.length === 3 || this.keypadString.length === 6) {
        //   this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
        // } else if (this.keypadString.length === 2 || this.keypadString.length === 5) {
        //   this.keypadString = this.keypadString + '/';
        // }
        var widgets = this.view["flxDOB"].widgets();
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
    validateAndNavigate: function() {
        var date = this.keypadString;
        if (date.length === 10) {
            var  NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
            NUOMod.presentationController.validateDOBAndNavigate(date);
        } else {
            this.bindViewError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.validDOB"));
        }
    },
    assignDataToForm: function(newUserJSON) {
        var scope = this;
        var dob = (newUserJSON.dateOfBirth && newUserJSON.dateOfBirth !== "" && newUserJSON.dateOfBirth !== null) ? newUserJSON.dateOfBirth : "";
        if (dob !== "") {
            dob = dob.substr(0, 10);
            dob = dob.split("-");
            var dobText = dob[1] + dob[2] + dob[0];
            for (var i = 0; i < dobText.length; i++) {
                this.setKeypadChar(dobText.charAt(i));
            }
        } else {
            this.keypadString = "";
            this.updateInputBullets();
        }
        this.view.forceLayout();
    },
    //Development
    /**
     * validates Date of Birth
     */
    validateDOB: function() {
        var dob = this.keypadString;
        var forUtility = applicationManager.getFormatUtilManager();
        if (dob.indexOf(".") != -1) {
            dob = dob.replace(".", "/").replace(".", "/");
        } else if (dob.indexOf("-") != -1) {
            dob = dob.replace(/-/g, "/");
        }
        if (dob.length < 10) {
            this.bindViewError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.validDOB"));
        } else {
            applicationManager.getPresentationUtility().showLoadingScreen();
            var  enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
            var userDOB = forUtility.getDateForFormatting(dob);
            var dateOfBirth = forUtility.getFormatedDateString(new Date(userDOB), forUtility.getBackendDateFormat());
            var params = {
                "dateOfBirth": dateOfBirth,
                "ssn": enrollMod.presentationController.getEnrollSSN(),
                "userlastname": enrollMod.presentationController.getEnrollLastName(),
            };
            if (enrollMod.presentationController.validateDOB(dob)) enrollMod.presentationController.checkUserEnrolled(params);
        }
    },
    /**
     * Shows Toast Message with red skin
     */
    bindViewError: function(msg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
    },
});
define("EnrollModule/frmEnrollDOBControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_d189778c876d4a0b981fad57744a5d97: function AS_Form_d189778c876d4a0b981fad57744a5d97(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_ec9d31e623d948ab966e3e0305b92f01: function AS_Form_ec9d31e623d948ab966e3e0305b92f01(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_ad085a900163495d9f76bb3437322381: function AS_BarButtonItem_ad085a900163495d9f76bb3437322381(eventobject) {
        var self = this;
        this.onClickCancel();
    },
    AS_Button_cbcd8cb5f6094b5dbecb259edf4c3cf3: function AS_Button_cbcd8cb5f6094b5dbecb259edf4c3cf3(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_d31f089fae084c0ab1e71cad21071364: function AS_Button_d31f089fae084c0ab1e71cad21071364(eventobject) {
        var self = this;
        this.setKeypadChar(5);
    },
    AS_Button_f9e4ff49d89742c8a50dbdc49b155d2c: function AS_Button_f9e4ff49d89742c8a50dbdc49b155d2c(eventobject) {
        var self = this;
        this.setKeypadChar(4);
    },
    AS_Button_d563b058b81c4f52915bbbaf049a9cdb: function AS_Button_d563b058b81c4f52915bbbaf049a9cdb(eventobject) {
        var self = this;
        this.setKeypadChar(9);
    },
    AS_Button_a598bca576d8404181e298595aaa5962: function AS_Button_a598bca576d8404181e298595aaa5962(eventobject) {
        var self = this;
        this.setKeypadChar(1);
    },
    AS_Button_ie26890de1dd4dd1ab1d12a62f9020f9: function AS_Button_ie26890de1dd4dd1ab1d12a62f9020f9(eventobject) {
        var self = this;
        this.setKeypadChar(7);
    },
    AS_Button_je114c4cb2644f038e6ea33062d8f85f: function AS_Button_je114c4cb2644f038e6ea33062d8f85f(eventobject) {
        var self = this;
        this.setKeypadChar(6);
    },
    AS_Button_a60eb12fca4b411a9a9f15c5af27a50f: function AS_Button_a60eb12fca4b411a9a9f15c5af27a50f(eventobject) {
        var self = this;
        this.setKeypadChar(3);
    },
    AS_Button_i04695748cf145aba609814cd5a93125: function AS_Button_i04695748cf145aba609814cd5a93125(eventobject) {
        var self = this;
        this.setKeypadChar(2);
    },
    AS_Button_e65c9e264a2842e2b6478900e2a48489: function AS_Button_e65c9e264a2842e2b6478900e2a48489(eventobject) {
        var self = this;
        this.setKeypadChar(0);
    },
    AS_Image_e2c230c720e141f9a6e067f769344cfb: function AS_Image_e2c230c720e141f9a6e067f769344cfb(eventobject, x, y) {
        var self = this;
        this.clearKeypadChar();
    }
});
define("EnrollModule/frmEnrollDOBController", ["EnrollModule/userfrmEnrollDOBController", "EnrollModule/frmEnrollDOBControllerActions"], function() {
    var controller = require("EnrollModule/userfrmEnrollDOBController");
    var controllerActions = ["EnrollModule/frmEnrollDOBControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
