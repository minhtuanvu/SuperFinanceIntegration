define("userfrmEStmtTermsAndConditionsController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preshow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        this.view.customHeader.flxBack.onClick = this.onCloseTnC;
        var data = applicationManager.getNavigationManager().getCustomInfo("frmEStmtTermsAndConditions");
        // this.view.rtxTermsConditionsValue.text = data;
        this.view.brsrTerms.htmlString = data;
        this.view.brsrTerms.enableParentScrollingWhenReachToBoundaries = false;
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    onCloseTnC: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    }
});
define("frmEStmtTermsAndConditionsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_a485171479834cd2b22d0b30a3222734: function AS_Form_a485171479834cd2b22d0b30a3222734(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_geed104e2bac4038ac013197e80ee241: function AS_Form_geed104e2bac4038ac013197e80ee241(eventobject) {
        var self = this;
        this.preshow();
    },
    AS_BarButtonItem_ga6a31182678414087f227d37d41bcfc: function AS_BarButtonItem_ga6a31182678414087f227d37d41bcfc(eventobject) {
        var self = this;
        this.onCloseTnC();
    }
});
define("frmEStmtTermsAndConditionsController", ["userfrmEStmtTermsAndConditionsController", "frmEStmtTermsAndConditionsControllerActions"], function() {
    var controller = require("userfrmEStmtTermsAndConditionsController");
    var controllerActions = ["frmEStmtTermsAndConditionsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
