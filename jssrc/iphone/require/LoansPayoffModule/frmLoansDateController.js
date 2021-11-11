define("LoansPayoffModule/userfrmLoansDateController", {
    freq: '',
    init: function() {
        var scope = this;
        var currentFormObject = kony.application.getCurrentForm();
        var currentForm = currentFormObject.id;
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    navigateCustomBack: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
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
        this.initActions();
        this.view.customCalendar.selectedDate = '';
        this.view.customCalendar.firstEnabledDate = "";
        this.view.customCalendar.triggerContinueAction = false;
        this.view.customCalendar.updateDateBullets();
        this.view.customCalendar.setFirstEnabledDate();
        var transactionManager = applicationManager.getTransactionManager();
        var startdate = transactionManager.getTransactionObject();
        this.view.customCalendar.lastEnabledDate = "";
        this.view.customCalendar.setLastEnabledDate();
        if (startdate.scheduledCalendarDate !== null && startdate.scheduledCalendarDate !== undefined && startdate.scheduledCalendarDate !== "") {
            this.setDateToCalendar(startdate.scheduledCalendarDate);
        } else if (startdate.scheduledDate !== null && startdate.scheduledDate !== undefined && startdate.scheduledDate !== "") {
            this.setDateToCalendar(startdate.scheduledDate);
        } else {
            var startDate = new Date();
            var startDateFeed1 = (startDate.getMonth() + 1) + "/" + startDate.getDate() + "/" + startDate.getFullYear();
            this.view.customCalendar.setFirstEnabledDate(startDateFeed1);
        }
        this.view.customCalendar.setLastEnabledDate();
        this.view.customCalendar.resetCal();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    initActions: function() {
        var scope = this;
        this.view.customHeader.flxBack.onClick = this.navigateCustomBack;
        this.view.btnContinue.onClick = this.continueAction;
        this.view.customHeader.btnRight.onClick = function() {
            scope.cancelOnClick();
        }
    },
    setDateToCalendar: function(dateString) {
        var forUtility = applicationManager.getFormatUtilManager();
        var configManager = applicationManager.getConfigurationManager();
        var scheduledDate = forUtility.getDateObjectFromCalendarString(dateString, configManager.getCalendarDateFormat());
        scheduledDate = forUtility.getFormattedSelectedDate(scheduledDate);
        this.view.customCalendar.setSelectedDate(scheduledDate);
    },
    cancelOnClick: function() {
        var loansMod = applicationManager.getModulesPresentationController("LoansPayoffModule");
        loansMod.cancelCommon();
    },
    continueAction: function() {
        var transactionManager = applicationManager.getTransactionManager();
        var formatUtilManager = applicationManager.getFormatUtilManager();
        var loansMod = applicationManager.getModulesPresentationController("LoansPayoffModule");
        var todaysDateObject = new Date();
        todaysDateObject.setHours(0, 0, 0, 0);
        var scheduledDate = transactionManager.getTransactionObject().scheduledDate;
        var selectedDate = this.view.customCalendar.getSelectedDate();
        var selectedDateObject = formatUtilManager.getDateObjectFromCalendarString(selectedDate, "MM/DD/YYYY");
        selectedDate = formatUtilManager.getFormatedDateString(selectedDateObject, formatUtilManager.getApplicationDateFormat());
        selectedDateObject.setHours(0, 0, 0, 0);
        if (todaysDateObject.getTime() !== selectedDateObject.getTime()) {
            transactionManager.setTransactionAttribute("isScheduled", "1");
        } else {
            transactionManager.setTransactionAttribute("isScheduled", "0");
        }
        if (selectedDate === scheduledDate) {
            loansMod.commonFunctionForNavigation("frmLoanPayoff");
        } else {
            transactionManager.setTransactionAttribute("scheduledDate", selectedDate);
            loansMod.navigateToLoansPayoff();
        }
    }
});
define("LoansPayoffModule/frmLoansDateControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_a40931d01e2f47c08357d2a5d7748b4e: function AS_Form_a40931d01e2f47c08357d2a5d7748b4e(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_e64426ccdffd4eff847d8864daff0602: function AS_Form_e64426ccdffd4eff847d8864daff0602(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_bc8acf7505f047a4bcaddc45cfea4d8f: function AS_BarButtonItem_bc8acf7505f047a4bcaddc45cfea4d8f(eventobject) {
        var self = this;
        this.navigateCustomBack();
    },
    AS_BarButtonItem_iab5328b3d39498ebe39a41680ed16e9: function AS_BarButtonItem_iab5328b3d39498ebe39a41680ed16e9(eventobject) {
        var self = this;
        this.cancelOnClick();
    }
});
define("LoansPayoffModule/frmLoansDateController", ["LoansPayoffModule/userfrmLoansDateController", "LoansPayoffModule/frmLoansDateControllerActions"], function() {
    var controller = require("LoansPayoffModule/userfrmLoansDateController");
    var controllerActions = ["LoansPayoffModule/frmLoansDateControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
