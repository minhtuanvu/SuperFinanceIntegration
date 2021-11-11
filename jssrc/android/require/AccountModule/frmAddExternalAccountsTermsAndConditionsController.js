define("AccountModule/userfrmAddExternalAccountsTermsAndConditionsController", {
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
        this.view.customHeader.flxBack.onClick = this.onCloseOfTermsAndConditions;
        this.view.rtxTermsConditionsValue.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.TermsAndConditions.message");
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    onCloseOfTermsAndConditions: function() {
        var  accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountModule.presentationController.commonFunctionForNavigation("frmSelectExternalAccounts");
    }
});
define("AccountModule/frmAddExternalAccountsTermsAndConditionsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_a9b0b31a00914c35b8215d7747a067e8: function AS_Form_a9b0b31a00914c35b8215d7747a067e8(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_dd52eedb80084fb3a3eddc45ef9d1a68: function AS_Form_dd52eedb80084fb3a3eddc45ef9d1a68(eventobject) {
        var self = this;
        this.preshow();
    },
    AS_BarButtonItem_d242e8dc3e9749ad997f9704e2455204: function AS_BarButtonItem_d242e8dc3e9749ad997f9704e2455204(eventobject) {
        var self = this;
        this.onCloseOfTermsAndConditions();
    }
});
define("AccountModule/frmAddExternalAccountsTermsAndConditionsController", ["AccountModule/userfrmAddExternalAccountsTermsAndConditionsController", "AccountModule/frmAddExternalAccountsTermsAndConditionsControllerActions"], function() {
    var controller = require("AccountModule/userfrmAddExternalAccountsTermsAndConditionsController");
    var controllerActions = ["AccountModule/frmAddExternalAccountsTermsAndConditionsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
