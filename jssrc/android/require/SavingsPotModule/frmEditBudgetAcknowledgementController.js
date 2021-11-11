define("SavingsPotModule/userfrmEditBudgetAcknowledgementController", {
    init: function() {},
    preShow: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
        this.initActions();
    },
    initActions: function() {
        this.view.btnContinue.onClick = this.navigatetoMySavingsPot;
        this.setDataToForm();
    },
    setDataToForm: function() {
        var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
        var navManager = applicationManager.getNavigationManager();
        var budgetDetails = navManager.getCustomInfo("frmBudgetPotDetails");
        var formatUtil = applicationManager.getFormatUtilManager();
        var fromDetails = SavingsPotMod.presentationController.getMaskedAccountName();
        var currencyCode = SavingsPotMod.presentationController.getCurrencyCode();
        this.view.lblBudgetAn.text = budgetDetails.potName;
        this.view.lblAmountAn.text = formatUtil.formatAmountandAppendCurrencySymbol(budgetDetails.targetAmount, currencyCode);
        this.view.lblCurrentBalanceValue.text = formatUtil.formatAmountandAppendCurrencySymbol(budgetDetails.availableBalance, currencyCode);
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
        this.view.lblDateAn.text = createdDate;
    },
    postShow: function() {},
    navigatetoMySavingsPot: function() {
        var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
        SavingsPotMod.setSavingsFlow("");
        SavingsPotMod.clearCreateData();
        var accountsID = SavingsPotMod.getAccountId();
        SavingsPotMod.getAllSavingsPot(accountsID);
    }
});
define("SavingsPotModule/frmEditBudgetAcknowledgementControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_ebf4dae4777d48ddab2590aaf6014cfc: function AS_Form_ebf4dae4777d48ddab2590aaf6014cfc(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_d1380fbb77e8485386ee72020a057338: function AS_Form_d1380fbb77e8485386ee72020a057338(eventobject) {
        var self = this;
        this.preShow();
    }
});
define("SavingsPotModule/frmEditBudgetAcknowledgementController", ["SavingsPotModule/userfrmEditBudgetAcknowledgementController", "SavingsPotModule/frmEditBudgetAcknowledgementControllerActions"], function() {
    var controller = require("SavingsPotModule/userfrmEditBudgetAcknowledgementController");
    var controllerActions = ["SavingsPotModule/frmEditBudgetAcknowledgementControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
