define("TransferModule/userfrmWireTransferRecipientInfoController", {
    init: function() {},
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
    },
});
define("TransferModule/frmWireTransferRecipientInfoControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_baea1ed04d1b491caac4854ec41cc658: function AS_Form_baea1ed04d1b491caac4854ec41cc658(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_b97235cf491f48fa8827e8c45cac6458: function AS_Form_b97235cf491f48fa8827e8c45cac6458(eventobject) {
        var self = this;
        this.preShow();
    },
});
define("TransferModule/frmWireTransferRecipientInfoController", ["TransferModule/userfrmWireTransferRecipientInfoController", "TransferModule/frmWireTransferRecipientInfoControllerActions"], function() {
    var controller = require("TransferModule/userfrmWireTransferRecipientInfoController");
    var controllerActions = ["TransferModule/frmWireTransferRecipientInfoControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
