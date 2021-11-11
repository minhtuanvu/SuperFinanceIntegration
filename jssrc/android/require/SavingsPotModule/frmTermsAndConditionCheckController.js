define("SavingsPotModule/userfrmTermsAndConditionCheckController", {
    init: function() {
        var scope = this;
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "CALLBACK", currentForm, scope.mfaDeviceBack);
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.title = kony.i18n.getLocalizedString("kony.mb.TermsAndConditions.Title");
            this.view.flxHeader.isVisible = false;
        }
        this.view.btntermsandconditions.onClick = this.btnOnClick;
        this.view.btnVtu.onClick = this.vtuClick;
        this.view.btnContinue.onClick = this.btnContinueFunction;
        this.view.customHeader.flxBack.onTouchEnd = this.onBack;
        this.view.flxCheckBox1.onClick = this.toggleCheckBox;
        this.view.flxCheckBox2.onClick = this.toggleCheckBoxVTU;
        this.view.customHeader.btnRight.onClick = this.onCancelClick;
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    postShow: function() {
        if (this.view.imgTermsAccepted.src === "a.png" && this.view.imgTerms.src === "a.png") {
            this.view.btnContinue.setEnabled(true);
            this.view.btnContinue.skin = "sknBtn0095e426pxEnabled";
        } else {
            this.view.btnContinue.setEnabled(false);
            this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
        }
    },
    onBack: function() {
        var navigationMan = applicationManager.getNavigationManager();
        navigationMan.goBack();
    },
    btnOnClick: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.navigateTo("frmTermsConditions");
    },
    vtuClick: function() {},
    btnContinueFunction: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.navigateTo("frmGoalFundAck");
    },
    onCancelClick: function() {},
    enrollCancel: function() {
        var navigationMan = applicationManager.getNavigationManager();
        navigationMan.goBack();
    },
    loginCancel: function() {
        var informationPC = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("InformationModule");
        informationPC.presentationController.cancelOnClick();
    },
    toggleCheckBox: function() {
        if (this.view.imgTermsAccepted.src === "tickmarkbox.png") {
            this.view.imgTermsAccepted.src = "a.png";
        } else {
            this.view.imgTermsAccepted.src = "tickmarkbox.png";
        }
        if (this.view.imgTermsAccepted.src === "a.png" && this.view.imgTerms.src === "a.png") {
            this.view.btnContinue.setEnabled(true);
            this.view.btnContinue.skin = "sknBtn0095e426pxEnabled";
        } else {
            this.view.btnContinue.setEnabled(false);
            this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
        }
    },
    toggleCheckBoxVTU: function() {
        if (this.view.imgTerms.src === "tickmarkbox.png") {
            this.view.imgTerms.src = "a.png";
        } else {
            this.view.imgTerms.src = "tickmarkbox.png";
        }
        if (this.view.imgTermsAccepted.src === "a.png" && this.view.imgTerms.src === "a.png") {
            this.view.btnContinue.setEnabled(true);
            this.view.btnContinue.skin = "sknBtn0095e426pxEnabled";
        } else {
            this.view.btnContinue.setEnabled(false);
            this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
        }
    },
    bindGenericError: function(errorMsg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    }
});
define("SavingsPotModule/frmTermsAndConditionCheckControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_jf580050ad88474895a2515ffe6bb0d1: function AS_Form_jf580050ad88474895a2515ffe6bb0d1(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_c0ff2183c35b43e2a65323f773649981: function AS_Form_c0ff2183c35b43e2a65323f773649981(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_d2abbf37735a4cca90636212099bd11d: function AS_Form_d2abbf37735a4cca90636212099bd11d(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_gd001d88be244050bdd4d8d21c70f12b: function AS_BarButtonItem_gd001d88be244050bdd4d8d21c70f12b(eventobject) {
        var self = this;
        this.onCancelClick();
    }
});
define("SavingsPotModule/frmTermsAndConditionCheckController", ["SavingsPotModule/userfrmTermsAndConditionCheckController", "SavingsPotModule/frmTermsAndConditionCheckControllerActions"], function() {
    var controller = require("SavingsPotModule/userfrmTermsAndConditionCheckController");
    var controllerActions = ["SavingsPotModule/frmTermsAndConditionCheckControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
