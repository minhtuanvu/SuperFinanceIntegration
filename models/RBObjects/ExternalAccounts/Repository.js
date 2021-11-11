define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function ExternalAccountsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	ExternalAccountsRepository.prototype = Object.create(BaseRepository.prototype);
	ExternalAccountsRepository.prototype.constructor = ExternalAccountsRepository;

	//For Operation 'getSameBankAccount' with service id 'getSameBankAccount4370'
	ExternalAccountsRepository.prototype.getSameBankAccount = function(params, onCompletion){
		return ExternalAccountsRepository.prototype.customVerb('getSameBankAccount', params, onCompletion);
	};

	//For Operation 'getAllExternalAccountsWithPagination' with service id 'getAllExternalAccountsWithPagination9255'
	ExternalAccountsRepository.prototype.getAllExternalAccountsWithPagination = function(params, onCompletion){
		return ExternalAccountsRepository.prototype.customVerb('getAllExternalAccountsWithPagination', params, onCompletion);
	};

	//For Operation 'getFrequentSameBankAccount' with service id 'getSameBankAccount4823'
	ExternalAccountsRepository.prototype.getFrequentSameBankAccount = function(params, onCompletion){
		return ExternalAccountsRepository.prototype.customVerb('getFrequentSameBankAccount', params, onCompletion);
	};

	//For Operation 'getUnverifiedExternalAccounts' with service id 'getUnverifiedExternalAccounts4261'
	ExternalAccountsRepository.prototype.getUnverifiedExternalAccounts = function(params, onCompletion){
		return ExternalAccountsRepository.prototype.customVerb('getUnverifiedExternalAccounts', params, onCompletion);
	};

	//For Operation 'getFrequentInternationalExternalAccounts' with service id 'getInternationalAccounts6434'
	ExternalAccountsRepository.prototype.getFrequentInternationalExternalAccounts = function(params, onCompletion){
		return ExternalAccountsRepository.prototype.customVerb('getFrequentInternationalExternalAccounts', params, onCompletion);
	};

	//For Operation 'deleteExternalAccount' with service id 'deleteBeneficiary7087'
	ExternalAccountsRepository.prototype.deleteExternalAccount = function(params, onCompletion){
		return ExternalAccountsRepository.prototype.customVerb('deleteExternalAccount', params, onCompletion);
	};

	//For Operation 'createExternalAccount' with service id 'createExternalAccount3558'
	ExternalAccountsRepository.prototype.createExternalAccount = function(params, onCompletion){
		return ExternalAccountsRepository.prototype.customVerb('createExternalAccount', params, onCompletion);
	};

	//For Operation 'getDomesticAccount' with service id 'getOtherBankAccount1651'
	ExternalAccountsRepository.prototype.getDomesticAccount = function(params, onCompletion){
		return ExternalAccountsRepository.prototype.customVerb('getDomesticAccount', params, onCompletion);
	};

	//For Operation 'editExternalAccount' with service id 'editBeneficiary5971'
	ExternalAccountsRepository.prototype.editExternalAccount = function(params, onCompletion){
		return ExternalAccountsRepository.prototype.customVerb('editExternalAccount', params, onCompletion);
	};

	//For Operation 'getAllInternationalExternalAccounts' with service id 'getInternationalAccounts1043'
	ExternalAccountsRepository.prototype.getAllInternationalExternalAccounts = function(params, onCompletion){
		return ExternalAccountsRepository.prototype.customVerb('getAllInternationalExternalAccounts', params, onCompletion);
	};

	//For Operation 'getOtherBankAccount' with service id 'getOtherBankAccount9206'
	ExternalAccountsRepository.prototype.getOtherBankAccount = function(params, onCompletion){
		return ExternalAccountsRepository.prototype.customVerb('getOtherBankAccount', params, onCompletion);
	};

	//For Operation 'getFrequentOtherBankAccount' with service id 'getOtherBankAccount7124'
	ExternalAccountsRepository.prototype.getFrequentOtherBankAccount = function(params, onCompletion){
		return ExternalAccountsRepository.prototype.customVerb('getFrequentOtherBankAccount', params, onCompletion);
	};

	//For Operation 'getFrequentOtherBankAccounts' with service id 'GetFrequentOtherBankAccounts2206'
	ExternalAccountsRepository.prototype.getFrequentOtherBankAccounts = function(params, onCompletion){
		return ExternalAccountsRepository.prototype.customVerb('getFrequentOtherBankAccounts', params, onCompletion);
	};

	//For Operation 'getBeneficiaryName' with service id 'getBeneficiaryName2538'
	ExternalAccountsRepository.prototype.getBeneficiaryName = function(params, onCompletion){
		return ExternalAccountsRepository.prototype.customVerb('getBeneficiaryName', params, onCompletion);
	};

	return ExternalAccountsRepository;
})