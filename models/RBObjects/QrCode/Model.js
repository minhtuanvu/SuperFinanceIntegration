/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "QrCode", "objectService" : "RBObjects"};

    var setterFunctions = {
        AtmId: function(val, state) {
            context["field"] = "AtmId";
            context["metadata"] = (objectMetadata ? objectMetadata["AtmId"] : null);
            state['AtmId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        id: function(val, state) {
            context["field"] = "id";
            context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
            state['id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        timestamp: function(val, state) {
            context["field"] = "timestamp";
            context["metadata"] = (objectMetadata ? objectMetadata["timestamp"] : null);
            state['timestamp'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function QrCode(defaultValues) {
        var privateState = {};
        context["field"] = "AtmId";
        context["metadata"] = (objectMetadata ? objectMetadata["AtmId"] : null);
        privateState.AtmId = defaultValues ?
            (defaultValues["AtmId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AtmId"], context) :
                null) :
            null;

        context["field"] = "id";
        context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
        privateState.id = defaultValues ?
            (defaultValues["id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["id"], context) :
                null) :
            null;

        context["field"] = "timestamp";
        context["metadata"] = (objectMetadata ? objectMetadata["timestamp"] : null);
        privateState.timestamp = defaultValues ?
            (defaultValues["timestamp"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["timestamp"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "AtmId": {
                get: function() {
                    context["field"] = "AtmId";
                    context["metadata"] = (objectMetadata ? objectMetadata["AtmId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.AtmId, context);
                },
                set: function(val) {
                    setterFunctions['AtmId'].call(this, val, privateState);
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
            "timestamp": {
                get: function() {
                    context["field"] = "timestamp";
                    context["metadata"] = (objectMetadata ? objectMetadata["timestamp"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.timestamp, context);
                },
                set: function(val) {
                    setterFunctions['timestamp'].call(this, val, privateState);
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
            privateState.AtmId = value ? (value["AtmId"] ? value["AtmId"] : null) : null;
            privateState.id = value ? (value["id"] ? value["id"] : null) : null;
            privateState.timestamp = value ? (value["timestamp"] ? value["timestamp"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(QrCode);

    //Create new class level validator object
    BaseModel.Validator.call(QrCode);

    var registerValidatorBackup = QrCode.registerValidator;

    QrCode.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(QrCode.isValid(this, propName, val)) {
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

    QrCode.relations = relations;

    QrCode.prototype.isValid = function() {
        return QrCode.isValid(this);
    };

    QrCode.prototype.objModelName = "QrCode";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    QrCode.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("RBObjects", "QrCode", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    QrCode.clone = function(objectToClone) {
        var clonedObj = new QrCode();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return QrCode;
});