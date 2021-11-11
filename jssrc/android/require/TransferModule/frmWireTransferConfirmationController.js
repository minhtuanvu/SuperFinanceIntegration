define("TransferModule/userfrmWireTransferConfirmationController", {
    init: function() {},
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        this.setFlowActions();
        this.view.flxSegRecipientDetails.isVisible = false;
        scope.view.segBankDetails.isVisible = false;
    },
    setFlowActions: function() {
        var scope = this;
        this.view.flxRecipientDetails.onClick = function() {
            scope.view.flxSegRecipientDetails.isVisible = true;
        };
        this.view.flxBankDetails.onClick = function() {
            scope.view.segBankDetails.isVisible = true;
        };
    },
});
define("TransferModule/frmWireTransferConfirmationControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_b1e0cc59c7a24e299d887552e0c022f9: function AS_Button_b1e0cc59c7a24e299d887552e0c022f9(eventobject) {
        var self = this;
        var transModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transModPresentationController.commonFunctionForNavigation("frmTransfers");
    },
    AS_Form_f262a437ea264c089930a51dba485d1c: function AS_Form_f262a437ea264c089930a51dba485d1c(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_a5d2a988d28942ca921fc1d290ef6a1a: function AS_Form_a5d2a988d28942ca921fc1d290ef6a1a(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_ed08cb6bb48a4ea7a0f9c76004ba5755: function AS_BarButtonItem_ed08cb6bb48a4ea7a0f9c76004ba5755(eventobject) {
        var self = this;
        this.cancelOnClick();
    }
});
define("TransferModule/frmWireTransferConfirmationController", ["TransferModule/userfrmWireTransferConfirmationController", "TransferModule/frmWireTransferConfirmationControllerActions"], function() {
    var controller = require("TransferModule/userfrmWireTransferConfirmationController");
    var controllerActions = ["TransferModule/frmWireTransferConfirmationControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
