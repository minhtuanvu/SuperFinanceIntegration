define([],function () {
  	function AccountServicesManager_BusinessController(){
      	kony.mvc.Business.Controller.call(this);
    }
  	inheritsFrom(AccountServicesManager_BusinessController,kony.mvc.Business.Controller);
    AccountServicesManager_BusinessController.prototype.initializeBusinessController = function(){
    };
    AccountServicesManager_BusinessController.prototype.execute = function(command)
    {
      kony.mvc.Business.Controller.prototype.execute.call(this,command);
    };
  
    AccountServicesManager_BusinessController.prototype.generateCombinedStatement = function(payload, presentationSuccessCallback, presentationErrorCallback) {
    var accStatements = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("CombinedStatements");
    accStatements.customVerb("generateCombinedStatement", payload, getAllCompletionCallback);
    function getAllCompletionCallback(status, data, error) {
        var srh = applicationManager.getServiceResponseHandler();
        var obj = srh.manageResponse(status, data, error);
        if (obj["status"] === true) {
            presentationSuccessCallback(obj["data"]);
        } else {
            presentationErrorCallback(obj["errmsg"]);
        }
    }
};
  
AccountServicesManager_BusinessController.prototype.DownloadCombinedStatement = function( reqParams ) {
    var mfURL = KNYMobileFabric.mainRef.config.services_meta.RBObjects.url;
    var authToken = KNYMobileFabric.currentClaimToken;
    var serviceURL = mfURL + "/objects/CombinedStatements?Auth_Token=" + authToken;
    serviceURL = serviceURL + "&" + "X-Kony-ReportingParams" + "=" + kony.sdk.getEncodedReportingParamsForSvcid("register_"+"DbxUserLogin"); 
    var paramURL = "";
    if( reqParams.fileId ){
      paramURL += "&fileId=" + reqParams.fileId;
    }
    return serviceURL + paramURL;
  };

    AccountServicesManager_BusinessController.prototype.checkDownloadStatusOfCombinedStatement = function(payload, presentationSuccessCallback, presentationErrorCallback) {
    var accStatements = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("CombinedStatements");
    accStatements.customVerb("getCombinedStatementDetails", payload, getAllCompletionCallback);
    function getAllCompletionCallback(status, data, error) {
        var srh = applicationManager.getServiceResponseHandler();
        var obj = srh.manageResponse(status, data, error);
        if (obj["status"] === true) {
            presentationSuccessCallback(obj["data"]);
        } else {
            presentationErrorCallback(obj["errmsg"]);
        }
    }
};
    return AccountServicesManager_BusinessController; 
});
