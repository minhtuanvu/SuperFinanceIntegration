/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "Business", "objectService" : "RBObjects"};

    var setterFunctions = {
        businessTypeId: function(val, state) {
            context["field"] = "businessTypeId";
            context["metadata"] = (objectMetadata ? objectMetadata["businessTypeId"] : null);
            state['businessTypeId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function Business(defaultValues) {
        var privateState = {};
        context["field"] = "businessTypeId";
        context["metadata"] = (objectMetadata ? objectMetadata["businessTypeId"] : null);
        privateState.businessTypeId = defaultValues ?
            (defaultValues["businessTypeId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["businessTypeId"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "businessTypeId": {
                get: function() {
                    context["field"] = "businessTypeId";
                    context["metadata"] = (objectMetadata ? objectMetadata["businessTypeId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.businessTypeId, context);
                },
                set: function(val) {
                    setterFunctions['businessTypeId'].call(this, val, privateState);
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
            privateState.businessTypeId = value ? (value["businessTypeId"] ? value["businessTypeId"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(Business);

    //Create new class level validator object
    BaseModel.Validator.call(Business);

    var registerValidatorBackup = Business.registerValidator;

    Business.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(Business.isValid(this, propName, val)) {
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
    //For Operation 'getBusinessTypeRoles' with service id 'GetBusinessTypeRoles3111'
     Business.getBusinessTypeRoles = function(params, onCompletion){
        return Business.customVerb('getBusinessTypeRoles', params, onCompletion);
     };

    //For Operation 'getBusinessTypes' with service id 'GetBusinessTypes5523'
     Business.getBusinessTypes = function(params, onCompletion){
        return Business.customVerb('getBusinessTypes', params, onCompletion);
     };

    var relations = [];

    Business.relations = relations;

    Business.prototype.isValid = function() {
        return Business.isValid(this);
    };

    Business.prototype.objModelName = "Business";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    Business.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("RBObjects", "Business", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    Business.clone = function(objectToClone) {
        var clonedObj = new Business();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return Business;
});