/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "DirectMarketing", "objectService" : "RBObjects"};

    var setterFunctions = {
        adType: function(val, state) {
            context["field"] = "adType";
            context["metadata"] = (objectMetadata ? objectMetadata["adType"] : null);
            state['adType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        buttonType: function(val, state) {
            context["field"] = "buttonType";
            context["metadata"] = (objectMetadata ? objectMetadata["buttonType"] : null);
            state['buttonType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        colour: function(val, state) {
            context["field"] = "colour";
            context["metadata"] = (objectMetadata ? objectMetadata["colour"] : null);
            state['colour'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        description: function(val, state) {
            context["field"] = "description";
            context["metadata"] = (objectMetadata ? objectMetadata["description"] : null);
            state['description'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        id: function(val, state) {
            context["field"] = "id";
            context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
            state['id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        imageURL: function(val, state) {
            context["field"] = "imageURL";
            context["metadata"] = (objectMetadata ? objectMetadata["imageURL"] : null);
            state['imageURL'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        model: function(val, state) {
            context["field"] = "model";
            context["metadata"] = (objectMetadata ? objectMetadata["model"] : null);
            state['model'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        navigationId: function(val, state) {
            context["field"] = "navigationId";
            context["metadata"] = (objectMetadata ? objectMetadata["navigationId"] : null);
            state['navigationId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        navigationType: function(val, state) {
            context["field"] = "navigationType";
            context["metadata"] = (objectMetadata ? objectMetadata["navigationType"] : null);
            state['navigationType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        navigationURL: function(val, state) {
            context["field"] = "navigationURL";
            context["metadata"] = (objectMetadata ? objectMetadata["navigationURL"] : null);
            state['navigationURL'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        result: function(val, state) {
            context["field"] = "result";
            context["metadata"] = (objectMetadata ? objectMetadata["result"] : null);
            state['result'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        sessionId: function(val, state) {
            context["field"] = "sessionId";
            context["metadata"] = (objectMetadata ? objectMetadata["sessionId"] : null);
            state['sessionId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        text: function(val, state) {
            context["field"] = "text";
            context["metadata"] = (objectMetadata ? objectMetadata["text"] : null);
            state['text'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        visible: function(val, state) {
            context["field"] = "visible";
            context["metadata"] = (objectMetadata ? objectMetadata["visible"] : null);
            state['visible'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        flowposition: function(val, state) {
            context["field"] = "flowposition";
            context["metadata"] = (objectMetadata ? objectMetadata["flowposition"] : null);
            state['flowposition'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        navId: function(val, state) {
            context["field"] = "navId";
            context["metadata"] = (objectMetadata ? objectMetadata["navId"] : null);
            state['navId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function DirectMarketing(defaultValues) {
        var privateState = {};
        context["field"] = "adType";
        context["metadata"] = (objectMetadata ? objectMetadata["adType"] : null);
        privateState.adType = defaultValues ?
            (defaultValues["adType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["adType"], context) :
                null) :
            null;

        context["field"] = "buttonType";
        context["metadata"] = (objectMetadata ? objectMetadata["buttonType"] : null);
        privateState.buttonType = defaultValues ?
            (defaultValues["buttonType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["buttonType"], context) :
                null) :
            null;

        context["field"] = "colour";
        context["metadata"] = (objectMetadata ? objectMetadata["colour"] : null);
        privateState.colour = defaultValues ?
            (defaultValues["colour"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["colour"], context) :
                null) :
            null;

        context["field"] = "description";
        context["metadata"] = (objectMetadata ? objectMetadata["description"] : null);
        privateState.description = defaultValues ?
            (defaultValues["description"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["description"], context) :
                null) :
            null;

        context["field"] = "id";
        context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
        privateState.id = defaultValues ?
            (defaultValues["id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["id"], context) :
                null) :
            null;

        context["field"] = "imageURL";
        context["metadata"] = (objectMetadata ? objectMetadata["imageURL"] : null);
        privateState.imageURL = defaultValues ?
            (defaultValues["imageURL"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["imageURL"], context) :
                null) :
            null;

        context["field"] = "model";
        context["metadata"] = (objectMetadata ? objectMetadata["model"] : null);
        privateState.model = defaultValues ?
            (defaultValues["model"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["model"], context) :
                null) :
            null;

        context["field"] = "navigationId";
        context["metadata"] = (objectMetadata ? objectMetadata["navigationId"] : null);
        privateState.navigationId = defaultValues ?
            (defaultValues["navigationId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["navigationId"], context) :
                null) :
            null;

        context["field"] = "navigationType";
        context["metadata"] = (objectMetadata ? objectMetadata["navigationType"] : null);
        privateState.navigationType = defaultValues ?
            (defaultValues["navigationType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["navigationType"], context) :
                null) :
            null;

        context["field"] = "navigationURL";
        context["metadata"] = (objectMetadata ? objectMetadata["navigationURL"] : null);
        privateState.navigationURL = defaultValues ?
            (defaultValues["navigationURL"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["navigationURL"], context) :
                null) :
            null;

        context["field"] = "result";
        context["metadata"] = (objectMetadata ? objectMetadata["result"] : null);
        privateState.result = defaultValues ?
            (defaultValues["result"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["result"], context) :
                null) :
            null;

        context["field"] = "sessionId";
        context["metadata"] = (objectMetadata ? objectMetadata["sessionId"] : null);
        privateState.sessionId = defaultValues ?
            (defaultValues["sessionId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["sessionId"], context) :
                null) :
            null;

        context["field"] = "text";
        context["metadata"] = (objectMetadata ? objectMetadata["text"] : null);
        privateState.text = defaultValues ?
            (defaultValues["text"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["text"], context) :
                null) :
            null;

        context["field"] = "visible";
        context["metadata"] = (objectMetadata ? objectMetadata["visible"] : null);
        privateState.visible = defaultValues ?
            (defaultValues["visible"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["visible"], context) :
                null) :
            null;

        context["field"] = "flowposition";
        context["metadata"] = (objectMetadata ? objectMetadata["flowposition"] : null);
        privateState.flowposition = defaultValues ?
            (defaultValues["flowposition"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["flowposition"], context) :
                null) :
            null;

        context["field"] = "navId";
        context["metadata"] = (objectMetadata ? objectMetadata["navId"] : null);
        privateState.navId = defaultValues ?
            (defaultValues["navId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["navId"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "adType": {
                get: function() {
                    context["field"] = "adType";
                    context["metadata"] = (objectMetadata ? objectMetadata["adType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.adType, context);
                },
                set: function(val) {
                    setterFunctions['adType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "buttonType": {
                get: function() {
                    context["field"] = "buttonType";
                    context["metadata"] = (objectMetadata ? objectMetadata["buttonType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.buttonType, context);
                },
                set: function(val) {
                    setterFunctions['buttonType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "colour": {
                get: function() {
                    context["field"] = "colour";
                    context["metadata"] = (objectMetadata ? objectMetadata["colour"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.colour, context);
                },
                set: function(val) {
                    setterFunctions['colour'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "description": {
                get: function() {
                    context["field"] = "description";
                    context["metadata"] = (objectMetadata ? objectMetadata["description"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.description, context);
                },
                set: function(val) {
                    setterFunctions['description'].call(this, val, privateState);
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
            "imageURL": {
                get: function() {
                    context["field"] = "imageURL";
                    context["metadata"] = (objectMetadata ? objectMetadata["imageURL"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.imageURL, context);
                },
                set: function(val) {
                    setterFunctions['imageURL'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "model": {
                get: function() {
                    context["field"] = "model";
                    context["metadata"] = (objectMetadata ? objectMetadata["model"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.model, context);
                },
                set: function(val) {
                    setterFunctions['model'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "navigationId": {
                get: function() {
                    context["field"] = "navigationId";
                    context["metadata"] = (objectMetadata ? objectMetadata["navigationId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.navigationId, context);
                },
                set: function(val) {
                    setterFunctions['navigationId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "navigationType": {
                get: function() {
                    context["field"] = "navigationType";
                    context["metadata"] = (objectMetadata ? objectMetadata["navigationType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.navigationType, context);
                },
                set: function(val) {
                    setterFunctions['navigationType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "navigationURL": {
                get: function() {
                    context["field"] = "navigationURL";
                    context["metadata"] = (objectMetadata ? objectMetadata["navigationURL"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.navigationURL, context);
                },
                set: function(val) {
                    setterFunctions['navigationURL'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "result": {
                get: function() {
                    context["field"] = "result";
                    context["metadata"] = (objectMetadata ? objectMetadata["result"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.result, context);
                },
                set: function(val) {
                    setterFunctions['result'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "sessionId": {
                get: function() {
                    context["field"] = "sessionId";
                    context["metadata"] = (objectMetadata ? objectMetadata["sessionId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.sessionId, context);
                },
                set: function(val) {
                    setterFunctions['sessionId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "text": {
                get: function() {
                    context["field"] = "text";
                    context["metadata"] = (objectMetadata ? objectMetadata["text"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.text, context);
                },
                set: function(val) {
                    setterFunctions['text'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "visible": {
                get: function() {
                    context["field"] = "visible";
                    context["metadata"] = (objectMetadata ? objectMetadata["visible"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.visible, context);
                },
                set: function(val) {
                    setterFunctions['visible'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "flowposition": {
                get: function() {
                    context["field"] = "flowposition";
                    context["metadata"] = (objectMetadata ? objectMetadata["flowposition"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.flowposition, context);
                },
                set: function(val) {
                    setterFunctions['flowposition'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "navId": {
                get: function() {
                    context["field"] = "navId";
                    context["metadata"] = (objectMetadata ? objectMetadata["navId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.navId, context);
                },
                set: function(val) {
                    setterFunctions['navId'].call(this, val, privateState);
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
            privateState.adType = value ? (value["adType"] ? value["adType"] : null) : null;
            privateState.buttonType = value ? (value["buttonType"] ? value["buttonType"] : null) : null;
            privateState.colour = value ? (value["colour"] ? value["colour"] : null) : null;
            privateState.description = value ? (value["description"] ? value["description"] : null) : null;
            privateState.id = value ? (value["id"] ? value["id"] : null) : null;
            privateState.imageURL = value ? (value["imageURL"] ? value["imageURL"] : null) : null;
            privateState.model = value ? (value["model"] ? value["model"] : null) : null;
            privateState.navigationId = value ? (value["navigationId"] ? value["navigationId"] : null) : null;
            privateState.navigationType = value ? (value["navigationType"] ? value["navigationType"] : null) : null;
            privateState.navigationURL = value ? (value["navigationURL"] ? value["navigationURL"] : null) : null;
            privateState.result = value ? (value["result"] ? value["result"] : null) : null;
            privateState.sessionId = value ? (value["sessionId"] ? value["sessionId"] : null) : null;
            privateState.text = value ? (value["text"] ? value["text"] : null) : null;
            privateState.visible = value ? (value["visible"] ? value["visible"] : null) : null;
            privateState.flowposition = value ? (value["flowposition"] ? value["flowposition"] : null) : null;
            privateState.navId = value ? (value["navId"] ? value["navId"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(DirectMarketing);

    //Create new class level validator object
    BaseModel.Validator.call(DirectMarketing);

    var registerValidatorBackup = DirectMarketing.registerValidator;

    DirectMarketing.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(DirectMarketing.isValid(this, propName, val)) {
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
    //For Operation 'sendDmResponse' with service id 'sendDmResponse6499'
     DirectMarketing.sendDmResponse = function(params, onCompletion){
        return DirectMarketing.customVerb('sendDmResponse', params, onCompletion);
     };

    //For Operation 'getDirectMarketingAds' with service id 'getDirectMarketingAds2962'
     DirectMarketing.getDirectMarketingAds = function(params, onCompletion){
        return DirectMarketing.customVerb('getDirectMarketingAds', params, onCompletion);
     };

    var relations = [];

    DirectMarketing.relations = relations;

    DirectMarketing.prototype.isValid = function() {
        return DirectMarketing.isValid(this);
    };

    DirectMarketing.prototype.objModelName = "DirectMarketing";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    DirectMarketing.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("RBObjects", "DirectMarketing", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    DirectMarketing.clone = function(objectToClone) {
        var clonedObj = new DirectMarketing();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return DirectMarketing;
});