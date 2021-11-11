define("CardLessModule/userfrmCardLessContactTypeController", {
    preShow: function() {
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        this.view.btnPhoneNumber.onClick = this.btnPhoneNumberOnClick;
        this.view.btnEmail.onClick = this.btnEmailOnClick;
        this.view.customHeader.btnRight.onClick = this.btnRightOnClick;
        this.renderTitleBar();
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
        } else {
            this.view.flxHeader.isVisible = true;
        }
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    flxBackOnClick: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    btnRightOnClick: function() {
        var cLMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
        cLMod.presentationController.cancelCommon();
    },
    renderTitleBar: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === 'iPhone') {
            this.view.flxHeader.setVisibility(false);
        }
    },
    btnPhoneNumberOnClick: function() {
        var cLMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
        cLMod.presentationController.setCardlessContactType("phone");
    },
    btnEmailOnClick: function() {
        var cLMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
        cLMod.presentationController.setCardlessContactType("email");
    }
});
define("CardLessModule/frmCardLessContactTypeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_ea34e4399b2d40d8bece16a5cf8f3449: function AS_Form_ea34e4399b2d40d8bece16a5cf8f3449(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_ae488ece5bb9459bb0b6577ace9d47d3: function AS_Form_ae488ece5bb9459bb0b6577ace9d47d3(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_cda77476b44548f89c8851f90dfe921f: function AS_BarButtonItem_cda77476b44548f89c8851f90dfe921f(eventobject) {
        var self = this;
        this.btnRightOnClick();
    }
});
define("CardLessModule/frmCardLessContactTypeController", ["CardLessModule/userfrmCardLessContactTypeController", "CardLessModule/frmCardLessContactTypeControllerActions"], function() {
    var controller = require("CardLessModule/userfrmCardLessContactTypeController");
    var controllerActions = ["CardLessModule/frmCardLessContactTypeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
