define("WealthModule/userfrmScheduleDateController", {
    init: function() {
        var scope = this;
        var currentFormObject = kony.application.getCurrentForm();
        var currentForm = currentFormObject.id;
        applicationManager.getPresentationFormUtility().initCommonActions(this, "CALLBACK", currentForm, scope.navigateCustomBack);
    },
    preShow: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
        this.view.customCalendar.preShow();
        this.view.customCalendar.selectedDate = '';
        this.view.customCalendar.triggerContinueAction = false;
        var startDate = new Date();
        var todayDate = (startDate.getMonth() + 1) + "/" + startDate.getDate() + "/" + startDate.getFullYear();
        this.view.customCalendar.setFirstEnabledDate(todayDate);
        this.view.customCalendar.setSelectedDate(todayDate);
        this.initActions();
    },
    initActions: function() {
        var scope = this;
        this.view.btnContinue.onClick = this.continueAction;
        this.view.customHeader.flxBack.onClick = this.onBack;
    },
    onBack: function() {
        var navigationMan = applicationManager.getNavigationManager();
        navigationMan.goBack();
    },
    continueAction: function() {
        var navMan = applicationManager.getNavigationManager();
        var wealthMod = applicationManager.getModulesPresentationController("WealthModule");
        if (wealthMod.getVerifyFlow()) {
            navMan.navigateTo("frmConvertCurrencyVerify");
        } else {
            navMan.navigateTo("frmConvertCurrency");
        }
    },
    postShow: function() {
        //To be added
    }
});
define("WealthModule/frmScheduleDateControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_ib9251c4197d41e497f29f98f7fc4257: function AS_Form_ib9251c4197d41e497f29f98f7fc4257(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_h62bb9d7bdfa45778ee980fc91c5ee37: function AS_Form_h62bb9d7bdfa45778ee980fc91c5ee37(eventobject) {
        var self = this;
        this.preShow();
    },
});
define("WealthModule/frmScheduleDateController", ["WealthModule/userfrmScheduleDateController", "WealthModule/frmScheduleDateControllerActions"], function() {
    var controller = require("WealthModule/userfrmScheduleDateController");
    var controllerActions = ["WealthModule/frmScheduleDateControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
