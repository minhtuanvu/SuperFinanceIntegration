define("CardLessModule/userfrmCardLessCashRecController", {
    frmPreShow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
        } else {
            this.view.flxHeader.isVisible = true;
        }
        this.retainSelection();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    init: function() {
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        this.view.btnICollect.onClick = this.btnICollectCashOnClick;
        this.view.btnSomeoneCollect.onClick = this.btnSomeoneCollectOnClick;
        this.view.customHeader.btnRight.onClick = this.btnRightOnClick;
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    btnRightOnClick: function() {
        var cLMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
        cLMod.presentationController.cancelCommon();
    },
    flxBackOnClick: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    retainSelection: function() {
        var cLMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
        var mode = cLMod.presentationController.getcashlessMode();
        if (mode === "Self") {
            this.view.btnICollect.skin = "sknBtnOnBoardingOptionsActive";
            this.view.btnSomeoneCollect.skin = "sknBtnffffff424242SSP26px";
        } else if (mode === "others") {
            this.view.btnICollect.skin = "sknBtnffffff424242SSP26px";
            this.view.btnSomeoneCollect.skin = "sknBtnOnBoardingOptionsActive";
        } else {
            this.view.btnICollect.skin = "sknBtnffffff424242SSP26px";
            this.view.btnSomeoneCollect.skin = "sknBtnffffff424242SSP26px";
        }
    },
    btnICollectCashOnClick: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var cLMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
        cLMod.presentationController.setCashLessMode("Self");
        cLMod.presentationController.clearAmount();
    },
    btnSomeoneCollectOnClick: function() {
        var cLMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
        cLMod.presentationController.setCashLessMode("others");
        cLMod.presentationController.clearAmount();
    }
});
define("CardLessModule/frmCardLessCashRecControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_fdcfc70f9b4847238077f8bb729ab3ee: function AS_FlexContainer_fdcfc70f9b4847238077f8bb729ab3ee(eventobject) {
        var self = this;
        this.backNavigation();
    },
    AS_Form_f8728b58cda440cd8aa6783b4fbf461d: function AS_Form_f8728b58cda440cd8aa6783b4fbf461d(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_c3c0aab3cc9349c082332d9d279b81be: function AS_Form_c3c0aab3cc9349c082332d9d279b81be(eventobject) {
        var self = this;
        return self.frmPreShow.call(this);
    },
    AS_BarButtonItem_bd3dd011b6aa444cb7ee738b6f6a7a50: function AS_BarButtonItem_bd3dd011b6aa444cb7ee738b6f6a7a50(eventobject) {
        var self = this;
        this.btnRightOnClick();
    }
});
define("CardLessModule/frmCardLessCashRecController", ["CardLessModule/userfrmCardLessCashRecController", "CardLessModule/frmCardLessCashRecControllerActions"], function() {
    var controller = require("CardLessModule/userfrmCardLessCashRecController");
    var controllerActions = ["CardLessModule/frmCardLessCashRecControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
