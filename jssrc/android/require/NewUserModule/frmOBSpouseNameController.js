define("NewUserModule/userfrmOBSpouseNameController", {
    timerCounter: 0,
    init: function() {
        var FormValidator = require("FormValidatorManager")
        this.fv = new FormValidator(2);
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        var  NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        var NUOData = NUOMod.presentationController.getUserData();
        this.assignDataToForm(NUOData);
        this.validateFormUI();
        this.view.btnContinuePersonalInfo.onClick = this.validateAndNavigate;
        this.view.customHeaderPersonalInfo.flxBack.onClick = this.onBack;
        this.view.customHeaderPersonalInfo.btnRight.onClick = this.onClose;
        this.view.txtSpouseFirstName.onTextChange = this.validateSpouseFirstName;
        this.view.txtSpouseLastName.onTextChange = this.validateSpouseLastName;
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeaderPersonalInfo.isVisible = true;
        } else {
            this.view.flxHeaderPersonalInfo.isVisible = false;
        }
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    validateSpouseFirstName: function() {
        var text = this.view.txtSpouseFirstName.text;
        this.fv.checkAndUpdateStatusForNull(0, text);
    },
    validateSpouseLastName: function() {
        var text = this.view.txtSpouseLastName.text;
        this.fv.checkAndUpdateStatusForNull(1, text);
    },
    onBack: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    onClose: function() {
        var  NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        NUOMod.presentationController.onClose();
    },
    validateFormUI: function() {
        var formValues = [];
        formValues.push(this.view.txtSpouseFirstName.text);
        formValues.push(this.view.txtSpouseLastName.text);
        this.fv.submissionView(this.view.btnContinuePersonalInfo);
        this.fv.preshowCheck(formValues);
    },
    validateAndNavigate: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var data = {
            "spouseFirstName": this.view.txtSpouseFirstName.text,
            "spouseLastName": this.view.txtSpouseLastName.text
        };
        var  NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        NUOMod.presentationController.updateNewUserModel(data);
        NUOMod.presentationController.commonFunctionForNavigation("frmOBDependents");
    },
    assignDataToForm: function(newUserJSON) {
        this.view.txtSpouseFirstName.text = (newUserJSON.spouseFirstName && newUserJSON.spouseFirstName !== "" && newUserJSON.spouseFirstName !== null) ? newUserJSON.spouseFirstName : "";
        this.view.txtSpouseLastName.text = (newUserJSON.spouseLastName && newUserJSON.spouseLastName !== "" && newUserJSON.spouseLastName !== null) ? newUserJSON.spouseLastName : "";
    }
});
define("NewUserModule/frmOBSpouseNameControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_cdb195ff78524a01b23a129b706a0be3: function AS_Button_cdb195ff78524a01b23a129b706a0be3(eventobject) {
        var self = this;
        var  NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        NUOMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    AS_Form_i91da114ad5c4b769df75f4719ae7109: function AS_Form_i91da114ad5c4b769df75f4719ae7109(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_j9156833848442a3ba23768f29f1c694: function AS_Form_j9156833848442a3ba23768f29f1c694(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_e1ddd60168a848d48163b767e76868f1: function AS_BarButtonItem_e1ddd60168a848d48163b767e76868f1(eventobject) {
        var self = this;
        this.onClose();
    }
});
define("NewUserModule/frmOBSpouseNameController", ["NewUserModule/userfrmOBSpouseNameController", "NewUserModule/frmOBSpouseNameControllerActions"], function() {
    var controller = require("NewUserModule/userfrmOBSpouseNameController");
    var controllerActions = ["NewUserModule/frmOBSpouseNameControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
