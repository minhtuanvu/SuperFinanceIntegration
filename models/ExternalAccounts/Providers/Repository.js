define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function ProvidersRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	ProvidersRepository.prototype = Object.create(BaseRepository.prototype);
	ProvidersRepository.prototype.constructor = ProvidersRepository;

	//For Operation 'getBankListForCountry' with service id 'getProvider9814'
	ProvidersRepository.prototype.getBankListForCountry = function(params, onCompletion){
		return ProvidersRepository.prototype.customVerb('getBankListForCountry', params, onCompletion);
	};

	return ProvidersRepository;
})