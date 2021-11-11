define("MoneyMovementModule/userfrmMMActivateP2PTransferController", {
    init: function() {
        var scope = this;
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "CALLBACK", currentForm, scope.navigateCustomBack);
    },
    navigateCustomBack: function() {
        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountMod.presentationController.showDashboard();
    },
    preShow: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
        this.initActions();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    initActions: function() {
        var scope = this;
        var navMan = applicationManager.getNavigationManager();
        this.view.customHeader.flxBack.onClick = this.navigateCustomBack;
        this.view.customHeader.btnRight.onClick = this.cancelOnClick;
    },
    cancelOnClick: function() {
        var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
        moneyMovementModule.cancelCommon();
    },
});
define("MoneyMovementModule/frmMMActivateP2PTransferControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_c6de5715f5e14cd7932454252c9a9bb9: function AS_Form_c6de5715f5e14cd7932454252c9a9bb9(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_f5d55a6f11bf4be7b7794612f8670de9: function AS_Form_f5d55a6f11bf4be7b7794612f8670de9(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_bec1e2f13a8c4862a5a0db0d7218b0af: function AS_BarButtonItem_bec1e2f13a8c4862a5a0db0d7218b0af(eventobject) {
        var self = this;
        this.cancelOnClick();
    }
});
define("MoneyMovementModule/frmMMActivateP2PTransferController", ["MoneyMovementModule/userfrmMMActivateP2PTransferController", "MoneyMovementModule/frmMMActivateP2PTransferControllerActions"], function() {
    var controller = require("MoneyMovementModule/userfrmMMActivateP2PTransferController");
    var controllerActions = ["MoneyMovementModule/frmMMActivateP2PTransferControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
