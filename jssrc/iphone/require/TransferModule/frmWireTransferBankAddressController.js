define("TransferModule/userfrmWireTransferBankAddressController", {
    timerCounter: 0,
    init: function() {},
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
    },
});
define("TransferModule/frmWireTransferBankAddressControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_f8d89a2175704f2181f0b39f0dc9072e: function AS_Form_f8d89a2175704f2181f0b39f0dc9072e(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_d230d4dd93d943ea9badc7b411c0ddd9: function AS_Form_d230d4dd93d943ea9badc7b411c0ddd9(eventobject) {
        var self = this;
        this.preShow();
    },
});
define("TransferModule/frmWireTransferBankAddressController", ["TransferModule/userfrmWireTransferBankAddressController", "TransferModule/frmWireTransferBankAddressControllerActions"], function() {
    var controller = require("TransferModule/userfrmWireTransferBankAddressController");
    var controllerActions = ["TransferModule/frmWireTransferBankAddressControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
