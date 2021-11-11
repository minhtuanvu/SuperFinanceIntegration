/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {
        "object": "Messages",
        "objectService": "RBObjects"
    };
    var setterFunctions = {
        accountId: function(val, state) {
            context["field"] = "accountId";
            context["metadata"] = (objectMetadata ? objectMetadata["accountId"] : null);
            state['accountId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        accountName: function(val, state) {
            context["field"] = "accountName";
            context["metadata"] = (objectMetadata ? objectMetadata["accountName"] : null);
            state['accountName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        accountNickName: function(val, state) {
            context["field"] = "accountNickName";
            context["metadata"] = (objectMetadata ? objectMetadata["accountNickName"] : null);
            state['accountNickName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        categoryId: function(val, state) {
            context["field"] = "categoryId";
            context["metadata"] = (objectMetadata ? objectMetadata["categoryId"] : null);
            state['categoryId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        categoryName: function(val, state) {
            context["field"] = "categoryName";
            context["metadata"] = (objectMetadata ? objectMetadata["categoryName"] : null);
            state['categoryName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        count: function(val, state) {
            context["field"] = "count";
            context["metadata"] = (objectMetadata ? objectMetadata["count"] : null);
            state['count'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        createdDate: function(val, state) {
            context["field"] = "createdDate";
            context["metadata"] = (objectMetadata ? objectMetadata["createdDate"] : null);
            state['createdDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        deletedDate: function(val, state) {
            context["field"] = "deletedDate";
            context["metadata"] = (objectMetadata ? objectMetadata["deletedDate"] : null);
            state['deletedDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        errmsg: function(val, state) {
            context["field"] = "errmsg";
            context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
            state['errmsg'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isRead: function(val, state) {
            context["field"] = "isRead";
            context["metadata"] = (objectMetadata ? objectMetadata["isRead"] : null);
            state['isRead'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        message: function(val, state) {
            context["field"] = "message";
            context["metadata"] = (objectMetadata ? objectMetadata["message"] : null);
            state['message'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        messageId: function(val, state) {
            context["field"] = "messageId";
            context["metadata"] = (objectMetadata ? objectMetadata["messageId"] : null);
            state['messageId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        messageType: function(val, state) {
            context["field"] = "messageType";
            context["metadata"] = (objectMetadata ? objectMetadata["messageType"] : null);
            state['messageType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        pageSize: function(val, state) {
            context["field"] = "pageSize";
            context["metadata"] = (objectMetadata ? objectMetadata["pageSize"] : null);
            state['pageSize'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        receivedDate: function(val, state) {
            context["field"] = "receivedDate";
            context["metadata"] = (objectMetadata ? objectMetadata["receivedDate"] : null);
            state['receivedDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        recordNumber: function(val, state) {
            context["field"] = "recordNumber";
            context["metadata"] = (objectMetadata ? objectMetadata["recordNumber"] : null);
            state['recordNumber'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        sentDate: function(val, state) {
            context["field"] = "sentDate";
            context["metadata"] = (objectMetadata ? objectMetadata["sentDate"] : null);
            state['sentDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        subcategoryId: function(val, state) {
            context["field"] = "subcategoryId";
            context["metadata"] = (objectMetadata ? objectMetadata["subcategoryId"] : null);
            state['subcategoryId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        subcategoryName: function(val, state) {
            context["field"] = "subcategoryName";
            context["metadata"] = (objectMetadata ? objectMetadata["subcategoryName"] : null);
            state['subcategoryName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        subject: function(val, state) {
            context["field"] = "subject";
            context["metadata"] = (objectMetadata ? objectMetadata["subject"] : null);
            state['subject'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        success: function(val, state) {
            context["field"] = "success";
            context["metadata"] = (objectMetadata ? objectMetadata["success"] : null);
            state['success'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };
    //Create the Model Class
    function Messages(defaultValues) {
        var privateState = {};
        context["field"] = "accountId";
        context["metadata"] = (objectMetadata ? objectMetadata["accountId"] : null);
        privateState.accountId = defaultValues ? (defaultValues["accountId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["accountId"], context) : null) : null;
        context["field"] = "accountName";
        context["metadata"] = (objectMetadata ? objectMetadata["accountName"] : null);
        privateState.accountName = defaultValues ? (defaultValues["accountName"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["accountName"], context) : null) : null;
        context["field"] = "accountNickName";
        context["metadata"] = (objectMetadata ? objectMetadata["accountNickName"] : null);
        privateState.accountNickName = defaultValues ? (defaultValues["accountNickName"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["accountNickName"], context) : null) : null;
        context["field"] = "categoryId";
        context["metadata"] = (objectMetadata ? objectMetadata["categoryId"] : null);
        privateState.categoryId = defaultValues ? (defaultValues["categoryId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["categoryId"], context) : null) : null;
        context["field"] = "categoryName";
        context["metadata"] = (objectMetadata ? objectMetadata["categoryName"] : null);
        privateState.categoryName = defaultValues ? (defaultValues["categoryName"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["categoryName"], context) : null) : null;
        context["field"] = "count";
        context["metadata"] = (objectMetadata ? objectMetadata["count"] : null);
        privateState.count = defaultValues ? (defaultValues["count"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["count"], context) : null) : null;
        context["field"] = "createdDate";
        context["metadata"] = (objectMetadata ? objectMetadata["createdDate"] : null);
        privateState.createdDate = defaultValues ? (defaultValues["createdDate"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["createdDate"], context) : null) : null;
        context["field"] = "deletedDate";
        context["metadata"] = (objectMetadata ? objectMetadata["deletedDate"] : null);
        privateState.deletedDate = defaultValues ? (defaultValues["deletedDate"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["deletedDate"], context) : null) : null;
        context["field"] = "errmsg";
        context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
        privateState.errmsg = defaultValues ? (defaultValues["errmsg"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["errmsg"], context) : null) : null;
        context["field"] = "isRead";
        context["metadata"] = (objectMetadata ? objectMetadata["isRead"] : null);
        privateState.isRead = defaultValues ? (defaultValues["isRead"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isRead"], context) : null) : null;
        context["field"] = "message";
        context["metadata"] = (objectMetadata ? objectMetadata["message"] : null);
        privateState.message = defaultValues ? (defaultValues["message"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["message"], context) : null) : null;
        context["field"] = "messageId";
        context["metadata"] = (objectMetadata ? objectMetadata["messageId"] : null);
        privateState.messageId = defaultValues ? (defaultValues["messageId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["messageId"], context) : null) : null;
        context["field"] = "messageType";
        context["metadata"] = (objectMetadata ? objectMetadata["messageType"] : null);
        privateState.messageType = defaultValues ? (defaultValues["messageType"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["messageType"], context) : null) : null;
        context["field"] = "pageSize";
        context["metadata"] = (objectMetadata ? objectMetadata["pageSize"] : null);
        privateState.pageSize = defaultValues ? (defaultValues["pageSize"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["pageSize"], context) : null) : null;
        context["field"] = "receivedDate";
        context["metadata"] = (objectMetadata ? objectMetadata["receivedDate"] : null);
        privateState.receivedDate = defaultValues ? (defaultValues["receivedDate"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["receivedDate"], context) : null) : null;
        context["field"] = "recordNumber";
        context["metadata"] = (objectMetadata ? objectMetadata["recordNumber"] : null);
        privateState.recordNumber = defaultValues ? (defaultValues["recordNumber"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["recordNumber"], context) : null) : null;
        context["field"] = "sentDate";
        context["metadata"] = (objectMetadata ? objectMetadata["sentDate"] : null);
        privateState.sentDate = defaultValues ? (defaultValues["sentDate"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["sentDate"], context) : null) : null;
        context["field"] = "subcategoryId";
        context["metadata"] = (objectMetadata ? objectMetadata["subcategoryId"] : null);
        privateState.subcategoryId = defaultValues ? (defaultValues["subcategoryId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["subcategoryId"], context) : null) : null;
        context["field"] = "subcategoryName";
        context["metadata"] = (objectMetadata ? objectMetadata["subcategoryName"] : null);
        privateState.subcategoryName = defaultValues ? (defaultValues["subcategoryName"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["subcategoryName"], context) : null) : null;
        context["field"] = "subject";
        context["metadata"] = (objectMetadata ? objectMetadata["subject"] : null);
        privateState.subject = defaultValues ? (defaultValues["subject"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["subject"], context) : null) : null;
        context["field"] = "success";
        context["metadata"] = (objectMetadata ? objectMetadata["success"] : null);
        privateState.success = defaultValues ? (defaultValues["success"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["success"], context) : null) : null;
        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);
        //Defining Getter/Setters
        Object.defineProperties(this, {
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
            "accountName": {
                get: function() {
                    context["field"] = "accountName";
                    context["metadata"] = (objectMetadata ? objectMetadata["accountName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.accountName, context);
                },
                set: function(val) {
                    setterFunctions['accountName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "accountNickName": {
                get: function() {
                    context["field"] = "accountNickName";
                    context["metadata"] = (objectMetadata ? objectMetadata["accountNickName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.accountNickName, context);
                },
                set: function(val) {
                    setterFunctions['accountNickName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "categoryId": {
                get: function() {
                    context["field"] = "categoryId";
                    context["metadata"] = (objectMetadata ? objectMetadata["categoryId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.categoryId, context);
                },
                set: function(val) {
                    setterFunctions['categoryId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "categoryName": {
                get: function() {
                    context["field"] = "categoryName";
                    context["metadata"] = (objectMetadata ? objectMetadata["categoryName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.categoryName, context);
                },
                set: function(val) {
                    setterFunctions['categoryName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "count": {
                get: function() {
                    context["field"] = "count";
                    context["metadata"] = (objectMetadata ? objectMetadata["count"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.count, context);
                },
                set: function(val) {
                    setterFunctions['count'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "createdDate": {
                get: function() {
                    context["field"] = "createdDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["createdDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.createdDate, context);
                },
                set: function(val) {
                    setterFunctions['createdDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "deletedDate": {
                get: function() {
                    context["field"] = "deletedDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["deletedDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.deletedDate, context);
                },
                set: function(val) {
                    setterFunctions['deletedDate'].call(this, val, privateState);
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
            "isRead": {
                get: function() {
                    context["field"] = "isRead";
                    context["metadata"] = (objectMetadata ? objectMetadata["isRead"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isRead, context);
                },
                set: function(val) {
                    setterFunctions['isRead'].call(this, val, privateState);
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
            "messageId": {
                get: function() {
                    context["field"] = "messageId";
                    context["metadata"] = (objectMetadata ? objectMetadata["messageId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.messageId, context);
                },
                set: function(val) {
                    setterFunctions['messageId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "messageType": {
                get: function() {
                    context["field"] = "messageType";
                    context["metadata"] = (objectMetadata ? objectMetadata["messageType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.messageType, context);
                },
                set: function(val) {
                    setterFunctions['messageType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "pageSize": {
                get: function() {
                    context["field"] = "pageSize";
                    context["metadata"] = (objectMetadata ? objectMetadata["pageSize"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.pageSize, context);
                },
                set: function(val) {
                    setterFunctions['pageSize'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "receivedDate": {
                get: function() {
                    context["field"] = "receivedDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["receivedDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.receivedDate, context);
                },
                set: function(val) {
                    setterFunctions['receivedDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "recordNumber": {
                get: function() {
                    context["field"] = "recordNumber";
                    context["metadata"] = (objectMetadata ? objectMetadata["recordNumber"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.recordNumber, context);
                },
                set: function(val) {
                    setterFunctions['recordNumber'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "sentDate": {
                get: function() {
                    context["field"] = "sentDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["sentDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.sentDate, context);
                },
                set: function(val) {
                    setterFunctions['sentDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "subcategoryId": {
                get: function() {
                    context["field"] = "subcategoryId";
                    context["metadata"] = (objectMetadata ? objectMetadata["subcategoryId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.subcategoryId, context);
                },
                set: function(val) {
                    setterFunctions['subcategoryId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "subcategoryName": {
                get: function() {
                    context["field"] = "subcategoryName";
                    context["metadata"] = (objectMetadata ? objectMetadata["subcategoryName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.subcategoryName, context);
                },
                set: function(val) {
                    setterFunctions['subcategoryName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "subject": {
                get: function() {
                    context["field"] = "subject";
                    context["metadata"] = (objectMetadata ? objectMetadata["subject"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.subject, context);
                },
                set: function(val) {
                    setterFunctions['subject'].call(this, val, privateState);
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
        });
        //converts model object to json object.
        this.toJsonInternal = function() {
            return Object.assign({}, privateState);
        };
        //overwrites object state with provided json value in argument.
        this.fromJsonInternal = function(value) {
            privateState.accountId = value ? (value["accountId"] ? value["accountId"] : null) : null;
            privateState.accountName = value ? (value["accountName"] ? value["accountName"] : null) : null;
            privateState.accountNickName = value ? (value["accountNickName"] ? value["accountNickName"] : null) : null;
            privateState.categoryId = value ? (value["categoryId"] ? value["categoryId"] : null) : null;
            privateState.categoryName = value ? (value["categoryName"] ? value["categoryName"] : null) : null;
            privateState.count = value ? (value["count"] ? value["count"] : null) : null;
            privateState.createdDate = value ? (value["createdDate"] ? value["createdDate"] : null) : null;
            privateState.deletedDate = value ? (value["deletedDate"] ? value["deletedDate"] : null) : null;
            privateState.errmsg = value ? (value["errmsg"] ? value["errmsg"] : null) : null;
            privateState.isRead = value ? (value["isRead"] ? value["isRead"] : null) : null;
            privateState.message = value ? (value["message"] ? value["message"] : null) : null;
            privateState.messageId = value ? (value["messageId"] ? value["messageId"] : null) : null;
            privateState.messageType = value ? (value["messageType"] ? value["messageType"] : null) : null;
            privateState.pageSize = value ? (value["pageSize"] ? value["pageSize"] : null) : null;
            privateState.receivedDate = value ? (value["receivedDate"] ? value["receivedDate"] : null) : null;
            privateState.recordNumber = value ? (value["recordNumber"] ? value["recordNumber"] : null) : null;
            privateState.sentDate = value ? (value["sentDate"] ? value["sentDate"] : null) : null;
            privateState.subcategoryId = value ? (value["subcategoryId"] ? value["subcategoryId"] : null) : null;
            privateState.subcategoryName = value ? (value["subcategoryName"] ? value["subcategoryName"] : null) : null;
            privateState.subject = value ? (value["subject"] ? value["subject"] : null) : null;
            privateState.success = value ? (value["success"] ? value["success"] : null) : null;
        };
    }
    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(Messages);
    //Create new class level validator object
    BaseModel.Validator.call(Messages);
    var registerValidatorBackup = Messages.registerValidator;
    Messages.registerValidator = function() {
            var propName = arguments[0];
            if (!setterFunctions[propName].changed) {
                var setterBackup = setterFunctions[propName];
                setterFunctions[arguments[0]] = function() {
                    if (Messages.isValid(this, propName, val)) {
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
        //For Operation 'customDelete' with service id 'deleteMessage8829'
    Messages.customDelete = function(params, onCompletion) {
        return Messages.customVerb('customDelete', params, onCompletion);
    };
    //For Operation 'MessageCount' with service id 'getMessageCount4579'
    Messages.MessageCount = function(params, onCompletion) {
        return Messages.customVerb('MessageCount', params, onCompletion);
    };
    var relations = [];
    Messages.relations = relations;
    Messages.prototype.isValid = function() {
        return Messages.isValid(this);
    };
    Messages.prototype.objModelName = "Messages";
    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    Messages.registerProcessors = function(options, successCallback, failureCallback) {
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
        kony.mvc.util.ProcessorUtils.getMetadataForObject("RBObjects", "Messages", options, metaDataSuccess, metaDataFailure);
    };
    //clone the object provided in argument.
    Messages.clone = function(objectToClone) {
        var clonedObj = new Messages();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };
    return Messages;
});