define("TransferModule/userfrmWireTransferCurrencyController", {
    init: function() {},
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        this.setFlowAction();
    },
    setFlowAction: function() {},
});
define("TransferModule/frmWireTransferCurrencyControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_cb8af18e98b7464e94126fe38538862f: function AS_Form_cb8af18e98b7464e94126fe38538862f(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_d93ef22042924fa2865aa4d0b5c9bd63: function AS_Form_d93ef22042924fa2865aa4d0b5c9bd63(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_fe5f601db62545dda4ec64a24c9318e6: function AS_BarButtonItem_fe5f601db62545dda4ec64a24c9318e6(eventobject) {
        var self = this;
        var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        transferModule.presentationController.cancelCommon();
    }
});
define("TransferModule/frmWireTransferCurrencyController", ["TransferModule/userfrmWireTransferCurrencyController", "TransferModule/frmWireTransferCurrencyControllerActions"], function() {
    var controller = require("TransferModule/userfrmWireTransferCurrencyController");
    var controllerActions = ["TransferModule/frmWireTransferCurrencyControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
