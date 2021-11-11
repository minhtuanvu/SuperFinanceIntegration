/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "AccountType", "objectService" : "RBObjects"};

    var setterFunctions = {
        TypeDescription: function(val, state) {
            context["field"] = "TypeDescription";
            context["metadata"] = (objectMetadata ? objectMetadata["TypeDescription"] : null);
            state['TypeDescription'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        TypeID: function(val, state) {
            context["field"] = "TypeID";
            context["metadata"] = (objectMetadata ? objectMetadata["TypeID"] : null);
            state['TypeID'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        displayName: function(val, state) {
            context["field"] = "displayName";
            context["metadata"] = (objectMetadata ? objectMetadata["displayName"] : null);
            state['displayName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function AccountType(defaultValues) {
        var privateState = {};
        context["field"] = "TypeDescription";
        context["metadata"] = (objectMetadata ? objectMetadata["TypeDescription"] : null);
        privateState.TypeDescription = defaultValues ?
            (defaultValues["TypeDescription"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["TypeDescription"], context) :
                null) :
            null;

        context["field"] = "TypeID";
        context["metadata"] = (objectMetadata ? objectMetadata["TypeID"] : null);
        privateState.TypeID = defaultValues ?
            (defaultValues["TypeID"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["TypeID"], context) :
                null) :
            null;

        context["field"] = "displayName";
        context["metadata"] = (objectMetadata ? objectMetadata["displayName"] : null);
        privateState.displayName = defaultValues ?
            (defaultValues["displayName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["displayName"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "TypeDescription": {
                get: function() {
                    context["field"] = "TypeDescription";
                    context["metadata"] = (objectMetadata ? objectMetadata["TypeDescription"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.TypeDescription, context);
                },
                set: function(val) {
                    setterFunctions['TypeDescription'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "TypeID": {
                get: function() {
                    context["field"] = "TypeID";
                    context["metadata"] = (objectMetadata ? objectMetadata["TypeID"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.TypeID, context);
                },
                set: function(val) {
                    setterFunctions['TypeID'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "displayName": {
                get: function() {
                    context["field"] = "displayName";
                    context["metadata"] = (objectMetadata ? objectMetadata["displayName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.displayName, context);
                },
                set: function(val) {
                    setterFunctions['displayName'].call(this, val, privateState);
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
            privateState.TypeDescription = value ? (value["TypeDescription"] ? value["TypeDescription"] : null) : null;
            privateState.TypeID = value ? (value["TypeID"] ? value["TypeID"] : null) : null;
            privateState.displayName = value ? (value["displayName"] ? value["displayName"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(AccountType);

    //Create new class level validator object
    BaseModel.Validator.call(AccountType);

    var registerValidatorBackup = AccountType.registerValidator;

    AccountType.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(AccountType.isValid(this, propName, val)) {
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

    AccountType.relations = relations;

    AccountType.prototype.isValid = function() {
        return AccountType.isValid(this);
    };

    AccountType.prototype.objModelName = "AccountType";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    AccountType.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("RBObjects", "AccountType", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    AccountType.clone = function(objectToClone) {
        var clonedObj = new AccountType();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return AccountType;
});