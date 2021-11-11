define("EnrollModule/userfrmEnrollSSnController", {
    keypadString: '',
    timerCounter: 0,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    showEnterSSN: function() {
        this.setActions();
        var scope = this;
        this.keypadString = '';
        this.view.lblSSN.text = "";
        // this.updateInputBullets("flxInputSSN");
        //this.incompleteSSNoView();
        //  this.updateInputBullets("flxInputSSN");
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
            this.view.flxMainContainer.top = "56dp";
        } else {
            this.view.flxHeader.isVisible = false;
            this.view.flxMainContainer.top = "0dp";
        }
        //scope.clearSSN();
        var enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
        var ssn = enrollMod.presentationController.getEnrollSSN();
        if (!kony.sdk.isNullOrUndefined(ssn)) {
            this.keypadString = ssn;
            this.view.lblSSN.text = this.keypadString;
            this.view.btnVerifySSN.setEnabled(true);
            this.view.btnVerifySSN.skin = "sknBtn0095e4RoundedffffffSSP26px";
        } else {
            this.incompleteSSNoView();
        }
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    setActions: function() {
        var scope = this;
        this.view.btnVerifySSN.onClick = function() {
            scope.verifyAndNavigate();
        };
        this.view.customHeader.flxBack.onClick = function() {
            scope.navToDOB();
        };
        this.view.customHeader.btnRight.onClick = function() {
            scope.onClickCancel();
        };
    },
    /**
     * Code to verify the SSN is valid or not
     */
    verifyAndNavigate: function() {
        var scope = this;
        var temp = scope.keypadString;
        var SSN = temp.replace(/-/g, "");
        if (SSN === null || SSN.length === 0) {
            scope.bindViewError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.enterSSN"));
        } else {
            applicationManager.getPresentationUtility().showLoadingScreen();
            var enrollModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
            enrollModule.presentationController.navigateToFrmEnrollDOB(SSN);
        }
    },
    userNotEnrolled: function() {
        var scope = this;
        var temp = scope.keypadString;
        var SSN = temp.replace(/-/g, "");
        var enrollModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
        enrollModule.presentationController.validateEnrollSSN(SSN);
    },
    navToSecurityCheck: function() {
        var  enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
        enrollMod.presentationController.commonFunctionForNavigation("frmEnrollSecurityCheck");
    },
    navToDOB: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    },
    onClickCancel: function() {
        var  enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
        enrollMod.presentationController.resetEnrollObj();
    },
    navToAlreadyEnrolled: function() {
        var  enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
        enrollMod.presentationController.commonFunctionForNavigation("frmAlreadyEnrolled");
    },
    setKeypadChar: function(char) {
        this.keypadString = this.keypadString + char;
        if (this.keypadString.length > 0) {
            this.enterSSNPostAction();
        } else if (this.keypadString.length < 1) {
            this.incompleteSSNoView();
        } else if (this.keypadString.length > 11) {
            this.keypadString = this.keypadString.slice(0, 11);
            return;
        }
        //  this.updateInputBullets("flxInputSSN");
        this.view.lblSSN.text = this.keypadString;
    },
    clearKeypadChar: function() {
        if (this.keypadString.length === 1) {
            this.keypadString = '';
            //  this.updateInputBullets("flxInputSSN");
        }
        if (this.keypadString.length !== 0) {
            if (this.keypadString[this.keypadString.length - 1] == '-') {
                this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
            }
            this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
            if (kony.sdk.isNullOrUndefined(this.keypadString) || this.keypadString === "") {
                this.incompleteSSNoView();
            }
            // this.updateInputBullets("flxInputSSN");
        } else {
            this.incompleteSSNoView();
        }
        this.view.lblSSN.text = this.keypadString;
    },
    updateInputBullets: function(inputFlx) {
        var dummyString = '___-__-____';
        if (this.keypadString.length === 3 || this.keypadString.length === 6) {
            this.keypadString = this.keypadString + '-';
        }
        var widgets = this.view[inputFlx].widgets();
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
        this.view.forceLayout();
    },
    enterSSNPostAction: function() {
        this.view.btnVerifySSN.setEnabled(true);
        this.view.btnVerifySSN.skin = "sknBtn0095e426pxEnabled";
        this.view.flxMainContainer.forceLayout();
    },
    incompleteSSNoView: function() {
        this.view.btnVerifySSN.skin = "sknBtna0a0a0SSPReg26px";
        this.view.flxMainContainer.forceLayout();
        this.view.btnVerifySSN.setEnabled(false);
    },
    /*
     *Code to show error message
     */
    bindViewError: function(msg) {
        var scope = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scope, msg);
    },
    clearSSN: function() {
        var widgets = this.view["flxInputSSN"].widgets();
        for (var i = 0; i < 11; i++) {
            if (i == 3 || i == 6) {
                widgets[i].text = '-';
            } else {
                widgets[i].text = '_';
            }
        }
        this.view.forceLayout();
    }
});
define("EnrollModule/frmEnrollSSnControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_fa79b10bf92440b1a8dc735f05d1d874: function AS_FlexContainer_fa79b10bf92440b1a8dc735f05d1d874(eventobject) {
        var self = this;
        this.showEnterSSN()
    },
    AS_Form_f53b79ecc611413bafb4cee89c5a7044: function AS_Form_f53b79ecc611413bafb4cee89c5a7044(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_d2247d4d100f476395bc7618bb12671d: function AS_Form_d2247d4d100f476395bc7618bb12671d(eventobject) {
        var self = this;
        this.showEnterSSN();
    },
    AS_BarButtonItem_fe4dd8d0140f4c079c37ff020cda04d4: function AS_BarButtonItem_fe4dd8d0140f4c079c37ff020cda04d4(eventobject) {
        var self = this;
        this.onClickCancel();
    },
    AS_Button_d995428196c94d1992d34e7680ead2d7: function AS_Button_d995428196c94d1992d34e7680ead2d7(eventobject) {
        var self = this;
        this.setKeypadChar(8);
    },
    AS_Button_c80317ce605047b082c5464d12f5ff20: function AS_Button_c80317ce605047b082c5464d12f5ff20(eventobject) {
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
define("EnrollModule/frmEnrollSSnController", ["EnrollModule/userfrmEnrollSSnController", "EnrollModule/frmEnrollSSnControllerActions"], function() {
    var controller = require("EnrollModule/userfrmEnrollSSnController");
    var controllerActions = ["EnrollModule/frmEnrollSSnControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
