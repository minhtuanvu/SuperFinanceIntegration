/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"partyId": "partyId",
		"accountId": "accountId",
		"type": "type",
		"templateName": "templateName",
		"requestBody": "requestBody",
		"subtypeId": "subtypeId",
		"code": "code",
		"id": "id",
		"dbpErrCode": "dbpErrCode",
		"dbpErrMsg": "dbpErrMsg",
		"message": "message",
		"subtype": "subtype",
		"templateId": "templateId",
	};

	Object.freeze(mappings);

	var typings = {
		"partyId": "string",
		"accountId": "string",
		"type": "string",
		"templateName": "string",
		"requestBody": "string",
		"subtypeId": "string",
		"code": "string",
		"id": "string",
		"dbpErrCode": "string",
		"dbpErrMsg": "string",
		"message": "string",
		"subtype": "string",
		"templateId": "string",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"id",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "ServiceRequest",
		tableName: "order"
	};

	Object.freeze(config);

	return config;
})