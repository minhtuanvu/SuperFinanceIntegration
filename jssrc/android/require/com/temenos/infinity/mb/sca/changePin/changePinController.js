define("com/temenos/infinity/mb/sca/changePin/userchangePinController", function() {
    var sdkConstants = {
        PIN_REQUEST: 100,
        TX_ACCEPTED: 101,
        TX_DENIED: 102,
        INCORRET_PIN: 103,
        PIN_LOCKED: 104,
        PIN_REMAINING_TRIES: 105,
        OTP_GENERATED: 106,
        ASYNC_OTP_GENERATED: 107,
        PIN_UPDATE_SUCCESS: 108,
        PIN_UPDATE_FAILED: 109,
    };
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            this.PIN_MIN_LENGTH = 6;
            this.PIN_MAX_LENGTH = 8;
        },
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {},
        preShowChangePin: function() {
            this.setTextAndSkinFromProperties();
            this.resetUI();
            this.setFlowActions();
        },
        setFlowActions: function() {
            let scopeObj = this;
            this.view.flxBack.onTouchEnd = function() {
                scopeObj.navigateToPrevScreen();
            };
            this.view.btnCancel.onClick = function() {
                scopeObj.navigateToPrevScreen();
            };
            this.view.flxCurrentPinToggle.onTouchEnd = function() {
                scopeObj.pinVisiblityToggle(scopeObj.view.imgCurrentPinVisiblityToggle, scopeObj.view.tbxCurrentPin);
            };
            this.view.flxNewPinToggle.onTouchEnd = function() {
                scopeObj.pinVisiblityToggle(scopeObj.view.imgNewPinVisiblityToggle, scopeObj.view.tbxNewPin);
            };
            this.view.tbxNewPin.onTouchStart = function() {
                scopeObj.enableChangePinButtonAndTickMark();
            };
            this.view.tbxNewPin.onTextChange = function() {
                scopeObj.enableChangePinButtonAndTickMark();
            };
            this.view.tbxReEnterPin.onTouchStart = function() {
                scopeObj.enableChangePinButtonAndTickMark();
            };
            this.view.tbxReEnterPin.onTextChange = function() {
                scopeObj.enableChangePinButtonAndTickMark();
            };
            this.view.btnChangePin.onClick = function() {
                scopeObj.changePin();
            };
            this.view.btnSignIn.onClick = function() {
                var navManager = applicationManager.getNavigationManager();
                navManager.navigateTo("frmLogin");
            };
        },
        resetUI: function() {
            this.view.flxMainContainer.setVisibility(true);
            this.view.flxBack.setVisibility(true);
            this.view.btnCancel.setVisibility(true);
            this.view.flxErrorPin.setVisibility(false);
            this.view.flxPinPasswordPolicy.setVisibility(false);
            this.view.flxSuccessMessage.setVisibility(false);
            this.view.tbxCurrentPin.secureTextEntry = true;
            this.view.tbxNewPin.secureTextEntry = true;
            this.view.btnChangePin.setEnabled(false);
            this.view.btnChangePin.skin = "sknBtna0a0a0SSPReg26px";
            this.view.rtxRulesPin.text = "Pin must be " + this.PIN_MIN_LENGTH + " digits in length";
            if (applicationManager.getPresentationFormUtility().getDeviceName() === "android") {
                this.view.flxTopMsg.shadowDepth = 10;
                this.view.flxTopMsg.shadowType = constants.VIEW_BOUNDS_SHADOW;
            }
            this.view.forceLayout();
        },
        pinVisiblityToggle: function(img, tbx) {
            if (img.src === "viewicon.png") {
                img.src = "viewactive.png";
                tbx.secureTextEntry = false;
            } else {
                img.src = "viewicon.png";
                tbx.secureTextEntry = true;
            }
            this.view.forceLayout();
        },
        enableChangePinButtonAndTickMark: function() {
            let iscurrentPinEntered = (this.view.tbxCurrentPin.text !== '' && this.view.tbxCurrentPin.text !== null && this.view.tbxCurrentPin.text !== undefined) ? true : false;
            let isNewPinEntered = (this.view.tbxNewPin.text !== '' && this.view.tbxNewPin.text !== null && this.view.tbxNewPin.text !== undefined) ? true : false;
            let isReEnterPinEntered = (this.view.tbxReEnterPin.text !== '' && this.view.tbxReEnterPin.text !== null && this.view.tbxReEnterPin.text !== undefined) ? true : false;
            if (iscurrentPinEntered && isNewPinEntered && isReEnterPinEntered && this.view.tbxNewPin.text === this.view.tbxReEnterPin.text && this.validatePin()) {
                this.view.imgReEnterPinMatch.src = "greentick.png";
                this.view.btnChangePin.setEnabled(true);
                this.view.btnChangePin.skin = "sknBtn0095e426pxEnabled";
                this.view.flxPinPasswordPolicy.setVisibility(false);
            } else {
                this.view.imgReEnterPinMatch.src = "tickmark.png";
                this.view.btnChangePin.setEnabled(false);
                this.view.btnChangePin.skin = "sknBtna0a0a0SSPReg26px";
                this.view.flxPinPasswordPolicy.setVisibility(true);
            }
            this.view.flxErrorPin.setVisibility(false);
        },
        validatePin: function() {
            let pin = this.view.tbxNewPin.text;
            var pinRegex = new RegExp("^\\d{" + this.PIN_MIN_LENGTH + "," + this.PIN_MAX_LENGTH + "}$");
            if (pinRegex.test(pin.trim())) {
                return true;
            } else {
                return false;
            }
        },
        changePin: function() {
            this.view.flxErrorPin.setVisibility(false);
            applicationManager.getPresentationUtility().showLoadingScreen();
            let userManager = applicationManager.getUserPreferencesManager();
            let userName = userManager.getUserObj().userName;
            let oldPin = this.view.tbxCurrentPin.text;
            let newPin = this.view.tbxNewPin.text;
            this.view.sdk.updatePin(userName, oldPin, newPin, this.changePinCallback);
        },
        changePinCallback: function(status, policyJSON) {
            let self = this;
            switch (status) {
                case sdkConstants.INCORRET_PIN:
                    self.showErrorMsg("You have enterend incorrect pin.");
                    break;
                case sdkConstants.PIN_UPDATE_FAILED:
                    self.showErrorMsg("Failed to change pin. Try again later.");
                    break;
                case sdkConstants.PIN_UPDATE_SUCCESS:
                    self.showSuccessScreen();
                    break;
                default:
                    kony.print("Failed to change pin");
                    self.showErrorMsg("Failed to change pin.");
            }
            applicationManager.getPresentationUtility().dismissLoadingScreen();
        },
        showErrorMsg: function(error) {
            this.view.lblErrorPin.text = error;
            this.view.flxErrorPin.setVisibility(true);
            this.view.forceLayout();
        },
        showSuccessScreen: function() {
            this.view.flxPin.setVisibility(false);
            this.view.flxBack.setVisibility(false);
            this.view.flxSuccessMessage.setVisibility(true);
            this.view.forceLayout();
        },
        navigateToPrevScreen: function() {
            const ntf = new kony.mvc.Navigation(kony.application.getPreviousForm().id);
            ntf.navigate();
        },
        getStringFromi18n: function(stringValue) {
            return kony.i18n.getLocalizedString(stringValue) ? kony.i18n.getLocalizedString(stringValue) : stringValue;
        },
        setTextAndSkinFromProperties: function() {},
    };
});
define("com/temenos/infinity/mb/sca/changePin/changePinControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_g0fd73ce30e743e18ad1f32efbdb017f: function AS_Button_g0fd73ce30e743e18ad1f32efbdb017f(eventobject) {
        var self = this;
        return self.navigateToPrevScreen.call(this);
    },
    AS_FlexContainer_i70a5d0f7a5e42c99f906d55cd871f59: function AS_FlexContainer_i70a5d0f7a5e42c99f906d55cd871f59(eventobject) {
        var self = this;
        return self.preShowChangePin.call(this);
    },
    AS_FlexContainer_b1710b68751d4342b63882f6f3ea4ba1: function AS_FlexContainer_b1710b68751d4342b63882f6f3ea4ba1(eventobject, x, y) {
        var self = this;
        return self.navigateToPrevScreen.call(this);
    }
});
define("com/temenos/infinity/mb/sca/changePin/changePinController", ["com/temenos/infinity/mb/sca/changePin/userchangePinController", "com/temenos/infinity/mb/sca/changePin/changePinControllerActions"], function() {
    var controller = require("com/temenos/infinity/mb/sca/changePin/userchangePinController");
    var actions = require("com/temenos/infinity/mb/sca/changePin/changePinControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
