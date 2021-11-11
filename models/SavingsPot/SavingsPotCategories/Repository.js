define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function SavingsPotCategoriesRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	SavingsPotCategoriesRepository.prototype = Object.create(BaseRepository.prototype);
	SavingsPotCategoriesRepository.prototype.constructor = SavingsPotCategoriesRepository;

	//For Operation 'getCategoriesForGoal' with service id 'getCategoriesForGoal1367'
	SavingsPotCategoriesRepository.prototype.getCategoriesForGoal = function(params, onCompletion){
		return SavingsPotCategoriesRepository.prototype.customVerb('getCategoriesForGoal', params, onCompletion);
	};

	return SavingsPotCategoriesRepository;
})