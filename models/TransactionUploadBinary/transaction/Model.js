/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "transaction", "objectService" : "TransactionUploadBinary"};

    var setterFunctions = {
        addressLine: function(val, state) {
            context["field"] = "addressLine";
            context["metadata"] = (objectMetadata ? objectMetadata["addressLine"] : null);
            state['addressLine'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        amount: function(val, state) {
            context["field"] = "amount";
            context["metadata"] = (objectMetadata ? objectMetadata["amount"] : null);
            state['amount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        amountRecieved: function(val, state) {
            context["field"] = "amountRecieved";
            context["metadata"] = (objectMetadata ? objectMetadata["amountRecieved"] : null);
            state['amountRecieved'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        backImage1: function(val, state) {
            context["field"] = "backImage1";
            context["metadata"] = (objectMetadata ? objectMetadata["backImage1"] : null);
            state['backImage1'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        backImage2: function(val, state) {
            context["field"] = "backImage2";
            context["metadata"] = (objectMetadata ? objectMetadata["backImage2"] : null);
            state['backImage2'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        balanceAmount: function(val, state) {
            context["field"] = "balanceAmount";
            context["metadata"] = (objectMetadata ? objectMetadata["balanceAmount"] : null);
            state['balanceAmount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        balanceCreditDebitIndicator: function(val, state) {
            context["field"] = "balanceCreditDebitIndicator";
            context["metadata"] = (objectMetadata ? objectMetadata["balanceCreditDebitIndicator"] : null);
            state['balanceCreditDebitIndicator'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        balanceCurrency: function(val, state) {
            context["field"] = "balanceCurrency";
            context["metadata"] = (objectMetadata ? objectMetadata["balanceCurrency"] : null);
            state['balanceCurrency'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        balanceType: function(val, state) {
            context["field"] = "balanceType";
            context["metadata"] = (objectMetadata ? objectMetadata["balanceType"] : null);
            state['balanceType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        bankName: function(val, state) {
            context["field"] = "bankName";
            context["metadata"] = (objectMetadata ? objectMetadata["bankName"] : null);
            state['bankName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        bankName1: function(val, state) {
            context["field"] = "bankName1";
            context["metadata"] = (objectMetadata ? objectMetadata["bankName1"] : null);
            state['bankName1'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        bankName2: function(val, state) {
            context["field"] = "bankName2";
            context["metadata"] = (objectMetadata ? objectMetadata["bankName2"] : null);
            state['bankName2'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        baseCurrency: function(val, state) {
            context["field"] = "baseCurrency";
            context["metadata"] = (objectMetadata ? objectMetadata["baseCurrency"] : null);
            state['baseCurrency'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        beneficiaryName: function(val, state) {
            context["field"] = "beneficiaryName";
            context["metadata"] = (objectMetadata ? objectMetadata["beneficiaryName"] : null);
            state['beneficiaryName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        billCategory: function(val, state) {
            context["field"] = "billCategory";
            context["metadata"] = (objectMetadata ? objectMetadata["billCategory"] : null);
            state['billCategory'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        billerId: function(val, state) {
            context["field"] = "billerId";
            context["metadata"] = (objectMetadata ? objectMetadata["billerId"] : null);
            state['billerId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        billid: function(val, state) {
            context["field"] = "billid";
            context["metadata"] = (objectMetadata ? objectMetadata["billid"] : null);
            state['billid'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Bill_id: function(val, state) {
            context["field"] = "Bill_id";
            context["metadata"] = (objectMetadata ? objectMetadata["Bill_id"] : null);
            state['Bill_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        bookingDateTime: function(val, state) {
            context["field"] = "bookingDateTime";
            context["metadata"] = (objectMetadata ? objectMetadata["bookingDateTime"] : null);
            state['bookingDateTime'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        cardInstrumentAuthorisationType: function(val, state) {
            context["field"] = "cardInstrumentAuthorisationType";
            context["metadata"] = (objectMetadata ? objectMetadata["cardInstrumentAuthorisationType"] : null);
            state['cardInstrumentAuthorisationType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        cardInstrumentIdentification: function(val, state) {
            context["field"] = "cardInstrumentIdentification";
            context["metadata"] = (objectMetadata ? objectMetadata["cardInstrumentIdentification"] : null);
            state['cardInstrumentIdentification'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        cardInstrumentName: function(val, state) {
            context["field"] = "cardInstrumentName";
            context["metadata"] = (objectMetadata ? objectMetadata["cardInstrumentName"] : null);
            state['cardInstrumentName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        cardInstrumentSchemeName: function(val, state) {
            context["field"] = "cardInstrumentSchemeName";
            context["metadata"] = (objectMetadata ? objectMetadata["cardInstrumentSchemeName"] : null);
            state['cardInstrumentSchemeName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        cashAmount: function(val, state) {
            context["field"] = "cashAmount";
            context["metadata"] = (objectMetadata ? objectMetadata["cashAmount"] : null);
            state['cashAmount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        cashlessEmail: function(val, state) {
            context["field"] = "cashlessEmail";
            context["metadata"] = (objectMetadata ? objectMetadata["cashlessEmail"] : null);
            state['cashlessEmail'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        cashlessMode: function(val, state) {
            context["field"] = "cashlessMode";
            context["metadata"] = (objectMetadata ? objectMetadata["cashlessMode"] : null);
            state['cashlessMode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        cashlessOTP: function(val, state) {
            context["field"] = "cashlessOTP";
            context["metadata"] = (objectMetadata ? objectMetadata["cashlessOTP"] : null);
            state['cashlessOTP'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        cashlessOTPValidDate: function(val, state) {
            context["field"] = "cashlessOTPValidDate";
            context["metadata"] = (objectMetadata ? objectMetadata["cashlessOTPValidDate"] : null);
            state['cashlessOTPValidDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        cashlessPersonName: function(val, state) {
            context["field"] = "cashlessPersonName";
            context["metadata"] = (objectMetadata ? objectMetadata["cashlessPersonName"] : null);
            state['cashlessPersonName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        cashlessPhone: function(val, state) {
            context["field"] = "cashlessPhone";
            context["metadata"] = (objectMetadata ? objectMetadata["cashlessPhone"] : null);
            state['cashlessPhone'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        cashlessPin: function(val, state) {
            context["field"] = "cashlessPin";
            context["metadata"] = (objectMetadata ? objectMetadata["cashlessPin"] : null);
            state['cashlessPin'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        cashlessSecurityCode: function(val, state) {
            context["field"] = "cashlessSecurityCode";
            context["metadata"] = (objectMetadata ? objectMetadata["cashlessSecurityCode"] : null);
            state['cashlessSecurityCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        cashWithdrawalTransactionStatus: function(val, state) {
            context["field"] = "cashWithdrawalTransactionStatus";
            context["metadata"] = (objectMetadata ? objectMetadata["cashWithdrawalTransactionStatus"] : null);
            state['cashWithdrawalTransactionStatus'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        category: function(val, state) {
            context["field"] = "category";
            context["metadata"] = (objectMetadata ? objectMetadata["category"] : null);
            state['category'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        chargeAmount: function(val, state) {
            context["field"] = "chargeAmount";
            context["metadata"] = (objectMetadata ? objectMetadata["chargeAmount"] : null);
            state['chargeAmount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        chargeCurrency: function(val, state) {
            context["field"] = "chargeCurrency";
            context["metadata"] = (objectMetadata ? objectMetadata["chargeCurrency"] : null);
            state['chargeCurrency'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        checkDateOfIssue: function(val, state) {
            context["field"] = "checkDateOfIssue";
            context["metadata"] = (objectMetadata ? objectMetadata["checkDateOfIssue"] : null);
            state['checkDateOfIssue'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        checkDesc: function(val, state) {
            context["field"] = "checkDesc";
            context["metadata"] = (objectMetadata ? objectMetadata["checkDesc"] : null);
            state['checkDesc'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        checkImage: function(val, state) {
            context["field"] = "checkImage";
            context["metadata"] = (objectMetadata ? objectMetadata["checkImage"] : null);
            state['checkImage'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        checkImageBack: function(val, state) {
            context["field"] = "checkImageBack";
            context["metadata"] = (objectMetadata ? objectMetadata["checkImageBack"] : null);
            state['checkImageBack'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        checkNumber: function(val, state) {
            context["field"] = "checkNumber";
            context["metadata"] = (objectMetadata ? objectMetadata["checkNumber"] : null);
            state['checkNumber'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        checkNumber1: function(val, state) {
            context["field"] = "checkNumber1";
            context["metadata"] = (objectMetadata ? objectMetadata["checkNumber1"] : null);
            state['checkNumber1'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        checkNumber2: function(val, state) {
            context["field"] = "checkNumber2";
            context["metadata"] = (objectMetadata ? objectMetadata["checkNumber2"] : null);
            state['checkNumber2'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        checkReason: function(val, state) {
            context["field"] = "checkReason";
            context["metadata"] = (objectMetadata ? objectMetadata["checkReason"] : null);
            state['checkReason'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        ConsentId: function(val, state) {
            context["field"] = "ConsentId";
            context["metadata"] = (objectMetadata ? objectMetadata["ConsentId"] : null);
            state['ConsentId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        contractIdentification: function(val, state) {
            context["field"] = "contractIdentification";
            context["metadata"] = (objectMetadata ? objectMetadata["contractIdentification"] : null);
            state['contractIdentification'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        convertedAmount: function(val, state) {
            context["field"] = "convertedAmount";
            context["metadata"] = (objectMetadata ? objectMetadata["convertedAmount"] : null);
            state['convertedAmount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        createdDate: function(val, state) {
            context["field"] = "createdDate";
            context["metadata"] = (objectMetadata ? objectMetadata["createdDate"] : null);
            state['createdDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        creditorAccountIdentification: function(val, state) {
            context["field"] = "creditorAccountIdentification";
            context["metadata"] = (objectMetadata ? objectMetadata["creditorAccountIdentification"] : null);
            state['creditorAccountIdentification'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        creditorAccountName: function(val, state) {
            context["field"] = "creditorAccountName";
            context["metadata"] = (objectMetadata ? objectMetadata["creditorAccountName"] : null);
            state['creditorAccountName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        creditorAccountSchemeName: function(val, state) {
            context["field"] = "creditorAccountSchemeName";
            context["metadata"] = (objectMetadata ? objectMetadata["creditorAccountSchemeName"] : null);
            state['creditorAccountSchemeName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        creditorAccountSeconIdentification: function(val, state) {
            context["field"] = "creditorAccountSeconIdentification";
            context["metadata"] = (objectMetadata ? objectMetadata["creditorAccountSeconIdentification"] : null);
            state['creditorAccountSeconIdentification'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        creditorAgentAddressLine: function(val, state) {
            context["field"] = "creditorAgentAddressLine";
            context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentAddressLine"] : null);
            state['creditorAgentAddressLine'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        creditorAgentaddressType: function(val, state) {
            context["field"] = "creditorAgentaddressType";
            context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentaddressType"] : null);
            state['creditorAgentaddressType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        creditorAgentBuildingNumber: function(val, state) {
            context["field"] = "creditorAgentBuildingNumber";
            context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentBuildingNumber"] : null);
            state['creditorAgentBuildingNumber'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        creditorAgentCountry: function(val, state) {
            context["field"] = "creditorAgentCountry";
            context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentCountry"] : null);
            state['creditorAgentCountry'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        creditorAgentCountrySubDivision: function(val, state) {
            context["field"] = "creditorAgentCountrySubDivision";
            context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentCountrySubDivision"] : null);
            state['creditorAgentCountrySubDivision'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        creditorAgentDepartment: function(val, state) {
            context["field"] = "creditorAgentDepartment";
            context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentDepartment"] : null);
            state['creditorAgentDepartment'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        creditorAgentIdentification: function(val, state) {
            context["field"] = "creditorAgentIdentification";
            context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentIdentification"] : null);
            state['creditorAgentIdentification'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        creditorAgentName: function(val, state) {
            context["field"] = "creditorAgentName";
            context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentName"] : null);
            state['creditorAgentName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        creditorAgentPostCode: function(val, state) {
            context["field"] = "creditorAgentPostCode";
            context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentPostCode"] : null);
            state['creditorAgentPostCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        creditorAgentSchemeName: function(val, state) {
            context["field"] = "creditorAgentSchemeName";
            context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentSchemeName"] : null);
            state['creditorAgentSchemeName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        creditorAgentStreetName: function(val, state) {
            context["field"] = "creditorAgentStreetName";
            context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentStreetName"] : null);
            state['creditorAgentStreetName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        creditorAgentSubDepartment: function(val, state) {
            context["field"] = "creditorAgentSubDepartment";
            context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentSubDepartment"] : null);
            state['creditorAgentSubDepartment'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        creditorAgentTownName: function(val, state) {
            context["field"] = "creditorAgentTownName";
            context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentTownName"] : null);
            state['creditorAgentTownName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Customer_id: function(val, state) {
            context["field"] = "Customer_id";
            context["metadata"] = (objectMetadata ? objectMetadata["Customer_id"] : null);
            state['Customer_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        dataStatus: function(val, state) {
            context["field"] = "dataStatus";
            context["metadata"] = (objectMetadata ? objectMetadata["dataStatus"] : null);
            state['dataStatus'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        debtorAccountIdentification: function(val, state) {
            context["field"] = "debtorAccountIdentification";
            context["metadata"] = (objectMetadata ? objectMetadata["debtorAccountIdentification"] : null);
            state['debtorAccountIdentification'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        debtorAccountName: function(val, state) {
            context["field"] = "debtorAccountName";
            context["metadata"] = (objectMetadata ? objectMetadata["debtorAccountName"] : null);
            state['debtorAccountName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        debtorAccountSchemeName: function(val, state) {
            context["field"] = "debtorAccountSchemeName";
            context["metadata"] = (objectMetadata ? objectMetadata["debtorAccountSchemeName"] : null);
            state['debtorAccountSchemeName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        debtorAccountSeconIdentification: function(val, state) {
            context["field"] = "debtorAccountSeconIdentification";
            context["metadata"] = (objectMetadata ? objectMetadata["debtorAccountSeconIdentification"] : null);
            state['debtorAccountSeconIdentification'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        debtorAgentAddressLine: function(val, state) {
            context["field"] = "debtorAgentAddressLine";
            context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentAddressLine"] : null);
            state['debtorAgentAddressLine'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        debtorAgentAddressType: function(val, state) {
            context["field"] = "debtorAgentAddressType";
            context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentAddressType"] : null);
            state['debtorAgentAddressType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        debtorAgentBuildingNumber: function(val, state) {
            context["field"] = "debtorAgentBuildingNumber";
            context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentBuildingNumber"] : null);
            state['debtorAgentBuildingNumber'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        debtorAgentCountry: function(val, state) {
            context["field"] = "debtorAgentCountry";
            context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentCountry"] : null);
            state['debtorAgentCountry'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        debtorAgentCountrySubDivision: function(val, state) {
            context["field"] = "debtorAgentCountrySubDivision";
            context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentCountrySubDivision"] : null);
            state['debtorAgentCountrySubDivision'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        debtorAgentDepartment: function(val, state) {
            context["field"] = "debtorAgentDepartment";
            context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentDepartment"] : null);
            state['debtorAgentDepartment'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        debtorAgentIdentification: function(val, state) {
            context["field"] = "debtorAgentIdentification";
            context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentIdentification"] : null);
            state['debtorAgentIdentification'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        debtorAgentName: function(val, state) {
            context["field"] = "debtorAgentName";
            context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentName"] : null);
            state['debtorAgentName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        debtorAgentSchemeName: function(val, state) {
            context["field"] = "debtorAgentSchemeName";
            context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentSchemeName"] : null);
            state['debtorAgentSchemeName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        debtorAgentStreetName: function(val, state) {
            context["field"] = "debtorAgentStreetName";
            context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentStreetName"] : null);
            state['debtorAgentStreetName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        debtorAgentSubDepartment: function(val, state) {
            context["field"] = "debtorAgentSubDepartment";
            context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentSubDepartment"] : null);
            state['debtorAgentSubDepartment'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        debtorAgentTownName: function(val, state) {
            context["field"] = "debtorAgentTownName";
            context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentTownName"] : null);
            state['debtorAgentTownName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        dedtorAgentPostCode: function(val, state) {
            context["field"] = "dedtorAgentPostCode";
            context["metadata"] = (objectMetadata ? objectMetadata["dedtorAgentPostCode"] : null);
            state['dedtorAgentPostCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        deliverBy: function(val, state) {
            context["field"] = "deliverBy";
            context["metadata"] = (objectMetadata ? objectMetadata["deliverBy"] : null);
            state['deliverBy'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        description: function(val, state) {
            context["field"] = "description";
            context["metadata"] = (objectMetadata ? objectMetadata["description"] : null);
            state['description'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        disputeDate: function(val, state) {
            context["field"] = "disputeDate";
            context["metadata"] = (objectMetadata ? objectMetadata["disputeDate"] : null);
            state['disputeDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        disputeDescription: function(val, state) {
            context["field"] = "disputeDescription";
            context["metadata"] = (objectMetadata ? objectMetadata["disputeDescription"] : null);
            state['disputeDescription'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        disputeReason: function(val, state) {
            context["field"] = "disputeReason";
            context["metadata"] = (objectMetadata ? objectMetadata["disputeReason"] : null);
            state['disputeReason'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        disputeStatus: function(val, state) {
            context["field"] = "disputeStatus";
            context["metadata"] = (objectMetadata ? objectMetadata["disputeStatus"] : null);
            state['disputeStatus'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        DomesticPaymentId: function(val, state) {
            context["field"] = "DomesticPaymentId";
            context["metadata"] = (objectMetadata ? objectMetadata["DomesticPaymentId"] : null);
            state['DomesticPaymentId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        exchangeRate: function(val, state) {
            context["field"] = "exchangeRate";
            context["metadata"] = (objectMetadata ? objectMetadata["exchangeRate"] : null);
            state['exchangeRate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        ExpenseCategory_id: function(val, state) {
            context["field"] = "ExpenseCategory_id";
            context["metadata"] = (objectMetadata ? objectMetadata["ExpenseCategory_id"] : null);
            state['ExpenseCategory_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        fee: function(val, state) {
            context["field"] = "fee";
            context["metadata"] = (objectMetadata ? objectMetadata["fee"] : null);
            state['fee'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        feeCurrency: function(val, state) {
            context["field"] = "feeCurrency";
            context["metadata"] = (objectMetadata ? objectMetadata["feeCurrency"] : null);
            state['feeCurrency'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        feePaidByReceipent: function(val, state) {
            context["field"] = "feePaidByReceipent";
            context["metadata"] = (objectMetadata ? objectMetadata["feePaidByReceipent"] : null);
            state['feePaidByReceipent'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        FinalPaymentDateTime: function(val, state) {
            context["field"] = "FinalPaymentDateTime";
            context["metadata"] = (objectMetadata ? objectMetadata["FinalPaymentDateTime"] : null);
            state['FinalPaymentDateTime'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        FirstPaymentDateTime: function(val, state) {
            context["field"] = "FirstPaymentDateTime";
            context["metadata"] = (objectMetadata ? objectMetadata["FirstPaymentDateTime"] : null);
            state['FirstPaymentDateTime'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        FPA_Amount: function(val, state) {
            context["field"] = "FPA_Amount";
            context["metadata"] = (objectMetadata ? objectMetadata["FPA_Amount"] : null);
            state['FPA_Amount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        FPA_Currency: function(val, state) {
            context["field"] = "FPA_Currency";
            context["metadata"] = (objectMetadata ? objectMetadata["FPA_Currency"] : null);
            state['FPA_Currency'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        FP_Amount: function(val, state) {
            context["field"] = "FP_Amount";
            context["metadata"] = (objectMetadata ? objectMetadata["FP_Amount"] : null);
            state['FP_Amount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        FP_Currency: function(val, state) {
            context["field"] = "FP_Currency";
            context["metadata"] = (objectMetadata ? objectMetadata["FP_Currency"] : null);
            state['FP_Currency'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        frequencyEndDate: function(val, state) {
            context["field"] = "frequencyEndDate";
            context["metadata"] = (objectMetadata ? objectMetadata["frequencyEndDate"] : null);
            state['frequencyEndDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        frequencyStartDate: function(val, state) {
            context["field"] = "frequencyStartDate";
            context["metadata"] = (objectMetadata ? objectMetadata["frequencyStartDate"] : null);
            state['frequencyStartDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        frequencyType: function(val, state) {
            context["field"] = "frequencyType";
            context["metadata"] = (objectMetadata ? objectMetadata["frequencyType"] : null);
            state['frequencyType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        fromAccountBalance: function(val, state) {
            context["field"] = "fromAccountBalance";
            context["metadata"] = (objectMetadata ? objectMetadata["fromAccountBalance"] : null);
            state['fromAccountBalance'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        fromAccountNumber: function(val, state) {
            context["field"] = "fromAccountNumber";
            context["metadata"] = (objectMetadata ? objectMetadata["fromAccountNumber"] : null);
            state['fromAccountNumber'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        frontImage1: function(val, state) {
            context["field"] = "frontImage1";
            context["metadata"] = (objectMetadata ? objectMetadata["frontImage1"] : null);
            state['frontImage1'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        frontImage2: function(val, state) {
            context["field"] = "frontImage2";
            context["metadata"] = (objectMetadata ? objectMetadata["frontImage2"] : null);
            state['frontImage2'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        hasDepositImage: function(val, state) {
            context["field"] = "hasDepositImage";
            context["metadata"] = (objectMetadata ? objectMetadata["hasDepositImage"] : null);
            state['hasDepositImage'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        IBAN: function(val, state) {
            context["field"] = "IBAN";
            context["metadata"] = (objectMetadata ? objectMetadata["IBAN"] : null);
            state['IBAN'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Id: function(val, state) {
            context["field"] = "Id";
            context["metadata"] = (objectMetadata ? objectMetadata["Id"] : null);
            state['Id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        imageURL1: function(val, state) {
            context["field"] = "imageURL1";
            context["metadata"] = (objectMetadata ? objectMetadata["imageURL1"] : null);
            state['imageURL1'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        imageURL2: function(val, state) {
            context["field"] = "imageURL2";
            context["metadata"] = (objectMetadata ? objectMetadata["imageURL2"] : null);
            state['imageURL2'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Initiation_EndToEndIdentification: function(val, state) {
            context["field"] = "Initiation_EndToEndIdentification";
            context["metadata"] = (objectMetadata ? objectMetadata["Initiation_EndToEndIdentification"] : null);
            state['Initiation_EndToEndIdentification'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Initiation_InstructionIdentification: function(val, state) {
            context["field"] = "Initiation_InstructionIdentification";
            context["metadata"] = (objectMetadata ? objectMetadata["Initiation_InstructionIdentification"] : null);
            state['Initiation_InstructionIdentification'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        instructedAmount: function(val, state) {
            context["field"] = "instructedAmount";
            context["metadata"] = (objectMetadata ? objectMetadata["instructedAmount"] : null);
            state['instructedAmount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        instructedCurrency: function(val, state) {
            context["field"] = "instructedCurrency";
            context["metadata"] = (objectMetadata ? objectMetadata["instructedCurrency"] : null);
            state['instructedCurrency'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isDisputed: function(val, state) {
            context["field"] = "isDisputed";
            context["metadata"] = (objectMetadata ? objectMetadata["isDisputed"] : null);
            state['isDisputed'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isPayeeDeleted: function(val, state) {
            context["field"] = "isPayeeDeleted";
            context["metadata"] = (objectMetadata ? objectMetadata["isPayeeDeleted"] : null);
            state['isPayeeDeleted'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isPaypersonDeleted: function(val, state) {
            context["field"] = "isPaypersonDeleted";
            context["metadata"] = (objectMetadata ? objectMetadata["isPaypersonDeleted"] : null);
            state['isPaypersonDeleted'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isScheduled: function(val, state) {
            context["field"] = "isScheduled";
            context["metadata"] = (objectMetadata ? objectMetadata["isScheduled"] : null);
            state['isScheduled'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        linkSelf: function(val, state) {
            context["field"] = "linkSelf";
            context["metadata"] = (objectMetadata ? objectMetadata["linkSelf"] : null);
            state['linkSelf'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        merchantCategoryCode: function(val, state) {
            context["field"] = "merchantCategoryCode";
            context["metadata"] = (objectMetadata ? objectMetadata["merchantCategoryCode"] : null);
            state['merchantCategoryCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        MerchantCustomerIdentification: function(val, state) {
            context["field"] = "MerchantCustomerIdentification";
            context["metadata"] = (objectMetadata ? objectMetadata["MerchantCustomerIdentification"] : null);
            state['MerchantCustomerIdentification'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        merchantName: function(val, state) {
            context["field"] = "merchantName";
            context["metadata"] = (objectMetadata ? objectMetadata["merchantName"] : null);
            state['merchantName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        NextPaymentDateTime: function(val, state) {
            context["field"] = "NextPaymentDateTime";
            context["metadata"] = (objectMetadata ? objectMetadata["NextPaymentDateTime"] : null);
            state['NextPaymentDateTime'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        notes: function(val, state) {
            context["field"] = "notes";
            context["metadata"] = (objectMetadata ? objectMetadata["notes"] : null);
            state['notes'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        NP_Amount: function(val, state) {
            context["field"] = "NP_Amount";
            context["metadata"] = (objectMetadata ? objectMetadata["NP_Amount"] : null);
            state['NP_Amount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        NP_Currency: function(val, state) {
            context["field"] = "NP_Currency";
            context["metadata"] = (objectMetadata ? objectMetadata["NP_Currency"] : null);
            state['NP_Currency'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        numberOfRecurrences: function(val, state) {
            context["field"] = "numberOfRecurrences";
            context["metadata"] = (objectMetadata ? objectMetadata["numberOfRecurrences"] : null);
            state['numberOfRecurrences'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        p2pAlternateContact: function(val, state) {
            context["field"] = "p2pAlternateContact";
            context["metadata"] = (objectMetadata ? objectMetadata["p2pAlternateContact"] : null);
            state['p2pAlternateContact'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        p2pContact: function(val, state) {
            context["field"] = "p2pContact";
            context["metadata"] = (objectMetadata ? objectMetadata["p2pContact"] : null);
            state['p2pContact'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        p2pRequiredDate: function(val, state) {
            context["field"] = "p2pRequiredDate";
            context["metadata"] = (objectMetadata ? objectMetadata["p2pRequiredDate"] : null);
            state['p2pRequiredDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        payeeCurrency: function(val, state) {
            context["field"] = "payeeCurrency";
            context["metadata"] = (objectMetadata ? objectMetadata["payeeCurrency"] : null);
            state['payeeCurrency'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        payeeName: function(val, state) {
            context["field"] = "payeeName";
            context["metadata"] = (objectMetadata ? objectMetadata["payeeName"] : null);
            state['payeeName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Payee_id: function(val, state) {
            context["field"] = "Payee_id";
            context["metadata"] = (objectMetadata ? objectMetadata["Payee_id"] : null);
            state['Payee_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        payoffFlag: function(val, state) {
            context["field"] = "payoffFlag";
            context["metadata"] = (objectMetadata ? objectMetadata["payoffFlag"] : null);
            state['payoffFlag'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        payPersonName: function(val, state) {
            context["field"] = "payPersonName";
            context["metadata"] = (objectMetadata ? objectMetadata["payPersonName"] : null);
            state['payPersonName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        payPersonNickName: function(val, state) {
            context["field"] = "payPersonNickName";
            context["metadata"] = (objectMetadata ? objectMetadata["payPersonNickName"] : null);
            state['payPersonNickName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        pdf: function(val, state) {
            context["field"] = "pdf";
            context["metadata"] = (objectMetadata ? objectMetadata["pdf"] : null);
            state['pdf'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        penaltyFlag: function(val, state) {
            context["field"] = "penaltyFlag";
            context["metadata"] = (objectMetadata ? objectMetadata["penaltyFlag"] : null);
            state['penaltyFlag'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Person_Id: function(val, state) {
            context["field"] = "Person_Id";
            context["metadata"] = (objectMetadata ? objectMetadata["Person_Id"] : null);
            state['Person_Id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        postedDate: function(val, state) {
            context["field"] = "postedDate";
            context["metadata"] = (objectMetadata ? objectMetadata["postedDate"] : null);
            state['postedDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        proprietaryTransactionCode: function(val, state) {
            context["field"] = "proprietaryTransactionCode";
            context["metadata"] = (objectMetadata ? objectMetadata["proprietaryTransactionCode"] : null);
            state['proprietaryTransactionCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        proprietaryTransactionIssuer: function(val, state) {
            context["field"] = "proprietaryTransactionIssuer";
            context["metadata"] = (objectMetadata ? objectMetadata["proprietaryTransactionIssuer"] : null);
            state['proprietaryTransactionIssuer'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        quotationDate: function(val, state) {
            context["field"] = "quotationDate";
            context["metadata"] = (objectMetadata ? objectMetadata["quotationDate"] : null);
            state['quotationDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        recurrenceDesc: function(val, state) {
            context["field"] = "recurrenceDesc";
            context["metadata"] = (objectMetadata ? objectMetadata["recurrenceDesc"] : null);
            state['recurrenceDesc'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Reference_id: function(val, state) {
            context["field"] = "Reference_id";
            context["metadata"] = (objectMetadata ? objectMetadata["Reference_id"] : null);
            state['Reference_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        requestCreatedDate: function(val, state) {
            context["field"] = "requestCreatedDate";
            context["metadata"] = (objectMetadata ? objectMetadata["requestCreatedDate"] : null);
            state['requestCreatedDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        requestValidity: function(val, state) {
            context["field"] = "requestValidity";
            context["metadata"] = (objectMetadata ? objectMetadata["requestValidity"] : null);
            state['requestValidity'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        RiskPaymentContextCode: function(val, state) {
            context["field"] = "RiskPaymentContextCode";
            context["metadata"] = (objectMetadata ? objectMetadata["RiskPaymentContextCode"] : null);
            state['RiskPaymentContextCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        RI_Reference: function(val, state) {
            context["field"] = "RI_Reference";
            context["metadata"] = (objectMetadata ? objectMetadata["RI_Reference"] : null);
            state['RI_Reference'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        RI_Unstructured: function(val, state) {
            context["field"] = "RI_Unstructured";
            context["metadata"] = (objectMetadata ? objectMetadata["RI_Unstructured"] : null);
            state['RI_Unstructured'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        scheduledDate: function(val, state) {
            context["field"] = "scheduledDate";
            context["metadata"] = (objectMetadata ? objectMetadata["scheduledDate"] : null);
            state['scheduledDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        serviceName: function(val, state) {
            context["field"] = "serviceName";
            context["metadata"] = (objectMetadata ? objectMetadata["serviceName"] : null);
            state['serviceName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        sortCode: function(val, state) {
            context["field"] = "sortCode";
            context["metadata"] = (objectMetadata ? objectMetadata["sortCode"] : null);
            state['sortCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        sourceCurrency: function(val, state) {
            context["field"] = "sourceCurrency";
            context["metadata"] = (objectMetadata ? objectMetadata["sourceCurrency"] : null);
            state['sourceCurrency'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        StandingOrderStatusCode: function(val, state) {
            context["field"] = "StandingOrderStatusCode";
            context["metadata"] = (objectMetadata ? objectMetadata["StandingOrderStatusCode"] : null);
            state['StandingOrderStatusCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        statementReference: function(val, state) {
            context["field"] = "statementReference";
            context["metadata"] = (objectMetadata ? objectMetadata["statementReference"] : null);
            state['statementReference'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        statusDesc: function(val, state) {
            context["field"] = "statusDesc";
            context["metadata"] = (objectMetadata ? objectMetadata["statusDesc"] : null);
            state['statusDesc'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        StatusUpdateDateTime: function(val, state) {
            context["field"] = "StatusUpdateDateTime";
            context["metadata"] = (objectMetadata ? objectMetadata["StatusUpdateDateTime"] : null);
            state['StatusUpdateDateTime'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Status_id: function(val, state) {
            context["field"] = "Status_id";
            context["metadata"] = (objectMetadata ? objectMetadata["Status_id"] : null);
            state['Status_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        swiftCode: function(val, state) {
            context["field"] = "swiftCode";
            context["metadata"] = (objectMetadata ? objectMetadata["swiftCode"] : null);
            state['swiftCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        targetCurrency: function(val, state) {
            context["field"] = "targetCurrency";
            context["metadata"] = (objectMetadata ? objectMetadata["targetCurrency"] : null);
            state['targetCurrency'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        toAccountBalance: function(val, state) {
            context["field"] = "toAccountBalance";
            context["metadata"] = (objectMetadata ? objectMetadata["toAccountBalance"] : null);
            state['toAccountBalance'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        toAccountNumber: function(val, state) {
            context["field"] = "toAccountNumber";
            context["metadata"] = (objectMetadata ? objectMetadata["toAccountNumber"] : null);
            state['toAccountNumber'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        toExternalAccountNumber: function(val, state) {
            context["field"] = "toExternalAccountNumber";
            context["metadata"] = (objectMetadata ? objectMetadata["toExternalAccountNumber"] : null);
            state['toExternalAccountNumber'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        transactionAmount: function(val, state) {
            context["field"] = "transactionAmount";
            context["metadata"] = (objectMetadata ? objectMetadata["transactionAmount"] : null);
            state['transactionAmount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        transactionCode: function(val, state) {
            context["field"] = "transactionCode";
            context["metadata"] = (objectMetadata ? objectMetadata["transactionCode"] : null);
            state['transactionCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        transactionComments: function(val, state) {
            context["field"] = "transactionComments";
            context["metadata"] = (objectMetadata ? objectMetadata["transactionComments"] : null);
            state['transactionComments'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        transactionCurrency: function(val, state) {
            context["field"] = "transactionCurrency";
            context["metadata"] = (objectMetadata ? objectMetadata["transactionCurrency"] : null);
            state['transactionCurrency'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        transactionDate: function(val, state) {
            context["field"] = "transactionDate";
            context["metadata"] = (objectMetadata ? objectMetadata["transactionDate"] : null);
            state['transactionDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        transactionInformation: function(val, state) {
            context["field"] = "transactionInformation";
            context["metadata"] = (objectMetadata ? objectMetadata["transactionInformation"] : null);
            state['transactionInformation'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        transactionSubCode: function(val, state) {
            context["field"] = "transactionSubCode";
            context["metadata"] = (objectMetadata ? objectMetadata["transactionSubCode"] : null);
            state['transactionSubCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        transCreditDebitIndicator: function(val, state) {
            context["field"] = "transCreditDebitIndicator";
            context["metadata"] = (objectMetadata ? objectMetadata["transCreditDebitIndicator"] : null);
            state['transCreditDebitIndicator'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Type_id: function(val, state) {
            context["field"] = "Type_id";
            context["metadata"] = (objectMetadata ? objectMetadata["Type_id"] : null);
            state['Type_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        unitCurrency: function(val, state) {
            context["field"] = "unitCurrency";
            context["metadata"] = (objectMetadata ? objectMetadata["unitCurrency"] : null);
            state['unitCurrency'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        valueDateTime: function(val, state) {
            context["field"] = "valueDateTime";
            context["metadata"] = (objectMetadata ? objectMetadata["valueDateTime"] : null);
            state['valueDateTime'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        viewReportLink: function(val, state) {
            context["field"] = "viewReportLink";
            context["metadata"] = (objectMetadata ? objectMetadata["viewReportLink"] : null);
            state['viewReportLink'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        withdrawlAmount1: function(val, state) {
            context["field"] = "withdrawlAmount1";
            context["metadata"] = (objectMetadata ? objectMetadata["withdrawlAmount1"] : null);
            state['withdrawlAmount1'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        withdrawlAmount2: function(val, state) {
            context["field"] = "withdrawlAmount2";
            context["metadata"] = (objectMetadata ? objectMetadata["withdrawlAmount2"] : null);
            state['withdrawlAmount2'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function transaction(defaultValues) {
        var privateState = {};
        context["field"] = "addressLine";
        context["metadata"] = (objectMetadata ? objectMetadata["addressLine"] : null);
        privateState.addressLine = defaultValues ?
            (defaultValues["addressLine"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["addressLine"], context) :
                null) :
            null;

        context["field"] = "amount";
        context["metadata"] = (objectMetadata ? objectMetadata["amount"] : null);
        privateState.amount = defaultValues ?
            (defaultValues["amount"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["amount"], context) :
                null) :
            null;

        context["field"] = "amountRecieved";
        context["metadata"] = (objectMetadata ? objectMetadata["amountRecieved"] : null);
        privateState.amountRecieved = defaultValues ?
            (defaultValues["amountRecieved"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["amountRecieved"], context) :
                null) :
            null;

        context["field"] = "backImage1";
        context["metadata"] = (objectMetadata ? objectMetadata["backImage1"] : null);
        privateState.backImage1 = defaultValues ?
            (defaultValues["backImage1"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["backImage1"], context) :
                null) :
            null;

        context["field"] = "backImage2";
        context["metadata"] = (objectMetadata ? objectMetadata["backImage2"] : null);
        privateState.backImage2 = defaultValues ?
            (defaultValues["backImage2"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["backImage2"], context) :
                null) :
            null;

        context["field"] = "balanceAmount";
        context["metadata"] = (objectMetadata ? objectMetadata["balanceAmount"] : null);
        privateState.balanceAmount = defaultValues ?
            (defaultValues["balanceAmount"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["balanceAmount"], context) :
                null) :
            null;

        context["field"] = "balanceCreditDebitIndicator";
        context["metadata"] = (objectMetadata ? objectMetadata["balanceCreditDebitIndicator"] : null);
        privateState.balanceCreditDebitIndicator = defaultValues ?
            (defaultValues["balanceCreditDebitIndicator"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["balanceCreditDebitIndicator"], context) :
                null) :
            null;

        context["field"] = "balanceCurrency";
        context["metadata"] = (objectMetadata ? objectMetadata["balanceCurrency"] : null);
        privateState.balanceCurrency = defaultValues ?
            (defaultValues["balanceCurrency"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["balanceCurrency"], context) :
                null) :
            null;

        context["field"] = "balanceType";
        context["metadata"] = (objectMetadata ? objectMetadata["balanceType"] : null);
        privateState.balanceType = defaultValues ?
            (defaultValues["balanceType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["balanceType"], context) :
                null) :
            null;

        context["field"] = "bankName";
        context["metadata"] = (objectMetadata ? objectMetadata["bankName"] : null);
        privateState.bankName = defaultValues ?
            (defaultValues["bankName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["bankName"], context) :
                null) :
            null;

        context["field"] = "bankName1";
        context["metadata"] = (objectMetadata ? objectMetadata["bankName1"] : null);
        privateState.bankName1 = defaultValues ?
            (defaultValues["bankName1"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["bankName1"], context) :
                null) :
            null;

        context["field"] = "bankName2";
        context["metadata"] = (objectMetadata ? objectMetadata["bankName2"] : null);
        privateState.bankName2 = defaultValues ?
            (defaultValues["bankName2"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["bankName2"], context) :
                null) :
            null;

        context["field"] = "baseCurrency";
        context["metadata"] = (objectMetadata ? objectMetadata["baseCurrency"] : null);
        privateState.baseCurrency = defaultValues ?
            (defaultValues["baseCurrency"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["baseCurrency"], context) :
                null) :
            null;

        context["field"] = "beneficiaryName";
        context["metadata"] = (objectMetadata ? objectMetadata["beneficiaryName"] : null);
        privateState.beneficiaryName = defaultValues ?
            (defaultValues["beneficiaryName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["beneficiaryName"], context) :
                null) :
            null;

        context["field"] = "billCategory";
        context["metadata"] = (objectMetadata ? objectMetadata["billCategory"] : null);
        privateState.billCategory = defaultValues ?
            (defaultValues["billCategory"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["billCategory"], context) :
                null) :
            null;

        context["field"] = "billerId";
        context["metadata"] = (objectMetadata ? objectMetadata["billerId"] : null);
        privateState.billerId = defaultValues ?
            (defaultValues["billerId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["billerId"], context) :
                null) :
            null;

        context["field"] = "billid";
        context["metadata"] = (objectMetadata ? objectMetadata["billid"] : null);
        privateState.billid = defaultValues ?
            (defaultValues["billid"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["billid"], context) :
                null) :
            null;

        context["field"] = "Bill_id";
        context["metadata"] = (objectMetadata ? objectMetadata["Bill_id"] : null);
        privateState.Bill_id = defaultValues ?
            (defaultValues["Bill_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Bill_id"], context) :
                null) :
            null;

        context["field"] = "bookingDateTime";
        context["metadata"] = (objectMetadata ? objectMetadata["bookingDateTime"] : null);
        privateState.bookingDateTime = defaultValues ?
            (defaultValues["bookingDateTime"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["bookingDateTime"], context) :
                null) :
            null;

        context["field"] = "cardInstrumentAuthorisationType";
        context["metadata"] = (objectMetadata ? objectMetadata["cardInstrumentAuthorisationType"] : null);
        privateState.cardInstrumentAuthorisationType = defaultValues ?
            (defaultValues["cardInstrumentAuthorisationType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["cardInstrumentAuthorisationType"], context) :
                null) :
            null;

        context["field"] = "cardInstrumentIdentification";
        context["metadata"] = (objectMetadata ? objectMetadata["cardInstrumentIdentification"] : null);
        privateState.cardInstrumentIdentification = defaultValues ?
            (defaultValues["cardInstrumentIdentification"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["cardInstrumentIdentification"], context) :
                null) :
            null;

        context["field"] = "cardInstrumentName";
        context["metadata"] = (objectMetadata ? objectMetadata["cardInstrumentName"] : null);
        privateState.cardInstrumentName = defaultValues ?
            (defaultValues["cardInstrumentName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["cardInstrumentName"], context) :
                null) :
            null;

        context["field"] = "cardInstrumentSchemeName";
        context["metadata"] = (objectMetadata ? objectMetadata["cardInstrumentSchemeName"] : null);
        privateState.cardInstrumentSchemeName = defaultValues ?
            (defaultValues["cardInstrumentSchemeName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["cardInstrumentSchemeName"], context) :
                null) :
            null;

        context["field"] = "cashAmount";
        context["metadata"] = (objectMetadata ? objectMetadata["cashAmount"] : null);
        privateState.cashAmount = defaultValues ?
            (defaultValues["cashAmount"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["cashAmount"], context) :
                null) :
            null;

        context["field"] = "cashlessEmail";
        context["metadata"] = (objectMetadata ? objectMetadata["cashlessEmail"] : null);
        privateState.cashlessEmail = defaultValues ?
            (defaultValues["cashlessEmail"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["cashlessEmail"], context) :
                null) :
            null;

        context["field"] = "cashlessMode";
        context["metadata"] = (objectMetadata ? objectMetadata["cashlessMode"] : null);
        privateState.cashlessMode = defaultValues ?
            (defaultValues["cashlessMode"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["cashlessMode"], context) :
                null) :
            null;

        context["field"] = "cashlessOTP";
        context["metadata"] = (objectMetadata ? objectMetadata["cashlessOTP"] : null);
        privateState.cashlessOTP = defaultValues ?
            (defaultValues["cashlessOTP"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["cashlessOTP"], context) :
                null) :
            null;

        context["field"] = "cashlessOTPValidDate";
        context["metadata"] = (objectMetadata ? objectMetadata["cashlessOTPValidDate"] : null);
        privateState.cashlessOTPValidDate = defaultValues ?
            (defaultValues["cashlessOTPValidDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["cashlessOTPValidDate"], context) :
                null) :
            null;

        context["field"] = "cashlessPersonName";
        context["metadata"] = (objectMetadata ? objectMetadata["cashlessPersonName"] : null);
        privateState.cashlessPersonName = defaultValues ?
            (defaultValues["cashlessPersonName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["cashlessPersonName"], context) :
                null) :
            null;

        context["field"] = "cashlessPhone";
        context["metadata"] = (objectMetadata ? objectMetadata["cashlessPhone"] : null);
        privateState.cashlessPhone = defaultValues ?
            (defaultValues["cashlessPhone"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["cashlessPhone"], context) :
                null) :
            null;

        context["field"] = "cashlessPin";
        context["metadata"] = (objectMetadata ? objectMetadata["cashlessPin"] : null);
        privateState.cashlessPin = defaultValues ?
            (defaultValues["cashlessPin"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["cashlessPin"], context) :
                null) :
            null;

        context["field"] = "cashlessSecurityCode";
        context["metadata"] = (objectMetadata ? objectMetadata["cashlessSecurityCode"] : null);
        privateState.cashlessSecurityCode = defaultValues ?
            (defaultValues["cashlessSecurityCode"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["cashlessSecurityCode"], context) :
                null) :
            null;

        context["field"] = "cashWithdrawalTransactionStatus";
        context["metadata"] = (objectMetadata ? objectMetadata["cashWithdrawalTransactionStatus"] : null);
        privateState.cashWithdrawalTransactionStatus = defaultValues ?
            (defaultValues["cashWithdrawalTransactionStatus"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["cashWithdrawalTransactionStatus"], context) :
                null) :
            null;

        context["field"] = "category";
        context["metadata"] = (objectMetadata ? objectMetadata["category"] : null);
        privateState.category = defaultValues ?
            (defaultValues["category"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["category"], context) :
                null) :
            null;

        context["field"] = "chargeAmount";
        context["metadata"] = (objectMetadata ? objectMetadata["chargeAmount"] : null);
        privateState.chargeAmount = defaultValues ?
            (defaultValues["chargeAmount"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["chargeAmount"], context) :
                null) :
            null;

        context["field"] = "chargeCurrency";
        context["metadata"] = (objectMetadata ? objectMetadata["chargeCurrency"] : null);
        privateState.chargeCurrency = defaultValues ?
            (defaultValues["chargeCurrency"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["chargeCurrency"], context) :
                null) :
            null;

        context["field"] = "checkDateOfIssue";
        context["metadata"] = (objectMetadata ? objectMetadata["checkDateOfIssue"] : null);
        privateState.checkDateOfIssue = defaultValues ?
            (defaultValues["checkDateOfIssue"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["checkDateOfIssue"], context) :
                null) :
            null;

        context["field"] = "checkDesc";
        context["metadata"] = (objectMetadata ? objectMetadata["checkDesc"] : null);
        privateState.checkDesc = defaultValues ?
            (defaultValues["checkDesc"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["checkDesc"], context) :
                null) :
            null;

        context["field"] = "checkImage";
        context["metadata"] = (objectMetadata ? objectMetadata["checkImage"] : null);
        privateState.checkImage = defaultValues ?
            (defaultValues["checkImage"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["checkImage"], context) :
                null) :
            null;

        context["field"] = "checkImageBack";
        context["metadata"] = (objectMetadata ? objectMetadata["checkImageBack"] : null);
        privateState.checkImageBack = defaultValues ?
            (defaultValues["checkImageBack"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["checkImageBack"], context) :
                null) :
            null;

        context["field"] = "checkNumber";
        context["metadata"] = (objectMetadata ? objectMetadata["checkNumber"] : null);
        privateState.checkNumber = defaultValues ?
            (defaultValues["checkNumber"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["checkNumber"], context) :
                null) :
            null;

        context["field"] = "checkNumber1";
        context["metadata"] = (objectMetadata ? objectMetadata["checkNumber1"] : null);
        privateState.checkNumber1 = defaultValues ?
            (defaultValues["checkNumber1"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["checkNumber1"], context) :
                null) :
            null;

        context["field"] = "checkNumber2";
        context["metadata"] = (objectMetadata ? objectMetadata["checkNumber2"] : null);
        privateState.checkNumber2 = defaultValues ?
            (defaultValues["checkNumber2"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["checkNumber2"], context) :
                null) :
            null;

        context["field"] = "checkReason";
        context["metadata"] = (objectMetadata ? objectMetadata["checkReason"] : null);
        privateState.checkReason = defaultValues ?
            (defaultValues["checkReason"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["checkReason"], context) :
                null) :
            null;

        context["field"] = "ConsentId";
        context["metadata"] = (objectMetadata ? objectMetadata["ConsentId"] : null);
        privateState.ConsentId = defaultValues ?
            (defaultValues["ConsentId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ConsentId"], context) :
                null) :
            null;

        context["field"] = "contractIdentification";
        context["metadata"] = (objectMetadata ? objectMetadata["contractIdentification"] : null);
        privateState.contractIdentification = defaultValues ?
            (defaultValues["contractIdentification"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["contractIdentification"], context) :
                null) :
            null;

        context["field"] = "convertedAmount";
        context["metadata"] = (objectMetadata ? objectMetadata["convertedAmount"] : null);
        privateState.convertedAmount = defaultValues ?
            (defaultValues["convertedAmount"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["convertedAmount"], context) :
                null) :
            null;

        context["field"] = "createdDate";
        context["metadata"] = (objectMetadata ? objectMetadata["createdDate"] : null);
        privateState.createdDate = defaultValues ?
            (defaultValues["createdDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["createdDate"], context) :
                null) :
            null;

        context["field"] = "creditorAccountIdentification";
        context["metadata"] = (objectMetadata ? objectMetadata["creditorAccountIdentification"] : null);
        privateState.creditorAccountIdentification = defaultValues ?
            (defaultValues["creditorAccountIdentification"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["creditorAccountIdentification"], context) :
                null) :
            null;

        context["field"] = "creditorAccountName";
        context["metadata"] = (objectMetadata ? objectMetadata["creditorAccountName"] : null);
        privateState.creditorAccountName = defaultValues ?
            (defaultValues["creditorAccountName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["creditorAccountName"], context) :
                null) :
            null;

        context["field"] = "creditorAccountSchemeName";
        context["metadata"] = (objectMetadata ? objectMetadata["creditorAccountSchemeName"] : null);
        privateState.creditorAccountSchemeName = defaultValues ?
            (defaultValues["creditorAccountSchemeName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["creditorAccountSchemeName"], context) :
                null) :
            null;

        context["field"] = "creditorAccountSeconIdentification";
        context["metadata"] = (objectMetadata ? objectMetadata["creditorAccountSeconIdentification"] : null);
        privateState.creditorAccountSeconIdentification = defaultValues ?
            (defaultValues["creditorAccountSeconIdentification"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["creditorAccountSeconIdentification"], context) :
                null) :
            null;

        context["field"] = "creditorAgentAddressLine";
        context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentAddressLine"] : null);
        privateState.creditorAgentAddressLine = defaultValues ?
            (defaultValues["creditorAgentAddressLine"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["creditorAgentAddressLine"], context) :
                null) :
            null;

        context["field"] = "creditorAgentaddressType";
        context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentaddressType"] : null);
        privateState.creditorAgentaddressType = defaultValues ?
            (defaultValues["creditorAgentaddressType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["creditorAgentaddressType"], context) :
                null) :
            null;

        context["field"] = "creditorAgentBuildingNumber";
        context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentBuildingNumber"] : null);
        privateState.creditorAgentBuildingNumber = defaultValues ?
            (defaultValues["creditorAgentBuildingNumber"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["creditorAgentBuildingNumber"], context) :
                null) :
            null;

        context["field"] = "creditorAgentCountry";
        context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentCountry"] : null);
        privateState.creditorAgentCountry = defaultValues ?
            (defaultValues["creditorAgentCountry"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["creditorAgentCountry"], context) :
                null) :
            null;

        context["field"] = "creditorAgentCountrySubDivision";
        context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentCountrySubDivision"] : null);
        privateState.creditorAgentCountrySubDivision = defaultValues ?
            (defaultValues["creditorAgentCountrySubDivision"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["creditorAgentCountrySubDivision"], context) :
                null) :
            null;

        context["field"] = "creditorAgentDepartment";
        context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentDepartment"] : null);
        privateState.creditorAgentDepartment = defaultValues ?
            (defaultValues["creditorAgentDepartment"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["creditorAgentDepartment"], context) :
                null) :
            null;

        context["field"] = "creditorAgentIdentification";
        context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentIdentification"] : null);
        privateState.creditorAgentIdentification = defaultValues ?
            (defaultValues["creditorAgentIdentification"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["creditorAgentIdentification"], context) :
                null) :
            null;

        context["field"] = "creditorAgentName";
        context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentName"] : null);
        privateState.creditorAgentName = defaultValues ?
            (defaultValues["creditorAgentName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["creditorAgentName"], context) :
                null) :
            null;

        context["field"] = "creditorAgentPostCode";
        context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentPostCode"] : null);
        privateState.creditorAgentPostCode = defaultValues ?
            (defaultValues["creditorAgentPostCode"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["creditorAgentPostCode"], context) :
                null) :
            null;

        context["field"] = "creditorAgentSchemeName";
        context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentSchemeName"] : null);
        privateState.creditorAgentSchemeName = defaultValues ?
            (defaultValues["creditorAgentSchemeName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["creditorAgentSchemeName"], context) :
                null) :
            null;

        context["field"] = "creditorAgentStreetName";
        context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentStreetName"] : null);
        privateState.creditorAgentStreetName = defaultValues ?
            (defaultValues["creditorAgentStreetName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["creditorAgentStreetName"], context) :
                null) :
            null;

        context["field"] = "creditorAgentSubDepartment";
        context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentSubDepartment"] : null);
        privateState.creditorAgentSubDepartment = defaultValues ?
            (defaultValues["creditorAgentSubDepartment"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["creditorAgentSubDepartment"], context) :
                null) :
            null;

        context["field"] = "creditorAgentTownName";
        context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentTownName"] : null);
        privateState.creditorAgentTownName = defaultValues ?
            (defaultValues["creditorAgentTownName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["creditorAgentTownName"], context) :
                null) :
            null;

        context["field"] = "Customer_id";
        context["metadata"] = (objectMetadata ? objectMetadata["Customer_id"] : null);
        privateState.Customer_id = defaultValues ?
            (defaultValues["Customer_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Customer_id"], context) :
                null) :
            null;

        context["field"] = "dataStatus";
        context["metadata"] = (objectMetadata ? objectMetadata["dataStatus"] : null);
        privateState.dataStatus = defaultValues ?
            (defaultValues["dataStatus"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["dataStatus"], context) :
                null) :
            null;

        context["field"] = "debtorAccountIdentification";
        context["metadata"] = (objectMetadata ? objectMetadata["debtorAccountIdentification"] : null);
        privateState.debtorAccountIdentification = defaultValues ?
            (defaultValues["debtorAccountIdentification"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["debtorAccountIdentification"], context) :
                null) :
            null;

        context["field"] = "debtorAccountName";
        context["metadata"] = (objectMetadata ? objectMetadata["debtorAccountName"] : null);
        privateState.debtorAccountName = defaultValues ?
            (defaultValues["debtorAccountName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["debtorAccountName"], context) :
                null) :
            null;

        context["field"] = "debtorAccountSchemeName";
        context["metadata"] = (objectMetadata ? objectMetadata["debtorAccountSchemeName"] : null);
        privateState.debtorAccountSchemeName = defaultValues ?
            (defaultValues["debtorAccountSchemeName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["debtorAccountSchemeName"], context) :
                null) :
            null;

        context["field"] = "debtorAccountSeconIdentification";
        context["metadata"] = (objectMetadata ? objectMetadata["debtorAccountSeconIdentification"] : null);
        privateState.debtorAccountSeconIdentification = defaultValues ?
            (defaultValues["debtorAccountSeconIdentification"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["debtorAccountSeconIdentification"], context) :
                null) :
            null;

        context["field"] = "debtorAgentAddressLine";
        context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentAddressLine"] : null);
        privateState.debtorAgentAddressLine = defaultValues ?
            (defaultValues["debtorAgentAddressLine"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["debtorAgentAddressLine"], context) :
                null) :
            null;

        context["field"] = "debtorAgentAddressType";
        context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentAddressType"] : null);
        privateState.debtorAgentAddressType = defaultValues ?
            (defaultValues["debtorAgentAddressType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["debtorAgentAddressType"], context) :
                null) :
            null;

        context["field"] = "debtorAgentBuildingNumber";
        context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentBuildingNumber"] : null);
        privateState.debtorAgentBuildingNumber = defaultValues ?
            (defaultValues["debtorAgentBuildingNumber"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["debtorAgentBuildingNumber"], context) :
                null) :
            null;

        context["field"] = "debtorAgentCountry";
        context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentCountry"] : null);
        privateState.debtorAgentCountry = defaultValues ?
            (defaultValues["debtorAgentCountry"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["debtorAgentCountry"], context) :
                null) :
            null;

        context["field"] = "debtorAgentCountrySubDivision";
        context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentCountrySubDivision"] : null);
        privateState.debtorAgentCountrySubDivision = defaultValues ?
            (defaultValues["debtorAgentCountrySubDivision"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["debtorAgentCountrySubDivision"], context) :
                null) :
            null;

        context["field"] = "debtorAgentDepartment";
        context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentDepartment"] : null);
        privateState.debtorAgentDepartment = defaultValues ?
            (defaultValues["debtorAgentDepartment"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["debtorAgentDepartment"], context) :
                null) :
            null;

        context["field"] = "debtorAgentIdentification";
        context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentIdentification"] : null);
        privateState.debtorAgentIdentification = defaultValues ?
            (defaultValues["debtorAgentIdentification"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["debtorAgentIdentification"], context) :
                null) :
            null;

        context["field"] = "debtorAgentName";
        context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentName"] : null);
        privateState.debtorAgentName = defaultValues ?
            (defaultValues["debtorAgentName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["debtorAgentName"], context) :
                null) :
            null;

        context["field"] = "debtorAgentSchemeName";
        context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentSchemeName"] : null);
        privateState.debtorAgentSchemeName = defaultValues ?
            (defaultValues["debtorAgentSchemeName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["debtorAgentSchemeName"], context) :
                null) :
            null;

        context["field"] = "debtorAgentStreetName";
        context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentStreetName"] : null);
        privateState.debtorAgentStreetName = defaultValues ?
            (defaultValues["debtorAgentStreetName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["debtorAgentStreetName"], context) :
                null) :
            null;

        context["field"] = "debtorAgentSubDepartment";
        context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentSubDepartment"] : null);
        privateState.debtorAgentSubDepartment = defaultValues ?
            (defaultValues["debtorAgentSubDepartment"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["debtorAgentSubDepartment"], context) :
                null) :
            null;

        context["field"] = "debtorAgentTownName";
        context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentTownName"] : null);
        privateState.debtorAgentTownName = defaultValues ?
            (defaultValues["debtorAgentTownName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["debtorAgentTownName"], context) :
                null) :
            null;

        context["field"] = "dedtorAgentPostCode";
        context["metadata"] = (objectMetadata ? objectMetadata["dedtorAgentPostCode"] : null);
        privateState.dedtorAgentPostCode = defaultValues ?
            (defaultValues["dedtorAgentPostCode"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["dedtorAgentPostCode"], context) :
                null) :
            null;

        context["field"] = "deliverBy";
        context["metadata"] = (objectMetadata ? objectMetadata["deliverBy"] : null);
        privateState.deliverBy = defaultValues ?
            (defaultValues["deliverBy"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["deliverBy"], context) :
                null) :
            null;

        context["field"] = "description";
        context["metadata"] = (objectMetadata ? objectMetadata["description"] : null);
        privateState.description = defaultValues ?
            (defaultValues["description"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["description"], context) :
                null) :
            null;

        context["field"] = "disputeDate";
        context["metadata"] = (objectMetadata ? objectMetadata["disputeDate"] : null);
        privateState.disputeDate = defaultValues ?
            (defaultValues["disputeDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["disputeDate"], context) :
                null) :
            null;

        context["field"] = "disputeDescription";
        context["metadata"] = (objectMetadata ? objectMetadata["disputeDescription"] : null);
        privateState.disputeDescription = defaultValues ?
            (defaultValues["disputeDescription"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["disputeDescription"], context) :
                null) :
            null;

        context["field"] = "disputeReason";
        context["metadata"] = (objectMetadata ? objectMetadata["disputeReason"] : null);
        privateState.disputeReason = defaultValues ?
            (defaultValues["disputeReason"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["disputeReason"], context) :
                null) :
            null;

        context["field"] = "disputeStatus";
        context["metadata"] = (objectMetadata ? objectMetadata["disputeStatus"] : null);
        privateState.disputeStatus = defaultValues ?
            (defaultValues["disputeStatus"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["disputeStatus"], context) :
                null) :
            null;

        context["field"] = "DomesticPaymentId";
        context["metadata"] = (objectMetadata ? objectMetadata["DomesticPaymentId"] : null);
        privateState.DomesticPaymentId = defaultValues ?
            (defaultValues["DomesticPaymentId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["DomesticPaymentId"], context) :
                null) :
            null;

        context["field"] = "exchangeRate";
        context["metadata"] = (objectMetadata ? objectMetadata["exchangeRate"] : null);
        privateState.exchangeRate = defaultValues ?
            (defaultValues["exchangeRate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["exchangeRate"], context) :
                null) :
            null;

        context["field"] = "ExpenseCategory_id";
        context["metadata"] = (objectMetadata ? objectMetadata["ExpenseCategory_id"] : null);
        privateState.ExpenseCategory_id = defaultValues ?
            (defaultValues["ExpenseCategory_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ExpenseCategory_id"], context) :
                null) :
            null;

        context["field"] = "fee";
        context["metadata"] = (objectMetadata ? objectMetadata["fee"] : null);
        privateState.fee = defaultValues ?
            (defaultValues["fee"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["fee"], context) :
                null) :
            null;

        context["field"] = "feeCurrency";
        context["metadata"] = (objectMetadata ? objectMetadata["feeCurrency"] : null);
        privateState.feeCurrency = defaultValues ?
            (defaultValues["feeCurrency"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["feeCurrency"], context) :
                null) :
            null;

        context["field"] = "feePaidByReceipent";
        context["metadata"] = (objectMetadata ? objectMetadata["feePaidByReceipent"] : null);
        privateState.feePaidByReceipent = defaultValues ?
            (defaultValues["feePaidByReceipent"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["feePaidByReceipent"], context) :
                null) :
            null;

        context["field"] = "FinalPaymentDateTime";
        context["metadata"] = (objectMetadata ? objectMetadata["FinalPaymentDateTime"] : null);
        privateState.FinalPaymentDateTime = defaultValues ?
            (defaultValues["FinalPaymentDateTime"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["FinalPaymentDateTime"], context) :
                null) :
            null;

        context["field"] = "FirstPaymentDateTime";
        context["metadata"] = (objectMetadata ? objectMetadata["FirstPaymentDateTime"] : null);
        privateState.FirstPaymentDateTime = defaultValues ?
            (defaultValues["FirstPaymentDateTime"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["FirstPaymentDateTime"], context) :
                null) :
            null;

        context["field"] = "FPA_Amount";
        context["metadata"] = (objectMetadata ? objectMetadata["FPA_Amount"] : null);
        privateState.FPA_Amount = defaultValues ?
            (defaultValues["FPA_Amount"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["FPA_Amount"], context) :
                null) :
            null;

        context["field"] = "FPA_Currency";
        context["metadata"] = (objectMetadata ? objectMetadata["FPA_Currency"] : null);
        privateState.FPA_Currency = defaultValues ?
            (defaultValues["FPA_Currency"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["FPA_Currency"], context) :
                null) :
            null;

        context["field"] = "FP_Amount";
        context["metadata"] = (objectMetadata ? objectMetadata["FP_Amount"] : null);
        privateState.FP_Amount = defaultValues ?
            (defaultValues["FP_Amount"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["FP_Amount"], context) :
                null) :
            null;

        context["field"] = "FP_Currency";
        context["metadata"] = (objectMetadata ? objectMetadata["FP_Currency"] : null);
        privateState.FP_Currency = defaultValues ?
            (defaultValues["FP_Currency"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["FP_Currency"], context) :
                null) :
            null;

        context["field"] = "frequencyEndDate";
        context["metadata"] = (objectMetadata ? objectMetadata["frequencyEndDate"] : null);
        privateState.frequencyEndDate = defaultValues ?
            (defaultValues["frequencyEndDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["frequencyEndDate"], context) :
                null) :
            null;

        context["field"] = "frequencyStartDate";
        context["metadata"] = (objectMetadata ? objectMetadata["frequencyStartDate"] : null);
        privateState.frequencyStartDate = defaultValues ?
            (defaultValues["frequencyStartDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["frequencyStartDate"], context) :
                null) :
            null;

        context["field"] = "frequencyType";
        context["metadata"] = (objectMetadata ? objectMetadata["frequencyType"] : null);
        privateState.frequencyType = defaultValues ?
            (defaultValues["frequencyType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["frequencyType"], context) :
                null) :
            null;

        context["field"] = "fromAccountBalance";
        context["metadata"] = (objectMetadata ? objectMetadata["fromAccountBalance"] : null);
        privateState.fromAccountBalance = defaultValues ?
            (defaultValues["fromAccountBalance"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["fromAccountBalance"], context) :
                null) :
            null;

        context["field"] = "fromAccountNumber";
        context["metadata"] = (objectMetadata ? objectMetadata["fromAccountNumber"] : null);
        privateState.fromAccountNumber = defaultValues ?
            (defaultValues["fromAccountNumber"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["fromAccountNumber"], context) :
                null) :
            null;

        context["field"] = "frontImage1";
        context["metadata"] = (objectMetadata ? objectMetadata["frontImage1"] : null);
        privateState.frontImage1 = defaultValues ?
            (defaultValues["frontImage1"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["frontImage1"], context) :
                null) :
            null;

        context["field"] = "frontImage2";
        context["metadata"] = (objectMetadata ? objectMetadata["frontImage2"] : null);
        privateState.frontImage2 = defaultValues ?
            (defaultValues["frontImage2"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["frontImage2"], context) :
                null) :
            null;

        context["field"] = "hasDepositImage";
        context["metadata"] = (objectMetadata ? objectMetadata["hasDepositImage"] : null);
        privateState.hasDepositImage = defaultValues ?
            (defaultValues["hasDepositImage"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["hasDepositImage"], context) :
                null) :
            null;

        context["field"] = "IBAN";
        context["metadata"] = (objectMetadata ? objectMetadata["IBAN"] : null);
        privateState.IBAN = defaultValues ?
            (defaultValues["IBAN"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["IBAN"], context) :
                null) :
            null;

        context["field"] = "Id";
        context["metadata"] = (objectMetadata ? objectMetadata["Id"] : null);
        privateState.Id = defaultValues ?
            (defaultValues["Id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Id"], context) :
                null) :
            null;

        context["field"] = "imageURL1";
        context["metadata"] = (objectMetadata ? objectMetadata["imageURL1"] : null);
        privateState.imageURL1 = defaultValues ?
            (defaultValues["imageURL1"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["imageURL1"], context) :
                null) :
            null;

        context["field"] = "imageURL2";
        context["metadata"] = (objectMetadata ? objectMetadata["imageURL2"] : null);
        privateState.imageURL2 = defaultValues ?
            (defaultValues["imageURL2"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["imageURL2"], context) :
                null) :
            null;

        context["field"] = "Initiation_EndToEndIdentification";
        context["metadata"] = (objectMetadata ? objectMetadata["Initiation_EndToEndIdentification"] : null);
        privateState.Initiation_EndToEndIdentification = defaultValues ?
            (defaultValues["Initiation_EndToEndIdentification"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Initiation_EndToEndIdentification"], context) :
                null) :
            null;

        context["field"] = "Initiation_InstructionIdentification";
        context["metadata"] = (objectMetadata ? objectMetadata["Initiation_InstructionIdentification"] : null);
        privateState.Initiation_InstructionIdentification = defaultValues ?
            (defaultValues["Initiation_InstructionIdentification"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Initiation_InstructionIdentification"], context) :
                null) :
            null;

        context["field"] = "instructedAmount";
        context["metadata"] = (objectMetadata ? objectMetadata["instructedAmount"] : null);
        privateState.instructedAmount = defaultValues ?
            (defaultValues["instructedAmount"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["instructedAmount"], context) :
                null) :
            null;

        context["field"] = "instructedCurrency";
        context["metadata"] = (objectMetadata ? objectMetadata["instructedCurrency"] : null);
        privateState.instructedCurrency = defaultValues ?
            (defaultValues["instructedCurrency"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["instructedCurrency"], context) :
                null) :
            null;

        context["field"] = "isDisputed";
        context["metadata"] = (objectMetadata ? objectMetadata["isDisputed"] : null);
        privateState.isDisputed = defaultValues ?
            (defaultValues["isDisputed"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isDisputed"], context) :
                null) :
            null;

        context["field"] = "isPayeeDeleted";
        context["metadata"] = (objectMetadata ? objectMetadata["isPayeeDeleted"] : null);
        privateState.isPayeeDeleted = defaultValues ?
            (defaultValues["isPayeeDeleted"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isPayeeDeleted"], context) :
                null) :
            null;

        context["field"] = "isPaypersonDeleted";
        context["metadata"] = (objectMetadata ? objectMetadata["isPaypersonDeleted"] : null);
        privateState.isPaypersonDeleted = defaultValues ?
            (defaultValues["isPaypersonDeleted"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isPaypersonDeleted"], context) :
                null) :
            null;

        context["field"] = "isScheduled";
        context["metadata"] = (objectMetadata ? objectMetadata["isScheduled"] : null);
        privateState.isScheduled = defaultValues ?
            (defaultValues["isScheduled"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isScheduled"], context) :
                null) :
            null;

        context["field"] = "linkSelf";
        context["metadata"] = (objectMetadata ? objectMetadata["linkSelf"] : null);
        privateState.linkSelf = defaultValues ?
            (defaultValues["linkSelf"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["linkSelf"], context) :
                null) :
            null;

        context["field"] = "merchantCategoryCode";
        context["metadata"] = (objectMetadata ? objectMetadata["merchantCategoryCode"] : null);
        privateState.merchantCategoryCode = defaultValues ?
            (defaultValues["merchantCategoryCode"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["merchantCategoryCode"], context) :
                null) :
            null;

        context["field"] = "MerchantCustomerIdentification";
        context["metadata"] = (objectMetadata ? objectMetadata["MerchantCustomerIdentification"] : null);
        privateState.MerchantCustomerIdentification = defaultValues ?
            (defaultValues["MerchantCustomerIdentification"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["MerchantCustomerIdentification"], context) :
                null) :
            null;

        context["field"] = "merchantName";
        context["metadata"] = (objectMetadata ? objectMetadata["merchantName"] : null);
        privateState.merchantName = defaultValues ?
            (defaultValues["merchantName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["merchantName"], context) :
                null) :
            null;

        context["field"] = "NextPaymentDateTime";
        context["metadata"] = (objectMetadata ? objectMetadata["NextPaymentDateTime"] : null);
        privateState.NextPaymentDateTime = defaultValues ?
            (defaultValues["NextPaymentDateTime"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["NextPaymentDateTime"], context) :
                null) :
            null;

        context["field"] = "notes";
        context["metadata"] = (objectMetadata ? objectMetadata["notes"] : null);
        privateState.notes = defaultValues ?
            (defaultValues["notes"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["notes"], context) :
                null) :
            null;

        context["field"] = "NP_Amount";
        context["metadata"] = (objectMetadata ? objectMetadata["NP_Amount"] : null);
        privateState.NP_Amount = defaultValues ?
            (defaultValues["NP_Amount"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["NP_Amount"], context) :
                null) :
            null;

        context["field"] = "NP_Currency";
        context["metadata"] = (objectMetadata ? objectMetadata["NP_Currency"] : null);
        privateState.NP_Currency = defaultValues ?
            (defaultValues["NP_Currency"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["NP_Currency"], context) :
                null) :
            null;

        context["field"] = "numberOfRecurrences";
        context["metadata"] = (objectMetadata ? objectMetadata["numberOfRecurrences"] : null);
        privateState.numberOfRecurrences = defaultValues ?
            (defaultValues["numberOfRecurrences"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["numberOfRecurrences"], context) :
                null) :
            null;

        context["field"] = "p2pAlternateContact";
        context["metadata"] = (objectMetadata ? objectMetadata["p2pAlternateContact"] : null);
        privateState.p2pAlternateContact = defaultValues ?
            (defaultValues["p2pAlternateContact"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["p2pAlternateContact"], context) :
                null) :
            null;

        context["field"] = "p2pContact";
        context["metadata"] = (objectMetadata ? objectMetadata["p2pContact"] : null);
        privateState.p2pContact = defaultValues ?
            (defaultValues["p2pContact"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["p2pContact"], context) :
                null) :
            null;

        context["field"] = "p2pRequiredDate";
        context["metadata"] = (objectMetadata ? objectMetadata["p2pRequiredDate"] : null);
        privateState.p2pRequiredDate = defaultValues ?
            (defaultValues["p2pRequiredDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["p2pRequiredDate"], context) :
                null) :
            null;

        context["field"] = "payeeCurrency";
        context["metadata"] = (objectMetadata ? objectMetadata["payeeCurrency"] : null);
        privateState.payeeCurrency = defaultValues ?
            (defaultValues["payeeCurrency"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["payeeCurrency"], context) :
                null) :
            null;

        context["field"] = "payeeName";
        context["metadata"] = (objectMetadata ? objectMetadata["payeeName"] : null);
        privateState.payeeName = defaultValues ?
            (defaultValues["payeeName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["payeeName"], context) :
                null) :
            null;

        context["field"] = "Payee_id";
        context["metadata"] = (objectMetadata ? objectMetadata["Payee_id"] : null);
        privateState.Payee_id = defaultValues ?
            (defaultValues["Payee_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Payee_id"], context) :
                null) :
            null;

        context["field"] = "payoffFlag";
        context["metadata"] = (objectMetadata ? objectMetadata["payoffFlag"] : null);
        privateState.payoffFlag = defaultValues ?
            (defaultValues["payoffFlag"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["payoffFlag"], context) :
                null) :
            null;

        context["field"] = "payPersonName";
        context["metadata"] = (objectMetadata ? objectMetadata["payPersonName"] : null);
        privateState.payPersonName = defaultValues ?
            (defaultValues["payPersonName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["payPersonName"], context) :
                null) :
            null;

        context["field"] = "payPersonNickName";
        context["metadata"] = (objectMetadata ? objectMetadata["payPersonNickName"] : null);
        privateState.payPersonNickName = defaultValues ?
            (defaultValues["payPersonNickName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["payPersonNickName"], context) :
                null) :
            null;

        context["field"] = "pdf";
        context["metadata"] = (objectMetadata ? objectMetadata["pdf"] : null);
        privateState.pdf = defaultValues ?
            (defaultValues["pdf"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["pdf"], context) :
                null) :
            null;

        context["field"] = "penaltyFlag";
        context["metadata"] = (objectMetadata ? objectMetadata["penaltyFlag"] : null);
        privateState.penaltyFlag = defaultValues ?
            (defaultValues["penaltyFlag"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["penaltyFlag"], context) :
                null) :
            null;

        context["field"] = "Person_Id";
        context["metadata"] = (objectMetadata ? objectMetadata["Person_Id"] : null);
        privateState.Person_Id = defaultValues ?
            (defaultValues["Person_Id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Person_Id"], context) :
                null) :
            null;

        context["field"] = "postedDate";
        context["metadata"] = (objectMetadata ? objectMetadata["postedDate"] : null);
        privateState.postedDate = defaultValues ?
            (defaultValues["postedDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["postedDate"], context) :
                null) :
            null;

        context["field"] = "proprietaryTransactionCode";
        context["metadata"] = (objectMetadata ? objectMetadata["proprietaryTransactionCode"] : null);
        privateState.proprietaryTransactionCode = defaultValues ?
            (defaultValues["proprietaryTransactionCode"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["proprietaryTransactionCode"], context) :
                null) :
            null;

        context["field"] = "proprietaryTransactionIssuer";
        context["metadata"] = (objectMetadata ? objectMetadata["proprietaryTransactionIssuer"] : null);
        privateState.proprietaryTransactionIssuer = defaultValues ?
            (defaultValues["proprietaryTransactionIssuer"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["proprietaryTransactionIssuer"], context) :
                null) :
            null;

        context["field"] = "quotationDate";
        context["metadata"] = (objectMetadata ? objectMetadata["quotationDate"] : null);
        privateState.quotationDate = defaultValues ?
            (defaultValues["quotationDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["quotationDate"], context) :
                null) :
            null;

        context["field"] = "recurrenceDesc";
        context["metadata"] = (objectMetadata ? objectMetadata["recurrenceDesc"] : null);
        privateState.recurrenceDesc = defaultValues ?
            (defaultValues["recurrenceDesc"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["recurrenceDesc"], context) :
                null) :
            null;

        context["field"] = "Reference_id";
        context["metadata"] = (objectMetadata ? objectMetadata["Reference_id"] : null);
        privateState.Reference_id = defaultValues ?
            (defaultValues["Reference_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Reference_id"], context) :
                null) :
            null;

        context["field"] = "requestCreatedDate";
        context["metadata"] = (objectMetadata ? objectMetadata["requestCreatedDate"] : null);
        privateState.requestCreatedDate = defaultValues ?
            (defaultValues["requestCreatedDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["requestCreatedDate"], context) :
                null) :
            null;

        context["field"] = "requestValidity";
        context["metadata"] = (objectMetadata ? objectMetadata["requestValidity"] : null);
        privateState.requestValidity = defaultValues ?
            (defaultValues["requestValidity"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["requestValidity"], context) :
                null) :
            null;

        context["field"] = "RiskPaymentContextCode";
        context["metadata"] = (objectMetadata ? objectMetadata["RiskPaymentContextCode"] : null);
        privateState.RiskPaymentContextCode = defaultValues ?
            (defaultValues["RiskPaymentContextCode"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["RiskPaymentContextCode"], context) :
                null) :
            null;

        context["field"] = "RI_Reference";
        context["metadata"] = (objectMetadata ? objectMetadata["RI_Reference"] : null);
        privateState.RI_Reference = defaultValues ?
            (defaultValues["RI_Reference"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["RI_Reference"], context) :
                null) :
            null;

        context["field"] = "RI_Unstructured";
        context["metadata"] = (objectMetadata ? objectMetadata["RI_Unstructured"] : null);
        privateState.RI_Unstructured = defaultValues ?
            (defaultValues["RI_Unstructured"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["RI_Unstructured"], context) :
                null) :
            null;

        context["field"] = "scheduledDate";
        context["metadata"] = (objectMetadata ? objectMetadata["scheduledDate"] : null);
        privateState.scheduledDate = defaultValues ?
            (defaultValues["scheduledDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["scheduledDate"], context) :
                null) :
            null;

        context["field"] = "serviceName";
        context["metadata"] = (objectMetadata ? objectMetadata["serviceName"] : null);
        privateState.serviceName = defaultValues ?
            (defaultValues["serviceName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["serviceName"], context) :
                null) :
            null;

        context["field"] = "sortCode";
        context["metadata"] = (objectMetadata ? objectMetadata["sortCode"] : null);
        privateState.sortCode = defaultValues ?
            (defaultValues["sortCode"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["sortCode"], context) :
                null) :
            null;

        context["field"] = "sourceCurrency";
        context["metadata"] = (objectMetadata ? objectMetadata["sourceCurrency"] : null);
        privateState.sourceCurrency = defaultValues ?
            (defaultValues["sourceCurrency"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["sourceCurrency"], context) :
                null) :
            null;

        context["field"] = "StandingOrderStatusCode";
        context["metadata"] = (objectMetadata ? objectMetadata["StandingOrderStatusCode"] : null);
        privateState.StandingOrderStatusCode = defaultValues ?
            (defaultValues["StandingOrderStatusCode"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["StandingOrderStatusCode"], context) :
                null) :
            null;

        context["field"] = "statementReference";
        context["metadata"] = (objectMetadata ? objectMetadata["statementReference"] : null);
        privateState.statementReference = defaultValues ?
            (defaultValues["statementReference"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["statementReference"], context) :
                null) :
            null;

        context["field"] = "statusDesc";
        context["metadata"] = (objectMetadata ? objectMetadata["statusDesc"] : null);
        privateState.statusDesc = defaultValues ?
            (defaultValues["statusDesc"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["statusDesc"], context) :
                null) :
            null;

        context["field"] = "StatusUpdateDateTime";
        context["metadata"] = (objectMetadata ? objectMetadata["StatusUpdateDateTime"] : null);
        privateState.StatusUpdateDateTime = defaultValues ?
            (defaultValues["StatusUpdateDateTime"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["StatusUpdateDateTime"], context) :
                null) :
            null;

        context["field"] = "Status_id";
        context["metadata"] = (objectMetadata ? objectMetadata["Status_id"] : null);
        privateState.Status_id = defaultValues ?
            (defaultValues["Status_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Status_id"], context) :
                null) :
            null;

        context["field"] = "swiftCode";
        context["metadata"] = (objectMetadata ? objectMetadata["swiftCode"] : null);
        privateState.swiftCode = defaultValues ?
            (defaultValues["swiftCode"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["swiftCode"], context) :
                null) :
            null;

        context["field"] = "targetCurrency";
        context["metadata"] = (objectMetadata ? objectMetadata["targetCurrency"] : null);
        privateState.targetCurrency = defaultValues ?
            (defaultValues["targetCurrency"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["targetCurrency"], context) :
                null) :
            null;

        context["field"] = "toAccountBalance";
        context["metadata"] = (objectMetadata ? objectMetadata["toAccountBalance"] : null);
        privateState.toAccountBalance = defaultValues ?
            (defaultValues["toAccountBalance"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["toAccountBalance"], context) :
                null) :
            null;

        context["field"] = "toAccountNumber";
        context["metadata"] = (objectMetadata ? objectMetadata["toAccountNumber"] : null);
        privateState.toAccountNumber = defaultValues ?
            (defaultValues["toAccountNumber"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["toAccountNumber"], context) :
                null) :
            null;

        context["field"] = "toExternalAccountNumber";
        context["metadata"] = (objectMetadata ? objectMetadata["toExternalAccountNumber"] : null);
        privateState.toExternalAccountNumber = defaultValues ?
            (defaultValues["toExternalAccountNumber"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["toExternalAccountNumber"], context) :
                null) :
            null;

        context["field"] = "transactionAmount";
        context["metadata"] = (objectMetadata ? objectMetadata["transactionAmount"] : null);
        privateState.transactionAmount = defaultValues ?
            (defaultValues["transactionAmount"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["transactionAmount"], context) :
                null) :
            null;

        context["field"] = "transactionCode";
        context["metadata"] = (objectMetadata ? objectMetadata["transactionCode"] : null);
        privateState.transactionCode = defaultValues ?
            (defaultValues["transactionCode"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["transactionCode"], context) :
                null) :
            null;

        context["field"] = "transactionComments";
        context["metadata"] = (objectMetadata ? objectMetadata["transactionComments"] : null);
        privateState.transactionComments = defaultValues ?
            (defaultValues["transactionComments"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["transactionComments"], context) :
                null) :
            null;

        context["field"] = "transactionCurrency";
        context["metadata"] = (objectMetadata ? objectMetadata["transactionCurrency"] : null);
        privateState.transactionCurrency = defaultValues ?
            (defaultValues["transactionCurrency"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["transactionCurrency"], context) :
                null) :
            null;

        context["field"] = "transactionDate";
        context["metadata"] = (objectMetadata ? objectMetadata["transactionDate"] : null);
        privateState.transactionDate = defaultValues ?
            (defaultValues["transactionDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["transactionDate"], context) :
                null) :
            null;

        context["field"] = "transactionInformation";
        context["metadata"] = (objectMetadata ? objectMetadata["transactionInformation"] : null);
        privateState.transactionInformation = defaultValues ?
            (defaultValues["transactionInformation"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["transactionInformation"], context) :
                null) :
            null;

        context["field"] = "transactionSubCode";
        context["metadata"] = (objectMetadata ? objectMetadata["transactionSubCode"] : null);
        privateState.transactionSubCode = defaultValues ?
            (defaultValues["transactionSubCode"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["transactionSubCode"], context) :
                null) :
            null;

        context["field"] = "transCreditDebitIndicator";
        context["metadata"] = (objectMetadata ? objectMetadata["transCreditDebitIndicator"] : null);
        privateState.transCreditDebitIndicator = defaultValues ?
            (defaultValues["transCreditDebitIndicator"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["transCreditDebitIndicator"], context) :
                null) :
            null;

        context["field"] = "Type_id";
        context["metadata"] = (objectMetadata ? objectMetadata["Type_id"] : null);
        privateState.Type_id = defaultValues ?
            (defaultValues["Type_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Type_id"], context) :
                null) :
            null;

        context["field"] = "unitCurrency";
        context["metadata"] = (objectMetadata ? objectMetadata["unitCurrency"] : null);
        privateState.unitCurrency = defaultValues ?
            (defaultValues["unitCurrency"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["unitCurrency"], context) :
                null) :
            null;

        context["field"] = "valueDateTime";
        context["metadata"] = (objectMetadata ? objectMetadata["valueDateTime"] : null);
        privateState.valueDateTime = defaultValues ?
            (defaultValues["valueDateTime"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["valueDateTime"], context) :
                null) :
            null;

        context["field"] = "viewReportLink";
        context["metadata"] = (objectMetadata ? objectMetadata["viewReportLink"] : null);
        privateState.viewReportLink = defaultValues ?
            (defaultValues["viewReportLink"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["viewReportLink"], context) :
                null) :
            null;

        context["field"] = "withdrawlAmount1";
        context["metadata"] = (objectMetadata ? objectMetadata["withdrawlAmount1"] : null);
        privateState.withdrawlAmount1 = defaultValues ?
            (defaultValues["withdrawlAmount1"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["withdrawlAmount1"], context) :
                null) :
            null;

        context["field"] = "withdrawlAmount2";
        context["metadata"] = (objectMetadata ? objectMetadata["withdrawlAmount2"] : null);
        privateState.withdrawlAmount2 = defaultValues ?
            (defaultValues["withdrawlAmount2"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["withdrawlAmount2"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "addressLine": {
                get: function() {
                    context["field"] = "addressLine";
                    context["metadata"] = (objectMetadata ? objectMetadata["addressLine"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.addressLine, context);
                },
                set: function(val) {
                    setterFunctions['addressLine'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "amount": {
                get: function() {
                    context["field"] = "amount";
                    context["metadata"] = (objectMetadata ? objectMetadata["amount"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.amount, context);
                },
                set: function(val) {
                    setterFunctions['amount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "amountRecieved": {
                get: function() {
                    context["field"] = "amountRecieved";
                    context["metadata"] = (objectMetadata ? objectMetadata["amountRecieved"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.amountRecieved, context);
                },
                set: function(val) {
                    setterFunctions['amountRecieved'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "backImage1": {
                get: function() {
                    context["field"] = "backImage1";
                    context["metadata"] = (objectMetadata ? objectMetadata["backImage1"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.backImage1, context);
                },
                set: function(val) {
                    setterFunctions['backImage1'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "backImage2": {
                get: function() {
                    context["field"] = "backImage2";
                    context["metadata"] = (objectMetadata ? objectMetadata["backImage2"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.backImage2, context);
                },
                set: function(val) {
                    setterFunctions['backImage2'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "balanceAmount": {
                get: function() {
                    context["field"] = "balanceAmount";
                    context["metadata"] = (objectMetadata ? objectMetadata["balanceAmount"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.balanceAmount, context);
                },
                set: function(val) {
                    setterFunctions['balanceAmount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "balanceCreditDebitIndicator": {
                get: function() {
                    context["field"] = "balanceCreditDebitIndicator";
                    context["metadata"] = (objectMetadata ? objectMetadata["balanceCreditDebitIndicator"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.balanceCreditDebitIndicator, context);
                },
                set: function(val) {
                    setterFunctions['balanceCreditDebitIndicator'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "balanceCurrency": {
                get: function() {
                    context["field"] = "balanceCurrency";
                    context["metadata"] = (objectMetadata ? objectMetadata["balanceCurrency"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.balanceCurrency, context);
                },
                set: function(val) {
                    setterFunctions['balanceCurrency'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "balanceType": {
                get: function() {
                    context["field"] = "balanceType";
                    context["metadata"] = (objectMetadata ? objectMetadata["balanceType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.balanceType, context);
                },
                set: function(val) {
                    setterFunctions['balanceType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "bankName": {
                get: function() {
                    context["field"] = "bankName";
                    context["metadata"] = (objectMetadata ? objectMetadata["bankName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.bankName, context);
                },
                set: function(val) {
                    setterFunctions['bankName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "bankName1": {
                get: function() {
                    context["field"] = "bankName1";
                    context["metadata"] = (objectMetadata ? objectMetadata["bankName1"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.bankName1, context);
                },
                set: function(val) {
                    setterFunctions['bankName1'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "bankName2": {
                get: function() {
                    context["field"] = "bankName2";
                    context["metadata"] = (objectMetadata ? objectMetadata["bankName2"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.bankName2, context);
                },
                set: function(val) {
                    setterFunctions['bankName2'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "baseCurrency": {
                get: function() {
                    context["field"] = "baseCurrency";
                    context["metadata"] = (objectMetadata ? objectMetadata["baseCurrency"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.baseCurrency, context);
                },
                set: function(val) {
                    setterFunctions['baseCurrency'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "beneficiaryName": {
                get: function() {
                    context["field"] = "beneficiaryName";
                    context["metadata"] = (objectMetadata ? objectMetadata["beneficiaryName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.beneficiaryName, context);
                },
                set: function(val) {
                    setterFunctions['beneficiaryName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "billCategory": {
                get: function() {
                    context["field"] = "billCategory";
                    context["metadata"] = (objectMetadata ? objectMetadata["billCategory"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.billCategory, context);
                },
                set: function(val) {
                    setterFunctions['billCategory'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "billerId": {
                get: function() {
                    context["field"] = "billerId";
                    context["metadata"] = (objectMetadata ? objectMetadata["billerId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.billerId, context);
                },
                set: function(val) {
                    setterFunctions['billerId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "billid": {
                get: function() {
                    context["field"] = "billid";
                    context["metadata"] = (objectMetadata ? objectMetadata["billid"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.billid, context);
                },
                set: function(val) {
                    setterFunctions['billid'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Bill_id": {
                get: function() {
                    context["field"] = "Bill_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["Bill_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Bill_id, context);
                },
                set: function(val) {
                    setterFunctions['Bill_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "bookingDateTime": {
                get: function() {
                    context["field"] = "bookingDateTime";
                    context["metadata"] = (objectMetadata ? objectMetadata["bookingDateTime"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.bookingDateTime, context);
                },
                set: function(val) {
                    setterFunctions['bookingDateTime'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "cardInstrumentAuthorisationType": {
                get: function() {
                    context["field"] = "cardInstrumentAuthorisationType";
                    context["metadata"] = (objectMetadata ? objectMetadata["cardInstrumentAuthorisationType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.cardInstrumentAuthorisationType, context);
                },
                set: function(val) {
                    setterFunctions['cardInstrumentAuthorisationType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "cardInstrumentIdentification": {
                get: function() {
                    context["field"] = "cardInstrumentIdentification";
                    context["metadata"] = (objectMetadata ? objectMetadata["cardInstrumentIdentification"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.cardInstrumentIdentification, context);
                },
                set: function(val) {
                    setterFunctions['cardInstrumentIdentification'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "cardInstrumentName": {
                get: function() {
                    context["field"] = "cardInstrumentName";
                    context["metadata"] = (objectMetadata ? objectMetadata["cardInstrumentName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.cardInstrumentName, context);
                },
                set: function(val) {
                    setterFunctions['cardInstrumentName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "cardInstrumentSchemeName": {
                get: function() {
                    context["field"] = "cardInstrumentSchemeName";
                    context["metadata"] = (objectMetadata ? objectMetadata["cardInstrumentSchemeName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.cardInstrumentSchemeName, context);
                },
                set: function(val) {
                    setterFunctions['cardInstrumentSchemeName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "cashAmount": {
                get: function() {
                    context["field"] = "cashAmount";
                    context["metadata"] = (objectMetadata ? objectMetadata["cashAmount"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.cashAmount, context);
                },
                set: function(val) {
                    setterFunctions['cashAmount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "cashlessEmail": {
                get: function() {
                    context["field"] = "cashlessEmail";
                    context["metadata"] = (objectMetadata ? objectMetadata["cashlessEmail"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.cashlessEmail, context);
                },
                set: function(val) {
                    setterFunctions['cashlessEmail'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "cashlessMode": {
                get: function() {
                    context["field"] = "cashlessMode";
                    context["metadata"] = (objectMetadata ? objectMetadata["cashlessMode"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.cashlessMode, context);
                },
                set: function(val) {
                    setterFunctions['cashlessMode'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "cashlessOTP": {
                get: function() {
                    context["field"] = "cashlessOTP";
                    context["metadata"] = (objectMetadata ? objectMetadata["cashlessOTP"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.cashlessOTP, context);
                },
                set: function(val) {
                    setterFunctions['cashlessOTP'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "cashlessOTPValidDate": {
                get: function() {
                    context["field"] = "cashlessOTPValidDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["cashlessOTPValidDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.cashlessOTPValidDate, context);
                },
                set: function(val) {
                    setterFunctions['cashlessOTPValidDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "cashlessPersonName": {
                get: function() {
                    context["field"] = "cashlessPersonName";
                    context["metadata"] = (objectMetadata ? objectMetadata["cashlessPersonName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.cashlessPersonName, context);
                },
                set: function(val) {
                    setterFunctions['cashlessPersonName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "cashlessPhone": {
                get: function() {
                    context["field"] = "cashlessPhone";
                    context["metadata"] = (objectMetadata ? objectMetadata["cashlessPhone"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.cashlessPhone, context);
                },
                set: function(val) {
                    setterFunctions['cashlessPhone'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "cashlessPin": {
                get: function() {
                    context["field"] = "cashlessPin";
                    context["metadata"] = (objectMetadata ? objectMetadata["cashlessPin"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.cashlessPin, context);
                },
                set: function(val) {
                    setterFunctions['cashlessPin'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "cashlessSecurityCode": {
                get: function() {
                    context["field"] = "cashlessSecurityCode";
                    context["metadata"] = (objectMetadata ? objectMetadata["cashlessSecurityCode"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.cashlessSecurityCode, context);
                },
                set: function(val) {
                    setterFunctions['cashlessSecurityCode'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "cashWithdrawalTransactionStatus": {
                get: function() {
                    context["field"] = "cashWithdrawalTransactionStatus";
                    context["metadata"] = (objectMetadata ? objectMetadata["cashWithdrawalTransactionStatus"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.cashWithdrawalTransactionStatus, context);
                },
                set: function(val) {
                    setterFunctions['cashWithdrawalTransactionStatus'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "category": {
                get: function() {
                    context["field"] = "category";
                    context["metadata"] = (objectMetadata ? objectMetadata["category"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.category, context);
                },
                set: function(val) {
                    setterFunctions['category'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "chargeAmount": {
                get: function() {
                    context["field"] = "chargeAmount";
                    context["metadata"] = (objectMetadata ? objectMetadata["chargeAmount"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.chargeAmount, context);
                },
                set: function(val) {
                    setterFunctions['chargeAmount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "chargeCurrency": {
                get: function() {
                    context["field"] = "chargeCurrency";
                    context["metadata"] = (objectMetadata ? objectMetadata["chargeCurrency"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.chargeCurrency, context);
                },
                set: function(val) {
                    setterFunctions['chargeCurrency'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "checkDateOfIssue": {
                get: function() {
                    context["field"] = "checkDateOfIssue";
                    context["metadata"] = (objectMetadata ? objectMetadata["checkDateOfIssue"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.checkDateOfIssue, context);
                },
                set: function(val) {
                    setterFunctions['checkDateOfIssue'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "checkDesc": {
                get: function() {
                    context["field"] = "checkDesc";
                    context["metadata"] = (objectMetadata ? objectMetadata["checkDesc"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.checkDesc, context);
                },
                set: function(val) {
                    setterFunctions['checkDesc'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "checkImage": {
                get: function() {
                    context["field"] = "checkImage";
                    context["metadata"] = (objectMetadata ? objectMetadata["checkImage"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.checkImage, context);
                },
                set: function(val) {
                    setterFunctions['checkImage'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "checkImageBack": {
                get: function() {
                    context["field"] = "checkImageBack";
                    context["metadata"] = (objectMetadata ? objectMetadata["checkImageBack"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.checkImageBack, context);
                },
                set: function(val) {
                    setterFunctions['checkImageBack'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "checkNumber": {
                get: function() {
                    context["field"] = "checkNumber";
                    context["metadata"] = (objectMetadata ? objectMetadata["checkNumber"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.checkNumber, context);
                },
                set: function(val) {
                    setterFunctions['checkNumber'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "checkNumber1": {
                get: function() {
                    context["field"] = "checkNumber1";
                    context["metadata"] = (objectMetadata ? objectMetadata["checkNumber1"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.checkNumber1, context);
                },
                set: function(val) {
                    setterFunctions['checkNumber1'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "checkNumber2": {
                get: function() {
                    context["field"] = "checkNumber2";
                    context["metadata"] = (objectMetadata ? objectMetadata["checkNumber2"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.checkNumber2, context);
                },
                set: function(val) {
                    setterFunctions['checkNumber2'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "checkReason": {
                get: function() {
                    context["field"] = "checkReason";
                    context["metadata"] = (objectMetadata ? objectMetadata["checkReason"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.checkReason, context);
                },
                set: function(val) {
                    setterFunctions['checkReason'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "ConsentId": {
                get: function() {
                    context["field"] = "ConsentId";
                    context["metadata"] = (objectMetadata ? objectMetadata["ConsentId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ConsentId, context);
                },
                set: function(val) {
                    setterFunctions['ConsentId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "contractIdentification": {
                get: function() {
                    context["field"] = "contractIdentification";
                    context["metadata"] = (objectMetadata ? objectMetadata["contractIdentification"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.contractIdentification, context);
                },
                set: function(val) {
                    setterFunctions['contractIdentification'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "convertedAmount": {
                get: function() {
                    context["field"] = "convertedAmount";
                    context["metadata"] = (objectMetadata ? objectMetadata["convertedAmount"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.convertedAmount, context);
                },
                set: function(val) {
                    setterFunctions['convertedAmount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "createdDate": {
                get: function() {
                    context["field"] = "createdDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["createdDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.createdDate, context);
                },
                set: function(val) {
                    setterFunctions['createdDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "creditorAccountIdentification": {
                get: function() {
                    context["field"] = "creditorAccountIdentification";
                    context["metadata"] = (objectMetadata ? objectMetadata["creditorAccountIdentification"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.creditorAccountIdentification, context);
                },
                set: function(val) {
                    setterFunctions['creditorAccountIdentification'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "creditorAccountName": {
                get: function() {
                    context["field"] = "creditorAccountName";
                    context["metadata"] = (objectMetadata ? objectMetadata["creditorAccountName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.creditorAccountName, context);
                },
                set: function(val) {
                    setterFunctions['creditorAccountName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "creditorAccountSchemeName": {
                get: function() {
                    context["field"] = "creditorAccountSchemeName";
                    context["metadata"] = (objectMetadata ? objectMetadata["creditorAccountSchemeName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.creditorAccountSchemeName, context);
                },
                set: function(val) {
                    setterFunctions['creditorAccountSchemeName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "creditorAccountSeconIdentification": {
                get: function() {
                    context["field"] = "creditorAccountSeconIdentification";
                    context["metadata"] = (objectMetadata ? objectMetadata["creditorAccountSeconIdentification"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.creditorAccountSeconIdentification, context);
                },
                set: function(val) {
                    setterFunctions['creditorAccountSeconIdentification'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "creditorAgentAddressLine": {
                get: function() {
                    context["field"] = "creditorAgentAddressLine";
                    context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentAddressLine"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.creditorAgentAddressLine, context);
                },
                set: function(val) {
                    setterFunctions['creditorAgentAddressLine'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "creditorAgentaddressType": {
                get: function() {
                    context["field"] = "creditorAgentaddressType";
                    context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentaddressType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.creditorAgentaddressType, context);
                },
                set: function(val) {
                    setterFunctions['creditorAgentaddressType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "creditorAgentBuildingNumber": {
                get: function() {
                    context["field"] = "creditorAgentBuildingNumber";
                    context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentBuildingNumber"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.creditorAgentBuildingNumber, context);
                },
                set: function(val) {
                    setterFunctions['creditorAgentBuildingNumber'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "creditorAgentCountry": {
                get: function() {
                    context["field"] = "creditorAgentCountry";
                    context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentCountry"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.creditorAgentCountry, context);
                },
                set: function(val) {
                    setterFunctions['creditorAgentCountry'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "creditorAgentCountrySubDivision": {
                get: function() {
                    context["field"] = "creditorAgentCountrySubDivision";
                    context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentCountrySubDivision"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.creditorAgentCountrySubDivision, context);
                },
                set: function(val) {
                    setterFunctions['creditorAgentCountrySubDivision'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "creditorAgentDepartment": {
                get: function() {
                    context["field"] = "creditorAgentDepartment";
                    context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentDepartment"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.creditorAgentDepartment, context);
                },
                set: function(val) {
                    setterFunctions['creditorAgentDepartment'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "creditorAgentIdentification": {
                get: function() {
                    context["field"] = "creditorAgentIdentification";
                    context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentIdentification"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.creditorAgentIdentification, context);
                },
                set: function(val) {
                    setterFunctions['creditorAgentIdentification'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "creditorAgentName": {
                get: function() {
                    context["field"] = "creditorAgentName";
                    context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.creditorAgentName, context);
                },
                set: function(val) {
                    setterFunctions['creditorAgentName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "creditorAgentPostCode": {
                get: function() {
                    context["field"] = "creditorAgentPostCode";
                    context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentPostCode"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.creditorAgentPostCode, context);
                },
                set: function(val) {
                    setterFunctions['creditorAgentPostCode'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "creditorAgentSchemeName": {
                get: function() {
                    context["field"] = "creditorAgentSchemeName";
                    context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentSchemeName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.creditorAgentSchemeName, context);
                },
                set: function(val) {
                    setterFunctions['creditorAgentSchemeName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "creditorAgentStreetName": {
                get: function() {
                    context["field"] = "creditorAgentStreetName";
                    context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentStreetName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.creditorAgentStreetName, context);
                },
                set: function(val) {
                    setterFunctions['creditorAgentStreetName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "creditorAgentSubDepartment": {
                get: function() {
                    context["field"] = "creditorAgentSubDepartment";
                    context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentSubDepartment"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.creditorAgentSubDepartment, context);
                },
                set: function(val) {
                    setterFunctions['creditorAgentSubDepartment'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "creditorAgentTownName": {
                get: function() {
                    context["field"] = "creditorAgentTownName";
                    context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentTownName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.creditorAgentTownName, context);
                },
                set: function(val) {
                    setterFunctions['creditorAgentTownName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Customer_id": {
                get: function() {
                    context["field"] = "Customer_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["Customer_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Customer_id, context);
                },
                set: function(val) {
                    setterFunctions['Customer_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "dataStatus": {
                get: function() {
                    context["field"] = "dataStatus";
                    context["metadata"] = (objectMetadata ? objectMetadata["dataStatus"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.dataStatus, context);
                },
                set: function(val) {
                    setterFunctions['dataStatus'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "debtorAccountIdentification": {
                get: function() {
                    context["field"] = "debtorAccountIdentification";
                    context["metadata"] = (objectMetadata ? objectMetadata["debtorAccountIdentification"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.debtorAccountIdentification, context);
                },
                set: function(val) {
                    setterFunctions['debtorAccountIdentification'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "debtorAccountName": {
                get: function() {
                    context["field"] = "debtorAccountName";
                    context["metadata"] = (objectMetadata ? objectMetadata["debtorAccountName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.debtorAccountName, context);
                },
                set: function(val) {
                    setterFunctions['debtorAccountName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "debtorAccountSchemeName": {
                get: function() {
                    context["field"] = "debtorAccountSchemeName";
                    context["metadata"] = (objectMetadata ? objectMetadata["debtorAccountSchemeName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.debtorAccountSchemeName, context);
                },
                set: function(val) {
                    setterFunctions['debtorAccountSchemeName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "debtorAccountSeconIdentification": {
                get: function() {
                    context["field"] = "debtorAccountSeconIdentification";
                    context["metadata"] = (objectMetadata ? objectMetadata["debtorAccountSeconIdentification"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.debtorAccountSeconIdentification, context);
                },
                set: function(val) {
                    setterFunctions['debtorAccountSeconIdentification'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "debtorAgentAddressLine": {
                get: function() {
                    context["field"] = "debtorAgentAddressLine";
                    context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentAddressLine"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.debtorAgentAddressLine, context);
                },
                set: function(val) {
                    setterFunctions['debtorAgentAddressLine'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "debtorAgentAddressType": {
                get: function() {
                    context["field"] = "debtorAgentAddressType";
                    context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentAddressType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.debtorAgentAddressType, context);
                },
                set: function(val) {
                    setterFunctions['debtorAgentAddressType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "debtorAgentBuildingNumber": {
                get: function() {
                    context["field"] = "debtorAgentBuildingNumber";
                    context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentBuildingNumber"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.debtorAgentBuildingNumber, context);
                },
                set: function(val) {
                    setterFunctions['debtorAgentBuildingNumber'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "debtorAgentCountry": {
                get: function() {
                    context["field"] = "debtorAgentCountry";
                    context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentCountry"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.debtorAgentCountry, context);
                },
                set: function(val) {
                    setterFunctions['debtorAgentCountry'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "debtorAgentCountrySubDivision": {
                get: function() {
                    context["field"] = "debtorAgentCountrySubDivision";
                    context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentCountrySubDivision"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.debtorAgentCountrySubDivision, context);
                },
                set: function(val) {
                    setterFunctions['debtorAgentCountrySubDivision'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "debtorAgentDepartment": {
                get: function() {
                    context["field"] = "debtorAgentDepartment";
                    context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentDepartment"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.debtorAgentDepartment, context);
                },
                set: function(val) {
                    setterFunctions['debtorAgentDepartment'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "debtorAgentIdentification": {
                get: function() {
                    context["field"] = "debtorAgentIdentification";
                    context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentIdentification"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.debtorAgentIdentification, context);
                },
                set: function(val) {
                    setterFunctions['debtorAgentIdentification'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "debtorAgentName": {
                get: function() {
                    context["field"] = "debtorAgentName";
                    context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.debtorAgentName, context);
                },
                set: function(val) {
                    setterFunctions['debtorAgentName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "debtorAgentSchemeName": {
                get: function() {
                    context["field"] = "debtorAgentSchemeName";
                    context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentSchemeName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.debtorAgentSchemeName, context);
                },
                set: function(val) {
                    setterFunctions['debtorAgentSchemeName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "debtorAgentStreetName": {
                get: function() {
                    context["field"] = "debtorAgentStreetName";
                    context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentStreetName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.debtorAgentStreetName, context);
                },
                set: function(val) {
                    setterFunctions['debtorAgentStreetName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "debtorAgentSubDepartment": {
                get: function() {
                    context["field"] = "debtorAgentSubDepartment";
                    context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentSubDepartment"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.debtorAgentSubDepartment, context);
                },
                set: function(val) {
                    setterFunctions['debtorAgentSubDepartment'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "debtorAgentTownName": {
                get: function() {
                    context["field"] = "debtorAgentTownName";
                    context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentTownName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.debtorAgentTownName, context);
                },
                set: function(val) {
                    setterFunctions['debtorAgentTownName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "dedtorAgentPostCode": {
                get: function() {
                    context["field"] = "dedtorAgentPostCode";
                    context["metadata"] = (objectMetadata ? objectMetadata["dedtorAgentPostCode"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.dedtorAgentPostCode, context);
                },
                set: function(val) {
                    setterFunctions['dedtorAgentPostCode'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "deliverBy": {
                get: function() {
                    context["field"] = "deliverBy";
                    context["metadata"] = (objectMetadata ? objectMetadata["deliverBy"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.deliverBy, context);
                },
                set: function(val) {
                    setterFunctions['deliverBy'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "description": {
                get: function() {
                    context["field"] = "description";
                    context["metadata"] = (objectMetadata ? objectMetadata["description"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.description, context);
                },
                set: function(val) {
                    setterFunctions['description'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "disputeDate": {
                get: function() {
                    context["field"] = "disputeDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["disputeDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.disputeDate, context);
                },
                set: function(val) {
                    setterFunctions['disputeDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "disputeDescription": {
                get: function() {
                    context["field"] = "disputeDescription";
                    context["metadata"] = (objectMetadata ? objectMetadata["disputeDescription"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.disputeDescription, context);
                },
                set: function(val) {
                    setterFunctions['disputeDescription'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "disputeReason": {
                get: function() {
                    context["field"] = "disputeReason";
                    context["metadata"] = (objectMetadata ? objectMetadata["disputeReason"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.disputeReason, context);
                },
                set: function(val) {
                    setterFunctions['disputeReason'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "disputeStatus": {
                get: function() {
                    context["field"] = "disputeStatus";
                    context["metadata"] = (objectMetadata ? objectMetadata["disputeStatus"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.disputeStatus, context);
                },
                set: function(val) {
                    setterFunctions['disputeStatus'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "DomesticPaymentId": {
                get: function() {
                    context["field"] = "DomesticPaymentId";
                    context["metadata"] = (objectMetadata ? objectMetadata["DomesticPaymentId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.DomesticPaymentId, context);
                },
                set: function(val) {
                    setterFunctions['DomesticPaymentId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "exchangeRate": {
                get: function() {
                    context["field"] = "exchangeRate";
                    context["metadata"] = (objectMetadata ? objectMetadata["exchangeRate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.exchangeRate, context);
                },
                set: function(val) {
                    setterFunctions['exchangeRate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "ExpenseCategory_id": {
                get: function() {
                    context["field"] = "ExpenseCategory_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["ExpenseCategory_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ExpenseCategory_id, context);
                },
                set: function(val) {
                    setterFunctions['ExpenseCategory_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "fee": {
                get: function() {
                    context["field"] = "fee";
                    context["metadata"] = (objectMetadata ? objectMetadata["fee"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.fee, context);
                },
                set: function(val) {
                    setterFunctions['fee'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "feeCurrency": {
                get: function() {
                    context["field"] = "feeCurrency";
                    context["metadata"] = (objectMetadata ? objectMetadata["feeCurrency"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.feeCurrency, context);
                },
                set: function(val) {
                    setterFunctions['feeCurrency'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "feePaidByReceipent": {
                get: function() {
                    context["field"] = "feePaidByReceipent";
                    context["metadata"] = (objectMetadata ? objectMetadata["feePaidByReceipent"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.feePaidByReceipent, context);
                },
                set: function(val) {
                    setterFunctions['feePaidByReceipent'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "FinalPaymentDateTime": {
                get: function() {
                    context["field"] = "FinalPaymentDateTime";
                    context["metadata"] = (objectMetadata ? objectMetadata["FinalPaymentDateTime"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.FinalPaymentDateTime, context);
                },
                set: function(val) {
                    setterFunctions['FinalPaymentDateTime'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "FirstPaymentDateTime": {
                get: function() {
                    context["field"] = "FirstPaymentDateTime";
                    context["metadata"] = (objectMetadata ? objectMetadata["FirstPaymentDateTime"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.FirstPaymentDateTime, context);
                },
                set: function(val) {
                    setterFunctions['FirstPaymentDateTime'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "FPA_Amount": {
                get: function() {
                    context["field"] = "FPA_Amount";
                    context["metadata"] = (objectMetadata ? objectMetadata["FPA_Amount"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.FPA_Amount, context);
                },
                set: function(val) {
                    setterFunctions['FPA_Amount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "FPA_Currency": {
                get: function() {
                    context["field"] = "FPA_Currency";
                    context["metadata"] = (objectMetadata ? objectMetadata["FPA_Currency"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.FPA_Currency, context);
                },
                set: function(val) {
                    setterFunctions['FPA_Currency'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "FP_Amount": {
                get: function() {
                    context["field"] = "FP_Amount";
                    context["metadata"] = (objectMetadata ? objectMetadata["FP_Amount"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.FP_Amount, context);
                },
                set: function(val) {
                    setterFunctions['FP_Amount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "FP_Currency": {
                get: function() {
                    context["field"] = "FP_Currency";
                    context["metadata"] = (objectMetadata ? objectMetadata["FP_Currency"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.FP_Currency, context);
                },
                set: function(val) {
                    setterFunctions['FP_Currency'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "frequencyEndDate": {
                get: function() {
                    context["field"] = "frequencyEndDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["frequencyEndDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.frequencyEndDate, context);
                },
                set: function(val) {
                    setterFunctions['frequencyEndDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "frequencyStartDate": {
                get: function() {
                    context["field"] = "frequencyStartDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["frequencyStartDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.frequencyStartDate, context);
                },
                set: function(val) {
                    setterFunctions['frequencyStartDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "frequencyType": {
                get: function() {
                    context["field"] = "frequencyType";
                    context["metadata"] = (objectMetadata ? objectMetadata["frequencyType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.frequencyType, context);
                },
                set: function(val) {
                    setterFunctions['frequencyType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "fromAccountBalance": {
                get: function() {
                    context["field"] = "fromAccountBalance";
                    context["metadata"] = (objectMetadata ? objectMetadata["fromAccountBalance"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.fromAccountBalance, context);
                },
                set: function(val) {
                    setterFunctions['fromAccountBalance'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "fromAccountNumber": {
                get: function() {
                    context["field"] = "fromAccountNumber";
                    context["metadata"] = (objectMetadata ? objectMetadata["fromAccountNumber"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.fromAccountNumber, context);
                },
                set: function(val) {
                    setterFunctions['fromAccountNumber'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "frontImage1": {
                get: function() {
                    context["field"] = "frontImage1";
                    context["metadata"] = (objectMetadata ? objectMetadata["frontImage1"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.frontImage1, context);
                },
                set: function(val) {
                    setterFunctions['frontImage1'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "frontImage2": {
                get: function() {
                    context["field"] = "frontImage2";
                    context["metadata"] = (objectMetadata ? objectMetadata["frontImage2"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.frontImage2, context);
                },
                set: function(val) {
                    setterFunctions['frontImage2'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "hasDepositImage": {
                get: function() {
                    context["field"] = "hasDepositImage";
                    context["metadata"] = (objectMetadata ? objectMetadata["hasDepositImage"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.hasDepositImage, context);
                },
                set: function(val) {
                    setterFunctions['hasDepositImage'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "IBAN": {
                get: function() {
                    context["field"] = "IBAN";
                    context["metadata"] = (objectMetadata ? objectMetadata["IBAN"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.IBAN, context);
                },
                set: function(val) {
                    setterFunctions['IBAN'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Id": {
                get: function() {
                    context["field"] = "Id";
                    context["metadata"] = (objectMetadata ? objectMetadata["Id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Id, context);
                },
                set: function(val) {
                    setterFunctions['Id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "imageURL1": {
                get: function() {
                    context["field"] = "imageURL1";
                    context["metadata"] = (objectMetadata ? objectMetadata["imageURL1"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.imageURL1, context);
                },
                set: function(val) {
                    setterFunctions['imageURL1'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "imageURL2": {
                get: function() {
                    context["field"] = "imageURL2";
                    context["metadata"] = (objectMetadata ? objectMetadata["imageURL2"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.imageURL2, context);
                },
                set: function(val) {
                    setterFunctions['imageURL2'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Initiation_EndToEndIdentification": {
                get: function() {
                    context["field"] = "Initiation_EndToEndIdentification";
                    context["metadata"] = (objectMetadata ? objectMetadata["Initiation_EndToEndIdentification"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Initiation_EndToEndIdentification, context);
                },
                set: function(val) {
                    setterFunctions['Initiation_EndToEndIdentification'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Initiation_InstructionIdentification": {
                get: function() {
                    context["field"] = "Initiation_InstructionIdentification";
                    context["metadata"] = (objectMetadata ? objectMetadata["Initiation_InstructionIdentification"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Initiation_InstructionIdentification, context);
                },
                set: function(val) {
                    setterFunctions['Initiation_InstructionIdentification'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "instructedAmount": {
                get: function() {
                    context["field"] = "instructedAmount";
                    context["metadata"] = (objectMetadata ? objectMetadata["instructedAmount"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.instructedAmount, context);
                },
                set: function(val) {
                    setterFunctions['instructedAmount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "instructedCurrency": {
                get: function() {
                    context["field"] = "instructedCurrency";
                    context["metadata"] = (objectMetadata ? objectMetadata["instructedCurrency"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.instructedCurrency, context);
                },
                set: function(val) {
                    setterFunctions['instructedCurrency'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "isDisputed": {
                get: function() {
                    context["field"] = "isDisputed";
                    context["metadata"] = (objectMetadata ? objectMetadata["isDisputed"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isDisputed, context);
                },
                set: function(val) {
                    setterFunctions['isDisputed'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "isPayeeDeleted": {
                get: function() {
                    context["field"] = "isPayeeDeleted";
                    context["metadata"] = (objectMetadata ? objectMetadata["isPayeeDeleted"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isPayeeDeleted, context);
                },
                set: function(val) {
                    setterFunctions['isPayeeDeleted'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "isPaypersonDeleted": {
                get: function() {
                    context["field"] = "isPaypersonDeleted";
                    context["metadata"] = (objectMetadata ? objectMetadata["isPaypersonDeleted"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isPaypersonDeleted, context);
                },
                set: function(val) {
                    setterFunctions['isPaypersonDeleted'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "isScheduled": {
                get: function() {
                    context["field"] = "isScheduled";
                    context["metadata"] = (objectMetadata ? objectMetadata["isScheduled"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isScheduled, context);
                },
                set: function(val) {
                    setterFunctions['isScheduled'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "linkSelf": {
                get: function() {
                    context["field"] = "linkSelf";
                    context["metadata"] = (objectMetadata ? objectMetadata["linkSelf"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.linkSelf, context);
                },
                set: function(val) {
                    setterFunctions['linkSelf'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "merchantCategoryCode": {
                get: function() {
                    context["field"] = "merchantCategoryCode";
                    context["metadata"] = (objectMetadata ? objectMetadata["merchantCategoryCode"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.merchantCategoryCode, context);
                },
                set: function(val) {
                    setterFunctions['merchantCategoryCode'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "MerchantCustomerIdentification": {
                get: function() {
                    context["field"] = "MerchantCustomerIdentification";
                    context["metadata"] = (objectMetadata ? objectMetadata["MerchantCustomerIdentification"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.MerchantCustomerIdentification, context);
                },
                set: function(val) {
                    setterFunctions['MerchantCustomerIdentification'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "merchantName": {
                get: function() {
                    context["field"] = "merchantName";
                    context["metadata"] = (objectMetadata ? objectMetadata["merchantName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.merchantName, context);
                },
                set: function(val) {
                    setterFunctions['merchantName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "NextPaymentDateTime": {
                get: function() {
                    context["field"] = "NextPaymentDateTime";
                    context["metadata"] = (objectMetadata ? objectMetadata["NextPaymentDateTime"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.NextPaymentDateTime, context);
                },
                set: function(val) {
                    setterFunctions['NextPaymentDateTime'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "notes": {
                get: function() {
                    context["field"] = "notes";
                    context["metadata"] = (objectMetadata ? objectMetadata["notes"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.notes, context);
                },
                set: function(val) {
                    setterFunctions['notes'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "NP_Amount": {
                get: function() {
                    context["field"] = "NP_Amount";
                    context["metadata"] = (objectMetadata ? objectMetadata["NP_Amount"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.NP_Amount, context);
                },
                set: function(val) {
                    setterFunctions['NP_Amount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "NP_Currency": {
                get: function() {
                    context["field"] = "NP_Currency";
                    context["metadata"] = (objectMetadata ? objectMetadata["NP_Currency"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.NP_Currency, context);
                },
                set: function(val) {
                    setterFunctions['NP_Currency'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "numberOfRecurrences": {
                get: function() {
                    context["field"] = "numberOfRecurrences";
                    context["metadata"] = (objectMetadata ? objectMetadata["numberOfRecurrences"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.numberOfRecurrences, context);
                },
                set: function(val) {
                    setterFunctions['numberOfRecurrences'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "p2pAlternateContact": {
                get: function() {
                    context["field"] = "p2pAlternateContact";
                    context["metadata"] = (objectMetadata ? objectMetadata["p2pAlternateContact"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.p2pAlternateContact, context);
                },
                set: function(val) {
                    setterFunctions['p2pAlternateContact'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "p2pContact": {
                get: function() {
                    context["field"] = "p2pContact";
                    context["metadata"] = (objectMetadata ? objectMetadata["p2pContact"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.p2pContact, context);
                },
                set: function(val) {
                    setterFunctions['p2pContact'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "p2pRequiredDate": {
                get: function() {
                    context["field"] = "p2pRequiredDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["p2pRequiredDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.p2pRequiredDate, context);
                },
                set: function(val) {
                    setterFunctions['p2pRequiredDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "payeeCurrency": {
                get: function() {
                    context["field"] = "payeeCurrency";
                    context["metadata"] = (objectMetadata ? objectMetadata["payeeCurrency"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.payeeCurrency, context);
                },
                set: function(val) {
                    setterFunctions['payeeCurrency'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "payeeName": {
                get: function() {
                    context["field"] = "payeeName";
                    context["metadata"] = (objectMetadata ? objectMetadata["payeeName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.payeeName, context);
                },
                set: function(val) {
                    setterFunctions['payeeName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Payee_id": {
                get: function() {
                    context["field"] = "Payee_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["Payee_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Payee_id, context);
                },
                set: function(val) {
                    setterFunctions['Payee_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "payoffFlag": {
                get: function() {
                    context["field"] = "payoffFlag";
                    context["metadata"] = (objectMetadata ? objectMetadata["payoffFlag"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.payoffFlag, context);
                },
                set: function(val) {
                    setterFunctions['payoffFlag'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "payPersonName": {
                get: function() {
                    context["field"] = "payPersonName";
                    context["metadata"] = (objectMetadata ? objectMetadata["payPersonName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.payPersonName, context);
                },
                set: function(val) {
                    setterFunctions['payPersonName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "payPersonNickName": {
                get: function() {
                    context["field"] = "payPersonNickName";
                    context["metadata"] = (objectMetadata ? objectMetadata["payPersonNickName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.payPersonNickName, context);
                },
                set: function(val) {
                    setterFunctions['payPersonNickName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "pdf": {
                get: function() {
                    context["field"] = "pdf";
                    context["metadata"] = (objectMetadata ? objectMetadata["pdf"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.pdf, context);
                },
                set: function(val) {
                    setterFunctions['pdf'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "penaltyFlag": {
                get: function() {
                    context["field"] = "penaltyFlag";
                    context["metadata"] = (objectMetadata ? objectMetadata["penaltyFlag"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.penaltyFlag, context);
                },
                set: function(val) {
                    setterFunctions['penaltyFlag'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Person_Id": {
                get: function() {
                    context["field"] = "Person_Id";
                    context["metadata"] = (objectMetadata ? objectMetadata["Person_Id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Person_Id, context);
                },
                set: function(val) {
                    setterFunctions['Person_Id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "postedDate": {
                get: function() {
                    context["field"] = "postedDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["postedDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.postedDate, context);
                },
                set: function(val) {
                    setterFunctions['postedDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "proprietaryTransactionCode": {
                get: function() {
                    context["field"] = "proprietaryTransactionCode";
                    context["metadata"] = (objectMetadata ? objectMetadata["proprietaryTransactionCode"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.proprietaryTransactionCode, context);
                },
                set: function(val) {
                    setterFunctions['proprietaryTransactionCode'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "proprietaryTransactionIssuer": {
                get: function() {
                    context["field"] = "proprietaryTransactionIssuer";
                    context["metadata"] = (objectMetadata ? objectMetadata["proprietaryTransactionIssuer"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.proprietaryTransactionIssuer, context);
                },
                set: function(val) {
                    setterFunctions['proprietaryTransactionIssuer'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "quotationDate": {
                get: function() {
                    context["field"] = "quotationDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["quotationDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.quotationDate, context);
                },
                set: function(val) {
                    setterFunctions['quotationDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "recurrenceDesc": {
                get: function() {
                    context["field"] = "recurrenceDesc";
                    context["metadata"] = (objectMetadata ? objectMetadata["recurrenceDesc"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.recurrenceDesc, context);
                },
                set: function(val) {
                    setterFunctions['recurrenceDesc'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Reference_id": {
                get: function() {
                    context["field"] = "Reference_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["Reference_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Reference_id, context);
                },
                set: function(val) {
                    setterFunctions['Reference_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "requestCreatedDate": {
                get: function() {
                    context["field"] = "requestCreatedDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["requestCreatedDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.requestCreatedDate, context);
                },
                set: function(val) {
                    setterFunctions['requestCreatedDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "requestValidity": {
                get: function() {
                    context["field"] = "requestValidity";
                    context["metadata"] = (objectMetadata ? objectMetadata["requestValidity"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.requestValidity, context);
                },
                set: function(val) {
                    setterFunctions['requestValidity'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "RiskPaymentContextCode": {
                get: function() {
                    context["field"] = "RiskPaymentContextCode";
                    context["metadata"] = (objectMetadata ? objectMetadata["RiskPaymentContextCode"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.RiskPaymentContextCode, context);
                },
                set: function(val) {
                    setterFunctions['RiskPaymentContextCode'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "RI_Reference": {
                get: function() {
                    context["field"] = "RI_Reference";
                    context["metadata"] = (objectMetadata ? objectMetadata["RI_Reference"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.RI_Reference, context);
                },
                set: function(val) {
                    setterFunctions['RI_Reference'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "RI_Unstructured": {
                get: function() {
                    context["field"] = "RI_Unstructured";
                    context["metadata"] = (objectMetadata ? objectMetadata["RI_Unstructured"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.RI_Unstructured, context);
                },
                set: function(val) {
                    setterFunctions['RI_Unstructured'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "scheduledDate": {
                get: function() {
                    context["field"] = "scheduledDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["scheduledDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.scheduledDate, context);
                },
                set: function(val) {
                    setterFunctions['scheduledDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "serviceName": {
                get: function() {
                    context["field"] = "serviceName";
                    context["metadata"] = (objectMetadata ? objectMetadata["serviceName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.serviceName, context);
                },
                set: function(val) {
                    setterFunctions['serviceName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "sortCode": {
                get: function() {
                    context["field"] = "sortCode";
                    context["metadata"] = (objectMetadata ? objectMetadata["sortCode"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.sortCode, context);
                },
                set: function(val) {
                    setterFunctions['sortCode'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "sourceCurrency": {
                get: function() {
                    context["field"] = "sourceCurrency";
                    context["metadata"] = (objectMetadata ? objectMetadata["sourceCurrency"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.sourceCurrency, context);
                },
                set: function(val) {
                    setterFunctions['sourceCurrency'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "StandingOrderStatusCode": {
                get: function() {
                    context["field"] = "StandingOrderStatusCode";
                    context["metadata"] = (objectMetadata ? objectMetadata["StandingOrderStatusCode"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.StandingOrderStatusCode, context);
                },
                set: function(val) {
                    setterFunctions['StandingOrderStatusCode'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "statementReference": {
                get: function() {
                    context["field"] = "statementReference";
                    context["metadata"] = (objectMetadata ? objectMetadata["statementReference"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.statementReference, context);
                },
                set: function(val) {
                    setterFunctions['statementReference'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "statusDesc": {
                get: function() {
                    context["field"] = "statusDesc";
                    context["metadata"] = (objectMetadata ? objectMetadata["statusDesc"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.statusDesc, context);
                },
                set: function(val) {
                    setterFunctions['statusDesc'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "StatusUpdateDateTime": {
                get: function() {
                    context["field"] = "StatusUpdateDateTime";
                    context["metadata"] = (objectMetadata ? objectMetadata["StatusUpdateDateTime"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.StatusUpdateDateTime, context);
                },
                set: function(val) {
                    setterFunctions['StatusUpdateDateTime'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Status_id": {
                get: function() {
                    context["field"] = "Status_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["Status_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Status_id, context);
                },
                set: function(val) {
                    setterFunctions['Status_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "swiftCode": {
                get: function() {
                    context["field"] = "swiftCode";
                    context["metadata"] = (objectMetadata ? objectMetadata["swiftCode"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.swiftCode, context);
                },
                set: function(val) {
                    setterFunctions['swiftCode'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "targetCurrency": {
                get: function() {
                    context["field"] = "targetCurrency";
                    context["metadata"] = (objectMetadata ? objectMetadata["targetCurrency"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.targetCurrency, context);
                },
                set: function(val) {
                    setterFunctions['targetCurrency'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "toAccountBalance": {
                get: function() {
                    context["field"] = "toAccountBalance";
                    context["metadata"] = (objectMetadata ? objectMetadata["toAccountBalance"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.toAccountBalance, context);
                },
                set: function(val) {
                    setterFunctions['toAccountBalance'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "toAccountNumber": {
                get: function() {
                    context["field"] = "toAccountNumber";
                    context["metadata"] = (objectMetadata ? objectMetadata["toAccountNumber"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.toAccountNumber, context);
                },
                set: function(val) {
                    setterFunctions['toAccountNumber'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "toExternalAccountNumber": {
                get: function() {
                    context["field"] = "toExternalAccountNumber";
                    context["metadata"] = (objectMetadata ? objectMetadata["toExternalAccountNumber"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.toExternalAccountNumber, context);
                },
                set: function(val) {
                    setterFunctions['toExternalAccountNumber'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "transactionAmount": {
                get: function() {
                    context["field"] = "transactionAmount";
                    context["metadata"] = (objectMetadata ? objectMetadata["transactionAmount"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.transactionAmount, context);
                },
                set: function(val) {
                    setterFunctions['transactionAmount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "transactionCode": {
                get: function() {
                    context["field"] = "transactionCode";
                    context["metadata"] = (objectMetadata ? objectMetadata["transactionCode"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.transactionCode, context);
                },
                set: function(val) {
                    setterFunctions['transactionCode'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "transactionComments": {
                get: function() {
                    context["field"] = "transactionComments";
                    context["metadata"] = (objectMetadata ? objectMetadata["transactionComments"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.transactionComments, context);
                },
                set: function(val) {
                    setterFunctions['transactionComments'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "transactionCurrency": {
                get: function() {
                    context["field"] = "transactionCurrency";
                    context["metadata"] = (objectMetadata ? objectMetadata["transactionCurrency"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.transactionCurrency, context);
                },
                set: function(val) {
                    setterFunctions['transactionCurrency'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "transactionDate": {
                get: function() {
                    context["field"] = "transactionDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["transactionDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.transactionDate, context);
                },
                set: function(val) {
                    setterFunctions['transactionDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "transactionInformation": {
                get: function() {
                    context["field"] = "transactionInformation";
                    context["metadata"] = (objectMetadata ? objectMetadata["transactionInformation"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.transactionInformation, context);
                },
                set: function(val) {
                    setterFunctions['transactionInformation'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "transactionSubCode": {
                get: function() {
                    context["field"] = "transactionSubCode";
                    context["metadata"] = (objectMetadata ? objectMetadata["transactionSubCode"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.transactionSubCode, context);
                },
                set: function(val) {
                    setterFunctions['transactionSubCode'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "transCreditDebitIndicator": {
                get: function() {
                    context["field"] = "transCreditDebitIndicator";
                    context["metadata"] = (objectMetadata ? objectMetadata["transCreditDebitIndicator"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.transCreditDebitIndicator, context);
                },
                set: function(val) {
                    setterFunctions['transCreditDebitIndicator'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Type_id": {
                get: function() {
                    context["field"] = "Type_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["Type_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Type_id, context);
                },
                set: function(val) {
                    setterFunctions['Type_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "unitCurrency": {
                get: function() {
                    context["field"] = "unitCurrency";
                    context["metadata"] = (objectMetadata ? objectMetadata["unitCurrency"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.unitCurrency, context);
                },
                set: function(val) {
                    setterFunctions['unitCurrency'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "valueDateTime": {
                get: function() {
                    context["field"] = "valueDateTime";
                    context["metadata"] = (objectMetadata ? objectMetadata["valueDateTime"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.valueDateTime, context);
                },
                set: function(val) {
                    setterFunctions['valueDateTime'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "viewReportLink": {
                get: function() {
                    context["field"] = "viewReportLink";
                    context["metadata"] = (objectMetadata ? objectMetadata["viewReportLink"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.viewReportLink, context);
                },
                set: function(val) {
                    setterFunctions['viewReportLink'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "withdrawlAmount1": {
                get: function() {
                    context["field"] = "withdrawlAmount1";
                    context["metadata"] = (objectMetadata ? objectMetadata["withdrawlAmount1"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.withdrawlAmount1, context);
                },
                set: function(val) {
                    setterFunctions['withdrawlAmount1'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "withdrawlAmount2": {
                get: function() {
                    context["field"] = "withdrawlAmount2";
                    context["metadata"] = (objectMetadata ? objectMetadata["withdrawlAmount2"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.withdrawlAmount2, context);
                },
                set: function(val) {
                    setterFunctions['withdrawlAmount2'].call(this, val, privateState);
                },
                enumerable: true,
            },
        });

        //converts model object to json object.
        this.toJsonInternal = function() {
            return Object.assign({}, privateState);
        };

        //overwrites object state with provided json value in argument.
        this.fromJsonInternal = function(value) {
            privateState.addressLine = value ? (value["addressLine"] ? value["addressLine"] : null) : null;
            privateState.amount = value ? (value["amount"] ? value["amount"] : null) : null;
            privateState.amountRecieved = value ? (value["amountRecieved"] ? value["amountRecieved"] : null) : null;
            privateState.backImage1 = value ? (value["backImage1"] ? value["backImage1"] : null) : null;
            privateState.backImage2 = value ? (value["backImage2"] ? value["backImage2"] : null) : null;
            privateState.balanceAmount = value ? (value["balanceAmount"] ? value["balanceAmount"] : null) : null;
            privateState.balanceCreditDebitIndicator = value ? (value["balanceCreditDebitIndicator"] ? value["balanceCreditDebitIndicator"] : null) : null;
            privateState.balanceCurrency = value ? (value["balanceCurrency"] ? value["balanceCurrency"] : null) : null;
            privateState.balanceType = value ? (value["balanceType"] ? value["balanceType"] : null) : null;
            privateState.bankName = value ? (value["bankName"] ? value["bankName"] : null) : null;
            privateState.bankName1 = value ? (value["bankName1"] ? value["bankName1"] : null) : null;
            privateState.bankName2 = value ? (value["bankName2"] ? value["bankName2"] : null) : null;
            privateState.baseCurrency = value ? (value["baseCurrency"] ? value["baseCurrency"] : null) : null;
            privateState.beneficiaryName = value ? (value["beneficiaryName"] ? value["beneficiaryName"] : null) : null;
            privateState.billCategory = value ? (value["billCategory"] ? value["billCategory"] : null) : null;
            privateState.billerId = value ? (value["billerId"] ? value["billerId"] : null) : null;
            privateState.billid = value ? (value["billid"] ? value["billid"] : null) : null;
            privateState.Bill_id = value ? (value["Bill_id"] ? value["Bill_id"] : null) : null;
            privateState.bookingDateTime = value ? (value["bookingDateTime"] ? value["bookingDateTime"] : null) : null;
            privateState.cardInstrumentAuthorisationType = value ? (value["cardInstrumentAuthorisationType"] ? value["cardInstrumentAuthorisationType"] : null) : null;
            privateState.cardInstrumentIdentification = value ? (value["cardInstrumentIdentification"] ? value["cardInstrumentIdentification"] : null) : null;
            privateState.cardInstrumentName = value ? (value["cardInstrumentName"] ? value["cardInstrumentName"] : null) : null;
            privateState.cardInstrumentSchemeName = value ? (value["cardInstrumentSchemeName"] ? value["cardInstrumentSchemeName"] : null) : null;
            privateState.cashAmount = value ? (value["cashAmount"] ? value["cashAmount"] : null) : null;
            privateState.cashlessEmail = value ? (value["cashlessEmail"] ? value["cashlessEmail"] : null) : null;
            privateState.cashlessMode = value ? (value["cashlessMode"] ? value["cashlessMode"] : null) : null;
            privateState.cashlessOTP = value ? (value["cashlessOTP"] ? value["cashlessOTP"] : null) : null;
            privateState.cashlessOTPValidDate = value ? (value["cashlessOTPValidDate"] ? value["cashlessOTPValidDate"] : null) : null;
            privateState.cashlessPersonName = value ? (value["cashlessPersonName"] ? value["cashlessPersonName"] : null) : null;
            privateState.cashlessPhone = value ? (value["cashlessPhone"] ? value["cashlessPhone"] : null) : null;
            privateState.cashlessPin = value ? (value["cashlessPin"] ? value["cashlessPin"] : null) : null;
            privateState.cashlessSecurityCode = value ? (value["cashlessSecurityCode"] ? value["cashlessSecurityCode"] : null) : null;
            privateState.cashWithdrawalTransactionStatus = value ? (value["cashWithdrawalTransactionStatus"] ? value["cashWithdrawalTransactionStatus"] : null) : null;
            privateState.category = value ? (value["category"] ? value["category"] : null) : null;
            privateState.chargeAmount = value ? (value["chargeAmount"] ? value["chargeAmount"] : null) : null;
            privateState.chargeCurrency = value ? (value["chargeCurrency"] ? value["chargeCurrency"] : null) : null;
            privateState.checkDateOfIssue = value ? (value["checkDateOfIssue"] ? value["checkDateOfIssue"] : null) : null;
            privateState.checkDesc = value ? (value["checkDesc"] ? value["checkDesc"] : null) : null;
            privateState.checkImage = value ? (value["checkImage"] ? value["checkImage"] : null) : null;
            privateState.checkImageBack = value ? (value["checkImageBack"] ? value["checkImageBack"] : null) : null;
            privateState.checkNumber = value ? (value["checkNumber"] ? value["checkNumber"] : null) : null;
            privateState.checkNumber1 = value ? (value["checkNumber1"] ? value["checkNumber1"] : null) : null;
            privateState.checkNumber2 = value ? (value["checkNumber2"] ? value["checkNumber2"] : null) : null;
            privateState.checkReason = value ? (value["checkReason"] ? value["checkReason"] : null) : null;
            privateState.ConsentId = value ? (value["ConsentId"] ? value["ConsentId"] : null) : null;
            privateState.contractIdentification = value ? (value["contractIdentification"] ? value["contractIdentification"] : null) : null;
            privateState.convertedAmount = value ? (value["convertedAmount"] ? value["convertedAmount"] : null) : null;
            privateState.createdDate = value ? (value["createdDate"] ? value["createdDate"] : null) : null;
            privateState.creditorAccountIdentification = value ? (value["creditorAccountIdentification"] ? value["creditorAccountIdentification"] : null) : null;
            privateState.creditorAccountName = value ? (value["creditorAccountName"] ? value["creditorAccountName"] : null) : null;
            privateState.creditorAccountSchemeName = value ? (value["creditorAccountSchemeName"] ? value["creditorAccountSchemeName"] : null) : null;
            privateState.creditorAccountSeconIdentification = value ? (value["creditorAccountSeconIdentification"] ? value["creditorAccountSeconIdentification"] : null) : null;
            privateState.creditorAgentAddressLine = value ? (value["creditorAgentAddressLine"] ? value["creditorAgentAddressLine"] : null) : null;
            privateState.creditorAgentaddressType = value ? (value["creditorAgentaddressType"] ? value["creditorAgentaddressType"] : null) : null;
            privateState.creditorAgentBuildingNumber = value ? (value["creditorAgentBuildingNumber"] ? value["creditorAgentBuildingNumber"] : null) : null;
            privateState.creditorAgentCountry = value ? (value["creditorAgentCountry"] ? value["creditorAgentCountry"] : null) : null;
            privateState.creditorAgentCountrySubDivision = value ? (value["creditorAgentCountrySubDivision"] ? value["creditorAgentCountrySubDivision"] : null) : null;
            privateState.creditorAgentDepartment = value ? (value["creditorAgentDepartment"] ? value["creditorAgentDepartment"] : null) : null;
            privateState.creditorAgentIdentification = value ? (value["creditorAgentIdentification"] ? value["creditorAgentIdentification"] : null) : null;
            privateState.creditorAgentName = value ? (value["creditorAgentName"] ? value["creditorAgentName"] : null) : null;
            privateState.creditorAgentPostCode = value ? (value["creditorAgentPostCode"] ? value["creditorAgentPostCode"] : null) : null;
            privateState.creditorAgentSchemeName = value ? (value["creditorAgentSchemeName"] ? value["creditorAgentSchemeName"] : null) : null;
            privateState.creditorAgentStreetName = value ? (value["creditorAgentStreetName"] ? value["creditorAgentStreetName"] : null) : null;
            privateState.creditorAgentSubDepartment = value ? (value["creditorAgentSubDepartment"] ? value["creditorAgentSubDepartment"] : null) : null;
            privateState.creditorAgentTownName = value ? (value["creditorAgentTownName"] ? value["creditorAgentTownName"] : null) : null;
            privateState.Customer_id = value ? (value["Customer_id"] ? value["Customer_id"] : null) : null;
            privateState.dataStatus = value ? (value["dataStatus"] ? value["dataStatus"] : null) : null;
            privateState.debtorAccountIdentification = value ? (value["debtorAccountIdentification"] ? value["debtorAccountIdentification"] : null) : null;
            privateState.debtorAccountName = value ? (value["debtorAccountName"] ? value["debtorAccountName"] : null) : null;
            privateState.debtorAccountSchemeName = value ? (value["debtorAccountSchemeName"] ? value["debtorAccountSchemeName"] : null) : null;
            privateState.debtorAccountSeconIdentification = value ? (value["debtorAccountSeconIdentification"] ? value["debtorAccountSeconIdentification"] : null) : null;
            privateState.debtorAgentAddressLine = value ? (value["debtorAgentAddressLine"] ? value["debtorAgentAddressLine"] : null) : null;
            privateState.debtorAgentAddressType = value ? (value["debtorAgentAddressType"] ? value["debtorAgentAddressType"] : null) : null;
            privateState.debtorAgentBuildingNumber = value ? (value["debtorAgentBuildingNumber"] ? value["debtorAgentBuildingNumber"] : null) : null;
            privateState.debtorAgentCountry = value ? (value["debtorAgentCountry"] ? value["debtorAgentCountry"] : null) : null;
            privateState.debtorAgentCountrySubDivision = value ? (value["debtorAgentCountrySubDivision"] ? value["debtorAgentCountrySubDivision"] : null) : null;
            privateState.debtorAgentDepartment = value ? (value["debtorAgentDepartment"] ? value["debtorAgentDepartment"] : null) : null;
            privateState.debtorAgentIdentification = value ? (value["debtorAgentIdentification"] ? value["debtorAgentIdentification"] : null) : null;
            privateState.debtorAgentName = value ? (value["debtorAgentName"] ? value["debtorAgentName"] : null) : null;
            privateState.debtorAgentSchemeName = value ? (value["debtorAgentSchemeName"] ? value["debtorAgentSchemeName"] : null) : null;
            privateState.debtorAgentStreetName = value ? (value["debtorAgentStreetName"] ? value["debtorAgentStreetName"] : null) : null;
            privateState.debtorAgentSubDepartment = value ? (value["debtorAgentSubDepartment"] ? value["debtorAgentSubDepartment"] : null) : null;
            privateState.debtorAgentTownName = value ? (value["debtorAgentTownName"] ? value["debtorAgentTownName"] : null) : null;
            privateState.dedtorAgentPostCode = value ? (value["dedtorAgentPostCode"] ? value["dedtorAgentPostCode"] : null) : null;
            privateState.deliverBy = value ? (value["deliverBy"] ? value["deliverBy"] : null) : null;
            privateState.description = value ? (value["description"] ? value["description"] : null) : null;
            privateState.disputeDate = value ? (value["disputeDate"] ? value["disputeDate"] : null) : null;
            privateState.disputeDescription = value ? (value["disputeDescription"] ? value["disputeDescription"] : null) : null;
            privateState.disputeReason = value ? (value["disputeReason"] ? value["disputeReason"] : null) : null;
            privateState.disputeStatus = value ? (value["disputeStatus"] ? value["disputeStatus"] : null) : null;
            privateState.DomesticPaymentId = value ? (value["DomesticPaymentId"] ? value["DomesticPaymentId"] : null) : null;
            privateState.exchangeRate = value ? (value["exchangeRate"] ? value["exchangeRate"] : null) : null;
            privateState.ExpenseCategory_id = value ? (value["ExpenseCategory_id"] ? value["ExpenseCategory_id"] : null) : null;
            privateState.fee = value ? (value["fee"] ? value["fee"] : null) : null;
            privateState.feeCurrency = value ? (value["feeCurrency"] ? value["feeCurrency"] : null) : null;
            privateState.feePaidByReceipent = value ? (value["feePaidByReceipent"] ? value["feePaidByReceipent"] : null) : null;
            privateState.FinalPaymentDateTime = value ? (value["FinalPaymentDateTime"] ? value["FinalPaymentDateTime"] : null) : null;
            privateState.FirstPaymentDateTime = value ? (value["FirstPaymentDateTime"] ? value["FirstPaymentDateTime"] : null) : null;
            privateState.FPA_Amount = value ? (value["FPA_Amount"] ? value["FPA_Amount"] : null) : null;
            privateState.FPA_Currency = value ? (value["FPA_Currency"] ? value["FPA_Currency"] : null) : null;
            privateState.FP_Amount = value ? (value["FP_Amount"] ? value["FP_Amount"] : null) : null;
            privateState.FP_Currency = value ? (value["FP_Currency"] ? value["FP_Currency"] : null) : null;
            privateState.frequencyEndDate = value ? (value["frequencyEndDate"] ? value["frequencyEndDate"] : null) : null;
            privateState.frequencyStartDate = value ? (value["frequencyStartDate"] ? value["frequencyStartDate"] : null) : null;
            privateState.frequencyType = value ? (value["frequencyType"] ? value["frequencyType"] : null) : null;
            privateState.fromAccountBalance = value ? (value["fromAccountBalance"] ? value["fromAccountBalance"] : null) : null;
            privateState.fromAccountNumber = value ? (value["fromAccountNumber"] ? value["fromAccountNumber"] : null) : null;
            privateState.frontImage1 = value ? (value["frontImage1"] ? value["frontImage1"] : null) : null;
            privateState.frontImage2 = value ? (value["frontImage2"] ? value["frontImage2"] : null) : null;
            privateState.hasDepositImage = value ? (value["hasDepositImage"] ? value["hasDepositImage"] : null) : null;
            privateState.IBAN = value ? (value["IBAN"] ? value["IBAN"] : null) : null;
            privateState.Id = value ? (value["Id"] ? value["Id"] : null) : null;
            privateState.imageURL1 = value ? (value["imageURL1"] ? value["imageURL1"] : null) : null;
            privateState.imageURL2 = value ? (value["imageURL2"] ? value["imageURL2"] : null) : null;
            privateState.Initiation_EndToEndIdentification = value ? (value["Initiation_EndToEndIdentification"] ? value["Initiation_EndToEndIdentification"] : null) : null;
            privateState.Initiation_InstructionIdentification = value ? (value["Initiation_InstructionIdentification"] ? value["Initiation_InstructionIdentification"] : null) : null;
            privateState.instructedAmount = value ? (value["instructedAmount"] ? value["instructedAmount"] : null) : null;
            privateState.instructedCurrency = value ? (value["instructedCurrency"] ? value["instructedCurrency"] : null) : null;
            privateState.isDisputed = value ? (value["isDisputed"] ? value["isDisputed"] : null) : null;
            privateState.isPayeeDeleted = value ? (value["isPayeeDeleted"] ? value["isPayeeDeleted"] : null) : null;
            privateState.isPaypersonDeleted = value ? (value["isPaypersonDeleted"] ? value["isPaypersonDeleted"] : null) : null;
            privateState.isScheduled = value ? (value["isScheduled"] ? value["isScheduled"] : null) : null;
            privateState.linkSelf = value ? (value["linkSelf"] ? value["linkSelf"] : null) : null;
            privateState.merchantCategoryCode = value ? (value["merchantCategoryCode"] ? value["merchantCategoryCode"] : null) : null;
            privateState.MerchantCustomerIdentification = value ? (value["MerchantCustomerIdentification"] ? value["MerchantCustomerIdentification"] : null) : null;
            privateState.merchantName = value ? (value["merchantName"] ? value["merchantName"] : null) : null;
            privateState.NextPaymentDateTime = value ? (value["NextPaymentDateTime"] ? value["NextPaymentDateTime"] : null) : null;
            privateState.notes = value ? (value["notes"] ? value["notes"] : null) : null;
            privateState.NP_Amount = value ? (value["NP_Amount"] ? value["NP_Amount"] : null) : null;
            privateState.NP_Currency = value ? (value["NP_Currency"] ? value["NP_Currency"] : null) : null;
            privateState.numberOfRecurrences = value ? (value["numberOfRecurrences"] ? value["numberOfRecurrences"] : null) : null;
            privateState.p2pAlternateContact = value ? (value["p2pAlternateContact"] ? value["p2pAlternateContact"] : null) : null;
            privateState.p2pContact = value ? (value["p2pContact"] ? value["p2pContact"] : null) : null;
            privateState.p2pRequiredDate = value ? (value["p2pRequiredDate"] ? value["p2pRequiredDate"] : null) : null;
            privateState.payeeCurrency = value ? (value["payeeCurrency"] ? value["payeeCurrency"] : null) : null;
            privateState.payeeName = value ? (value["payeeName"] ? value["payeeName"] : null) : null;
            privateState.Payee_id = value ? (value["Payee_id"] ? value["Payee_id"] : null) : null;
            privateState.payoffFlag = value ? (value["payoffFlag"] ? value["payoffFlag"] : null) : null;
            privateState.payPersonName = value ? (value["payPersonName"] ? value["payPersonName"] : null) : null;
            privateState.payPersonNickName = value ? (value["payPersonNickName"] ? value["payPersonNickName"] : null) : null;
            privateState.pdf = value ? (value["pdf"] ? value["pdf"] : null) : null;
            privateState.penaltyFlag = value ? (value["penaltyFlag"] ? value["penaltyFlag"] : null) : null;
            privateState.Person_Id = value ? (value["Person_Id"] ? value["Person_Id"] : null) : null;
            privateState.postedDate = value ? (value["postedDate"] ? value["postedDate"] : null) : null;
            privateState.proprietaryTransactionCode = value ? (value["proprietaryTransactionCode"] ? value["proprietaryTransactionCode"] : null) : null;
            privateState.proprietaryTransactionIssuer = value ? (value["proprietaryTransactionIssuer"] ? value["proprietaryTransactionIssuer"] : null) : null;
            privateState.quotationDate = value ? (value["quotationDate"] ? value["quotationDate"] : null) : null;
            privateState.recurrenceDesc = value ? (value["recurrenceDesc"] ? value["recurrenceDesc"] : null) : null;
            privateState.Reference_id = value ? (value["Reference_id"] ? value["Reference_id"] : null) : null;
            privateState.requestCreatedDate = value ? (value["requestCreatedDate"] ? value["requestCreatedDate"] : null) : null;
            privateState.requestValidity = value ? (value["requestValidity"] ? value["requestValidity"] : null) : null;
            privateState.RiskPaymentContextCode = value ? (value["RiskPaymentContextCode"] ? value["RiskPaymentContextCode"] : null) : null;
            privateState.RI_Reference = value ? (value["RI_Reference"] ? value["RI_Reference"] : null) : null;
            privateState.RI_Unstructured = value ? (value["RI_Unstructured"] ? value["RI_Unstructured"] : null) : null;
            privateState.scheduledDate = value ? (value["scheduledDate"] ? value["scheduledDate"] : null) : null;
            privateState.serviceName = value ? (value["serviceName"] ? value["serviceName"] : null) : null;
            privateState.sortCode = value ? (value["sortCode"] ? value["sortCode"] : null) : null;
            privateState.sourceCurrency = value ? (value["sourceCurrency"] ? value["sourceCurrency"] : null) : null;
            privateState.StandingOrderStatusCode = value ? (value["StandingOrderStatusCode"] ? value["StandingOrderStatusCode"] : null) : null;
            privateState.statementReference = value ? (value["statementReference"] ? value["statementReference"] : null) : null;
            privateState.statusDesc = value ? (value["statusDesc"] ? value["statusDesc"] : null) : null;
            privateState.StatusUpdateDateTime = value ? (value["StatusUpdateDateTime"] ? value["StatusUpdateDateTime"] : null) : null;
            privateState.Status_id = value ? (value["Status_id"] ? value["Status_id"] : null) : null;
            privateState.swiftCode = value ? (value["swiftCode"] ? value["swiftCode"] : null) : null;
            privateState.targetCurrency = value ? (value["targetCurrency"] ? value["targetCurrency"] : null) : null;
            privateState.toAccountBalance = value ? (value["toAccountBalance"] ? value["toAccountBalance"] : null) : null;
            privateState.toAccountNumber = value ? (value["toAccountNumber"] ? value["toAccountNumber"] : null) : null;
            privateState.toExternalAccountNumber = value ? (value["toExternalAccountNumber"] ? value["toExternalAccountNumber"] : null) : null;
            privateState.transactionAmount = value ? (value["transactionAmount"] ? value["transactionAmount"] : null) : null;
            privateState.transactionCode = value ? (value["transactionCode"] ? value["transactionCode"] : null) : null;
            privateState.transactionComments = value ? (value["transactionComments"] ? value["transactionComments"] : null) : null;
            privateState.transactionCurrency = value ? (value["transactionCurrency"] ? value["transactionCurrency"] : null) : null;
            privateState.transactionDate = value ? (value["transactionDate"] ? value["transactionDate"] : null) : null;
            privateState.transactionInformation = value ? (value["transactionInformation"] ? value["transactionInformation"] : null) : null;
            privateState.transactionSubCode = value ? (value["transactionSubCode"] ? value["transactionSubCode"] : null) : null;
            privateState.transCreditDebitIndicator = value ? (value["transCreditDebitIndicator"] ? value["transCreditDebitIndicator"] : null) : null;
            privateState.Type_id = value ? (value["Type_id"] ? value["Type_id"] : null) : null;
            privateState.unitCurrency = value ? (value["unitCurrency"] ? value["unitCurrency"] : null) : null;
            privateState.valueDateTime = value ? (value["valueDateTime"] ? value["valueDateTime"] : null) : null;
            privateState.viewReportLink = value ? (value["viewReportLink"] ? value["viewReportLink"] : null) : null;
            privateState.withdrawlAmount1 = value ? (value["withdrawlAmount1"] ? value["withdrawlAmount1"] : null) : null;
            privateState.withdrawlAmount2 = value ? (value["withdrawlAmount2"] ? value["withdrawlAmount2"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(transaction);

    //Create new class level validator object
    BaseModel.Validator.call(transaction);

    var registerValidatorBackup = transaction.registerValidator;

    transaction.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(transaction.isValid(this, propName, val)) {
                    return setterBackup.apply(null, arguments);
                } else {
                    throw Error("Validation failed for " + propName + " : " + val);
                }
            }
            setterFunctions[arguments[0]].changed = true;
        }
        return registerValidatorBackup.apply(null, arguments);
    }

    //Extending Model for custom operations
    //For Operation 'createBinary' with service id 'createBinarytransaction4374'
     transaction.createBinary = function(params, onCompletion){
        return transaction.customVerb('createBinary', params, onCompletion);
     };

    //For Operation 'getBinary' with service id 'queryBinarytransaction8932'
     transaction.getBinary = function(params, onCompletion){
        return transaction.customVerb('getBinary', params, onCompletion);
     };

    //For Operation 'deleteBinary' with service id 'deleteBinarytransaction5277'
     transaction.deleteBinary = function(params, onCompletion){
        return transaction.customVerb('deleteBinary', params, onCompletion);
     };

    //For Operation 'updateBinary' with service id 'updateBinarytransaction6650'
     transaction.updateBinary = function(params, onCompletion){
        return transaction.customVerb('updateBinary', params, onCompletion);
     };

    var relations = [];

    transaction.relations = relations;

    transaction.prototype.isValid = function() {
        return transaction.isValid(this);
    };

    transaction.prototype.objModelName = "transaction";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    transaction.registerProcessors = function(options, successCallback, failureCallback) {

        if(!options) {
            options = {};
        }

        if(options && ((options["preProcessor"] && typeof(options["preProcessor"]) === "function") || !options["preProcessor"])) {
            preProcessorCallback = options["preProcessor"];
        }

        if(options && ((options["postProcessor"] && typeof(options["postProcessor"]) === "function") || !options["postProcessor"])) {
            postProcessorCallback = options["postProcessor"];
        }

        function metaDataSuccess(res) {
            objectMetadata = kony.mvc.util.ProcessorUtils.convertObjectMetadataToFieldMetadataMap(res);
            successCallback();
        }

        function metaDataFailure(err) {
            failureCallback(err);
        }

        kony.mvc.util.ProcessorUtils.getMetadataForObject("TransactionUploadBinary", "transaction", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    transaction.clone = function(objectToClone) {
        var clonedObj = new transaction();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return transaction;
});