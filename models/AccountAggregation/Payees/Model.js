/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "Payees", "objectService" : "AccountAggregation"};

    var setterFunctions = {
        counterparty_id: function(val, state) {
            context["field"] = "counterparty_id";
            context["metadata"] = (objectMetadata ? objectMetadata["counterparty_id"] : null);
            state['counterparty_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        created_by_user_id: function(val, state) {
            context["field"] = "created_by_user_id";
            context["metadata"] = (objectMetadata ? objectMetadata["created_by_user_id"] : null);
            state['created_by_user_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        is_beneficiary: function(val, state) {
            context["field"] = "is_beneficiary";
            context["metadata"] = (objectMetadata ? objectMetadata["is_beneficiary"] : null);
            state['is_beneficiary'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        name: function(val, state) {
            context["field"] = "name";
            context["metadata"] = (objectMetadata ? objectMetadata["name"] : null);
            state['name'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        other_account_routing_address: function(val, state) {
            context["field"] = "other_account_routing_address";
            context["metadata"] = (objectMetadata ? objectMetadata["other_account_routing_address"] : null);
            state['other_account_routing_address'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        other_account_routing_scheme: function(val, state) {
            context["field"] = "other_account_routing_scheme";
            context["metadata"] = (objectMetadata ? objectMetadata["other_account_routing_scheme"] : null);
            state['other_account_routing_scheme'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        other_bank_routing_address: function(val, state) {
            context["field"] = "other_bank_routing_address";
            context["metadata"] = (objectMetadata ? objectMetadata["other_bank_routing_address"] : null);
            state['other_bank_routing_address'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        other_bank_routing_scheme: function(val, state) {
            context["field"] = "other_bank_routing_scheme";
            context["metadata"] = (objectMetadata ? objectMetadata["other_bank_routing_scheme"] : null);
            state['other_bank_routing_scheme'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        other_branch_routing_address: function(val, state) {
            context["field"] = "other_branch_routing_address";
            context["metadata"] = (objectMetadata ? objectMetadata["other_branch_routing_address"] : null);
            state['other_branch_routing_address'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        other_branch_routing_scheme: function(val, state) {
            context["field"] = "other_branch_routing_scheme";
            context["metadata"] = (objectMetadata ? objectMetadata["other_branch_routing_scheme"] : null);
            state['other_branch_routing_scheme'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        this_account_id: function(val, state) {
            context["field"] = "this_account_id";
            context["metadata"] = (objectMetadata ? objectMetadata["this_account_id"] : null);
            state['this_account_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        this_bank_id: function(val, state) {
            context["field"] = "this_bank_id";
            context["metadata"] = (objectMetadata ? objectMetadata["this_bank_id"] : null);
            state['this_bank_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        this_view_id: function(val, state) {
            context["field"] = "this_view_id";
            context["metadata"] = (objectMetadata ? objectMetadata["this_view_id"] : null);
            state['this_view_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function Payees(defaultValues) {
        var privateState = {};
        context["field"] = "counterparty_id";
        context["metadata"] = (objectMetadata ? objectMetadata["counterparty_id"] : null);
        privateState.counterparty_id = defaultValues ?
            (defaultValues["counterparty_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["counterparty_id"], context) :
                null) :
            null;

        context["field"] = "created_by_user_id";
        context["metadata"] = (objectMetadata ? objectMetadata["created_by_user_id"] : null);
        privateState.created_by_user_id = defaultValues ?
            (defaultValues["created_by_user_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["created_by_user_id"], context) :
                null) :
            null;

        context["field"] = "is_beneficiary";
        context["metadata"] = (objectMetadata ? objectMetadata["is_beneficiary"] : null);
        privateState.is_beneficiary = defaultValues ?
            (defaultValues["is_beneficiary"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["is_beneficiary"], context) :
                null) :
            null;

        context["field"] = "name";
        context["metadata"] = (objectMetadata ? objectMetadata["name"] : null);
        privateState.name = defaultValues ?
            (defaultValues["name"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["name"], context) :
                null) :
            null;

        context["field"] = "other_account_routing_address";
        context["metadata"] = (objectMetadata ? objectMetadata["other_account_routing_address"] : null);
        privateState.other_account_routing_address = defaultValues ?
            (defaultValues["other_account_routing_address"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["other_account_routing_address"], context) :
                null) :
            null;

        context["field"] = "other_account_routing_scheme";
        context["metadata"] = (objectMetadata ? objectMetadata["other_account_routing_scheme"] : null);
        privateState.other_account_routing_scheme = defaultValues ?
            (defaultValues["other_account_routing_scheme"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["other_account_routing_scheme"], context) :
                null) :
            null;

        context["field"] = "other_bank_routing_address";
        context["metadata"] = (objectMetadata ? objectMetadata["other_bank_routing_address"] : null);
        privateState.other_bank_routing_address = defaultValues ?
            (defaultValues["other_bank_routing_address"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["other_bank_routing_address"], context) :
                null) :
            null;

        context["field"] = "other_bank_routing_scheme";
        context["metadata"] = (objectMetadata ? objectMetadata["other_bank_routing_scheme"] : null);
        privateState.other_bank_routing_scheme = defaultValues ?
            (defaultValues["other_bank_routing_scheme"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["other_bank_routing_scheme"], context) :
                null) :
            null;

        context["field"] = "other_branch_routing_address";
        context["metadata"] = (objectMetadata ? objectMetadata["other_branch_routing_address"] : null);
        privateState.other_branch_routing_address = defaultValues ?
            (defaultValues["other_branch_routing_address"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["other_branch_routing_address"], context) :
                null) :
            null;

        context["field"] = "other_branch_routing_scheme";
        context["metadata"] = (objectMetadata ? objectMetadata["other_branch_routing_scheme"] : null);
        privateState.other_branch_routing_scheme = defaultValues ?
            (defaultValues["other_branch_routing_scheme"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["other_branch_routing_scheme"], context) :
                null) :
            null;

        context["field"] = "this_account_id";
        context["metadata"] = (objectMetadata ? objectMetadata["this_account_id"] : null);
        privateState.this_account_id = defaultValues ?
            (defaultValues["this_account_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["this_account_id"], context) :
                null) :
            null;

        context["field"] = "this_bank_id";
        context["metadata"] = (objectMetadata ? objectMetadata["this_bank_id"] : null);
        privateState.this_bank_id = defaultValues ?
            (defaultValues["this_bank_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["this_bank_id"], context) :
                null) :
            null;

        context["field"] = "this_view_id";
        context["metadata"] = (objectMetadata ? objectMetadata["this_view_id"] : null);
        privateState.this_view_id = defaultValues ?
            (defaultValues["this_view_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["this_view_id"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "counterparty_id": {
                get: function() {
                    context["field"] = "counterparty_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["counterparty_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.counterparty_id, context);
                },
                set: function(val) {
                    setterFunctions['counterparty_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "created_by_user_id": {
                get: function() {
                    context["field"] = "created_by_user_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["created_by_user_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.created_by_user_id, context);
                },
                set: function(val) {
                    setterFunctions['created_by_user_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "is_beneficiary": {
                get: function() {
                    context["field"] = "is_beneficiary";
                    context["metadata"] = (objectMetadata ? objectMetadata["is_beneficiary"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.is_beneficiary, context);
                },
                set: function(val) {
                    setterFunctions['is_beneficiary'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "name": {
                get: function() {
                    context["field"] = "name";
                    context["metadata"] = (objectMetadata ? objectMetadata["name"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.name, context);
                },
                set: function(val) {
                    setterFunctions['name'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "other_account_routing_address": {
                get: function() {
                    context["field"] = "other_account_routing_address";
                    context["metadata"] = (objectMetadata ? objectMetadata["other_account_routing_address"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.other_account_routing_address, context);
                },
                set: function(val) {
                    setterFunctions['other_account_routing_address'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "other_account_routing_scheme": {
                get: function() {
                    context["field"] = "other_account_routing_scheme";
                    context["metadata"] = (objectMetadata ? objectMetadata["other_account_routing_scheme"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.other_account_routing_scheme, context);
                },
                set: function(val) {
                    setterFunctions['other_account_routing_scheme'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "other_bank_routing_address": {
                get: function() {
                    context["field"] = "other_bank_routing_address";
                    context["metadata"] = (objectMetadata ? objectMetadata["other_bank_routing_address"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.other_bank_routing_address, context);
                },
                set: function(val) {
                    setterFunctions['other_bank_routing_address'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "other_bank_routing_scheme": {
                get: function() {
                    context["field"] = "other_bank_routing_scheme";
                    context["metadata"] = (objectMetadata ? objectMetadata["other_bank_routing_scheme"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.other_bank_routing_scheme, context);
                },
                set: function(val) {
                    setterFunctions['other_bank_routing_scheme'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "other_branch_routing_address": {
                get: function() {
                    context["field"] = "other_branch_routing_address";
                    context["metadata"] = (objectMetadata ? objectMetadata["other_branch_routing_address"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.other_branch_routing_address, context);
                },
                set: function(val) {
                    setterFunctions['other_branch_routing_address'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "other_branch_routing_scheme": {
                get: function() {
                    context["field"] = "other_branch_routing_scheme";
                    context["metadata"] = (objectMetadata ? objectMetadata["other_branch_routing_scheme"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.other_branch_routing_scheme, context);
                },
                set: function(val) {
                    setterFunctions['other_branch_routing_scheme'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "this_account_id": {
                get: function() {
                    context["field"] = "this_account_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["this_account_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.this_account_id, context);
                },
                set: function(val) {
                    setterFunctions['this_account_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "this_bank_id": {
                get: function() {
                    context["field"] = "this_bank_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["this_bank_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.this_bank_id, context);
                },
                set: function(val) {
                    setterFunctions['this_bank_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "this_view_id": {
                get: function() {
                    context["field"] = "this_view_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["this_view_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.this_view_id, context);
                },
                set: function(val) {
                    setterFunctions['this_view_id'].call(this, val, privateState);
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
            privateState.counterparty_id = value ? (value["counterparty_id"] ? value["counterparty_id"] : null) : null;
            privateState.created_by_user_id = value ? (value["created_by_user_id"] ? value["created_by_user_id"] : null) : null;
            privateState.is_beneficiary = value ? (value["is_beneficiary"] ? value["is_beneficiary"] : null) : null;
            privateState.name = value ? (value["name"] ? value["name"] : null) : null;
            privateState.other_account_routing_address = value ? (value["other_account_routing_address"] ? value["other_account_routing_address"] : null) : null;
            privateState.other_account_routing_scheme = value ? (value["other_account_routing_scheme"] ? value["other_account_routing_scheme"] : null) : null;
            privateState.other_bank_routing_address = value ? (value["other_bank_routing_address"] ? value["other_bank_routing_address"] : null) : null;
            privateState.other_bank_routing_scheme = value ? (value["other_bank_routing_scheme"] ? value["other_bank_routing_scheme"] : null) : null;
            privateState.other_branch_routing_address = value ? (value["other_branch_routing_address"] ? value["other_branch_routing_address"] : null) : null;
            privateState.other_branch_routing_scheme = value ? (value["other_branch_routing_scheme"] ? value["other_branch_routing_scheme"] : null) : null;
            privateState.this_account_id = value ? (value["this_account_id"] ? value["this_account_id"] : null) : null;
            privateState.this_bank_id = value ? (value["this_bank_id"] ? value["this_bank_id"] : null) : null;
            privateState.this_view_id = value ? (value["this_view_id"] ? value["this_view_id"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(Payees);

    //Create new class level validator object
    BaseModel.Validator.call(Payees);

    var registerValidatorBackup = Payees.registerValidator;

    Payees.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(Payees.isValid(this, propName, val)) {
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
    //For Operation 'localget' with service id 'readExternalAccountsViewjava7313'
     Payees.localget = function(params, onCompletion){
        return Payees.customVerb('localget', params, onCompletion);
     };

    var relations = [];

    Payees.relations = relations;

    Payees.prototype.isValid = function() {
        return Payees.isValid(this);
    };

    Payees.prototype.objModelName = "Payees";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    Payees.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("AccountAggregation", "Payees", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    Payees.clone = function(objectToClone) {
        var clonedObj = new Payees();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return Payees;
});