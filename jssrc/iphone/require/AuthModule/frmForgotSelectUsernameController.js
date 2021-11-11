define("AuthModule/userfrmForgotSelectUsernameController", [], function() {
    return {
        preShowSelectUsername: function() {
            this.getUserList();
            this.resetUI();
            this.renderTitleBar();
            this.setFlowActions();
        },
        resetUI: function() {
            this.setContinueButtonEnableState();
        },
        setFlowActions: function() {
            const scopeObj = this;
            this.view.customHeader.btnRight.onClick = function() {
                scopeObj.navigateToLoginScreen();
            };
            this.view.btnContinue.onClick = function() {
                scopeObj.navigateToNextScreen();
            };
        },
        navigateToLoginScreen: function() {
            const navManager = applicationManager.getNavigationManager();
            navManager.setCustomInfo("frmForgot", undefined);
            navManager.navigateTo("frmLogin");
        },
        navigateToNextScreen: function() {
            const navManager = applicationManager.getNavigationManager();
            let username = this.view.lblUsernameListBox.selectedKeyValue[0];
            navManager.setCustomInfo("frmForgot", undefined);
            navManager.setCustomInfo("selectedUser", username);
            navManager.navigateTo("frmForgotResetInformation");
        },
        setContinueButtonEnableState: function() {
            if (this.view.lblUsernameListBox.masterData.length !== 0) {
                this.view.btnContinue.skin = "sknBtn0095e426pxEnabled";
                this.view.btnContinue.setEnabled(true);
            } else {
                this.view.btnContinue.skin = "sknBtna0a0a0SSPReg26px";
                this.view.btnContinue.setEnabled(false);
            }
        },
        /**
         * @function
         *
         * @param userMap 
         */
        getUserList: function(userMap, serviceKey) {
            const navManager = applicationManager.getNavigationManager();
            var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
            var userlist = authModule.presentationController.userList;
            if (userMap) {
                navManager.setCustomInfo("userMap", userMap);
            }
            if (serviceKey) {
                navManager.setCustomInfo("serviceKey", serviceKey);
            }
            this.view.lblUsernameListBox.masterData = userlist;
            this.view.lblUsernameListBox.selectedKey = this.view.lblUsernameListBox.masterData[0][0];
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
define("AuthModule/frmForgotSelectUsernameControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_bca535d933294115b6f52552a731b32a: function AS_Button_bca535d933294115b6f52552a731b32a(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    AS_FlexContainer_b36153b67ba942a2aae35f1f9ef4d000: function AS_FlexContainer_b36153b67ba942a2aae35f1f9ef4d000(eventobject) {
        var self = this;
        var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.commonFunctionForNavigation("frmLogin");
    },
    AS_Form_cab1b95d28444aadb26b01451a79e03b: function AS_Form_cab1b95d28444aadb26b01451a79e03b(eventobject) {
        var self = this;
        return self.preShowSelectUsername.call(this);
    },
    AS_BarButtonItem_f78a4917e7d6404f8453a9307c184f7b: function AS_BarButtonItem_f78a4917e7d6404f8453a9307c184f7b(eventobject) {
        var self = this;
        return self.navigateToLoginScreen.call(this);
    }
});
define("AuthModule/frmForgotSelectUsernameController", ["AuthModule/userfrmForgotSelectUsernameController", "AuthModule/frmForgotSelectUsernameControllerActions"], function() {
    var controller = require("AuthModule/userfrmForgotSelectUsernameController");
    var controllerActions = ["AuthModule/frmForgotSelectUsernameControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
