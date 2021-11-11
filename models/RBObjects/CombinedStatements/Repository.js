define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function CombinedStatementsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	CombinedStatementsRepository.prototype = Object.create(BaseRepository.prototype);
	CombinedStatementsRepository.prototype.constructor = CombinedStatementsRepository;

	//For Operation 'getCombinedStatementDetails' with service id 'getAccountStatementDetails3701'
	CombinedStatementsRepository.prototype.getCombinedStatementDetails = function(params, onCompletion){
		return CombinedStatementsRepository.prototype.customVerb('getCombinedStatementDetails', params, onCompletion);
	};

	//For Operation 'generateCombinedStatement' with service id 'generateCombinedStatementFile5835'
	CombinedStatementsRepository.prototype.generateCombinedStatement = function(params, onCompletion){
		return CombinedStatementsRepository.prototype.customVerb('generateCombinedStatement', params, onCompletion);
	};

	return CombinedStatementsRepository;
})