/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var mappings = {
        "id": "id",
        "documentId": "documentId",
        "documentName": "documentName",
        "content": "content",
        "version": "version",
        "userId": "userId",
        "referenceId": "referenceId",
        "fileInfo": "fileInfo",
        "category": "category",
        "authorization": "authorization",
        "documentGroup": "documentGroup",
        "ownerSystemId": "ownerSystemId",
    };
    Object.freeze(mappings);
    var typings = {
        "id": "string",
        "documentId": "string",
        "documentName": "string",
        "content": "string",
        "version": "string",
        "userId": "string",
        "referenceId": "string",
        "fileInfo": "string",
        "category": "string",
        "authorization": "string",
        "documentGroup": "string",
        "ownerSystemId": "string",
    }
    Object.freeze(typings);
    var primaryKeys = ["id", ];
    Object.freeze(primaryKeys);
    var config = {
        mappings: mappings,
        typings: typings,
        primaryKeys: primaryKeys,
        serviceName: "DocumentStorageObjects",
        tableName: "DocumentStorage"
    };
    Object.freeze(config);
    return config;
})