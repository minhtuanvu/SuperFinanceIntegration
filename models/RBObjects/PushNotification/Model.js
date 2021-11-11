/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "PushNotification", "objectService" : "RBObjects"};

    var setterFunctions = {
        appid: function(val, state) {
            context["field"] = "appid";
            context["metadata"] = (objectMetadata ? objectMetadata["appid"] : null);
            state['appid'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        lat: function(val, state) {
            context["field"] = "lat";
            context["metadata"] = (objectMetadata ? objectMetadata["lat"] : null);
            state['lat'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        lon: function(val, state) {
            context["field"] = "lon";
            context["metadata"] = (objectMetadata ? objectMetadata["lon"] : null);
            state['lon'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        msgtext: function(val, state) {
            context["field"] = "msgtext";
            context["metadata"] = (objectMetadata ? objectMetadata["msgtext"] : null);
            state['msgtext'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        password: function(val, state) {
            context["field"] = "password";
            context["metadata"] = (objectMetadata ? objectMetadata["password"] : null);
            state['password'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        placeID: function(val, state) {
            context["field"] = "placeID";
            context["metadata"] = (objectMetadata ? objectMetadata["placeID"] : null);
            state['placeID'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        title: function(val, state) {
            context["field"] = "title";
            context["metadata"] = (objectMetadata ? objectMetadata["title"] : null);
            state['title'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        type: function(val, state) {
            context["field"] = "type";
            context["metadata"] = (objectMetadata ? objectMetadata["type"] : null);
            state['type'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        ufid: function(val, state) {
            context["field"] = "ufid";
            context["metadata"] = (objectMetadata ? objectMetadata["ufid"] : null);
            state['ufid'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        userid: function(val, state) {
            context["field"] = "userid";
            context["metadata"] = (objectMetadata ? objectMetadata["userid"] : null);
            state['userid'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        XKonyAuthorization: function(val, state) {
            context["field"] = "XKonyAuthorization";
            context["metadata"] = (objectMetadata ? objectMetadata["XKonyAuthorization"] : null);
            state['XKonyAuthorization'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function PushNotification(defaultValues) {
        var privateState = {};
        context["field"] = "appid";
        context["metadata"] = (objectMetadata ? objectMetadata["appid"] : null);
        privateState.appid = defaultValues ?
            (defaultValues["appid"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["appid"], context) :
                null) :
            null;

        context["field"] = "lat";
        context["metadata"] = (objectMetadata ? objectMetadata["lat"] : null);
        privateState.lat = defaultValues ?
            (defaultValues["lat"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["lat"], context) :
                null) :
            null;

        context["field"] = "lon";
        context["metadata"] = (objectMetadata ? objectMetadata["lon"] : null);
        privateState.lon = defaultValues ?
            (defaultValues["lon"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["lon"], context) :
                null) :
            null;

        context["field"] = "msgtext";
        context["metadata"] = (objectMetadata ? objectMetadata["msgtext"] : null);
        privateState.msgtext = defaultValues ?
            (defaultValues["msgtext"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["msgtext"], context) :
                null) :
            null;

        context["field"] = "password";
        context["metadata"] = (objectMetadata ? objectMetadata["password"] : null);
        privateState.password = defaultValues ?
            (defaultValues["password"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["password"], context) :
                null) :
            null;

        context["field"] = "placeID";
        context["metadata"] = (objectMetadata ? objectMetadata["placeID"] : null);
        privateState.placeID = defaultValues ?
            (defaultValues["placeID"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["placeID"], context) :
                null) :
            null;

        context["field"] = "title";
        context["metadata"] = (objectMetadata ? objectMetadata["title"] : null);
        privateState.title = defaultValues ?
            (defaultValues["title"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["title"], context) :
                null) :
            null;

        context["field"] = "type";
        context["metadata"] = (objectMetadata ? objectMetadata["type"] : null);
        privateState.type = defaultValues ?
            (defaultValues["type"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["type"], context) :
                null) :
            null;

        context["field"] = "ufid";
        context["metadata"] = (objectMetadata ? objectMetadata["ufid"] : null);
        privateState.ufid = defaultValues ?
            (defaultValues["ufid"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ufid"], context) :
                null) :
            null;

        context["field"] = "userid";
        context["metadata"] = (objectMetadata ? objectMetadata["userid"] : null);
        privateState.userid = defaultValues ?
            (defaultValues["userid"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["userid"], context) :
                null) :
            null;

        context["field"] = "XKonyAuthorization";
        context["metadata"] = (objectMetadata ? objectMetadata["XKonyAuthorization"] : null);
        privateState.XKonyAuthorization = defaultValues ?
            (defaultValues["XKonyAuthorization"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["XKonyAuthorization"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "appid": {
                get: function() {
                    context["field"] = "appid";
                    context["metadata"] = (objectMetadata ? objectMetadata["appid"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.appid, context);
                },
                set: function(val) {
                    setterFunctions['appid'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "lat": {
                get: function() {
                    context["field"] = "lat";
                    context["metadata"] = (objectMetadata ? objectMetadata["lat"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.lat, context);
                },
                set: function(val) {
                    setterFunctions['lat'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "lon": {
                get: function() {
                    context["field"] = "lon";
                    context["metadata"] = (objectMetadata ? objectMetadata["lon"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.lon, context);
                },
                set: function(val) {
                    setterFunctions['lon'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "msgtext": {
                get: function() {
                    context["field"] = "msgtext";
                    context["metadata"] = (objectMetadata ? objectMetadata["msgtext"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.msgtext, context);
                },
                set: function(val) {
                    setterFunctions['msgtext'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "password": {
                get: function() {
                    context["field"] = "password";
                    context["metadata"] = (objectMetadata ? objectMetadata["password"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.password, context);
                },
                set: function(val) {
                    setterFunctions['password'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "placeID": {
                get: function() {
                    context["field"] = "placeID";
                    context["metadata"] = (objectMetadata ? objectMetadata["placeID"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.placeID, context);
                },
                set: function(val) {
                    setterFunctions['placeID'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "title": {
                get: function() {
                    context["field"] = "title";
                    context["metadata"] = (objectMetadata ? objectMetadata["title"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.title, context);
                },
                set: function(val) {
                    setterFunctions['title'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "type": {
                get: function() {
                    context["field"] = "type";
                    context["metadata"] = (objectMetadata ? objectMetadata["type"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.type, context);
                },
                set: function(val) {
                    setterFunctions['type'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "ufid": {
                get: function() {
                    context["field"] = "ufid";
                    context["metadata"] = (objectMetadata ? objectMetadata["ufid"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ufid, context);
                },
                set: function(val) {
                    setterFunctions['ufid'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "userid": {
                get: function() {
                    context["field"] = "userid";
                    context["metadata"] = (objectMetadata ? objectMetadata["userid"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.userid, context);
                },
                set: function(val) {
                    setterFunctions['userid'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "XKonyAuthorization": {
                get: function() {
                    context["field"] = "XKonyAuthorization";
                    context["metadata"] = (objectMetadata ? objectMetadata["XKonyAuthorization"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.XKonyAuthorization, context);
                },
                set: function(val) {
                    setterFunctions['XKonyAuthorization'].call(this, val, privateState);
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
            privateState.appid = value ? (value["appid"] ? value["appid"] : null) : null;
            privateState.lat = value ? (value["lat"] ? value["lat"] : null) : null;
            privateState.lon = value ? (value["lon"] ? value["lon"] : null) : null;
            privateState.msgtext = value ? (value["msgtext"] ? value["msgtext"] : null) : null;
            privateState.password = value ? (value["password"] ? value["password"] : null) : null;
            privateState.placeID = value ? (value["placeID"] ? value["placeID"] : null) : null;
            privateState.title = value ? (value["title"] ? value["title"] : null) : null;
            privateState.type = value ? (value["type"] ? value["type"] : null) : null;
            privateState.ufid = value ? (value["ufid"] ? value["ufid"] : null) : null;
            privateState.userid = value ? (value["userid"] ? value["userid"] : null) : null;
            privateState.XKonyAuthorization = value ? (value["XKonyAuthorization"] ? value["XKonyAuthorization"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(PushNotification);

    //Create new class level validator object
    BaseModel.Validator.call(PushNotification);

    var registerValidatorBackup = PushNotification.registerValidator;

    PushNotification.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(PushNotification.isValid(this, propName, val)) {
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

    PushNotification.relations = relations;

    PushNotification.prototype.isValid = function() {
        return PushNotification.isValid(this);
    };

    PushNotification.prototype.objModelName = "PushNotification";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    PushNotification.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("RBObjects", "PushNotification", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    PushNotification.clone = function(objectToClone) {
        var clonedObj = new PushNotification();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return PushNotification;
});