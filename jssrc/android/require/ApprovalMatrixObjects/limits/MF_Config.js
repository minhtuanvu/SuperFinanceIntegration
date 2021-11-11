/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var mappings = {
        "approvalRuleId": "approvalRuleId",
        "approvalRuleName": "approvalRuleName",
        "lowerlimit": "lowerlimit",
        "numberOfApprovals": "numberOfApprovals",
        "upperlimit": "upperlimit",
    };
    Object.freeze(mappings);
    var typings = {
        "approvalRuleId": "string",
        "approvalRuleName": "string",
        "lowerlimit": "string",
        "numberOfApprovals": "string",
        "upperlimit": "string",
    }
    Object.freeze(typings);
    var primaryKeys = [];
    Object.freeze(primaryKeys);
    var config = {
        mappings: mappings,
        typings: typings,
        primaryKeys: primaryKeys,
        serviceName: "ApprovalMatrixObjects",
        tableName: "limits"
    };
    Object.freeze(config);
    return config;
})