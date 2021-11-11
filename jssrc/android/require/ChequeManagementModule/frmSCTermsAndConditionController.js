define("ChequeManagementModule/userfrmSCTermsAndConditionController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        this.initActions();
    },
    initActions: function() {
        this.view.customHeader.flxBack.onClick = function() {
            var controller = applicationManager.getModulesPresentationController("ChequeManagementModule");
            controller.commonFunctionForgoBack();
        }
        this.view.btntermsandconditions.onClick = this.btnOnClick;
        this.view.btnContinue.onClick = this.btnContinueFunction;
        this.view.flxCheckBox.onClick = this.toggleCheckBox;
        this.view.customHeader.btnRight.onClick = this.onCancelClick;
        /*
        this.view.flxMainContainer.setVisibility(true);
             this.view.flxTermsConditions.setVisibility(false);
           this.view.customHeader.flxBack.setVisibility(true);*/
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    postShow: function() {
        if (scope_ChequePresentationController.isInitial === true) {
            scope_ChequePresentationController.isInitial = false;
            this.view.imgTermsAccepted.src = "tickmarkbox.png";
            this.view.btnContinue.setEnabled(false);
            this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
        } else {
            if (this.view.imgTermsAccepted.src === "a.png") {
                this.view.btnContinue.setEnabled(true);
                this.view.btnContinue.skin = "sknBtn0095e426pxEnabled";
            } else {
                this.view.imgTermsAccepted.src = "tickmarkbox.png";
                this.view.btnContinue.setEnabled(false);
                this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
            }
        }
    },
    btnOnClick: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var chequeManagement = applicationManager.getModulesPresentationController("ChequeManagementModule");
        chequeManagement.getTermsConditionsData();
    },
    updateUIOnSuccess: function(data) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        this.view.flxMainContainer.setVisibility(false);
        this.view.flxTermsConditions.setVisibility(true);
        this.view.customHeader.flxBack.setVisibility(false);
        this.view.isContent = true;
        this.view.rtxTermsConditionsValue.text = data.termsAndConditionsContent;
    },
    btnContinueFunction: function() {
        // applicationManager.getPresentationUtility().showLoadingScreen();
        var onContinue = applicationManager.getModulesPresentationController("ChequeManagementModule");
        onContinue.commonFunctionForNavigation("frmSCReview");
    },
    onCancelClick: function() {
        if (this.view.isContent == true) {
            this.view.isContent = false;
            this.view.flxMainContainer.setVisibility(true);
            this.view.flxTermsConditions.setVisibility(false);
            this.view.customHeader.flxBack.setVisibility(true);
        } else {
            var presentation = applicationManager.getModulesPresentationController("ChequeManagementModule");
            presentation.commonCancel();
        }
    },
    toggleCheckBox: function() {
        if (this.view.imgTermsAccepted.src === "tickmarkbox.png") {
            this.view.imgTermsAccepted.src = "a.png";
            this.view.btnContinue.setEnabled(true);
            this.view.btnContinue.skin = "sknBtn0095e426pxEnabled";
        } else {
            this.view.imgTermsAccepted.src = "tickmarkbox.png";
            this.view.btnContinue.setEnabled(false);
            this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
        }
    }
});
define("ChequeManagementModule/frmSCTermsAndConditionControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_ca5795768039452db3323d7582cdf150: function AS_Form_ca5795768039452db3323d7582cdf150(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_d244a503632243799af150a152c7e54f: function AS_Form_d244a503632243799af150a152c7e54f(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_eb3d6d7d394142f9a4f971298ab31c39: function AS_Form_eb3d6d7d394142f9a4f971298ab31c39(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_d532184fe68940fbb2679da1b3ab04cf: function AS_BarButtonItem_d532184fe68940fbb2679da1b3ab04cf(eventobject) {
        var self = this;
        this.onCancelClick();
    }
});
define("ChequeManagementModule/frmSCTermsAndConditionController", ["ChequeManagementModule/userfrmSCTermsAndConditionController", "ChequeManagementModule/frmSCTermsAndConditionControllerActions"], function() {
    var controller = require("ChequeManagementModule/userfrmSCTermsAndConditionController");
    var controllerActions = ["ChequeManagementModule/frmSCTermsAndConditionControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
