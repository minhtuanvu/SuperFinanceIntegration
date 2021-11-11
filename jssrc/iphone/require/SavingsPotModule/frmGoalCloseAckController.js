define("SavingsPotModule/userfrmGoalCloseAckController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "NO", currentForm);
    },
    preShow: function() {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.setVisibility(false);
        }
        var navManager = applicationManager.getNavigationManager();
        var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
        var accountName = SavingsPotMod.getMaskedAccountName();
        this.view.btnDashboard.onClick = this.continueOnClick;
        if (navManager.getPreviousForm() === "frmEditBudget" || navManager.getPreviousForm() === "frmBudgetPotDetails") {
            var budgetDetails = navManager.getCustomInfo("frmBudgetPotDetails");
            this.view.lblGoalCloseAck.text = "Closed " + budgetDetails.potName + " savings budget & moved total current balance to " + accountName + " account";
        } else {
            var goalDetails = navManager.getCustomInfo("frmSavingsGoalViewDetails");
            this.view.lblGoalCloseAck.text = "Closed " + goalDetails.potName + " savings goal & moved total current balance to " + accountName + " account";
        }
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    postShow: function() {},
    continueOnClick: function() {
        var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
        SavingsPotMod.setSavingsFlow("");
        SavingsPotMod.clearCreateData();
        var accountsID = SavingsPotMod.getAccountId();
        SavingsPotMod.getAllSavingsPot(accountsID);
    }
});
define("SavingsPotModule/frmGoalCloseAckControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_cf82bd9a6afd40e0b92f89e15a40f015: function AS_Form_cf82bd9a6afd40e0b92f89e15a40f015(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_hb9ed395a1f94853ba4500586ae56eac: function AS_Form_hb9ed395a1f94853ba4500586ae56eac(eventobject) {
        var self = this;
        this.preShow();
    }
});
define("SavingsPotModule/frmGoalCloseAckController", ["SavingsPotModule/userfrmGoalCloseAckController", "SavingsPotModule/frmGoalCloseAckControllerActions"], function() {
    var controller = require("SavingsPotModule/userfrmGoalCloseAckController");
    var controllerActions = ["SavingsPotModule/frmGoalCloseAckControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
