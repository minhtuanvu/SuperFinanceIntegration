define("MoneyMovementModule/userfrmMMVerifyP2PDetailsController", {
    init: function() {
        var scope = this;
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "CALLBACK", currentForm, scope.navigateCustomBack);
    },
    navigateCustomBack: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    },
    preShow: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
        this.initActions();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    initActions: function() {
        var moneyMovementPresentationController = applicationManager.getModulesPresentationController("MoneyMovementModule");
        var navMan = applicationManager.getNavigationManager();
        this.view.customHeader.flxBack.onClick = this.navigateCustomBack;
        this.view.customHeader.btnRight.onClick = this.cancelOnClick;
    },
    cancelOnClick: function() {
        var moneyMovementModule = applicationManager.getModulesPresentationController("MoneyMovementModule");
        moneyMovementModule.cancelCommon();
    }
});
define("MoneyMovementModule/frmMMVerifyP2PDetailsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_bd6a88931a2d47b8a15f60e97ad7b6d9: function AS_Form_bd6a88931a2d47b8a15f60e97ad7b6d9(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_acace3970f5147bdb57ec405edd4794e: function AS_Form_acace3970f5147bdb57ec405edd4794e(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_h1ea97ddefc74fa7b26f24409085e102: function AS_BarButtonItem_h1ea97ddefc74fa7b26f24409085e102(eventobject) {
        var self = this;
        this.navigateCustomBack();
    },
    AS_BarButtonItem_i7bdb084660f49d59a4ff4446c91a875: function AS_BarButtonItem_i7bdb084660f49d59a4ff4446c91a875(eventobject) {
        var self = this;
        this.cancelOnClick();
    }
});
define("MoneyMovementModule/frmMMVerifyP2PDetailsController", ["MoneyMovementModule/userfrmMMVerifyP2PDetailsController", "MoneyMovementModule/frmMMVerifyP2PDetailsControllerActions"], function() {
    var controller = require("MoneyMovementModule/userfrmMMVerifyP2PDetailsController");
    var controllerActions = ["MoneyMovementModule/frmMMVerifyP2PDetailsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
