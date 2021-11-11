/**
*@module SettingsManager
 */
define([], function() {
  /**
   *SettingsManager is the class used to handle alerts and other settings
   *@alias module:SettingsManager
   *@class
   */
function SettingsManager() {
}
inheritsFrom(SettingsManager, kony.mvc.Business.Delegator);
SettingsManager.prototype.initializeBusinessController = function(){};
/**
 * Gets list wise accounts and the respective account alerts for the user signed-in.
 * @param {function} presentation @successCallback - will be called when call is successfull.
 * @param {function} presentation @failureCallback - will be called when call is not successfull.
 * @returns {Array} -Array of records of accounts list with account alerts to the presentation @successCallback.
 */
SettingsManager.prototype.getAllAccountAlerts  =   function(successCallback, failureCallback) {
    function  getAllCompletionCallback(status, data, error) {
   	 var srh = applicationManager.getServiceResponseHandler();
     var responseObject = srh.manageResponse(status, data, error);
      if(responseObject["status"] === true) {
        successCallback(responseObject["data"]);
      }
      else{
        failureCallback(responseObject["errmsg"]);
      }
    }
    var  self  = this;
    var  alertsInstance   =   kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("UserAccountAlerts");
    alertsInstance.getByCriteria({}, getAllCompletionCallback);
};
/**
 * Updates a specific alert for an account using a service.
 * @param {object} parms- inputParams i.e alertId, isEnabled toggle value (true/false)
 * @param {function} presentation @successCallback - will be called when call is successfull.
 * @param {function} presentation @failutrCallback - will be called when call is not successfull.
 */
SettingsManager.prototype.updateUserAccountAlerts = function(inputParams, successCallback, failureCallback) {
    function getAllCompletionCallback(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var responseObject = srh.manageResponse(status, data, error);
        if (responseObject["status"] === true) {
            successCallback(responseObject["data"]);
        } else {
            failureCallback(responseObject["errmsg"]);
        }
    }
    try {
        var alertsInstance = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("UserAccountAlerts");
        var obj = new alertsInstance(inputParams);
        obj.partialUpdate(getAllCompletionCallback);
      }
    catch(err) {
      throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.ServiceCallFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
    }
};
/**
 * Get Deals Alerts and Security Alerts settings for the particular user using a service
 * @param {function} presentation @successCallback - will be called when call is successfull.
 * @param {function} presentation @failiureCallback - will be called when call is not successfull.
 * @return {object} - json of all security and deals alerts
 */
SettingsManager.prototype.getDealsAndSecurityAlerts  =   function(successCallback, failureCallback) {
    function  getAllCompletionCallback(status, data, error) {
		var srh = applicationManager.getServiceResponseHandler();
        var responseObject = srh.manageResponse(status, data, error);
        if (responseObject["status"] === true) {
            successCallback(responseObject["data"]);
        } else {
            failureCallback(responseObject["errmsg"]);
        }
    }
    var  self  = this;
    var  alertsInstance   =   kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("UserAlerts");
    alertsInstance.getByCriteria({}, getAllCompletionCallback);
};
/**
 * Updates specific Security / Deals Alert.
 * @param {object} parms- inputParams i.e alertId, specific security/deals alert identifier and it's toggle value (true/false)
 * @param {function} presentation @successCallback - will be called when call is successfull.
 * @param {function} presentation @failureCallback - will be called when call is not successfull.
 */
SettingsManager.prototype.updateUserAlerts = function(inputParams, successCallback, failureCallback) {
    function getAllCompletionCallback(status, data, error) {
      	var srh = applicationManager.getServiceResponseHandler();
        var responseObject = srh.manageResponse(status, data, error);
        if (responseObject["status"] === true) {
            successCallback(responseObject["data"]);
        } else {
            failureCallback(responseObject["errmsg"]);
        }
    }
    try {
        var alertsInstance = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("UserAlerts");
        var obj = new alertsInstance(inputParams);
        obj.partialUpdate(getAllCompletionCallback);
      }
    catch(err) {
      throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.ServiceCallFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
    }
};
  
  
  SettingsManager.prototype.getConsentData = function(presentationSuccessCallback,presentationErrorCallback){
    var getConsentData = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Consents");
    getConsentData.customVerb('getCDPConsents', {}, completionCallBack);
    function completionCallBack(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);
      if (obj.status === true) {
        presentationSuccessCallback(obj.data);
      }
      else {
        presentationErrorCallback(obj.errmsg);
      }
    }
  };
  
  SettingsManager.prototype.updateConsentData = function(inputParams, presentationSuccessCallback,presentationErrorCallback){
    var createConsentRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Consents");
    createConsentRepo.customVerb("updateCDPConsent", inputParams, getAllCompletionCallback);
    function getAllCompletionCallback(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);
      if (obj["status"] === true) {
        presentationSuccessCallback(obj["data"]);
      }
      else {
        presentationErrorCallback(obj["errmsg"]);
      }
    }

  };
  
   SettingsManager.prototype.getPSD2ConsentData = function(presentationSuccessCallback,presentationErrorCallback){
    var getConsentData = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Consents");
    getConsentData.customVerb('getPSDConsents', {}, completionCallBack);
    function completionCallBack(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);
      if (obj.status === true) {
        presentationSuccessCallback(obj.data);
      }
      else {
        presentationErrorCallback(obj.errmsg);
      }
    }
  };

   SettingsManager.prototype.updatePSD2ConsentData = function(inputParams, presentationSuccessCallback,presentationErrorCallback){
    var createConsentRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Consents");
    createConsentRepo.customVerb("updatePSDConsent", inputParams, getAllCompletionCallback);
    function getAllCompletionCallback(status, data, error) {
      var srh = applicationManager.getServiceResponseHandler();
      var obj = srh.manageResponse(status, data, error);
      if (obj["status"] === true) {
        presentationSuccessCallback(obj["data"]);
      }
      else {
        presentationErrorCallback(obj["errmsg"]);
      }
    }

  };
  
return SettingsManager;
});
