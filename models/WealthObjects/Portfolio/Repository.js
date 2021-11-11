define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function PortfolioRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	PortfolioRepository.prototype = Object.create(BaseRepository.prototype);
	PortfolioRepository.prototype.constructor = PortfolioRepository;

	//For Operation 'getPortfolioHoldings' with service id 'getPortfolioHoldings9388'
	PortfolioRepository.prototype.getPortfolioHoldings = function(params, onCompletion){
		return PortfolioRepository.prototype.customVerb('getPortfolioHoldings', params, onCompletion);
	};

	//For Operation 'getFieldsOrder' with service id 'getFieldsOrder6327'
	PortfolioRepository.prototype.getFieldsOrder = function(params, onCompletion){
		return PortfolioRepository.prototype.customVerb('getFieldsOrder', params, onCompletion);
	};

	//For Operation 'updateFieldsOrder' with service id 'updateFieldsOrder6938'
	PortfolioRepository.prototype.updateFieldsOrder = function(params, onCompletion){
		return PortfolioRepository.prototype.customVerb('updateFieldsOrder', params, onCompletion);
	};

	//For Operation 'getSearchInstrumentList' with service id 'getSearchInstrumentList9823'
	PortfolioRepository.prototype.getSearchInstrumentList = function(params, onCompletion){
		return PortfolioRepository.prototype.customVerb('getSearchInstrumentList', params, onCompletion);
	};

	//For Operation 'getTransactionDetails' with service id 'getTransactionDetails5041'
	PortfolioRepository.prototype.getTransactionDetails = function(params, onCompletion){
		return PortfolioRepository.prototype.customVerb('getTransactionDetails', params, onCompletion);
	};

	//For Operation 'getDashboardRecentActivity' with service id 'getDashboardRecentActivity1809'
	PortfolioRepository.prototype.getDashboardRecentActivity = function(params, onCompletion){
		return PortfolioRepository.prototype.customVerb('getDashboardRecentActivity', params, onCompletion);
	};

	//For Operation 'addAccountToPortfolio' with service id 'addAccountToPortfolio6673'
	PortfolioRepository.prototype.addAccountToPortfolio = function(params, onCompletion){
		return PortfolioRepository.prototype.customVerb('addAccountToPortfolio', params, onCompletion);
	};

	return PortfolioRepository;
})