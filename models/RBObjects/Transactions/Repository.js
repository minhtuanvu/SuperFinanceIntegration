define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function TransactionsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	TransactionsRepository.prototype = Object.create(BaseRepository.prototype);
	TransactionsRepository.prototype.constructor = TransactionsRepository;

	//For Operation 'stopNextPayment' with service id 'createOrder4211'
	TransactionsRepository.prototype.stopNextPayment = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('stopNextPayment', params, onCompletion);
	};

	//For Operation 'getBankDate' with service id 'getBankDates4328'
	TransactionsRepository.prototype.getBankDate = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getBankDate', params, onCompletion);
	};

	//For Operation 'getPostedUserTransactions' with service id 'searchTransactions1640'
	TransactionsRepository.prototype.getPostedUserTransactions = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getPostedUserTransactions', params, onCompletion);
	};

	//For Operation 'getUserScheduledTransactions' with service id 'upcomingTransactions9129'
	TransactionsRepository.prototype.getUserScheduledTransactions = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getUserScheduledTransactions', params, onCompletion);
	};

	//For Operation 'makeTrialDeposit' with service id 'makeTrialDeposit2251'
	TransactionsRepository.prototype.makeTrialDeposit = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('makeTrialDeposit', params, onCompletion);
	};

	//For Operation 'getPostedCardlessTransactions' with service id 'getPostedCardlessTransactions5420'
	TransactionsRepository.prototype.getPostedCardlessTransactions = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getPostedCardlessTransactions', params, onCompletion);
	};

	//For Operation 'getPendingCardlessTransactions' with service id 'getPendingCardlessTransactions2681'
	TransactionsRepository.prototype.getPendingCardlessTransactions = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getPendingCardlessTransactions', params, onCompletion);
	};

	//For Operation 'getToExternalAccountTransactions' with service id 'getToExternalAccountTransactions3980'
	TransactionsRepository.prototype.getToExternalAccountTransactions = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getToExternalAccountTransactions', params, onCompletion);
	};

	//For Operation 'revokeStopChequePayments' with service id 'revokeStopPaymentRequest5134'
	TransactionsRepository.prototype.revokeStopChequePayments = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('revokeStopChequePayments', params, onCompletion);
	};

	//For Operation 'getScheduledUserTransactions' with service id 'getUserScheduledTransactions4005'
	TransactionsRepository.prototype.getScheduledUserTransactions = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getScheduledUserTransactions', params, onCompletion);
	};

	//For Operation 'getUserCompletedBillHistory' with service id 'getUserCompletedBillHistory2578'
	TransactionsRepository.prototype.getUserCompletedBillHistory = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getUserCompletedBillHistory', params, onCompletion);
	};

	//For Operation 'getStopCheckPaymentRequestTransactions' with service id 'getStopCheckPaymentRequestTransactions9378'
	TransactionsRepository.prototype.getStopCheckPaymentRequestTransactions = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getStopCheckPaymentRequestTransactions', params, onCompletion);
	};

	//For Operation 'getChequeBookRequests' with service id 'getChequeBookRequests1422'
	TransactionsRepository.prototype.getChequeBookRequests = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getChequeBookRequests', params, onCompletion);
	};

	//For Operation 'cancelDirectDebit' with service id 'createOrder7350'
	TransactionsRepository.prototype.cancelDirectDebit = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('cancelDirectDebit', params, onCompletion);
	};

	//For Operation 'getLoanSchedule' with service id 'getAccountPendingAndPostedTransactions2776'
	TransactionsRepository.prototype.getLoanSchedule = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getLoanSchedule', params, onCompletion);
	};

	//For Operation 'getPayeeBills' with service id 'getPayeeBills9801'
	TransactionsRepository.prototype.getPayeeBills = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getPayeeBills', params, onCompletion);
	};

	//For Operation 'getPendingDeposits' with service id 'getPendingDepositTransactions7900'
	TransactionsRepository.prototype.getPendingDeposits = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getPendingDeposits', params, onCompletion);
	};

	//For Operation 'getTransactionDetails' with service id 'getTransactionDetails7882'
	TransactionsRepository.prototype.getTransactionDetails = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getTransactionDetails', params, onCompletion);
	};

	//For Operation 'getPostedTransfersAndP2pTransactions' with service id 'getPostedTransfersAndP2pTransactions4364'
	TransactionsRepository.prototype.getPostedTransfersAndP2pTransactions = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getPostedTransfersAndP2pTransactions', params, onCompletion);
	};

	//For Operation 'getAccountPendingTransactions' with service id 'getPendingUserTransactions8377'
	TransactionsRepository.prototype.getAccountPendingTransactions = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getAccountPendingTransactions', params, onCompletion);
	};

	//For Operation 'getUserWiredTransactions' with service id 'getUserWiredTransactions8719'
	TransactionsRepository.prototype.getUserWiredTransactions = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getUserWiredTransactions', params, onCompletion);
	};

	//For Operation 'getScheduledAccountTransactions' with service id 'getUserTransaction9275'
	TransactionsRepository.prototype.getScheduledAccountTransactions = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getScheduledAccountTransactions', params, onCompletion);
	};

	//For Operation 'getSentP2PTransactions' with service id 'getSentP2PTransactions2748'
	TransactionsRepository.prototype.getSentP2PTransactions = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getSentP2PTransactions', params, onCompletion);
	};

	//For Operation 'downloadfile' with service id 'GetTransactionsDownloaded9922'
	TransactionsRepository.prototype.downloadfile = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('downloadfile', params, onCompletion);
	};

	//For Operation 'getChequeSupplements' with service id 'getChequeSupplements6401'
	TransactionsRepository.prototype.getChequeSupplements = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getChequeSupplements', params, onCompletion);
	};

	//For Operation 'getUsersScheduledBill' with service id 'getUsersScheduledBills2757'
	TransactionsRepository.prototype.getUsersScheduledBill = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getUsersScheduledBill', params, onCompletion);
	};

	//For Operation 'getExternalAccountTransactions' with service id 'getExternalTransactions6873'
	TransactionsRepository.prototype.getExternalAccountTransactions = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getExternalAccountTransactions', params, onCompletion);
	};

	//For Operation 'getPendingUserTransactions' with service id 'searchPendingUserTransactions2123'
	TransactionsRepository.prototype.getPendingUserTransactions = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getPendingUserTransactions', params, onCompletion);
	};

	//For Operation 'getRecipientWireTransaction' with service id 'getRecipientWireTransaction3006'
	TransactionsRepository.prototype.getRecipientWireTransaction = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getRecipientWireTransaction', params, onCompletion);
	};

	//For Operation 'createStopChequePayments' with service id 'CreateStopPaymentRequest7270'
	TransactionsRepository.prototype.createStopChequePayments = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('createStopChequePayments', params, onCompletion);
	};

	//For Operation 'createBulkTransfer' with service id 'createBulkTransfer8976'
	TransactionsRepository.prototype.createBulkTransfer = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('createBulkTransfer', params, onCompletion);
	};

	//For Operation 'withdrawPaymentOrder' with service id 'withdrawPayment9180'
	TransactionsRepository.prototype.withdrawPaymentOrder = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('withdrawPaymentOrder', params, onCompletion);
	};

	//For Operation 'getStopChequePayments' with service id 'getStopChequeRequests8912'
	TransactionsRepository.prototype.getStopChequePayments = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getStopChequePayments', params, onCompletion);
	};

	//For Operation 'getDirectDebits' with service id 'getDirectDebits2193'
	TransactionsRepository.prototype.getDirectDebits = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getDirectDebits', params, onCompletion);
	};

	//For Operation 'getAccountTransactionByType' with service id 'getAccountPendingAndPostedTransactions8864'
	TransactionsRepository.prototype.getAccountTransactionByType = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getAccountTransactionByType', params, onCompletion);
	};

	//For Operation 'createOneTimeTransfer' with service id 'oneTimeTransferFunds2710'
	TransactionsRepository.prototype.createOneTimeTransfer = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('createOneTimeTransfer', params, onCompletion);
	};

	//For Operation 'getDisputedTransactions' with service id 'getOrderDetails5288'
	TransactionsRepository.prototype.getDisputedTransactions = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getDisputedTransactions', params, onCompletion);
	};

	//For Operation 'cancelScheduledTransactionOccurrence' with service id 'cancelScheduledTransactionOccurrence4253'
	TransactionsRepository.prototype.cancelScheduledTransactionOccurrence = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('cancelScheduledTransactionOccurrence', params, onCompletion);
	};

	//For Operation 'getPostedDeposits' with service id 'getPostedDepositTransactions7524'
	TransactionsRepository.prototype.getPostedDeposits = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getPostedDeposits', params, onCompletion);
	};

	//For Operation 'createChequeBookRequests' with service id 'createChequeBookRequest4938'
	TransactionsRepository.prototype.createChequeBookRequests = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('createChequeBookRequests', params, onCompletion);
	};

	//For Operation 'getReceivedP2PRequest' with service id 'getReceivedP2PRequest1423'
	TransactionsRepository.prototype.getReceivedP2PRequest = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getReceivedP2PRequest', params, onCompletion);
	};

	//For Operation 'getPayPersonHistory' with service id 'getPayPersonHistory3288'
	TransactionsRepository.prototype.getPayPersonHistory = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getPayPersonHistory', params, onCompletion);
	};

	//For Operation 'getAllTransactionsForAdmin' with service id 'getAllTransactionsForAdmin3498'
	TransactionsRepository.prototype.getAllTransactionsForAdmin = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getAllTransactionsForAdmin', params, onCompletion);
	};

	//For Operation 'deleteTransaction' with service id 'deleteTransaction3812'
	TransactionsRepository.prototype.deleteTransaction = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('deleteTransaction', params, onCompletion);
	};

	//For Operation 'GetBankNameByRoutingNumber' with service id 'GetBankNameByRoutingNumber2360'
	TransactionsRepository.prototype.GetBankNameByRoutingNumber = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('GetBankNameByRoutingNumber', params, onCompletion);
	};

	//For Operation 'getChequeTypes' with service id 'getChequeTypes6337'
	TransactionsRepository.prototype.getChequeTypes = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getChequeTypes', params, onCompletion);
	};

	//For Operation 'verifyTrialDeposit' with service id 'verifyTrialDeposit7697'
	TransactionsRepository.prototype.verifyTrialDeposit = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('verifyTrialDeposit', params, onCompletion);
	};

	//For Operation 'createCardlessTransaction' with service id 'createTransfer4842'
	TransactionsRepository.prototype.createCardlessTransaction = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('createCardlessTransaction', params, onCompletion);
	};

	//For Operation 'createTransfer' with service id 'createOpenAPITransfer9643'
	TransactionsRepository.prototype.createTransfer = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('createTransfer', params, onCompletion);
	};

	//For Operation 'getAllScheduledTransactionsForAdmin' with service id 'getAllScheduledTransactionsForAdmin2470'
	TransactionsRepository.prototype.getAllScheduledTransactionsForAdmin = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getAllScheduledTransactionsForAdmin', params, onCompletion);
	};

	//For Operation 'getScheduledTransferAndP2pTransactions' with service id 'getP2PandScheduledTransactions8167'
	TransactionsRepository.prototype.getScheduledTransferAndP2pTransactions = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getScheduledTransferAndP2pTransactions', params, onCompletion);
	};

	//For Operation 'getBlockedFunds' with service id 'getBlockedFunds2679'
	TransactionsRepository.prototype.getBlockedFunds = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getBlockedFunds', params, onCompletion);
	};

	//For Operation 'getAccountPendingTransactionsPreview' with service id 'GetAccountPendingTransactionsPreview8862'
	TransactionsRepository.prototype.getAccountPendingTransactionsPreview = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getAccountPendingTransactionsPreview', params, onCompletion);
	};

	//For Operation 'getAccountPostedTransactionsPreview' with service id 'getAccountPostedTransactionsPreview1941'
	TransactionsRepository.prototype.getAccountPostedTransactionsPreview = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getAccountPostedTransactionsPreview', params, onCompletion);
	};

	//For Operation 'createDisputedTransaction' with service id 'createOrder7224'
	TransactionsRepository.prototype.createDisputedTransaction = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('createDisputedTransaction', params, onCompletion);
	};

	//For Operation 'getAccountPostedTransactions' with service id 'getAccountPostedTransactions8861'
	TransactionsRepository.prototype.getAccountPostedTransactions = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getAccountPostedTransactions', params, onCompletion);
	};

	//For Operation 'getRecentAccountTransactions' with service id 'getUserTransaction3576'
	TransactionsRepository.prototype.getRecentAccountTransactions = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getRecentAccountTransactions', params, onCompletion);
	};

	//For Operation 'downloadTransactions' with service id 'GetTransactionsDownloaded2452'
	TransactionsRepository.prototype.downloadTransactions = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('downloadTransactions', params, onCompletion);
	};

	//For Operation 'isValidIBAN' with service id 'validateIBAN3572'
	TransactionsRepository.prototype.isValidIBAN = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('isValidIBAN', params, onCompletion);
	};

	//For Operation 'isSecondFactorAuthenticationRequired' with service id 'isSecondFactorAuthenticationRequired2991'
	TransactionsRepository.prototype.isSecondFactorAuthenticationRequired = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('isSecondFactorAuthenticationRequired', params, onCompletion);
	};

	//For Operation 'createBulkBillPay' with service id 'createBulkBillPay1765'
	TransactionsRepository.prototype.createBulkBillPay = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('createBulkBillPay', params, onCompletion);
	};

	//For Operation 'getRecentUserTransactions' with service id 'getPastTransactions6870'
	TransactionsRepository.prototype.getRecentUserTransactions = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getRecentUserTransactions', params, onCompletion);
	};

	//For Operation 'createCreditCardTransfer' with service id 'createCreditCardTransfer3264'
	TransactionsRepository.prototype.createCreditCardTransfer = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('createCreditCardTransfer', params, onCompletion);
	};

	//For Operation 'withdrawStandingOrder' with service id 'withdrawStandingOrder6634'
	TransactionsRepository.prototype.withdrawStandingOrder = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('withdrawStandingOrder', params, onCompletion);
	};

	//For Operation 'getReceivedP2PTransactions' with service id 'getReceivedP2PTransactions9298'
	TransactionsRepository.prototype.getReceivedP2PTransactions = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getReceivedP2PTransactions', params, onCompletion);
	};

	//For Operation 'getAllP2PRequestMoneyForUser' with service id 'getAllP2PRequestMoneyForUser6564'
	TransactionsRepository.prototype.getAllP2PRequestMoneyForUser = function(params, onCompletion){
		return TransactionsRepository.prototype.customVerb('getAllP2PRequestMoneyForUser', params, onCompletion);
	};

	return TransactionsRepository;
})