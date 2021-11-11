define("TransferModuleEurope/userfrmEuropePaymentMediumController", {
    init: function() {
        var scope = this;
        var currentFormObject = kony.application.getCurrentForm();
        var currentForm = currentFormObject.id;
        applicationManager.getPresentationFormUtility().initCommonActions(this, "CALLBACK", currentForm, scope.navigateCustomBack);
    },
    navigateCustomBack: function() {
        var transMod = applicationManager.getModulesPresentationController("TransferModule");
        transMod.commonFunctionForgoBack();
    },
    preShow: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        } else {
            this.view.flxHeader.isVisible = true;
        }
        this.setSegmentData();
        this.initActions();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    initActions: function() {
        this.view.customHeader.btnRight.onClick = this.cancelOnClick;
        this.view.segOptions.onRowClick = this.segmentOnClick;
        this.view.customHeader.flxBack.onClick = this.navigateCustomBack;
    },
    setSegmentData: function() {
        var transMod = applicationManager.getModulesPresentationController("TransferModule");
        var segData = transMod.getPaymentMediumData();
        this.view.segOptions.widgetDataMap = this.getWidgetDataMap();
        this.view.segOptions.setData(segData);
    },
    cancelOnClick: function() {
        var transMod = applicationManager.getModulesPresentationController("TransferModule");
        transMod.cancelCommon();
    },
    segmentOnClick: function() {
        var paymentMedium = this.view.segOptions.selectedItems[0].title;
        var transMod = applicationManager.getModulesPresentationController("TransferModule");
        transMod.setPaymentMedium(paymentMedium);
    },
    getWidgetDataMap: function() {
        return {
            lblTitle: "title",
            lblDescription: "description"
        }
    }
});
define("TransferModuleEurope/frmEuropePaymentMediumControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_i7ec8670f90245f28c91ed861320f3bd: function AS_Form_i7ec8670f90245f28c91ed861320f3bd(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_ae703347941e47ab82d2f9ae7a8578bc: function AS_Form_ae703347941e47ab82d2f9ae7a8578bc(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_ce930e25b84a43148f0d379b325ac586: function AS_BarButtonItem_ce930e25b84a43148f0d379b325ac586(eventobject) {
        var self = this;
        this.navigateCustomBack();
    },
    AS_BarButtonItem_cb23765bb0d848dda83e05dd055d9c53: function AS_BarButtonItem_cb23765bb0d848dda83e05dd055d9c53(eventobject) {
        var self = this;
        this.cancelOnClick();
    }
});
define("TransferModuleEurope/frmEuropePaymentMediumController", ["TransferModuleEurope/userfrmEuropePaymentMediumController", "TransferModuleEurope/frmEuropePaymentMediumControllerActions"], function() {
    var controller = require("TransferModuleEurope/userfrmEuropePaymentMediumController");
    var controllerActions = ["TransferModuleEurope/frmEuropePaymentMediumControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
