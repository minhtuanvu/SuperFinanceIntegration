/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "ExchangeRates", "objectService" : "RBObjects"};

    var setterFunctions = {
        currency: function(val, state) {
            context["field"] = "currency";
            context["metadata"] = (objectMetadata ? objectMetadata["currency"] : null);
            state['currency'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        errmsg: function(val, state) {
            context["field"] = "errmsg";
            context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
            state['errmsg'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        exchangeRate: function(val, state) {
            context["field"] = "exchangeRate";
            context["metadata"] = (objectMetadata ? objectMetadata["exchangeRate"] : null);
            state['exchangeRate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function ExchangeRates(defaultValues) {
        var privateState = {};
        context["field"] = "currency";
        context["metadata"] = (objectMetadata ? objectMetadata["currency"] : null);
        privateState.currency = defaultValues ?
            (defaultValues["currency"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["currency"], context) :
                null) :
            null;

        context["field"] = "errmsg";
        context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
        privateState.errmsg = defaultValues ?
            (defaultValues["errmsg"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["errmsg"], context) :
                null) :
            null;

        context["field"] = "exchangeRate";
        context["metadata"] = (objectMetadata ? objectMetadata["exchangeRate"] : null);
        privateState.exchangeRate = defaultValues ?
            (defaultValues["exchangeRate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["exchangeRate"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "currency": {
                get: function() {
                    context["field"] = "currency";
                    context["metadata"] = (objectMetadata ? objectMetadata["currency"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.currency, context);
                },
                set: function(val) {
                    setterFunctions['currency'].call(this, val, privateState);
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
            "exchangeRate": {
                get: function() {
                    context["field"] = "exchangeRate";
                    context["metadata"] = (objectMetadata ? objectMetadata["exchangeRate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.exchangeRate, context);
                },
                set: function(val) {
                    setterFunctions['exchangeRate'].call(this, val, privateState);
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
            privateState.currency = value ? (value["currency"] ? value["currency"] : null) : null;
            privateState.errmsg = value ? (value["errmsg"] ? value["errmsg"] : null) : null;
            privateState.exchangeRate = value ? (value["exchangeRate"] ? value["exchangeRate"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(ExchangeRates);

    //Create new class level validator object
    BaseModel.Validator.call(ExchangeRates);

    var registerValidatorBackup = ExchangeRates.registerValidator;

    ExchangeRates.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(ExchangeRates.isValid(this, propName, val)) {
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

    ExchangeRates.relations = relations;

    ExchangeRates.prototype.isValid = function() {
        return ExchangeRates.isValid(this);
    };

    ExchangeRates.prototype.objModelName = "ExchangeRates";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    ExchangeRates.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("RBObjects", "ExchangeRates", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    ExchangeRates.clone = function(objectToClone) {
        var clonedObj = new ExchangeRates();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return ExchangeRates;
});