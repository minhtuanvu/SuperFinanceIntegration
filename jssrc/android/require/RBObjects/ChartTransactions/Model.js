/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {
        "object": "ChartTransactions",
        "objectService": "RBObjects"
    };
    var setterFunctions = {
        closingBalanceAmount: function(val, state) {
            context["field"] = "closingBalanceAmount";
            context["metadata"] = (objectMetadata ? objectMetadata["closingBalanceAmount"] : null);
            state['closingBalanceAmount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        depositAmount: function(val, state) {
            context["field"] = "depositAmount";
            context["metadata"] = (objectMetadata ? objectMetadata["depositAmount"] : null);
            state['depositAmount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        errmsg: function(val, state) {
            context["field"] = "errmsg";
            context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
            state['errmsg'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        referenceId: function(val, state) {
            context["field"] = "referenceId";
            context["metadata"] = (objectMetadata ? objectMetadata["referenceId"] : null);
            state['referenceId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        transAmount: function(val, state) {
            context["field"] = "transAmount";
            context["metadata"] = (objectMetadata ? objectMetadata["transAmount"] : null);
            state['transAmount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        transDate: function(val, state) {
            context["field"] = "transDate";
            context["metadata"] = (objectMetadata ? objectMetadata["transDate"] : null);
            state['transDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        transDesc: function(val, state) {
            context["field"] = "transDesc";
            context["metadata"] = (objectMetadata ? objectMetadata["transDesc"] : null);
            state['transDesc'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        transType: function(val, state) {
            context["field"] = "transType";
            context["metadata"] = (objectMetadata ? objectMetadata["transType"] : null);
            state['transType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };
    //Create the Model Class
    function ChartTransactions(defaultValues) {
        var privateState = {};
        context["field"] = "closingBalanceAmount";
        context["metadata"] = (objectMetadata ? objectMetadata["closingBalanceAmount"] : null);
        privateState.closingBalanceAmount = defaultValues ? (defaultValues["closingBalanceAmount"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["closingBalanceAmount"], context) : null) : null;
        context["field"] = "depositAmount";
        context["metadata"] = (objectMetadata ? objectMetadata["depositAmount"] : null);
        privateState.depositAmount = defaultValues ? (defaultValues["depositAmount"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["depositAmount"], context) : null) : null;
        context["field"] = "errmsg";
        context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
        privateState.errmsg = defaultValues ? (defaultValues["errmsg"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["errmsg"], context) : null) : null;
        context["field"] = "referenceId";
        context["metadata"] = (objectMetadata ? objectMetadata["referenceId"] : null);
        privateState.referenceId = defaultValues ? (defaultValues["referenceId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["referenceId"], context) : null) : null;
        context["field"] = "transAmount";
        context["metadata"] = (objectMetadata ? objectMetadata["transAmount"] : null);
        privateState.transAmount = defaultValues ? (defaultValues["transAmount"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["transAmount"], context) : null) : null;
        context["field"] = "transDate";
        context["metadata"] = (objectMetadata ? objectMetadata["transDate"] : null);
        privateState.transDate = defaultValues ? (defaultValues["transDate"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["transDate"], context) : null) : null;
        context["field"] = "transDesc";
        context["metadata"] = (objectMetadata ? objectMetadata["transDesc"] : null);
        privateState.transDesc = defaultValues ? (defaultValues["transDesc"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["transDesc"], context) : null) : null;
        context["field"] = "transType";
        context["metadata"] = (objectMetadata ? objectMetadata["transType"] : null);
        privateState.transType = defaultValues ? (defaultValues["transType"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["transType"], context) : null) : null;
        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);
        //Defining Getter/Setters
        Object.defineProperties(this, {
            "closingBalanceAmount": {
                get: function() {
                    context["field"] = "closingBalanceAmount";
                    context["metadata"] = (objectMetadata ? objectMetadata["closingBalanceAmount"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.closingBalanceAmount, context);
                },
                set: function(val) {
                    setterFunctions['closingBalanceAmount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "depositAmount": {
                get: function() {
                    context["field"] = "depositAmount";
                    context["metadata"] = (objectMetadata ? objectMetadata["depositAmount"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.depositAmount, context);
                },
                set: function(val) {
                    setterFunctions['depositAmount'].call(this, val, privateState);
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
            "referenceId": {
                get: function() {
                    context["field"] = "referenceId";
                    context["metadata"] = (objectMetadata ? objectMetadata["referenceId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.referenceId, context);
                },
                set: function(val) {
                    setterFunctions['referenceId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "transAmount": {
                get: function() {
                    context["field"] = "transAmount";
                    context["metadata"] = (objectMetadata ? objectMetadata["transAmount"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.transAmount, context);
                },
                set: function(val) {
                    setterFunctions['transAmount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "transDate": {
                get: function() {
                    context["field"] = "transDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["transDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.transDate, context);
                },
                set: function(val) {
                    setterFunctions['transDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "transDesc": {
                get: function() {
                    context["field"] = "transDesc";
                    context["metadata"] = (objectMetadata ? objectMetadata["transDesc"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.transDesc, context);
                },
                set: function(val) {
                    setterFunctions['transDesc'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "transType": {
                get: function() {
                    context["field"] = "transType";
                    context["metadata"] = (objectMetadata ? objectMetadata["transType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.transType, context);
                },
                set: function(val) {
                    setterFunctions['transType'].call(this, val, privateState);
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
            privateState.closingBalanceAmount = value ? (value["closingBalanceAmount"] ? value["closingBalanceAmount"] : null) : null;
            privateState.depositAmount = value ? (value["depositAmount"] ? value["depositAmount"] : null) : null;
            privateState.errmsg = value ? (value["errmsg"] ? value["errmsg"] : null) : null;
            privateState.referenceId = value ? (value["referenceId"] ? value["referenceId"] : null) : null;
            privateState.transAmount = value ? (value["transAmount"] ? value["transAmount"] : null) : null;
            privateState.transDate = value ? (value["transDate"] ? value["transDate"] : null) : null;
            privateState.transDesc = value ? (value["transDesc"] ? value["transDesc"] : null) : null;
            privateState.transType = value ? (value["transType"] ? value["transType"] : null) : null;
        };
    }
    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(ChartTransactions);
    //Create new class level validator object
    BaseModel.Validator.call(ChartTransactions);
    var registerValidatorBackup = ChartTransactions.registerValidator;
    ChartTransactions.registerValidator = function() {
            var propName = arguments[0];
            if (!setterFunctions[propName].changed) {
                var setterBackup = setterFunctions[propName];
                setterFunctions[arguments[0]] = function() {
                    if (ChartTransactions.isValid(this, propName, val)) {
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
    ChartTransactions.relations = relations;
    ChartTransactions.prototype.isValid = function() {
        return ChartTransactions.isValid(this);
    };
    ChartTransactions.prototype.objModelName = "ChartTransactions";
    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    ChartTransactions.registerProcessors = function(options, successCallback, failureCallback) {
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
        kony.mvc.util.ProcessorUtils.getMetadataForObject("RBObjects", "ChartTransactions", options, metaDataSuccess, metaDataFailure);
    };
    //clone the object provided in argument.
    ChartTransactions.clone = function(objectToClone) {
        var clonedObj = new ChartTransactions();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };
    return ChartTransactions;
});