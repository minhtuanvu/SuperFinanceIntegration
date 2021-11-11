define("NewUserModule/userfrmOBEmploymentDetailsController", {
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    preShow: function() {
        var scope = this;
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        var  NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        var NUOData = NUOMod.presentationController.getUserData();
        this.assignDataToForm(NUOData);
        this.setValidationBasedOnEmploymentType(NUOData);
        this.view.customHeader.flxBack.onClick = this.onBack;
        this.view.customHeader.btnRight.onClick = this.onClose;
        this.view.btnContinueEmploymentInfo.onClick = this.onSubmitEmploymentInfo;
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    setValidationBasedOnEmploymentType: function(NUOData) {
        if (NUOData.employmentInfo.toLowerCase() === "employed") {
            var FormValidator = require("FormValidatorManager")
            this.fv = new FormValidator(2);
            this.view.txtCompany.onTextChange = this.validateCompany;
            this.view.txtJobTitle.onTextChange = this.validateJobTitle;
            this.validateFormUI();
        } else {
            this.view.txtCompany.onTextChange = this.nullFunction;
            this.view.txtJobTitle.onTextChange = this.nullFunction;
            this.view.btnContinueEmploymentInfo.skin = "sknBtn0095e426pxEnabled";
            this.view.btnContinueEmploymentInfo.setEnabled(true);
        }
    },
    nullFunction: function() {},
    onBack: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    onClose: function() {
        var  NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        NUOMod.presentationController.onClose();
    },
    validateJobTitle: function() {
        var text = this.view.txtJobTitle.text;
        this.fv.checkAndUpdateStatusForNull(1, text);
    },
    validateCompany: function() {
        var text = this.view.txtCompany.text;
        this.fv.checkAndUpdateStatusForNull(0, text);
    },
    validateFormUI: function() {
        var formValues = [];
        formValues.push(this.view.txtCompany.text);
        formValues.push(this.view.txtJobTitle.text);
        this.fv.submissionView(this.view.btnContinueEmploymentInfo);
        this.fv.preshowCheck(formValues);
    },
    onSubmitEmploymentInfo: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var data = {
            "company": this.view.txtCompany.text,
            "jobProfile": this.view.txtJobTitle.text
        };
        var  NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
        NUOMod.presentationController.updateNewUserModel(data);
        NUOMod.presentationController.commonFunctionForNavigation("frmOBEmploymentCurrentPosition");
    },
    assignDataToForm: function(newUserJSON) {
        this.view.txtCompany.text = (newUserJSON.company && newUserJSON.company !== "" && newUserJSON.company !== null) ? newUserJSON.company : "";
        this.view.txtJobTitle.text = (newUserJSON.jobProfile && newUserJSON.jobProfile !== "" && newUserJSON.jobProfile !== null) ? newUserJSON.jobProfile : "";
    }
});
define("NewUserModule/frmOBEmploymentDetailsControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_a505c3325c0a43b0b469b35dc4d32d34: function AS_Form_a505c3325c0a43b0b469b35dc4d32d34(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_d3700a78d41c453f944bd1b87a563eea: function AS_Form_d3700a78d41c453f944bd1b87a563eea(eventobject) {
        var self = this;
        this.preShow();
    },
    AS_BarButtonItem_h65040c2ef6e49549cefae99050b14e3: function AS_BarButtonItem_h65040c2ef6e49549cefae99050b14e3(eventobject) {
        var self = this;
        this.onClose();
    }
});
define("NewUserModule/frmOBEmploymentDetailsController", ["NewUserModule/userfrmOBEmploymentDetailsController", "NewUserModule/frmOBEmploymentDetailsControllerActions"], function() {
    var controller = require("NewUserModule/userfrmOBEmploymentDetailsController");
    var controllerActions = ["NewUserModule/frmOBEmploymentDetailsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
