/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "ExternalTransactionsAggregation", "objectService" : "AccountAggregation"};

    var setterFunctions = {
        AccountId: function(val, state) {
            context["field"] = "AccountId";
            context["metadata"] = (objectMetadata ? objectMetadata["AccountId"] : null);
            state['AccountId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Amount: function(val, state) {
            context["field"] = "Amount";
            context["metadata"] = (objectMetadata ? objectMetadata["Amount"] : null);
            state['Amount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        TransactionDate: function(val, state) {
            context["field"] = "TransactionDate";
            context["metadata"] = (objectMetadata ? objectMetadata["TransactionDate"] : null);
            state['TransactionDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        id: function(val, state) {
            context["field"] = "id";
            context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
            state['id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        name: function(val, state) {
            context["field"] = "name";
            context["metadata"] = (objectMetadata ? objectMetadata["name"] : null);
            state['name'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        AvailableBalance: function(val, state) {
            context["field"] = "AvailableBalance";
            context["metadata"] = (objectMetadata ? objectMetadata["AvailableBalance"] : null);
            state['AvailableBalance'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        ScheduledDate: function(val, state) {
            context["field"] = "ScheduledDate";
            context["metadata"] = (objectMetadata ? objectMetadata["ScheduledDate"] : null);
            state['ScheduledDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        TransactionType: function(val, state) {
            context["field"] = "TransactionType";
            context["metadata"] = (objectMetadata ? objectMetadata["TransactionType"] : null);
            state['TransactionType'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        allowed_attempts: function(val, state) {
            context["field"] = "allowed_attempts";
            context["metadata"] = (objectMetadata ? objectMetadata["allowed_attempts"] : null);
            state['allowed_attempts'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        challenge_id: function(val, state) {
            context["field"] = "challenge_id";
            context["metadata"] = (objectMetadata ? objectMetadata["challenge_id"] : null);
            state['challenge_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        challenge_type: function(val, state) {
            context["field"] = "challenge_type";
            context["metadata"] = (objectMetadata ? objectMetadata["challenge_type"] : null);
            state['challenge_type'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        charged_amount: function(val, state) {
            context["field"] = "charged_amount";
            context["metadata"] = (objectMetadata ? objectMetadata["charged_amount"] : null);
            state['charged_amount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        charged_currency_type: function(val, state) {
            context["field"] = "charged_currency_type";
            context["metadata"] = (objectMetadata ? objectMetadata["charged_currency_type"] : null);
            state['charged_currency_type'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        charge_policy: function(val, state) {
            context["field"] = "charge_policy";
            context["metadata"] = (objectMetadata ? objectMetadata["charge_policy"] : null);
            state['charge_policy'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        charge_summary: function(val, state) {
            context["field"] = "charge_summary";
            context["metadata"] = (objectMetadata ? objectMetadata["charge_summary"] : null);
            state['charge_summary'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        PayeeId: function(val, state) {
            context["field"] = "PayeeId";
            context["metadata"] = (objectMetadata ? objectMetadata["PayeeId"] : null);
            state['PayeeId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        end_date: function(val, state) {
            context["field"] = "end_date";
            context["metadata"] = (objectMetadata ? objectMetadata["end_date"] : null);
            state['end_date'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        payee_account_id: function(val, state) {
            context["field"] = "payee_account_id";
            context["metadata"] = (objectMetadata ? objectMetadata["payee_account_id"] : null);
            state['payee_account_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        payee_bank_id: function(val, state) {
            context["field"] = "payee_bank_id";
            context["metadata"] = (objectMetadata ? objectMetadata["payee_bank_id"] : null);
            state['payee_bank_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        payer_account_id: function(val, state) {
            context["field"] = "payer_account_id";
            context["metadata"] = (objectMetadata ? objectMetadata["payer_account_id"] : null);
            state['payer_account_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        payer_bank_id: function(val, state) {
            context["field"] = "payer_bank_id";
            context["metadata"] = (objectMetadata ? objectMetadata["payer_bank_id"] : null);
            state['payer_bank_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        start_date: function(val, state) {
            context["field"] = "start_date";
            context["metadata"] = (objectMetadata ? objectMetadata["start_date"] : null);
            state['start_date'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        transacted_amount: function(val, state) {
            context["field"] = "transacted_amount";
            context["metadata"] = (objectMetadata ? objectMetadata["transacted_amount"] : null);
            state['transacted_amount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        transacted_currency_type: function(val, state) {
            context["field"] = "transacted_currency_type";
            context["metadata"] = (objectMetadata ? objectMetadata["transacted_currency_type"] : null);
            state['transacted_currency_type'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        transaction_description: function(val, state) {
            context["field"] = "transaction_description";
            context["metadata"] = (objectMetadata ? objectMetadata["transaction_description"] : null);
            state['transaction_description'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        TransactionId: function(val, state) {
            context["field"] = "TransactionId";
            context["metadata"] = (objectMetadata ? objectMetadata["TransactionId"] : null);
            state['TransactionId'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        transaction_ids: function(val, state) {
            context["field"] = "transaction_ids";
            context["metadata"] = (objectMetadata ? objectMetadata["transaction_ids"] : null);
            state['transaction_ids'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        transaction_type: function(val, state) {
            context["field"] = "transaction_type";
            context["metadata"] = (objectMetadata ? objectMetadata["transaction_type"] : null);
            state['transaction_type'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        transation_status: function(val, state) {
            context["field"] = "transation_status";
            context["metadata"] = (objectMetadata ? objectMetadata["transation_status"] : null);
            state['transation_status'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        currency_type: function(val, state) {
            context["field"] = "currency_type";
            context["metadata"] = (objectMetadata ? objectMetadata["currency_type"] : null);
            state['currency_type'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        account: function(val, state) {
            context["field"] = "account";
            context["metadata"] = (objectMetadata ? objectMetadata["account"] : null);
            state['account'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        bank_name: function(val, state) {
            context["field"] = "bank_name";
            context["metadata"] = (objectMetadata ? objectMetadata["bank_name"] : null);
            state['bank_name'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        main_user: function(val, state) {
            context["field"] = "main_user";
            context["metadata"] = (objectMetadata ? objectMetadata["main_user"] : null);
            state['main_user'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        username: function(val, state) {
            context["field"] = "username";
            context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
            state['username'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        bank_id: function(val, state) {
            context["field"] = "bank_id";
            context["metadata"] = (objectMetadata ? objectMetadata["bank_id"] : null);
            state['bank_id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        description: function(val, state) {
            context["field"] = "description";
            context["metadata"] = (objectMetadata ? objectMetadata["description"] : null);
            state['description'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        PayPersonName: function(val, state) {
            context["field"] = "PayPersonName";
            context["metadata"] = (objectMetadata ? objectMetadata["PayPersonName"] : null);
            state['PayPersonName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Status: function(val, state) {
            context["field"] = "Status";
            context["metadata"] = (objectMetadata ? objectMetadata["Status"] : null);
            state['Status'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        no_of_transactions: function(val, state) {
            context["field"] = "no_of_transactions";
            context["metadata"] = (objectMetadata ? objectMetadata["no_of_transactions"] : null);
            state['no_of_transactions'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        isSearch: function(val, state) {
            context["field"] = "isSearch";
            context["metadata"] = (objectMetadata ? objectMetadata["isSearch"] : null);
            state['isSearch'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        keyword: function(val, state) {
            context["field"] = "keyword";
            context["metadata"] = (objectMetadata ? objectMetadata["keyword"] : null);
            state['keyword'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        startDate: function(val, state) {
            context["field"] = "startDate";
            context["metadata"] = (objectMetadata ? objectMetadata["startDate"] : null);
            state['startDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        endDate: function(val, state) {
            context["field"] = "endDate";
            context["metadata"] = (objectMetadata ? objectMetadata["endDate"] : null);
            state['endDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        minAmount: function(val, state) {
            context["field"] = "minAmount";
            context["metadata"] = (objectMetadata ? objectMetadata["minAmount"] : null);
            state['minAmount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        maxAmount: function(val, state) {
            context["field"] = "maxAmount";
            context["metadata"] = (objectMetadata ? objectMetadata["maxAmount"] : null);
            state['maxAmount'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        sortby: function(val, state) {
            context["field"] = "sortby";
            context["metadata"] = (objectMetadata ? objectMetadata["sortby"] : null);
            state['sortby'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        orderby: function(val, state) {
            context["field"] = "orderby";
            context["metadata"] = (objectMetadata ? objectMetadata["orderby"] : null);
            state['orderby'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function ExternalTransactionsAggregation(defaultValues) {
        var privateState = {};
        context["field"] = "AccountId";
        context["metadata"] = (objectMetadata ? objectMetadata["AccountId"] : null);
        privateState.AccountId = defaultValues ?
            (defaultValues["AccountId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AccountId"], context) :
                null) :
            null;

        context["field"] = "Amount";
        context["metadata"] = (objectMetadata ? objectMetadata["Amount"] : null);
        privateState.Amount = defaultValues ?
            (defaultValues["Amount"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Amount"], context) :
                null) :
            null;

        context["field"] = "TransactionDate";
        context["metadata"] = (objectMetadata ? objectMetadata["TransactionDate"] : null);
        privateState.TransactionDate = defaultValues ?
            (defaultValues["TransactionDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["TransactionDate"], context) :
                null) :
            null;

        context["field"] = "id";
        context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
        privateState.id = defaultValues ?
            (defaultValues["id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["id"], context) :
                null) :
            null;

        context["field"] = "name";
        context["metadata"] = (objectMetadata ? objectMetadata["name"] : null);
        privateState.name = defaultValues ?
            (defaultValues["name"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["name"], context) :
                null) :
            null;

        context["field"] = "AvailableBalance";
        context["metadata"] = (objectMetadata ? objectMetadata["AvailableBalance"] : null);
        privateState.AvailableBalance = defaultValues ?
            (defaultValues["AvailableBalance"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["AvailableBalance"], context) :
                null) :
            null;

        context["field"] = "ScheduledDate";
        context["metadata"] = (objectMetadata ? objectMetadata["ScheduledDate"] : null);
        privateState.ScheduledDate = defaultValues ?
            (defaultValues["ScheduledDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ScheduledDate"], context) :
                null) :
            null;

        context["field"] = "TransactionType";
        context["metadata"] = (objectMetadata ? objectMetadata["TransactionType"] : null);
        privateState.TransactionType = defaultValues ?
            (defaultValues["TransactionType"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["TransactionType"], context) :
                null) :
            null;

        context["field"] = "allowed_attempts";
        context["metadata"] = (objectMetadata ? objectMetadata["allowed_attempts"] : null);
        privateState.allowed_attempts = defaultValues ?
            (defaultValues["allowed_attempts"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["allowed_attempts"], context) :
                null) :
            null;

        context["field"] = "challenge_id";
        context["metadata"] = (objectMetadata ? objectMetadata["challenge_id"] : null);
        privateState.challenge_id = defaultValues ?
            (defaultValues["challenge_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["challenge_id"], context) :
                null) :
            null;

        context["field"] = "challenge_type";
        context["metadata"] = (objectMetadata ? objectMetadata["challenge_type"] : null);
        privateState.challenge_type = defaultValues ?
            (defaultValues["challenge_type"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["challenge_type"], context) :
                null) :
            null;

        context["field"] = "charged_amount";
        context["metadata"] = (objectMetadata ? objectMetadata["charged_amount"] : null);
        privateState.charged_amount = defaultValues ?
            (defaultValues["charged_amount"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["charged_amount"], context) :
                null) :
            null;

        context["field"] = "charged_currency_type";
        context["metadata"] = (objectMetadata ? objectMetadata["charged_currency_type"] : null);
        privateState.charged_currency_type = defaultValues ?
            (defaultValues["charged_currency_type"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["charged_currency_type"], context) :
                null) :
            null;

        context["field"] = "charge_policy";
        context["metadata"] = (objectMetadata ? objectMetadata["charge_policy"] : null);
        privateState.charge_policy = defaultValues ?
            (defaultValues["charge_policy"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["charge_policy"], context) :
                null) :
            null;

        context["field"] = "charge_summary";
        context["metadata"] = (objectMetadata ? objectMetadata["charge_summary"] : null);
        privateState.charge_summary = defaultValues ?
            (defaultValues["charge_summary"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["charge_summary"], context) :
                null) :
            null;

        context["field"] = "PayeeId";
        context["metadata"] = (objectMetadata ? objectMetadata["PayeeId"] : null);
        privateState.PayeeId = defaultValues ?
            (defaultValues["PayeeId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["PayeeId"], context) :
                null) :
            null;

        context["field"] = "end_date";
        context["metadata"] = (objectMetadata ? objectMetadata["end_date"] : null);
        privateState.end_date = defaultValues ?
            (defaultValues["end_date"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["end_date"], context) :
                null) :
            null;

        context["field"] = "payee_account_id";
        context["metadata"] = (objectMetadata ? objectMetadata["payee_account_id"] : null);
        privateState.payee_account_id = defaultValues ?
            (defaultValues["payee_account_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["payee_account_id"], context) :
                null) :
            null;

        context["field"] = "payee_bank_id";
        context["metadata"] = (objectMetadata ? objectMetadata["payee_bank_id"] : null);
        privateState.payee_bank_id = defaultValues ?
            (defaultValues["payee_bank_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["payee_bank_id"], context) :
                null) :
            null;

        context["field"] = "payer_account_id";
        context["metadata"] = (objectMetadata ? objectMetadata["payer_account_id"] : null);
        privateState.payer_account_id = defaultValues ?
            (defaultValues["payer_account_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["payer_account_id"], context) :
                null) :
            null;

        context["field"] = "payer_bank_id";
        context["metadata"] = (objectMetadata ? objectMetadata["payer_bank_id"] : null);
        privateState.payer_bank_id = defaultValues ?
            (defaultValues["payer_bank_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["payer_bank_id"], context) :
                null) :
            null;

        context["field"] = "start_date";
        context["metadata"] = (objectMetadata ? objectMetadata["start_date"] : null);
        privateState.start_date = defaultValues ?
            (defaultValues["start_date"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["start_date"], context) :
                null) :
            null;

        context["field"] = "transacted_amount";
        context["metadata"] = (objectMetadata ? objectMetadata["transacted_amount"] : null);
        privateState.transacted_amount = defaultValues ?
            (defaultValues["transacted_amount"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["transacted_amount"], context) :
                null) :
            null;

        context["field"] = "transacted_currency_type";
        context["metadata"] = (objectMetadata ? objectMetadata["transacted_currency_type"] : null);
        privateState.transacted_currency_type = defaultValues ?
            (defaultValues["transacted_currency_type"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["transacted_currency_type"], context) :
                null) :
            null;

        context["field"] = "transaction_description";
        context["metadata"] = (objectMetadata ? objectMetadata["transaction_description"] : null);
        privateState.transaction_description = defaultValues ?
            (defaultValues["transaction_description"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["transaction_description"], context) :
                null) :
            null;

        context["field"] = "TransactionId";
        context["metadata"] = (objectMetadata ? objectMetadata["TransactionId"] : null);
        privateState.TransactionId = defaultValues ?
            (defaultValues["TransactionId"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["TransactionId"], context) :
                null) :
            null;

        context["field"] = "transaction_ids";
        context["metadata"] = (objectMetadata ? objectMetadata["transaction_ids"] : null);
        privateState.transaction_ids = defaultValues ?
            (defaultValues["transaction_ids"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["transaction_ids"], context) :
                null) :
            null;

        context["field"] = "transaction_type";
        context["metadata"] = (objectMetadata ? objectMetadata["transaction_type"] : null);
        privateState.transaction_type = defaultValues ?
            (defaultValues["transaction_type"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["transaction_type"], context) :
                null) :
            null;

        context["field"] = "transation_status";
        context["metadata"] = (objectMetadata ? objectMetadata["transation_status"] : null);
        privateState.transation_status = defaultValues ?
            (defaultValues["transation_status"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["transation_status"], context) :
                null) :
            null;

        context["field"] = "currency_type";
        context["metadata"] = (objectMetadata ? objectMetadata["currency_type"] : null);
        privateState.currency_type = defaultValues ?
            (defaultValues["currency_type"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["currency_type"], context) :
                null) :
            null;

        context["field"] = "account";
        context["metadata"] = (objectMetadata ? objectMetadata["account"] : null);
        privateState.account = defaultValues ?
            (defaultValues["account"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["account"], context) :
                null) :
            null;

        context["field"] = "bank_name";
        context["metadata"] = (objectMetadata ? objectMetadata["bank_name"] : null);
        privateState.bank_name = defaultValues ?
            (defaultValues["bank_name"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["bank_name"], context) :
                null) :
            null;

        context["field"] = "main_user";
        context["metadata"] = (objectMetadata ? objectMetadata["main_user"] : null);
        privateState.main_user = defaultValues ?
            (defaultValues["main_user"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["main_user"], context) :
                null) :
            null;

        context["field"] = "username";
        context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
        privateState.username = defaultValues ?
            (defaultValues["username"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["username"], context) :
                null) :
            null;

        context["field"] = "bank_id";
        context["metadata"] = (objectMetadata ? objectMetadata["bank_id"] : null);
        privateState.bank_id = defaultValues ?
            (defaultValues["bank_id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["bank_id"], context) :
                null) :
            null;

        context["field"] = "description";
        context["metadata"] = (objectMetadata ? objectMetadata["description"] : null);
        privateState.description = defaultValues ?
            (defaultValues["description"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["description"], context) :
                null) :
            null;

        context["field"] = "PayPersonName";
        context["metadata"] = (objectMetadata ? objectMetadata["PayPersonName"] : null);
        privateState.PayPersonName = defaultValues ?
            (defaultValues["PayPersonName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["PayPersonName"], context) :
                null) :
            null;

        context["field"] = "Status";
        context["metadata"] = (objectMetadata ? objectMetadata["Status"] : null);
        privateState.Status = defaultValues ?
            (defaultValues["Status"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Status"], context) :
                null) :
            null;

        context["field"] = "no_of_transactions";
        context["metadata"] = (objectMetadata ? objectMetadata["no_of_transactions"] : null);
        privateState.no_of_transactions = defaultValues ?
            (defaultValues["no_of_transactions"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["no_of_transactions"], context) :
                null) :
            null;

        context["field"] = "isSearch";
        context["metadata"] = (objectMetadata ? objectMetadata["isSearch"] : null);
        privateState.isSearch = defaultValues ?
            (defaultValues["isSearch"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["isSearch"], context) :
                null) :
            null;

        context["field"] = "keyword";
        context["metadata"] = (objectMetadata ? objectMetadata["keyword"] : null);
        privateState.keyword = defaultValues ?
            (defaultValues["keyword"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["keyword"], context) :
                null) :
            null;

        context["field"] = "startDate";
        context["metadata"] = (objectMetadata ? objectMetadata["startDate"] : null);
        privateState.startDate = defaultValues ?
            (defaultValues["startDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["startDate"], context) :
                null) :
            null;

        context["field"] = "endDate";
        context["metadata"] = (objectMetadata ? objectMetadata["endDate"] : null);
        privateState.endDate = defaultValues ?
            (defaultValues["endDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["endDate"], context) :
                null) :
            null;

        context["field"] = "minAmount";
        context["metadata"] = (objectMetadata ? objectMetadata["minAmount"] : null);
        privateState.minAmount = defaultValues ?
            (defaultValues["minAmount"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["minAmount"], context) :
                null) :
            null;

        context["field"] = "maxAmount";
        context["metadata"] = (objectMetadata ? objectMetadata["maxAmount"] : null);
        privateState.maxAmount = defaultValues ?
            (defaultValues["maxAmount"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["maxAmount"], context) :
                null) :
            null;

        context["field"] = "sortby";
        context["metadata"] = (objectMetadata ? objectMetadata["sortby"] : null);
        privateState.sortby = defaultValues ?
            (defaultValues["sortby"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["sortby"], context) :
                null) :
            null;

        context["field"] = "orderby";
        context["metadata"] = (objectMetadata ? objectMetadata["orderby"] : null);
        privateState.orderby = defaultValues ?
            (defaultValues["orderby"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["orderby"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "AccountId": {
                get: function() {
                    context["field"] = "AccountId";
                    context["metadata"] = (objectMetadata ? objectMetadata["AccountId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.AccountId, context);
                },
                set: function(val) {
                    setterFunctions['AccountId'].call(this, val, privateState);
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
            "name": {
                get: function() {
                    context["field"] = "name";
                    context["metadata"] = (objectMetadata ? objectMetadata["name"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.name, context);
                },
                set: function(val) {
                    setterFunctions['name'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "AvailableBalance": {
                get: function() {
                    context["field"] = "AvailableBalance";
                    context["metadata"] = (objectMetadata ? objectMetadata["AvailableBalance"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.AvailableBalance, context);
                },
                set: function(val) {
                    setterFunctions['AvailableBalance'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "ScheduledDate": {
                get: function() {
                    context["field"] = "ScheduledDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["ScheduledDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ScheduledDate, context);
                },
                set: function(val) {
                    setterFunctions['ScheduledDate'].call(this, val, privateState);
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
            "allowed_attempts": {
                get: function() {
                    context["field"] = "allowed_attempts";
                    context["metadata"] = (objectMetadata ? objectMetadata["allowed_attempts"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.allowed_attempts, context);
                },
                set: function(val) {
                    setterFunctions['allowed_attempts'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "challenge_id": {
                get: function() {
                    context["field"] = "challenge_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["challenge_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.challenge_id, context);
                },
                set: function(val) {
                    setterFunctions['challenge_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "challenge_type": {
                get: function() {
                    context["field"] = "challenge_type";
                    context["metadata"] = (objectMetadata ? objectMetadata["challenge_type"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.challenge_type, context);
                },
                set: function(val) {
                    setterFunctions['challenge_type'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "charged_amount": {
                get: function() {
                    context["field"] = "charged_amount";
                    context["metadata"] = (objectMetadata ? objectMetadata["charged_amount"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.charged_amount, context);
                },
                set: function(val) {
                    setterFunctions['charged_amount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "charged_currency_type": {
                get: function() {
                    context["field"] = "charged_currency_type";
                    context["metadata"] = (objectMetadata ? objectMetadata["charged_currency_type"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.charged_currency_type, context);
                },
                set: function(val) {
                    setterFunctions['charged_currency_type'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "charge_policy": {
                get: function() {
                    context["field"] = "charge_policy";
                    context["metadata"] = (objectMetadata ? objectMetadata["charge_policy"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.charge_policy, context);
                },
                set: function(val) {
                    setterFunctions['charge_policy'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "charge_summary": {
                get: function() {
                    context["field"] = "charge_summary";
                    context["metadata"] = (objectMetadata ? objectMetadata["charge_summary"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.charge_summary, context);
                },
                set: function(val) {
                    setterFunctions['charge_summary'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "PayeeId": {
                get: function() {
                    context["field"] = "PayeeId";
                    context["metadata"] = (objectMetadata ? objectMetadata["PayeeId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.PayeeId, context);
                },
                set: function(val) {
                    setterFunctions['PayeeId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "end_date": {
                get: function() {
                    context["field"] = "end_date";
                    context["metadata"] = (objectMetadata ? objectMetadata["end_date"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.end_date, context);
                },
                set: function(val) {
                    setterFunctions['end_date'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "payee_account_id": {
                get: function() {
                    context["field"] = "payee_account_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["payee_account_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.payee_account_id, context);
                },
                set: function(val) {
                    setterFunctions['payee_account_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "payee_bank_id": {
                get: function() {
                    context["field"] = "payee_bank_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["payee_bank_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.payee_bank_id, context);
                },
                set: function(val) {
                    setterFunctions['payee_bank_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "payer_account_id": {
                get: function() {
                    context["field"] = "payer_account_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["payer_account_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.payer_account_id, context);
                },
                set: function(val) {
                    setterFunctions['payer_account_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "payer_bank_id": {
                get: function() {
                    context["field"] = "payer_bank_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["payer_bank_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.payer_bank_id, context);
                },
                set: function(val) {
                    setterFunctions['payer_bank_id'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "start_date": {
                get: function() {
                    context["field"] = "start_date";
                    context["metadata"] = (objectMetadata ? objectMetadata["start_date"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.start_date, context);
                },
                set: function(val) {
                    setterFunctions['start_date'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "transacted_amount": {
                get: function() {
                    context["field"] = "transacted_amount";
                    context["metadata"] = (objectMetadata ? objectMetadata["transacted_amount"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.transacted_amount, context);
                },
                set: function(val) {
                    setterFunctions['transacted_amount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "transacted_currency_type": {
                get: function() {
                    context["field"] = "transacted_currency_type";
                    context["metadata"] = (objectMetadata ? objectMetadata["transacted_currency_type"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.transacted_currency_type, context);
                },
                set: function(val) {
                    setterFunctions['transacted_currency_type'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "transaction_description": {
                get: function() {
                    context["field"] = "transaction_description";
                    context["metadata"] = (objectMetadata ? objectMetadata["transaction_description"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.transaction_description, context);
                },
                set: function(val) {
                    setterFunctions['transaction_description'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "TransactionId": {
                get: function() {
                    context["field"] = "TransactionId";
                    context["metadata"] = (objectMetadata ? objectMetadata["TransactionId"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.TransactionId, context);
                },
                set: function(val) {
                    setterFunctions['TransactionId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "transaction_ids": {
                get: function() {
                    context["field"] = "transaction_ids";
                    context["metadata"] = (objectMetadata ? objectMetadata["transaction_ids"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.transaction_ids, context);
                },
                set: function(val) {
                    setterFunctions['transaction_ids'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "transaction_type": {
                get: function() {
                    context["field"] = "transaction_type";
                    context["metadata"] = (objectMetadata ? objectMetadata["transaction_type"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.transaction_type, context);
                },
                set: function(val) {
                    setterFunctions['transaction_type'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "transation_status": {
                get: function() {
                    context["field"] = "transation_status";
                    context["metadata"] = (objectMetadata ? objectMetadata["transation_status"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.transation_status, context);
                },
                set: function(val) {
                    setterFunctions['transation_status'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "currency_type": {
                get: function() {
                    context["field"] = "currency_type";
                    context["metadata"] = (objectMetadata ? objectMetadata["currency_type"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.currency_type, context);
                },
                set: function(val) {
                    setterFunctions['currency_type'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "account": {
                get: function() {
                    context["field"] = "account";
                    context["metadata"] = (objectMetadata ? objectMetadata["account"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.account, context);
                },
                set: function(val) {
                    setterFunctions['account'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "bank_name": {
                get: function() {
                    context["field"] = "bank_name";
                    context["metadata"] = (objectMetadata ? objectMetadata["bank_name"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.bank_name, context);
                },
                set: function(val) {
                    setterFunctions['bank_name'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "main_user": {
                get: function() {
                    context["field"] = "main_user";
                    context["metadata"] = (objectMetadata ? objectMetadata["main_user"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.main_user, context);
                },
                set: function(val) {
                    setterFunctions['main_user'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "username": {
                get: function() {
                    context["field"] = "username";
                    context["metadata"] = (objectMetadata ? objectMetadata["username"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.username, context);
                },
                set: function(val) {
                    setterFunctions['username'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "bank_id": {
                get: function() {
                    context["field"] = "bank_id";
                    context["metadata"] = (objectMetadata ? objectMetadata["bank_id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.bank_id, context);
                },
                set: function(val) {
                    setterFunctions['bank_id'].call(this, val, privateState);
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
            "PayPersonName": {
                get: function() {
                    context["field"] = "PayPersonName";
                    context["metadata"] = (objectMetadata ? objectMetadata["PayPersonName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.PayPersonName, context);
                },
                set: function(val) {
                    setterFunctions['PayPersonName'].call(this, val, privateState);
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
            "no_of_transactions": {
                get: function() {
                    context["field"] = "no_of_transactions";
                    context["metadata"] = (objectMetadata ? objectMetadata["no_of_transactions"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.no_of_transactions, context);
                },
                set: function(val) {
                    setterFunctions['no_of_transactions'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "isSearch": {
                get: function() {
                    context["field"] = "isSearch";
                    context["metadata"] = (objectMetadata ? objectMetadata["isSearch"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.isSearch, context);
                },
                set: function(val) {
                    setterFunctions['isSearch'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "keyword": {
                get: function() {
                    context["field"] = "keyword";
                    context["metadata"] = (objectMetadata ? objectMetadata["keyword"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.keyword, context);
                },
                set: function(val) {
                    setterFunctions['keyword'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "startDate": {
                get: function() {
                    context["field"] = "startDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["startDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.startDate, context);
                },
                set: function(val) {
                    setterFunctions['startDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "endDate": {
                get: function() {
                    context["field"] = "endDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["endDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.endDate, context);
                },
                set: function(val) {
                    setterFunctions['endDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "minAmount": {
                get: function() {
                    context["field"] = "minAmount";
                    context["metadata"] = (objectMetadata ? objectMetadata["minAmount"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.minAmount, context);
                },
                set: function(val) {
                    setterFunctions['minAmount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "maxAmount": {
                get: function() {
                    context["field"] = "maxAmount";
                    context["metadata"] = (objectMetadata ? objectMetadata["maxAmount"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.maxAmount, context);
                },
                set: function(val) {
                    setterFunctions['maxAmount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "sortby": {
                get: function() {
                    context["field"] = "sortby";
                    context["metadata"] = (objectMetadata ? objectMetadata["sortby"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.sortby, context);
                },
                set: function(val) {
                    setterFunctions['sortby'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "orderby": {
                get: function() {
                    context["field"] = "orderby";
                    context["metadata"] = (objectMetadata ? objectMetadata["orderby"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.orderby, context);
                },
                set: function(val) {
                    setterFunctions['orderby'].call(this, val, privateState);
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
            privateState.AccountId = value ? (value["AccountId"] ? value["AccountId"] : null) : null;
            privateState.Amount = value ? (value["Amount"] ? value["Amount"] : null) : null;
            privateState.TransactionDate = value ? (value["TransactionDate"] ? value["TransactionDate"] : null) : null;
            privateState.id = value ? (value["id"] ? value["id"] : null) : null;
            privateState.name = value ? (value["name"] ? value["name"] : null) : null;
            privateState.AvailableBalance = value ? (value["AvailableBalance"] ? value["AvailableBalance"] : null) : null;
            privateState.ScheduledDate = value ? (value["ScheduledDate"] ? value["ScheduledDate"] : null) : null;
            privateState.TransactionType = value ? (value["TransactionType"] ? value["TransactionType"] : null) : null;
            privateState.allowed_attempts = value ? (value["allowed_attempts"] ? value["allowed_attempts"] : null) : null;
            privateState.challenge_id = value ? (value["challenge_id"] ? value["challenge_id"] : null) : null;
            privateState.challenge_type = value ? (value["challenge_type"] ? value["challenge_type"] : null) : null;
            privateState.charged_amount = value ? (value["charged_amount"] ? value["charged_amount"] : null) : null;
            privateState.charged_currency_type = value ? (value["charged_currency_type"] ? value["charged_currency_type"] : null) : null;
            privateState.charge_policy = value ? (value["charge_policy"] ? value["charge_policy"] : null) : null;
            privateState.charge_summary = value ? (value["charge_summary"] ? value["charge_summary"] : null) : null;
            privateState.PayeeId = value ? (value["PayeeId"] ? value["PayeeId"] : null) : null;
            privateState.end_date = value ? (value["end_date"] ? value["end_date"] : null) : null;
            privateState.payee_account_id = value ? (value["payee_account_id"] ? value["payee_account_id"] : null) : null;
            privateState.payee_bank_id = value ? (value["payee_bank_id"] ? value["payee_bank_id"] : null) : null;
            privateState.payer_account_id = value ? (value["payer_account_id"] ? value["payer_account_id"] : null) : null;
            privateState.payer_bank_id = value ? (value["payer_bank_id"] ? value["payer_bank_id"] : null) : null;
            privateState.start_date = value ? (value["start_date"] ? value["start_date"] : null) : null;
            privateState.transacted_amount = value ? (value["transacted_amount"] ? value["transacted_amount"] : null) : null;
            privateState.transacted_currency_type = value ? (value["transacted_currency_type"] ? value["transacted_currency_type"] : null) : null;
            privateState.transaction_description = value ? (value["transaction_description"] ? value["transaction_description"] : null) : null;
            privateState.TransactionId = value ? (value["TransactionId"] ? value["TransactionId"] : null) : null;
            privateState.transaction_ids = value ? (value["transaction_ids"] ? value["transaction_ids"] : null) : null;
            privateState.transaction_type = value ? (value["transaction_type"] ? value["transaction_type"] : null) : null;
            privateState.transation_status = value ? (value["transation_status"] ? value["transation_status"] : null) : null;
            privateState.currency_type = value ? (value["currency_type"] ? value["currency_type"] : null) : null;
            privateState.account = value ? (value["account"] ? value["account"] : null) : null;
            privateState.bank_name = value ? (value["bank_name"] ? value["bank_name"] : null) : null;
            privateState.main_user = value ? (value["main_user"] ? value["main_user"] : null) : null;
            privateState.username = value ? (value["username"] ? value["username"] : null) : null;
            privateState.bank_id = value ? (value["bank_id"] ? value["bank_id"] : null) : null;
            privateState.description = value ? (value["description"] ? value["description"] : null) : null;
            privateState.PayPersonName = value ? (value["PayPersonName"] ? value["PayPersonName"] : null) : null;
            privateState.Status = value ? (value["Status"] ? value["Status"] : null) : null;
            privateState.no_of_transactions = value ? (value["no_of_transactions"] ? value["no_of_transactions"] : null) : null;
            privateState.isSearch = value ? (value["isSearch"] ? value["isSearch"] : null) : null;
            privateState.keyword = value ? (value["keyword"] ? value["keyword"] : null) : null;
            privateState.startDate = value ? (value["startDate"] ? value["startDate"] : null) : null;
            privateState.endDate = value ? (value["endDate"] ? value["endDate"] : null) : null;
            privateState.minAmount = value ? (value["minAmount"] ? value["minAmount"] : null) : null;
            privateState.maxAmount = value ? (value["maxAmount"] ? value["maxAmount"] : null) : null;
            privateState.sortby = value ? (value["sortby"] ? value["sortby"] : null) : null;
            privateState.orderby = value ? (value["orderby"] ? value["orderby"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(ExternalTransactionsAggregation);

    //Create new class level validator object
    BaseModel.Validator.call(ExternalTransactionsAggregation);

    var registerValidatorBackup = ExternalTransactionsAggregation.registerValidator;

    ExternalTransactionsAggregation.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(ExternalTransactionsAggregation.isValid(this, propName, val)) {
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
    var relations = [];

    ExternalTransactionsAggregation.relations = relations;

    ExternalTransactionsAggregation.prototype.isValid = function() {
        return ExternalTransactionsAggregation.isValid(this);
    };

    ExternalTransactionsAggregation.prototype.objModelName = "ExternalTransactionsAggregation";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    ExternalTransactionsAggregation.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("AccountAggregation", "ExternalTransactionsAggregation", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    ExternalTransactionsAggregation.clone = function(objectToClone) {
        var clonedObj = new ExternalTransactionsAggregation();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return ExternalTransactionsAggregation;
});