define("SettingsModule/userfrmProfileSelectLocationController", {
    onNavigate: function(param) {
        var self = this;
        if (param === "add") {
            self.setAddFlow();
        } else if (param === "edit") {
            self.setEditFlow();
        }
    },
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    setEditFlow: function() {
        var scope = this;
        this.view.segContactLocation.onRowClick = function() {
            scope.NavToContactType("edit");
        };
    },
    setAddFlow: function() {
        var scope = this;
        this.view.segContactLocation.onRowClick = function() {
            scope.onRowClickOfLocation();
            //scope.NavToContactType("add");
        };
    },
    onRowClickOfLocation: function() {
        var index = this.view.segContactLocation.selectedRowIndex[1];
        index = parseInt(index);
        var locationType = "domestic";
        if (index === 1) {
            locationType = "international";
        }
        var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMode.presentationController.createOrUpdatePhoneBuilderObject('countryType', locationType);
        settingsMode.presentationController.navigateToProfileContactType();
    },
    preShow: function() {
        this.initActions();
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        var navManager = applicationManager.getNavigationManager();
        var param = navManager.getCustomInfo("frmProfileSelectLocation");
        this.onNavigate(param);
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    initActions: function() {
        var scope = this;
        this.view.customHeader.btnRight.onClick = function() {
            var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
            settingsMod.presentationController.commonFunctionForNavigation("frmProfilePersonalDetails");
        };
        this.view.customHeader.flxBack.onClick = function() {
            var navManager = applicationManager.getNavigationManager();
            navManager.goBack();
        };
    },
    NavToContactType: function(param) {}
});
define("SettingsModule/frmProfileSelectLocationControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_i6dc48673b114d1cbf0dbc4e3dececa7: function AS_Form_i6dc48673b114d1cbf0dbc4e3dececa7(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_d1a85d2d1cf84c298ce66bfc409ef097: function AS_Form_d1a85d2d1cf84c298ce66bfc409ef097(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_b560938c6c834369874066972cb8074a: function AS_BarButtonItem_b560938c6c834369874066972cb8074a(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmProfilePersonalDetails");
    }
});
define("SettingsModule/frmProfileSelectLocationController", ["SettingsModule/userfrmProfileSelectLocationController", "SettingsModule/frmProfileSelectLocationControllerActions"], function() {
    var controller = require("SettingsModule/userfrmProfileSelectLocationController");
    var controllerActions = ["SettingsModule/frmProfileSelectLocationControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
