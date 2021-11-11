define("MoneyMovementModule/userfrmDirectDebitsDetailsController", {
    init: function() {
        var scope = this;
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "CALLBACK", currentForm, scope.navigateCustomBack);
    },
    preShow: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        } else {
            this.view.flxHeader.isVisible = true;
        }
        this.initActions();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    initActions: function() {
        // var transferModPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var navMan = applicationManager.getNavigationManager();
        this.view.customHeader.flxBack.onClick = this.navigateCustomBack;
    },
    navigateCustomBack: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    },
    onNavigate: function() {
        var navMan = applicationManager.getNavigationManager();
        var transactionData = navMan.getCustomInfo("frmDirectDebitsDetails");
        try {
            var tokenParams = kony.sdk.getCurrentInstance().tokens.DbxUserLogin.provider_token.params.security_attributes;
            var isCombinedUser = kony.sdk.getCurrentInstance().tokens.DbxUserLogin.provider_token.params.user_attributes.isCombinedUser;
            transactionData.entitlement = {};
            transactionData.isBusinessPayee = isCombinedUser;
            transactionData.entitlement.features = JSON.parse(tokenParams.features);
            transactionData.entitlement.permissions = JSON.parse(tokenParams.permissions);
            this.view.DetailsMain.setContext(transactionData);
            this.view.DetailsMain.onSuccess = this.onCancelDirectDebitSuccess;
            this.view.DetailsMain.onButtonAction = this.onButtonAction;
            this.view.DetailsMain.onError = this.onError;
        } catch (e) {
            this.view.DetailsMain.setContext(transactionData);
            this.view.DetailsMain.onSuccess = this.onCancelDirectDebitSuccess;
            this.view.DetailsMain.onButtonAction = this.onButtonAction;
            this.view.DetailsMain.onError = this.onError;
        }
    },
    onCancelDirectDebitSuccess: function(response) {
        var navMan = applicationManager.getNavigationManager();
        navMan.setCustomInfo("frmTransferActivitiesDirectDebits", {
            "DELETE": response
        });
        navMan.navigateTo("frmTransferActivitiesDirectDebits", response);
    },
    onButtonAction: function(buttonId, details) {
        //No actions in Direct Debits
    },
    onError: function(error) {
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, error.dbpErrMsg);
    }
});
define("MoneyMovementModule/frmDirectDebitsDetailsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_j0eec1b69af04151ab4241048fa5ec74: function AS_Form_j0eec1b69af04151ab4241048fa5ec74(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_ga4a50ae3a764c7ea206279652e40e79: function AS_Form_ga4a50ae3a764c7ea206279652e40e79(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_c192f1dd63c844b4862f03f0b602cb13: function AS_BarButtonItem_c192f1dd63c844b4862f03f0b602cb13(eventobject) {
        var self = this;
        this.navigateCustomBack();
    }
});
define("MoneyMovementModule/frmDirectDebitsDetailsController", ["MoneyMovementModule/userfrmDirectDebitsDetailsController", "MoneyMovementModule/frmDirectDebitsDetailsControllerActions"], function() {
    var controller = require("MoneyMovementModule/userfrmDirectDebitsDetailsController");
    var controllerActions = ["MoneyMovementModule/frmDirectDebitsDetailsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
