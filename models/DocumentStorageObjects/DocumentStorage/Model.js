/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "DocumentStorage", "objectService" : "DocumentStorageObjects"};

    var setterFunctions = {
        id: function(val, state) {
            context["field"] = "id";
            context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
            state['id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        documentId: function(val, state) {
            context["field"] = "documentId";
            context["metadata"] = (objectMetadata ? objectMetadata["documentId"] : null);
            state['documentId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        documentName: function(val, state) {
            context["field"] = "documentName";
            context["metadata"] = (objectMetadata ? objectMetadata["documentName"] : null);
            state['documentName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        content: function(val, state) {
            context["field"] = "content";
            context["metadata"] = (objectMetadata ? objectMetadata["content"] : null);
            state['content'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        version: function(val, state) {
            context["field"] = "version";
            context["metadata"] = (objectMetadata ? objectMetadata["version"] : null);
            state['version'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        userId: function(val, state) {
            context["field"] = "userId";
            context["metadata"] = (objectMetadata ? objectMetadata["userId"] : null);
            state['userId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        referenceId: function(val, state) {
            context["field"] = "referenceId";
            context["metadata"] = (objectMetadata ? objectMetadata["referenceId"] : null);
            state['referenceId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        fileInfo: function(val, state) {
            context["field"] = "fileInfo";
            context["metadata"] = (objectMetadata ? objectMetadata["fileInfo"] : null);
            state['fileInfo'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        category: function(val, state) {
            context["field"] = "category";
            context["metadata"] = (objectMetadata ? objectMetadata["category"] : null);
            state['category'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        authorization: function(val, state) {
            context["field"] = "authorization";
            context["metadata"] = (objectMetadata ? objectMetadata["authorization"] : null);
            state['authorization'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        documentGroup: function(val, state) {
            context["field"] = "documentGroup";
            context["metadata"] = (objectMetadata ? objectMetadata["documentGroup"] : null);
            state['documentGroup'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        ownerSystemId: function(val, state) {
            context["field"] = "ownerSystemId";
            context["metadata"] = (objectMetadata ? objectMetadata["ownerSystemId"] : null);
            state['ownerSystemId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function DocumentStorage(defaultValues) {
        var privateState = {};
        context["field"] = "id";
        context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
        privateState.id = defaultValues ?
            (defaultValues["id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["id"], context) :
                null) :
            null;

        context["field"] = "documentId";
        context["metadata"] = (objectMetadata ? objectMetadata["documentId"] : null);
        privateState.documentId = defaultValues ?
            (defaultValues["documentId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["documentId"], context) :
                null) :
            null;

        context["field"] = "documentName";
        context["metadata"] = (objectMetadata ? objectMetadata["documentName"] : null);
        privateState.documentName = defaultValues ?
            (defaultValues["documentName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["documentName"], context) :
                null) :
            null;

        context["field"] = "content";
        context["metadata"] = (objectMetadata ? objectMetadata["content"] : null);
        privateState.content = defaultValues ?
            (defaultValues["content"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["content"], context) :
                null) :
            null;

        context["field"] = "version";
        context["metadata"] = (objectMetadata ? objectMetadata["version"] : null);
        privateState.version = defaultValues ?
            (defaultValues["version"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["version"], context) :
                null) :
            null;

        context["field"] = "userId";
        context["metadata"] = (objectMetadata ? objectMetadata["userId"] : null);
        privateState.userId = defaultValues ?
            (defaultValues["userId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["userId"], context) :
                null) :
            null;

        context["field"] = "referenceId";
        context["metadata"] = (objectMetadata ? objectMetadata["referenceId"] : null);
        privateState.referenceId = defaultValues ?
            (defaultValues["referenceId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["referenceId"], context) :
                null) :
            null;

        context["field"] = "fileInfo";
        context["metadata"] = (objectMetadata ? objectMetadata["fileInfo"] : null);
        privateState.fileInfo = defaultValues ?
            (defaultValues["fileInfo"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["fileInfo"], context) :
                null) :
            null;

        context["field"] = "category";
        context["metadata"] = (objectMetadata ? objectMetadata["category"] : null);
        privateState.category = defaultValues ?
            (defaultValues["category"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["category"], context) :
                null) :
            null;

        context["field"] = "authorization";
        context["metadata"] = (objectMetadata ? objectMetadata["authorization"] : null);
        privateState.authorization = defaultValues ?
            (defaultValues["authorization"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["authorization"], context) :
                null) :
            null;

        context["field"] = "documentGroup";
        context["metadata"] = (objectMetadata ? objectMetadata["documentGroup"] : null);
        privateState.documentGroup = defaultValues ?
            (defaultValues["documentGroup"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["documentGroup"], context) :
                null) :
            null;

        context["field"] = "ownerSystemId";
        context["metadata"] = (objectMetadata ? objectMetadata["ownerSystemId"] : null);
        privateState.ownerSystemId = defaultValues ?
            (defaultValues["ownerSystemId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ownerSystemId"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
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
            "documentId": {
                get: function() {
                    context["field"] = "documentId";
                    context["metadata"] = (objectMetadata ? objectMetadata["documentId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.documentId, context);
                },
                set: function(val) {
                    setterFunctions['documentId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "documentName": {
                get: function() {
                    context["field"] = "documentName";
                    context["metadata"] = (objectMetadata ? objectMetadata["documentName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.documentName, context);
                },
                set: function(val) {
                    setterFunctions['documentName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "content": {
                get: function() {
                    context["field"] = "content";
                    context["metadata"] = (objectMetadata ? objectMetadata["content"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.content, context);
                },
                set: function(val) {
                    setterFunctions['content'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "version": {
                get: function() {
                    context["field"] = "version";
                    context["metadata"] = (objectMetadata ? objectMetadata["version"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.version, context);
                },
                set: function(val) {
                    setterFunctions['version'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "userId": {
                get: function() {
                    context["field"] = "userId";
                    context["metadata"] = (objectMetadata ? objectMetadata["userId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.userId, context);
                },
                set: function(val) {
                    setterFunctions['userId'].call(this, val, privateState);
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
            "fileInfo": {
                get: function() {
                    context["field"] = "fileInfo";
                    context["metadata"] = (objectMetadata ? objectMetadata["fileInfo"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.fileInfo, context);
                },
                set: function(val) {
                    setterFunctions['fileInfo'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "category": {
                get: function() {
                    context["field"] = "category";
                    context["metadata"] = (objectMetadata ? objectMetadata["category"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.category, context);
                },
                set: function(val) {
                    setterFunctions['category'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "authorization": {
                get: function() {
                    context["field"] = "authorization";
                    context["metadata"] = (objectMetadata ? objectMetadata["authorization"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.authorization, context);
                },
                set: function(val) {
                    setterFunctions['authorization'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "documentGroup": {
                get: function() {
                    context["field"] = "documentGroup";
                    context["metadata"] = (objectMetadata ? objectMetadata["documentGroup"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.documentGroup, context);
                },
                set: function(val) {
                    setterFunctions['documentGroup'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "ownerSystemId": {
                get: function() {
                    context["field"] = "ownerSystemId";
                    context["metadata"] = (objectMetadata ? objectMetadata["ownerSystemId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ownerSystemId, context);
                },
                set: function(val) {
                    setterFunctions['ownerSystemId'].call(this, val, privateState);
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
            privateState.id = value ? (value["id"] ? value["id"] : null) : null;
            privateState.documentId = value ? (value["documentId"] ? value["documentId"] : null) : null;
            privateState.documentName = value ? (value["documentName"] ? value["documentName"] : null) : null;
            privateState.content = value ? (value["content"] ? value["content"] : null) : null;
            privateState.version = value ? (value["version"] ? value["version"] : null) : null;
            privateState.userId = value ? (value["userId"] ? value["userId"] : null) : null;
            privateState.referenceId = value ? (value["referenceId"] ? value["referenceId"] : null) : null;
            privateState.fileInfo = value ? (value["fileInfo"] ? value["fileInfo"] : null) : null;
            privateState.category = value ? (value["category"] ? value["category"] : null) : null;
            privateState.authorization = value ? (value["authorization"] ? value["authorization"] : null) : null;
            privateState.documentGroup = value ? (value["documentGroup"] ? value["documentGroup"] : null) : null;
            privateState.ownerSystemId = value ? (value["ownerSystemId"] ? value["ownerSystemId"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(DocumentStorage);

    //Create new class level validator object
    BaseModel.Validator.call(DocumentStorage);

    var registerValidatorBackup = DocumentStorage.registerValidator;

    DocumentStorage.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(DocumentStorage.isValid(this, propName, val)) {
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
    //For Operation 'searchDocument' with service id 'searchDocument2925'
     DocumentStorage.searchDocument = function(params, onCompletion){
        return DocumentStorage.customVerb('searchDocument', params, onCompletion);
     };

    //For Operation 'downloadDocument' with service id 'downloadDocument7685'
     DocumentStorage.downloadDocument = function(params, onCompletion){
        return DocumentStorage.customVerb('downloadDocument', params, onCompletion);
     };

    //For Operation 'deleteDocument' with service id 'deleteDocument5699'
     DocumentStorage.deleteDocument = function(params, onCompletion){
        return DocumentStorage.customVerb('deleteDocument', params, onCompletion);
     };

    //For Operation 'uploadDocument' with service id 'uploadDocument1194'
     DocumentStorage.uploadDocument = function(params, onCompletion){
        return DocumentStorage.customVerb('uploadDocument', params, onCompletion);
     };

    var relations = [];

    DocumentStorage.relations = relations;

    DocumentStorage.prototype.isValid = function() {
        return DocumentStorage.isValid(this);
    };

    DocumentStorage.prototype.objModelName = "DocumentStorage";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    DocumentStorage.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("DocumentStorageObjects", "DocumentStorage", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    DocumentStorage.clone = function(objectToClone) {
        var clonedObj = new DocumentStorage();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return DocumentStorage;
});