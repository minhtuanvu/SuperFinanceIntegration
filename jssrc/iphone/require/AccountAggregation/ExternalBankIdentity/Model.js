/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {
        "object": "ExternalBankIdentity",
        "objectService": "AccountAggregation"
    };
    var setterFunctions = {
        username: function(val, state) {
            context["field"] = "username";
            context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
            state['username'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        password: function(val, state) {
            context["field"] = "password";
            context["metadata"] = (objectMetadata ? objectMetadata["password"] : null);
            state['password'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        main_user: function(val, state) {
            context["field"] = "main_user";
            context["metadata"] = (objectMetadata ? objectMetadata["main_user"] : null);
            state['main_user'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        bank_id: function(val, state) {
            context["field"] = "bank_id";
            context["metadata"] = (objectMetadata ? objectMetadata["bank_id"] : null);
            state['bank_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        SessionToken: function(val, state) {
            context["field"] = "SessionToken";
            context["metadata"] = (objectMetadata ? objectMetadata["SessionToken"] : null);
            state['SessionToken'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        id: function(val, state) {
            context["field"] = "id";
            context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
            state['id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };
    //Create the Model Class
    function ExternalBankIdentity(defaultValues) {
        var privateState = {};
        context["field"] = "username";
        context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
        privateState.username = defaultValues ? (defaultValues["username"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["username"], context) : null) : null;
        context["field"] = "password";
        context["metadata"] = (objectMetadata ? objectMetadata["password"] : null);
        privateState.password = defaultValues ? (defaultValues["password"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["password"], context) : null) : null;
        context["field"] = "main_user";
        context["metadata"] = (objectMetadata ? objectMetadata["main_user"] : null);
        privateState.main_user = defaultValues ? (defaultValues["main_user"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["main_user"], context) : null) : null;
        context["field"] = "bank_id";
        context["metadata"] = (objectMetadata ? objectMetadata["bank_id"] : null);
        privateState.bank_id = defaultValues ? (defaultValues["bank_id"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["bank_id"], context) : null) : null;
        context["field"] = "SessionToken";
        context["metadata"] = (objectMetadata ? objectMetadata["SessionToken"] : null);
        privateState.SessionToken = defaultValues ? (defaultValues["SessionToken"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["SessionToken"], context) : null) : null;
        context["field"] = "id";
        context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
        privateState.id = defaultValues ? (defaultValues["id"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["id"], context) : null) : null;
        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);
        //Defining Getter/Setters
        Object.defineProperties(this, {
            "username": {
                get: function() {
                    context["field"] = "username";
                    context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.username, context);
                },
                set: function(val) {
                    setterFunctions['username'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "password": {
                get: function() {
                    context["field"] = "password";
                    context["metadata"] = (objectMetadata ? objectMetadata["password"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.password, context);
                },
                set: function(val) {
                    setterFunctions['password'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "main_user": {
                get: function() {
                    context["field"] = "main_user";
                    context["metadata"] = (objectMetadata ? objectMetadata["main_user"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.main_user, context);
                },
                set: function(val) {
                    setterFunctions['main_user'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "bank_id": {
                get: function() {
                    context["field"] = "bank_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["bank_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.bank_id, context);
                },
                set: function(val) {
                    setterFunctions['bank_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "SessionToken": {
                get: function() {
                    context["field"] = "SessionToken";
                    context["metadata"] = (objectMetadata ? objectMetadata["SessionToken"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.SessionToken, context);
                },
                set: function(val) {
                    setterFunctions['SessionToken'].call(this, val, privateState);
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
        });
        //converts model object to json object.
        this.toJsonInternal = function() {
            return Object.assign({}, privateState);
        };
        //overwrites object state with provided json value in argument.
        this.fromJsonInternal = function(value) {
            privateState.username = value ? (value["username"] ? value["username"] : null) : null;
            privateState.password = value ? (value["password"] ? value["password"] : null) : null;
            privateState.main_user = value ? (value["main_user"] ? value["main_user"] : null) : null;
            privateState.bank_id = value ? (value["bank_id"] ? value["bank_id"] : null) : null;
            privateState.SessionToken = value ? (value["SessionToken"] ? value["SessionToken"] : null) : null;
            privateState.id = value ? (value["id"] ? value["id"] : null) : null;
        };
    }
    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(ExternalBankIdentity);
    //Create new class level validator object
    BaseModel.Validator.call(ExternalBankIdentity);
    var registerValidatorBackup = ExternalBankIdentity.registerValidator;
    ExternalBankIdentity.registerValidator = function() {
            var propName = arguments[0];
            if (!setterFunctions[propName].changed) {
                var setterBackup = setterFunctions[propName];
                setterFunctions[arguments[0]] = function() {
                    if (ExternalBankIdentity.isValid(this, propName, val)) {
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
    var relations = [];
    ExternalBankIdentity.relations = relations;
    ExternalBankIdentity.prototype.isValid = function() {
        return ExternalBankIdentity.isValid(this);
    };
    ExternalBankIdentity.prototype.objModelName = "ExternalBankIdentity";
    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    ExternalBankIdentity.registerProcessors = function(options, successCallback, failureCallback) {
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
        kony.mvc.util.ProcessorUtils.getMetadataForObject("AccountAggregation", "ExternalBankIdentity", options, metaDataSuccess, metaDataFailure);
    };
    //clone the object provided in argument.
    ExternalBankIdentity.clone = function(objectToClone) {
        var clonedObj = new ExternalBankIdentity();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };
    return ExternalBankIdentity;
});