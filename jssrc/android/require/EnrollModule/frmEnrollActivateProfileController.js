define("EnrollModule/userfrmEnrollActivateProfileController", {
    frmEnrollActivateProfilePreShow: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES", currentForm);
        this.resetUI();
        this.setFlowActions();
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            this.view.flxHeader.isVisible = false;
        } else {
            this.view.flxHeader.isVisible = true;
        }
    },
    resetUI: function() {
        this.view.activateProfile.setVisibility(false);
    },
    setFlowActions: function() {
        const scopeObj = this;
        this.view.customHeader.flxBack.onTouchEnd = function() {
            scopeObj.navigateToFrmLogin();
        };
        this.view.customHeader.btnRight.onClick = function() {
            scopeObj.navigateToFrmLogin();
        };
        this.view.flxEnrollAccount.onTouchEnd = function() {
            // Enroll Your Account Flow
            var navManager = applicationManager.getNavigationManager();
            navManager.navigateTo("frmEnrollLastName");
        };
        this.view.flxActivateAccount.onTouchEnd = function() {
            // Activation Flow Component
            if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
                var titleBarAttributes = scopeObj.view.titleBarAttributes;
                titleBarAttributes["navigationBarHidden"] = true;
                scopeObj.view.titleBarAttributes = titleBarAttributes;
                scopeObj.view.forceLayout();
            }
            scopeObj.view.activateProfile.setVisibility(true);
            // TODO - Make Backend Call to send Activation Code
        };
    },
    closeActivateProfileFlow: function() {
        if (applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone") {
            var titleBarAttributes = this.view.titleBarAttributes;
            titleBarAttributes["navigationBarHidden"] = false;
            this.view.titleBarAttributes = titleBarAttributes;
        }
        this.view.activateProfile.setVisibility(false);
    },
    navigateToFrmLogin: function() {
        var navManager = applicationManager.getNavigationManager();
        navManager.goBack();
    },
});
define("EnrollModule/frmEnrollActivateProfileControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_UWI_e8edd086e18f44a2a4c1b3a2ecb4d241: function AS_UWI_e8edd086e18f44a2a4c1b3a2ecb4d241() {
        var self = this;
        return self.closeActivateProfileFlow.call(this);
    },
    AS_UWI_f8e67744ef8d42498b481aa460a0da19: function AS_UWI_f8e67744ef8d42498b481aa460a0da19() {
        var self = this;
        return self.navigateToFrmLogin.call(this);
    },
    AS_Button_bccdd148f545430ba4f819367c5fa246: function AS_Button_bccdd148f545430ba4f819367c5fa246(eventobject) {
        var self = this;
        var  enrollMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("EnrollModule");
        enrollMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    AS_Form_cc03c790c039457284764371625ed0b8: function AS_Form_cc03c790c039457284764371625ed0b8(eventobject) {
        var self = this;
        return self.frmEnrollActivateProfilePreShow.call(this);
    },
    AS_BarButtonItem_g63d9831d55a4de886e1d37019ce8d67: function AS_BarButtonItem_g63d9831d55a4de886e1d37019ce8d67(eventobject) {
        var self = this;
        return self.navigateToFrmLogin.call(this);
    },
    AS_BarButtonItem_eedc52fa13ee44ca8d9d72e93bcf7e09: function AS_BarButtonItem_eedc52fa13ee44ca8d9d72e93bcf7e09(eventobject) {
        var self = this;
        return self.navigateToFrmLogin.call(this);
    }
});
define("EnrollModule/frmEnrollActivateProfileController", ["EnrollModule/userfrmEnrollActivateProfileController", "EnrollModule/frmEnrollActivateProfileControllerActions"], function() {
    var controller = require("EnrollModule/userfrmEnrollActivateProfileController");
    var controllerActions = ["EnrollModule/frmEnrollActivateProfileControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
