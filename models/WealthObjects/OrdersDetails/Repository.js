define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function OrdersDetailsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	OrdersDetailsRepository.prototype = Object.create(BaseRepository.prototype);
	OrdersDetailsRepository.prototype.constructor = OrdersDetailsRepository;

	//For Operation 'cancelOrder' with service id 'cancelOrder6913'
	OrdersDetailsRepository.prototype.cancelOrder = function(params, onCompletion){
		return OrdersDetailsRepository.prototype.customVerb('cancelOrder', params, onCompletion);
	};

	//For Operation 'getOrdersDetails' with service id 'getOrdersDetails9911'
	OrdersDetailsRepository.prototype.getOrdersDetails = function(params, onCompletion){
		return OrdersDetailsRepository.prototype.customVerb('getOrdersDetails', params, onCompletion);
	};

	return OrdersDetailsRepository;
})