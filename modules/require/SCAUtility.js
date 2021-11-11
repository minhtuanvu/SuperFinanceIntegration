define(function () {

  return {
    callBackendService: function({objServiceName, objName, operationName, payload, successCallback, errorCallback}){
      try {
        const objSvc = kony.sdk.getCurrentInstance().getObjectService(objServiceName, {"access":"online"});
        const dataObject = new kony.sdk.dto.DataObject(objName);
        for(let key in payload){
          dataObject.addField(key,payload[key]);
        }
        const options = {
          "dataObject": dataObject
        };
        const serviceCallback = function(res){
          if(res && res.errmsg){
            kony.print(`Call FAILED ObjectService: ${objServiceName}, ObjectName: ${objName}, OperationName: ${operationName} ` + JSON.stringify(res));
            errorCallback(res.errmsg);
          } else {
            kony.print(`Call SUCCESSFUL ObjectService: ${objServiceName}, ObjectName: ${objName}, OperationName: ${operationName} ` + JSON.stringify(res));
            successCallback(res);
          }
        };
        const serviceErrorCallback = function(err){
          kony.print(`Call FAILED ObjectService: ${objServiceName}, ObjectName: ${objName}, OperationName: ${operationName} ` + JSON.stringify(err));
          errorCallback(err.errorMessage);
        };
        objSvc.customVerb(operationName, options, serviceCallback, serviceErrorCallback);
      } catch (err){
        errorCallback(err);
      }
    },
  };

});