/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {
        "object": "PricingData",
        "objectService": "WealthObjects"
    };
    var setterFunctions = {
        RICCode: function(val, state) {
            context["field"] = "RICCode";
            context["metadata"] = (objectMetadata ? objectMetadata["RICCode"] : null);
            state['RICCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };
    //Create the Model Class
    function PricingData(defaultValues) {
        var privateState = {};
        context["field"] = "RICCode";
        context["metadata"] = (objectMetadata ? objectMetadata["RICCode"] : null);
        privateState.RICCode = defaultValues ? (defaultValues["RICCode"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["RICCode"], context) : null) : null;
        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);
        //Defining Getter/Setters
        Object.defineProperties(this, {
            "RICCode": {
                get: function() {
                    context["field"] = "RICCode";
                    context["metadata"] = (objectMetadata ? objectMetadata["RICCode"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.RICCode, context);
                },
                set: function(val) {
                    setterFunctions['RICCode'].call(this, val, privateState);
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
            privateState.RICCode = value ? (value["RICCode"] ? value["RICCode"] : null) : null;
        };
    }
    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(PricingData);
    //Create new class level validator object
    BaseModel.Validator.call(PricingData);
    var registerValidatorBackup = PricingData.registerValidator;
    PricingData.registerValidator = function() {
            var propName = arguments[0];
            if (!setterFunctions[propName].changed) {
                var setterBackup = setterFunctions[propName];
                setterFunctions[arguments[0]] = function() {
                    if (PricingData.isValid(this, propName, val)) {
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
        //For Operation 'getPricingData' with service id 'getPricingData1063'
    PricingData.getPricingData = function(params, onCompletion) {
        return PricingData.customVerb('getPricingData', params, onCompletion);
    };
    var relations = [];
    PricingData.relations = relations;
    PricingData.prototype.isValid = function() {
        return PricingData.isValid(this);
    };
    PricingData.prototype.objModelName = "PricingData";
    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    PricingData.registerProcessors = function(options, successCallback, failureCallback) {
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
        kony.mvc.util.ProcessorUtils.getMetadataForObject("WealthObjects", "PricingData", options, metaDataSuccess, metaDataFailure);
    };
    //clone the object provided in argument.
    PricingData.clone = function(objectToClone) {
        var clonedObj = new PricingData();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };
    return PricingData;
});