define("TransferModuleEurope/userfrmEuropeFeePaymentController", {
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
        var segData = transMod.getFeesMediumData();
        this.view.segOptions.widgetDataMap = this.getWidgetDataMap();
        this.view.segOptions.setData(segData);
    },
    cancelOnClick: function() {
        var transMod = applicationManager.getModulesPresentationController("TransferModule");
        transMod.cancelCommon();
    },
    segmentOnClick: function() {
        var feesMedium = this.view.segOptions.selectedItems[0].title;
        var transMod = applicationManager.getModulesPresentationController("TransferModule");
        transMod.setFeesMedium(feesMedium);
    },
    getWidgetDataMap: function() {
        return {
            lblTitle: "title",
            lblDescription: "description"
        }
    }
});
define("TransferModuleEurope/frmEuropeFeePaymentControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_f550bc2fccdb4cd5afbe725b244598b9: function AS_Form_f550bc2fccdb4cd5afbe725b244598b9(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_c985c9f46c594e28947724691cd3d512: function AS_Form_c985c9f46c594e28947724691cd3d512(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_a5ece95a28dd4c80a53b62d3524a07db: function AS_BarButtonItem_a5ece95a28dd4c80a53b62d3524a07db(eventobject) {
        var self = this;
        this.navigateCustomBack();
    },
    AS_BarButtonItem_dd158523fb2741ccad324b224527cac1: function AS_BarButtonItem_dd158523fb2741ccad324b224527cac1(eventobject) {
        var self = this;
        this.cancelOnClick();
    }
});
define("TransferModuleEurope/frmEuropeFeePaymentController", ["TransferModuleEurope/userfrmEuropeFeePaymentController", "TransferModuleEurope/frmEuropeFeePaymentControllerActions"], function() {
    var controller = require("TransferModuleEurope/userfrmEuropeFeePaymentController");
    var controllerActions = ["TransferModuleEurope/frmEuropeFeePaymentControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
