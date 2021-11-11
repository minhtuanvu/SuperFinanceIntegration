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
        "objectService": "RBObjects"
    };
    var setterFunctions = {
        accountNumber: function(val, state) {
            context["field"] = "accountNumber";
            context["metadata"] = (objectMetadata ? objectMetadata["accountNumber"] : null);
            state['accountNumber'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
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
        billDescription: function(val, state) {
            context["field"] = "billDescription";
            context["metadata"] = (objectMetadata ? objectMetadata["billDescription"] : null);
            state['billDescription'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        billDueDate: function(val, state) {
            context["field"] = "billDueDate";
            context["metadata"] = (objectMetadata ? objectMetadata["billDueDate"] : null);
            state['billDueDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        billerCategory: function(val, state) {
            context["field"] = "billerCategory";
            context["metadata"] = (objectMetadata ? objectMetadata["billerCategory"] : null);
            state['billerCategory'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        billerId: function(val, state) {
            context["field"] = "billerId";
            context["metadata"] = (objectMetadata ? objectMetadata["billerId"] : null);
            state['billerId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        billGeneratedDate: function(val, state) {
            context["field"] = "billGeneratedDate";
            context["metadata"] = (objectMetadata ? objectMetadata["billGeneratedDate"] : null);
            state['billGeneratedDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        billid: function(val, state) {
            context["field"] = "billid";
            context["metadata"] = (objectMetadata ? objectMetadata["billid"] : null);
            state['billid'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        cityName: function(val, state) {
            context["field"] = "cityName";
            context["metadata"] = (objectMetadata ? objectMetadata["cityName"] : null);
            state['cityName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        companyName: function(val, state) {
            context["field"] = "companyName";
            context["metadata"] = (objectMetadata ? objectMetadata["companyName"] : null);
            state['companyName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        dueAmount: function(val, state) {
            context["field"] = "dueAmount";
            context["metadata"] = (objectMetadata ? objectMetadata["dueAmount"] : null);
            state['dueAmount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        EBillEnable: function(val, state) {
            context["field"] = "EBillEnable";
            context["metadata"] = (objectMetadata ? objectMetadata["EBillEnable"] : null);
            state['EBillEnable'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        eBillStatus: function(val, state) {
            context["field"] = "eBillStatus";
            context["metadata"] = (objectMetadata ? objectMetadata["eBillStatus"] : null);
            state['eBillStatus'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        eBillSupport: function(val, state) {
            context["field"] = "eBillSupport";
            context["metadata"] = (objectMetadata ? objectMetadata["eBillSupport"] : null);
            state['eBillSupport'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        ebillURL: function(val, state) {
            context["field"] = "ebillURL";
            context["metadata"] = (objectMetadata ? objectMetadata["ebillURL"] : null);
            state['ebillURL'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        email: function(val, state) {
            context["field"] = "email";
            context["metadata"] = (objectMetadata ? objectMetadata["email"] : null);
            state['email'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        errmsg: function(val, state) {
            context["field"] = "errmsg";
            context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
            state['errmsg'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        lastPaidAmount: function(val, state) {
            context["field"] = "lastPaidAmount";
            context["metadata"] = (objectMetadata ? objectMetadata["lastPaidAmount"] : null);
            state['lastPaidAmount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        lastPaidDate: function(val, state) {
            context["field"] = "lastPaidDate";
            context["metadata"] = (objectMetadata ? objectMetadata["lastPaidDate"] : null);
            state['lastPaidDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        limit: function(val, state) {
            context["field"] = "limit";
            context["metadata"] = (objectMetadata ? objectMetadata["limit"] : null);
            state['limit'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        nameOnBill: function(val, state) {
            context["field"] = "nameOnBill";
            context["metadata"] = (objectMetadata ? objectMetadata["nameOnBill"] : null);
            state['nameOnBill'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        notes: function(val, state) {
            context["field"] = "notes";
            context["metadata"] = (objectMetadata ? objectMetadata["notes"] : null);
            state['notes'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        offset: function(val, state) {
            context["field"] = "offset";
            context["metadata"] = (objectMetadata ? objectMetadata["offset"] : null);
            state['offset'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        order: function(val, state) {
            context["field"] = "order";
            context["metadata"] = (objectMetadata ? objectMetadata["order"] : null);
            state['order'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        paidAmount: function(val, state) {
            context["field"] = "paidAmount";
            context["metadata"] = (objectMetadata ? objectMetadata["paidAmount"] : null);
            state['paidAmount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
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
        phone: function(val, state) {
            context["field"] = "phone";
            context["metadata"] = (objectMetadata ? objectMetadata["phone"] : null);
            state['phone'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        searchString: function(val, state) {
            context["field"] = "searchString";
            context["metadata"] = (objectMetadata ? objectMetadata["searchString"] : null);
            state['searchString'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        sortBy: function(val, state) {
            context["field"] = "sortBy";
            context["metadata"] = (objectMetadata ? objectMetadata["sortBy"] : null);
            state['sortBy'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        state: function(val, state) {
            context["field"] = "state";
            context["metadata"] = (objectMetadata ? objectMetadata["state"] : null);
            state['state'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        street: function(val, state) {
            context["field"] = "street";
            context["metadata"] = (objectMetadata ? objectMetadata["street"] : null);
            state['street'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        success: function(val, state) {
            context["field"] = "success";
            context["metadata"] = (objectMetadata ? objectMetadata["success"] : null);
            state['success'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        zipCode: function(val, state) {
            context["field"] = "zipCode";
            context["metadata"] = (objectMetadata ? objectMetadata["zipCode"] : null);
            state['zipCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        type: function(val, state) {
            context["field"] = "type";
            context["metadata"] = (objectMetadata ? objectMetadata["type"] : null);
            state['type'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        country: function(val, state) {
            context["field"] = "country";
            context["metadata"] = (objectMetadata ? objectMetadata["country"] : null);
            state['country'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        swiftCode: function(val, state) {
            context["field"] = "swiftCode";
            context["metadata"] = (objectMetadata ? objectMetadata["swiftCode"] : null);
            state['swiftCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        routingCode: function(val, state) {
            context["field"] = "routingCode";
            context["metadata"] = (objectMetadata ? objectMetadata["routingCode"] : null);
            state['routingCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        bankName: function(val, state) {
            context["field"] = "bankName";
            context["metadata"] = (objectMetadata ? objectMetadata["bankName"] : null);
            state['bankName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        bankAddressLine1: function(val, state) {
            context["field"] = "bankAddressLine1";
            context["metadata"] = (objectMetadata ? objectMetadata["bankAddressLine1"] : null);
            state['bankAddressLine1'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        bankAddressLine2: function(val, state) {
            context["field"] = "bankAddressLine2";
            context["metadata"] = (objectMetadata ? objectMetadata["bankAddressLine2"] : null);
            state['bankAddressLine2'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        bankCity: function(val, state) {
            context["field"] = "bankCity";
            context["metadata"] = (objectMetadata ? objectMetadata["bankCity"] : null);
            state['bankCity'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        bankState: function(val, state) {
            context["field"] = "bankState";
            context["metadata"] = (objectMetadata ? objectMetadata["bankState"] : null);
            state['bankState'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        bankZip: function(val, state) {
            context["field"] = "bankZip";
            context["metadata"] = (objectMetadata ? objectMetadata["bankZip"] : null);
            state['bankZip'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        IBAN: function(val, state) {
            context["field"] = "IBAN";
            context["metadata"] = (objectMetadata ? objectMetadata["IBAN"] : null);
            state['IBAN'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        wireAccountType: function(val, state) {
            context["field"] = "wireAccountType";
            context["metadata"] = (objectMetadata ? objectMetadata["wireAccountType"] : null);
            state['wireAccountType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        internationalRoutingCode: function(val, state) {
            context["field"] = "internationalRoutingCode";
            context["metadata"] = (objectMetadata ? objectMetadata["internationalRoutingCode"] : null);
            state['internationalRoutingCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        transactionId: function(val, state) {
            context["field"] = "transactionId";
            context["metadata"] = (objectMetadata ? objectMetadata["transactionId"] : null);
            state['transactionId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isManuallyAdded: function(val, state) {
            context["field"] = "isManuallyAdded";
            context["metadata"] = (objectMetadata ? objectMetadata["isManuallyAdded"] : null);
            state['isManuallyAdded'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        phoneExtension: function(val, state) {
            context["field"] = "phoneExtension";
            context["metadata"] = (objectMetadata ? objectMetadata["phoneExtension"] : null);
            state['phoneExtension'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        phoneCountryCode: function(val, state) {
            context["field"] = "phoneCountryCode";
            context["metadata"] = (objectMetadata ? objectMetadata["phoneCountryCode"] : null);
            state['phoneCountryCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isWiredRecepient: function(val, state) {
            context["field"] = "isWiredRecepient";
            context["metadata"] = (objectMetadata ? objectMetadata["isWiredRecepient"] : null);
            state['isWiredRecepient'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        beneficiaryId: function(val, state) {
            context["field"] = "beneficiaryId";
            context["metadata"] = (objectMetadata ? objectMetadata["beneficiaryId"] : null);
            state['beneficiaryId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        fromAccountCurrency: function(val, state) {
            context["field"] = "fromAccountCurrency";
            context["metadata"] = (objectMetadata ? objectMetadata["fromAccountCurrency"] : null);
            state['fromAccountCurrency'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        toAccountCurrency: function(val, state) {
            context["field"] = "toAccountCurrency";
            context["metadata"] = (objectMetadata ? objectMetadata["toAccountCurrency"] : null);
            state['toAccountCurrency'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        transitDays: function(val, state) {
            context["field"] = "transitDays";
            context["metadata"] = (objectMetadata ? objectMetadata["transitDays"] : null);
            state['transitDays'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };
    //Create the Model Class
    function Payee(defaultValues) {
        var privateState = {};
        context["field"] = "accountNumber";
        context["metadata"] = (objectMetadata ? objectMetadata["accountNumber"] : null);
        privateState.accountNumber = defaultValues ? (defaultValues["accountNumber"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["accountNumber"], context) : null) : null;
        context["field"] = "addressLine1";
        context["metadata"] = (objectMetadata ? objectMetadata["addressLine1"] : null);
        privateState.addressLine1 = defaultValues ? (defaultValues["addressLine1"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["addressLine1"], context) : null) : null;
        context["field"] = "addressLine2";
        context["metadata"] = (objectMetadata ? objectMetadata["addressLine2"] : null);
        privateState.addressLine2 = defaultValues ? (defaultValues["addressLine2"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["addressLine2"], context) : null) : null;
        context["field"] = "billDescription";
        context["metadata"] = (objectMetadata ? objectMetadata["billDescription"] : null);
        privateState.billDescription = defaultValues ? (defaultValues["billDescription"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["billDescription"], context) : null) : null;
        context["field"] = "billDueDate";
        context["metadata"] = (objectMetadata ? objectMetadata["billDueDate"] : null);
        privateState.billDueDate = defaultValues ? (defaultValues["billDueDate"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["billDueDate"], context) : null) : null;
        context["field"] = "billerCategory";
        context["metadata"] = (objectMetadata ? objectMetadata["billerCategory"] : null);
        privateState.billerCategory = defaultValues ? (defaultValues["billerCategory"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["billerCategory"], context) : null) : null;
        context["field"] = "billerId";
        context["metadata"] = (objectMetadata ? objectMetadata["billerId"] : null);
        privateState.billerId = defaultValues ? (defaultValues["billerId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["billerId"], context) : null) : null;
        context["field"] = "billGeneratedDate";
        context["metadata"] = (objectMetadata ? objectMetadata["billGeneratedDate"] : null);
        privateState.billGeneratedDate = defaultValues ? (defaultValues["billGeneratedDate"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["billGeneratedDate"], context) : null) : null;
        context["field"] = "billid";
        context["metadata"] = (objectMetadata ? objectMetadata["billid"] : null);
        privateState.billid = defaultValues ? (defaultValues["billid"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["billid"], context) : null) : null;
        context["field"] = "cityName";
        context["metadata"] = (objectMetadata ? objectMetadata["cityName"] : null);
        privateState.cityName = defaultValues ? (defaultValues["cityName"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["cityName"], context) : null) : null;
        context["field"] = "companyName";
        context["metadata"] = (objectMetadata ? objectMetadata["companyName"] : null);
        privateState.companyName = defaultValues ? (defaultValues["companyName"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["companyName"], context) : null) : null;
        context["field"] = "dueAmount";
        context["metadata"] = (objectMetadata ? objectMetadata["dueAmount"] : null);
        privateState.dueAmount = defaultValues ? (defaultValues["dueAmount"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["dueAmount"], context) : null) : null;
        context["field"] = "EBillEnable";
        context["metadata"] = (objectMetadata ? objectMetadata["EBillEnable"] : null);
        privateState.EBillEnable = defaultValues ? (defaultValues["EBillEnable"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["EBillEnable"], context) : null) : null;
        context["field"] = "eBillStatus";
        context["metadata"] = (objectMetadata ? objectMetadata["eBillStatus"] : null);
        privateState.eBillStatus = defaultValues ? (defaultValues["eBillStatus"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["eBillStatus"], context) : null) : null;
        context["field"] = "eBillSupport";
        context["metadata"] = (objectMetadata ? objectMetadata["eBillSupport"] : null);
        privateState.eBillSupport = defaultValues ? (defaultValues["eBillSupport"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["eBillSupport"], context) : null) : null;
        context["field"] = "ebillURL";
        context["metadata"] = (objectMetadata ? objectMetadata["ebillURL"] : null);
        privateState.ebillURL = defaultValues ? (defaultValues["ebillURL"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ebillURL"], context) : null) : null;
        context["field"] = "email";
        context["metadata"] = (objectMetadata ? objectMetadata["email"] : null);
        privateState.email = defaultValues ? (defaultValues["email"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["email"], context) : null) : null;
        context["field"] = "errmsg";
        context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
        privateState.errmsg = defaultValues ? (defaultValues["errmsg"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["errmsg"], context) : null) : null;
        context["field"] = "lastPaidAmount";
        context["metadata"] = (objectMetadata ? objectMetadata["lastPaidAmount"] : null);
        privateState.lastPaidAmount = defaultValues ? (defaultValues["lastPaidAmount"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["lastPaidAmount"], context) : null) : null;
        context["field"] = "lastPaidDate";
        context["metadata"] = (objectMetadata ? objectMetadata["lastPaidDate"] : null);
        privateState.lastPaidDate = defaultValues ? (defaultValues["lastPaidDate"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["lastPaidDate"], context) : null) : null;
        context["field"] = "limit";
        context["metadata"] = (objectMetadata ? objectMetadata["limit"] : null);
        privateState.limit = defaultValues ? (defaultValues["limit"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["limit"], context) : null) : null;
        context["field"] = "nameOnBill";
        context["metadata"] = (objectMetadata ? objectMetadata["nameOnBill"] : null);
        privateState.nameOnBill = defaultValues ? (defaultValues["nameOnBill"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["nameOnBill"], context) : null) : null;
        context["field"] = "notes";
        context["metadata"] = (objectMetadata ? objectMetadata["notes"] : null);
        privateState.notes = defaultValues ? (defaultValues["notes"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["notes"], context) : null) : null;
        context["field"] = "offset";
        context["metadata"] = (objectMetadata ? objectMetadata["offset"] : null);
        privateState.offset = defaultValues ? (defaultValues["offset"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["offset"], context) : null) : null;
        context["field"] = "order";
        context["metadata"] = (objectMetadata ? objectMetadata["order"] : null);
        privateState.order = defaultValues ? (defaultValues["order"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["order"], context) : null) : null;
        context["field"] = "paidAmount";
        context["metadata"] = (objectMetadata ? objectMetadata["paidAmount"] : null);
        privateState.paidAmount = defaultValues ? (defaultValues["paidAmount"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["paidAmount"], context) : null) : null;
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
        context["field"] = "phone";
        context["metadata"] = (objectMetadata ? objectMetadata["phone"] : null);
        privateState.phone = defaultValues ? (defaultValues["phone"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["phone"], context) : null) : null;
        context["field"] = "searchString";
        context["metadata"] = (objectMetadata ? objectMetadata["searchString"] : null);
        privateState.searchString = defaultValues ? (defaultValues["searchString"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["searchString"], context) : null) : null;
        context["field"] = "sortBy";
        context["metadata"] = (objectMetadata ? objectMetadata["sortBy"] : null);
        privateState.sortBy = defaultValues ? (defaultValues["sortBy"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["sortBy"], context) : null) : null;
        context["field"] = "state";
        context["metadata"] = (objectMetadata ? objectMetadata["state"] : null);
        privateState.state = defaultValues ? (defaultValues["state"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["state"], context) : null) : null;
        context["field"] = "street";
        context["metadata"] = (objectMetadata ? objectMetadata["street"] : null);
        privateState.street = defaultValues ? (defaultValues["street"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["street"], context) : null) : null;
        context["field"] = "success";
        context["metadata"] = (objectMetadata ? objectMetadata["success"] : null);
        privateState.success = defaultValues ? (defaultValues["success"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["success"], context) : null) : null;
        context["field"] = "zipCode";
        context["metadata"] = (objectMetadata ? objectMetadata["zipCode"] : null);
        privateState.zipCode = defaultValues ? (defaultValues["zipCode"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["zipCode"], context) : null) : null;
        context["field"] = "type";
        context["metadata"] = (objectMetadata ? objectMetadata["type"] : null);
        privateState.type = defaultValues ? (defaultValues["type"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["type"], context) : null) : null;
        context["field"] = "country";
        context["metadata"] = (objectMetadata ? objectMetadata["country"] : null);
        privateState.country = defaultValues ? (defaultValues["country"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["country"], context) : null) : null;
        context["field"] = "swiftCode";
        context["metadata"] = (objectMetadata ? objectMetadata["swiftCode"] : null);
        privateState.swiftCode = defaultValues ? (defaultValues["swiftCode"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["swiftCode"], context) : null) : null;
        context["field"] = "routingCode";
        context["metadata"] = (objectMetadata ? objectMetadata["routingCode"] : null);
        privateState.routingCode = defaultValues ? (defaultValues["routingCode"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["routingCode"], context) : null) : null;
        context["field"] = "bankName";
        context["metadata"] = (objectMetadata ? objectMetadata["bankName"] : null);
        privateState.bankName = defaultValues ? (defaultValues["bankName"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["bankName"], context) : null) : null;
        context["field"] = "bankAddressLine1";
        context["metadata"] = (objectMetadata ? objectMetadata["bankAddressLine1"] : null);
        privateState.bankAddressLine1 = defaultValues ? (defaultValues["bankAddressLine1"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["bankAddressLine1"], context) : null) : null;
        context["field"] = "bankAddressLine2";
        context["metadata"] = (objectMetadata ? objectMetadata["bankAddressLine2"] : null);
        privateState.bankAddressLine2 = defaultValues ? (defaultValues["bankAddressLine2"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["bankAddressLine2"], context) : null) : null;
        context["field"] = "bankCity";
        context["metadata"] = (objectMetadata ? objectMetadata["bankCity"] : null);
        privateState.bankCity = defaultValues ? (defaultValues["bankCity"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["bankCity"], context) : null) : null;
        context["field"] = "bankState";
        context["metadata"] = (objectMetadata ? objectMetadata["bankState"] : null);
        privateState.bankState = defaultValues ? (defaultValues["bankState"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["bankState"], context) : null) : null;
        context["field"] = "bankZip";
        context["metadata"] = (objectMetadata ? objectMetadata["bankZip"] : null);
        privateState.bankZip = defaultValues ? (defaultValues["bankZip"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["bankZip"], context) : null) : null;
        context["field"] = "IBAN";
        context["metadata"] = (objectMetadata ? objectMetadata["IBAN"] : null);
        privateState.IBAN = defaultValues ? (defaultValues["IBAN"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["IBAN"], context) : null) : null;
        context["field"] = "wireAccountType";
        context["metadata"] = (objectMetadata ? objectMetadata["wireAccountType"] : null);
        privateState.wireAccountType = defaultValues ? (defaultValues["wireAccountType"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["wireAccountType"], context) : null) : null;
        context["field"] = "internationalRoutingCode";
        context["metadata"] = (objectMetadata ? objectMetadata["internationalRoutingCode"] : null);
        privateState.internationalRoutingCode = defaultValues ? (defaultValues["internationalRoutingCode"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["internationalRoutingCode"], context) : null) : null;
        context["field"] = "transactionId";
        context["metadata"] = (objectMetadata ? objectMetadata["transactionId"] : null);
        privateState.transactionId = defaultValues ? (defaultValues["transactionId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["transactionId"], context) : null) : null;
        context["field"] = "isManuallyAdded";
        context["metadata"] = (objectMetadata ? objectMetadata["isManuallyAdded"] : null);
        privateState.isManuallyAdded = defaultValues ? (defaultValues["isManuallyAdded"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isManuallyAdded"], context) : null) : null;
        context["field"] = "phoneExtension";
        context["metadata"] = (objectMetadata ? objectMetadata["phoneExtension"] : null);
        privateState.phoneExtension = defaultValues ? (defaultValues["phoneExtension"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["phoneExtension"], context) : null) : null;
        context["field"] = "phoneCountryCode";
        context["metadata"] = (objectMetadata ? objectMetadata["phoneCountryCode"] : null);
        privateState.phoneCountryCode = defaultValues ? (defaultValues["phoneCountryCode"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["phoneCountryCode"], context) : null) : null;
        context["field"] = "isWiredRecepient";
        context["metadata"] = (objectMetadata ? objectMetadata["isWiredRecepient"] : null);
        privateState.isWiredRecepient = defaultValues ? (defaultValues["isWiredRecepient"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isWiredRecepient"], context) : null) : null;
        context["field"] = "beneficiaryId";
        context["metadata"] = (objectMetadata ? objectMetadata["beneficiaryId"] : null);
        privateState.beneficiaryId = defaultValues ? (defaultValues["beneficiaryId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["beneficiaryId"], context) : null) : null;
        context["field"] = "fromAccountCurrency";
        context["metadata"] = (objectMetadata ? objectMetadata["fromAccountCurrency"] : null);
        privateState.fromAccountCurrency = defaultValues ? (defaultValues["fromAccountCurrency"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["fromAccountCurrency"], context) : null) : null;
        context["field"] = "toAccountCurrency";
        context["metadata"] = (objectMetadata ? objectMetadata["toAccountCurrency"] : null);
        privateState.toAccountCurrency = defaultValues ? (defaultValues["toAccountCurrency"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["toAccountCurrency"], context) : null) : null;
        context["field"] = "transitDays";
        context["metadata"] = (objectMetadata ? objectMetadata["transitDays"] : null);
        privateState.transitDays = defaultValues ? (defaultValues["transitDays"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["transitDays"], context) : null) : null;
        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);
        //Defining Getter/Setters
        Object.defineProperties(this, {
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
            "billDescription": {
                get: function() {
                    context["field"] = "billDescription";
                    context["metadata"] = (objectMetadata ? objectMetadata["billDescription"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.billDescription, context);
                },
                set: function(val) {
                    setterFunctions['billDescription'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "billDueDate": {
                get: function() {
                    context["field"] = "billDueDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["billDueDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.billDueDate, context);
                },
                set: function(val) {
                    setterFunctions['billDueDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "billerCategory": {
                get: function() {
                    context["field"] = "billerCategory";
                    context["metadata"] = (objectMetadata ? objectMetadata["billerCategory"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.billerCategory, context);
                },
                set: function(val) {
                    setterFunctions['billerCategory'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "billerId": {
                get: function() {
                    context["field"] = "billerId";
                    context["metadata"] = (objectMetadata ? objectMetadata["billerId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.billerId, context);
                },
                set: function(val) {
                    setterFunctions['billerId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "billGeneratedDate": {
                get: function() {
                    context["field"] = "billGeneratedDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["billGeneratedDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.billGeneratedDate, context);
                },
                set: function(val) {
                    setterFunctions['billGeneratedDate'].call(this, val, privateState);
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
            "dueAmount": {
                get: function() {
                    context["field"] = "dueAmount";
                    context["metadata"] = (objectMetadata ? objectMetadata["dueAmount"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.dueAmount, context);
                },
                set: function(val) {
                    setterFunctions['dueAmount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "EBillEnable": {
                get: function() {
                    context["field"] = "EBillEnable";
                    context["metadata"] = (objectMetadata ? objectMetadata["EBillEnable"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.EBillEnable, context);
                },
                set: function(val) {
                    setterFunctions['EBillEnable'].call(this, val, privateState);
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
            "eBillSupport": {
                get: function() {
                    context["field"] = "eBillSupport";
                    context["metadata"] = (objectMetadata ? objectMetadata["eBillSupport"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.eBillSupport, context);
                },
                set: function(val) {
                    setterFunctions['eBillSupport'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "ebillURL": {
                get: function() {
                    context["field"] = "ebillURL";
                    context["metadata"] = (objectMetadata ? objectMetadata["ebillURL"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ebillURL, context);
                },
                set: function(val) {
                    setterFunctions['ebillURL'].call(this, val, privateState);
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
            "errmsg": {
                get: function() {
                    context["field"] = "errmsg";
                    context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.errmsg, context);
                },
                set: function(val) {
                    setterFunctions['errmsg'].call(this, val, privateState);
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
            "notes": {
                get: function() {
                    context["field"] = "notes";
                    context["metadata"] = (objectMetadata ? objectMetadata["notes"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.notes, context);
                },
                set: function(val) {
                    setterFunctions['notes'].call(this, val, privateState);
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
            "paidAmount": {
                get: function() {
                    context["field"] = "paidAmount";
                    context["metadata"] = (objectMetadata ? objectMetadata["paidAmount"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.paidAmount, context);
                },
                set: function(val) {
                    setterFunctions['paidAmount'].call(this, val, privateState);
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
            "street": {
                get: function() {
                    context["field"] = "street";
                    context["metadata"] = (objectMetadata ? objectMetadata["street"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.street, context);
                },
                set: function(val) {
                    setterFunctions['street'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "success": {
                get: function() {
                    context["field"] = "success";
                    context["metadata"] = (objectMetadata ? objectMetadata["success"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.success, context);
                },
                set: function(val) {
                    setterFunctions['success'].call(this, val, privateState);
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
            "type": {
                get: function() {
                    context["field"] = "type";
                    context["metadata"] = (objectMetadata ? objectMetadata["type"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.type, context);
                },
                set: function(val) {
                    setterFunctions['type'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "country": {
                get: function() {
                    context["field"] = "country";
                    context["metadata"] = (objectMetadata ? objectMetadata["country"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.country, context);
                },
                set: function(val) {
                    setterFunctions['country'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "swiftCode": {
                get: function() {
                    context["field"] = "swiftCode";
                    context["metadata"] = (objectMetadata ? objectMetadata["swiftCode"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.swiftCode, context);
                },
                set: function(val) {
                    setterFunctions['swiftCode'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "routingCode": {
                get: function() {
                    context["field"] = "routingCode";
                    context["metadata"] = (objectMetadata ? objectMetadata["routingCode"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.routingCode, context);
                },
                set: function(val) {
                    setterFunctions['routingCode'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "bankName": {
                get: function() {
                    context["field"] = "bankName";
                    context["metadata"] = (objectMetadata ? objectMetadata["bankName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.bankName, context);
                },
                set: function(val) {
                    setterFunctions['bankName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "bankAddressLine1": {
                get: function() {
                    context["field"] = "bankAddressLine1";
                    context["metadata"] = (objectMetadata ? objectMetadata["bankAddressLine1"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.bankAddressLine1, context);
                },
                set: function(val) {
                    setterFunctions['bankAddressLine1'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "bankAddressLine2": {
                get: function() {
                    context["field"] = "bankAddressLine2";
                    context["metadata"] = (objectMetadata ? objectMetadata["bankAddressLine2"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.bankAddressLine2, context);
                },
                set: function(val) {
                    setterFunctions['bankAddressLine2'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "bankCity": {
                get: function() {
                    context["field"] = "bankCity";
                    context["metadata"] = (objectMetadata ? objectMetadata["bankCity"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.bankCity, context);
                },
                set: function(val) {
                    setterFunctions['bankCity'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "bankState": {
                get: function() {
                    context["field"] = "bankState";
                    context["metadata"] = (objectMetadata ? objectMetadata["bankState"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.bankState, context);
                },
                set: function(val) {
                    setterFunctions['bankState'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "bankZip": {
                get: function() {
                    context["field"] = "bankZip";
                    context["metadata"] = (objectMetadata ? objectMetadata["bankZip"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.bankZip, context);
                },
                set: function(val) {
                    setterFunctions['bankZip'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "IBAN": {
                get: function() {
                    context["field"] = "IBAN";
                    context["metadata"] = (objectMetadata ? objectMetadata["IBAN"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.IBAN, context);
                },
                set: function(val) {
                    setterFunctions['IBAN'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "wireAccountType": {
                get: function() {
                    context["field"] = "wireAccountType";
                    context["metadata"] = (objectMetadata ? objectMetadata["wireAccountType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.wireAccountType, context);
                },
                set: function(val) {
                    setterFunctions['wireAccountType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "internationalRoutingCode": {
                get: function() {
                    context["field"] = "internationalRoutingCode";
                    context["metadata"] = (objectMetadata ? objectMetadata["internationalRoutingCode"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.internationalRoutingCode, context);
                },
                set: function(val) {
                    setterFunctions['internationalRoutingCode'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "transactionId": {
                get: function() {
                    context["field"] = "transactionId";
                    context["metadata"] = (objectMetadata ? objectMetadata["transactionId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.transactionId, context);
                },
                set: function(val) {
                    setterFunctions['transactionId'].call(this, val, privateState);
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
            "phoneExtension": {
                get: function() {
                    context["field"] = "phoneExtension";
                    context["metadata"] = (objectMetadata ? objectMetadata["phoneExtension"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.phoneExtension, context);
                },
                set: function(val) {
                    setterFunctions['phoneExtension'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "phoneCountryCode": {
                get: function() {
                    context["field"] = "phoneCountryCode";
                    context["metadata"] = (objectMetadata ? objectMetadata["phoneCountryCode"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.phoneCountryCode, context);
                },
                set: function(val) {
                    setterFunctions['phoneCountryCode'].call(this, val, privateState);
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
            "beneficiaryId": {
                get: function() {
                    context["field"] = "beneficiaryId";
                    context["metadata"] = (objectMetadata ? objectMetadata["beneficiaryId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.beneficiaryId, context);
                },
                set: function(val) {
                    setterFunctions['beneficiaryId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "fromAccountCurrency": {
                get: function() {
                    context["field"] = "fromAccountCurrency";
                    context["metadata"] = (objectMetadata ? objectMetadata["fromAccountCurrency"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.fromAccountCurrency, context);
                },
                set: function(val) {
                    setterFunctions['fromAccountCurrency'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "toAccountCurrency": {
                get: function() {
                    context["field"] = "toAccountCurrency";
                    context["metadata"] = (objectMetadata ? objectMetadata["toAccountCurrency"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.toAccountCurrency, context);
                },
                set: function(val) {
                    setterFunctions['toAccountCurrency'].call(this, val, privateState);
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
        });
        //converts model object to json object.
        this.toJsonInternal = function() {
            return Object.assign({}, privateState);
        };
        //overwrites object state with provided json value in argument.
        this.fromJsonInternal = function(value) {
            privateState.accountNumber = value ? (value["accountNumber"] ? value["accountNumber"] : null) : null;
            privateState.addressLine1 = value ? (value["addressLine1"] ? value["addressLine1"] : null) : null;
            privateState.addressLine2 = value ? (value["addressLine2"] ? value["addressLine2"] : null) : null;
            privateState.billDescription = value ? (value["billDescription"] ? value["billDescription"] : null) : null;
            privateState.billDueDate = value ? (value["billDueDate"] ? value["billDueDate"] : null) : null;
            privateState.billerCategory = value ? (value["billerCategory"] ? value["billerCategory"] : null) : null;
            privateState.billerId = value ? (value["billerId"] ? value["billerId"] : null) : null;
            privateState.billGeneratedDate = value ? (value["billGeneratedDate"] ? value["billGeneratedDate"] : null) : null;
            privateState.billid = value ? (value["billid"] ? value["billid"] : null) : null;
            privateState.cityName = value ? (value["cityName"] ? value["cityName"] : null) : null;
            privateState.companyName = value ? (value["companyName"] ? value["companyName"] : null) : null;
            privateState.dueAmount = value ? (value["dueAmount"] ? value["dueAmount"] : null) : null;
            privateState.EBillEnable = value ? (value["EBillEnable"] ? value["EBillEnable"] : null) : null;
            privateState.eBillStatus = value ? (value["eBillStatus"] ? value["eBillStatus"] : null) : null;
            privateState.eBillSupport = value ? (value["eBillSupport"] ? value["eBillSupport"] : null) : null;
            privateState.ebillURL = value ? (value["ebillURL"] ? value["ebillURL"] : null) : null;
            privateState.email = value ? (value["email"] ? value["email"] : null) : null;
            privateState.errmsg = value ? (value["errmsg"] ? value["errmsg"] : null) : null;
            privateState.lastPaidAmount = value ? (value["lastPaidAmount"] ? value["lastPaidAmount"] : null) : null;
            privateState.lastPaidDate = value ? (value["lastPaidDate"] ? value["lastPaidDate"] : null) : null;
            privateState.limit = value ? (value["limit"] ? value["limit"] : null) : null;
            privateState.nameOnBill = value ? (value["nameOnBill"] ? value["nameOnBill"] : null) : null;
            privateState.notes = value ? (value["notes"] ? value["notes"] : null) : null;
            privateState.offset = value ? (value["offset"] ? value["offset"] : null) : null;
            privateState.order = value ? (value["order"] ? value["order"] : null) : null;
            privateState.paidAmount = value ? (value["paidAmount"] ? value["paidAmount"] : null) : null;
            privateState.payeeAccountNumber = value ? (value["payeeAccountNumber"] ? value["payeeAccountNumber"] : null) : null;
            privateState.payeeId = value ? (value["payeeId"] ? value["payeeId"] : null) : null;
            privateState.payeeName = value ? (value["payeeName"] ? value["payeeName"] : null) : null;
            privateState.payeeNickName = value ? (value["payeeNickName"] ? value["payeeNickName"] : null) : null;
            privateState.phone = value ? (value["phone"] ? value["phone"] : null) : null;
            privateState.searchString = value ? (value["searchString"] ? value["searchString"] : null) : null;
            privateState.sortBy = value ? (value["sortBy"] ? value["sortBy"] : null) : null;
            privateState.state = value ? (value["state"] ? value["state"] : null) : null;
            privateState.street = value ? (value["street"] ? value["street"] : null) : null;
            privateState.success = value ? (value["success"] ? value["success"] : null) : null;
            privateState.zipCode = value ? (value["zipCode"] ? value["zipCode"] : null) : null;
            privateState.type = value ? (value["type"] ? value["type"] : null) : null;
            privateState.country = value ? (value["country"] ? value["country"] : null) : null;
            privateState.swiftCode = value ? (value["swiftCode"] ? value["swiftCode"] : null) : null;
            privateState.routingCode = value ? (value["routingCode"] ? value["routingCode"] : null) : null;
            privateState.bankName = value ? (value["bankName"] ? value["bankName"] : null) : null;
            privateState.bankAddressLine1 = value ? (value["bankAddressLine1"] ? value["bankAddressLine1"] : null) : null;
            privateState.bankAddressLine2 = value ? (value["bankAddressLine2"] ? value["bankAddressLine2"] : null) : null;
            privateState.bankCity = value ? (value["bankCity"] ? value["bankCity"] : null) : null;
            privateState.bankState = value ? (value["bankState"] ? value["bankState"] : null) : null;
            privateState.bankZip = value ? (value["bankZip"] ? value["bankZip"] : null) : null;
            privateState.IBAN = value ? (value["IBAN"] ? value["IBAN"] : null) : null;
            privateState.wireAccountType = value ? (value["wireAccountType"] ? value["wireAccountType"] : null) : null;
            privateState.internationalRoutingCode = value ? (value["internationalRoutingCode"] ? value["internationalRoutingCode"] : null) : null;
            privateState.transactionId = value ? (value["transactionId"] ? value["transactionId"] : null) : null;
            privateState.isManuallyAdded = value ? (value["isManuallyAdded"] ? value["isManuallyAdded"] : null) : null;
            privateState.phoneExtension = value ? (value["phoneExtension"] ? value["phoneExtension"] : null) : null;
            privateState.phoneCountryCode = value ? (value["phoneCountryCode"] ? value["phoneCountryCode"] : null) : null;
            privateState.isWiredRecepient = value ? (value["isWiredRecepient"] ? value["isWiredRecepient"] : null) : null;
            privateState.beneficiaryId = value ? (value["beneficiaryId"] ? value["beneficiaryId"] : null) : null;
            privateState.fromAccountCurrency = value ? (value["fromAccountCurrency"] ? value["fromAccountCurrency"] : null) : null;
            privateState.toAccountCurrency = value ? (value["toAccountCurrency"] ? value["toAccountCurrency"] : null) : null;
            privateState.transitDays = value ? (value["transitDays"] ? value["transitDays"] : null) : null;
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
        //For Operation 'addRecipient' with service id 'addRecipient4934'
    Payee.addRecipient = function(params, onCompletion) {
        return Payee.customVerb('addRecipient', params, onCompletion);
    };
    //For Operation 'saveRecipientAfterWireTransfer' with service id 'saveRecipientAfterWireTransfer8598'
    Payee.saveRecipientAfterWireTransfer = function(params, onCompletion) {
        return Payee.customVerb('saveRecipientAfterWireTransfer', params, onCompletion);
    };
    //For Operation 'updateRecipient' with service id 'updateRecipient9769'
    Payee.updateRecipient = function(params, onCompletion) {
        return Payee.customVerb('updateRecipient', params, onCompletion);
    };
    //For Operation 'getRecentPayee' with service id 'getRecentPayees1821'
    Payee.getRecentPayee = function(params, onCompletion) {
        return Payee.customVerb('getRecentPayee', params, onCompletion);
    };
    //For Operation 'LinkPayeetoTransaction' with service id 'LinkPayeeToTransaction4241'
    Payee.LinkPayeetoTransaction = function(params, onCompletion) {
        return Payee.customVerb('LinkPayeetoTransaction', params, onCompletion);
    };
    //For Operation 'getWireTransferRecipient' with service id 'getWireTransferRecipient2530'
    Payee.getWireTransferRecipient = function(params, onCompletion) {
        return Payee.customVerb('getWireTransferRecipient', params, onCompletion);
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
        kony.mvc.util.ProcessorUtils.getMetadataForObject("RBObjects", "Payee", options, metaDataSuccess, metaDataFailure);
    };
    //clone the object provided in argument.
    Payee.clone = function(objectToClone) {
        var clonedObj = new Payee();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };
    return Payee;
});