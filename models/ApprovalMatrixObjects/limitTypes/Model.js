/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "limitTypes", "objectService" : "ApprovalMatrixObjects"};

    var setterFunctions = {
        limitTypeId: function(val, state) {
            context["field"] = "limitTypeId";
            context["metadata"] = (objectMetadata ? objectMetadata["limitTypeId"] : null);
            state['limitTypeId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function limitTypes(defaultValues) {
        var privateState = {};
        context["field"] = "limitTypeId";
        context["metadata"] = (objectMetadata ? objectMetadata["limitTypeId"] : null);
        privateState.limitTypeId = defaultValues ?
            (defaultValues["limitTypeId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["limitTypeId"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "limitTypeId": {
                get: function() {
                    context["field"] = "limitTypeId";
                    context["metadata"] = (objectMetadata ? objectMetadata["limitTypeId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.limitTypeId, context);
                },
                set: function(val) {
                    setterFunctions['limitTypeId'].call(this, val, privateState);
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
            privateState.limitTypeId = value ? (value["limitTypeId"] ? value["limitTypeId"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(limitTypes);

    //Create new class level validator object
    BaseModel.Validator.call(limitTypes);

    var registerValidatorBackup = limitTypes.registerValidator;

    limitTypes.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(limitTypes.isValid(this, propName, val)) {
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

    limitTypes.relations = relations;

    limitTypes.prototype.isValid = function() {
        return limitTypes.isValid(this);
    };

    limitTypes.prototype.objModelName = "limitTypes";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    limitTypes.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("ApprovalMatrixObjects", "limitTypes", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    limitTypes.clone = function(objectToClone) {
        var clonedObj = new limitTypes();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return limitTypes;
});