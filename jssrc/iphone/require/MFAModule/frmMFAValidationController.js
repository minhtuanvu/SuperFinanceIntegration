define("MFAModule/userfrmMFAValidationController", ["CommonUtilities"], function(CommonUtilities) {
    return {
        init: function() {
            let scopeObj = this;
            let navManager = applicationManager.getNavigationManager();
            let currentForm = navManager.getCurrentForm();
            applicationManager.getPresentationFormUtility().initCommonActions(this, "CALLBACK", currentForm, scopeObj.mfaDeviceBack);
        },
        mfaDeviceBack: function() {
            var navManager = applicationManager.getNavigationManager();
            navManager.goBack();
        },
        preShow: function() {
            let scopeObj = this;
            scopeObj.setFlowActions();
        },
        postShow: function() {
            let scopeObj = this;
            var navManager = applicationManager.getNavigationManager();
            var resp = navManager.getCustomInfo("frmMFAValidation");
            scopeObj.setFormUI(resp);
        },
        setFormUI: function(mfaResponse) {
            let scopeObj = this;
            if (CommonUtilities.isSCAEnabled()) {
                // TO DO : Add SCA component logic here
                // Here the following dummy 'SCAComponent' can be replaced with actual component.
                scopeObj.view.SecurityCodeComponent.setVisibility(false);
                scopeObj.view.SecurityQuestionsComponent.setVisibility(false);
                scopeObj.view.SCAComponent.setContext(mfaResponse);
                scopeObj.view.SCAComponent.setVisibility(true);
                kony.application.dismissLoadingScreen();
            } else {
                if (mfaResponse.response.MFAAttributes.MFAType === "SECURE_ACCESS_CODE") {
                    scopeObj.view.SecurityCodeComponent.objectServiceName1 = mfaResponse.objectServiceDetails.serviceName;
                    scopeObj.view.SecurityCodeComponent.objectName1 = mfaResponse.objectServiceDetails.dataModel;
                    scopeObj.view.SecurityCodeComponent.operationName1 = mfaResponse.objectServiceDetails.operationName;
                    scopeObj.view.SecurityCodeComponent.objectServiceName2 = mfaResponse.objectServiceDetails.serviceName;
                    scopeObj.view.SecurityCodeComponent.objectName2 = mfaResponse.objectServiceDetails.dataModel;
                    scopeObj.view.SecurityCodeComponent.operationName2 = mfaResponse.objectServiceDetails.operationName;
                    scopeObj.view.SecurityCodeComponent.action = mfaResponse.action;
                    scopeObj.view.SecurityCodeComponent.setContext(mfaResponse);
                    scopeObj.view.SecurityCodeComponent.setVisibility(true);
                    scopeObj.view.SecurityQuestionsComponent.setVisibility(false);
                } else {
                    scopeObj.view.SecurityQuestionsComponent.objectServiceName1 = mfaResponse.objectServiceDetails.serviceName;
                    scopeObj.view.SecurityQuestionsComponent.objectName1 = mfaResponse.objectServiceDetails.dataModel;
                    scopeObj.view.SecurityQuestionsComponent.operationName1 = mfaResponse.objectServiceDetails.operationName;
                    scopeObj.view.SecurityQuestionsComponent.action = mfaResponse.action;
                    scopeObj.view.SecurityQuestionsComponent.setContext(mfaResponse);
                    scopeObj.view.SecurityCodeComponent.setVisibility(false);
                    scopeObj.view.SecurityQuestionsComponent.setVisibility(true);
                }
            }
        },
        setFlowActions: function() {
            let scopeObj = this;
            // actions for Security Code Component
            scopeObj.view.SecurityCodeComponent.rememberDeviceRegFlag = function(rememberDeviceReg) {
                // DO NOTHING
            };
            scopeObj.view.SecurityCodeComponent.onSuccessCallback = function(response) {
                applicationManager.getPresentationUtility().MFA.navigateToAckScreen(response);
            };
            scopeObj.view.SecurityCodeComponent.onFailureCallback = function(response) {
                scopeObj.setErrorMessageAndLogout(response);
            };
            scopeObj.view.SecurityCodeComponent.onCancel = function(response) {
                applicationManager.getPresentationUtility().MFA.cancelMFAFlow();
            };
            // actions for Security Questions Component
            scopeObj.view.SecurityQuestionsComponent.rememberDeviceRegFlag = function(response) {
                // DO NOTHING
            };
            scopeObj.view.SecurityQuestionsComponent.onSuccessCallback = function(response) {
                applicationManager.getPresentationUtility().MFA.navigateToAckScreen(response);
            };
            scopeObj.view.SecurityQuestionsComponent.onFailureCallback = function(response) {
                scopeObj.setErrorMessageAndLogout(response);
            };
            scopeObj.view.SecurityQuestionsComponent.onCancel = function() {
                applicationManager.getPresentationUtility().MFA.cancelMFAFlow();
            };
            // actions for SCAComponent
            scopeObj.view.SCAComponent.onSuccessCallback = function(response) {
                applicationManager.getPresentationUtility().MFA.navigateToAckScreen(response);
            };
            scopeObj.view.SCAComponent.onFailureCallback = function(response) {
                scopeObj.setErrorMessageAndLogout(response);
            };
            scopeObj.view.SCAComponent.onCancel = function() {
                applicationManager.getPresentationUtility().MFA.cancelMFAFlow();
            };
        },
        setErrorMessageAndLogout: function(response) {
            if (response.hasOwnProperty("isLogoutUser") && response.isLogoutUser) {
                let loginData = applicationManager.getNavigationManager().getCustomInfo("frmLoginToast");
                loginData = loginData ? loginData : {};
                loginData.toastMessage = response.errorMessage;
                applicationManager.getNavigationManager().setCustomInfo("frmLoginToast", loginData);
                const authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
                authMod.presentationController.onLogout();
            } else {
                applicationManager.getPresentationUtility().MFA.onMFAError(response);
            }
        },
    }
});
define("MFAModule/frmMFAValidationControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_ce00262a1c8f4d0e98c2611d1055ddaf: function AS_Form_ce00262a1c8f4d0e98c2611d1055ddaf(eventobject) {
        var self = this;
        return self.init.call(this);
    },
    AS_Form_h366e5d4db384f6ea34a62c840d3f273: function AS_Form_h366e5d4db384f6ea34a62c840d3f273(eventobject) {
        var self = this;
        return self.postShow.call(this);
    },
    AS_Form_a704e63f21d24fbeb68c71ff0baac2e0: function AS_Form_a704e63f21d24fbeb68c71ff0baac2e0(eventobject) {
        var self = this;
        return self.preShow.call(this);
    },
    AS_BarButtonItem_ac4ae1379d434ed9a9a9e65b38dab7c0: function AS_BarButtonItem_ac4ae1379d434ed9a9a9e65b38dab7c0(eventobject) {
        var self = this;
        this.onCancelClick();
    }
});
define("MFAModule/frmMFAValidationController", ["MFAModule/userfrmMFAValidationController", "MFAModule/frmMFAValidationControllerActions"], function() {
    var controller = require("MFAModule/userfrmMFAValidationController");
    var controllerActions = ["MFAModule/frmMFAValidationControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
