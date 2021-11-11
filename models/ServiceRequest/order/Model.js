/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "order", "objectService" : "ServiceRequest"};

    var setterFunctions = {
        partyId: function(val, state) {
            context["field"] = "partyId";
            context["metadata"] = (objectMetadata ? objectMetadata["partyId"] : null);
            state['partyId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        accountId: function(val, state) {
            context["field"] = "accountId";
            context["metadata"] = (objectMetadata ? objectMetadata["accountId"] : null);
            state['accountId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        type: function(val, state) {
            context["field"] = "type";
            context["metadata"] = (objectMetadata ? objectMetadata["type"] : null);
            state['type'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        templateName: function(val, state) {
            context["field"] = "templateName";
            context["metadata"] = (objectMetadata ? objectMetadata["templateName"] : null);
            state['templateName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        requestBody: function(val, state) {
            context["field"] = "requestBody";
            context["metadata"] = (objectMetadata ? objectMetadata["requestBody"] : null);
            state['requestBody'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        subtypeId: function(val, state) {
            context["field"] = "subtypeId";
            context["metadata"] = (objectMetadata ? objectMetadata["subtypeId"] : null);
            state['subtypeId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        code: function(val, state) {
            context["field"] = "code";
            context["metadata"] = (objectMetadata ? objectMetadata["code"] : null);
            state['code'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        id: function(val, state) {
            context["field"] = "id";
            context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
            state['id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        dbpErrCode: function(val, state) {
            context["field"] = "dbpErrCode";
            context["metadata"] = (objectMetadata ? objectMetadata["dbpErrCode"] : null);
            state['dbpErrCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        dbpErrMsg: function(val, state) {
            context["field"] = "dbpErrMsg";
            context["metadata"] = (objectMetadata ? objectMetadata["dbpErrMsg"] : null);
            state['dbpErrMsg'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        message: function(val, state) {
            context["field"] = "message";
            context["metadata"] = (objectMetadata ? objectMetadata["message"] : null);
            state['message'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        subtype: function(val, state) {
            context["field"] = "subtype";
            context["metadata"] = (objectMetadata ? objectMetadata["subtype"] : null);
            state['subtype'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        templateId: function(val, state) {
            context["field"] = "templateId";
            context["metadata"] = (objectMetadata ? objectMetadata["templateId"] : null);
            state['templateId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function order(defaultValues) {
        var privateState = {};
        context["field"] = "partyId";
        context["metadata"] = (objectMetadata ? objectMetadata["partyId"] : null);
        privateState.partyId = defaultValues ?
            (defaultValues["partyId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["partyId"], context) :
                null) :
            null;

        context["field"] = "accountId";
        context["metadata"] = (objectMetadata ? objectMetadata["accountId"] : null);
        privateState.accountId = defaultValues ?
            (defaultValues["accountId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["accountId"], context) :
                null) :
            null;

        context["field"] = "type";
        context["metadata"] = (objectMetadata ? objectMetadata["type"] : null);
        privateState.type = defaultValues ?
            (defaultValues["type"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["type"], context) :
                null) :
            null;

        context["field"] = "templateName";
        context["metadata"] = (objectMetadata ? objectMetadata["templateName"] : null);
        privateState.templateName = defaultValues ?
            (defaultValues["templateName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["templateName"], context) :
                null) :
            null;

        context["field"] = "requestBody";
        context["metadata"] = (objectMetadata ? objectMetadata["requestBody"] : null);
        privateState.requestBody = defaultValues ?
            (defaultValues["requestBody"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["requestBody"], context) :
                null) :
            null;

        context["field"] = "subtypeId";
        context["metadata"] = (objectMetadata ? objectMetadata["subtypeId"] : null);
        privateState.subtypeId = defaultValues ?
            (defaultValues["subtypeId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["subtypeId"], context) :
                null) :
            null;

        context["field"] = "code";
        context["metadata"] = (objectMetadata ? objectMetadata["code"] : null);
        privateState.code = defaultValues ?
            (defaultValues["code"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["code"], context) :
                null) :
            null;

        context["field"] = "id";
        context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
        privateState.id = defaultValues ?
            (defaultValues["id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["id"], context) :
                null) :
            null;

        context["field"] = "dbpErrCode";
        context["metadata"] = (objectMetadata ? objectMetadata["dbpErrCode"] : null);
        privateState.dbpErrCode = defaultValues ?
            (defaultValues["dbpErrCode"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["dbpErrCode"], context) :
                null) :
            null;

        context["field"] = "dbpErrMsg";
        context["metadata"] = (objectMetadata ? objectMetadata["dbpErrMsg"] : null);
        privateState.dbpErrMsg = defaultValues ?
            (defaultValues["dbpErrMsg"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["dbpErrMsg"], context) :
                null) :
            null;

        context["field"] = "message";
        context["metadata"] = (objectMetadata ? objectMetadata["message"] : null);
        privateState.message = defaultValues ?
            (defaultValues["message"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["message"], context) :
                null) :
            null;

        context["field"] = "subtype";
        context["metadata"] = (objectMetadata ? objectMetadata["subtype"] : null);
        privateState.subtype = defaultValues ?
            (defaultValues["subtype"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["subtype"], context) :
                null) :
            null;

        context["field"] = "templateId";
        context["metadata"] = (objectMetadata ? objectMetadata["templateId"] : null);
        privateState.templateId = defaultValues ?
            (defaultValues["templateId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["templateId"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "partyId": {
                get: function() {
                    context["field"] = "partyId";
                    context["metadata"] = (objectMetadata ? objectMetadata["partyId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.partyId, context);
                },
                set: function(val) {
                    setterFunctions['partyId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "accountId": {
                get: function() {
                    context["field"] = "accountId";
                    context["metadata"] = (objectMetadata ? objectMetadata["accountId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.accountId, context);
                },
                set: function(val) {
                    setterFunctions['accountId'].call(this, val, privateState);
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
            "templateName": {
                get: function() {
                    context["field"] = "templateName";
                    context["metadata"] = (objectMetadata ? objectMetadata["templateName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.templateName, context);
                },
                set: function(val) {
                    setterFunctions['templateName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "requestBody": {
                get: function() {
                    context["field"] = "requestBody";
                    context["metadata"] = (objectMetadata ? objectMetadata["requestBody"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.requestBody, context);
                },
                set: function(val) {
                    setterFunctions['requestBody'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "subtypeId": {
                get: function() {
                    context["field"] = "subtypeId";
                    context["metadata"] = (objectMetadata ? objectMetadata["subtypeId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.subtypeId, context);
                },
                set: function(val) {
                    setterFunctions['subtypeId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "code": {
                get: function() {
                    context["field"] = "code";
                    context["metadata"] = (objectMetadata ? objectMetadata["code"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.code, context);
                },
                set: function(val) {
                    setterFunctions['code'].call(this, val, privateState);
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
            "dbpErrCode": {
                get: function() {
                    context["field"] = "dbpErrCode";
                    context["metadata"] = (objectMetadata ? objectMetadata["dbpErrCode"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.dbpErrCode, context);
                },
                set: function(val) {
                    setterFunctions['dbpErrCode'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "dbpErrMsg": {
                get: function() {
                    context["field"] = "dbpErrMsg";
                    context["metadata"] = (objectMetadata ? objectMetadata["dbpErrMsg"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.dbpErrMsg, context);
                },
                set: function(val) {
                    setterFunctions['dbpErrMsg'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "message": {
                get: function() {
                    context["field"] = "message";
                    context["metadata"] = (objectMetadata ? objectMetadata["message"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.message, context);
                },
                set: function(val) {
                    setterFunctions['message'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "subtype": {
                get: function() {
                    context["field"] = "subtype";
                    context["metadata"] = (objectMetadata ? objectMetadata["subtype"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.subtype, context);
                },
                set: function(val) {
                    setterFunctions['subtype'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "templateId": {
                get: function() {
                    context["field"] = "templateId";
                    context["metadata"] = (objectMetadata ? objectMetadata["templateId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.templateId, context);
                },
                set: function(val) {
                    setterFunctions['templateId'].call(this, val, privateState);
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
            privateState.partyId = value ? (value["partyId"] ? value["partyId"] : null) : null;
            privateState.accountId = value ? (value["accountId"] ? value["accountId"] : null) : null;
            privateState.type = value ? (value["type"] ? value["type"] : null) : null;
            privateState.templateName = value ? (value["templateName"] ? value["templateName"] : null) : null;
            privateState.requestBody = value ? (value["requestBody"] ? value["requestBody"] : null) : null;
            privateState.subtypeId = value ? (value["subtypeId"] ? value["subtypeId"] : null) : null;
            privateState.code = value ? (value["code"] ? value["code"] : null) : null;
            privateState.id = value ? (value["id"] ? value["id"] : null) : null;
            privateState.dbpErrCode = value ? (value["dbpErrCode"] ? value["dbpErrCode"] : null) : null;
            privateState.dbpErrMsg = value ? (value["dbpErrMsg"] ? value["dbpErrMsg"] : null) : null;
            privateState.message = value ? (value["message"] ? value["message"] : null) : null;
            privateState.subtype = value ? (value["subtype"] ? value["subtype"] : null) : null;
            privateState.templateId = value ? (value["templateId"] ? value["templateId"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(order);

    //Create new class level validator object
    BaseModel.Validator.call(order);

    var registerValidatorBackup = order.registerValidator;

    order.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(order.isValid(this, propName, val)) {
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
    //For Operation 'getServiceReqDetails' with service id 'getOrderDetails3801'
     order.getServiceReqDetails = function(params, onCompletion){
        return order.customVerb('getServiceReqDetails', params, onCompletion);
     };

    //For Operation 'triggerService' with service id 'triggerForStatus6475'
     order.triggerService = function(params, onCompletion){
        return order.customVerb('triggerService', params, onCompletion);
     };

    //For Operation 'getServiceConfigDetails' with service id 'getTemplateDetails2561'
     order.getServiceConfigDetails = function(params, onCompletion){
        return order.customVerb('getServiceConfigDetails', params, onCompletion);
     };

    var relations = [];

    order.relations = relations;

    order.prototype.isValid = function() {
        return order.isValid(this);
    };

    order.prototype.objModelName = "order";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    order.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("ServiceRequest", "order", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    order.clone = function(objectToClone) {
        var clonedObj = new order();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return order;
});