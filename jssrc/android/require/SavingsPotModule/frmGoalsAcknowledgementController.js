define("SavingsPotModule/userfrmGoalsAcknowledgementController", {
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
    postShow: function() {},
    setDataToForm: function() {
        var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
        var goalDetails = SavingsPotMod.presentationController.getBudgetDetails();
        var fromDetails = SavingsPotMod.presentationController.getMaskedAccountName();
        var currencySymbol = SavingsPotMod.presentationController.getCurrencySymbol();
        this.view.lblAccAn.text = fromDetails;
        this.view.lblGoalAn.text = goalDetails.potName;
        if (applicationManager.getConfigurationManager().getDeploymentGeography() == "EUROPE") {
            this.view.lblAmountAn.text = currencySymbol + goalDetails.targetAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ",00";
            goalDetails.periodicContribution = goalDetails.periodicContribution.replace(".", ",");
            this.view.lblContributionAn.text = currencySymbol + goalDetails.periodicContribution.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ((goalDetails.periodicContribution.indexOf(',')) ? "" : ",00");
        } else {
            this.view.lblAmountAn.text = currencySymbol + goalDetails.targetAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            this.view.lblContributionAn.text = currencySymbol + goalDetails.periodicContribution.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        this.view.lblPeriodAn.text = goalDetails.targetPeriod;
        this.view.lblDayAn.text = goalDetails.freqDay;
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
        this.view.lblDateAn.text = createdDate;
        this.view.lblStartAn.text = goalDetails.startDate;
        this.view.lblFinalAn.text = goalDetails.endDate;
    },
    continueOnClick: function() {
        var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
        SavingsPotMod.clearCreateData();
        var accountsID = SavingsPotMod.getAccountId();
        SavingsPotMod.getAllSavingsPot(accountsID);
    }
});
define("SavingsPotModule/frmGoalsAcknowledgementControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_d7aed37c611f40c089a8ed6c87e02e92: function AS_Form_d7aed37c611f40c089a8ed6c87e02e92(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_a1d0be1f31a04cd4bb77510f131a718d: function AS_Form_a1d0be1f31a04cd4bb77510f131a718d(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_e9d55384e1a849db89cbcd738710ff0b: function AS_Form_e9d55384e1a849db89cbcd738710ff0b(eventobject) {
        var self = this;
        this.preShow();
    }
});
define("SavingsPotModule/frmGoalsAcknowledgementController", ["SavingsPotModule/userfrmGoalsAcknowledgementController", "SavingsPotModule/frmGoalsAcknowledgementControllerActions"], function() {
    var controller = require("SavingsPotModule/userfrmGoalsAcknowledgementController");
    var controllerActions = ["SavingsPotModule/frmGoalsAcknowledgementControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
