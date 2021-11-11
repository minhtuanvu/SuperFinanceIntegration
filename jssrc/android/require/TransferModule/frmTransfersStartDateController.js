define("TransferModule/userfrmTransfersStartDateController", {
    freq: '',
    startDateKey: '',
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
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
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
        // this.view.customCalendar.isCalendarEndDateFrm = false;
        this.view.customCalendar.triggerContinueAction = true;
        // this.view.customCalendar.isOnceTransaction = false;
        this.view.customCalendar.updateDateBullets();
        // this.view.customCalendar.unHighlightAllDays();
        this.view.customCalendar.setFirstEnabledDate();
        var transModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var startdate = transModPresentationController.getTransObject();
        var navMan = applicationManager.getNavigationManager();
        var data = navMan.getCustomInfo("frmTransfersStartDate");
        this.freq = data.freq;
        //       if(this.freq==="Once"){
        //         this.view.customCalendar.isOnceTransaction = true;
        //       }
        var info = navMan.getCustomInfo("frmTransfersDuration");
        if (info)
            if (startdate.scheduledCalendarDate !== null && startdate.scheduledCalendarDate !== undefined && startdate.scheduledCalendarDate !== "") {
                this.setDateToCalendar(startdate.scheduledCalendarDate);
            } else if (startdate.scheduledDate !== null && startdate.scheduledDate !== undefined && startdate.scheduledDate !== "") {
            this.setDateToCalendar(startdate.scheduledDate);
        } else {
            var startDate = new Date();
            var startDateFeed1 = (startDate.getMonth() + 1) + "/" + startDate.getDate() + "/" + startDate.getFullYear();
            this.view.customCalendar.setFirstEnabledDate(startDateFeed1);
            //   this.view.customCalendar.setSelectedDateValue('');
        }
        if (this.freq === "Once") {
            // this.view.customHeader.lblLocateUs.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.sendDateCaps");
            this.view.customHeader.lblLocateUs.text = "Send Date";
            this.view.btnContinue.isVisible = true;
            this.view.customCalendar.triggerContinueAction = false;
        } else {
            // this.view.customHeader.lblLocateUs.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.frequency.startDateCaps");
            this.view.customHeader.lblLocateUs.text = "Start Date";
            this.view.btnContinue.isVisible = false;
            this.view.customCalendar.triggerContinueAction = true;
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
        this.view.customHeader.flxBack.onClick = function() {
            var navMan = applicationManager.getNavigationManager();
            navMan.goBack();
        }
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
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transferModulePresentationController.cancelCommon();
    },
    backAction: function() {
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        if (this.startDateKey === "oneTime") {
            transferModulePresentationController.commonFunctionForNavigation("frmTransferFrequency");
        } else if (this.startDateKey === "recurrence") {
            transferModulePresentationController.commonFunctionForNavigation("frmTransfersRecurrence");
        } else {
            transferModulePresentationController.commonFunctionForNavigation("frmTransfersDuration");
        }
    },
    continueAction: function() {
        if (this.freq === "Once" || this.freq === "NofRR") {
            var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
            transferModulePresentationController.transferScheduledDate(this.view.customCalendar.getSelectedDate());
        } else {
            var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
            transferModulePresentationController.transferScheduledStrtDate(this.view.customCalendar.getSelectedDate());
        }
    }
});
define("TransferModule/frmTransfersStartDateControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_f294a3f773084338ae1cc4fc5706c938: function AS_Form_f294a3f773084338ae1cc4fc5706c938(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_c95a351fd0d547b1a8471dc5b1edea69: function AS_Form_c95a351fd0d547b1a8471dc5b1edea69(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_d8902f9c25a2437da0c1adb4b675d777: function AS_BarButtonItem_d8902f9c25a2437da0c1adb4b675d777(eventobject) {
        var self = this;
        this.cancelOnClick();
    }
});
define("TransferModule/frmTransfersStartDateController", ["TransferModule/userfrmTransfersStartDateController", "TransferModule/frmTransfersStartDateControllerActions"], function() {
    var controller = require("TransferModule/userfrmTransfersStartDateController");
    var controllerActions = ["TransferModule/frmTransfersStartDateControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
