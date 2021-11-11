define("TransferModuleEurope/userfrmBenEmailAddressEuropeController", {
    //Type your controller code here 
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    initActions: function() {
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        this.view.customHeader.btnRight.onClick = this.onClickCancel;
        this.view.btnVerify.onClick = this.onSaveEmailAddress;
    },
    preshow: function() {
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var benificiaryData = transferModulePresentationController.getBenificiaryData();
        var beneficiaryemail = benificiaryData.email;
        if (beneficiaryemail) {
            this.view.txtEmailAddress.text = beneficiaryemail;
        } else {
            this.view.txtEmailAddress.text = "";
            this.disableContinueButton();
        }
        this.view.txtEmailAddress.onTextChange = this.updateUI;
        this.renderTitleBar();
        this.initActions()
        var navManager = ap;
        plicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    onClickCancel: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transferModPresentationController.commonFunctionForNavigation("frmBenVerifyDetailsEurope");
    },
    flxBackOnClick: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    onSaveEmailAddress: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var data = {};
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        if (this.view.txtEmailAddress.text !== "") {
            data = {
                "emailAddress": this.view.txtEmailAddress.text
            };
        } else {
            data = {
                "emailAddress": ""
            };
        }
        transferModulePresentationController.navigateToVerifyDetailsFromEmailAddress(data);
    },
    updateUI: function() {
        var emailAddress = this.view.txtEmailAddress.text;
        if (emailAddress.length > 0) {
            this.enableContinueButton();
        } else {
            this.disableContinueButton();
            this.onSaveEmailAddress();
        }
        this.view.forceLayout();
    },
    disableContinueButton: function() {
        this.view.btnVerify.skin = "sknBtnE2E9F0Rounded";
        this.view.btnVerify.setEnabled(false);
    },
    enableContinueButton: function() {
        this.view.btnVerify.skin = "sknBtn0095e4RoundedffffffSSP26px";
        this.view.btnVerify.setEnabled(true);
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
    enableVerifyButton: function() {
        this.view.btnVerify.setEnabled(true);
        this.view.btnVerify.skin = "sknBtn0095e4RoundedffffffSSP26px";
    }
});
define("TransferModuleEurope/frmBenEmailAddressEuropeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_c82f35b0c8c4420db0cbabe2609d879c: function AS_Form_c82f35b0c8c4420db0cbabe2609d879c(eventobject) {
        var self = this;
        return self.init.call(this);
    },
    AS_Form_ef8a71013117419e900bdc5c608a488b: function AS_Form_ef8a71013117419e900bdc5c608a488b(eventobject) {
        var self = this;
        return self.preshow.call(this);
    },
    AS_BarButtonItem_d3f1e5a9968548e8b4c8afb1fac89823: function AS_BarButtonItem_d3f1e5a9968548e8b4c8afb1fac89823(eventobject) {
        var self = this;
        this.flxBackOnClick();
    },
    AS_BarButtonItem_jffd2c2a102d4a0c982fbf5bdd00eff5: function AS_BarButtonItem_jffd2c2a102d4a0c982fbf5bdd00eff5(eventobject) {
        var self = this;
        this.onClickCancel();
    }
});
define("TransferModuleEurope/frmBenEmailAddressEuropeController", ["TransferModuleEurope/userfrmBenEmailAddressEuropeController", "TransferModuleEurope/frmBenEmailAddressEuropeControllerActions"], function() {
    var controller = require("TransferModuleEurope/userfrmBenEmailAddressEuropeController");
    var controllerActions = ["TransferModuleEurope/frmBenEmailAddressEuropeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
