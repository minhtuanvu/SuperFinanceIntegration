define("CardLessModule/userfrmCardLessRecNameController", {
    frmPreShow: function() {
        this.fv.submissionView(this.view.btnContinue);
        this.view.txtFirstName.onTextChange = this.btnContinueHandler;
        this.view.txtLastName.onTextChange = this.btnContinueHandler;
        this.view.customHeader.flxBack.onClick = this.flxBackOnClick;
        this.view.customHeader.btnRight.onClick = this.btnRightOnClick;
        this.view.btnContinue.onClick = this.btnContinueOnClick;
        this.renderTitleBar();
        this.view.txtFirstName.text = '';
        this.view.txtLastName.text = '';
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
        } else {
            this.view.flxHeader.isVisible = true;
        }
        var cLMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
        var firstName = cLMod.presentationController.getCashlessFirstName();
        var lastName = cLMod.presentationController.getCashlessLastName();
        if (firstName !== "") {
            this.view.txtFirstName.text = firstName;
            this.view.txtLastName.text = lastName;
        }
        if ((this.view.txtFirstName.text !== '') && (this.view.txtFirstName.text !== null)) {
            this.fv.checkAmountLength(this.view.txtFirstName.text);
        }
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    init: function() {
        var FormValidator = require("FormValidatorManager")
        this.fv = new FormValidator(2);
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    btnRightOnClick: function() {
        var cLMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
        cLMod.presentationController.cancelCommon();
    },
    renderTitleBar: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === 'iPhone') {
            this.view.flxHeader.setVisibility(false);
        }
    },
    btnContinueHandler: function() {
        this.fv.checkAmountLength(this.view.txtFirstName.text);
    },
    flxBackOnClick: function() {
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    btnContinueOnClick: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var cLMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CardLessModule");
        var names = [];
        names.push(this.view.txtFirstName.text);
        names.push(this.view.txtLastName.text);
        cLMod.presentationController.setCardlessPersonName(names);
    }
});
define("CardLessModule/frmCardLessRecNameControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_ic352ef8d6104137a3cfe6f1abbf436c: function AS_Form_ic352ef8d6104137a3cfe6f1abbf436c(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_df74b9f2f67045e1b54bbe864bd49537: function AS_Form_df74b9f2f67045e1b54bbe864bd49537(eventobject) {
        var self = this;
        return self.frmPreShow.call(this);
    },
    AS_BarButtonItem_f60b8b90447144ad953905f7871c8415: function AS_BarButtonItem_f60b8b90447144ad953905f7871c8415(eventobject) {
        var self = this;
        this.btnRightOnClick();
    }
});
define("CardLessModule/frmCardLessRecNameController", ["CardLessModule/userfrmCardLessRecNameController", "CardLessModule/frmCardLessRecNameControllerActions"], function() {
    var controller = require("CardLessModule/userfrmCardLessRecNameController");
    var controllerActions = ["CardLessModule/frmCardLessRecNameControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
