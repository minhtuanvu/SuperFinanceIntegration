define("PayAPersonModule/userfrmP2PRecEmailController", {
    //Type your controller code here
    timerCounter: 0,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    frmPreShow: function() {
        this.view.txtEmailId.setFocus(true);
        this.view.txtEmailId.onTextChange = this.txtEmailIdOnTextChange;
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        this.disableContinueButton();
        this.view.customHeader.btnRight.onClick = this.onClickCancel;
        this.view.btnPickFromContacts.onClick = this.btnPickFromContactsOnClick;
        this.view.btnContinue.onClick = this.btnContinueOnClick;
        this.renderTitleBar();
        this.setDataToForm();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    renderTitleBar: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === 'iPhone') {
            this.view.flxHeader.setVisibility(false);
        }
    },
    flxBackOnClick: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    },
    txtEmailIdOnTextChange: function() {
        if ((this.view.txtEmailId.text !== '') && (this.view.txtEmailId.text !== undefined) && kony.string.isValidEmail(this.view.txtEmailId.text)) {
            this.enableContinueButton();
        } else {
            this.disableContinueButton();
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
    btnPickFromContactsOnClick: function() {
        var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        p2pMod.presentationController.navigateToContacts("email");
    },
    btnContinueOnClick: function() {
        if (this.view.txtEmailId.text) {
            var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
            p2pMod.presentationController.navigateToP2PRecipientNamefromEmail("frmP2PRecipientName", this.view.txtEmailId.text);
        }
    },
    onClickCancel: function() {
        var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        p2pMod.presentationController.navToFormBasedOnEntryPoint("createP2PPayee");
    },
    setDataToForm: function() {
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        var recipientData = payeeMod.presentationController.getP2PPayeeDetails();
        if (recipientData && recipientData.email) {
            this.view.txtEmailId.text = recipientData.email;
            //this.enableContinueButton();
            this.txtEmailIdOnTextChange();
        } else {
            this.view.txtEmailId.text = "";
            this.disableContinueButton();
        }
        this.view.forceLayout();
    },
    bindGenericError: function(msg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
    },
    getScope: function() {
        var scope = this;
        return scope;
    },
    bindContactData: function() {
        this.setDataToForm();
    }
});
define("PayAPersonModule/frmP2PRecEmailControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_f1d67775a24a438e978779d501a93e66: function AS_Form_f1d67775a24a438e978779d501a93e66(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_f90dbee66c374cb6ac7e563b2919768f: function AS_Form_f90dbee66c374cb6ac7e563b2919768f(eventobject) {
        var self = this;
        return self.frmPreShow.call(this);
    },
    AS_BarButtonItem_ff4513ccf0834ede9a2d01c4763a34ad: function AS_BarButtonItem_ff4513ccf0834ede9a2d01c4763a34ad(eventobject) {
        var self = this;
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    AS_BarButtonItem_efb871ac38c64cc4a3ea1bfca2af993a: function AS_BarButtonItem_efb871ac38c64cc4a3ea1bfca2af993a(eventobject) {
        var self = this;
        this.onClickCancel();
    }
});
define("PayAPersonModule/frmP2PRecEmailController", ["PayAPersonModule/userfrmP2PRecEmailController", "PayAPersonModule/frmP2PRecEmailControllerActions"], function() {
    var controller = require("PayAPersonModule/userfrmP2PRecEmailController");
    var controllerActions = ["PayAPersonModule/frmP2PRecEmailControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
