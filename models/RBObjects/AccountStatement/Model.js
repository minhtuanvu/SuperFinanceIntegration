/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "AccountStatement", "objectService" : "RBObjects"};

    var setterFunctions = {
        StatementDescription: function(val, state) {
            context["field"] = "StatementDescription";
            context["metadata"] = (objectMetadata ? objectMetadata["StatementDescription"] : null);
            state['StatementDescription'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        StatementLink: function(val, state) {
            context["field"] = "StatementLink";
            context["metadata"] = (objectMetadata ? objectMetadata["StatementLink"] : null);
            state['StatementLink'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        StatementMonth: function(val, state) {
            context["field"] = "StatementMonth";
            context["metadata"] = (objectMetadata ? objectMetadata["StatementMonth"] : null);
            state['StatementMonth'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        accountID: function(val, state) {
            context["field"] = "accountID";
            context["metadata"] = (objectMetadata ? objectMetadata["accountID"] : null);
            state['accountID'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        format: function(val, state) {
            context["field"] = "format";
            context["metadata"] = (objectMetadata ? objectMetadata["format"] : null);
            state['format'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        year: function(val, state) {
            context["field"] = "year";
            context["metadata"] = (objectMetadata ? objectMetadata["year"] : null);
            state['year'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        errmsg: function(val, state) {
            context["field"] = "errmsg";
            context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
            state['errmsg'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function AccountStatement(defaultValues) {
        var privateState = {};
        context["field"] = "StatementDescription";
        context["metadata"] = (objectMetadata ? objectMetadata["StatementDescription"] : null);
        privateState.StatementDescription = defaultValues ?
            (defaultValues["StatementDescription"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["StatementDescription"], context) :
                null) :
            null;

        context["field"] = "StatementLink";
        context["metadata"] = (objectMetadata ? objectMetadata["StatementLink"] : null);
        privateState.StatementLink = defaultValues ?
            (defaultValues["StatementLink"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["StatementLink"], context) :
                null) :
            null;

        context["field"] = "StatementMonth";
        context["metadata"] = (objectMetadata ? objectMetadata["StatementMonth"] : null);
        privateState.StatementMonth = defaultValues ?
            (defaultValues["StatementMonth"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["StatementMonth"], context) :
                null) :
            null;

        context["field"] = "accountID";
        context["metadata"] = (objectMetadata ? objectMetadata["accountID"] : null);
        privateState.accountID = defaultValues ?
            (defaultValues["accountID"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["accountID"], context) :
                null) :
            null;

        context["field"] = "format";
        context["metadata"] = (objectMetadata ? objectMetadata["format"] : null);
        privateState.format = defaultValues ?
            (defaultValues["format"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["format"], context) :
                null) :
            null;

        context["field"] = "year";
        context["metadata"] = (objectMetadata ? objectMetadata["year"] : null);
        privateState.year = defaultValues ?
            (defaultValues["year"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["year"], context) :
                null) :
            null;

        context["field"] = "errmsg";
        context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
        privateState.errmsg = defaultValues ?
            (defaultValues["errmsg"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["errmsg"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "StatementDescription": {
                get: function() {
                    context["field"] = "StatementDescription";
                    context["metadata"] = (objectMetadata ? objectMetadata["StatementDescription"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.StatementDescription, context);
                },
                set: function(val) {
                    setterFunctions['StatementDescription'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "StatementLink": {
                get: function() {
                    context["field"] = "StatementLink";
                    context["metadata"] = (objectMetadata ? objectMetadata["StatementLink"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.StatementLink, context);
                },
                set: function(val) {
                    setterFunctions['StatementLink'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "StatementMonth": {
                get: function() {
                    context["field"] = "StatementMonth";
                    context["metadata"] = (objectMetadata ? objectMetadata["StatementMonth"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.StatementMonth, context);
                },
                set: function(val) {
                    setterFunctions['StatementMonth'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "accountID": {
                get: function() {
                    context["field"] = "accountID";
                    context["metadata"] = (objectMetadata ? objectMetadata["accountID"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.accountID, context);
                },
                set: function(val) {
                    setterFunctions['accountID'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "format": {
                get: function() {
                    context["field"] = "format";
                    context["metadata"] = (objectMetadata ? objectMetadata["format"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.format, context);
                },
                set: function(val) {
                    setterFunctions['format'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "year": {
                get: function() {
                    context["field"] = "year";
                    context["metadata"] = (objectMetadata ? objectMetadata["year"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.year, context);
                },
                set: function(val) {
                    setterFunctions['year'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "errmsg": {
                get: function() {
                    context["field"] = "errmsg";
                    context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.errmsg, context);
                },
                set: function(val) {
                    setterFunctions['errmsg'].call(this, val, privateState);
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
            privateState.StatementDescription = value ? (value["StatementDescription"] ? value["StatementDescription"] : null) : null;
            privateState.StatementLink = value ? (value["StatementLink"] ? value["StatementLink"] : null) : null;
            privateState.StatementMonth = value ? (value["StatementMonth"] ? value["StatementMonth"] : null) : null;
            privateState.accountID = value ? (value["accountID"] ? value["accountID"] : null) : null;
            privateState.format = value ? (value["format"] ? value["format"] : null) : null;
            privateState.year = value ? (value["year"] ? value["year"] : null) : null;
            privateState.errmsg = value ? (value["errmsg"] ? value["errmsg"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(AccountStatement);

    //Create new class level validator object
    BaseModel.Validator.call(AccountStatement);

    var registerValidatorBackup = AccountStatement.registerValidator;

    AccountStatement.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(AccountStatement.isValid(this, propName, val)) {
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
    //For Operation 'showDownloadStatements' with service id 'showDownloadStatements5684'
     AccountStatement.showDownloadStatements = function(params, onCompletion){
        return AccountStatement.customVerb('showDownloadStatements', params, onCompletion);
     };

    var relations = [];

    AccountStatement.relations = relations;

    AccountStatement.prototype.isValid = function() {
        return AccountStatement.isValid(this);
    };

    AccountStatement.prototype.objModelName = "AccountStatement";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    AccountStatement.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("RBObjects", "AccountStatement", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    AccountStatement.clone = function(objectToClone) {
        var clonedObj = new AccountStatement();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return AccountStatement;
});