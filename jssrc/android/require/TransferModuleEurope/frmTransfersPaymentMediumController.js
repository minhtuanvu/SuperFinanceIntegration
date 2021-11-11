define("TransferModuleEurope/userfrmTransfersPaymentMediumController", {
    init: function() {
        var scope = this;
        var currentFormObject = kony.application.getCurrentForm();
        var currentForm = currentFormObject.id;
        applicationManager.getPresentationFormUtility().initCommonActions(this, "CALLBACK", currentForm, scope.navigateCustomBack);
    },
    navigateCustomBack: function() {
        var transMod = applicationManager.getModulesPresentationController("TransferModule");
        transMod.commonFunctionForgoBack();
    },
    preShow: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        } else {
            this.view.flxHeader.isVisible = true;
        }
        this.setupUI();
        this.initActions();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    setupUI: function() {
        var navManager = applicationManager.getNavigationManager();
        var data = navManager.getCustomInfo("frmTransfersPaymentMedium");
        if (data["ui"] === "twoOptions") {
            this.view.flxSameorNextDay.isVisible = true;
            this.view.flxNextDay.isVisible = false;
            this.view.flxNoSelection.isVisible = false;
            this.view.flxButton.isVisible = false;
        } else {
            this.view.flxSameorNextDay.isVisible = false;
            this.view.flxNextDay.isVisible = true;
            this.view.flxNoSelection.isVisible = false;
            this.view.flxButton.isVisible = true;
        }
    },
    initActions: function() {
        this.view.customHeader.btnRight.onClick = this.cancelOnClick;
        this.view.customHeader.flxBack.onClick = this.navigateCustomBack;
        this.view.flxInstantPayment.onClick = this.flxInstantPaymentOnClick;
        this.view.flxDomesticPayment.onClick = this.flxDomesticPaymentOnClick;
        this.view.btnContinue.onClick = this.continueOnClick;
    },
    flxInstantPaymentOnClick: function() {
        var transactionManager = applicationManager.getTransactionManager();
        var navManager = applicationManager.getNavigationManager();
        var data = navManager.getCustomInfo("frmTransfersPaymentMedium");
        var transMod = applicationManager.getModulesPresentationController("TransferModule");
        transactionManager.setTransactionAttribute("paymentType", "INSTPAY");
        transMod.makeATransfer(data.attachmentPayload);
    },
    flxDomesticPaymentOnClick: function() {
        var navManager = applicationManager.getNavigationManager();
        var data = navManager.getCustomInfo("frmTransfersPaymentMedium");
        var transMod = applicationManager.getModulesPresentationController("TransferModule");
        transMod.continueWithDomesticPayment(data.attachmentPayload);
    },
    cancelOnClick: function() {
        var transMod = applicationManager.getModulesPresentationController("TransferModule");
        transMod.cancelCommon();
    },
    continueOnClick: function() {
        var navManager = applicationManager.getNavigationManager();
        var data = navManager.getCustomInfo("frmTransfersPaymentMedium");
        var transMod = applicationManager.getModulesPresentationController("TransferModule");
        transMod.continueWithDomesticPayment(data.attachmentPayload);
    }
});
define("TransferModuleEurope/frmTransfersPaymentMediumControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_hff948b5183e4ee7b7801419c2580cc2: function AS_Form_hff948b5183e4ee7b7801419c2580cc2(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_b5518b73d3de4cc9b196b834a5c234f1: function AS_Form_b5518b73d3de4cc9b196b834a5c234f1(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_b6ffecd5c28d4ead81f3fc9096bec62c: function AS_BarButtonItem_b6ffecd5c28d4ead81f3fc9096bec62c(eventobject) {
        var self = this;
        this.navigateCustomBack();
    },
    AS_BarButtonItem_aed577ce6cfc46b3916b8cfe3199f5c9: function AS_BarButtonItem_aed577ce6cfc46b3916b8cfe3199f5c9(eventobject) {
        var self = this;
        this.cancelOnClick();
    }
});
define("TransferModuleEurope/frmTransfersPaymentMediumController", ["TransferModuleEurope/userfrmTransfersPaymentMediumController", "TransferModuleEurope/frmTransfersPaymentMediumControllerActions"], function() {
    var controller = require("TransferModuleEurope/userfrmTransfersPaymentMediumController");
    var controllerActions = ["TransferModuleEurope/frmTransfersPaymentMediumControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
