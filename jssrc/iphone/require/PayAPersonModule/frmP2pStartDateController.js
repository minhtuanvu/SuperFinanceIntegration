define("PayAPersonModule/userfrmP2pStartDateController", {
    freq: '',
    startDateKey: '',
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    onNavigate: function(obj) {
        if (obj === undefined) {
            return;
        }
        this.startDateKey = obj;
        if (this.startDateKey === "oneTime") {
            this.view.customHeader.lblLocateUs.text = "Send Date";
        } else {
            this.view.customHeader.lblLocateUs.text = "Start Date";
        }
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
        this.view.customCalendar.preShow();
        this.view.customCalendar.selectedDate = '';
        this.view.customCalendar.triggerContinueAction = true;
        //  this.view.customCalendar.isCalendarEndDateFrm = false;
        //  this.view.customCalendar.isOnceTransaction = false;
        this.view.customCalendar.updateDateBullets();
        //  this.view.customCalendar.unHighlightAllDays();
        this.view.customCalendar.setFirstEnabledDate();
        this.initActions();
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        var data = payeeMod.presentationController.getP2PObject();
        this.freq = data.frequencyType;
        //       if(this.freq==="Once"){
        //         this.view.customCalendar.isOnceTransaction = true;
        //       }
        this.duration = data.duration;
        var forUtility = applicationManager.getFormatUtilManager();
        if (data.scheduledCalendarDate !== null && data.scheduledCalendarDate !== undefined && data.scheduledCalendarDate !== "") {
            this.setDateToCalendar(data.scheduledCalendarDate);
        } else if (data.scheduledDate !== null && data.scheduledDate !== undefined && data.scheduledDate !== "") {
            this.setDateToCalendar(data.scheduledDate);
        } else {
            var startDate = new Date();
            var startDateFeed1 = (startDate.getMonth() + 1) + "/" + startDate.getDate() + "/" + startDate.getFullYear();
            this.view.customCalendar.setFirstEnabledDate(startDateFeed1);
            // this.view.customCalendar.setSelectedDateValue('');
        }
        if (this.freq === "Once") {
            //this.view.customHeader.lblLocateUs.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.sendDateCaps");
            this.view.customHeader.lblLocateUs.text = "Send Date";
            this.view.btnContinue.isVisible = true;
            //  this.view.customCalendar.isOnceTransaction = true;
            this.view.customCalendar.triggerContinueAction = false;
        } else {
            //this.view.customHeader.lblLocateUs.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.startDateCaps");
            this.view.customHeader.lblLocateUs.text = "Start Date";
            this.view.btnContinue.isVisible = false;
            this.view.customCalendar.triggerContinueAction = true;
        }
        if (this.view.customCalendar.selectedDate === '') {
            this.view.btnContinue.setEnabled(false);
        } else {
            this.view.btnContinue.setEnabled(true);
        }
        this.view.customCalendar.resetCal();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    initActions: function() {
        var scope = this;
        this.view.customHeader.flxBack.onClick = this.backAction;
        this.view.btnContinue.onClick = this.continueAction;
        this.view.customHeader.btnRight.onClick = function() {
            var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
            payeeMod.presentationController.cancelCommon();
        };
    },
    setDateToCalendar: function(dateString) {
        var forUtility = applicationManager.getFormatUtilManager();
        var configManager = applicationManager.getConfigurationManager();
        var scheduledDate = forUtility.getDateObjectFromCalendarString(dateString, configManager.getCalendarDateFormat());
        scheduledDate = forUtility.getFormattedSelectedDate(scheduledDate);
        this.view.customCalendar.setSelectedDate(scheduledDate);
    },
    backAction: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    continueAction: function() {
        if (this.freq === "Once" || this.duration === applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.RecurrenceNo")) {
            var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
            payeeMod.presentationController.transferScheduledDate(this.view.customCalendar.getSelectedDate());
        } else {
            var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
            payeeMod.presentationController.transferScheduledStrtDate(this.view.customCalendar.getSelectedDate());
        }
    }
});
define("PayAPersonModule/frmP2pStartDateControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_bfe3dd5789184e1c918189148880f2e3: function AS_Form_bfe3dd5789184e1c918189148880f2e3(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_a73e6b9370a34ad1ac6e8fc9a34b0f10: function AS_Form_a73e6b9370a34ad1ac6e8fc9a34b0f10(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_e43bfa1f23624addb70732b551aaebcf: function AS_BarButtonItem_e43bfa1f23624addb70732b551aaebcf(eventobject) {
        var self = this;
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        payeeMod.presentationController.commonFunctionForNavigation("frmTransfers");
    }
});
define("PayAPersonModule/frmP2pStartDateController", ["PayAPersonModule/userfrmP2pStartDateController", "PayAPersonModule/frmP2pStartDateControllerActions"], function() {
    var controller = require("PayAPersonModule/userfrmP2pStartDateController");
    var controllerActions = ["PayAPersonModule/frmP2pStartDateControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
