define("CampaignManagement/userfrmMaturityInstructionsController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
        this.initActions();
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        var index = payeeMod.presentationController.getSelectedFrequencyIndex();
        this.view.segFrequency.rowFocusSkin = "sknFlxf9f9f9";
        this.view.segFrequency.retainSelection = false;
        this.view.customHeader.btnRight.onClick = this.cancelOnClick;
        if (index !== undefined && index !== null && index !== "") {
            this.view.segFrequency.selectedRowIndex = [0, index];
            this.view.segFrequency.retainSelection = true;
        }
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    initActions: function() {
        var scope = this;
        this.view.segFrequency.onRowClick = function() {
            scope.segmentRowClick();
        }
        this.view.customHeader.flxBack.onClick = function() {
            var navManager = applicationManager.getNavigationManager();
            navManager.goBack();
        }
    },
    segmentRowClick: function() {
        var index = this.view.segFrequency.data[this.view.segFrequency.selectedIndex[1]].lblFrequency;
        applicationManager.getPresentationUtility().showLoadingScreen();
        var campaignMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CampaignManagement");
        campaignMod.presentationController.navToDepositsToAccountDeposits(index);
    },
    cancelOnClick: function() {
        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountMod.presentationController.commonFunctionForNavigation("frmDashboardAggregated");
    }
});
define("CampaignManagement/frmMaturityInstructionsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_i02f0673192e4468950657955c84c0a4: function AS_Form_i02f0673192e4468950657955c84c0a4(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_hb557ff8e1594f33a64c9f9fba262053: function AS_Form_hb557ff8e1594f33a64c9f9fba262053(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_fdfee87ed0b54437ac8680292c30cc37: function AS_BarButtonItem_fdfee87ed0b54437ac8680292c30cc37(eventobject) {
        var self = this;
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        payeeMod.presentationController.cancelCommon();
    }
});
define("CampaignManagement/frmMaturityInstructionsController", ["CampaignManagement/userfrmMaturityInstructionsController", "CampaignManagement/frmMaturityInstructionsControllerActions"], function() {
    var controller = require("CampaignManagement/userfrmMaturityInstructionsController");
    var controllerActions = ["CampaignManagement/frmMaturityInstructionsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
