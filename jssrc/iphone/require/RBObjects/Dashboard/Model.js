/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {
        "object": "Dashboard",
        "objectService": "RBObjects"
    };
    var setterFunctions = {
        accountHolder: function(val, state) {
            context["field"] = "accountHolder";
            context["metadata"] = (objectMetadata ? objectMetadata["accountHolder"] : null);
            state['accountHolder'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        accountID: function(val, state) {
            context["field"] = "accountID";
            context["metadata"] = (objectMetadata ? objectMetadata["accountID"] : null);
            state['accountID'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        accountli: function(val, state) {
            context["field"] = "accountli";
            context["metadata"] = (objectMetadata ? objectMetadata["accountli"] : null);
            state['accountli'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        accountName: function(val, state) {
            context["field"] = "accountName";
            context["metadata"] = (objectMetadata ? objectMetadata["accountName"] : null);
            state['accountName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        accountPreference: function(val, state) {
            context["field"] = "accountPreference";
            context["metadata"] = (objectMetadata ? objectMetadata["accountPreference"] : null);
            state['accountPreference'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        accountType: function(val, state) {
            context["field"] = "accountType";
            context["metadata"] = (objectMetadata ? objectMetadata["accountType"] : null);
            state['accountType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        availableBalance: function(val, state) {
            context["field"] = "availableBalance";
            context["metadata"] = (objectMetadata ? objectMetadata["availableBalance"] : null);
            state['availableBalance'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        availableCredit: function(val, state) {
            context["field"] = "availableCredit";
            context["metadata"] = (objectMetadata ? objectMetadata["availableCredit"] : null);
            state['availableCredit'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        availablePoints: function(val, state) {
            context["field"] = "availablePoints";
            context["metadata"] = (objectMetadata ? objectMetadata["availablePoints"] : null);
            state['availablePoints'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        bankName: function(val, state) {
            context["field"] = "bankName";
            context["metadata"] = (objectMetadata ? objectMetadata["bankName"] : null);
            state['bankName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        bondInterest: function(val, state) {
            context["field"] = "bondInterest";
            context["metadata"] = (objectMetadata ? objectMetadata["bondInterest"] : null);
            state['bondInterest'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        bondInterestLastYear: function(val, state) {
            context["field"] = "bondInterestLastYear";
            context["metadata"] = (objectMetadata ? objectMetadata["bondInterestLastYear"] : null);
            state['bondInterestLastYear'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        bsbNum: function(val, state) {
            context["field"] = "bsbNum";
            context["metadata"] = (objectMetadata ? objectMetadata["bsbNum"] : null);
            state['bsbNum'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        closingDate: function(val, state) {
            context["field"] = "closingDate";
            context["metadata"] = (objectMetadata ? objectMetadata["closingDate"] : null);
            state['closingDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        creditCardNumber: function(val, state) {
            context["field"] = "creditCardNumber";
            context["metadata"] = (objectMetadata ? objectMetadata["creditCardNumber"] : null);
            state['creditCardNumber'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        creditLimit: function(val, state) {
            context["field"] = "creditLimit";
            context["metadata"] = (objectMetadata ? objectMetadata["creditLimit"] : null);
            state['creditLimit'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        currencyCode: function(val, state) {
            context["field"] = "currencyCode";
            context["metadata"] = (objectMetadata ? objectMetadata["currencyCode"] : null);
            state['currencyCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        currentAmountDue: function(val, state) {
            context["field"] = "currentAmountDue";
            context["metadata"] = (objectMetadata ? objectMetadata["currentAmountDue"] : null);
            state['currentAmountDue'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        currentBalance: function(val, state) {
            context["field"] = "currentBalance";
            context["metadata"] = (objectMetadata ? objectMetadata["currentBalance"] : null);
            state['currentBalance'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        deviceID: function(val, state) {
            context["field"] = "deviceID";
            context["metadata"] = (objectMetadata ? objectMetadata["deviceID"] : null);
            state['deviceID'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        dividendLastPaidAmount: function(val, state) {
            context["field"] = "dividendLastPaidAmount";
            context["metadata"] = (objectMetadata ? objectMetadata["dividendLastPaidAmount"] : null);
            state['dividendLastPaidAmount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        dividendLastPaidDate: function(val, state) {
            context["field"] = "dividendLastPaidDate";
            context["metadata"] = (objectMetadata ? objectMetadata["dividendLastPaidDate"] : null);
            state['dividendLastPaidDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        dividendPaidYTD: function(val, state) {
            context["field"] = "dividendPaidYTD";
            context["metadata"] = (objectMetadata ? objectMetadata["dividendPaidYTD"] : null);
            state['dividendPaidYTD'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        dividendRate: function(val, state) {
            context["field"] = "dividendRate";
            context["metadata"] = (objectMetadata ? objectMetadata["dividendRate"] : null);
            state['dividendRate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        dividendYTD: function(val, state) {
            context["field"] = "dividendYTD";
            context["metadata"] = (objectMetadata ? objectMetadata["dividendYTD"] : null);
            state['dividendYTD'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        dueDate: function(val, state) {
            context["field"] = "dueDate";
            context["metadata"] = (objectMetadata ? objectMetadata["dueDate"] : null);
            state['dueDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        errmsg: function(val, state) {
            context["field"] = "errmsg";
            context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
            state['errmsg'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        eStatementEnable: function(val, state) {
            context["field"] = "eStatementEnable";
            context["metadata"] = (objectMetadata ? objectMetadata["eStatementEnable"] : null);
            state['eStatementEnable'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        favouriteStatus: function(val, state) {
            context["field"] = "favouriteStatus";
            context["metadata"] = (objectMetadata ? objectMetadata["favouriteStatus"] : null);
            state['favouriteStatus'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        interestEarned: function(val, state) {
            context["field"] = "interestEarned";
            context["metadata"] = (objectMetadata ? objectMetadata["interestEarned"] : null);
            state['interestEarned'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        interestPaidLastYear: function(val, state) {
            context["field"] = "interestPaidLastYear";
            context["metadata"] = (objectMetadata ? objectMetadata["interestPaidLastYear"] : null);
            state['interestPaidLastYear'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        interestPaidPreviousYTD: function(val, state) {
            context["field"] = "interestPaidPreviousYTD";
            context["metadata"] = (objectMetadata ? objectMetadata["interestPaidPreviousYTD"] : null);
            state['interestPaidPreviousYTD'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        interestPaidYTD: function(val, state) {
            context["field"] = "interestPaidYTD";
            context["metadata"] = (objectMetadata ? objectMetadata["interestPaidYTD"] : null);
            state['interestPaidYTD'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        interestRate: function(val, state) {
            context["field"] = "interestRate";
            context["metadata"] = (objectMetadata ? objectMetadata["interestRate"] : null);
            state['interestRate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isInternationalAccount: function(val, state) {
            context["field"] = "isInternationalAccount";
            context["metadata"] = (objectMetadata ? objectMetadata["isInternationalAccount"] : null);
            state['isInternationalAccount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isPFM: function(val, state) {
            context["field"] = "isPFM";
            context["metadata"] = (objectMetadata ? objectMetadata["isPFM"] : null);
            state['isPFM'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        jointHolders: function(val, state) {
            context["field"] = "jointHolders";
            context["metadata"] = (objectMetadata ? objectMetadata["jointHolders"] : null);
            state['jointHolders'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        lastDividendPaidAmount: function(val, state) {
            context["field"] = "lastDividendPaidAmount";
            context["metadata"] = (objectMetadata ? objectMetadata["lastDividendPaidAmount"] : null);
            state['lastDividendPaidAmount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        lastDividendPaidDate: function(val, state) {
            context["field"] = "lastDividendPaidDate";
            context["metadata"] = (objectMetadata ? objectMetadata["lastDividendPaidDate"] : null);
            state['lastDividendPaidDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        lastPaymentAmount: function(val, state) {
            context["field"] = "lastPaymentAmount";
            context["metadata"] = (objectMetadata ? objectMetadata["lastPaymentAmount"] : null);
            state['lastPaymentAmount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        lastPaymentDate: function(val, state) {
            context["field"] = "lastPaymentDate";
            context["metadata"] = (objectMetadata ? objectMetadata["lastPaymentDate"] : null);
            state['lastPaymentDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        lastStatementBalance: function(val, state) {
            context["field"] = "lastStatementBalance";
            context["metadata"] = (objectMetadata ? objectMetadata["lastStatementBalance"] : null);
            state['lastStatementBalance'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        lateFeesDue: function(val, state) {
            context["field"] = "lateFeesDue";
            context["metadata"] = (objectMetadata ? objectMetadata["lateFeesDue"] : null);
            state['lateFeesDue'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        maturityAmount: function(val, state) {
            context["field"] = "maturityAmount";
            context["metadata"] = (objectMetadata ? objectMetadata["maturityAmount"] : null);
            state['maturityAmount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        maturityDate: function(val, state) {
            context["field"] = "maturityDate";
            context["metadata"] = (objectMetadata ? objectMetadata["maturityDate"] : null);
            state['maturityDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        maturityOption: function(val, state) {
            context["field"] = "maturityOption";
            context["metadata"] = (objectMetadata ? objectMetadata["maturityOption"] : null);
            state['maturityOption'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        minimumDue: function(val, state) {
            context["field"] = "minimumDue";
            context["metadata"] = (objectMetadata ? objectMetadata["minimumDue"] : null);
            state['minimumDue'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        nickName: function(val, state) {
            context["field"] = "nickName";
            context["metadata"] = (objectMetadata ? objectMetadata["nickName"] : null);
            state['nickName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        openingDate: function(val, state) {
            context["field"] = "openingDate";
            context["metadata"] = (objectMetadata ? objectMetadata["openingDate"] : null);
            state['openingDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        originalAmount: function(val, state) {
            context["field"] = "originalAmount";
            context["metadata"] = (objectMetadata ? objectMetadata["originalAmount"] : null);
            state['originalAmount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        outstandingBalance: function(val, state) {
            context["field"] = "outstandingBalance";
            context["metadata"] = (objectMetadata ? objectMetadata["outstandingBalance"] : null);
            state['outstandingBalance'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        paymentDue: function(val, state) {
            context["field"] = "paymentDue";
            context["metadata"] = (objectMetadata ? objectMetadata["paymentDue"] : null);
            state['paymentDue'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        paymentMethod: function(val, state) {
            context["field"] = "paymentMethod";
            context["metadata"] = (objectMetadata ? objectMetadata["paymentMethod"] : null);
            state['paymentMethod'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        paymentTerm: function(val, state) {
            context["field"] = "paymentTerm";
            context["metadata"] = (objectMetadata ? objectMetadata["paymentTerm"] : null);
            state['paymentTerm'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        payoffAmount: function(val, state) {
            context["field"] = "payoffAmount";
            context["metadata"] = (objectMetadata ? objectMetadata["payoffAmount"] : null);
            state['payoffAmount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        payOffCharge: function(val, state) {
            context["field"] = "payOffCharge";
            context["metadata"] = (objectMetadata ? objectMetadata["payOffCharge"] : null);
            state['payOffCharge'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        pendingDeposit: function(val, state) {
            context["field"] = "pendingDeposit";
            context["metadata"] = (objectMetadata ? objectMetadata["pendingDeposit"] : null);
            state['pendingDeposit'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        pendingWithdrawal: function(val, state) {
            context["field"] = "pendingWithdrawal";
            context["metadata"] = (objectMetadata ? objectMetadata["pendingWithdrawal"] : null);
            state['pendingWithdrawal'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        phoneId: function(val, state) {
            context["field"] = "phoneId";
            context["metadata"] = (objectMetadata ? objectMetadata["phoneId"] : null);
            state['phoneId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        previousYearDividend: function(val, state) {
            context["field"] = "previousYearDividend";
            context["metadata"] = (objectMetadata ? objectMetadata["previousYearDividend"] : null);
            state['previousYearDividend'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        previousYearsDividends: function(val, state) {
            context["field"] = "previousYearsDividends";
            context["metadata"] = (objectMetadata ? objectMetadata["previousYearsDividends"] : null);
            state['previousYearsDividends'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        principalBalance: function(val, state) {
            context["field"] = "principalBalance";
            context["metadata"] = (objectMetadata ? objectMetadata["principalBalance"] : null);
            state['principalBalance'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        principalValue: function(val, state) {
            context["field"] = "principalValue";
            context["metadata"] = (objectMetadata ? objectMetadata["principalValue"] : null);
            state['principalValue'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        regularPaymentAmount: function(val, state) {
            context["field"] = "regularPaymentAmount";
            context["metadata"] = (objectMetadata ? objectMetadata["regularPaymentAmount"] : null);
            state['regularPaymentAmount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        routingNumber: function(val, state) {
            context["field"] = "routingNumber";
            context["metadata"] = (objectMetadata ? objectMetadata["routingNumber"] : null);
            state['routingNumber'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        success: function(val, state) {
            context["field"] = "success";
            context["metadata"] = (objectMetadata ? objectMetadata["success"] : null);
            state['success'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        supportBillPay: function(val, state) {
            context["field"] = "supportBillPay";
            context["metadata"] = (objectMetadata ? objectMetadata["supportBillPay"] : null);
            state['supportBillPay'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        supportCardlessCash: function(val, state) {
            context["field"] = "supportCardlessCash";
            context["metadata"] = (objectMetadata ? objectMetadata["supportCardlessCash"] : null);
            state['supportCardlessCash'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        supportDeposit: function(val, state) {
            context["field"] = "supportDeposit";
            context["metadata"] = (objectMetadata ? objectMetadata["supportDeposit"] : null);
            state['supportDeposit'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        supportTransferFrom: function(val, state) {
            context["field"] = "supportTransferFrom";
            context["metadata"] = (objectMetadata ? objectMetadata["supportTransferFrom"] : null);
            state['supportTransferFrom'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        supportTransferTo: function(val, state) {
            context["field"] = "supportTransferTo";
            context["metadata"] = (objectMetadata ? objectMetadata["supportTransferTo"] : null);
            state['supportTransferTo'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        swiftCode: function(val, state) {
            context["field"] = "swiftCode";
            context["metadata"] = (objectMetadata ? objectMetadata["swiftCode"] : null);
            state['swiftCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        totalCreditMonths: function(val, state) {
            context["field"] = "totalCreditMonths";
            context["metadata"] = (objectMetadata ? objectMetadata["totalCreditMonths"] : null);
            state['totalCreditMonths'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        totalDebitsMonth: function(val, state) {
            context["field"] = "totalDebitsMonth";
            context["metadata"] = (objectMetadata ? objectMetadata["totalDebitsMonth"] : null);
            state['totalDebitsMonth'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        transactionLimit: function(val, state) {
            context["field"] = "transactionLimit";
            context["metadata"] = (objectMetadata ? objectMetadata["transactionLimit"] : null);
            state['transactionLimit'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        transferLimit: function(val, state) {
            context["field"] = "transferLimit";
            context["metadata"] = (objectMetadata ? objectMetadata["transferLimit"] : null);
            state['transferLimit'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        unpaidInterest: function(val, state) {
            context["field"] = "unpaidInterest";
            context["metadata"] = (objectMetadata ? objectMetadata["unpaidInterest"] : null);
            state['unpaidInterest'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        userName: function(val, state) {
            context["field"] = "userName";
            context["metadata"] = (objectMetadata ? objectMetadata["userName"] : null);
            state['userName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        email: function(val, state) {
            context["field"] = "email";
            context["metadata"] = (objectMetadata ? objectMetadata["email"] : null);
            state['email'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        jointAccountHolder1: function(val, state) {
            context["field"] = "jointAccountHolder1";
            context["metadata"] = (objectMetadata ? objectMetadata["jointAccountHolder1"] : null);
            state['jointAccountHolder1'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        jointAccountHolder2: function(val, state) {
            context["field"] = "jointAccountHolder2";
            context["metadata"] = (objectMetadata ? objectMetadata["jointAccountHolder2"] : null);
            state['jointAccountHolder2'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        bankAddress: function(val, state) {
            context["field"] = "bankAddress";
            context["metadata"] = (objectMetadata ? objectMetadata["bankAddress"] : null);
            state['bankAddress'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        intermediaryBankName: function(val, state) {
            context["field"] = "intermediaryBankName";
            context["metadata"] = (objectMetadata ? objectMetadata["intermediaryBankName"] : null);
            state['intermediaryBankName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        intermediaryBankAddress: function(val, state) {
            context["field"] = "intermediaryBankAddress";
            context["metadata"] = (objectMetadata ? objectMetadata["intermediaryBankAddress"] : null);
            state['intermediaryBankAddress'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        intermediaryBankSwiftCode: function(val, state) {
            context["field"] = "intermediaryBankSwiftCode";
            context["metadata"] = (objectMetadata ? objectMetadata["intermediaryBankSwiftCode"] : null);
            state['intermediaryBankSwiftCode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        statusDesc: function(val, state) {
            context["field"] = "statusDesc";
            context["metadata"] = (objectMetadata ? objectMetadata["statusDesc"] : null);
            state['statusDesc'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        supportChecks: function(val, state) {
            context["field"] = "supportChecks";
            context["metadata"] = (objectMetadata ? objectMetadata["supportChecks"] : null);
            state['supportChecks'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        accountNumber: function(val, state) {
            context["field"] = "accountNumber";
            context["metadata"] = (objectMetadata ? objectMetadata["accountNumber"] : null);
            state['accountNumber'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        addressId: function(val, state) {
            context["field"] = "addressId";
            context["metadata"] = (objectMetadata ? objectMetadata["addressId"] : null);
            state['addressId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        addressLine1: function(val, state) {
            context["field"] = "addressLine1";
            context["metadata"] = (objectMetadata ? objectMetadata["addressLine1"] : null);
            state['addressLine1'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        addressLine2: function(val, state) {
            context["field"] = "addressLine2";
            context["metadata"] = (objectMetadata ? objectMetadata["addressLine2"] : null);
            state['addressLine2'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        addressType: function(val, state) {
            context["field"] = "addressType";
            context["metadata"] = (objectMetadata ? objectMetadata["addressType"] : null);
            state['addressType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        alertsTurnedOn: function(val, state) {
            context["field"] = "alertsTurnedOn";
            context["metadata"] = (objectMetadata ? objectMetadata["alertsTurnedOn"] : null);
            state['alertsTurnedOn'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        areAccountStatementTermsAccepted: function(val, state) {
            context["field"] = "areAccountStatementTermsAccepted";
            context["metadata"] = (objectMetadata ? objectMetadata["areAccountStatementTermsAccepted"] : null);
            state['areAccountStatementTermsAccepted'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        areDepositTermsAccepted: function(val, state) {
            context["field"] = "areDepositTermsAccepted";
            context["metadata"] = (objectMetadata ? objectMetadata["areDepositTermsAccepted"] : null);
            state['areDepositTermsAccepted'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        cardNumber: function(val, state) {
            context["field"] = "cardNumber";
            context["metadata"] = (objectMetadata ? objectMetadata["cardNumber"] : null);
            state['cardNumber'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        city: function(val, state) {
            context["field"] = "city";
            context["metadata"] = (objectMetadata ? objectMetadata["city"] : null);
            state['city'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        country: function(val, state) {
            context["field"] = "country";
            context["metadata"] = (objectMetadata ? objectMetadata["country"] : null);
            state['country'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        cvv: function(val, state) {
            context["field"] = "cvv";
            context["metadata"] = (objectMetadata ? objectMetadata["cvv"] : null);
            state['cvv'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        dateOfBirth: function(val, state) {
            context["field"] = "dateOfBirth";
            context["metadata"] = (objectMetadata ? objectMetadata["dateOfBirth"] : null);
            state['dateOfBirth'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        default_account_billPay: function(val, state) {
            context["field"] = "default_account_billPay";
            context["metadata"] = (objectMetadata ? objectMetadata["default_account_billPay"] : null);
            state['default_account_billPay'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        default_account_cardless: function(val, state) {
            context["field"] = "default_account_cardless";
            context["metadata"] = (objectMetadata ? objectMetadata["default_account_cardless"] : null);
            state['default_account_cardless'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        default_account_deposit: function(val, state) {
            context["field"] = "default_account_deposit";
            context["metadata"] = (objectMetadata ? objectMetadata["default_account_deposit"] : null);
            state['default_account_deposit'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        default_account_payments: function(val, state) {
            context["field"] = "default_account_payments";
            context["metadata"] = (objectMetadata ? objectMetadata["default_account_payments"] : null);
            state['default_account_payments'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        default_account_transfers: function(val, state) {
            context["field"] = "default_account_transfers";
            context["metadata"] = (objectMetadata ? objectMetadata["default_account_transfers"] : null);
            state['default_account_transfers'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        default_from_account_p2p: function(val, state) {
            context["field"] = "default_from_account_p2p";
            context["metadata"] = (objectMetadata ? objectMetadata["default_from_account_p2p"] : null);
            state['default_from_account_p2p'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        default_to_account_p2p: function(val, state) {
            context["field"] = "default_to_account_p2p";
            context["metadata"] = (objectMetadata ? objectMetadata["default_to_account_p2p"] : null);
            state['default_to_account_p2p'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isEmailEnabled: function(val, state) {
            context["field"] = "isEmailEnabled";
            context["metadata"] = (objectMetadata ? objectMetadata["isEmailEnabled"] : null);
            state['isEmailEnabled'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isPhoneEnabled: function(val, state) {
            context["field"] = "isPhoneEnabled";
            context["metadata"] = (objectMetadata ? objectMetadata["isPhoneEnabled"] : null);
            state['isPhoneEnabled'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isPinSet: function(val, state) {
            context["field"] = "isPinSet";
            context["metadata"] = (objectMetadata ? objectMetadata["isPinSet"] : null);
            state['isPinSet'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isPreferredAddress: function(val, state) {
            context["field"] = "isPreferredAddress";
            context["metadata"] = (objectMetadata ? objectMetadata["isPreferredAddress"] : null);
            state['isPreferredAddress'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        lastlogintime: function(val, state) {
            context["field"] = "lastlogintime";
            context["metadata"] = (objectMetadata ? objectMetadata["lastlogintime"] : null);
            state['lastlogintime'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        oldpassword: function(val, state) {
            context["field"] = "oldpassword";
            context["metadata"] = (objectMetadata ? objectMetadata["oldpassword"] : null);
            state['oldpassword'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        otp: function(val, state) {
            context["field"] = "otp";
            context["metadata"] = (objectMetadata ? objectMetadata["otp"] : null);
            state['otp'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        password: function(val, state) {
            context["field"] = "password";
            context["metadata"] = (objectMetadata ? objectMetadata["password"] : null);
            state['password'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        phone: function(val, state) {
            context["field"] = "phone";
            context["metadata"] = (objectMetadata ? objectMetadata["phone"] : null);
            state['phone'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        pin: function(val, state) {
            context["field"] = "pin";
            context["metadata"] = (objectMetadata ? objectMetadata["pin"] : null);
            state['pin'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        result: function(val, state) {
            context["field"] = "result";
            context["metadata"] = (objectMetadata ? objectMetadata["result"] : null);
            state['result'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        role: function(val, state) {
            context["field"] = "role";
            context["metadata"] = (objectMetadata ? objectMetadata["role"] : null);
            state['role'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        secondaryemail: function(val, state) {
            context["field"] = "secondaryemail";
            context["metadata"] = (objectMetadata ? objectMetadata["secondaryemail"] : null);
            state['secondaryemail'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        secondaryemail2: function(val, state) {
            context["field"] = "secondaryemail2";
            context["metadata"] = (objectMetadata ? objectMetadata["secondaryemail2"] : null);
            state['secondaryemail2'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        secondaryphone: function(val, state) {
            context["field"] = "secondaryphone";
            context["metadata"] = (objectMetadata ? objectMetadata["secondaryphone"] : null);
            state['secondaryphone'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        secondaryphone2: function(val, state) {
            context["field"] = "secondaryphone2";
            context["metadata"] = (objectMetadata ? objectMetadata["secondaryphone2"] : null);
            state['secondaryphone2'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        ssn: function(val, state) {
            context["field"] = "ssn";
            context["metadata"] = (objectMetadata ? objectMetadata["ssn"] : null);
            state['ssn'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        state: function(val, state) {
            context["field"] = "state";
            context["metadata"] = (objectMetadata ? objectMetadata["state"] : null);
            state['state'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        userfirstname: function(val, state) {
            context["field"] = "userfirstname";
            context["metadata"] = (objectMetadata ? objectMetadata["userfirstname"] : null);
            state['userfirstname'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        userId: function(val, state) {
            context["field"] = "userId";
            context["metadata"] = (objectMetadata ? objectMetadata["userId"] : null);
            state['userId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        userImage: function(val, state) {
            context["field"] = "userImage";
            context["metadata"] = (objectMetadata ? objectMetadata["userImage"] : null);
            state['userImage'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        userlastname: function(val, state) {
            context["field"] = "userlastname";
            context["metadata"] = (objectMetadata ? objectMetadata["userlastname"] : null);
            state['userlastname'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        zipcode: function(val, state) {
            context["field"] = "zipcode";
            context["metadata"] = (objectMetadata ? objectMetadata["zipcode"] : null);
            state['zipcode'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        rating: function(val, state) {
            context["field"] = "rating";
            context["metadata"] = (objectMetadata ? objectMetadata["rating"] : null);
            state['rating'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        featureRequest: function(val, state) {
            context["field"] = "featureRequest";
            context["metadata"] = (objectMetadata ? objectMetadata["featureRequest"] : null);
            state['featureRequest'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        description: function(val, state) {
            context["field"] = "description";
            context["metadata"] = (objectMetadata ? objectMetadata["description"] : null);
            state['description'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        default_account_wire: function(val, state) {
            context["field"] = "default_account_wire";
            context["metadata"] = (objectMetadata ? objectMetadata["default_account_wire"] : null);
            state['default_account_wire'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isWireTransferActivated: function(val, state) {
            context["field"] = "isWireTransferActivated";
            context["metadata"] = (objectMetadata ? objectMetadata["isWireTransferActivated"] : null);
            state['isWireTransferActivated'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isWireTransferEligible: function(val, state) {
            context["field"] = "isWireTransferEligible";
            context["metadata"] = (objectMetadata ? objectMetadata["isWireTransferEligible"] : null);
            state['isWireTransferEligible'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        countryType: function(val, state) {
            context["field"] = "countryType";
            context["metadata"] = (objectMetadata ? objectMetadata["countryType"] : null);
            state['countryType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        error: function(val, state) {
            context["field"] = "error";
            context["metadata"] = (objectMetadata ? objectMetadata["error"] : null);
            state['error'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        extension: function(val, state) {
            context["field"] = "extension";
            context["metadata"] = (objectMetadata ? objectMetadata["extension"] : null);
            state['extension'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        id: function(val, state) {
            context["field"] = "id";
            context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
            state['id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isPrimary: function(val, state) {
            context["field"] = "isPrimary";
            context["metadata"] = (objectMetadata ? objectMetadata["isPrimary"] : null);
            state['isPrimary'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        phoneNumber: function(val, state) {
            context["field"] = "phoneNumber";
            context["metadata"] = (objectMetadata ? objectMetadata["phoneNumber"] : null);
            state['phoneNumber'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        receivePromotions: function(val, state) {
            context["field"] = "receivePromotions";
            context["metadata"] = (objectMetadata ? objectMetadata["receivePromotions"] : null);
            state['receivePromotions'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        type: function(val, state) {
            context["field"] = "type";
            context["metadata"] = (objectMetadata ? objectMetadata["type"] : null);
            state['type'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };
    //Create the Model Class
    function Dashboard(defaultValues) {
        var privateState = {};
        context["field"] = "accountHolder";
        context["metadata"] = (objectMetadata ? objectMetadata["accountHolder"] : null);
        privateState.accountHolder = defaultValues ? (defaultValues["accountHolder"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["accountHolder"], context) : null) : null;
        context["field"] = "accountID";
        context["metadata"] = (objectMetadata ? objectMetadata["accountID"] : null);
        privateState.accountID = defaultValues ? (defaultValues["accountID"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["accountID"], context) : null) : null;
        context["field"] = "accountli";
        context["metadata"] = (objectMetadata ? objectMetadata["accountli"] : null);
        privateState.accountli = defaultValues ? (defaultValues["accountli"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["accountli"], context) : null) : null;
        context["field"] = "accountName";
        context["metadata"] = (objectMetadata ? objectMetadata["accountName"] : null);
        privateState.accountName = defaultValues ? (defaultValues["accountName"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["accountName"], context) : null) : null;
        context["field"] = "accountPreference";
        context["metadata"] = (objectMetadata ? objectMetadata["accountPreference"] : null);
        privateState.accountPreference = defaultValues ? (defaultValues["accountPreference"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["accountPreference"], context) : null) : null;
        context["field"] = "accountType";
        context["metadata"] = (objectMetadata ? objectMetadata["accountType"] : null);
        privateState.accountType = defaultValues ? (defaultValues["accountType"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["accountType"], context) : null) : null;
        context["field"] = "availableBalance";
        context["metadata"] = (objectMetadata ? objectMetadata["availableBalance"] : null);
        privateState.availableBalance = defaultValues ? (defaultValues["availableBalance"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["availableBalance"], context) : null) : null;
        context["field"] = "availableCredit";
        context["metadata"] = (objectMetadata ? objectMetadata["availableCredit"] : null);
        privateState.availableCredit = defaultValues ? (defaultValues["availableCredit"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["availableCredit"], context) : null) : null;
        context["field"] = "availablePoints";
        context["metadata"] = (objectMetadata ? objectMetadata["availablePoints"] : null);
        privateState.availablePoints = defaultValues ? (defaultValues["availablePoints"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["availablePoints"], context) : null) : null;
        context["field"] = "bankName";
        context["metadata"] = (objectMetadata ? objectMetadata["bankName"] : null);
        privateState.bankName = defaultValues ? (defaultValues["bankName"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["bankName"], context) : null) : null;
        context["field"] = "bondInterest";
        context["metadata"] = (objectMetadata ? objectMetadata["bondInterest"] : null);
        privateState.bondInterest = defaultValues ? (defaultValues["bondInterest"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["bondInterest"], context) : null) : null;
        context["field"] = "bondInterestLastYear";
        context["metadata"] = (objectMetadata ? objectMetadata["bondInterestLastYear"] : null);
        privateState.bondInterestLastYear = defaultValues ? (defaultValues["bondInterestLastYear"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["bondInterestLastYear"], context) : null) : null;
        context["field"] = "bsbNum";
        context["metadata"] = (objectMetadata ? objectMetadata["bsbNum"] : null);
        privateState.bsbNum = defaultValues ? (defaultValues["bsbNum"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["bsbNum"], context) : null) : null;
        context["field"] = "closingDate";
        context["metadata"] = (objectMetadata ? objectMetadata["closingDate"] : null);
        privateState.closingDate = defaultValues ? (defaultValues["closingDate"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["closingDate"], context) : null) : null;
        context["field"] = "creditCardNumber";
        context["metadata"] = (objectMetadata ? objectMetadata["creditCardNumber"] : null);
        privateState.creditCardNumber = defaultValues ? (defaultValues["creditCardNumber"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["creditCardNumber"], context) : null) : null;
        context["field"] = "creditLimit";
        context["metadata"] = (objectMetadata ? objectMetadata["creditLimit"] : null);
        privateState.creditLimit = defaultValues ? (defaultValues["creditLimit"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["creditLimit"], context) : null) : null;
        context["field"] = "currencyCode";
        context["metadata"] = (objectMetadata ? objectMetadata["currencyCode"] : null);
        privateState.currencyCode = defaultValues ? (defaultValues["currencyCode"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["currencyCode"], context) : null) : null;
        context["field"] = "currentAmountDue";
        context["metadata"] = (objectMetadata ? objectMetadata["currentAmountDue"] : null);
        privateState.currentAmountDue = defaultValues ? (defaultValues["currentAmountDue"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["currentAmountDue"], context) : null) : null;
        context["field"] = "currentBalance";
        context["metadata"] = (objectMetadata ? objectMetadata["currentBalance"] : null);
        privateState.currentBalance = defaultValues ? (defaultValues["currentBalance"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["currentBalance"], context) : null) : null;
        context["field"] = "deviceID";
        context["metadata"] = (objectMetadata ? objectMetadata["deviceID"] : null);
        privateState.deviceID = defaultValues ? (defaultValues["deviceID"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["deviceID"], context) : null) : null;
        context["field"] = "dividendLastPaidAmount";
        context["metadata"] = (objectMetadata ? objectMetadata["dividendLastPaidAmount"] : null);
        privateState.dividendLastPaidAmount = defaultValues ? (defaultValues["dividendLastPaidAmount"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["dividendLastPaidAmount"], context) : null) : null;
        context["field"] = "dividendLastPaidDate";
        context["metadata"] = (objectMetadata ? objectMetadata["dividendLastPaidDate"] : null);
        privateState.dividendLastPaidDate = defaultValues ? (defaultValues["dividendLastPaidDate"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["dividendLastPaidDate"], context) : null) : null;
        context["field"] = "dividendPaidYTD";
        context["metadata"] = (objectMetadata ? objectMetadata["dividendPaidYTD"] : null);
        privateState.dividendPaidYTD = defaultValues ? (defaultValues["dividendPaidYTD"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["dividendPaidYTD"], context) : null) : null;
        context["field"] = "dividendRate";
        context["metadata"] = (objectMetadata ? objectMetadata["dividendRate"] : null);
        privateState.dividendRate = defaultValues ? (defaultValues["dividendRate"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["dividendRate"], context) : null) : null;
        context["field"] = "dividendYTD";
        context["metadata"] = (objectMetadata ? objectMetadata["dividendYTD"] : null);
        privateState.dividendYTD = defaultValues ? (defaultValues["dividendYTD"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["dividendYTD"], context) : null) : null;
        context["field"] = "dueDate";
        context["metadata"] = (objectMetadata ? objectMetadata["dueDate"] : null);
        privateState.dueDate = defaultValues ? (defaultValues["dueDate"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["dueDate"], context) : null) : null;
        context["field"] = "errmsg";
        context["metadata"] = (objectMetadata ? objectMetadata["errmsg"] : null);
        privateState.errmsg = defaultValues ? (defaultValues["errmsg"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["errmsg"], context) : null) : null;
        context["field"] = "eStatementEnable";
        context["metadata"] = (objectMetadata ? objectMetadata["eStatementEnable"] : null);
        privateState.eStatementEnable = defaultValues ? (defaultValues["eStatementEnable"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["eStatementEnable"], context) : null) : null;
        context["field"] = "favouriteStatus";
        context["metadata"] = (objectMetadata ? objectMetadata["favouriteStatus"] : null);
        privateState.favouriteStatus = defaultValues ? (defaultValues["favouriteStatus"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["favouriteStatus"], context) : null) : null;
        context["field"] = "interestEarned";
        context["metadata"] = (objectMetadata ? objectMetadata["interestEarned"] : null);
        privateState.interestEarned = defaultValues ? (defaultValues["interestEarned"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["interestEarned"], context) : null) : null;
        context["field"] = "interestPaidLastYear";
        context["metadata"] = (objectMetadata ? objectMetadata["interestPaidLastYear"] : null);
        privateState.interestPaidLastYear = defaultValues ? (defaultValues["interestPaidLastYear"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["interestPaidLastYear"], context) : null) : null;
        context["field"] = "interestPaidPreviousYTD";
        context["metadata"] = (objectMetadata ? objectMetadata["interestPaidPreviousYTD"] : null);
        privateState.interestPaidPreviousYTD = defaultValues ? (defaultValues["interestPaidPreviousYTD"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["interestPaidPreviousYTD"], context) : null) : null;
        context["field"] = "interestPaidYTD";
        context["metadata"] = (objectMetadata ? objectMetadata["interestPaidYTD"] : null);
        privateState.interestPaidYTD = defaultValues ? (defaultValues["interestPaidYTD"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["interestPaidYTD"], context) : null) : null;
        context["field"] = "interestRate";
        context["metadata"] = (objectMetadata ? objectMetadata["interestRate"] : null);
        privateState.interestRate = defaultValues ? (defaultValues["interestRate"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["interestRate"], context) : null) : null;
        context["field"] = "isInternationalAccount";
        context["metadata"] = (objectMetadata ? objectMetadata["isInternationalAccount"] : null);
        privateState.isInternationalAccount = defaultValues ? (defaultValues["isInternationalAccount"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isInternationalAccount"], context) : null) : null;
        context["field"] = "isPFM";
        context["metadata"] = (objectMetadata ? objectMetadata["isPFM"] : null);
        privateState.isPFM = defaultValues ? (defaultValues["isPFM"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isPFM"], context) : null) : null;
        context["field"] = "jointHolders";
        context["metadata"] = (objectMetadata ? objectMetadata["jointHolders"] : null);
        privateState.jointHolders = defaultValues ? (defaultValues["jointHolders"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["jointHolders"], context) : null) : null;
        context["field"] = "lastDividendPaidAmount";
        context["metadata"] = (objectMetadata ? objectMetadata["lastDividendPaidAmount"] : null);
        privateState.lastDividendPaidAmount = defaultValues ? (defaultValues["lastDividendPaidAmount"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["lastDividendPaidAmount"], context) : null) : null;
        context["field"] = "lastDividendPaidDate";
        context["metadata"] = (objectMetadata ? objectMetadata["lastDividendPaidDate"] : null);
        privateState.lastDividendPaidDate = defaultValues ? (defaultValues["lastDividendPaidDate"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["lastDividendPaidDate"], context) : null) : null;
        context["field"] = "lastPaymentAmount";
        context["metadata"] = (objectMetadata ? objectMetadata["lastPaymentAmount"] : null);
        privateState.lastPaymentAmount = defaultValues ? (defaultValues["lastPaymentAmount"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["lastPaymentAmount"], context) : null) : null;
        context["field"] = "lastPaymentDate";
        context["metadata"] = (objectMetadata ? objectMetadata["lastPaymentDate"] : null);
        privateState.lastPaymentDate = defaultValues ? (defaultValues["lastPaymentDate"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["lastPaymentDate"], context) : null) : null;
        context["field"] = "lastStatementBalance";
        context["metadata"] = (objectMetadata ? objectMetadata["lastStatementBalance"] : null);
        privateState.lastStatementBalance = defaultValues ? (defaultValues["lastStatementBalance"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["lastStatementBalance"], context) : null) : null;
        context["field"] = "lateFeesDue";
        context["metadata"] = (objectMetadata ? objectMetadata["lateFeesDue"] : null);
        privateState.lateFeesDue = defaultValues ? (defaultValues["lateFeesDue"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["lateFeesDue"], context) : null) : null;
        context["field"] = "maturityAmount";
        context["metadata"] = (objectMetadata ? objectMetadata["maturityAmount"] : null);
        privateState.maturityAmount = defaultValues ? (defaultValues["maturityAmount"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["maturityAmount"], context) : null) : null;
        context["field"] = "maturityDate";
        context["metadata"] = (objectMetadata ? objectMetadata["maturityDate"] : null);
        privateState.maturityDate = defaultValues ? (defaultValues["maturityDate"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["maturityDate"], context) : null) : null;
        context["field"] = "maturityOption";
        context["metadata"] = (objectMetadata ? objectMetadata["maturityOption"] : null);
        privateState.maturityOption = defaultValues ? (defaultValues["maturityOption"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["maturityOption"], context) : null) : null;
        context["field"] = "minimumDue";
        context["metadata"] = (objectMetadata ? objectMetadata["minimumDue"] : null);
        privateState.minimumDue = defaultValues ? (defaultValues["minimumDue"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["minimumDue"], context) : null) : null;
        context["field"] = "nickName";
        context["metadata"] = (objectMetadata ? objectMetadata["nickName"] : null);
        privateState.nickName = defaultValues ? (defaultValues["nickName"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["nickName"], context) : null) : null;
        context["field"] = "openingDate";
        context["metadata"] = (objectMetadata ? objectMetadata["openingDate"] : null);
        privateState.openingDate = defaultValues ? (defaultValues["openingDate"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["openingDate"], context) : null) : null;
        context["field"] = "originalAmount";
        context["metadata"] = (objectMetadata ? objectMetadata["originalAmount"] : null);
        privateState.originalAmount = defaultValues ? (defaultValues["originalAmount"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["originalAmount"], context) : null) : null;
        context["field"] = "outstandingBalance";
        context["metadata"] = (objectMetadata ? objectMetadata["outstandingBalance"] : null);
        privateState.outstandingBalance = defaultValues ? (defaultValues["outstandingBalance"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["outstandingBalance"], context) : null) : null;
        context["field"] = "paymentDue";
        context["metadata"] = (objectMetadata ? objectMetadata["paymentDue"] : null);
        privateState.paymentDue = defaultValues ? (defaultValues["paymentDue"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["paymentDue"], context) : null) : null;
        context["field"] = "paymentMethod";
        context["metadata"] = (objectMetadata ? objectMetadata["paymentMethod"] : null);
        privateState.paymentMethod = defaultValues ? (defaultValues["paymentMethod"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["paymentMethod"], context) : null) : null;
        context["field"] = "paymentTerm";
        context["metadata"] = (objectMetadata ? objectMetadata["paymentTerm"] : null);
        privateState.paymentTerm = defaultValues ? (defaultValues["paymentTerm"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["paymentTerm"], context) : null) : null;
        context["field"] = "payoffAmount";
        context["metadata"] = (objectMetadata ? objectMetadata["payoffAmount"] : null);
        privateState.payoffAmount = defaultValues ? (defaultValues["payoffAmount"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["payoffAmount"], context) : null) : null;
        context["field"] = "payOffCharge";
        context["metadata"] = (objectMetadata ? objectMetadata["payOffCharge"] : null);
        privateState.payOffCharge = defaultValues ? (defaultValues["payOffCharge"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["payOffCharge"], context) : null) : null;
        context["field"] = "pendingDeposit";
        context["metadata"] = (objectMetadata ? objectMetadata["pendingDeposit"] : null);
        privateState.pendingDeposit = defaultValues ? (defaultValues["pendingDeposit"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["pendingDeposit"], context) : null) : null;
        context["field"] = "pendingWithdrawal";
        context["metadata"] = (objectMetadata ? objectMetadata["pendingWithdrawal"] : null);
        privateState.pendingWithdrawal = defaultValues ? (defaultValues["pendingWithdrawal"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["pendingWithdrawal"], context) : null) : null;
        context["field"] = "phoneId";
        context["metadata"] = (objectMetadata ? objectMetadata["phoneId"] : null);
        privateState.phoneId = defaultValues ? (defaultValues["phoneId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["phoneId"], context) : null) : null;
        context["field"] = "previousYearDividend";
        context["metadata"] = (objectMetadata ? objectMetadata["previousYearDividend"] : null);
        privateState.previousYearDividend = defaultValues ? (defaultValues["previousYearDividend"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["previousYearDividend"], context) : null) : null;
        context["field"] = "previousYearsDividends";
        context["metadata"] = (objectMetadata ? objectMetadata["previousYearsDividends"] : null);
        privateState.previousYearsDividends = defaultValues ? (defaultValues["previousYearsDividends"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["previousYearsDividends"], context) : null) : null;
        context["field"] = "principalBalance";
        context["metadata"] = (objectMetadata ? objectMetadata["principalBalance"] : null);
        privateState.principalBalance = defaultValues ? (defaultValues["principalBalance"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["principalBalance"], context) : null) : null;
        context["field"] = "principalValue";
        context["metadata"] = (objectMetadata ? objectMetadata["principalValue"] : null);
        privateState.principalValue = defaultValues ? (defaultValues["principalValue"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["principalValue"], context) : null) : null;
        context["field"] = "regularPaymentAmount";
        context["metadata"] = (objectMetadata ? objectMetadata["regularPaymentAmount"] : null);
        privateState.regularPaymentAmount = defaultValues ? (defaultValues["regularPaymentAmount"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["regularPaymentAmount"], context) : null) : null;
        context["field"] = "routingNumber";
        context["metadata"] = (objectMetadata ? objectMetadata["routingNumber"] : null);
        privateState.routingNumber = defaultValues ? (defaultValues["routingNumber"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["routingNumber"], context) : null) : null;
        context["field"] = "success";
        context["metadata"] = (objectMetadata ? objectMetadata["success"] : null);
        privateState.success = defaultValues ? (defaultValues["success"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["success"], context) : null) : null;
        context["field"] = "supportBillPay";
        context["metadata"] = (objectMetadata ? objectMetadata["supportBillPay"] : null);
        privateState.supportBillPay = defaultValues ? (defaultValues["supportBillPay"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["supportBillPay"], context) : null) : null;
        context["field"] = "supportCardlessCash";
        context["metadata"] = (objectMetadata ? objectMetadata["supportCardlessCash"] : null);
        privateState.supportCardlessCash = defaultValues ? (defaultValues["supportCardlessCash"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["supportCardlessCash"], context) : null) : null;
        context["field"] = "supportDeposit";
        context["metadata"] = (objectMetadata ? objectMetadata["supportDeposit"] : null);
        privateState.supportDeposit = defaultValues ? (defaultValues["supportDeposit"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["supportDeposit"], context) : null) : null;
        context["field"] = "supportTransferFrom";
        context["metadata"] = (objectMetadata ? objectMetadata["supportTransferFrom"] : null);
        privateState.supportTransferFrom = defaultValues ? (defaultValues["supportTransferFrom"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["supportTransferFrom"], context) : null) : null;
        context["field"] = "supportTransferTo";
        context["metadata"] = (objectMetadata ? objectMetadata["supportTransferTo"] : null);
        privateState.supportTransferTo = defaultValues ? (defaultValues["supportTransferTo"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["supportTransferTo"], context) : null) : null;
        context["field"] = "swiftCode";
        context["metadata"] = (objectMetadata ? objectMetadata["swiftCode"] : null);
        privateState.swiftCode = defaultValues ? (defaultValues["swiftCode"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["swiftCode"], context) : null) : null;
        context["field"] = "totalCreditMonths";
        context["metadata"] = (objectMetadata ? objectMetadata["totalCreditMonths"] : null);
        privateState.totalCreditMonths = defaultValues ? (defaultValues["totalCreditMonths"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["totalCreditMonths"], context) : null) : null;
        context["field"] = "totalDebitsMonth";
        context["metadata"] = (objectMetadata ? objectMetadata["totalDebitsMonth"] : null);
        privateState.totalDebitsMonth = defaultValues ? (defaultValues["totalDebitsMonth"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["totalDebitsMonth"], context) : null) : null;
        context["field"] = "transactionLimit";
        context["metadata"] = (objectMetadata ? objectMetadata["transactionLimit"] : null);
        privateState.transactionLimit = defaultValues ? (defaultValues["transactionLimit"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["transactionLimit"], context) : null) : null;
        context["field"] = "transferLimit";
        context["metadata"] = (objectMetadata ? objectMetadata["transferLimit"] : null);
        privateState.transferLimit = defaultValues ? (defaultValues["transferLimit"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["transferLimit"], context) : null) : null;
        context["field"] = "unpaidInterest";
        context["metadata"] = (objectMetadata ? objectMetadata["unpaidInterest"] : null);
        privateState.unpaidInterest = defaultValues ? (defaultValues["unpaidInterest"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["unpaidInterest"], context) : null) : null;
        context["field"] = "userName";
        context["metadata"] = (objectMetadata ? objectMetadata["userName"] : null);
        privateState.userName = defaultValues ? (defaultValues["userName"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["userName"], context) : null) : null;
        context["field"] = "email";
        context["metadata"] = (objectMetadata ? objectMetadata["email"] : null);
        privateState.email = defaultValues ? (defaultValues["email"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["email"], context) : null) : null;
        context["field"] = "jointAccountHolder1";
        context["metadata"] = (objectMetadata ? objectMetadata["jointAccountHolder1"] : null);
        privateState.jointAccountHolder1 = defaultValues ? (defaultValues["jointAccountHolder1"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["jointAccountHolder1"], context) : null) : null;
        context["field"] = "jointAccountHolder2";
        context["metadata"] = (objectMetadata ? objectMetadata["jointAccountHolder2"] : null);
        privateState.jointAccountHolder2 = defaultValues ? (defaultValues["jointAccountHolder2"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["jointAccountHolder2"], context) : null) : null;
        context["field"] = "bankAddress";
        context["metadata"] = (objectMetadata ? objectMetadata["bankAddress"] : null);
        privateState.bankAddress = defaultValues ? (defaultValues["bankAddress"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["bankAddress"], context) : null) : null;
        context["field"] = "intermediaryBankName";
        context["metadata"] = (objectMetadata ? objectMetadata["intermediaryBankName"] : null);
        privateState.intermediaryBankName = defaultValues ? (defaultValues["intermediaryBankName"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["intermediaryBankName"], context) : null) : null;
        context["field"] = "intermediaryBankAddress";
        context["metadata"] = (objectMetadata ? objectMetadata["intermediaryBankAddress"] : null);
        privateState.intermediaryBankAddress = defaultValues ? (defaultValues["intermediaryBankAddress"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["intermediaryBankAddress"], context) : null) : null;
        context["field"] = "intermediaryBankSwiftCode";
        context["metadata"] = (objectMetadata ? objectMetadata["intermediaryBankSwiftCode"] : null);
        privateState.intermediaryBankSwiftCode = defaultValues ? (defaultValues["intermediaryBankSwiftCode"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["intermediaryBankSwiftCode"], context) : null) : null;
        context["field"] = "statusDesc";
        context["metadata"] = (objectMetadata ? objectMetadata["statusDesc"] : null);
        privateState.statusDesc = defaultValues ? (defaultValues["statusDesc"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["statusDesc"], context) : null) : null;
        context["field"] = "supportChecks";
        context["metadata"] = (objectMetadata ? objectMetadata["supportChecks"] : null);
        privateState.supportChecks = defaultValues ? (defaultValues["supportChecks"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["supportChecks"], context) : null) : null;
        context["field"] = "accountNumber";
        context["metadata"] = (objectMetadata ? objectMetadata["accountNumber"] : null);
        privateState.accountNumber = defaultValues ? (defaultValues["accountNumber"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["accountNumber"], context) : null) : null;
        context["field"] = "addressId";
        context["metadata"] = (objectMetadata ? objectMetadata["addressId"] : null);
        privateState.addressId = defaultValues ? (defaultValues["addressId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["addressId"], context) : null) : null;
        context["field"] = "addressLine1";
        context["metadata"] = (objectMetadata ? objectMetadata["addressLine1"] : null);
        privateState.addressLine1 = defaultValues ? (defaultValues["addressLine1"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["addressLine1"], context) : null) : null;
        context["field"] = "addressLine2";
        context["metadata"] = (objectMetadata ? objectMetadata["addressLine2"] : null);
        privateState.addressLine2 = defaultValues ? (defaultValues["addressLine2"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["addressLine2"], context) : null) : null;
        context["field"] = "addressType";
        context["metadata"] = (objectMetadata ? objectMetadata["addressType"] : null);
        privateState.addressType = defaultValues ? (defaultValues["addressType"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["addressType"], context) : null) : null;
        context["field"] = "alertsTurnedOn";
        context["metadata"] = (objectMetadata ? objectMetadata["alertsTurnedOn"] : null);
        privateState.alertsTurnedOn = defaultValues ? (defaultValues["alertsTurnedOn"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["alertsTurnedOn"], context) : null) : null;
        context["field"] = "areAccountStatementTermsAccepted";
        context["metadata"] = (objectMetadata ? objectMetadata["areAccountStatementTermsAccepted"] : null);
        privateState.areAccountStatementTermsAccepted = defaultValues ? (defaultValues["areAccountStatementTermsAccepted"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["areAccountStatementTermsAccepted"], context) : null) : null;
        context["field"] = "areDepositTermsAccepted";
        context["metadata"] = (objectMetadata ? objectMetadata["areDepositTermsAccepted"] : null);
        privateState.areDepositTermsAccepted = defaultValues ? (defaultValues["areDepositTermsAccepted"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["areDepositTermsAccepted"], context) : null) : null;
        context["field"] = "cardNumber";
        context["metadata"] = (objectMetadata ? objectMetadata["cardNumber"] : null);
        privateState.cardNumber = defaultValues ? (defaultValues["cardNumber"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["cardNumber"], context) : null) : null;
        context["field"] = "city";
        context["metadata"] = (objectMetadata ? objectMetadata["city"] : null);
        privateState.city = defaultValues ? (defaultValues["city"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["city"], context) : null) : null;
        context["field"] = "country";
        context["metadata"] = (objectMetadata ? objectMetadata["country"] : null);
        privateState.country = defaultValues ? (defaultValues["country"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["country"], context) : null) : null;
        context["field"] = "cvv";
        context["metadata"] = (objectMetadata ? objectMetadata["cvv"] : null);
        privateState.cvv = defaultValues ? (defaultValues["cvv"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["cvv"], context) : null) : null;
        context["field"] = "dateOfBirth";
        context["metadata"] = (objectMetadata ? objectMetadata["dateOfBirth"] : null);
        privateState.dateOfBirth = defaultValues ? (defaultValues["dateOfBirth"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["dateOfBirth"], context) : null) : null;
        context["field"] = "default_account_billPay";
        context["metadata"] = (objectMetadata ? objectMetadata["default_account_billPay"] : null);
        privateState.default_account_billPay = defaultValues ? (defaultValues["default_account_billPay"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["default_account_billPay"], context) : null) : null;
        context["field"] = "default_account_cardless";
        context["metadata"] = (objectMetadata ? objectMetadata["default_account_cardless"] : null);
        privateState.default_account_cardless = defaultValues ? (defaultValues["default_account_cardless"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["default_account_cardless"], context) : null) : null;
        context["field"] = "default_account_deposit";
        context["metadata"] = (objectMetadata ? objectMetadata["default_account_deposit"] : null);
        privateState.default_account_deposit = defaultValues ? (defaultValues["default_account_deposit"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["default_account_deposit"], context) : null) : null;
        context["field"] = "default_account_payments";
        context["metadata"] = (objectMetadata ? objectMetadata["default_account_payments"] : null);
        privateState.default_account_payments = defaultValues ? (defaultValues["default_account_payments"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["default_account_payments"], context) : null) : null;
        context["field"] = "default_account_transfers";
        context["metadata"] = (objectMetadata ? objectMetadata["default_account_transfers"] : null);
        privateState.default_account_transfers = defaultValues ? (defaultValues["default_account_transfers"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["default_account_transfers"], context) : null) : null;
        context["field"] = "default_from_account_p2p";
        context["metadata"] = (objectMetadata ? objectMetadata["default_from_account_p2p"] : null);
        privateState.default_from_account_p2p = defaultValues ? (defaultValues["default_from_account_p2p"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["default_from_account_p2p"], context) : null) : null;
        context["field"] = "default_to_account_p2p";
        context["metadata"] = (objectMetadata ? objectMetadata["default_to_account_p2p"] : null);
        privateState.default_to_account_p2p = defaultValues ? (defaultValues["default_to_account_p2p"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["default_to_account_p2p"], context) : null) : null;
        context["field"] = "isEmailEnabled";
        context["metadata"] = (objectMetadata ? objectMetadata["isEmailEnabled"] : null);
        privateState.isEmailEnabled = defaultValues ? (defaultValues["isEmailEnabled"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isEmailEnabled"], context) : null) : null;
        context["field"] = "isPhoneEnabled";
        context["metadata"] = (objectMetadata ? objectMetadata["isPhoneEnabled"] : null);
        privateState.isPhoneEnabled = defaultValues ? (defaultValues["isPhoneEnabled"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isPhoneEnabled"], context) : null) : null;
        context["field"] = "isPinSet";
        context["metadata"] = (objectMetadata ? objectMetadata["isPinSet"] : null);
        privateState.isPinSet = defaultValues ? (defaultValues["isPinSet"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isPinSet"], context) : null) : null;
        context["field"] = "isPreferredAddress";
        context["metadata"] = (objectMetadata ? objectMetadata["isPreferredAddress"] : null);
        privateState.isPreferredAddress = defaultValues ? (defaultValues["isPreferredAddress"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isPreferredAddress"], context) : null) : null;
        context["field"] = "lastlogintime";
        context["metadata"] = (objectMetadata ? objectMetadata["lastlogintime"] : null);
        privateState.lastlogintime = defaultValues ? (defaultValues["lastlogintime"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["lastlogintime"], context) : null) : null;
        context["field"] = "oldpassword";
        context["metadata"] = (objectMetadata ? objectMetadata["oldpassword"] : null);
        privateState.oldpassword = defaultValues ? (defaultValues["oldpassword"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["oldpassword"], context) : null) : null;
        context["field"] = "otp";
        context["metadata"] = (objectMetadata ? objectMetadata["otp"] : null);
        privateState.otp = defaultValues ? (defaultValues["otp"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["otp"], context) : null) : null;
        context["field"] = "password";
        context["metadata"] = (objectMetadata ? objectMetadata["password"] : null);
        privateState.password = defaultValues ? (defaultValues["password"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["password"], context) : null) : null;
        context["field"] = "phone";
        context["metadata"] = (objectMetadata ? objectMetadata["phone"] : null);
        privateState.phone = defaultValues ? (defaultValues["phone"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["phone"], context) : null) : null;
        context["field"] = "pin";
        context["metadata"] = (objectMetadata ? objectMetadata["pin"] : null);
        privateState.pin = defaultValues ? (defaultValues["pin"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["pin"], context) : null) : null;
        context["field"] = "result";
        context["metadata"] = (objectMetadata ? objectMetadata["result"] : null);
        privateState.result = defaultValues ? (defaultValues["result"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["result"], context) : null) : null;
        context["field"] = "role";
        context["metadata"] = (objectMetadata ? objectMetadata["role"] : null);
        privateState.role = defaultValues ? (defaultValues["role"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["role"], context) : null) : null;
        context["field"] = "secondaryemail";
        context["metadata"] = (objectMetadata ? objectMetadata["secondaryemail"] : null);
        privateState.secondaryemail = defaultValues ? (defaultValues["secondaryemail"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["secondaryemail"], context) : null) : null;
        context["field"] = "secondaryemail2";
        context["metadata"] = (objectMetadata ? objectMetadata["secondaryemail2"] : null);
        privateState.secondaryemail2 = defaultValues ? (defaultValues["secondaryemail2"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["secondaryemail2"], context) : null) : null;
        context["field"] = "secondaryphone";
        context["metadata"] = (objectMetadata ? objectMetadata["secondaryphone"] : null);
        privateState.secondaryphone = defaultValues ? (defaultValues["secondaryphone"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["secondaryphone"], context) : null) : null;
        context["field"] = "secondaryphone2";
        context["metadata"] = (objectMetadata ? objectMetadata["secondaryphone2"] : null);
        privateState.secondaryphone2 = defaultValues ? (defaultValues["secondaryphone2"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["secondaryphone2"], context) : null) : null;
        context["field"] = "ssn";
        context["metadata"] = (objectMetadata ? objectMetadata["ssn"] : null);
        privateState.ssn = defaultValues ? (defaultValues["ssn"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ssn"], context) : null) : null;
        context["field"] = "state";
        context["metadata"] = (objectMetadata ? objectMetadata["state"] : null);
        privateState.state = defaultValues ? (defaultValues["state"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["state"], context) : null) : null;
        context["field"] = "userfirstname";
        context["metadata"] = (objectMetadata ? objectMetadata["userfirstname"] : null);
        privateState.userfirstname = defaultValues ? (defaultValues["userfirstname"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["userfirstname"], context) : null) : null;
        context["field"] = "userId";
        context["metadata"] = (objectMetadata ? objectMetadata["userId"] : null);
        privateState.userId = defaultValues ? (defaultValues["userId"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["userId"], context) : null) : null;
        context["field"] = "userImage";
        context["metadata"] = (objectMetadata ? objectMetadata["userImage"] : null);
        privateState.userImage = defaultValues ? (defaultValues["userImage"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["userImage"], context) : null) : null;
        context["field"] = "userlastname";
        context["metadata"] = (objectMetadata ? objectMetadata["userlastname"] : null);
        privateState.userlastname = defaultValues ? (defaultValues["userlastname"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["userlastname"], context) : null) : null;
        context["field"] = "zipcode";
        context["metadata"] = (objectMetadata ? objectMetadata["zipcode"] : null);
        privateState.zipcode = defaultValues ? (defaultValues["zipcode"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["zipcode"], context) : null) : null;
        context["field"] = "rating";
        context["metadata"] = (objectMetadata ? objectMetadata["rating"] : null);
        privateState.rating = defaultValues ? (defaultValues["rating"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["rating"], context) : null) : null;
        context["field"] = "featureRequest";
        context["metadata"] = (objectMetadata ? objectMetadata["featureRequest"] : null);
        privateState.featureRequest = defaultValues ? (defaultValues["featureRequest"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["featureRequest"], context) : null) : null;
        context["field"] = "description";
        context["metadata"] = (objectMetadata ? objectMetadata["description"] : null);
        privateState.description = defaultValues ? (defaultValues["description"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["description"], context) : null) : null;
        context["field"] = "default_account_wire";
        context["metadata"] = (objectMetadata ? objectMetadata["default_account_wire"] : null);
        privateState.default_account_wire = defaultValues ? (defaultValues["default_account_wire"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["default_account_wire"], context) : null) : null;
        context["field"] = "isWireTransferActivated";
        context["metadata"] = (objectMetadata ? objectMetadata["isWireTransferActivated"] : null);
        privateState.isWireTransferActivated = defaultValues ? (defaultValues["isWireTransferActivated"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isWireTransferActivated"], context) : null) : null;
        context["field"] = "isWireTransferEligible";
        context["metadata"] = (objectMetadata ? objectMetadata["isWireTransferEligible"] : null);
        privateState.isWireTransferEligible = defaultValues ? (defaultValues["isWireTransferEligible"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isWireTransferEligible"], context) : null) : null;
        context["field"] = "countryType";
        context["metadata"] = (objectMetadata ? objectMetadata["countryType"] : null);
        privateState.countryType = defaultValues ? (defaultValues["countryType"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["countryType"], context) : null) : null;
        context["field"] = "error";
        context["metadata"] = (objectMetadata ? objectMetadata["error"] : null);
        privateState.error = defaultValues ? (defaultValues["error"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["error"], context) : null) : null;
        context["field"] = "extension";
        context["metadata"] = (objectMetadata ? objectMetadata["extension"] : null);
        privateState.extension = defaultValues ? (defaultValues["extension"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["extension"], context) : null) : null;
        context["field"] = "id";
        context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
        privateState.id = defaultValues ? (defaultValues["id"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["id"], context) : null) : null;
        context["field"] = "isPrimary";
        context["metadata"] = (objectMetadata ? objectMetadata["isPrimary"] : null);
        privateState.isPrimary = defaultValues ? (defaultValues["isPrimary"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isPrimary"], context) : null) : null;
        context["field"] = "phoneNumber";
        context["metadata"] = (objectMetadata ? objectMetadata["phoneNumber"] : null);
        privateState.phoneNumber = defaultValues ? (defaultValues["phoneNumber"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["phoneNumber"], context) : null) : null;
        context["field"] = "receivePromotions";
        context["metadata"] = (objectMetadata ? objectMetadata["receivePromotions"] : null);
        privateState.receivePromotions = defaultValues ? (defaultValues["receivePromotions"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["receivePromotions"], context) : null) : null;
        context["field"] = "type";
        context["metadata"] = (objectMetadata ? objectMetadata["type"] : null);
        privateState.type = defaultValues ? (defaultValues["type"] ? kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["type"], context) : null) : null;
        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);
        //Defining Getter/Setters
        Object.defineProperties(this, {
            "accountHolder": {
                get: function() {
                    context["field"] = "accountHolder";
                    context["metadata"] = (objectMetadata ? objectMetadata["accountHolder"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.accountHolder, context);
                },
                set: function(val) {
                    setterFunctions['accountHolder'].call(this, val, privateState);
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
            "accountli": {
                get: function() {
                    context["field"] = "accountli";
                    context["metadata"] = (objectMetadata ? objectMetadata["accountli"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.accountli, context);
                },
                set: function(val) {
                    setterFunctions['accountli'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "accountName": {
                get: function() {
                    context["field"] = "accountName";
                    context["metadata"] = (objectMetadata ? objectMetadata["accountName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.accountName, context);
                },
                set: function(val) {
                    setterFunctions['accountName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "accountPreference": {
                get: function() {
                    context["field"] = "accountPreference";
                    context["metadata"] = (objectMetadata ? objectMetadata["accountPreference"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.accountPreference, context);
                },
                set: function(val) {
                    setterFunctions['accountPreference'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "accountType": {
                get: function() {
                    context["field"] = "accountType";
                    context["metadata"] = (objectMetadata ? objectMetadata["accountType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.accountType, context);
                },
                set: function(val) {
                    setterFunctions['accountType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "availableBalance": {
                get: function() {
                    context["field"] = "availableBalance";
                    context["metadata"] = (objectMetadata ? objectMetadata["availableBalance"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.availableBalance, context);
                },
                set: function(val) {
                    setterFunctions['availableBalance'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "availableCredit": {
                get: function() {
                    context["field"] = "availableCredit";
                    context["metadata"] = (objectMetadata ? objectMetadata["availableCredit"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.availableCredit, context);
                },
                set: function(val) {
                    setterFunctions['availableCredit'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "availablePoints": {
                get: function() {
                    context["field"] = "availablePoints";
                    context["metadata"] = (objectMetadata ? objectMetadata["availablePoints"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.availablePoints, context);
                },
                set: function(val) {
                    setterFunctions['availablePoints'].call(this, val, privateState);
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
            "bondInterest": {
                get: function() {
                    context["field"] = "bondInterest";
                    context["metadata"] = (objectMetadata ? objectMetadata["bondInterest"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.bondInterest, context);
                },
                set: function(val) {
                    setterFunctions['bondInterest'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "bondInterestLastYear": {
                get: function() {
                    context["field"] = "bondInterestLastYear";
                    context["metadata"] = (objectMetadata ? objectMetadata["bondInterestLastYear"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.bondInterestLastYear, context);
                },
                set: function(val) {
                    setterFunctions['bondInterestLastYear'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "bsbNum": {
                get: function() {
                    context["field"] = "bsbNum";
                    context["metadata"] = (objectMetadata ? objectMetadata["bsbNum"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.bsbNum, context);
                },
                set: function(val) {
                    setterFunctions['bsbNum'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "closingDate": {
                get: function() {
                    context["field"] = "closingDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["closingDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.closingDate, context);
                },
                set: function(val) {
                    setterFunctions['closingDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "creditCardNumber": {
                get: function() {
                    context["field"] = "creditCardNumber";
                    context["metadata"] = (objectMetadata ? objectMetadata["creditCardNumber"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.creditCardNumber, context);
                },
                set: function(val) {
                    setterFunctions['creditCardNumber'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "creditLimit": {
                get: function() {
                    context["field"] = "creditLimit";
                    context["metadata"] = (objectMetadata ? objectMetadata["creditLimit"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.creditLimit, context);
                },
                set: function(val) {
                    setterFunctions['creditLimit'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "currencyCode": {
                get: function() {
                    context["field"] = "currencyCode";
                    context["metadata"] = (objectMetadata ? objectMetadata["currencyCode"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.currencyCode, context);
                },
                set: function(val) {
                    setterFunctions['currencyCode'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "currentAmountDue": {
                get: function() {
                    context["field"] = "currentAmountDue";
                    context["metadata"] = (objectMetadata ? objectMetadata["currentAmountDue"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.currentAmountDue, context);
                },
                set: function(val) {
                    setterFunctions['currentAmountDue'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "currentBalance": {
                get: function() {
                    context["field"] = "currentBalance";
                    context["metadata"] = (objectMetadata ? objectMetadata["currentBalance"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.currentBalance, context);
                },
                set: function(val) {
                    setterFunctions['currentBalance'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "deviceID": {
                get: function() {
                    context["field"] = "deviceID";
                    context["metadata"] = (objectMetadata ? objectMetadata["deviceID"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.deviceID, context);
                },
                set: function(val) {
                    setterFunctions['deviceID'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "dividendLastPaidAmount": {
                get: function() {
                    context["field"] = "dividendLastPaidAmount";
                    context["metadata"] = (objectMetadata ? objectMetadata["dividendLastPaidAmount"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.dividendLastPaidAmount, context);
                },
                set: function(val) {
                    setterFunctions['dividendLastPaidAmount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "dividendLastPaidDate": {
                get: function() {
                    context["field"] = "dividendLastPaidDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["dividendLastPaidDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.dividendLastPaidDate, context);
                },
                set: function(val) {
                    setterFunctions['dividendLastPaidDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "dividendPaidYTD": {
                get: function() {
                    context["field"] = "dividendPaidYTD";
                    context["metadata"] = (objectMetadata ? objectMetadata["dividendPaidYTD"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.dividendPaidYTD, context);
                },
                set: function(val) {
                    setterFunctions['dividendPaidYTD'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "dividendRate": {
                get: function() {
                    context["field"] = "dividendRate";
                    context["metadata"] = (objectMetadata ? objectMetadata["dividendRate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.dividendRate, context);
                },
                set: function(val) {
                    setterFunctions['dividendRate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "dividendYTD": {
                get: function() {
                    context["field"] = "dividendYTD";
                    context["metadata"] = (objectMetadata ? objectMetadata["dividendYTD"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.dividendYTD, context);
                },
                set: function(val) {
                    setterFunctions['dividendYTD'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "dueDate": {
                get: function() {
                    context["field"] = "dueDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["dueDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.dueDate, context);
                },
                set: function(val) {
                    setterFunctions['dueDate'].call(this, val, privateState);
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
            "eStatementEnable": {
                get: function() {
                    context["field"] = "eStatementEnable";
                    context["metadata"] = (objectMetadata ? objectMetadata["eStatementEnable"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.eStatementEnable, context);
                },
                set: function(val) {
                    setterFunctions['eStatementEnable'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "favouriteStatus": {
                get: function() {
                    context["field"] = "favouriteStatus";
                    context["metadata"] = (objectMetadata ? objectMetadata["favouriteStatus"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.favouriteStatus, context);
                },
                set: function(val) {
                    setterFunctions['favouriteStatus'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "interestEarned": {
                get: function() {
                    context["field"] = "interestEarned";
                    context["metadata"] = (objectMetadata ? objectMetadata["interestEarned"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.interestEarned, context);
                },
                set: function(val) {
                    setterFunctions['interestEarned'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "interestPaidLastYear": {
                get: function() {
                    context["field"] = "interestPaidLastYear";
                    context["metadata"] = (objectMetadata ? objectMetadata["interestPaidLastYear"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.interestPaidLastYear, context);
                },
                set: function(val) {
                    setterFunctions['interestPaidLastYear'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "interestPaidPreviousYTD": {
                get: function() {
                    context["field"] = "interestPaidPreviousYTD";
                    context["metadata"] = (objectMetadata ? objectMetadata["interestPaidPreviousYTD"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.interestPaidPreviousYTD, context);
                },
                set: function(val) {
                    setterFunctions['interestPaidPreviousYTD'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "interestPaidYTD": {
                get: function() {
                    context["field"] = "interestPaidYTD";
                    context["metadata"] = (objectMetadata ? objectMetadata["interestPaidYTD"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.interestPaidYTD, context);
                },
                set: function(val) {
                    setterFunctions['interestPaidYTD'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "interestRate": {
                get: function() {
                    context["field"] = "interestRate";
                    context["metadata"] = (objectMetadata ? objectMetadata["interestRate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.interestRate, context);
                },
                set: function(val) {
                    setterFunctions['interestRate'].call(this, val, privateState);
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
            "isPFM": {
                get: function() {
                    context["field"] = "isPFM";
                    context["metadata"] = (objectMetadata ? objectMetadata["isPFM"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isPFM, context);
                },
                set: function(val) {
                    setterFunctions['isPFM'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "jointHolders": {
                get: function() {
                    context["field"] = "jointHolders";
                    context["metadata"] = (objectMetadata ? objectMetadata["jointHolders"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.jointHolders, context);
                },
                set: function(val) {
                    setterFunctions['jointHolders'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "lastDividendPaidAmount": {
                get: function() {
                    context["field"] = "lastDividendPaidAmount";
                    context["metadata"] = (objectMetadata ? objectMetadata["lastDividendPaidAmount"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.lastDividendPaidAmount, context);
                },
                set: function(val) {
                    setterFunctions['lastDividendPaidAmount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "lastDividendPaidDate": {
                get: function() {
                    context["field"] = "lastDividendPaidDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["lastDividendPaidDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.lastDividendPaidDate, context);
                },
                set: function(val) {
                    setterFunctions['lastDividendPaidDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "lastPaymentAmount": {
                get: function() {
                    context["field"] = "lastPaymentAmount";
                    context["metadata"] = (objectMetadata ? objectMetadata["lastPaymentAmount"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.lastPaymentAmount, context);
                },
                set: function(val) {
                    setterFunctions['lastPaymentAmount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "lastPaymentDate": {
                get: function() {
                    context["field"] = "lastPaymentDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["lastPaymentDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.lastPaymentDate, context);
                },
                set: function(val) {
                    setterFunctions['lastPaymentDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "lastStatementBalance": {
                get: function() {
                    context["field"] = "lastStatementBalance";
                    context["metadata"] = (objectMetadata ? objectMetadata["lastStatementBalance"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.lastStatementBalance, context);
                },
                set: function(val) {
                    setterFunctions['lastStatementBalance'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "lateFeesDue": {
                get: function() {
                    context["field"] = "lateFeesDue";
                    context["metadata"] = (objectMetadata ? objectMetadata["lateFeesDue"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.lateFeesDue, context);
                },
                set: function(val) {
                    setterFunctions['lateFeesDue'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "maturityAmount": {
                get: function() {
                    context["field"] = "maturityAmount";
                    context["metadata"] = (objectMetadata ? objectMetadata["maturityAmount"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.maturityAmount, context);
                },
                set: function(val) {
                    setterFunctions['maturityAmount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "maturityDate": {
                get: function() {
                    context["field"] = "maturityDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["maturityDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.maturityDate, context);
                },
                set: function(val) {
                    setterFunctions['maturityDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "maturityOption": {
                get: function() {
                    context["field"] = "maturityOption";
                    context["metadata"] = (objectMetadata ? objectMetadata["maturityOption"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.maturityOption, context);
                },
                set: function(val) {
                    setterFunctions['maturityOption'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "minimumDue": {
                get: function() {
                    context["field"] = "minimumDue";
                    context["metadata"] = (objectMetadata ? objectMetadata["minimumDue"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.minimumDue, context);
                },
                set: function(val) {
                    setterFunctions['minimumDue'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "nickName": {
                get: function() {
                    context["field"] = "nickName";
                    context["metadata"] = (objectMetadata ? objectMetadata["nickName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.nickName, context);
                },
                set: function(val) {
                    setterFunctions['nickName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "openingDate": {
                get: function() {
                    context["field"] = "openingDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["openingDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.openingDate, context);
                },
                set: function(val) {
                    setterFunctions['openingDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "originalAmount": {
                get: function() {
                    context["field"] = "originalAmount";
                    context["metadata"] = (objectMetadata ? objectMetadata["originalAmount"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.originalAmount, context);
                },
                set: function(val) {
                    setterFunctions['originalAmount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "outstandingBalance": {
                get: function() {
                    context["field"] = "outstandingBalance";
                    context["metadata"] = (objectMetadata ? objectMetadata["outstandingBalance"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.outstandingBalance, context);
                },
                set: function(val) {
                    setterFunctions['outstandingBalance'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "paymentDue": {
                get: function() {
                    context["field"] = "paymentDue";
                    context["metadata"] = (objectMetadata ? objectMetadata["paymentDue"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.paymentDue, context);
                },
                set: function(val) {
                    setterFunctions['paymentDue'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "paymentMethod": {
                get: function() {
                    context["field"] = "paymentMethod";
                    context["metadata"] = (objectMetadata ? objectMetadata["paymentMethod"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.paymentMethod, context);
                },
                set: function(val) {
                    setterFunctions['paymentMethod'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "paymentTerm": {
                get: function() {
                    context["field"] = "paymentTerm";
                    context["metadata"] = (objectMetadata ? objectMetadata["paymentTerm"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.paymentTerm, context);
                },
                set: function(val) {
                    setterFunctions['paymentTerm'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "payoffAmount": {
                get: function() {
                    context["field"] = "payoffAmount";
                    context["metadata"] = (objectMetadata ? objectMetadata["payoffAmount"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.payoffAmount, context);
                },
                set: function(val) {
                    setterFunctions['payoffAmount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "payOffCharge": {
                get: function() {
                    context["field"] = "payOffCharge";
                    context["metadata"] = (objectMetadata ? objectMetadata["payOffCharge"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.payOffCharge, context);
                },
                set: function(val) {
                    setterFunctions['payOffCharge'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "pendingDeposit": {
                get: function() {
                    context["field"] = "pendingDeposit";
                    context["metadata"] = (objectMetadata ? objectMetadata["pendingDeposit"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.pendingDeposit, context);
                },
                set: function(val) {
                    setterFunctions['pendingDeposit'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "pendingWithdrawal": {
                get: function() {
                    context["field"] = "pendingWithdrawal";
                    context["metadata"] = (objectMetadata ? objectMetadata["pendingWithdrawal"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.pendingWithdrawal, context);
                },
                set: function(val) {
                    setterFunctions['pendingWithdrawal'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "phoneId": {
                get: function() {
                    context["field"] = "phoneId";
                    context["metadata"] = (objectMetadata ? objectMetadata["phoneId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.phoneId, context);
                },
                set: function(val) {
                    setterFunctions['phoneId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "previousYearDividend": {
                get: function() {
                    context["field"] = "previousYearDividend";
                    context["metadata"] = (objectMetadata ? objectMetadata["previousYearDividend"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.previousYearDividend, context);
                },
                set: function(val) {
                    setterFunctions['previousYearDividend'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "previousYearsDividends": {
                get: function() {
                    context["field"] = "previousYearsDividends";
                    context["metadata"] = (objectMetadata ? objectMetadata["previousYearsDividends"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.previousYearsDividends, context);
                },
                set: function(val) {
                    setterFunctions['previousYearsDividends'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "principalBalance": {
                get: function() {
                    context["field"] = "principalBalance";
                    context["metadata"] = (objectMetadata ? objectMetadata["principalBalance"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.principalBalance, context);
                },
                set: function(val) {
                    setterFunctions['principalBalance'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "principalValue": {
                get: function() {
                    context["field"] = "principalValue";
                    context["metadata"] = (objectMetadata ? objectMetadata["principalValue"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.principalValue, context);
                },
                set: function(val) {
                    setterFunctions['principalValue'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "regularPaymentAmount": {
                get: function() {
                    context["field"] = "regularPaymentAmount";
                    context["metadata"] = (objectMetadata ? objectMetadata["regularPaymentAmount"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.regularPaymentAmount, context);
                },
                set: function(val) {
                    setterFunctions['regularPaymentAmount'].call(this, val, privateState);
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
            "supportBillPay": {
                get: function() {
                    context["field"] = "supportBillPay";
                    context["metadata"] = (objectMetadata ? objectMetadata["supportBillPay"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.supportBillPay, context);
                },
                set: function(val) {
                    setterFunctions['supportBillPay'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "supportCardlessCash": {
                get: function() {
                    context["field"] = "supportCardlessCash";
                    context["metadata"] = (objectMetadata ? objectMetadata["supportCardlessCash"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.supportCardlessCash, context);
                },
                set: function(val) {
                    setterFunctions['supportCardlessCash'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "supportDeposit": {
                get: function() {
                    context["field"] = "supportDeposit";
                    context["metadata"] = (objectMetadata ? objectMetadata["supportDeposit"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.supportDeposit, context);
                },
                set: function(val) {
                    setterFunctions['supportDeposit'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "supportTransferFrom": {
                get: function() {
                    context["field"] = "supportTransferFrom";
                    context["metadata"] = (objectMetadata ? objectMetadata["supportTransferFrom"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.supportTransferFrom, context);
                },
                set: function(val) {
                    setterFunctions['supportTransferFrom'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "supportTransferTo": {
                get: function() {
                    context["field"] = "supportTransferTo";
                    context["metadata"] = (objectMetadata ? objectMetadata["supportTransferTo"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.supportTransferTo, context);
                },
                set: function(val) {
                    setterFunctions['supportTransferTo'].call(this, val, privateState);
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
            "totalCreditMonths": {
                get: function() {
                    context["field"] = "totalCreditMonths";
                    context["metadata"] = (objectMetadata ? objectMetadata["totalCreditMonths"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.totalCreditMonths, context);
                },
                set: function(val) {
                    setterFunctions['totalCreditMonths'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "totalDebitsMonth": {
                get: function() {
                    context["field"] = "totalDebitsMonth";
                    context["metadata"] = (objectMetadata ? objectMetadata["totalDebitsMonth"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.totalDebitsMonth, context);
                },
                set: function(val) {
                    setterFunctions['totalDebitsMonth'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "transactionLimit": {
                get: function() {
                    context["field"] = "transactionLimit";
                    context["metadata"] = (objectMetadata ? objectMetadata["transactionLimit"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.transactionLimit, context);
                },
                set: function(val) {
                    setterFunctions['transactionLimit'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "transferLimit": {
                get: function() {
                    context["field"] = "transferLimit";
                    context["metadata"] = (objectMetadata ? objectMetadata["transferLimit"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.transferLimit, context);
                },
                set: function(val) {
                    setterFunctions['transferLimit'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "unpaidInterest": {
                get: function() {
                    context["field"] = "unpaidInterest";
                    context["metadata"] = (objectMetadata ? objectMetadata["unpaidInterest"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.unpaidInterest, context);
                },
                set: function(val) {
                    setterFunctions['unpaidInterest'].call(this, val, privateState);
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
            "jointAccountHolder1": {
                get: function() {
                    context["field"] = "jointAccountHolder1";
                    context["metadata"] = (objectMetadata ? objectMetadata["jointAccountHolder1"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.jointAccountHolder1, context);
                },
                set: function(val) {
                    setterFunctions['jointAccountHolder1'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "jointAccountHolder2": {
                get: function() {
                    context["field"] = "jointAccountHolder2";
                    context["metadata"] = (objectMetadata ? objectMetadata["jointAccountHolder2"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.jointAccountHolder2, context);
                },
                set: function(val) {
                    setterFunctions['jointAccountHolder2'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "bankAddress": {
                get: function() {
                    context["field"] = "bankAddress";
                    context["metadata"] = (objectMetadata ? objectMetadata["bankAddress"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.bankAddress, context);
                },
                set: function(val) {
                    setterFunctions['bankAddress'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "intermediaryBankName": {
                get: function() {
                    context["field"] = "intermediaryBankName";
                    context["metadata"] = (objectMetadata ? objectMetadata["intermediaryBankName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.intermediaryBankName, context);
                },
                set: function(val) {
                    setterFunctions['intermediaryBankName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "intermediaryBankAddress": {
                get: function() {
                    context["field"] = "intermediaryBankAddress";
                    context["metadata"] = (objectMetadata ? objectMetadata["intermediaryBankAddress"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.intermediaryBankAddress, context);
                },
                set: function(val) {
                    setterFunctions['intermediaryBankAddress'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "intermediaryBankSwiftCode": {
                get: function() {
                    context["field"] = "intermediaryBankSwiftCode";
                    context["metadata"] = (objectMetadata ? objectMetadata["intermediaryBankSwiftCode"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.intermediaryBankSwiftCode, context);
                },
                set: function(val) {
                    setterFunctions['intermediaryBankSwiftCode'].call(this, val, privateState);
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
            "supportChecks": {
                get: function() {
                    context["field"] = "supportChecks";
                    context["metadata"] = (objectMetadata ? objectMetadata["supportChecks"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.supportChecks, context);
                },
                set: function(val) {
                    setterFunctions['supportChecks'].call(this, val, privateState);
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
            "addressId": {
                get: function() {
                    context["field"] = "addressId";
                    context["metadata"] = (objectMetadata ? objectMetadata["addressId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.addressId, context);
                },
                set: function(val) {
                    setterFunctions['addressId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "addressLine1": {
                get: function() {
                    context["field"] = "addressLine1";
                    context["metadata"] = (objectMetadata ? objectMetadata["addressLine1"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.addressLine1, context);
                },
                set: function(val) {
                    setterFunctions['addressLine1'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "addressLine2": {
                get: function() {
                    context["field"] = "addressLine2";
                    context["metadata"] = (objectMetadata ? objectMetadata["addressLine2"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.addressLine2, context);
                },
                set: function(val) {
                    setterFunctions['addressLine2'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "addressType": {
                get: function() {
                    context["field"] = "addressType";
                    context["metadata"] = (objectMetadata ? objectMetadata["addressType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.addressType, context);
                },
                set: function(val) {
                    setterFunctions['addressType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "alertsTurnedOn": {
                get: function() {
                    context["field"] = "alertsTurnedOn";
                    context["metadata"] = (objectMetadata ? objectMetadata["alertsTurnedOn"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.alertsTurnedOn, context);
                },
                set: function(val) {
                    setterFunctions['alertsTurnedOn'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "areAccountStatementTermsAccepted": {
                get: function() {
                    context["field"] = "areAccountStatementTermsAccepted";
                    context["metadata"] = (objectMetadata ? objectMetadata["areAccountStatementTermsAccepted"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.areAccountStatementTermsAccepted, context);
                },
                set: function(val) {
                    setterFunctions['areAccountStatementTermsAccepted'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "areDepositTermsAccepted": {
                get: function() {
                    context["field"] = "areDepositTermsAccepted";
                    context["metadata"] = (objectMetadata ? objectMetadata["areDepositTermsAccepted"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.areDepositTermsAccepted, context);
                },
                set: function(val) {
                    setterFunctions['areDepositTermsAccepted'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "cardNumber": {
                get: function() {
                    context["field"] = "cardNumber";
                    context["metadata"] = (objectMetadata ? objectMetadata["cardNumber"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.cardNumber, context);
                },
                set: function(val) {
                    setterFunctions['cardNumber'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "city": {
                get: function() {
                    context["field"] = "city";
                    context["metadata"] = (objectMetadata ? objectMetadata["city"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.city, context);
                },
                set: function(val) {
                    setterFunctions['city'].call(this, val, privateState);
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
            "cvv": {
                get: function() {
                    context["field"] = "cvv";
                    context["metadata"] = (objectMetadata ? objectMetadata["cvv"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.cvv, context);
                },
                set: function(val) {
                    setterFunctions['cvv'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "dateOfBirth": {
                get: function() {
                    context["field"] = "dateOfBirth";
                    context["metadata"] = (objectMetadata ? objectMetadata["dateOfBirth"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.dateOfBirth, context);
                },
                set: function(val) {
                    setterFunctions['dateOfBirth'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "default_account_billPay": {
                get: function() {
                    context["field"] = "default_account_billPay";
                    context["metadata"] = (objectMetadata ? objectMetadata["default_account_billPay"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.default_account_billPay, context);
                },
                set: function(val) {
                    setterFunctions['default_account_billPay'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "default_account_cardless": {
                get: function() {
                    context["field"] = "default_account_cardless";
                    context["metadata"] = (objectMetadata ? objectMetadata["default_account_cardless"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.default_account_cardless, context);
                },
                set: function(val) {
                    setterFunctions['default_account_cardless'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "default_account_deposit": {
                get: function() {
                    context["field"] = "default_account_deposit";
                    context["metadata"] = (objectMetadata ? objectMetadata["default_account_deposit"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.default_account_deposit, context);
                },
                set: function(val) {
                    setterFunctions['default_account_deposit'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "default_account_payments": {
                get: function() {
                    context["field"] = "default_account_payments";
                    context["metadata"] = (objectMetadata ? objectMetadata["default_account_payments"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.default_account_payments, context);
                },
                set: function(val) {
                    setterFunctions['default_account_payments'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "default_account_transfers": {
                get: function() {
                    context["field"] = "default_account_transfers";
                    context["metadata"] = (objectMetadata ? objectMetadata["default_account_transfers"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.default_account_transfers, context);
                },
                set: function(val) {
                    setterFunctions['default_account_transfers'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "default_from_account_p2p": {
                get: function() {
                    context["field"] = "default_from_account_p2p";
                    context["metadata"] = (objectMetadata ? objectMetadata["default_from_account_p2p"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.default_from_account_p2p, context);
                },
                set: function(val) {
                    setterFunctions['default_from_account_p2p'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "default_to_account_p2p": {
                get: function() {
                    context["field"] = "default_to_account_p2p";
                    context["metadata"] = (objectMetadata ? objectMetadata["default_to_account_p2p"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.default_to_account_p2p, context);
                },
                set: function(val) {
                    setterFunctions['default_to_account_p2p'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "isEmailEnabled": {
                get: function() {
                    context["field"] = "isEmailEnabled";
                    context["metadata"] = (objectMetadata ? objectMetadata["isEmailEnabled"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isEmailEnabled, context);
                },
                set: function(val) {
                    setterFunctions['isEmailEnabled'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "isPhoneEnabled": {
                get: function() {
                    context["field"] = "isPhoneEnabled";
                    context["metadata"] = (objectMetadata ? objectMetadata["isPhoneEnabled"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isPhoneEnabled, context);
                },
                set: function(val) {
                    setterFunctions['isPhoneEnabled'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "isPinSet": {
                get: function() {
                    context["field"] = "isPinSet";
                    context["metadata"] = (objectMetadata ? objectMetadata["isPinSet"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isPinSet, context);
                },
                set: function(val) {
                    setterFunctions['isPinSet'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "isPreferredAddress": {
                get: function() {
                    context["field"] = "isPreferredAddress";
                    context["metadata"] = (objectMetadata ? objectMetadata["isPreferredAddress"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isPreferredAddress, context);
                },
                set: function(val) {
                    setterFunctions['isPreferredAddress'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "lastlogintime": {
                get: function() {
                    context["field"] = "lastlogintime";
                    context["metadata"] = (objectMetadata ? objectMetadata["lastlogintime"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.lastlogintime, context);
                },
                set: function(val) {
                    setterFunctions['lastlogintime'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "oldpassword": {
                get: function() {
                    context["field"] = "oldpassword";
                    context["metadata"] = (objectMetadata ? objectMetadata["oldpassword"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.oldpassword, context);
                },
                set: function(val) {
                    setterFunctions['oldpassword'].call(this, val, privateState);
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
            "password": {
                get: function() {
                    context["field"] = "password";
                    context["metadata"] = (objectMetadata ? objectMetadata["password"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.password, context);
                },
                set: function(val) {
                    setterFunctions['password'].call(this, val, privateState);
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
            "pin": {
                get: function() {
                    context["field"] = "pin";
                    context["metadata"] = (objectMetadata ? objectMetadata["pin"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.pin, context);
                },
                set: function(val) {
                    setterFunctions['pin'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "result": {
                get: function() {
                    context["field"] = "result";
                    context["metadata"] = (objectMetadata ? objectMetadata["result"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.result, context);
                },
                set: function(val) {
                    setterFunctions['result'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "role": {
                get: function() {
                    context["field"] = "role";
                    context["metadata"] = (objectMetadata ? objectMetadata["role"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.role, context);
                },
                set: function(val) {
                    setterFunctions['role'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "secondaryemail": {
                get: function() {
                    context["field"] = "secondaryemail";
                    context["metadata"] = (objectMetadata ? objectMetadata["secondaryemail"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.secondaryemail, context);
                },
                set: function(val) {
                    setterFunctions['secondaryemail'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "secondaryemail2": {
                get: function() {
                    context["field"] = "secondaryemail2";
                    context["metadata"] = (objectMetadata ? objectMetadata["secondaryemail2"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.secondaryemail2, context);
                },
                set: function(val) {
                    setterFunctions['secondaryemail2'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "secondaryphone": {
                get: function() {
                    context["field"] = "secondaryphone";
                    context["metadata"] = (objectMetadata ? objectMetadata["secondaryphone"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.secondaryphone, context);
                },
                set: function(val) {
                    setterFunctions['secondaryphone'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "secondaryphone2": {
                get: function() {
                    context["field"] = "secondaryphone2";
                    context["metadata"] = (objectMetadata ? objectMetadata["secondaryphone2"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.secondaryphone2, context);
                },
                set: function(val) {
                    setterFunctions['secondaryphone2'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "ssn": {
                get: function() {
                    context["field"] = "ssn";
                    context["metadata"] = (objectMetadata ? objectMetadata["ssn"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ssn, context);
                },
                set: function(val) {
                    setterFunctions['ssn'].call(this, val, privateState);
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
            "userfirstname": {
                get: function() {
                    context["field"] = "userfirstname";
                    context["metadata"] = (objectMetadata ? objectMetadata["userfirstname"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.userfirstname, context);
                },
                set: function(val) {
                    setterFunctions['userfirstname'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "userId": {
                get: function() {
                    context["field"] = "userId";
                    context["metadata"] = (objectMetadata ? objectMetadata["userId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.userId, context);
                },
                set: function(val) {
                    setterFunctions['userId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "userImage": {
                get: function() {
                    context["field"] = "userImage";
                    context["metadata"] = (objectMetadata ? objectMetadata["userImage"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.userImage, context);
                },
                set: function(val) {
                    setterFunctions['userImage'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "userlastname": {
                get: function() {
                    context["field"] = "userlastname";
                    context["metadata"] = (objectMetadata ? objectMetadata["userlastname"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.userlastname, context);
                },
                set: function(val) {
                    setterFunctions['userlastname'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "zipcode": {
                get: function() {
                    context["field"] = "zipcode";
                    context["metadata"] = (objectMetadata ? objectMetadata["zipcode"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.zipcode, context);
                },
                set: function(val) {
                    setterFunctions['zipcode'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "rating": {
                get: function() {
                    context["field"] = "rating";
                    context["metadata"] = (objectMetadata ? objectMetadata["rating"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.rating, context);
                },
                set: function(val) {
                    setterFunctions['rating'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "featureRequest": {
                get: function() {
                    context["field"] = "featureRequest";
                    context["metadata"] = (objectMetadata ? objectMetadata["featureRequest"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.featureRequest, context);
                },
                set: function(val) {
                    setterFunctions['featureRequest'].call(this, val, privateState);
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
            "default_account_wire": {
                get: function() {
                    context["field"] = "default_account_wire";
                    context["metadata"] = (objectMetadata ? objectMetadata["default_account_wire"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.default_account_wire, context);
                },
                set: function(val) {
                    setterFunctions['default_account_wire'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "isWireTransferActivated": {
                get: function() {
                    context["field"] = "isWireTransferActivated";
                    context["metadata"] = (objectMetadata ? objectMetadata["isWireTransferActivated"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isWireTransferActivated, context);
                },
                set: function(val) {
                    setterFunctions['isWireTransferActivated'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "isWireTransferEligible": {
                get: function() {
                    context["field"] = "isWireTransferEligible";
                    context["metadata"] = (objectMetadata ? objectMetadata["isWireTransferEligible"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isWireTransferEligible, context);
                },
                set: function(val) {
                    setterFunctions['isWireTransferEligible'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "countryType": {
                get: function() {
                    context["field"] = "countryType";
                    context["metadata"] = (objectMetadata ? objectMetadata["countryType"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.countryType, context);
                },
                set: function(val) {
                    setterFunctions['countryType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "error": {
                get: function() {
                    context["field"] = "error";
                    context["metadata"] = (objectMetadata ? objectMetadata["error"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.error, context);
                },
                set: function(val) {
                    setterFunctions['error'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "extension": {
                get: function() {
                    context["field"] = "extension";
                    context["metadata"] = (objectMetadata ? objectMetadata["extension"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.extension, context);
                },
                set: function(val) {
                    setterFunctions['extension'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "id": {
                get: function() {
                    context["field"] = "id";
                    context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.id, context);
                },
                set: function(val) {
                    setterFunctions['id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "isPrimary": {
                get: function() {
                    context["field"] = "isPrimary";
                    context["metadata"] = (objectMetadata ? objectMetadata["isPrimary"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isPrimary, context);
                },
                set: function(val) {
                    setterFunctions['isPrimary'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "phoneNumber": {
                get: function() {
                    context["field"] = "phoneNumber";
                    context["metadata"] = (objectMetadata ? objectMetadata["phoneNumber"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.phoneNumber, context);
                },
                set: function(val) {
                    setterFunctions['phoneNumber'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "receivePromotions": {
                get: function() {
                    context["field"] = "receivePromotions";
                    context["metadata"] = (objectMetadata ? objectMetadata["receivePromotions"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.receivePromotions, context);
                },
                set: function(val) {
                    setterFunctions['receivePromotions'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "type": {
                get: function() {
                    context["field"] = "type";
                    context["metadata"] = (objectMetadata ? objectMetadata["type"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.type, context);
                },
                set: function(val) {
                    setterFunctions['type'].call(this, val, privateState);
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
            privateState.accountHolder = value ? (value["accountHolder"] ? value["accountHolder"] : null) : null;
            privateState.accountID = value ? (value["accountID"] ? value["accountID"] : null) : null;
            privateState.accountli = value ? (value["accountli"] ? value["accountli"] : null) : null;
            privateState.accountName = value ? (value["accountName"] ? value["accountName"] : null) : null;
            privateState.accountPreference = value ? (value["accountPreference"] ? value["accountPreference"] : null) : null;
            privateState.accountType = value ? (value["accountType"] ? value["accountType"] : null) : null;
            privateState.availableBalance = value ? (value["availableBalance"] ? value["availableBalance"] : null) : null;
            privateState.availableCredit = value ? (value["availableCredit"] ? value["availableCredit"] : null) : null;
            privateState.availablePoints = value ? (value["availablePoints"] ? value["availablePoints"] : null) : null;
            privateState.bankName = value ? (value["bankName"] ? value["bankName"] : null) : null;
            privateState.bondInterest = value ? (value["bondInterest"] ? value["bondInterest"] : null) : null;
            privateState.bondInterestLastYear = value ? (value["bondInterestLastYear"] ? value["bondInterestLastYear"] : null) : null;
            privateState.bsbNum = value ? (value["bsbNum"] ? value["bsbNum"] : null) : null;
            privateState.closingDate = value ? (value["closingDate"] ? value["closingDate"] : null) : null;
            privateState.creditCardNumber = value ? (value["creditCardNumber"] ? value["creditCardNumber"] : null) : null;
            privateState.creditLimit = value ? (value["creditLimit"] ? value["creditLimit"] : null) : null;
            privateState.currencyCode = value ? (value["currencyCode"] ? value["currencyCode"] : null) : null;
            privateState.currentAmountDue = value ? (value["currentAmountDue"] ? value["currentAmountDue"] : null) : null;
            privateState.currentBalance = value ? (value["currentBalance"] ? value["currentBalance"] : null) : null;
            privateState.deviceID = value ? (value["deviceID"] ? value["deviceID"] : null) : null;
            privateState.dividendLastPaidAmount = value ? (value["dividendLastPaidAmount"] ? value["dividendLastPaidAmount"] : null) : null;
            privateState.dividendLastPaidDate = value ? (value["dividendLastPaidDate"] ? value["dividendLastPaidDate"] : null) : null;
            privateState.dividendPaidYTD = value ? (value["dividendPaidYTD"] ? value["dividendPaidYTD"] : null) : null;
            privateState.dividendRate = value ? (value["dividendRate"] ? value["dividendRate"] : null) : null;
            privateState.dividendYTD = value ? (value["dividendYTD"] ? value["dividendYTD"] : null) : null;
            privateState.dueDate = value ? (value["dueDate"] ? value["dueDate"] : null) : null;
            privateState.errmsg = value ? (value["errmsg"] ? value["errmsg"] : null) : null;
            privateState.eStatementEnable = value ? (value["eStatementEnable"] ? value["eStatementEnable"] : null) : null;
            privateState.favouriteStatus = value ? (value["favouriteStatus"] ? value["favouriteStatus"] : null) : null;
            privateState.interestEarned = value ? (value["interestEarned"] ? value["interestEarned"] : null) : null;
            privateState.interestPaidLastYear = value ? (value["interestPaidLastYear"] ? value["interestPaidLastYear"] : null) : null;
            privateState.interestPaidPreviousYTD = value ? (value["interestPaidPreviousYTD"] ? value["interestPaidPreviousYTD"] : null) : null;
            privateState.interestPaidYTD = value ? (value["interestPaidYTD"] ? value["interestPaidYTD"] : null) : null;
            privateState.interestRate = value ? (value["interestRate"] ? value["interestRate"] : null) : null;
            privateState.isInternationalAccount = value ? (value["isInternationalAccount"] ? value["isInternationalAccount"] : null) : null;
            privateState.isPFM = value ? (value["isPFM"] ? value["isPFM"] : null) : null;
            privateState.jointHolders = value ? (value["jointHolders"] ? value["jointHolders"] : null) : null;
            privateState.lastDividendPaidAmount = value ? (value["lastDividendPaidAmount"] ? value["lastDividendPaidAmount"] : null) : null;
            privateState.lastDividendPaidDate = value ? (value["lastDividendPaidDate"] ? value["lastDividendPaidDate"] : null) : null;
            privateState.lastPaymentAmount = value ? (value["lastPaymentAmount"] ? value["lastPaymentAmount"] : null) : null;
            privateState.lastPaymentDate = value ? (value["lastPaymentDate"] ? value["lastPaymentDate"] : null) : null;
            privateState.lastStatementBalance = value ? (value["lastStatementBalance"] ? value["lastStatementBalance"] : null) : null;
            privateState.lateFeesDue = value ? (value["lateFeesDue"] ? value["lateFeesDue"] : null) : null;
            privateState.maturityAmount = value ? (value["maturityAmount"] ? value["maturityAmount"] : null) : null;
            privateState.maturityDate = value ? (value["maturityDate"] ? value["maturityDate"] : null) : null;
            privateState.maturityOption = value ? (value["maturityOption"] ? value["maturityOption"] : null) : null;
            privateState.minimumDue = value ? (value["minimumDue"] ? value["minimumDue"] : null) : null;
            privateState.nickName = value ? (value["nickName"] ? value["nickName"] : null) : null;
            privateState.openingDate = value ? (value["openingDate"] ? value["openingDate"] : null) : null;
            privateState.originalAmount = value ? (value["originalAmount"] ? value["originalAmount"] : null) : null;
            privateState.outstandingBalance = value ? (value["outstandingBalance"] ? value["outstandingBalance"] : null) : null;
            privateState.paymentDue = value ? (value["paymentDue"] ? value["paymentDue"] : null) : null;
            privateState.paymentMethod = value ? (value["paymentMethod"] ? value["paymentMethod"] : null) : null;
            privateState.paymentTerm = value ? (value["paymentTerm"] ? value["paymentTerm"] : null) : null;
            privateState.payoffAmount = value ? (value["payoffAmount"] ? value["payoffAmount"] : null) : null;
            privateState.payOffCharge = value ? (value["payOffCharge"] ? value["payOffCharge"] : null) : null;
            privateState.pendingDeposit = value ? (value["pendingDeposit"] ? value["pendingDeposit"] : null) : null;
            privateState.pendingWithdrawal = value ? (value["pendingWithdrawal"] ? value["pendingWithdrawal"] : null) : null;
            privateState.phoneId = value ? (value["phoneId"] ? value["phoneId"] : null) : null;
            privateState.previousYearDividend = value ? (value["previousYearDividend"] ? value["previousYearDividend"] : null) : null;
            privateState.previousYearsDividends = value ? (value["previousYearsDividends"] ? value["previousYearsDividends"] : null) : null;
            privateState.principalBalance = value ? (value["principalBalance"] ? value["principalBalance"] : null) : null;
            privateState.principalValue = value ? (value["principalValue"] ? value["principalValue"] : null) : null;
            privateState.regularPaymentAmount = value ? (value["regularPaymentAmount"] ? value["regularPaymentAmount"] : null) : null;
            privateState.routingNumber = value ? (value["routingNumber"] ? value["routingNumber"] : null) : null;
            privateState.success = value ? (value["success"] ? value["success"] : null) : null;
            privateState.supportBillPay = value ? (value["supportBillPay"] ? value["supportBillPay"] : null) : null;
            privateState.supportCardlessCash = value ? (value["supportCardlessCash"] ? value["supportCardlessCash"] : null) : null;
            privateState.supportDeposit = value ? (value["supportDeposit"] ? value["supportDeposit"] : null) : null;
            privateState.supportTransferFrom = value ? (value["supportTransferFrom"] ? value["supportTransferFrom"] : null) : null;
            privateState.supportTransferTo = value ? (value["supportTransferTo"] ? value["supportTransferTo"] : null) : null;
            privateState.swiftCode = value ? (value["swiftCode"] ? value["swiftCode"] : null) : null;
            privateState.totalCreditMonths = value ? (value["totalCreditMonths"] ? value["totalCreditMonths"] : null) : null;
            privateState.totalDebitsMonth = value ? (value["totalDebitsMonth"] ? value["totalDebitsMonth"] : null) : null;
            privateState.transactionLimit = value ? (value["transactionLimit"] ? value["transactionLimit"] : null) : null;
            privateState.transferLimit = value ? (value["transferLimit"] ? value["transferLimit"] : null) : null;
            privateState.unpaidInterest = value ? (value["unpaidInterest"] ? value["unpaidInterest"] : null) : null;
            privateState.userName = value ? (value["userName"] ? value["userName"] : null) : null;
            privateState.email = value ? (value["email"] ? value["email"] : null) : null;
            privateState.jointAccountHolder1 = value ? (value["jointAccountHolder1"] ? value["jointAccountHolder1"] : null) : null;
            privateState.jointAccountHolder2 = value ? (value["jointAccountHolder2"] ? value["jointAccountHolder2"] : null) : null;
            privateState.bankAddress = value ? (value["bankAddress"] ? value["bankAddress"] : null) : null;
            privateState.intermediaryBankName = value ? (value["intermediaryBankName"] ? value["intermediaryBankName"] : null) : null;
            privateState.intermediaryBankAddress = value ? (value["intermediaryBankAddress"] ? value["intermediaryBankAddress"] : null) : null;
            privateState.intermediaryBankSwiftCode = value ? (value["intermediaryBankSwiftCode"] ? value["intermediaryBankSwiftCode"] : null) : null;
            privateState.statusDesc = value ? (value["statusDesc"] ? value["statusDesc"] : null) : null;
            privateState.supportChecks = value ? (value["supportChecks"] ? value["supportChecks"] : null) : null;
            privateState.accountNumber = value ? (value["accountNumber"] ? value["accountNumber"] : null) : null;
            privateState.addressId = value ? (value["addressId"] ? value["addressId"] : null) : null;
            privateState.addressLine1 = value ? (value["addressLine1"] ? value["addressLine1"] : null) : null;
            privateState.addressLine2 = value ? (value["addressLine2"] ? value["addressLine2"] : null) : null;
            privateState.addressType = value ? (value["addressType"] ? value["addressType"] : null) : null;
            privateState.alertsTurnedOn = value ? (value["alertsTurnedOn"] ? value["alertsTurnedOn"] : null) : null;
            privateState.areAccountStatementTermsAccepted = value ? (value["areAccountStatementTermsAccepted"] ? value["areAccountStatementTermsAccepted"] : null) : null;
            privateState.areDepositTermsAccepted = value ? (value["areDepositTermsAccepted"] ? value["areDepositTermsAccepted"] : null) : null;
            privateState.cardNumber = value ? (value["cardNumber"] ? value["cardNumber"] : null) : null;
            privateState.city = value ? (value["city"] ? value["city"] : null) : null;
            privateState.country = value ? (value["country"] ? value["country"] : null) : null;
            privateState.cvv = value ? (value["cvv"] ? value["cvv"] : null) : null;
            privateState.dateOfBirth = value ? (value["dateOfBirth"] ? value["dateOfBirth"] : null) : null;
            privateState.default_account_billPay = value ? (value["default_account_billPay"] ? value["default_account_billPay"] : null) : null;
            privateState.default_account_cardless = value ? (value["default_account_cardless"] ? value["default_account_cardless"] : null) : null;
            privateState.default_account_deposit = value ? (value["default_account_deposit"] ? value["default_account_deposit"] : null) : null;
            privateState.default_account_payments = value ? (value["default_account_payments"] ? value["default_account_payments"] : null) : null;
            privateState.default_account_transfers = value ? (value["default_account_transfers"] ? value["default_account_transfers"] : null) : null;
            privateState.default_from_account_p2p = value ? (value["default_from_account_p2p"] ? value["default_from_account_p2p"] : null) : null;
            privateState.default_to_account_p2p = value ? (value["default_to_account_p2p"] ? value["default_to_account_p2p"] : null) : null;
            privateState.isEmailEnabled = value ? (value["isEmailEnabled"] ? value["isEmailEnabled"] : null) : null;
            privateState.isPhoneEnabled = value ? (value["isPhoneEnabled"] ? value["isPhoneEnabled"] : null) : null;
            privateState.isPinSet = value ? (value["isPinSet"] ? value["isPinSet"] : null) : null;
            privateState.isPreferredAddress = value ? (value["isPreferredAddress"] ? value["isPreferredAddress"] : null) : null;
            privateState.lastlogintime = value ? (value["lastlogintime"] ? value["lastlogintime"] : null) : null;
            privateState.oldpassword = value ? (value["oldpassword"] ? value["oldpassword"] : null) : null;
            privateState.otp = value ? (value["otp"] ? value["otp"] : null) : null;
            privateState.password = value ? (value["password"] ? value["password"] : null) : null;
            privateState.phone = value ? (value["phone"] ? value["phone"] : null) : null;
            privateState.pin = value ? (value["pin"] ? value["pin"] : null) : null;
            privateState.result = value ? (value["result"] ? value["result"] : null) : null;
            privateState.role = value ? (value["role"] ? value["role"] : null) : null;
            privateState.secondaryemail = value ? (value["secondaryemail"] ? value["secondaryemail"] : null) : null;
            privateState.secondaryemail2 = value ? (value["secondaryemail2"] ? value["secondaryemail2"] : null) : null;
            privateState.secondaryphone = value ? (value["secondaryphone"] ? value["secondaryphone"] : null) : null;
            privateState.secondaryphone2 = value ? (value["secondaryphone2"] ? value["secondaryphone2"] : null) : null;
            privateState.ssn = value ? (value["ssn"] ? value["ssn"] : null) : null;
            privateState.state = value ? (value["state"] ? value["state"] : null) : null;
            privateState.userfirstname = value ? (value["userfirstname"] ? value["userfirstname"] : null) : null;
            privateState.userId = value ? (value["userId"] ? value["userId"] : null) : null;
            privateState.userImage = value ? (value["userImage"] ? value["userImage"] : null) : null;
            privateState.userlastname = value ? (value["userlastname"] ? value["userlastname"] : null) : null;
            privateState.zipcode = value ? (value["zipcode"] ? value["zipcode"] : null) : null;
            privateState.rating = value ? (value["rating"] ? value["rating"] : null) : null;
            privateState.featureRequest = value ? (value["featureRequest"] ? value["featureRequest"] : null) : null;
            privateState.description = value ? (value["description"] ? value["description"] : null) : null;
            privateState.default_account_wire = value ? (value["default_account_wire"] ? value["default_account_wire"] : null) : null;
            privateState.isWireTransferActivated = value ? (value["isWireTransferActivated"] ? value["isWireTransferActivated"] : null) : null;
            privateState.isWireTransferEligible = value ? (value["isWireTransferEligible"] ? value["isWireTransferEligible"] : null) : null;
            privateState.countryType = value ? (value["countryType"] ? value["countryType"] : null) : null;
            privateState.error = value ? (value["error"] ? value["error"] : null) : null;
            privateState.extension = value ? (value["extension"] ? value["extension"] : null) : null;
            privateState.id = value ? (value["id"] ? value["id"] : null) : null;
            privateState.isPrimary = value ? (value["isPrimary"] ? value["isPrimary"] : null) : null;
            privateState.phoneNumber = value ? (value["phoneNumber"] ? value["phoneNumber"] : null) : null;
            privateState.receivePromotions = value ? (value["receivePromotions"] ? value["receivePromotions"] : null) : null;
            privateState.type = value ? (value["type"] ? value["type"] : null) : null;
        };
    }
    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(Dashboard);
    //Create new class level validator object
    BaseModel.Validator.call(Dashboard);
    var registerValidatorBackup = Dashboard.registerValidator;
    Dashboard.registerValidator = function() {
            var propName = arguments[0];
            if (!setterFunctions[propName].changed) {
                var setterBackup = setterFunctions[propName];
                setterFunctions[arguments[0]] = function() {
                    if (Dashboard.isValid(this, propName, val)) {
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
        //For Operation 'getDashboard' with service id 'getDashboard7732'
    Dashboard.getDashboard = function(params, onCompletion) {
        return Dashboard.customVerb('getDashboard', params, onCompletion);
    };
    var relations = [];
    Dashboard.relations = relations;
    Dashboard.prototype.isValid = function() {
        return Dashboard.isValid(this);
    };
    Dashboard.prototype.objModelName = "Dashboard";
    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    Dashboard.registerProcessors = function(options, successCallback, failureCallback) {
        if (!options) {
            options = {};
        }
        if (options && ((options["preProcessor"] && typeof(options["preProcessor"]) === "function") || !options["preProcessor"])) {
            preProcessorCallback = options["preProcessor"];
        }
        if (options && ((options["postProcessor"] && typeof(options["postProcessor"]) === "function") || !options["postProcessor"])) {
            postProcessorCallback = options["postProcessor"];
        }

        function metaDataSuccess(res) {
            objectMetadata = kony.mvc.util.ProcessorUtils.convertObjectMetadataToFieldMetadataMap(res);
            successCallback();
        }

        function metaDataFailure(err) {
            failureCallback(err);
        }
        kony.mvc.util.ProcessorUtils.getMetadataForObject("RBObjects", "Dashboard", options, metaDataSuccess, metaDataFailure);
    };
    //clone the object provided in argument.
    Dashboard.clone = function(objectToClone) {
        var clonedObj = new Dashboard();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };
    return Dashboard;
});