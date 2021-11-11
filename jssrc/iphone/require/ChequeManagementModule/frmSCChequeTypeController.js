define("ChequeManagementModule/userfrmSCChequeTypeController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preshow: function() {
        var scope = this;
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        this.view.segOptions.onRowClick = function() {
            scope.segmentRowClick();
        };
        this.initActions();
    },
    initActions: function() {
        this.view.customHeader.flxBack.onClick = this.backOnClick;
        //    this.view.customHeader.flxBack.onClick = function() {
        //          var controller = applicationManager.getModulesPresentationController("ChequeManagementModule");
        //          controller.commonFunctionForgoBack();
        //       };
        this.view.customHeader.btnRight.onClick = this.onCancelClick;
    },
    backOnClick: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            loggerManager.log("#### start : " + currentForm + " :  backOnClick  ####");
            var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
            manageCardsModule.presentationController.commonFunctionForNavigation("frmPayeeName");
        } catch (exc) {
            loggerManager.log("#### in catch " + exc + " ####");
        }
    },
    segmentRowClick: function() {
        scope_ChequePresentationController.chequeTypeSelection = this.view.segOptions.selectedRowItems[0].lblOption;
        var controller = applicationManager.getModulesPresentationController("ChequeManagementModule");
        if (scope_ChequePresentationController.isReview === true) {
            controller.commonFunctionForNavigation("frmSCReview");
        } else {
            if (scope_ChequePresentationController.chequeTypeSelection === "Single Cheque") {
                controller.commonFunctionForNavigation("frmChequeNumber");
            } else {
                controller.commonFunctionForNavigation("frmSeriesCheque");
            }
        }
    },
    onCancelClick: function() {
        var presentation = applicationManager.getModulesPresentationController("ChequeManagementModule");
        presentation.commonCancel();
    }
});
define("ChequeManagementModule/frmSCChequeTypeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_jddd9f08700244f681222ca37d1479fb: function AS_Form_jddd9f08700244f681222ca37d1479fb(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_c68cc0bab8094fda99a85ef10ef959f9: function AS_Form_c68cc0bab8094fda99a85ef10ef959f9(eventobject) {
        var self = this;
        this.preshow();
    },
    AS_BarButtonItem_eeebd5472dd9427ab40dcd9bf2061cb4: function AS_BarButtonItem_eeebd5472dd9427ab40dcd9bf2061cb4(eventobject) {
        var self = this;
        this.onCancelClick();
    }
});
define("ChequeManagementModule/frmSCChequeTypeController", ["ChequeManagementModule/userfrmSCChequeTypeController", "ChequeManagementModule/frmSCChequeTypeControllerActions"], function() {
    var controller = require("ChequeManagementModule/userfrmSCChequeTypeController");
    var controllerActions = ["ChequeManagementModule/frmSCChequeTypeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
