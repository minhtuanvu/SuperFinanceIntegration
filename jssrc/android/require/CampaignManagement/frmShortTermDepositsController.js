define("CampaignManagement/userfrmShortTermDepositsController", {
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
        this.view.btnFeatures.onClick = this.btnFeaturesOnClick;
        this.view.btnCharges.onClick = this.btnChargesonClick;
        this.view.btnContinue.onClick = this.navToLoanAmount;
        this.view.customHeader.btnRight.onClick = this.onCancelClick;
        this.view.lblAccNoValue.text = applicationManager.getConfigurationManager().getCurrencyCode() + "10,000";
        var data = navMan.getCustomInfo("frmNAOProductDetails");
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        this.view.customHeader.imgBack.src = "closewhite.png";
        this.view.customHeader.flxBack.onClick = function() {};
    },
    btnFeaturesOnClick: function() {
        this.view.flxFeaturesSelected.isVisible = true;
        this.view.flxChargesSelected.isVisible = false;
        this.view.flxFeatures.isVisible = true;
        this.view.btnFeatures.skin = "sknBtnf6f6f6424242SSPLight24px";
        this.view.btnCharges.skin = "sknBtnBgD8D8D8SSPLight30pxBrd24px";
        this.view.btnFeatures.focusSkin = "sknBtnf6f6f6424242SSPLight24px";
        this.view.btnCharges.focusSkin = "sknBtnBgD8D8D8SSPLight30pxBrd24px";
        this.view.flxAmountandCharges.isVisible = false;
        this.view.flxInfoSelected.isVisible = false;
        this.view.segProductDetails.setVisibility(true);
    },
    btnChargesonClick: function() {
        this.view.flxFeaturesSelected.isVisible = false;
        this.view.flxChargesSelected.isVisible = true;
        this.view.flxFeatures.isVisible = false;
        this.view.btnFeatures.skin = "sknBtnBgD8D8D8SSPLight30pxBrd24px";
        this.view.btnCharges.skin = "sknBtnf6f6f6424242SSPLight24px";
        this.view.btnFeatures.focusSkin = "sknBtnBgD8D8D8SSPLight30pxBrd24px";
        this.view.btnCharges.focusSkin = "sknBtnf6f6f6424242SSPLight24px";
        this.view.flxAmountandCharges.isVisible = true;
        this.view.flxInfoSelected.isVisible = false;
        this.view.segProductDetails.setVisibility(false);
    },
    navToLoanAmount: function() {
        var data = {
            "duration": this.view.lblAccTypeVal.text,
            "interestRate": this.view.lblCardIssueDateVal.text
        };
        applicationManager.getPresentationUtility().showLoadingScreen();
        var campaignMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CampaignManagement");
        campaignMod.presentationController.navToFromAccountDeposits(data);
    },
    onCancelClick: function() {
        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountMod.presentationController.commonFunctionForNavigation("frmDashboardAggregated");
    }
});
define("CampaignManagement/frmShortTermDepositsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_b8c406170c694d02bb38269f4b76a805: function AS_Form_b8c406170c694d02bb38269f4b76a805(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_h6508f5fd40241a78d1c011ef5612bcf: function AS_Form_h6508f5fd40241a78d1c011ef5612bcf(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_ef588552756b4f64ad26a75739d17838: function AS_BarButtonItem_ef588552756b4f64ad26a75739d17838(eventobject) {
        var self = this;
        this.onCancelClick();
    }
});
define("CampaignManagement/frmShortTermDepositsController", ["CampaignManagement/userfrmShortTermDepositsController", "CampaignManagement/frmShortTermDepositsControllerActions"], function() {
    var controller = require("CampaignManagement/userfrmShortTermDepositsController");
    var controllerActions = ["CampaignManagement/frmShortTermDepositsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
