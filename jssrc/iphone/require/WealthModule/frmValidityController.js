define("WealthModule/userfrmValidityController", {
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.setVisibility(false);
        }
        this.initActions();
        this.view.btnSave.onClick = this.continueOnClick;
        this.view.customHeader.flxBack.onTouchEnd = this.onBack;
        this.view.flxDayOrder.onClick = this.onClickDayOrder;
        this.view.flxGoodTill.onClick = this.onClickGoodTill;
    },
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm, scope.navigateCustomBack);
    },
    postShow: function() {
        var navMan = applicationManager.getNavigationManager();
        var previousForm = navMan.getCustomInfo("frmInstrumentOrder");
        if (previousForm.validity === "GTC" || previousForm.validity === "Good Till Canceled") {
            this.onClickGoodTill();
        } else {
            this.onClickDayOrder();
        }
    },
    onBack: function() {
        var navigationMan = applicationManager.getNavigationManager();
        navigationMan.goBack();
    },
    initActions: function() {
        //To be added
    },
    onClickDayOrder: function() {
        this.view.flxDayOrder.skin = "sknflxGreen0ba407a4468e045";
        this.view.imgSelectDayOrder.setVisibility(true);
        this.view.flxGoodTill.skin = "sknflxBlueE0de121f9cae5843";
        this.view.imgSelectGoodTill.setVisibility(false);
    },
    onClickGoodTill: function() {
        this.view.flxDayOrder.skin = "sknflxBlueE0de121f9cae5843";
        this.view.imgSelectDayOrder.setVisibility(false);
        this.view.flxGoodTill.skin = "sknflxGreen0ba407a4468e045";
        this.view.imgSelectGoodTill.setVisibility(true);
    },
    continueOnClick: function() {
        var validity;
        var navManager = applicationManager.getNavigationManager();
        var WealthMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("WealthModule");
        if (this.view.imgSelectDayOrder.isVisible == true) {
            validity = this.view.lblDayOrder.text;
        } else {
            validity = this.view.lblGoodTill.text;
        }
        var validityDetails = navManager.getCustomInfo("frmInstrumentOrder");
        validityDetails.validity = validity;
        navManager.setCustomInfo("frmInstrumentOrder", validityDetails);
        navManager.navigateTo('frmInstrumentOrder');
    }
});
define("WealthModule/frmValidityControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_a689b96a7f88456e8a1a87d7c3e8c97a: function AS_Form_a689b96a7f88456e8a1a87d7c3e8c97a(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_gccd6fc81ae047c5baf69608579572bf: function AS_Form_gccd6fc81ae047c5baf69608579572bf(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_a5ddaab84ca64c8fbe78d0351e0457a7: function AS_Form_a5ddaab84ca64c8fbe78d0351e0457a7(eventobject) {
        var self = this;
        this.preShow();
    }
});
define("WealthModule/frmValidityController", ["WealthModule/userfrmValidityController", "WealthModule/frmValidityControllerActions"], function() {
    var controller = require("WealthModule/userfrmValidityController");
    var controllerActions = ["WealthModule/frmValidityControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
