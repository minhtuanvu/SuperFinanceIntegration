/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {
        "object": "Payee",
        "objectService": "PayeeObjects"
    };
    var setterFunctions = {
        lastName: function(val, state) {
            context["field"] = "lastName";
            context["metadata"] = (objectMetadata ? objectMetadata["lastName"] : null);
            state['lastName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        zipCode: function(val, state) {
            context["field"] = "zipCode";
            context["metadata"] = (objectMetadata ? objectMetadata["zipCode"] : null);
            state['zipCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isAutoPayEnabled: function(val, state) {
            context["field"] = "isAutoPayEnabled";
            context["metadata"] = (objectMetadata ? objectMetadata["isAutoPayEnabled"] : null);
            state['isAutoPayEnabled'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        companyName: function(val, state) {
            context["field"] = "companyName";
            context["metadata"] = (objectMetadata ? objectMetadata["companyName"] : null);
            state['companyName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        ebillSupport: function(val, state) {
            context["field"] = "ebillSupport";
            context["metadata"] = (objectMetadata ? objectMetadata["ebillSupport"] : null);
            state['ebillSupport'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        lastPaidAmount: function(val, state) {
            context["field"] = "lastPaidAmount";
            context["metadata"] = (objectMetadata ? objectMetadata["lastPaidAmount"] : null);
            state['lastPaidAmount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        ebillEnable: function(val, state) {
            context["field"] = "ebillEnable";
            context["metadata"] = (objectMetadata ? objectMetadata["ebillEnable"] : null);
            state['ebillEnable'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        billermaster_id: function(val, state) {
            context["field"] = "billermaster_id";
            context["metadata"] = (objectMetadata ? objectMetadata["billermaster_id"] : null);
            state['billermaster_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        lastPaidDate: function(val, state) {
            context["field"] = "lastPaidDate";
            context["metadata"] = (objectMetadata ? objectMetadata["lastPaidDate"] : null);
            state['lastPaidDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        cityName: function(val, state) {
            context["field"] = "cityName";
            context["metadata"] = (objectMetadata ? objectMetadata["cityName"] : null);
            state['cityName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        addressLine1: function(val, state) {
            context["field"] = "addressLine1";
            context["metadata"] = (objectMetadata ? objectMetadata["addressLine1"] : null);
            state['addressLine1'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        addressLine2: function(val, state) {
            context["field"] = "addressLine2";
            context["metadata"] = (objectMetadata ? objectMetadata["addressLine2"] : null);
            state['addressLine2'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isManuallyAdded: function(val, state) {
            context["field"] = "isManuallyAdded";
            context["metadata"] = (objectMetadata ? objectMetadata["isManuallyAdded"] : null);
            state['isManuallyAdded'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        id: function(val, state) {
            context["field"] = "id";
            context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
            state['id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        state: function(val, state) {
            context["field"] = "state";
            context["metadata"] = (objectMetadata ? objectMetadata["state"] : null);
            state['state'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        email: function(val, state) {
            context["field"] = "email";
            context["metadata"] = (objectMetadata ? objectMetadata["email"] : null);
            state['email'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        nameOnBill: function(val, state) {
            context["field"] = "nameOnBill";
            context["metadata"] = (objectMetadata ? objectMetadata["nameOnBill"] : null);
            state['nameOnBill'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isWiredRecepient: function(val, state) {
            context["field"] = "isWiredRecepient";
            context["metadata"] = (objectMetadata ? objectMetadata["isWiredRecepient"] : null);
            state['isWiredRecepient'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        nickName: function(val, state) {
            context["field"] = "nickName";
            context["metadata"] = (objectMetadata ? objectMetadata["nickName"] : null);
            state['nickName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        transitDays: function(val, state) {
            context["field"] = "transitDays";
            context["metadata"] = (objectMetadata ? objectMetadata["transitDays"] : null);
            state['transitDays'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        accountNumber: function(val, state) {
            context["field"] = "accountNumber";
            context["metadata"] = (objectMetadata ? objectMetadata["accountNumber"] : null);
            state['accountNumber'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        userId: function(val, state) {
            context["field"] = "userId";
            context["metadata"] = (objectMetadata ? objectMetadata["userId"] : null);
            state['userId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isBusinessPayee: function(val, state) {
            context["field"] = "isBusinessPayee";
            context["metadata"] = (objectMetadata ? objectMetadata["isBusinessPayee"] : null);
            state['isBusinessPayee'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        firstName: function(val, state) {
            context["field"] = "firstName";
            context["metadata"] = (objectMetadata ? objectMetadata["firstName"] : null);
            state['firstName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        phone: function(val, state) {
            context["field"] = "phone";
            context["metadata"] = (objectMetadata ? objectMetadata["phone"] : null);
            state['phone'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        billid: function(val, state) {
            context["field"] = "billid";
            context["metadata"] = (objectMetadata ? objectMetadata["billid"] : null);
            state['billid'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        name: function(val, state) {
            context["field"] = "name";
            context["metadata"] = (objectMetadata ? objectMetadata["name"] : null);
            state['name'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        payeeAccountNumber: function(val, state) {
            context["field"] = "payeeAccountNumber";
            context["metadata"] = (objectMetadata ? objectMetadata["payeeAccountNumber"] : null);
            state['payeeAccountNumber'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        payeeId: function(val, state) {
            context["field"] = "payeeId";
            context["metadata"] = (objectMetadata ? objectMetadata["payeeId"] : null);
            state['payeeId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        payeeName: function(val, state) {
            context["field"] = "payeeName";
            context["metadata"] = (objectMetadata ? objectMetadata["payeeName"] : null);
            state['payeeName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        payeeNickName: function(val, state) {
            context["field"] = "payeeNickName";
            context["metadata"] = (objectMetadata ? objectMetadata["payeeNickName"] : null);
            state['payeeNickName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        eBillStatus: function(val, state) {
            context["field"] = "eBillStatus";
            context["metadata"] = (objectMetadata ? objectMetadata["eBillStatus"] : null);
            state['eBillStatus'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        limit: function(val, state) {
            context["field"] = "limit";
            context["metadata"] = (objectMetadata ? objectMetadata["limit"] : null);
            state['limit'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        offset: function(val, state) {
            context["field"] = "offset";
            context["metadata"] = (objectMetadata ? objectMetadata["offset"] : null);
            state['offset'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        sortBy: function(val, state) {
            context["field"] = "sortBy";
            context["metadata"] = (objectMetadata ? objectMetadata["sortBy"] : null);
            state['sortBy'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        order: function(val, state) {
            context["field"] = "order";
            context["metadata"] = (objectMetadata ? objectMetadata["order"] : null);
            state['order'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        searchString: function(val, state) {
            context["field"] = "searchString";
            context["metadata"] = (objectMetadata ? objectMetadata["searchString"] : null);
            state['searchString'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };
    //Create the Model Class
    function Payee(defaultValues) {
        var privateState = {};
        context["field"] = "lastName";
        context["metadata"] = (objectMetadata ? objectMetadata["lastName"] : null);
        privateState.lastName = defaultValues ? (defaultValues["lastName"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["lastName"], context) : null) : null;
        context["field"] = "zipCode";
        context["metadata"] = (objectMetadata ? objectMetadata["zipCode"] : null);
        privateState.zipCode = defaultValues ? (defaultValues["zipCode"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["zipCode"], context) : null) : null;
        context["field"] = "isAutoPayEnabled";
        context["metadata"] = (objectMetadata ? objectMetadata["isAutoPayEnabled"] : null);
        privateState.isAutoPayEnabled = defaultValues ? (defaultValues["isAutoPayEnabled"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isAutoPayEnabled"], context) : null) : null;
        context["field"] = "companyName";
        context["metadata"] = (objectMetadata ? objectMetadata["companyName"] : null);
        privateState.companyName = defaultValues ? (defaultValues["companyName"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["companyName"], context) : null) : null;
        context["field"] = "ebillSupport";
        context["metadata"] = (objectMetadata ? objectMetadata["ebillSupport"] : null);
        privateState.ebillSupport = defaultValues ? (defaultValues["ebillSupport"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ebillSupport"], context) : null) : null;
        context["field"] = "lastPaidAmount";
        context["metadata"] = (objectMetadata ? objectMetadata["lastPaidAmount"] : null);
        privateState.lastPaidAmount = defaultValues ? (defaultValues["lastPaidAmount"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["lastPaidAmount"], context) : null) : null;
        context["field"] = "ebillEnable";
        context["metadata"] = (objectMetadata ? objectMetadata["ebillEnable"] : null);
        privateState.ebillEnable = defaultValues ? (defaultValues["ebillEnable"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ebillEnable"], context) : null) : null;
        context["field"] = "billermaster_id";
        context["metadata"] = (objectMetadata ? objectMetadata["billermaster_id"] : null);
        privateState.billermaster_id = defaultValues ? (defaultValues["billermaster_id"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["billermaster_id"], context) : null) : null;
        context["field"] = "lastPaidDate";
        context["metadata"] = (objectMetadata ? objectMetadata["lastPaidDate"] : null);
        privateState.lastPaidDate = defaultValues ? (defaultValues["lastPaidDate"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["lastPaidDate"], context) : null) : null;
        context["field"] = "cityName";
        context["metadata"] = (objectMetadata ? objectMetadata["cityName"] : null);
        privateState.cityName = defaultValues ? (defaultValues["cityName"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["cityName"], context) : null) : null;
        context["field"] = "addressLine1";
        context["metadata"] = (objectMetadata ? objectMetadata["addressLine1"] : null);
        privateState.addressLine1 = defaultValues ? (defaultValues["addressLine1"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["addressLine1"], context) : null) : null;
        context["field"] = "addressLine2";
        context["metadata"] = (objectMetadata ? objectMetadata["addressLine2"] : null);
        privateState.addressLine2 = defaultValues ? (defaultValues["addressLine2"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["addressLine2"], context) : null) : null;
        context["field"] = "isManuallyAdded";
        context["metadata"] = (objectMetadata ? objectMetadata["isManuallyAdded"] : null);
        privateState.isManuallyAdded = defaultValues ? (defaultValues["isManuallyAdded"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isManuallyAdded"], context) : null) : null;
        context["field"] = "id";
        context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
        privateState.id = defaultValues ? (defaultValues["id"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["id"], context) : null) : null;
        context["field"] = "state";
        context["metadata"] = (objectMetadata ? objectMetadata["state"] : null);
        privateState.state = defaultValues ? (defaultValues["state"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["state"], context) : null) : null;
        context["field"] = "email";
        context["metadata"] = (objectMetadata ? objectMetadata["email"] : null);
        privateState.email = defaultValues ? (defaultValues["email"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["email"], context) : null) : null;
        context["field"] = "nameOnBill";
        context["metadata"] = (objectMetadata ? objectMetadata["nameOnBill"] : null);
        privateState.nameOnBill = defaultValues ? (defaultValues["nameOnBill"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["nameOnBill"], context) : null) : null;
        context["field"] = "isWiredRecepient";
        context["metadata"] = (objectMetadata ? objectMetadata["isWiredRecepient"] : null);
        privateState.isWiredRecepient = defaultValues ? (defaultValues["isWiredRecepient"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isWiredRecepient"], context) : null) : null;
        context["field"] = "nickName";
        context["metadata"] = (objectMetadata ? objectMetadata["nickName"] : null);
        privateState.nickName = defaultValues ? (defaultValues["nickName"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["nickName"], context) : null) : null;
        context["field"] = "transitDays";
        context["metadata"] = (objectMetadata ? objectMetadata["transitDays"] : null);
        privateState.transitDays = defaultValues ? (defaultValues["transitDays"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["transitDays"], context) : null) : null;
        context["field"] = "accountNumber";
        context["metadata"] = (objectMetadata ? objectMetadata["accountNumber"] : null);
        privateState.accountNumber = defaultValues ? (defaultValues["accountNumber"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["accountNumber"], context) : null) : null;
        context["field"] = "userId";
        context["metadata"] = (objectMetadata ? objectMetadata["userId"] : null);
        privateState.userId = defaultValues ? (defaultValues["userId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["userId"], context) : null) : null;
        context["field"] = "isBusinessPayee";
        context["metadata"] = (objectMetadata ? objectMetadata["isBusinessPayee"] : null);
        privateState.isBusinessPayee = defaultValues ? (defaultValues["isBusinessPayee"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isBusinessPayee"], context) : null) : null;
        context["field"] = "firstName";
        context["metadata"] = (objectMetadata ? objectMetadata["firstName"] : null);
        privateState.firstName = defaultValues ? (defaultValues["firstName"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["firstName"], context) : null) : null;
        context["field"] = "phone";
        context["metadata"] = (objectMetadata ? objectMetadata["phone"] : null);
        privateState.phone = defaultValues ? (defaultValues["phone"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["phone"], context) : null) : null;
        context["field"] = "billid";
        context["metadata"] = (objectMetadata ? objectMetadata["billid"] : null);
        privateState.billid = defaultValues ? (defaultValues["billid"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["billid"], context) : null) : null;
        context["field"] = "name";
        context["metadata"] = (objectMetadata ? objectMetadata["name"] : null);
        privateState.name = defaultValues ? (defaultValues["name"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["name"], context) : null) : null;
        context["field"] = "payeeAccountNumber";
        context["metadata"] = (objectMetadata ? objectMetadata["payeeAccountNumber"] : null);
        privateState.payeeAccountNumber = defaultValues ? (defaultValues["payeeAccountNumber"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["payeeAccountNumber"], context) : null) : null;
        context["field"] = "payeeId";
        context["metadata"] = (objectMetadata ? objectMetadata["payeeId"] : null);
        privateState.payeeId = defaultValues ? (defaultValues["payeeId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["payeeId"], context) : null) : null;
        context["field"] = "payeeName";
        context["metadata"] = (objectMetadata ? objectMetadata["payeeName"] : null);
        privateState.payeeName = defaultValues ? (defaultValues["payeeName"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["payeeName"], context) : null) : null;
        context["field"] = "payeeNickName";
        context["metadata"] = (objectMetadata ? objectMetadata["payeeNickName"] : null);
        privateState.payeeNickName = defaultValues ? (defaultValues["payeeNickName"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["payeeNickName"], context) : null) : null;
        context["field"] = "eBillStatus";
        context["metadata"] = (objectMetadata ? objectMetadata["eBillStatus"] : null);
        privateState.eBillStatus = defaultValues ? (defaultValues["eBillStatus"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["eBillStatus"], context) : null) : null;
        context["field"] = "limit";
        context["metadata"] = (objectMetadata ? objectMetadata["limit"] : null);
        privateState.limit = defaultValues ? (defaultValues["limit"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["limit"], context) : null) : null;
        context["field"] = "offset";
        context["metadata"] = (objectMetadata ? objectMetadata["offset"] : null);
        privateState.offset = defaultValues ? (defaultValues["offset"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["offset"], context) : null) : null;
        context["field"] = "sortBy";
        context["metadata"] = (objectMetadata ? objectMetadata["sortBy"] : null);
        privateState.sortBy = defaultValues ? (defaultValues["sortBy"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["sortBy"], context) : null) : null;
        context["field"] = "order";
        context["metadata"] = (objectMetadata ? objectMetadata["order"] : null);
        privateState.order = defaultValues ? (defaultValues["order"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["order"], context) : null) : null;
        context["field"] = "searchString";
        context["metadata"] = (objectMetadata ? objectMetadata["searchString"] : null);
        privateState.searchString = defaultValues ? (defaultValues["searchString"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["searchString"], context) : null) : null;
        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);
        //Defining Getter/Setters
        Object.defineProperties(this, {
            "lastName": {
                get: function() {
                    context["field"] = "lastName";
                    context["metadata"] = (objectMetadata ? objectMetadata["lastName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.lastName, context);
                },
                set: function(val) {
                    setterFunctions['lastName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "zipCode": {
                get: function() {
                    context["field"] = "zipCode";
                    context["metadata"] = (objectMetadata ? objectMetadata["zipCode"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.zipCode, context);
                },
                set: function(val) {
                    setterFunctions['zipCode'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "isAutoPayEnabled": {
                get: function() {
                    context["field"] = "isAutoPayEnabled";
                    context["metadata"] = (objectMetadata ? objectMetadata["isAutoPayEnabled"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isAutoPayEnabled, context);
                },
                set: function(val) {
                    setterFunctions['isAutoPayEnabled'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "companyName": {
                get: function() {
                    context["field"] = "companyName";
                    context["metadata"] = (objectMetadata ? objectMetadata["companyName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.companyName, context);
                },
                set: function(val) {
                    setterFunctions['companyName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "ebillSupport": {
                get: function() {
                    context["field"] = "ebillSupport";
                    context["metadata"] = (objectMetadata ? objectMetadata["ebillSupport"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ebillSupport, context);
                },
                set: function(val) {
                    setterFunctions['ebillSupport'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "lastPaidAmount": {
                get: function() {
                    context["field"] = "lastPaidAmount";
                    context["metadata"] = (objectMetadata ? objectMetadata["lastPaidAmount"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.lastPaidAmount, context);
                },
                set: function(val) {
                    setterFunctions['lastPaidAmount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "ebillEnable": {
                get: function() {
                    context["field"] = "ebillEnable";
                    context["metadata"] = (objectMetadata ? objectMetadata["ebillEnable"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ebillEnable, context);
                },
                set: function(val) {
                    setterFunctions['ebillEnable'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "billermaster_id": {
                get: function() {
                    context["field"] = "billermaster_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["billermaster_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.billermaster_id, context);
                },
                set: function(val) {
                    setterFunctions['billermaster_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "lastPaidDate": {
                get: function() {
                    context["field"] = "lastPaidDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["lastPaidDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.lastPaidDate, context);
                },
                set: function(val) {
                    setterFunctions['lastPaidDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "cityName": {
                get: function() {
                    context["field"] = "cityName";
                    context["metadata"] = (objectMetadata ? objectMetadata["cityName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.cityName, context);
                },
                set: function(val) {
                    setterFunctions['cityName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "addressLine1": {
                get: function() {
                    context["field"] = "addressLine1";
                    context["metadata"] = (objectMetadata ? objectMetadata["addressLine1"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.addressLine1, context);
                },
                set: function(val) {
                    setterFunctions['addressLine1'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "addressLine2": {
                get: function() {
                    context["field"] = "addressLine2";
                    context["metadata"] = (objectMetadata ? objectMetadata["addressLine2"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.addressLine2, context);
                },
                set: function(val) {
                    setterFunctions['addressLine2'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "isManuallyAdded": {
                get: function() {
                    context["field"] = "isManuallyAdded";
                    context["metadata"] = (objectMetadata ? objectMetadata["isManuallyAdded"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isManuallyAdded, context);
                },
                set: function(val) {
                    setterFunctions['isManuallyAdded'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "id": {
                get: function() {
                    context["field"] = "id";
                    context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.id, context);
                },
                set: function(val) {
                    setterFunctions['id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "state": {
                get: function() {
                    context["field"] = "state";
                    context["metadata"] = (objectMetadata ? objectMetadata["state"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.state, context);
                },
                set: function(val) {
                    setterFunctions['state'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "email": {
                get: function() {
                    context["field"] = "email";
                    context["metadata"] = (objectMetadata ? objectMetadata["email"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.email, context);
                },
                set: function(val) {
                    setterFunctions['email'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "nameOnBill": {
                get: function() {
                    context["field"] = "nameOnBill";
                    context["metadata"] = (objectMetadata ? objectMetadata["nameOnBill"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.nameOnBill, context);
                },
                set: function(val) {
                    setterFunctions['nameOnBill'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "isWiredRecepient": {
                get: function() {
                    context["field"] = "isWiredRecepient";
                    context["metadata"] = (objectMetadata ? objectMetadata["isWiredRecepient"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isWiredRecepient, context);
                },
                set: function(val) {
                    setterFunctions['isWiredRecepient'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "nickName": {
                get: function() {
                    context["field"] = "nickName";
                    context["metadata"] = (objectMetadata ? objectMetadata["nickName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.nickName, context);
                },
                set: function(val) {
                    setterFunctions['nickName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "transitDays": {
                get: function() {
                    context["field"] = "transitDays";
                    context["metadata"] = (objectMetadata ? objectMetadata["transitDays"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.transitDays, context);
                },
                set: function(val) {
                    setterFunctions['transitDays'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "accountNumber": {
                get: function() {
                    context["field"] = "accountNumber";
                    context["metadata"] = (objectMetadata ? objectMetadata["accountNumber"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.accountNumber, context);
                },
                set: function(val) {
                    setterFunctions['accountNumber'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "userId": {
                get: function() {
                    context["field"] = "userId";
                    context["metadata"] = (objectMetadata ? objectMetadata["userId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.userId, context);
                },
                set: function(val) {
                    setterFunctions['userId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "isBusinessPayee": {
                get: function() {
                    context["field"] = "isBusinessPayee";
                    context["metadata"] = (objectMetadata ? objectMetadata["isBusinessPayee"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isBusinessPayee, context);
                },
                set: function(val) {
                    setterFunctions['isBusinessPayee'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "firstName": {
                get: function() {
                    context["field"] = "firstName";
                    context["metadata"] = (objectMetadata ? objectMetadata["firstName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.firstName, context);
                },
                set: function(val) {
                    setterFunctions['firstName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "phone": {
                get: function() {
                    context["field"] = "phone";
                    context["metadata"] = (objectMetadata ? objectMetadata["phone"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.phone, context);
                },
                set: function(val) {
                    setterFunctions['phone'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "billid": {
                get: function() {
                    context["field"] = "billid";
                    context["metadata"] = (objectMetadata ? objectMetadata["billid"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.billid, context);
                },
                set: function(val) {
                    setterFunctions['billid'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "name": {
                get: function() {
                    context["field"] = "name";
                    context["metadata"] = (objectMetadata ? objectMetadata["name"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.name, context);
                },
                set: function(val) {
                    setterFunctions['name'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "payeeAccountNumber": {
                get: function() {
                    context["field"] = "payeeAccountNumber";
                    context["metadata"] = (objectMetadata ? objectMetadata["payeeAccountNumber"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.payeeAccountNumber, context);
                },
                set: function(val) {
                    setterFunctions['payeeAccountNumber'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "payeeId": {
                get: function() {
                    context["field"] = "payeeId";
                    context["metadata"] = (objectMetadata ? objectMetadata["payeeId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.payeeId, context);
                },
                set: function(val) {
                    setterFunctions['payeeId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "payeeName": {
                get: function() {
                    context["field"] = "payeeName";
                    context["metadata"] = (objectMetadata ? objectMetadata["payeeName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.payeeName, context);
                },
                set: function(val) {
                    setterFunctions['payeeName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "payeeNickName": {
                get: function() {
                    context["field"] = "payeeNickName";
                    context["metadata"] = (objectMetadata ? objectMetadata["payeeNickName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.payeeNickName, context);
                },
                set: function(val) {
                    setterFunctions['payeeNickName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "eBillStatus": {
                get: function() {
                    context["field"] = "eBillStatus";
                    context["metadata"] = (objectMetadata ? objectMetadata["eBillStatus"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.eBillStatus, context);
                },
                set: function(val) {
                    setterFunctions['eBillStatus'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "limit": {
                get: function() {
                    context["field"] = "limit";
                    context["metadata"] = (objectMetadata ? objectMetadata["limit"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.limit, context);
                },
                set: function(val) {
                    setterFunctions['limit'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "offset": {
                get: function() {
                    context["field"] = "offset";
                    context["metadata"] = (objectMetadata ? objectMetadata["offset"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.offset, context);
                },
                set: function(val) {
                    setterFunctions['offset'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "sortBy": {
                get: function() {
                    context["field"] = "sortBy";
                    context["metadata"] = (objectMetadata ? objectMetadata["sortBy"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.sortBy, context);
                },
                set: function(val) {
                    setterFunctions['sortBy'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "order": {
                get: function() {
                    context["field"] = "order";
                    context["metadata"] = (objectMetadata ? objectMetadata["order"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.order, context);
                },
                set: function(val) {
                    setterFunctions['order'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "searchString": {
                get: function() {
                    context["field"] = "searchString";
                    context["metadata"] = (objectMetadata ? objectMetadata["searchString"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.searchString, context);
                },
                set: function(val) {
                    setterFunctions['searchString'].call(this, val, privateState);
                },
                enumerable: true,
            },
        });
        //converts model object to json object.
        this.toJsonInternal = function() {
            return Object.assign({}, privateState);
        };
        //overwrites object state with provided json value in argument.
        this.fromJsonInternal = function(value) {
            privateState.lastName = value ? (value["lastName"] ? value["lastName"] : null) : null;
            privateState.zipCode = value ? (value["zipCode"] ? value["zipCode"] : null) : null;
            privateState.isAutoPayEnabled = value ? (value["isAutoPayEnabled"] ? value["isAutoPayEnabled"] : null) : null;
            privateState.companyName = value ? (value["companyName"] ? value["companyName"] : null) : null;
            privateState.ebillSupport = value ? (value["ebillSupport"] ? value["ebillSupport"] : null) : null;
            privateState.lastPaidAmount = value ? (value["lastPaidAmount"] ? value["lastPaidAmount"] : null) : null;
            privateState.ebillEnable = value ? (value["ebillEnable"] ? value["ebillEnable"] : null) : null;
            privateState.billermaster_id = value ? (value["billermaster_id"] ? value["billermaster_id"] : null) : null;
            privateState.lastPaidDate = value ? (value["lastPaidDate"] ? value["lastPaidDate"] : null) : null;
            privateState.cityName = value ? (value["cityName"] ? value["cityName"] : null) : null;
            privateState.addressLine1 = value ? (value["addressLine1"] ? value["addressLine1"] : null) : null;
            privateState.addressLine2 = value ? (value["addressLine2"] ? value["addressLine2"] : null) : null;
            privateState.isManuallyAdded = value ? (value["isManuallyAdded"] ? value["isManuallyAdded"] : null) : null;
            privateState.id = value ? (value["id"] ? value["id"] : null) : null;
            privateState.state = value ? (value["state"] ? value["state"] : null) : null;
            privateState.email = value ? (value["email"] ? value["email"] : null) : null;
            privateState.nameOnBill = value ? (value["nameOnBill"] ? value["nameOnBill"] : null) : null;
            privateState.isWiredRecepient = value ? (value["isWiredRecepient"] ? value["isWiredRecepient"] : null) : null;
            privateState.nickName = value ? (value["nickName"] ? value["nickName"] : null) : null;
            privateState.transitDays = value ? (value["transitDays"] ? value["transitDays"] : null) : null;
            privateState.accountNumber = value ? (value["accountNumber"] ? value["accountNumber"] : null) : null;
            privateState.userId = value ? (value["userId"] ? value["userId"] : null) : null;
            privateState.isBusinessPayee = value ? (value["isBusinessPayee"] ? value["isBusinessPayee"] : null) : null;
            privateState.firstName = value ? (value["firstName"] ? value["firstName"] : null) : null;
            privateState.phone = value ? (value["phone"] ? value["phone"] : null) : null;
            privateState.billid = value ? (value["billid"] ? value["billid"] : null) : null;
            privateState.name = value ? (value["name"] ? value["name"] : null) : null;
            privateState.payeeAccountNumber = value ? (value["payeeAccountNumber"] ? value["payeeAccountNumber"] : null) : null;
            privateState.payeeId = value ? (value["payeeId"] ? value["payeeId"] : null) : null;
            privateState.payeeName = value ? (value["payeeName"] ? value["payeeName"] : null) : null;
            privateState.payeeNickName = value ? (value["payeeNickName"] ? value["payeeNickName"] : null) : null;
            privateState.eBillStatus = value ? (value["eBillStatus"] ? value["eBillStatus"] : null) : null;
            privateState.limit = value ? (value["limit"] ? value["limit"] : null) : null;
            privateState.offset = value ? (value["offset"] ? value["offset"] : null) : null;
            privateState.sortBy = value ? (value["sortBy"] ? value["sortBy"] : null) : null;
            privateState.order = value ? (value["order"] ? value["order"] : null) : null;
            privateState.searchString = value ? (value["searchString"] ? value["searchString"] : null) : null;
        };
    }
    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(Payee);
    //Create new class level validator object
    BaseModel.Validator.call(Payee);
    var registerValidatorBackup = Payee.registerValidator;
    Payee.registerValidator = function() {
            var propName = arguments[0];
            if (!setterFunctions[propName].changed) {
                var setterBackup = setterFunctions[propName];
                setterFunctions[arguments[0]] = function() {
                    if (Payee.isValid(this, propName, val)) {
                        return setterBackup.apply(null, arguments);
                    } else {
                        throw Error("Validation failed for " + propName + " : " + val);
                    }
                }
                setterFunctions[arguments[0]].changed = true;
            }
            return registerValidatorBackup.apply(null, arguments);
        }
        //Extending Model for custom operations
        //For Operation 'getBillPayPayees' with service id 'getBillPayPayees1371'
    Payee.getBillPayPayees = function(params, onCompletion) {
        return Payee.customVerb('getBillPayPayees', params, onCompletion);
    };
    var relations = [];
    Payee.relations = relations;
    Payee.prototype.isValid = function() {
        return Payee.isValid(this);
    };
    Payee.prototype.objModelName = "Payee";
    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    Payee.registerProcessors = function(options, successCallback, failureCallback) {
        if (!options) {
            options = {};
        }
        if (options && ((options["preProcessor"] && typeof(options["preProcessor"]) === "function") || !options["preProcessor"])) {
            preProcessorCallback = options["preProcessor"];
        }
        if (options && ((options["postProcessor"] && typeof(options["postProcessor"]) === "function") || !options["postProcessor"])) {
            postProcessorCallback = options["postProcessor"];
        }

        function metaDataSuccess(res) {
            objectMetadata = kony.mvc.util.ProcessorUtils.convertObjectMetadataToFieldMetadataMap(res);
            successCallback();
        }

        function metaDataFailure(err) {
            failureCallback(err);
        }
        kony.mvc.util.ProcessorUtils.getMetadataForObject("PayeeObjects", "Payee", options, metaDataSuccess, metaDataFailure);
    };
    //clone the object provided in argument.
    Payee.clone = function(objectToClone) {
        var clonedObj = new Payee();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };
    return Payee;
});