define("SavingsPotModule/userfrmCreateGoalAckErrorController", {
    init: function() {},
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        var navManager = applicationManager.getNavigationManager();
        if (navManager.getPreviousForm() === "frmCreateGoalVerifyDetails") {
            this.view.lblDescription.text = "Goal Creation Failed";
            this.view.lblErrorMessage.text = "Goal creation failed due to server  error. Please try again.";
        } else if (navManager.getPreviousForm() === "frmCreateBudgetVerifyDetails") {
            this.view.lblDescription.text = "Budget Creation Failed";
            this.view.lblErrorMessage.text = "Budget creation failed due to server  error. Please try again.";
        } else if (navManager.getPreviousForm() === "frmWithdrawVerifyDetails") {
            this.view.lblDescription.text = "Withdraw amount failed";
            this.view.lblErrorMessage.text = "Withdraw amount failed due to server  error. Please try again.";
        } else if (navManager.getPreviousForm() === "frmGoalfundverifyDetails") {
            this.view.lblDescription.text = "Transfer fund failed";
            this.view.lblErrorMessage.text = "Transfer fund failed due to server  error. Please try again.";
        } else if (navManager.getPreviousForm() === "frmEditSavingsGoal") {
            this.view.lblDescription.text = "Edit Goal Failed";
            this.view.lblErrorMessage.text = "Edit gaol failed due to server  error. Please try again.";
        } else if (navManager.getPreviousForm() === "frmEditBudget") {
            this.view.lblDescription.text = "Edit Budget Failed";
            this.view.lblErrorMessage.text = "Edit budget failed due to server  error. Please try again.";
        } else if (navManager.getPreviousForm() === "frmBudgetInitiateTransferDetails") {
            this.view.lblDescription.text = "Transfer fund failed";
            this.view.lblErrorMessage.text = "Transfer fund failed due to server  error. Please try again.";
        }
        this.initActions();
    },
    initActions: function() {
        this.view.btnFund.onClick = this.continueOnClick;
    },
    postShow: function() {},
    continueOnClick: function() {
        var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
        SavingsPotMod.clearCreateData();
        var accountsID = SavingsPotMod.getAccountId();
        SavingsPotMod.getAllSavingsPot(accountsID);
    }
});
define("SavingsPotModule/frmCreateGoalAckErrorControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_e502fb78818b4e8690642719633c566d: function AS_Form_e502fb78818b4e8690642719633c566d(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_hd8fd0c88b384072873cb6bd3a4dd7fd: function AS_Form_hd8fd0c88b384072873cb6bd3a4dd7fd(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_fb8b4e9a4ebd4780b472a4bf62ebbdb8: function AS_Form_fb8b4e9a4ebd4780b472a4bf62ebbdb8(eventobject) {
        var self = this;
        this.preShow();
    }
});
define("SavingsPotModule/frmCreateGoalAckErrorController", ["SavingsPotModule/userfrmCreateGoalAckErrorController", "SavingsPotModule/frmCreateGoalAckErrorControllerActions"], function() {
    var controller = require("SavingsPotModule/userfrmCreateGoalAckErrorController");
    var controllerActions = ["SavingsPotModule/frmCreateGoalAckErrorControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
