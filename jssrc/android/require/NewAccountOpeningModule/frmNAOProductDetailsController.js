define("NewAccountOpeningModule/userfrmNAOProductDetailsController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        var scopeObj = this;
        var navMan = applicationManager.getNavigationManager();
        var data = navMan.getCustomInfo("frmNAOProductDetails");
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
            this.view.customHeader.lblLocateUs.text = data.productName;
        } else {
            this.view.flxHeader.isVisible = false;
            this.view.title = data.productName;
        }
        this.view.customHeader.imgBack.src = "closewhite.png";
        this.view.customHeader.flxBack.onClick = function() {
            scopeObj.navtoSelectProduct();
        };
        scopeObj.view.lblProductDescription.text = data.productDescription;
        scopeObj.view.segProductDetails.setVisibility(false);
    },
    navtoSelectProduct: function() {
        var NAOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewAccountOpeningModule");
        NAOMod.presentationController.commonFunctionForNavigation("frmNAOSelectProduct");
    }
});
define("NewAccountOpeningModule/frmNAOProductDetailsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_jbd91a7d02a944e8bf6141f30f2ee7b2: function AS_Form_jbd91a7d02a944e8bf6141f30f2ee7b2(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_j6730f71cf5940648746a189eeb7b513: function AS_Form_j6730f71cf5940648746a189eeb7b513(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_d51f6d98b7cb4ed4b958919637be8293: function AS_BarButtonItem_d51f6d98b7cb4ed4b958919637be8293(eventobject) {
        var self = this;
        this.navtoSelectProduct();
    }
});
define("NewAccountOpeningModule/frmNAOProductDetailsController", ["NewAccountOpeningModule/userfrmNAOProductDetailsController", "NewAccountOpeningModule/frmNAOProductDetailsControllerActions"], function() {
    var controller = require("NewAccountOpeningModule/userfrmNAOProductDetailsController");
    var controllerActions = ["NewAccountOpeningModule/frmNAOProductDetailsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
