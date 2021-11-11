define("SavingsPotModule/userfrmEditGoalsAcknowledgementController", {
    init: function() {},
    preShow: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
        this.initActions();
    },
    initActions: function() {
        this.view.btnFund.onClick = this.continueOnClick;
        this.setDataToForm();
    },
    setDataToForm: function() {
        var navManager = applicationManager.getNavigationManager();
        var goalDetails = navManager.getCustomInfo("frmSavingsGoalViewDetails");
        var formatUtil = applicationManager.getFormatUtilManager();
        var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
        var fromDetails = SavingsPotMod.presentationController.getMaskedAccountName();
        var currencyCode = SavingsPotMod.presentationController.getCurrencyCode();
        this.view.lblGoalAn.text = goalDetails.potName;
        this.view.lblAmountAn.text = formatUtil.formatAmountandAppendCurrencySymbol(goalDetails.targetAmount, currencyCode);
        this.view.lblCurrentbalanceValue.text = formatUtil.formatAmountandAppendCurrencySymbol(goalDetails.availableBalance, currencyCode);
        this.view.lblContributionAn.text = formatUtil.formatAmountandAppendCurrencySymbol(goalDetails.periodicContribution, currencyCode);
        this.view.lblPeriodAn.text = goalDetails.targetPeriod;
        this.view.lblDayAn.text = goalDetails.frequencyDay;
        this.view.lblRemainingbalanceValue.text = formatUtil.formatAmountandAppendCurrencySymbol(goalDetails.remainingSavings, currencyCode);
        this.view.lblAccAn.text = fromDetails;
        var today = new Date();
        var month = today.getMonth() + 1;
        var date = today.getDate();
        if (month < 10) {
            month = "0" + month;
        }
        if (date < 10) {
            date = "0" + date;
        }
        var createdDate = month + "/" + date + "/" + today.getFullYear();
        this.view.lblModifiedvalue.text = createdDate;
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
define("SavingsPotModule/frmEditGoalsAcknowledgementControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_cfc9a7c4d5a244ef96fc3de771f55c7f: function AS_Form_cfc9a7c4d5a244ef96fc3de771f55c7f(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_i652cf248a1d4322987af14d41c1d290: function AS_Form_i652cf248a1d4322987af14d41c1d290(eventobject) {
        var self = this;
        this.preShow();
    }
});
define("SavingsPotModule/frmEditGoalsAcknowledgementController", ["SavingsPotModule/userfrmEditGoalsAcknowledgementController", "SavingsPotModule/frmEditGoalsAcknowledgementControllerActions"], function() {
    var controller = require("SavingsPotModule/userfrmEditGoalsAcknowledgementController");
    var controllerActions = ["SavingsPotModule/frmEditGoalsAcknowledgementControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
