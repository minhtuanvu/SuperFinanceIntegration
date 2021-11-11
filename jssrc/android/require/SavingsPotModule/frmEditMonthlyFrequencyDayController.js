define("SavingsPotModule/userfrmEditMonthlyFrequencyDayController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
        this.initActions();
    },
    initActions: function() {
        this.view.customHeader.flxBack.onClick = function() {
            var navMan = applicationManager.getNavigationManager();
            navMan.goBack();
        };
        this.view.btnContinue.onClick = this.continueOnClick;
        this.view.segFrequencyDay.onRowClick = this.selectionMethod;
        this.setDataToForm();
    },
    setDataToForm: function() {
        var navManager = applicationManager.getNavigationManager();
        var goalDetails = navManager.getCustomInfo("frmSavingsGoalViewDetails");
        var freqDay = goalDetails.frequencyDay;
        var day = freqDay.substring(0, 2);
        this.view.lblSelectedDateValue.text = day;
    },
    continueOnClick: function() {
        var navManager = applicationManager.getNavigationManager();
        var freqDay = this.view.lblSelectedDateValue.text + " " + this.view.lblMonths.text;
        var goalDetails = navManager.getCustomInfo("frmSavingsGoalViewDetails");
        goalDetails.frequencyDay = freqDay;
        navManager.setCustomInfo("frmSavingsGoalViewDetails", goalDetails);
        var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
        SavingsPotMod.presentationController.updateFrequencyDay(freqDay);
        navManager.navigateTo("frmEditSavingsGoal");
    },
    selectionMethod: function() {
        this.view.segFrequencyDay.rowFocusSkin = "sknFlxf9f9f9";
        var row = this.view.segFrequencyDay.selectedRowItems[0];
        var rowvalue = row.lblOption;
        if (rowvalue.length == 1) {
            rowvalue = "0" + rowvalue;
        }
        this.view.lblSelectedDateValue.text = rowvalue;
    }
});
define("SavingsPotModule/frmEditMonthlyFrequencyDayControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_j1df68481620487fbc83cfbfe4426611: function AS_Form_j1df68481620487fbc83cfbfe4426611(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_i9c7a4fbe2504d58a4b6ad92711b8bf0: function AS_Form_i9c7a4fbe2504d58a4b6ad92711b8bf0(eventobject) {
        var self = this;
        this.preShow();
    },
});
define("SavingsPotModule/frmEditMonthlyFrequencyDayController", ["SavingsPotModule/userfrmEditMonthlyFrequencyDayController", "SavingsPotModule/frmEditMonthlyFrequencyDayControllerActions"], function() {
    var controller = require("SavingsPotModule/userfrmEditMonthlyFrequencyDayController");
    var controllerActions = ["SavingsPotModule/frmEditMonthlyFrequencyDayControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
