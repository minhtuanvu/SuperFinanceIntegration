/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {
        "object": "packaging",
        "objectService": "ServiceRequest"
    };
    var setterFunctions = {};
    //Create the Model Class
    function packaging(defaultValues) {
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
    BaseModel.isParentOf(packaging);
    //Create new class level validator object
    BaseModel.Validator.call(packaging);
    var registerValidatorBackup = packaging.registerValidator;
    packaging.registerValidator = function() {
            var propName = arguments[0];
            if (!setterFunctions[propName].changed) {
                var setterBackup = setterFunctions[propName];
                setterFunctions[arguments[0]] = function() {
                    if (packaging.isValid(this, propName, val)) {
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
        //For Operation 'createOrder' with service id 'createOrder8194'
    packaging.createOrder = function(params, onCompletion) {
        return packaging.customVerb('createOrder', params, onCompletion);
    };
    //For Operation 'getOrderDetails' with service id 'getOrderDetails4258'
    packaging.getOrderDetails = function(params, onCompletion) {
        return packaging.customVerb('getOrderDetails', params, onCompletion);
    };
    //For Operation 'triggerForStatus' with service id 'triggerForStatus2868'
    packaging.triggerForStatus = function(params, onCompletion) {
        return packaging.customVerb('triggerForStatus', params, onCompletion);
    };
    //For Operation 'updateOrder' with service id 'updateOrder1240'
    packaging.updateOrder = function(params, onCompletion) {
        return packaging.customVerb('updateOrder', params, onCompletion);
    };
    //For Operation 'getServiceConfigDetails' with service id 'getTemplateDetails7489'
    packaging.getServiceConfigDetails = function(params, onCompletion) {
        return packaging.customVerb('getServiceConfigDetails', params, onCompletion);
    };
    var relations = [];
    packaging.relations = relations;
    packaging.prototype.isValid = function() {
        return packaging.isValid(this);
    };
    packaging.prototype.objModelName = "packaging";
    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    packaging.registerProcessors = function(options, successCallback, failureCallback) {
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
        kony.mvc.util.ProcessorUtils.getMetadataForObject("ServiceRequest", "packaging", options, metaDataSuccess, metaDataFailure);
    };
    //clone the object provided in argument.
    packaging.clone = function(objectToClone) {
        var clonedObj = new packaging();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };
    return packaging;
});