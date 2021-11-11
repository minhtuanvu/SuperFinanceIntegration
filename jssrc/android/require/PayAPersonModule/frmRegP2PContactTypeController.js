define("PayAPersonModule/userfrmRegP2PContactTypeController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    frmPreShow: function() {
        this.view.btnPhoneNumber.onClick = this.btnPhoneNumberOnClick;
        this.view.btnEmail.onClick = this.btnEmailOnClick;
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        this.view.customHeader.btnRight.onClick = this.onClickCancel;
        this.renderTitleBar();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    renderTitleBar: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === 'iPhone') {
            this.view.flxHeader.setVisibility(false);
        }
    },
    btnPhoneNumberOnClick: function() {
        var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        p2pMod.presentationController.navigateToP2PRecPhoneNoOrEmail("frmP2PRecPhoneNo", "phone");
    },
    btnEmailOnClick: function() {
        var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        p2pMod.presentationController.navigateToP2PRecPhoneNoOrEmail("frmP2PRecEmail", "email");
    },
    flxBackOnClick: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    },
    onClickCancel: function() {
        var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        p2pMod.presentationController.navToFormBasedOnEntryPoint("createP2PPayee");
    }
});
define("PayAPersonModule/frmRegP2PContactTypeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_b8ee8ec2c94546b4ba4fa7c9a5c8954b: function AS_Form_b8ee8ec2c94546b4ba4fa7c9a5c8954b(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_b62fc4d077f6447d922e88fa503c2163: function AS_Form_b62fc4d077f6447d922e88fa503c2163(eventobject) {
        var self = this;
        return self.frmPreShow.call(this);
    },
    AS_BarButtonItem_b6463fddcf0f4f28afadb524b5bb5c8d: function AS_BarButtonItem_b6463fddcf0f4f28afadb524b5bb5c8d(eventobject) {
        var self = this;
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    AS_BarButtonItem_f2ce6a159faa40469cdebc7de66198ed: function AS_BarButtonItem_f2ce6a159faa40469cdebc7de66198ed(eventobject) {
        var self = this;
        this.onClickCancel();
    }
});
define("PayAPersonModule/frmRegP2PContactTypeController", ["PayAPersonModule/userfrmRegP2PContactTypeController", "PayAPersonModule/frmRegP2PContactTypeControllerActions"], function() {
    var controller = require("PayAPersonModule/userfrmRegP2PContactTypeController");
    var controllerActions = ["PayAPersonModule/frmRegP2PContactTypeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
