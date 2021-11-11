define("TransferModule/userfrmWireTransferNoRecipientController", {
    init: function() {},
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        this.setFlowActions();
        this.view.flxSegRecipientDetails.isVisible = false;
        this.view.segCards.isVisible = false;
    },
    setFlowActions: function() {
        var scope = this;
        this.view.flxDropdown.onClick = function() {
            scope.view.segCards.isVisible = true;
        };
        this.view.segCards.onRowClick = function() {
            scope.view.segCards.isVisible = false;
        };
        this.view.imgCheckbox.onTouchEnd = function() {
            scope.toggleChcekBox();
        };
        this.view.btnActivate.onClick = function() {
            scope.navToNoRecipient();
        };
        this.view.btnCancel.onClick = function() {
            scope.navToMakeTransfer();
        };
    },
    toggleChcekBox: function() {
        var self = this;
        if (this.view.imgCheckbox.src === "checkbox.png") self.view.imgCheckbox.src = "checkboxempty.png";
        else self.view.imgCheckbox.src = "checkbox.png";
    },
    navToNoRecipient: function() {
        var navObj = new kony.mvc.Navigation("frmWireTransferNoRecipient");
        navObj.navigate();
    },
    navToMakeTransfer: function() {},
});
define("TransferModule/frmWireTransferNoRecipientControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_ec433e71e36548bcac10582eb0fdd07a: function AS_Button_ec433e71e36548bcac10582eb0fdd07a(eventobject) {
        var self = this;
        var transModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transModPresentationController.commonFunctionForNavigation("frmTransfers");
    },
    AS_Button_h974cabf3df5409b9341c26c127f6926: function AS_Button_h974cabf3df5409b9341c26c127f6926(eventobject) {
        var self = this;
        var transModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        transModPresentationController.commonFunctionForNavigation("frmTransfers");
    },
    AS_Form_c34bdc3ab71c440b8be48f01eb79b11b: function AS_Form_c34bdc3ab71c440b8be48f01eb79b11b(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_fbf31f68f3514304b0a583b56ac1ab57: function AS_Form_fbf31f68f3514304b0a583b56ac1ab57(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_af3840e14a5543cc9f1826d7d643ea83: function AS_BarButtonItem_af3840e14a5543cc9f1826d7d643ea83(eventobject) {
        var self = this;
        this.cancelOnClick();
    }
});
define("TransferModule/frmWireTransferNoRecipientController", ["TransferModule/userfrmWireTransferNoRecipientController", "TransferModule/frmWireTransferNoRecipientControllerActions"], function() {
    var controller = require("TransferModule/userfrmWireTransferNoRecipientController");
    var controllerActions = ["TransferModule/frmWireTransferNoRecipientControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
