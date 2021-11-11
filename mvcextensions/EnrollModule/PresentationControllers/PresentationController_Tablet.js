define(["AsyncManager/BusinessControllers/BusinessController"], function(AsyncManager) {
  function Enroll_PresentationController() {
    kony.mvc.Presentation.BasePresenter.call(this);
    this.logger = applicationManager.getLoggerManager();
    enrollPresentationScope = this;
    self = this;
     this.asyncManager = new AsyncManager();
	 this.phoneNumber = "";
     this.email= "";
     this.unmaskedphoneNumber = "";
     this.unmaskedEmail= "";
	 this.MFAresponse = "";
  }
  inheritsFrom(Enroll_PresentationController, kony.mvc.Presentation.BasePresenter);
  Enroll_PresentationController.prototype.initializePresentationController = function() {
  };
  /**
  * Common Function For Navigation
  * @member of Enroll_presentationController
  * @param {String} Contains form name.
  */
  Enroll_PresentationController.prototype.commonFunctionForNavigation = function(formName) {
    var navManger = applicationManager.getNavigationManager();
    navManger.navigateTo(formName);
  };
  /**
  * Validates if user is already enrolled
  * @member of Enroll_presentationController
  * @param {json} Contains Lastname, dob and SSN.
  */
   Enroll_PresentationController.prototype.checkUserEnrolled = function(params) {
    self.logger.log("#### checkUserEnrolled started ####");
    applicationManager.getPresentationUtility().showLoadingScreen();
    var newUserManager = applicationManager.getNewUserBusinessManager();
	var inputJson =     {
		"Ssn": params.ssn,
		"LastName": params.userlastname,
		"DateOfBirth": params.dateOfBirth
	};
    newUserManager.checkUserEnrolled(inputJson,enrollPresentationScope.checkUserEnrolledSuccess,enrollPresentationScope.checkUserEnrolledFailure);
  };
  /**
  * checkUserEnrolled Success Callback
  */
  Enroll_PresentationController.prototype.checkUserEnrolledSuccess = function(response){
    var authManager = applicationManager.getAuthManager();
    authManager.setServicekey(response.serviceKey);
    enrollPresentationScope.logger.log("#### checkUserEnrolledSuccess in Enroll_PresentationController ####");
    if(response && response.result === "User Not Enrolled"){
      enrollPresentationScope.navigateToMFA(response.serviceKey);
    }
    else{
      var navManager = applicationManager.getNavigationManager();
      navManager.navigateTo("frmAlreadyEnrolled");
    }
  };
  /**
  * checkUserEnrolled Failure Callback
  */
  Enroll_PresentationController.prototype.checkUserEnrolledFailure = function(error) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    self.logger.log("####  checkUserEnrolled failure callback ####");
    if (error.isServerUnreachable) {
      applicationManager.getPresentationInterruptHandler().showErrorMessage("preLogin", error);
    } else {
      var controller = applicationManager.getPresentationUtility().getController('frmEnrollSSn', true);
      var errorMsg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.SomethingWrong");
      controller.bindViewError(errorMsg);
    }
  };
    Enroll_PresentationController.prototype.navigateToMFA = function(servicekey){
	var inputJSON={
          "MFAAttributes": {
		"serviceKey": servicekey
			}
		}
         var authManager = applicationManager.getAuthManager();
    authManager.requestEnrollOTP(inputJSON,enrollPresentationScope.navigateToMFASuccessCallback,enrollPresentationScope.navigateToMFAErrorCallback);
    };
   Enroll_PresentationController.prototype.navigateToMFASuccessCallback = function(res){
    	var communicationType = res["MFAAttributes"].communicationType;
        enrollPresentationScope.unmaskedEmail = res.MFAAttributes.customerCommunication.email[0].unmasked;
        enrollPresentationScope.unmaskedphoneNumber = res.MFAAttributes.customerCommunication.phone[0].unmasked;
	    applicationManager.getAuthManager().setCommunicationType(communicationType);
    	applicationManager.getAuthManager().setMFAResponse(res);
     	if(communicationType === "DISPLAY_ALL"){
            var servicekey = res["MFAAttributes"].serviceKey;
          applicationManager.getAuthManager().setServicekey(servicekey);
           var controller = applicationManager.getPresentationUtility().getController('frmEnrollMFA', true);
          controller.setFormUI(res);
          enrollPresentationScope.commonFunctionForNavigation("frmEnrollMFA");
        }
     else{
         var securitykey = res["MFAAttributes"].securityKey;
          var servicekey = res["MFAAttributes"].serviceKey;
          applicationManager.getAuthManager().setServicekey(servicekey);
          applicationManager.getAuthManager().setSecurityKey(securitykey);
         var controller = applicationManager.getPresentationUtility().getController('frmEnrollSecurity', true);
          controller.setFormUI(res);
          enrollPresentationScope.commonFunctionForNavigation("frmEnrollSecurity");
     }
    };
   Enroll_PresentationController.prototype.navigateToMFAErrorCallback = function(err){
		  applicationManager.getPresentationUtility().dismissLoadingScreen();
		 if (err["isServerUnreachable"]) {
         applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
    	}
     	else{
              var controller = applicationManager.getPresentationUtility().getController('frmEnrollSSn', true);
            var errorMsg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.SomethingWrong");
            controller.bindViewError(errorMsg);
        }
   };
   Enroll_PresentationController.prototype.navigateToOTPScreen = function(data){
     enrollPresentationScope.unmaskedphonenumber = data.phone;
     enrollPresentationScope.unmaskedEmail =  data.email;
        var username = applicationManager.getAuthManager().getUserName();
     	var servicekey = applicationManager.getAuthManager().getServicekey();
        var inputJSON = {
          "UserName": username,
          "MFAAttributes" : {
           "serviceKey":  servicekey,
            "OTP": {
              "phone" : enrollPresentationScope.unmaskedphonenumber,
              "email" : enrollPresentationScope.unmaskedEmail
            }
        }
        };
            var authManager = applicationManager.getAuthManager();
    authManager.requestEnrollOTP(inputJSON,enrollPresentationScope.navigateToOTPScreenSuccessCallback,enrollPresentationScope.navigateToOTPScreenErrorCallback);
    };
   Enroll_PresentationController.prototype.navigateToOTPScreenSuccessCallback = function(res){
     var securitykey = res["MFAAttributes"].securityKey;
          applicationManager.getAuthManager().setSecurityKey(securitykey);
     var communicationType =  applicationManager.getAuthManager().getCommunicationType();
	      res["MFAAttributes"]["communicationType"] = communicationType;
		  res["MFAAttributes"]["phone"] = enrollPresentationScope.phoneNumber;
  	      res["MFAAttributes"]["email"] = enrollPresentationScope.email;
    	  var controller = applicationManager.getPresentationUtility().getController('frmEnrollSecurity', true);
          controller.setFormUI(res);
          enrollPresentationScope.commonFunctionForNavigation("frmEnrollSecurity");
    };
   Enroll_PresentationController.prototype.navigateToOTPScreenErrorCallback = function(err){
		 applicationManager.getPresentationUtility().dismissLoadingScreen();
		 if (err["isServerUnreachable"]) {
         applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
    };
   };
       Enroll_PresentationController.prototype.verifyMFAOTP = function(otp){
		var otp = otp;
     	var servicekey = applicationManager.getAuthManager().getServicekey();
        var securitykey =  applicationManager.getAuthManager().getSecurityKey();
        var inputJSON ={
   			"MFAAttributes":{
      			"serviceKey":servicekey,
    			  "OTP":{
         			"securityKey":securitykey,
       				  "otp": otp
      				}
   				}
			}
        enrollPresentationScope.asyncManager.initiateAsyncProcess(2);
        enrollPresentationScope.getUsernameAndPasswordRulesAndPolicies(enrollPresentationScope.getPasswordRulesAndPolicySuccessCallback,enrollPresentationScope.getPasswordRulesAndPolicyErrorCallback);
        applicationManager.getAuthManager().verifyOTPPreLogin(inputJSON,enrollPresentationScope.verifyMFAOTPSuccessCallback,enrollPresentationScope.verifyMFAOTPErrorCallback);
    };
   Enroll_PresentationController.prototype.verifyMFAOTPSuccessCallback = function(res){
   	enrollPresentationScope.asyncManager.setSuccessStatus(0, res);
    if (enrollPresentationScope.asyncManager.areAllservicesDone(2)) {
    enrollPresentationScope.logger.log("####  OTP validation success call back ####");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
	var data = navManager.getCustomInfo("frmEnrollSignUp");
          res = enrollPresentationScope.asyncManager.getData(1);
    if(data){
      data.usernamePolicy = res.usernamepolicy.content;
       data.passwordPolicy = res.passwordpolicy.content;
    }
    else{
      data = {"usernamePolicy":res.usernamepolicy.content,"passwordPolicy":res.passwordpolicy.content};
    }
    navManager.setCustomInfo("frmEnrollSignUp",data);
    var validationUtility = applicationManager.getValidationUtilManager();
    validationUtility.createRegexForUsernameValidation(res.usernamerules);
    validationUtility.createRegexForPasswordValidation(res.passwordrules);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    navManager.navigateTo("frmEnrollSignUp");
	}
    };
   Enroll_PresentationController.prototype.verifyMFAOTPErrorCallback = function(err){
		 applicationManager.getPresentationUtility().dismissLoadingScreen();
		 if (err["isServerUnreachable"]) {
         applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
         }
         else {
         	 var controller = applicationManager.getPresentationUtility().getController('frmEnrollSecurity', true);
      	 	 controller.showIncorrectOTPError(err.serverErrorRes);
         }
    };
Enroll_PresentationController.prototype.resendMFAOTP = function(data){
        var username = applicationManager.getAuthManager().getUserName();
     	var servicekey = applicationManager.getAuthManager().getServicekey();
        var inputJSON = {
          "MFAAttributes" : {
           "serviceKey":  servicekey,
            "OTP": {
             "phone" : enrollPresentationScope.unmaskedphoneNumber,
             "email" : enrollPresentationScope.unmaskedEmail,
			 "securityKey" : applicationManager.getAuthManager().getSecurityKey()
            }
        }
        };
   		applicationManager.getAuthManager().requestEnrollOTP(inputJSON,enrollPresentationScope.resendMFAOTPSuccessCallback,enrollPresentationScope.resendMFAOTPScreenErrorCallback);
    };
   Enroll_PresentationController.prototype.resendMFAOTPSuccessCallback = function(res){
	    enrollPresentationScope.MFAresponse = res;
	    applicationManager.getAuthManager().setSecurityKey(res["MFAAttributes"]["securityKey"]);
		applicationManager.getPresentationUtility().dismissLoadingScreen();
    };
   Enroll_PresentationController.prototype.resendMFAOTPScreenErrorCallback = function(err){
		 applicationManager.getPresentationUtility().dismissLoadingScreen();
		 if (err["isServerUnreachable"]) {
         applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
         }
         else {
  		      var controller = applicationManager.getPresentationUtility().getController('frmEnrollSecurity', true);
           	  controller.showIncorrectOTPError(err.serverErrorRes);
	         }
    };
  /**
  * Validates the entered SSN
  * @member of Enroll_presentationController
  * @param {String} SSN - which contains SSN Ex: 123456789 .
  */
  Enroll_PresentationController.prototype.validateEnrollSSN = function(SSN) {
    self.logger.log("#### validation on SSN started ####");
    var validationManager = applicationManager.getValidationUtilManager();
    var isValidSSN = validationManager.isValidSSNNumber(SSN);
    if (isValidSSN) {
      self.logger.log("#### validation on SSN successful ####");
      var navManger = applicationManager.getNavigationManager();
      var newUserManager = applicationManager.getNewUserBusinessManager();
      newUserManager.setEnrollAttribute("Ssn", SSN);
      //navManger.navigateTo("frmEnrollSecurityCheck");
	  navManger.navigateTo("frmEnrollSecurity");
    } else {
      self.logger.log("#### validation on SSN failed ####");
      var controller = applicationManager.getPresentationUtility().getController('frmEnrollSSn', true);
      controller.bindViewError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.enterSSN"));
    }
  };
  /**
  * Navigates to frmEnrollDOB
  * @member of Enroll_PresentationController
  * @param {String} lastName - which contains the Last Name. Ex: Stark
  */
  Enroll_PresentationController.prototype.navigateToFrmEnrollDOB = function(lastName) {
    self.logger.log("#### navigateToFrmEnrollDOB in Enroll_PresentationController started ####");
    var navManager = applicationManager.getNavigationManager();
    var newUserManager = applicationManager.getNewUserBusinessManager();
    newUserManager.setEnrollAttribute("userlastname", lastName);
    navManager.navigateTo("frmEnrollDOB");
    self.logger.log("#### navigateToFrmEnrollDOB in Enroll_PresentationController completed ####");
  };
  /**
  * Validate the Date Of Birth
  * @member of Enroll_PresentationController
  * @param {String} dob - which contains Date Of Birth. Ex: 09-08-1995
  */
  Enroll_PresentationController.prototype.validateDOB = function(date) {
    self.logger.log("#### validateDOB in Enroll_PresentationController started ####");
    var validationManager=applicationManager.getValidationUtilManager();
    var utilManager = applicationManager.getValidationUtilManager();
    var isDOBValid = utilManager.isDOBValid(date);
    if (isDOBValid) {
      var dob = date.split("/");
      dob = dob[2] + "-" + dob[0] + "-" + dob[1];
      self.logger.log("#### validateDOB in Enroll_PresentationController: Navigating to frmEnrollSSn####");
      var navManager = applicationManager.getNavigationManager();
      var newUserManager = applicationManager.getNewUserBusinessManager();
      newUserManager.setEnrollAttribute("dateOfBirth", dob);
      navManager.navigateTo("frmEnrollSSn");
    } else {
      var controller = applicationManager.getPresentationUtility().getController('frmEnrollDOB', true);
      controller.bindViewError(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.validDOB"));
    }
    self.logger.log("#### validateDOB in Enroll_PresentationController completed ####");
  };
  /**
  * Checks Availability of UserName
  * @member of Enroll_PresentationController
  * @param {String} userName - which contains UserName. Ex: TonyStark
  */
  Enroll_PresentationController.prototype.checkAvailabilityOfUserName = function(userName) {
    var newUserManager = applicationManager.getNewUserBusinessManager();
    var params = {};
    params.UserName = userName;
    newUserManager.checkUserName(params, self.checkAvailabilityOfUserNameSuccess, self.checkAvailabilityOfUserNameFailure);
  };
  /**
  * CheckUserName Success Callback
  */
  Enroll_PresentationController.prototype.checkAvailabilityOfUserNameSuccess = function(response) {
    self.logger.log("#### checkAvailabilityOfUserNameSuccess in Enroll_PresentationController ####");
    var controller = applicationManager.getPresentationUtility().getController('frmEnrollSignUp', true);
    if (response.errmsg && response.errmsg === "User already exists") {
      controller.bindUserNameIsNotAvailable();
    } else {
      controller.bindUserNameIsAvailable();
    }
  };
  /**
  * CheckUserName Failure Callback
  */
  Enroll_PresentationController.prototype.checkAvailabilityOfUserNameFailure = function() {
    self.logger.log("#### checkAvailabilityOfUserNameFailure in Enroll_PresentationController ####");
    var controller = applicationManager.getPresentationUtility().getController('frmEnrollSignUp', true);
    controller.bindUserNameIsNotAvailable();
  };
  /**
  * Checks if Password has required characters
  * @member of Enroll_PresentationController
  * @param {String} password - which contains Password. Ex: Kony@123
  */
  Enroll_PresentationController.prototype.validatePassword = function(password) {
   enrollPresentationScope.logger.log("#### validatePassword in Enroll_PresentationController started ####");
    var validationUtilManager = applicationManager.getValidationUtilManager();
    var controller = applicationManager.getPresentationUtility().getController('frmEnrollSignUp', true);
    if(validationUtilManager.isPasswordValidForPolicy(password))
    {
      enrollPresentationScope.logger.log("#### validatePassword in Enroll_PresentationController: Password is valid ####");
      controller.bindValidPassword();
	  controller.hideFlxRequirements();
    }
    else{
      enrollPresentationScope.logger.log("#### validatePassword in Enroll_PresentationController: Password is invalid ####");
      controller.showFlxSecurityRequirements();
    }
    enrollPresentationScope.logger.log("#### validatePassword in Enroll_PresentationController completed ####");
  };
  /**
  * Checks if Password has required characters
  * @member of Enroll_PresentationController
  * @param {String} password - which contains Password. Ex: Kony@123
  * @return Boolean
  */
  Enroll_PresentationController.prototype.isValidPassword = function(password) {
    self.logger.log("#### isValidPassword in Enroll_PresentationController ####");
    return applicationManager.getValidationUtilManager().isValidPassword(password);
  };
  /**
  * Code to request OTP
  * @member of Enroll_presentationController
  * @param {callBack} presentationSuccessCallback - invoke the call back with success response.
  * @param {callBack} presentationErrorCallback - invoke the call back with error response.
  */
  Enroll_PresentationController.prototype.requestOTP = function() {
    self.logger.log("#### request OTP Code started ####");
    var newUserManager = applicationManager.getNewUserBusinessManager();
    var userlastname = newUserManager.getEnrollObject().userlastname;
    var dateOfBirth = newUserManager.getEnrollObject().dateOfBirth;
    var ssn =  newUserManager.getEnrollObject().ssn;
    var username = "";
    var requestOTPJSON = {
      "ssn": ssn,
      "userlastname": userlastname,
      "dateOfBirth": dateOfBirth,
      "userName": username
    };
    var authManager = applicationManager.getAuthManager();
    authManager.fetchOTP(requestOTPJSON, self.requestOTPSuccess, self.requestOTPFailure);
  };
  Enroll_PresentationController.prototype.requestOTPSuccess = function(response) {
    self.logger.log("#### request OTP service call success ####");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    self.logger.log("#### request OTP service call success navigating to frmEnrollSecurity ####");
    navManager.navigateTo("frmEnrollSecurity");
  };
  Enroll_PresentationController.prototype.requestOTPFailure = function(error) {
    self.logger.log("#### request OTP service call failed ####");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (error.isServerUnreachable) {
      applicationManager.getPresentationInterruptHandler().showErrorMessage("preLogin", error);
    } else {
      var controller = applicationManager.getPresentationUtility().getController('frmEnrollSecurityCheck', true);
      var errorMsg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.SomethingWrong");
      controller.bindViewError(errorMsg);
    }
  };
  /**
  * Code to validate OTP
  * @member of Enroll_presentationController
  * @param {String}  EX: 123456
  * @param {callBack} presentationSuccessCallback - invoke the call back with success response.
  * @param {callBack} presentationErrorCallback - invoke the call back with error response.
  */
  Enroll_PresentationController.prototype.validateOTP = function(otp) {
   enrollPresentationScope.logger.log("#### validate OTP Code started ####");
    var validationUtilManager = applicationManager.getValidationUtilManager();
    if(validationUtilManager.isValidOTP(otp))
    {
      enrollPresentationScope.logger.log("####  OTP is valid ####");
      //       var navManager = applicationManager.getNavigationManager();
      //       var ssn =  navManager.getCustomInfo("frmEnrollSSn");
      //       var dateOfBirth = navManager.getCustomInfo("frmEnrollDOB");
      //       var userlastname = navManager.getCustomInfo("frmEnrollLastName");
      var newUserManager = applicationManager.getNewUserBusinessManager();
      var userlastname = newUserManager.getEnrollObject().userlastname;
      var dateOfBirth = newUserManager.getEnrollObject().dateOfBirth;
      var ssn =  newUserManager.getEnrollObject().ssn;
      var username = "";
      var verifyOTPJSON = {
        "Otp":otp,
        "Ssn":ssn,
        "LastName":userlastname,
        "DateOfBirth":dateOfBirth,
        "UserName": username
      };
	  enrollPresentationScope.asyncManager.initiateAsyncProcess(2);
      enrollPresentationScope.getUsernameAndPasswordRulesAndPolicies(enrollPresentationScope.getPasswordRulesAndPolicySuccessCallback,enrollPresentationScope.getPasswordRulesAndPolicyErrorCallback);
      var authManager = applicationManager.getAuthManager();
      authManager.verifyOTP(verifyOTPJSON,enrollPresentationScope.validateOTPSuccess,enrollPresentationScope.validateOTPFailure);
    }
    else
    {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      var controller = applicationManager.getPresentationUtility().getController('frmEnrollSecurity', true);
      var errormsg =  applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.enterSecurityCode");
      controller.bindGenericError(errormsg);
    }
  };
  Enroll_PresentationController.prototype.validateOTPSuccess = function(response) {
    enrollPresentationScope.asyncManager.setSuccessStatus(0, response);
    if (enrollPresentationScope.asyncManager.areAllservicesDone(2)) {
    enrollPresentationScope.logger.log("####  OTP validation success call back ####");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
	var data = navManager.getCustomInfo("frmEnrollSignUp");
          res = enrollPresentationScope.asyncManager.getData(1);
    if(data){
      data.usernamePolicy = res.usernamepolicy.content;
       data.passwordPolicy = res.passwordpolicy.content;
    }
    else{
      data = {"usernamePolicy":res.usernamepolicy.content,"passwordPolicy":res.passwordpolicy.content};
    }
    navManager.setCustomInfo("frmEnrollSignUp",data);
    var validationUtility = applicationManager.getValidationUtilManager();
    validationUtility.createRegexForUsernameValidation(res.usernamerules);
    validationUtility.createRegexForPasswordValidation(res.passwordrules);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    navManager.navigateTo("frmEnrollSignUp");
	}
  };
  Enroll_PresentationController.prototype.validateOTPFailure = function(error) {
   enrollPresentationScope.asyncManager.setErrorStatus(0, error);
    enrollPresentationScope.logger.log("####  OTP validation error call back ####");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (error["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("preLogin", error);
    else{
      var controller = applicationManager.getPresentationUtility().getController('frmEnrollSecurity', true);
      var errorMsg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.enterValidOTP");
      controller.bindGenericError(errorMsg);
    }
  };
  /**
  * Code to get cards
  * @member of Enroll_presentationController
  * @param {callBack} presentationSuccessCallback - invoke the call back with success response.
  * @param {callBack} presentationErrorCallback - invoke the call back with error response.
  */
  Enroll_PresentationController.prototype.getCardsForEnroll = function() {
    self.logger.log("#### code for getting cards for enroll started  ####");
    var newUserManager = applicationManager.getNewUserBusinessManager();
    var userlastname = newUserManager.getEnrollObject().userlastname;
    var dateOfBirth = newUserManager.getEnrollObject().dateOfBirth;
    var ssn = newUserManager.getEnrollObject().ssn;
    var cardsManager = applicationManager.getCardsManager();
    cardsManager.fetchCardsForEnroll(userlastname, dateOfBirth, ssn, self.getCardsForEnrollSuccess, self.getCardsForEnrollFailure);
  };
  Enroll_PresentationController.prototype.getCardsForEnrollSuccess = function(response) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    self.logger.log("####  getting cards for enroll success call back ####");
    var data = [];
    for (var i in response) {
      var item = response[i];
      data.push({
        cardType: item.cardType,
        cardNumber: item.cardNumber,
      });
    }
    var navManager = applicationManager.getNavigationManager();
    navManager.setCustomInfo("frmEnrollCVV", data);
    if (data.length > 0) {
      self.logger.log("#### code for validation of CVV success navigating to frmEnrollSignUp  ####");
      navManager.navigateTo("frmEnrollCVV");
    } else {
      var controller = applicationManager.getPresentationUtility().getController('frmEnrollSecurityCheck', true);
      var errorMsg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.noCardsToShow");
      controller.bindViewError(errorMsg);
    }
  };
  Enroll_PresentationController.prototype.getCardsForEnrollFailure = function(error) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    self.logger.log("####  getting cards for enroll failure callback ####");
    if (error.isServerUnreachable) {
      applicationManager.getPresentationInterruptHandler().showErrorMessage("preLogin", error);
    } else {
      var controller = applicationManager.getPresentationUtility().getController('frmEnrollSecurityCheck', true);
      var errorMsg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.unableToFetchCards");
      controller.bindViewError(errorMsg);}
  };
  /**
  * Code to validate CVV
  * @member of Enroll_presentationController
  * @param {String} cardNumber Ex: 123456789123456
  * @param {String} CVV Ex: 123
  * @param {callBack} presentationSuccessCallback - invoke the call back with success response.
  * @param {callBack} presentationErrorCallback - invoke the call back with error response.
  */
  Enroll_PresentationController.prototype.validateCVV = function(cardNumber, cvv) {
    self.logger.log("#### code for validation of CVV started  ####");
    var validationUtilManager = applicationManager.getValidationUtilManager();
    if (validationUtilManager.isValidCVV(cvv)) {
      var newUserManager = applicationManager.getNewUserBusinessManager();
      var userlastname = newUserManager.getEnrollObject().userlastname;
      var dateOfBirth = newUserManager.getEnrollObject().dateOfBirth;
      var ssn =  newUserManager.getEnrollObject().ssn;
      var username = "";
      var verifyCVVJSon = {
        "ssn": ssn,
        "userlastname": userlastname,
        "dateOfBirth": dateOfBirth,
        "cvv": cvv,
        "cardNumber": cardNumber,
        "userName": username
      };
      var authManager = applicationManager.getAuthManager();
      authManager.verifyCVV(verifyCVVJSon, self.validateCVVSuccess, self.validateCVVFailure);
    } else {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      var controller = applicationManager.getPresentationUtility().getController('frmEnrollCVV', true);
      var errormsg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.enterCVV");
      controller.bindGenericError(errormsg);
    }
  };
  Enroll_PresentationController.prototype.validateCVVSuccess = function(response) {
    self.logger.log("#### code for validation of CVV success  ####");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    self.logger.log("#### code for validatgion of CVV success navigating to frmEnrollSignUp  ####");
    navManager.navigateTo("frmEnrollSignUp");
  };
  Enroll_PresentationController.prototype.validateCVVFailure = function(error) {
    self.logger.log("#### code for validation of CVV failed  ####");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (error.isServerUnreachable) {
      applicationManager.getPresentationInterruptHandler().showErrorMessage("preLogin", error);
    } else {
      var controller = applicationManager.getPresentationUtility().getController('frmEnrollCVV', true);
      var errorMsg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.unableToVerifyCVV");
      controller.bindGenericError(errorMsg);}
  };
  /**
  * Creates New User by invoking createUserForEnroll of NewUserBusinessManager
  * @member of Enroll_PresentationController
  * @param {String} userName - which contains User Name. Ex: TonyStark
  * @param {String} password - which contains Password. Ex: Kony@123
  */
  Enroll_PresentationController.prototype.createUser = function(userName, password) {
   enrollPresentationScope.logger.log("#### createUser in Enroll_PresentationController ####");
    enrollPresentationScope.UserName = userName;
    var newUserManager = applicationManager.getNewUserBusinessManager();
		newUserManager.setEnrollAttribute("UserName",userName);
		newUserManager.setEnrollAttribute("Password", password);
        newUserManager.setEnrollAttribute("serviceKey", applicationManager.getAuthManager().getServicekey());
  	    var inputJSON = {
			"UserName": userName,
			"Password": password,
			"serviceKey": applicationManager.getAuthManager().getServicekey()
    }
    newUserManager.createUserForEnroll(inputJSON,enrollPresentationScope.createUserSuccess, enrollPresentationScope.createUserFailure);
  };
  /**
  * createUserForEnroll Success callback
  * @member of Enroll_PresentationController
  */
  Enroll_PresentationController.prototype.createUserSuccess = function(response) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (response.errmsg && response.errmsg.startsWith("This username already being used by another user")) {
      var controller = applicationManager.getPresentationUtility().getController('frmEnrollSignUp', true);
      controller.bindUserNameIsNotAvailable();
    } else {
      self.resetEnrollObj();
      var navManager = applicationManager.getNavigationManager();
      navManager.setCustomInfo("frmEnrollSignUp", {
        "userName": enrollPresentationScope.UserName,
        "isEnrollSuccess": true
      });
      navManager.navigateTo("frmLogin");
    }
  };
  /**
  * createUserForEnroll Failure callback
  * @member of Enroll_PresentationController
  */
  Enroll_PresentationController.prototype.createUserFailure = function(error) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (error.isServerUnreachable) {
      applicationManager.getPresentationInterruptHandler().showErrorMessage("preLogin", error);
    } else {
      var controller = applicationManager.getPresentationUtility().getController('frmEnrollSignUp', true);
      var errorMsg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.enrollFailed");
      controller.bindViewError(errorMsg);
    }
  };
  /**
  * Code to resend OTP
  * @member of Enroll_presentationController
  * @param {callBack} presentationSuccessCallback - invoke the call back with success response.
  * @param {callBack} presentationErrorCallback - invoke the call back with error response.
  */
  Enroll_PresentationController.prototype.resendOTP = function() {
    self.logger.log("#### code for resend OTP started  ####");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var newUserManager = applicationManager.getNewUserBusinessManager();
    var userlastname = newUserManager.getEnrollObject().userlastname;
    var dateOfBirth = newUserManager.getEnrollObject().dateOfBirth;
    var ssn =  newUserManager.getEnrollObject().ssn;
    var username = "";
    var requestOTPJSON = {
      "ssn": ssn,
      "userlastname": userlastname,
      "dateOfBirth": dateOfBirth,
      "userName": username
    };
    var authManager = applicationManager.getAuthManager();
    authManager.fetchOTP(requestOTPJSON, self.resendOTPSuccess, self.resendOTPFailure);
  };
  Enroll_PresentationController.prototype.resendOTPSuccess = function() {
    self.logger.log("#### code for resend OTP success  ####");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  };
  Enroll_PresentationController.prototype.resendOTPFailure = function() {
    self.logger.log("#### code for resend OTP failure  ####");
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  };
  Enroll_PresentationController.prototype.getEnrollLastName = function() {
    var newUserManager = applicationManager.getNewUserBusinessManager();
    return newUserManager.getEnrollObject().userlastname;
  };
  Enroll_PresentationController.prototype.getEnrollDOB = function() {
    var newUserManager = applicationManager.getNewUserBusinessManager();
    return newUserManager.getEnrollObject().dateOfBirth;
  };
  Enroll_PresentationController.prototype.resetEnrollObj = function() {
    var newUserManager = applicationManager.getNewUserBusinessManager();
    newUserManager.resetEnrollObj();
    var navManager = applicationManager.getNavigationManager();
    navManager.navigateTo("frmLogin");
  };
  Enroll_PresentationController.prototype.getUsernameRulesAndPolicy = function(){
    var userObj = applicationManager.getUserPreferencesManager();
    userObj.fetchUsernameRulesAndPolicy(enrollPresentationScope.getUsernameRulesAndPolicySuccessCallback,enrollPresentationScope.getUsernameRulesAndPolicyErrorCallback);
  };
  Enroll_PresentationController.prototype.getUsernameRulesAndPolicySuccessCallback = function(res){
    var navManager = applicationManager.getNavigationManager();
    var data = navManager.getCustomInfo("frmEnrollSignUp");
    if(data){
      data.usernamePolicy = res.usernamepolicy.content;
    }
    else{
      data = {"usernamePolicy":res.usernamepolicy.content};
    }
    navManager.setCustomInfo("frmEnrollSignUp",data);
    var validationUtility = applicationManager.getValidationUtilManager();
    validationUtility.createRegexForUsernameValidation(res.usernamerules);
  };
  Enroll_PresentationController.prototype.getUsernameRulesAndPolicyErrorCallback = function(err){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (errRes["isServerUnreachable"]) {
      applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", errRes);
    }
  };
  Enroll_PresentationController.prototype.getPasswordRulesAndPolicy = function(){
    var userObj = applicationManager.getUserPreferencesManager();
    userObj.fetchPasswordRulesAndPolicy(enrollPresentationScope.getPasswordRulesAndPolicySuccessCallback,enrollPresentationScope.getPasswordRulesAndPolicyErrorCallback);
  };
  Enroll_PresentationController.prototype.getPasswordRulesAndPolicySuccessCallback = function(res){
    var navManager = applicationManager.getNavigationManager();
    var data = navManager.getCustomInfo("frmEnrollSignUp");
    if(data){
      data.passwordPolicy = res.passwordpolicy.content;
    }
    else{
      data = {"passwordPolicy":res.passwordpolicy.content};
    }
    navManager.setCustomInfo("frmEnrollSignUp",data);
    var validationUtility = applicationManager.getValidationUtilManager();
    validationUtility.createRegexForPasswordValidation(res.passwordrules);
  };
 	Enroll_PresentationController.prototype.getPasswordRulesAndPolicyErrorCallback = function(err){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (errRes["isServerUnreachable"]) {
      applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", errRes);
    }
  };
  Enroll_PresentationController.prototype.getUsernameAndPasswordRulesAndPolicies = function(){
    var userObj = applicationManager.getUserPreferencesManager();
    userObj.getUsernameAndPasswordRulesAndPolicies(enrollPresentationScope.getUsernameAndPasswordRulesAndPoliciesSuccessCallback,enrollPresentationScope.getUsernameAndPasswordRulesAndPoliciesErrorCallback);
  };
  Enroll_PresentationController.prototype.getUsernameAndPasswordRulesAndPoliciesSuccessCallback = function(res){
	 enrollPresentationScope.asyncManager.setSuccessStatus(1, res);
     if (enrollPresentationScope.asyncManager.areAllservicesDone(2)) {
    var navManager = applicationManager.getNavigationManager();
    var data = navManager.getCustomInfo("frmEnrollSignUp");
    if(data){
      data.usernamePolicy = res.usernamepolicy.content;
       data.passwordPolicy = res.passwordpolicy.content;
    }
    else{
      data = {"usernamePolicy":res.usernamepolicy.content};
       data = {"passwordPolicy":res.passwordpolicy.content};
    }
    navManager.setCustomInfo("frmEnrollSignUp",data);
    var validationUtility = applicationManager.getValidationUtilManager();
    validationUtility.createRegexForUsernameValidation(res.usernamerules);
    validationUtility.createRegexForPasswordValidation(res.passwordrules);
	 navManager.navigateTo("frmEnrollSignUp");
	 }
  };
  Enroll_PresentationController.prototype.getUsernameAndPasswordRulesAndPoliciesErrorCallback = function(err){
	enrollPresentationScope.asyncManager.setErrorStatus(1, err);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (errRes["isServerUnreachable"]) {
      applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
    }
  };
  return Enroll_PresentationController;
});