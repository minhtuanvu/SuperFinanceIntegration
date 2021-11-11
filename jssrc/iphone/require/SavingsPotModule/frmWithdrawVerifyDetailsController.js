define("SavingsPotModule/userfrmWithdrawVerifyDetailsController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "NO", currentForm);
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        this.view.customHeader.flxBack.onTouchEnd = this.onBack;
        this.view.customHeader.btnRight.onClick = this.onCancelClick;
        this.view.imgChevron.onTouchEnd = this.navAmount;
        this.view.btnContinue.onClick = this.continueOnClick;
        this.setDataToForm();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    setDataToForm: function() {
        var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
        var withdrawDetails = SavingsPotMod.presentationController.getFundWithDrawDetails();
        var potName = SavingsPotMod.presentationController.getSavingsPotName();
        var fromDetails = SavingsPotMod.presentationController.getMaskedAccountName();
        this.view.lblFromValue.text = potName;
        this.view.lblToValue.text = fromDetails;
        var formatUtil = applicationManager.getFormatUtilManager();
        var amount;
        var currencySymbol = SavingsPotMod.presentationController.getCurrencySymbol();
        if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") {
            amount = withdrawDetails.amount.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        } else {
            amount = formatUtil.formatAmount(withdrawDetails.amount);
        }
        this.view.lblFundAmountValue.text = currencySymbol + amount;
    },
    onBack: function() {
        var navigationMan = applicationManager.getNavigationManager();
        navigationMan.goBack();
    },
    onCancelClick: function() {
        var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
        var type = SavingsPotMod.presentationController.getSavingsType();
        SavingsPotMod.presentationController.clearFundWithdrawData();
        var navManager = applicationManager.getNavigationManager();
        if (type === "Goal") {
            navManager.navigateTo("frmSavingsGoalViewDetails");
        } else if (type === "Budget") {
            navManager.navigateTo("frmBudgetPotDetails");
        }
    },
    navAmount: function() {
        var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
        SavingsPotMod.initializeStateData(true, "frmWithdrawVerifyDetails");
        SavingsPotMod.commonFunctionForNavigation("frmWithdrawAmount");
    },
    continueOnClick: function() {
        var amount;
        if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") {
            amount = this.view.lblFundAmountValue.text;
            amount = amount.replace(/[\\.]+/g, "");
            amount = amount.replace(",", ".");
        } else {
            amount = this.view.lblFundAmountValue.text.replace(/[, ]+/g, "");
        }
        var params = {
            "amount": amount.slice(1),
            "isCreditDebit": "Debit"
        }
        var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
        SavingsPotMod.savingspotWithdraw(params);
    }
});
define("SavingsPotModule/frmWithdrawVerifyDetailsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_d91f2fa967fe488bbc6785cf607062cb: function AS_Form_d91f2fa967fe488bbc6785cf607062cb(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_i2db50ae89404900bc8fa9436f7a0e38: function AS_Form_i2db50ae89404900bc8fa9436f7a0e38(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_ea1ef925bf0a45c886390ed242dfab06: function AS_BarButtonItem_ea1ef925bf0a45c886390ed242dfab06(eventobject) {
        var self = this;
        this.onCancelClick();
    }
});
define("SavingsPotModule/frmWithdrawVerifyDetailsController", ["SavingsPotModule/userfrmWithdrawVerifyDetailsController", "SavingsPotModule/frmWithdrawVerifyDetailsControllerActions"], function() {
    var controller = require("SavingsPotModule/userfrmWithdrawVerifyDetailsController");
    var controllerActions = ["SavingsPotModule/frmWithdrawVerifyDetailsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
