define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function OnboardingTransactionsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	OnboardingTransactionsRepository.prototype = Object.create(BaseRepository.prototype);
	OnboardingTransactionsRepository.prototype.constructor = OnboardingTransactionsRepository;

	//For Operation 'onboardingTransfer' with service id 'createOneTimeTransfer6675'
	OnboardingTransactionsRepository.prototype.onboardingTransfer = function(params, onCompletion){
		return OnboardingTransactionsRepository.prototype.customVerb('onboardingTransfer', params, onCompletion);
	};

	//For Operation 'createOnboardingTransfer' with service id 'OnboardingTransfer7821'
	OnboardingTransactionsRepository.prototype.createOnboardingTransfer = function(params, onCompletion){
		return OnboardingTransactionsRepository.prototype.customVerb('createOnboardingTransfer', params, onCompletion);
	};

	//For Operation 'createOnboardingAccount' with service id 'createAccount3820'
	OnboardingTransactionsRepository.prototype.createOnboardingAccount = function(params, onCompletion){
		return OnboardingTransactionsRepository.prototype.customVerb('createOnboardingAccount', params, onCompletion);
	};

	//For Operation 'onboardingUser' with service id 'getFullUserDetails2589'
	OnboardingTransactionsRepository.prototype.onboardingUser = function(params, onCompletion){
		return OnboardingTransactionsRepository.prototype.customVerb('onboardingUser', params, onCompletion);
	};

	return OnboardingTransactionsRepository;
})