/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {
        "object": "ExternalAccountsAggregation",
        "objectService": "AccountAggregation"
    };
    var setterFunctions = {
        Bank_id: function(val, state) {
            context["field"] = "Bank_id";
            context["metadata"] = (objectMetadata ? objectMetadata["Bank_id"] : null);
            state['Bank_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        id: function(val, state) {
            context["field"] = "id";
            context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
            state['id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        label: function(val, state) {
            context["field"] = "label";
            context["metadata"] = (objectMetadata ? objectMetadata["label"] : null);
            state['label'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        username: function(val, state) {
            context["field"] = "username";
            context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
            state['username'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        scheme: function(val, state) {
            context["field"] = "scheme";
            context["metadata"] = (objectMetadata ? objectMetadata["scheme"] : null);
            state['scheme'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        address: function(val, state) {
            context["field"] = "address";
            context["metadata"] = (objectMetadata ? objectMetadata["address"] : null);
            state['address'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        AccountName: function(val, state) {
            context["field"] = "AccountName";
            context["metadata"] = (objectMetadata ? objectMetadata["AccountName"] : null);
            state['AccountName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        main_user: function(val, state) {
            context["field"] = "main_user";
            context["metadata"] = (objectMetadata ? objectMetadata["main_user"] : null);
            state['main_user'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        BankName: function(val, state) {
            context["field"] = "BankName";
            context["metadata"] = (objectMetadata ? objectMetadata["BankName"] : null);
            state['BankName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Type_id: function(val, state) {
            context["field"] = "Type_id";
            context["metadata"] = (objectMetadata ? objectMetadata["Type_id"] : null);
            state['Type_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        TypeDescription: function(val, state) {
            context["field"] = "TypeDescription";
            context["metadata"] = (objectMetadata ? objectMetadata["TypeDescription"] : null);
            state['TypeDescription'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        AvailableBalance: function(val, state) {
            context["field"] = "AvailableBalance";
            context["metadata"] = (objectMetadata ? objectMetadata["AvailableBalance"] : null);
            state['AvailableBalance'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        AccountHolder: function(val, state) {
            context["field"] = "AccountHolder";
            context["metadata"] = (objectMetadata ? objectMetadata["AccountHolder"] : null);
            state['AccountHolder'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        CurrencyCode: function(val, state) {
            context["field"] = "CurrencyCode";
            context["metadata"] = (objectMetadata ? objectMetadata["CurrencyCode"] : null);
            state['CurrencyCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Number: function(val, state) {
            context["field"] = "Number";
            context["metadata"] = (objectMetadata ? objectMetadata["Number"] : null);
            state['Number'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };
    //Create the Model Class
    function ExternalAccountsAggregation(defaultValues) {
        var privateState = {};
        context["field"] = "Bank_id";
        context["metadata"] = (objectMetadata ? objectMetadata["Bank_id"] : null);
        privateState.Bank_id = defaultValues ? (defaultValues["Bank_id"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Bank_id"], context) : null) : null;
        context["field"] = "id";
        context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
        privateState.id = defaultValues ? (defaultValues["id"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["id"], context) : null) : null;
        context["field"] = "label";
        context["metadata"] = (objectMetadata ? objectMetadata["label"] : null);
        privateState.label = defaultValues ? (defaultValues["label"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["label"], context) : null) : null;
        context["field"] = "username";
        context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
        privateState.username = defaultValues ? (defaultValues["username"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["username"], context) : null) : null;
        context["field"] = "scheme";
        context["metadata"] = (objectMetadata ? objectMetadata["scheme"] : null);
        privateState.scheme = defaultValues ? (defaultValues["scheme"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["scheme"], context) : null) : null;
        context["field"] = "address";
        context["metadata"] = (objectMetadata ? objectMetadata["address"] : null);
        privateState.address = defaultValues ? (defaultValues["address"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["address"], context) : null) : null;
        context["field"] = "AccountName";
        context["metadata"] = (objectMetadata ? objectMetadata["AccountName"] : null);
        privateState.AccountName = defaultValues ? (defaultValues["AccountName"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AccountName"], context) : null) : null;
        context["field"] = "main_user";
        context["metadata"] = (objectMetadata ? objectMetadata["main_user"] : null);
        privateState.main_user = defaultValues ? (defaultValues["main_user"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["main_user"], context) : null) : null;
        context["field"] = "BankName";
        context["metadata"] = (objectMetadata ? objectMetadata["BankName"] : null);
        privateState.BankName = defaultValues ? (defaultValues["BankName"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["BankName"], context) : null) : null;
        context["field"] = "Type_id";
        context["metadata"] = (objectMetadata ? objectMetadata["Type_id"] : null);
        privateState.Type_id = defaultValues ? (defaultValues["Type_id"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Type_id"], context) : null) : null;
        context["field"] = "TypeDescription";
        context["metadata"] = (objectMetadata ? objectMetadata["TypeDescription"] : null);
        privateState.TypeDescription = defaultValues ? (defaultValues["TypeDescription"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["TypeDescription"], context) : null) : null;
        context["field"] = "AvailableBalance";
        context["metadata"] = (objectMetadata ? objectMetadata["AvailableBalance"] : null);
        privateState.AvailableBalance = defaultValues ? (defaultValues["AvailableBalance"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AvailableBalance"], context) : null) : null;
        context["field"] = "AccountHolder";
        context["metadata"] = (objectMetadata ? objectMetadata["AccountHolder"] : null);
        privateState.AccountHolder = defaultValues ? (defaultValues["AccountHolder"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AccountHolder"], context) : null) : null;
        context["field"] = "CurrencyCode";
        context["metadata"] = (objectMetadata ? objectMetadata["CurrencyCode"] : null);
        privateState.CurrencyCode = defaultValues ? (defaultValues["CurrencyCode"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["CurrencyCode"], context) : null) : null;
        context["field"] = "Number";
        context["metadata"] = (objectMetadata ? objectMetadata["Number"] : null);
        privateState.Number = defaultValues ? (defaultValues["Number"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Number"], context) : null) : null;
        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);
        //Defining Getter/Setters
        Object.defineProperties(this, {
            "Bank_id": {
                get: function() {
                    context["field"] = "Bank_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["Bank_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Bank_id, context);
                },
                set: function(val) {
                    setterFunctions['Bank_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "id": {
                get: function() {
                    context["field"] = "id";
                    context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.id, context);
                },
                set: function(val) {
                    setterFunctions['id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "label": {
                get: function() {
                    context["field"] = "label";
                    context["metadata"] = (objectMetadata ? objectMetadata["label"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.label, context);
                },
                set: function(val) {
                    setterFunctions['label'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "username": {
                get: function() {
                    context["field"] = "username";
                    context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.username, context);
                },
                set: function(val) {
                    setterFunctions['username'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "scheme": {
                get: function() {
                    context["field"] = "scheme";
                    context["metadata"] = (objectMetadata ? objectMetadata["scheme"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.scheme, context);
                },
                set: function(val) {
                    setterFunctions['scheme'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "address": {
                get: function() {
                    context["field"] = "address";
                    context["metadata"] = (objectMetadata ? objectMetadata["address"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.address, context);
                },
                set: function(val) {
                    setterFunctions['address'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "AccountName": {
                get: function() {
                    context["field"] = "AccountName";
                    context["metadata"] = (objectMetadata ? objectMetadata["AccountName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.AccountName, context);
                },
                set: function(val) {
                    setterFunctions['AccountName'].call(this, val, privateState);
                },
                enumerable: true,
            },
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
            "BankName": {
                get: function() {
                    context["field"] = "BankName";
                    context["metadata"] = (objectMetadata ? objectMetadata["BankName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.BankName, context);
                },
                set: function(val) {
                    setterFunctions['BankName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Type_id": {
                get: function() {
                    context["field"] = "Type_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["Type_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Type_id, context);
                },
                set: function(val) {
                    setterFunctions['Type_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
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
            "AvailableBalance": {
                get: function() {
                    context["field"] = "AvailableBalance";
                    context["metadata"] = (objectMetadata ? objectMetadata["AvailableBalance"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.AvailableBalance, context);
                },
                set: function(val) {
                    setterFunctions['AvailableBalance'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "AccountHolder": {
                get: function() {
                    context["field"] = "AccountHolder";
                    context["metadata"] = (objectMetadata ? objectMetadata["AccountHolder"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.AccountHolder, context);
                },
                set: function(val) {
                    setterFunctions['AccountHolder'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "CurrencyCode": {
                get: function() {
                    context["field"] = "CurrencyCode";
                    context["metadata"] = (objectMetadata ? objectMetadata["CurrencyCode"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.CurrencyCode, context);
                },
                set: function(val) {
                    setterFunctions['CurrencyCode'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Number": {
                get: function() {
                    context["field"] = "Number";
                    context["metadata"] = (objectMetadata ? objectMetadata["Number"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Number, context);
                },
                set: function(val) {
                    setterFunctions['Number'].call(this, val, privateState);
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
            privateState.Bank_id = value ? (value["Bank_id"] ? value["Bank_id"] : null) : null;
            privateState.id = value ? (value["id"] ? value["id"] : null) : null;
            privateState.label = value ? (value["label"] ? value["label"] : null) : null;
            privateState.username = value ? (value["username"] ? value["username"] : null) : null;
            privateState.scheme = value ? (value["scheme"] ? value["scheme"] : null) : null;
            privateState.address = value ? (value["address"] ? value["address"] : null) : null;
            privateState.AccountName = value ? (value["AccountName"] ? value["AccountName"] : null) : null;
            privateState.main_user = value ? (value["main_user"] ? value["main_user"] : null) : null;
            privateState.BankName = value ? (value["BankName"] ? value["BankName"] : null) : null;
            privateState.Type_id = value ? (value["Type_id"] ? value["Type_id"] : null) : null;
            privateState.TypeDescription = value ? (value["TypeDescription"] ? value["TypeDescription"] : null) : null;
            privateState.AvailableBalance = value ? (value["AvailableBalance"] ? value["AvailableBalance"] : null) : null;
            privateState.AccountHolder = value ? (value["AccountHolder"] ? value["AccountHolder"] : null) : null;
            privateState.CurrencyCode = value ? (value["CurrencyCode"] ? value["CurrencyCode"] : null) : null;
            privateState.Number = value ? (value["Number"] ? value["Number"] : null) : null;
        };
    }
    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(ExternalAccountsAggregation);
    //Create new class level validator object
    BaseModel.Validator.call(ExternalAccountsAggregation);
    var registerValidatorBackup = ExternalAccountsAggregation.registerValidator;
    ExternalAccountsAggregation.registerValidator = function() {
            var propName = arguments[0];
            if (!setterFunctions[propName].changed) {
                var setterBackup = setterFunctions[propName];
                setterFunctions[arguments[0]] = function() {
                    if (ExternalAccountsAggregation.isValid(this, propName, val)) {
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
    ExternalAccountsAggregation.relations = relations;
    ExternalAccountsAggregation.prototype.isValid = function() {
        return ExternalAccountsAggregation.isValid(this);
    };
    ExternalAccountsAggregation.prototype.objModelName = "ExternalAccountsAggregation";
    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    ExternalAccountsAggregation.registerProcessors = function(options, successCallback, failureCallback) {
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
        kony.mvc.util.ProcessorUtils.getMetadataForObject("AccountAggregation", "ExternalAccountsAggregation", options, metaDataSuccess, metaDataFailure);
    };
    //clone the object provided in argument.
    ExternalAccountsAggregation.clone = function(objectToClone) {
        var clonedObj = new ExternalAccountsAggregation();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };
    return ExternalAccountsAggregation;
});