define("CampaignManagement/userfrmFinancialHelpController", {
    rates: null,
    info: null,
    features: null,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        var scopeObj = this;
        var navMan = applicationManager.getNavigationManager();
        this.view.customHeader.btnRight.onClick = this.onCancelPress;
        this.view.btnAcceptContinue.onClick = this.createAccount;
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        this.view.customHeader.flxBack.onClick = function() {
            var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
            accountMod.presentationController.commonFunctionForNavigation("frmDashboardAggregated");
        };
    },
    onCancelPress: function() {
        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountMod.presentationController.commonFunctionForNavigation("frmDashboardAggregated");
    },
    createAccount: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var campMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CampaignManagement");
        campMod.presentationController.createFinancialHelpAccount();
    },
    bindViewError: function(msg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
        this.cleardobfields();
    },
});
define("CampaignManagement/frmFinancialHelpControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_f75250b545004b0e95c7341e55cbffbc: function AS_FlexContainer_f75250b545004b0e95c7341e55cbffbc(eventobject) {
        var self = this;
        this.onClickOfBack();
    },
    AS_Form_a629653a531c4c0b897e0892f3c488dd: function AS_Form_a629653a531c4c0b897e0892f3c488dd(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_g05a2214097f4d2ea4cf69b47f4ec9eb: function AS_Form_g05a2214097f4d2ea4cf69b47f4ec9eb(eventobject) {
        var self = this;
        this.preShow();
    }
});
define("CampaignManagement/frmFinancialHelpController", ["CampaignManagement/userfrmFinancialHelpController", "CampaignManagement/frmFinancialHelpControllerActions"], function() {
    var controller = require("CampaignManagement/userfrmFinancialHelpController");
    var controllerActions = ["CampaignManagement/frmFinancialHelpControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
