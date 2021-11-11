/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var mappings = {
        "currencyPairs": "currencyPairs",
        "marketRate": "marketRate",
        "id": "id",
        "dateOrPeriod": "dateOrPeriod",
        "RICCode": "RICCode",
    };
    Object.freeze(mappings);
    var typings = {
        "currencyPairs": "string",
        "marketRate": "string",
        "id": "string",
        "dateOrPeriod": "string",
        "RICCode": "string",
    }
    Object.freeze(typings);
    var primaryKeys = ["currencyPairs", ];
    Object.freeze(primaryKeys);
    var config = {
        mappings: mappings,
        typings: typings,
        primaryKeys: primaryKeys,
        serviceName: "WealthObjects",
        tableName: "CurrencyDetails"
    };
    Object.freeze(config);
    return config;
})