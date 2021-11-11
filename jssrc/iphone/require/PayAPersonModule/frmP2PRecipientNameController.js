define("PayAPersonModule/userfrmP2PRecipientNameController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    frmPreShow: function() {
        this.view.txtRecipientName.onTextChange = this.btnContinueHandler;
        this.view.txtLastName.onTextChange = this.btnContinueHandler;
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        this.view.customHeader.btnRight.onClick = this.flxBackOnClick;
        this.view.btnContinue.onClick = this.btnContinueOnClick;
        this.view.customHeader.btnRight.onClick = this.onClickCancel;
        this.renderTitleBar();
        this.setDataToForm();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    btnRightOnClick: function() {},
    renderTitleBar: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === 'iPhone') {
            this.view.flxHeader.setVisibility(false);
        }
    },
    btnContinueHandler: function() {
        if ((this.view.txtRecipientName.text !== '') && (this.view.txtRecipientName.text !== null)) {
            this.enableContinueButton();
        } else {
            this.disableContinueButton();
        }
    },
    flxBackOnClick: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    btnContinueOnClick: function() {
        if (this.view.txtRecipientName.text) {
            var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
            var navMan = applicationManager.getNavigationManager();
            navMan.setEntryPoint("contracts", navMan.getCurrentForm());
            // p2pMod.presentationController.navigateToP2PVerifyDetails("frmContracts",this.view.txtRecipientName.text);
            p2pMod.presentationController.navToContractDetails(this.view.txtRecipientName.text);
        }
    },
    enableContinueButton: function() {
        this.view.btnContinue.setEnabled(true);
        this.view.btnContinue.skin = "sknBtn0095e426pxEnabled";
    },
    disableContinueButton: function() {
        this.view.btnContinue.setEnabled(false);
        this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
    },
    setDataToForm: function() {
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        var recipientData = payeeMod.presentationController.getP2PPayeeDetails();
        var specialCharactersSet = "~#^|$%&*!@()_-+=}{][/|?,.><`':;\"\\";
        this.view.txtRecipientName.restrictCharactersSet = specialCharactersSet.replace("!@#&*_'-.,", '');
        this.view.txtRecipientName.maxTextLength = 50;
        if (recipientData && recipientData.name) {
            this.view.txtRecipientName.text = recipientData.name;
            this.enableContinueButton();
        } else {
            this.view.txtRecipientName.text = "";
            this.disableContinueButton();
        }
    },
    onClickCancel: function() {
        var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        p2pMod.presentationController.navToFormBasedOnEntryPoint("createP2PPayee");
    },
    bindGenericError: function(errorMsg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    }
});
define("PayAPersonModule/frmP2PRecipientNameControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_fc0133c1430849df9e8aaa29e735cdac: function AS_Form_fc0133c1430849df9e8aaa29e735cdac(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_f504300835ea404aa461dfcff7379eef: function AS_Form_f504300835ea404aa461dfcff7379eef(eventobject) {
        var self = this;
        this.frmPreShow();
    },
    AS_BarButtonItem_cd12cc77a3d84d0695c0470e27795293: function AS_BarButtonItem_cd12cc77a3d84d0695c0470e27795293(eventobject) {
        var self = this;
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    AS_BarButtonItem_e8b7c9bd8d294d3b8a95a8d49bcd628e: function AS_BarButtonItem_e8b7c9bd8d294d3b8a95a8d49bcd628e(eventobject) {
        var self = this;
        this.onClickCancel();
    }
});
define("PayAPersonModule/frmP2PRecipientNameController", ["PayAPersonModule/userfrmP2PRecipientNameController", "PayAPersonModule/frmP2PRecipientNameControllerActions"], function() {
    var controller = require("PayAPersonModule/userfrmP2PRecipientNameController");
    var controllerActions = ["PayAPersonModule/frmP2PRecipientNameControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
