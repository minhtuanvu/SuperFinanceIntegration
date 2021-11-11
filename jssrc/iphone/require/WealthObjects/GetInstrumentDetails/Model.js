/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {
        "object": "GetInstrumentDetails",
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
    function GetInstrumentDetails(defaultValues) {
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
    BaseModel.isParentOf(GetInstrumentDetails);
    //Create new class level validator object
    BaseModel.Validator.call(GetInstrumentDetails);
    var registerValidatorBackup = GetInstrumentDetails.registerValidator;
    GetInstrumentDetails.registerValidator = function() {
            var propName = arguments[0];
            if (!setterFunctions[propName].changed) {
                var setterBackup = setterFunctions[propName];
                setterFunctions[arguments[0]] = function() {
                    if (GetInstrumentDetails.isValid(this, propName, val)) {
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
        //For Operation 'GetInstrumentDetails' with service id 'getInstrumentDetails4118'
    GetInstrumentDetails.GetInstrumentDetails = function(params, onCompletion) {
        return GetInstrumentDetails.customVerb('GetInstrumentDetails', params, onCompletion);
    };
    var relations = [];
    GetInstrumentDetails.relations = relations;
    GetInstrumentDetails.prototype.isValid = function() {
        return GetInstrumentDetails.isValid(this);
    };
    GetInstrumentDetails.prototype.objModelName = "GetInstrumentDetails";
    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    GetInstrumentDetails.registerProcessors = function(options, successCallback, failureCallback) {
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
        kony.mvc.util.ProcessorUtils.getMetadataForObject("WealthObjects", "GetInstrumentDetails", options, metaDataSuccess, metaDataFailure);
    };
    //clone the object provided in argument.
    GetInstrumentDetails.clone = function(objectToClone) {
        var clonedObj = new GetInstrumentDetails();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };
    return GetInstrumentDetails;
});