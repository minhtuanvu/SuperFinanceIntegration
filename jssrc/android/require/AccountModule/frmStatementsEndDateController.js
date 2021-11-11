define("AccountModule/userfrmStatementsEndDateController", ["CommonUtilities"], function(CommonUtilities) {
    return {
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
            this.view.customCalendar.selectedDate = '';
            this.view.customCalendar.triggerContinueAction = false;
            var allowedPreviousMonths = parseInt(applicationManager.getConfigurationManager().getCombinedStatementsAllowedPeriod());
            // var startDate=new Date();
            var startDate = CommonUtilities.getServerDateObject();
            startDate.setMonth(startDate.getMonth() - allowedPreviousMonths);
            var startDateFeed = (startDate.getMonth() + 1) + "/" + startDate.getDate() + "/" + startDate.getFullYear();
            this.view.customCalendar.setFirstEnabledDate(startDateFeed);
            // var endDate=new Date();
            var endDate = CommonUtilities.getServerDateObject();
            endDate.setDate(endDate.getDate() + 1);
            var endDateFeed = (endDate.getMonth() + 1) + "/" + endDate.getDate() + "/" + endDate.getFullYear();
            var selectedDateFeed = (endDate.getMonth() + 1) + "/" + (endDate.getDate() - 1) + "/" + endDate.getFullYear();
            this.view.customCalendar.setLastEnabledDate(endDateFeed);
            this.view.customCalendar.setSelectedDate(selectedDateFeed);
            this.view.customCalendar.updateDateBullets();
            this.view.customCalendar.resetCal();
            this.initActions();
            applicationManager.getPresentationUtility().dismissLoadingScreen();
        },
        initActions: function() {
            var scope = this;
            this.view.btnContinue.onClick = this.continueAction;
            this.view.customHeader.flxBack.onClick = this.navigateCustomBack;
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
            navMan.setCustomInfo("CombinedStatementEndDate", selectedDateFormat);
            navMan.navigateTo("frmCombinedStatement");
        }
    }
});
define("AccountModule/frmStatementsEndDateControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_f48b67a2b43e4aaea89867548bc6d46d: function AS_Form_f48b67a2b43e4aaea89867548bc6d46d(eventobject) {
        var self = this;
        return self.init.call(this);
    },
    AS_Form_a5d2ab94780f4435a9ee7269a829339c: function AS_Form_a5d2ab94780f4435a9ee7269a829339c(eventobject) {
        var self = this;
        return self.preShow.call(this);
    },
});
define("AccountModule/frmStatementsEndDateController", ["AccountModule/userfrmStatementsEndDateController", "AccountModule/frmStatementsEndDateControllerActions"], function() {
    var controller = require("AccountModule/userfrmStatementsEndDateController");
    var controllerActions = ["AccountModule/frmStatementsEndDateControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
