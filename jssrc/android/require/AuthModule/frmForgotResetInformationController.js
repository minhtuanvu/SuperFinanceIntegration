define("AuthModule/userfrmForgotResetInformationController", [], function() {
    return {
        preShowResetInformation: function() {
            this.fetchAndSetUsername();
            this.resetUI();
            this.renderTitleBar();
            this.setFlowActions();
        },
        fetchAndSetUsername: function() {
            const navManager = applicationManager.getNavigationManager();
            let user = navManager.getCustomInfo("selectedUser");
            this.view.lblUsername.text = user.UserName;
            this.view.resetPassword.setVisibility(false);
        },
        resetUI: function() {
            const navManager = applicationManager.getNavigationManager();
            this.view.lblErrorMessageScreen1.setVisibility(false);
            this.view.lblErrorMessage.setVisibility(false);
            let user = navManager.getCustomInfo("selectedUser");
            this.view.lblUsername.text = user;
            var selectedUser = navManager.getCustomInfo("userMap");
            let status = selectedUser.get(user).Status_id;
            if (status === 'SID_CUS_ACTIVE') {
                this.view.flxResetPasswordORSignIn.setVisibility(true);
            } else {
                this.view.flxRegenerateActivationCode.setVisibility(true);
            }
        },
        setFlowActions: function() {
            const scopeObj = this;
            const navManager = applicationManager.getNavigationManager();
            this.view.customHeader.flxBack.onTouchEnd = function() {
                navManager.navigateTo("frmForgotSelectUsername");
            };
            this.view.customHeader.btnRight.onClick = function() {
                scopeObj.removeSavedData();
                navManager.navigateTo("frmLogin");
            };
            scopeObj.view.flxResetMyPassword.onTouchEnd = function() {
                scopeObj.view.resetPassword.setVisibility(true);
                let user = navManager.getCustomInfo("selectedUser");
                let serviceKey = navManager.getCustomInfo("serviceKey");
                scopeObj.view.resetPassword.navigateToMFA(user, serviceKey);
            };
            this.view.flxSignInNow.onTouchEnd = function() {
                scopeObj.signInNow();
            };
            this.view.flxRegenerateActivationOption.onTouchEnd = function() {
                scopeObj.regenerateActivationCode();
            };
        },
        removeSavedData: function() {
            // Removing stored data incase user clicks on cancel
            const navManager = applicationManager.getNavigationManager();
            navManager.setCustomInfo("frmForgot", undefined);
        },
        cancelResetPassword: function() {
            this.view.resetPassword.setVisibility(false);
            this.view.resetPassword.resetUI();
        },
        resetPasswordSuccessCallback: function(response) {
            const navManager = applicationManager.getNavigationManager();
            navManager.navigateTo("frmLogin");
        },
        resetPasswordFailureCallback: function(response) {
            // TODO : add failure funtionality
        },
        signInNow: function() {
            const navManager = applicationManager.getNavigationManager();
            var data = navManager.getCustomInfo("frmLogin");
            data["usernameFromForgotUsername"] = this.view.lblUsername.text;
            navManager.setCustomInfo("frmLogin", data);
            navManager.navigateTo("frmLogin");
        },
        signInNowSuccess: function() {
            this.removeSavedData();
            // TODO
        },
        signInNowFailure: function() {
            // TODO
            this.view.lblErrorMessageScreen1.text = "Sign In Failed!";
            this.view.lblErrorMessageScreen1.setVisibility(true);
        },
        regenerateActivationCode: function() {
            // TODO: Call to Regenerate Activation Code
            const navManager = applicationManager.getNavigationManager();
            let user = navManager.getCustomInfo("selectedUser");
            var selectedUser = navManager.getCustomInfo("userMap");
            const serviceKey = navManager.getCustomInfo("serviceKey");
            let id = selectedUser.get(user).id;
            var params = {
                "serviceKey": serviceKey,
                "id": id
            };
            const authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
            authMode.presentationController.regenerateActivationCode(params);
        },
        regenerateActivationSuccess: function() {
            this.removeSavedData();
            this.view.ActivationCodeSuccess.setVisibility(true); // Enable Component
            // TODO
        },
        regenerateActivationFailure: function() {
            this.view.lblErrorMessage.setVisibility(true);
            // TODO
        },
        closeComponentAndActivateAccount: function() {
            // Method linked to closeComponent() Event of ActivationCodeSuccess Component
            this.view.ActivationCodeSuccess.setVisibility(false);
            const navManager = applicationManager.getNavigationManager();
            navManager.navigateTo("frmLogin");
        },
        renderTitleBar: function() {
            var deviceUtilManager = applicationManager.getDeviceUtilManager();
            var isIphone = deviceUtilManager.isIPhone();
            if (!isIphone) {
                this.view.flxHeader.isVisible = true;
            } else {
                this.view.flxHeader.isVisible = false;
            }
        },
    };
});
define("AuthModule/frmForgotResetInformationControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_UWI_b35690c0e17e48c7aabb9dc8003d3250: function AS_UWI_b35690c0e17e48c7aabb9dc8003d3250() {
        var self = this;
        return self.closeComponentAndActivateAccount.call(this);
    },
    AS_FlexContainer_e0bc99d1d27441c2b6966a1951462ea1: function AS_FlexContainer_e0bc99d1d27441c2b6966a1951462ea1(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    AS_Form_cdacc0ed5a5a4f80a80d980bf2d3cf61: function AS_Form_cdacc0ed5a5a4f80a80d980bf2d3cf61(eventobject) {
        var self = this;
        return self.preShowResetInformation.call(this);
    },
    AS_BarButtonItem_afc7e8dae4224a75bbb852ed37f7a100: function AS_BarButtonItem_afc7e8dae4224a75bbb852ed37f7a100(eventobject) {
        var self = this;
        applicationManager.getNavigationManager().navigateTo("frmForgotSelectUsername");
    },
    AS_BarButtonItem_d84bccd3e8a247cb9e0307d3f13f6553: function AS_BarButtonItem_d84bccd3e8a247cb9e0307d3f13f6553(eventobject) {
        var self = this;
        self.removeSavedData();
        applicationManager.getNavigationManager().navigateTo("frmLogin");
    },
    AS_UWI_b8e6cbb0ca854bd790d320199ef7d057: function AS_UWI_b8e6cbb0ca854bd790d320199ef7d057() {
        var self = this;
        return self.cancelResetPassword.call(this);
    },
    AS_UWI_da396c80f5e54804aa46b68beb3af3ec: function AS_UWI_da396c80f5e54804aa46b68beb3af3ec(response) {
        var self = this;
        return self.resetPasswordFailureCallback.call(this, response);
    },
    AS_UWI_c73106b14aa34e8faa25351719bedf20: function AS_UWI_c73106b14aa34e8faa25351719bedf20(response) {
        var self = this;
        return self.resetPasswordSuccessCallback.call(this, response);
    }
});
define("AuthModule/frmForgotResetInformationController", ["AuthModule/userfrmForgotResetInformationController", "AuthModule/frmForgotResetInformationControllerActions"], function() {
    var controller = require("AuthModule/userfrmForgotResetInformationController");
    var controllerActions = ["AuthModule/frmForgotResetInformationControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
