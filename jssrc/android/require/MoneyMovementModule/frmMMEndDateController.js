define("MoneyMovementModule/userfrmMMEndDateController", {
    init: function() {
        var scope = this;
        var currentFormObject = kony.application.getCurrentForm();
        var currentForm = currentFormObject.id;
        applicationManager.getPresentationFormUtility().initCommonActions(this, "CALLBACK", currentForm, scope.navigateCustomBack);
    },
    navigateCustomBack: function() {
        var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
        moneyMovementModule.commonFunctionForgoBack();
    },
    preShow: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
        this.view.customCalendar.preShow();
        if (this.view.customCalendar.selectedDate === '') {
            this.view.btnContinue.setEnabled(false);
        } else {
            this.view.btnContinue.setEnabled(true);
        }
        this.view.customCalendar.selectedDate = '';
        this.view.customCalendar.firstEnabledDate = "";
        var forUtility = applicationManager.getFormatUtilManager();
        // this.view.customCalendar.isCalendarEndDateFrm = true;
        this.view.customCalendar.triggerContinueAction = false;
        //this.view.customCalendar.isOnceTransaction = false;
        this.view.customCalendar.updateDateBullets();
        //  this.view.customCalendar.unHighlightAllDays();
        var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
        var startdate = moneyMovementModule.getTransObject();
        var formattedDate = this.getTomorrowsDate(startdate.scheduledDate);
        this.view.customCalendar.setFirstEnabledDate(formattedDate);
        if (startdate.endCalendarDate !== null && startdate.endCalendarDate !== undefined && startdate.endCalendarDate !== "") {
            this.setDateToCalendar(startdate.endCalendarDate);
        } else if (startdate.frequencyEndDate !== null && startdate.frequencyEndDate !== undefined && startdate.frequencyEndDate !== "") {
            this.setDateToCalendar(startdate.frequencyEndDate);
        } else {
            this.view.customCalendar.setSelectedDate(startdate.frequencyEndDate);
        }
        this.view.customCalendar.resetCal();
        this.initActions();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    initActions: function() {
        var scope = this;
        this.view.btnContinue.onClick = this.continueAction;
        this.view.customHeader.flxBack.onClick = this.navigateCustomBack;
        this.view.customHeader.btnRight.onClick = function() {
            scope.cancelOnClick();
        }
    },
    setDateToCalendar: function(dateString) {
        var forUtility = applicationManager.getFormatUtilManager();
        var configManager = applicationManager.getConfigurationManager();
        var frequencyEndDate = forUtility.getDateObjectFromCalendarString(dateString, configManager.getCalendarDateFormat());
        frequencyEndDate = forUtility.getFormattedSelectedDate(frequencyEndDate);
        this.view.customCalendar.setSelectedDate(frequencyEndDate);
    },
    cancelOnClick: function() {
        var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
        moneyMovementModule.cancelCommon();
    },
    continueAction: function() {
        var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
        moneyMovementModule.processEndDate(this.view.customCalendar.getSelectedDate());
    },
    getTomorrowsDate: function(scheduledDate) {
        var dateObject = new Date(scheduledDate);
        dateObject.setDate(dateObject.getDate() + 1);
        var month = dateObject.getMonth() + 1;
        var date = dateObject.getDate();
        if (month < 10) {
            month = "0" + month;
        }
        if (date < 10) {
            date = "0" + date;
        }
        return month + "/" + date + "/" + dateObject.getFullYear();
    }
});
define("MoneyMovementModule/frmMMEndDateControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_a4302bfb08c54f6086513b6c9b12d627: function AS_Form_a4302bfb08c54f6086513b6c9b12d627(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_c48e962bf79d4ce694e26ae53610be7c: function AS_Form_c48e962bf79d4ce694e26ae53610be7c(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_df0046c324374d21854caf507c51f23f: function AS_BarButtonItem_df0046c324374d21854caf507c51f23f(eventobject) {
        var self = this;
        this.navigateCustomBack();
    },
    AS_BarButtonItem_f884aae1acf340dfb431ca9495f16e87: function AS_BarButtonItem_f884aae1acf340dfb431ca9495f16e87(eventobject) {
        var self = this;
        this.cancelOnClick();
    }
});
define("MoneyMovementModule/frmMMEndDateController", ["MoneyMovementModule/userfrmMMEndDateController", "MoneyMovementModule/frmMMEndDateControllerActions"], function() {
    var controller = require("MoneyMovementModule/userfrmMMEndDateController");
    var controllerActions = ["MoneyMovementModule/frmMMEndDateControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
