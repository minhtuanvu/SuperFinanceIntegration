/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {
        "object": "StockNewsStory",
        "objectService": "WealthObjects"
    };
    var setterFunctions = {
        StoryId: function(val, state) {
            context["field"] = "StoryId";
            context["metadata"] = (objectMetadata ? objectMetadata["StoryId"] : null);
            state['StoryId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };
    //Create the Model Class
    function StockNewsStory(defaultValues) {
        var privateState = {};
        context["field"] = "StoryId";
        context["metadata"] = (objectMetadata ? objectMetadata["StoryId"] : null);
        privateState.StoryId = defaultValues ? (defaultValues["StoryId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["StoryId"], context) : null) : null;
        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);
        //Defining Getter/Setters
        Object.defineProperties(this, {
            "StoryId": {
                get: function() {
                    context["field"] = "StoryId";
                    context["metadata"] = (objectMetadata ? objectMetadata["StoryId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.StoryId, context);
                },
                set: function(val) {
                    setterFunctions['StoryId'].call(this, val, privateState);
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
            privateState.StoryId = value ? (value["StoryId"] ? value["StoryId"] : null) : null;
        };
    }
    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(StockNewsStory);
    //Create new class level validator object
    BaseModel.Validator.call(StockNewsStory);
    var registerValidatorBackup = StockNewsStory.registerValidator;
    StockNewsStory.registerValidator = function() {
            var propName = arguments[0];
            if (!setterFunctions[propName].changed) {
                var setterBackup = setterFunctions[propName];
                setterFunctions[arguments[0]] = function() {
                    if (StockNewsStory.isValid(this, propName, val)) {
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
        //For Operation 'getStockNewsStory' with service id 'getNewsStory3954'
    StockNewsStory.getStockNewsStory = function(params, onCompletion) {
        return StockNewsStory.customVerb('getStockNewsStory', params, onCompletion);
    };
    var relations = [];
    StockNewsStory.relations = relations;
    StockNewsStory.prototype.isValid = function() {
        return StockNewsStory.isValid(this);
    };
    StockNewsStory.prototype.objModelName = "StockNewsStory";
    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    StockNewsStory.registerProcessors = function(options, successCallback, failureCallback) {
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
        kony.mvc.util.ProcessorUtils.getMetadataForObject("WealthObjects", "StockNewsStory", options, metaDataSuccess, metaDataFailure);
    };
    //clone the object provided in argument.
    StockNewsStory.clone = function(objectToClone) {
        var clonedObj = new StockNewsStory();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };
    return StockNewsStory;
});