define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function CardProductsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	CardProductsRepository.prototype = Object.create(BaseRepository.prototype);
	CardProductsRepository.prototype.constructor = CardProductsRepository;

	//For Operation 'getCardProducts' with service id 'getCardProducts2281'
	CardProductsRepository.prototype.getCardProducts = function(params, onCompletion){
		return CardProductsRepository.prototype.customVerb('getCardProducts', params, onCompletion);
	};

	return CardProductsRepository;
})