define("TransferModuleEurope/userfrmEuropeAcknowledgementController", {
    init: function() {
        var scope = this;
        var currentFormObject = kony.application.getCurrentForm();
        var currentForm = currentFormObject.id;
        applicationManager.getPresentationFormUtility().initCommonActions(this, "CALLBACK", currentForm, scope.navigateCustomBack);
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
    },
    initActions: function() {
        this.view.btnManageBeneficiary.onClick = this.navigateToManageBeneficiaries;
        this.view.btnDashboard.onClick = this.navigateToDashboard;
        this.view.btnNewTransfer.onClick = this.navigateToMakeaPayment;
        this.view.btnTryAgain.onClick = this.navigateToManageBeneficiaries;
    },
    navigateToManageBeneficiaries: function() {
        var transMod = applicationManager.getModulesPresentationController("TransferModule");
        transMod.enterManageRecipientsFlow();
    },
    navigateToMakeaPayment: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.setEntryPoint("europeTransferFlow", "frmEuropeAcknowledgement");
        navMan.setEntryPoint("startFromFlow", "frmEuropeTransferFromAccount");
        var transMod = applicationManager.getModulesPresentationController("TransferModule");
        transMod.setTransferToAccountFromManageFlow();
    },
    navigateCustomBack: function() {
        var transMod = applicationManager.getModulesPresentationController("TransferModule");
        transMod.enterManageRecipientsFlow();
    },
    navigateToDashboard: function() {
        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountMod.presentationController.showDashboard();
    },
    setupUI: function() {
        var navMan = applicationManager.getNavigationManager();
        var formData = navMan.getCustomInfo("frmEuropeAcknowledgement");
        if (kony.sdk.isNullOrUndefined(formData.segData)) {
            this.view.flxError.isVisible = true;
            this.view.flxSuccessTransaction.isVisible = false;
            this.view.lblTitle.text = formData.title;
        } else {
            this.view.flxError.isVisible = false;
            this.view.flxSuccessTransaction.isVisible = true;
            if (formData.screenType === "DELETE") {
                this.view.btnNewTransfer.isVisible = false;
                this.view.btnDashboard.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.PFM.Home");
            } else {
                this.view.btnNewTransfer.isVisible = true;
                this.view.btnDashboard.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.MyAccounts.Title");
            }
            this.view.lblSuccessMessage.text = formData.title;
            this.view.segDetails.widgetDataMap = this.getWidgetDataMap();
            var segmentData = applicationManager.getDataProcessorUtility().removeRowsWithEmptyValueFromSegmentData(formData.segData, this.view.segDetails.widgetDataMap.lblDetails);
            this.view.segDetails.setData(segmentData);
        }
    },
    getWidgetDataMap: function() {
        var map = {
            lblTitle: "property",
            lblDetails: "value"
        };
        return map;
    },
    postShow: function() {}
});
define("TransferModuleEurope/frmEuropeAcknowledgementControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_de49ec561c4549a3b3d1883fbaf522a0: function AS_Form_de49ec561c4549a3b3d1883fbaf522a0(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_gbe213b94adc42bf97f85fb1e7cca786: function AS_Form_gbe213b94adc42bf97f85fb1e7cca786(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_c7c1231f79b64467b2fec7e1c83c72ff: function AS_Form_c7c1231f79b64467b2fec7e1c83c72ff(eventobject) {
        var self = this;
        this.preShow();
    }
});
define("TransferModuleEurope/frmEuropeAcknowledgementController", ["TransferModuleEurope/userfrmEuropeAcknowledgementController", "TransferModuleEurope/frmEuropeAcknowledgementControllerActions"], function() {
    var controller = require("TransferModuleEurope/userfrmEuropeAcknowledgementController");
    var controllerActions = ["TransferModuleEurope/frmEuropeAcknowledgementControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
