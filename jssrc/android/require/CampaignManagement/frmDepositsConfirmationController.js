define("CampaignManagement/userfrmDepositsConfirmationController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
        this.view.flxFrequencyType.setVisibility(false);
        this.view.flxEndDate.setVisibility(false);
        this.view.flxRecurrence.setVisibility(false);
        this.view.flxTransferFrequency.setVisibility(false);
        this.view.flxTransferDate.setVisibility(false);
        this.view.flxStartDate.setVisibility(false);
        this.view.flxCheckBox.onClick = this.toggleCheckBox;
        this.view.btntermsandconditions.onClick = this.navToTNC;
        this.setData();
        this.initActions();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    initActions: function() {
        var scope = this;
        this.view.customHeader.flxBack.onClick = function() {
            var navManager = applicationManager.getNavigationManager();
            navManager.goBack();
        }
        this.view.customHeader.btnRight.onClick = function() {
            scope.cancelOnClick();
        }
        this.view.btnContinue.onClick = this.continueOnClick;
    },
    cancelOnClick: function() {
        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountMod.presentationController.commonFunctionForNavigation("frmDashboardAggregated");
    },
    setData: function() {
        var campaignMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CampaignManagement");
        var data = campaignMod.presentationController.getData();
        this.view.lblFromAccountValue.text = applicationManager.getConfigurationManager().getCurrencyCode() + " " + data[3].value;
        var intAmount = this.calculateInterestAmount(data[1].value, data[3].value);
        var totalAmt = this.calculateTotalAmount(data[3].value, intAmount);
        this.view.segDetails.widgetDataMap = {
            lblTitle: "key",
            lblValue: "value"
        };
        this.segData = [];
        var tempData = {
            "key": "From Account",
            "value": data[2].value.nickName
        };
        this.segData.push(tempData);
        tempData = {
            "key": "Duration",
            "value": data[0].value
        };
        this.segData.push(tempData);
        tempData = {
            "key": "Interest Rate",
            "value": data[1].value
        };
        this.segData.push(tempData);
        tempData = {
            "key": "Interest Amount",
            "value": applicationManager.getConfigurationManager().getCurrencyCode() + " " + intAmount
        };
        this.segData.push(tempData);
        tempData = {
            "key": "Total Maturity Amount",
            "value": applicationManager.getConfigurationManager().getCurrencyCode() + " " + totalAmt //900$"
        };
        this.segData.push(tempData);
        tempData = {
            "key": "Maturity Instructions",
            "value": data[4].value
        };
        this.segData.push(tempData);
        tempData = {
            "key": "Interest/Principal to be Credited to",
            "value": data[5].value.nickName
        };
        this.segData.push(tempData);
        this.view.segDetails.setData(this.segData);
    },
    calculateInterestAmount: function(rateOfInterest, amount) {
        var principalAmt = amount;
        principalAmt = Number(principalAmt.replace(/[^0-9.]/g, ''));
        var interest = rateOfInterest;
        interest = Number(interest.replace(/[^0-9.]/g, ''));
        var intAmount = (principalAmt * (interest / 100)).toFixed(2);
        return intAmount;
    },
    calculateTotalAmount: function(amount, interestAmount) {
        var principalAmt = amount;
        principalAmt = Number(principalAmt.replace(/[^0-9.]/g, ''));
        return (Number(principalAmt) + Number(interestAmount)).toFixed(2);
    },
    continueOnClick: function() {
        //      applicationManager.getPresentationUtility().showLoadingScreen();
        //     var description=this.view.txtDescription.text;
        //     var transferModulePresentationController = applicationManager.getModulesPresentationController("TransferModule");
        //         transferModulePresentationController.makeATransfer(description); 
        applicationManager.getPresentationUtility().showLoadingScreen();
        var campaignMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CampaignManagement");
        campaignMod.presentationController.createDeposit();
        // campaignMod.presentationController.createDeposit("frmDepositsAcknowledgement");
    },
    toggleCheckBox: function() {
        if (this.view.imgTermsAccepted.src === "tickmarkbox.png") {
            this.view.imgTermsAccepted.src = "a.png";
            this.view.btnContinue.setEnabled(true);
            this.view.btnContinue.skin = "sknBtn0095e426pxEnabled";
        } else {
            this.view.imgTermsAccepted.src = "tickmarkbox.png";
            this.view.btnContinue.setEnabled(false);
            this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
        }
    },
    navToTNC: function() {
        var campaignMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CampaignManagement");
        campaignMod.presentationController.commonFunctionForNavigation("frmDepositTermsAndConditions");
    },
    bindViewError: function(msg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
        this.cleardobfields();
    },
});
define("CampaignManagement/frmDepositsConfirmationControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_b3bf54ef08ed4c7aaa184e43b0757758: function AS_Form_b3bf54ef08ed4c7aaa184e43b0757758(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_b6e81eb21d314fdb993becd20fb79a23: function AS_Form_b6e81eb21d314fdb993becd20fb79a23(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_b5236a69f55949cd8649286bd9382e2c: function AS_BarButtonItem_b5236a69f55949cd8649286bd9382e2c(eventobject) {
        var self = this;
        this.cancelOnClick();
    }
});
define("CampaignManagement/frmDepositsConfirmationController", ["CampaignManagement/userfrmDepositsConfirmationController", "CampaignManagement/frmDepositsConfirmationControllerActions"], function() {
    var controller = require("CampaignManagement/userfrmDepositsConfirmationController");
    var controllerActions = ["CampaignManagement/frmDepositsConfirmationControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
