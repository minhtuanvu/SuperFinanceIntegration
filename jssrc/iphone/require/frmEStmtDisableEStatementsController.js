define("userfrmEStmtDisableEStatementsController", {
    //Type your controller code here
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    frmPreshow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
        } else {
            this.view.flxHeader.isVisible = true;
        }
        this.initAction();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    initAction: function() {
        var scope = this;
        this.view.customHeader.flxBack.onClick = function() {
            var navManager = applicationManager.getNavigationManager();
            navManager.goBack();
        };
        this.view.customHeader.btnRight.onClick = function() {
            scope.onClickCancel();
        };
        this.view.btnTAndC.onClick = function() {
            var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
            settingsModule.presentationController.commonFunctionForNavigation("frmEStmtTermsAndConditions");
        };
        this.view.btnDisable.onClick = function() {
            applicationManager.getPresentationUtility().showLoadingScreen();
            var settingsMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
            var navManager = applicationManager.getNavigationManager();
            var data = navManager.getCustomInfo("frmEStmtAccountDetails");
            var accountID = (data && data.accountID && data.accountID !== "" && data.accountID !== null) ? data.accountID : "";
            var updatedSettings = {
                "nickName": data.nickName,
                "accountID": accountID,
                "eStatementEnable": "0",
                "favouriteStatus": data.data.favouriteStatus,
                "email": ""
            };
            settingsMode.presentationController.updateUserAccountSettingsForEstatements(updatedSettings, "disable");
        };
    },
    onClickCancel: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    },
});
define("frmEStmtDisableEStatementsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_g0b905ef690240b2bcbffba9c3f8c818: function AS_Form_g0b905ef690240b2bcbffba9c3f8c818(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_hf77737f0ec34104b95a30f3f17be856: function AS_Form_hf77737f0ec34104b95a30f3f17be856(eventobject) {
        var self = this;
        this.frmPreshow();
    },
    AS_BarButtonItem_h3f4798fa99d448eb96a174d81f79bb4: function AS_BarButtonItem_h3f4798fa99d448eb96a174d81f79bb4(eventobject) {
        var self = this;
        this.onClickCancel();
    }
});
define("frmEStmtDisableEStatementsController", ["userfrmEStmtDisableEStatementsController", "frmEStmtDisableEStatementsControllerActions"], function() {
    var controller = require("userfrmEStmtDisableEStatementsController");
    var controllerActions = ["frmEStmtDisableEStatementsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
