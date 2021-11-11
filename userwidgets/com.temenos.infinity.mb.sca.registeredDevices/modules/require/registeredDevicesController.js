define(['./registeredDevicesDAO', 'SCAUtility'],function(registeredDevicesDAO, SCAUtility) {
  const SDKConstants = {
    "PIN_REQUEST" : 100,
    "OKRA_OTP_GENERATED" : 107,
    "TX_ACCEPTED" : 101,
    "TX_DENIED"   : 102
  };
  const DEVICE_CONSTANTS = {
    selectedDeviceID: null,
    selectedDeviceStatus: null,
    devicesCount: null,
    selectedDeviceName: null
  };
  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this.RegisteredDevicesDAO = new registeredDevicesDAO();
      this._objectServiceName1="";
      this._objectName1="";
      this._operationName1="";
      this._objectServiceName2="";
      this._objectName2="";
      this._operationName2="";
      this._objectServiceName3="";
      this._objectName3="";
      this._operationName3="";
      this._objectServiceName4="";
      this._objectName4="";
      this._operationName4="";

      this._lblRegisteredDevicesText = "";
      this._btnRegisterNewDeviceText = "";
      this._btnSuspendDeviceText = "";
      this._btnUnsuspendDeviceText = "";
      this._btnRemoveDeviceText = "";
    },

    //Logic for getters/setters of custom properties
    initGettersSetters: function() {
      defineGetter(this, 'lblRegisteredDevicesText', () => {
        return this._lblRegisteredDevicesText;
      });
      defineSetter(this, 'lblRegisteredDevicesText', value => {
        this._lblRegisteredDevicesText = value;
      });
      defineGetter(this, 'btnRegisterNewDeviceText', () => {
        return this._btnRegisterNewDeviceText;
      });
      defineSetter(this, 'btnRegisterNewDeviceText', value => {
        this._btnRegisterNewDeviceText = value;
      });
      defineGetter(this, 'btnSuspendDeviceText', () => {
        return this._btnSuspendDeviceText;
      });
      defineSetter(this, 'btnSuspendDeviceText', value => {
        this._btnSuspendDeviceText = value;
      });
      defineGetter(this, 'btnUnsuspendDeviceText', () => {
        return this._btnUnsuspendDeviceText;
      });
      defineSetter(this, 'btnUnsuspendDeviceText', value => {
        this._btnUnsuspendDeviceText = value;
      });
      defineGetter(this, 'btnRemoveDeviceText', () => {
        return this._btnRemoveDeviceText;
      });
      defineSetter(this, 'btnRemoveDeviceText', value => {
        this._btnRemoveDeviceText = value;
      });
      defineGetter(this, 'objectServiceName1', () => {
        return this._objectServiceName1;
      });
      defineSetter(this, 'objectServiceName1', value => {
        this._objectServiceName1 = value;
      });
      defineGetter(this, 'objectName1', () => {
        return this._objectName1;
      });
      defineSetter(this, 'objectName1', value => {
        this._objectName1 = value;
      });
      defineGetter(this, 'operationName1', () => {
        return this._operationName1;
      });
      defineSetter(this, 'operationName1', value => {
        this._operationName1 = value;
      });
      defineGetter(this, 'objectServiceName2', () => {
        return this._objectServiceName2;
      });
      defineSetter(this, 'objectServiceName2', value => {
        this._objectServiceName2 = value;
      });
      defineGetter(this, 'objectName2', () => {
        return this._objectName2;
      });
      defineSetter(this, 'objectName2', value => {
        this._objectName2 = value;
      });
      defineGetter(this, 'operationName2', () => {
        return this._operationName2;
      });
      defineSetter(this, 'operationName2', value => {
        this._operationName2 = value;
      });
      defineGetter(this, 'objectServiceName3', () => {
        return this._objectServiceName3;
      });
      defineSetter(this, 'objectServiceName3', value => {
        this._objectServiceName3 = value;
      });
      defineGetter(this, 'objectName3', () => {
        return this._objectName3;
      });
      defineSetter(this, 'objectName3', value => {
        this._objectName3 = value;
      });
      defineGetter(this, 'operationName3', () => {
        return this._operationName3;
      });
      defineSetter(this, 'operationName3', value => {
        this._operationName3 = value;
      });
      defineGetter(this, 'objectServiceName4', () => {
        return this._objectServiceName4;
      });
      defineSetter(this, 'objectServiceName4', value => {
        this._objectServiceName4 = value;
      });
      defineGetter(this, 'objectName4', () => {
        return this._objectName4;
      });
      defineSetter(this, 'objectName4', value => {
        this._objectName4 = value;
      });
      defineGetter(this, 'operationName4', () => {
        return this._operationName4;
      });
      defineSetter(this, 'operationName4', value => {
        this._operationName4 = value;
      });
    },

    preShowRegisteredDevices: function(){
      this.setTextFromi18n();
      this.resetUI();
      this.setFlowActions();
      this.getDevices(); //Backend Call 
    },

    resetUI: function(){
      this.assignDefaultText();
      this.view.flxPopups.setVisibility(false);
      this.view.flxLogoutScreen.setVisibility(false);
      this.view.flxCustomDevicePopup.setVisibility(false);   
      this.view.flxDeviceSettingsPopup.setVisibility(false);
    },

    assignDefaultText: function(){
      this.view.lblRegisteredDevices.text = this._lblRegisteredDevicesText;
      this.view.btnRegisterNewDevice.text = this._btnRegisterNewDeviceText;
      this.view.btnSuspendDevice.text = this._btnSuspendDeviceText;      
      this.view.btnUnsuspendDevice.text = this._btnUnsuspendDeviceText;
      this.view.btnRemoveDevice.text = this._btnRemoveDeviceText;
    },

    setTextFromi18n: function(){
      this._lblRegisteredDevicesText = this.getStringFromi18n(this._lblRegisteredDevicesText);
      this._btnRegisterNewDeviceText = this.getStringFromi18n(this._btnRegisterNewDeviceText);
      this._btnSuspendDeviceText = this.getStringFromi18n(this._btnSuspendDeviceText);
      this._btnUnsuspendDeviceText = this.getStringFromi18n(this._btnUnsuspendDeviceText);
      this._btnRemoveDeviceText = this.getStringFromi18n(this._btnRemoveDeviceText);
    },

    getStringFromi18n: function(stringValue){
      return  kony.i18n.getLocalizedString(stringValue) ? kony.i18n.getLocalizedString(stringValue) : stringValue;
    },

    setFlowActions: function(){
      const scopeObj = this;
      this.view.flxBack.onClick = function(){
        const ntf = new kony.mvc.Navigation(kony.application.getPreviousForm().id);
        ntf.navigate();
      };
      this.view.btnRegisterNewDevice.onClick = function(){
        scopeObj.handleOnClickRegisterDevice();
      };
      this.view.btnSuspendDevice.onClick = function(){
        scopeObj.handleOnClickSuspendDevice();
      };
      this.view.btnUnsuspendDevice.onClick = function(){
        scopeObj.handleOnClickUnsuspendDevice();
      };
      this.view.btnRemoveDevice.onClick = function(){
        scopeObj.handleOnClickRemoveDevice();
      };
      this.view.btnCancel.onClick = function(){
        scopeObj.setDeviceSettingsPopupVisibility(false);
      };
      this.view.btnDecisionNo.onClick = function(){
        scopeObj.setDevicePopupVisibility(false);
      };
      this.view.btnDecisionYes.onClick = function(){
        const popupTitle = scopeObj.view.lblPopupTitle.text;
        scopeObj.setDevicePopupVisibility(false);
        scopeObj.handleAction(popupTitle);
      };
      this.view.btnLogIn.onClick = function(){
        const authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMod.presentationController.signInFromLogoutScreen();
      };
      this.view.flxPopups.onTouchEnd = null;
      this.view.flxCustomDevicePopup.onTouchEnd = null;
      this.view.flxDeviceSettingsPopup.onTouchEnd = null;
    },

    handleOnClickRegisterDevice: function(){
      const popupData = {        
        title: kony.i18n.getLocalizedString("kony.mb.sca.RegisterANewDevice"),
        description: kony.i18n.getLocalizedString("kony.mb.sca.RegisterNewDeviceMessage")
      };
      this.populateCustomPopupData(popupData);
      this.setDevicePopupVisibility(true);
    },    

    handleOnClickSuspendDevice: function(){
      let popupData = {};
      if(this.view.segRegisteredDevices.data.length===1){
        popupData = {
          title: kony.i18n.getLocalizedString("kony.mb.sca.SuspendDeviceQM"),
          description: kony.i18n.getLocalizedString("kony.mb.sca.SuspendDeviceMsgSingleDevice")
        };        
      } else if(this.view.segRegisteredDevices.data.length>1) {
        popupData = {
          title: kony.i18n.getLocalizedString("kony.mb.sca.SuspendDeviceQM"),
          description: kony.i18n.getLocalizedString("kony.mb.sca.SuspendDeviceMsgMultipleDevices")
        };
      }
      this.populateCustomPopupData(popupData);
      this.setDevicePopupVisibility(true);
    },

    handleOnClickUnsuspendDevice: function(){      
      let popupData = {
        title: kony.i18n.getLocalizedString("kony.mb.sca.UnsuspendDeviceQM"),
        description: kony.i18n.getLocalizedString("kony.mb.sca.UnsuspendDeviceMsg")
      };
      this.populateCustomPopupData(popupData);
      this.setDevicePopupVisibility(true);
    },

    handleOnClickRemoveDevice: function(){
      let popupData = {};
      if(this.view.segRegisteredDevices.data.length===1){
        popupData = {
          title: kony.i18n.getLocalizedString("kony.mb.sca.RemoveDeviceQM"),
          description: kony.i18n.getLocalizedString("kony.mb.sca.RemoveDeviceMsgSingleDevice")
        };
      } else if(this.view.segRegisteredDevices.data.length>1){
        popupData = {
          title: kony.i18n.getLocalizedString("kony.mb.sca.RemoveDeviceQM"),
          description: kony.i18n.getLocalizedString("kony.mb.sca.RemoveDeviceMsgMultipleDevices")
        };
      }
      this.populateCustomPopupData(popupData);
      this.setDevicePopupVisibility(true);
    },

    setDevicePopupVisibility: function(isVisible){
      this.view.flxPopups.setVisibility(isVisible);
      this.view.flxCustomDevicePopup.setVisibility(isVisible);
      this.view.flxDeviceSettingsPopup.setVisibility(false);
    },

    setDeviceSettingsPopupVisibility: function(isVisible, isSuspended=false){      
      this.view.btnSuspendDevice.setVisibility(!isSuspended);
      this.view.btnUnsuspendDevice.setVisibility(isSuspended);
      this.view.flxCustomDevicePopup.setVisibility(false);
      this.view.flxPopups.setVisibility(isVisible);
      this.view.flxDeviceSettingsPopup.setVisibility(isVisible);
    },

    populateCustomPopupData: function({title, description}){
      this.view.lblPopupTitle.text = title;
      this.view.lblDescription.text = description;
    },

    populateData: function(registeredDevicesData){
      this.view.segRegisteredDevices.widgetDataMap = this.getDevicesDataMap();
      const mappedSegmentData = registeredDevicesData.map(this.mappingSegmentData);
      this.view.segRegisteredDevices.setData(mappedSegmentData);
    },

    mappingSegmentData: function({id, friendlyName, registeredOn, status}){      
      const scopeObj = this;
      const deviceStatusVisibility = (status &&
                                      status!=="" &&
                                      status!==undefined) ? true : false;
      let imgDeviceStatus = "";
      if(deviceStatusVisibility){
        if(status === "ACTIVE") imgDeviceStatus="confirmation_tick.png";
        else if(status === "SUSPENDED") imgDeviceStatus="warninground.png";
      }
      let lblDeviceStatus = deviceStatusVisibility ? status : "";
      let [year, month, date] = registeredOn.split("T")[0].split("-");
      const registeredDate = `${month}/${date}/${year}`;
      return {
        id: id,
        registeredOn: registeredOn,
        friendlyName: friendlyName,
        status: status,
        imgDevice: {
          src: "device_3.png"
        },
        lblDeviceName: {
          text: friendlyName
        },
        lblDeviceRegisteredDate: {
          text: `Registered on: ${registeredDate}`
        },
        flxDeviceInfoRight: {
          onClick: ()=>{
            DEVICE_CONSTANTS.selectedDeviceName = friendlyName;
            DEVICE_CONSTANTS.selectedDeviceID = id;
            DEVICE_CONSTANTS.selectedDeviceStatus = status;
            scopeObj.setDeviceSettingsPopupVisibility(true, status==="SUSPENDED");
          },
        },
        imgOptions: {
          src: "more_detail.png"
        },
        flxDeviceStatus: {
          isVisible: deviceStatusVisibility
        },
        imgDeviceStatus: {
          src: imgDeviceStatus
        },
        lblDeviceStatus: {
          text: lblDeviceStatus
        }
      };
    },

    getDevicesDataMap: function(){
      return {
        flxRegisteredDevices: "flxRegisteredDevices",
        flxDeviceInfo: "flxDeviceInfo",
        flxDeviceInfoLeft: "flxDeviceInfoLeft",
        imgDevice: "imgDevice",
        flxDeviceInfoMid: "flxDeviceInfoMid",
        flxDeviceInfoMidInner: "flxDeviceInfoMidInner",
        lblDeviceName: "lblDeviceName",
        flxDeviceRegistrationDate: "flxDeviceRegistrationDate",
        lblRegisteredOn: "lblRegisteredOn",
        lblDeviceRegisteredDate: "lblDeviceRegisteredDate",
        flxDeviceInfoRight: "flxDeviceInfoRight",
        imgOptions: "imgOptions",
        flxDeviceStatus: "flxDeviceStatus",
        flxDeviceStatusInner: "flxDeviceStatusInner",
        imgDeviceStatus: "imgDeviceStatus",
        lblDeviceStatus: "lblDeviceStatus"
      };
    },

    getDevices: function(){
      const servicePayload = {
        objServiceName: this._objectServiceName1,
        objName: this._objectName1,
        operationName: this._operationName1,
        payload: "",
        successCallback: this.getDevicesSuccessCallback,
        errorCallback: this.getDevicesErrorCallback
      };
      applicationManager.getPresentationUtility().showLoadingScreen();
      SCAUtility.callBackendService(servicePayload);
    },
    getDevicesSuccessCallback: function(data){
      this.populateData(data.devices);
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      DEVICE_CONSTANTS.devicesCount = data.devices.length;
    },
    getDevicesErrorCallback: function(err){
      kony.print("ERROR" + JSON.stringify(err));
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    },

    handleAction: function(popupTitle){
      switch(popupTitle){
        case kony.i18n.getLocalizedString("kony.mb.sca.RegisterANewDevice"):
          this.registerDevice();
          break;
        case kony.i18n.getLocalizedString("kony.mb.sca.SuspendDeviceQM"):
          this.suspendDevice();
          break;
        case kony.i18n.getLocalizedString("kony.mb.sca.UnsuspendDeviceQM"):
          this.unsuspendDevice();
          break;
        case kony.i18n.getLocalizedString("kony.mb.sca.RemoveDeviceQM"):
          this.revokeDevice();
          break;
        default:
          kony.print("Error while calling service");
      }
    },

    registerDevice: function(){
      const scopeObj = this;
      const currentForm = kony.application.getCurrentForm();      
      const userManager = applicationManager.getUserPreferencesManager();
      const userName = userManager.getUserObj().userName;
      const OKRAcontext = "REGISTER_NEW_DEVICE";
      scopeObj.view.sdk.generateOCRAOTP(userName, OKRAcontext, function(status, otpJSON) {
        const otp = JSON.parse(otpJSON).otp;
        const serviceName = "REGISTER_NEW_DEVICE";
        const context = "REGISTER_NEW_DEVICE";
        if(SDKConstants.PIN_REQUEST === status) {
          var pinLength = JSON.parse(otpJSON).MAX_LENGTH;
          var sdk = hidApplicationSDKManager.getSdkInstance();
          if(currentForm.sdk){
            currentForm.remove(sdk);
          }
          currentForm.add(sdk);
          currentForm.sdk.setVisibility(true);
          currentForm.sdk.showPinDialog(pinLength);
        } else if(SDKConstants.OKRA_OTP_GENERATED === status) {
          currentForm.sdk.hidePinDialog();
          if(currentForm.sdk){
            currentForm.remove(currentForm.sdk);
          }
          applicationManager.getPresentationUtility().showLoadingScreen();          
          const servicePayload = {
            objServiceName: scopeObj._objectServiceName4,
            objName: scopeObj._objectName4,
            operationName: scopeObj._operationName4,
            payload: {
              "serviceName": serviceName,
              "isMobile": true,
              "otp": otp,
              "context": context
            },
            successCallback: scopeObj.registerDeviceSuccessCallback,
            errorCallback: scopeObj.registerDeviceFailureCallback
          };
          SCAUtility.callBackendService(servicePayload);
        }
      });
    },
    
    suspendDevice: function(){
      const scopeObj = this;
      const currentForm = kony.application.getCurrentForm();
      const userManager = applicationManager.getUserPreferencesManager();
      const userName = userManager.getUserObj().userName;
      const OKRAcontext = DEVICE_CONSTANTS.selectedDeviceID + "|" + "SUSPEND_DEVICE";
      scopeObj.view.sdk.generateOCRAOTP(userName, OKRAcontext, function(status, otpJSON) {
        const otp = JSON.parse(otpJSON).otp;
        let successcallback = null;
        if(DEVICE_CONSTANTS.devicesCount>1){
          successcallback = scopeObj.suspendDeviceMultipleSuccessCallback;
        } else if(DEVICE_CONSTANTS.devicesCount===1){
          successcallback = scopeObj.suspendDeviceSingleSuccessCallback;
        }
        const context = DEVICE_CONSTANTS.selectedDeviceID + "|" + "SUSPEND_DEVICE";
        if(SDKConstants.PIN_REQUEST === status) {
          var pinLength = JSON.parse(otpJSON).MAX_LENGTH;
          var sdk = hidApplicationSDKManager.getSdkInstance();
          if(currentForm.sdk){
            currentForm.remove(sdk);
          }
          currentForm.add(sdk);
          currentForm.sdk.setVisibility(true);
          currentForm.sdk.showPinDialog(pinLength);
        } else if(SDKConstants.OKRA_OTP_GENERATED === status) {
          currentForm.sdk.hidePinDialog();
          if(currentForm.sdk){
            currentForm.remove(currentForm.sdk);
          }
          applicationManager.getPresentationUtility().showLoadingScreen();          
          const servicePayload = {
            objServiceName: scopeObj._objectServiceName2,
            objName: scopeObj._objectName2,
            operationName: scopeObj._operationName2,
            payload: {
              "id": DEVICE_CONSTANTS.selectedDeviceID,
              "serviceName": "SUSPEND_DEVICE",
              "isMobile": true,
              "otp": otp,
              "context": context
            },
            successCallback: successcallback,
            errorCallback: scopeObj.suspendDeviceFailureCallback
          };
          SCAUtility.callBackendService(servicePayload);
        }
      });
    },
    
    unsuspendDevice: function(){
      const scopeObj = this;
      const currentForm = kony.application.getCurrentForm();
      const userManager = applicationManager.getUserPreferencesManager();
      const userName = userManager.getUserObj().userName;
      const OKRAcontext = DEVICE_CONSTANTS.selectedDeviceID + "|" + "UNSUSPEND_DEVICE";
      scopeObj.view.sdk.generateOCRAOTP(userName, OKRAcontext, function(status, otpJSON) {
        const otp = JSON.parse(otpJSON).otp;
        const context = DEVICE_CONSTANTS.selectedDeviceID + "|" + "UNSUSPEND_DEVICE";
        if(SDKConstants.PIN_REQUEST === status) {
          var pinLength = JSON.parse(otpJSON).MAX_LENGTH;
          var sdk = hidApplicationSDKManager.getSdkInstance();
          if(currentForm.sdk){
            currentForm.remove(sdk);
          }
          currentForm.add(sdk);
          currentForm.sdk.setVisibility(true);
          currentForm.sdk.showPinDialog(pinLength);
        } else if(SDKConstants.OKRA_OTP_GENERATED === status) {
          currentForm.sdk.hidePinDialog();
          if(currentForm.sdk){
            currentForm.remove(currentForm.sdk);
          }
          applicationManager.getPresentationUtility().showLoadingScreen();
          const servicePayload = {
            objServiceName: scopeObj._objectServiceName2,
            objName: scopeObj._objectName2,
            operationName: scopeObj._operationName2,
            payload: {
              "id": DEVICE_CONSTANTS.selectedDeviceID,
              "serviceName": "UNSUSPEND_DEVICE",
              "isMobile": true,
              "otp": otp,
              "context": context
            },
            successCallback: scopeObj.unsuspendDeviceSuccessCallback,
            errorCallback: scopeObj.unsuspendDeviceFailureCallback
          };
          SCAUtility.callBackendService(servicePayload);
        }
      });
    },

    revokeDevice: function(){
      const scopeObj = this;
      const currentForm = kony.application.getCurrentForm();
      const userManager = applicationManager.getUserPreferencesManager();
      const userName = userManager.getUserObj().userName;
      const OKRAcontext = DEVICE_CONSTANTS.selectedDeviceID + "|" + "REVOKE_DEVICE";
      scopeObj.view.sdk.generateOCRAOTP(
        userName,
        OKRAcontext,
        function (status, otpJSON) {
          const otp = JSON.parse(otpJSON).otp;          
          const context = DEVICE_CONSTANTS.selectedDeviceID + "|" + "REVOKE_DEVICE";
          let successcallback = null;
          if(DEVICE_CONSTANTS.devicesCount > 1){
            successcallback = scopeObj.revokeDeviceMultipleSuccessCallback;
          } else if(DEVICE_CONSTANTS.devicesCount === 1){
            successcallback = scopeObj.revokeDeviceSingleSuccessCallback;
          }
          if (SDKConstants.PIN_REQUEST === status) {
            var pinLength = JSON.parse(otpJSON).MAX_LENGTH;
            var sdk = hidApplicationSDKManager.getSdkInstance();
            if (currentForm.sdk) {
              currentForm.remove(sdk);
            }
            currentForm.add(sdk);
            currentForm.sdk.setVisibility(true);
            currentForm.sdk.showPinDialog(pinLength);
          } else if (SDKConstants.OKRA_OTP_GENERATED === status) {
            currentForm.sdk.hidePinDialog();
            if (currentForm.sdk) {
              currentForm.remove(currentForm.sdk);
            }
            applicationManager.getPresentationUtility().showLoadingScreen();
            const servicePayload = {
              objServiceName: scopeObj._objectServiceName3,
              objName: scopeObj._objectName3,
              operationName: scopeObj._operationName3,
              payload: {
                id: DEVICE_CONSTANTS.selectedDeviceID,
                serviceName: "REVOKE_DEVICE",
                isMobile: true,
                otp: otp,
                context: context,
              },
              successCallback: successcallback,
              errorCallback: scopeObj.revokeDeviceFailureCallback,
            };
            SCAUtility.callBackendService(servicePayload);
          }
        }
      );
    },
    
    registerDeviceSuccessCallback: function(){
      const userManager = applicationManager.getUserPreferencesManager();
      const phone = userManager.getUserObj().phone;
      const maskedPhone = phone.slice(0,6) + "*".repeat(phone.length-8) + phone.slice(-2);
      const dataToDisplay = {
        msgTitle: `Success!`,
        msgDesc: `New activation code has been sent to your mobile Number ${maskedPhone}. Please use the code to register with the device you want to.`
      };
      this.view.sdk.setVisibility(true);
      this.view.sdk.showOrHideTxStatus(SDKConstants.TX_ACCEPTED, dataToDisplay);
      this.getDevices();
    },
    registerDeviceFailureCallback: function(){
      const dataToDisplay = {
        msgTitle: `Failure!`,
        msgDesc: `Failed to Register the New Device.`
      };
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      this.view.sdk.setVisibility(true);
      this.view.sdk.showOrHideTxStatus(SDKConstants.TX_DENIED, dataToDisplay);
    },
    
    suspendDeviceSingleSuccessCallback: function() {
      this.view.lblCongrats.text = "You’ve suspended the device successfully";
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      const authManger = applicationManager.getAuthManager();
      authManger.logout(this.logoutSuccess, this.logoutError);
    },
    suspendDeviceMultipleSuccessCallback: function(){
      const dataToDisplay = {
        msgTitle: `Suspended '${DEVICE_CONSTANTS.selectedDeviceName}' successfully.`,
        msgDesc: 'You will no longer receive push notifications on this device.'
      };
      this.view.sdk.setVisibility(true);
      this.view.sdk.showOrHideTxStatus(SDKConstants.TX_ACCEPTED, dataToDisplay);
      this.getDevices();
    },
    suspendDeviceFailureCallback: function(){
      const dataToDisplay = {
        msgTitle: 'Failed to Suspend Device.',
        msgDesc: 'Approval request failed.'
      };
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      this.view.sdk.setVisibility(true);
      this.view.sdk.showOrHideTxStatus(SDKConstants.TX_DENIED, dataToDisplay);
    },
    
    unsuspendDeviceSuccessCallback: function(){
      const dataToDisplay = {
        msgTitle: `Unuspended '${DEVICE_CONSTANTS.selectedDeviceName}' successfully.`,
        msgDesc: 'You will now receive push notifications on this device.'
      };
      this.view.sdk.setVisibility(true);
      this.view.sdk.showOrHideTxStatus(SDKConstants.TX_ACCEPTED, dataToDisplay);
      this.getDevices();
    },
    unsuspendDeviceFailureCallback: function(){
      const dataToDisplay = {
        msgTitle: 'Failed to Unsuspend Device.',
        msgDesc: 'Approval request failed.'
      };
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      this.view.sdk.setVisibility(true);
      this.view.sdk.showOrHideTxStatus(SDKConstants.TX_DENIED, dataToDisplay);
    },
        
    revokeDeviceSingleSuccessCallback: function(){
      this.view.lblCongrats.text = "You’ve removed the device successfully";
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      const authManger = applicationManager.getAuthManager();
      authManger.logout(this.logoutSuccess, this.logoutError);
    },
    revokeDeviceMultipleSuccessCallback: function(){
      const dataToDisplay = {
        msgTitle: `Removed '${DEVICE_CONSTANTS.selectedDeviceName}' successfully.`,
        msgDesc: 'You will no longer receive push notifications on this device.'
      };
      this.view.sdk.setVisibility(true);
      this.view.sdk.showOrHideTxStatus(SDKConstants.TX_ACCEPTED, dataToDisplay);
      this.getDevices();
    },
    revokeDeviceFailureCallback: function(){
      const dataToDisplay = {
        msgTitle: 'Failed to Remove Device.',
        msgDesc: 'Approval request failed.'
      };
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      this.view.sdk.setVisibility(true);
      this.view.sdk.showOrHideTxStatus(SDKConstants.TX_DENIED, dataToDisplay);
    },    
    
    logoutSuccess: function(resSuccess) {
      const navMan = applicationManager.getNavigationManager();
      navMan.setCustomInfo("logoutStatus",true);
      this.view.flxRegisteredDevicesContainer.setVisibility(false);
      this.view.flxPopups.setVisibility(false);
      this.view.flxLogoutScreen.setVisibility(true);
    },
    logoutError: function(resError) {
      const navMan = applicationManager.getNavigationManager();
      navMan.setCustomInfo("logoutStatus", false);
      this.view.flxRegisteredDevicesContainer.setVisibility(false);
      this.view.flxPopups.setVisibility(false);
      this.view.flxLogoutScreen.setVisibility(true);
    },

  };
});