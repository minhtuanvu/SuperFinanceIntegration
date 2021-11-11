define(['./ControllerImplementation', './KonyLogger'], function(ControllerImplementation, konyLoggerModule) {
  var konymp = konymp || {};
  konymp.logger = new konyLoggerModule("HID SDK Controller");
    var SDKConstants = {
    "TX_ACCEPTED" : 101,
    "TX_DENIED"   : 102
  };
  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this._pushId = null;
      this.notificationMessage = null;
      this.allContainers = [];
      this.handler = new ControllerImplementation(this, baseConfig.id);
    },

    initGettersSetters: function() {
      defineSetter(this, "pushId", function(val) {
        try {
          konymp.logger.trace("----------------------------- Setting Push ID Start", konymp.logger.FUNCTION_ENTRY);
          if (typeof(val) === 'string') {
            this._pushId = val;
          } else {
            throw {
              error: "InvalidType",
              message: "Invalid input type. Expecting string."
            };
          }
        } catch (e) {
          konymp.logger.error(JSON.stringify(e), konymp.logger.EXCEPTION);
          if (e.error === "InvalidType") {
            konymp.logger.trace(e.message, konymp.logger.FUNCTION_EXIT);
          }
        }
        konymp.logger.trace("-----------------------------Setting Push ID End", konymp.logger.FUNCTION_EXIT);
      });
      defineGetter(this, "pushId", function() {
        return this._pushId;
      });
    },
    showPinDialog : function(pinLength){
      this.view.flxApprove.setVisibility(false);
      this.view.transactionPinPopup.setVisibility(true);
      this.view.flxSignInApprovedPopup.setVisibility(false);
      this.view.flxSignInDeniedPopup.setVisibility(false);
      this.view.transactionPinPopup.showPinDialog(pinLength);
      this.view.transactionPinPopup.setFlowActions();
    },
    hidePinDialog : function(){
       this.view.transactionPinPopup.setVisibility(false);
    },
    preshow: function(){

      this.setFlowActions();

    },
    setFlowActions: function(callback){
      const scopeObj = this;
      this.view.btnDone.onClick = function(){
        scopeObj.view.flxSignInApprovedPopup.setVisibility(false);
        scopeObj.view.setVisibility(false);
        if(callback){
          callback();
        }
      };
      this.view.btnClose.onClick = function(){
        scopeObj.view.flxSignInDeniedPopup.setVisibility(false);
        scopeObj.view.setVisibility(false);
        if(callback){
          callback();
        }
      };
    },
    
    showOrHideTxStatus : function(status, displayText){
       if(status && status === SDKConstants.TX_ACCEPTED){
         this.view.flxApprove.setVisibility(false);
        this.view.transactionPinPopup.setVisibility(false);
        this.view.flxSignInApprovedPopup.setVisibility(true);
        this.view.flxSignInDeniedPopup.setVisibility(false);
         if(displayText && displayText.msgTitle && displayText.msgDesc){
           this.view.lblSignInApproved.text = displayText.msgTitle;
           this.view.lblSignInDescription.text = displayText.msgDesc;
         } else {
           this.view.lblSignInApproved.text = "Sign In Approved";
           this.view.lblSignInDescription.text = "You have now signed in to online banking.";
         }
       }else if(status && status === SDKConstants.TX_DENIED){
         this.view.flxApprove.setVisibility(false);
        this.view.transactionPinPopup.setVisibility(false);
        this.view.flxSignInApprovedPopup.setVisibility(false);
        this.view.flxSignInDeniedPopup.setVisibility(true);
         if(displayText && displayText.msgTitle && displayText.msgDesc){
           this.view.lblSignInDeclined.text = displayText.msgTitle;
           this.view.lblSignInDeclineDescription.text = displayText.msgDesc;
         } else {
           this.view.lblSignInDeclined.text = "Sign In Denied";
           this.view.lblSignInDeclineDescription.text = "You have denied the sign in request.";
         }
       }
    },
     
    /**
     * @api : doDeviceProvisioning
     * @description : This function creates a service/container.
     * @param : activationObj - The activation object is required.It should contain following keys- pushId,userId,serverURL, inviteCode.
     * 
     */
    doDeviceProvisioning: function(provisionCode,provisionCallBack) {
      var key = {"identifier":"pushRegId"};
    var pushRegData = kony.keychain.retrieve(key);
    var pushRegJSON = JSON.parse(JSON.stringify(pushRegData));
    
      var activationObjJson = {
         "activationCode" : `${provisionCode}`,
         "pushId": pushRegJSON.securedata
      };  
      this.handler.doDeviceProvisioning(JSON.stringify(activationObjJson),provisionCallBack);
    },
    
    setContainerPin: function(pin, pincallback){
      this.handler.setContainerPin(pin, pincallback);
    },
    
    updatePushRegistrationToken: function(pushId){
       this.handler.updatePushRegistrationToken(pushId);
    },
    /**
     * @api : getAllContainers
     * @description : API to return all containers in a device
     * @return : array of all containers
     */
    getAllContainers: function() {
      return this.handler.getAllContainers();
    },
    
    /**
     * @api : showApprovalScreen
     * @description : This function creates a service/container.
     * @param : activationObj - The activation object is required.It should contain following keys- pushId,userId,serverURL, inviteCode.
     * @return : true/false - Returns true in case of successful service creation,otherwise false
     */
    showApprovalScreen: function(notificationMessage,sdkCallBack) {
      this.handler.showApprovalScreen(notificationMessage,sdkCallBack);
    },
    
    /**
     * @api : hideApprovalScreen
     * @description : This function creates a service/container.
     * @param : activationObj - The activation object is required.It should contain following keys- pushId,userId,serverURL, inviteCode.
     * @return : true/false - Returns true in case of successful service creation,otherwise false
     */
    hideApprovalScreen: function() {
      this.handler.hideApprovalScreen();
    },
    
    /**
     * @api : signTransaction
     * @description : This function creates a service/container.
     * @param : activationObj - The activation object is required.It should contain following keys- pushId,userId,serverURL, inviteCode.
     * @return : true/false - Returns true in case of successful service creation,otherwise false
     */
    signTransaction: function(status, transactionID, password) {
		this.handler.signTransaction(status, transactionID, password);
    },
    
    generateSynchronousOTP : function(userId,sdkCallBack){
       this.handler.generateSynchronousOTP(userId,sdkCallBack);
    },
    generateOCRAOTP : function(userId,txInput,sdkCallBack){
       this.handler.generateOCRAOTP(userId,txInput,sdkCallBack);
    },
    getUserPendingTransactions: function(userId){
      return this.handler.getUserPendingTransactions(userId);
    },
    updatePin: function(userId,oldPin,newPin,jsCallBack){
      this.handler.updatePin(userId,oldPin,newPin,jsCallBack);
    }

  };
});