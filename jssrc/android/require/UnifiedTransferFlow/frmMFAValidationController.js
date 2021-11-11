define("UnifiedTransferFlow/userfrmMFAValidationController", {
    onNavigate: function(params) {
        var scope = this;
        var navMan = applicationManager.getNavigationManager();
        params = navMan.getCustomInfo("frmMFAValidation");
        if (params !== "" && params !== null && params !== undefined) {
            scope.setFormUI(params);
        }
        //scope.preShow(params);
    },
    mfaDeviceBack: function() {
        //var navManager = applicationManager.getNavigationManager();
        //navManager.goBack();
    },
    preShow: function() {
        let scopeObj = this;
        scopeObj.setFlowActions();
    },
    setFormUI: function(mfaResponse) {
        let scopeObj = this;
        scopeObj.context = mfaResponse;
        if (mfaResponse.MFAAttributes.MFAType === "SECURE_ACCESS_CODE") {
            scopeObj.view.TransfersFlowSecurityCode.objectServiceName1 = mfaResponse.serviceName;
            scopeObj.view.TransfersFlowSecurityCode.objectName1 = mfaResponse.dataModel;
            scopeObj.view.TransfersFlowSecurityCode.operationName1 = mfaResponse.operationName;
            scopeObj.view.TransfersFlowSecurityCode.objectServiceName2 = mfaResponse.serviceName;
            scopeObj.view.TransfersFlowSecurityCode.objectName2 = mfaResponse.dataModel;
            scopeObj.view.TransfersFlowSecurityCode.operationName2 = mfaResponse.operationName;
            scopeObj.view.TransfersFlowSecurityCode.action = mfaResponse.action;
            scopeObj.view.TransfersFlowSecurityCode.setContext(mfaResponse);
            scopeObj.view.TransfersFlowSecurityCode.setVisibility(true);
            scopeObj.view.TransfersFlowSecurityQuestions.setVisibility(false);
        } else {
            scopeObj.view.TransfersFlowSecurityQuestions.objectServiceName1 = mfaResponse.serviceName;
            scopeObj.view.TransfersFlowSecurityQuestions.objectName1 = mfaResponse.dataModel;
            scopeObj.view.TransfersFlowSecurityQuestions.operationName1 = mfaResponse.operationName;
            scopeObj.view.TransfersFlowSecurityQuestions.action = mfaResponse.action;
            scopeObj.view.TransfersFlowSecurityQuestions.setContext(mfaResponse);
            scopeObj.view.TransfersFlowSecurityCode.setVisibility(false);
            scopeObj.view.TransfersFlowSecurityQuestions.setVisibility(true);
        }
        scopeObj.view.forceLayout();
    },
    setFlowActions: function() {
        let scopeObj = this;
        // actions for Security Code Component
        scopeObj.view.TransfersFlowSecurityCode.rememberDeviceRegFlag = function(rememberDeviceReg) {
            // DO NOTHING
        };
        scopeObj.view.TransfersFlowSecurityCode.onSuccessCallback = function(response) {
            if (!scopeObj.isEmptyNullUndefined(response)) {
                response = Object.assign(scopeObj.context, response);
                var transferType = scopeObj.context.transferTypeContext;
                scopeObj.navigationByTransferType(transferType, response);
            }
        };
        scopeObj.view.TransfersFlowSecurityCode.onFailureCallback = function(response) {
            //scopeObj.setErrorMessageAndLogout(response);
            if (!scopeObj.isEmptyNullUndefined(response)) {
                var transferType = scopeObj.response.transferTypeContext;
                scopeObj.navigationByTransferType(transferType, response);
            }
        };
        scopeObj.view.TransfersFlowSecurityCode.onCancel = function(response) {
            var navMan = applicationManager.getNavigationManager();
            navMan.navigateTo("frmSelectTransferType");
        };
        scopeObj.view.TransfersFlowSecurityCode.onBack = function(response) {
            scopeObj.onBackNavigation();
        };
        // actions for Security Questions Component
        scopeObj.view.TransfersFlowSecurityQuestions.rememberDeviceRegFlag = function(response) {
            // DO NOTHING
        };
        scopeObj.view.TransfersFlowSecurityQuestions.onSuccessCallback = function(response) {
            if (!scopeObj.isEmptyNullUndefined(response)) {
                response = Object.assign(scopeObj.context, response);
                var transferType = scopeObj.context.transferTypeContext;
                scopeObj.navigationByTransferType(transferType, response);
            }
        };
        scopeObj.view.TransfersFlowSecurityQuestions.onFailureCallback = function(response) {
            //scopeObj.setErrorMessageAndLogout(response);
            if (!scopeObj.isEmptyNullUndefined(response)) {
                var transferType = scopeObj.response.transferTypeContext;
                scopeObj.navigationByTransferType(transferType, response);
            }
        };
        scopeObj.view.TransfersFlowSecurityQuestions.onCancel = function() {
            var navMan = applicationManager.getNavigationManager();
            navMan.navigateTo("frmSelectTransferType");
        };
        scopeObj.view.TransfersFlowSecurityQuestions.onBack = function(response) {
            scopeObj.onBackNavigation();
        };
        /*scopeObj.view.TransfersFlowSecurityQuestions.onRequestStart: function() {
    kony.application.showLoadingScreen(null, "", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
  },

   scopeObj.view.TransfersFlowSecurityQuestions.onRequestEnd: function() {
    kony.application.dismissLoadingScreen();
  },
   
   scopeObj.view.TransfersFlowSecurityCode.onRequestStart: function() {
    kony.application.showLoadingScreen(null, "", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
  },

   scopeObj.view.TransfersFlowSecurityCode.onRequestEnd: function() {
    kony.application.dismissLoadingScreen();
  },*/
    },
    /**
     * Component navigationByTransferType
     * verifies the transferType and navigate based on value
     * transferType {string} - transferType of flow
     */
    navigationByTransferType: function(transferType, response) {
        var scope = this;
        var navMan = applicationManager.getNavigationManager();
        switch (transferType) {
            case "Within Same Bank":
                navMan.setCustomInfo("flxSameBankAcknowledgement", response);
                navMan.navigateTo("UnifiedTransferFlow/flxSameBankAcknowledgement");
                break;
            case "Domestic Transfer":
                navMan.setCustomInfo("flxDomesticAcknowledgement", response);
                navMan.navigateTo("UnifiedTransferFlow/flxDomesticAcknowledgement");
                break;
            case "International Transfer":
                navMan.setCustomInfo("flxInternationalAcknowledgement", response);
                navMan.navigateTo("UnifiedTransferFlow/flxInternationalAcknowledgement");
                break;
            case "Pay a Person":
                navMan.setCustomInfo("frmP2PAcknowledgement", response);
                navMan.navigateTo("UnifiedTransferFlow/frmP2PAcknowledgement");
                break;
        }
    },
    /**
     * Component onBackNavigation
     * verifies the transferType and navigate based on value
     * transferType {string} - transferType of flow
     */
    onBackNavigation: function() {
        var scope = this;
        var navMan = applicationManager.getNavigationManager();
        navMan.goBack();
    },
    /**
     * Component isEmptyNullUndefined
     * Verifies if the value is empty, null or undefined
     * data {string} - value to be verified
     * @return : {boolean} - validity of the value passed
     */
    isEmptyNullUndefined: function(data) {
        if (data === null || data === undefined || data === "") return true;
        return false;
    },
    /* setErrorMessageAndLogout: function (response) {
        if(response.hasOwnProperty("isLogoutUser") && response.isLogoutUser ){
          let loginData = applicationManager.getNavigationManager().getCustomInfo("frmLoginToast");
          loginData = loginData ? loginData : {};
          loginData.toastMessage = response.errorMessage;
          applicationManager.getNavigationManager().setCustomInfo("frmLoginToast", loginData);
          const authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
          authMod.presentationController.onLogout();
        } else {
          applicationManager.getPresentationUtility().MFA.onMFAError(response);
        }
      },*/
});
define("UnifiedTransferFlow/frmMFAValidationControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_a6ce22eb09f644029eef3972b33beb81: function AS_Form_a6ce22eb09f644029eef3972b33beb81(eventobject) {
        var self = this;
        kony.print("Back Navigation Disabled");
    },
    AS_Form_g1f2fbc9a1e64cf39fa55f1cb6a558ff: function AS_Form_g1f2fbc9a1e64cf39fa55f1cb6a558ff(eventobject) {
        var self = this;
        return self.preShow.call(this);
    }
});
define("UnifiedTransferFlow/frmMFAValidationController", ["UnifiedTransferFlow/userfrmMFAValidationController", "UnifiedTransferFlow/frmMFAValidationControllerActions"], function() {
    var controller = require("UnifiedTransferFlow/userfrmMFAValidationController");
    var controllerActions = ["UnifiedTransferFlow/frmMFAValidationControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
