define("TransferModule/userfrmWireTransferAccountCountryController", {
    segmentData: null,
    init: function() {},
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
            this.view.flxMainContainer.top = "0dp";
        }
    },
});
define("TransferModule/frmWireTransferAccountCountryControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_d4ae49e604564587af3f4db7c69411e3: function AS_Form_d4ae49e604564587af3f4db7c69411e3(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_a4305cca857c4610986bd30abb0ede44: function AS_Form_a4305cca857c4610986bd30abb0ede44(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_ff366adcf1004dc58e7c1052359936fc: function AS_BarButtonItem_ff366adcf1004dc58e7c1052359936fc(eventobject) {
        var self = this;
    }
});
define("TransferModule/frmWireTransferAccountCountryController", ["TransferModule/userfrmWireTransferAccountCountryController", "TransferModule/frmWireTransferAccountCountryControllerActions"], function() {
    var controller = require("TransferModule/userfrmWireTransferAccountCountryController");
    var controllerActions = ["TransferModule/frmWireTransferAccountCountryControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
