define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function GetInstrumentDetailsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	GetInstrumentDetailsRepository.prototype = Object.create(BaseRepository.prototype);
	GetInstrumentDetailsRepository.prototype.constructor = GetInstrumentDetailsRepository;

	//For Operation 'GetInstrumentDetails' with service id 'getInstrumentDetails4118'
	GetInstrumentDetailsRepository.prototype.GetInstrumentDetails = function(params, onCompletion){
		return GetInstrumentDetailsRepository.prototype.customVerb('GetInstrumentDetails', params, onCompletion);
	};

	return GetInstrumentDetailsRepository;
})