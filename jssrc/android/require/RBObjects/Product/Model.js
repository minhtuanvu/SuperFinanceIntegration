/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {
        "object": "Product",
        "objectService": "RBObjects"
    };
    var setterFunctions = {
        productId: function(val, state) {
            context["field"] = "productId";
            context["metadata"] = (objectMetadata ? objectMetadata["productId"] : null);
            state['productId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Status_id: function(val, state) {
            context["field"] = "Status_id";
            context["metadata"] = (objectMetadata ? objectMetadata["Status_id"] : null);
            state['Status_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        rates: function(val, state) {
            context["field"] = "rates";
            context["metadata"] = (objectMetadata ? objectMetadata["rates"] : null);
            state['rates'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        MarketingStateId: function(val, state) {
            context["field"] = "MarketingStateId";
            context["metadata"] = (objectMetadata ? objectMetadata["MarketingStateId"] : null);
            state['MarketingStateId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        productType: function(val, state) {
            context["field"] = "productType";
            context["metadata"] = (objectMetadata ? objectMetadata["productType"] : null);
            state['productType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        productDescription: function(val, state) {
            context["field"] = "productDescription";
            context["metadata"] = (objectMetadata ? objectMetadata["productDescription"] : null);
            state['productDescription'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        info: function(val, state) {
            context["field"] = "info";
            context["metadata"] = (objectMetadata ? objectMetadata["info"] : null);
            state['info'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Type_id: function(val, state) {
            context["field"] = "Type_id";
            context["metadata"] = (objectMetadata ? objectMetadata["Type_id"] : null);
            state['Type_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        productName: function(val, state) {
            context["field"] = "productName";
            context["metadata"] = (objectMetadata ? objectMetadata["productName"] : null);
            state['productName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        productTypeId: function(val, state) {
            context["field"] = "productTypeId";
            context["metadata"] = (objectMetadata ? objectMetadata["productTypeId"] : null);
            state['productTypeId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        otherproducttype_Name: function(val, state) {
            context["field"] = "otherproducttype_Name";
            context["metadata"] = (objectMetadata ? objectMetadata["otherproducttype_Name"] : null);
            state['otherproducttype_Name'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        termsAndConditions: function(val, state) {
            context["field"] = "termsAndConditions";
            context["metadata"] = (objectMetadata ? objectMetadata["termsAndConditions"] : null);
            state['termsAndConditions'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        otherproducttype_Description: function(val, state) {
            context["field"] = "otherproducttype_Description";
            context["metadata"] = (objectMetadata ? objectMetadata["otherproducttype_Description"] : null);
            state['otherproducttype_Description'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        SecondaryProduct_id: function(val, state) {
            context["field"] = "SecondaryProduct_id";
            context["metadata"] = (objectMetadata ? objectMetadata["SecondaryProduct_id"] : null);
            state['SecondaryProduct_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        features: function(val, state) {
            context["field"] = "features";
            context["metadata"] = (objectMetadata ? objectMetadata["features"] : null);
            state['features'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        otherproducttype_id: function(val, state) {
            context["field"] = "otherproducttype_id";
            context["metadata"] = (objectMetadata ? objectMetadata["otherproducttype_id"] : null);
            state['otherproducttype_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        createdby: function(val, state) {
            context["field"] = "createdby";
            context["metadata"] = (objectMetadata ? objectMetadata["createdby"] : null);
            state['createdby'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        modifiedby: function(val, state) {
            context["field"] = "modifiedby";
            context["metadata"] = (objectMetadata ? objectMetadata["modifiedby"] : null);
            state['modifiedby'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        lastmodifiedts: function(val, state) {
            context["field"] = "lastmodifiedts";
            context["metadata"] = (objectMetadata ? objectMetadata["lastmodifiedts"] : null);
            state['lastmodifiedts'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        createdts: function(val, state) {
            context["field"] = "createdts";
            context["metadata"] = (objectMetadata ? objectMetadata["createdts"] : null);
            state['createdts'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        softdeleteflag: function(val, state) {
            context["field"] = "softdeleteflag";
            context["metadata"] = (objectMetadata ? objectMetadata["softdeleteflag"] : null);
            state['softdeleteflag'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        synctimestamp: function(val, state) {
            context["field"] = "synctimestamp";
            context["metadata"] = (objectMetadata ? objectMetadata["synctimestamp"] : null);
            state['synctimestamp'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        deviceID: function(val, state) {
            context["field"] = "deviceID";
            context["metadata"] = (objectMetadata ? objectMetadata["deviceID"] : null);
            state['deviceID'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        userName: function(val, state) {
            context["field"] = "userName";
            context["metadata"] = (objectMetadata ? objectMetadata["userName"] : null);
            state['userName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        accountID: function(val, state) {
            context["field"] = "accountID";
            context["metadata"] = (objectMetadata ? objectMetadata["accountID"] : null);
            state['accountID'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };
    //Create the Model Class
    function Product(defaultValues) {
        var privateState = {};
        context["field"] = "productId";
        context["metadata"] = (objectMetadata ? objectMetadata["productId"] : null);
        privateState.productId = defaultValues ? (defaultValues["productId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["productId"], context) : null) : null;
        context["field"] = "Status_id";
        context["metadata"] = (objectMetadata ? objectMetadata["Status_id"] : null);
        privateState.Status_id = defaultValues ? (defaultValues["Status_id"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Status_id"], context) : null) : null;
        context["field"] = "rates";
        context["metadata"] = (objectMetadata ? objectMetadata["rates"] : null);
        privateState.rates = defaultValues ? (defaultValues["rates"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["rates"], context) : null) : null;
        context["field"] = "MarketingStateId";
        context["metadata"] = (objectMetadata ? objectMetadata["MarketingStateId"] : null);
        privateState.MarketingStateId = defaultValues ? (defaultValues["MarketingStateId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["MarketingStateId"], context) : null) : null;
        context["field"] = "productType";
        context["metadata"] = (objectMetadata ? objectMetadata["productType"] : null);
        privateState.productType = defaultValues ? (defaultValues["productType"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["productType"], context) : null) : null;
        context["field"] = "productDescription";
        context["metadata"] = (objectMetadata ? objectMetadata["productDescription"] : null);
        privateState.productDescription = defaultValues ? (defaultValues["productDescription"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["productDescription"], context) : null) : null;
        context["field"] = "info";
        context["metadata"] = (objectMetadata ? objectMetadata["info"] : null);
        privateState.info = defaultValues ? (defaultValues["info"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["info"], context) : null) : null;
        context["field"] = "Type_id";
        context["metadata"] = (objectMetadata ? objectMetadata["Type_id"] : null);
        privateState.Type_id = defaultValues ? (defaultValues["Type_id"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Type_id"], context) : null) : null;
        context["field"] = "productName";
        context["metadata"] = (objectMetadata ? objectMetadata["productName"] : null);
        privateState.productName = defaultValues ? (defaultValues["productName"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["productName"], context) : null) : null;
        context["field"] = "productTypeId";
        context["metadata"] = (objectMetadata ? objectMetadata["productTypeId"] : null);
        privateState.productTypeId = defaultValues ? (defaultValues["productTypeId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["productTypeId"], context) : null) : null;
        context["field"] = "otherproducttype_Name";
        context["metadata"] = (objectMetadata ? objectMetadata["otherproducttype_Name"] : null);
        privateState.otherproducttype_Name = defaultValues ? (defaultValues["otherproducttype_Name"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["otherproducttype_Name"], context) : null) : null;
        context["field"] = "termsAndConditions";
        context["metadata"] = (objectMetadata ? objectMetadata["termsAndConditions"] : null);
        privateState.termsAndConditions = defaultValues ? (defaultValues["termsAndConditions"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["termsAndConditions"], context) : null) : null;
        context["field"] = "otherproducttype_Description";
        context["metadata"] = (objectMetadata ? objectMetadata["otherproducttype_Description"] : null);
        privateState.otherproducttype_Description = defaultValues ? (defaultValues["otherproducttype_Description"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["otherproducttype_Description"], context) : null) : null;
        context["field"] = "SecondaryProduct_id";
        context["metadata"] = (objectMetadata ? objectMetadata["SecondaryProduct_id"] : null);
        privateState.SecondaryProduct_id = defaultValues ? (defaultValues["SecondaryProduct_id"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["SecondaryProduct_id"], context) : null) : null;
        context["field"] = "features";
        context["metadata"] = (objectMetadata ? objectMetadata["features"] : null);
        privateState.features = defaultValues ? (defaultValues["features"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["features"], context) : null) : null;
        context["field"] = "otherproducttype_id";
        context["metadata"] = (objectMetadata ? objectMetadata["otherproducttype_id"] : null);
        privateState.otherproducttype_id = defaultValues ? (defaultValues["otherproducttype_id"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["otherproducttype_id"], context) : null) : null;
        context["field"] = "createdby";
        context["metadata"] = (objectMetadata ? objectMetadata["createdby"] : null);
        privateState.createdby = defaultValues ? (defaultValues["createdby"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["createdby"], context) : null) : null;
        context["field"] = "modifiedby";
        context["metadata"] = (objectMetadata ? objectMetadata["modifiedby"] : null);
        privateState.modifiedby = defaultValues ? (defaultValues["modifiedby"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["modifiedby"], context) : null) : null;
        context["field"] = "lastmodifiedts";
        context["metadata"] = (objectMetadata ? objectMetadata["lastmodifiedts"] : null);
        privateState.lastmodifiedts = defaultValues ? (defaultValues["lastmodifiedts"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["lastmodifiedts"], context) : null) : null;
        context["field"] = "createdts";
        context["metadata"] = (objectMetadata ? objectMetadata["createdts"] : null);
        privateState.createdts = defaultValues ? (defaultValues["createdts"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["createdts"], context) : null) : null;
        context["field"] = "softdeleteflag";
        context["metadata"] = (objectMetadata ? objectMetadata["softdeleteflag"] : null);
        privateState.softdeleteflag = defaultValues ? (defaultValues["softdeleteflag"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["softdeleteflag"], context) : null) : null;
        context["field"] = "synctimestamp";
        context["metadata"] = (objectMetadata ? objectMetadata["synctimestamp"] : null);
        privateState.synctimestamp = defaultValues ? (defaultValues["synctimestamp"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["synctimestamp"], context) : null) : null;
        context["field"] = "deviceID";
        context["metadata"] = (objectMetadata ? objectMetadata["deviceID"] : null);
        privateState.deviceID = defaultValues ? (defaultValues["deviceID"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["deviceID"], context) : null) : null;
        context["field"] = "userName";
        context["metadata"] = (objectMetadata ? objectMetadata["userName"] : null);
        privateState.userName = defaultValues ? (defaultValues["userName"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["userName"], context) : null) : null;
        context["field"] = "accountID";
        context["metadata"] = (objectMetadata ? objectMetadata["accountID"] : null);
        privateState.accountID = defaultValues ? (defaultValues["accountID"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["accountID"], context) : null) : null;
        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);
        //Defining Getter/Setters
        Object.defineProperties(this, {
            "productId": {
                get: function() {
                    context["field"] = "productId";
                    context["metadata"] = (objectMetadata ? objectMetadata["productId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.productId, context);
                },
                set: function(val) {
                    setterFunctions['productId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Status_id": {
                get: function() {
                    context["field"] = "Status_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["Status_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Status_id, context);
                },
                set: function(val) {
                    setterFunctions['Status_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "rates": {
                get: function() {
                    context["field"] = "rates";
                    context["metadata"] = (objectMetadata ? objectMetadata["rates"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.rates, context);
                },
                set: function(val) {
                    setterFunctions['rates'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "MarketingStateId": {
                get: function() {
                    context["field"] = "MarketingStateId";
                    context["metadata"] = (objectMetadata ? objectMetadata["MarketingStateId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.MarketingStateId, context);
                },
                set: function(val) {
                    setterFunctions['MarketingStateId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "productType": {
                get: function() {
                    context["field"] = "productType";
                    context["metadata"] = (objectMetadata ? objectMetadata["productType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.productType, context);
                },
                set: function(val) {
                    setterFunctions['productType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "productDescription": {
                get: function() {
                    context["field"] = "productDescription";
                    context["metadata"] = (objectMetadata ? objectMetadata["productDescription"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.productDescription, context);
                },
                set: function(val) {
                    setterFunctions['productDescription'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "info": {
                get: function() {
                    context["field"] = "info";
                    context["metadata"] = (objectMetadata ? objectMetadata["info"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.info, context);
                },
                set: function(val) {
                    setterFunctions['info'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Type_id": {
                get: function() {
                    context["field"] = "Type_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["Type_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Type_id, context);
                },
                set: function(val) {
                    setterFunctions['Type_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "productName": {
                get: function() {
                    context["field"] = "productName";
                    context["metadata"] = (objectMetadata ? objectMetadata["productName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.productName, context);
                },
                set: function(val) {
                    setterFunctions['productName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "productTypeId": {
                get: function() {
                    context["field"] = "productTypeId";
                    context["metadata"] = (objectMetadata ? objectMetadata["productTypeId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.productTypeId, context);
                },
                set: function(val) {
                    setterFunctions['productTypeId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "otherproducttype_Name": {
                get: function() {
                    context["field"] = "otherproducttype_Name";
                    context["metadata"] = (objectMetadata ? objectMetadata["otherproducttype_Name"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.otherproducttype_Name, context);
                },
                set: function(val) {
                    setterFunctions['otherproducttype_Name'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "termsAndConditions": {
                get: function() {
                    context["field"] = "termsAndConditions";
                    context["metadata"] = (objectMetadata ? objectMetadata["termsAndConditions"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.termsAndConditions, context);
                },
                set: function(val) {
                    setterFunctions['termsAndConditions'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "otherproducttype_Description": {
                get: function() {
                    context["field"] = "otherproducttype_Description";
                    context["metadata"] = (objectMetadata ? objectMetadata["otherproducttype_Description"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.otherproducttype_Description, context);
                },
                set: function(val) {
                    setterFunctions['otherproducttype_Description'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "SecondaryProduct_id": {
                get: function() {
                    context["field"] = "SecondaryProduct_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["SecondaryProduct_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.SecondaryProduct_id, context);
                },
                set: function(val) {
                    setterFunctions['SecondaryProduct_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "features": {
                get: function() {
                    context["field"] = "features";
                    context["metadata"] = (objectMetadata ? objectMetadata["features"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.features, context);
                },
                set: function(val) {
                    setterFunctions['features'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "otherproducttype_id": {
                get: function() {
                    context["field"] = "otherproducttype_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["otherproducttype_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.otherproducttype_id, context);
                },
                set: function(val) {
                    setterFunctions['otherproducttype_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "createdby": {
                get: function() {
                    context["field"] = "createdby";
                    context["metadata"] = (objectMetadata ? objectMetadata["createdby"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.createdby, context);
                },
                set: function(val) {
                    setterFunctions['createdby'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "modifiedby": {
                get: function() {
                    context["field"] = "modifiedby";
                    context["metadata"] = (objectMetadata ? objectMetadata["modifiedby"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.modifiedby, context);
                },
                set: function(val) {
                    setterFunctions['modifiedby'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "lastmodifiedts": {
                get: function() {
                    context["field"] = "lastmodifiedts";
                    context["metadata"] = (objectMetadata ? objectMetadata["lastmodifiedts"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.lastmodifiedts, context);
                },
                set: function(val) {
                    setterFunctions['lastmodifiedts'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "createdts": {
                get: function() {
                    context["field"] = "createdts";
                    context["metadata"] = (objectMetadata ? objectMetadata["createdts"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.createdts, context);
                },
                set: function(val) {
                    setterFunctions['createdts'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "softdeleteflag": {
                get: function() {
                    context["field"] = "softdeleteflag";
                    context["metadata"] = (objectMetadata ? objectMetadata["softdeleteflag"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.softdeleteflag, context);
                },
                set: function(val) {
                    setterFunctions['softdeleteflag'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "synctimestamp": {
                get: function() {
                    context["field"] = "synctimestamp";
                    context["metadata"] = (objectMetadata ? objectMetadata["synctimestamp"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.synctimestamp, context);
                },
                set: function(val) {
                    setterFunctions['synctimestamp'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "deviceID": {
                get: function() {
                    context["field"] = "deviceID";
                    context["metadata"] = (objectMetadata ? objectMetadata["deviceID"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.deviceID, context);
                },
                set: function(val) {
                    setterFunctions['deviceID'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "userName": {
                get: function() {
                    context["field"] = "userName";
                    context["metadata"] = (objectMetadata ? objectMetadata["userName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.userName, context);
                },
                set: function(val) {
                    setterFunctions['userName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "accountID": {
                get: function() {
                    context["field"] = "accountID";
                    context["metadata"] = (objectMetadata ? objectMetadata["accountID"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.accountID, context);
                },
                set: function(val) {
                    setterFunctions['accountID'].call(this, val, privateState);
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
            privateState.productId = value ? (value["productId"] ? value["productId"] : null) : null;
            privateState.Status_id = value ? (value["Status_id"] ? value["Status_id"] : null) : null;
            privateState.rates = value ? (value["rates"] ? value["rates"] : null) : null;
            privateState.MarketingStateId = value ? (value["MarketingStateId"] ? value["MarketingStateId"] : null) : null;
            privateState.productType = value ? (value["productType"] ? value["productType"] : null) : null;
            privateState.productDescription = value ? (value["productDescription"] ? value["productDescription"] : null) : null;
            privateState.info = value ? (value["info"] ? value["info"] : null) : null;
            privateState.Type_id = value ? (value["Type_id"] ? value["Type_id"] : null) : null;
            privateState.productName = value ? (value["productName"] ? value["productName"] : null) : null;
            privateState.productTypeId = value ? (value["productTypeId"] ? value["productTypeId"] : null) : null;
            privateState.otherproducttype_Name = value ? (value["otherproducttype_Name"] ? value["otherproducttype_Name"] : null) : null;
            privateState.termsAndConditions = value ? (value["termsAndConditions"] ? value["termsAndConditions"] : null) : null;
            privateState.otherproducttype_Description = value ? (value["otherproducttype_Description"] ? value["otherproducttype_Description"] : null) : null;
            privateState.SecondaryProduct_id = value ? (value["SecondaryProduct_id"] ? value["SecondaryProduct_id"] : null) : null;
            privateState.features = value ? (value["features"] ? value["features"] : null) : null;
            privateState.otherproducttype_id = value ? (value["otherproducttype_id"] ? value["otherproducttype_id"] : null) : null;
            privateState.createdby = value ? (value["createdby"] ? value["createdby"] : null) : null;
            privateState.modifiedby = value ? (value["modifiedby"] ? value["modifiedby"] : null) : null;
            privateState.lastmodifiedts = value ? (value["lastmodifiedts"] ? value["lastmodifiedts"] : null) : null;
            privateState.createdts = value ? (value["createdts"] ? value["createdts"] : null) : null;
            privateState.softdeleteflag = value ? (value["softdeleteflag"] ? value["softdeleteflag"] : null) : null;
            privateState.synctimestamp = value ? (value["synctimestamp"] ? value["synctimestamp"] : null) : null;
            privateState.deviceID = value ? (value["deviceID"] ? value["deviceID"] : null) : null;
            privateState.userName = value ? (value["userName"] ? value["userName"] : null) : null;
            privateState.accountID = value ? (value["accountID"] ? value["accountID"] : null) : null;
        };
    }
    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(Product);
    //Create new class level validator object
    BaseModel.Validator.call(Product);
    var registerValidatorBackup = Product.registerValidator;
    Product.registerValidator = function() {
            var propName = arguments[0];
            if (!setterFunctions[propName].changed) {
                var setterBackup = setterFunctions[propName];
                setterFunctions[arguments[0]] = function() {
                    if (Product.isValid(this, propName, val)) {
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
        //For Operation 'getUserProductList' with service id 'getUserProductList3202'
    Product.getUserProductList = function(params, onCompletion) {
        return Product.customVerb('getUserProductList', params, onCompletion);
    };
    var relations = [];
    Product.relations = relations;
    Product.prototype.isValid = function() {
        return Product.isValid(this);
    };
    Product.prototype.objModelName = "Product";
    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    Product.registerProcessors = function(options, successCallback, failureCallback) {
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
        kony.mvc.util.ProcessorUtils.getMetadataForObject("RBObjects", "Product", options, metaDataSuccess, metaDataFailure);
    };
    //clone the object provided in argument.
    Product.clone = function(objectToClone) {
        var clonedObj = new Product();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };
    return Product;
});