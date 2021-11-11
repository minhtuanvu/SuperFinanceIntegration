define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function DbxUserRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	DbxUserRepository.prototype = Object.create(BaseRepository.prototype);
	DbxUserRepository.prototype.constructor = DbxUserRepository;

	//For Operation 'verifyDbxUserName' with service id 'verifyDbxUserName2953'
	DbxUserRepository.prototype.verifyDbxUserName = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('verifyDbxUserName', params, onCompletion);
	};

	//For Operation 'getPasswordPolicy' with service id 'getPasswordPolicy1010'
	DbxUserRepository.prototype.getPasswordPolicy = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('getPasswordPolicy', params, onCompletion);
	};

	//For Operation 'resetDbxUserPassword' with service id 'resetDbxUserPassword2912'
	DbxUserRepository.prototype.resetDbxUserPassword = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('resetDbxUserPassword', params, onCompletion);
	};

	//For Operation 'getUserNameAndPasswordPolicies' with service id 'getUserNameAndPasswordPolicies2751'
	DbxUserRepository.prototype.getUserNameAndPasswordPolicies = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('getUserNameAndPasswordPolicies', params, onCompletion);
	};

	//For Operation 'requestUpdateSecurityQuestionsOTP' with service id 'RequestOTPPreLogin5383'
	DbxUserRepository.prototype.requestUpdateSecurityQuestionsOTP = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('requestUpdateSecurityQuestionsOTP', params, onCompletion);
	};

	//For Operation 'lockUnlockCustomer' with service id 'lockUnlockCustomer8209'
	DbxUserRepository.prototype.lockUnlockCustomer = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('lockUnlockCustomer', params, onCompletion);
	};

	//For Operation 'CreateOrganizationEmployee' with service id 'CreateOrganizationEmployee1324'
	DbxUserRepository.prototype.CreateOrganizationEmployee = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('CreateOrganizationEmployee', params, onCompletion);
	};

	//For Operation 'getPasswordLockoutSettings' with service id 'getPasswordLockoutSettings9051'
	DbxUserRepository.prototype.getPasswordLockoutSettings = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('getPasswordLockoutSettings', params, onCompletion);
	};

	//For Operation 'dbxRequestOTP' with service id 'dbxrequestOTP9356'
	DbxUserRepository.prototype.dbxRequestOTP = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('dbxRequestOTP', params, onCompletion);
	};

	//For Operation 'getUserNameAndPasswordRules' with service id 'getUsernameAndPasswordRules2133'
	DbxUserRepository.prototype.getUserNameAndPasswordRules = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('getUserNameAndPasswordRules', params, onCompletion);
	};

	//For Operation 'userdelinking' with service id 'delinkingUserProfiles2940'
	DbxUserRepository.prototype.userdelinking = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('userdelinking', params, onCompletion);
	};

	//For Operation 'UpdatePasswordForActivationFlow' with service id 'UpdatePasswordForActivationFlowOperation3204'
	DbxUserRepository.prototype.UpdatePasswordForActivationFlow = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('UpdatePasswordForActivationFlow', params, onCompletion);
	};

	//For Operation 'checkIfCompanyExists' with service id 'checkIfMemberExists8101'
	DbxUserRepository.prototype.checkIfCompanyExists = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('checkIfCompanyExists', params, onCompletion);
	};

	//For Operation 'UpdateEmploymentDetails' with service id 'UpdateEmploymentOperation7523'
	DbxUserRepository.prototype.UpdateEmploymentDetails = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('UpdateEmploymentDetails', params, onCompletion);
	};

	//For Operation 'userlinking' with service id 'linkingUserProfiles1599'
	DbxUserRepository.prototype.userlinking = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('userlinking', params, onCompletion);
	};

	//For Operation 'getUserNamePolicy' with service id 'getUsernamePolicy7844'
	DbxUserRepository.prototype.getUserNamePolicy = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('getUserNamePolicy', params, onCompletion);
	};

	//For Operation 'EditOrganizationEmployee' with service id 'EditOrganizationEmployee5795'
	DbxUserRepository.prototype.EditOrganizationEmployee = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('EditOrganizationEmployee', params, onCompletion);
	};

	//For Operation 'resetUserPasswordFromEmail' with service id 'ResetUserPasswordFromEmail1681'
	DbxUserRepository.prototype.resetUserPasswordFromEmail = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('resetUserPasswordFromEmail', params, onCompletion);
	};

	//For Operation 'verifyLoginMFAOTP' with service id 'VerifyLoginMFAOTP1345'
	DbxUserRepository.prototype.verifyLoginMFAOTP = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('verifyLoginMFAOTP', params, onCompletion);
	};

	//For Operation 'getDbxUserStatus' with service id 'GetDBXUserStatus1869'
	DbxUserRepository.prototype.getDbxUserStatus = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('getDbxUserStatus', params, onCompletion);
	};

	//For Operation 'CoreUpdateUser' with service id 'CoreUpdateUser8697'
	DbxUserRepository.prototype.CoreUpdateUser = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('CoreUpdateUser', params, onCompletion);
	};

	//For Operation 'getLocaleList' with service id 'getLocaleList7172'
	DbxUserRepository.prototype.getLocaleList = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('getLocaleList', params, onCompletion);
	};

	//For Operation 'verifyMFAOTP' with service id 'verifyMFAOTP1187'
	DbxUserRepository.prototype.verifyMFAOTP = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('verifyMFAOTP', params, onCompletion);
	};

	//For Operation 'getEAgreementPdfDownloaded' with service id 'GetEAgreementPdfDownloaded1446'
	DbxUserRepository.prototype.getEAgreementPdfDownloaded = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('getEAgreementPdfDownloaded', params, onCompletion);
	};

	//For Operation 'upgradeToMicroBusinessUser' with service id 'UpgradeToMicroBusinessUser9090'
	DbxUserRepository.prototype.upgradeToMicroBusinessUser = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('upgradeToMicroBusinessUser', params, onCompletion);
	};

	//For Operation 'getAddressTypes' with service id 'getAddressTypesOperation3937'
	DbxUserRepository.prototype.getAddressTypes = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('getAddressTypes', params, onCompletion);
	};

	//For Operation 'verifyOTPPreLoginEnroll' with service id 'VerifyOTPPreLoginEnroll5460'
	DbxUserRepository.prototype.verifyOTPPreLoginEnroll = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('verifyOTPPreLoginEnroll', params, onCompletion);
	};

	//For Operation 'verifyLoginMFASecurityQuestions' with service id 'DBX_verifyCustomerSecurityQuestions9295'
	DbxUserRepository.prototype.verifyLoginMFASecurityQuestions = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('verifyLoginMFASecurityQuestions', params, onCompletion);
	};

	//For Operation 'verifyOrganisationUser' with service id 'verifyOraganisationUser1693'
	DbxUserRepository.prototype.verifyOrganisationUser = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('verifyOrganisationUser', params, onCompletion);
	};

	//For Operation 'IsEmailLinkActive' with service id 'IsEmailLinkActive2056'
	DbxUserRepository.prototype.IsEmailLinkActive = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('IsEmailLinkActive', params, onCompletion);
	};

	//For Operation 'updateDBXUserPassword' with service id 'updateDBXUserPassword9683'
	DbxUserRepository.prototype.updateDBXUserPassword = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('updateDBXUserPassword', params, onCompletion);
	};

	//For Operation 'ResendActivationLink' with service id 'ResendOrgEmployeeActivationLink3557'
	DbxUserRepository.prototype.ResendActivationLink = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('ResendActivationLink', params, onCompletion);
	};

	//For Operation 'IsSharedTokenValid' with service id 'IsSharedTokenValid6415'
	DbxUserRepository.prototype.IsSharedTokenValid = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('IsSharedTokenValid', params, onCompletion);
	};

	//For Operation 'getAccountActionCustomerApproverList' with service id 'getAccountActionApproverList6707'
	DbxUserRepository.prototype.getAccountActionCustomerApproverList = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('getAccountActionCustomerApproverList', params, onCompletion);
	};

	//For Operation 'updateCitizenship' with service id 'UpdateCitizenshipOpearation2649'
	DbxUserRepository.prototype.updateCitizenship = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('updateCitizenship', params, onCompletion);
	};

	//For Operation 'requestResetPasswordOTP' with service id 'RequestOTPPreLogin5436'
	DbxUserRepository.prototype.requestResetPasswordOTP = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('requestResetPasswordOTP', params, onCompletion);
	};

	//For Operation 'CreateDbxMicroBusinessUser' with service id 'CreateDbxMicroBusinessUser7923'
	DbxUserRepository.prototype.CreateDbxMicroBusinessUser = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('CreateDbxMicroBusinessUser', params, onCompletion);
	};

	//For Operation 'updateCustomerProfile' with service id 'updateCustomerProfile6713'
	DbxUserRepository.prototype.updateCustomerProfile = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('updateCustomerProfile', params, onCompletion);
	};

	//For Operation 'updateOrganizationEmployee' with service id 'EditOrganizationEmployee2029'
	DbxUserRepository.prototype.updateOrganizationEmployee = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('updateOrganizationEmployee', params, onCompletion);
	};

	//For Operation 'updateDbxCustomerNew' with service id 'updateDbxCustomerNew6883'
	DbxUserRepository.prototype.updateDbxCustomerNew = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('updateDbxCustomerNew', params, onCompletion);
	};

	//For Operation 'sendActivationCodeForEnrollment' with service id 'sendActivationCodeForEnrollment5373'
	DbxUserRepository.prototype.sendActivationCodeForEnrollment = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('sendActivationCodeForEnrollment', params, onCompletion);
	};

	//For Operation 'requestMFAOTP' with service id 'RequestMFAOTP8041'
	DbxUserRepository.prototype.requestMFAOTP = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('requestMFAOTP', params, onCompletion);
	};

	//For Operation 'sendKMSEmail' with service id 'sendEmail1885'
	DbxUserRepository.prototype.sendKMSEmail = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('sendKMSEmail', params, onCompletion);
	};

	//For Operation 'sendDbxResetPasswordEmail' with service id 'sendDbxResetPasswordLink9649'
	DbxUserRepository.prototype.sendDbxResetPasswordEmail = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('sendDbxResetPasswordEmail', params, onCompletion);
	};

	//For Operation 'validateActivationCodeForEnrollment' with service id 'ValidateEnrollmentActivationCode7539'
	DbxUserRepository.prototype.validateActivationCodeForEnrollment = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('validateActivationCodeForEnrollment', params, onCompletion);
	};

	//For Operation 'GetTaxDetails' with service id 'GetTaxOperation1410'
	DbxUserRepository.prototype.GetTaxDetails = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('GetTaxDetails', params, onCompletion);
	};

	//For Operation 'smsOTP' with service id 'smsOTP7625'
	DbxUserRepository.prototype.smsOTP = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('smsOTP', params, onCompletion);
	};

	//For Operation 'createDbxCorporateUser' with service id 'createDbxCorporateUser4168'
	DbxUserRepository.prototype.createDbxCorporateUser = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('createDbxCorporateUser', params, onCompletion);
	};

	//For Operation 'getUserProfileImage' with service id 'GetUserProfileImage9129'
	DbxUserRepository.prototype.getUserProfileImage = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('getUserProfileImage', params, onCompletion);
	};

	//For Operation 'GetEmploymentDetails' with service id 'GetEmploymentOperation5855'
	DbxUserRepository.prototype.GetEmploymentDetails = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('GetEmploymentDetails', params, onCompletion);
	};

	//For Operation 'OFACAndCIPChecks' with service id 'OFACAndCIPChecks5574'
	DbxUserRepository.prototype.OFACAndCIPChecks = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('OFACAndCIPChecks', params, onCompletion);
	};

	//For Operation 'verifyUpdateSecurityQuestionsOTP' with service id 'VerifyOTPPreLogin6375'
	DbxUserRepository.prototype.verifyUpdateSecurityQuestionsOTP = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('verifyUpdateSecurityQuestionsOTP', params, onCompletion);
	};

	//For Operation 'updateOrgemloyee' with service id 'EditOrganizationEmployee2226'
	DbxUserRepository.prototype.updateOrgemloyee = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('updateOrgemloyee', params, onCompletion);
	};

	//For Operation 'getOrganizationUserDetails' with service id 'getOrganizationUserDetails6383'
	DbxUserRepository.prototype.getOrganizationUserDetails = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('getOrganizationUserDetails', params, onCompletion);
	};

	//For Operation 'GetOrgEmployeeDetails' with service id 'GetOrganizationEmployeeDetails9544'
	DbxUserRepository.prototype.GetOrgEmployeeDetails = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('GetOrgEmployeeDetails', params, onCompletion);
	};

	//For Operation 'getPasswordRules' with service id 'getPasswordRules9416'
	DbxUserRepository.prototype.getPasswordRules = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('getPasswordRules', params, onCompletion);
	};

	//For Operation 'CreateDbxMicroBusinessOwner' with service id 'createMicroBusinessOwner4821'
	DbxUserRepository.prototype.CreateDbxMicroBusinessOwner = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('CreateDbxMicroBusinessOwner', params, onCompletion);
	};

	//For Operation 'requestEnrollOTP' with service id 'RequestPreLoginEnrollOTP2387'
	DbxUserRepository.prototype.requestEnrollOTP = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('requestEnrollOTP', params, onCompletion);
	};

	//For Operation 'getApplicantInfo' with service id 'getApplicantInfo3967'
	DbxUserRepository.prototype.getApplicantInfo = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('getApplicantInfo', params, onCompletion);
	};

	//For Operation 'CreateMicroOrganizationEmployee' with service id 'CreateMicroOrganizationEmployee8363'
	DbxUserRepository.prototype.CreateMicroOrganizationEmployee = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('CreateMicroOrganizationEmployee', params, onCompletion);
	};

	//For Operation 'getUserNameAndPasswordRulesAndPolicies' with service id 'getUserNameAndPasswordRulesAndPolicies9819'
	DbxUserRepository.prototype.getUserNameAndPasswordRulesAndPolicies = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('getUserNameAndPasswordRulesAndPolicies', params, onCompletion);
	};

	//For Operation 'getCustomerTypes' with service id 'getCustomerTypes3510'
	DbxUserRepository.prototype.getCustomerTypes = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('getCustomerTypes', params, onCompletion);
	};

	//For Operation 'updateDBXUserStatus' with service id 'UpdateDBXUserStatus7858'
	DbxUserRepository.prototype.updateDBXUserStatus = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('updateDBXUserStatus', params, onCompletion);
	};

	//For Operation 'getCustomerCommunication' with service id 'getCustomerCommunication7155'
	DbxUserRepository.prototype.getCustomerCommunication = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('getCustomerCommunication', params, onCompletion);
	};

	//For Operation 'createTaxDetails' with service id 'CreateTaxOperation9137'
	DbxUserRepository.prototype.createTaxDetails = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('createTaxDetails', params, onCompletion);
	};

	//For Operation 'updateTaxDetails' with service id 'UpdateTaxOperation8244'
	DbxUserRepository.prototype.updateTaxDetails = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('updateTaxDetails', params, onCompletion);
	};

	//For Operation 'CreateCustomerProfile' with service id 'createCustomerProfileConcurrent6018'
	DbxUserRepository.prototype.CreateCustomerProfile = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('CreateCustomerProfile', params, onCompletion);
	};

	//For Operation 'CreateSmallOrganizationEmployee' with service id 'CreateSmallOrganizationEmployee3480'
	DbxUserRepository.prototype.CreateSmallOrganizationEmployee = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('CreateSmallOrganizationEmployee', params, onCompletion);
	};

	//For Operation 'GetDueDiligenceDetails' with service id 'GetDueDiligenceOperation3137'
	DbxUserRepository.prototype.GetDueDiligenceDetails = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('GetDueDiligenceDetails', params, onCompletion);
	};

	//For Operation 'updateDBXUserName' with service id 'updateDBXUserName8059'
	DbxUserRepository.prototype.updateDBXUserName = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('updateDBXUserName', params, onCompletion);
	};

	//For Operation 'fetchCustomerDetailsForOlb' with service id 'fetchCustomerDetailsForOlb9099'
	DbxUserRepository.prototype.fetchCustomerDetailsForOlb = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('fetchCustomerDetailsForOlb', params, onCompletion);
	};

	//For Operation 'CreateSmallOrganizationEmployeeForAdmin' with service id 'CreateSmallOrganizationEmployee6762'
	DbxUserRepository.prototype.CreateSmallOrganizationEmployeeForAdmin = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('CreateSmallOrganizationEmployeeForAdmin', params, onCompletion);
	};

	//For Operation 'getGroups' with service id 'getGroups6746'
	DbxUserRepository.prototype.getGroups = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('getGroups', params, onCompletion);
	};

	//For Operation 'getEmpDetails' with service id 'getEmpDetails7471'
	DbxUserRepository.prototype.getEmpDetails = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('getEmpDetails', params, onCompletion);
	};

	//For Operation 'createGroup' with service id 'createGroup8217'
	DbxUserRepository.prototype.createGroup = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('createGroup', params, onCompletion);
	};

	//For Operation 'regenerateActivationCode' with service id 'regenerateActivationCode8439'
	DbxUserRepository.prototype.regenerateActivationCode = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('regenerateActivationCode', params, onCompletion);
	};

	//For Operation 'verifyDbxUser' with service id 'VerifyUserAndSendMail8862'
	DbxUserRepository.prototype.verifyDbxUser = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('verifyDbxUser', params, onCompletion);
	};

	//For Operation 'requestPreLoginOTP' with service id 'RequestOTPPreLogin3181'
	DbxUserRepository.prototype.requestPreLoginOTP = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('requestPreLoginOTP', params, onCompletion);
	};

	//For Operation 'getUserNameRules' with service id 'getUserNameRules4796'
	DbxUserRepository.prototype.getUserNameRules = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('getUserNameRules', params, onCompletion);
	};

	//For Operation 'updateProspect' with service id 'updateProspect9634'
	DbxUserRepository.prototype.updateProspect = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('updateProspect', params, onCompletion);
	};

	//For Operation 'requestLoginMFAOTP' with service id 'RequestLoginMFAOTP1676'
	DbxUserRepository.prototype.requestLoginMFAOTP = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('requestLoginMFAOTP', params, onCompletion);
	};

	//For Operation 'createDbxProspect' with service id 'createProspect5150'
	DbxUserRepository.prototype.createDbxProspect = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('createDbxProspect', params, onCompletion);
	};

	//For Operation 'updateDbxCustomer' with service id 'updateDbxCustomer6546'
	DbxUserRepository.prototype.updateDbxCustomer = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('updateDbxCustomer', params, onCompletion);
	};

	//For Operation 'fetchAuthorizedSignatories' with service id 'SearchAuthorizedSignatoriesByMembership8662'
	DbxUserRepository.prototype.fetchAuthorizedSignatories = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('fetchAuthorizedSignatories', params, onCompletion);
	};

	//For Operation 'createDbxCustomer' with service id 'CreateDbxUserNew5961'
	DbxUserRepository.prototype.createDbxCustomer = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('createDbxCustomer', params, onCompletion);
	};

	//For Operation 'SetOrgEmployeePassword' with service id 'SetOrgEmployeePassword8673'
	DbxUserRepository.prototype.SetOrgEmployeePassword = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('SetOrgEmployeePassword', params, onCompletion);
	};

	//For Operation 'getPasswordRulesAndPolicy' with service id 'getPasswordRulesAndPolicy6538'
	DbxUserRepository.prototype.getPasswordRulesAndPolicy = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('getPasswordRulesAndPolicy', params, onCompletion);
	};

	//For Operation 'updateProspectToRetailCustomer' with service id 'updateProspectToRetailCustomer5260'
	DbxUserRepository.prototype.updateProspectToRetailCustomer = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('updateProspectToRetailCustomer', params, onCompletion);
	};

	//For Operation 'createCustomerMock' with service id 'createCustomer6642'
	DbxUserRepository.prototype.createCustomerMock = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('createCustomerMock', params, onCompletion);
	};

	//For Operation 'checkIfOrganisationUserExists' with service id 'CheckIfOrganisationUserExists5750'
	DbxUserRepository.prototype.checkIfOrganisationUserExists = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('checkIfOrganisationUserExists', params, onCompletion);
	};

	//For Operation 'verifyOTPPreLoginMB' with service id 'VerifyPreLoginOTPMB2161'
	DbxUserRepository.prototype.verifyOTPPreLoginMB = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('verifyOTPPreLoginMB', params, onCompletion);
	};

	//For Operation 'requestOTPRegisterMB' with service id 'RequestPreLoginOTPMB6988'
	DbxUserRepository.prototype.requestOTPRegisterMB = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('requestOTPRegisterMB', params, onCompletion);
	};

	//For Operation 'CreateMicroOrganizationEmployeeForAdmin' with service id 'CreateMicroOrganizationEmployee5517'
	DbxUserRepository.prototype.CreateMicroOrganizationEmployeeForAdmin = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('CreateMicroOrganizationEmployeeForAdmin', params, onCompletion);
	};

	//For Operation 'getGroupEntitlements' with service id 'getGroupEntitlements3846'
	DbxUserRepository.prototype.getGroupEntitlements = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('getGroupEntitlements', params, onCompletion);
	};

	//For Operation 'updateUserProfileImage' with service id 'UpdateUserProfileImage6855'
	DbxUserRepository.prototype.updateUserProfileImage = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('updateUserProfileImage', params, onCompletion);
	};

	//For Operation 'checkIfOrgMemberExists' with service id 'checkIfOrgMemberExists8908'
	DbxUserRepository.prototype.checkIfOrgMemberExists = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('checkIfOrgMemberExists', params, onCompletion);
	};

	//For Operation 'requestOTPPreLoginMB' with service id 'RequestPreLoginOTPMB9319'
	DbxUserRepository.prototype.requestOTPPreLoginMB = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('requestOTPPreLoginMB', params, onCompletion);
	};

	//For Operation 'getMFAServiceConfig' with service id 'getMFAServiceConfig5679'
	DbxUserRepository.prototype.getMFAServiceConfig = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('getMFAServiceConfig', params, onCompletion);
	};

	//For Operation 'dbxVerifyOTP' with service id 'dbxverifyOTP8700'
	DbxUserRepository.prototype.dbxVerifyOTP = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('dbxVerifyOTP', params, onCompletion);
	};

	//For Operation 'updateCustomerDetailsForAdmin' with service id 'UpdateCustomerForAdmin7665'
	DbxUserRepository.prototype.updateCustomerDetailsForAdmin = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('updateCustomerDetailsForAdmin', params, onCompletion);
	};

	//For Operation 'getBBCustomerServiceLimit' with service id 'getBBCustomerServiceLimit8755'
	DbxUserRepository.prototype.getBBCustomerServiceLimit = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('getBBCustomerServiceLimit', params, onCompletion);
	};

	//For Operation 'getAPIPasswordLockoutSettings' with service id 'getAPIPasswordLockoutSettings8266'
	DbxUserRepository.prototype.getAPIPasswordLockoutSettings = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('getAPIPasswordLockoutSettings', params, onCompletion);
	};

	//For Operation 'RegisterMBOwner' with service id 'RegisterMBOwner1331'
	DbxUserRepository.prototype.RegisterMBOwner = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('RegisterMBOwner', params, onCompletion);
	};

	//For Operation 'getUserNameRulesAndPolicy' with service id 'getUserNameRulesAndPolicy1255'
	DbxUserRepository.prototype.getUserNameRulesAndPolicy = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('getUserNameRulesAndPolicy', params, onCompletion);
	};

	//For Operation 'CreateEmploymentDetails' with service id 'CreateEmploymentOperation5693'
	DbxUserRepository.prototype.CreateEmploymentDetails = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('CreateEmploymentDetails', params, onCompletion);
	};

	//For Operation 'requestOTPPreLogin' with service id 'RequestNUOOtp1869'
	DbxUserRepository.prototype.requestOTPPreLogin = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('requestOTPPreLogin', params, onCompletion);
	};

	//For Operation 'sendCustomerUnlockEmail' with service id 'sendCustomerUnlockEmail1870'
	DbxUserRepository.prototype.sendCustomerUnlockEmail = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('sendCustomerUnlockEmail', params, onCompletion);
	};

	//For Operation 'downloadEAgreementPdf' with service id 'GetEAgreementPdfDownloaded2866'
	DbxUserRepository.prototype.downloadEAgreementPdf = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('downloadEAgreementPdf', params, onCompletion);
	};

	//For Operation 'verifyOTPPreLogin' with service id 'VerifyOTPPreLogin6602'
	DbxUserRepository.prototype.verifyOTPPreLogin = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('verifyOTPPreLogin', params, onCompletion);
	};

	//For Operation 'deleteUserProfileImage' with service id 'DeleteUserProfileImage1304'
	DbxUserRepository.prototype.deleteUserProfileImage = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('deleteUserProfileImage', params, onCompletion);
	};

	//For Operation 'createBBCustomerServiceLimit' with service id 'createBBCustomerServiceLimit1793'
	DbxUserRepository.prototype.createBBCustomerServiceLimit = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('createBBCustomerServiceLimit', params, onCompletion);
	};

	//For Operation 'editBBCustomerServiceLimit' with service id 'editBBCustomerServiceLimit8796'
	DbxUserRepository.prototype.editBBCustomerServiceLimit = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('editBBCustomerServiceLimit', params, onCompletion);
	};

	//For Operation 'sendKMSSMS' with service id 'sendSMS5810'
	DbxUserRepository.prototype.sendKMSSMS = function(params, onCompletion){
		return DbxUserRepository.prototype.customVerb('sendKMSSMS', params, onCompletion);
	};

	return DbxUserRepository;
})