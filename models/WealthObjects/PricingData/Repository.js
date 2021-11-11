define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function PricingDataRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	PricingDataRepository.prototype = Object.create(BaseRepository.prototype);
	PricingDataRepository.prototype.constructor = PricingDataRepository;

	//For Operation 'getPricingData' with service id 'getPricingData1063'
	PricingDataRepository.prototype.getPricingData = function(params, onCompletion){
		return PricingDataRepository.prototype.customVerb('getPricingData', params, onCompletion);
	};

	return PricingDataRepository;
})