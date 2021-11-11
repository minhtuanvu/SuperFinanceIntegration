define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function PayeeRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	PayeeRepository.prototype = Object.create(BaseRepository.prototype);
	PayeeRepository.prototype.constructor = PayeeRepository;

	//For Operation 'getBillPayPayees' with service id 'getBillPayPayees1371'
	PayeeRepository.prototype.getBillPayPayees = function(params, onCompletion){
		return PayeeRepository.prototype.customVerb('getBillPayPayees', params, onCompletion);
	};

	return PayeeRepository;
})