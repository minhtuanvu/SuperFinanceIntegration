/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var mappings = {
        "portfolioId": "portfolioId",
        "searchByInstrumentName": "searchByInstrumentName",
        "type": "type",
        "startDate": "startDate",
        "endDate": "endDate",
        "sortBy": "sortBy",
        "orderId": "orderId",
        "sortOrder": "sortOrder",
        "pageSize": "pageSize",
        "pageOffset": "pageOffset",
        "instrumentId": "instrumentId",
    };
    Object.freeze(mappings);
    var typings = {
        "portfolioId": "string",
        "searchByInstrumentName": "string",
        "type": "string",
        "startDate": "string",
        "endDate": "string",
        "sortBy": "string",
        "orderId": "string",
        "sortOrder": "string",
        "pageSize": "string",
        "pageOffset": "string",
        "instrumentId": "string",
    }
    Object.freeze(typings);
    var primaryKeys = ["portfolioId", "orderId", ];
    Object.freeze(primaryKeys);
    var config = {
        mappings: mappings,
        typings: typings,
        primaryKeys: primaryKeys,
        serviceName: "WealthObjects",
        tableName: "OrdersDetails"
    };
    Object.freeze(config);
    return config;
})