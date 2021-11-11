/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {
        "object": "AccountFeatures",
        "objectService": "RBObjects"
    };
    var setterFunctions = {
        accountTypeId: function(val, state) {
            context["field"] = "accountTypeId";
            context["metadata"] = (objectMetadata ? objectMetadata["accountTypeId"] : null);
            state['accountTypeId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        errmsg: function(val, state) {
            context["field"] = "errmsg";
            context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
            state['errmsg'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        features: function(val, state) {
            context["field"] = "features";
            context["metadata"] = (objectMetadata ? objectMetadata["features"] : null);
            state['features'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        info: function(val, state) {
            context["field"] = "info";
            context["metadata"] = (objectMetadata ? objectMetadata["info"] : null);
            state['info'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        rates: function(val, state) {
            context["field"] = "rates";
            context["metadata"] = (objectMetadata ? objectMetadata["rates"] : null);
            state['rates'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        termsAndConditions: function(val, state) {
            context["field"] = "termsAndConditions";
            context["metadata"] = (objectMetadata ? objectMetadata["termsAndConditions"] : null);
            state['termsAndConditions'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };
    //Create the Model Class
    function AccountFeatures(defaultValues) {
        var privateState = {};
        context["field"] = "accountTypeId";
        context["metadata"] = (objectMetadata ? objectMetadata["accountTypeId"] : null);
        privateState.accountTypeId = defaultValues ? (defaultValues["accountTypeId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["accountTypeId"], context) : null) : null;
        context["field"] = "errmsg";
        context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
        privateState.errmsg = defaultValues ? (defaultValues["errmsg"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["errmsg"], context) : null) : null;
        context["field"] = "features";
        context["metadata"] = (objectMetadata ? objectMetadata["features"] : null);
        privateState.features = defaultValues ? (defaultValues["features"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["features"], context) : null) : null;
        context["field"] = "info";
        context["metadata"] = (objectMetadata ? objectMetadata["info"] : null);
        privateState.info = defaultValues ? (defaultValues["info"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["info"], context) : null) : null;
        context["field"] = "rates";
        context["metadata"] = (objectMetadata ? objectMetadata["rates"] : null);
        privateState.rates = defaultValues ? (defaultValues["rates"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["rates"], context) : null) : null;
        context["field"] = "termsAndConditions";
        context["metadata"] = (objectMetadata ? objectMetadata["termsAndConditions"] : null);
        privateState.termsAndConditions = defaultValues ? (defaultValues["termsAndConditions"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["termsAndConditions"], context) : null) : null;
        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);
        //Defining Getter/Setters
        Object.defineProperties(this, {
            "accountTypeId": {
                get: function() {
                    context["field"] = "accountTypeId";
                    context["metadata"] = (objectMetadata ? objectMetadata["accountTypeId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.accountTypeId, context);
                },
                set: function(val) {
                    setterFunctions['accountTypeId'].call(this, val, privateState);
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
        });
        //converts model object to json object.
        this.toJsonInternal = function() {
            return Object.assign({}, privateState);
        };
        //overwrites object state with provided json value in argument.
        this.fromJsonInternal = function(value) {
            privateState.accountTypeId = value ? (value["accountTypeId"] ? value["accountTypeId"] : null) : null;
            privateState.errmsg = value ? (value["errmsg"] ? value["errmsg"] : null) : null;
            privateState.features = value ? (value["features"] ? value["features"] : null) : null;
            privateState.info = value ? (value["info"] ? value["info"] : null) : null;
            privateState.rates = value ? (value["rates"] ? value["rates"] : null) : null;
            privateState.termsAndConditions = value ? (value["termsAndConditions"] ? value["termsAndConditions"] : null) : null;
        };
    }
    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(AccountFeatures);
    //Create new class level validator object
    BaseModel.Validator.call(AccountFeatures);
    var registerValidatorBackup = AccountFeatures.registerValidator;
    AccountFeatures.registerValidator = function() {
            var propName = arguments[0];
            if (!setterFunctions[propName].changed) {
                var setterBackup = setterFunctions[propName];
                setterFunctions[arguments[0]] = function() {
                    if (AccountFeatures.isValid(this, propName, val)) {
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
    AccountFeatures.relations = relations;
    AccountFeatures.prototype.isValid = function() {
        return AccountFeatures.isValid(this);
    };
    AccountFeatures.prototype.objModelName = "AccountFeatures";
    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    AccountFeatures.registerProcessors = function(options, successCallback, failureCallback) {
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
        kony.mvc.util.ProcessorUtils.getMetadataForObject("RBObjects", "AccountFeatures", options, metaDataSuccess, metaDataFailure);
    };
    //clone the object provided in argument.
    AccountFeatures.clone = function(objectToClone) {
        var clonedObj = new AccountFeatures();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };
    return AccountFeatures;
});