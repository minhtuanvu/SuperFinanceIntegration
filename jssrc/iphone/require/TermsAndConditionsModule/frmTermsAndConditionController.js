define("TermsAndConditionsModule/userfrmTermsAndConditionController", {
    init: function() {
        var scope = this;
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "CALLBACK", currentForm, scope.mfaDeviceBack);
    },
    mfaDeviceBack: function() {
        var navigationMan = applicationManager.getNavigationManager();
        var formdata = navigationMan.getCustomInfo("frmTermsAndCondition");
        switch (formdata.flowType) {
            case "Enroll":
                navigationMan.goBack();
                break;
            case "LockCard":
                navigationMan.goBack();
                break;
            case "CancelCard":
                navigationMan.goBack();
                break;
            case "DisableEBanking":
                navigationMan.goBack();
                break;
        }
    },
    preShow: function() {
        this.populateData();
        var navigationMan = applicationManager.getNavigationManager();
        var formdata = navigationMan.getCustomInfo("frmTermsAndCondition");
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            if (formdata.flowType === "DisableEBanking") {
                this.view.customHeader.flxBack.onClick = function() {
                    navigationMan.goBack();
                };
                this.view.customHeader.flxBack.setVisibility(true);
            } else this.view.customHeader.flxBack.setVisibility(false);
            this.view.flxHeader.isVisible = true;
        } else {
            if (formdata.flowType === "DisableEBanking") {
                this.view.setHidesBackButton({
                    "hidesBackButton": false,
                    "animated": false
                });
                this.view.title = kony.i18n.getLocalizedString("kony.mb.settings.termsAndConditions");
            } else {
                this.view.setHidesBackButton({
                    "hidesBackButton": true,
                    "animated": false
                });
                this.view.title = kony.i18n.getLocalizedString("kony.mb.TermsAndConditions.Title");
            }
            this.view.flxHeader.isVisible = false;
        }
        if (formdata.flowType === "DisableEBanking") {
            this.view.customHeader.lblLocateUs.text = kony.i18n.getLocalizedString("kony.mb.settings.termsAndConditions");
            var btntxt = kony.i18n.getLocalizedString("kony.mb.settings.termsAndConditions");
            this.view.lblRichTxt.text = kony.i18n.getLocalizedString("i18n.savingspot.Iaccept") + "  " + "<a href=''>" + btntxt + "</a>";
        } else {
            this.view.customHeader.lblLocateUs.text = kony.i18n.getLocalizedString("kony.mb.TermsAndConditions.Title");
            var btntxt = kony.i18n.getLocalizedString("kony.mb.TermsAndConditions.Title");
            this.view.lblRichTxt.text = kony.i18n.getLocalizedString("kony.mb.externalAccounts.termnsConditionsChk") + "  " + "<a href=''>" + btntxt + "</a>";
        }
        this.view.lblRichTxt.linkSkin = "sknBtn0095e428px";
        this.view.lblRichTxt.onClick = this.btnOnClick;
        this.view.imgTermsAccepted.src = "tickmarkbox.png";
        this.view.btnContinue.setEnabled(false);
        this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
        this.view.btntermsandconditions.onClick = this.btnOnClick;
        this.view.btnContinue.onClick = this.btnContinueFunction;
        this.view.flxCheckBox.onClick = this.toggleCheckBox;
        this.view.customHeader.btnRight.onClick = this.onCancelClick;
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    postShow: function() {
        this.view.brsrTerms.enableParentScrollingWhenReachToBoundaries = false;
    },
    populateData: function() {
        var navigationMan = applicationManager.getNavigationManager();
        var formdata = navigationMan.getCustomInfo("frmTermsAndCondition");
        //  this.view.rtxTermsConditionsValue.text=formdata.content;
        this.view.brsrTerms.htmlString = formdata.content;
        //  
        //  this.view.brsrTerms.htmlString=formdata.content;
        switch (formdata.flowType) {
            case "Login":
                this.view.flxMainContainer.setVisibility(true);
                this.view.flxTermsConditions.setVisibility(false);
                break;
            case "Enroll":
                this.view.flxMainContainer.setVisibility(false);
                this.view.flxTermsConditions.setVisibility(true);
                break;
            case "LockCard":
                this.view.flxMainContainer.setVisibility(true);
                this.view.flxTermsConditions.setVisibility(false);
                break;
            case "CancelCard":
                this.view.flxMainContainer.setVisibility(true);
                this.view.flxTermsConditions.setVisibility(false);
                break;
            case "DisableEBanking":
                this.view.flxMainContainer.setVisibility(true);
                this.view.flxTermsConditions.setVisibility(false);
                break;
        }
    },
    btnOnClick: function() {
        var formdata = applicationManager.getNavigationManager().getCustomInfo("frmTermsAndCondition");
        if (formdata.contentTypeID == "URL") {
            kony.application.openURL(formdata.content);
        } else {
            this.view.customHeader.flxBack.setVisibility(false);
            this.view.flxMainContainer.setVisibility(false);
            this.view.flxTermsConditions.setVisibility(true);
        }
    },
    btnContinueFunction: function() {
        let self = this;
        let formdata = applicationManager.getNavigationManager().getCustomInfo("frmTermsAndCondition");
        applicationManager.getPresentationUtility().showLoadingScreen();
        if (formdata && formdata.flowType === "DisableEBanking") {
            self.showSCANotification();
        } else {
            var informationPC = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("InformationModule");
            informationPC.presentationController.acceptTermsAndCondition();
        }
    },
    onCancelClick: function() {
        var navigationMan = applicationManager.getNavigationManager();
        var formdata = navigationMan.getCustomInfo("frmTermsAndCondition");
        switch (formdata.flowType) {
            case "Login":
                this.loginCancel();
                break;
            case "Enroll":
                this.enrollCancel();
                break;
            case "LockCard":
                this.loginCancel();
                break;
            case "CancelCard":
                this.loginCancel();
                break;
            case "DisableEBanking":
                this.loginCancel();
                break;
        }
    },
    enrollCancel: function() {
        var navigationMan = applicationManager.getNavigationManager();
        navigationMan.goBack();
    },
    loginCancel: function() {
        if (this.view.flxTermsConditions.isVisible === true) {
            //  this.view.imgTermsAccepted.src="tickmarkbox.png";
            // this.view.btnContinue.setEnabled(false);
            //this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
            var navigationMan = applicationManager.getNavigationManager();
            var formdata = navigationMan.getCustomInfo("frmTermsAndCondition");
            if (formdata.flowType === "DisableEBanking") this.view.customHeader.flxBack.setVisibility(true);
            this.view.flxMainContainer.setVisibility(true);
            this.view.flxTermsConditions.setVisibility(false);
        } else {
            var informationPC = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("InformationModule");
            informationPC.presentationController.cancelOnClick();
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
    },
    bindGenericError: function(errorMsg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    },
    showSCANotification: function() {
        let self = this;
        self.view.scanotification.onSuccessCallback = function() {
            var informationPC = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("InformationModule");
            informationPC.presentationController.acceptTermsAndCondition();
        };
        self.view.scanotification.onFailureCallback = function(errmsg) {
            kony.print(errmsg);
        };
        self.view.scanotification.showOKRAAuthentication(formdata.flowType);
    },
});
define("TermsAndConditionsModule/frmTermsAndConditionControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_ab00c83d414347169f756bd54f97664c: function AS_Form_ab00c83d414347169f756bd54f97664c(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_f01e605ce71d4bfda7ecc89fa63afe7a: function AS_Form_f01e605ce71d4bfda7ecc89fa63afe7a(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_d629fd31d91c4674af5280070650659e: function AS_Form_d629fd31d91c4674af5280070650659e(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_df9cd7e0ceff428595de18f425fc1df1: function AS_BarButtonItem_df9cd7e0ceff428595de18f425fc1df1(eventobject) {
        var self = this;
        this.onCancelClick();
    },
});
define("TermsAndConditionsModule/frmTermsAndConditionController", ["TermsAndConditionsModule/userfrmTermsAndConditionController", "TermsAndConditionsModule/frmTermsAndConditionControllerActions"], function() {
    var controller = require("TermsAndConditionsModule/userfrmTermsAndConditionController");
    var controllerActions = ["TermsAndConditionsModule/frmTermsAndConditionControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
