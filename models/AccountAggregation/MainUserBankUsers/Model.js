/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "MainUserBankUsers", "objectService" : "AccountAggregation"};

    var setterFunctions = {
        main_user: function(val, state) {
            context["field"] = "main_user";
            context["metadata"] = (objectMetadata ? objectMetadata["main_user"] : null);
            state['main_user'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        UserName: function(val, state) {
            context["field"] = "UserName";
            context["metadata"] = (objectMetadata ? objectMetadata["UserName"] : null);
            state['UserName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function MainUserBankUsers(defaultValues) {
        var privateState = {};
        context["field"] = "main_user";
        context["metadata"] = (objectMetadata ? objectMetadata["main_user"] : null);
        privateState.main_user = defaultValues ?
            (defaultValues["main_user"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["main_user"], context) :
                null) :
            null;

        context["field"] = "UserName";
        context["metadata"] = (objectMetadata ? objectMetadata["UserName"] : null);
        privateState.UserName = defaultValues ?
            (defaultValues["UserName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["UserName"], context) :
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
            "UserName": {
                get: function() {
                    context["field"] = "UserName";
                    context["metadata"] = (objectMetadata ? objectMetadata["UserName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.UserName, context);
                },
                set: function(val) {
                    setterFunctions['UserName'].call(this, val, privateState);
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
            privateState.UserName = value ? (value["UserName"] ? value["UserName"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(MainUserBankUsers);

    //Create new class level validator object
    BaseModel.Validator.call(MainUserBankUsers);

    var registerValidatorBackup = MainUserBankUsers.registerValidator;

    MainUserBankUsers.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(MainUserBankUsers.isValid(this, propName, val)) {
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

    MainUserBankUsers.relations = relations;

    MainUserBankUsers.prototype.isValid = function() {
        return MainUserBankUsers.isValid(this);
    };

    MainUserBankUsers.prototype.objModelName = "MainUserBankUsers";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    MainUserBankUsers.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("AccountAggregation", "MainUserBankUsers", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    MainUserBankUsers.clone = function(objectToClone) {
        var clonedObj = new MainUserBankUsers();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return MainUserBankUsers;
});