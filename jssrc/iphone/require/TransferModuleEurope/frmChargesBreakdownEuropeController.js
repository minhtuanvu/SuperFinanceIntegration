define("TransferModuleEurope/userfrmChargesBreakdownEuropeController", {
    //Type your controller code here 
    initActions: function() {
        this.renderTitleBar();
        this.view.customHeader.flxBack.onTouchEnd = this.navigateCustomBack;
        this.view.customHeader.btnRight.onClick = this.cancelOnClick;
        this.getSegmentData();
    },
    navigateCustomBack: function() {
        var transferModule = applicationManager.getModulesPresentationController("TransferModule");
        transferModule.commonFunctionForgoBack();
    },
    renderTitleBar: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === 'iPhone') {
            this.view.flxHeader.setVisibility(false);
            this.view.flxMain.top = "0dp";
        }
    },
    cancelOnClick: function() {
        var transferModule = applicationManager.getModulesPresentationController("TransferModule");
        transferModule.cancelCommon();
    },
    getWidgetDataMap: function() {
        var map = {
            lblTitle: "property",
            lblDetails: "value",
        }
        return map;
    },
    getSegmentData: function() {
        var transferPresentationController = applicationManager.getModulesPresentationController("TransferModule");
        var segData = transferPresentationController.getChargesBreakdown();
        this.view.segDataCharges.widgetDataMap = this.getWidgetDataMap();
        this.view.segDataCharges.setData(segData);
    }
});
define("TransferModuleEurope/frmChargesBreakdownEuropeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_f5385f3bd0714e0da018c88da2da162f: function AS_Form_f5385f3bd0714e0da018c88da2da162f(eventobject) {
        var self = this;
        return self.initActions.call(this);
    },
    AS_BarButtonItem_a433cba2fd184eaa8650fca612f51d3f: function AS_BarButtonItem_a433cba2fd184eaa8650fca612f51d3f(eventobject) {
        var self = this;
        this.navigateCustomBack();
    },
    AS_BarButtonItem_fe187ef7fe0a48aeaf510a9f3f4af818: function AS_BarButtonItem_fe187ef7fe0a48aeaf510a9f3f4af818(eventobject) {
        var self = this;
        this.cancelOnClick();
    }
});
define("TransferModuleEurope/frmChargesBreakdownEuropeController", ["TransferModuleEurope/userfrmChargesBreakdownEuropeController", "TransferModuleEurope/frmChargesBreakdownEuropeControllerActions"], function() {
    var controller = require("TransferModuleEurope/userfrmChargesBreakdownEuropeController");
    var controllerActions = ["TransferModuleEurope/frmChargesBreakdownEuropeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
