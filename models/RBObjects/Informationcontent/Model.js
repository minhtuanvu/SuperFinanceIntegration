/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "Informationcontent", "objectService" : "RBObjects"};

    var setterFunctions = {
        infoContent: function(val, state) {
            context["field"] = "infoContent";
            context["metadata"] = (objectMetadata ? objectMetadata["infoContent"] : null);
            state['infoContent'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        infoType: function(val, state) {
            context["field"] = "infoType";
            context["metadata"] = (objectMetadata ? objectMetadata["infoType"] : null);
            state['infoType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        categoryName: function(val, state) {
            context["field"] = "categoryName";
            context["metadata"] = (objectMetadata ? objectMetadata["categoryName"] : null);
            state['categoryName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function Informationcontent(defaultValues) {
        var privateState = {};
        context["field"] = "infoContent";
        context["metadata"] = (objectMetadata ? objectMetadata["infoContent"] : null);
        privateState.infoContent = defaultValues ?
            (defaultValues["infoContent"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["infoContent"], context) :
                null) :
            null;

        context["field"] = "infoType";
        context["metadata"] = (objectMetadata ? objectMetadata["infoType"] : null);
        privateState.infoType = defaultValues ?
            (defaultValues["infoType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["infoType"], context) :
                null) :
            null;

        context["field"] = "categoryName";
        context["metadata"] = (objectMetadata ? objectMetadata["categoryName"] : null);
        privateState.categoryName = defaultValues ?
            (defaultValues["categoryName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["categoryName"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "infoContent": {
                get: function() {
                    context["field"] = "infoContent";
                    context["metadata"] = (objectMetadata ? objectMetadata["infoContent"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.infoContent, context);
                },
                set: function(val) {
                    setterFunctions['infoContent'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "infoType": {
                get: function() {
                    context["field"] = "infoType";
                    context["metadata"] = (objectMetadata ? objectMetadata["infoType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.infoType, context);
                },
                set: function(val) {
                    setterFunctions['infoType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "categoryName": {
                get: function() {
                    context["field"] = "categoryName";
                    context["metadata"] = (objectMetadata ? objectMetadata["categoryName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.categoryName, context);
                },
                set: function(val) {
                    setterFunctions['categoryName'].call(this, val, privateState);
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
            privateState.infoContent = value ? (value["infoContent"] ? value["infoContent"] : null) : null;
            privateState.infoType = value ? (value["infoType"] ? value["infoType"] : null) : null;
            privateState.categoryName = value ? (value["categoryName"] ? value["categoryName"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(Informationcontent);

    //Create new class level validator object
    BaseModel.Validator.call(Informationcontent);

    var registerValidatorBackup = Informationcontent.registerValidator;

    Informationcontent.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(Informationcontent.isValid(this, propName, val)) {
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
    //For Operation 'getAboutUs' with service id 'getInformationContent3223'
     Informationcontent.getAboutUs = function(params, onCompletion){
        return Informationcontent.customVerb('getAboutUs', params, onCompletion);
     };

    //For Operation 'getContactUs' with service id 'getContactUs2111'
     Informationcontent.getContactUs = function(params, onCompletion){
        return Informationcontent.customVerb('getContactUs', params, onCompletion);
     };

    //For Operation 'getPrivacyPolicy' with service id 'getPrivacyPolicy8800'
     Informationcontent.getPrivacyPolicy = function(params, onCompletion){
        return Informationcontent.customVerb('getPrivacyPolicy', params, onCompletion);
     };

    //For Operation 'getFAQs' with service id 'getFAQs7120'
     Informationcontent.getFAQs = function(params, onCompletion){
        return Informationcontent.customVerb('getFAQs', params, onCompletion);
     };

    //For Operation 'getTermsAndConditions' with service id 'getTermsAndConditions5358'
     Informationcontent.getTermsAndConditions = function(params, onCompletion){
        return Informationcontent.customVerb('getTermsAndConditions', params, onCompletion);
     };

    var relations = [];

    Informationcontent.relations = relations;

    Informationcontent.prototype.isValid = function() {
        return Informationcontent.isValid(this);
    };

    Informationcontent.prototype.objModelName = "Informationcontent";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    Informationcontent.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("RBObjects", "Informationcontent", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    Informationcontent.clone = function(objectToClone) {
        var clonedObj = new Informationcontent();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return Informationcontent;
});