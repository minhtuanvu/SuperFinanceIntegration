define("CampaignManagement/userfrmPersonalLoansController", {
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
        this.view.customHeader.btnRight.onClick = this.onCancelPress;
        this.view.lblAccNoValue.text = applicationManager.getConfigurationManager().getCurrencyCode() + " 10,000 ";
        var data = navMan.getCustomInfo("frmNAOProductDetails");
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        this.view.customHeader.imgBack.src = "closewhite.png";
        //     this.rates=data.rates;
        //     this.info=data.info;
        //     this.features=data.features;
        this.view.customHeader.flxBack.onClick = function() {};
    },
    btnFeaturesOnClick: function() {
        //this.view.rtxData.text=this.features;
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
        //this.view.rtxData.text=this.rates;
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
    navtoSelectProduct: function() {
        var NAOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewAccountOpeningModule");
        NAOMod.presentationController.commonFunctionForNavigation("frmNAOSelectProduct");
    },
    navToLoanAmount: function() {
        var data = {
            "duration": this.view.lblAccTypeVal.text,
            "interestRate": this.view.lblCardIssueDateVal.text
        };
        var campaignMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CampaignManagement");
        campaignMod.presentationController.navigateToLoanAmountScreen(data);
    },
    onCancelPress: function() {
        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountMod.presentationController.commonFunctionForNavigation("frmDashboardAggregated");
    }
});
define("CampaignManagement/frmPersonalLoansControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_b54b76d573b44f6e855fe28ae7f3d0f4: function AS_Form_b54b76d573b44f6e855fe28ae7f3d0f4(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_bf6a339a426b4304b9d8c93ca6344aaa: function AS_Form_bf6a339a426b4304b9d8c93ca6344aaa(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_ee5fadf9ae0e4b5daddb7a761c1429f7: function AS_BarButtonItem_ee5fadf9ae0e4b5daddb7a761c1429f7(eventobject) {
        var self = this;
        this.navtoSelectProduct();
    },
    AS_BarButtonItem_j10bc0ad3c4f401fb0bc4269f3d5c872: function AS_BarButtonItem_j10bc0ad3c4f401fb0bc4269f3d5c872(eventobject) {
        var self = this;
        this.onCancelPress();
    }
});
define("CampaignManagement/frmPersonalLoansController", ["CampaignManagement/userfrmPersonalLoansController", "CampaignManagement/frmPersonalLoansControllerActions"], function() {
    var controller = require("CampaignManagement/userfrmPersonalLoansController");
    var controllerActions = ["CampaignManagement/frmPersonalLoansControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
