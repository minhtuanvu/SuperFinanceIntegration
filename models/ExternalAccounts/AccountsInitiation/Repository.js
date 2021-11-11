define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function AccountsInitiationRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	AccountsInitiationRepository.prototype = Object.create(BaseRepository.prototype);
	AccountsInitiationRepository.prototype.constructor = AccountsInitiationRepository;

	//For Operation 'loadAccountsWithTransaction' with service id 'getAccountsWithTransaction4783'
	AccountsInitiationRepository.prototype.loadAccountsWithTransaction = function(params, onCompletion){
		return AccountsInitiationRepository.prototype.customVerb('loadAccountsWithTransaction', params, onCompletion);
	};

	return AccountsInitiationRepository;
})