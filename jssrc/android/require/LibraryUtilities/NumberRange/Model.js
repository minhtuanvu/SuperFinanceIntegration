/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {
        "object": "NumberRange",
        "objectService": "LibraryUtilities"
    };
    var setterFunctions = {};
    //Create the Model Class
    function NumberRange(defaultValues) {
        var privateState = {};
        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);
        //Defining Getter/Setters
        Object.defineProperties(this, {});
        //converts model object to json object.
        this.toJsonInternal = function() {
            return Object.assign({}, privateState);
        };
        //overwrites object state with provided json value in argument.
        this.fromJsonInternal = function(value) {};
    }
    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(NumberRange);
    //Create new class level validator object
    BaseModel.Validator.call(NumberRange);
    var registerValidatorBackup = NumberRange.registerValidator;
    NumberRange.registerValidator = function() {
            var propName = arguments[0];
            if (!setterFunctions[propName].changed) {
                var setterBackup = setterFunctions[propName];
                setterFunctions[arguments[0]] = function() {
                    if (NumberRange.isValid(this, propName, val)) {
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
        //For Operation 'ResetNumberRange' with service id 'resetNumberRangeorch3665'
    NumberRange.ResetNumberRange = function(params, onCompletion) {
        return NumberRange.customVerb('ResetNumberRange', params, onCompletion);
    };
    //For Operation 'ReadNextNumber' with service id 'getNumberRangejava7432'
    NumberRange.ReadNextNumber = function(params, onCompletion) {
        return NumberRange.customVerb('ReadNextNumber', params, onCompletion);
    };
    //For Operation 'SetNextNumber' with service id 'setNumberRangeorch8532'
    NumberRange.SetNextNumber = function(params, onCompletion) {
        return NumberRange.customVerb('SetNextNumber', params, onCompletion);
    };
    //For Operation 'DeleteNumberRange' with service id 'deleteNumberRangeorch6334'
    NumberRange.DeleteNumberRange = function(params, onCompletion) {
        return NumberRange.customVerb('DeleteNumberRange', params, onCompletion);
    };
    var relations = [];
    NumberRange.relations = relations;
    NumberRange.prototype.isValid = function() {
        return NumberRange.isValid(this);
    };
    NumberRange.prototype.objModelName = "NumberRange";
    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    NumberRange.registerProcessors = function(options, successCallback, failureCallback) {
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
        kony.mvc.util.ProcessorUtils.getMetadataForObject("LibraryUtilities", "NumberRange", options, metaDataSuccess, metaDataFailure);
    };
    //clone the object provided in argument.
    NumberRange.clone = function(objectToClone) {
        var clonedObj = new NumberRange();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };
    return NumberRange;
});