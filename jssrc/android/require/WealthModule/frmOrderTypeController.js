define("WealthModule/userfrmOrderTypeController", {
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.setVisibility(false);
        }
        this.initActions();
        this.view.btnSave.onClick = this.continueOnClick;
        this.view.customHeader.flxBack.onTouchEnd = this.onBack;
        this.view.flxMarket.onClick = this.onClickMarket;
        this.view.flxLimit.onClick = this.onClickLimit;
        this.view.flxStopLoss.onClick = this.onClickStopLoss;
        this.view.flxStopLimit.onClick = this.onClickStopLimit;
    },
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm, scope.navigateCustomBack);
    },
    postShow: function() {
        var navMan = applicationManager.getNavigationManager();
        var previousForm = navMan.getCustomInfo("frmInstrumentOrder");
        if (previousForm.orderType === "Market") {
            this.onClickMarket();
        } else if (previousForm.orderType === "Stop Loss") {
            this.onClickStopLoss();
        } else if (previousForm.orderType === "Stop Limit") {
            this.onClickStopLimit();
        } else {
            this.onClickLimit();
        }
    },
    onBack: function() {
        var navigationMan = applicationManager.getNavigationManager();
        navigationMan.goBack();
    },
    initActions: function() {
        //To be added
    },
    onClickMarket: function() {
        this.view.flxMarket.skin = "sknflxGreen0ba407a4468e045";
        this.view.imgSelectMarket.setVisibility(true);
        this.view.flxLimit.skin = "sknflxBlueE0de121f9cae5843";
        this.view.imgSelectLimit.setVisibility(false);
        this.view.flxStopLoss.skin = "sknflxBlueE0de121f9cae5843";
        this.view.imgSelectStopLoss.setVisibility(false);
        this.view.flxStopLimit.skin = "sknflxBlueE0de121f9cae5843";
        this.view.imgSelectStopLimit.setVisibility(false);
    },
    onClickLimit: function() {
        this.view.flxMarket.skin = "sknflxBlueE0de121f9cae5843";
        this.view.imgSelectMarket.setVisibility(false);
        this.view.flxLimit.skin = "sknflxGreen0ba407a4468e045";
        this.view.imgSelectLimit.setVisibility(true);
        this.view.flxStopLoss.skin = "sknflxBlueE0de121f9cae5843";
        this.view.imgSelectStopLoss.setVisibility(false);
        this.view.flxStopLimit.skin = "sknflxBlueE0de121f9cae5843";
        this.view.imgSelectStopLimit.setVisibility(false);
    },
    onClickStopLoss: function() {
        this.view.flxMarket.skin = "sknflxBlueE0de121f9cae5843";
        this.view.imgSelectMarket.setVisibility(false);
        this.view.flxLimit.skin = "sknflxBlueE0de121f9cae5843";
        this.view.imgSelectLimit.setVisibility(false);
        this.view.flxStopLoss.skin = "sknflxGreen0ba407a4468e045";
        this.view.imgSelectStopLoss.setVisibility(true);
        this.view.flxStopLimit.skin = "sknflxBlueE0de121f9cae5843";
        this.view.imgSelectStopLimit.setVisibility(false);
    },
    onClickStopLimit: function() {
        this.view.flxMarket.skin = "sknflxBlueE0de121f9cae5843";
        this.view.imgSelectMarket.setVisibility(false);
        this.view.flxLimit.skin = "sknflxBlueE0de121f9cae5843";
        this.view.imgSelectLimit.setVisibility(false);
        this.view.flxStopLoss.skin = "sknflxBlueE0de121f9cae5843";
        this.view.imgSelectStopLoss.setVisibility(false);
        this.view.flxStopLimit.skin = "sknflxGreen0ba407a4468e045";
        this.view.imgSelectStopLimit.setVisibility(true);
    },
    continueOnClick: function() {
        scope_WealthPresentationController.instrumentOrder = true;
        var orderType;
        var navManager = applicationManager.getNavigationManager();
        var WealthMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("WealthModule");
        if (this.view.imgSelectMarket.isVisible == true) {
            orderType = this.view.lblMarket.text;
        } else if (this.view.imgSelectLimit.isVisible == true) {
            orderType = this.view.lblLimit.text;
        } else if (this.view.imgSelectStopLoss.isVisible == true) {
            orderType = this.view.lblStopLoss.text;
        } else {
            orderType = this.view.lblStopLimit.text;
        }
        var orderTypeDetails = navManager.getCustomInfo("frmInstrumentOrder");
        orderTypeDetails.orderType = orderType;
        if (orderTypeDetails.orderModeType !== undefined || orderTypeDetails.orderModeType !== null) {
            orderTypeDetails.orderModeType = orderType;
        }
        navManager.setCustomInfo("frmInstrumentOrder", orderTypeDetails);
        navManager.navigateTo('frmInstrumentOrder');
    }
});
define("WealthModule/frmOrderTypeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_fa5d6b6eded3488d98900eaf79937f33: function AS_Form_fa5d6b6eded3488d98900eaf79937f33(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_d78378af1c6941c49246e4951b0f9b4f: function AS_Form_d78378af1c6941c49246e4951b0f9b4f(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_c400f89ac6f248b1a87373ff91d87bcf: function AS_Form_c400f89ac6f248b1a87373ff91d87bcf(eventobject) {
        var self = this;
        this.preShow();
    }
});
define("WealthModule/frmOrderTypeController", ["WealthModule/userfrmOrderTypeController", "WealthModule/frmOrderTypeControllerActions"], function() {
    var controller = require("WealthModule/userfrmOrderTypeController");
    var controllerActions = ["WealthModule/frmOrderTypeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
