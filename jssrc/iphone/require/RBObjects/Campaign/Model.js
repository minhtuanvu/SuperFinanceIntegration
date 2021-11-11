/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {
        "object": "Campaign",
        "objectService": "RBObjects"
    };
    var setterFunctions = {
        scale: function(val, state) {
            context["field"] = "scale";
            context["metadata"] = (objectMetadata ? objectMetadata["scale"] : null);
            state['scale'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        screenName: function(val, state) {
            context["field"] = "screenName";
            context["metadata"] = (objectMetadata ? objectMetadata["screenName"] : null);
            state['screenName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        customerId: function(val, state) {
            context["field"] = "customerId";
            context["metadata"] = (objectMetadata ? objectMetadata["customerId"] : null);
            state['customerId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        campaignId: function(val, state) {
            context["field"] = "campaignId";
            context["metadata"] = (objectMetadata ? objectMetadata["campaignId"] : null);
            state['campaignId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };
    //Create the Model Class
    function Campaign(defaultValues) {
        var privateState = {};
        context["field"] = "scale";
        context["metadata"] = (objectMetadata ? objectMetadata["scale"] : null);
        privateState.scale = defaultValues ? (defaultValues["scale"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["scale"], context) : null) : null;
        context["field"] = "screenName";
        context["metadata"] = (objectMetadata ? objectMetadata["screenName"] : null);
        privateState.screenName = defaultValues ? (defaultValues["screenName"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["screenName"], context) : null) : null;
        context["field"] = "customerId";
        context["metadata"] = (objectMetadata ? objectMetadata["customerId"] : null);
        privateState.customerId = defaultValues ? (defaultValues["customerId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["customerId"], context) : null) : null;
        context["field"] = "campaignId";
        context["metadata"] = (objectMetadata ? objectMetadata["campaignId"] : null);
        privateState.campaignId = defaultValues ? (defaultValues["campaignId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["campaignId"], context) : null) : null;
        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);
        //Defining Getter/Setters
        Object.defineProperties(this, {
            "scale": {
                get: function() {
                    context["field"] = "scale";
                    context["metadata"] = (objectMetadata ? objectMetadata["scale"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.scale, context);
                },
                set: function(val) {
                    setterFunctions['scale'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "screenName": {
                get: function() {
                    context["field"] = "screenName";
                    context["metadata"] = (objectMetadata ? objectMetadata["screenName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.screenName, context);
                },
                set: function(val) {
                    setterFunctions['screenName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "customerId": {
                get: function() {
                    context["field"] = "customerId";
                    context["metadata"] = (objectMetadata ? objectMetadata["customerId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.customerId, context);
                },
                set: function(val) {
                    setterFunctions['customerId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "campaignId": {
                get: function() {
                    context["field"] = "campaignId";
                    context["metadata"] = (objectMetadata ? objectMetadata["campaignId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.campaignId, context);
                },
                set: function(val) {
                    setterFunctions['campaignId'].call(this, val, privateState);
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
            privateState.scale = value ? (value["scale"] ? value["scale"] : null) : null;
            privateState.screenName = value ? (value["screenName"] ? value["screenName"] : null) : null;
            privateState.customerId = value ? (value["customerId"] ? value["customerId"] : null) : null;
            privateState.campaignId = value ? (value["campaignId"] ? value["campaignId"] : null) : null;
        };
    }
    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(Campaign);
    //Create new class level validator object
    BaseModel.Validator.call(Campaign);
    var registerValidatorBackup = Campaign.registerValidator;
    Campaign.registerValidator = function() {
            var propName = arguments[0];
            if (!setterFunctions[propName].changed) {
                var setterBackup = setterFunctions[propName];
                setterFunctions[arguments[0]] = function() {
                    if (Campaign.isValid(this, propName, val)) {
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
        //For Operation 'getCampaignSpecificationsPreLogin' with service id 'GetCampaignSpecificationsPreLogin3472'
    Campaign.getCampaignSpecificationsPreLogin = function(params, onCompletion) {
        return Campaign.customVerb('getCampaignSpecificationsPreLogin', params, onCompletion);
    };
    //For Operation 'ignoreCampaignForCustomer' with service id 'IgnoreCampaignForCustomer2902'
    Campaign.ignoreCampaignForCustomer = function(params, onCompletion) {
        return Campaign.customVerb('ignoreCampaignForCustomer', params, onCompletion);
    };
    //For Operation 'getCampaignSpecifications' with service id 'GetCampaignSpecifications8179'
    Campaign.getCampaignSpecifications = function(params, onCompletion) {
        return Campaign.customVerb('getCampaignSpecifications', params, onCompletion);
    };
    var relations = [];
    Campaign.relations = relations;
    Campaign.prototype.isValid = function() {
        return Campaign.isValid(this);
    };
    Campaign.prototype.objModelName = "Campaign";
    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    Campaign.registerProcessors = function(options, successCallback, failureCallback) {
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
        kony.mvc.util.ProcessorUtils.getMetadataForObject("RBObjects", "Campaign", options, metaDataSuccess, metaDataFailure);
    };
    //clone the object provided in argument.
    Campaign.clone = function(objectToClone) {
        var clonedObj = new Campaign();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };
    return Campaign;
});