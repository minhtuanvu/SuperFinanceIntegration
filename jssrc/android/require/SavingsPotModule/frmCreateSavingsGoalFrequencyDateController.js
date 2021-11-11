define("SavingsPotModule/userfrmCreateSavingsGoalFrequencyDateController", {
    preShow: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
            this.view.flxScrollMain.top = "0dp";
        }
        var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
        var result = SavingsPotMod.presentationController.getBudgetDetails();
        var flag = result.frequency;
        if (result.startDate == undefined) {
            this.view.lblSelectedDateValue.text = "";
            this.view.customCalendar.selectedDate = '';
            this.view.customCalendar.preShow();
            this.view.customCalendar.triggerContinueAction = true;
            this.view.customCalendar.updateBottomLabel = true;
            this.view.customCalendar.updateDateBullets();
            var startDate = new Date();
            var startDateFeed1 = (startDate.getMonth() + 1) + "/" + startDate.getDate() + "/" + startDate.getFullYear();
            this.view.customCalendar.setFirstEnabledDate(startDateFeed1);
            //  this.view.customCalendar.setFirstEnabledDate();
        }
        var date = this.view.customCalendar.getSelectedDate();
        if (date) {
            date = date.split("/");
            var d = new Date(date[2], date[0] - 1, date[1]);
            var weekday = new Array(7);
            weekday[0] = "Sunday";
            weekday[1] = "Monday";
            weekday[2] = "Tuesday";
            weekday[3] = "Wednesday";
            weekday[4] = "Thursday";
            weekday[5] = "Friday";
            weekday[6] = "Saturday";
            var selectedDay = weekday[d.getDay()];
            if (flag == "Biweekly") {
                this.view.lblSelectedDateValue.text = selectedDay;
            } else {
                if (date[1].length == 1) {
                    this.view.lblSelectedDateValue.text = "0" + date[1];
                } else {
                    this.view.lblSelectedDateValue.text = date[1];
                }
            }
        }
        if (flag == "Biweekly") {
            this.view.lblNote.setVisibility(false);
            this.view.lblNotes.setVisibility(true);
            this.view.lblEvery2Weeks.setVisibility(true);
            this.view.lblOfEveryMonth.setVisibility(false);
        } else {
            this.view.lblNote.setVisibility(true);
            this.view.lblNotes.setVisibility(false);
            this.view.lblEvery2Weeks.setVisibility(false);
            this.view.lblOfEveryMonth.setVisibility(true);
        }
        this.view.btnContinue.onClick = this.continueOnClick;
        this.view.customHeader.flxBack.onTouchEnd = this.navigateCustomBack;
        this.view.customHeader.btnRight.onClick = this.onCancelClick;
        this.view.customCalendar.onTouchEnd = function() {
            result = SavingsPotMod.presentationController.getBudgetDetails();
            flag = result.frequency;
            date = this.view.customCalendar.getSelectedDate();
            date = date.split("/");
            d = new Date(date[2], date[0] - 1, date[1]);
            weekday = new Array(7);
            weekday[0] = "Sunday";
            weekday[1] = "Monday";
            weekday[2] = "Tuesday";
            weekday[3] = "Wednesday";
            weekday[4] = "Thursday";
            weekday[5] = "Friday";
            weekday[6] = "Saturday";
            selectedDay = weekday[d.getDay()];
            if (flag == "Biweekly") {
                this.view.lblSelectedDateValue.text = selectedDay;
            } else {
                if (date[1].length == 1) {
                    this.view.lblSelectedDateValue.text = "0" + date[1];
                } else {
                    this.view.lblSelectedDateValue.text = date[1];
                }
            }
            this.view.flxScrollMain.forceLayout();
        }.bind(this);
    },
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm, scope.navigateCustomBack);
        this.view.customCalendar.preShow();
        this.view.customCalendar.selectedDate = '';
        this.view.customCalendar.triggerContinueAction = true;
        this.view.customCalendar.updateBottomLabel = true;
        this.view.customCalendar.updateDateBullets();
        this.view.customCalendar.setFirstEnabledDate();
    },
    postShow: function() {},
    continueOnClick: function() {
        var date = this.view.customCalendar.getSelectedDate();
        var freqDay;
        if (this.view.lblEvery2Weeks.isVisible == true) {
            var temp = this.view.lblSelectedDateValue.text;
            freqDay = this.view.lblEvery2Weeks.text + " " + temp.substring(0, 3);
        } else {
            freqDay = this.view.lblSelectedDateValue.text + " " + this.view.lblOfEveryMonth.text;
        }
        var SavingsPotMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SavingsPotModule");
        SavingsPotMod.presentationController.navToGoalVerifyDetails(date, freqDay, "frmCreateGoalVerifyDetails");
    },
    navigateCustomBack: function() {
        var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
        SavingsPotMod.commonFunctionForgoBack();
    },
    onCancelClick: function() {
        var navManager = applicationManager.getNavigationManager();
        var previousForm = navManager.getPreviousForm();
        var SavingsPotMod = applicationManager.getModulesPresentationController("SavingsPotModule");
        if (previousForm === "frmCreateGoalVerifyDetails") {
            SavingsPotMod.commonFunctionForNavigation("frmCreateGoalVerifyDetails");
        } else {
            SavingsPotMod.clearCreateData();
            var createBudgetPermission = applicationManager.getConfigurationManager().checkUserPermission("BUDGET_POT_CREATE");
            (createBudgetPermission) ? navManager.navigateTo("frmSavingsType"): navManager.navigateTo("frmMySavingsPot");
        }
    }
});
define("SavingsPotModule/frmCreateSavingsGoalFrequencyDateControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_df70c4056d464c0da9469750c0e1de77: function AS_Form_df70c4056d464c0da9469750c0e1de77(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_g3e014e2d09c48ea874e39f26f53fb0b: function AS_Form_g3e014e2d09c48ea874e39f26f53fb0b(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_b3ccdd45f51c444197ddc07b70d439c2: function AS_BarButtonItem_b3ccdd45f51c444197ddc07b70d439c2(eventobject) {
        var self = this;
        this.onCancelClick();
    }
});
define("SavingsPotModule/frmCreateSavingsGoalFrequencyDateController", ["SavingsPotModule/userfrmCreateSavingsGoalFrequencyDateController", "SavingsPotModule/frmCreateSavingsGoalFrequencyDateControllerActions"], function() {
    var controller = require("SavingsPotModule/userfrmCreateSavingsGoalFrequencyDateController");
    var controllerActions = ["SavingsPotModule/frmCreateSavingsGoalFrequencyDateControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
