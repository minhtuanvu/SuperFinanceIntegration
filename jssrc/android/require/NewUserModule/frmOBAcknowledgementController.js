define("NewUserModule/userfrmOBAcknowledgementController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES_NUOLANDING", currentForm);
    },
    preShow: function() {
        var navManager = applicationManager.getNavigationManager();
        var formdata = navManager.getCustomInfo("frmOBAcknowledgement");
        if (formdata.form === "signature") {
            this.view.flxMain.setVisibility(true);
            this.view.flxSignature.setVisibility(false);
            this.view.lblGoToAccounts.setVisibility(true);
            this.view.lblStatus.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.nuo.Congratulations!");
            this.view.segSelectedProducts.setVisibility(true);
            var productsdata = navManager.getCustomInfo("frmOBSelectProducts");
            var userproducts = productsdata.products.userProducts;
            this.setSegmentData(userproducts);
            this.view.lblGoToAccounts.onClick = function() {
                applicationManager.getPresentationUtility().showLoadingScreen();
                var navManager = applicationManager.getNavigationManager();
                var loginData = navManager.getCustomInfo("frmLogin");
                var nuoUserData = navManager.getCustomInfo("frmOBLogin");
                loginData.NUOUsername = nuoUserData.username;
                navManager.setCustomInfo("frmLogin", loginData);
                var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
                NUOMod.presentationController.onLogout();
            };
        } else if (formdata.form === "creditcheck") {
            this.view.lblGoToAccounts.setVisibility(false);
            this.view.imgSign.src = "sign.png";
            this.view.flxMain.setVisibility(false);
            this.view.flxSignature.setVisibility(true);
            this.view.lblStatus.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.nuo.CreditCheckSuccessful");
            this.view.segSelectedProducts.setVisibility(false);
            this.view.flxSignature.onClick = this.showSignatureFFI;
            //this.view.flxSignature.onClick=function()
            //         {
            //          applicationManager.getPresentationUtility().showLoadingScreen();
            //          var navManager = applicationManager.getNavigationManager();
            //          navManager.setCustomInfo("frmOBSignature",{});
            //          var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
            // 	     NUOMod.presentationController.commonFunctionForNavigation("frmOBSignature");
            //         };
        }
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    showSignatureFFI: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            kony.runOnMainThread(this.signatureFuniOS.bind(this), []);
        } else {
            SignatureFFI.getSignature(this.callback1);
        }
    },
    signatureFuniOS: function() {
        var strokeWidth = "2.0";
        var strokeColor = "#0F00F0";
        var showClearButon = true;
        var shakeToCancelEnabled = true;
        //var callback = sigCaptureCallBack;
        SignatureFFI.getSignatureIphone("Customer Signature", strokeWidth, strokeColor, showClearButon, shakeToCancelEnabled, this.callback1);
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
    setSegmentData: function(userproducts) {
            var proList = [],
                products;
            for (var i = 0; i < userproducts.length; i++) {
                if (userproducts[i]["productType"] === "Credit Card") {
                    products = {
                        // "imgProduct":{"src":"appicon.png"},
                        "lblProduct": userproducts[i]["productName"],
                        "lblProductInfo": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.nuo.Yourcardwillbedispatched")
                    };
                } else {
                    products = {
                        //"imgProduct":{"src":"appicon.png"},
                        "lblProduct": userproducts[i]["productName"],
                        "lblProductInfo": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.nuo.YourAccountisActive")
                    };
                }
                proList.push(products);
            }
            this.view.segSelectedProducts.setData(proList);
        }
        //Type your controller code here
});
define("NewUserModule/frmOBAcknowledgementControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_j5a8b88a8d24448d9f28a539840941c5: function AS_Form_j5a8b88a8d24448d9f28a539840941c5(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_d16ef93d33fe4c2881f52d6e191e9ea9: function AS_Form_d16ef93d33fe4c2881f52d6e191e9ea9(eventobject) {
        var self = this;
        this.preShow();
    }
});
define("NewUserModule/frmOBAcknowledgementController", ["NewUserModule/userfrmOBAcknowledgementController", "NewUserModule/frmOBAcknowledgementControllerActions"], function() {
    var controller = require("NewUserModule/userfrmOBAcknowledgementController");
    var controllerActions = ["NewUserModule/frmOBAcknowledgementControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
