define("ChequeManagementModule/userfrmDeliveryTypeController", {
    initActions: function() {
        var scope = this;
        var currentFormObject = kony.application.getCurrentForm();
        var currentForm = currentFormObject.id;
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        this.view.btnContinue.onClick = scope.continueAction;
        this.view.flxMailingAddress.onClick = scope.mailAddressOnclick;
        this.view.flxBranchAddress.onClick = scope.branchAddressOnclick;
        this.view.customHeader.btnRight.onClick = scope.cancelOnClick;
        this.view.customHeader.flxBack.onTouchEnd = scope.navigateBack;
    },
    preShow: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        } else {
            this.view.flxHeader.isVisible = true;
        }
        var presentation = applicationManager.getModulesPresentationController("ChequeManagementModule");
        presentation.getUserAddress();
        this.view.lblMailingAddressValue.text = presentation.address;
        if (presentation.deliveryType === "Self PickUp") {
            this.view.imgRadio.src = "radiobuttoninactive.png";
            this.view.imgRadio1.src = "radiobtn.png";
            this.view.flxMailingAddress.skin = "slFbox";
            this.view.flxBranchAddress.skin = "sknflxffffffa0a0a0";
        } else {
            this.view.imgRadio.src = "radiobtn.png";
            this.view.imgRadio1.src = "radiobuttoninactive.png";
            this.view.flxMailingAddress.skin = "sknflxffffffa0a0a0";
            this.view.flxBranchAddress.skin = "slFbox";
        }
    },
    postShow: function() {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    continueAction: function() {
        var presentation = applicationManager.getModulesPresentationController("ChequeManagementModule");
        if (this.view.imgRadio.src === "radiobtn.png") {
            presentation.deliveryType = "Mailing Address";
        } else {
            presentation.deliveryType = "Self PickUp";
        }
        presentation.commonFunctionForNavigation("frmCMReview");
    },
    mailAddressOnclick: function() {
        var presentation = applicationManager.getModulesPresentationController("ChequeManagementModule");
        presentation.deliveryType = "Mailing Address";
        this.view.imgRadio.src = "radiobtn.png";
        this.view.imgRadio1.src = "radiobuttoninactive.png";
        this.view.flxMailingAddress.skin = "sknflxffffffa0a0a0";
        this.view.flxBranchAddress.skin = "slFbox";
    },
    branchAddressOnclick: function() {
        var presentation = applicationManager.getModulesPresentationController("ChequeManagementModule");
        presentation.deliveryType = "Self PickUp";
        this.view.imgRadio.src = "radiobuttoninactive.png";
        this.view.imgRadio1.src = "radiobtn.png";
        this.view.flxMailingAddress.skin = "slFbox";
        this.view.flxBranchAddress.skin = "sknflxffffffa0a0a0";
    },
    cancelOnClick: function() {
        var presentation = applicationManager.getModulesPresentationController("ChequeManagementModule");
        presentation.commonCancel();
    },
    navigateBack: function() {
        //     var navMan=applicationManager.getNavigationManager();
        //     navMan.goBack();
        try {
            var ntf = new kony.mvc.Navigation(kony.application.getPreviousForm().id);
            ntf.navigate();
        } catch (err) {}
    },
    navigateCustomBack: function() {
        try {
            var ntf = new kony.mvc.Navigation(kony.application.getPreviousForm().id);
            ntf.navigate();
        } catch (err) {}
    }
});
define("ChequeManagementModule/frmDeliveryTypeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_a80d650bda984f00889f5cb899ff5d40: function AS_Form_a80d650bda984f00889f5cb899ff5d40(eventobject) {
        var self = this;
        this.initActions();
    },
    AS_Form_b086283269034746857f5d86dd9aab6e: function AS_Form_b086283269034746857f5d86dd9aab6e(eventobject) {
        var self = this;
        this.postShow();
    },
    AS_Form_e94a608a9b22429d860a258cf05378fd: function AS_Form_e94a608a9b22429d860a258cf05378fd(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_b45b04c47aea4944b19ca485cf3848f2: function AS_BarButtonItem_b45b04c47aea4944b19ca485cf3848f2(eventobject) {
        var self = this;
        this.navigateCustomBack();
    },
    AS_BarButtonItem_iedf3adda30843089429dbdf9919f06f: function AS_BarButtonItem_iedf3adda30843089429dbdf9919f06f(eventobject) {
        var self = this;
        this.cancelOnClick();
    }
});
define("ChequeManagementModule/frmDeliveryTypeController", ["ChequeManagementModule/userfrmDeliveryTypeController", "ChequeManagementModule/frmDeliveryTypeControllerActions"], function() {
    var controller = require("ChequeManagementModule/userfrmDeliveryTypeController");
    var controllerActions = ["ChequeManagementModule/frmDeliveryTypeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
