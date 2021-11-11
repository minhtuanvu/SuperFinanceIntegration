define("NewUserModule/userfrmOBSignatureController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        var scopeObj = this;
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        this.view.lblEnterPhoneNumberHeader.text = kony.i18n.getLocalizedString("kony.mb.OBSignature.Title");
        var navMan = applicationManager.getNavigationManager();
        var base64str = navMan.getCustomInfo("frmOBSignature");
        if (base64str.base64String) {
            this.view.imgSignature.setVisibility(true);
            this.view.imgSignature.base64 = base64str.base64String;
            this.view.btnDone.skin = "sknBtn0095e4RoundedffffffSSP26px";
            this.view.btnDone.setEnabled(true);
        } else {
            this.view.btnDone.skin = "sknBtnOnBoardingInactive";
            this.view.imgSignature.setVisibility(false);
            this.view.btnDone.setEnabled(false);
        }
        this.view.customHeader.btnRight.onClick = this.onClose;
        //     this.view.flxDone.onClick = function(){
        //       scopeObj.navToSuccess();
        //     }
        //     this.view.flxBack.onClick = function(){
        //       scopeObj.navToCreditCheck();
        //     }
        this.view.flxSignature.onClick = function() {
            scopeObj.signatureFun();
        };
        this.view.btnDone.onClick = function() {
            scopeObj.showResult();
        };
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    onClose: function() {
        var  NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        NUOMod.presentationController.onClose();
    },
    postShow: function() {
        //     // var navMan=applicationManager.getNavigationManager();
        //     if(kony.application.getPreviousForm().id=="Form1")
        //     {
        //       this.view.imgSignature.setVisibility(false);
        //     }
        //     else
        //     {
        //       this.view.imgSignature.setVisibility(true);
        //     }
    },
    navToSuccess: function() {
        var  NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        NUOMod.presentationController.commonFunctionForNavigation("frmOBSuccess");
    },
    navToCreditCheck: function() {
        var  NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        NUOMod.presentationController.commonFunctionForNavigation("frmOBCreditCheck");
    },
    signatureFun: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            var strokeWidth = "2.0";
            var strokeColor = "#0F00F0";
            var showClearButon = true;
            var shakeToCancelEnabled = true;
            //var callback = sigCaptureCallBack;
            SignatureFFI.getSignatureIphone("Customer Signature", strokeWidth, strokeColor, showClearButon, shakeToCancelEnabled, this.callback1);
        } else {
            SignatureFFI.getSignature(this.callback1);
        }
    },
    callback1: function(base64String) {
        //this.view.imgSignature.setVisibility(true);
        // this.view.imgSignature.base64=base64String;
        var navMan = applicationManager.getNavigationManager();
        navMan.setCustomInfo("frmOBSignature", {
            "base64String": base64String
        });
        var nuoMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        nuoMod.presentationController.commonFunctionForNavigation("frmOBSignature");
    },
    showResult: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var nuoMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        nuoMod.presentationController.uploadSignature();
    }
});
define("NewUserModule/frmOBSignatureControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_a28c4e61b9644106a7ef646181e3d9a9: function AS_Form_a28c4e61b9644106a7ef646181e3d9a9(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_ad2797c9e26b432298394bd16789c681: function AS_Form_ad2797c9e26b432298394bd16789c681(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_d0102b70511b49b894eb38172f670b69: function AS_BarButtonItem_d0102b70511b49b894eb38172f670b69(eventobject) {
        var self = this;
        this.onClose();
    }
});
define("NewUserModule/frmOBSignatureController", ["NewUserModule/userfrmOBSignatureController", "NewUserModule/frmOBSignatureControllerActions"], function() {
    var controller = require("NewUserModule/userfrmOBSignatureController");
    var controllerActions = ["NewUserModule/frmOBSignatureControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
