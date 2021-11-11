/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {
        "object": "DbxUserAlerts",
        "objectService": "RBObjects"
    };
    var setterFunctions = {};
    //Create the Model Class
    function DbxUserAlerts(defaultValues) {
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
    BaseModel.isParentOf(DbxUserAlerts);
    //Create new class level validator object
    BaseModel.Validator.call(DbxUserAlerts);
    var registerValidatorBackup = DbxUserAlerts.registerValidator;
    DbxUserAlerts.registerValidator = function() {
            var propName = arguments[0];
            if (!setterFunctions[propName].changed) {
                var setterBackup = setterFunctions[propName];
                setterFunctions[arguments[0]] = function() {
                    if (DbxUserAlerts.isValid(this, propName, val)) {
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
        //For Operation 'getAlertChannels' with service id 'getAlertChannels9004'
    DbxUserAlerts.getAlertChannels = function(params, onCompletion) {
        return DbxUserAlerts.customVerb('getAlertChannels', params, onCompletion);
    };
    //For Operation 'getCustomerAlertTypePreference' with service id 'getCustomerAlertTypePreference6958'
    DbxUserAlerts.getCustomerAlertTypePreference = function(params, onCompletion) {
        return DbxUserAlerts.customVerb('getCustomerAlertTypePreference', params, onCompletion);
    };
    //For Operation 'getCustomerAccountAlertPreference' with service id 'getCustomerAccountAlertPreference1217'
    DbxUserAlerts.getCustomerAccountAlertPreference = function(params, onCompletion) {
        return DbxUserAlerts.customVerb('getCustomerAccountAlertPreference', params, onCompletion);
    };
    //For Operation 'getCustomerAlertCategoryPreference' with service id 'getCustomerAlertCategoryPreference9676'
    DbxUserAlerts.getCustomerAlertCategoryPreference = function(params, onCompletion) {
        return DbxUserAlerts.customVerb('getCustomerAlertCategoryPreference', params, onCompletion);
    };
    //For Operation 'setAlertPreferences' with service id 'setAlertPreferences9622'
    DbxUserAlerts.setAlertPreferences = function(params, onCompletion) {
        return DbxUserAlerts.customVerb('setAlertPreferences', params, onCompletion);
    };
    var relations = [];
    DbxUserAlerts.relations = relations;
    DbxUserAlerts.prototype.isValid = function() {
        return DbxUserAlerts.isValid(this);
    };
    DbxUserAlerts.prototype.objModelName = "DbxUserAlerts";
    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    DbxUserAlerts.registerProcessors = function(options, successCallback, failureCallback) {
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
        kony.mvc.util.ProcessorUtils.getMetadataForObject("RBObjects", "DbxUserAlerts", options, metaDataSuccess, metaDataFailure);
    };
    //clone the object provided in argument.
    DbxUserAlerts.clone = function(objectToClone) {
        var clonedObj = new DbxUserAlerts();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };
    return DbxUserAlerts;
});