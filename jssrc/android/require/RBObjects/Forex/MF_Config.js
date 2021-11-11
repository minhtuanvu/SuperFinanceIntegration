/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var mappings = {
        "baseCurrencyCode": "baseCurrencyCode",
        "quoteCurrencyCode": "quoteCurrencyCode",
        "CountryCode": "CountryCode",
        "companyCode": "companyCode",
        "market": "market",
    };
    Object.freeze(mappings);
    var typings = {
        "baseCurrencyCode": "string",
        "quoteCurrencyCode": "string",
        "CountryCode": "string",
        "companyCode": "string",
        "market": "string",
    }
    Object.freeze(typings);
    var primaryKeys = ["baseCurrencyCode", ];
    Object.freeze(primaryKeys);
    var config = {
        mappings: mappings,
        typings: typings,
        primaryKeys: primaryKeys,
        serviceName: "RBObjects",
        tableName: "Forex"
    };
    Object.freeze(config);
    return config;
})