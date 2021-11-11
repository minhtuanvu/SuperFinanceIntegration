/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"amount": "amount",
		"cardExpiry": "cardExpiry",
		"cardNumber": "cardNumber",
		"checkImageBack": "checkImageBack",
		"companyId": "companyId",
		"confirmationNumber": "confirmationNumber",
		"createdby": "createdby",
		"createdts": "createdts",
		"day1": "day1",
		"day2": "day2",
		"featureActionId": "featureActionId",
		"frequencyEndDate": "frequencyEndDate",
		"frequencyTypeId": "frequencyTypeId",
		"fromAccountCurrency": "fromAccountCurrency",
		"fromAccountNumber": "fromAccountNumber",
		"fromAccountType": "fromAccountType",
		"fromNickName": "fromNickName",
		"isScheduled": "isScheduled",
		"lastmodifiedts": "lastmodifiedts",
		"modifiedby": "modifiedby",
		"notes": "notes",
		"numberOfRecurrences": "numberOfRecurrences",
		"onetime_id": "onetime_id",
		"payeeName": "payeeName",
		"payPersonName": "payPersonName",
		"pdf": "pdf",
		"personId": "personId",
		"processingDate": "processingDate",
		"profileId": "profileId",
		"requestId": "requestId",
		"scheduledDate": "scheduledDate",
		"SecurityAnswer": "SecurityAnswer",
		"securityQuestion": "securityQuestion",
		"softdeleteflag": "softdeleteflag",
		"status": "status",
		"synctimestamp": "synctimestamp",
		"toAccountCurrency": "toAccountCurrency",
		"toAccountNumber": "toAccountNumber",
		"toAccountType": "toAccountType",
		"transactionCurrency": "transactionCurrency",
		"transactionId": "transactionId",
		"transactionts": "transactionts",
		"transactionType": "transactionType",
	};

	Object.freeze(mappings);

	var typings = {
		"amount": "number",
		"cardExpiry": "string",
		"cardNumber": "string",
		"checkImageBack": "string",
		"companyId": "string",
		"confirmationNumber": "string",
		"createdby": "string",
		"createdts": "date",
		"day1": "string",
		"day2": "string",
		"featureActionId": "string",
		"frequencyEndDate": "date",
		"frequencyTypeId": "string",
		"fromAccountCurrency": "string",
		"fromAccountNumber": "string",
		"fromAccountType": "string",
		"fromNickName": "string",
		"isScheduled": "string",
		"lastmodifiedts": "date",
		"modifiedby": "string",
		"notes": "string",
		"numberOfRecurrences": "number",
		"onetime_id": "number",
		"payeeName": "string",
		"payPersonName": "string",
		"pdf": "binary",
		"personId": "string",
		"processingDate": "string",
		"profileId": "string",
		"requestId": "number",
		"scheduledDate": "date",
		"SecurityAnswer": "string",
		"securityQuestion": "string",
		"softdeleteflag": "boolean",
		"status": "string",
		"synctimestamp": "date",
		"toAccountCurrency": "string",
		"toAccountNumber": "string",
		"toAccountType": "string",
		"transactionCurrency": "string",
		"transactionId": "number",
		"transactionts": "date",
		"transactionType": "string",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"transactionId",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "TransactionUploadBinary",
		tableName: "intrabanktransfers"
	};

	Object.freeze(config);

	return config;
})