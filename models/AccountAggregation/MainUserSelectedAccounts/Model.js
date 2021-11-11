/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "MainUserSelectedAccounts", "objectService" : "AccountAggregation"};

    var setterFunctions = {
        main_user: function(val, state) {
            context["field"] = "main_user";
            context["metadata"] = (objectMetadata ? objectMetadata["main_user"] : null);
            state['main_user'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Accountid: function(val, state) {
            context["field"] = "Accountid";
            context["metadata"] = (objectMetadata ? objectMetadata["Accountid"] : null);
            state['Accountid'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function MainUserSelectedAccounts(defaultValues) {
        var privateState = {};
        context["field"] = "main_user";
        context["metadata"] = (objectMetadata ? objectMetadata["main_user"] : null);
        privateState.main_user = defaultValues ?
            (defaultValues["main_user"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["main_user"], context) :
                null) :
            null;

        context["field"] = "Accountid";
        context["metadata"] = (objectMetadata ? objectMetadata["Accountid"] : null);
        privateState.Accountid = defaultValues ?
            (defaultValues["Accountid"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Accountid"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "main_user": {
                get: function() {
                    context["field"] = "main_user";
                    context["metadata"] = (objectMetadata ? objectMetadata["main_user"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.main_user, context);
                },
                set: function(val) {
                    setterFunctions['main_user'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Accountid": {
                get: function() {
                    context["field"] = "Accountid";
                    context["metadata"] = (objectMetadata ? objectMetadata["Accountid"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Accountid, context);
                },
                set: function(val) {
                    setterFunctions['Accountid'].call(this, val, privateState);
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
            privateState.main_user = value ? (value["main_user"] ? value["main_user"] : null) : null;
            privateState.Accountid = value ? (value["Accountid"] ? value["Accountid"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(MainUserSelectedAccounts);

    //Create new class level validator object
    BaseModel.Validator.call(MainUserSelectedAccounts);

    var registerValidatorBackup = MainUserSelectedAccounts.registerValidator;

    MainUserSelectedAccounts.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(MainUserSelectedAccounts.isValid(this, propName, val)) {
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

    MainUserSelectedAccounts.relations = relations;

    MainUserSelectedAccounts.prototype.isValid = function() {
        return MainUserSelectedAccounts.isValid(this);
    };

    MainUserSelectedAccounts.prototype.objModelName = "MainUserSelectedAccounts";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    MainUserSelectedAccounts.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("AccountAggregation", "MainUserSelectedAccounts", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    MainUserSelectedAccounts.clone = function(objectToClone) {
        var clonedObj = new MainUserSelectedAccounts();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return MainUserSelectedAccounts;
});