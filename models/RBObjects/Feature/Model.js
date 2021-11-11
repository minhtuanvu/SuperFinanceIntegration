/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "Feature", "objectService" : "RBObjects"};

    var setterFunctions = {
    };

    //Create the Model Class
    function Feature(defaultValues) {
        var privateState = {};

        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
        });

        //converts model object to json object.
        this.toJsonInternal = function() {
            return Object.assign({}, privateState);
        };

        //overwrites object state with provided json value in argument.
        this.fromJsonInternal = function(value) {
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(Feature);

    //Create new class level validator object
    BaseModel.Validator.call(Feature);

    var registerValidatorBackup = Feature.registerValidator;

    Feature.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(Feature.isValid(this, propName, val)) {
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
    //For Operation 'getAccessPolicies' with service id 'getAccessPolicies4424'
     Feature.getAccessPolicies = function(params, onCompletion){
        return Feature.customVerb('getAccessPolicies', params, onCompletion);
     };

    //For Operation 'getAllFeatures' with service id 'GetAllFeatures5841'
     Feature.getAllFeatures = function(params, onCompletion){
        return Feature.customVerb('getAllFeatures', params, onCompletion);
     };

    //For Operation 'getAllFeaturesAndActions' with service id 'getAllFeaturesAndActions4767'
     Feature.getAllFeaturesAndActions = function(params, onCompletion){
        return Feature.customVerb('getAllFeaturesAndActions', params, onCompletion);
     };

    //For Operation 'getLimitGroups' with service id 'getLimitGroups3567'
     Feature.getLimitGroups = function(params, onCompletion){
        return Feature.customVerb('getLimitGroups', params, onCompletion);
     };

    //For Operation 'getAllMonetaryActions' with service id 'getAllMonetaryActions1866'
     Feature.getAllMonetaryActions = function(params, onCompletion){
        return Feature.customVerb('getAllMonetaryActions', params, onCompletion);
     };

    //For Operation 'getFeatureActions' with service id 'getFeatureActions2032'
     Feature.getFeatureActions = function(params, onCompletion){
        return Feature.customVerb('getFeatureActions', params, onCompletion);
     };

    var relations = [];

    Feature.relations = relations;

    Feature.prototype.isValid = function() {
        return Feature.isValid(this);
    };

    Feature.prototype.objModelName = "Feature";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    Feature.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("RBObjects", "Feature", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    Feature.clone = function(objectToClone) {
        var clonedObj = new Feature();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return Feature;
});