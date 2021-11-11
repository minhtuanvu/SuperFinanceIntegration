define("EnrollModule/userfrmEnrollSecurityController", {
    keypadString: '',
    timerCounter: 0,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    //PreShow
    showSecurityCode: function() {
        var scope = this;
        this.view.btnVerifySecCode.onClick = function() {
            scope.submitOTP();
        };
        this.view.btnResend.onClick = function() {
            scope.requestResendOTP();
        };
        this.view.customHeader.lblLocateUs.text = "Security Code";
        this.keypadString = '';
        this.incompleteSecurityCodeView();
        this.updateInputBullets("flxInputSecurityCode");
        this.view.customHeader.flxBack.onClick = function() {
            var navManager = applicationManager.getNavigationManager();
            navManager.goBack();
        };
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        scope.clearSecurityCode();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    onClickCancel: function() {
        var  enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
        enrollMod.presentationController.resetEnrollObj();
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
            widgets[i].skin = "sknLbl979797SSP60px";
            // widgets[i].text = this.keypadString[i];
            widgets[i].text = "•";
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
    /*
     * Code to resend OTP
     */
    requestResendOTP: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var enrollModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
        enrollModule.presentationController.resendOTP();
    },
    /*
     * code to submit OTP
     */
    submitOTP: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var otp = this.keypadString;
        if (applicationManager.getPresentationValidationUtility().isValidTextBox(otp)) {
            var enrollModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
            enrollModule.presentationController.validateOTP(otp);
        } else {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            var errorMsg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.enterSecurityCode");
            this.bindGenericError(errorMsg);
        }
    },
    /*
     * Code to show error
     */
    bindGenericError: function(errorMsg) {
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
        scopeObj.clearSecurityCode();
    },
    clearSecurityCode: function() {
        var widgets = this.view["flxInputSecurityCode"].widgets();
        for (var i = 0; i < 6; i++) {
            widgets[i].text = '_';
        }
        this.view.forceLayout();
    }
});
define("EnrollModule/frmEnrollSecurityControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_f87c319a457c429fb7cf6529647c0995: function AS_Button_f87c319a457c429fb7cf6529647c0995(eventobject) {
        var self = this;
        this.onClickCancel();
    },
    AS_Form_fc588503a1774a3f901c11c058345abb: function AS_Form_fc588503a1774a3f901c11c058345abb(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_ffd70944f55440b7a9ad4faf55360679: function AS_Form_ffd70944f55440b7a9ad4faf55360679(eventobject) {
        var self = this;
        this.showSecurityCode();
    },
    AS_BarButtonItem_jddae95be6c74a6b8dfa063a85062889: function AS_BarButtonItem_jddae95be6c74a6b8dfa063a85062889(eventobject) {
        var self = this;
        this.onClickCancel();
    },
    AS_Button_d995428196c94d1992d34e7680ead2d7: function AS_Button_d995428196c94d1992d34e7680ead2d7(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_fc8a1bcdd56b48b0a3ebb51798cd2c44: function AS_Button_fc8a1bcdd56b48b0a3ebb51798cd2c44(eventobject) {
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
define("EnrollModule/frmEnrollSecurityController", ["EnrollModule/userfrmEnrollSecurityController", "EnrollModule/frmEnrollSecurityControllerActions"], function() {
    var controller = require("EnrollModule/userfrmEnrollSecurityController");
    var controllerActions = ["EnrollModule/frmEnrollSecurityControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
