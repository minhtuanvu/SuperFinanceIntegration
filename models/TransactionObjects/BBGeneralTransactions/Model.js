/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "BBGeneralTransactions", "objectService" : "TransactionObjects"};

    var setterFunctions = {
        Transaction_id: function(val, state) {
            context["field"] = "Transaction_id";
            context["metadata"] = (objectMetadata ? objectMetadata["Transaction_id"] : null);
            state['Transaction_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        TransactionDate: function(val, state) {
            context["field"] = "TransactionDate";
            context["metadata"] = (objectMetadata ? objectMetadata["TransactionDate"] : null);
            state['TransactionDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        CreatedBy: function(val, state) {
            context["field"] = "CreatedBy";
            context["metadata"] = (objectMetadata ? objectMetadata["CreatedBy"] : null);
            state['CreatedBy'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Payee: function(val, state) {
            context["field"] = "Payee";
            context["metadata"] = (objectMetadata ? objectMetadata["Payee"] : null);
            state['Payee'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        StatusValue: function(val, state) {
            context["field"] = "StatusValue";
            context["metadata"] = (objectMetadata ? objectMetadata["StatusValue"] : null);
            state['StatusValue'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Reccurence: function(val, state) {
            context["field"] = "Reccurence";
            context["metadata"] = (objectMetadata ? objectMetadata["Reccurence"] : null);
            state['Reccurence'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Frequency: function(val, state) {
            context["field"] = "Frequency";
            context["metadata"] = (objectMetadata ? objectMetadata["Frequency"] : null);
            state['Frequency'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Company_id: function(val, state) {
            context["field"] = "Company_id";
            context["metadata"] = (objectMetadata ? objectMetadata["Company_id"] : null);
            state['Company_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        TransactionType_id: function(val, state) {
            context["field"] = "TransactionType_id";
            context["metadata"] = (objectMetadata ? objectMetadata["TransactionType_id"] : null);
            state['TransactionType_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        CreatedOn: function(val, state) {
            context["field"] = "CreatedOn";
            context["metadata"] = (objectMetadata ? objectMetadata["CreatedOn"] : null);
            state['CreatedOn'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Amount: function(val, state) {
            context["field"] = "Amount";
            context["metadata"] = (objectMetadata ? objectMetadata["Amount"] : null);
            state['Amount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        companyName: function(val, state) {
            context["field"] = "companyName";
            context["metadata"] = (objectMetadata ? objectMetadata["companyName"] : null);
            state['companyName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        DebitOrCreditAccount: function(val, state) {
            context["field"] = "DebitOrCreditAccount";
            context["metadata"] = (objectMetadata ? objectMetadata["DebitOrCreditAccount"] : null);
            state['DebitOrCreditAccount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        TransactionType: function(val, state) {
            context["field"] = "TransactionType";
            context["metadata"] = (objectMetadata ? objectMetadata["TransactionType"] : null);
            state['TransactionType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Status: function(val, state) {
            context["field"] = "Status";
            context["metadata"] = (objectMetadata ? objectMetadata["Status"] : null);
            state['Status'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        EffectiveDate: function(val, state) {
            context["field"] = "EffectiveDate";
            context["metadata"] = (objectMetadata ? objectMetadata["EffectiveDate"] : null);
            state['EffectiveDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        BBGeneralTransactionType_id: function(val, state) {
            context["field"] = "BBGeneralTransactionType_id";
            context["metadata"] = (objectMetadata ? objectMetadata["BBGeneralTransactionType_id"] : null);
            state['BBGeneralTransactionType_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        TransactionEntry: function(val, state) {
            context["field"] = "TransactionEntry";
            context["metadata"] = (objectMetadata ? objectMetadata["TransactionEntry"] : null);
            state['TransactionEntry'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Approver: function(val, state) {
            context["field"] = "Approver";
            context["metadata"] = (objectMetadata ? objectMetadata["Approver"] : null);
            state['Approver'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        userName: function(val, state) {
            context["field"] = "userName";
            context["metadata"] = (objectMetadata ? objectMetadata["userName"] : null);
            state['userName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        dbpErrCode: function(val, state) {
            context["field"] = "dbpErrCode";
            context["metadata"] = (objectMetadata ? objectMetadata["dbpErrCode"] : null);
            state['dbpErrCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        dbpErrMsg: function(val, state) {
            context["field"] = "dbpErrMsg";
            context["metadata"] = (objectMetadata ? objectMetadata["dbpErrMsg"] : null);
            state['dbpErrMsg'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        opstatus: function(val, state) {
            context["field"] = "opstatus";
            context["metadata"] = (objectMetadata ? objectMetadata["opstatus"] : null);
            state['opstatus'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        httpStatusCode: function(val, state) {
            context["field"] = "httpStatusCode";
            context["metadata"] = (objectMetadata ? objectMetadata["httpStatusCode"] : null);
            state['httpStatusCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        accountID: function(val, state) {
            context["field"] = "accountID";
            context["metadata"] = (objectMetadata ? objectMetadata["accountID"] : null);
            state['accountID'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        accountNumber: function(val, state) {
            context["field"] = "accountNumber";
            context["metadata"] = (objectMetadata ? objectMetadata["accountNumber"] : null);
            state['accountNumber'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        amountTransferedTillNow: function(val, state) {
            context["field"] = "amountTransferedTillNow";
            context["metadata"] = (objectMetadata ? objectMetadata["amountTransferedTillNow"] : null);
            state['amountTransferedTillNow'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        authenticationRequired: function(val, state) {
            context["field"] = "authenticationRequired";
            context["metadata"] = (objectMetadata ? objectMetadata["authenticationRequired"] : null);
            state['authenticationRequired'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        billCategory: function(val, state) {
            context["field"] = "billCategory";
            context["metadata"] = (objectMetadata ? objectMetadata["billCategory"] : null);
            state['billCategory'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        billCategoryId: function(val, state) {
            context["field"] = "billCategoryId";
            context["metadata"] = (objectMetadata ? objectMetadata["billCategoryId"] : null);
            state['billCategoryId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        billDueAmount: function(val, state) {
            context["field"] = "billDueAmount";
            context["metadata"] = (objectMetadata ? objectMetadata["billDueAmount"] : null);
            state['billDueAmount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        billDueDate: function(val, state) {
            context["field"] = "billDueDate";
            context["metadata"] = (objectMetadata ? objectMetadata["billDueDate"] : null);
            state['billDueDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        billerCategoryName: function(val, state) {
            context["field"] = "billerCategoryName";
            context["metadata"] = (objectMetadata ? objectMetadata["billerCategoryName"] : null);
            state['billerCategoryName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        billGeneratedDate: function(val, state) {
            context["field"] = "billGeneratedDate";
            context["metadata"] = (objectMetadata ? objectMetadata["billGeneratedDate"] : null);
            state['billGeneratedDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        billid: function(val, state) {
            context["field"] = "billid";
            context["metadata"] = (objectMetadata ? objectMetadata["billid"] : null);
            state['billid'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        billPaidAmount: function(val, state) {
            context["field"] = "billPaidAmount";
            context["metadata"] = (objectMetadata ? objectMetadata["billPaidAmount"] : null);
            state['billPaidAmount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        billPaidDate: function(val, state) {
            context["field"] = "billPaidDate";
            context["metadata"] = (objectMetadata ? objectMetadata["billPaidDate"] : null);
            state['billPaidDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        bulkPayString: function(val, state) {
            context["field"] = "bulkPayString";
            context["metadata"] = (objectMetadata ? objectMetadata["bulkPayString"] : null);
            state['bulkPayString'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
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
        eBillEnable: function(val, state) {
            context["field"] = "eBillEnable";
            context["metadata"] = (objectMetadata ? objectMetadata["eBillEnable"] : null);
            state['eBillEnable'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        eBillSupport: function(val, state) {
            context["field"] = "eBillSupport";
            context["metadata"] = (objectMetadata ? objectMetadata["eBillSupport"] : null);
            state['eBillSupport'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        ebillURL: function(val, state) {
            context["field"] = "ebillURL";
            context["metadata"] = (objectMetadata ? objectMetadata["ebillURL"] : null);
            state['ebillURL'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        errmsg: function(val, state) {
            context["field"] = "errmsg";
            context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
            state['errmsg'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        ExternalAccountNumber: function(val, state) {
            context["field"] = "ExternalAccountNumber";
            context["metadata"] = (objectMetadata ? objectMetadata["ExternalAccountNumber"] : null);
            state['ExternalAccountNumber'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        firstDeposit: function(val, state) {
            context["field"] = "firstDeposit";
            context["metadata"] = (objectMetadata ? objectMetadata["firstDeposit"] : null);
            state['firstDeposit'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        firstRecordNumber: function(val, state) {
            context["field"] = "firstRecordNumber";
            context["metadata"] = (objectMetadata ? objectMetadata["firstRecordNumber"] : null);
            state['firstRecordNumber'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
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
        fromAccountName: function(val, state) {
            context["field"] = "fromAccountName";
            context["metadata"] = (objectMetadata ? objectMetadata["fromAccountName"] : null);
            state['fromAccountName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        fromAccountNumber: function(val, state) {
            context["field"] = "fromAccountNumber";
            context["metadata"] = (objectMetadata ? objectMetadata["fromAccountNumber"] : null);
            state['fromAccountNumber'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        fromAccountType: function(val, state) {
            context["field"] = "fromAccountType";
            context["metadata"] = (objectMetadata ? objectMetadata["fromAccountType"] : null);
            state['fromAccountType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        fromCheckNumber: function(val, state) {
            context["field"] = "fromCheckNumber";
            context["metadata"] = (objectMetadata ? objectMetadata["fromCheckNumber"] : null);
            state['fromCheckNumber'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        fromNickName: function(val, state) {
            context["field"] = "fromNickName";
            context["metadata"] = (objectMetadata ? objectMetadata["fromNickName"] : null);
            state['fromNickName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        hasDepositImage: function(val, state) {
            context["field"] = "hasDepositImage";
            context["metadata"] = (objectMetadata ? objectMetadata["hasDepositImage"] : null);
            state['hasDepositImage'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isScheduled: function(val, state) {
            context["field"] = "isScheduled";
            context["metadata"] = (objectMetadata ? objectMetadata["isScheduled"] : null);
            state['isScheduled'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        lastRecordNumber: function(val, state) {
            context["field"] = "lastRecordNumber";
            context["metadata"] = (objectMetadata ? objectMetadata["lastRecordNumber"] : null);
            state['lastRecordNumber'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        limit: function(val, state) {
            context["field"] = "limit";
            context["metadata"] = (objectMetadata ? objectMetadata["limit"] : null);
            state['limit'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        numberOfRecurrences: function(val, state) {
            context["field"] = "numberOfRecurrences";
            context["metadata"] = (objectMetadata ? objectMetadata["numberOfRecurrences"] : null);
            state['numberOfRecurrences'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        offset: function(val, state) {
            context["field"] = "offset";
            context["metadata"] = (objectMetadata ? objectMetadata["offset"] : null);
            state['offset'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        order: function(val, state) {
            context["field"] = "order";
            context["metadata"] = (objectMetadata ? objectMetadata["order"] : null);
            state['order'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        otp: function(val, state) {
            context["field"] = "otp";
            context["metadata"] = (objectMetadata ? objectMetadata["otp"] : null);
            state['otp'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
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
        payeeAccountNumber: function(val, state) {
            context["field"] = "payeeAccountNumber";
            context["metadata"] = (objectMetadata ? objectMetadata["payeeAccountNumber"] : null);
            state['payeeAccountNumber'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        payeeAddressLine1: function(val, state) {
            context["field"] = "payeeAddressLine1";
            context["metadata"] = (objectMetadata ? objectMetadata["payeeAddressLine1"] : null);
            state['payeeAddressLine1'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        payeeId: function(val, state) {
            context["field"] = "payeeId";
            context["metadata"] = (objectMetadata ? objectMetadata["payeeId"] : null);
            state['payeeId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        payeeName: function(val, state) {
            context["field"] = "payeeName";
            context["metadata"] = (objectMetadata ? objectMetadata["payeeName"] : null);
            state['payeeName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        payeeNickName: function(val, state) {
            context["field"] = "payeeNickName";
            context["metadata"] = (objectMetadata ? objectMetadata["payeeNickName"] : null);
            state['payeeNickName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        payoffFlag: function(val, state) {
            context["field"] = "payoffFlag";
            context["metadata"] = (objectMetadata ? objectMetadata["payoffFlag"] : null);
            state['payoffFlag'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        payPersonEmail: function(val, state) {
            context["field"] = "payPersonEmail";
            context["metadata"] = (objectMetadata ? objectMetadata["payPersonEmail"] : null);
            state['payPersonEmail'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        payPersonName: function(val, state) {
            context["field"] = "payPersonName";
            context["metadata"] = (objectMetadata ? objectMetadata["payPersonName"] : null);
            state['payPersonName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        payPersonPhone: function(val, state) {
            context["field"] = "payPersonPhone";
            context["metadata"] = (objectMetadata ? objectMetadata["payPersonPhone"] : null);
            state['payPersonPhone'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        penaltyFlag: function(val, state) {
            context["field"] = "penaltyFlag";
            context["metadata"] = (objectMetadata ? objectMetadata["penaltyFlag"] : null);
            state['penaltyFlag'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        personId: function(val, state) {
            context["field"] = "personId";
            context["metadata"] = (objectMetadata ? objectMetadata["personId"] : null);
            state['personId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        recurrenceDesc: function(val, state) {
            context["field"] = "recurrenceDesc";
            context["metadata"] = (objectMetadata ? objectMetadata["recurrenceDesc"] : null);
            state['recurrenceDesc'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        referenceId: function(val, state) {
            context["field"] = "referenceId";
            context["metadata"] = (objectMetadata ? objectMetadata["referenceId"] : null);
            state['referenceId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        scheduledDate: function(val, state) {
            context["field"] = "scheduledDate";
            context["metadata"] = (objectMetadata ? objectMetadata["scheduledDate"] : null);
            state['scheduledDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        searchAmount: function(val, state) {
            context["field"] = "searchAmount";
            context["metadata"] = (objectMetadata ? objectMetadata["searchAmount"] : null);
            state['searchAmount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        searchDateRange: function(val, state) {
            context["field"] = "searchDateRange";
            context["metadata"] = (objectMetadata ? objectMetadata["searchDateRange"] : null);
            state['searchDateRange'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        searchDescription: function(val, state) {
            context["field"] = "searchDescription";
            context["metadata"] = (objectMetadata ? objectMetadata["searchDescription"] : null);
            state['searchDescription'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        searchEndDate: function(val, state) {
            context["field"] = "searchEndDate";
            context["metadata"] = (objectMetadata ? objectMetadata["searchEndDate"] : null);
            state['searchEndDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        searchMaxAmount: function(val, state) {
            context["field"] = "searchMaxAmount";
            context["metadata"] = (objectMetadata ? objectMetadata["searchMaxAmount"] : null);
            state['searchMaxAmount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        searchMinAmount: function(val, state) {
            context["field"] = "searchMinAmount";
            context["metadata"] = (objectMetadata ? objectMetadata["searchMinAmount"] : null);
            state['searchMinAmount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        searchStartDate: function(val, state) {
            context["field"] = "searchStartDate";
            context["metadata"] = (objectMetadata ? objectMetadata["searchStartDate"] : null);
            state['searchStartDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        searchTransactionType: function(val, state) {
            context["field"] = "searchTransactionType";
            context["metadata"] = (objectMetadata ? objectMetadata["searchTransactionType"] : null);
            state['searchTransactionType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        searchType: function(val, state) {
            context["field"] = "searchType";
            context["metadata"] = (objectMetadata ? objectMetadata["searchType"] : null);
            state['searchType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        secondaryEmail: function(val, state) {
            context["field"] = "secondaryEmail";
            context["metadata"] = (objectMetadata ? objectMetadata["secondaryEmail"] : null);
            state['secondaryEmail'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        secondaryEmail2: function(val, state) {
            context["field"] = "secondaryEmail2";
            context["metadata"] = (objectMetadata ? objectMetadata["secondaryEmail2"] : null);
            state['secondaryEmail2'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        secondaryPhoneNumber2: function(val, state) {
            context["field"] = "secondaryPhoneNumber2";
            context["metadata"] = (objectMetadata ? objectMetadata["secondaryPhoneNumber2"] : null);
            state['secondaryPhoneNumber2'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        secondDeposit: function(val, state) {
            context["field"] = "secondDeposit";
            context["metadata"] = (objectMetadata ? objectMetadata["secondDeposit"] : null);
            state['secondDeposit'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        secondoryPhoneNumber: function(val, state) {
            context["field"] = "secondoryPhoneNumber";
            context["metadata"] = (objectMetadata ? objectMetadata["secondoryPhoneNumber"] : null);
            state['secondoryPhoneNumber'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        sortBy: function(val, state) {
            context["field"] = "sortBy";
            context["metadata"] = (objectMetadata ? objectMetadata["sortBy"] : null);
            state['sortBy'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        statusDescription: function(val, state) {
            context["field"] = "statusDescription";
            context["metadata"] = (objectMetadata ? objectMetadata["statusDescription"] : null);
            state['statusDescription'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        success: function(val, state) {
            context["field"] = "success";
            context["metadata"] = (objectMetadata ? objectMetadata["success"] : null);
            state['success'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        toAccountName: function(val, state) {
            context["field"] = "toAccountName";
            context["metadata"] = (objectMetadata ? objectMetadata["toAccountName"] : null);
            state['toAccountName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        toAccountNumber: function(val, state) {
            context["field"] = "toAccountNumber";
            context["metadata"] = (objectMetadata ? objectMetadata["toAccountNumber"] : null);
            state['toAccountNumber'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        toAccountType: function(val, state) {
            context["field"] = "toAccountType";
            context["metadata"] = (objectMetadata ? objectMetadata["toAccountType"] : null);
            state['toAccountType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        toCheckNumber: function(val, state) {
            context["field"] = "toCheckNumber";
            context["metadata"] = (objectMetadata ? objectMetadata["toCheckNumber"] : null);
            state['toCheckNumber'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        totalAmount: function(val, state) {
            context["field"] = "totalAmount";
            context["metadata"] = (objectMetadata ? objectMetadata["totalAmount"] : null);
            state['totalAmount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        transactionComments: function(val, state) {
            context["field"] = "transactionComments";
            context["metadata"] = (objectMetadata ? objectMetadata["transactionComments"] : null);
            state['transactionComments'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        transactionId: function(val, state) {
            context["field"] = "transactionId";
            context["metadata"] = (objectMetadata ? objectMetadata["transactionId"] : null);
            state['transactionId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        transactionsNotes: function(val, state) {
            context["field"] = "transactionsNotes";
            context["metadata"] = (objectMetadata ? objectMetadata["transactionsNotes"] : null);
            state['transactionsNotes'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        validDate: function(val, state) {
            context["field"] = "validDate";
            context["metadata"] = (objectMetadata ? objectMetadata["validDate"] : null);
            state['validDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        viewReportLink: function(val, state) {
            context["field"] = "viewReportLink";
            context["metadata"] = (objectMetadata ? objectMetadata["viewReportLink"] : null);
            state['viewReportLink'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        overdraft: function(val, state) {
            context["field"] = "overdraft";
            context["metadata"] = (objectMetadata ? objectMetadata["overdraft"] : null);
            state['overdraft'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isPaypersonDeleted: function(val, state) {
            context["field"] = "isPaypersonDeleted";
            context["metadata"] = (objectMetadata ? objectMetadata["isPaypersonDeleted"] : null);
            state['isPaypersonDeleted'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        fee: function(val, state) {
            context["field"] = "fee";
            context["metadata"] = (objectMetadata ? objectMetadata["fee"] : null);
            state['fee'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
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
        checkDesc: function(val, state) {
            context["field"] = "checkDesc";
            context["metadata"] = (objectMetadata ? objectMetadata["checkDesc"] : null);
            state['checkDesc'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
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
        totalCheckAmount: function(val, state) {
            context["field"] = "totalCheckAmount";
            context["metadata"] = (objectMetadata ? objectMetadata["totalCheckAmount"] : null);
            state['totalCheckAmount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        cashAmount: function(val, state) {
            context["field"] = "cashAmount";
            context["metadata"] = (objectMetadata ? objectMetadata["cashAmount"] : null);
            state['cashAmount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        payeeCurrency: function(val, state) {
            context["field"] = "payeeCurrency";
            context["metadata"] = (objectMetadata ? objectMetadata["payeeCurrency"] : null);
            state['payeeCurrency'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        swiftCode: function(val, state) {
            context["field"] = "swiftCode";
            context["metadata"] = (objectMetadata ? objectMetadata["swiftCode"] : null);
            state['swiftCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        wireAccountType: function(val, state) {
            context["field"] = "wireAccountType";
            context["metadata"] = (objectMetadata ? objectMetadata["wireAccountType"] : null);
            state['wireAccountType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        country: function(val, state) {
            context["field"] = "country";
            context["metadata"] = (objectMetadata ? objectMetadata["country"] : null);
            state['country'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        IBAN: function(val, state) {
            context["field"] = "IBAN";
            context["metadata"] = (objectMetadata ? objectMetadata["IBAN"] : null);
            state['IBAN'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        bankName: function(val, state) {
            context["field"] = "bankName";
            context["metadata"] = (objectMetadata ? objectMetadata["bankName"] : null);
            state['bankName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        routingNumber: function(val, state) {
            context["field"] = "routingNumber";
            context["metadata"] = (objectMetadata ? objectMetadata["routingNumber"] : null);
            state['routingNumber'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        internationalRoutingCode: function(val, state) {
            context["field"] = "internationalRoutingCode";
            context["metadata"] = (objectMetadata ? objectMetadata["internationalRoutingCode"] : null);
            state['internationalRoutingCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        zipCode: function(val, state) {
            context["field"] = "zipCode";
            context["metadata"] = (objectMetadata ? objectMetadata["zipCode"] : null);
            state['zipCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        cityName: function(val, state) {
            context["field"] = "cityName";
            context["metadata"] = (objectMetadata ? objectMetadata["cityName"] : null);
            state['cityName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        state: function(val, state) {
            context["field"] = "state";
            context["metadata"] = (objectMetadata ? objectMetadata["state"] : null);
            state['state'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        bankAddressLine1: function(val, state) {
            context["field"] = "bankAddressLine1";
            context["metadata"] = (objectMetadata ? objectMetadata["bankAddressLine1"] : null);
            state['bankAddressLine1'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        bankAddressLine2: function(val, state) {
            context["field"] = "bankAddressLine2";
            context["metadata"] = (objectMetadata ? objectMetadata["bankAddressLine2"] : null);
            state['bankAddressLine2'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        bankCity: function(val, state) {
            context["field"] = "bankCity";
            context["metadata"] = (objectMetadata ? objectMetadata["bankCity"] : null);
            state['bankCity'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        bankState: function(val, state) {
            context["field"] = "bankState";
            context["metadata"] = (objectMetadata ? objectMetadata["bankState"] : null);
            state['bankState'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        bankZip: function(val, state) {
            context["field"] = "bankZip";
            context["metadata"] = (objectMetadata ? objectMetadata["bankZip"] : null);
            state['bankZip'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        payeeType: function(val, state) {
            context["field"] = "payeeType";
            context["metadata"] = (objectMetadata ? objectMetadata["payeeType"] : null);
            state['payeeType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        disputeReason: function(val, state) {
            context["field"] = "disputeReason";
            context["metadata"] = (objectMetadata ? objectMetadata["disputeReason"] : null);
            state['disputeReason'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        disputeDescription: function(val, state) {
            context["field"] = "disputeDescription";
            context["metadata"] = (objectMetadata ? objectMetadata["disputeDescription"] : null);
            state['disputeDescription'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        checkDateOfIssue: function(val, state) {
            context["field"] = "checkDateOfIssue";
            context["metadata"] = (objectMetadata ? objectMetadata["checkDateOfIssue"] : null);
            state['checkDateOfIssue'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        checkReason: function(val, state) {
            context["field"] = "checkReason";
            context["metadata"] = (objectMetadata ? objectMetadata["checkReason"] : null);
            state['checkReason'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isPayeeDeleted: function(val, state) {
            context["field"] = "isPayeeDeleted";
            context["metadata"] = (objectMetadata ? objectMetadata["isPayeeDeleted"] : null);
            state['isPayeeDeleted'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        payeeAddressLine2: function(val, state) {
            context["field"] = "payeeAddressLine2";
            context["metadata"] = (objectMetadata ? objectMetadata["payeeAddressLine2"] : null);
            state['payeeAddressLine2'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        amountRecieved: function(val, state) {
            context["field"] = "amountRecieved";
            context["metadata"] = (objectMetadata ? objectMetadata["amountRecieved"] : null);
            state['amountRecieved'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        requestValidityInMonths: function(val, state) {
            context["field"] = "requestValidityInMonths";
            context["metadata"] = (objectMetadata ? objectMetadata["requestValidityInMonths"] : null);
            state['requestValidityInMonths'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        requestValidity: function(val, state) {
            context["field"] = "requestValidity";
            context["metadata"] = (objectMetadata ? objectMetadata["requestValidity"] : null);
            state['requestValidity'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        requestType: function(val, state) {
            context["field"] = "requestType";
            context["metadata"] = (objectMetadata ? objectMetadata["requestType"] : null);
            state['requestType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        disputeDate: function(val, state) {
            context["field"] = "disputeDate";
            context["metadata"] = (objectMetadata ? objectMetadata["disputeDate"] : null);
            state['disputeDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        disputeStatus: function(val, state) {
            context["field"] = "disputeStatus";
            context["metadata"] = (objectMetadata ? objectMetadata["disputeStatus"] : null);
            state['disputeStatus'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isDisputed: function(val, state) {
            context["field"] = "isDisputed";
            context["metadata"] = (objectMetadata ? objectMetadata["isDisputed"] : null);
            state['isDisputed'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        cardId: function(val, state) {
            context["field"] = "cardId";
            context["metadata"] = (objectMetadata ? objectMetadata["cardId"] : null);
            state['cardId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isOverdraft: function(val, state) {
            context["field"] = "isOverdraft";
            context["metadata"] = (objectMetadata ? objectMetadata["isOverdraft"] : null);
            state['isOverdraft'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        title: function(val, state) {
            context["field"] = "title";
            context["metadata"] = (objectMetadata ? objectMetadata["title"] : null);
            state['title'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        generatedBy: function(val, state) {
            context["field"] = "generatedBy";
            context["metadata"] = (objectMetadata ? objectMetadata["generatedBy"] : null);
            state['generatedBy'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        filters: function(val, state) {
            context["field"] = "filters";
            context["metadata"] = (objectMetadata ? objectMetadata["filters"] : null);
            state['filters'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        statementReference: function(val, state) {
            context["field"] = "statementReference";
            context["metadata"] = (objectMetadata ? objectMetadata["statementReference"] : null);
            state['statementReference'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        transCreditDebitIndicator: function(val, state) {
            context["field"] = "transCreditDebitIndicator";
            context["metadata"] = (objectMetadata ? objectMetadata["transCreditDebitIndicator"] : null);
            state['transCreditDebitIndicator'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        bookingDateTime: function(val, state) {
            context["field"] = "bookingDateTime";
            context["metadata"] = (objectMetadata ? objectMetadata["bookingDateTime"] : null);
            state['bookingDateTime'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        valueDateTime: function(val, state) {
            context["field"] = "valueDateTime";
            context["metadata"] = (objectMetadata ? objectMetadata["valueDateTime"] : null);
            state['valueDateTime'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        transactionInformation: function(val, state) {
            context["field"] = "transactionInformation";
            context["metadata"] = (objectMetadata ? objectMetadata["transactionInformation"] : null);
            state['transactionInformation'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        addressLine: function(val, state) {
            context["field"] = "addressLine";
            context["metadata"] = (objectMetadata ? objectMetadata["addressLine"] : null);
            state['addressLine'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        transactionAmount: function(val, state) {
            context["field"] = "transactionAmount";
            context["metadata"] = (objectMetadata ? objectMetadata["transactionAmount"] : null);
            state['transactionAmount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        transactionCurrency: function(val, state) {
            context["field"] = "transactionCurrency";
            context["metadata"] = (objectMetadata ? objectMetadata["transactionCurrency"] : null);
            state['transactionCurrency'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
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
        sourceCurrency: function(val, state) {
            context["field"] = "sourceCurrency";
            context["metadata"] = (objectMetadata ? objectMetadata["sourceCurrency"] : null);
            state['sourceCurrency'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        targetCurrency: function(val, state) {
            context["field"] = "targetCurrency";
            context["metadata"] = (objectMetadata ? objectMetadata["targetCurrency"] : null);
            state['targetCurrency'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        unitCurrency: function(val, state) {
            context["field"] = "unitCurrency";
            context["metadata"] = (objectMetadata ? objectMetadata["unitCurrency"] : null);
            state['unitCurrency'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        exchangeRate: function(val, state) {
            context["field"] = "exchangeRate";
            context["metadata"] = (objectMetadata ? objectMetadata["exchangeRate"] : null);
            state['exchangeRate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        contractIdentification: function(val, state) {
            context["field"] = "contractIdentification";
            context["metadata"] = (objectMetadata ? objectMetadata["contractIdentification"] : null);
            state['contractIdentification'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        quotationDate: function(val, state) {
            context["field"] = "quotationDate";
            context["metadata"] = (objectMetadata ? objectMetadata["quotationDate"] : null);
            state['quotationDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        instructedAmount: function(val, state) {
            context["field"] = "instructedAmount";
            context["metadata"] = (objectMetadata ? objectMetadata["instructedAmount"] : null);
            state['instructedAmount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        transactionCode: function(val, state) {
            context["field"] = "transactionCode";
            context["metadata"] = (objectMetadata ? objectMetadata["transactionCode"] : null);
            state['transactionCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        transactionSubCode: function(val, state) {
            context["field"] = "transactionSubCode";
            context["metadata"] = (objectMetadata ? objectMetadata["transactionSubCode"] : null);
            state['transactionSubCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
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
        balanceCreditDebitIndicator: function(val, state) {
            context["field"] = "balanceCreditDebitIndicator";
            context["metadata"] = (objectMetadata ? objectMetadata["balanceCreditDebitIndicator"] : null);
            state['balanceCreditDebitIndicator'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        balanceType: function(val, state) {
            context["field"] = "balanceType";
            context["metadata"] = (objectMetadata ? objectMetadata["balanceType"] : null);
            state['balanceType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        balanceAmount: function(val, state) {
            context["field"] = "balanceAmount";
            context["metadata"] = (objectMetadata ? objectMetadata["balanceAmount"] : null);
            state['balanceAmount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        balanceCurrency: function(val, state) {
            context["field"] = "balanceCurrency";
            context["metadata"] = (objectMetadata ? objectMetadata["balanceCurrency"] : null);
            state['balanceCurrency'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        merchantName: function(val, state) {
            context["field"] = "merchantName";
            context["metadata"] = (objectMetadata ? objectMetadata["merchantName"] : null);
            state['merchantName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        merchantCategoryCode: function(val, state) {
            context["field"] = "merchantCategoryCode";
            context["metadata"] = (objectMetadata ? objectMetadata["merchantCategoryCode"] : null);
            state['merchantCategoryCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        creditorAgentSchemeName: function(val, state) {
            context["field"] = "creditorAgentSchemeName";
            context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentSchemeName"] : null);
            state['creditorAgentSchemeName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
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
        creditorAgentaddressType: function(val, state) {
            context["field"] = "creditorAgentaddressType";
            context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentaddressType"] : null);
            state['creditorAgentaddressType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        creditorAgentDepartment: function(val, state) {
            context["field"] = "creditorAgentDepartment";
            context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentDepartment"] : null);
            state['creditorAgentDepartment'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        creditorAgentSubDepartment: function(val, state) {
            context["field"] = "creditorAgentSubDepartment";
            context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentSubDepartment"] : null);
            state['creditorAgentSubDepartment'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        creditorAgentStreetName: function(val, state) {
            context["field"] = "creditorAgentStreetName";
            context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentStreetName"] : null);
            state['creditorAgentStreetName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        creditorAgentBuildingNumber: function(val, state) {
            context["field"] = "creditorAgentBuildingNumber";
            context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentBuildingNumber"] : null);
            state['creditorAgentBuildingNumber'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        creditorAgentPostCode: function(val, state) {
            context["field"] = "creditorAgentPostCode";
            context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentPostCode"] : null);
            state['creditorAgentPostCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        creditorAgentTownName: function(val, state) {
            context["field"] = "creditorAgentTownName";
            context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentTownName"] : null);
            state['creditorAgentTownName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        creditorAgentCountrySubDivision: function(val, state) {
            context["field"] = "creditorAgentCountrySubDivision";
            context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentCountrySubDivision"] : null);
            state['creditorAgentCountrySubDivision'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        creditorAgentCountry: function(val, state) {
            context["field"] = "creditorAgentCountry";
            context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentCountry"] : null);
            state['creditorAgentCountry'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        creditorAgentAddressLine: function(val, state) {
            context["field"] = "creditorAgentAddressLine";
            context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentAddressLine"] : null);
            state['creditorAgentAddressLine'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
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
        debtorAgentSchemeName: function(val, state) {
            context["field"] = "debtorAgentSchemeName";
            context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentSchemeName"] : null);
            state['debtorAgentSchemeName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
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
        debtorAgentAddressType: function(val, state) {
            context["field"] = "debtorAgentAddressType";
            context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentAddressType"] : null);
            state['debtorAgentAddressType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        debtorAgentDepartment: function(val, state) {
            context["field"] = "debtorAgentDepartment";
            context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentDepartment"] : null);
            state['debtorAgentDepartment'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        debtorAgentSubDepartment: function(val, state) {
            context["field"] = "debtorAgentSubDepartment";
            context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentSubDepartment"] : null);
            state['debtorAgentSubDepartment'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        debtorAgentStreetName: function(val, state) {
            context["field"] = "debtorAgentStreetName";
            context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentStreetName"] : null);
            state['debtorAgentStreetName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        debtorAgentBuildingNumber: function(val, state) {
            context["field"] = "debtorAgentBuildingNumber";
            context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentBuildingNumber"] : null);
            state['debtorAgentBuildingNumber'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        dedtorAgentPostCode: function(val, state) {
            context["field"] = "dedtorAgentPostCode";
            context["metadata"] = (objectMetadata ? objectMetadata["dedtorAgentPostCode"] : null);
            state['dedtorAgentPostCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        debtorAgentTownName: function(val, state) {
            context["field"] = "debtorAgentTownName";
            context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentTownName"] : null);
            state['debtorAgentTownName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        debtorAgentCountrySubDivision: function(val, state) {
            context["field"] = "debtorAgentCountrySubDivision";
            context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentCountrySubDivision"] : null);
            state['debtorAgentCountrySubDivision'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        debtorAgentCountry: function(val, state) {
            context["field"] = "debtorAgentCountry";
            context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentCountry"] : null);
            state['debtorAgentCountry'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        debtorAgentAddressLine: function(val, state) {
            context["field"] = "debtorAgentAddressLine";
            context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentAddressLine"] : null);
            state['debtorAgentAddressLine'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        debtorAccountSchemeName: function(val, state) {
            context["field"] = "debtorAccountSchemeName";
            context["metadata"] = (objectMetadata ? objectMetadata["debtorAccountSchemeName"] : null);
            state['debtorAccountSchemeName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        debtorAccountName: function(val, state) {
            context["field"] = "debtorAccountName";
            context["metadata"] = (objectMetadata ? objectMetadata["debtorAccountName"] : null);
            state['debtorAccountName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        debtorAccountSeconIdentification: function(val, state) {
            context["field"] = "debtorAccountSeconIdentification";
            context["metadata"] = (objectMetadata ? objectMetadata["debtorAccountSeconIdentification"] : null);
            state['debtorAccountSeconIdentification'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        cardInstrumentSchemeName: function(val, state) {
            context["field"] = "cardInstrumentSchemeName";
            context["metadata"] = (objectMetadata ? objectMetadata["cardInstrumentSchemeName"] : null);
            state['cardInstrumentSchemeName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        cardInstrumentAuthorisationType: function(val, state) {
            context["field"] = "cardInstrumentAuthorisationType";
            context["metadata"] = (objectMetadata ? objectMetadata["cardInstrumentAuthorisationType"] : null);
            state['cardInstrumentAuthorisationType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        cardInstrumentName: function(val, state) {
            context["field"] = "cardInstrumentName";
            context["metadata"] = (objectMetadata ? objectMetadata["cardInstrumentName"] : null);
            state['cardInstrumentName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        cardInstrumentIdentification: function(val, state) {
            context["field"] = "cardInstrumentIdentification";
            context["metadata"] = (objectMetadata ? objectMetadata["cardInstrumentIdentification"] : null);
            state['cardInstrumentIdentification'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        sortCode: function(val, state) {
            context["field"] = "sortCode";
            context["metadata"] = (objectMetadata ? objectMetadata["sortCode"] : null);
            state['sortCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
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
        convertedAmount: function(val, state) {
            context["field"] = "convertedAmount";
            context["metadata"] = (objectMetadata ? objectMetadata["convertedAmount"] : null);
            state['convertedAmount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        baseCurrency: function(val, state) {
            context["field"] = "baseCurrency";
            context["metadata"] = (objectMetadata ? objectMetadata["baseCurrency"] : null);
            state['baseCurrency'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        FirstPaymentDateTime: function(val, state) {
            context["field"] = "FirstPaymentDateTime";
            context["metadata"] = (objectMetadata ? objectMetadata["FirstPaymentDateTime"] : null);
            state['FirstPaymentDateTime'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        NextPaymentDateTime: function(val, state) {
            context["field"] = "NextPaymentDateTime";
            context["metadata"] = (objectMetadata ? objectMetadata["NextPaymentDateTime"] : null);
            state['NextPaymentDateTime'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        FinalPaymentDateTime: function(val, state) {
            context["field"] = "FinalPaymentDateTime";
            context["metadata"] = (objectMetadata ? objectMetadata["FinalPaymentDateTime"] : null);
            state['FinalPaymentDateTime'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        StandingOrderStatusCode: function(val, state) {
            context["field"] = "StandingOrderStatusCode";
            context["metadata"] = (objectMetadata ? objectMetadata["StandingOrderStatusCode"] : null);
            state['StandingOrderStatusCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
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
        beneficiaryName: function(val, state) {
            context["field"] = "beneficiaryName";
            context["metadata"] = (objectMetadata ? objectMetadata["beneficiaryName"] : null);
            state['beneficiaryName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isInternationalAccount: function(val, state) {
            context["field"] = "isInternationalAccount";
            context["metadata"] = (objectMetadata ? objectMetadata["isInternationalAccount"] : null);
            state['isInternationalAccount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        ConsentId: function(val, state) {
            context["field"] = "ConsentId";
            context["metadata"] = (objectMetadata ? objectMetadata["ConsentId"] : null);
            state['ConsentId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Initiation_InstructionIdentification: function(val, state) {
            context["field"] = "Initiation_InstructionIdentification";
            context["metadata"] = (objectMetadata ? objectMetadata["Initiation_InstructionIdentification"] : null);
            state['Initiation_InstructionIdentification'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        RI_Unstructured: function(val, state) {
            context["field"] = "RI_Unstructured";
            context["metadata"] = (objectMetadata ? objectMetadata["RI_Unstructured"] : null);
            state['RI_Unstructured'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        RI_Reference: function(val, state) {
            context["field"] = "RI_Reference";
            context["metadata"] = (objectMetadata ? objectMetadata["RI_Reference"] : null);
            state['RI_Reference'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Initiation_EndToEndIdentification: function(val, state) {
            context["field"] = "Initiation_EndToEndIdentification";
            context["metadata"] = (objectMetadata ? objectMetadata["Initiation_EndToEndIdentification"] : null);
            state['Initiation_EndToEndIdentification'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        RiskPaymentContextCode: function(val, state) {
            context["field"] = "RiskPaymentContextCode";
            context["metadata"] = (objectMetadata ? objectMetadata["RiskPaymentContextCode"] : null);
            state['RiskPaymentContextCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        linkSelf: function(val, state) {
            context["field"] = "linkSelf";
            context["metadata"] = (objectMetadata ? objectMetadata["linkSelf"] : null);
            state['linkSelf'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        StatusUpdateDateTime: function(val, state) {
            context["field"] = "StatusUpdateDateTime";
            context["metadata"] = (objectMetadata ? objectMetadata["StatusUpdateDateTime"] : null);
            state['StatusUpdateDateTime'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        createdDate: function(val, state) {
            context["field"] = "createdDate";
            context["metadata"] = (objectMetadata ? objectMetadata["createdDate"] : null);
            state['createdDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        DomesticPaymentId: function(val, state) {
            context["field"] = "DomesticPaymentId";
            context["metadata"] = (objectMetadata ? objectMetadata["DomesticPaymentId"] : null);
            state['DomesticPaymentId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        dataStatus: function(val, state) {
            context["field"] = "dataStatus";
            context["metadata"] = (objectMetadata ? objectMetadata["dataStatus"] : null);
            state['dataStatus'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Auth_Token: function(val, state) {
            context["field"] = "Auth_Token";
            context["metadata"] = (objectMetadata ? objectMetadata["Auth_Token"] : null);
            state['Auth_Token'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        fileType: function(val, state) {
            context["field"] = "fileType";
            context["metadata"] = (objectMetadata ? objectMetadata["fileType"] : null);
            state['fileType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        MFAAttributes: function(val, state) {
            context["field"] = "MFAAttributes";
            context["metadata"] = (objectMetadata ? objectMetadata["MFAAttributes"] : null);
            state['MFAAttributes'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        securityKey: function(val, state) {
            context["field"] = "securityKey";
            context["metadata"] = (objectMetadata ? objectMetadata["securityKey"] : null);
            state['securityKey'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        sacMaxResendRequestsAllowed: function(val, state) {
            context["field"] = "sacMaxResendRequestsAllowed";
            context["metadata"] = (objectMetadata ? objectMetadata["sacMaxResendRequestsAllowed"] : null);
            state['sacMaxResendRequestsAllowed'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        remainingResendAttempts: function(val, state) {
            context["field"] = "remainingResendAttempts";
            context["metadata"] = (objectMetadata ? objectMetadata["remainingResendAttempts"] : null);
            state['remainingResendAttempts'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        sacCodeLength: function(val, state) {
            context["field"] = "sacCodeLength";
            context["metadata"] = (objectMetadata ? objectMetadata["sacCodeLength"] : null);
            state['sacCodeLength'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        communicationType: function(val, state) {
            context["field"] = "communicationType";
            context["metadata"] = (objectMetadata ? objectMetadata["communicationType"] : null);
            state['communicationType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        sacPreferenceCriteria: function(val, state) {
            context["field"] = "sacPreferenceCriteria";
            context["metadata"] = (objectMetadata ? objectMetadata["sacPreferenceCriteria"] : null);
            state['sacPreferenceCriteria'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        customerCommunication: function(val, state) {
            context["field"] = "customerCommunication";
            context["metadata"] = (objectMetadata ? objectMetadata["customerCommunication"] : null);
            state['customerCommunication'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        phone: function(val, state) {
            context["field"] = "phone";
            context["metadata"] = (objectMetadata ? objectMetadata["phone"] : null);
            state['phone'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        masked: function(val, state) {
            context["field"] = "masked";
            context["metadata"] = (objectMetadata ? objectMetadata["masked"] : null);
            state['masked'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        unmasked: function(val, state) {
            context["field"] = "unmasked";
            context["metadata"] = (objectMetadata ? objectMetadata["unmasked"] : null);
            state['unmasked'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        email: function(val, state) {
            context["field"] = "email";
            context["metadata"] = (objectMetadata ? objectMetadata["email"] : null);
            state['email'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        MFAType: function(val, state) {
            context["field"] = "MFAType";
            context["metadata"] = (objectMetadata ? objectMetadata["MFAType"] : null);
            state['MFAType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isMFARequired: function(val, state) {
            context["field"] = "isMFARequired";
            context["metadata"] = (objectMetadata ? objectMetadata["isMFARequired"] : null);
            state['isMFARequired'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        serviceKey: function(val, state) {
            context["field"] = "serviceKey";
            context["metadata"] = (objectMetadata ? objectMetadata["serviceKey"] : null);
            state['serviceKey'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        securityQuestions: function(val, state) {
            context["field"] = "securityQuestions";
            context["metadata"] = (objectMetadata ? objectMetadata["securityQuestions"] : null);
            state['securityQuestions'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        SecurityQuestion_id: function(val, state) {
            context["field"] = "SecurityQuestion_id";
            context["metadata"] = (objectMetadata ? objectMetadata["SecurityQuestion_id"] : null);
            state['SecurityQuestion_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Question: function(val, state) {
            context["field"] = "Question";
            context["metadata"] = (objectMetadata ? objectMetadata["Question"] : null);
            state['Question'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        QuestionStatus_id: function(val, state) {
            context["field"] = "QuestionStatus_id";
            context["metadata"] = (objectMetadata ? objectMetadata["QuestionStatus_id"] : null);
            state['QuestionStatus_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        serviceName: function(val, state) {
            context["field"] = "serviceName";
            context["metadata"] = (objectMetadata ? objectMetadata["serviceName"] : null);
            state['serviceName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        customerAnswer: function(val, state) {
            context["field"] = "customerAnswer";
            context["metadata"] = (objectMetadata ? objectMetadata["customerAnswer"] : null);
            state['customerAnswer'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        questionId: function(val, state) {
            context["field"] = "questionId";
            context["metadata"] = (objectMetadata ? objectMetadata["questionId"] : null);
            state['questionId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        maxFailedAttemptsAllowed: function(val, state) {
            context["field"] = "maxFailedAttemptsAllowed";
            context["metadata"] = (objectMetadata ? objectMetadata["maxFailedAttemptsAllowed"] : null);
            state['maxFailedAttemptsAllowed'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        remainingFailedAttempts: function(val, state) {
            context["field"] = "remainingFailedAttempts";
            context["metadata"] = (objectMetadata ? objectMetadata["remainingFailedAttempts"] : null);
            state['remainingFailedAttempts'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        failedAttempts: function(val, state) {
            context["field"] = "failedAttempts";
            context["metadata"] = (objectMetadata ? objectMetadata["failedAttempts"] : null);
            state['failedAttempts'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isOTPExpired: function(val, state) {
            context["field"] = "isOTPExpired";
            context["metadata"] = (objectMetadata ? objectMetadata["isOTPExpired"] : null);
            state['isOTPExpired'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        featureActionId: function(val, state) {
            context["field"] = "featureActionId";
            context["metadata"] = (objectMetadata ? objectMetadata["featureActionId"] : null);
            state['featureActionId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        receivedApprovals: function(val, state) {
            context["field"] = "receivedApprovals";
            context["metadata"] = (objectMetadata ? objectMetadata["receivedApprovals"] : null);
            state['receivedApprovals'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        requiredApprovals: function(val, state) {
            context["field"] = "requiredApprovals";
            context["metadata"] = (objectMetadata ? objectMetadata["requiredApprovals"] : null);
            state['requiredApprovals'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Request_id: function(val, state) {
            context["field"] = "Request_id";
            context["metadata"] = (objectMetadata ? objectMetadata["Request_id"] : null);
            state['Request_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        featureName: function(val, state) {
            context["field"] = "featureName";
            context["metadata"] = (objectMetadata ? objectMetadata["featureName"] : null);
            state['featureName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        AccountName: function(val, state) {
            context["field"] = "AccountName";
            context["metadata"] = (objectMetadata ? objectMetadata["AccountName"] : null);
            state['AccountName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function BBGeneralTransactions(defaultValues) {
        var privateState = {};
        context["field"] = "Transaction_id";
        context["metadata"] = (objectMetadata ? objectMetadata["Transaction_id"] : null);
        privateState.Transaction_id = defaultValues ?
            (defaultValues["Transaction_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Transaction_id"], context) :
                null) :
            null;

        context["field"] = "TransactionDate";
        context["metadata"] = (objectMetadata ? objectMetadata["TransactionDate"] : null);
        privateState.TransactionDate = defaultValues ?
            (defaultValues["TransactionDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["TransactionDate"], context) :
                null) :
            null;

        context["field"] = "CreatedBy";
        context["metadata"] = (objectMetadata ? objectMetadata["CreatedBy"] : null);
        privateState.CreatedBy = defaultValues ?
            (defaultValues["CreatedBy"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["CreatedBy"], context) :
                null) :
            null;

        context["field"] = "Payee";
        context["metadata"] = (objectMetadata ? objectMetadata["Payee"] : null);
        privateState.Payee = defaultValues ?
            (defaultValues["Payee"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Payee"], context) :
                null) :
            null;

        context["field"] = "StatusValue";
        context["metadata"] = (objectMetadata ? objectMetadata["StatusValue"] : null);
        privateState.StatusValue = defaultValues ?
            (defaultValues["StatusValue"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["StatusValue"], context) :
                null) :
            null;

        context["field"] = "Reccurence";
        context["metadata"] = (objectMetadata ? objectMetadata["Reccurence"] : null);
        privateState.Reccurence = defaultValues ?
            (defaultValues["Reccurence"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Reccurence"], context) :
                null) :
            null;

        context["field"] = "Frequency";
        context["metadata"] = (objectMetadata ? objectMetadata["Frequency"] : null);
        privateState.Frequency = defaultValues ?
            (defaultValues["Frequency"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Frequency"], context) :
                null) :
            null;

        context["field"] = "Company_id";
        context["metadata"] = (objectMetadata ? objectMetadata["Company_id"] : null);
        privateState.Company_id = defaultValues ?
            (defaultValues["Company_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Company_id"], context) :
                null) :
            null;

        context["field"] = "TransactionType_id";
        context["metadata"] = (objectMetadata ? objectMetadata["TransactionType_id"] : null);
        privateState.TransactionType_id = defaultValues ?
            (defaultValues["TransactionType_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["TransactionType_id"], context) :
                null) :
            null;

        context["field"] = "CreatedOn";
        context["metadata"] = (objectMetadata ? objectMetadata["CreatedOn"] : null);
        privateState.CreatedOn = defaultValues ?
            (defaultValues["CreatedOn"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["CreatedOn"], context) :
                null) :
            null;

        context["field"] = "Amount";
        context["metadata"] = (objectMetadata ? objectMetadata["Amount"] : null);
        privateState.Amount = defaultValues ?
            (defaultValues["Amount"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Amount"], context) :
                null) :
            null;

        context["field"] = "companyName";
        context["metadata"] = (objectMetadata ? objectMetadata["companyName"] : null);
        privateState.companyName = defaultValues ?
            (defaultValues["companyName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["companyName"], context) :
                null) :
            null;

        context["field"] = "DebitOrCreditAccount";
        context["metadata"] = (objectMetadata ? objectMetadata["DebitOrCreditAccount"] : null);
        privateState.DebitOrCreditAccount = defaultValues ?
            (defaultValues["DebitOrCreditAccount"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["DebitOrCreditAccount"], context) :
                null) :
            null;

        context["field"] = "TransactionType";
        context["metadata"] = (objectMetadata ? objectMetadata["TransactionType"] : null);
        privateState.TransactionType = defaultValues ?
            (defaultValues["TransactionType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["TransactionType"], context) :
                null) :
            null;

        context["field"] = "Status";
        context["metadata"] = (objectMetadata ? objectMetadata["Status"] : null);
        privateState.Status = defaultValues ?
            (defaultValues["Status"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Status"], context) :
                null) :
            null;

        context["field"] = "EffectiveDate";
        context["metadata"] = (objectMetadata ? objectMetadata["EffectiveDate"] : null);
        privateState.EffectiveDate = defaultValues ?
            (defaultValues["EffectiveDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["EffectiveDate"], context) :
                null) :
            null;

        context["field"] = "BBGeneralTransactionType_id";
        context["metadata"] = (objectMetadata ? objectMetadata["BBGeneralTransactionType_id"] : null);
        privateState.BBGeneralTransactionType_id = defaultValues ?
            (defaultValues["BBGeneralTransactionType_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["BBGeneralTransactionType_id"], context) :
                null) :
            null;

        context["field"] = "TransactionEntry";
        context["metadata"] = (objectMetadata ? objectMetadata["TransactionEntry"] : null);
        privateState.TransactionEntry = defaultValues ?
            (defaultValues["TransactionEntry"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["TransactionEntry"], context) :
                null) :
            null;

        context["field"] = "Approver";
        context["metadata"] = (objectMetadata ? objectMetadata["Approver"] : null);
        privateState.Approver = defaultValues ?
            (defaultValues["Approver"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Approver"], context) :
                null) :
            null;

        context["field"] = "userName";
        context["metadata"] = (objectMetadata ? objectMetadata["userName"] : null);
        privateState.userName = defaultValues ?
            (defaultValues["userName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["userName"], context) :
                null) :
            null;

        context["field"] = "dbpErrCode";
        context["metadata"] = (objectMetadata ? objectMetadata["dbpErrCode"] : null);
        privateState.dbpErrCode = defaultValues ?
            (defaultValues["dbpErrCode"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["dbpErrCode"], context) :
                null) :
            null;

        context["field"] = "dbpErrMsg";
        context["metadata"] = (objectMetadata ? objectMetadata["dbpErrMsg"] : null);
        privateState.dbpErrMsg = defaultValues ?
            (defaultValues["dbpErrMsg"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["dbpErrMsg"], context) :
                null) :
            null;

        context["field"] = "opstatus";
        context["metadata"] = (objectMetadata ? objectMetadata["opstatus"] : null);
        privateState.opstatus = defaultValues ?
            (defaultValues["opstatus"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["opstatus"], context) :
                null) :
            null;

        context["field"] = "httpStatusCode";
        context["metadata"] = (objectMetadata ? objectMetadata["httpStatusCode"] : null);
        privateState.httpStatusCode = defaultValues ?
            (defaultValues["httpStatusCode"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["httpStatusCode"], context) :
                null) :
            null;

        context["field"] = "accountID";
        context["metadata"] = (objectMetadata ? objectMetadata["accountID"] : null);
        privateState.accountID = defaultValues ?
            (defaultValues["accountID"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["accountID"], context) :
                null) :
            null;

        context["field"] = "accountNumber";
        context["metadata"] = (objectMetadata ? objectMetadata["accountNumber"] : null);
        privateState.accountNumber = defaultValues ?
            (defaultValues["accountNumber"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["accountNumber"], context) :
                null) :
            null;

        context["field"] = "amountTransferedTillNow";
        context["metadata"] = (objectMetadata ? objectMetadata["amountTransferedTillNow"] : null);
        privateState.amountTransferedTillNow = defaultValues ?
            (defaultValues["amountTransferedTillNow"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["amountTransferedTillNow"], context) :
                null) :
            null;

        context["field"] = "authenticationRequired";
        context["metadata"] = (objectMetadata ? objectMetadata["authenticationRequired"] : null);
        privateState.authenticationRequired = defaultValues ?
            (defaultValues["authenticationRequired"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["authenticationRequired"], context) :
                null) :
            null;

        context["field"] = "billCategory";
        context["metadata"] = (objectMetadata ? objectMetadata["billCategory"] : null);
        privateState.billCategory = defaultValues ?
            (defaultValues["billCategory"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["billCategory"], context) :
                null) :
            null;

        context["field"] = "billCategoryId";
        context["metadata"] = (objectMetadata ? objectMetadata["billCategoryId"] : null);
        privateState.billCategoryId = defaultValues ?
            (defaultValues["billCategoryId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["billCategoryId"], context) :
                null) :
            null;

        context["field"] = "billDueAmount";
        context["metadata"] = (objectMetadata ? objectMetadata["billDueAmount"] : null);
        privateState.billDueAmount = defaultValues ?
            (defaultValues["billDueAmount"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["billDueAmount"], context) :
                null) :
            null;

        context["field"] = "billDueDate";
        context["metadata"] = (objectMetadata ? objectMetadata["billDueDate"] : null);
        privateState.billDueDate = defaultValues ?
            (defaultValues["billDueDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["billDueDate"], context) :
                null) :
            null;

        context["field"] = "billerCategoryName";
        context["metadata"] = (objectMetadata ? objectMetadata["billerCategoryName"] : null);
        privateState.billerCategoryName = defaultValues ?
            (defaultValues["billerCategoryName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["billerCategoryName"], context) :
                null) :
            null;

        context["field"] = "billGeneratedDate";
        context["metadata"] = (objectMetadata ? objectMetadata["billGeneratedDate"] : null);
        privateState.billGeneratedDate = defaultValues ?
            (defaultValues["billGeneratedDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["billGeneratedDate"], context) :
                null) :
            null;

        context["field"] = "billid";
        context["metadata"] = (objectMetadata ? objectMetadata["billid"] : null);
        privateState.billid = defaultValues ?
            (defaultValues["billid"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["billid"], context) :
                null) :
            null;

        context["field"] = "billPaidAmount";
        context["metadata"] = (objectMetadata ? objectMetadata["billPaidAmount"] : null);
        privateState.billPaidAmount = defaultValues ?
            (defaultValues["billPaidAmount"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["billPaidAmount"], context) :
                null) :
            null;

        context["field"] = "billPaidDate";
        context["metadata"] = (objectMetadata ? objectMetadata["billPaidDate"] : null);
        privateState.billPaidDate = defaultValues ?
            (defaultValues["billPaidDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["billPaidDate"], context) :
                null) :
            null;

        context["field"] = "bulkPayString";
        context["metadata"] = (objectMetadata ? objectMetadata["bulkPayString"] : null);
        privateState.bulkPayString = defaultValues ?
            (defaultValues["bulkPayString"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["bulkPayString"], context) :
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

        context["field"] = "eBillEnable";
        context["metadata"] = (objectMetadata ? objectMetadata["eBillEnable"] : null);
        privateState.eBillEnable = defaultValues ?
            (defaultValues["eBillEnable"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["eBillEnable"], context) :
                null) :
            null;

        context["field"] = "eBillSupport";
        context["metadata"] = (objectMetadata ? objectMetadata["eBillSupport"] : null);
        privateState.eBillSupport = defaultValues ?
            (defaultValues["eBillSupport"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["eBillSupport"], context) :
                null) :
            null;

        context["field"] = "ebillURL";
        context["metadata"] = (objectMetadata ? objectMetadata["ebillURL"] : null);
        privateState.ebillURL = defaultValues ?
            (defaultValues["ebillURL"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ebillURL"], context) :
                null) :
            null;

        context["field"] = "errmsg";
        context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
        privateState.errmsg = defaultValues ?
            (defaultValues["errmsg"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["errmsg"], context) :
                null) :
            null;

        context["field"] = "ExternalAccountNumber";
        context["metadata"] = (objectMetadata ? objectMetadata["ExternalAccountNumber"] : null);
        privateState.ExternalAccountNumber = defaultValues ?
            (defaultValues["ExternalAccountNumber"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ExternalAccountNumber"], context) :
                null) :
            null;

        context["field"] = "firstDeposit";
        context["metadata"] = (objectMetadata ? objectMetadata["firstDeposit"] : null);
        privateState.firstDeposit = defaultValues ?
            (defaultValues["firstDeposit"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["firstDeposit"], context) :
                null) :
            null;

        context["field"] = "firstRecordNumber";
        context["metadata"] = (objectMetadata ? objectMetadata["firstRecordNumber"] : null);
        privateState.firstRecordNumber = defaultValues ?
            (defaultValues["firstRecordNumber"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["firstRecordNumber"], context) :
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

        context["field"] = "fromAccountName";
        context["metadata"] = (objectMetadata ? objectMetadata["fromAccountName"] : null);
        privateState.fromAccountName = defaultValues ?
            (defaultValues["fromAccountName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["fromAccountName"], context) :
                null) :
            null;

        context["field"] = "fromAccountNumber";
        context["metadata"] = (objectMetadata ? objectMetadata["fromAccountNumber"] : null);
        privateState.fromAccountNumber = defaultValues ?
            (defaultValues["fromAccountNumber"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["fromAccountNumber"], context) :
                null) :
            null;

        context["field"] = "fromAccountType";
        context["metadata"] = (objectMetadata ? objectMetadata["fromAccountType"] : null);
        privateState.fromAccountType = defaultValues ?
            (defaultValues["fromAccountType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["fromAccountType"], context) :
                null) :
            null;

        context["field"] = "fromCheckNumber";
        context["metadata"] = (objectMetadata ? objectMetadata["fromCheckNumber"] : null);
        privateState.fromCheckNumber = defaultValues ?
            (defaultValues["fromCheckNumber"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["fromCheckNumber"], context) :
                null) :
            null;

        context["field"] = "fromNickName";
        context["metadata"] = (objectMetadata ? objectMetadata["fromNickName"] : null);
        privateState.fromNickName = defaultValues ?
            (defaultValues["fromNickName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["fromNickName"], context) :
                null) :
            null;

        context["field"] = "hasDepositImage";
        context["metadata"] = (objectMetadata ? objectMetadata["hasDepositImage"] : null);
        privateState.hasDepositImage = defaultValues ?
            (defaultValues["hasDepositImage"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["hasDepositImage"], context) :
                null) :
            null;

        context["field"] = "isScheduled";
        context["metadata"] = (objectMetadata ? objectMetadata["isScheduled"] : null);
        privateState.isScheduled = defaultValues ?
            (defaultValues["isScheduled"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isScheduled"], context) :
                null) :
            null;

        context["field"] = "lastRecordNumber";
        context["metadata"] = (objectMetadata ? objectMetadata["lastRecordNumber"] : null);
        privateState.lastRecordNumber = defaultValues ?
            (defaultValues["lastRecordNumber"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["lastRecordNumber"], context) :
                null) :
            null;

        context["field"] = "limit";
        context["metadata"] = (objectMetadata ? objectMetadata["limit"] : null);
        privateState.limit = defaultValues ?
            (defaultValues["limit"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["limit"], context) :
                null) :
            null;

        context["field"] = "numberOfRecurrences";
        context["metadata"] = (objectMetadata ? objectMetadata["numberOfRecurrences"] : null);
        privateState.numberOfRecurrences = defaultValues ?
            (defaultValues["numberOfRecurrences"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["numberOfRecurrences"], context) :
                null) :
            null;

        context["field"] = "offset";
        context["metadata"] = (objectMetadata ? objectMetadata["offset"] : null);
        privateState.offset = defaultValues ?
            (defaultValues["offset"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["offset"], context) :
                null) :
            null;

        context["field"] = "order";
        context["metadata"] = (objectMetadata ? objectMetadata["order"] : null);
        privateState.order = defaultValues ?
            (defaultValues["order"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["order"], context) :
                null) :
            null;

        context["field"] = "otp";
        context["metadata"] = (objectMetadata ? objectMetadata["otp"] : null);
        privateState.otp = defaultValues ?
            (defaultValues["otp"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["otp"], context) :
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

        context["field"] = "payeeAccountNumber";
        context["metadata"] = (objectMetadata ? objectMetadata["payeeAccountNumber"] : null);
        privateState.payeeAccountNumber = defaultValues ?
            (defaultValues["payeeAccountNumber"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["payeeAccountNumber"], context) :
                null) :
            null;

        context["field"] = "payeeAddressLine1";
        context["metadata"] = (objectMetadata ? objectMetadata["payeeAddressLine1"] : null);
        privateState.payeeAddressLine1 = defaultValues ?
            (defaultValues["payeeAddressLine1"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["payeeAddressLine1"], context) :
                null) :
            null;

        context["field"] = "payeeId";
        context["metadata"] = (objectMetadata ? objectMetadata["payeeId"] : null);
        privateState.payeeId = defaultValues ?
            (defaultValues["payeeId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["payeeId"], context) :
                null) :
            null;

        context["field"] = "payeeName";
        context["metadata"] = (objectMetadata ? objectMetadata["payeeName"] : null);
        privateState.payeeName = defaultValues ?
            (defaultValues["payeeName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["payeeName"], context) :
                null) :
            null;

        context["field"] = "payeeNickName";
        context["metadata"] = (objectMetadata ? objectMetadata["payeeNickName"] : null);
        privateState.payeeNickName = defaultValues ?
            (defaultValues["payeeNickName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["payeeNickName"], context) :
                null) :
            null;

        context["field"] = "payoffFlag";
        context["metadata"] = (objectMetadata ? objectMetadata["payoffFlag"] : null);
        privateState.payoffFlag = defaultValues ?
            (defaultValues["payoffFlag"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["payoffFlag"], context) :
                null) :
            null;

        context["field"] = "payPersonEmail";
        context["metadata"] = (objectMetadata ? objectMetadata["payPersonEmail"] : null);
        privateState.payPersonEmail = defaultValues ?
            (defaultValues["payPersonEmail"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["payPersonEmail"], context) :
                null) :
            null;

        context["field"] = "payPersonName";
        context["metadata"] = (objectMetadata ? objectMetadata["payPersonName"] : null);
        privateState.payPersonName = defaultValues ?
            (defaultValues["payPersonName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["payPersonName"], context) :
                null) :
            null;

        context["field"] = "payPersonPhone";
        context["metadata"] = (objectMetadata ? objectMetadata["payPersonPhone"] : null);
        privateState.payPersonPhone = defaultValues ?
            (defaultValues["payPersonPhone"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["payPersonPhone"], context) :
                null) :
            null;

        context["field"] = "penaltyFlag";
        context["metadata"] = (objectMetadata ? objectMetadata["penaltyFlag"] : null);
        privateState.penaltyFlag = defaultValues ?
            (defaultValues["penaltyFlag"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["penaltyFlag"], context) :
                null) :
            null;

        context["field"] = "personId";
        context["metadata"] = (objectMetadata ? objectMetadata["personId"] : null);
        privateState.personId = defaultValues ?
            (defaultValues["personId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["personId"], context) :
                null) :
            null;

        context["field"] = "recurrenceDesc";
        context["metadata"] = (objectMetadata ? objectMetadata["recurrenceDesc"] : null);
        privateState.recurrenceDesc = defaultValues ?
            (defaultValues["recurrenceDesc"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["recurrenceDesc"], context) :
                null) :
            null;

        context["field"] = "referenceId";
        context["metadata"] = (objectMetadata ? objectMetadata["referenceId"] : null);
        privateState.referenceId = defaultValues ?
            (defaultValues["referenceId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["referenceId"], context) :
                null) :
            null;

        context["field"] = "scheduledDate";
        context["metadata"] = (objectMetadata ? objectMetadata["scheduledDate"] : null);
        privateState.scheduledDate = defaultValues ?
            (defaultValues["scheduledDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["scheduledDate"], context) :
                null) :
            null;

        context["field"] = "searchAmount";
        context["metadata"] = (objectMetadata ? objectMetadata["searchAmount"] : null);
        privateState.searchAmount = defaultValues ?
            (defaultValues["searchAmount"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["searchAmount"], context) :
                null) :
            null;

        context["field"] = "searchDateRange";
        context["metadata"] = (objectMetadata ? objectMetadata["searchDateRange"] : null);
        privateState.searchDateRange = defaultValues ?
            (defaultValues["searchDateRange"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["searchDateRange"], context) :
                null) :
            null;

        context["field"] = "searchDescription";
        context["metadata"] = (objectMetadata ? objectMetadata["searchDescription"] : null);
        privateState.searchDescription = defaultValues ?
            (defaultValues["searchDescription"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["searchDescription"], context) :
                null) :
            null;

        context["field"] = "searchEndDate";
        context["metadata"] = (objectMetadata ? objectMetadata["searchEndDate"] : null);
        privateState.searchEndDate = defaultValues ?
            (defaultValues["searchEndDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["searchEndDate"], context) :
                null) :
            null;

        context["field"] = "searchMaxAmount";
        context["metadata"] = (objectMetadata ? objectMetadata["searchMaxAmount"] : null);
        privateState.searchMaxAmount = defaultValues ?
            (defaultValues["searchMaxAmount"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["searchMaxAmount"], context) :
                null) :
            null;

        context["field"] = "searchMinAmount";
        context["metadata"] = (objectMetadata ? objectMetadata["searchMinAmount"] : null);
        privateState.searchMinAmount = defaultValues ?
            (defaultValues["searchMinAmount"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["searchMinAmount"], context) :
                null) :
            null;

        context["field"] = "searchStartDate";
        context["metadata"] = (objectMetadata ? objectMetadata["searchStartDate"] : null);
        privateState.searchStartDate = defaultValues ?
            (defaultValues["searchStartDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["searchStartDate"], context) :
                null) :
            null;

        context["field"] = "searchTransactionType";
        context["metadata"] = (objectMetadata ? objectMetadata["searchTransactionType"] : null);
        privateState.searchTransactionType = defaultValues ?
            (defaultValues["searchTransactionType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["searchTransactionType"], context) :
                null) :
            null;

        context["field"] = "searchType";
        context["metadata"] = (objectMetadata ? objectMetadata["searchType"] : null);
        privateState.searchType = defaultValues ?
            (defaultValues["searchType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["searchType"], context) :
                null) :
            null;

        context["field"] = "secondaryEmail";
        context["metadata"] = (objectMetadata ? objectMetadata["secondaryEmail"] : null);
        privateState.secondaryEmail = defaultValues ?
            (defaultValues["secondaryEmail"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["secondaryEmail"], context) :
                null) :
            null;

        context["field"] = "secondaryEmail2";
        context["metadata"] = (objectMetadata ? objectMetadata["secondaryEmail2"] : null);
        privateState.secondaryEmail2 = defaultValues ?
            (defaultValues["secondaryEmail2"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["secondaryEmail2"], context) :
                null) :
            null;

        context["field"] = "secondaryPhoneNumber2";
        context["metadata"] = (objectMetadata ? objectMetadata["secondaryPhoneNumber2"] : null);
        privateState.secondaryPhoneNumber2 = defaultValues ?
            (defaultValues["secondaryPhoneNumber2"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["secondaryPhoneNumber2"], context) :
                null) :
            null;

        context["field"] = "secondDeposit";
        context["metadata"] = (objectMetadata ? objectMetadata["secondDeposit"] : null);
        privateState.secondDeposit = defaultValues ?
            (defaultValues["secondDeposit"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["secondDeposit"], context) :
                null) :
            null;

        context["field"] = "secondoryPhoneNumber";
        context["metadata"] = (objectMetadata ? objectMetadata["secondoryPhoneNumber"] : null);
        privateState.secondoryPhoneNumber = defaultValues ?
            (defaultValues["secondoryPhoneNumber"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["secondoryPhoneNumber"], context) :
                null) :
            null;

        context["field"] = "sortBy";
        context["metadata"] = (objectMetadata ? objectMetadata["sortBy"] : null);
        privateState.sortBy = defaultValues ?
            (defaultValues["sortBy"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["sortBy"], context) :
                null) :
            null;

        context["field"] = "statusDescription";
        context["metadata"] = (objectMetadata ? objectMetadata["statusDescription"] : null);
        privateState.statusDescription = defaultValues ?
            (defaultValues["statusDescription"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["statusDescription"], context) :
                null) :
            null;

        context["field"] = "success";
        context["metadata"] = (objectMetadata ? objectMetadata["success"] : null);
        privateState.success = defaultValues ?
            (defaultValues["success"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["success"], context) :
                null) :
            null;

        context["field"] = "toAccountName";
        context["metadata"] = (objectMetadata ? objectMetadata["toAccountName"] : null);
        privateState.toAccountName = defaultValues ?
            (defaultValues["toAccountName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["toAccountName"], context) :
                null) :
            null;

        context["field"] = "toAccountNumber";
        context["metadata"] = (objectMetadata ? objectMetadata["toAccountNumber"] : null);
        privateState.toAccountNumber = defaultValues ?
            (defaultValues["toAccountNumber"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["toAccountNumber"], context) :
                null) :
            null;

        context["field"] = "toAccountType";
        context["metadata"] = (objectMetadata ? objectMetadata["toAccountType"] : null);
        privateState.toAccountType = defaultValues ?
            (defaultValues["toAccountType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["toAccountType"], context) :
                null) :
            null;

        context["field"] = "toCheckNumber";
        context["metadata"] = (objectMetadata ? objectMetadata["toCheckNumber"] : null);
        privateState.toCheckNumber = defaultValues ?
            (defaultValues["toCheckNumber"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["toCheckNumber"], context) :
                null) :
            null;

        context["field"] = "totalAmount";
        context["metadata"] = (objectMetadata ? objectMetadata["totalAmount"] : null);
        privateState.totalAmount = defaultValues ?
            (defaultValues["totalAmount"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["totalAmount"], context) :
                null) :
            null;

        context["field"] = "transactionComments";
        context["metadata"] = (objectMetadata ? objectMetadata["transactionComments"] : null);
        privateState.transactionComments = defaultValues ?
            (defaultValues["transactionComments"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["transactionComments"], context) :
                null) :
            null;

        context["field"] = "transactionId";
        context["metadata"] = (objectMetadata ? objectMetadata["transactionId"] : null);
        privateState.transactionId = defaultValues ?
            (defaultValues["transactionId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["transactionId"], context) :
                null) :
            null;

        context["field"] = "transactionsNotes";
        context["metadata"] = (objectMetadata ? objectMetadata["transactionsNotes"] : null);
        privateState.transactionsNotes = defaultValues ?
            (defaultValues["transactionsNotes"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["transactionsNotes"], context) :
                null) :
            null;

        context["field"] = "validDate";
        context["metadata"] = (objectMetadata ? objectMetadata["validDate"] : null);
        privateState.validDate = defaultValues ?
            (defaultValues["validDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["validDate"], context) :
                null) :
            null;

        context["field"] = "viewReportLink";
        context["metadata"] = (objectMetadata ? objectMetadata["viewReportLink"] : null);
        privateState.viewReportLink = defaultValues ?
            (defaultValues["viewReportLink"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["viewReportLink"], context) :
                null) :
            null;

        context["field"] = "overdraft";
        context["metadata"] = (objectMetadata ? objectMetadata["overdraft"] : null);
        privateState.overdraft = defaultValues ?
            (defaultValues["overdraft"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["overdraft"], context) :
                null) :
            null;

        context["field"] = "isPaypersonDeleted";
        context["metadata"] = (objectMetadata ? objectMetadata["isPaypersonDeleted"] : null);
        privateState.isPaypersonDeleted = defaultValues ?
            (defaultValues["isPaypersonDeleted"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isPaypersonDeleted"], context) :
                null) :
            null;

        context["field"] = "fee";
        context["metadata"] = (objectMetadata ? objectMetadata["fee"] : null);
        privateState.fee = defaultValues ?
            (defaultValues["fee"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["fee"], context) :
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

        context["field"] = "checkDesc";
        context["metadata"] = (objectMetadata ? objectMetadata["checkDesc"] : null);
        privateState.checkDesc = defaultValues ?
            (defaultValues["checkDesc"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["checkDesc"], context) :
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

        context["field"] = "totalCheckAmount";
        context["metadata"] = (objectMetadata ? objectMetadata["totalCheckAmount"] : null);
        privateState.totalCheckAmount = defaultValues ?
            (defaultValues["totalCheckAmount"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["totalCheckAmount"], context) :
                null) :
            null;

        context["field"] = "cashAmount";
        context["metadata"] = (objectMetadata ? objectMetadata["cashAmount"] : null);
        privateState.cashAmount = defaultValues ?
            (defaultValues["cashAmount"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["cashAmount"], context) :
                null) :
            null;

        context["field"] = "payeeCurrency";
        context["metadata"] = (objectMetadata ? objectMetadata["payeeCurrency"] : null);
        privateState.payeeCurrency = defaultValues ?
            (defaultValues["payeeCurrency"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["payeeCurrency"], context) :
                null) :
            null;

        context["field"] = "swiftCode";
        context["metadata"] = (objectMetadata ? objectMetadata["swiftCode"] : null);
        privateState.swiftCode = defaultValues ?
            (defaultValues["swiftCode"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["swiftCode"], context) :
                null) :
            null;

        context["field"] = "wireAccountType";
        context["metadata"] = (objectMetadata ? objectMetadata["wireAccountType"] : null);
        privateState.wireAccountType = defaultValues ?
            (defaultValues["wireAccountType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["wireAccountType"], context) :
                null) :
            null;

        context["field"] = "country";
        context["metadata"] = (objectMetadata ? objectMetadata["country"] : null);
        privateState.country = defaultValues ?
            (defaultValues["country"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["country"], context) :
                null) :
            null;

        context["field"] = "IBAN";
        context["metadata"] = (objectMetadata ? objectMetadata["IBAN"] : null);
        privateState.IBAN = defaultValues ?
            (defaultValues["IBAN"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["IBAN"], context) :
                null) :
            null;

        context["field"] = "bankName";
        context["metadata"] = (objectMetadata ? objectMetadata["bankName"] : null);
        privateState.bankName = defaultValues ?
            (defaultValues["bankName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["bankName"], context) :
                null) :
            null;

        context["field"] = "routingNumber";
        context["metadata"] = (objectMetadata ? objectMetadata["routingNumber"] : null);
        privateState.routingNumber = defaultValues ?
            (defaultValues["routingNumber"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["routingNumber"], context) :
                null) :
            null;

        context["field"] = "internationalRoutingCode";
        context["metadata"] = (objectMetadata ? objectMetadata["internationalRoutingCode"] : null);
        privateState.internationalRoutingCode = defaultValues ?
            (defaultValues["internationalRoutingCode"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["internationalRoutingCode"], context) :
                null) :
            null;

        context["field"] = "zipCode";
        context["metadata"] = (objectMetadata ? objectMetadata["zipCode"] : null);
        privateState.zipCode = defaultValues ?
            (defaultValues["zipCode"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["zipCode"], context) :
                null) :
            null;

        context["field"] = "cityName";
        context["metadata"] = (objectMetadata ? objectMetadata["cityName"] : null);
        privateState.cityName = defaultValues ?
            (defaultValues["cityName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["cityName"], context) :
                null) :
            null;

        context["field"] = "state";
        context["metadata"] = (objectMetadata ? objectMetadata["state"] : null);
        privateState.state = defaultValues ?
            (defaultValues["state"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["state"], context) :
                null) :
            null;

        context["field"] = "bankAddressLine1";
        context["metadata"] = (objectMetadata ? objectMetadata["bankAddressLine1"] : null);
        privateState.bankAddressLine1 = defaultValues ?
            (defaultValues["bankAddressLine1"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["bankAddressLine1"], context) :
                null) :
            null;

        context["field"] = "bankAddressLine2";
        context["metadata"] = (objectMetadata ? objectMetadata["bankAddressLine2"] : null);
        privateState.bankAddressLine2 = defaultValues ?
            (defaultValues["bankAddressLine2"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["bankAddressLine2"], context) :
                null) :
            null;

        context["field"] = "bankCity";
        context["metadata"] = (objectMetadata ? objectMetadata["bankCity"] : null);
        privateState.bankCity = defaultValues ?
            (defaultValues["bankCity"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["bankCity"], context) :
                null) :
            null;

        context["field"] = "bankState";
        context["metadata"] = (objectMetadata ? objectMetadata["bankState"] : null);
        privateState.bankState = defaultValues ?
            (defaultValues["bankState"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["bankState"], context) :
                null) :
            null;

        context["field"] = "bankZip";
        context["metadata"] = (objectMetadata ? objectMetadata["bankZip"] : null);
        privateState.bankZip = defaultValues ?
            (defaultValues["bankZip"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["bankZip"], context) :
                null) :
            null;

        context["field"] = "payeeType";
        context["metadata"] = (objectMetadata ? objectMetadata["payeeType"] : null);
        privateState.payeeType = defaultValues ?
            (defaultValues["payeeType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["payeeType"], context) :
                null) :
            null;

        context["field"] = "disputeReason";
        context["metadata"] = (objectMetadata ? objectMetadata["disputeReason"] : null);
        privateState.disputeReason = defaultValues ?
            (defaultValues["disputeReason"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["disputeReason"], context) :
                null) :
            null;

        context["field"] = "disputeDescription";
        context["metadata"] = (objectMetadata ? objectMetadata["disputeDescription"] : null);
        privateState.disputeDescription = defaultValues ?
            (defaultValues["disputeDescription"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["disputeDescription"], context) :
                null) :
            null;

        context["field"] = "checkDateOfIssue";
        context["metadata"] = (objectMetadata ? objectMetadata["checkDateOfIssue"] : null);
        privateState.checkDateOfIssue = defaultValues ?
            (defaultValues["checkDateOfIssue"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["checkDateOfIssue"], context) :
                null) :
            null;

        context["field"] = "checkReason";
        context["metadata"] = (objectMetadata ? objectMetadata["checkReason"] : null);
        privateState.checkReason = defaultValues ?
            (defaultValues["checkReason"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["checkReason"], context) :
                null) :
            null;

        context["field"] = "isPayeeDeleted";
        context["metadata"] = (objectMetadata ? objectMetadata["isPayeeDeleted"] : null);
        privateState.isPayeeDeleted = defaultValues ?
            (defaultValues["isPayeeDeleted"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isPayeeDeleted"], context) :
                null) :
            null;

        context["field"] = "payeeAddressLine2";
        context["metadata"] = (objectMetadata ? objectMetadata["payeeAddressLine2"] : null);
        privateState.payeeAddressLine2 = defaultValues ?
            (defaultValues["payeeAddressLine2"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["payeeAddressLine2"], context) :
                null) :
            null;

        context["field"] = "amountRecieved";
        context["metadata"] = (objectMetadata ? objectMetadata["amountRecieved"] : null);
        privateState.amountRecieved = defaultValues ?
            (defaultValues["amountRecieved"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["amountRecieved"], context) :
                null) :
            null;

        context["field"] = "requestValidityInMonths";
        context["metadata"] = (objectMetadata ? objectMetadata["requestValidityInMonths"] : null);
        privateState.requestValidityInMonths = defaultValues ?
            (defaultValues["requestValidityInMonths"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["requestValidityInMonths"], context) :
                null) :
            null;

        context["field"] = "requestValidity";
        context["metadata"] = (objectMetadata ? objectMetadata["requestValidity"] : null);
        privateState.requestValidity = defaultValues ?
            (defaultValues["requestValidity"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["requestValidity"], context) :
                null) :
            null;

        context["field"] = "requestType";
        context["metadata"] = (objectMetadata ? objectMetadata["requestType"] : null);
        privateState.requestType = defaultValues ?
            (defaultValues["requestType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["requestType"], context) :
                null) :
            null;

        context["field"] = "disputeDate";
        context["metadata"] = (objectMetadata ? objectMetadata["disputeDate"] : null);
        privateState.disputeDate = defaultValues ?
            (defaultValues["disputeDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["disputeDate"], context) :
                null) :
            null;

        context["field"] = "disputeStatus";
        context["metadata"] = (objectMetadata ? objectMetadata["disputeStatus"] : null);
        privateState.disputeStatus = defaultValues ?
            (defaultValues["disputeStatus"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["disputeStatus"], context) :
                null) :
            null;

        context["field"] = "isDisputed";
        context["metadata"] = (objectMetadata ? objectMetadata["isDisputed"] : null);
        privateState.isDisputed = defaultValues ?
            (defaultValues["isDisputed"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isDisputed"], context) :
                null) :
            null;

        context["field"] = "cardId";
        context["metadata"] = (objectMetadata ? objectMetadata["cardId"] : null);
        privateState.cardId = defaultValues ?
            (defaultValues["cardId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["cardId"], context) :
                null) :
            null;

        context["field"] = "isOverdraft";
        context["metadata"] = (objectMetadata ? objectMetadata["isOverdraft"] : null);
        privateState.isOverdraft = defaultValues ?
            (defaultValues["isOverdraft"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isOverdraft"], context) :
                null) :
            null;

        context["field"] = "title";
        context["metadata"] = (objectMetadata ? objectMetadata["title"] : null);
        privateState.title = defaultValues ?
            (defaultValues["title"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["title"], context) :
                null) :
            null;

        context["field"] = "generatedBy";
        context["metadata"] = (objectMetadata ? objectMetadata["generatedBy"] : null);
        privateState.generatedBy = defaultValues ?
            (defaultValues["generatedBy"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["generatedBy"], context) :
                null) :
            null;

        context["field"] = "filters";
        context["metadata"] = (objectMetadata ? objectMetadata["filters"] : null);
        privateState.filters = defaultValues ?
            (defaultValues["filters"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["filters"], context) :
                null) :
            null;

        context["field"] = "statementReference";
        context["metadata"] = (objectMetadata ? objectMetadata["statementReference"] : null);
        privateState.statementReference = defaultValues ?
            (defaultValues["statementReference"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["statementReference"], context) :
                null) :
            null;

        context["field"] = "transCreditDebitIndicator";
        context["metadata"] = (objectMetadata ? objectMetadata["transCreditDebitIndicator"] : null);
        privateState.transCreditDebitIndicator = defaultValues ?
            (defaultValues["transCreditDebitIndicator"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["transCreditDebitIndicator"], context) :
                null) :
            null;

        context["field"] = "bookingDateTime";
        context["metadata"] = (objectMetadata ? objectMetadata["bookingDateTime"] : null);
        privateState.bookingDateTime = defaultValues ?
            (defaultValues["bookingDateTime"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["bookingDateTime"], context) :
                null) :
            null;

        context["field"] = "valueDateTime";
        context["metadata"] = (objectMetadata ? objectMetadata["valueDateTime"] : null);
        privateState.valueDateTime = defaultValues ?
            (defaultValues["valueDateTime"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["valueDateTime"], context) :
                null) :
            null;

        context["field"] = "transactionInformation";
        context["metadata"] = (objectMetadata ? objectMetadata["transactionInformation"] : null);
        privateState.transactionInformation = defaultValues ?
            (defaultValues["transactionInformation"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["transactionInformation"], context) :
                null) :
            null;

        context["field"] = "addressLine";
        context["metadata"] = (objectMetadata ? objectMetadata["addressLine"] : null);
        privateState.addressLine = defaultValues ?
            (defaultValues["addressLine"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["addressLine"], context) :
                null) :
            null;

        context["field"] = "transactionAmount";
        context["metadata"] = (objectMetadata ? objectMetadata["transactionAmount"] : null);
        privateState.transactionAmount = defaultValues ?
            (defaultValues["transactionAmount"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["transactionAmount"], context) :
                null) :
            null;

        context["field"] = "transactionCurrency";
        context["metadata"] = (objectMetadata ? objectMetadata["transactionCurrency"] : null);
        privateState.transactionCurrency = defaultValues ?
            (defaultValues["transactionCurrency"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["transactionCurrency"], context) :
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

        context["field"] = "sourceCurrency";
        context["metadata"] = (objectMetadata ? objectMetadata["sourceCurrency"] : null);
        privateState.sourceCurrency = defaultValues ?
            (defaultValues["sourceCurrency"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["sourceCurrency"], context) :
                null) :
            null;

        context["field"] = "targetCurrency";
        context["metadata"] = (objectMetadata ? objectMetadata["targetCurrency"] : null);
        privateState.targetCurrency = defaultValues ?
            (defaultValues["targetCurrency"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["targetCurrency"], context) :
                null) :
            null;

        context["field"] = "unitCurrency";
        context["metadata"] = (objectMetadata ? objectMetadata["unitCurrency"] : null);
        privateState.unitCurrency = defaultValues ?
            (defaultValues["unitCurrency"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["unitCurrency"], context) :
                null) :
            null;

        context["field"] = "exchangeRate";
        context["metadata"] = (objectMetadata ? objectMetadata["exchangeRate"] : null);
        privateState.exchangeRate = defaultValues ?
            (defaultValues["exchangeRate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["exchangeRate"], context) :
                null) :
            null;

        context["field"] = "contractIdentification";
        context["metadata"] = (objectMetadata ? objectMetadata["contractIdentification"] : null);
        privateState.contractIdentification = defaultValues ?
            (defaultValues["contractIdentification"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["contractIdentification"], context) :
                null) :
            null;

        context["field"] = "quotationDate";
        context["metadata"] = (objectMetadata ? objectMetadata["quotationDate"] : null);
        privateState.quotationDate = defaultValues ?
            (defaultValues["quotationDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["quotationDate"], context) :
                null) :
            null;

        context["field"] = "instructedAmount";
        context["metadata"] = (objectMetadata ? objectMetadata["instructedAmount"] : null);
        privateState.instructedAmount = defaultValues ?
            (defaultValues["instructedAmount"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["instructedAmount"], context) :
                null) :
            null;

        context["field"] = "transactionCode";
        context["metadata"] = (objectMetadata ? objectMetadata["transactionCode"] : null);
        privateState.transactionCode = defaultValues ?
            (defaultValues["transactionCode"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["transactionCode"], context) :
                null) :
            null;

        context["field"] = "transactionSubCode";
        context["metadata"] = (objectMetadata ? objectMetadata["transactionSubCode"] : null);
        privateState.transactionSubCode = defaultValues ?
            (defaultValues["transactionSubCode"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["transactionSubCode"], context) :
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

        context["field"] = "balanceCreditDebitIndicator";
        context["metadata"] = (objectMetadata ? objectMetadata["balanceCreditDebitIndicator"] : null);
        privateState.balanceCreditDebitIndicator = defaultValues ?
            (defaultValues["balanceCreditDebitIndicator"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["balanceCreditDebitIndicator"], context) :
                null) :
            null;

        context["field"] = "balanceType";
        context["metadata"] = (objectMetadata ? objectMetadata["balanceType"] : null);
        privateState.balanceType = defaultValues ?
            (defaultValues["balanceType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["balanceType"], context) :
                null) :
            null;

        context["field"] = "balanceAmount";
        context["metadata"] = (objectMetadata ? objectMetadata["balanceAmount"] : null);
        privateState.balanceAmount = defaultValues ?
            (defaultValues["balanceAmount"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["balanceAmount"], context) :
                null) :
            null;

        context["field"] = "balanceCurrency";
        context["metadata"] = (objectMetadata ? objectMetadata["balanceCurrency"] : null);
        privateState.balanceCurrency = defaultValues ?
            (defaultValues["balanceCurrency"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["balanceCurrency"], context) :
                null) :
            null;

        context["field"] = "merchantName";
        context["metadata"] = (objectMetadata ? objectMetadata["merchantName"] : null);
        privateState.merchantName = defaultValues ?
            (defaultValues["merchantName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["merchantName"], context) :
                null) :
            null;

        context["field"] = "merchantCategoryCode";
        context["metadata"] = (objectMetadata ? objectMetadata["merchantCategoryCode"] : null);
        privateState.merchantCategoryCode = defaultValues ?
            (defaultValues["merchantCategoryCode"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["merchantCategoryCode"], context) :
                null) :
            null;

        context["field"] = "creditorAgentSchemeName";
        context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentSchemeName"] : null);
        privateState.creditorAgentSchemeName = defaultValues ?
            (defaultValues["creditorAgentSchemeName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["creditorAgentSchemeName"], context) :
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

        context["field"] = "creditorAgentaddressType";
        context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentaddressType"] : null);
        privateState.creditorAgentaddressType = defaultValues ?
            (defaultValues["creditorAgentaddressType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["creditorAgentaddressType"], context) :
                null) :
            null;

        context["field"] = "creditorAgentDepartment";
        context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentDepartment"] : null);
        privateState.creditorAgentDepartment = defaultValues ?
            (defaultValues["creditorAgentDepartment"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["creditorAgentDepartment"], context) :
                null) :
            null;

        context["field"] = "creditorAgentSubDepartment";
        context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentSubDepartment"] : null);
        privateState.creditorAgentSubDepartment = defaultValues ?
            (defaultValues["creditorAgentSubDepartment"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["creditorAgentSubDepartment"], context) :
                null) :
            null;

        context["field"] = "creditorAgentStreetName";
        context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentStreetName"] : null);
        privateState.creditorAgentStreetName = defaultValues ?
            (defaultValues["creditorAgentStreetName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["creditorAgentStreetName"], context) :
                null) :
            null;

        context["field"] = "creditorAgentBuildingNumber";
        context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentBuildingNumber"] : null);
        privateState.creditorAgentBuildingNumber = defaultValues ?
            (defaultValues["creditorAgentBuildingNumber"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["creditorAgentBuildingNumber"], context) :
                null) :
            null;

        context["field"] = "creditorAgentPostCode";
        context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentPostCode"] : null);
        privateState.creditorAgentPostCode = defaultValues ?
            (defaultValues["creditorAgentPostCode"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["creditorAgentPostCode"], context) :
                null) :
            null;

        context["field"] = "creditorAgentTownName";
        context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentTownName"] : null);
        privateState.creditorAgentTownName = defaultValues ?
            (defaultValues["creditorAgentTownName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["creditorAgentTownName"], context) :
                null) :
            null;

        context["field"] = "creditorAgentCountrySubDivision";
        context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentCountrySubDivision"] : null);
        privateState.creditorAgentCountrySubDivision = defaultValues ?
            (defaultValues["creditorAgentCountrySubDivision"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["creditorAgentCountrySubDivision"], context) :
                null) :
            null;

        context["field"] = "creditorAgentCountry";
        context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentCountry"] : null);
        privateState.creditorAgentCountry = defaultValues ?
            (defaultValues["creditorAgentCountry"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["creditorAgentCountry"], context) :
                null) :
            null;

        context["field"] = "creditorAgentAddressLine";
        context["metadata"] = (objectMetadata ? objectMetadata["creditorAgentAddressLine"] : null);
        privateState.creditorAgentAddressLine = defaultValues ?
            (defaultValues["creditorAgentAddressLine"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["creditorAgentAddressLine"], context) :
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

        context["field"] = "debtorAgentSchemeName";
        context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentSchemeName"] : null);
        privateState.debtorAgentSchemeName = defaultValues ?
            (defaultValues["debtorAgentSchemeName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["debtorAgentSchemeName"], context) :
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

        context["field"] = "debtorAgentAddressType";
        context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentAddressType"] : null);
        privateState.debtorAgentAddressType = defaultValues ?
            (defaultValues["debtorAgentAddressType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["debtorAgentAddressType"], context) :
                null) :
            null;

        context["field"] = "debtorAgentDepartment";
        context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentDepartment"] : null);
        privateState.debtorAgentDepartment = defaultValues ?
            (defaultValues["debtorAgentDepartment"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["debtorAgentDepartment"], context) :
                null) :
            null;

        context["field"] = "debtorAgentSubDepartment";
        context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentSubDepartment"] : null);
        privateState.debtorAgentSubDepartment = defaultValues ?
            (defaultValues["debtorAgentSubDepartment"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["debtorAgentSubDepartment"], context) :
                null) :
            null;

        context["field"] = "debtorAgentStreetName";
        context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentStreetName"] : null);
        privateState.debtorAgentStreetName = defaultValues ?
            (defaultValues["debtorAgentStreetName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["debtorAgentStreetName"], context) :
                null) :
            null;

        context["field"] = "debtorAgentBuildingNumber";
        context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentBuildingNumber"] : null);
        privateState.debtorAgentBuildingNumber = defaultValues ?
            (defaultValues["debtorAgentBuildingNumber"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["debtorAgentBuildingNumber"], context) :
                null) :
            null;

        context["field"] = "dedtorAgentPostCode";
        context["metadata"] = (objectMetadata ? objectMetadata["dedtorAgentPostCode"] : null);
        privateState.dedtorAgentPostCode = defaultValues ?
            (defaultValues["dedtorAgentPostCode"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["dedtorAgentPostCode"], context) :
                null) :
            null;

        context["field"] = "debtorAgentTownName";
        context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentTownName"] : null);
        privateState.debtorAgentTownName = defaultValues ?
            (defaultValues["debtorAgentTownName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["debtorAgentTownName"], context) :
                null) :
            null;

        context["field"] = "debtorAgentCountrySubDivision";
        context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentCountrySubDivision"] : null);
        privateState.debtorAgentCountrySubDivision = defaultValues ?
            (defaultValues["debtorAgentCountrySubDivision"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["debtorAgentCountrySubDivision"], context) :
                null) :
            null;

        context["field"] = "debtorAgentCountry";
        context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentCountry"] : null);
        privateState.debtorAgentCountry = defaultValues ?
            (defaultValues["debtorAgentCountry"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["debtorAgentCountry"], context) :
                null) :
            null;

        context["field"] = "debtorAgentAddressLine";
        context["metadata"] = (objectMetadata ? objectMetadata["debtorAgentAddressLine"] : null);
        privateState.debtorAgentAddressLine = defaultValues ?
            (defaultValues["debtorAgentAddressLine"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["debtorAgentAddressLine"], context) :
                null) :
            null;

        context["field"] = "debtorAccountSchemeName";
        context["metadata"] = (objectMetadata ? objectMetadata["debtorAccountSchemeName"] : null);
        privateState.debtorAccountSchemeName = defaultValues ?
            (defaultValues["debtorAccountSchemeName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["debtorAccountSchemeName"], context) :
                null) :
            null;

        context["field"] = "debtorAccountName";
        context["metadata"] = (objectMetadata ? objectMetadata["debtorAccountName"] : null);
        privateState.debtorAccountName = defaultValues ?
            (defaultValues["debtorAccountName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["debtorAccountName"], context) :
                null) :
            null;

        context["field"] = "debtorAccountSeconIdentification";
        context["metadata"] = (objectMetadata ? objectMetadata["debtorAccountSeconIdentification"] : null);
        privateState.debtorAccountSeconIdentification = defaultValues ?
            (defaultValues["debtorAccountSeconIdentification"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["debtorAccountSeconIdentification"], context) :
                null) :
            null;

        context["field"] = "cardInstrumentSchemeName";
        context["metadata"] = (objectMetadata ? objectMetadata["cardInstrumentSchemeName"] : null);
        privateState.cardInstrumentSchemeName = defaultValues ?
            (defaultValues["cardInstrumentSchemeName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["cardInstrumentSchemeName"], context) :
                null) :
            null;

        context["field"] = "cardInstrumentAuthorisationType";
        context["metadata"] = (objectMetadata ? objectMetadata["cardInstrumentAuthorisationType"] : null);
        privateState.cardInstrumentAuthorisationType = defaultValues ?
            (defaultValues["cardInstrumentAuthorisationType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["cardInstrumentAuthorisationType"], context) :
                null) :
            null;

        context["field"] = "cardInstrumentName";
        context["metadata"] = (objectMetadata ? objectMetadata["cardInstrumentName"] : null);
        privateState.cardInstrumentName = defaultValues ?
            (defaultValues["cardInstrumentName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["cardInstrumentName"], context) :
                null) :
            null;

        context["field"] = "cardInstrumentIdentification";
        context["metadata"] = (objectMetadata ? objectMetadata["cardInstrumentIdentification"] : null);
        privateState.cardInstrumentIdentification = defaultValues ?
            (defaultValues["cardInstrumentIdentification"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["cardInstrumentIdentification"], context) :
                null) :
            null;

        context["field"] = "sortCode";
        context["metadata"] = (objectMetadata ? objectMetadata["sortCode"] : null);
        privateState.sortCode = defaultValues ?
            (defaultValues["sortCode"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["sortCode"], context) :
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

        context["field"] = "convertedAmount";
        context["metadata"] = (objectMetadata ? objectMetadata["convertedAmount"] : null);
        privateState.convertedAmount = defaultValues ?
            (defaultValues["convertedAmount"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["convertedAmount"], context) :
                null) :
            null;

        context["field"] = "baseCurrency";
        context["metadata"] = (objectMetadata ? objectMetadata["baseCurrency"] : null);
        privateState.baseCurrency = defaultValues ?
            (defaultValues["baseCurrency"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["baseCurrency"], context) :
                null) :
            null;

        context["field"] = "FirstPaymentDateTime";
        context["metadata"] = (objectMetadata ? objectMetadata["FirstPaymentDateTime"] : null);
        privateState.FirstPaymentDateTime = defaultValues ?
            (defaultValues["FirstPaymentDateTime"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["FirstPaymentDateTime"], context) :
                null) :
            null;

        context["field"] = "NextPaymentDateTime";
        context["metadata"] = (objectMetadata ? objectMetadata["NextPaymentDateTime"] : null);
        privateState.NextPaymentDateTime = defaultValues ?
            (defaultValues["NextPaymentDateTime"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["NextPaymentDateTime"], context) :
                null) :
            null;

        context["field"] = "FinalPaymentDateTime";
        context["metadata"] = (objectMetadata ? objectMetadata["FinalPaymentDateTime"] : null);
        privateState.FinalPaymentDateTime = defaultValues ?
            (defaultValues["FinalPaymentDateTime"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["FinalPaymentDateTime"], context) :
                null) :
            null;

        context["field"] = "StandingOrderStatusCode";
        context["metadata"] = (objectMetadata ? objectMetadata["StandingOrderStatusCode"] : null);
        privateState.StandingOrderStatusCode = defaultValues ?
            (defaultValues["StandingOrderStatusCode"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["StandingOrderStatusCode"], context) :
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

        context["field"] = "beneficiaryName";
        context["metadata"] = (objectMetadata ? objectMetadata["beneficiaryName"] : null);
        privateState.beneficiaryName = defaultValues ?
            (defaultValues["beneficiaryName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["beneficiaryName"], context) :
                null) :
            null;

        context["field"] = "isInternationalAccount";
        context["metadata"] = (objectMetadata ? objectMetadata["isInternationalAccount"] : null);
        privateState.isInternationalAccount = defaultValues ?
            (defaultValues["isInternationalAccount"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isInternationalAccount"], context) :
                null) :
            null;

        context["field"] = "ConsentId";
        context["metadata"] = (objectMetadata ? objectMetadata["ConsentId"] : null);
        privateState.ConsentId = defaultValues ?
            (defaultValues["ConsentId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ConsentId"], context) :
                null) :
            null;

        context["field"] = "Initiation_InstructionIdentification";
        context["metadata"] = (objectMetadata ? objectMetadata["Initiation_InstructionIdentification"] : null);
        privateState.Initiation_InstructionIdentification = defaultValues ?
            (defaultValues["Initiation_InstructionIdentification"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Initiation_InstructionIdentification"], context) :
                null) :
            null;

        context["field"] = "RI_Unstructured";
        context["metadata"] = (objectMetadata ? objectMetadata["RI_Unstructured"] : null);
        privateState.RI_Unstructured = defaultValues ?
            (defaultValues["RI_Unstructured"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["RI_Unstructured"], context) :
                null) :
            null;

        context["field"] = "RI_Reference";
        context["metadata"] = (objectMetadata ? objectMetadata["RI_Reference"] : null);
        privateState.RI_Reference = defaultValues ?
            (defaultValues["RI_Reference"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["RI_Reference"], context) :
                null) :
            null;

        context["field"] = "Initiation_EndToEndIdentification";
        context["metadata"] = (objectMetadata ? objectMetadata["Initiation_EndToEndIdentification"] : null);
        privateState.Initiation_EndToEndIdentification = defaultValues ?
            (defaultValues["Initiation_EndToEndIdentification"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Initiation_EndToEndIdentification"], context) :
                null) :
            null;

        context["field"] = "RiskPaymentContextCode";
        context["metadata"] = (objectMetadata ? objectMetadata["RiskPaymentContextCode"] : null);
        privateState.RiskPaymentContextCode = defaultValues ?
            (defaultValues["RiskPaymentContextCode"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["RiskPaymentContextCode"], context) :
                null) :
            null;

        context["field"] = "linkSelf";
        context["metadata"] = (objectMetadata ? objectMetadata["linkSelf"] : null);
        privateState.linkSelf = defaultValues ?
            (defaultValues["linkSelf"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["linkSelf"], context) :
                null) :
            null;

        context["field"] = "StatusUpdateDateTime";
        context["metadata"] = (objectMetadata ? objectMetadata["StatusUpdateDateTime"] : null);
        privateState.StatusUpdateDateTime = defaultValues ?
            (defaultValues["StatusUpdateDateTime"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["StatusUpdateDateTime"], context) :
                null) :
            null;

        context["field"] = "createdDate";
        context["metadata"] = (objectMetadata ? objectMetadata["createdDate"] : null);
        privateState.createdDate = defaultValues ?
            (defaultValues["createdDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["createdDate"], context) :
                null) :
            null;

        context["field"] = "DomesticPaymentId";
        context["metadata"] = (objectMetadata ? objectMetadata["DomesticPaymentId"] : null);
        privateState.DomesticPaymentId = defaultValues ?
            (defaultValues["DomesticPaymentId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["DomesticPaymentId"], context) :
                null) :
            null;

        context["field"] = "dataStatus";
        context["metadata"] = (objectMetadata ? objectMetadata["dataStatus"] : null);
        privateState.dataStatus = defaultValues ?
            (defaultValues["dataStatus"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["dataStatus"], context) :
                null) :
            null;

        context["field"] = "Auth_Token";
        context["metadata"] = (objectMetadata ? objectMetadata["Auth_Token"] : null);
        privateState.Auth_Token = defaultValues ?
            (defaultValues["Auth_Token"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Auth_Token"], context) :
                null) :
            null;

        context["field"] = "fileType";
        context["metadata"] = (objectMetadata ? objectMetadata["fileType"] : null);
        privateState.fileType = defaultValues ?
            (defaultValues["fileType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["fileType"], context) :
                null) :
            null;

        context["field"] = "MFAAttributes";
        context["metadata"] = (objectMetadata ? objectMetadata["MFAAttributes"] : null);
        privateState.MFAAttributes = defaultValues ?
            (defaultValues["MFAAttributes"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["MFAAttributes"], context) :
                null) :
            null;

        context["field"] = "securityKey";
        context["metadata"] = (objectMetadata ? objectMetadata["securityKey"] : null);
        privateState.securityKey = defaultValues ?
            (defaultValues["securityKey"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["securityKey"], context) :
                null) :
            null;

        context["field"] = "sacMaxResendRequestsAllowed";
        context["metadata"] = (objectMetadata ? objectMetadata["sacMaxResendRequestsAllowed"] : null);
        privateState.sacMaxResendRequestsAllowed = defaultValues ?
            (defaultValues["sacMaxResendRequestsAllowed"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["sacMaxResendRequestsAllowed"], context) :
                null) :
            null;

        context["field"] = "remainingResendAttempts";
        context["metadata"] = (objectMetadata ? objectMetadata["remainingResendAttempts"] : null);
        privateState.remainingResendAttempts = defaultValues ?
            (defaultValues["remainingResendAttempts"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["remainingResendAttempts"], context) :
                null) :
            null;

        context["field"] = "sacCodeLength";
        context["metadata"] = (objectMetadata ? objectMetadata["sacCodeLength"] : null);
        privateState.sacCodeLength = defaultValues ?
            (defaultValues["sacCodeLength"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["sacCodeLength"], context) :
                null) :
            null;

        context["field"] = "communicationType";
        context["metadata"] = (objectMetadata ? objectMetadata["communicationType"] : null);
        privateState.communicationType = defaultValues ?
            (defaultValues["communicationType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["communicationType"], context) :
                null) :
            null;

        context["field"] = "sacPreferenceCriteria";
        context["metadata"] = (objectMetadata ? objectMetadata["sacPreferenceCriteria"] : null);
        privateState.sacPreferenceCriteria = defaultValues ?
            (defaultValues["sacPreferenceCriteria"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["sacPreferenceCriteria"], context) :
                null) :
            null;

        context["field"] = "customerCommunication";
        context["metadata"] = (objectMetadata ? objectMetadata["customerCommunication"] : null);
        privateState.customerCommunication = defaultValues ?
            (defaultValues["customerCommunication"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["customerCommunication"], context) :
                null) :
            null;

        context["field"] = "phone";
        context["metadata"] = (objectMetadata ? objectMetadata["phone"] : null);
        privateState.phone = defaultValues ?
            (defaultValues["phone"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["phone"], context) :
                null) :
            null;

        context["field"] = "masked";
        context["metadata"] = (objectMetadata ? objectMetadata["masked"] : null);
        privateState.masked = defaultValues ?
            (defaultValues["masked"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["masked"], context) :
                null) :
            null;

        context["field"] = "unmasked";
        context["metadata"] = (objectMetadata ? objectMetadata["unmasked"] : null);
        privateState.unmasked = defaultValues ?
            (defaultValues["unmasked"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["unmasked"], context) :
                null) :
            null;

        context["field"] = "email";
        context["metadata"] = (objectMetadata ? objectMetadata["email"] : null);
        privateState.email = defaultValues ?
            (defaultValues["email"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["email"], context) :
                null) :
            null;

        context["field"] = "MFAType";
        context["metadata"] = (objectMetadata ? objectMetadata["MFAType"] : null);
        privateState.MFAType = defaultValues ?
            (defaultValues["MFAType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["MFAType"], context) :
                null) :
            null;

        context["field"] = "isMFARequired";
        context["metadata"] = (objectMetadata ? objectMetadata["isMFARequired"] : null);
        privateState.isMFARequired = defaultValues ?
            (defaultValues["isMFARequired"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isMFARequired"], context) :
                null) :
            null;

        context["field"] = "serviceKey";
        context["metadata"] = (objectMetadata ? objectMetadata["serviceKey"] : null);
        privateState.serviceKey = defaultValues ?
            (defaultValues["serviceKey"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["serviceKey"], context) :
                null) :
            null;

        context["field"] = "securityQuestions";
        context["metadata"] = (objectMetadata ? objectMetadata["securityQuestions"] : null);
        privateState.securityQuestions = defaultValues ?
            (defaultValues["securityQuestions"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["securityQuestions"], context) :
                null) :
            null;

        context["field"] = "SecurityQuestion_id";
        context["metadata"] = (objectMetadata ? objectMetadata["SecurityQuestion_id"] : null);
        privateState.SecurityQuestion_id = defaultValues ?
            (defaultValues["SecurityQuestion_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["SecurityQuestion_id"], context) :
                null) :
            null;

        context["field"] = "Question";
        context["metadata"] = (objectMetadata ? objectMetadata["Question"] : null);
        privateState.Question = defaultValues ?
            (defaultValues["Question"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Question"], context) :
                null) :
            null;

        context["field"] = "QuestionStatus_id";
        context["metadata"] = (objectMetadata ? objectMetadata["QuestionStatus_id"] : null);
        privateState.QuestionStatus_id = defaultValues ?
            (defaultValues["QuestionStatus_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["QuestionStatus_id"], context) :
                null) :
            null;

        context["field"] = "serviceName";
        context["metadata"] = (objectMetadata ? objectMetadata["serviceName"] : null);
        privateState.serviceName = defaultValues ?
            (defaultValues["serviceName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["serviceName"], context) :
                null) :
            null;

        context["field"] = "customerAnswer";
        context["metadata"] = (objectMetadata ? objectMetadata["customerAnswer"] : null);
        privateState.customerAnswer = defaultValues ?
            (defaultValues["customerAnswer"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["customerAnswer"], context) :
                null) :
            null;

        context["field"] = "questionId";
        context["metadata"] = (objectMetadata ? objectMetadata["questionId"] : null);
        privateState.questionId = defaultValues ?
            (defaultValues["questionId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["questionId"], context) :
                null) :
            null;

        context["field"] = "maxFailedAttemptsAllowed";
        context["metadata"] = (objectMetadata ? objectMetadata["maxFailedAttemptsAllowed"] : null);
        privateState.maxFailedAttemptsAllowed = defaultValues ?
            (defaultValues["maxFailedAttemptsAllowed"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["maxFailedAttemptsAllowed"], context) :
                null) :
            null;

        context["field"] = "remainingFailedAttempts";
        context["metadata"] = (objectMetadata ? objectMetadata["remainingFailedAttempts"] : null);
        privateState.remainingFailedAttempts = defaultValues ?
            (defaultValues["remainingFailedAttempts"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["remainingFailedAttempts"], context) :
                null) :
            null;

        context["field"] = "failedAttempts";
        context["metadata"] = (objectMetadata ? objectMetadata["failedAttempts"] : null);
        privateState.failedAttempts = defaultValues ?
            (defaultValues["failedAttempts"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["failedAttempts"], context) :
                null) :
            null;

        context["field"] = "isOTPExpired";
        context["metadata"] = (objectMetadata ? objectMetadata["isOTPExpired"] : null);
        privateState.isOTPExpired = defaultValues ?
            (defaultValues["isOTPExpired"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isOTPExpired"], context) :
                null) :
            null;

        context["field"] = "featureActionId";
        context["metadata"] = (objectMetadata ? objectMetadata["featureActionId"] : null);
        privateState.featureActionId = defaultValues ?
            (defaultValues["featureActionId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["featureActionId"], context) :
                null) :
            null;

        context["field"] = "receivedApprovals";
        context["metadata"] = (objectMetadata ? objectMetadata["receivedApprovals"] : null);
        privateState.receivedApprovals = defaultValues ?
            (defaultValues["receivedApprovals"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["receivedApprovals"], context) :
                null) :
            null;

        context["field"] = "requiredApprovals";
        context["metadata"] = (objectMetadata ? objectMetadata["requiredApprovals"] : null);
        privateState.requiredApprovals = defaultValues ?
            (defaultValues["requiredApprovals"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["requiredApprovals"], context) :
                null) :
            null;

        context["field"] = "Request_id";
        context["metadata"] = (objectMetadata ? objectMetadata["Request_id"] : null);
        privateState.Request_id = defaultValues ?
            (defaultValues["Request_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Request_id"], context) :
                null) :
            null;

        context["field"] = "featureName";
        context["metadata"] = (objectMetadata ? objectMetadata["featureName"] : null);
        privateState.featureName = defaultValues ?
            (defaultValues["featureName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["featureName"], context) :
                null) :
            null;

        context["field"] = "AccountName";
        context["metadata"] = (objectMetadata ? objectMetadata["AccountName"] : null);
        privateState.AccountName = defaultValues ?
            (defaultValues["AccountName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AccountName"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "Transaction_id": {
                get: function() {
                    context["field"] = "Transaction_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["Transaction_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Transaction_id, context);
                },
                set: function(val) {
                    setterFunctions['Transaction_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "TransactionDate": {
                get: function() {
                    context["field"] = "TransactionDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["TransactionDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.TransactionDate, context);
                },
                set: function(val) {
                    setterFunctions['TransactionDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "CreatedBy": {
                get: function() {
                    context["field"] = "CreatedBy";
                    context["metadata"] = (objectMetadata ? objectMetadata["CreatedBy"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.CreatedBy, context);
                },
                set: function(val) {
                    setterFunctions['CreatedBy'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Payee": {
                get: function() {
                    context["field"] = "Payee";
                    context["metadata"] = (objectMetadata ? objectMetadata["Payee"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Payee, context);
                },
                set: function(val) {
                    setterFunctions['Payee'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "StatusValue": {
                get: function() {
                    context["field"] = "StatusValue";
                    context["metadata"] = (objectMetadata ? objectMetadata["StatusValue"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.StatusValue, context);
                },
                set: function(val) {
                    setterFunctions['StatusValue'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Reccurence": {
                get: function() {
                    context["field"] = "Reccurence";
                    context["metadata"] = (objectMetadata ? objectMetadata["Reccurence"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Reccurence, context);
                },
                set: function(val) {
                    setterFunctions['Reccurence'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Frequency": {
                get: function() {
                    context["field"] = "Frequency";
                    context["metadata"] = (objectMetadata ? objectMetadata["Frequency"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Frequency, context);
                },
                set: function(val) {
                    setterFunctions['Frequency'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Company_id": {
                get: function() {
                    context["field"] = "Company_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["Company_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Company_id, context);
                },
                set: function(val) {
                    setterFunctions['Company_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "TransactionType_id": {
                get: function() {
                    context["field"] = "TransactionType_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["TransactionType_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.TransactionType_id, context);
                },
                set: function(val) {
                    setterFunctions['TransactionType_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "CreatedOn": {
                get: function() {
                    context["field"] = "CreatedOn";
                    context["metadata"] = (objectMetadata ? objectMetadata["CreatedOn"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.CreatedOn, context);
                },
                set: function(val) {
                    setterFunctions['CreatedOn'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Amount": {
                get: function() {
                    context["field"] = "Amount";
                    context["metadata"] = (objectMetadata ? objectMetadata["Amount"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Amount, context);
                },
                set: function(val) {
                    setterFunctions['Amount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "companyName": {
                get: function() {
                    context["field"] = "companyName";
                    context["metadata"] = (objectMetadata ? objectMetadata["companyName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.companyName, context);
                },
                set: function(val) {
                    setterFunctions['companyName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "DebitOrCreditAccount": {
                get: function() {
                    context["field"] = "DebitOrCreditAccount";
                    context["metadata"] = (objectMetadata ? objectMetadata["DebitOrCreditAccount"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.DebitOrCreditAccount, context);
                },
                set: function(val) {
                    setterFunctions['DebitOrCreditAccount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "TransactionType": {
                get: function() {
                    context["field"] = "TransactionType";
                    context["metadata"] = (objectMetadata ? objectMetadata["TransactionType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.TransactionType, context);
                },
                set: function(val) {
                    setterFunctions['TransactionType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Status": {
                get: function() {
                    context["field"] = "Status";
                    context["metadata"] = (objectMetadata ? objectMetadata["Status"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Status, context);
                },
                set: function(val) {
                    setterFunctions['Status'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "EffectiveDate": {
                get: function() {
                    context["field"] = "EffectiveDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["EffectiveDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.EffectiveDate, context);
                },
                set: function(val) {
                    setterFunctions['EffectiveDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "BBGeneralTransactionType_id": {
                get: function() {
                    context["field"] = "BBGeneralTransactionType_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["BBGeneralTransactionType_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.BBGeneralTransactionType_id, context);
                },
                set: function(val) {
                    setterFunctions['BBGeneralTransactionType_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "TransactionEntry": {
                get: function() {
                    context["field"] = "TransactionEntry";
                    context["metadata"] = (objectMetadata ? objectMetadata["TransactionEntry"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.TransactionEntry, context);
                },
                set: function(val) {
                    setterFunctions['TransactionEntry'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Approver": {
                get: function() {
                    context["field"] = "Approver";
                    context["metadata"] = (objectMetadata ? objectMetadata["Approver"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Approver, context);
                },
                set: function(val) {
                    setterFunctions['Approver'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "userName": {
                get: function() {
                    context["field"] = "userName";
                    context["metadata"] = (objectMetadata ? objectMetadata["userName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.userName, context);
                },
                set: function(val) {
                    setterFunctions['userName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "dbpErrCode": {
                get: function() {
                    context["field"] = "dbpErrCode";
                    context["metadata"] = (objectMetadata ? objectMetadata["dbpErrCode"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.dbpErrCode, context);
                },
                set: function(val) {
                    setterFunctions['dbpErrCode'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "dbpErrMsg": {
                get: function() {
                    context["field"] = "dbpErrMsg";
                    context["metadata"] = (objectMetadata ? objectMetadata["dbpErrMsg"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.dbpErrMsg, context);
                },
                set: function(val) {
                    setterFunctions['dbpErrMsg'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "opstatus": {
                get: function() {
                    context["field"] = "opstatus";
                    context["metadata"] = (objectMetadata ? objectMetadata["opstatus"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.opstatus, context);
                },
                set: function(val) {
                    setterFunctions['opstatus'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "httpStatusCode": {
                get: function() {
                    context["field"] = "httpStatusCode";
                    context["metadata"] = (objectMetadata ? objectMetadata["httpStatusCode"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.httpStatusCode, context);
                },
                set: function(val) {
                    setterFunctions['httpStatusCode'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "accountID": {
                get: function() {
                    context["field"] = "accountID";
                    context["metadata"] = (objectMetadata ? objectMetadata["accountID"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.accountID, context);
                },
                set: function(val) {
                    setterFunctions['accountID'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "accountNumber": {
                get: function() {
                    context["field"] = "accountNumber";
                    context["metadata"] = (objectMetadata ? objectMetadata["accountNumber"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.accountNumber, context);
                },
                set: function(val) {
                    setterFunctions['accountNumber'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "amountTransferedTillNow": {
                get: function() {
                    context["field"] = "amountTransferedTillNow";
                    context["metadata"] = (objectMetadata ? objectMetadata["amountTransferedTillNow"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.amountTransferedTillNow, context);
                },
                set: function(val) {
                    setterFunctions['amountTransferedTillNow'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "authenticationRequired": {
                get: function() {
                    context["field"] = "authenticationRequired";
                    context["metadata"] = (objectMetadata ? objectMetadata["authenticationRequired"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.authenticationRequired, context);
                },
                set: function(val) {
                    setterFunctions['authenticationRequired'].call(this, val, privateState);
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
            "billCategoryId": {
                get: function() {
                    context["field"] = "billCategoryId";
                    context["metadata"] = (objectMetadata ? objectMetadata["billCategoryId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.billCategoryId, context);
                },
                set: function(val) {
                    setterFunctions['billCategoryId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "billDueAmount": {
                get: function() {
                    context["field"] = "billDueAmount";
                    context["metadata"] = (objectMetadata ? objectMetadata["billDueAmount"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.billDueAmount, context);
                },
                set: function(val) {
                    setterFunctions['billDueAmount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "billDueDate": {
                get: function() {
                    context["field"] = "billDueDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["billDueDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.billDueDate, context);
                },
                set: function(val) {
                    setterFunctions['billDueDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "billerCategoryName": {
                get: function() {
                    context["field"] = "billerCategoryName";
                    context["metadata"] = (objectMetadata ? objectMetadata["billerCategoryName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.billerCategoryName, context);
                },
                set: function(val) {
                    setterFunctions['billerCategoryName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "billGeneratedDate": {
                get: function() {
                    context["field"] = "billGeneratedDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["billGeneratedDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.billGeneratedDate, context);
                },
                set: function(val) {
                    setterFunctions['billGeneratedDate'].call(this, val, privateState);
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
            "billPaidAmount": {
                get: function() {
                    context["field"] = "billPaidAmount";
                    context["metadata"] = (objectMetadata ? objectMetadata["billPaidAmount"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.billPaidAmount, context);
                },
                set: function(val) {
                    setterFunctions['billPaidAmount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "billPaidDate": {
                get: function() {
                    context["field"] = "billPaidDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["billPaidDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.billPaidDate, context);
                },
                set: function(val) {
                    setterFunctions['billPaidDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "bulkPayString": {
                get: function() {
                    context["field"] = "bulkPayString";
                    context["metadata"] = (objectMetadata ? objectMetadata["bulkPayString"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.bulkPayString, context);
                },
                set: function(val) {
                    setterFunctions['bulkPayString'].call(this, val, privateState);
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
            "eBillEnable": {
                get: function() {
                    context["field"] = "eBillEnable";
                    context["metadata"] = (objectMetadata ? objectMetadata["eBillEnable"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.eBillEnable, context);
                },
                set: function(val) {
                    setterFunctions['eBillEnable'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "eBillSupport": {
                get: function() {
                    context["field"] = "eBillSupport";
                    context["metadata"] = (objectMetadata ? objectMetadata["eBillSupport"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.eBillSupport, context);
                },
                set: function(val) {
                    setterFunctions['eBillSupport'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "ebillURL": {
                get: function() {
                    context["field"] = "ebillURL";
                    context["metadata"] = (objectMetadata ? objectMetadata["ebillURL"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ebillURL, context);
                },
                set: function(val) {
                    setterFunctions['ebillURL'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "errmsg": {
                get: function() {
                    context["field"] = "errmsg";
                    context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.errmsg, context);
                },
                set: function(val) {
                    setterFunctions['errmsg'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "ExternalAccountNumber": {
                get: function() {
                    context["field"] = "ExternalAccountNumber";
                    context["metadata"] = (objectMetadata ? objectMetadata["ExternalAccountNumber"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ExternalAccountNumber, context);
                },
                set: function(val) {
                    setterFunctions['ExternalAccountNumber'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "firstDeposit": {
                get: function() {
                    context["field"] = "firstDeposit";
                    context["metadata"] = (objectMetadata ? objectMetadata["firstDeposit"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.firstDeposit, context);
                },
                set: function(val) {
                    setterFunctions['firstDeposit'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "firstRecordNumber": {
                get: function() {
                    context["field"] = "firstRecordNumber";
                    context["metadata"] = (objectMetadata ? objectMetadata["firstRecordNumber"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.firstRecordNumber, context);
                },
                set: function(val) {
                    setterFunctions['firstRecordNumber'].call(this, val, privateState);
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
            "fromAccountName": {
                get: function() {
                    context["field"] = "fromAccountName";
                    context["metadata"] = (objectMetadata ? objectMetadata["fromAccountName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.fromAccountName, context);
                },
                set: function(val) {
                    setterFunctions['fromAccountName'].call(this, val, privateState);
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
            "fromAccountType": {
                get: function() {
                    context["field"] = "fromAccountType";
                    context["metadata"] = (objectMetadata ? objectMetadata["fromAccountType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.fromAccountType, context);
                },
                set: function(val) {
                    setterFunctions['fromAccountType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "fromCheckNumber": {
                get: function() {
                    context["field"] = "fromCheckNumber";
                    context["metadata"] = (objectMetadata ? objectMetadata["fromCheckNumber"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.fromCheckNumber, context);
                },
                set: function(val) {
                    setterFunctions['fromCheckNumber'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "fromNickName": {
                get: function() {
                    context["field"] = "fromNickName";
                    context["metadata"] = (objectMetadata ? objectMetadata["fromNickName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.fromNickName, context);
                },
                set: function(val) {
                    setterFunctions['fromNickName'].call(this, val, privateState);
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
            "lastRecordNumber": {
                get: function() {
                    context["field"] = "lastRecordNumber";
                    context["metadata"] = (objectMetadata ? objectMetadata["lastRecordNumber"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.lastRecordNumber, context);
                },
                set: function(val) {
                    setterFunctions['lastRecordNumber'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "limit": {
                get: function() {
                    context["field"] = "limit";
                    context["metadata"] = (objectMetadata ? objectMetadata["limit"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.limit, context);
                },
                set: function(val) {
                    setterFunctions['limit'].call(this, val, privateState);
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
            "offset": {
                get: function() {
                    context["field"] = "offset";
                    context["metadata"] = (objectMetadata ? objectMetadata["offset"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.offset, context);
                },
                set: function(val) {
                    setterFunctions['offset'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "order": {
                get: function() {
                    context["field"] = "order";
                    context["metadata"] = (objectMetadata ? objectMetadata["order"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.order, context);
                },
                set: function(val) {
                    setterFunctions['order'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "otp": {
                get: function() {
                    context["field"] = "otp";
                    context["metadata"] = (objectMetadata ? objectMetadata["otp"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.otp, context);
                },
                set: function(val) {
                    setterFunctions['otp'].call(this, val, privateState);
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
            "payeeAccountNumber": {
                get: function() {
                    context["field"] = "payeeAccountNumber";
                    context["metadata"] = (objectMetadata ? objectMetadata["payeeAccountNumber"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.payeeAccountNumber, context);
                },
                set: function(val) {
                    setterFunctions['payeeAccountNumber'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "payeeAddressLine1": {
                get: function() {
                    context["field"] = "payeeAddressLine1";
                    context["metadata"] = (objectMetadata ? objectMetadata["payeeAddressLine1"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.payeeAddressLine1, context);
                },
                set: function(val) {
                    setterFunctions['payeeAddressLine1'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "payeeId": {
                get: function() {
                    context["field"] = "payeeId";
                    context["metadata"] = (objectMetadata ? objectMetadata["payeeId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.payeeId, context);
                },
                set: function(val) {
                    setterFunctions['payeeId'].call(this, val, privateState);
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
            "payeeNickName": {
                get: function() {
                    context["field"] = "payeeNickName";
                    context["metadata"] = (objectMetadata ? objectMetadata["payeeNickName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.payeeNickName, context);
                },
                set: function(val) {
                    setterFunctions['payeeNickName'].call(this, val, privateState);
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
            "payPersonEmail": {
                get: function() {
                    context["field"] = "payPersonEmail";
                    context["metadata"] = (objectMetadata ? objectMetadata["payPersonEmail"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.payPersonEmail, context);
                },
                set: function(val) {
                    setterFunctions['payPersonEmail'].call(this, val, privateState);
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
            "payPersonPhone": {
                get: function() {
                    context["field"] = "payPersonPhone";
                    context["metadata"] = (objectMetadata ? objectMetadata["payPersonPhone"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.payPersonPhone, context);
                },
                set: function(val) {
                    setterFunctions['payPersonPhone'].call(this, val, privateState);
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
            "personId": {
                get: function() {
                    context["field"] = "personId";
                    context["metadata"] = (objectMetadata ? objectMetadata["personId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.personId, context);
                },
                set: function(val) {
                    setterFunctions['personId'].call(this, val, privateState);
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
            "referenceId": {
                get: function() {
                    context["field"] = "referenceId";
                    context["metadata"] = (objectMetadata ? objectMetadata["referenceId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.referenceId, context);
                },
                set: function(val) {
                    setterFunctions['referenceId'].call(this, val, privateState);
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
            "searchAmount": {
                get: function() {
                    context["field"] = "searchAmount";
                    context["metadata"] = (objectMetadata ? objectMetadata["searchAmount"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.searchAmount, context);
                },
                set: function(val) {
                    setterFunctions['searchAmount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "searchDateRange": {
                get: function() {
                    context["field"] = "searchDateRange";
                    context["metadata"] = (objectMetadata ? objectMetadata["searchDateRange"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.searchDateRange, context);
                },
                set: function(val) {
                    setterFunctions['searchDateRange'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "searchDescription": {
                get: function() {
                    context["field"] = "searchDescription";
                    context["metadata"] = (objectMetadata ? objectMetadata["searchDescription"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.searchDescription, context);
                },
                set: function(val) {
                    setterFunctions['searchDescription'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "searchEndDate": {
                get: function() {
                    context["field"] = "searchEndDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["searchEndDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.searchEndDate, context);
                },
                set: function(val) {
                    setterFunctions['searchEndDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "searchMaxAmount": {
                get: function() {
                    context["field"] = "searchMaxAmount";
                    context["metadata"] = (objectMetadata ? objectMetadata["searchMaxAmount"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.searchMaxAmount, context);
                },
                set: function(val) {
                    setterFunctions['searchMaxAmount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "searchMinAmount": {
                get: function() {
                    context["field"] = "searchMinAmount";
                    context["metadata"] = (objectMetadata ? objectMetadata["searchMinAmount"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.searchMinAmount, context);
                },
                set: function(val) {
                    setterFunctions['searchMinAmount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "searchStartDate": {
                get: function() {
                    context["field"] = "searchStartDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["searchStartDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.searchStartDate, context);
                },
                set: function(val) {
                    setterFunctions['searchStartDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "searchTransactionType": {
                get: function() {
                    context["field"] = "searchTransactionType";
                    context["metadata"] = (objectMetadata ? objectMetadata["searchTransactionType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.searchTransactionType, context);
                },
                set: function(val) {
                    setterFunctions['searchTransactionType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "searchType": {
                get: function() {
                    context["field"] = "searchType";
                    context["metadata"] = (objectMetadata ? objectMetadata["searchType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.searchType, context);
                },
                set: function(val) {
                    setterFunctions['searchType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "secondaryEmail": {
                get: function() {
                    context["field"] = "secondaryEmail";
                    context["metadata"] = (objectMetadata ? objectMetadata["secondaryEmail"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.secondaryEmail, context);
                },
                set: function(val) {
                    setterFunctions['secondaryEmail'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "secondaryEmail2": {
                get: function() {
                    context["field"] = "secondaryEmail2";
                    context["metadata"] = (objectMetadata ? objectMetadata["secondaryEmail2"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.secondaryEmail2, context);
                },
                set: function(val) {
                    setterFunctions['secondaryEmail2'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "secondaryPhoneNumber2": {
                get: function() {
                    context["field"] = "secondaryPhoneNumber2";
                    context["metadata"] = (objectMetadata ? objectMetadata["secondaryPhoneNumber2"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.secondaryPhoneNumber2, context);
                },
                set: function(val) {
                    setterFunctions['secondaryPhoneNumber2'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "secondDeposit": {
                get: function() {
                    context["field"] = "secondDeposit";
                    context["metadata"] = (objectMetadata ? objectMetadata["secondDeposit"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.secondDeposit, context);
                },
                set: function(val) {
                    setterFunctions['secondDeposit'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "secondoryPhoneNumber": {
                get: function() {
                    context["field"] = "secondoryPhoneNumber";
                    context["metadata"] = (objectMetadata ? objectMetadata["secondoryPhoneNumber"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.secondoryPhoneNumber, context);
                },
                set: function(val) {
                    setterFunctions['secondoryPhoneNumber'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "sortBy": {
                get: function() {
                    context["field"] = "sortBy";
                    context["metadata"] = (objectMetadata ? objectMetadata["sortBy"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.sortBy, context);
                },
                set: function(val) {
                    setterFunctions['sortBy'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "statusDescription": {
                get: function() {
                    context["field"] = "statusDescription";
                    context["metadata"] = (objectMetadata ? objectMetadata["statusDescription"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.statusDescription, context);
                },
                set: function(val) {
                    setterFunctions['statusDescription'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "success": {
                get: function() {
                    context["field"] = "success";
                    context["metadata"] = (objectMetadata ? objectMetadata["success"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.success, context);
                },
                set: function(val) {
                    setterFunctions['success'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "toAccountName": {
                get: function() {
                    context["field"] = "toAccountName";
                    context["metadata"] = (objectMetadata ? objectMetadata["toAccountName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.toAccountName, context);
                },
                set: function(val) {
                    setterFunctions['toAccountName'].call(this, val, privateState);
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
            "toAccountType": {
                get: function() {
                    context["field"] = "toAccountType";
                    context["metadata"] = (objectMetadata ? objectMetadata["toAccountType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.toAccountType, context);
                },
                set: function(val) {
                    setterFunctions['toAccountType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "toCheckNumber": {
                get: function() {
                    context["field"] = "toCheckNumber";
                    context["metadata"] = (objectMetadata ? objectMetadata["toCheckNumber"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.toCheckNumber, context);
                },
                set: function(val) {
                    setterFunctions['toCheckNumber'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "totalAmount": {
                get: function() {
                    context["field"] = "totalAmount";
                    context["metadata"] = (objectMetadata ? objectMetadata["totalAmount"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.totalAmount, context);
                },
                set: function(val) {
                    setterFunctions['totalAmount'].call(this, val, privateState);
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
            "transactionId": {
                get: function() {
                    context["field"] = "transactionId";
                    context["metadata"] = (objectMetadata ? objectMetadata["transactionId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.transactionId, context);
                },
                set: function(val) {
                    setterFunctions['transactionId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "transactionsNotes": {
                get: function() {
                    context["field"] = "transactionsNotes";
                    context["metadata"] = (objectMetadata ? objectMetadata["transactionsNotes"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.transactionsNotes, context);
                },
                set: function(val) {
                    setterFunctions['transactionsNotes'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "validDate": {
                get: function() {
                    context["field"] = "validDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["validDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.validDate, context);
                },
                set: function(val) {
                    setterFunctions['validDate'].call(this, val, privateState);
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
            "overdraft": {
                get: function() {
                    context["field"] = "overdraft";
                    context["metadata"] = (objectMetadata ? objectMetadata["overdraft"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.overdraft, context);
                },
                set: function(val) {
                    setterFunctions['overdraft'].call(this, val, privateState);
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
            "totalCheckAmount": {
                get: function() {
                    context["field"] = "totalCheckAmount";
                    context["metadata"] = (objectMetadata ? objectMetadata["totalCheckAmount"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.totalCheckAmount, context);
                },
                set: function(val) {
                    setterFunctions['totalCheckAmount'].call(this, val, privateState);
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
            "wireAccountType": {
                get: function() {
                    context["field"] = "wireAccountType";
                    context["metadata"] = (objectMetadata ? objectMetadata["wireAccountType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.wireAccountType, context);
                },
                set: function(val) {
                    setterFunctions['wireAccountType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "country": {
                get: function() {
                    context["field"] = "country";
                    context["metadata"] = (objectMetadata ? objectMetadata["country"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.country, context);
                },
                set: function(val) {
                    setterFunctions['country'].call(this, val, privateState);
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
            "routingNumber": {
                get: function() {
                    context["field"] = "routingNumber";
                    context["metadata"] = (objectMetadata ? objectMetadata["routingNumber"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.routingNumber, context);
                },
                set: function(val) {
                    setterFunctions['routingNumber'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "internationalRoutingCode": {
                get: function() {
                    context["field"] = "internationalRoutingCode";
                    context["metadata"] = (objectMetadata ? objectMetadata["internationalRoutingCode"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.internationalRoutingCode, context);
                },
                set: function(val) {
                    setterFunctions['internationalRoutingCode'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "zipCode": {
                get: function() {
                    context["field"] = "zipCode";
                    context["metadata"] = (objectMetadata ? objectMetadata["zipCode"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.zipCode, context);
                },
                set: function(val) {
                    setterFunctions['zipCode'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "cityName": {
                get: function() {
                    context["field"] = "cityName";
                    context["metadata"] = (objectMetadata ? objectMetadata["cityName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.cityName, context);
                },
                set: function(val) {
                    setterFunctions['cityName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "state": {
                get: function() {
                    context["field"] = "state";
                    context["metadata"] = (objectMetadata ? objectMetadata["state"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.state, context);
                },
                set: function(val) {
                    setterFunctions['state'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "bankAddressLine1": {
                get: function() {
                    context["field"] = "bankAddressLine1";
                    context["metadata"] = (objectMetadata ? objectMetadata["bankAddressLine1"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.bankAddressLine1, context);
                },
                set: function(val) {
                    setterFunctions['bankAddressLine1'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "bankAddressLine2": {
                get: function() {
                    context["field"] = "bankAddressLine2";
                    context["metadata"] = (objectMetadata ? objectMetadata["bankAddressLine2"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.bankAddressLine2, context);
                },
                set: function(val) {
                    setterFunctions['bankAddressLine2'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "bankCity": {
                get: function() {
                    context["field"] = "bankCity";
                    context["metadata"] = (objectMetadata ? objectMetadata["bankCity"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.bankCity, context);
                },
                set: function(val) {
                    setterFunctions['bankCity'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "bankState": {
                get: function() {
                    context["field"] = "bankState";
                    context["metadata"] = (objectMetadata ? objectMetadata["bankState"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.bankState, context);
                },
                set: function(val) {
                    setterFunctions['bankState'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "bankZip": {
                get: function() {
                    context["field"] = "bankZip";
                    context["metadata"] = (objectMetadata ? objectMetadata["bankZip"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.bankZip, context);
                },
                set: function(val) {
                    setterFunctions['bankZip'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "payeeType": {
                get: function() {
                    context["field"] = "payeeType";
                    context["metadata"] = (objectMetadata ? objectMetadata["payeeType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.payeeType, context);
                },
                set: function(val) {
                    setterFunctions['payeeType'].call(this, val, privateState);
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
            "payeeAddressLine2": {
                get: function() {
                    context["field"] = "payeeAddressLine2";
                    context["metadata"] = (objectMetadata ? objectMetadata["payeeAddressLine2"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.payeeAddressLine2, context);
                },
                set: function(val) {
                    setterFunctions['payeeAddressLine2'].call(this, val, privateState);
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
            "requestValidityInMonths": {
                get: function() {
                    context["field"] = "requestValidityInMonths";
                    context["metadata"] = (objectMetadata ? objectMetadata["requestValidityInMonths"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.requestValidityInMonths, context);
                },
                set: function(val) {
                    setterFunctions['requestValidityInMonths'].call(this, val, privateState);
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
            "requestType": {
                get: function() {
                    context["field"] = "requestType";
                    context["metadata"] = (objectMetadata ? objectMetadata["requestType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.requestType, context);
                },
                set: function(val) {
                    setterFunctions['requestType'].call(this, val, privateState);
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
            "cardId": {
                get: function() {
                    context["field"] = "cardId";
                    context["metadata"] = (objectMetadata ? objectMetadata["cardId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.cardId, context);
                },
                set: function(val) {
                    setterFunctions['cardId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "isOverdraft": {
                get: function() {
                    context["field"] = "isOverdraft";
                    context["metadata"] = (objectMetadata ? objectMetadata["isOverdraft"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isOverdraft, context);
                },
                set: function(val) {
                    setterFunctions['isOverdraft'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "title": {
                get: function() {
                    context["field"] = "title";
                    context["metadata"] = (objectMetadata ? objectMetadata["title"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.title, context);
                },
                set: function(val) {
                    setterFunctions['title'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "generatedBy": {
                get: function() {
                    context["field"] = "generatedBy";
                    context["metadata"] = (objectMetadata ? objectMetadata["generatedBy"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.generatedBy, context);
                },
                set: function(val) {
                    setterFunctions['generatedBy'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "filters": {
                get: function() {
                    context["field"] = "filters";
                    context["metadata"] = (objectMetadata ? objectMetadata["filters"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.filters, context);
                },
                set: function(val) {
                    setterFunctions['filters'].call(this, val, privateState);
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
            "isInternationalAccount": {
                get: function() {
                    context["field"] = "isInternationalAccount";
                    context["metadata"] = (objectMetadata ? objectMetadata["isInternationalAccount"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isInternationalAccount, context);
                },
                set: function(val) {
                    setterFunctions['isInternationalAccount'].call(this, val, privateState);
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
            "Auth_Token": {
                get: function() {
                    context["field"] = "Auth_Token";
                    context["metadata"] = (objectMetadata ? objectMetadata["Auth_Token"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Auth_Token, context);
                },
                set: function(val) {
                    setterFunctions['Auth_Token'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "fileType": {
                get: function() {
                    context["field"] = "fileType";
                    context["metadata"] = (objectMetadata ? objectMetadata["fileType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.fileType, context);
                },
                set: function(val) {
                    setterFunctions['fileType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "MFAAttributes": {
                get: function() {
                    context["field"] = "MFAAttributes";
                    context["metadata"] = (objectMetadata ? objectMetadata["MFAAttributes"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.MFAAttributes, context);
                },
                set: function(val) {
                    setterFunctions['MFAAttributes'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "securityKey": {
                get: function() {
                    context["field"] = "securityKey";
                    context["metadata"] = (objectMetadata ? objectMetadata["securityKey"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.securityKey, context);
                },
                set: function(val) {
                    setterFunctions['securityKey'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "sacMaxResendRequestsAllowed": {
                get: function() {
                    context["field"] = "sacMaxResendRequestsAllowed";
                    context["metadata"] = (objectMetadata ? objectMetadata["sacMaxResendRequestsAllowed"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.sacMaxResendRequestsAllowed, context);
                },
                set: function(val) {
                    setterFunctions['sacMaxResendRequestsAllowed'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "remainingResendAttempts": {
                get: function() {
                    context["field"] = "remainingResendAttempts";
                    context["metadata"] = (objectMetadata ? objectMetadata["remainingResendAttempts"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.remainingResendAttempts, context);
                },
                set: function(val) {
                    setterFunctions['remainingResendAttempts'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "sacCodeLength": {
                get: function() {
                    context["field"] = "sacCodeLength";
                    context["metadata"] = (objectMetadata ? objectMetadata["sacCodeLength"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.sacCodeLength, context);
                },
                set: function(val) {
                    setterFunctions['sacCodeLength'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "communicationType": {
                get: function() {
                    context["field"] = "communicationType";
                    context["metadata"] = (objectMetadata ? objectMetadata["communicationType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.communicationType, context);
                },
                set: function(val) {
                    setterFunctions['communicationType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "sacPreferenceCriteria": {
                get: function() {
                    context["field"] = "sacPreferenceCriteria";
                    context["metadata"] = (objectMetadata ? objectMetadata["sacPreferenceCriteria"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.sacPreferenceCriteria, context);
                },
                set: function(val) {
                    setterFunctions['sacPreferenceCriteria'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "customerCommunication": {
                get: function() {
                    context["field"] = "customerCommunication";
                    context["metadata"] = (objectMetadata ? objectMetadata["customerCommunication"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.customerCommunication, context);
                },
                set: function(val) {
                    setterFunctions['customerCommunication'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "phone": {
                get: function() {
                    context["field"] = "phone";
                    context["metadata"] = (objectMetadata ? objectMetadata["phone"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.phone, context);
                },
                set: function(val) {
                    setterFunctions['phone'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "masked": {
                get: function() {
                    context["field"] = "masked";
                    context["metadata"] = (objectMetadata ? objectMetadata["masked"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.masked, context);
                },
                set: function(val) {
                    setterFunctions['masked'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "unmasked": {
                get: function() {
                    context["field"] = "unmasked";
                    context["metadata"] = (objectMetadata ? objectMetadata["unmasked"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.unmasked, context);
                },
                set: function(val) {
                    setterFunctions['unmasked'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "email": {
                get: function() {
                    context["field"] = "email";
                    context["metadata"] = (objectMetadata ? objectMetadata["email"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.email, context);
                },
                set: function(val) {
                    setterFunctions['email'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "MFAType": {
                get: function() {
                    context["field"] = "MFAType";
                    context["metadata"] = (objectMetadata ? objectMetadata["MFAType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.MFAType, context);
                },
                set: function(val) {
                    setterFunctions['MFAType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "isMFARequired": {
                get: function() {
                    context["field"] = "isMFARequired";
                    context["metadata"] = (objectMetadata ? objectMetadata["isMFARequired"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isMFARequired, context);
                },
                set: function(val) {
                    setterFunctions['isMFARequired'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "serviceKey": {
                get: function() {
                    context["field"] = "serviceKey";
                    context["metadata"] = (objectMetadata ? objectMetadata["serviceKey"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.serviceKey, context);
                },
                set: function(val) {
                    setterFunctions['serviceKey'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "securityQuestions": {
                get: function() {
                    context["field"] = "securityQuestions";
                    context["metadata"] = (objectMetadata ? objectMetadata["securityQuestions"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.securityQuestions, context);
                },
                set: function(val) {
                    setterFunctions['securityQuestions'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "SecurityQuestion_id": {
                get: function() {
                    context["field"] = "SecurityQuestion_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["SecurityQuestion_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.SecurityQuestion_id, context);
                },
                set: function(val) {
                    setterFunctions['SecurityQuestion_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Question": {
                get: function() {
                    context["field"] = "Question";
                    context["metadata"] = (objectMetadata ? objectMetadata["Question"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Question, context);
                },
                set: function(val) {
                    setterFunctions['Question'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "QuestionStatus_id": {
                get: function() {
                    context["field"] = "QuestionStatus_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["QuestionStatus_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.QuestionStatus_id, context);
                },
                set: function(val) {
                    setterFunctions['QuestionStatus_id'].call(this, val, privateState);
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
            "customerAnswer": {
                get: function() {
                    context["field"] = "customerAnswer";
                    context["metadata"] = (objectMetadata ? objectMetadata["customerAnswer"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.customerAnswer, context);
                },
                set: function(val) {
                    setterFunctions['customerAnswer'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "questionId": {
                get: function() {
                    context["field"] = "questionId";
                    context["metadata"] = (objectMetadata ? objectMetadata["questionId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.questionId, context);
                },
                set: function(val) {
                    setterFunctions['questionId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "maxFailedAttemptsAllowed": {
                get: function() {
                    context["field"] = "maxFailedAttemptsAllowed";
                    context["metadata"] = (objectMetadata ? objectMetadata["maxFailedAttemptsAllowed"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.maxFailedAttemptsAllowed, context);
                },
                set: function(val) {
                    setterFunctions['maxFailedAttemptsAllowed'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "remainingFailedAttempts": {
                get: function() {
                    context["field"] = "remainingFailedAttempts";
                    context["metadata"] = (objectMetadata ? objectMetadata["remainingFailedAttempts"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.remainingFailedAttempts, context);
                },
                set: function(val) {
                    setterFunctions['remainingFailedAttempts'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "failedAttempts": {
                get: function() {
                    context["field"] = "failedAttempts";
                    context["metadata"] = (objectMetadata ? objectMetadata["failedAttempts"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.failedAttempts, context);
                },
                set: function(val) {
                    setterFunctions['failedAttempts'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "isOTPExpired": {
                get: function() {
                    context["field"] = "isOTPExpired";
                    context["metadata"] = (objectMetadata ? objectMetadata["isOTPExpired"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isOTPExpired, context);
                },
                set: function(val) {
                    setterFunctions['isOTPExpired'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "featureActionId": {
                get: function() {
                    context["field"] = "featureActionId";
                    context["metadata"] = (objectMetadata ? objectMetadata["featureActionId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.featureActionId, context);
                },
                set: function(val) {
                    setterFunctions['featureActionId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "receivedApprovals": {
                get: function() {
                    context["field"] = "receivedApprovals";
                    context["metadata"] = (objectMetadata ? objectMetadata["receivedApprovals"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.receivedApprovals, context);
                },
                set: function(val) {
                    setterFunctions['receivedApprovals'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "requiredApprovals": {
                get: function() {
                    context["field"] = "requiredApprovals";
                    context["metadata"] = (objectMetadata ? objectMetadata["requiredApprovals"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.requiredApprovals, context);
                },
                set: function(val) {
                    setterFunctions['requiredApprovals'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Request_id": {
                get: function() {
                    context["field"] = "Request_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["Request_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Request_id, context);
                },
                set: function(val) {
                    setterFunctions['Request_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "featureName": {
                get: function() {
                    context["field"] = "featureName";
                    context["metadata"] = (objectMetadata ? objectMetadata["featureName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.featureName, context);
                },
                set: function(val) {
                    setterFunctions['featureName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "AccountName": {
                get: function() {
                    context["field"] = "AccountName";
                    context["metadata"] = (objectMetadata ? objectMetadata["AccountName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.AccountName, context);
                },
                set: function(val) {
                    setterFunctions['AccountName'].call(this, val, privateState);
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
            privateState.Transaction_id = value ? (value["Transaction_id"] ? value["Transaction_id"] : null) : null;
            privateState.TransactionDate = value ? (value["TransactionDate"] ? value["TransactionDate"] : null) : null;
            privateState.CreatedBy = value ? (value["CreatedBy"] ? value["CreatedBy"] : null) : null;
            privateState.Payee = value ? (value["Payee"] ? value["Payee"] : null) : null;
            privateState.StatusValue = value ? (value["StatusValue"] ? value["StatusValue"] : null) : null;
            privateState.Reccurence = value ? (value["Reccurence"] ? value["Reccurence"] : null) : null;
            privateState.Frequency = value ? (value["Frequency"] ? value["Frequency"] : null) : null;
            privateState.Company_id = value ? (value["Company_id"] ? value["Company_id"] : null) : null;
            privateState.TransactionType_id = value ? (value["TransactionType_id"] ? value["TransactionType_id"] : null) : null;
            privateState.CreatedOn = value ? (value["CreatedOn"] ? value["CreatedOn"] : null) : null;
            privateState.Amount = value ? (value["Amount"] ? value["Amount"] : null) : null;
            privateState.companyName = value ? (value["companyName"] ? value["companyName"] : null) : null;
            privateState.DebitOrCreditAccount = value ? (value["DebitOrCreditAccount"] ? value["DebitOrCreditAccount"] : null) : null;
            privateState.TransactionType = value ? (value["TransactionType"] ? value["TransactionType"] : null) : null;
            privateState.Status = value ? (value["Status"] ? value["Status"] : null) : null;
            privateState.EffectiveDate = value ? (value["EffectiveDate"] ? value["EffectiveDate"] : null) : null;
            privateState.BBGeneralTransactionType_id = value ? (value["BBGeneralTransactionType_id"] ? value["BBGeneralTransactionType_id"] : null) : null;
            privateState.TransactionEntry = value ? (value["TransactionEntry"] ? value["TransactionEntry"] : null) : null;
            privateState.Approver = value ? (value["Approver"] ? value["Approver"] : null) : null;
            privateState.userName = value ? (value["userName"] ? value["userName"] : null) : null;
            privateState.dbpErrCode = value ? (value["dbpErrCode"] ? value["dbpErrCode"] : null) : null;
            privateState.dbpErrMsg = value ? (value["dbpErrMsg"] ? value["dbpErrMsg"] : null) : null;
            privateState.opstatus = value ? (value["opstatus"] ? value["opstatus"] : null) : null;
            privateState.httpStatusCode = value ? (value["httpStatusCode"] ? value["httpStatusCode"] : null) : null;
            privateState.accountID = value ? (value["accountID"] ? value["accountID"] : null) : null;
            privateState.accountNumber = value ? (value["accountNumber"] ? value["accountNumber"] : null) : null;
            privateState.amountTransferedTillNow = value ? (value["amountTransferedTillNow"] ? value["amountTransferedTillNow"] : null) : null;
            privateState.authenticationRequired = value ? (value["authenticationRequired"] ? value["authenticationRequired"] : null) : null;
            privateState.billCategory = value ? (value["billCategory"] ? value["billCategory"] : null) : null;
            privateState.billCategoryId = value ? (value["billCategoryId"] ? value["billCategoryId"] : null) : null;
            privateState.billDueAmount = value ? (value["billDueAmount"] ? value["billDueAmount"] : null) : null;
            privateState.billDueDate = value ? (value["billDueDate"] ? value["billDueDate"] : null) : null;
            privateState.billerCategoryName = value ? (value["billerCategoryName"] ? value["billerCategoryName"] : null) : null;
            privateState.billGeneratedDate = value ? (value["billGeneratedDate"] ? value["billGeneratedDate"] : null) : null;
            privateState.billid = value ? (value["billid"] ? value["billid"] : null) : null;
            privateState.billPaidAmount = value ? (value["billPaidAmount"] ? value["billPaidAmount"] : null) : null;
            privateState.billPaidDate = value ? (value["billPaidDate"] ? value["billPaidDate"] : null) : null;
            privateState.bulkPayString = value ? (value["bulkPayString"] ? value["bulkPayString"] : null) : null;
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
            privateState.checkImage = value ? (value["checkImage"] ? value["checkImage"] : null) : null;
            privateState.checkImageBack = value ? (value["checkImageBack"] ? value["checkImageBack"] : null) : null;
            privateState.checkNumber = value ? (value["checkNumber"] ? value["checkNumber"] : null) : null;
            privateState.deliverBy = value ? (value["deliverBy"] ? value["deliverBy"] : null) : null;
            privateState.description = value ? (value["description"] ? value["description"] : null) : null;
            privateState.eBillEnable = value ? (value["eBillEnable"] ? value["eBillEnable"] : null) : null;
            privateState.eBillSupport = value ? (value["eBillSupport"] ? value["eBillSupport"] : null) : null;
            privateState.ebillURL = value ? (value["ebillURL"] ? value["ebillURL"] : null) : null;
            privateState.errmsg = value ? (value["errmsg"] ? value["errmsg"] : null) : null;
            privateState.ExternalAccountNumber = value ? (value["ExternalAccountNumber"] ? value["ExternalAccountNumber"] : null) : null;
            privateState.firstDeposit = value ? (value["firstDeposit"] ? value["firstDeposit"] : null) : null;
            privateState.firstRecordNumber = value ? (value["firstRecordNumber"] ? value["firstRecordNumber"] : null) : null;
            privateState.frequencyEndDate = value ? (value["frequencyEndDate"] ? value["frequencyEndDate"] : null) : null;
            privateState.frequencyStartDate = value ? (value["frequencyStartDate"] ? value["frequencyStartDate"] : null) : null;
            privateState.frequencyType = value ? (value["frequencyType"] ? value["frequencyType"] : null) : null;
            privateState.fromAccountBalance = value ? (value["fromAccountBalance"] ? value["fromAccountBalance"] : null) : null;
            privateState.fromAccountName = value ? (value["fromAccountName"] ? value["fromAccountName"] : null) : null;
            privateState.fromAccountNumber = value ? (value["fromAccountNumber"] ? value["fromAccountNumber"] : null) : null;
            privateState.fromAccountType = value ? (value["fromAccountType"] ? value["fromAccountType"] : null) : null;
            privateState.fromCheckNumber = value ? (value["fromCheckNumber"] ? value["fromCheckNumber"] : null) : null;
            privateState.fromNickName = value ? (value["fromNickName"] ? value["fromNickName"] : null) : null;
            privateState.hasDepositImage = value ? (value["hasDepositImage"] ? value["hasDepositImage"] : null) : null;
            privateState.isScheduled = value ? (value["isScheduled"] ? value["isScheduled"] : null) : null;
            privateState.lastRecordNumber = value ? (value["lastRecordNumber"] ? value["lastRecordNumber"] : null) : null;
            privateState.limit = value ? (value["limit"] ? value["limit"] : null) : null;
            privateState.numberOfRecurrences = value ? (value["numberOfRecurrences"] ? value["numberOfRecurrences"] : null) : null;
            privateState.offset = value ? (value["offset"] ? value["offset"] : null) : null;
            privateState.order = value ? (value["order"] ? value["order"] : null) : null;
            privateState.otp = value ? (value["otp"] ? value["otp"] : null) : null;
            privateState.p2pContact = value ? (value["p2pContact"] ? value["p2pContact"] : null) : null;
            privateState.p2pRequiredDate = value ? (value["p2pRequiredDate"] ? value["p2pRequiredDate"] : null) : null;
            privateState.payeeAccountNumber = value ? (value["payeeAccountNumber"] ? value["payeeAccountNumber"] : null) : null;
            privateState.payeeAddressLine1 = value ? (value["payeeAddressLine1"] ? value["payeeAddressLine1"] : null) : null;
            privateState.payeeId = value ? (value["payeeId"] ? value["payeeId"] : null) : null;
            privateState.payeeName = value ? (value["payeeName"] ? value["payeeName"] : null) : null;
            privateState.payeeNickName = value ? (value["payeeNickName"] ? value["payeeNickName"] : null) : null;
            privateState.payoffFlag = value ? (value["payoffFlag"] ? value["payoffFlag"] : null) : null;
            privateState.payPersonEmail = value ? (value["payPersonEmail"] ? value["payPersonEmail"] : null) : null;
            privateState.payPersonName = value ? (value["payPersonName"] ? value["payPersonName"] : null) : null;
            privateState.payPersonPhone = value ? (value["payPersonPhone"] ? value["payPersonPhone"] : null) : null;
            privateState.penaltyFlag = value ? (value["penaltyFlag"] ? value["penaltyFlag"] : null) : null;
            privateState.personId = value ? (value["personId"] ? value["personId"] : null) : null;
            privateState.recurrenceDesc = value ? (value["recurrenceDesc"] ? value["recurrenceDesc"] : null) : null;
            privateState.referenceId = value ? (value["referenceId"] ? value["referenceId"] : null) : null;
            privateState.scheduledDate = value ? (value["scheduledDate"] ? value["scheduledDate"] : null) : null;
            privateState.searchAmount = value ? (value["searchAmount"] ? value["searchAmount"] : null) : null;
            privateState.searchDateRange = value ? (value["searchDateRange"] ? value["searchDateRange"] : null) : null;
            privateState.searchDescription = value ? (value["searchDescription"] ? value["searchDescription"] : null) : null;
            privateState.searchEndDate = value ? (value["searchEndDate"] ? value["searchEndDate"] : null) : null;
            privateState.searchMaxAmount = value ? (value["searchMaxAmount"] ? value["searchMaxAmount"] : null) : null;
            privateState.searchMinAmount = value ? (value["searchMinAmount"] ? value["searchMinAmount"] : null) : null;
            privateState.searchStartDate = value ? (value["searchStartDate"] ? value["searchStartDate"] : null) : null;
            privateState.searchTransactionType = value ? (value["searchTransactionType"] ? value["searchTransactionType"] : null) : null;
            privateState.searchType = value ? (value["searchType"] ? value["searchType"] : null) : null;
            privateState.secondaryEmail = value ? (value["secondaryEmail"] ? value["secondaryEmail"] : null) : null;
            privateState.secondaryEmail2 = value ? (value["secondaryEmail2"] ? value["secondaryEmail2"] : null) : null;
            privateState.secondaryPhoneNumber2 = value ? (value["secondaryPhoneNumber2"] ? value["secondaryPhoneNumber2"] : null) : null;
            privateState.secondDeposit = value ? (value["secondDeposit"] ? value["secondDeposit"] : null) : null;
            privateState.secondoryPhoneNumber = value ? (value["secondoryPhoneNumber"] ? value["secondoryPhoneNumber"] : null) : null;
            privateState.sortBy = value ? (value["sortBy"] ? value["sortBy"] : null) : null;
            privateState.statusDescription = value ? (value["statusDescription"] ? value["statusDescription"] : null) : null;
            privateState.success = value ? (value["success"] ? value["success"] : null) : null;
            privateState.toAccountName = value ? (value["toAccountName"] ? value["toAccountName"] : null) : null;
            privateState.toAccountNumber = value ? (value["toAccountNumber"] ? value["toAccountNumber"] : null) : null;
            privateState.toAccountType = value ? (value["toAccountType"] ? value["toAccountType"] : null) : null;
            privateState.toCheckNumber = value ? (value["toCheckNumber"] ? value["toCheckNumber"] : null) : null;
            privateState.totalAmount = value ? (value["totalAmount"] ? value["totalAmount"] : null) : null;
            privateState.transactionComments = value ? (value["transactionComments"] ? value["transactionComments"] : null) : null;
            privateState.transactionId = value ? (value["transactionId"] ? value["transactionId"] : null) : null;
            privateState.transactionsNotes = value ? (value["transactionsNotes"] ? value["transactionsNotes"] : null) : null;
            privateState.validDate = value ? (value["validDate"] ? value["validDate"] : null) : null;
            privateState.viewReportLink = value ? (value["viewReportLink"] ? value["viewReportLink"] : null) : null;
            privateState.overdraft = value ? (value["overdraft"] ? value["overdraft"] : null) : null;
            privateState.isPaypersonDeleted = value ? (value["isPaypersonDeleted"] ? value["isPaypersonDeleted"] : null) : null;
            privateState.fee = value ? (value["fee"] ? value["fee"] : null) : null;
            privateState.frontImage1 = value ? (value["frontImage1"] ? value["frontImage1"] : null) : null;
            privateState.frontImage2 = value ? (value["frontImage2"] ? value["frontImage2"] : null) : null;
            privateState.backImage1 = value ? (value["backImage1"] ? value["backImage1"] : null) : null;
            privateState.backImage2 = value ? (value["backImage2"] ? value["backImage2"] : null) : null;
            privateState.checkDesc = value ? (value["checkDesc"] ? value["checkDesc"] : null) : null;
            privateState.checkNumber1 = value ? (value["checkNumber1"] ? value["checkNumber1"] : null) : null;
            privateState.checkNumber2 = value ? (value["checkNumber2"] ? value["checkNumber2"] : null) : null;
            privateState.bankName1 = value ? (value["bankName1"] ? value["bankName1"] : null) : null;
            privateState.bankName2 = value ? (value["bankName2"] ? value["bankName2"] : null) : null;
            privateState.withdrawlAmount1 = value ? (value["withdrawlAmount1"] ? value["withdrawlAmount1"] : null) : null;
            privateState.withdrawlAmount2 = value ? (value["withdrawlAmount2"] ? value["withdrawlAmount2"] : null) : null;
            privateState.totalCheckAmount = value ? (value["totalCheckAmount"] ? value["totalCheckAmount"] : null) : null;
            privateState.cashAmount = value ? (value["cashAmount"] ? value["cashAmount"] : null) : null;
            privateState.payeeCurrency = value ? (value["payeeCurrency"] ? value["payeeCurrency"] : null) : null;
            privateState.swiftCode = value ? (value["swiftCode"] ? value["swiftCode"] : null) : null;
            privateState.wireAccountType = value ? (value["wireAccountType"] ? value["wireAccountType"] : null) : null;
            privateState.country = value ? (value["country"] ? value["country"] : null) : null;
            privateState.IBAN = value ? (value["IBAN"] ? value["IBAN"] : null) : null;
            privateState.bankName = value ? (value["bankName"] ? value["bankName"] : null) : null;
            privateState.routingNumber = value ? (value["routingNumber"] ? value["routingNumber"] : null) : null;
            privateState.internationalRoutingCode = value ? (value["internationalRoutingCode"] ? value["internationalRoutingCode"] : null) : null;
            privateState.zipCode = value ? (value["zipCode"] ? value["zipCode"] : null) : null;
            privateState.cityName = value ? (value["cityName"] ? value["cityName"] : null) : null;
            privateState.state = value ? (value["state"] ? value["state"] : null) : null;
            privateState.bankAddressLine1 = value ? (value["bankAddressLine1"] ? value["bankAddressLine1"] : null) : null;
            privateState.bankAddressLine2 = value ? (value["bankAddressLine2"] ? value["bankAddressLine2"] : null) : null;
            privateState.bankCity = value ? (value["bankCity"] ? value["bankCity"] : null) : null;
            privateState.bankState = value ? (value["bankState"] ? value["bankState"] : null) : null;
            privateState.bankZip = value ? (value["bankZip"] ? value["bankZip"] : null) : null;
            privateState.payeeType = value ? (value["payeeType"] ? value["payeeType"] : null) : null;
            privateState.disputeReason = value ? (value["disputeReason"] ? value["disputeReason"] : null) : null;
            privateState.disputeDescription = value ? (value["disputeDescription"] ? value["disputeDescription"] : null) : null;
            privateState.checkDateOfIssue = value ? (value["checkDateOfIssue"] ? value["checkDateOfIssue"] : null) : null;
            privateState.checkReason = value ? (value["checkReason"] ? value["checkReason"] : null) : null;
            privateState.isPayeeDeleted = value ? (value["isPayeeDeleted"] ? value["isPayeeDeleted"] : null) : null;
            privateState.payeeAddressLine2 = value ? (value["payeeAddressLine2"] ? value["payeeAddressLine2"] : null) : null;
            privateState.amountRecieved = value ? (value["amountRecieved"] ? value["amountRecieved"] : null) : null;
            privateState.requestValidityInMonths = value ? (value["requestValidityInMonths"] ? value["requestValidityInMonths"] : null) : null;
            privateState.requestValidity = value ? (value["requestValidity"] ? value["requestValidity"] : null) : null;
            privateState.requestType = value ? (value["requestType"] ? value["requestType"] : null) : null;
            privateState.disputeDate = value ? (value["disputeDate"] ? value["disputeDate"] : null) : null;
            privateState.disputeStatus = value ? (value["disputeStatus"] ? value["disputeStatus"] : null) : null;
            privateState.isDisputed = value ? (value["isDisputed"] ? value["isDisputed"] : null) : null;
            privateState.cardId = value ? (value["cardId"] ? value["cardId"] : null) : null;
            privateState.isOverdraft = value ? (value["isOverdraft"] ? value["isOverdraft"] : null) : null;
            privateState.title = value ? (value["title"] ? value["title"] : null) : null;
            privateState.generatedBy = value ? (value["generatedBy"] ? value["generatedBy"] : null) : null;
            privateState.filters = value ? (value["filters"] ? value["filters"] : null) : null;
            privateState.statementReference = value ? (value["statementReference"] ? value["statementReference"] : null) : null;
            privateState.transCreditDebitIndicator = value ? (value["transCreditDebitIndicator"] ? value["transCreditDebitIndicator"] : null) : null;
            privateState.bookingDateTime = value ? (value["bookingDateTime"] ? value["bookingDateTime"] : null) : null;
            privateState.valueDateTime = value ? (value["valueDateTime"] ? value["valueDateTime"] : null) : null;
            privateState.transactionInformation = value ? (value["transactionInformation"] ? value["transactionInformation"] : null) : null;
            privateState.addressLine = value ? (value["addressLine"] ? value["addressLine"] : null) : null;
            privateState.transactionAmount = value ? (value["transactionAmount"] ? value["transactionAmount"] : null) : null;
            privateState.transactionCurrency = value ? (value["transactionCurrency"] ? value["transactionCurrency"] : null) : null;
            privateState.chargeAmount = value ? (value["chargeAmount"] ? value["chargeAmount"] : null) : null;
            privateState.chargeCurrency = value ? (value["chargeCurrency"] ? value["chargeCurrency"] : null) : null;
            privateState.sourceCurrency = value ? (value["sourceCurrency"] ? value["sourceCurrency"] : null) : null;
            privateState.targetCurrency = value ? (value["targetCurrency"] ? value["targetCurrency"] : null) : null;
            privateState.unitCurrency = value ? (value["unitCurrency"] ? value["unitCurrency"] : null) : null;
            privateState.exchangeRate = value ? (value["exchangeRate"] ? value["exchangeRate"] : null) : null;
            privateState.contractIdentification = value ? (value["contractIdentification"] ? value["contractIdentification"] : null) : null;
            privateState.quotationDate = value ? (value["quotationDate"] ? value["quotationDate"] : null) : null;
            privateState.instructedAmount = value ? (value["instructedAmount"] ? value["instructedAmount"] : null) : null;
            privateState.transactionCode = value ? (value["transactionCode"] ? value["transactionCode"] : null) : null;
            privateState.transactionSubCode = value ? (value["transactionSubCode"] ? value["transactionSubCode"] : null) : null;
            privateState.proprietaryTransactionCode = value ? (value["proprietaryTransactionCode"] ? value["proprietaryTransactionCode"] : null) : null;
            privateState.proprietaryTransactionIssuer = value ? (value["proprietaryTransactionIssuer"] ? value["proprietaryTransactionIssuer"] : null) : null;
            privateState.balanceCreditDebitIndicator = value ? (value["balanceCreditDebitIndicator"] ? value["balanceCreditDebitIndicator"] : null) : null;
            privateState.balanceType = value ? (value["balanceType"] ? value["balanceType"] : null) : null;
            privateState.balanceAmount = value ? (value["balanceAmount"] ? value["balanceAmount"] : null) : null;
            privateState.balanceCurrency = value ? (value["balanceCurrency"] ? value["balanceCurrency"] : null) : null;
            privateState.merchantName = value ? (value["merchantName"] ? value["merchantName"] : null) : null;
            privateState.merchantCategoryCode = value ? (value["merchantCategoryCode"] ? value["merchantCategoryCode"] : null) : null;
            privateState.creditorAgentSchemeName = value ? (value["creditorAgentSchemeName"] ? value["creditorAgentSchemeName"] : null) : null;
            privateState.creditorAgentIdentification = value ? (value["creditorAgentIdentification"] ? value["creditorAgentIdentification"] : null) : null;
            privateState.creditorAgentName = value ? (value["creditorAgentName"] ? value["creditorAgentName"] : null) : null;
            privateState.creditorAgentaddressType = value ? (value["creditorAgentaddressType"] ? value["creditorAgentaddressType"] : null) : null;
            privateState.creditorAgentDepartment = value ? (value["creditorAgentDepartment"] ? value["creditorAgentDepartment"] : null) : null;
            privateState.creditorAgentSubDepartment = value ? (value["creditorAgentSubDepartment"] ? value["creditorAgentSubDepartment"] : null) : null;
            privateState.creditorAgentStreetName = value ? (value["creditorAgentStreetName"] ? value["creditorAgentStreetName"] : null) : null;
            privateState.creditorAgentBuildingNumber = value ? (value["creditorAgentBuildingNumber"] ? value["creditorAgentBuildingNumber"] : null) : null;
            privateState.creditorAgentPostCode = value ? (value["creditorAgentPostCode"] ? value["creditorAgentPostCode"] : null) : null;
            privateState.creditorAgentTownName = value ? (value["creditorAgentTownName"] ? value["creditorAgentTownName"] : null) : null;
            privateState.creditorAgentCountrySubDivision = value ? (value["creditorAgentCountrySubDivision"] ? value["creditorAgentCountrySubDivision"] : null) : null;
            privateState.creditorAgentCountry = value ? (value["creditorAgentCountry"] ? value["creditorAgentCountry"] : null) : null;
            privateState.creditorAgentAddressLine = value ? (value["creditorAgentAddressLine"] ? value["creditorAgentAddressLine"] : null) : null;
            privateState.creditorAccountSchemeName = value ? (value["creditorAccountSchemeName"] ? value["creditorAccountSchemeName"] : null) : null;
            privateState.creditorAccountSeconIdentification = value ? (value["creditorAccountSeconIdentification"] ? value["creditorAccountSeconIdentification"] : null) : null;
            privateState.debtorAgentSchemeName = value ? (value["debtorAgentSchemeName"] ? value["debtorAgentSchemeName"] : null) : null;
            privateState.debtorAgentIdentification = value ? (value["debtorAgentIdentification"] ? value["debtorAgentIdentification"] : null) : null;
            privateState.debtorAgentName = value ? (value["debtorAgentName"] ? value["debtorAgentName"] : null) : null;
            privateState.debtorAgentAddressType = value ? (value["debtorAgentAddressType"] ? value["debtorAgentAddressType"] : null) : null;
            privateState.debtorAgentDepartment = value ? (value["debtorAgentDepartment"] ? value["debtorAgentDepartment"] : null) : null;
            privateState.debtorAgentSubDepartment = value ? (value["debtorAgentSubDepartment"] ? value["debtorAgentSubDepartment"] : null) : null;
            privateState.debtorAgentStreetName = value ? (value["debtorAgentStreetName"] ? value["debtorAgentStreetName"] : null) : null;
            privateState.debtorAgentBuildingNumber = value ? (value["debtorAgentBuildingNumber"] ? value["debtorAgentBuildingNumber"] : null) : null;
            privateState.dedtorAgentPostCode = value ? (value["dedtorAgentPostCode"] ? value["dedtorAgentPostCode"] : null) : null;
            privateState.debtorAgentTownName = value ? (value["debtorAgentTownName"] ? value["debtorAgentTownName"] : null) : null;
            privateState.debtorAgentCountrySubDivision = value ? (value["debtorAgentCountrySubDivision"] ? value["debtorAgentCountrySubDivision"] : null) : null;
            privateState.debtorAgentCountry = value ? (value["debtorAgentCountry"] ? value["debtorAgentCountry"] : null) : null;
            privateState.debtorAgentAddressLine = value ? (value["debtorAgentAddressLine"] ? value["debtorAgentAddressLine"] : null) : null;
            privateState.debtorAccountSchemeName = value ? (value["debtorAccountSchemeName"] ? value["debtorAccountSchemeName"] : null) : null;
            privateState.debtorAccountName = value ? (value["debtorAccountName"] ? value["debtorAccountName"] : null) : null;
            privateState.debtorAccountSeconIdentification = value ? (value["debtorAccountSeconIdentification"] ? value["debtorAccountSeconIdentification"] : null) : null;
            privateState.cardInstrumentSchemeName = value ? (value["cardInstrumentSchemeName"] ? value["cardInstrumentSchemeName"] : null) : null;
            privateState.cardInstrumentAuthorisationType = value ? (value["cardInstrumentAuthorisationType"] ? value["cardInstrumentAuthorisationType"] : null) : null;
            privateState.cardInstrumentName = value ? (value["cardInstrumentName"] ? value["cardInstrumentName"] : null) : null;
            privateState.cardInstrumentIdentification = value ? (value["cardInstrumentIdentification"] ? value["cardInstrumentIdentification"] : null) : null;
            privateState.sortCode = value ? (value["sortCode"] ? value["sortCode"] : null) : null;
            privateState.feeCurrency = value ? (value["feeCurrency"] ? value["feeCurrency"] : null) : null;
            privateState.feePaidByReceipent = value ? (value["feePaidByReceipent"] ? value["feePaidByReceipent"] : null) : null;
            privateState.convertedAmount = value ? (value["convertedAmount"] ? value["convertedAmount"] : null) : null;
            privateState.baseCurrency = value ? (value["baseCurrency"] ? value["baseCurrency"] : null) : null;
            privateState.FirstPaymentDateTime = value ? (value["FirstPaymentDateTime"] ? value["FirstPaymentDateTime"] : null) : null;
            privateState.NextPaymentDateTime = value ? (value["NextPaymentDateTime"] ? value["NextPaymentDateTime"] : null) : null;
            privateState.FinalPaymentDateTime = value ? (value["FinalPaymentDateTime"] ? value["FinalPaymentDateTime"] : null) : null;
            privateState.StandingOrderStatusCode = value ? (value["StandingOrderStatusCode"] ? value["StandingOrderStatusCode"] : null) : null;
            privateState.FP_Amount = value ? (value["FP_Amount"] ? value["FP_Amount"] : null) : null;
            privateState.FP_Currency = value ? (value["FP_Currency"] ? value["FP_Currency"] : null) : null;
            privateState.NP_Amount = value ? (value["NP_Amount"] ? value["NP_Amount"] : null) : null;
            privateState.NP_Currency = value ? (value["NP_Currency"] ? value["NP_Currency"] : null) : null;
            privateState.FPA_Amount = value ? (value["FPA_Amount"] ? value["FPA_Amount"] : null) : null;
            privateState.FPA_Currency = value ? (value["FPA_Currency"] ? value["FPA_Currency"] : null) : null;
            privateState.beneficiaryName = value ? (value["beneficiaryName"] ? value["beneficiaryName"] : null) : null;
            privateState.isInternationalAccount = value ? (value["isInternationalAccount"] ? value["isInternationalAccount"] : null) : null;
            privateState.ConsentId = value ? (value["ConsentId"] ? value["ConsentId"] : null) : null;
            privateState.Initiation_InstructionIdentification = value ? (value["Initiation_InstructionIdentification"] ? value["Initiation_InstructionIdentification"] : null) : null;
            privateState.RI_Unstructured = value ? (value["RI_Unstructured"] ? value["RI_Unstructured"] : null) : null;
            privateState.RI_Reference = value ? (value["RI_Reference"] ? value["RI_Reference"] : null) : null;
            privateState.Initiation_EndToEndIdentification = value ? (value["Initiation_EndToEndIdentification"] ? value["Initiation_EndToEndIdentification"] : null) : null;
            privateState.RiskPaymentContextCode = value ? (value["RiskPaymentContextCode"] ? value["RiskPaymentContextCode"] : null) : null;
            privateState.linkSelf = value ? (value["linkSelf"] ? value["linkSelf"] : null) : null;
            privateState.StatusUpdateDateTime = value ? (value["StatusUpdateDateTime"] ? value["StatusUpdateDateTime"] : null) : null;
            privateState.createdDate = value ? (value["createdDate"] ? value["createdDate"] : null) : null;
            privateState.DomesticPaymentId = value ? (value["DomesticPaymentId"] ? value["DomesticPaymentId"] : null) : null;
            privateState.dataStatus = value ? (value["dataStatus"] ? value["dataStatus"] : null) : null;
            privateState.Auth_Token = value ? (value["Auth_Token"] ? value["Auth_Token"] : null) : null;
            privateState.fileType = value ? (value["fileType"] ? value["fileType"] : null) : null;
            privateState.MFAAttributes = value ? (value["MFAAttributes"] ? value["MFAAttributes"] : null) : null;
            privateState.securityKey = value ? (value["securityKey"] ? value["securityKey"] : null) : null;
            privateState.sacMaxResendRequestsAllowed = value ? (value["sacMaxResendRequestsAllowed"] ? value["sacMaxResendRequestsAllowed"] : null) : null;
            privateState.remainingResendAttempts = value ? (value["remainingResendAttempts"] ? value["remainingResendAttempts"] : null) : null;
            privateState.sacCodeLength = value ? (value["sacCodeLength"] ? value["sacCodeLength"] : null) : null;
            privateState.communicationType = value ? (value["communicationType"] ? value["communicationType"] : null) : null;
            privateState.sacPreferenceCriteria = value ? (value["sacPreferenceCriteria"] ? value["sacPreferenceCriteria"] : null) : null;
            privateState.customerCommunication = value ? (value["customerCommunication"] ? value["customerCommunication"] : null) : null;
            privateState.phone = value ? (value["phone"] ? value["phone"] : null) : null;
            privateState.masked = value ? (value["masked"] ? value["masked"] : null) : null;
            privateState.unmasked = value ? (value["unmasked"] ? value["unmasked"] : null) : null;
            privateState.email = value ? (value["email"] ? value["email"] : null) : null;
            privateState.MFAType = value ? (value["MFAType"] ? value["MFAType"] : null) : null;
            privateState.isMFARequired = value ? (value["isMFARequired"] ? value["isMFARequired"] : null) : null;
            privateState.serviceKey = value ? (value["serviceKey"] ? value["serviceKey"] : null) : null;
            privateState.securityQuestions = value ? (value["securityQuestions"] ? value["securityQuestions"] : null) : null;
            privateState.SecurityQuestion_id = value ? (value["SecurityQuestion_id"] ? value["SecurityQuestion_id"] : null) : null;
            privateState.Question = value ? (value["Question"] ? value["Question"] : null) : null;
            privateState.QuestionStatus_id = value ? (value["QuestionStatus_id"] ? value["QuestionStatus_id"] : null) : null;
            privateState.serviceName = value ? (value["serviceName"] ? value["serviceName"] : null) : null;
            privateState.customerAnswer = value ? (value["customerAnswer"] ? value["customerAnswer"] : null) : null;
            privateState.questionId = value ? (value["questionId"] ? value["questionId"] : null) : null;
            privateState.maxFailedAttemptsAllowed = value ? (value["maxFailedAttemptsAllowed"] ? value["maxFailedAttemptsAllowed"] : null) : null;
            privateState.remainingFailedAttempts = value ? (value["remainingFailedAttempts"] ? value["remainingFailedAttempts"] : null) : null;
            privateState.failedAttempts = value ? (value["failedAttempts"] ? value["failedAttempts"] : null) : null;
            privateState.isOTPExpired = value ? (value["isOTPExpired"] ? value["isOTPExpired"] : null) : null;
            privateState.featureActionId = value ? (value["featureActionId"] ? value["featureActionId"] : null) : null;
            privateState.receivedApprovals = value ? (value["receivedApprovals"] ? value["receivedApprovals"] : null) : null;
            privateState.requiredApprovals = value ? (value["requiredApprovals"] ? value["requiredApprovals"] : null) : null;
            privateState.Request_id = value ? (value["Request_id"] ? value["Request_id"] : null) : null;
            privateState.featureName = value ? (value["featureName"] ? value["featureName"] : null) : null;
            privateState.AccountName = value ? (value["AccountName"] ? value["AccountName"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(BBGeneralTransactions);

    //Create new class level validator object
    BaseModel.Validator.call(BBGeneralTransactions);

    var registerValidatorBackup = BBGeneralTransactions.registerValidator;

    BBGeneralTransactions.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(BBGeneralTransactions.isValid(this, propName, val)) {
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
    //For Operation 'getBBGeneralTransactionDetailsByID' with service id 'FetchGeneralTransactionById7292'
     BBGeneralTransactions.getBBGeneralTransactionDetailsByID = function(params, onCompletion){
        return BBGeneralTransactions.customVerb('getBBGeneralTransactionDetailsByID', params, onCompletion);
     };

    //For Operation 'RejectedGenTransactions' with service id 'FetchAllRejectedGeneralTransactions7303'
     BBGeneralTransactions.RejectedGenTransactions = function(params, onCompletion){
        return BBGeneralTransactions.customVerb('RejectedGenTransactions', params, onCompletion);
     };

    //For Operation 'createBBTransaction' with service id 'createBBGeneralTransaction8678'
     BBGeneralTransactions.createBBTransaction = function(params, onCompletion){
        return BBGeneralTransactions.customVerb('createBBTransaction', params, onCompletion);
     };

    var relations = [];

    BBGeneralTransactions.relations = relations;

    BBGeneralTransactions.prototype.isValid = function() {
        return BBGeneralTransactions.isValid(this);
    };

    BBGeneralTransactions.prototype.objModelName = "BBGeneralTransactions";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    BBGeneralTransactions.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("TransactionObjects", "BBGeneralTransactions", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    BBGeneralTransactions.clone = function(objectToClone) {
        var clonedObj = new BBGeneralTransactions();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return BBGeneralTransactions;
});