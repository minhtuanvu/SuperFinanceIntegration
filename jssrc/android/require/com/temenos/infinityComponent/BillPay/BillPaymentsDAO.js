define(function() {
    function BillPaymentsDAO() {}
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
    BillPaymentsDAO.prototype.fetchAccounts = function(objServiceName, operationName, objName, criteria, unicode, onSuccess, onError) {
        var objSvc = kony.sdk.getCurrentInstance().getObjectService(objServiceName, {
            "access": "online"
        });
        var dataObject = new kony.sdk.dto.DataObject(objName);
        for (var key in criteria) {
            dataObject.addField(key, criteria[key]);
        }
        //alert(JSON.stringify(dataObject));
        var options = {
            "dataObject": dataObject
        };
        objSvc.customVerb(operationName, options, function(response) {
            onSuccess(response, unicode);
            kony.print("Fetch Performed Successfully: " + JSON.stringify(response));
        }, function(error) {
            var errorObj = {
                "errorInfo": "Fetch transacation list service call failed",
                "errorLevel": "Fabric",
                "error": error
            };
            onError(errorObj);
            kony.print("Failed to fetch Account Details:" + JSON.stringify(error));
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
    BillPaymentsDAO.prototype.validateBillpayUserDetails = function(objServiceName, objName, operationName, criteria, unicode, onSuccess, onError) {
        var objSvc = kony.sdk.getCurrentInstance().getObjectService(objServiceName, {
            "access": "online"
        });
        var dataObject = new kony.sdk.dto.DataObject(objName);
        for (var key in criteria) {
            dataObject.addField(key, criteria[key]);
        }
        var options = {
            "dataObject": dataObject
        };
        objSvc.customVerb(operationName, options, function(response) {
            onSuccess(response, unicode);
            kony.print("Details validated Successfully: " + JSON.stringify(response));
        }, function(error) {
            var errObj = {
                "errorInfo": "Error in validate details method of the component.",
                "error": error
            };
            onError(errObj);
        });
    };
    /**
     * @api : postTransfer
     * @description :  method to invoke validateUserDetails service
     * @param : objServiceName{String} -object service name
     * @param : objName{String} -object name
     * @param : operationname{String} -operation name
     * @param : criteria{JSON} -criteria
     * @param : onSuccess{function} -function to be invoked on success
     * @param : unicode{String} -service response
     */
    BillPaymentsDAO.prototype.postTransfer = function(objServiceName, objName, operationName, criteria, unicode, onSuccess, onError) {
        var objSvc = kony.sdk.getCurrentInstance().getObjectService(objServiceName, {
            "access": "online"
        });
        var dataObject = new kony.sdk.dto.DataObject(objName);
        for (var key in criteria) {
            dataObject.addField(key, criteria[key]);
        }
        var options = {
            "dataObject": dataObject
        };
        objSvc.customVerb(operationName, options, function(response) {
            onSuccess(response, unicode);
            kony.print("Details validated Successfully: " + JSON.stringify(response));
        }, function(error) {
            var errObj = {
                "errorInfo": "Error in validate details method of the component.",
                "error": error
            };
            onError(errObj);
        });
    };
    return BillPaymentsDAO;
});