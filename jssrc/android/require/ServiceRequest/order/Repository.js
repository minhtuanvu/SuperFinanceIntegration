define([], function() {
    var BaseRepository = kony.mvc.Data.BaseRepository;
    //Create the Repository Class
    function orderRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
        BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
    };
    //Setting BaseRepository as Parent to this Repository
    orderRepository.prototype = Object.create(BaseRepository.prototype);
    orderRepository.prototype.constructor = orderRepository;
    //For Operation 'getServiceReqDetails' with service id 'getOrderDetails3801'
    orderRepository.prototype.getServiceReqDetails = function(params, onCompletion) {
        return orderRepository.prototype.customVerb('getServiceReqDetails', params, onCompletion);
    };
    //For Operation 'triggerService' with service id 'triggerForStatus6475'
    orderRepository.prototype.triggerService = function(params, onCompletion) {
        return orderRepository.prototype.customVerb('triggerService', params, onCompletion);
    };
    //For Operation 'getServiceConfigDetails' with service id 'getTemplateDetails2561'
    orderRepository.prototype.getServiceConfigDetails = function(params, onCompletion) {
        return orderRepository.prototype.customVerb('getServiceConfigDetails', params, onCompletion);
    };
    return orderRepository;
})