/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {
        "object": "GetInstrumentMinimal",
        "objectService": "WealthObjects"
    };
    var setterFunctions = {
        instrumentId: function(val, state) {
            context["field"] = "instrumentId";
            context["metadata"] = (objectMetadata ? objectMetadata["instrumentId"] : null);
            state['instrumentId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };
    //Create the Model Class
    function GetInstrumentMinimal(defaultValues) {
        var privateState = {};
        context["field"] = "instrumentId";
        context["metadata"] = (objectMetadata ? objectMetadata["instrumentId"] : null);
        privateState.instrumentId = defaultValues ? (defaultValues["instrumentId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["instrumentId"], context) : null) : null;
        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);
        //Defining Getter/Setters
        Object.defineProperties(this, {
            "instrumentId": {
                get: function() {
                    context["field"] = "instrumentId";
                    context["metadata"] = (objectMetadata ? objectMetadata["instrumentId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.instrumentId, context);
                },
                set: function(val) {
                    setterFunctions['instrumentId'].call(this, val, privateState);
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
            privateState.instrumentId = value ? (value["instrumentId"] ? value["instrumentId"] : null) : null;
        };
    }
    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(GetInstrumentMinimal);
    //Create new class level validator object
    BaseModel.Validator.call(GetInstrumentMinimal);
    var registerValidatorBackup = GetInstrumentMinimal.registerValidator;
    GetInstrumentMinimal.registerValidator = function() {
            var propName = arguments[0];
            if (!setterFunctions[propName].changed) {
                var setterBackup = setterFunctions[propName];
                setterFunctions[arguments[0]] = function() {
                    if (GetInstrumentMinimal.isValid(this, propName, val)) {
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
        //For Operation 'getInstrumentMinimal' with service id 'getInstrumentMinimal6469'
    GetInstrumentMinimal.getInstrumentMinimal = function(params, onCompletion) {
        return GetInstrumentMinimal.customVerb('getInstrumentMinimal', params, onCompletion);
    };
    var relations = [];
    GetInstrumentMinimal.relations = relations;
    GetInstrumentMinimal.prototype.isValid = function() {
        return GetInstrumentMinimal.isValid(this);
    };
    GetInstrumentMinimal.prototype.objModelName = "GetInstrumentMinimal";
    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    GetInstrumentMinimal.registerProcessors = function(options, successCallback, failureCallback) {
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
        kony.mvc.util.ProcessorUtils.getMetadataForObject("WealthObjects", "GetInstrumentMinimal", options, metaDataSuccess, metaDataFailure);
    };
    //clone the object provided in argument.
    GetInstrumentMinimal.clone = function(objectToClone) {
        var clonedObj = new GetInstrumentMinimal();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };
    return GetInstrumentMinimal;
});