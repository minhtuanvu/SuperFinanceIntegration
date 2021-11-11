/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "Bills", "objectService" : "RBObjects"};

    var setterFunctions = {
        balanceAmount: function(val, state) {
            context["field"] = "balanceAmount";
            context["metadata"] = (objectMetadata ? objectMetadata["balanceAmount"] : null);
            state['balanceAmount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
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
        billerName: function(val, state) {
            context["field"] = "billerName";
            context["metadata"] = (objectMetadata ? objectMetadata["billerName"] : null);
            state['billerName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        billGeneratedDate: function(val, state) {
            context["field"] = "billGeneratedDate";
            context["metadata"] = (objectMetadata ? objectMetadata["billGeneratedDate"] : null);
            state['billGeneratedDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        description: function(val, state) {
            context["field"] = "description";
            context["metadata"] = (objectMetadata ? objectMetadata["description"] : null);
            state['description'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        dueAmount: function(val, state) {
            context["field"] = "dueAmount";
            context["metadata"] = (objectMetadata ? objectMetadata["dueAmount"] : null);
            state['dueAmount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        ebillStatus: function(val, state) {
            context["field"] = "ebillStatus";
            context["metadata"] = (objectMetadata ? objectMetadata["ebillStatus"] : null);
            state['ebillStatus'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        ebillURL: function(val, state) {
            context["field"] = "ebillURL";
            context["metadata"] = (objectMetadata ? objectMetadata["ebillURL"] : null);
            state['ebillURL'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        fromAccountName: function(val, state) {
            context["field"] = "fromAccountName";
            context["metadata"] = (objectMetadata ? objectMetadata["fromAccountName"] : null);
            state['fromAccountName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        fromAccountNumber: function(val, state) {
            context["field"] = "fromAccountNumber";
            context["metadata"] = (objectMetadata ? objectMetadata["fromAccountNumber"] : null);
            state['fromAccountNumber'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        id: function(val, state) {
            context["field"] = "id";
            context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
            state['id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
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
        paidDate: function(val, state) {
            context["field"] = "paidDate";
            context["metadata"] = (objectMetadata ? objectMetadata["paidDate"] : null);
            state['paidDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
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
        sortBy: function(val, state) {
            context["field"] = "sortBy";
            context["metadata"] = (objectMetadata ? objectMetadata["sortBy"] : null);
            state['sortBy'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        payeeAddressLine1: function(val, state) {
            context["field"] = "payeeAddressLine1";
            context["metadata"] = (objectMetadata ? objectMetadata["payeeAddressLine1"] : null);
            state['payeeAddressLine1'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        type_id: function(val, state) {
            context["field"] = "type_id";
            context["metadata"] = (objectMetadata ? objectMetadata["type_id"] : null);
            state['type_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        transactionType: function(val, state) {
            context["field"] = "transactionType";
            context["metadata"] = (objectMetadata ? objectMetadata["transactionType"] : null);
            state['transactionType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        recurrenceDesc: function(val, state) {
            context["field"] = "recurrenceDesc";
            context["metadata"] = (objectMetadata ? objectMetadata["recurrenceDesc"] : null);
            state['recurrenceDesc'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        currencyCode: function(val, state) {
            context["field"] = "currencyCode";
            context["metadata"] = (objectMetadata ? objectMetadata["currencyCode"] : null);
            state['currencyCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        errmsg: function(val, state) {
            context["field"] = "errmsg";
            context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
            state['errmsg'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function Bills(defaultValues) {
        var privateState = {};
        context["field"] = "balanceAmount";
        context["metadata"] = (objectMetadata ? objectMetadata["balanceAmount"] : null);
        privateState.balanceAmount = defaultValues ?
            (defaultValues["balanceAmount"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["balanceAmount"], context) :
                null) :
            null;

        context["field"] = "billDueDate";
        context["metadata"] = (objectMetadata ? objectMetadata["billDueDate"] : null);
        privateState.billDueDate = defaultValues ?
            (defaultValues["billDueDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["billDueDate"], context) :
                null) :
            null;

        context["field"] = "billerCategory";
        context["metadata"] = (objectMetadata ? objectMetadata["billerCategory"] : null);
        privateState.billerCategory = defaultValues ?
            (defaultValues["billerCategory"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["billerCategory"], context) :
                null) :
            null;

        context["field"] = "billerName";
        context["metadata"] = (objectMetadata ? objectMetadata["billerName"] : null);
        privateState.billerName = defaultValues ?
            (defaultValues["billerName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["billerName"], context) :
                null) :
            null;

        context["field"] = "billGeneratedDate";
        context["metadata"] = (objectMetadata ? objectMetadata["billGeneratedDate"] : null);
        privateState.billGeneratedDate = defaultValues ?
            (defaultValues["billGeneratedDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["billGeneratedDate"], context) :
                null) :
            null;

        context["field"] = "description";
        context["metadata"] = (objectMetadata ? objectMetadata["description"] : null);
        privateState.description = defaultValues ?
            (defaultValues["description"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["description"], context) :
                null) :
            null;

        context["field"] = "dueAmount";
        context["metadata"] = (objectMetadata ? objectMetadata["dueAmount"] : null);
        privateState.dueAmount = defaultValues ?
            (defaultValues["dueAmount"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["dueAmount"], context) :
                null) :
            null;

        context["field"] = "ebillStatus";
        context["metadata"] = (objectMetadata ? objectMetadata["ebillStatus"] : null);
        privateState.ebillStatus = defaultValues ?
            (defaultValues["ebillStatus"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ebillStatus"], context) :
                null) :
            null;

        context["field"] = "ebillURL";
        context["metadata"] = (objectMetadata ? objectMetadata["ebillURL"] : null);
        privateState.ebillURL = defaultValues ?
            (defaultValues["ebillURL"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ebillURL"], context) :
                null) :
            null;

        context["field"] = "fromAccountName";
        context["metadata"] = (objectMetadata ? objectMetadata["fromAccountName"] : null);
        privateState.fromAccountName = defaultValues ?
            (defaultValues["fromAccountName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["fromAccountName"], context) :
                null) :
            null;

        context["field"] = "fromAccountNumber";
        context["metadata"] = (objectMetadata ? objectMetadata["fromAccountNumber"] : null);
        privateState.fromAccountNumber = defaultValues ?
            (defaultValues["fromAccountNumber"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["fromAccountNumber"], context) :
                null) :
            null;

        context["field"] = "id";
        context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
        privateState.id = defaultValues ?
            (defaultValues["id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["id"], context) :
                null) :
            null;

        context["field"] = "order";
        context["metadata"] = (objectMetadata ? objectMetadata["order"] : null);
        privateState.order = defaultValues ?
            (defaultValues["order"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["order"], context) :
                null) :
            null;

        context["field"] = "paidAmount";
        context["metadata"] = (objectMetadata ? objectMetadata["paidAmount"] : null);
        privateState.paidAmount = defaultValues ?
            (defaultValues["paidAmount"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["paidAmount"], context) :
                null) :
            null;

        context["field"] = "paidDate";
        context["metadata"] = (objectMetadata ? objectMetadata["paidDate"] : null);
        privateState.paidDate = defaultValues ?
            (defaultValues["paidDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["paidDate"], context) :
                null) :
            null;

        context["field"] = "payeeId";
        context["metadata"] = (objectMetadata ? objectMetadata["payeeId"] : null);
        privateState.payeeId = defaultValues ?
            (defaultValues["payeeId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["payeeId"], context) :
                null) :
            null;

        context["field"] = "payeeName";
        context["metadata"] = (objectMetadata ? objectMetadata["payeeName"] : null);
        privateState.payeeName = defaultValues ?
            (defaultValues["payeeName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["payeeName"], context) :
                null) :
            null;

        context["field"] = "sortBy";
        context["metadata"] = (objectMetadata ? objectMetadata["sortBy"] : null);
        privateState.sortBy = defaultValues ?
            (defaultValues["sortBy"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["sortBy"], context) :
                null) :
            null;

        context["field"] = "payeeAddressLine1";
        context["metadata"] = (objectMetadata ? objectMetadata["payeeAddressLine1"] : null);
        privateState.payeeAddressLine1 = defaultValues ?
            (defaultValues["payeeAddressLine1"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["payeeAddressLine1"], context) :
                null) :
            null;

        context["field"] = "type_id";
        context["metadata"] = (objectMetadata ? objectMetadata["type_id"] : null);
        privateState.type_id = defaultValues ?
            (defaultValues["type_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["type_id"], context) :
                null) :
            null;

        context["field"] = "transactionType";
        context["metadata"] = (objectMetadata ? objectMetadata["transactionType"] : null);
        privateState.transactionType = defaultValues ?
            (defaultValues["transactionType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["transactionType"], context) :
                null) :
            null;

        context["field"] = "recurrenceDesc";
        context["metadata"] = (objectMetadata ? objectMetadata["recurrenceDesc"] : null);
        privateState.recurrenceDesc = defaultValues ?
            (defaultValues["recurrenceDesc"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["recurrenceDesc"], context) :
                null) :
            null;

        context["field"] = "currencyCode";
        context["metadata"] = (objectMetadata ? objectMetadata["currencyCode"] : null);
        privateState.currencyCode = defaultValues ?
            (defaultValues["currencyCode"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["currencyCode"], context) :
                null) :
            null;

        context["field"] = "errmsg";
        context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
        privateState.errmsg = defaultValues ?
            (defaultValues["errmsg"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["errmsg"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "balanceAmount": {
                get: function() {
                    context["field"] = "balanceAmount";
                    context["metadata"] = (objectMetadata ? objectMetadata["balanceAmount"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.balanceAmount, context);
                },
                set: function(val) {
                    setterFunctions['balanceAmount'].call(this, val, privateState);
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
            "billerName": {
                get: function() {
                    context["field"] = "billerName";
                    context["metadata"] = (objectMetadata ? objectMetadata["billerName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.billerName, context);
                },
                set: function(val) {
                    setterFunctions['billerName'].call(this, val, privateState);
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
            "description": {
                get: function() {
                    context["field"] = "description";
                    context["metadata"] = (objectMetadata ? objectMetadata["description"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.description, context);
                },
                set: function(val) {
                    setterFunctions['description'].call(this, val, privateState);
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
            "ebillStatus": {
                get: function() {
                    context["field"] = "ebillStatus";
                    context["metadata"] = (objectMetadata ? objectMetadata["ebillStatus"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ebillStatus, context);
                },
                set: function(val) {
                    setterFunctions['ebillStatus'].call(this, val, privateState);
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
            "fromAccountName": {
                get: function() {
                    context["field"] = "fromAccountName";
                    context["metadata"] = (objectMetadata ? objectMetadata["fromAccountName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.fromAccountName, context);
                },
                set: function(val) {
                    setterFunctions['fromAccountName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "fromAccountNumber": {
                get: function() {
                    context["field"] = "fromAccountNumber";
                    context["metadata"] = (objectMetadata ? objectMetadata["fromAccountNumber"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.fromAccountNumber, context);
                },
                set: function(val) {
                    setterFunctions['fromAccountNumber'].call(this, val, privateState);
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
            "paidDate": {
                get: function() {
                    context["field"] = "paidDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["paidDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.paidDate, context);
                },
                set: function(val) {
                    setterFunctions['paidDate'].call(this, val, privateState);
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
            "payeeAddressLine1": {
                get: function() {
                    context["field"] = "payeeAddressLine1";
                    context["metadata"] = (objectMetadata ? objectMetadata["payeeAddressLine1"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.payeeAddressLine1, context);
                },
                set: function(val) {
                    setterFunctions['payeeAddressLine1'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "type_id": {
                get: function() {
                    context["field"] = "type_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["type_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.type_id, context);
                },
                set: function(val) {
                    setterFunctions['type_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "transactionType": {
                get: function() {
                    context["field"] = "transactionType";
                    context["metadata"] = (objectMetadata ? objectMetadata["transactionType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.transactionType, context);
                },
                set: function(val) {
                    setterFunctions['transactionType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "recurrenceDesc": {
                get: function() {
                    context["field"] = "recurrenceDesc";
                    context["metadata"] = (objectMetadata ? objectMetadata["recurrenceDesc"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.recurrenceDesc, context);
                },
                set: function(val) {
                    setterFunctions['recurrenceDesc'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "currencyCode": {
                get: function() {
                    context["field"] = "currencyCode";
                    context["metadata"] = (objectMetadata ? objectMetadata["currencyCode"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.currencyCode, context);
                },
                set: function(val) {
                    setterFunctions['currencyCode'].call(this, val, privateState);
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
        });

        //converts model object to json object.
        this.toJsonInternal = function() {
            return Object.assign({}, privateState);
        };

        //overwrites object state with provided json value in argument.
        this.fromJsonInternal = function(value) {
            privateState.balanceAmount = value ? (value["balanceAmount"] ? value["balanceAmount"] : null) : null;
            privateState.billDueDate = value ? (value["billDueDate"] ? value["billDueDate"] : null) : null;
            privateState.billerCategory = value ? (value["billerCategory"] ? value["billerCategory"] : null) : null;
            privateState.billerName = value ? (value["billerName"] ? value["billerName"] : null) : null;
            privateState.billGeneratedDate = value ? (value["billGeneratedDate"] ? value["billGeneratedDate"] : null) : null;
            privateState.description = value ? (value["description"] ? value["description"] : null) : null;
            privateState.dueAmount = value ? (value["dueAmount"] ? value["dueAmount"] : null) : null;
            privateState.ebillStatus = value ? (value["ebillStatus"] ? value["ebillStatus"] : null) : null;
            privateState.ebillURL = value ? (value["ebillURL"] ? value["ebillURL"] : null) : null;
            privateState.fromAccountName = value ? (value["fromAccountName"] ? value["fromAccountName"] : null) : null;
            privateState.fromAccountNumber = value ? (value["fromAccountNumber"] ? value["fromAccountNumber"] : null) : null;
            privateState.id = value ? (value["id"] ? value["id"] : null) : null;
            privateState.order = value ? (value["order"] ? value["order"] : null) : null;
            privateState.paidAmount = value ? (value["paidAmount"] ? value["paidAmount"] : null) : null;
            privateState.paidDate = value ? (value["paidDate"] ? value["paidDate"] : null) : null;
            privateState.payeeId = value ? (value["payeeId"] ? value["payeeId"] : null) : null;
            privateState.payeeName = value ? (value["payeeName"] ? value["payeeName"] : null) : null;
            privateState.sortBy = value ? (value["sortBy"] ? value["sortBy"] : null) : null;
            privateState.payeeAddressLine1 = value ? (value["payeeAddressLine1"] ? value["payeeAddressLine1"] : null) : null;
            privateState.type_id = value ? (value["type_id"] ? value["type_id"] : null) : null;
            privateState.transactionType = value ? (value["transactionType"] ? value["transactionType"] : null) : null;
            privateState.recurrenceDesc = value ? (value["recurrenceDesc"] ? value["recurrenceDesc"] : null) : null;
            privateState.currencyCode = value ? (value["currencyCode"] ? value["currencyCode"] : null) : null;
            privateState.errmsg = value ? (value["errmsg"] ? value["errmsg"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(Bills);

    //Create new class level validator object
    BaseModel.Validator.call(Bills);

    var registerValidatorBackup = Bills.registerValidator;

    Bills.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(Bills.isValid(this, propName, val)) {
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
    //For Operation 'getDueBillsForPayee' with service id 'getDueBillsForPayee7456'
     Bills.getDueBillsForPayee = function(params, onCompletion){
        return Bills.customVerb('getDueBillsForPayee', params, onCompletion);
     };

    //For Operation 'getBillsForBiller' with service id 'getBillsForBiller4186'
     Bills.getBillsForBiller = function(params, onCompletion){
        return Bills.customVerb('getBillsForBiller', params, onCompletion);
     };

    //For Operation 'getPreviousBillsForBiller' with service id 'getPreviousBillsForBiller6502'
     Bills.getPreviousBillsForBiller = function(params, onCompletion){
        return Bills.customVerb('getPreviousBillsForBiller', params, onCompletion);
     };

    var relations = [];

    Bills.relations = relations;

    Bills.prototype.isValid = function() {
        return Bills.isValid(this);
    };

    Bills.prototype.objModelName = "Bills";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    Bills.registerProcessors = function(options, successCallback, failureCallback) {

        if(!options) {
            options = {};
        }

        if(options && ((options["preProcessor"] && typeof(options["preProcessor"]) === "function") || !options["preProcessor"])) {
            preProcessorCallback = options["preProcessor"];
        }

        if(options && ((options["postProcessor"] && typeof(options["postProcessor"]) === "function") || !options["postProcessor"])) {
            postProcessorCallback = options["postProcessor"];
        }

        function metaDataSuccess(res) {
            objectMetadata = kony.mvc.util.ProcessorUtils.convertObjectMetadataToFieldMetadataMap(res);
            successCallback();
        }

        function metaDataFailure(err) {
            failureCallback(err);
        }

        kony.mvc.util.ProcessorUtils.getMetadataForObject("RBObjects", "Bills", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    Bills.clone = function(objectToClone) {
        var clonedObj = new Bills();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return Bills;
});