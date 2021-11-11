define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function InstrumentDetailsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	InstrumentDetailsRepository.prototype = Object.create(BaseRepository.prototype);
	InstrumentDetailsRepository.prototype.constructor = InstrumentDetailsRepository;

	//For Operation 'getPortfolioDetails' with service id 'getPortfolioDetails1958'
	InstrumentDetailsRepository.prototype.getPortfolioDetails = function(params, onCompletion){
		return InstrumentDetailsRepository.prototype.customVerb('getPortfolioDetails', params, onCompletion);
	};

	//For Operation 'getFavoriteInstruments' with service id 'getFavoriteInstruments4297'
	InstrumentDetailsRepository.prototype.getFavoriteInstruments = function(params, onCompletion){
		return InstrumentDetailsRepository.prototype.customVerb('getFavoriteInstruments', params, onCompletion);
	};

	//For Operation 'getAssetAllocation' with service id 'getAssetAllocation8568'
	InstrumentDetailsRepository.prototype.getAssetAllocation = function(params, onCompletion){
		return InstrumentDetailsRepository.prototype.customVerb('getAssetAllocation', params, onCompletion);
	};

	//For Operation 'getAssetList' with service id 'getAssetList6964'
	InstrumentDetailsRepository.prototype.getAssetList = function(params, onCompletion){
		return InstrumentDetailsRepository.prototype.customVerb('getAssetList', params, onCompletion);
	};

	//For Operation 'getInstrumentTotal' with service id 'getInstrumentTotal3517'
	InstrumentDetailsRepository.prototype.getInstrumentTotal = function(params, onCompletion){
		return InstrumentDetailsRepository.prototype.customVerb('getInstrumentTotal', params, onCompletion);
	};

	//For Operation 'getWealthDashboard' with service id 'getWealthDashboard2100'
	InstrumentDetailsRepository.prototype.getWealthDashboard = function(params, onCompletion){
		return InstrumentDetailsRepository.prototype.customVerb('getWealthDashboard', params, onCompletion);
	};

	//For Operation 'getPortfolioList' with service id 'getPortfolioList1425'
	InstrumentDetailsRepository.prototype.getPortfolioList = function(params, onCompletion){
		return InstrumentDetailsRepository.prototype.customVerb('getPortfolioList', params, onCompletion);
	};

	//For Operation 'getDashboardGraphData' with service id 'getDashboardGraphData8227'
	InstrumentDetailsRepository.prototype.getDashboardGraphData = function(params, onCompletion){
		return InstrumentDetailsRepository.prototype.customVerb('getDashboardGraphData', params, onCompletion);
	};

	//For Operation 'getCashAccounts' with service id 'getCashAccounts8448'
	InstrumentDetailsRepository.prototype.getCashAccounts = function(params, onCompletion){
		return InstrumentDetailsRepository.prototype.customVerb('getCashAccounts', params, onCompletion);
	};

	return InstrumentDetailsRepository;
})