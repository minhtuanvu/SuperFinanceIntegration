/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"bankName": "bankName",
		"city": "city",
		"country": "country",
		"iban": "iban",
		"countryRegion": "countryRegion",
		"bic": "bic",
		"id": "id",
		"sepaMember": "sepaMember",
		"countryCode": "countryCode",
	};

	Object.freeze(mappings);

	var typings = {
		"bankName": "string",
		"city": "string",
		"country": "string",
		"iban": "string",
		"countryRegion": "string",
		"bic": "string",
		"id": "string",
		"sepaMember": "string",
		"countryCode": "string",
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
		serviceName: "RBObjects",
		tableName: "SwiftCode"
	};

	Object.freeze(config);

	return config;
})