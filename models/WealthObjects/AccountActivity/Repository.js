define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function AccountActivityRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	AccountActivityRepository.prototype = Object.create(BaseRepository.prototype);
	AccountActivityRepository.prototype.constructor = AccountActivityRepository;

	//For Operation 'getAccountActivityOperations' with service id 'getAccountActivityOperations4177'
	AccountActivityRepository.prototype.getAccountActivityOperations = function(params, onCompletion){
		return AccountActivityRepository.prototype.customVerb('getAccountActivityOperations', params, onCompletion);
	};

	//For Operation 'getAccountActivity' with service id 'getAccountActivity4590'
	AccountActivityRepository.prototype.getAccountActivity = function(params, onCompletion){
		return AccountActivityRepository.prototype.customVerb('getAccountActivity', params, onCompletion);
	};

	return AccountActivityRepository;
})