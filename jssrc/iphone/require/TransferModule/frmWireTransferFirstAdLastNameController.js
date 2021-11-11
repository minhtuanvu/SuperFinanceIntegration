define("TransferModule/userfrmWireTransferFirstAdLastNameController", {
    timerCounter: 0,
    init: function() {},
    preShow: function() {
        var scope = this;
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
    },
});
define("TransferModule/frmWireTransferFirstAdLastNameControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_e20f90f3f3944ad5b97f4f0d9d2e3892: function AS_Form_e20f90f3f3944ad5b97f4f0d9d2e3892(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_b755f34c5bd24a1e9463c604f57fde29: function AS_Form_b755f34c5bd24a1e9463c604f57fde29(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_d546c529f6544267b32112fa2ab63f34: function AS_BarButtonItem_d546c529f6544267b32112fa2ab63f34(eventobject) {
        var self = this;
    }
});
define("TransferModule/frmWireTransferFirstAdLastNameController", ["TransferModule/userfrmWireTransferFirstAdLastNameController", "TransferModule/frmWireTransferFirstAdLastNameControllerActions"], function() {
    var controller = require("TransferModule/userfrmWireTransferFirstAdLastNameController");
    var controllerActions = ["TransferModule/frmWireTransferFirstAdLastNameControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
