/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "SelectedAccounts", "objectService" : "AccountAggregation"};

    var setterFunctions = {
        main_user: function(val, state) {
            context["field"] = "main_user";
            context["metadata"] = (objectMetadata ? objectMetadata["main_user"] : null);
            state['main_user'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        username: function(val, state) {
            context["field"] = "username";
            context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
            state['username'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        bank_id: function(val, state) {
            context["field"] = "bank_id";
            context["metadata"] = (objectMetadata ? objectMetadata["bank_id"] : null);
            state['bank_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        AccountName: function(val, state) {
            context["field"] = "AccountName";
            context["metadata"] = (objectMetadata ? objectMetadata["AccountName"] : null);
            state['AccountName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        AvailableBalance: function(val, state) {
            context["field"] = "AvailableBalance";
            context["metadata"] = (objectMetadata ? objectMetadata["AvailableBalance"] : null);
            state['AvailableBalance'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        id: function(val, state) {
            context["field"] = "id";
            context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
            state['id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        loop_count: function(val, state) {
            context["field"] = "loop_count";
            context["metadata"] = (objectMetadata ? objectMetadata["loop_count"] : null);
            state['loop_count'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Account_id: function(val, state) {
            context["field"] = "Account_id";
            context["metadata"] = (objectMetadata ? objectMetadata["Account_id"] : null);
            state['Account_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        NickName: function(val, state) {
            context["field"] = "NickName";
            context["metadata"] = (objectMetadata ? objectMetadata["NickName"] : null);
            state['NickName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Number: function(val, state) {
            context["field"] = "Number";
            context["metadata"] = (objectMetadata ? objectMetadata["Number"] : null);
            state['Number'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        CurrencyCode: function(val, state) {
            context["field"] = "CurrencyCode";
            context["metadata"] = (objectMetadata ? objectMetadata["CurrencyCode"] : null);
            state['CurrencyCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Type_id: function(val, state) {
            context["field"] = "Type_id";
            context["metadata"] = (objectMetadata ? objectMetadata["Type_id"] : null);
            state['Type_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        AccountHolder: function(val, state) {
            context["field"] = "AccountHolder";
            context["metadata"] = (objectMetadata ? objectMetadata["AccountHolder"] : null);
            state['AccountHolder'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        FavouriteStatus: function(val, state) {
            context["field"] = "FavouriteStatus";
            context["metadata"] = (objectMetadata ? objectMetadata["FavouriteStatus"] : null);
            state['FavouriteStatus'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function SelectedAccounts(defaultValues) {
        var privateState = {};
        context["field"] = "main_user";
        context["metadata"] = (objectMetadata ? objectMetadata["main_user"] : null);
        privateState.main_user = defaultValues ?
            (defaultValues["main_user"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["main_user"], context) :
                null) :
            null;

        context["field"] = "username";
        context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
        privateState.username = defaultValues ?
            (defaultValues["username"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["username"], context) :
                null) :
            null;

        context["field"] = "bank_id";
        context["metadata"] = (objectMetadata ? objectMetadata["bank_id"] : null);
        privateState.bank_id = defaultValues ?
            (defaultValues["bank_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["bank_id"], context) :
                null) :
            null;

        context["field"] = "AccountName";
        context["metadata"] = (objectMetadata ? objectMetadata["AccountName"] : null);
        privateState.AccountName = defaultValues ?
            (defaultValues["AccountName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AccountName"], context) :
                null) :
            null;

        context["field"] = "AvailableBalance";
        context["metadata"] = (objectMetadata ? objectMetadata["AvailableBalance"] : null);
        privateState.AvailableBalance = defaultValues ?
            (defaultValues["AvailableBalance"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AvailableBalance"], context) :
                null) :
            null;

        context["field"] = "id";
        context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
        privateState.id = defaultValues ?
            (defaultValues["id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["id"], context) :
                null) :
            null;

        context["field"] = "loop_count";
        context["metadata"] = (objectMetadata ? objectMetadata["loop_count"] : null);
        privateState.loop_count = defaultValues ?
            (defaultValues["loop_count"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["loop_count"], context) :
                null) :
            null;

        context["field"] = "Account_id";
        context["metadata"] = (objectMetadata ? objectMetadata["Account_id"] : null);
        privateState.Account_id = defaultValues ?
            (defaultValues["Account_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Account_id"], context) :
                null) :
            null;

        context["field"] = "NickName";
        context["metadata"] = (objectMetadata ? objectMetadata["NickName"] : null);
        privateState.NickName = defaultValues ?
            (defaultValues["NickName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["NickName"], context) :
                null) :
            null;

        context["field"] = "Number";
        context["metadata"] = (objectMetadata ? objectMetadata["Number"] : null);
        privateState.Number = defaultValues ?
            (defaultValues["Number"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Number"], context) :
                null) :
            null;

        context["field"] = "CurrencyCode";
        context["metadata"] = (objectMetadata ? objectMetadata["CurrencyCode"] : null);
        privateState.CurrencyCode = defaultValues ?
            (defaultValues["CurrencyCode"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["CurrencyCode"], context) :
                null) :
            null;

        context["field"] = "Type_id";
        context["metadata"] = (objectMetadata ? objectMetadata["Type_id"] : null);
        privateState.Type_id = defaultValues ?
            (defaultValues["Type_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Type_id"], context) :
                null) :
            null;

        context["field"] = "AccountHolder";
        context["metadata"] = (objectMetadata ? objectMetadata["AccountHolder"] : null);
        privateState.AccountHolder = defaultValues ?
            (defaultValues["AccountHolder"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AccountHolder"], context) :
                null) :
            null;

        context["field"] = "FavouriteStatus";
        context["metadata"] = (objectMetadata ? objectMetadata["FavouriteStatus"] : null);
        privateState.FavouriteStatus = defaultValues ?
            (defaultValues["FavouriteStatus"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["FavouriteStatus"], context) :
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
            "loop_count": {
                get: function() {
                    context["field"] = "loop_count";
                    context["metadata"] = (objectMetadata ? objectMetadata["loop_count"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.loop_count, context);
                },
                set: function(val) {
                    setterFunctions['loop_count'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Account_id": {
                get: function() {
                    context["field"] = "Account_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["Account_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Account_id, context);
                },
                set: function(val) {
                    setterFunctions['Account_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "NickName": {
                get: function() {
                    context["field"] = "NickName";
                    context["metadata"] = (objectMetadata ? objectMetadata["NickName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.NickName, context);
                },
                set: function(val) {
                    setterFunctions['NickName'].call(this, val, privateState);
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
            "FavouriteStatus": {
                get: function() {
                    context["field"] = "FavouriteStatus";
                    context["metadata"] = (objectMetadata ? objectMetadata["FavouriteStatus"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.FavouriteStatus, context);
                },
                set: function(val) {
                    setterFunctions['FavouriteStatus'].call(this, val, privateState);
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
            privateState.username = value ? (value["username"] ? value["username"] : null) : null;
            privateState.bank_id = value ? (value["bank_id"] ? value["bank_id"] : null) : null;
            privateState.AccountName = value ? (value["AccountName"] ? value["AccountName"] : null) : null;
            privateState.AvailableBalance = value ? (value["AvailableBalance"] ? value["AvailableBalance"] : null) : null;
            privateState.id = value ? (value["id"] ? value["id"] : null) : null;
            privateState.loop_count = value ? (value["loop_count"] ? value["loop_count"] : null) : null;
            privateState.Account_id = value ? (value["Account_id"] ? value["Account_id"] : null) : null;
            privateState.NickName = value ? (value["NickName"] ? value["NickName"] : null) : null;
            privateState.Number = value ? (value["Number"] ? value["Number"] : null) : null;
            privateState.CurrencyCode = value ? (value["CurrencyCode"] ? value["CurrencyCode"] : null) : null;
            privateState.Type_id = value ? (value["Type_id"] ? value["Type_id"] : null) : null;
            privateState.AccountHolder = value ? (value["AccountHolder"] ? value["AccountHolder"] : null) : null;
            privateState.FavouriteStatus = value ? (value["FavouriteStatus"] ? value["FavouriteStatus"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(SelectedAccounts);

    //Create new class level validator object
    BaseModel.Validator.call(SelectedAccounts);

    var registerValidatorBackup = SelectedAccounts.registerValidator;

    SelectedAccounts.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(SelectedAccounts.isValid(this, propName, val)) {
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

    SelectedAccounts.relations = relations;

    SelectedAccounts.prototype.isValid = function() {
        return SelectedAccounts.isValid(this);
    };

    SelectedAccounts.prototype.objModelName = "SelectedAccounts";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    SelectedAccounts.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("AccountAggregation", "SelectedAccounts", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    SelectedAccounts.clone = function(objectToClone) {
        var clonedObj = new SelectedAccounts();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return SelectedAccounts;
});