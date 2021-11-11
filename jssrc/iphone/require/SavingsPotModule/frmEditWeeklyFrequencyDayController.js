define("SavingsPotModule/userfrmEditWeeklyFrequencyDayController", {
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
        var day = freqDay.substring(17, 20);
        this.view.lblSelectedDayValue.text = day;
    },
    continueOnClick: function() {
        var navManager = applicationManager.getNavigationManager();
        var temp = this.view.lblSelectedDayValue.text;
        var freqDay = this.view.lbWeeks.text + " " + temp.substring(0, 3);
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
        this.view.lblSelectedDayValue.text = rowvalue;
    }
});
define("SavingsPotModule/frmEditWeeklyFrequencyDayControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_e9fe4876c9ed405a8a79848ed7035586: function AS_Form_e9fe4876c9ed405a8a79848ed7035586(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_dda21e47229c44f78a826c54c4929665: function AS_Form_dda21e47229c44f78a826c54c4929665(eventobject) {
        var self = this;
        this.preShow();
    }
});
define("SavingsPotModule/frmEditWeeklyFrequencyDayController", ["SavingsPotModule/userfrmEditWeeklyFrequencyDayController", "SavingsPotModule/frmEditWeeklyFrequencyDayControllerActions"], function() {
    var controller = require("SavingsPotModule/userfrmEditWeeklyFrequencyDayController");
    var controllerActions = ["SavingsPotModule/frmEditWeeklyFrequencyDayControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
