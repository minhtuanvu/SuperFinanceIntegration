define("AuthModule/userfrmDevRegFaceIdController", {
    //  timerCounter:0,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    faceIdPreShow: function() {
        //     this.view.btnEnable.setVisibility(false);
        //     this.view.flxBottomContainer.setVisibility(true);
        //     this.view.flxSeperator.setVisibility(true);
        this.view.customHeader.btnRight.setVisibility(true);
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    btnSkipOnClick: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMode.presentationController.defaultLoginToAccounts();
    },
    imgbackAction: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    }
});
define("AuthModule/frmDevRegFaceIdControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_j6bdd639afb246ae9ad9e6e05804c54b: function AS_Button_j6bdd639afb246ae9ad9e6e05804c54b(eventobject) {
        var self = this;
        this.btnSkipOnClick();
    },
    AS_FlexContainer_d1f5330e386844ccbaee54bfc5d5e905: function AS_FlexContainer_d1f5330e386844ccbaee54bfc5d5e905(eventobject) {
        var self = this;
        this.imgbackAction();
    },
    AS_Form_i527825207c94d68b3d08cb1cae7d08a: function AS_Form_i527825207c94d68b3d08cb1cae7d08a(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_hd7212e127274490a09b789bc8c61d9b: function AS_Form_hd7212e127274490a09b789bc8c61d9b(eventobject) {
        var self = this;
        return self.faceIdPreShow.call(this);
    },
    AS_BarButtonItem_cadc5266bbda4761bb2666f9d9a34365: function AS_BarButtonItem_cadc5266bbda4761bb2666f9d9a34365(eventobject) {
        var self = this;
        this.btnSkipOnClick();
    }
});
define("AuthModule/frmDevRegFaceIdController", ["AuthModule/userfrmDevRegFaceIdController", "AuthModule/frmDevRegFaceIdControllerActions"], function() {
    var controller = require("AuthModule/userfrmDevRegFaceIdController");
    var controllerActions = ["AuthModule/frmDevRegFaceIdControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
