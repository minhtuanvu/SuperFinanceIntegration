define("com/temenos/infinity/mb/sca/scanotification/userscanotificationController", function() {
    const SDKConstants = {
        "PIN_REQUEST": 100,
        "OKRA_OTP_GENERATED": 107,
        "TX_ACCEPTED": 101,
        "TX_DENIED": 102
    };
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            this._objectService = "";
            this._dataModel = "";
            this._operation = "";
        },
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {
            defineGetter(this, 'objectService', () => {
                return this._objectService;
            });
            defineSetter(this, 'objectService', value => {
                this._objectService = value;
            });
            defineGetter(this, 'dataModel', () => {
                return this._dataModel;
            });
            defineSetter(this, 'dataModel', value => {
                this._dataModel = value;
            });
            defineGetter(this, 'operation', () => {
                return this._operation;
            });
            defineSetter(this, 'operation', value => {
                this._operation = value;
            });
        },
        showOKRAAuthentication: function(action) {
            const self = this;
            const currentForm = kony.application.getCurrentForm();
            const userManager = applicationManager.getUserPreferencesManager();
            const userName = userManager.getUserObj().userName;
            const OKRAcontext = action; //DEVICE_CONSTANTS.selectedDeviceID + "|" + "SUSPEND_DEVICE";
            self.view.sdk.generateOCRAOTP(userName, OKRAcontext, function(status, otpJSON) {
                const otp = JSON.parse(otpJSON).otp;
                const context = userName + "|" + "SUSPEND_USER"; //DEVICE_CONSTANTS.selectedDeviceID + "|" + "SUSPEND_DEVICE";
                if (SDKConstants.PIN_REQUEST === status) {
                    var pinLength = JSON.parse(otpJSON).MAX_LENGTH;
                    var sdk = hidApplicationSDKManager.getSdkInstance();
                    if (currentForm.sdk) {
                        currentForm.remove(sdk);
                    }
                    currentForm.add(sdk);
                    currentForm.sdk.setVisibility(true);
                    currentForm.sdk.showPinDialog(pinLength);
                    kony.application.dismissLoadingScreen();
                } else if (SDKConstants.OKRA_OTP_GENERATED === status) {
                    currentForm.sdk.hidePinDialog();
                    if (currentForm.sdk) {
                        currentForm.remove(currentForm.sdk);
                    }
                    kony.application.showLoadingScreen();
                    let payload = {
                        "id": userName,
                        "serviceName": "SUSPEND_USER",
                        "isMobile": true,
                        "otp": otp,
                        "context": context
                    };
                    self.fetchResponse(payload);
                }
            });
        },
        fetchResponse: function(payload) {
            let self = this;
            kony.application.showLoadingScreen();
            // datamodel has to be defined if there are any SCA services to be called.
            // otherwise we can bind the actual event in base product in successcallback. This will handle success and failure scenarios as defined in base product
            if (self.dataModel) {
                const dataModel = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository(self.dataModel);
                dataModel.customVerb(self.operation, payload, completionCallback);
            } else {
                self.onSuccessCallback();
            }

            function completionCallback(status, data, error) {
                const srh = applicationManager.getServiceResponseHandler();
                var obj = srh.manageResponse(status, data, error);
                if (obj["status"] === true) {
                    self.onSuccessCallback(obj["data"]);
                } else {
                    self.onFailureCallback(obj["errmsg"]);
                }
                kony.application.dismissLoadingScreen();
            }
        }
    };
});
define("com/temenos/infinity/mb/sca/scanotification/scanotificationControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/temenos/infinity/mb/sca/scanotification/scanotificationController", ["com/temenos/infinity/mb/sca/scanotification/userscanotificationController", "com/temenos/infinity/mb/sca/scanotification/scanotificationControllerActions"], function() {
    var controller = require("com/temenos/infinity/mb/sca/scanotification/userscanotificationController");
    var actions = require("com/temenos/infinity/mb/sca/scanotification/scanotificationControllerActions");
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
