define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function InfinityUserRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	InfinityUserRepository.prototype = Object.create(BaseRepository.prototype);
	InfinityUserRepository.prototype.constructor = InfinityUserRepository;

	//For Operation 'createInfinityProspect' with service id 'CreateProspectOperation3370'
	InfinityUserRepository.prototype.createInfinityProspect = function(params, onCompletion){
		return InfinityUserRepository.prototype.customVerb('createInfinityProspect', params, onCompletion);
	};

	//For Operation 'getInfinityUserContractDetails' with service id 'GetInfinityUserContractDetails7453'
	InfinityUserRepository.prototype.getInfinityUserContractDetails = function(params, onCompletion){
		return InfinityUserRepository.prototype.customVerb('getInfinityUserContractDetails', params, onCompletion);
	};

	//For Operation 'getAllEligibleRelationalCustomers' with service id 'getAllEligibleRelationalCustomers6195'
	InfinityUserRepository.prototype.getAllEligibleRelationalCustomers = function(params, onCompletion){
		return InfinityUserRepository.prototype.customVerb('getAllEligibleRelationalCustomers', params, onCompletion);
	};

	//For Operation 'createInfinityUser' with service id 'createInfinityUser3399'
	InfinityUserRepository.prototype.createInfinityUser = function(params, onCompletion){
		return InfinityUserRepository.prototype.customVerb('createInfinityUser', params, onCompletion);
	};

	//For Operation 'getAssociatedCustomers' with service id 'getAssociatedCustomers1309'
	InfinityUserRepository.prototype.getAssociatedCustomers = function(params, onCompletion){
		return InfinityUserRepository.prototype.customVerb('getAssociatedCustomers', params, onCompletion);
	};

	//For Operation 'getAssociatedContractUsers' with service id 'GetAssociatedContractUsers3892'
	InfinityUserRepository.prototype.getAssociatedContractUsers = function(params, onCompletion){
		return InfinityUserRepository.prototype.customVerb('getAssociatedContractUsers', params, onCompletion);
	};

	//For Operation 'getCompanyLevelCustomRoles' with service id 'GetCompanyLevelCustomRoles5912'
	InfinityUserRepository.prototype.getCompanyLevelCustomRoles = function(params, onCompletion){
		return InfinityUserRepository.prototype.customVerb('getCompanyLevelCustomRoles', params, onCompletion);
	};

	//For Operation 'getInfinityUser' with service id 'getInfinityUser6429'
	InfinityUserRepository.prototype.getInfinityUser = function(params, onCompletion){
		return InfinityUserRepository.prototype.customVerb('getInfinityUser', params, onCompletion);
	};

	//For Operation 'getInfinityUserLimits' with service id 'GetInfinityUserLimits1247'
	InfinityUserRepository.prototype.getInfinityUserLimits = function(params, onCompletion){
		return InfinityUserRepository.prototype.customVerb('getInfinityUserLimits', params, onCompletion);
	};

	//For Operation 'getInfinityUserContractCoreCustomerActions' with service id 'GetInfinityUserContractCoreCustomerActions3789'
	InfinityUserRepository.prototype.getInfinityUserContractCoreCustomerActions = function(params, onCompletion){
		return InfinityUserRepository.prototype.customVerb('getInfinityUserContractCoreCustomerActions', params, onCompletion);
	};

	//For Operation 'CreateInfinityUserWithContract' with service id 'CreateInfinityUserWithContract3507'
	InfinityUserRepository.prototype.CreateInfinityUserWithContract = function(params, onCompletion){
		return InfinityUserRepository.prototype.customVerb('CreateInfinityUserWithContract', params, onCompletion);
	};

	//For Operation 'GetListCoreCustomerFeatureActionLimits' with service id 'GetListCoreCustomerFeatureActionLimits3221'
	InfinityUserRepository.prototype.GetListCoreCustomerFeatureActionLimits = function(params, onCompletion){
		return InfinityUserRepository.prototype.customVerb('GetListCoreCustomerFeatureActionLimits', params, onCompletion);
	};

	//For Operation 'getInfinityCustomRoleDetails' with service id 'getCustomRoleDetails8368'
	InfinityUserRepository.prototype.getInfinityCustomRoleDetails = function(params, onCompletion){
		return InfinityUserRepository.prototype.customVerb('getInfinityCustomRoleDetails', params, onCompletion);
	};

	//For Operation 'updateInfinityUserStatus' with service id 'UpdateInfinityUserStatus6443'
	InfinityUserRepository.prototype.updateInfinityUserStatus = function(params, onCompletion){
		return InfinityUserRepository.prototype.customVerb('updateInfinityUserStatus', params, onCompletion);
	};

	//For Operation 'getInfinityUserAccounts' with service id 'GetInfinityUserAccounts1944'
	InfinityUserRepository.prototype.getInfinityUserAccounts = function(params, onCompletion){
		return InfinityUserRepository.prototype.customVerb('getInfinityUserAccounts', params, onCompletion);
	};

	//For Operation 'resendActivationCode' with service id 'SendInfinityUserUserNameAndActivationCode2697'
	InfinityUserRepository.prototype.resendActivationCode = function(params, onCompletion){
		return InfinityUserRepository.prototype.customVerb('resendActivationCode', params, onCompletion);
	};

	//For Operation 'getInfinityUserFeatureActions' with service id 'GetInfinityUserFeatureActions4845'
	InfinityUserRepository.prototype.getInfinityUserFeatureActions = function(params, onCompletion){
		return InfinityUserRepository.prototype.customVerb('getInfinityUserFeatureActions', params, onCompletion);
	};

	//For Operation 'createRetailContract' with service id 'CreateRetailContract9160'
	InfinityUserRepository.prototype.createRetailContract = function(params, onCompletion){
		return InfinityUserRepository.prototype.customVerb('createRetailContract', params, onCompletion);
	};

	//For Operation 'getCoreCustomerFeatureActionLimits' with service id 'GetCoreCustomerFeatureActionLimits8284'
	InfinityUserRepository.prototype.getCoreCustomerFeatureActionLimits = function(params, onCompletion){
		return InfinityUserRepository.prototype.customVerb('getCoreCustomerFeatureActionLimits', params, onCompletion);
	};

	//For Operation 'getCustomRoleByCompanyID' with service id 'GetCustomRoleByCompanyID5803'
	InfinityUserRepository.prototype.getCustomRoleByCompanyID = function(params, onCompletion){
		return InfinityUserRepository.prototype.customVerb('getCustomRoleByCompanyID', params, onCompletion);
	};

	//For Operation 'editInfinityUser' with service id 'editInfinityUser4362'
	InfinityUserRepository.prototype.editInfinityUser = function(params, onCompletion){
		return InfinityUserRepository.prototype.customVerb('editInfinityUser', params, onCompletion);
	};

	//For Operation 'updateInfinityCustomRole' with service id 'updateCustomRole4838'
	InfinityUserRepository.prototype.updateInfinityCustomRole = function(params, onCompletion){
		return InfinityUserRepository.prototype.customVerb('updateInfinityCustomRole', params, onCompletion);
	};

	//For Operation 'getInfinityUserContractCustomers' with service id 'GetInfinityUserContractCustomers6762'
	InfinityUserRepository.prototype.getInfinityUserContractCustomers = function(params, onCompletion){
		return InfinityUserRepository.prototype.customVerb('getInfinityUserContractCustomers', params, onCompletion);
	};

	//For Operation 'verifyInfinityCustomRoleName' with service id 'verifyCustomRoleName5601'
	InfinityUserRepository.prototype.verifyInfinityCustomRoleName = function(params, onCompletion){
		return InfinityUserRepository.prototype.customVerb('verifyInfinityCustomRoleName', params, onCompletion);
	};

	//For Operation 'createInfinityCustomRole' with service id 'CreateCustomRole5620'
	InfinityUserRepository.prototype.createInfinityCustomRole = function(params, onCompletion){
		return InfinityUserRepository.prototype.customVerb('createInfinityCustomRole', params, onCompletion);
	};

	return InfinityUserRepository;
})