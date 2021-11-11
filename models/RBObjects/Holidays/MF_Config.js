/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"id": "id",
		"holidays": "holidays",
		"createdOn": "createdOn",
		"updatedOn": "updatedOn",
		"createdBy": "createdBy",
		"updatedBy": "updatedBy",
		"holidayDate": "holidayDate",
	};

	Object.freeze(mappings);

	var typings = {
		"id": "number",
		"holidays": "string",
		"createdOn": "date",
		"updatedOn": "date",
		"createdBy": "string",
		"updatedBy": "string",
		"holidayDate": "date",
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
		tableName: "Holidays"
	};

	Object.freeze(config);

	return config;
})