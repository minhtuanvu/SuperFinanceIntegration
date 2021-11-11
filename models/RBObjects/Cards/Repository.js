define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function CardsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	CardsRepository.prototype = Object.create(BaseRepository.prototype);
	CardsRepository.prototype.constructor = CardsRepository;

	//For Operation 'getCardsForAdmin' with service id 'GetCardsForAdmin1780'
	CardsRepository.prototype.getCardsForAdmin = function(params, onCompletion){
		return CardsRepository.prototype.customVerb('getCardsForAdmin', params, onCompletion);
	};

	//For Operation 'createCardDataForApplePay' with service id 'linkCardWithPaymentService7572'
	CardsRepository.prototype.createCardDataForApplePay = function(params, onCompletion){
		return CardsRepository.prototype.customVerb('createCardDataForApplePay', params, onCompletion);
	};

	//For Operation 'deleteTravelNotification' with service id 'deleteTravelNotification6950'
	CardsRepository.prototype.deleteTravelNotification = function(params, onCompletion){
		return CardsRepository.prototype.customVerb('deleteTravelNotification', params, onCompletion);
	};

	//For Operation 'unlockCard' with service id 'createOrder8365'
	CardsRepository.prototype.unlockCard = function(params, onCompletion){
		return CardsRepository.prototype.customVerb('unlockCard', params, onCompletion);
	};

	//For Operation 'getTravelNotification' with service id 'getTravelNotification2919'
	CardsRepository.prototype.getTravelNotification = function(params, onCompletion){
		return CardsRepository.prototype.customVerb('getTravelNotification', params, onCompletion);
	};

	//For Operation 'updateCardForAdmin' with service id 'UpdateCardForAdmin3853'
	CardsRepository.prototype.updateCardForAdmin = function(params, onCompletion){
		return CardsRepository.prototype.customVerb('updateCardForAdmin', params, onCompletion);
	};

	//For Operation 'createCardDataForGooglePay' with service id 'universalCardEnrollment4038'
	CardsRepository.prototype.createCardDataForGooglePay = function(params, onCompletion){
		return CardsRepository.prototype.customVerb('createCardDataForGooglePay', params, onCompletion);
	};

	//For Operation 'enrollCard' with service id 'enrollCard7689'
	CardsRepository.prototype.enrollCard = function(params, onCompletion){
		return CardsRepository.prototype.customVerb('enrollCard', params, onCompletion);
	};

	//For Operation 'getCardsByUsername' with service id 'getCardsByUsername7853'
	CardsRepository.prototype.getCardsByUsername = function(params, onCompletion){
		return CardsRepository.prototype.customVerb('getCardsByUsername', params, onCompletion);
	};

	//For Operation 'applyForDebitCard' with service id 'createOrder2378'
	CardsRepository.prototype.applyForDebitCard = function(params, onCompletion){
		return CardsRepository.prototype.customVerb('applyForDebitCard', params, onCompletion);
	};

	//For Operation 'updateWithdrawalLimit' with service id 'createOrder7880'
	CardsRepository.prototype.updateWithdrawalLimit = function(params, onCompletion){
		return CardsRepository.prototype.customVerb('updateWithdrawalLimit', params, onCompletion);
	};

	//For Operation 'createCardDataForSamsungPay' with service id 'universalCardEnrollment2292'
	CardsRepository.prototype.createCardDataForSamsungPay = function(params, onCompletion){
		return CardsRepository.prototype.customVerb('createCardDataForSamsungPay', params, onCompletion);
	};

	//For Operation 'updatePurchaseLimit' with service id 'createOrder2168'
	CardsRepository.prototype.updatePurchaseLimit = function(params, onCompletion){
		return CardsRepository.prototype.customVerb('updatePurchaseLimit', params, onCompletion);
	};

	//For Operation 'createCardRequest' with service id 'createCardRequest1362'
	CardsRepository.prototype.createCardRequest = function(params, onCompletion){
		return CardsRepository.prototype.customVerb('createCardRequest', params, onCompletion);
	};

	//For Operation 'lockCard' with service id 'createOrder2180'
	CardsRepository.prototype.lockCard = function(params, onCompletion){
		return CardsRepository.prototype.customVerb('lockCard', params, onCompletion);
	};

	//For Operation 'getActiveCards' with service id 'getActiveCards8542'
	CardsRepository.prototype.getActiveCards = function(params, onCompletion){
		return CardsRepository.prototype.customVerb('getActiveCards', params, onCompletion);
	};

	//For Operation 'cancelCard' with service id 'createOrder1702'
	CardsRepository.prototype.cancelCard = function(params, onCompletion){
		return CardsRepository.prototype.customVerb('cancelCard', params, onCompletion);
	};

	//For Operation 'reportLost' with service id 'createOrder1364'
	CardsRepository.prototype.reportLost = function(params, onCompletion){
		return CardsRepository.prototype.customVerb('reportLost', params, onCompletion);
	};

	//For Operation 'applyForCreditCard' with service id 'applyForCreditCard5324'
	CardsRepository.prototype.applyForCreditCard = function(params, onCompletion){
		return CardsRepository.prototype.customVerb('applyForCreditCard', params, onCompletion);
	};

	//For Operation 'getTravelNotificationStatus' with service id 'getTravelNotificationStatus8935'
	CardsRepository.prototype.getTravelNotificationStatus = function(params, onCompletion){
		return CardsRepository.prototype.customVerb('getTravelNotificationStatus', params, onCompletion);
	};

	//For Operation 'createTravelNotification' with service id 'createTravelNotification6410'
	CardsRepository.prototype.createTravelNotification = function(params, onCompletion){
		return CardsRepository.prototype.customVerb('createTravelNotification', params, onCompletion);
	};

	//For Operation 'updateTravelNotification' with service id 'updateTravelNotification4123'
	CardsRepository.prototype.updateTravelNotification = function(params, onCompletion){
		return CardsRepository.prototype.customVerb('updateTravelNotification', params, onCompletion);
	};

	//For Operation 'activateCards' with service id 'createOrder6315'
	CardsRepository.prototype.activateCards = function(params, onCompletion){
		return CardsRepository.prototype.customVerb('activateCards', params, onCompletion);
	};

	//For Operation 'getCardListForEnrolment' with service id 'getCardListForEnrolment1875'
	CardsRepository.prototype.getCardListForEnrolment = function(params, onCompletion){
		return CardsRepository.prototype.customVerb('getCardListForEnrolment', params, onCompletion);
	};

	//For Operation 'replaceCard' with service id 'createOrder7268'
	CardsRepository.prototype.replaceCard = function(params, onCompletion){
		return CardsRepository.prototype.customVerb('replaceCard', params, onCompletion);
	};

	//For Operation 'changePIN' with service id 'createOrder8163'
	CardsRepository.prototype.changePIN = function(params, onCompletion){
		return CardsRepository.prototype.customVerb('changePIN', params, onCompletion);
	};

	return CardsRepository;
})