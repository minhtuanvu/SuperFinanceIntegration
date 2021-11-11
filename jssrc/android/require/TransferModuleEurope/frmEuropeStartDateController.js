define("TransferModuleEurope/userfrmEuropeStartDateController", {
    freq: '',
    init: function() {
        var scope = this;
        var currentFormObject = kony.application.getCurrentForm();
        var currentForm = currentFormObject.id;
        applicationManager.getPresentationFormUtility().initCommonActions(this, "CALLBACK", currentForm, scope.navigateCustomBack);
    },
    navigateCustomBack: function() {
        var transMod = applicationManager.getModulesPresentationController("TransferModule");
        transMod.commonFunctionForgoBack();
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
        var transMod = applicationManager.getModulesPresentationController("TransferModule");
        this.view.customCalendar.selectedDate = '';
        this.view.customCalendar.firstEnabledDate = transMod.serverDate;
        this.view.customCalendar.triggerContinueAction = true;
        this.view.customCalendar.updateDateBullets();
        this.view.customCalendar.setFirstEnabledDate();
        var startdate = transMod.getTransObject();
        this.view.customCalendar.lastEnabledDate = "";
        this.view.customCalendar.setLastEnabledDate();
        var navMan = applicationManager.getNavigationManager();
        var data = navMan.getCustomInfo("frmEuropeStartDate");
        this.freq = (!kony.sdk.isNullOrUndefined(data)) ? data.freq : null;
        if (startdate.scheduledCalendarDate !== null && startdate.scheduledCalendarDate !== undefined && startdate.scheduledCalendarDate !== "") {
            this.setDateToCalendar(startdate.scheduledCalendarDate);
        } else if (startdate.scheduledDate !== null && startdate.scheduledDate !== undefined && startdate.scheduledDate !== "") {
            this.setDateToCalendar(startdate.scheduledDate);
        } else {
            var startDate = new Date();
            var startDateFeed1 = (startDate.getMonth() + 1) + "/" + startDate.getDate() + "/" + startDate.getFullYear();
            this.view.customCalendar.setFirstEnabledDate(startDateFeed1);
        }
        if (this.freq === "Once" || startdate.frequencyType === "Once") {
            this.view.customHeader.lblLocateUs.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.sendDate");
            this.view.btnContinue.isVisible = true;
            this.view.customCalendar.triggerContinueAction = false;
        } else {
            this.view.customHeader.lblLocateUs.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.StartDate");
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
        var transMod = applicationManager.getModulesPresentationController("TransferModule");
        transMod.cancelCommon();
    },
    continueAction: function() {
        var transMod = applicationManager.getModulesPresentationController("TransferModule");
        var transObj = transMod.getTransObject();
        if (this.freq === "Once" || transObj.frequencyType === "Once") {
            if (transMod.isLoansAccountType && this.isSelectedDateGreaterThanDueDate()) {
                this.showCustomAlertMessage();
            } else {
                transMod.processStartDate(this.view.customCalendar.getSelectedDate());
            }
        } else if (this.freq === "NofRR") {
            transMod.navigateToRecurrence(this.view.customCalendar.getSelectedDate());
        } else {
            transMod.navigateToEndDate(this.view.customCalendar.getSelectedDate());
        }
    },
    showCustomAlertMessage: function() {
        var scope = this;
        var transMod = applicationManager.getModulesPresentationController("TransferModule");
        var basicProperties = {
            "message": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Loans.WishToContinue"),
            "alertType": constants.ALERT_TYPE_CONFIRMATION,
            "alertTitle": "",
            "yesLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.continue"),
            "noLabel": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.Cancel"),
            "alertIcon": "",
            "alertHandler": function(response) {
                if (response) {
                    transMod.processStartDate(scope.view.customCalendar.getSelectedDate());
                }
            }
        };
        applicationManager.getPresentationUtility().showAlertMessage(basicProperties, {});
    },
    isSelectedDateGreaterThanDueDate: function() {
        var transMod = applicationManager.getModulesPresentationController("TransferModule");
        var transObj = transMod.getTransObject();
        var forUtility = applicationManager.getFormatUtilManager();
        var dueDateObject = forUtility.getDateObjectfromString(transObj.nextPaymentDate);
        var selectedDateObject = forUtility.getDateObjectFromCalendarString(this.view.customCalendar.getSelectedDate(), "MM/DD/YYYY");
        return selectedDateObject > dueDateObject;
    }
});
define("TransferModuleEurope/frmEuropeStartDateControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_b3b86cb88da6464d87897d6fb4e034eb: function AS_Form_b3b86cb88da6464d87897d6fb4e034eb(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_c7d212c165ce46cda338b5d745a4bd25: function AS_Form_c7d212c165ce46cda338b5d745a4bd25(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_d77e92ef6b4c45b5b7cb5195f3ef8735: function AS_BarButtonItem_d77e92ef6b4c45b5b7cb5195f3ef8735(eventobject) {
        var self = this;
        this.navigateCustomBack();
    },
    AS_BarButtonItem_f138f4a070da48d48eb1d7e10a460a5c: function AS_BarButtonItem_f138f4a070da48d48eb1d7e10a460a5c(eventobject) {
        var self = this;
        this.cancelOnClick();
    }
});
define("TransferModuleEurope/frmEuropeStartDateController", ["TransferModuleEurope/userfrmEuropeStartDateController", "TransferModuleEurope/frmEuropeStartDateControllerActions"], function() {
    var controller = require("TransferModuleEurope/userfrmEuropeStartDateController");
    var controllerActions = ["TransferModuleEurope/frmEuropeStartDateControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
