define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function FeedbackRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	FeedbackRepository.prototype = Object.create(BaseRepository.prototype);
	FeedbackRepository.prototype.constructor = FeedbackRepository;

	//For Operation 'createCustomerFeedback' with service id 'createCustomerFeedback3251'
	FeedbackRepository.prototype.createCustomerFeedback = function(params, onCompletion){
		return FeedbackRepository.prototype.customVerb('createCustomerFeedback', params, onCompletion);
	};

	return FeedbackRepository;
})