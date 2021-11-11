define("TransferModule/userfrmTransfersEndDateController", {
    freq: '',
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
        this.view.customCalendar.selectedDate = '';
        this.view.customCalendar.firstEnabledDate = "";
        // this.view.customCalendar.isCalendarEndDateFrm = true;
        this.view.customCalendar.triggerContinueAction = false;
        //this.view.customCalendar.isOnceTransaction = false;
        this.view.customCalendar.updateDateBullets();
        //  this.view.customCalendar.unHighlightAllDays();
        var transModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var startdate = transModPresentationController.getTransObject();
        kony.print("startDate.scheduledDate  -  " + startdate.scheduledDate);
        this.view.customCalendar.setFirstEnabledDate(startdate.scheduledDate);
        var forUtility = applicationManager.getFormatUtilManager();
        if (startdate.endCalendarDate !== null && startdate.endCalendarDate !== undefined && startdate.endCalendarDate !== "") {
            var strdate = new Date(startdate.scheduledCalendarDate);
            var enddate = new Date(startdate.endCalendarDate);
            if (enddate > strdate) {
                this.setDateToCalendar(startdate.endCalendarDate);
            }
        } else if (startdate.frequencyEndDate !== null && startdate.frequencyEndDate !== undefined && startdate.frequencyEndDate !== "") {
            var strdate = new Date(startdate.scheduledDate);
            var enddate = new Date(startdate.frequencyEndDate);
            if (enddate > strdate) {
                this.setDateToCalendar(startdate.frequencyEndDate);
            }
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
        this.view.customHeader.flxBack.onClick = function() {
            var navMan = applicationManager.getNavigationManager();
            navMan.goBack();
        }
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
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transferModulePresentationController.cancelCommon();
    },
    continueAction: function() {
        var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transferModulePresentationController.transferScheduledEndDate(this.view.customCalendar.getSelectedDate());
    }
});
define("TransferModule/frmTransfersEndDateControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_ebf2806e210d4206ab5ec3a7d6859b5d: function AS_Button_ebf2806e210d4206ab5ec3a7d6859b5d(eventobject) {
        var self = this;
        var transModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transModPresentationController.commonFunctionForNavigation("frmTransferConfirmation");
    },
    AS_Form_jdffaabd6454467b9dfa318600496092: function AS_Form_jdffaabd6454467b9dfa318600496092(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_ib2f771f2e6344f99b50fe84f9b16250: function AS_Form_ib2f771f2e6344f99b50fe84f9b16250(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_d27a47509d6c47e2a5d401f557d74c88: function AS_BarButtonItem_d27a47509d6c47e2a5d401f557d74c88(eventobject) {
        var self = this;
        this.cancelOnClick();
    }
});
define("TransferModule/frmTransfersEndDateController", ["TransferModule/userfrmTransfersEndDateController", "TransferModule/frmTransfersEndDateControllerActions"], function() {
    var controller = require("TransferModule/userfrmTransfersEndDateController");
    var controllerActions = ["TransferModule/frmTransfersEndDateControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
