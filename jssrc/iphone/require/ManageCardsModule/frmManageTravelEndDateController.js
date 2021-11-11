define("ManageCardsModule/userfrmManageTravelEndDateController", {
    freq: '',
    navOption: "",
    TravelPlanDetailsRequest: {},
    TravelPlanDetailsUpdate: {},
    init: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            loggerManager.log("#### start : " + currentForm + " : init ####");
            applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        } catch (exc) {
            loggerManager.log("#### in catch " + JSON.stringify(exc) + " ####");
        }
    },
    preShow: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            loggerManager.log("#### start : " + currentForm + " : preShow ####");
            if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
                this.view.flxHeader.isVisible = false;
            }
            if (this.view.customCalendar.selectedDate === '') {
                this.view.btnContinue.setEnabled(false);
            } else {
                this.view.btnContinue.setEnabled(true);
            }
            this.view.customCalendar.preShow();
            this.view.customCalendar.selectedDate = '';
            var custInfo = navManager.getCustomInfo("frmManageTravelEndDate");
            this.navOption = custInfo.option;
            this.TravelPlanDetailsRequest = custInfo.data;
            this.TravelPlanDetailsUpdate = JSON.parse(JSON.stringify(this.TravelPlanDetailsRequest));
            var startDate = new Date(this.TravelPlanDetailsRequest.startDate);
            var startDateFeed1 = (startDate.getMonth() + 1) + "/" + startDate.getDate() + "/" + startDate.getFullYear();
            //   this.view.customCalendar.isCalendarEndDateFrm = true;
            this.view.customCalendar.triggerContinueAction = false;
            //   this.view.customCalendar.isOnceTransaction = false;
            //   this.view.customCalendar.unHighlightAllDays();
            this.view.customCalendar.updateDateBullets();
            this.view.customCalendar.setFirstEnabledDate(startDateFeed1);
            if (!kony.sdk.isNullOrUndefined(this.TravelPlanDetailsRequest.endDate)) {
                var selectedEndDateObject = new Date(this.TravelPlanDetailsRequest.endDate);
                var selectedEndDate = (selectedEndDateObject.getMonth() + 1) + "/" + selectedEndDateObject.getDate() + "/" + selectedEndDateObject.getFullYear();
                this.view.customCalendar.setSelectedDate(selectedEndDate);
            } else {
                this.view.customCalendar.setSelectedDate(startDateFeed1);
                this.view.customCalendar.setSelectedDate(startDateFeed1);
                //  this.view.customCalendar.clearHighlightedDateLabel();
            }
            this.view.customCalendar.resetCal();
            this.initActions();
            if (this.view.customCalendar.selectedDate === '') {
                this.view.btnContinue.setEnabled(false);
            } else {
                this.view.btnContinue.setEnabled(true);
            }
            this.goBackInfo();
        } catch (exc) {
            loggerManager.log("#### in catch " + JSON.stringify(exc) + " ####");
        }
    },
    goBackInfo: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            if (!kony.sdk.isNullOrUndefined(this.TravelPlanDetailsRequest.endDate)) {
                this.TravelPlanDetailsRequest.endDate = null;
            }
            loggerManager.log("#### start : " + currentForm + " : preShow ####");
            if (this.navOption === "edit") {
                navManager.setCustomInfo("frmManageTravelStartDate", {
                    "option": "edit",
                    "data": this.TravelPlanDetailsRequest
                });
                //manageCardsModule.presentationController.commonFunctionForNavigation("frmManageTravelStartDate");
            } else if (this.navOption === "add") {
                navManager.setCustomInfo("frmManageTravelStartDate", {
                    "option": "add",
                    "data": this.TravelPlanDetailsRequest
                });
            }
        } catch (exc) {
            loggerManager.log("#### in catch " + JSON.stringify(exc) + " ####");
        }
    },
    initActions: function() {
        this.view.btnContinue.onClick = this.continueAction;
        this.view.customHeader.flxBack.onClick = this.backOnClick;
        this.view.customHeader.btnRight.onClick = this.cancelOnClick;
    },
    backOnClick: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            loggerManager.log("#### start : " + currentForm + " : backOnClick ####");
            navManager.goBack();
        } catch (exc) {
            loggerManager.log("#### in catch " + JSON.stringify(exc) + " ####");
        }
    },
    cancelOnClick: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            loggerManager.log("#### start : " + currentForm + " : cancelOnClick ####");
            var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
            if (this.navOption === "edit") {
                navManager.setCustomInfo("frmManageTravelDetails", this.TravelPlanDetailsRequest);
                manageCardsModule.presentationController.commonFunctionForNavigation("frmManageTravelDetails");
            } else if (this.navOption === "add") {
                manageCardsModule.presentationController.commonFunctionForNavigation("frmManageTravelPlans");
            }
        } catch (exc) {
            loggerManager.log("#### in catch " + JSON.stringify(exc) + " ####");
        }
    },
    continueAction: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            loggerManager.log("#### start : " + currentForm + " : continueAction ####");
            var dateArr = this.view.customCalendar.getSelectedDate().split("/");
            loggerManager.log("got date from Calendar:" + this.view.customCalendar.selectedDate);
            var dd = dateArr[1];
            var mm = dateArr[0];
            var yyyy = dateArr[2];
            var dummy = yyyy + "-" + mm + "-" + dd;
            this.TravelPlanDetailsUpdate.endDate = dummy;
            loggerManager.log("end date in frmManageTravelEndDateController: " + dummy);
            loggerManager.log("travelDetailsUpdate in frmManageTravelEndDateController: " + JSON.stringify(this.TravelPlanDetailsUpdate));
            var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
            if (this.navOption === "edit") {
                loggerManager.log("frmManageTravelEndDate ManageCardsModule Going to Presentation for Updating data");
                loggerManager.log("TravelDetailsObjectRequest: " + JSON.stringify(this.TravelPlanDetailsRequest));
                loggerManager.log("TravelDetailsObjectUpdated: " + JSON.stringify(this.TravelPlanDetailsUpdate));
                manageCardsModule.presentationController.updateTravelPlan(this.TravelPlanDetailsUpdate, this.successCallbackForUpdate, this.failureCallbackForUpdate);
            } else if (this.navOption === "add") {
                navManager.setCustomInfo("frmManageTravelDestination", {
                    "option": "add",
                    "data": this.TravelPlanDetailsUpdate
                });
                manageCardsModule.presentationController.navigateToTravelDestination(); //navigator for Destination to check data
            }
        } catch (exc) {
            loggerManager.log("#### in catch " + JSON.stringify(exc) + " ####");
        }
    },
    successCallbackForUpdate: function(resp) {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            loggerManager.log("#### start : " + currentForm + " : successCallbackForUpdate ####");
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            this.TravelPlanDetailsUpdate.showToast = true;
            this.TravelPlanDetailsUpdate.isSuccess = true;
            this.TravelPlanDetailsUpdate.message = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.cardManage.updateTravelPlanSuccess");
            navManager.setCustomInfo("frmManageTravelDetails", this.TravelPlanDetailsUpdate);
            var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
            manageCardsModule.presentationController.commonFunctionForNavigation("frmManageTravelDetails");
        } catch (exc) {
            loggerManager.log("#### in catch " + JSON.stringify(exc) + " ####");
        }
    },
    failureCallbackForUpdate: function(err) {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            loggerManager.log("#### start : " + currentForm + " : failureCallbackForUpdate ####");
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            loggerManager.log("error: came to  failureCallbackForUpdate: " + JSON.stringify(err));
            this.TravelPlanDetailsRequest.showToast = true;
            this.TravelPlanDetailsRequest.isSuccess = false;
            this.TravelPlanDetailsRequest.message = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.cardManage.updateTravelPlanFailure");
            navManager.setCustomInfo("frmManageTravelDetails", this.TravelPlanDetailsRequest);
            var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
            manageCardsModule.presentationController.commonFunctionForNavigation("frmManageTravelDetails");
        } catch (exc) {
            loggerManager.log("#### in catch " + JSON.stringify(exc) + " ####");
        }
    }
});
define("ManageCardsModule/frmManageTravelEndDateControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_e1d284b6841742c4b337715fad704323: function AS_Form_e1d284b6841742c4b337715fad704323(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_e18ed42b070545e4bb8cfdb8bcb2a77f: function AS_Form_e18ed42b070545e4bb8cfdb8bcb2a77f(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_i689a7f1a04748e1bef12f0234c838b3: function AS_BarButtonItem_i689a7f1a04748e1bef12f0234c838b3(eventobject) {
        var self = this;
        this.cancelOnClick();
    }
});
define("ManageCardsModule/frmManageTravelEndDateController", ["ManageCardsModule/userfrmManageTravelEndDateController", "ManageCardsModule/frmManageTravelEndDateControllerActions"], function() {
    var controller = require("ManageCardsModule/userfrmManageTravelEndDateController");
    var controllerActions = ["ManageCardsModule/frmManageTravelEndDateControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
