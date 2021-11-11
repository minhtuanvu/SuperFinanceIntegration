/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "TransactionStatement", "objectService" : "TransactionAdvice"};

    var setterFunctions = {
    };

    //Create the Model Class
    function TransactionStatement(defaultValues) {
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
    BaseModel.isParentOf(TransactionStatement);

    //Create new class level validator object
    BaseModel.Validator.call(TransactionStatement);

    var registerValidatorBackup = TransactionStatement.registerValidator;

    TransactionStatement.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(TransactionStatement.isValid(this, propName, val)) {
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
    //For Operation 'getTransactionStatementsByYear' with service id 'getYearlyFileDetails9172'
     TransactionStatement.getTransactionStatementsByYear = function(params, onCompletion){
        return TransactionStatement.customVerb('getTransactionStatementsByYear', params, onCompletion);
     };

    var relations = [];

    TransactionStatement.relations = relations;

    TransactionStatement.prototype.isValid = function() {
        return TransactionStatement.isValid(this);
    };

    TransactionStatement.prototype.objModelName = "TransactionStatement";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    TransactionStatement.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("TransactionAdvice", "TransactionStatement", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    TransactionStatement.clone = function(objectToClone) {
        var clonedObj = new TransactionStatement();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return TransactionStatement;
});