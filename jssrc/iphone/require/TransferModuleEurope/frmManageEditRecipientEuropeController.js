define("TransferModuleEurope/userfrmManageEditRecipientEuropeController", {
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
            var  transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
            transferModulePresentationController.updateBenificiaryNickName(scope.view.txtRecipientName.text);
        }
    },
    populateName: function() {
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var benificiaryDetails = transferModulePresentationController.getBenificiaryData();
        if (benificiaryDetails && benificiaryDetails.nickName) {
            this.view.txtRecipientName.text = benificiaryDetails.nickName;
        }
    },
    onClickCancel: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    }
});
define("TransferModuleEurope/frmManageEditRecipientEuropeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_c5cbe50bd2fd45cc8b1102083c317674: function AS_Form_c5cbe50bd2fd45cc8b1102083c317674(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_d6d201fc0f17419b9fe7a19276d32ecc: function AS_Form_d6d201fc0f17419b9fe7a19276d32ecc(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_e3134567689a41a7a951d20f1ac034c5: function AS_BarButtonItem_e3134567689a41a7a951d20f1ac034c5(eventobject) {
        var self = this;
        this.onClickCancel();
    }
});
define("TransferModuleEurope/frmManageEditRecipientEuropeController", ["TransferModuleEurope/userfrmManageEditRecipientEuropeController", "TransferModuleEurope/frmManageEditRecipientEuropeControllerActions"], function() {
    var controller = require("TransferModuleEurope/userfrmManageEditRecipientEuropeController");
    var controllerActions = ["TransferModuleEurope/frmManageEditRecipientEuropeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
