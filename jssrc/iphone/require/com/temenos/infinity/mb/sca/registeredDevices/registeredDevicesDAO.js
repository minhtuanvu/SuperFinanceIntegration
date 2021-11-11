define(function() {
    function registeredDevicesDAO() {}
    registeredDevicesDAO.prototype.callDeviceManagementService = function({
        objServiceName,
        objName,
        operationName,
        payload,
        successCallback,
        errorCallback
    }) {
        const objSvc = kony.sdk.getCurrentInstance().getObjectService(objServiceName, {
            "access": "online"
        });
        const dataObject = new kony.sdk.dto.DataObject(objName);
        const userobj = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository(objName);

        function getDevicesCallback(status, data, error) {
            const srh = applicationManager.getServiceResponseHandler();
            var obj = srh.manageResponse(status, data, error);
            if (obj["status"] === true) {
                successCallback(obj["data"]);
            } else {
                errorCallback(obj["errmsg"]);
            }
        }
        userobj.customVerb(operationName, payload, getDevicesCallback);
    };
    return registeredDevicesDAO;
});