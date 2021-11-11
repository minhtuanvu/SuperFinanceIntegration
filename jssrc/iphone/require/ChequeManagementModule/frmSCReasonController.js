define("ChequeManagementModule/userfrmSCReasonController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preshow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        var controller = applicationManager.getModulesPresentationController("ChequeManagementModule");
        controller.getStopChequeReason();
        // this.segmentRowClick();
        this.initActions();
    },
    initActions: function() {
        this.view.customHeader.flxBack.onClick = this.backOnClick;
        //     this.view.customHeader.flxBack.onClick = function() {
        //       var controller = applicationManager.getModulesPresentationController("ChequeManagementModule");
        //          controller.commonFunctionForgoBack();
        //        };
        this.view.customHeader.btnRight.onClick = this.onCancelClick;
    },
    backOnClick: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            loggerManager.log("#### start : " + currentForm + " :  backOnClick  ####");
            var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
            manageCardsModule.presentationController.commonFunctionForNavigation("frmAmount");
        } catch (exc) {
            loggerManager.log("#### in catch " + exc + " ####");
        }
    },
    segmentRowClick: function(context) {
        var scopeObj = this;
        var selecteddata = "";
        scopeObj.StopChequeReason.forEach(function(item) {
            if (scopeObj.view.segOptions.data[context.rowIndex].lblOption === item[0]) {
                selecteddata = item[1];
            }
        });
        var controller = applicationManager.getModulesPresentationController("ChequeManagementModule");
        controller.setChequeCancelReason(selecteddata);
        controller.getStopChequeFee();
    },
    onCancelClick: function() {
        var presentation = applicationManager.getModulesPresentationController("ChequeManagementModule");
        presentation.commonCancel();
    },
    bindGenericError: function(errorMsg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var scopeObj = this;
        applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
    },
    bindStopChequeReason: function(data) {
        var scopeObj = this;
        scopeObj.StopChequeReason = data;
        var rowdata = [];
        data.forEach(function(item) {
            rowdata.push({
                "lblOption": item[0],
                "flxMain": {
                    "onClick": function(eventobject, context) {
                        scopeObj.segmentRowClick(context);
                    }.bind(this)
                }
            })
        });
        this.view.segOptions.setData(rowdata);
    }
});
define("ChequeManagementModule/frmSCReasonControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_c1d6aee5320f4d9194674088fe9327b5: function AS_Form_c1d6aee5320f4d9194674088fe9327b5(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_e6356f0cf75a452c915b3b856b90d6f8: function AS_Form_e6356f0cf75a452c915b3b856b90d6f8(eventobject) {
        var self = this;
        this.preshow();
    },
    AS_BarButtonItem_f93df776e18747fd8b008629d5e496a4: function AS_BarButtonItem_f93df776e18747fd8b008629d5e496a4(eventobject) {
        var self = this;
        this.onCancelClick();
    }
});
define("ChequeManagementModule/frmSCReasonController", ["ChequeManagementModule/userfrmSCReasonController", "ChequeManagementModule/frmSCReasonControllerActions"], function() {
    var controller = require("ChequeManagementModule/userfrmSCReasonController");
    var controllerActions = ["ChequeManagementModule/frmSCReasonControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
