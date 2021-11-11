define("TransferModule/userfrmWireTransferAccountTypeController", {
    init: function() {},
    frmPreShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
    }
});
define("TransferModule/frmWireTransferAccountTypeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_d05e9b2811244629a218458633ee4429: function AS_Form_d05e9b2811244629a218458633ee4429(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_fe09a4bc352a44f69274563246ab4e1f: function AS_Form_fe09a4bc352a44f69274563246ab4e1f(eventobject) {
        var self = this;
        this.frmPreShow();
    },
    AS_BarButtonItem_icffd69add454fd7b1107ade97d0f886: function AS_BarButtonItem_icffd69add454fd7b1107ade97d0f886(eventobject) {
        var self = this;
    }
});
define("TransferModule/frmWireTransferAccountTypeController", ["TransferModule/userfrmWireTransferAccountTypeController", "TransferModule/frmWireTransferAccountTypeControllerActions"], function() {
    var controller = require("TransferModule/userfrmWireTransferAccountTypeController");
    var controllerActions = ["TransferModule/frmWireTransferAccountTypeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
