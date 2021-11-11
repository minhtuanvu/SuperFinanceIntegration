define("CardLessModule/userfrmCardLessSecureCodeController", {
    timerCounter: 0,
    preShow: function() {
        this.fv.submissionView(this.view.btnContinue);
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        this.view.btnContinue.onClick = this.btnContinueOnClick;
        this.view.customHeader.btnRight.onClick = this.btnRightOnClick;
        this.view.txtSecureCode.onTextChange = this.txtsc1OnTextChange;
        this.view.txtReenterCode.onTextChange = this.txtsc2OnTextChange;
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
        } else {
            this.view.flxHeader.isVisible = true;
        }
        this.view.txtSecureCode.maxTextLength = 4;
        this.view.txtReenterCode.maxTextLength = 4;
        this.view.txtSecureCode.text = '';
        this.view.txtReenterCode.text = '';
        var cLMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
        var data = cLMod.presentationController.getTransactionObject();
        var securityCode = data.cashlessSecurityCode;
        if (securityCode !== null && securityCode !== '' && securityCode !== undefined) this.populateDetails(securityCode);
        this.validateFormUI();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    init: function() {
        var FormValidator = require("FormValidatorManager")
        this.fv = new FormValidator(2);
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    flxBackOnClick: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    btnRightOnClick: function() {
        var cardlessModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
        cardlessModule.presentationController.cancelCommon();
    },
    btnContinueOnClick: function() {
        var valid = this.validateSecureCode();
        if (valid) {
            var cLMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
            cLMod.presentationController.setCardlessSecurityCode(this.view.txtSecureCode.text);
        }
    },
    txtsc1OnTextChange: function() {
        this.validateFormUI();
    },
    txtsc2OnTextChange: function() {
        this.validateFormUI();
    },
    populateDetails: function(securityCode) {
        this.view.txtSecureCode.text = securityCode;
        this.view.txtReenterCode.text = securityCode;
    },
    validateFormUI: function() {
        var formValues = [];
        formValues.push(this.view.txtSecureCode.text);
        formValues.push(this.view.txtReenterCode.text);
        this.fv.preshowCheck(formValues);
    },
    bindGenericError: function(errorMsg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    },
    validateSecureCode: function() {
        if (this.view.txtSecureCode.text.length !== 4 || this.view.txtReenterCode.text.length !== 4) {
            this.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.cardLess.entervalidsecurecode"));
            return false;
        } else {
            if (this.view.txtSecureCode.text === this.view.txtReenterCode.text) {
                return true
            } else {
                this.bindGenericError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.cardLess.securecodematch"));
                return false;
            }
        }
    }
});
define("CardLessModule/frmCardLessSecureCodeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_bdec57f1e5f14b4885a3a43996c72cd2: function AS_Form_bdec57f1e5f14b4885a3a43996c72cd2(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_b7e3b3e7f1844525ab260922ed1e8e86: function AS_Form_b7e3b3e7f1844525ab260922ed1e8e86(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_g2dd64bd7a294a28b955b087f4d1bffb: function AS_BarButtonItem_g2dd64bd7a294a28b955b087f4d1bffb(eventobject) {
        var self = this;
        this.btnRightOnClick();
    }
});
define("CardLessModule/frmCardLessSecureCodeController", ["CardLessModule/userfrmCardLessSecureCodeController", "CardLessModule/frmCardLessSecureCodeControllerActions"], function() {
    var controller = require("CardLessModule/userfrmCardLessSecureCodeController");
    var controllerActions = ["CardLessModule/frmCardLessSecureCodeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
