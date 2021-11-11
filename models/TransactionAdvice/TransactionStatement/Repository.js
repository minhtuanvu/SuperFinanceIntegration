define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function TransactionStatementRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	TransactionStatementRepository.prototype = Object.create(BaseRepository.prototype);
	TransactionStatementRepository.prototype.constructor = TransactionStatementRepository;

	//For Operation 'getTransactionStatementsByYear' with service id 'getYearlyFileDetails9172'
	TransactionStatementRepository.prototype.getTransactionStatementsByYear = function(params, onCompletion){
		return TransactionStatementRepository.prototype.customVerb('getTransactionStatementsByYear', params, onCompletion);
	};

	return TransactionStatementRepository;
})