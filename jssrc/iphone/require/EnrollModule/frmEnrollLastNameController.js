define("EnrollModule/userfrmEnrollLastNameController", {
    timerCounter: 0,
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
    },
    frmEnrollLAstNamePreShow: function() {
        this.setFlowAction();
        this.setPreShowData();
        this.view.tbxLastName.setFocus(true);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
    },
    setFlowAction: function() {
        var scopeObj = this;
        this.view.customHeader.flxBack.onClick = function() {
            scopeObj.navBack();
        };
        this.view.customHeader.btnRight.onClick = function() {
            scopeObj.onClickCancel();
        };
        this.view.tbxLastName.onTextChange = function() {
            var text = scopeObj.view.tbxLastName.text;
            if (text === "" || text === undefined) {
                scopeObj.view.btnContinue.skin = "sknBtnOnBoardingInactive";
                scopeObj.view.btnContinue.setEnabled(false);
            } else {
                scopeObj.view.btnContinue.skin = "sknBtn0095e426pxEnabled";
                scopeObj.view.btnContinue.setEnabled(true);
            }
        };
        this.view.btnContinue.onClick = function() {
            scopeObj.validateLastName();
        };
    },
    setPreShowData: function() {
        this.view.tbxLastName.skin = "sknTbx424242SSPRegular28px";
        //   this.view.tbxLastName.focusSkin = "tbxBlueFocus";
        this.view.tbxLastName.setFocus(true);
        var scope = this;
        this.view.customHeader.lblLocateUs.text = "Last Name";
        if (applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone") {
            this.view.flxHeader.isVisible = true;
        } else {
            this.view.flxHeader.isVisible = false;
        }
        var  enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
        var userlastname = enrollMod.presentationController.getEnrollLastName();
        if (userlastname !== null && userlastname !== "" && userlastname !== undefined) {
            this.view.tbxLastName.text = userlastname;
            this.view.btnContinue.skin = "sknBtn0095e426pxEnabled";
            this.view.btnContinue.setEnabled(true);
        } else {
            this.view.tbxLastName.text = "";
            this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
            this.view.btnContinue.setEnabled(false);
        }
        //     this.view.btnContinue.skin = "sknBtnOnBoardingInactive";
        //     this.view.btnContinue.setEnabled(false);
    },
    navToSecurityCheck: function() {
        var  enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
        enrollMod.presentationController.commonFunctionForNavigation("frmEnrollSecurityCheck");
    },
    onClickCancel: function() {
        var  enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
        enrollMod.presentationController.resetEnrollObj();
    },
    navToDOB: function() {
        var  enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
        enrollMod.presentationController.commonFunctionForNavigation("frmEnrollDOB");
    },
    navBack: function() {
        var  enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
        enrollMod.presentationController.resetEnrollObj();
    },
    //development
    /**
     * validates Last Name
     */
    validateLastName: function() {
        var lastName = this.view.tbxLastName.text;
        if (lastName === '' || lastName === null || lastName === undefined) {
            this.bindViewError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.invalidLastName"));
        } else {
            var  enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
            enrollMod.presentationController.navigateToFrmEnrollSSN(lastName);
        }
    },
    /**
     *Shows Toast Message with red skin
     */
    bindViewError: function(msg) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
    },
});
define("EnrollModule/frmEnrollLastNameControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_bccdd148f545430ba4f819367c5fa246: function AS_Button_bccdd148f545430ba4f819367c5fa246(eventobject) {
        var self = this;
        var  enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
        enrollMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    AS_Form_c1409f1302c94460bbb3413525c66bda: function AS_Form_c1409f1302c94460bbb3413525c66bda(eventobject) {
        var self = this;
        this.init();
    },
    AS_Form_i0b75f9e426f421d82b8a81fa81340bd: function AS_Form_i0b75f9e426f421d82b8a81fa81340bd(eventobject) {
        var self = this;
        this.frmEnrollLAstNamePreShow();
    },
    AS_BarButtonItem_iff1de0bf545418a947ed1fb9ab9e26f: function AS_BarButtonItem_iff1de0bf545418a947ed1fb9ab9e26f(eventobject) {
        var self = this;
        //this.navBack();
        var  enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
        enrollMod.presentationController.resetEnrollObj();
        var navManager = applicationManager.getNavigationManager();
        navManager.navigateTo("frmLogin");
    },
    AS_BarButtonItem_e50e60e2483d468a84c3a8be1e6cb356: function AS_BarButtonItem_e50e60e2483d468a84c3a8be1e6cb356(eventobject) {
        var self = this;
        this.onClickCancel();
    }
});
define("EnrollModule/frmEnrollLastNameController", ["EnrollModule/userfrmEnrollLastNameController", "EnrollModule/frmEnrollLastNameControllerActions"], function() {
    var controller = require("EnrollModule/userfrmEnrollLastNameController");
    var controllerActions = ["EnrollModule/frmEnrollLastNameControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
