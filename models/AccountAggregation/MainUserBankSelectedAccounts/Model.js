/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "MainUserBankSelectedAccounts", "objectService" : "AccountAggregation"};

    var setterFunctions = {
        main_user: function(val, state) {
            context["field"] = "main_user";
            context["metadata"] = (objectMetadata ? objectMetadata["main_user"] : null);
            state['main_user'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        bank_id: function(val, state) {
            context["field"] = "bank_id";
            context["metadata"] = (objectMetadata ? objectMetadata["bank_id"] : null);
            state['bank_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Accountid: function(val, state) {
            context["field"] = "Accountid";
            context["metadata"] = (objectMetadata ? objectMetadata["Accountid"] : null);
            state['Accountid'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function MainUserBankSelectedAccounts(defaultValues) {
        var privateState = {};
        context["field"] = "main_user";
        context["metadata"] = (objectMetadata ? objectMetadata["main_user"] : null);
        privateState.main_user = defaultValues ?
            (defaultValues["main_user"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["main_user"], context) :
                null) :
            null;

        context["field"] = "bank_id";
        context["metadata"] = (objectMetadata ? objectMetadata["bank_id"] : null);
        privateState.bank_id = defaultValues ?
            (defaultValues["bank_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["bank_id"], context) :
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
            "bank_id": {
                get: function() {
                    context["field"] = "bank_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["bank_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.bank_id, context);
                },
                set: function(val) {
                    setterFunctions['bank_id'].call(this, val, privateState);
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
            privateState.bank_id = value ? (value["bank_id"] ? value["bank_id"] : null) : null;
            privateState.Accountid = value ? (value["Accountid"] ? value["Accountid"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(MainUserBankSelectedAccounts);

    //Create new class level validator object
    BaseModel.Validator.call(MainUserBankSelectedAccounts);

    var registerValidatorBackup = MainUserBankSelectedAccounts.registerValidator;

    MainUserBankSelectedAccounts.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(MainUserBankSelectedAccounts.isValid(this, propName, val)) {
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

    MainUserBankSelectedAccounts.relations = relations;

    MainUserBankSelectedAccounts.prototype.isValid = function() {
        return MainUserBankSelectedAccounts.isValid(this);
    };

    MainUserBankSelectedAccounts.prototype.objModelName = "MainUserBankSelectedAccounts";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    MainUserBankSelectedAccounts.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("AccountAggregation", "MainUserBankSelectedAccounts", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    MainUserBankSelectedAccounts.clone = function(objectToClone) {
        var clonedObj = new MainUserBankSelectedAccounts();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return MainUserBankSelectedAccounts;
});