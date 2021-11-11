/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "SingleAccountDetails", "objectService" : "AccountAggregation"};

    var setterFunctions = {
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
        username: function(val, state) {
            context["field"] = "username";
            context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
            state['username'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Bank_id: function(val, state) {
            context["field"] = "Bank_id";
            context["metadata"] = (objectMetadata ? objectMetadata["Bank_id"] : null);
            state['Bank_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        CurrencyCode: function(val, state) {
            context["field"] = "CurrencyCode";
            context["metadata"] = (objectMetadata ? objectMetadata["CurrencyCode"] : null);
            state['CurrencyCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        AvailableBalance: function(val, state) {
            context["field"] = "AvailableBalance";
            context["metadata"] = (objectMetadata ? objectMetadata["AvailableBalance"] : null);
            state['AvailableBalance'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Scheme: function(val, state) {
            context["field"] = "Scheme";
            context["metadata"] = (objectMetadata ? objectMetadata["Scheme"] : null);
            state['Scheme'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Number: function(val, state) {
            context["field"] = "Number";
            context["metadata"] = (objectMetadata ? objectMetadata["Number"] : null);
            state['Number'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Address: function(val, state) {
            context["field"] = "Address";
            context["metadata"] = (objectMetadata ? objectMetadata["Address"] : null);
            state['Address'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        AccountHolder: function(val, state) {
            context["field"] = "AccountHolder";
            context["metadata"] = (objectMetadata ? objectMetadata["AccountHolder"] : null);
            state['AccountHolder'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        BankName: function(val, state) {
            context["field"] = "BankName";
            context["metadata"] = (objectMetadata ? objectMetadata["BankName"] : null);
            state['BankName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        TypeDescription: function(val, state) {
            context["field"] = "TypeDescription";
            context["metadata"] = (objectMetadata ? objectMetadata["TypeDescription"] : null);
            state['TypeDescription'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Type_id: function(val, state) {
            context["field"] = "Type_id";
            context["metadata"] = (objectMetadata ? objectMetadata["Type_id"] : null);
            state['Type_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        BankLogo: function(val, state) {
            context["field"] = "BankLogo";
            context["metadata"] = (objectMetadata ? objectMetadata["BankLogo"] : null);
            state['BankLogo'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        NickName: function(val, state) {
            context["field"] = "NickName";
            context["metadata"] = (objectMetadata ? objectMetadata["NickName"] : null);
            state['NickName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Account_id: function(val, state) {
            context["field"] = "Account_id";
            context["metadata"] = (objectMetadata ? objectMetadata["Account_id"] : null);
            state['Account_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        FavouriteStatus: function(val, state) {
            context["field"] = "FavouriteStatus";
            context["metadata"] = (objectMetadata ? objectMetadata["FavouriteStatus"] : null);
            state['FavouriteStatus'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function SingleAccountDetails(defaultValues) {
        var privateState = {};
        context["field"] = "AccountName";
        context["metadata"] = (objectMetadata ? objectMetadata["AccountName"] : null);
        privateState.AccountName = defaultValues ?
            (defaultValues["AccountName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AccountName"], context) :
                null) :
            null;

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

        context["field"] = "Bank_id";
        context["metadata"] = (objectMetadata ? objectMetadata["Bank_id"] : null);
        privateState.Bank_id = defaultValues ?
            (defaultValues["Bank_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Bank_id"], context) :
                null) :
            null;

        context["field"] = "CurrencyCode";
        context["metadata"] = (objectMetadata ? objectMetadata["CurrencyCode"] : null);
        privateState.CurrencyCode = defaultValues ?
            (defaultValues["CurrencyCode"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["CurrencyCode"], context) :
                null) :
            null;

        context["field"] = "AvailableBalance";
        context["metadata"] = (objectMetadata ? objectMetadata["AvailableBalance"] : null);
        privateState.AvailableBalance = defaultValues ?
            (defaultValues["AvailableBalance"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AvailableBalance"], context) :
                null) :
            null;

        context["field"] = "Scheme";
        context["metadata"] = (objectMetadata ? objectMetadata["Scheme"] : null);
        privateState.Scheme = defaultValues ?
            (defaultValues["Scheme"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Scheme"], context) :
                null) :
            null;

        context["field"] = "Number";
        context["metadata"] = (objectMetadata ? objectMetadata["Number"] : null);
        privateState.Number = defaultValues ?
            (defaultValues["Number"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Number"], context) :
                null) :
            null;

        context["field"] = "Address";
        context["metadata"] = (objectMetadata ? objectMetadata["Address"] : null);
        privateState.Address = defaultValues ?
            (defaultValues["Address"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Address"], context) :
                null) :
            null;

        context["field"] = "AccountHolder";
        context["metadata"] = (objectMetadata ? objectMetadata["AccountHolder"] : null);
        privateState.AccountHolder = defaultValues ?
            (defaultValues["AccountHolder"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AccountHolder"], context) :
                null) :
            null;

        context["field"] = "BankName";
        context["metadata"] = (objectMetadata ? objectMetadata["BankName"] : null);
        privateState.BankName = defaultValues ?
            (defaultValues["BankName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["BankName"], context) :
                null) :
            null;

        context["field"] = "TypeDescription";
        context["metadata"] = (objectMetadata ? objectMetadata["TypeDescription"] : null);
        privateState.TypeDescription = defaultValues ?
            (defaultValues["TypeDescription"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["TypeDescription"], context) :
                null) :
            null;

        context["field"] = "Type_id";
        context["metadata"] = (objectMetadata ? objectMetadata["Type_id"] : null);
        privateState.Type_id = defaultValues ?
            (defaultValues["Type_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Type_id"], context) :
                null) :
            null;

        context["field"] = "BankLogo";
        context["metadata"] = (objectMetadata ? objectMetadata["BankLogo"] : null);
        privateState.BankLogo = defaultValues ?
            (defaultValues["BankLogo"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["BankLogo"], context) :
                null) :
            null;

        context["field"] = "NickName";
        context["metadata"] = (objectMetadata ? objectMetadata["NickName"] : null);
        privateState.NickName = defaultValues ?
            (defaultValues["NickName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["NickName"], context) :
                null) :
            null;

        context["field"] = "Account_id";
        context["metadata"] = (objectMetadata ? objectMetadata["Account_id"] : null);
        privateState.Account_id = defaultValues ?
            (defaultValues["Account_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Account_id"], context) :
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
            "Scheme": {
                get: function() {
                    context["field"] = "Scheme";
                    context["metadata"] = (objectMetadata ? objectMetadata["Scheme"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Scheme, context);
                },
                set: function(val) {
                    setterFunctions['Scheme'].call(this, val, privateState);
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
            "Address": {
                get: function() {
                    context["field"] = "Address";
                    context["metadata"] = (objectMetadata ? objectMetadata["Address"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Address, context);
                },
                set: function(val) {
                    setterFunctions['Address'].call(this, val, privateState);
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
            "BankLogo": {
                get: function() {
                    context["field"] = "BankLogo";
                    context["metadata"] = (objectMetadata ? objectMetadata["BankLogo"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.BankLogo, context);
                },
                set: function(val) {
                    setterFunctions['BankLogo'].call(this, val, privateState);
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
            privateState.AccountName = value ? (value["AccountName"] ? value["AccountName"] : null) : null;
            privateState.main_user = value ? (value["main_user"] ? value["main_user"] : null) : null;
            privateState.username = value ? (value["username"] ? value["username"] : null) : null;
            privateState.Bank_id = value ? (value["Bank_id"] ? value["Bank_id"] : null) : null;
            privateState.CurrencyCode = value ? (value["CurrencyCode"] ? value["CurrencyCode"] : null) : null;
            privateState.AvailableBalance = value ? (value["AvailableBalance"] ? value["AvailableBalance"] : null) : null;
            privateState.Scheme = value ? (value["Scheme"] ? value["Scheme"] : null) : null;
            privateState.Number = value ? (value["Number"] ? value["Number"] : null) : null;
            privateState.Address = value ? (value["Address"] ? value["Address"] : null) : null;
            privateState.AccountHolder = value ? (value["AccountHolder"] ? value["AccountHolder"] : null) : null;
            privateState.BankName = value ? (value["BankName"] ? value["BankName"] : null) : null;
            privateState.TypeDescription = value ? (value["TypeDescription"] ? value["TypeDescription"] : null) : null;
            privateState.Type_id = value ? (value["Type_id"] ? value["Type_id"] : null) : null;
            privateState.BankLogo = value ? (value["BankLogo"] ? value["BankLogo"] : null) : null;
            privateState.NickName = value ? (value["NickName"] ? value["NickName"] : null) : null;
            privateState.Account_id = value ? (value["Account_id"] ? value["Account_id"] : null) : null;
            privateState.FavouriteStatus = value ? (value["FavouriteStatus"] ? value["FavouriteStatus"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(SingleAccountDetails);

    //Create new class level validator object
    BaseModel.Validator.call(SingleAccountDetails);

    var registerValidatorBackup = SingleAccountDetails.registerValidator;

    SingleAccountDetails.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(SingleAccountDetails.isValid(this, propName, val)) {
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

    SingleAccountDetails.relations = relations;

    SingleAccountDetails.prototype.isValid = function() {
        return SingleAccountDetails.isValid(this);
    };

    SingleAccountDetails.prototype.objModelName = "SingleAccountDetails";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    SingleAccountDetails.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("AccountAggregation", "SingleAccountDetails", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    SingleAccountDetails.clone = function(objectToClone) {
        var clonedObj = new SingleAccountDetails();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return SingleAccountDetails;
});