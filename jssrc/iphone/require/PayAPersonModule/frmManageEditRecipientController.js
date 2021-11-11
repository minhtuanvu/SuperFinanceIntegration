define("PayAPersonModule/userfrmManageEditRecipientController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
        this.populateName();
        this.initActions();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    initActions: function() {
        var scope = this;
        this.view.customHeader.flxBack.onClick = function() {
            var navMan = applicationManager.getNavigationManager();
            navMan.goBack();
        }
        this.view.customHeader.btnRight.onClick = function() {
            scope.onClickCancel();
        }
        this.view.btnSave.onClick = function() {
            applicationManager.getPresentationUtility().showLoadingScreen();
            var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
            if (p2pMod.presentationController.getFlowType() === "editP2P") {
                var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
                p2pMod.presentationController.updateP2PRecipient(scope.view.txtRecipientName.text);
            } else {
                var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
                transferModulePresentationController.updateBenificiaryNickName(scope.view.txtRecipientName.text);
            }
        }
    },
    populateName: function() {
        var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        var specialCharactersSet = "~#^|$%&*!@()_-+=}{][/|?,.><`':;\"\\";
        this.view.txtRecipientName.restrictCharactersSet = specialCharactersSet.replace("!@#&*_'-.,", '');
        if (p2pMod.presentationController.getFlowType() === "editP2P") {
            this.view.txtRecipientName.maxTextLength = 50;
            var recipientData = p2pMod.presentationController.getP2PPayeeDetails();
            if (recipientData && recipientData.nickName) {
                this.view.txtRecipientName.text = recipientData.nickName;
            }
        } else {
            this.view.txtRecipientName.maxTextLength = 50;
            var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
            var benificiaryDetails = transferModPresentationController.getBenificiaryData();
            if (benificiaryDetails && benificiaryDetails.nickName) {
                this.view.txtRecipientName.text = benificiaryDetails.nickName;
            }
        }
    },
    onClickCancel: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    showErrorPopup: function(err) {
        applicationManager.getDataProcessorUtility().showToastMessageError(this, err);
    }
});
define("PayAPersonModule/frmManageEditRecipientControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_a91764887e84478fa3afc11fa5103285: function AS_Form_a91764887e84478fa3afc11fa5103285(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_f68b2b2d7287434ba63bed555c3c4155: function AS_Form_f68b2b2d7287434ba63bed555c3c4155(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_dc800a1f94824cc79d47509bff576308: function AS_BarButtonItem_dc800a1f94824cc79d47509bff576308(eventobject) {
        var self = this;
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    AS_BarButtonItem_i04aa4c95f944af3a0d64ff7210f6bcb: function AS_BarButtonItem_i04aa4c95f944af3a0d64ff7210f6bcb(eventobject) {
        var self = this;
        this.onClickCancel();
    }
});
define("PayAPersonModule/frmManageEditRecipientController", ["PayAPersonModule/userfrmManageEditRecipientController", "PayAPersonModule/frmManageEditRecipientControllerActions"], function() {
    var controller = require("PayAPersonModule/userfrmManageEditRecipientController");
    var controllerActions = ["PayAPersonModule/frmManageEditRecipientControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
