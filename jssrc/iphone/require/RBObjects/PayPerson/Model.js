/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {
        "object": "PayPerson",
        "objectService": "RBObjects"
    };
    var setterFunctions = {
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
        name: function(val, state) {
            context["field"] = "name";
            context["metadata"] = (objectMetadata ? objectMetadata["name"] : null);
            state['name'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        limit: function(val, state) {
            context["field"] = "limit";
            context["metadata"] = (objectMetadata ? objectMetadata["limit"] : null);
            state['limit'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        nickName: function(val, state) {
            context["field"] = "nickName";
            context["metadata"] = (objectMetadata ? objectMetadata["nickName"] : null);
            state['nickName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
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
        PayPersonId: function(val, state) {
            context["field"] = "PayPersonId";
            context["metadata"] = (objectMetadata ? objectMetadata["PayPersonId"] : null);
            state['PayPersonId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        phone: function(val, state) {
            context["field"] = "phone";
            context["metadata"] = (objectMetadata ? objectMetadata["phone"] : null);
            state['phone'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        primaryContactForSending: function(val, state) {
            context["field"] = "primaryContactForSending";
            context["metadata"] = (objectMetadata ? objectMetadata["primaryContactForSending"] : null);
            state['primaryContactForSending'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        searchString: function(val, state) {
            context["field"] = "searchString";
            context["metadata"] = (objectMetadata ? objectMetadata["searchString"] : null);
            state['searchString'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        secondaryEmail: function(val, state) {
            context["field"] = "secondaryEmail";
            context["metadata"] = (objectMetadata ? objectMetadata["secondaryEmail"] : null);
            state['secondaryEmail'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        secondaryEmail2: function(val, state) {
            context["field"] = "secondaryEmail2";
            context["metadata"] = (objectMetadata ? objectMetadata["secondaryEmail2"] : null);
            state['secondaryEmail2'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        secondaryPhoneNumber: function(val, state) {
            context["field"] = "secondaryPhoneNumber";
            context["metadata"] = (objectMetadata ? objectMetadata["secondaryPhoneNumber"] : null);
            state['secondaryPhoneNumber'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        secondaryPhoneNumber2: function(val, state) {
            context["field"] = "secondaryPhoneNumber2";
            context["metadata"] = (objectMetadata ? objectMetadata["secondaryPhoneNumber2"] : null);
            state['secondaryPhoneNumber2'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        sortBy: function(val, state) {
            context["field"] = "sortBy";
            context["metadata"] = (objectMetadata ? objectMetadata["sortBy"] : null);
            state['sortBy'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        success: function(val, state) {
            context["field"] = "success";
            context["metadata"] = (objectMetadata ? objectMetadata["success"] : null);
            state['success'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        phoneCountryCode: function(val, state) {
            context["field"] = "phoneCountryCode";
            context["metadata"] = (objectMetadata ? objectMetadata["phoneCountryCode"] : null);
            state['phoneCountryCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        phoneExtension: function(val, state) {
            context["field"] = "phoneExtension";
            context["metadata"] = (objectMetadata ? objectMetadata["phoneExtension"] : null);
            state['phoneExtension'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        transactionId: function(val, state) {
            context["field"] = "transactionId";
            context["metadata"] = (objectMetadata ? objectMetadata["transactionId"] : null);
            state['transactionId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };
    //Create the Model Class
    function PayPerson(defaultValues) {
        var privateState = {};
        context["field"] = "email";
        context["metadata"] = (objectMetadata ? objectMetadata["email"] : null);
        privateState.email = defaultValues ? (defaultValues["email"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["email"], context) : null) : null;
        context["field"] = "errmsg";
        context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
        privateState.errmsg = defaultValues ? (defaultValues["errmsg"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["errmsg"], context) : null) : null;
        context["field"] = "name";
        context["metadata"] = (objectMetadata ? objectMetadata["name"] : null);
        privateState.name = defaultValues ? (defaultValues["name"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["name"], context) : null) : null;
        context["field"] = "limit";
        context["metadata"] = (objectMetadata ? objectMetadata["limit"] : null);
        privateState.limit = defaultValues ? (defaultValues["limit"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["limit"], context) : null) : null;
        context["field"] = "nickName";
        context["metadata"] = (objectMetadata ? objectMetadata["nickName"] : null);
        privateState.nickName = defaultValues ? (defaultValues["nickName"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["nickName"], context) : null) : null;
        context["field"] = "offset";
        context["metadata"] = (objectMetadata ? objectMetadata["offset"] : null);
        privateState.offset = defaultValues ? (defaultValues["offset"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["offset"], context) : null) : null;
        context["field"] = "order";
        context["metadata"] = (objectMetadata ? objectMetadata["order"] : null);
        privateState.order = defaultValues ? (defaultValues["order"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["order"], context) : null) : null;
        context["field"] = "PayPersonId";
        context["metadata"] = (objectMetadata ? objectMetadata["PayPersonId"] : null);
        privateState.PayPersonId = defaultValues ? (defaultValues["PayPersonId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["PayPersonId"], context) : null) : null;
        context["field"] = "phone";
        context["metadata"] = (objectMetadata ? objectMetadata["phone"] : null);
        privateState.phone = defaultValues ? (defaultValues["phone"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["phone"], context) : null) : null;
        context["field"] = "primaryContactForSending";
        context["metadata"] = (objectMetadata ? objectMetadata["primaryContactForSending"] : null);
        privateState.primaryContactForSending = defaultValues ? (defaultValues["primaryContactForSending"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["primaryContactForSending"], context) : null) : null;
        context["field"] = "searchString";
        context["metadata"] = (objectMetadata ? objectMetadata["searchString"] : null);
        privateState.searchString = defaultValues ? (defaultValues["searchString"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["searchString"], context) : null) : null;
        context["field"] = "secondaryEmail";
        context["metadata"] = (objectMetadata ? objectMetadata["secondaryEmail"] : null);
        privateState.secondaryEmail = defaultValues ? (defaultValues["secondaryEmail"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["secondaryEmail"], context) : null) : null;
        context["field"] = "secondaryEmail2";
        context["metadata"] = (objectMetadata ? objectMetadata["secondaryEmail2"] : null);
        privateState.secondaryEmail2 = defaultValues ? (defaultValues["secondaryEmail2"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["secondaryEmail2"], context) : null) : null;
        context["field"] = "secondaryPhoneNumber";
        context["metadata"] = (objectMetadata ? objectMetadata["secondaryPhoneNumber"] : null);
        privateState.secondaryPhoneNumber = defaultValues ? (defaultValues["secondaryPhoneNumber"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["secondaryPhoneNumber"], context) : null) : null;
        context["field"] = "secondaryPhoneNumber2";
        context["metadata"] = (objectMetadata ? objectMetadata["secondaryPhoneNumber2"] : null);
        privateState.secondaryPhoneNumber2 = defaultValues ? (defaultValues["secondaryPhoneNumber2"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["secondaryPhoneNumber2"], context) : null) : null;
        context["field"] = "sortBy";
        context["metadata"] = (objectMetadata ? objectMetadata["sortBy"] : null);
        privateState.sortBy = defaultValues ? (defaultValues["sortBy"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["sortBy"], context) : null) : null;
        context["field"] = "success";
        context["metadata"] = (objectMetadata ? objectMetadata["success"] : null);
        privateState.success = defaultValues ? (defaultValues["success"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["success"], context) : null) : null;
        context["field"] = "phoneCountryCode";
        context["metadata"] = (objectMetadata ? objectMetadata["phoneCountryCode"] : null);
        privateState.phoneCountryCode = defaultValues ? (defaultValues["phoneCountryCode"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["phoneCountryCode"], context) : null) : null;
        context["field"] = "phoneExtension";
        context["metadata"] = (objectMetadata ? objectMetadata["phoneExtension"] : null);
        privateState.phoneExtension = defaultValues ? (defaultValues["phoneExtension"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["phoneExtension"], context) : null) : null;
        context["field"] = "transactionId";
        context["metadata"] = (objectMetadata ? objectMetadata["transactionId"] : null);
        privateState.transactionId = defaultValues ? (defaultValues["transactionId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["transactionId"], context) : null) : null;
        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);
        //Defining Getter/Setters
        Object.defineProperties(this, {
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
            "PayPersonId": {
                get: function() {
                    context["field"] = "PayPersonId";
                    context["metadata"] = (objectMetadata ? objectMetadata["PayPersonId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.PayPersonId, context);
                },
                set: function(val) {
                    setterFunctions['PayPersonId'].call(this, val, privateState);
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
            "primaryContactForSending": {
                get: function() {
                    context["field"] = "primaryContactForSending";
                    context["metadata"] = (objectMetadata ? objectMetadata["primaryContactForSending"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.primaryContactForSending, context);
                },
                set: function(val) {
                    setterFunctions['primaryContactForSending'].call(this, val, privateState);
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
            "secondaryEmail": {
                get: function() {
                    context["field"] = "secondaryEmail";
                    context["metadata"] = (objectMetadata ? objectMetadata["secondaryEmail"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.secondaryEmail, context);
                },
                set: function(val) {
                    setterFunctions['secondaryEmail'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "secondaryEmail2": {
                get: function() {
                    context["field"] = "secondaryEmail2";
                    context["metadata"] = (objectMetadata ? objectMetadata["secondaryEmail2"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.secondaryEmail2, context);
                },
                set: function(val) {
                    setterFunctions['secondaryEmail2'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "secondaryPhoneNumber": {
                get: function() {
                    context["field"] = "secondaryPhoneNumber";
                    context["metadata"] = (objectMetadata ? objectMetadata["secondaryPhoneNumber"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.secondaryPhoneNumber, context);
                },
                set: function(val) {
                    setterFunctions['secondaryPhoneNumber'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "secondaryPhoneNumber2": {
                get: function() {
                    context["field"] = "secondaryPhoneNumber2";
                    context["metadata"] = (objectMetadata ? objectMetadata["secondaryPhoneNumber2"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.secondaryPhoneNumber2, context);
                },
                set: function(val) {
                    setterFunctions['secondaryPhoneNumber2'].call(this, val, privateState);
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
        });
        //converts model object to json object.
        this.toJsonInternal = function() {
            return Object.assign({}, privateState);
        };
        //overwrites object state with provided json value in argument.
        this.fromJsonInternal = function(value) {
            privateState.email = value ? (value["email"] ? value["email"] : null) : null;
            privateState.errmsg = value ? (value["errmsg"] ? value["errmsg"] : null) : null;
            privateState.name = value ? (value["name"] ? value["name"] : null) : null;
            privateState.limit = value ? (value["limit"] ? value["limit"] : null) : null;
            privateState.nickName = value ? (value["nickName"] ? value["nickName"] : null) : null;
            privateState.offset = value ? (value["offset"] ? value["offset"] : null) : null;
            privateState.order = value ? (value["order"] ? value["order"] : null) : null;
            privateState.PayPersonId = value ? (value["PayPersonId"] ? value["PayPersonId"] : null) : null;
            privateState.phone = value ? (value["phone"] ? value["phone"] : null) : null;
            privateState.primaryContactForSending = value ? (value["primaryContactForSending"] ? value["primaryContactForSending"] : null) : null;
            privateState.searchString = value ? (value["searchString"] ? value["searchString"] : null) : null;
            privateState.secondaryEmail = value ? (value["secondaryEmail"] ? value["secondaryEmail"] : null) : null;
            privateState.secondaryEmail2 = value ? (value["secondaryEmail2"] ? value["secondaryEmail2"] : null) : null;
            privateState.secondaryPhoneNumber = value ? (value["secondaryPhoneNumber"] ? value["secondaryPhoneNumber"] : null) : null;
            privateState.secondaryPhoneNumber2 = value ? (value["secondaryPhoneNumber2"] ? value["secondaryPhoneNumber2"] : null) : null;
            privateState.sortBy = value ? (value["sortBy"] ? value["sortBy"] : null) : null;
            privateState.success = value ? (value["success"] ? value["success"] : null) : null;
            privateState.phoneCountryCode = value ? (value["phoneCountryCode"] ? value["phoneCountryCode"] : null) : null;
            privateState.phoneExtension = value ? (value["phoneExtension"] ? value["phoneExtension"] : null) : null;
            privateState.transactionId = value ? (value["transactionId"] ? value["transactionId"] : null) : null;
        };
    }
    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(PayPerson);
    //Create new class level validator object
    BaseModel.Validator.call(PayPerson);
    var registerValidatorBackup = PayPerson.registerValidator;
    PayPerson.registerValidator = function() {
            var propName = arguments[0];
            if (!setterFunctions[propName].changed) {
                var setterBackup = setterFunctions[propName];
                setterFunctions[arguments[0]] = function() {
                    if (PayPerson.isValid(this, propName, val)) {
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
        //For Operation 'getRecentPayPerson' with service id 'getRecentPayPerson3082'
    PayPerson.getRecentPayPerson = function(params, onCompletion) {
        return PayPerson.customVerb('getRecentPayPerson', params, onCompletion);
    };
    //For Operation 'editPayPerson' with service id 'editPayPerson6717'
    PayPerson.editPayPerson = function(params, onCompletion) {
        return PayPerson.customVerb('editPayPerson', params, onCompletion);
    };
    //For Operation 'deletePayPerson' with service id 'deletePayPerson2617'
    PayPerson.deletePayPerson = function(params, onCompletion) {
        return PayPerson.customVerb('deletePayPerson', params, onCompletion);
    };
    //For Operation 'LinkPayPersonToTransaction' with service id 'LinkPayeeToTransaction9705'
    PayPerson.LinkPayPersonToTransaction = function(params, onCompletion) {
        return PayPerson.customVerb('LinkPayPersonToTransaction', params, onCompletion);
    };
    var relations = [];
    PayPerson.relations = relations;
    PayPerson.prototype.isValid = function() {
        return PayPerson.isValid(this);
    };
    PayPerson.prototype.objModelName = "PayPerson";
    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    PayPerson.registerProcessors = function(options, successCallback, failureCallback) {
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
        kony.mvc.util.ProcessorUtils.getMetadataForObject("RBObjects", "PayPerson", options, metaDataSuccess, metaDataFailure);
    };
    //clone the object provided in argument.
    PayPerson.clone = function(objectToClone) {
        var clonedObj = new PayPerson();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };
    return PayPerson;
});