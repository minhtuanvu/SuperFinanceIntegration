/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {
        "object": "AccountCashFlow",
        "objectService": "RBObjects"
    };
    var setterFunctions = {
        month: function(val, state) {
            context["field"] = "month";
            context["metadata"] = (objectMetadata ? objectMetadata["month"] : null);
            state['month'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        monthCash: function(val, state) {
            context["field"] = "monthCash";
            context["metadata"] = (objectMetadata ? objectMetadata["monthCash"] : null);
            state['monthCash'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        monthCredit: function(val, state) {
            context["field"] = "monthCredit";
            context["metadata"] = (objectMetadata ? objectMetadata["monthCredit"] : null);
            state['monthCredit'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        totalCash: function(val, state) {
            context["field"] = "totalCash";
            context["metadata"] = (objectMetadata ? objectMetadata["totalCash"] : null);
            state['totalCash'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        totalCreditDebt: function(val, state) {
            context["field"] = "totalCreditDebt";
            context["metadata"] = (objectMetadata ? objectMetadata["totalCreditDebt"] : null);
            state['totalCreditDebt'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };
    //Create the Model Class
    function AccountCashFlow(defaultValues) {
        var privateState = {};
        context["field"] = "month";
        context["metadata"] = (objectMetadata ? objectMetadata["month"] : null);
        privateState.month = defaultValues ? (defaultValues["month"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["month"], context) : null) : null;
        context["field"] = "monthCash";
        context["metadata"] = (objectMetadata ? objectMetadata["monthCash"] : null);
        privateState.monthCash = defaultValues ? (defaultValues["monthCash"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["monthCash"], context) : null) : null;
        context["field"] = "monthCredit";
        context["metadata"] = (objectMetadata ? objectMetadata["monthCredit"] : null);
        privateState.monthCredit = defaultValues ? (defaultValues["monthCredit"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["monthCredit"], context) : null) : null;
        context["field"] = "totalCash";
        context["metadata"] = (objectMetadata ? objectMetadata["totalCash"] : null);
        privateState.totalCash = defaultValues ? (defaultValues["totalCash"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["totalCash"], context) : null) : null;
        context["field"] = "totalCreditDebt";
        context["metadata"] = (objectMetadata ? objectMetadata["totalCreditDebt"] : null);
        privateState.totalCreditDebt = defaultValues ? (defaultValues["totalCreditDebt"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["totalCreditDebt"], context) : null) : null;
        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);
        //Defining Getter/Setters
        Object.defineProperties(this, {
            "month": {
                get: function() {
                    context["field"] = "month";
                    context["metadata"] = (objectMetadata ? objectMetadata["month"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.month, context);
                },
                set: function(val) {
                    setterFunctions['month'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "monthCash": {
                get: function() {
                    context["field"] = "monthCash";
                    context["metadata"] = (objectMetadata ? objectMetadata["monthCash"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.monthCash, context);
                },
                set: function(val) {
                    setterFunctions['monthCash'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "monthCredit": {
                get: function() {
                    context["field"] = "monthCredit";
                    context["metadata"] = (objectMetadata ? objectMetadata["monthCredit"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.monthCredit, context);
                },
                set: function(val) {
                    setterFunctions['monthCredit'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "totalCash": {
                get: function() {
                    context["field"] = "totalCash";
                    context["metadata"] = (objectMetadata ? objectMetadata["totalCash"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.totalCash, context);
                },
                set: function(val) {
                    setterFunctions['totalCash'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "totalCreditDebt": {
                get: function() {
                    context["field"] = "totalCreditDebt";
                    context["metadata"] = (objectMetadata ? objectMetadata["totalCreditDebt"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.totalCreditDebt, context);
                },
                set: function(val) {
                    setterFunctions['totalCreditDebt'].call(this, val, privateState);
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
            privateState.month = value ? (value["month"] ? value["month"] : null) : null;
            privateState.monthCash = value ? (value["monthCash"] ? value["monthCash"] : null) : null;
            privateState.monthCredit = value ? (value["monthCredit"] ? value["monthCredit"] : null) : null;
            privateState.totalCash = value ? (value["totalCash"] ? value["totalCash"] : null) : null;
            privateState.totalCreditDebt = value ? (value["totalCreditDebt"] ? value["totalCreditDebt"] : null) : null;
        };
    }
    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(AccountCashFlow);
    //Create new class level validator object
    BaseModel.Validator.call(AccountCashFlow);
    var registerValidatorBackup = AccountCashFlow.registerValidator;
    AccountCashFlow.registerValidator = function() {
            var propName = arguments[0];
            if (!setterFunctions[propName].changed) {
                var setterBackup = setterFunctions[propName];
                setterFunctions[arguments[0]] = function() {
                    if (AccountCashFlow.isValid(this, propName, val)) {
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
    AccountCashFlow.relations = relations;
    AccountCashFlow.prototype.isValid = function() {
        return AccountCashFlow.isValid(this);
    };
    AccountCashFlow.prototype.objModelName = "AccountCashFlow";
    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    AccountCashFlow.registerProcessors = function(options, successCallback, failureCallback) {
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
        kony.mvc.util.ProcessorUtils.getMetadataForObject("RBObjects", "AccountCashFlow", options, metaDataSuccess, metaDataFailure);
    };
    //clone the object provided in argument.
    AccountCashFlow.clone = function(objectToClone) {
        var clonedObj = new AccountCashFlow();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };
    return AccountCashFlow;
});