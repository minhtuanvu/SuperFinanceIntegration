define("PayAPersonModule/userfrmP2PVerifyDetailsController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    frmPreShow: function() {
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
    renderTitleBar: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === 'iPhone') {
            this.view.flxHeader.setVisibility(false);
        }
    },
    flxBackOnClick: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    },
    btnContinueOnClick: function() {
        var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        applicationManager.getPresentationUtility().showLoadingScreen();
        p2pMod.presentationController.addP2PRecipient(this.view.txtNickName.text);
    },
    enableContinueButton: function() {
        this.view.btnContinue.setEnabled(true);
        this.view.btnContinue.skin = "sknBtn0095e4RoundedffffffSSP26px";
    },
    disableContinueButton: function() {
        this.view.btnContinue.setEnabled(false);
        this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
    },
    setDataToForm: function() {
        var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        var recipientDetails = p2pMod.presentationController.getP2PPayeeDetails();
        var specialCharactersSet = "~#^|$%&*!@()_-+=}{][/|?,.><`':;\"\\";
        this.view.txtNickName.restrictCharactersSet = specialCharactersSet.replace("!@#&*_'-.,", '');
        this.view.txtNickName.maxTextLength = 50;
        if (recipientDetails.name) {
            this.view.lblRecipientNameValue.text = recipientDetails.name;
        }
        if (recipientDetails.phone) {
            this.view.lblPhoneNo.text = "Phone Number";
            this.view.lblPhoneValue.text = recipientDetails.phone;
        }
        if (recipientDetails.email) {
            this.view.lblPhoneNo.text = "Email";
            this.view.lblPhoneValue.text = recipientDetails.email;
        }
        if (recipientDetails.nickName) {
            this.view.txtNickName.text = recipientDetails.nickName;
        } else if (recipientDetails.nickName === null || recipientDetails.nickName === undefined) {
            this.view.txtNickName.text = recipientDetails.name;
        }
        if (recipientDetails.totalContractCustomerSelected) {
            this.view.lblLinkedWithValue.text = recipientDetails.totalContractCustomerSelected + " Customer IDs";
        }
    },
    onClickCancel: function() {
        var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        p2pMod.presentationController.navToFormBasedOnEntryPoint("createP2PPayee");
    }
});
define("PayAPersonModule/frmP2PVerifyDetailsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_dbd8ca3e5b05403693eeb49c0bee55b7: function AS_Form_dbd8ca3e5b05403693eeb49c0bee55b7(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_bd4d549e3dda43d6886c04670c1a1829: function AS_Form_bd4d549e3dda43d6886c04670c1a1829(eventobject) {
        var self = this;
        return self.frmPreShow.call(this);
    },
    AS_BarButtonItem_j5eb6fccc57f4f438bdad8230fd21425: function AS_BarButtonItem_j5eb6fccc57f4f438bdad8230fd21425(eventobject) {
        var self = this;
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    AS_BarButtonItem_fe80454839f24c2d882d124db442dfe6: function AS_BarButtonItem_fe80454839f24c2d882d124db442dfe6(eventobject) {
        var self = this;
        this.onClickCancel();
    }
});
define("PayAPersonModule/frmP2PVerifyDetailsController", ["PayAPersonModule/userfrmP2PVerifyDetailsController", "PayAPersonModule/frmP2PVerifyDetailsControllerActions"], function() {
    var controller = require("PayAPersonModule/userfrmP2PVerifyDetailsController");
    var controllerActions = ["PayAPersonModule/frmP2PVerifyDetailsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
