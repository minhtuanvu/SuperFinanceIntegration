define("TransferModule/userfrmWireTransferNickNameController", {
    init: function() {},
    preShowUiSettings: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
    },
});
define("TransferModule/frmWireTransferNickNameControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_fc2d6c0abf704ead9e7bc827fcd8b3cc: function AS_Form_fc2d6c0abf704ead9e7bc827fcd8b3cc(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_a4dfd52aebb048959bc914fe464d4d21: function AS_Form_a4dfd52aebb048959bc914fe464d4d21(eventobject) {
        var self = this;
        this.preShowUiSettings();
    }
});
define("TransferModule/frmWireTransferNickNameController", ["TransferModule/userfrmWireTransferNickNameController", "TransferModule/frmWireTransferNickNameControllerActions"], function() {
    var controller = require("TransferModule/userfrmWireTransferNickNameController");
    var controllerActions = ["TransferModule/frmWireTransferNickNameControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
