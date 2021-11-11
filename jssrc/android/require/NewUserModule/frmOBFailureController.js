define("NewUserModule/userfrmOBFailureController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        this.view.btnCancelResult.setVisibility(false);
        this.view.btnContinueResult.onClick = function() {
            applicationManager.getPresentationUtility().showLoadingScreen();
            var  authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
            authMod.presentationController.getCurrentState();
        };
        var navManager = applicationManager.getNavigationManager();
        var formdata = navManager.getCustomInfo("frmOBFailure");
        if (formdata.form == "signature") {
            this.view.rtxTitle.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.nuo.signatureisnotdone");
            this.view.lblSubTitle.text = "Please Try Later";
        } else if (formdata.form == "creditcheck") {
            this.view.rtxTitle.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.nuo.CreditCheckError!");
            this.view.lblSubTitle.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.nuo.creditcheckfail");
        }
        this.view.flxCallNow.onClick = function() {
            var phoneNumber = "1111111111";
            kony.phone.dial(phoneNumber);
        };
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
});
define("NewUserModule/frmOBFailureControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_c695bf8f9fc14e80a558d578e57595f4: function AS_Form_c695bf8f9fc14e80a558d578e57595f4(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_ge8f607d02d74d1984e4a19fe3862f46: function AS_Form_ge8f607d02d74d1984e4a19fe3862f46(eventobject) {
        var self = this;
        this.preShow();
    }
});
define("NewUserModule/frmOBFailureController", ["NewUserModule/userfrmOBFailureController", "NewUserModule/frmOBFailureControllerActions"], function() {
    var controller = require("NewUserModule/userfrmOBFailureController");
    var controllerActions = ["NewUserModule/frmOBFailureControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
