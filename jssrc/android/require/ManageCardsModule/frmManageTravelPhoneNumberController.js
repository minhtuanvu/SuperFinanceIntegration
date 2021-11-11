define("ManageCardsModule/userfrmManageTravelPhoneNumberController", {
    TravelPlanDetailsRequest: {},
    TravelPlanDetailsUpdate: {},
    navOption: "",
    keypadString: '',
    init: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            loggerManager.log("#### start " + currentForm + " : init ####");
            applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        } catch (exc) {
            loggerManager.log("#### in catch " + exc + " ####");
        }
    },
    frmPreShow: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            loggerManager.log("#### start " + currentForm + " : frmPreShow ####");
            this.getFrmData();
            this.setFlowActions();
            this.clearPhoneNumber();
            this.goBackInfo();
            if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
                this.view.flxHeader.isVisible = false;
            } else {
                this.view.flxHeader.isVisible = true;
            }
            //       var countryCode = this.TravelPlanDetailsRequest.phoneCountryCode;
            // 			if (!isNaN(countryCode)) {
            // 				this.view.lblCode.text = countryCode;
            // 			}
            var phone = this.TravelPlanDetailsRequest.contactNumber;
            if (!isNaN(phone)) {
                for (var i = 0; i < phone.length; i++) {
                    this.setKeypadChar(phone[i]);
                }
            }
        } catch (exc) {
            loggerManager.log("#### in catch " + exc + " ####");
        }
    },
    clearPhoneNumber: function() {
        for (var i = 0; i < 13; i++) {
            this.clearKeypadChar();
        }
        this.view.lblPhoneNumber.text = "";
    },
    getFrmData: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            loggerManager.log("#### start " + currentForm + " : getFrmData ####");
            var custInfo = navManager.getCustomInfo("frmManageTravelPhoneNumber");
            this.TravelPlanDetailsRequest = custInfo.data;
            this.navOption = custInfo.option;
            loggerManager.log("entered this form with navigation option as: " + this.navOption);
            this.view.btnContinue.onClick = this.continueOnClick;
            this.view.btnSkip.onClick = this.skipOnClick;
            if (this.navOption === "edit") {
                this.view.btnContinue.text = kony.i18n.getLocalizedString("kony.mb.common.save");
                this.view.btnSkip.text = kony.i18n.getLocalizedString("kony.mb.Profile.DeletePhoneNumber");
            } else if (this.navOption === "add") {
                this.view.btnContinue.text = kony.i18n.getLocalizedString("kony.mb.common.continue");
                this.view.btnSkip.text = kony.i18n.getLocalizedString("kony.mb.common.skip");
            }
        } catch (exc) {
            loggerManager.log("#### in catch " + exc + " ####");
        }
    },
    goBackInfo: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            loggerManager.log("#### goBackInfo #### for form: " + currentForm);
            if (this.navOption === "edit") {
                navManager.setCustomInfo("frmManageTravelDetails", this.TravelPlanDetailsRequest);
                //manageCardsModule.presentationController.commonFunctionForNavigation("frmManageTravelDetails");
            } else {
                navManager.setCustomInfo("frmManageTravelSelectCards", {
                    "option": "add",
                    "data": this.TravelPlanDetailsRequest
                });
                //manageCardsModule.presentationController.commonFunctionForNavigation("frmManageTravelSelectCards");
            }
        } catch (exc) {
            loggerManager.log("#### in catch " + JSON.stringify(exc) + " ####");
        }
    },
    setFlowActions: function() {
        var scope = this;
        this.view.customHeader.flxBack.onClick = this.backOnClick;
        this.view.customHeader.btnRight.onClick = this.cancelOnClick;
    },
    backOnClick: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            loggerManager.log("#### start " + currentForm + " : backOnClick ####");
            navManager.goBack();
        } catch (exc) {
            loggerManager.log("#### in catch " + exc + " ####");
        }
    },
    cancelOnClick: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            loggerManager.log("#### start " + currentForm + " : cancelOnClick ####");
            var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
            if (this.navOption === "edit") {
                navManager.setCustomInfo("frmManageTravelDetails", this.TravelPlanDetailsRequest);
                manageCardsModule.presentationController.commonFunctionForNavigation("frmManageTravelDetails");
            } else {
                manageCardsModule.presentationController.commonFunctionForNavigation("frmManageTravelPlans");
            }
        } catch (exc) {
            loggerManager.log("#### in catch " + exc + " ####");
        }
    },
    validatePhone: function(char) {
        if (this.keypadString.length <= 15 && this.keypadString.length >= 1) {
            return true;
        }
        return false;
    },
    setKeypadChar: function(char) {
        this.keypadString = this.keypadString + char;
        this.view.lblPhoneNumber.text = this.keypadString;
        //if valid
        if (this.validatePhone()) {
            this.enterPostAction();
        } else {
            this.incompleteView();
        }
        this.view.forceLayout();
        return;
    },
    clearKeypadChar: function() {
        if (this.keypadString.length === 0) return;
        this.keypadString = this.keypadString.substr(0, this.keypadString.length - 1);
        this.view.lblPhoneNumber.text = this.keypadString;
        if (this.validatePhone()) {
            this.enterPostAction();
        } else {
            this.incompleteView();
        }
        this.view.forceLayout();
        return;
    },
    incompleteView: function() {
        this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
        this.view.btnContinue.setEnabled(false);
    },
    enterPostAction: function() {
        this.view.btnContinue.setEnabled(true);
        this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
    },
    readPhoneNumberFromForm: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            loggerManager.log("#### start " + currentForm + " : readPhoneNumberFromForm ####");
            var phoneNumber = this.view.lblPhoneNumber.text;
            loggerManager.log("Phone number entered in frmManageTravelPhoneNumber: " + phoneNumber);
            return phoneNumber;
        } catch (exc) {
            loggerManager.log("#### in catch " + exc + " ####");
        }
    },
    skipOnClick: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            loggerManager.log("#### skipOnClick #### for form: " + currentForm);
            var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
            this.TravelPlanDetailsUpdate = JSON.parse(JSON.stringify(this.TravelPlanDetailsRequest));
            this.TravelPlanDetailsUpdate.contactNumber = "None";
            if (this.navOption === "edit") {
                applicationManager.getPresentationUtility().showLoadingScreen();
                loggerManager.log("TravelDetailsObjectRequest: " + JSON.stringify(this.TravelPlanDetailsRequest));
                loggerManager.log("TravelDetailsObjectUpdated: " + JSON.stringify(this.TravelPlanDetailsUpdate));
                manageCardsModule.presentationController.updateTravelPlan(this.TravelPlanDetailsUpdate, this.successCallbackForUpdate, this.failureCallbackForUpdate);
            } else if (this.navOption === "add") {
                navManager.setCustomInfo("frmManageTravelConfirmation", this.TravelPlanDetailsUpdate);
                manageCardsModule.presentationController.commonFunctionForNavigation("frmManageTravelConfirmation");
            }
        } catch (exc) {
            loggerManager.log("#### in catch " + exc + " ####");
        }
    },
    continueOnClick: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            loggerManager.log("#### continueOnClick #### for form: " + currentForm);
            var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
            this.TravelPlanDetailsUpdate = JSON.parse(JSON.stringify(this.TravelPlanDetailsRequest));
            this.TravelPlanDetailsUpdate.contactNumber = this.readPhoneNumberFromForm();
            if (this.navOption === "edit") {
                applicationManager.getPresentationUtility().showLoadingScreen();
                loggerManager.log("TravelDetailsObjectRequest: " + JSON.stringify(this.TravelPlanDetailsRequest));
                loggerManager.log("TravelDetailsObjectUpdated: " + JSON.stringify(this.TravelPlanDetailsUpdate));
                manageCardsModule.presentationController.updateTravelPlan(this.TravelPlanDetailsUpdate, this.successCallbackForUpdate, this.failureCallbackForUpdate);
            } else
            if (this.navOption === "add") {
                navManager.setCustomInfo("frmManageTravelConfirmation", this.TravelPlanDetailsUpdate);
                manageCardsModule.presentationController.commonFunctionForNavigation("frmManageTravelConfirmation");
            }
        } catch (exc) {
            loggerManager.log("#### in catch " + exc + " ####");
        }
    },
    successCallbackForUpdate: function(resp) {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            loggerManager.log("#### start " + currentForm + " : successCallbackForUpdate ####");
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            this.TravelPlanDetailsUpdate.showToast = true;
            this.TravelPlanDetailsUpdate.isSuccess = true;
            this.TravelPlanDetailsUpdate.message = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.cardManage.updateTravelPlanSuccess");
            navManager.setCustomInfo("frmManageTravelDetails", this.TravelPlanDetailsUpdate);
            var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
            manageCardsModule.presentationController.commonFunctionForNavigation("frmManageTravelDetails");
        } catch (exc) {
            loggerManager.log("#### in catch " + exc + " ####");
        }
    },
    failureCallbackForUpdate: function(err) {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            loggerManager.log("#### start " + currentForm + " : failureCallbackForUpdate ####");
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            loggerManager.log("error: came to  failureCallbackForUpdate: " + JSON.stringify(err));
            if (err["isServerUnreachable"]) applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
            this.TravelPlanDetailsRequest.showToast = true;
            this.TravelPlanDetailsRequest.isSuccess = false;
            this.TravelPlanDetailsRequest.message = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.cardManage.updateTravelPlanFailure");
            navManager.setCustomInfo("frmManageTravelDetails", this.TravelPlanDetailsRequest);
            var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
            manageCardsModule.presentationController.commonFunctionForNavigation("frmManageTravelDetails");
        } catch (exc) {
            loggerManager.log("#### in catch " + exc + " ####");
        }
    }
});
define("ManageCardsModule/frmManageTravelPhoneNumberControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_g2868ee68aca4017aab47016e9160162: function AS_Form_g2868ee68aca4017aab47016e9160162(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_ife73d8f12b449a1bd6a869fafae1cec: function AS_Form_ife73d8f12b449a1bd6a869fafae1cec(eventobject) {
        var self = this;
        this.frmPreShow();
    },
    AS_BarButtonItem_hf964360859d42ca8bcfbecdbe58305b: function AS_BarButtonItem_hf964360859d42ca8bcfbecdbe58305b(eventobject) {
        var self = this;
        this.cancelOnClick();
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
define("ManageCardsModule/frmManageTravelPhoneNumberController", ["ManageCardsModule/userfrmManageTravelPhoneNumberController", "ManageCardsModule/frmManageTravelPhoneNumberControllerActions"], function() {
    var controller = require("ManageCardsModule/userfrmManageTravelPhoneNumberController");
    var controllerActions = ["ManageCardsModule/frmManageTravelPhoneNumberControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
