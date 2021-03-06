define("SettingsModule/userfrmProfileContactTypeController", {
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
        this.view.segContactType.onRowClick = function() {
            scope.navToEditPhoneNumber("edit");
        }
    },
    setAddFlow: function() {
        var scope = this;
        this.view.segContactType.onRowClick = function() {
            scope.onRowClickOfContactType();
            //scope.navToEditPhoneNumber("add");
        }
    },
    onRowClickOfContactType: function() {
        var index = this.view.segContactType.selectedRowIndex[1];
        index = parseInt(index);
        var type = "";
        if (index === 0) {
            type = "Home";
        }
        if (index === 1) {
            type = "Mobile"
        }
        if (index === 2) {
            type = "Work";
        }
        if (index === 3) {
            type = "Other";
        }
        var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMode.presentationController.createOrUpdatePhoneBuilderObject('type', type);
        this.navToEditPhoneNumber("add");
    },
    preShow: function() {
        this.initActions();
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
            this.view.flxTransactionFrequency.top = "56dp";
        } else {
            this.view.flxHeader.isVisible = false;
            this.view.flxTransactionFrequency.top = "0dp";
        }
        var navigationManager = applicationManager.getNavigationManager();
        var param = navigationManager.getCustomInfo("frmProfileContactType");
        this.onNavigate(param);
        var navManager = applicationManager.getNavigationManager();
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
    navToEditPhoneNumber: function(param) {
        var navManager = applicationManager.getNavigationManager();
        var jsonV = {};
        jsonV.flow = param;
        jsonV.data = "";
        navManager.setCustomInfo("frmProfileEditPhoneNumberMain", jsonV);
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmProfileEditPhoneNumberMain");
    },
});
define("SettingsModule/frmProfileContactTypeControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_d1243bee5f5743e3a793334ad954e8e2: function AS_Form_d1243bee5f5743e3a793334ad954e8e2(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_a380f1a7ac3d4fc5bca017a6ed16a15c: function AS_Form_a380f1a7ac3d4fc5bca017a6ed16a15c(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_i0a80ddb8cd74cfbb459e49d59a35ea8: function AS_BarButtonItem_i0a80ddb8cd74cfbb459e49d59a35ea8(eventobject) {
        var self = this;
        var settingsMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
        settingsMod.presentationController.commonFunctionForNavigation("frmProfilePersonalDetails");
    }
});
define("SettingsModule/frmProfileContactTypeController", ["SettingsModule/userfrmProfileContactTypeController", "SettingsModule/frmProfileContactTypeControllerActions"], function() {
    var controller = require("SettingsModule/userfrmProfileContactTypeController");
    var controllerActions = ["SettingsModule/frmProfileContactTypeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
