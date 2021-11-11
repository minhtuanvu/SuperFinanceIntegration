define("AccountModule/userfrmViewCombinedStatementsController", {
    selectedFiletype: "",
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preshow: function() {
        var navMan = applicationManager.getNavigationManager();
        var selectedStartDate = navMan.getCustomInfo("CombinedStatementStartDate");
        var selectedEndDate = navMan.getCustomInfo("CombinedStatementEndDate");
        this.view.lblStartDate.text = selectedStartDate;
        this.view.lblEndDate.text = selectedEndDate;
        this.view.segFileFormats.onRowClick = this.onSegRowClickFormat;
        this.view.btnCreate.onClick = this.generateCombinedStatement;
        this.view.customHeader.flxBack.onClick = this.navigateToBack;
        this.view.customHeader.btnRight.onClick = this.navigateToBack;
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        this.view.onDeviceBack = function() {
            kony.print("Device Back")
        };
    },
    onSegRowClickFormat: function() {
        var selectedFileType = this.view.segFileFormats.selectedItems[0].lblTypeName;
        if (selectedFileType === "CSV") {
            this.selectedFiletype = "csv"
        } else if ((selectedFileType === "Excel")) {
            this.selectedFiletype = "xlsx"
        } else {
            this.selectedFiletype = "pdf"
        }
    },
    generateCombinedStatement: function() {
        var self = this;
        applicationManager.getPresentationUtility().showLoadingScreen();
        var navMan = applicationManager.getNavigationManager();
        var servicePayload = navMan.getCustomInfo("CombinedStatementsPayload");
        servicePayload.fileType = this.selectedFiletype;
        var ModulePresentationController = applicationManager.getModulesPresentationController("AccountModule");
        ModulePresentationController.generateCombinedStatement(servicePayload, function sucess(data) {
            self.generateCombinedStatementSuccessCallback(data);
        }, function failure(data) {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            self.generateCombinedStatementFailureCallback(data);
        })
    },
    generateCombinedStatementSuccessCallback: function(response) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navMan = applicationManager.getNavigationManager();
        navMan.navigateTo("frmDownLoadCombinedstatement");
    },
    generateCombinedStatementFailureCallback: function(response) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    navigateToBack: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    }
});
define("AccountModule/frmViewCombinedStatementsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_e3102c39847e4d5d890741025e905542: function AS_Form_e3102c39847e4d5d890741025e905542(eventobject) {
        var self = this;
        return self.init.call(this);
    },
    AS_Form_bc2bf33a6a02402cb2301e75a1443bab: function AS_Form_bc2bf33a6a02402cb2301e75a1443bab(eventobject) {
        var self = this;
        return self.preshow.call(this);
    }
});
define("AccountModule/frmViewCombinedStatementsController", ["AccountModule/userfrmViewCombinedStatementsController", "AccountModule/frmViewCombinedStatementsControllerActions"], function() {
    var controller = require("AccountModule/userfrmViewCombinedStatementsController");
    var controllerActions = ["AccountModule/frmViewCombinedStatementsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
