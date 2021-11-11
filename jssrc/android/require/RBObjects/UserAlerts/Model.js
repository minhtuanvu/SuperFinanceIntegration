/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {
        "object": "UserAlerts",
        "objectService": "RBObjects"
    };
    var setterFunctions = {
        alertid: function(val, state) {
            context["field"] = "alertid";
            context["metadata"] = (objectMetadata ? objectMetadata["alertid"] : null);
            state['alertid'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        bankingIDChange: function(val, state) {
            context["field"] = "bankingIDChange";
            context["metadata"] = (objectMetadata ? objectMetadata["bankingIDChange"] : null);
            state['bankingIDChange'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        communicationChange: function(val, state) {
            context["field"] = "communicationChange";
            context["metadata"] = (objectMetadata ? objectMetadata["communicationChange"] : null);
            state['communicationChange'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        dealsExpiring: function(val, state) {
            context["field"] = "dealsExpiring";
            context["metadata"] = (objectMetadata ? objectMetadata["dealsExpiring"] : null);
            state['dealsExpiring'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        errmsg: function(val, state) {
            context["field"] = "errmsg";
            context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
            state['errmsg'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        newDealsAvailable: function(val, state) {
            context["field"] = "newDealsAvailable";
            context["metadata"] = (objectMetadata ? objectMetadata["newDealsAvailable"] : null);
            state['newDealsAvailable'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        newPayeeAdded: function(val, state) {
            context["field"] = "newPayeeAdded";
            context["metadata"] = (objectMetadata ? objectMetadata["newPayeeAdded"] : null);
            state['newPayeeAdded'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        passwordChange: function(val, state) {
            context["field"] = "passwordChange";
            context["metadata"] = (objectMetadata ? objectMetadata["passwordChange"] : null);
            state['passwordChange'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        passwordExpired: function(val, state) {
            context["field"] = "passwordExpired";
            context["metadata"] = (objectMetadata ? objectMetadata["passwordExpired"] : null);
            state['passwordExpired'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        payeeDetailsUpdated: function(val, state) {
            context["field"] = "payeeDetailsUpdated";
            context["metadata"] = (objectMetadata ? objectMetadata["payeeDetailsUpdated"] : null);
            state['payeeDetailsUpdated'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        success: function(val, state) {
            context["field"] = "success";
            context["metadata"] = (objectMetadata ? objectMetadata["success"] : null);
            state['success'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        userName: function(val, state) {
            context["field"] = "userName";
            context["metadata"] = (objectMetadata ? objectMetadata["userName"] : null);
            state['userName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        canBeSelected: function(val, state) {
            context["field"] = "canBeSelected";
            context["metadata"] = (objectMetadata ? objectMetadata["canBeSelected"] : null);
            state['canBeSelected'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        alertTypes: function(val, state) {
            context["field"] = "alertTypes";
            context["metadata"] = (objectMetadata ? objectMetadata["alertTypes"] : null);
            state['alertTypes'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isSelected: function(val, state) {
            context["field"] = "isSelected";
            context["metadata"] = (objectMetadata ? objectMetadata["isSelected"] : null);
            state['isSelected'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        canSmsBeSelected: function(val, state) {
            context["field"] = "canSmsBeSelected";
            context["metadata"] = (objectMetadata ? objectMetadata["canSmsBeSelected"] : null);
            state['canSmsBeSelected'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        name: function(val, state) {
            context["field"] = "name";
            context["metadata"] = (objectMetadata ? objectMetadata["name"] : null);
            state['name'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isSmsActive: function(val, state) {
            context["field"] = "isSmsActive";
            context["metadata"] = (objectMetadata ? objectMetadata["isSmsActive"] : null);
            state['isSmsActive'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        canPushBeSelected: function(val, state) {
            context["field"] = "canPushBeSelected";
            context["metadata"] = (objectMetadata ? objectMetadata["canPushBeSelected"] : null);
            state['canPushBeSelected'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isEmailActive: function(val, state) {
            context["field"] = "isEmailActive";
            context["metadata"] = (objectMetadata ? objectMetadata["isEmailActive"] : null);
            state['isEmailActive'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isPushActive: function(val, state) {
            context["field"] = "isPushActive";
            context["metadata"] = (objectMetadata ? objectMetadata["isPushActive"] : null);
            state['isPushActive'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        value: function(val, state) {
            context["field"] = "value";
            context["metadata"] = (objectMetadata ? objectMetadata["value"] : null);
            state['value'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        canEmailBeSelected: function(val, state) {
            context["field"] = "canEmailBeSelected";
            context["metadata"] = (objectMetadata ? objectMetadata["canEmailBeSelected"] : null);
            state['canEmailBeSelected'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        alertTypeName: function(val, state) {
            context["field"] = "alertTypeName";
            context["metadata"] = (objectMetadata ? objectMetadata["alertTypeName"] : null);
            state['alertTypeName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        alertTypeId: function(val, state) {
            context["field"] = "alertTypeId";
            context["metadata"] = (objectMetadata ? objectMetadata["alertTypeId"] : null);
            state['alertTypeId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        alerts: function(val, state) {
            context["field"] = "alerts";
            context["metadata"] = (objectMetadata ? objectMetadata["alerts"] : null);
            state['alerts'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };
    //Create the Model Class
    function UserAlerts(defaultValues) {
        var privateState = {};
        context["field"] = "alertid";
        context["metadata"] = (objectMetadata ? objectMetadata["alertid"] : null);
        privateState.alertid = defaultValues ? (defaultValues["alertid"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["alertid"], context) : null) : null;
        context["field"] = "bankingIDChange";
        context["metadata"] = (objectMetadata ? objectMetadata["bankingIDChange"] : null);
        privateState.bankingIDChange = defaultValues ? (defaultValues["bankingIDChange"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["bankingIDChange"], context) : null) : null;
        context["field"] = "communicationChange";
        context["metadata"] = (objectMetadata ? objectMetadata["communicationChange"] : null);
        privateState.communicationChange = defaultValues ? (defaultValues["communicationChange"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["communicationChange"], context) : null) : null;
        context["field"] = "dealsExpiring";
        context["metadata"] = (objectMetadata ? objectMetadata["dealsExpiring"] : null);
        privateState.dealsExpiring = defaultValues ? (defaultValues["dealsExpiring"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["dealsExpiring"], context) : null) : null;
        context["field"] = "errmsg";
        context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
        privateState.errmsg = defaultValues ? (defaultValues["errmsg"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["errmsg"], context) : null) : null;
        context["field"] = "newDealsAvailable";
        context["metadata"] = (objectMetadata ? objectMetadata["newDealsAvailable"] : null);
        privateState.newDealsAvailable = defaultValues ? (defaultValues["newDealsAvailable"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["newDealsAvailable"], context) : null) : null;
        context["field"] = "newPayeeAdded";
        context["metadata"] = (objectMetadata ? objectMetadata["newPayeeAdded"] : null);
        privateState.newPayeeAdded = defaultValues ? (defaultValues["newPayeeAdded"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["newPayeeAdded"], context) : null) : null;
        context["field"] = "passwordChange";
        context["metadata"] = (objectMetadata ? objectMetadata["passwordChange"] : null);
        privateState.passwordChange = defaultValues ? (defaultValues["passwordChange"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["passwordChange"], context) : null) : null;
        context["field"] = "passwordExpired";
        context["metadata"] = (objectMetadata ? objectMetadata["passwordExpired"] : null);
        privateState.passwordExpired = defaultValues ? (defaultValues["passwordExpired"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["passwordExpired"], context) : null) : null;
        context["field"] = "payeeDetailsUpdated";
        context["metadata"] = (objectMetadata ? objectMetadata["payeeDetailsUpdated"] : null);
        privateState.payeeDetailsUpdated = defaultValues ? (defaultValues["payeeDetailsUpdated"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["payeeDetailsUpdated"], context) : null) : null;
        context["field"] = "success";
        context["metadata"] = (objectMetadata ? objectMetadata["success"] : null);
        privateState.success = defaultValues ? (defaultValues["success"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["success"], context) : null) : null;
        context["field"] = "userName";
        context["metadata"] = (objectMetadata ? objectMetadata["userName"] : null);
        privateState.userName = defaultValues ? (defaultValues["userName"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["userName"], context) : null) : null;
        context["field"] = "canBeSelected";
        context["metadata"] = (objectMetadata ? objectMetadata["canBeSelected"] : null);
        privateState.canBeSelected = defaultValues ? (defaultValues["canBeSelected"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["canBeSelected"], context) : null) : null;
        context["field"] = "alertTypes";
        context["metadata"] = (objectMetadata ? objectMetadata["alertTypes"] : null);
        privateState.alertTypes = defaultValues ? (defaultValues["alertTypes"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["alertTypes"], context) : null) : null;
        context["field"] = "isSelected";
        context["metadata"] = (objectMetadata ? objectMetadata["isSelected"] : null);
        privateState.isSelected = defaultValues ? (defaultValues["isSelected"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isSelected"], context) : null) : null;
        context["field"] = "canSmsBeSelected";
        context["metadata"] = (objectMetadata ? objectMetadata["canSmsBeSelected"] : null);
        privateState.canSmsBeSelected = defaultValues ? (defaultValues["canSmsBeSelected"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["canSmsBeSelected"], context) : null) : null;
        context["field"] = "name";
        context["metadata"] = (objectMetadata ? objectMetadata["name"] : null);
        privateState.name = defaultValues ? (defaultValues["name"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["name"], context) : null) : null;
        context["field"] = "isSmsActive";
        context["metadata"] = (objectMetadata ? objectMetadata["isSmsActive"] : null);
        privateState.isSmsActive = defaultValues ? (defaultValues["isSmsActive"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isSmsActive"], context) : null) : null;
        context["field"] = "canPushBeSelected";
        context["metadata"] = (objectMetadata ? objectMetadata["canPushBeSelected"] : null);
        privateState.canPushBeSelected = defaultValues ? (defaultValues["canPushBeSelected"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["canPushBeSelected"], context) : null) : null;
        context["field"] = "isEmailActive";
        context["metadata"] = (objectMetadata ? objectMetadata["isEmailActive"] : null);
        privateState.isEmailActive = defaultValues ? (defaultValues["isEmailActive"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isEmailActive"], context) : null) : null;
        context["field"] = "isPushActive";
        context["metadata"] = (objectMetadata ? objectMetadata["isPushActive"] : null);
        privateState.isPushActive = defaultValues ? (defaultValues["isPushActive"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isPushActive"], context) : null) : null;
        context["field"] = "value";
        context["metadata"] = (objectMetadata ? objectMetadata["value"] : null);
        privateState.value = defaultValues ? (defaultValues["value"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["value"], context) : null) : null;
        context["field"] = "canEmailBeSelected";
        context["metadata"] = (objectMetadata ? objectMetadata["canEmailBeSelected"] : null);
        privateState.canEmailBeSelected = defaultValues ? (defaultValues["canEmailBeSelected"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["canEmailBeSelected"], context) : null) : null;
        context["field"] = "alertTypeName";
        context["metadata"] = (objectMetadata ? objectMetadata["alertTypeName"] : null);
        privateState.alertTypeName = defaultValues ? (defaultValues["alertTypeName"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["alertTypeName"], context) : null) : null;
        context["field"] = "alertTypeId";
        context["metadata"] = (objectMetadata ? objectMetadata["alertTypeId"] : null);
        privateState.alertTypeId = defaultValues ? (defaultValues["alertTypeId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["alertTypeId"], context) : null) : null;
        context["field"] = "alerts";
        context["metadata"] = (objectMetadata ? objectMetadata["alerts"] : null);
        privateState.alerts = defaultValues ? (defaultValues["alerts"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["alerts"], context) : null) : null;
        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);
        //Defining Getter/Setters
        Object.defineProperties(this, {
            "alertid": {
                get: function() {
                    context["field"] = "alertid";
                    context["metadata"] = (objectMetadata ? objectMetadata["alertid"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.alertid, context);
                },
                set: function(val) {
                    setterFunctions['alertid'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "bankingIDChange": {
                get: function() {
                    context["field"] = "bankingIDChange";
                    context["metadata"] = (objectMetadata ? objectMetadata["bankingIDChange"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.bankingIDChange, context);
                },
                set: function(val) {
                    setterFunctions['bankingIDChange'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "communicationChange": {
                get: function() {
                    context["field"] = "communicationChange";
                    context["metadata"] = (objectMetadata ? objectMetadata["communicationChange"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.communicationChange, context);
                },
                set: function(val) {
                    setterFunctions['communicationChange'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "dealsExpiring": {
                get: function() {
                    context["field"] = "dealsExpiring";
                    context["metadata"] = (objectMetadata ? objectMetadata["dealsExpiring"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.dealsExpiring, context);
                },
                set: function(val) {
                    setterFunctions['dealsExpiring'].call(this, val, privateState);
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
            "newDealsAvailable": {
                get: function() {
                    context["field"] = "newDealsAvailable";
                    context["metadata"] = (objectMetadata ? objectMetadata["newDealsAvailable"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.newDealsAvailable, context);
                },
                set: function(val) {
                    setterFunctions['newDealsAvailable'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "newPayeeAdded": {
                get: function() {
                    context["field"] = "newPayeeAdded";
                    context["metadata"] = (objectMetadata ? objectMetadata["newPayeeAdded"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.newPayeeAdded, context);
                },
                set: function(val) {
                    setterFunctions['newPayeeAdded'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "passwordChange": {
                get: function() {
                    context["field"] = "passwordChange";
                    context["metadata"] = (objectMetadata ? objectMetadata["passwordChange"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.passwordChange, context);
                },
                set: function(val) {
                    setterFunctions['passwordChange'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "passwordExpired": {
                get: function() {
                    context["field"] = "passwordExpired";
                    context["metadata"] = (objectMetadata ? objectMetadata["passwordExpired"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.passwordExpired, context);
                },
                set: function(val) {
                    setterFunctions['passwordExpired'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "payeeDetailsUpdated": {
                get: function() {
                    context["field"] = "payeeDetailsUpdated";
                    context["metadata"] = (objectMetadata ? objectMetadata["payeeDetailsUpdated"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.payeeDetailsUpdated, context);
                },
                set: function(val) {
                    setterFunctions['payeeDetailsUpdated'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "success": {
                get: function() {
                    context["field"] = "success";
                    context["metadata"] = (objectMetadata ? objectMetadata["success"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.success, context);
                },
                set: function(val) {
                    setterFunctions['success'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "userName": {
                get: function() {
                    context["field"] = "userName";
                    context["metadata"] = (objectMetadata ? objectMetadata["userName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.userName, context);
                },
                set: function(val) {
                    setterFunctions['userName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "canBeSelected": {
                get: function() {
                    context["field"] = "canBeSelected";
                    context["metadata"] = (objectMetadata ? objectMetadata["canBeSelected"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.canBeSelected, context);
                },
                set: function(val) {
                    setterFunctions['canBeSelected'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "alertTypes": {
                get: function() {
                    context["field"] = "alertTypes";
                    context["metadata"] = (objectMetadata ? objectMetadata["alertTypes"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.alertTypes, context);
                },
                set: function(val) {
                    setterFunctions['alertTypes'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "isSelected": {
                get: function() {
                    context["field"] = "isSelected";
                    context["metadata"] = (objectMetadata ? objectMetadata["isSelected"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isSelected, context);
                },
                set: function(val) {
                    setterFunctions['isSelected'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "canSmsBeSelected": {
                get: function() {
                    context["field"] = "canSmsBeSelected";
                    context["metadata"] = (objectMetadata ? objectMetadata["canSmsBeSelected"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.canSmsBeSelected, context);
                },
                set: function(val) {
                    setterFunctions['canSmsBeSelected'].call(this, val, privateState);
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
            "isSmsActive": {
                get: function() {
                    context["field"] = "isSmsActive";
                    context["metadata"] = (objectMetadata ? objectMetadata["isSmsActive"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isSmsActive, context);
                },
                set: function(val) {
                    setterFunctions['isSmsActive'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "canPushBeSelected": {
                get: function() {
                    context["field"] = "canPushBeSelected";
                    context["metadata"] = (objectMetadata ? objectMetadata["canPushBeSelected"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.canPushBeSelected, context);
                },
                set: function(val) {
                    setterFunctions['canPushBeSelected'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "isEmailActive": {
                get: function() {
                    context["field"] = "isEmailActive";
                    context["metadata"] = (objectMetadata ? objectMetadata["isEmailActive"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isEmailActive, context);
                },
                set: function(val) {
                    setterFunctions['isEmailActive'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "isPushActive": {
                get: function() {
                    context["field"] = "isPushActive";
                    context["metadata"] = (objectMetadata ? objectMetadata["isPushActive"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isPushActive, context);
                },
                set: function(val) {
                    setterFunctions['isPushActive'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "value": {
                get: function() {
                    context["field"] = "value";
                    context["metadata"] = (objectMetadata ? objectMetadata["value"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.value, context);
                },
                set: function(val) {
                    setterFunctions['value'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "canEmailBeSelected": {
                get: function() {
                    context["field"] = "canEmailBeSelected";
                    context["metadata"] = (objectMetadata ? objectMetadata["canEmailBeSelected"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.canEmailBeSelected, context);
                },
                set: function(val) {
                    setterFunctions['canEmailBeSelected'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "alertTypeName": {
                get: function() {
                    context["field"] = "alertTypeName";
                    context["metadata"] = (objectMetadata ? objectMetadata["alertTypeName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.alertTypeName, context);
                },
                set: function(val) {
                    setterFunctions['alertTypeName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "alertTypeId": {
                get: function() {
                    context["field"] = "alertTypeId";
                    context["metadata"] = (objectMetadata ? objectMetadata["alertTypeId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.alertTypeId, context);
                },
                set: function(val) {
                    setterFunctions['alertTypeId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "alerts": {
                get: function() {
                    context["field"] = "alerts";
                    context["metadata"] = (objectMetadata ? objectMetadata["alerts"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.alerts, context);
                },
                set: function(val) {
                    setterFunctions['alerts'].call(this, val, privateState);
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
            privateState.alertid = value ? (value["alertid"] ? value["alertid"] : null) : null;
            privateState.bankingIDChange = value ? (value["bankingIDChange"] ? value["bankingIDChange"] : null) : null;
            privateState.communicationChange = value ? (value["communicationChange"] ? value["communicationChange"] : null) : null;
            privateState.dealsExpiring = value ? (value["dealsExpiring"] ? value["dealsExpiring"] : null) : null;
            privateState.errmsg = value ? (value["errmsg"] ? value["errmsg"] : null) : null;
            privateState.newDealsAvailable = value ? (value["newDealsAvailable"] ? value["newDealsAvailable"] : null) : null;
            privateState.newPayeeAdded = value ? (value["newPayeeAdded"] ? value["newPayeeAdded"] : null) : null;
            privateState.passwordChange = value ? (value["passwordChange"] ? value["passwordChange"] : null) : null;
            privateState.passwordExpired = value ? (value["passwordExpired"] ? value["passwordExpired"] : null) : null;
            privateState.payeeDetailsUpdated = value ? (value["payeeDetailsUpdated"] ? value["payeeDetailsUpdated"] : null) : null;
            privateState.success = value ? (value["success"] ? value["success"] : null) : null;
            privateState.userName = value ? (value["userName"] ? value["userName"] : null) : null;
            privateState.canBeSelected = value ? (value["canBeSelected"] ? value["canBeSelected"] : null) : null;
            privateState.alertTypes = value ? (value["alertTypes"] ? value["alertTypes"] : null) : null;
            privateState.isSelected = value ? (value["isSelected"] ? value["isSelected"] : null) : null;
            privateState.canSmsBeSelected = value ? (value["canSmsBeSelected"] ? value["canSmsBeSelected"] : null) : null;
            privateState.name = value ? (value["name"] ? value["name"] : null) : null;
            privateState.isSmsActive = value ? (value["isSmsActive"] ? value["isSmsActive"] : null) : null;
            privateState.canPushBeSelected = value ? (value["canPushBeSelected"] ? value["canPushBeSelected"] : null) : null;
            privateState.isEmailActive = value ? (value["isEmailActive"] ? value["isEmailActive"] : null) : null;
            privateState.isPushActive = value ? (value["isPushActive"] ? value["isPushActive"] : null) : null;
            privateState.value = value ? (value["value"] ? value["value"] : null) : null;
            privateState.canEmailBeSelected = value ? (value["canEmailBeSelected"] ? value["canEmailBeSelected"] : null) : null;
            privateState.alertTypeName = value ? (value["alertTypeName"] ? value["alertTypeName"] : null) : null;
            privateState.alertTypeId = value ? (value["alertTypeId"] ? value["alertTypeId"] : null) : null;
            privateState.alerts = value ? (value["alerts"] ? value["alerts"] : null) : null;
        };
    }
    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(UserAlerts);
    //Create new class level validator object
    BaseModel.Validator.call(UserAlerts);
    var registerValidatorBackup = UserAlerts.registerValidator;
    UserAlerts.registerValidator = function() {
            var propName = arguments[0];
            if (!setterFunctions[propName].changed) {
                var setterBackup = setterFunctions[propName];
                setterFunctions[arguments[0]] = function() {
                    if (UserAlerts.isValid(this, propName, val)) {
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
        //For Operation 'getAllAlerts' with service id 'getAllAlerts7486'
    UserAlerts.getAllAlerts = function(params, onCompletion) {
        return UserAlerts.customVerb('getAllAlerts', params, onCompletion);
    };
    //For Operation 'updateAlerts' with service id 'updateAlerts3636'
    UserAlerts.updateAlerts = function(params, onCompletion) {
        return UserAlerts.customVerb('updateAlerts', params, onCompletion);
    };
    var relations = [];
    UserAlerts.relations = relations;
    UserAlerts.prototype.isValid = function() {
        return UserAlerts.isValid(this);
    };
    UserAlerts.prototype.objModelName = "UserAlerts";
    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    UserAlerts.registerProcessors = function(options, successCallback, failureCallback) {
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
        kony.mvc.util.ProcessorUtils.getMetadataForObject("RBObjects", "UserAlerts", options, metaDataSuccess, metaDataFailure);
    };
    //clone the object provided in argument.
    UserAlerts.clone = function(objectToClone) {
        var clonedObj = new UserAlerts();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };
    return UserAlerts;
});