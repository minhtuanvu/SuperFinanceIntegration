/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var mappings = {
        "ISINCode": "ISINCode",
        "RICCode": "RICCode",
        "instrumentId": "instrumentId",
    };
    Object.freeze(mappings);
    var typings = {
        "ISINCode": "string",
        "RICCode": "string",
        "instrumentId": "string",
    }
    Object.freeze(typings);
    var primaryKeys = ["ISINCode", "RICCode", "instrumentId", ];
    Object.freeze(primaryKeys);
    var config = {
        mappings: mappings,
        typings: typings,
        primaryKeys: primaryKeys,
        serviceName: "WealthObjects",
        tableName: "ProductDetails"
    };
    Object.freeze(config);
    return config;
})