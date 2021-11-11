define("LoansPayoffModule/userfrmLoansAcknowledgementController", {
    init: function() {
        var scope = this;
        var currentFormObject = kony.application.getCurrentForm();
        var currentForm = currentFormObject.id;
        applicationManager.getPresentationFormUtility().initCommonActions(this, "CALLBACK", currentForm, scope.navigateCustomBack);
    },
    navigateCustomBack: function() {
        var loansMod = applicationManager.getModulesPresentationController("LoansPayoffModule");
        loansMod.clearFlowAttributes();
        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountMod.presentationController.showDashboard();
    },
    preShow: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
        this.initActions();
        this.setupUI();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    initActions: function() {
        var scope = this;
        var loansMod = applicationManager.getModulesPresentationController("LoansPayoffModule");
        scope.view.btnDashboard.onClick = function() {
            loansMod.clearFlowAttributes();
            var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
            accountMod.presentationController.showDashboard();
        };
        scope.view.btnTryAgain.onClick = function() {
            loansMod.clearFlowAttributes();
            var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
            accountMod.presentationController.showDashboard();
        };
    },
    setupUI: function() {
        var transactionManager = applicationManager.getTransactionManager();
        var transferObject = transactionManager.getTransactionObject();
        var loansMod = applicationManager.getModulesPresentationController("LoansPayoffModule");
        if (!kony.sdk.isNullOrUndefined(transferObject.errmsg)) {
            this.view.flxConfirmationMain.isVisible = false;
            this.view.flxError.isVisible = true;
            this.view.flxButtons.isVisible = false;
            this.view.lblTitle.text = transferObject.errmsg;
        } else {
            if (transferObject.isScheduled === "0") this.view.lblSuccessMessage.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.loans.PostedTransferMessage");
            else this.view.lblSuccessMessage.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.MM.TransferScheduled");
            this.view.flxConfirmationMain.isVisible = true;
            this.view.flxError.isVisible = false;
            this.view.flxButtons.isVisible = true;
            this.setSegmentData();
        }
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    setSegmentData: function() {
        var loansMod = applicationManager.getModulesPresentationController("LoansPayoffModule");
        var segData = loansMod.getAcknowledgementScreenData();
        this.view.segDetails.widgetDataMap = this.getWidgetDataMap();
        this.view.segDetails.setData(segData);
    },
    getWidgetDataMap: function() {
        var map = {
            lblTitle: "property",
            lblDetails: "value1",
            lblExtras: "value2"
        };
        return map;
    }
});
define("LoansPayoffModule/frmLoansAcknowledgementControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_b65127e2fe21420a898afbecbb68c536: function AS_Form_b65127e2fe21420a898afbecbb68c536(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_fb0497b34a7d4284a894e44d226f3c4d: function AS_Form_fb0497b34a7d4284a894e44d226f3c4d(eventobject) {
        var self = this;
        this.preShow();
    }
});
define("LoansPayoffModule/frmLoansAcknowledgementController", ["LoansPayoffModule/userfrmLoansAcknowledgementController", "LoansPayoffModule/frmLoansAcknowledgementControllerActions"], function() {
    var controller = require("LoansPayoffModule/userfrmLoansAcknowledgementController");
    var controllerActions = ["LoansPayoffModule/frmLoansAcknowledgementControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
