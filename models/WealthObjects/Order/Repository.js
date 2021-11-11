define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function OrderRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	OrderRepository.prototype = Object.create(BaseRepository.prototype);
	OrderRepository.prototype.constructor = OrderRepository;

	//For Operation 'createOrder' with service id 'createOrder7797'
	OrderRepository.prototype.createOrder = function(params, onCompletion){
		return OrderRepository.prototype.customVerb('createOrder', params, onCompletion);
	};

	//For Operation 'createMarketOrder' with service id 'createMarketOrder7551'
	OrderRepository.prototype.createMarketOrder = function(params, onCompletion){
		return OrderRepository.prototype.customVerb('createMarketOrder', params, onCompletion);
	};

	//For Operation 'modifyOrder' with service id 'modifyOrder7370'
	OrderRepository.prototype.modifyOrder = function(params, onCompletion){
		return OrderRepository.prototype.customVerb('modifyOrder', params, onCompletion);
	};

	return OrderRepository;
})