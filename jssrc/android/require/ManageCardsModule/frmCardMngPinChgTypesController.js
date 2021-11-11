define("ManageCardsModule/userfrmCardMngPinChgTypesController", {
    init: function() {
        try {
            var navManager = applicationManager.getNavigationManager();
            var currentForm = navManager.getCurrentForm();
            applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    preShow: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start frmCardMngPinChgTypesController : preShow ####");
            var navManager = applicationManager.getNavigationManager();
            var frmData = navManager.getCustomInfo("frmCardMngPinChgTypes");
            this.cardData = frmData;
            this.renderTitleBar();
            this.view.flxEmailID.onClick = this.flxOnClick;
            this.view.flxPhoneNum.onClick = this.flxOnClick;
            this.view.flxPostalAddress.onClick = this.flxOnClick;
            this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
            this.view.customHeader.btnRight.onClick = this.cancelOnClick;
            var currentForm = navManager.getCurrentForm();
            applicationManager.getPresentationFormUtility().logFormName(currentForm);
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    renderTitleBar: function() {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start frmCardMngPinChgTypesController : renderTitleBar ####");
            if (applicationManager.getPresentationFormUtility().getDeviceName() === 'iPhone') {
                this.view.flxHeader.setVisibility(false);
            }
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    flxOnClick: function(eventObject) {
        var loggerManager = applicationManager.getLoggerManager();
        try {
            loggerManager.log("#### start frmCardMngPinChgTypesController : flxOnClick ####");
            if (eventObject.id === "flxEmailID") {
                this.cardData.type = "email";
            } else if (eventObject.id === "flxPhoneNum") {
                this.cardData.type = "phoneNo";
            } else if (eventObject.id === "flxPostalAddress") {
                this.cardData.type = "postalAddress";
            }
            var navManager = applicationManager.getNavigationManager();
            navManager.setCustomInfo("frmCardMngPinChgOptions", this.cardData);
            var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
            manageCardsModule.presentationController.commonFunctionForNavigation("frmCardMngPinChgOptions");
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    },
    flxBackOnClick: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    },
    cancelOnClick: function() {
        try {
            var navManager = applicationManager.getNavigationManager();
            var frmData = {
                "isMainScreen": false
            };
            navManager.setCustomInfo("frmCardManageHome", frmData);
            var manageCardsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("ManageCardsModule");
            manageCardsModule.presentationController.showCardsHome();
        } catch (err) {
            throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
        }
    }
});
define("ManageCardsModule/frmCardMngPinChgTypesControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_c59613c0e6e24ab18db87d7b362fe411: function AS_Form_c59613c0e6e24ab18db87d7b362fe411(eventobject) {
        var self = this;
        return self.preShow.call(this);
    },
    AS_BarButtonItem_afc95a35a1c64520b6dac24c270fd6c7: function AS_BarButtonItem_afc95a35a1c64520b6dac24c270fd6c7(eventobject) {
        var self = this;
        this.cancelOnClick();
    }
});
define("ManageCardsModule/frmCardMngPinChgTypesController", ["ManageCardsModule/userfrmCardMngPinChgTypesController", "ManageCardsModule/frmCardMngPinChgTypesControllerActions"], function() {
    var controller = require("ManageCardsModule/userfrmCardMngPinChgTypesController");
    var controllerActions = ["ManageCardsModule/frmCardMngPinChgTypesControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
