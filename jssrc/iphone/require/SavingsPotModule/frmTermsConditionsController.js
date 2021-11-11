define("SavingsPotModule/userfrmTermsConditionsController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preshow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
            this.view.customHeader.flxSearch.isVisible = false;
            this.view.flxTermsConditions.top = "56dp";
        } else {
            this.view.flxHeader.isVisible = false;
            this.view.flxTermsConditions.top = "0dp";
        }
        this.view.flxTermsConditions.scrollsToTop = true;
        this.view.customHeader.flxBack.onClick = this.onCloseTnC;
        this.view.rtxTermsConditionsValue.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.TermsAndConditions.message");
    },
    onCloseTnC: function() {
        var navigationMan = applicationManager.getNavigationManager();
        navigationMan.goBack();
    }
});
define("SavingsPotModule/frmTermsConditionsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_aec9b7989e064545b73dd5c67bc0bd84: function AS_Form_aec9b7989e064545b73dd5c67bc0bd84(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_g8f484a9c44b408bb6ffb322da9694ab: function AS_Form_g8f484a9c44b408bb6ffb322da9694ab(eventobject) {
        var self = this;
        this.preshow();
    },
    AS_BarButtonItem_da3ccd1b55784f8e9945a8a20f1b42ed: function AS_BarButtonItem_da3ccd1b55784f8e9945a8a20f1b42ed(eventobject) {
        var self = this;
        this.onCloseTnC();
    }
});
define("SavingsPotModule/frmTermsConditionsController", ["SavingsPotModule/userfrmTermsConditionsController", "SavingsPotModule/frmTermsConditionsControllerActions"], function() {
    var controller = require("SavingsPotModule/userfrmTermsConditionsController");
    var controllerActions = ["SavingsPotModule/frmTermsConditionsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
