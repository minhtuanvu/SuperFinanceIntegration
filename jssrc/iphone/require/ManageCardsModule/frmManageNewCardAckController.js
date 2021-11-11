define("ManageCardsModule/userfrmManageNewCardAckController", {
    init: function() {
        var scope = this;
        var currentFormObject = kony.application.getCurrentForm();
        var currentForm = currentFormObject.id;
        applicationManager.getPresentationFormUtility().initCommonActions(this, "CALLBACK", currentForm);
    },
    preShow: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
        this.initActions();
        this.setupUI();
        this.setSegmentData();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    initActions: function() {
        var scope = this;
        var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
        var navMan = applicationManager.getNavigationManager();
        scope.view.btnDashboard.onClick = this.backToCardManagement;
    },
    setupUI: function() {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    setSegmentData: function() {
        var navMan = applicationManager.getNavigationManager();
        var ContextData = navMan.getCustomInfo("frmManageNewCardAck");
        var cardObj = applicationManager.getCardsManager();
        var cardobjIns = cardObj.getCardObject();
        var data = cardobjIns;
        var refno;
        refno = ContextData.orderId;
        var segData = [{
            "property": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.CM.account") + ":",
            "value": data.accountName
        }, {
            "property": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.CardMng.cardProductName") + ":",
            "value": data.cardProductName
        }, {
            "property": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.cards.nameOnCard"),
            "value": data.cardDisplayName
        }, {
            "property": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.cards.newCardReqRefNo"),
            "value": refno
        }];
        this.view.segDetails.widgetDataMap = this.getWidgetDataMap();
        this.view.segDetails.setData(segData);
    },
    getWidgetDataMap: function() {
        var map = {
            lblTitle: "property",
            lblDetails: "value",
        }
        return map;
    },
    backToCardManagement: function() {
        var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
        manageCardsModule.presentationController.cancelCommon();
    },
});
define("ManageCardsModule/frmManageNewCardAckControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_i1dde7e3df064289a702a65d6184cd27: function AS_Form_i1dde7e3df064289a702a65d6184cd27(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_cc5e872a4aed49dbb71e89c5bb3de15e: function AS_Form_cc5e872a4aed49dbb71e89c5bb3de15e(eventobject) {
        var self = this;
        this.preShow();
    }
});
define("ManageCardsModule/frmManageNewCardAckController", ["ManageCardsModule/userfrmManageNewCardAckController", "ManageCardsModule/frmManageNewCardAckControllerActions"], function() {
    var controller = require("ManageCardsModule/userfrmManageNewCardAckController");
    var controllerActions = ["ManageCardsModule/frmManageNewCardAckControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
