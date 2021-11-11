define(function () {

  function UnifiedTransferDAO(){

  }
  
  /**
     * component fetchTransactionList
     * To invoke the service using sdk apis
     * @param : objServiceName {string}  - name of the fabric object service
     * @param : operationName  {string}  - name of the fabric operation to be invoked
     * @param : objName        {string}  - name of the fabric object
     * @param : criteria   {JSONObject}  - object containing query params
     * @param : onSuccess    {function}  - callback function post recevinf response
     * @param : unicode        {string}  - unique code to identify service reposne in case of multiple service calls
     */
   UnifiedTransferDAO.prototype.fetchAccounts = function(objServiceName,operationName,objName,criteria,unicode,onSuccess,onError) {
    var objSvc = kony.sdk.getCurrentInstance().getObjectService(objServiceName, {
      "access": "online"
    });
    var dataObject = new kony.sdk.dto.DataObject(objName);

    for(var key in criteria){
      dataObject.addField(key,criteria[key]);
    }
    //alert(JSON.stringify(dataObject));
    var options = {
      "dataObject": dataObject
    };    
    
    objSvc.customVerb(operationName, options,
      function(response) {
      onSuccess(response,unicode);
      kony.print("Fetch Performed Successfully: " + JSON.stringify(response));
    },
      function(error) {
      var  errorObj =
          {
            "errorInfo" : "Fetch transacation list service call failed",
            "errorLevel" : "Fabric",
            "error": error
          };
      onError(errorObj);
      
      kony.print("Failed to fetch Account Details:" + JSON.stringify(error));
    });
  };

  UnifiedTransferDAO.prototype.validateIBAN = function(objServiceName,objName,operationName,criteria,onSuccess,onError) {
    var objSvc = kony.sdk.getCurrentInstance().getObjectService(objServiceName, {
      "access": "online"
    });
    var dataObject = new kony.sdk.dto.DataObject(objName);
    for(var key in criteria) {
      dataObject.addField(key,criteria[key]);
    }
    var options1 = {
      "dataObject": dataObject
    };
    objSvc.customVerb(operationName, options1,
      function(response) {
      onSuccess(response);
      kony.print("IBAN Validated Successfully: " + JSON.stringify(response));
    },
     function(error) {
      var errObj = {
        "errorInfo" : "Error in validating IBAN.",
        "error": error
      };
      onError(errObj);
    });
  },

    UnifiedTransferDAO.prototype.getBeneficiaryName = function(objServiceName,objName,operationName,criteria,onSuccess,onError) {
    var objSvc = kony.sdk.getCurrentInstance().getObjectService(objServiceName, {
      "access": "online"
    });
    var dataObject = new kony.sdk.dto.DataObject(objName);
    for(var key in criteria){
      dataObject.addField(key,criteria[key]);
    }
    var options1 = {
      "dataObject": dataObject
    };
    objSvc.customVerb(operationName, options1,
                      function(response) {
      onSuccess(response);
      kony.print("getBeneficiaryName Successfully validated: " + JSON.stringify(response));
    },
      function(error) {
      var errObj = {
        "errorInfo" : "Error in validating getBeneficiaryName.",
        "error": error
      };
      onError(errObj);
    });
  },
   /**
	* @api : fetchStatesList
     * @description :  method to invoke fetchStatesList service
     * @param : objServiceName{String} -object service name
     * @param : objName{String} -object name
     * @param : operationname{String} -operation name
     * @param : criteria{JSON} -criteria
     * @param : onSuccess{function} -function to be invoked on success
     * @param : unicode{String} -service response
     */
  UnifiedTransferDAO.prototype.fetchStatesList = function(objServiceName,objName,operationName,criteria,onSuccess,unicode,onError) {
    kony.application.showLoadingScreen();
    var objSvc = kony.sdk.getCurrentInstance().getObjectService(objServiceName, {
      "access": "online"
    });
    var dataObject = new kony.sdk.dto.DataObject(objName);
    for(var key in criteria){
      dataObject.addField(key,criteria[key]);
    }
    var options1 = {
      "dataObject": dataObject
    };

    objSvc.customVerb(operationName, options1, function(response) {
     onSuccess(response, unicode);
      kony.print("Fetch Performed Successfully: " + JSON.stringify(response));
    },
      function(error) {
      var errObj = {
        "errorInfo" : "Error in fetchStatesList method of the component.",
        "error": error
      };
      onError(errObj);
    });
  };
   /**
     * component fetchSwiftCode
     * To invoke the service using sdk apis
     * @param : objServiceName {string}  - name of the fabric object service
     * @param : operationName  {string}  - name of the fabric operation to be invoked
     * @param : objName        {string}  - name of the fabric object
     * @param : criteria   {JSONObject}  - object containing query params
     * @param : onSuccess    {function}  - callback function post recevinf response
     * @param : unicode        {string}  - unique code to identify service reposne in case of multiple service calls
     */
UnifiedTransferDAO.prototype.fetchSwiftCode = function(objServiceName,operationName,objName,criteria,unicode,onSuccess,onError) {

    var objSvc = kony.sdk.getCurrentInstance().getObjectService(objServiceName, {
      "access": "online"
    });
    var dataObject = new kony.sdk.dto.DataObject(objName);

    for(var key in criteria){
      dataObject.addField(key,criteria[key]);
    }
    //alert(JSON.stringify(dataObject));
    var options = {
      "dataObject": dataObject
    };    
    
    objSvc.customVerb(operationName, options,
                      function(response) {
      onSuccess(response,unicode);
      kony.print("Fetch Performed Successfully: " + JSON.stringify(response));
    },
                      function(error) {
      
      
      var  errorObj =
          {
            "errorInfo" : "Fetch transacation list service call failed",
            "errorLevel" : "Fabric",
            "error": error
          };
      onError(errorObj);
      
      kony.print("Failed to fetch Account Details:" + JSON.stringify(error));
    });
  };

  /**
     * @api : fetchCountriesList
     * @description :  method to invoke fetchCountriesList service
     * @param : objServiceName{String} -object service name
     * @param : objName{String} -object name
     * @param : operationname{String} -operation name
     * @param : criteria{JSON} -criteria
     * @param : onSuccess{function} -function to be invoked on success
     * @param : unicode{String} -service response
     */
  UnifiedTransferDAO.prototype.fetchCountriesList = function(objServiceName,objName,operationName,criteria,onSuccess,unicode,onError) {
    var objSvc = kony.sdk.getCurrentInstance().getObjectService(objServiceName, {
      "access": "online"
    });
    var dataObject = new kony.sdk.dto.DataObject(objName);
    for(var key in criteria) {
      dataObject.addField(key,criteria[key]);
    }
    var options1 = {
      "dataObject": dataObject
    };

    objSvc.customVerb(operationName, options1, function(response) {
      onSuccess(response,unicode);
      kony.print("FetchCountriesList Performed Successfully: " + JSON.stringify(response));
    },
      function(error) {
      var errObj = {
        "errorInfo" : "Error in fetchCountriesList method of the component.",
        "error": error
      };
      onError(errObj);
    });
  };
  /**
     * @api : makeTransaction
     * @description :  method to invoke makeTransaction service
     * @param : objServiceName{String} -object service name
     * @param : objName{String} -object name
     * @param : operationname{String} -operation name
     * @param : criteria{JSON} -criteria
     * @param : onSuccess{function} -function to be invoked on success
     * @param : unicode{String} -service response
     */
  UnifiedTransferDAO.prototype.makeTransaction = function(objServiceName,objName,operationName,criteria,unicode,onSuccess,onError) {
    var objSvc = kony.sdk.getCurrentInstance().getObjectService(objServiceName, {
      "access": "online"
    });
    var dataObject = new kony.sdk.dto.DataObject(objName);
    for(var key in criteria) {
      dataObject.addField(key,criteria[key]);
    }
    var options = {
      "dataObject": dataObject
    };

    objSvc.customVerb(operationName, options, function(response) {
      onSuccess(response,unicode);
      kony.print("Transaction Performed Successfully: " + JSON.stringify(response));
    },
      function(error) {
      var errObj = {
        "errorInfo" : "Error in Transaction method of the component.",
        "error": error
      };
      onError(errObj);
    });
  };
  /**
     * @api : getBankDate
     * @description :  method to invoke getBankDate service
     * @param : objServiceName{String} -object service name
     * @param : objName{String} -object name
     * @param : operationname{String} -operation name
     * @param : criteria{JSON} -criteria
     * @param : onSuccess{function} -function to be invoked on success
     * @param : unicode{String} -service response
     */
  UnifiedTransferDAO.prototype.getBankDate = function(objServiceName,objName,operationName,criteria,unicode,onSuccess,onError) {
    var objSvc = kony.sdk.getCurrentInstance().getObjectService(objServiceName, {
      "access": "online"
    });
    var dataObject = new kony.sdk.dto.DataObject(objName);
    for(var key in criteria) {
      dataObject.addField(key,criteria[key]);
    }
    var options = {
      "dataObject": dataObject
    };

    objSvc.customVerb(operationName, options, function(response) {
      onSuccess(response,unicode);
      kony.print("Bank date retrived Successfully: " + JSON.stringify(response));
    },
      function(error) {
      var errObj = {
        "errorInfo" : "Error in Retrive bank date method of the component.",
        "error": error
      };
      onError(errObj);
    });
  };
  /**
     * @api : validateUserDetails
     * @description :  method to invoke validateUserDetails service
     * @param : objServiceName{String} -object service name
     * @param : objName{String} -object name
     * @param : operationname{String} -operation name
     * @param : criteria{JSON} -criteria
     * @param : onSuccess{function} -function to be invoked on success
     * @param : unicode{String} -service response
     */
  UnifiedTransferDAO.prototype.validateUserDetails = function(objServiceName,objName,operationName,criteria,unicode,onSuccess,onError) {
    var objSvc = kony.sdk.getCurrentInstance().getObjectService(objServiceName, {
      "access": "online"
    });
    var dataObject = new kony.sdk.dto.DataObject(objName);
    for(var key in criteria) {
      dataObject.addField(key,criteria[key]);
    }
    var options = {
      "dataObject": dataObject
    };

    objSvc.customVerb(operationName, options, function(response) {
      onSuccess(response,unicode);
      kony.print("Details validated Successfully: " + JSON.stringify(response));
    },
      function(error) {
      var errObj = {
        "errorInfo" : "Error in validate details method of the component.",
        "error": error
      };
      onError(errObj);
    });
    };

  UnifiedTransferDAO.prototype.getSwiftCode = function(objServiceName,objName,operationName,criteria,onSuccess,onError) {
    var objSvc = kony.sdk.getCurrentInstance().getObjectService(objServiceName, {
      "access": "online"
    });
    var dataObject = new kony.sdk.dto.DataObject(objName);
    for(var key in criteria){
      dataObject.addField(key,criteria[key]);
    }
    var options1 = {
      "dataObject": dataObject
    };
    objSvc.customVerb(operationName, options1,
      function(response) {
      onSuccess(response);
      kony.print(" Swift Code fetched Successfully : " + JSON.stringify(response));										  
    },
      function(error) {
      onError(error);
    });
  };

return UnifiedTransferDAO;

});