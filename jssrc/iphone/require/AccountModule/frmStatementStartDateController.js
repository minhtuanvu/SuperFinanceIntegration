define("AccountModule/userfrmStatementStartDateController", ["CommonUtilities"], function(CommonUtilities) {
    return {
        freq: '',
        init: function() {
            var scope = this;
            var currentFormObject = kony.application.getCurrentForm();
            var currentForm = currentFormObject.id;
            applicationManager.getPresentationFormUtility().initCommonActions(this, "CALLBACK", currentForm, scope.navigateCustomBack);
        },
        navigateCustomBack: function() {
            var navMan = applicationManager.getNavigationManager();
            navMan.goBack();
        },
        preShow: function() {
            if (kony.os.deviceInfo().name === "iPhone") {
                this.view.flxHeader.isVisible = false;
            } else {
                this.view.flxHeader.isVisible = true;
            }
            this.view.customCalendar.preShow();
            if (this.view.customCalendar.selectedDate === '') {
                this.view.btnContinue.setEnabled(false);
            } else {
                this.view.btnContinue.setEnabled(true);
            }
            this.initActions();
            this.view.customCalendar.selectedDate = '';
            this.view.customCalendar.updateDateBullets();
            var allowedPreviousMonths = parseInt(applicationManager.getConfigurationManager().getCombinedStatementsAllowedPeriod());
            //var startDate=new Date();
            var startDate = CommonUtilities.getServerDateObject();
            startDate.setMonth(startDate.getMonth() - allowedPreviousMonths);
            var startDateFeed = (startDate.getMonth() + 1) + "/" + startDate.getDate() + "/" + startDate.getFullYear();
            this.view.customCalendar.setFirstEnabledDate(startDateFeed);
            //var endDate=new Date();
            var endDate = CommonUtilities.getServerDateObject();
            endDate.setDate(endDate.getDate() + 1);
            var endDateFeed = (endDate.getMonth() + 1) + "/" + endDate.getDate() + "/" + endDate.getFullYear();
            this.view.customCalendar.setLastEnabledDate(endDateFeed);
            this.view.customHeader.lblLocateUs.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.StartDate");
            this.view.btnContinue.isVisible = true;
            this.view.customCalendar.triggerContinueAction = false;
            this.view.customCalendar.currYear = endDate.getFullYear();
            this.view.customCalendar.currMonth = endDate.getMonth();
            this.view.customCalendar.resetCal();
            applicationManager.getPresentationUtility().dismissLoadingScreen();
        },
        initActions: function() {
            var scope = this;
            this.view.customHeader.flxBack.onClick = this.navigateCustomBack;
            this.view.btnContinue.onClick = this.continueAction;
            this.view.customHeader.btnRight.onClick = function() {
                scope.cancelOnClick();
            }
        },
        cancelOnClick: function() {
            var navMan = applicationManager.getNavigationManager();
            navMan.goBack();
        },
        continueAction: function() {
            var formattedDate = this.view.customCalendar.getSelectedDate();
            var selectedDate = new Date(formattedDate);
            var selectedDateFormat = (selectedDate.getMonth() + 1) + "/" + selectedDate.getDate() + "/" + selectedDate.getFullYear();
            var navMan = applicationManager.getNavigationManager();
            navMan.setCustomInfo("CombinedStatementStartDate", selectedDateFormat);
            navMan.navigateTo("frmCombinedStatement");
        },
    }
});
define("AccountModule/frmStatementStartDateControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_e6cd82c17a9543608ac8785c84b3a8d8: function AS_Form_e6cd82c17a9543608ac8785c84b3a8d8(eventobject) {
        var self = this;
        return self.init.call(this);
    },
    AS_Form_g46a68e8b3a94f70a9bbce538dbf54e3: function AS_Form_g46a68e8b3a94f70a9bbce538dbf54e3(eventobject) {
        var self = this;
        return self.preShow.call(this);
    },
});
define("AccountModule/frmStatementStartDateController", ["AccountModule/userfrmStatementStartDateController", "AccountModule/frmStatementStartDateControllerActions"], function() {
    var controller = require("AccountModule/userfrmStatementStartDateController");
    var controllerActions = ["AccountModule/frmStatementStartDateControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
