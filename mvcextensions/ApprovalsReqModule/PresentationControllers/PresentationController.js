define(["CommonUtilities"], function(CommonUtilities) {
  /**
     * User defined presentation controller
     * @constructor
     * @extends kony.mvc.Presentation.BasePresenter
     */





  function ApprovalsReqModule_PresentationController() {
    kony.mvc.Presentation.BasePresenter.call(this);
    this.initializePresentationController();
  }

  inheritsFrom(ApprovalsReqModule_PresentationController, kony.mvc.Presentation.BasePresenter);

  /**
     * Overridden Method of kony.mvc.Presentation.BasePresenter
     * This method gets called when presentation controller gets initialized
     * @method
     */
  ApprovalsReqModule_PresentationController.prototype.initializePresentationController = function() {
    this.approvalsReqManager = applicationManager.getApprovalsReqManager();
    this.achManager= applicationManager.getACHManager
  };

  ApprovalsReqModule_PresentationController.prototype.commonFunctionForNavigation = function(formName) {
    var navManager = applicationManager.getNavigationManager();
    navManager.navigateTo(formName);
  };

  ApprovalsReqModule_PresentationController.prototype.commonNavigationFunction = function(formname) {   
    var navigateToForm = new kony.mvc.Navigation(formname);   
    navigateToForm.navigate();
  };

  /**
  * getGeneralTransactionsPendingForMyApprovals :  This is the function which is used to fetch Transactions Pending for Approvals 
  * @member of {ApprovalsReqModule_PresentationController}
  * @param {JSON Object} navObj - navigation object with success and failure flows
  * @return {}
  * @throws {}
  */ 
  ApprovalsReqModule_PresentationController.prototype.getGeneralTransactionsPendingForMyApprovals = function (navObj){ 

    kony.print("Presentation controller");
    applicationManager.getPresentationUtility().showLoadingScreen();
    var scopeObj = this;
    var approvalsReqManager = applicationManager.getApprovalsReqManager();
    approvalsReqManager.fetchGeneralTransactionsPendingForMyApprovals(
      navObj.requestData,
      scopeObj.onFetchGeneralTransactionsPendingForMyApprovalsSuccess.bind(scopeObj,navObj),
      scopeObj.onFetchGeneralTransactionsPendingForMyApprovalsFailure,
    );
      };
      /**
 * onFetchGeneralTransactionsPendingForMyApprovalsSuccess :  Method to handle success response of fetching Transactions Pending for My Approvals
 * @member of {PresentationController}
 * @param {JSON Object} response - response object from the service call 
 * @return {}  
 * @throws {}
 */ 
      ApprovalsReqModule_PresentationController.prototype.onFetchGeneralTransactionsPendingForMyApprovalsSuccess = function (navObj,response) {
      try{
        kony.print("Presentation controller onFetchGeneralTransactionsPendingForMyApprovalsSuccess"+JSON.stringify(response));
        var viewController = applicationManager.getPresentationUtility().getController('frmApprovalsList', true);

        var processedDataGenTransaction =  ApprovalsReqModule_PresentationController.prototype.dataProcessorForGenTransaction(navObj,response);
        viewController.fetchGenTransactionMyApprovalSuccessCallBack(processedDataGenTransaction);
      }catch(e){
        kony.print("Exception in onFetchGeneralTransactionsPendingForMyApprovalsSuccess"+e);
      }
    };


    /**
  * onFetchGeneralTransactionsPendingForMyApprovalsFailure :  Method to handle failure response of fetching General Transactions Pending for My Approvals
  * @member of {PresentationController}
  * @param {JSON Object} responseError - error object form failure callback of service
  * @return {}  
  * @throws {}
  */ 
    ApprovalsReqModule_PresentationController.prototype.onFetchGeneralTransactionsPendingForMyApprovalsFailure = function (responseError) {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      kony.print("Presentation controller onFetchGeneralTransactionsPendingForMyApprovalsFailure"+JSON.stringify(responseError));
      var viewController = applicationManager.getPresentationUtility().getController('frmApprovalsList', true); //frmRequestList
      viewController.showToastPopup(responseError,"failure","");
      // return responseError;
    };
    
    ApprovalsReqModule_PresentationController.prototype.getGeneralTransactionsPullDownDashboard = function (navObj){ 

      kony.print("Presentation controller");
      applicationManager.getPresentationUtility().showLoadingScreen();
      var scopeObj = this;
      var approvalsReqManager = applicationManager.getApprovalsReqManager();
      approvalsReqManager.fetchGeneralTransactionsPendingForMyApprovals(
        navObj.requestData,
        scopeObj.onFetchGetGeneralTransactionsPullDownDashboardSuccess.bind(scopeObj,navObj),
        scopeObj.onFetchGetGeneralTransactionsPullDownDashboardFailure,
      );
        };
        ApprovalsReqModule_PresentationController.prototype.onFetchGetGeneralTransactionsPullDownDashboardSuccess = function (navObj,response) {
        try{
          kony.print("Presentation controller onFetchGeneralTransactionsPendingForMyApprovalsSuccess"+JSON.stringify(response));
          var dataProcessor =  ApprovalsReqModule_PresentationController.prototype.dataProcessorForPullDownGenTransaction(response);
          var viewController = applicationManager.getPresentationUtility().getController('frmUnifiedDashboard', true);
          viewController.fetchGenTransactionMyApprovalSuccessCallBack(dataProcessor);
        }catch(e){
          kony.print("Exception in onFetchGeneralTransactionsPendingForMyApprovalsSuccess"+e);
        }
      };
      
      ApprovalsReqModule_PresentationController.prototype.dataProcessorForPullDownGenTransaction= function (response) {
        response = response.BBGeneralTransaction;
        var recentTranactionsArr = [];
        var configManager = applicationManager.getConfigurationManager();
        for (var i =0 ;i<response.length;i++){
          var recentItem = {
            "lblSpendingCategory":response[i].Payee,
            "lblTotalAmount":configManager.getCurrencyCode()+""+response[i].Amount,
            "lblAmountSpent":CommonUtilities.getFrontendDateString(response[i].CreatedOn,"mm/dd/yyyy"),
            "lblPaymentMode":CommonUtilities.truncateStringWithGivenLength(response[i].TransactionType+"....",16)+CommonUtilities.getLastSixDigit(response[i].TransactionType),
          }; 
          recentTranactionsArr.push(recentItem);
        }
        return recentTranactionsArr;
      };
      ApprovalsReqModule_PresentationController.prototype.onFetchGetGeneralTransactionsPullDownDashboardFailure = function (responseError) {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      kony.print("Presentation controller onFetchGeneralTransactionsPendingForMyApprovalsFailure"+JSON.stringify(responseError));
      // return responseError;
    };
      
      	 /**
	  * getPendingApprovals :  This is the function which is used to fetch  Transactions Pending for Approvals 
	  * @member of {ApprovalsReqModule_PresentationController}
	  * @param {JSON Object} navObj - navigation object with success and failure flows
	  * @return {}
	  * @throws {}
	  */ 
		ApprovalsReqModule_PresentationController.prototype.getPendingApprovals = function (navObj) {
		  try{
			var scopeObj = this;

			var approvalsReqManager = applicationManager.getApprovalsReqManager();
			approvalsReqManager.fetchAllMyPendingApprovals(
			  navObj,
			  scopeObj.onFetchPendingApprovalsTransSuccess.bind(scopeObj,navObj),
			  scopeObj.onFetchPendingApprovalsFailure,
			);
			  }catch(e){
			  applicationManager.getPresentationUtility().dismissLoadingScreen();
			  kony.print("Exception in getPendingApprovals"+e);}
		  };
		  /**
	 * onFetchPendingApprovalsTransSuccess :  Method to handle success response of fetching Transactions Pending for My Approvals
	 * @member of {PresentationController}
	 * @param {JSON Object} response - response object from the service call 
	 * @return {}  
	 * @throws {}
	 */ 
       ApprovalsReqModule_PresentationController.prototype.onFetchPendingApprovalsTransSuccess = function (navObj,response) {
            try{
              kony.print("Presentation controller onFetchPendingApprovalsTransSuccess"+JSON.stringify(response));
              var viewController = "";
              var navigationManager = applicationManager.getNavigationManager();
              var originFormName = navigationManager.getCustomInfo("formFlow");
              if(originFormName === "frmUnifiedDashboard"){
                viewController  = applicationManager.getPresentationUtility().getController('frmUnifiedDashboard', true);
              }else if(originFormName== "frmApprovalsList"){
                viewController = applicationManager.getPresentationUtility().getController('frmApprovalsList', true);
              }else if(originFormName== "frmApprovalsAndRequestsTitle"){
                viewController = applicationManager.getPresentationUtility().getController('frmApprovalsAndRequestsTitle', true);
              }
             
              var resGenTrans     = response.records;
            var approvalPendingCount = navigationManager.setCustomInfo("approvalPendingCount",resGenTrans);
              this.transactionArr = [];
              var constantsSkin = {"headerImgUp" : "arrowupblue.png",
                                   "imgReject" : "cancelreject.png",
                                   "imgApprove" : "approvetick.png", 
                                   "flxApproveSkin": "sknFlx1a98ff",
                                   "flxRejectSkin" : "sknflxf6f6f6Bcg"};
              var textAndSkinObj = {};    
              textAndSkinObj = {
                "approveLblName":kony.i18n.getLocalizedString("kony.mb.ApprovalRequests.Approve"),
                "approveLblSkin":"sknLblffffff20px",
                "approveFlxVisiblity":true,
                "rejectLblName":kony.i18n.getLocalizedString("kony.mb.ApprovalRequests.Reject"),
                "rejectLblSkin":"sknLbl104B80SPReg20px",
                "rejectFlxVisiblity":true,
              };
              var scopeObj = this;
              var transactionsArr = [];
              var configManager = applicationManager.getConfigurationManager();
              var isiPhone = applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone";

 

              if(resGenTrans.length > 0){
                resGenTrans.forEach(function (responseObj) {
                  var statusCheck = responseObj.status;
                  var sentDate = responseObj.sentDate;
                      sentDate = sentDate.split('T')[0];
				var processingDate = responseObj.processingDate;
                      processingDate = processingDate === undefined ? "" : processingDate.split('T')[0];
 

                  if(statusCheck==="Pending"){// this condtion used for fliter only pending status for approvals 
                    var rowObj= {
                      "template": "flxApprovalListView",
                      "data" : responseObj,
                      "requiredApprovals" : {"text":kony.sdk.isNullOrUndefined(responseObj.requiredApprovals)?"0":responseObj.requiredApprovals},
                      "featureActionName" : {"text":kony.sdk.isNullOrUndefined(responseObj.featureActionName)?"0":responseObj.featureActionName},
                      "lblTransactionAP": {"text": kony.sdk.isNullOrUndefined(responseObj.featureName) ? "N/A" : responseObj.featureName},
                      "lblTransactionAmountAP": {"text": kony.sdk.isNullOrUndefined(responseObj.sentBy) ? "N/A" : responseObj.sentBy},
                      "lblDateAP": {"text": kony.sdk.isNullOrUndefined(responseObj.featureActionName) ? "N/A" : responseObj.featureActionName}, 
                      "flxApprovalsList": {"isVisible": true,"height": "70dp"},
                      "lblPayment" : {"text" : CommonUtilities.getFrontendDateString(sentDate,"mm/dd/yyyy")},
                      "sentDate" : {"text" : CommonUtilities.getFrontendDateString(sentDate,"mm/dd/yyyy")},
                      "processingDate" : {"text" : CommonUtilities.getFrontendDateString(processingDate,"mm/dd/yyyy")},
                      "flxRejectAP": {
                        "skin" : constantsSkin.flxRejectSkin, 
                        onClick : viewController.rejectBtnOnClick,
                        "isVisible" : configManager.getACHTransactionApprovalsFeaturePermissionsList().some(configManager.checkUserPermission.bind(configManager)),
                      },
                      "flxApproveAP": {
                        "skin" : constantsSkin.flxApproveSkin,
                        onClick : viewController.approveBtnOnClick,
                        "isVisible" : configManager.getACHTransactionApprovalsFeaturePermissionsList().some(configManager.checkUserPermission.bind(configManager)),
                      },
                      "lblRejectAP": {"text" : textAndSkinObj.rejectLblName, "skin" : textAndSkinObj.rejectLblSkin},
                      "lblApproveAP": {"text" : textAndSkinObj.approveLblName, "skin" : textAndSkinObj.approveLblSkin},
                      "imgRejectAP": {"src": constantsSkin.imgReject},
                      "imgApproveAP": {"src": constantsSkin.imgApprove},
                    };
                    transactionsArr.push(rowObj);
                  }
                });
              }else{
                var rowObj2 = {
                  "template": "flxNoPending",
                  "lblTransactionPending": {"text": kony.i18n.getLocalizedString("kony.mb.ApprovalRequests.NoPendingTransactionsApproval")},
                  "flxNoPending": {"isVisible": true,"height": "80dp"}
                };
                transactionsArr.push(rowObj2);
              }
              viewController.fetchMyPendingApprovalSuccessCallBack(transactionsArr);

 

            }catch(e){
              applicationManager.getPresentationUtility().dismissLoadingScreen();
              kony.print("Exception in onFetchPendingApprovalsTransSuccess"+e);}
          };
		  
		  /**
	  * onFetchPendingApprovalsFailure :  Method to handle failure response of fetching General Transactions Pending for My Approvals
	  * @member of {PresentationController}
	  * @param {JSON Object} responseError - error object form failure callback of service
	  * @return {}  
	  * @throws {}
	  */ 
		  ApprovalsReqModule_PresentationController.prototype.onFetchPendingApprovalsFailure = function (responseError) {
			kony.print("Presentation controller onFetchPendingApprovalsFailure"+JSON.stringify(responseError));
			applicationManager.getPresentationUtility().dismissLoadingScreen();
			var viewController = applicationManager.getPresentationUtility().getController('frmApprovalsList', true); //frmRequestList
			viewController.showToastPopup(responseError,"failure","");
			// return responseError;
		  };
          
          
            /**
	  * getPendingRequest :  This is the function which is used to fetch  Transactions Pending for Request 
	  * @member of {RequestReqModule_PresentationController}
	  * @param {JSON Object} navObj - navigation object with success and failure flows
	  * @return {}
	  * @throws {}
	  */ 
            ApprovalsReqModule_PresentationController.prototype.getPendingRequests = function (navObj) {
              try{
                var scopeObj = this;

                var approvalsReqManager = applicationManager.getApprovalsReqManager();
                approvalsReqManager.fetchAllMyPendingRequests(
                  navObj,
                  scopeObj.onFetchPendingRequestsTransSuccess.bind(scopeObj,navObj),
                  scopeObj.onFetchPendingRequestsFailure,
                );
                  }catch(e){
                  applicationManager.getPresentationUtility().dismissLoadingScreen();
                  kony.print("Exception in getPendingRequests"+e);}
              };

              /**
	 * onFetchPendingRequestsTransSuccess :  Method to handle success response of fetching Transactions Pending for My Requests
	 * @member of {PresentationController}
	 * @param {JSON Object} response - response object from the service call 
	 * @return {}  
	 * @throws {}
	 */ 
             ApprovalsReqModule_PresentationController.prototype.onFetchPendingRequestsTransSuccess = function (navObj,response) {
                try{
                  kony.print("Presentation controller onFetchPendingApprovalsTransSuccess"+JSON.stringify(response));
                   var viewController = "";
              var navigationManager = applicationManager.getNavigationManager();
              var originFormName = navigationManager.getCustomInfo("formFlow");
              if(originFormName === "frmUnifiedDashboard"){
                viewController  = applicationManager.getPresentationUtility().getController('frmUnifiedDashboard', true);
              }else if(originFormName== "frmRequestList"){
                viewController = applicationManager.getPresentationUtility().getController('frmRequestList', true);
            }else if(originFormName == "frmApprovalsAndRequestsTitle"){
              viewController = applicationManager.getPresentationUtility().getController('frmApprovalsAndRequestsTitle', true);
              }
                  var resGenTrans     = response.records;
            var requestPendingCount = navigationManager.setCustomInfo("requestPendingCount",resGenTrans);
            var constantsSkin = {
                "headerImgUp": "arrowupblue.png",
                                       "imgReject" : "cancelreject.png",
                                       "imgApprove" : "withdrawreq.png",
                                       "flxApproveSkin": "sknFlx1a98ff",
                                       "flxRejectSkin" : "sknflxf6f6f6Bcg"};

 

                  var textAndSkinObj = {};
                  textAndSkinObj = {
                    "approveLblName":kony.i18n.getLocalizedString("kony.mb.ApprovalRequests.Withdraw"),
                    "approveLblSkin":"sknLblffffff20px",
                    "approveImgSrc": constantsSkin.imgApprove,
                    "approveFlxSkin": constantsSkin.flxApproveSkin,
                    "approveFlxVisiblity":true,
                  };
                  var scopeObj = this;
                  var transactionsArr = [];
                  var configManager = applicationManager.getConfigurationManager();
                  var isiPhone = applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone";

 

                  if(resGenTrans.length > 0){
                    resGenTrans.forEach(function (responseObj) {
                      var statusCheck = responseObj.status;
                      var withdrawVisiblity = (responseObj.status === "Pending") ? true : false;
                      var sentDate = responseObj.sentDate;
                      sentDate = sentDate.split('T')[0];
                      var processingDate = responseObj.processingDate;
                      processingDate = sentDate.split('T')[0];
//                       var time=response[i].Actionts;
//                       time = time.split('T')[1];
//                       var time1=time.substring(0, time.length - 1);

 

                      if(statusCheck==="Pending"){// this condtion used for fliter only pending status for approvals 
                        var statusApprovals = (kony.sdk.isNullOrUndefined(responseObj.receivedApprovals) ? "0" : responseObj.receivedApprovals) + " of " + (kony.sdk.isNullOrUndefined(responseObj.requiredApprovals) ? "0" : responseObj.requiredApprovals) + " approved";
                        var rowObj= {
                          "template": "flxRequestList",
                          "data" : responseObj,
                          "requiredApprovals" : {"text":kony.sdk.isNullOrUndefined(responseObj.requiredApprovals)?"0":responseObj.requiredApprovals},
                          "featureActionName" : {"text":kony.sdk.isNullOrUndefined(responseObj.featureActionName)?"0":responseObj.featureActionName},
                          "lblTransaction": {"text": kony.sdk.isNullOrUndefined(responseObj.featureName) ? "N/A" : responseObj.featureName},
                          "lblStatus": {"text":statusApprovals},
                          "lblDate": {"text": kony.sdk.isNullOrUndefined(responseObj.featureActionName) ? "N/A" : responseObj.featureActionName}, 
                          "lblTransactionAmount" : {"text" : CommonUtilities.getFrontendDateString(sentDate,"mm/dd/yyyy")},
                          //"flxRequestList": {"isVisible": true,"height": "70dp"},
                          "sentDate" : {"text" : CommonUtilities.getFrontendDateString(sentDate,"mm/dd/yyyy")},
                          "processingDate": {"text" : CommonUtilities.getFrontendDateString(processingDate,"mm/dd/yyyy")},
                          "flxApprove": {
                            "skin" : constantsSkin.flxApproveSkin,
                            onClick : viewController.showWithdrawpopup,
                            "isVisible" : withdrawVisiblity && configManager.getCreateACHTransactionPermissionsList().some(configManager.checkUserPermission.bind(configManager))
                          },
                          "lblApprove": {"text" : textAndSkinObj.approveLblName, "skin" : textAndSkinObj.approveLblSkin},
                          "imgApprove": {"src": constantsSkin.imgApprove},
                        };
                        transactionsArr.push(rowObj);
                      }
                    });
                  }else{
                    var rowObj2 = {
                      "template": "flxNoPending",
                      "lblTransactionPending": {"text": kony.i18n.getLocalizedString("kony.mb.ApprovalRequests.NoPendingTransactionsRequest")},
                      "flxNoPending": {"isVisible": true,"height": "80dp"}
                    };
                    transactionsArr.push(rowObj2);
                  }

 

                  viewController.fetchMyPendingRequestSuccessCallBack(transactionsArr);

 

                }catch(e){
                  applicationManager.getPresentationUtility().dismissLoadingScreen();
                  kony.print("Exception in onFetchPendingRequestsTransSuccess"+e);}
              };

              /**
	  * onFetchPendingRequestsFailure :  Method to handle failure response of fetching General Transactions Pending for My Requests
	  * @member of {PresentationController}
	  * @param {JSON Object} responseError - error object form failure callback of service
	  * @return {}  
	  * @throws {}
	  */ 
              ApprovalsReqModule_PresentationController.prototype.onFetchPendingRequestsFailure = function (responseError) {
                kony.print("Presentation controller onFetchPendingRequestsFailure"+JSON.stringify(responseError));
                applicationManager.getPresentationUtility().dismissLoadingScreen();
                var viewController = applicationManager.getPresentationUtility().getController('frmRequestList', true); //frmRequestList
                viewController.showToastPopup(responseError,"failure","");
                // return responseError;
              };

		  

    /**
  * getACHTransactionsPendingForMyApprovals :  This is the function which is used to fetch ACH Transactions Pending for Approvals 
  * @member of {ApprovalsReqModule_PresentationController}
  * @param {JSON Object} navObj - navigation object with success and failure flows
  * @return {}
  * @throws {}
  */ 
    ApprovalsReqModule_PresentationController.prototype.getACHTransactionsPendingForMyApprovals = function (navObj) {
      try{
        var scopeObj = this;

        var approvalsReqManager = applicationManager.getApprovalsReqManager();
        approvalsReqManager.fetchACHTransactionsPendingForMyApprovals(
          navObj.requestData,
          scopeObj.onFetchACHTransactionsSuccess.bind(scopeObj,navObj),
          scopeObj.onFetchACHTransactionsFailure,
        );
          }catch(e){
          applicationManager.getPresentationUtility().dismissLoadingScreen();
          kony.print("Exception in getACHTransactionsPendingForMyApprovals"+e);}
      };

      /**
 * onFetchACHTransactionsSuccess :  Method to handle success response of fetching Transactions Pending for My Approvals
 * @member of {PresentationController}
 * @param {JSON Object} response - response object from the service call 
 * @return {}  
 * @throws {}
 */ 
      ApprovalsReqModule_PresentationController.prototype.onFetchACHTransactionsSuccess = function (navObj,response) {
        try{
          kony.print("Presentation controller onFetchACHTransactionsSuccess"+JSON.stringify(response));
          var viewController = applicationManager.getPresentationUtility().getController('frmApprovalsList', true);
          resOfACHTrans = response.ACHTransactions;
          var constantsSkin = {"headerImgUp" : "arrowupblue.png",
                               "imgReject" : "cancelreject.png",
                               "imgApprove" : "approvetick.png", 
                               "flxApproveSkin": "sknFlx1a98ff",
                               "flxRejectSkin" : "sknflxf6f6f6Bcg"};
          var textAndSkinObj = {};
          textAndSkinObj = {
            "approveLblName":kony.i18n.getLocalizedString("kony.mb.ApprovalRequests.Approve"),
            "approveLblSkin":"sknLblffffff20px",
            "approveFlxVisiblity":true,
            "rejectLblName":kony.i18n.getLocalizedString("kony.mb.ApprovalRequests.Reject"),
            "rejectLblSkin":"sknLbl104B80SPReg20px",
            "rejectFlxVisiblity":true,
          };
          var scopeObj = this;
          var achTransactionsArr = [];
          var configManager = applicationManager.getConfigurationManager();
          var isiPhone = applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone";

          if(resOfACHTrans.length > 0){
            resOfACHTrans.forEach(function (responseObj) {
              var statusCheck = responseObj.Status.toLowerCase();

              if(isiPhone && responseObj.EffectiveDate.includes(" ")) {
                responseObj.EffectiveDate = responseObj.EffectiveDate.replace(" ", "T") + "Z";
              }

              if(statusCheck==="pending"){// this condtion used for fliter only pending status for approvals 
                var rowObj= {
                  "template": "flxApprovalsList",
                  "data" : responseObj,
                  "lblTransactionAP": {"text": CommonUtilities.truncateStringWithGivenLength(responseObj.AccountName+"....",16)+CommonUtilities.getLastFourDigit(responseObj.DebitAccount)},
                  "lblTransactionAmountAP": {"text": configManager.getCurrencyCode()+""+CommonUtilities.formatCurrencyWithCommas(responseObj.TotalAmount, true)},
                  "lblDateAP": {"text": CommonUtilities.getFrontendDateString(responseObj.CreatedOn,"mm/dd/yyyy")},
                  "flxApprovalsList": {"isVisible": true,"height": "70dp"},
                  "flxRejectAP": {
                    "skin" : constantsSkin.flxRejectSkin, 
                    onClick : viewController.rejectBtnOnClick,
                    "isVisible" : configManager.getACHTransactionApprovalsFeaturePermissionsList().some(configManager.checkUserPermission.bind(configManager)),
                  },
                  "flxApproveAP": {
                    "skin" : constantsSkin.flxApproveSkin,
                    onClick : viewController.approveACHTransaction,
                    "isVisible" : configManager.getACHTransactionApprovalsFeaturePermissionsList().some(configManager.checkUserPermission.bind(configManager)),
                  },
                  "lblRejectAP": {"text" : textAndSkinObj.rejectLblName, "skin" : textAndSkinObj.rejectLblSkin},
                  "lblApproveAP": {"text" : textAndSkinObj.approveLblName, "skin" : textAndSkinObj.approveLblSkin},
                  "imgRejectAP": {"src": constantsSkin.imgReject},
                  "imgApproveAP": {"src": constantsSkin.imgApprove},
                  "userName" : 
                  {"text" : CommonUtilities.truncateStringWithGivenLength(responseObj.userName, 15),
                  },
                  "createdBy" : 
                  {
                    "text" : CommonUtilities.truncateStringWithGivenLength(responseObj.createdby, 15),
                  },
                  "templateName" : 
                  {
                    "text" : kony.sdk.isNullOrUndefined(responseObj.TemplateName) ? "N/A":responseObj.TemplateName,
                  },
                  "lblEffectiveDate" : CommonUtilities.getFrontendDateString(responseObj.EffectiveDate,"mm/dd/yyyy"),
                  "lblTemplateDescription" : kony.sdk.isNullOrUndefined(responseObj.TemplateDescription) ? "N/A" : responseObj.TemplateDescription,
                  "lblConfirmationNumber" : kony.sdk.isNullOrUndefined(responseObj.ConfirmationNumber) ? "N/A" : responseObj.ConfirmationNumber,
                  "amount" : CommonUtilities.formatCurrencyWithCommas(responseObj.TotalAmount, true),
                  "createdOn" : CommonUtilities.getFrontendDateString(responseObj.CreatedOn,"mm/dd/yyyy"),
                  "transmittedDate" : responseObj.CreatedOn,
                  "approval" : responseObj.receivedApprovals + " of " + responseObj.requiredApprovals + " Approved",
                  "debitOrCreditAccount" : {
                    "text" : CommonUtilities.truncateStringWithGivenLength(responseObj.AccountName+"....",16)+CommonUtilities.getLastFourDigit(responseObj.DebitAccount),
                  },
                  "accountName" : {
                    "text" : responseObj.AccountName+"...."+CommonUtilities.getLastFourDigit(responseObj.DebitAccount),
                  },
                  "request_id" : responseObj.Request_id
                };
                if(responseObj.RequestType.includes("PPD") || responseObj.RequestType.includes("CCD") || responseObj.RequestType.includes("CTX")){
                  rowObj.RequestType = (responseObj.RequestType).substring(0, 3) + " " + responseObj.TransactionTypeValue;
                }
                achTransactionsArr.push(rowObj);
              }
            });
          }else{
            var rowObj2 = {
              "template": "flxNoPending",
              "lblTransactionPending": {"text": kony.i18n.getLocalizedString("kony.mb.ApprovalRequests.NoPendingACHTransApprovals")},
              "flxNoPending": {"isVisible": true,"height": "80dp"}
            };
            achTransactionsArr.push(rowObj2);
          }
          viewController.fetchACHTransactionMyApprovalSuccessCallBack(achTransactionsArr);
        }catch(e){
          applicationManager.getPresentationUtility().dismissLoadingScreen();
          kony.print("Exception in onFetchACHTransactionsSuccess"+e);}

      };


      /**
  * onFetchACHTransactionsFailure :  Method to handle failure response of fetching General Transactions Pending for My Approvals
  * @member of {PresentationController}
  * @param {JSON Object} responseError - error object form failure callback of service
  * @return {}  
  * @throws {}
  */ 
      ApprovalsReqModule_PresentationController.prototype.onFetchACHTransactionsFailure = function (responseError) {
        kony.print("Presentation controller onFetchACHTransactionsFailure"+JSON.stringify(responseError));
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var viewController = applicationManager.getPresentationUtility().getController('frmApprovalsList', true); //frmRequestList
        viewController.showToastPopup(responseError,"failure","");
        // return responseError;
      };

      /**
  * getACHFilesPendingForMyApprovals :  This is the function which is used to fetch ACH Files Pending for Approvals 
  * @member of {ApprovalsReqModule_PresentationController}
  * @param {JSON Object} navObj - navigation object with success and failure flows
  * @return {}
  * @throws {}
  */ 
      ApprovalsReqModule_PresentationController.prototype.getACHFilesPendingForMyApprovals = function (navObj) {
        try{
          var scopeObj = this;
          var approvalsReqManager = applicationManager.getApprovalsReqManager();

          approvalsReqManager.fetchACHFilesPendingForMyApprovals(
            navObj.requestData,
            scopeObj.onFetchACHFilesSuccess.bind(scopeObj,navObj),
            scopeObj.onFetchACHFilesFailure
          );
        }catch(e){
          applicationManager.getPresentationUtility().dismissLoadingScreen();
          kony.print("Exception in getACHFilesPendingForMyApprovals"+e);
        }
      };

      /**
 * onFetchACHFilesSuccess :  Method to handle success response of fetching Transactions Pending for My Approvals
 * @member of {PresentationController}
 * @param {JSON Object} response - response object from the service call 
 * @return {}  
 * @throws {}
 */ 
      ApprovalsReqModule_PresentationController.prototype.onFetchACHFilesSuccess = function (navObj, response) {
        try{
          kony.print("Presentation controller onFetchACHFilesSuccess response:"+JSON.stringify(response));
          response = response.ACHFile;
          var viewController = applicationManager.getPresentationUtility().getController('frmApprovalsList', true);
          var isiPhone = applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone";
          var achFilesResponseArr = [];
          var constantsSkin = {"headerImgUp" : "arrowupblue.png",
                               "imgReject" : "cancelreject.png",
                               "imgApprove" : "approvetick.png", 
                               "flxApproveSkin": "sknFlx1a98ff",
                               "flxRejectSkin" : "sknflxf6f6f6Bcg"};
          var textAndSkinObj = {};
          textAndSkinObj = {
            "approveLblName":kony.i18n.getLocalizedString("kony.mb.ApprovalRequests.Approve"),
            "approveLblSkin":"sknLblffffff20px",
            "approveFlxVisiblity":true,
            "rejectLblName":kony.i18n.getLocalizedString("kony.mb.ApprovalRequests.Reject"),
            "rejectLblSkin":"sknLbl104B80SPReg20px",
            "rejectFlxVisiblity":true,
          };
          var configManager = applicationManager.getConfigurationManager();

          if(Array.isArray(response))
            if(response.length > 0){
              response.forEach(function (responseObj) {
                var statusCheck = responseObj.FileStatus.toLowerCase();
                if(isiPhone && responseObj.UpdatedDateAndTime.includes(" ")) {
                  responseObj.UpdatedDateAndTime = responseObj.UpdatedDateAndTime.replace(" ", "T") + "Z";
                }
                if(!isiPhone) {
                  responseObj.UpdatedDateAndTime  = responseObj.UpdatedDateAndTime.slice(0, 10) + "T12:00:00.001Z";
                }
                if(statusCheck==="pending"){// this condtion used for fliter only pending status for approvals  
                  var rowObj = {
                    "template": "flxApprovalsList",
                    "data" : responseObj,
                    "request_id" : responseObj.Request_id,
                    "lblTransactionAP": {"text": "" + CommonUtilities.truncateStringWithGivenLength(responseObj.FileName, 30)},
                    "lblTransactionAmountAP": {"text": configManager.getCurrencyCode()+""+CommonUtilities.formatCurrencyWithCommas(responseObj.TotalDebitAmount, true)},
                    "lblDateAP": {"text": CommonUtilities.getFrontendDateString(responseObj.UpdatedDateAndTime,"mm/dd/yyyy")},
                    "flxApprovalsList": {"isVisible": true,"height": "70dp"},
                    "ACHFileID":responseObj.ACHFileID,
                    "flxRejectAP": {
                      "skin" : constantsSkin.flxRejectSkin, 
                      onClick : viewController.rejectBtnOnClick,
                      "isVisible" : configManager.getACHFileApprovalsFeaturePermissionsList().some(configManager.checkUserPermission.bind(configManager))
                    },
                    "flxApproveAP": {
                      "skin" : constantsSkin.flxApproveSkin,
                      onClick : viewController.approveACHFile,
                      "isVisible" : configManager.getACHFileApprovalsFeaturePermissionsList().some(configManager.checkUserPermission.bind(configManager))
                    },
                    "lblRejectAP": {"text" : textAndSkinObj.rejectLblName, "skin" : textAndSkinObj.rejectLblSkin},
                    "lblApproveAP": {"text" : textAndSkinObj.approveLblName, "skin" : textAndSkinObj.approveLblSkin},
                    "imgRejectAP": {"src": constantsSkin.imgReject},
                    "imgApproveAP": {"src": constantsSkin.imgApprove},
                    "fileName" : 
                    {
                      "text" : CommonUtilities.truncateStringWithGivenLength(responseObj.FileName, 30),
                    },
                    "userName" : 
                    {
                      "text" : CommonUtilities.truncateStringWithGivenLength(responseObj.userName, 15),
                    },
                    "totalCreditAmount" : configManager.getCurrencyCode()+""+CommonUtilities.formatCurrencyWithCommas(responseObj.TotalCreditAmount, true),
                    "totalDebitAmount" : configManager.getCurrencyCode()+""+CommonUtilities.formatCurrencyWithCommas(responseObj.TotalDebitAmount, true),
                    "tpdatedDateAndTime" : CommonUtilities.getDateAndTime(responseObj.UpdatedDateAndTime,"mm/dd/yyyy"),
                  };

                  achFilesResponseArr.push(rowObj);
                }
              });
            }else{
              var rowObj2 = {
                "template": "flxNoPending",
                "lblTransactionPending": {"text": kony.i18n.getLocalizedString("kony.mb.ApprovalRequests.NoPendingACHFileApprovals")},
                "flxNoPending": {"isVisible": true,"height": "80dp"}
              };
              achFilesResponseArr.push(rowObj2);
            }
          viewController.fetchACHFilesMyApprovalSuccessCallBack(achFilesResponseArr);
        }catch(e){
          applicationManager.getPresentationUtility().dismissLoadingScreen();
          kony.print("Exception in onFetchACHFilesSuccess"+e);
        }
      };


      /**
  * onFetchACHFilesFailure :  Method to handle failure response of fetching General Transactions Pending for My Approvals
  * @member of {PresentationController}
  * @param {JSON Object} responseError - error object form failure callback of service
  * @return {}  
  * @throws {}
  */ 
      ApprovalsReqModule_PresentationController.prototype.onFetchACHFilesFailure = function (responseError) {
        kony.print("Presentation controller onFetchACHFilesFailure"+JSON.stringify(responseError));
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var viewController = applicationManager.getPresentationUtility().getController('frmApprovalsList', true); //frmRequestList
        viewController.showToastPopup(responseError,"failure","");
        // return responseError;
      };

      /**
  	* fetchTransactionRequests :  This method fetches the requests made by the user that are related to transactions
  	* @member of {ApprovalsReqModule_PresentationController}
  	* @param {JSON Object} navObj - Navigation with SUccess and Failure flows
  	* @return {} 
  	* @throws {}
  	*/ 
      ApprovalsReqModule_PresentationController.prototype.fetchTransactionRequests = function( navObj ) {  
        try{
          kony.print("Presentation controller fetchTransactionRequests");
          applicationManager.getPresentationUtility().showLoadingScreen();
          var scopeObj = this;
          var approvalsReqManager = applicationManager.getApprovalsReqManager();
          approvalsReqManager.fetchAllTransactionRequests(
            navObj.requestData,
            scopeObj.transactionRequestsSuccess.bind(scopeObj,navObj),
            scopeObj.showTransactionRequestsFailure
          );
        }catch(e){
          applicationManager.getPresentationUtility().dismissLoadingScreen();
          kony.print("Exception in fetchTransactionRequests"+e);
        }
      };


      /**
  	* transactionRequestsSuccess :  Success callback - which is invoked after fetching transaction requests successfully
  	* @member of {ApprovalsReqModule_PresentationController}
  	* @param {JSON Object} response - Raw response form the Service call
  	* @return {JSON Object} response -  Massaged/formatted JSON data of the Transactions 
  	* @throws {}
  	*/ 
      ApprovalsReqModule_PresentationController.prototype.transactionRequestsSuccess = function(navObj, response ) { 
        kony.print("Presentation controller transactionRequestsSuccess"+JSON.stringify(response));
        var processedDataGenTransaction =  ApprovalsReqModule_PresentationController.prototype.dataProcessorForGenTransactionRequests(navObj,response);
        var viewController = applicationManager.getPresentationUtility().getController('frmRequestList', true);
        viewController.transactionRequestSuccessCallback(processedDataGenTransaction);
      };


      /**
  	* showTransactionRequestsFailure :  Failure callback - which is invoked when fetching of transaction requests is failed
  	* @member of {ApprovalsReqModule_PresentationController}
  	* @param {JSON Object} responseError - Respose Error from the Service call 
  	* @return {JSON Object} responseError - Respose Error from the Service call  
  	* @throws {}
  	*/ 
      ApprovalsReqModule_PresentationController.prototype.showTransactionRequestsFailure = function(responseError) { 
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        kony.print("Presentation controller showTransactionRequestsFailure"+JSON.stringify(responseError));
        var viewController = applicationManager.getPresentationUtility().getController('frmRequestList', true); //frmApprovalsList
        viewController.showToastPopup(responseError,"failure","");
        return(responseError);
      };


      /**
  	* fetchACHTransactionRequests :  This method fetches the requests made by the user that are related to ACH transactions
  	* @member of {ApprovalsReqModule_PresentationController}
  	* @param {JSON Object} navObj - Navigation with SUccess and Failure flows
  	* @return {} 
  	* @throws {}
  	*/ 
      ApprovalsReqModule_PresentationController.prototype.fetchACHTransactionRequests = function( navObj ) { 

        try{
          var scopeObj = this;

          var approvalsReqManager = applicationManager.getApprovalsReqManager();
          approvalsReqManager.fetchAllACHTransactionRequests(
            navObj.requestData,
            scopeObj.ACHTransactionRequestsSuccess.bind(scopeObj,navObj),
            scopeObj.ACHTransactionRequestsFailure
          );
        }catch(e){
          applicationManager.getPresentationUtility().dismissLoadingScreen();
          kony.print("Exception in fetchACHTransactionRequests ::"+e);
        }
      };


      /**
  	* transactionRequestsSuccess :  Success callback - which is invoked after fetching ACH transaction requests successfully
  	* @member of {ApprovalsReqModule_PresentationController}
  	* @param {JSON Object} response - Raw response form the Service call
  	* @return {JSON Object} response -  Massaged/formatted JSON data of the Transactions 
  	* @throws {}
  	*/ 
      ApprovalsReqModule_PresentationController.prototype.ACHTransactionRequestsSuccess = function( navObj, response ) { 
        try{
          kony.print("Presentation controller ACHTransactionRequestsSuccess"+JSON.stringify(response));
          var viewController = applicationManager.getPresentationUtility().getController('frmRequestList', true);
          resOfACHTrans = response.ACHTransactions;
          var constantsSkin = {"headerImgUp" : "arrowupblue.png",
                               "imgReject" : "cancelreject.png",
                               "imgApprove" : "approvetick.png",
                               "flxApproveSkin": "sknFlx1a98ff",
                               "flxRejectSkin" : "sknflxf6f6f6Bcg"};

          var textAndSkinObj = {};
          textAndSkinObj = {
            "approveLblName":kony.i18n.getLocalizedString("kony.mb.ApprovalRequests.Withdraw"),
            "approveLblSkin":"sknLblffffff20px",
            "approveImgSrc": constantsSkin.imgApprove,
            "approveFlxSkin": constantsSkin.flxApproveSkin,
            "approveFlxVisiblity":true,
          };
          var scopeObj = this;
          var achTransactionsArr = [];
          resOfACHTrans = response.ACHTransactions;
          var configManager = applicationManager.getConfigurationManager();
          var isiPhone = applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone";

          if(resOfACHTrans.length > 0){
            resOfACHTrans.forEach(function(achTransactionObj){
              if(isiPhone && achTransactionObj.EffectiveDate.includes(" ")) {
                achTransactionObj.EffectiveDate = achTransactionObj.EffectiveDate.replace(" ", "T") + "Z";
              }
              var withdrawVisiblity = (achTransactionObj.Status === "Pending") ? true : false;
              var rowObj= {
                "template": "flxRequestList",
                "data" : achTransactionObj,
                "flxApprove": {
                  "skin" : constantsSkin.flxApproveSkin,
                  onClick : viewController.showWithdrawpopup,
                  "isVisible" : withdrawVisiblity && configManager.getCreateACHTransactionPermissionsList().some(configManager.checkUserPermission.bind(configManager))
                },
                "lblApprove": {"text" : textAndSkinObj.approveLblName, "skin" : textAndSkinObj.approveLblSkin},
                "imgApprove": {"src": constantsSkin.imgApprove},
                "lblTransaction": {"text": "" + CommonUtilities.truncateStringWithGivenLength(achTransactionObj.AccountName+"....",16)+CommonUtilities.getLastFourDigit(achTransactionObj.DebitAccount)},
                "lblTransactionAmount": {"text": configManager.getCurrencyCode()+""+CommonUtilities.formatCurrencyWithCommas(achTransactionObj.TotalAmount, true)},
                "lblDate": {"text": CommonUtilities.getFrontendDateString(achTransactionObj.CreatedOn,"mm/dd/yyyy")},
                "flxRequestList": {"isVisible": true,"height": "70dp"},
                "lblStatus" : {"text" : achTransactionObj.Status},
                "templateName" : {
                  "text" : CommonUtilities.truncateStringWithGivenLength(achTransactionObj.TemplateName, 15),
                },
                "debitOrCreditAccount" : {
                  "text" : CommonUtilities.truncateStringWithGivenLength(achTransactionObj.AccountName+"....",16)+CommonUtilities.getLastFourDigit(achTransactionObj.DebitAccount),
                },
                "userName" : {
                  "text" : CommonUtilities.truncateStringWithGivenLength(achTransactionObj.userName, 15),
                },
                "amount" : CommonUtilities.formatCurrencyWithCommas(achTransactionObj.TotalAmount, true),
                "action" : "Withdraw",
                "createdOn" : CommonUtilities.getFrontendDateString(achTransactionObj.CreatedOn,"mm/dd/yyyy"),
                "transmittedDate" : achTransactionObj.CreatedOn,
                "accountName" : {
                  "text" : achTransactionObj.AccountName+"...."+CommonUtilities.getLastFourDigit(achTransactionObj.DebitAccount),
                },
                "createdBy" : {
                  "text" : CommonUtilities.truncateStringWithGivenLength(achTransactionObj.createdby, 15),
                },
                "lblEffectiveDate" : CommonUtilities.getFrontendDateString(achTransactionObj.EffectiveDate,"mm/dd/yyyy"),
                "request_id":achTransactionObj.Request_id,
              };

              if(achTransactionObj.RequestType.includes("PPD") || achTransactionObj.RequestType.includes("CCD") || achTransactionObj.RequestType.includes("CTX")){
                achTransactionObj.RequestType=(achTransactionObj.RequestType).substring(0, 3) + " " + achTransactionObj.TransactionTypeValue;
              }

              if (achTransactionObj.Status === kony.i18n.getLocalizedString("i18n.konybb.Common.Pending")) {
                achTransactionObj.Approval = achTransactionObj.receivedApprovals + " " + kony.i18n.getLocalizedString("i18n.konybb.Common.of") + " " + achTransactionObj.requiredApprovals + " " + kony.i18n.getLocalizedString("i18n.konybb.Common.Approved");
              }
              else if (achTransactionObj.Status === kony.i18n.getLocalizedString("i18n.konybb.Common.Rejected")) {
                achTransactionObj.Approval = 1 + " " + kony.i18n.getLocalizedString("i18n.konybb.Common.Rejection");
              }
              else if (!kony.sdk.isNullOrUndefined(achTransactionObj.requiredApprovals)) {
                achTransactionObj.Approval = achTransactionObj.requiredApprovals + " " + kony.i18n.getLocalizedString("i18n.konybb.Common.Approvals");
              } 
              else {
                achTransactionObj.Approval = "N/A";
              }
              achTransactionsArr.push(rowObj);
            });
          }else{
            var rowObj2 = {
              "template": "flxNoPending",
              "lblTransactionPending": {"text":kony.i18n.getLocalizedString("kony.mb.ApprovalRequests.NoACHTransactionRequests")},
              "flxNoPending": {"isVisible": true,"height": "80dp"}
            };
            achTransactionsArr.push(rowObj2);
          }
          viewController.achTransactionRequestSuccessCallback(achTransactionsArr);
        }catch(e){
          kony.print("Exception in ACHTransactionRequestsSuccess"+e);
          applicationManager.getPresentationUtility().dismissLoadingScreen();
        }
      };


      /**
  	* showTransactionRequestsFailure :  Failure callback - which is invoked when fetching of ACH transaction requests is failed
  	* @member of {ApprovalsReqModule_PresentationController}
  	* @param {JSON Object} responseError - Respose Error from the Service call 
  	* @return {JSON Object} responseError - Respose Error from the Service call  
  	* @throws {}
  	*/ 
      ApprovalsReqModule_PresentationController.prototype.ACHTransactionRequestsFailure = function( responseError ) { 
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var viewController = applicationManager.getPresentationUtility().getController('frmRequestList', true); //frmApprovalsList
        viewController.showToastPopup(responseError,"failure","");
        //return(responseError);
      };


      /**
  	* fetchACHFileRequests :  This method fetches the requests made by the user that are related to ACH Files
  	* @member of {ApprovalsReqModule_PresentationController}
  	* @param {JSON Object} navObj - Navigation with SUccess and Failure flows
  	* @return {} 
  	* @throws {}
  	*/ 
      ApprovalsReqModule_PresentationController.prototype.fetchACHFileRequests = function( navObj ) {
        try{
          var scopeObj = this;

          var approvalsReqManager = applicationManager.getApprovalsReqManager();
          approvalsReqManager.fetchAllACHFileRequests(
            navObj.requestData,
            scopeObj.ACHFileRequestsSuccess.bind(scopeObj,navObj),
            scopeObj.ACHFileRequestsFailure
          );
        }catch(e){
          applicationManager.getPresentationUtility().dismissLoadingScreen();
          kony.print("Exception in getACHFilesPendingForMyApprovals"+e);
        }
      };


      /**
  	* ACHFileRequestsSuccess :  Success callback - which is invoked after fetching ACH File requests successfully
  	* @member of {ApprovalsReqModule_PresentationController}
  	* @param {JSON Object} response - Raw response form the Service call
  	* @return {JSON Object} response -  Massaged/formatted JSON data of the Transactions 
  	* @throws {}
  	*/ 
      ApprovalsReqModule_PresentationController.prototype.ACHFileRequestsSuccess = function( navObj,response ) { 
        try{
          kony.print("Presentation controller ACHFileRequestsSuccess response:"+JSON.stringify(response));
          response = response.ACHFile;
          var achFilesResponseArr = [];
          var viewController = applicationManager.getPresentationUtility().getController('frmRequestList', true);
          var isiPhone = applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone";
          var constantsSkin = {"headerImgUp" : "arrowupblue.png",
                               "imgReject" : "cancelreject.png",
                               "imgApprove" : "approvetick.png",
                               "flxApproveSkin": "sknFlx1a98ff",
                               "flxRejectSkin" : "sknflxf6f6f6Bcg"};

          var textAndSkinObj = {};
          textAndSkinObj = {
            "approveLblName":kony.i18n.getLocalizedString("kony.mb.ApprovalRequests.Withdraw"),
            "approveLblSkin":"sknLblffffff20px",
            "approveImgSrc": constantsSkin.imgApprove,
            "approveFlxSkin": constantsSkin.flxApproveSkin,
            "approveFlxVisiblity":true,
          };
          var configManager = applicationManager.getConfigurationManager();

          if(Array.isArray(response))
            if(response.length > 0){
              response.forEach(function(achFileReq){
                var withdrawVisibility = achFileReq.FileStatus === "Pending";
                 if(isiPhone && achFileReq.UpdatedDateAndTime.includes(" ")) {
                  achFileReq.UpdatedDateAndTime = achFileReq.UpdatedDateAndTime.replace(" ", "T") + "Z";
                }
                if(!isiPhone) {
                  achFileReq.UpdatedDateAndTime  = achFileReq.UpdatedDateAndTime.slice(0, 10) + "T12:00:00.001Z";
                }
                var rowObj = {
                  "template": "flxRequestList",
                  "data" : achFileReq,
                  "lblTransaction": {"text": "" + CommonUtilities.truncateStringWithGivenLength(achFileReq.FileName, 30)},
                  "lblTransactionAmount": {"text": configManager.getCurrencyCode()+""+CommonUtilities.formatCurrencyWithCommas(achFileReq.TotalCreditAmount, true)},
                  "lblDate": {"text": CommonUtilities.getFrontendDateString(achFileReq.UpdatedDateAndTime,"mm/dd/yyyy")},
                  "flxRequestList": {"isVisible": true,"height": "70dp"},
                  "lblStatus" : {"text" : achFileReq.FileStatus},
                   "ACHFileID":achFileReq.ACHFileID,
                  "flxApprove": {
                    "skin" : constantsSkin.flxApproveSkin,
                    onClick : viewController.showWithdrawpopup,
                    "isVisible" : withdrawVisibility && configManager.getUploadACHFilePermissionsList().some(configManager.checkUserPermission.bind(configManager))
                  },
                  "lblApprove": {"text" : textAndSkinObj.approveLblName, "skin" : textAndSkinObj.approveLblSkin},
                  "imgApprove": {"src": constantsSkin.imgApprove},
                  "action" : "Withdraw",
                  "fileName" : {
                    "text" : CommonUtilities.truncateStringWithGivenLength(achFileReq.FileName, 30),
                  },
                  "userName" : {
                    "text" : CommonUtilities.truncateStringWithGivenLength(achFileReq.userName, 15),
                  },
                  "totalCreditAmount" :configManager.getCurrencyCode()+""+ CommonUtilities.formatCurrencyWithCommas(achFileReq.TotalCreditAmount, true),
                  "totalDebitAmount" : configManager.getCurrencyCode()+""+CommonUtilities.formatCurrencyWithCommas(achFileReq.TotalDebitAmount, true),
                  "updatedDateAndTime" : CommonUtilities.getDateAndTime(achFileReq.UpdatedDateAndTime,"mm/dd/yyyy"),
                  "request_id": achFileReq.Request_id, 
                }
                achFilesResponseArr.push(rowObj);
              });
            }else{
              var rowObj2 = {
                "template": "flxNoPending",
                "lblTransactionPending": {"text": kony.i18n.getLocalizedString("kony.mb.ApprovalRequests.NoACHFileRequests")},
                "flxNoPending": {"isVisible": true,"height": "80dp"}
              };
              achFilesResponseArr.push(rowObj2);
            }
          viewController.fetchACHFilesMyRequestsSuccessCallBack(achFilesResponseArr);
        }catch(e){
          applicationManager.getPresentationUtility().dismissLoadingScreen();
          kony.print("Exception in ACHFileRequestsSuccess"+e);
        }
      };


      /**
  	* ACHFileRequestsFailure : Failure callback - which is invoked when fetching of ACH File requests is failed
  	* @member of {ApprovalsReqModule_PresentationController}
  	* @param {JSON Object} responseError - Respose Error from the Service call 
  	* @return {JSON Object} responseError - Respose Error from the Service call  
  	* @throws {}
  	*/ 
      ApprovalsReqModule_PresentationController.prototype.ACHFileRequestsFailure = function( responseError ){
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var viewController = applicationManager.getPresentationUtility().getController('frmRequestList', true); //frmApprovalsList
        viewController.showToastPopup(responseError,"failure","");
      };

      /**
  	* dataProcessorForGenTransaction :  General Transaction Data Processing
  	* @member of {ApprovalsReqModule_PresentationController}
  	* @param {JSON Object} response - Raw response form the Service call
  	* @return {JSON Object} response -  Massaged/formatted JSON data of the Transactions 
  	* @throws {}
  	*/ 
      ApprovalsReqModule_PresentationController.prototype.dataProcessorForGenTransaction = function(navObj,response) { 
        try{
          kony.print("Presentation controller dataProcessorForGenTransaction::");
          response = response.BBGeneralTransaction;
          var viewController = applicationManager.getPresentationUtility().getController('frmApprovalsList', true);
          var bbGenTransacctionArrCustom = [];
          var constantsSkin = {};
          var textAndSkinObj = {};
          var scopeObj = this;
          constantsSkin = {"headerImgUp" : "arrowupblue.png",
                           "imgReject" : "cancelreject.png",
                           "imgApprove" : "approvetick.png", 
                           "flxApproveSkin": "sknFlx1a98ff",
                           "flxRejectSkin" : "sknflxf6f6f6Bcg"};

          textAndSkinObj = {
            "approveLblName":kony.i18n.getLocalizedString("kony.mb.ApprovalRequests.Approve"),
            "approveLblSkin":"sknLblffffff20px",
            "approveFlxVisiblity":true,
            "rejectLblName":kony.i18n.getLocalizedString("kony.mb.ApprovalRequests.Reject"),
            "rejectLblSkin":"sknLbl104B80SPReg20px",
            "rejectFlxVisiblity":true,
          };
          var configManager = applicationManager.getConfigurationManager();

          if(response.length > 0){
            var scope = this;
            response.forEach(function(transaction){
              var statusCheck = transaction.Status.toLowerCase();
              
              if(statusCheck==="pending"){// this condtion used for fliter only pending status for approvals  
                kony.print("Payee :" +CommonUtilities.truncateStringWithGivenLength(transaction.Payee, 15));
                var rowObj = {
                  "template": "flxApprovalsList",
                  "data" : transaction,
                  "lblTransactionAP": {
                      "text": kony.sdk.isNullOrUndefined(transaction.Payee)?"NA" :transaction.Payee
                  },// CommonUtilities.truncateStringWithGivenLength(transaction.Payee, 15)},
                  "lblTransactionAmountAP": {"text":   configManager.getCurrencyCode()+""+CommonUtilities.formatCurrencyWithCommas(transaction.Amount,true)},//"$" + transArr[i].Amount + ".00"},
                  "lblDateAP": {"text": "" + CommonUtilities.getFrontendDateString(transaction.TransactionDate,"mm/dd/yyyy")},
                  "flxApprovalsList": {"isVisible": true,"height": "70dp"},
                  "flxRejectAP": {
                    "skin" : constantsSkin.flxRejectSkin,
                    onClick : viewController.rejectBtnOnClick,
                    "isVisible" : configManager.getGeneralTransactionApprovalFeaturePermissionsList().some(configManager.checkUserPermission.bind(configManager)),
                  },
                  "flxApproveAP": {
                    "skin" : constantsSkin.flxApproveSkin, 
                    onClick : viewController.approveTransaction,
                    "isVisible" : configManager.getGeneralTransactionApprovalFeaturePermissionsList().some(configManager.checkUserPermission.bind(configManager)),
                  },
                  "lblRejectAP": {
                    "text" : textAndSkinObj.rejectLblName,
                    "skin" : textAndSkinObj.rejectLblSkin
                  },
                  "lblApproveAP": {
                    "text" : textAndSkinObj.approveLblName, 
                    "skin" : textAndSkinObj.approveLblSkin
                  },
                  "imgRejectAP": {"src": constantsSkin.imgReject},
                  "imgApproveAP": {"src": constantsSkin.imgApprove},
                  "frequency" : kony.sdk.isNullOrUndefined(transaction.Frequency) ? "N/A" : transaction.Frequency,
                  "reccurence" : kony.sdk.isNullOrUndefined(transaction.Reccurence) ? "N/A" : transaction.Reccurence,
                  "transactionType" : {
                    "text" :  kony.sdk.isNullOrUndefined(transaction.featureName) ? "N/A" : CommonUtilities.truncateStringWithGivenLength(transaction.featureName, 22),
                  },
                  "lblApproval" : transaction.receivedApprovals + " of " + transaction.requiredApprovals,
                  "amICreator": transaction.amICreator,
                  "amIApprover": transaction.amIApprover,
                  "status" : transaction.Status,
                  "userName" : {
                    "text" :  kony.sdk.isNullOrUndefined(transaction.userName) ?"N/A" : CommonUtilities.truncateStringWithGivenLength(transaction.userName, 15),
                  },
                  "transaction_id" : transaction.Transaction_id,
                  "debitAccount" : {
                    "text" : CommonUtilities.truncateStringWithGivenLength(transaction.AccountName+"....",16)+CommonUtilities.getLastFourDigit(transaction.DebitOrCreditAccount),
                  },
                  "debitOrCreditAccount" : {
                    "text" : CommonUtilities.truncateStringWithGivenLength(transaction.AccountName+"....",16)+CommonUtilities.getLastFourDigit(transaction.DebitOrCreditAccount),
                  },
                  "request_id" : transaction.Request_id
                };
                bbGenTransacctionArrCustom.push(rowObj);
              }
            });
          }else{
            var rowObj2 = {
              "template": "flxNoPending",
              "lblTransactionPending": {"text": kony.i18n.getLocalizedString("kony.mb.ApprovalRequests.NoPendingApprovals")},
              "flxNoPending": {"isVisible": true,"height": "80dp"}
            };
            bbGenTransacctionArrCustom.push(rowObj2);
          }

          return(bbGenTransacctionArrCustom);
        }catch(ex){
          kony.print("Exception in dataProcessorForGenTransaction "+e);
          applicationManager.getPresentationUtility().dismissLoadingScreen();
        }
      };


      /**
  	* dataProcessorForGenTransactionRequests :  General Transaction Data Processing of Requests
  	* @member of {ApprovalsReqModule_PresentationController}
  	* @param {JSON Object} response - Raw response form the Service call
  	* @return {JSON Object} response -  Massaged/formatted JSON data of the Transactions 
  	* @throws {}
  	*/ 
      ApprovalsReqModule_PresentationController.prototype.dataProcessorForGenTransactionRequests = function(navObj,response) { 
        try{
          kony.print("Presentation controller dataProcessorForGenTransactionRequests::");
          response = response.BBGeneralTransaction;
          var bbGenTransacctionArrCustom = [];
          var constantsSkin = {};
          var textAndSkinObj = {};
          var scopeObj = this;
          var configManager = applicationManager.getConfigurationManager();
          var viewController = applicationManager.getPresentationUtility().getController('frmRequestList', true);
          constantsSkin = {"headerImgUp" : "arrowupblue.png",
                           "imgReject" : "cancelreject.png",
                           "imgApprove" : "approvetick.png",
                           "flxApproveSkin": "sknFlx1a98ff",
                           "flxRejectSkin" : "sknflxf6f6f6Bcg"}
          textAndSkinObj = {
            "approveLblName":kony.i18n.getLocalizedString("kony.mb.ApprovalRequests.Withdraw"),
            "approveLblSkin":"sknLblffffff20px",
            "approveImgSrc": constantsSkin.imgApprove,
            "approveFlxSkin": constantsSkin.flxApproveSkin,
            "approveFlxVisiblity":true,
          };

          if(response.length > 0){
            response.forEach(function(transaction){
              kony.print("Payee :" +CommonUtilities.truncateStringWithGivenLength(transaction.Payee, 15));
              var withdrawVisiblity = (transaction.Status === "Pending") ? true : false;
              
              var rowObj = {
                "template": "flxRequestList",
                "data" : transaction,
                "flxRequestList": {"isVisible": true,"height": "70dp"},
                "flxApprove": {
                  "skin" : constantsSkin.flxApproveSkin,
                  "isVisible" : withdrawVisiblity && configManager.getCreateGeneralTransactionPermissionsList().some(configManager.checkUserPermission.bind(configManager)),
                  onClick : viewController.showWithdrawpopup
                },
                "lblApprove": {
                  "text" : textAndSkinObj.approveLblName,
                  "skin" : textAndSkinObj.approveLblSkin
                },
                "imgApprove": {"src": constantsSkin.imgApprove},
                "lblTransaction": {
                      "text": kony.sdk.isNullOrUndefined(transaction.Payee)?"NA" :transaction.Payee//CommonUtilities.truncateStringWithGivenLength(transaction.Payee, 15) + CommonUtilities.getLastFourDigit(transaction.DebitOrCreditAccount)
                },
                "lblTransactionAmount": {"text": configManager.getCurrencyCode()+""+CommonUtilities.formatCurrencyWithCommas(transaction.Amount,true)},
                "lblDate": {"text":  CommonUtilities.getFrontendDateString(transaction.TransactionDate,"mm/dd/yyyy")},
                "lblStatus" : {"text" : transaction.Status},
                "frequency" : kony.sdk.isNullOrUndefined(transaction.Frequency) ? "N/A" : transaction.Frequency,
                "reccurence" : kony.sdk.isNullOrUndefined(transaction.Reccurence) ? "N/A" : transaction.Reccurence,
                "transactionType" : {
                  "text" :  kony.sdk.isNullOrUndefined(transaction.featureName) ? "N/A" : CommonUtilities.truncateStringWithGivenLength(transaction.featureName, 22),
                },
                "amICreator": transaction.amICreator,
                "amIApprover": transaction.amIApprover,
                "status" : transaction.Status,
                "userName" : {
                  "text" :  kony.sdk.isNullOrUndefined(transaction.userName) ?"N/A" : CommonUtilities.truncateStringWithGivenLength(transaction.userName, 15),
                },
                "lblApproval" : transaction.receivedApprovals + " of " + transaction.requiredApprovals, 
                "transaction_id" : transaction.Transaction_id,
                "debitAccount" : {
                  "text" : CommonUtilities.truncateStringWithGivenLength(transaction.AccountName+"....",16)+CommonUtilities.getLastFourDigit(transaction.DebitOrCreditAccount),
                },
                "debitOrCreditAccount" : {
                  "text" : CommonUtilities.truncateStringWithGivenLength(transaction.AccountName+"....",16)+CommonUtilities.getLastFourDigit(transaction.DebitOrCreditAccount),
                },
                "request_id" : transaction.Request_id
              };
              bbGenTransacctionArrCustom.push(rowObj);

            });
          }else{
            var rowObj2 = {
              "template": "flxNoPending",
              "lblTransactionPending": {"text": kony.i18n.getLocalizedString("kony.mb.ApprovalRequests.NoTransactionRequests")},
              "flxNoPending": {"isVisible": true,"height": "80dp"}
            };
            bbGenTransacctionArrCustom.push(rowObj2);
          }

          return(bbGenTransacctionArrCustom);
        }catch(ex){
          kony.print("Exception in dataProcessorForGenTransactionRequests "+ex);
          applicationManager.getPresentationUtility().dismissLoadingScreen();
        }
      };

      ApprovalsReqModule_PresentationController.prototype.dataFormToSegMyApprovals = function(responseofGenTrans,resOfACHTrans,resOfACHFiles){
        try {
          kony.print("Presentation controller dataFormToSegMyApprovals:::"+responseofGenTrans);

          var finalArr = []; // this is the final array which we are going to set in segment          
          var constantsSkin = {"headerImgUp" : "arrowupblue.png",
                               "imgReject" : "cancelreject.png",
                               "imgApprove" : "approvetick.png", 
                               "flxApproveSkin": "sknFlx1a98ff",
                               "flxRejectSkin" : "sknflxf6f6f6Bcg"};
          var headerTitles = [];
          if(responseofGenTrans !== undefined && responseofGenTrans !== null)
            headerTitles.push("Transactions");
          if(resOfACHTrans !== undefined && resOfACHTrans !== null)
            headerTitles.push("ACH Transactions");
          if(resOfACHFiles !== undefined && resOfACHFiles !== null)
            headerTitles.push("ACH Files");
          //kony.i18n.getLocalizedString("kony.mb.ApprovalRequests.ACHTransactions"), 
          //kony.i18n.getLocalizedString("kony.mb.ApprovalRequests.ACHFiles")];
          var combinedHeadRowArr = [];
          var scopeObj = this;
          if(Array.isArray(headerTitles)){
            for (var j = 0; j < headerTitles.length; j++) {
              combinedHeadRowArr = [];
              combinedHeadRowArr.push({
                "template": "flxApprovalReqExpColHeader",
                "lblHeader": {"text": headerTitles[j]},
                "imgUpArrow": {"src": constantsSkin.headerImgUp},
              });

              if(headerTitles[j] === "Transactions"){
                combinedHeadRowArr.push(responseofGenTrans); 
              }else if(headerTitles[j] === "ACH Transactions"){
                combinedHeadRowArr.push(resOfACHTrans); 
              }else{
                combinedHeadRowArr.push(resOfACHFiles); 
              }

              finalArr.push(combinedHeadRowArr);
            }}

          kony.print("final Arr::::" + JSON.stringify(finalArr));
          return finalArr;

        } catch (e) {
          kony.print("exception dataFormToSegMyApprovals::" + e);
          applicationManager.getPresentationUtility().dismissLoadingScreen();
        }
      };


      ApprovalsReqModule_PresentationController.prototype.getRequestsHistory = function(navObject){
        var scopeObj = applicationManager.getApprovalsReqManager();
        var ApprovalReqModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('ApprovalsReqManager').businessController;
        ApprovalReqModule.getRequestsHistory(navObject.requestData,this.getApprovalReqHistorySuccess,this.getApprovalReqHistoryFailure);
      };

      ApprovalsReqModule_PresentationController.prototype.getApprovalReqHistorySuccess = function (response) {
        var proccessedResponse = ApprovalsReqModule_PresentationController.prototype.dataProcessorForApprovalHistory(response);
        var viewController = applicationManager.getPresentationUtility().getController('frmACHTransactionDetail', true);
        viewController.getApprovalReqHistorySuccessCB(proccessedResponse);
        //return this.dataProcessorForGenTransaction(response);
      };

       ApprovalsReqModule_PresentationController.prototype.dataProcessorForApprovalHistory = function(response){
        try{
        var templateData = [];
        response = response.RequestHistory;
        var totalArraylength = response.length;
        var skin;
        var isvisible=false;
        if(!kony.sdk.isNullOrUndefined(response)){
          if(Array.isArray(response)){
            if(response.length > 0){
              for(var i = 0; i < totalArraylength ;i++){
                 if(!kony.sdk.isNullOrUndefined(response[i].Actionts)){
                  var CreatedOn = response[i].Actionts;
                  CreatedOn = CreatedOn.split('T')[0];
                  var time=response[i].Actionts;
                  time = time.split('T')[1];
                  var time1=time.substring(0, time.length - 1);
                }
                
                var dateCreated = kony.sdk.isNullOrUndefined(CreatedOn)?"-":"on "+CommonUtilities.getFrontendDateString(CreatedOn,"mm/dd/yyyy")+" "+time1;
                
                if(response[i].Action === "Approved") {
                  response[i].Action = kony.i18n.getLocalizedString("kony.mb.achtransactions.ApprovedRequest");
                  skin="sknlb1C810Cssp13px";
                }
                else if(response[i].Action === "Pending") {
                  response[i].Action = kony.i18n.getLocalizedString("kony.mb.achtransactions.CreatedRequest");
                  skin="sknlbl424242ssp40px";
                }
                else if(response[i].Action === "Rejected") {
                  response[i].Action = kony.i18n.getLocalizedString("kony.mb.ApprovalRequests.Rejected");
                  skin="sknlblD01212ssp13px";
                  isvisible = true;
                }
                else if(response[i].Action === "Approval Pending") {
                  response[i].Action = kony.i18n.getLocalizedString("kony.mb.achtransactions.ApprovalPending");
                  skin="sknlbAF8D0Fssp13px";
                  dateCreated = "-";
                }
               
                var jsonData={
                  "lblRecipientname":{"text":kony.sdk.isNullOrUndefined(response[i].Action)?"-":response[i].Action,
                                      "skin":skin},
                  "lblAccountnumber":{"text" :kony.sdk.isNullOrUndefined(response[i].userName)?"-":response[i].userName,
                                      "skin":"sknlbl424242ssp40px"},
                  "lblAmount":dateCreated,
                  "lblStatus":{"text":"By:", "skin":"sknlbl949494SSPR13px",isVisible:true},
                  "flxComments":{isVisible:isvisible},
                  "lblComments":{"text":"Comments","skin":"sknlbl949494SSPR13px"},
                  "lblCommentsVal":{"text":kony.sdk.isNullOrUndefined(response[i].Comments)?"-":response[i].Comments},
                  "flxSep":{isVisible:true},
                  "flxSeperatorTrans4":{isVisible:false},
                };
                templateData.push(jsonData);              
              }
            }
          }
        }
        return templateData;
      }catch(er){
        kony.print(er);
      }
      },

        ApprovalsReqModule_PresentationController.prototype.getApprovalReqHistoryFailure = function (responseError) {
        // return responseError;
      };
      
      /**
  * approvePendingTransactions :  This is the function to Approve an Pendgin Transactions
  * @member of {ApprovalsReqModule_PresentationController}
  * @param {JSON Object} navObj - Navigation with SUccess and Failure flows
  * @return {} 
  * @throws {}
  */ 
                ApprovalsReqModule_PresentationController.prototype.approvePendingTransactions = function (navObj) {
                  var scopeObj = this;
                  var approvalsReqManager = applicationManager.getApprovalsReqManager();
                  approvalsReqManager.Approve(
                    navObj.requestData,
                   scopeObj.onApproveBBGeneralTransactionsSuccess.bind(scopeObj,navObj),
                    scopeObj.onApproveBBGeneralTransactionsFailure.bind(scopeObj,navObj)
                  );
                };


      /**
  * approveBBGeneralTransactions :  This is the function to Approve an General Transactions
  * @member of {ApprovalsReqModule_PresentationController}
  * @param {JSON Object} navObj - Navigation with SUccess and Failure flows
  * @return {} 
  * @throws {}
  */ 
      ApprovalsReqModule_PresentationController.prototype.approveBBGeneralTransactions = function (navObj) {
        var scopeObj = this;
        var approvalsReqManager = applicationManager.getApprovalsReqManager();
        approvalsReqManager.approveBBGeneralTransactions(
          navObj.requestData,
          scopeObj.onApproveBBGeneralTransactionsSuccess.bind(scopeObj,navObj),
          scopeObj.onApproveBBGeneralTransactionsFailure.bind(scopeObj,navObj)
        );
      };


      /**
  * onApproveBBGeneralTransactionsSuccess : Upon Success of an Approval, function to fetch the an General Transaction Details
  * @member of {ApprovalsReqModule_PresentationController}
  * @param {JSON Object} navObject - Navigation with SUccess and Failure flows
  * @param {JSON Object} response - success response data of the previous call
  * @return {} 
  * @throws {}
  */
      ApprovalsReqModule_PresentationController.prototype.onApproveBBGeneralTransactionsSuccess = function (navObj, response) {
        var scopeObj = this;

        if(navObj.formData.viewId === "ApprovalsReqModule/frmApprovalsList"){
          var viewController = applicationManager.getPresentationUtility().getController('frmApprovalsList', true);
          viewController.showToastPopup(response,"success",kony.i18n.getLocalizedString("kony.mb.achtransactionsdetail.approved"));
        }else{
          var viewController = applicationManager.getPresentationUtility().getController('frmACHTransactionDetail', true); 
          viewController.fetchBBGeneralTransactionsSucces(response);
        }
      };

      /**
  * onApproveBBGeneralTransactionsFailure : Failed to Approve General Transaction 
  * @member of {ApprovalsReqModule_PresentationController}
  * @param {JSON Object} responseError - Service returned error object
  * @return {} 
  * @throws {}
  */
      ApprovalsReqModule_PresentationController.prototype.onApproveBBGeneralTransactionsFailure = function (navObj,responseError) {
        if(navObj.formData.viewId === "ApprovalsReqModule/frmApprovalsList"){
          var viewController = applicationManager.getPresentationUtility().getController('frmApprovalsList', true);
          viewController.showToastPopup(responseError,"failure","");
        }else{
          var viewController = applicationManager.getPresentationUtility().getController('frmACHTransactionDetail', true);
          viewController.fetchErrorBack(responseError);
        }
      };


      /*******************************************************
  * approveACHTransactions :  This is the function to Approve an ACH Transactions

  *********************************************************/ 
      ApprovalsReqModule_PresentationController.prototype.approveACHTransactions = function (navObj) { 
        var scopeObj = this;     
        var approvalsReqManager = applicationManager.getApprovalsReqManager();
        approvalsReqManager.approveACHTransactions(navObj.requestData,
                                                   scopeObj.onApproveACHTransactionsSuccess.bind(scopeObj,navObj),
                                                   scopeObj.onApproveACHTransactionsFailure.bind(scopeObj,navObj));
      };

      ApprovalsReqModule_PresentationController.prototype.onApproveACHTransactionsSuccess = function ( navObj,response ){  
        if(navObj.formData.viewId === "ApprovalsReqModule/frmApprovalsList"){
          var viewController = applicationManager.getPresentationUtility().getController('frmApprovalsList', true);
          viewController.showToastPopup(response,"success",kony.i18n.getLocalizedString("kony.mb.achtransactionsdetail.approved"));
        }else{
          var viewController = applicationManager.getPresentationUtility().getController('frmACHTransactionDetail', true);
          viewController.fetchApproveACHTransactionsSuccess(response);
        }
      };

      ApprovalsReqModule_PresentationController.prototype.onApproveACHTransactionsFailure = function ( navObj,responseError ) { 
        kony.print("Presentation controller onApproveACHTransactionsFailure"+JSON.stringify(responseError));
        if(navObj.formData.viewId === "ApprovalsReqModule/frmApprovalsList"){
          var viewController = applicationManager.getPresentationUtility().getController('frmApprovalsList', true);
          viewController.showToastPopup(responseError,"failure","");
        }else{
          var viewController = applicationManager.getPresentationUtility().getController('frmACHTransactionDetail', true);
          viewController.fetchErrorBack(responseError);
        }
      };


      /*****************************************************
  * approveACHFiles : call the service to Approve ACH File
  ****************************************************/
      ApprovalsReqModule_PresentationController.prototype.approveACHFiles = function (navObj) {
        var scopeObj = this;
        var approvalsReqManager = applicationManager.getApprovalsReqManager();
        approvalsReqManager.approveACHFiles(navObj.requestData,
                                            scopeObj.onApproveACHFilesSuccess.bind(scopeObj,navObj),
                                            scopeObj.onApproveACHFilesFailure.bind(scopeObj,navObj));
      };

      ApprovalsReqModule_PresentationController.prototype.onApproveACHFilesSuccess = function (navObj, response ){  
        if(navObj.formData.viewId === "ApprovalsReqModule/frmApprovalsList"){
          var viewController = applicationManager.getPresentationUtility().getController('frmApprovalsList', true);
          viewController.showToastPopup(response,"success",kony.i18n.getLocalizedString("kony.mb.achtransactionsdetail.approved"));
        }else{
          var viewController = applicationManager.getPresentationUtility().getController('frmACHTransactionDetail', true);
          viewController.fetchApproveACHFilesSuccess(response);
        }
      };

      ApprovalsReqModule_PresentationController.prototype.onApproveACHFilesFailure = function ( navObj, responseError ) { 
        kony.print("Presentation controller onApproveACHFilesFailure"+JSON.stringify(responseError));
        if(navObj.formData.viewId === "ApprovalsReqModule/frmApprovalsList"){
          var viewController = applicationManager.getPresentationUtility().getController('frmApprovalsList', true);
          viewController.showToastPopup(responseError,"failure","");
        }else{
          var viewController = applicationManager.getPresentationUtility().getController('frmACHTransactionDetail', true);
          viewController.fetchErrorBack(responseError);
        }
      };
      
        	 /**
	  * getCancellationReasons :  This is the function which is used to fetch  reject reasons for transactions
	  * @member of {ApprovalsReqModule_PresentationController}
	  * @param {JSON Object} navObj - navigation object with success and failure flows
	  * @return {}
	  * @throws {}
	  */ 
		ApprovalsReqModule_PresentationController.prototype.getCancellationReasons = function (navObj) {
		  try{
			var scopeObj = this;

			var approvalsReqManager = applicationManager.getApprovalsReqManager();
			approvalsReqManager.fetchBulkCancellationReason(
			  navObj,
			  scopeObj.onFetchCancellationReasonsSuccess.bind(scopeObj,navObj),
			  scopeObj.onFetchCancellationReasonsFailure,
			);
			  }catch(e){
			  applicationManager.getPresentationUtility().dismissLoadingScreen();
			  kony.print("Exception in getCancellationReasons"+e);}
		  };
          
          /**
	 * onFetchCancellationReasonsSuccess :  Method to handle success response of fetching Transactions Pending for My Approvals
	 * @member of {PresentationController}
	 * @param {JSON Object} response - response object from the service call 
	 * @return {}  
	 * @throws {}
	 */ 
          ApprovalsReqModule_PresentationController.prototype.onFetchCancellationReasonsSuccess = function (navObj,response) {
            try{
              kony.print("Presentation controller onFetchCancellationReasonsSuccess"+JSON.stringify(response));
              var navigationManager = applicationManager.getNavigationManager();
              var resCancelation = response.cancellationreasons;
              var transactionsArr = [];
              var viewController = applicationManager.getPresentationUtility().getController('frmBulkRejectReason', true);


              if(resCancelation.length > 0){
                resCancelation.forEach(function (responseObj) {
                  var id = responseObj.id;
                  var reason = responseObj.reason;
                  reason = reason.charAt(0).toUpperCase() + reason.slice(1).toLowerCase();

                  var rowObj= {
                    "template": "flxFilterRows",
                    "data" : responseObj,
                    
                    "lblName" : {text : kony.sdk.isNullOrUndefined(reason)?"-":reason},
                    "imgSelection" : {"src":"transparent.png"},
                      };
                   transactionsArr.push(rowObj);
                    });
              }else{
                var rowObj2 = {
                  "template": "flxNoPending",
                  "lblTransactionPending": {"text": "No Reason found"},
                  "flxNoPending": {"isVisible": true,"height": "80dp"}
                };
                transactionsArr.push(rowObj2);
              }
              
                            viewController.fetchRejectReasonSuccessCallBack(transactionsArr);

            }catch(e){
              applicationManager.getPresentationUtility().dismissLoadingScreen();
              kony.print("Exception in onFetchCancellationReasonsSuccess"+e);}
          };
          
           /**
	  * onFetchPendingApprovalsFailure :  Method to handle failure response of fetching General Transactions Pending for My Approvals
	  * @member of {PresentationController}
	  * @param {JSON Object} responseError - error object form failure callback of service
	  * @return {}  
	  * @throws {}
	  */ 
		  ApprovalsReqModule_PresentationController.prototype.onFetchCancellationReasonsFailure = function (responseError) {
			kony.print("Presentation controller onFetchCancellationReasonsFailure"+JSON.stringify(responseError));
			applicationManager.getPresentationUtility().dismissLoadingScreen();
			var viewController = applicationManager.getPresentationUtility().getController('frmBulkRejectReason', true); //frmRequestList
			viewController.showToastPopup(responseError,"failure","");
			// return responseError;
		  };

        /*  rejectPendingTransaction : This is the function for Reject Pending Transactions
  * @member of {ApprovalsReqModule_PresentationController}
  * @param {JSON Object} navObj - Navigation with SUccess and Failure flows
  * @return {} 
  * @throws {}
  */
                ApprovalsReqModule_PresentationController.prototype.rejectPendingTransaction = function (navObj) { 
                  var scopeObj = this;
                  var approvalsReqManager = applicationManager.getApprovalsReqManager();
                  approvalsReqManager.Reject(
                    navObj.requestData,
                    scopeObj.onRejectPendingTransactionsSuccess.bind(scopeObj,navObj),
                    scopeObj.onRejectPendingTransactionsFailure.bind(scopeObj,navObj)
                  );
                };
                
                /*  rejectBulkPaymentRecord : This is the function for Reject Pending Transactions
  * @member of {ApprovalsReqModule_PresentationController}
  * @param {JSON Object} navObj - Navigation with SUccess and Failure flows
  * @return {} 
  * @throws {}
  */
                ApprovalsReqModule_PresentationController.prototype.rejectBulkPaymentRecord = function (navObj) { 
                  var scopeObj = this;
                  var approvalsReqManager = applicationManager.getApprovalsReqManager();
                  approvalsReqManager.rejectBulkPaymentRecord(
                    navObj.requestData,
                    scopeObj.onRejectPendingTransactionsSuccess.bind(scopeObj,navObj),
                    scopeObj.onRejectPendingTransactionsFailure.bind(scopeObj,navObj)
                  );
                };
                
                /**
  * onRejectPendingTransactionsSuccess : Method to handle success response of Reject BB Pending Transactions
  * @member of {ApprovalsReqModule_PresentationController}
  * @param {JSON Object} navObj - Navigation with SUccess and Failure flows
  * @param {JSON Object} response - Success Data which is reponse to previous call
  * @return {} 
  * @throws {}
  */
                ApprovalsReqModule_PresentationController.prototype.onRejectPendingTransactionsSuccess = function (navObj, response) { 
                  var scopeObj = this;
                  kony.print("Entered onRejectPendingTransactionsSuccess"+JSON.stringify(response));
                  if(navObj.formData.viewId === "ApprovalsReqModule/frmApprovalsList"){
                    var viewController = applicationManager.getPresentationUtility().getController('frmApprovalsList', true);
                    viewController.showToastPopup(response,"success",kony.i18n.getLocalizedString("kony.mb.achtransactionsdetail.reject"));
                  }else if(navObj.formData.viewId === "ApprovalsReqModule/frmBulkRejectReason"){
                    var viewController = applicationManager.getPresentationUtility().getController('frmBulkRejectReason', true);
                    viewController.showToastPopup(response,"success",kony.i18n.getLocalizedString("kony.mb.achtransactionsdetail.reject"));
                  }else{
                    var viewController = applicationManager.getPresentationUtility().getController('frmACHTransactionDetail', true);
                    viewController.fetchRejectBBGeneralTransactionsSuccess(response);
                  }
                };


                /**
  * onRejectPendingTransactionsFailure : Method to handle failure response of Reject Pending Transactions
  * @member of {ApprovalsReqModule_PresentationController}
  * @param {JSON Object} responseError - failure response object
  * @return {} 
  * @throws {}
  */
                ApprovalsReqModule_PresentationController.prototype.onRejectPendingTransactionsFailure = function (navObj,responseError) {
                  kony.print("Entered onRejectPendingTransactionsFailure"+JSON.stringify(responseError));
                  if(navObj.formData.viewId === "ApprovalsReqModule/frmApprovalsList"){
                    var viewController = applicationManager.getPresentationUtility().getController('frmApprovalsList', true);
                    viewController.showToastPopup(responseError,"failure","");
                  }else if(navObj.formData.viewId === "ApprovalsReqModule/frmBulkRejectReason"){
                    var viewController = applicationManager.getPresentationUtility().getController('frmBulkRejectReason', true);
                    viewController.showToastPopup(responseError,"failure","");
                  }else{
                    var viewController = applicationManager.getPresentationUtility().getController('frmACHTransactionDetail', true);
                    viewController.fetchErrorBack(responseError)
                  }
                };



      /*  rejectBBGeneralTransactions : This is the function for Reject BB General Transactions
  * @member of {ApprovalsReqModule_PresentationController}
  * @param {JSON Object} navObj - Navigation with SUccess and Failure flows
  * @return {} 
  * @throws {}
  */
      ApprovalsReqModule_PresentationController.prototype.rejectBBGeneralTransactions = function (navObj) { 
        var scopeObj = this;
        var approvalsReqManager = applicationManager.getApprovalsReqManager();
        approvalsReqManager.rejectBBGeneralTransactions(
          navObj.requestData,
          scopeObj.onRejectBBGeneralTransactionsSuccess.bind(scopeObj,navObj),
          scopeObj.onRejectBBGeneralTransactionsFailure.bind(scopeObj,navObj)
        );
      };


      /**
  * onRejectBBGeneralTransactionsSuccess : Method to handle success response of Reject BB General Transactions
  * @member of {ApprovalsReqModule_PresentationController}
  * @param {JSON Object} navObj - Navigation with SUccess and Failure flows
  * @param {JSON Object} response - Success Data which is reponse to previous call
  * @return {} 
  * @throws {}
  */
      ApprovalsReqModule_PresentationController.prototype.onRejectBBGeneralTransactionsSuccess = function (navObj, response) { 
        var scopeObj = this;
        kony.print("Entered onRejectBBGeneralTransactionsSuccess"+JSON.stringify(response));
        if(navObj.formData.viewId === "ApprovalsReqModule/frmApprovalsList"){
          var viewController = applicationManager.getPresentationUtility().getController('frmApprovalsList', true);
          viewController.showToastPopup(response,"success",kony.i18n.getLocalizedString("kony.mb.achtransactionsdetail.reject"));
        }else{
          var viewController = applicationManager.getPresentationUtility().getController('frmACHTransactionDetail', true);
          viewController.fetchRejectBBGeneralTransactionsSuccess(response);
        }
      };


      /**
  * onRejectBBGeneralTransactionsSuccess : Method to handle failure response of Reject BB General Transactions
  * @member of {ApprovalsReqModule_PresentationController}
  * @param {JSON Object} responseError - failure response object
  * @return {} 
  * @throws {}
  */
      ApprovalsReqModule_PresentationController.prototype.onRejectBBGeneralTransactionsFailure = function (navObj,responseError) {
        kony.print("Entered onRejectBBGeneralTransactionsFailure"+JSON.stringify(responseError));
        if(navObj.formData.viewId === "ApprovalsReqModule/frmApprovalsList"){
          var viewController = applicationManager.getPresentationUtility().getController('frmApprovalsList', true);
          viewController.showToastPopup(responseError,"failure","");
        }else{
          var viewController = applicationManager.getPresentationUtility().getController('frmACHTransactionDetail', true);
          viewController.fetchErrorBack(responseError)
        }
      };



      /******************************************************************
  * rejectACHTransactions : This is the function for Reject ACH Transactions
  ****************************************/
      ApprovalsReqModule_PresentationController.prototype.rejectACHTransaction = function (navObj) { 
        var scopeObj = this;
        var approvalsReqManager = applicationManager.getApprovalsReqManager();
        approvalsReqManager.rejectACHTransactions(navObj.requestData,
                                                  scopeObj.onRejectACHTransactionsSuccess.bind(scopeObj,navObj),
                                                  scopeObj.onRejectACHTransactionsFailure.bind(scopeObj,navObj));

      };
      ApprovalsReqModule_PresentationController.prototype.onRejectACHTransactionsSuccess = function ( navObj,response ){ 
        if(navObj.formData.viewId === "ApprovalsReqModule/frmApprovalsList"){
          var viewController = applicationManager.getPresentationUtility().getController('frmApprovalsList', true);
          viewController.showToastPopup(response,"success",kony.i18n.getLocalizedString("kony.mb.achtransactionsdetail.reject"));
        }else{
          var viewController = applicationManager.getPresentationUtility().getController('frmACHTransactionDetail', true);
          viewController.fetchRejectACHTransactionsSuccess(response);
        }
      };

      ApprovalsReqModule_PresentationController.prototype.onRejectACHTransactionsFailure = function ( navObj,responseError ) { 
        kony.print("Presentation controller onRejectACHTransactionsFailure"+JSON.stringify(responseError));
        if(navObj.formData.viewId === "ApprovalsReqModule/frmApprovalsList"){
          var viewController = applicationManager.getPresentationUtility().getController('frmApprovalsList', true);
          viewController.showToastPopup(responseError,"failure","");
        }else{
          var viewController = applicationManager.getPresentationUtility().getController('frmACHTransactionDetail', true);
          viewController.fetchErrorBack(responseError);
        }
      };

      /**************************************************************
  * rejectACHFiles : Method to handle success response of Reject ACHFile
  ************************************************************/
      ApprovalsReqModule_PresentationController.prototype.rejectACHFile = function (navObj) { 
        var scopeObj = this;
        var approvalsReqManager = applicationManager.getApprovalsReqManager();
        approvalsReqManager.rejectACHFiles(navObj.requestData,
                                           scopeObj.onRejectACHFilesSuccess.bind(scopeObj,navObj),
                                           scopeObj.onRejectACHFilesFailure.bind(scopeObj,navObj));  
      };
      ApprovalsReqModule_PresentationController.prototype.onRejectACHFilesSuccess = function ( navObj,response ){  
        if(navObj.formData.viewId === "ApprovalsReqModule/frmApprovalsList"){
          var viewController = applicationManager.getPresentationUtility().getController('frmApprovalsList', true);
          viewController.showToastPopup(response,"success",kony.i18n.getLocalizedString("kony.mb.achtransactionsdetail.reject"));
        }else{
          var viewController = applicationManager.getPresentationUtility().getController('frmACHTransactionDetail', true);
          viewController.fetchRejectACHFilesSuccess(response);
        }
      };

      ApprovalsReqModule_PresentationController.prototype.onRejectACHFilesFailure = function ( navObj,responseError ) { 
        kony.print("Presentation controller onRejectACHFilesFailure"+JSON.stringify(responseError));
        if(navObj.formData.viewId === "ApprovalsReqModule/frmApprovalsList"){
          var viewController = applicationManager.getPresentationUtility().getController('frmApprovalsList', true);
          viewController.showToastPopup(responseError,"failure","");
        }else{
          var viewController = applicationManager.getPresentationUtility().getController('frmACHTransactionDetail', true);
          viewController.fetchErrorBack(responseError);
        }
      };
      
      /**
  	* withdrawTransactionRequest :  This method is used to withdraw a transaction request made by the user 
  	* @member of {ApprovalsReqModule_PresentationController}
  	* @param {JSON Object} navObj - navigation object with success and failure flows
  	* @return {}
  	* @throws {}
  	*/ 
      ApprovalsReqModule_PresentationController.prototype.withdrawPendingRequest = function( navObj ){ 
        var scopeObj = this;

        var approvalsReqManager = applicationManager.getApprovalsReqManager();
        approvalsReqManager.withdraw(
          navObj.requestData,
          scopeObj.transactionWithdrawlSuccess.bind(scopeObj,navObj),
          scopeObj.transactionWithdrawlFailure.bind(scopeObj,navObj),
        );
          };

      /**
  	* withdrawTransactionRequest :  This method is used to withdraw a transaction request made by the user 
  	* @member of {ApprovalsReqModule_PresentationController}
  	* @param {JSON Object} navObj - navigation object with success and failure flows
  	* @return {}
  	* @throws {}
  	*/ 
      ApprovalsReqModule_PresentationController.prototype.withdrawTransactionRequest = function( navObj ){ 
        var scopeObj = this;

        var approvalsReqManager = applicationManager.getApprovalsReqManager();
        approvalsReqManager.withdrawTransactionRequest(
          navObj.requestData,
          scopeObj.transactionWithdrawlSuccess.bind(scopeObj,navObj),
          scopeObj.transactionWithdrawlFailure.bind(scopeObj,navObj),
        );
          };


          /**
  	* transactionWithdrawlSuccess :  Success callback invoked after the successful withdrawl of a transaction
  	* @member of {ApprovalsReqModule_PresentationController}
  	* @param {JSON Object} navObj - navigation object with success and failure flows
    * @param {JSON Object} response - response object from the service call 
  	* @return {}  
  	* @throws {}
  	*/ 
          ApprovalsReqModule_PresentationController.prototype.transactionWithdrawlSuccess = function ( navObj, response ) { 
          var scopeObj = this;
          if(navObj.formData.viewId === "ApprovalsReqModule/frmRequestList"){
            var viewController = applicationManager.getPresentationUtility().getController('frmRequestList', true);
            viewController.showToastPopup(response,"success",kony.i18n.getLocalizedString("kony.mb.achtransactionsdetail.withdraw"));
          }else{
            var viewController = applicationManager.getPresentationUtility().getController('frmACHTransactionDetail', true);
            viewController.fetchBBGeneralTransactionsWithdrawlSuccess(response);
          }
        };


        /**
  	* transactionWithdrawlFailure :  Failure callback invoked after the failure of a transaction withdrawl 
  	* @member of {ApprovalsReqModule_PresentationController}
  	* @param {JSON Object} error - error object form failure callback of service
  	* @return {}  
  	* @throws {}
  	*/ 
        ApprovalsReqModule_PresentationController.prototype.transactionWithdrawlFailure = function( navObj,error ){
          kony.print("Presentation controller transactionWithdrawlFailure"+JSON.stringify(error));
          if(navObj.formData.viewId === "ApprovalsReqModule/frmRequestList"){
            var viewController = applicationManager.getPresentationUtility().getController('frmRequestList', true);
            viewController.showToastPopup(error,"failure","");
          }else{
            var viewController = applicationManager.getPresentationUtility().getController('frmACHTransactionDetail', true);
            viewController.fetchErrorBack(error);
          }
        };

        /*************************************************************88
  	* withdrawTransactionRequest :  This method is used to withdraw a transaction request made by the user 

  ****************************************************************************88	*/ 
        ApprovalsReqModule_PresentationController.prototype.withdrawACHTransaction = function( navObj ){ 
          var scopeObj = this;  
          var approvalsReqManager = applicationManager.getApprovalsReqManager();
          approvalsReqManager.withdrawACHTransactionRequest(navObj.requestData,
                                                            scopeObj.achTransactionWithdrawlSuccess.bind(scopeObj,navObj),
                                                            scopeObj.achTransactionWithdrawlFailure.bind(scopeObj,navObj));
        };
        ApprovalsReqModule_PresentationController.prototype.achTransactionWithdrawlSuccess = function ( navObj,response ){
          if(navObj.formData.viewId === "ApprovalsReqModule/frmRequestList"){
            var viewController = applicationManager.getPresentationUtility().getController('frmRequestList', true);
            viewController.showToastPopup(response,"success",kony.i18n.getLocalizedString("kony.mb.achtransactionsdetail.withdraw"));
          }else{
            var viewController = applicationManager.getPresentationUtility().getController('frmACHTransactionDetail', true);
            viewController.fetchACTransactionWithdrawlSuccess(response);
          }
        };

        ApprovalsReqModule_PresentationController.prototype.achTransactionWithdrawlFailure = function ( navObj,responseError ) { 
          kony.print("Presentation controller onRejectACHFilesFailure"+JSON.stringify(responseError));
          if(navObj.formData.viewId === "ApprovalsReqModule/frmRequestList"){
            var viewController = applicationManager.getPresentationUtility().getController('frmRequestList', true);
            viewController.showToastPopup(responseError,"failure","");
          }else{
            var viewController = applicationManager.getPresentationUtility().getController('frmACHTransactionDetail', true);
            viewController.fetchErrorBack(responseError);
          }
        };
        /***********************************************
  	* withdrawACHFileRequest :  This method is used to withdraw an ACH File request made by the user
  	****************************************************/ 
        ApprovalsReqModule_PresentationController.prototype.withdrawACHFileRequests = function( navObj ) { 
          var scopeObj = this;
          var approvalsReqManager = applicationManager.getApprovalsReqManager();
          approvalsReqManager.withdrawACHFileRequest(
            navObj.requestData,
            scopeObj.achFileWithdrawlSuccess.bind(scopeObj,navObj),
            scopeObj.achFileWithdrawlFailure.bind(scopeObj,navObj) );
        };

        ApprovalsReqModule_PresentationController.prototype.achFileWithdrawlSuccess = function ( navObj,response ){   
          if(navObj.formData.viewId === "ApprovalsReqModule/frmRequestList"){
            var viewController = applicationManager.getPresentationUtility().getController('frmRequestList', true);
            viewController.showToastPopup(response,"success",kony.i18n.getLocalizedString("kony.mb.achtransactionsdetail.withdraw"));
          }else{
            var viewController = applicationManager.getPresentationUtility().getController('frmACHTransactionDetail', true);
            viewController.fetchACHFileWithdrawlSuccess(response);
          }
        };

        ApprovalsReqModule_PresentationController.prototype.achFileWithdrawlFailure = function ( navObj,responseError ) { 
          kony.print("Presentation controller achFileWithdrawlFailure"+JSON.stringify(responseError));
          if(navObj.formData.viewId === "ApprovalsReqModule/frmRequestList"){
            var viewController = applicationManager.getPresentationUtility().getController('frmRequestList', true);
            viewController.showToastPopup(responseError,"failure","");
          }else{
            var viewController = applicationManager.getPresentationUtility().getController('frmACHTransactionDetail', true);
            viewController.fetchErrorBack(responseError);
          }
        };
      
      
       /**
  * getApprovalsHistory :  This is the function which is used to get ApprovalsHistory 
  * @member of {ApprovalsReqModule_PresentationController}
  * @param {JSON Object} navObj - navigation object with success and failure flows
  * @return {}
  * @throws {}
  */ 
    ApprovalsReqModule_PresentationController.prototype.getApprovalsHistory = function (navObj) {
      try{
        var scopeObj = this;
        var approvalsReqManager = applicationManager.getApprovalsReqManager();
        approvalsReqManager.FetchAllMyApprovalHistory(
          navObj,
          scopeObj.onFetchApprovalsHistorySuccess,
          scopeObj.onFetchApprovalsHistoryFailure,
        );
          }catch(e){
          applicationManager.getPresentationUtility().dismissLoadingScreen();
          kony.print("Exception in getApprovalsHistory"+e);}
      };
      
       ApprovalsReqModule_PresentationController.prototype.onFetchApprovalsHistorySuccess = function (responses) { 
         var proccessedResponse = ApprovalsReqModule_PresentationController.prototype.dataProcessorForAllApprovalHistory(responses);
         var viewController = applicationManager.getPresentationUtility().getController('frmApprovalHistory', true);
         viewController.fetchApprovalsHistorySuccesscallback(proccessedResponse);
        };
        ApprovalsReqModule_PresentationController.prototype.onFetchApprovalsHistoryFailure = function( error ){
           applicationManager.getPresentationUtility().dismissLoadingScreen();
          var viewController = applicationManager.getPresentationUtility().getController('frmApprovalHistory', true);
           viewController.errorCallback(error);
        };
      /**
    * dataProcessorForApprovalHistory : Method to format Data for ApprovalHistory  */// 
  ApprovalsReqModule_PresentationController.prototype.dataProcessorForAllApprovalHistory = function (responsedata ) { 
    try{     
      var setdataarray=[];
      var configManager = applicationManager.getConfigurationManager();
      var isiPhone = applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone";
      var response = responsedata.records;
      if(Array.isArray(response)){
        for(var i=0;i<response.length;i++){ 
          var statusImage;
          if(response[i].status === "Approved" || response[i].status === "approved") {
            statusImage = "approval.png"
          }
          else if(response[i].status === "Pending" || response[i].status === "pending") {
            statusImage = "pending.png"
          } else{
            statusImage = "reject.png"
          }
          var approvalDate = response[i].approvalDate;
          approvalDate = approvalDate.split('T')[0];
		  var featureName;
          var featureActionName;
          if(response[i].featureName.length > 53){
            featureName=CommonUtilities.truncateStringWithGivenLength(response[i].featureName + "...", 53);
          }else{
            featureName=response[i].featureName;
          }
           if(response[i].featureActionName.length > 33){
            featureActionName=CommonUtilities.truncateStringWithGivenLength(response[i].featureActionName + "...", 34)
          }else{
            featureActionName=response[i].featureActionName;
          }
       var parsedResponse={
            "data":response[i],
            "requestId":kony.sdk.isNullOrUndefined(response[i].requestId)?"-":response[i].requestId,
           "featureActionId":kony.sdk.isNullOrUndefined(response[i].featureActionId)?"-":response[i].featureActionId,            
           "featureActionName":kony.sdk.isNullOrUndefined(response[i].featureActionName)?"-":response[i].featureActionName,
           "featureName":kony.sdk.isNullOrUndefined(response[i].featureName)?"-":response[i].featureName,
           "lblPaymentType":kony.sdk.isNullOrUndefined(response[i].featureName)?"-":featureName,
           "lblPaymentMode":kony.sdk.isNullOrUndefined(response[i].featureActionName)?"-":featureActionName,
           "limitGroupId":kony.sdk.isNullOrUndefined(response[i].limitGroupId)?"-":response[i].limitGroupId,
           "limitGroupName":kony.sdk.isNullOrUndefined(response[i].limitGroupName)?"-":response[i].limitGroupName,            
           "transactionId":kony.sdk.isNullOrUndefined(response[i].transactionId)?"-":response[i].transactionId,
           "contractId":kony.sdk.isNullOrUndefined(response[i].contractId)?"-":response[i].contractId,
           "companyId":kony.sdk.isNullOrUndefined(response[i].companyId)?"-":response[i].companyId,
           "accountId":kony.sdk.isNullOrUndefined(response[i].accountId)?"-":response[i].accountId,
           "imgStatus":statusImage,
           "status":response[i].status,
           "sentBy":kony.sdk.isNullOrUndefined(response[i].sentBy)?"-":response[i].sentBy,
           "lblName":kony.sdk.isNullOrUndefined(response[i].sentBy)?"-":response[i].sentBy,
           "amIApprover":kony.sdk.isNullOrUndefined(response[i].amIApprover)?"-":response[i].amIApprover,
           "amICreator":kony.sdk.isNullOrUndefined(response[i].amICreator)?"-":response[i].amICreator,
           "requiredApprovals":kony.sdk.isNullOrUndefined(response[i].requiredApprovals)?"-":response[i].requiredApprovals,
           "receivedApprovals":kony.sdk.isNullOrUndefined(response[i].receivedApprovals)?"-":response[i].receivedApprovals,
           "actedByMeAlready":kony.sdk.isNullOrUndefined(response[i].actedByMeAlready)?"-":response[i].actedByMeAlready,
           "requestType":kony.sdk.isNullOrUndefined(response[i].requestType)?"-":response[i].requestType,            
           "processingDate":kony.sdk.isNullOrUndefined(response[i].processingDate)?"-":CommonUtilities.getFrontendDateString(response[i].processingDate,"mm/dd/yyyy"),
           "sentDate":kony.sdk.isNullOrUndefined(response[i].sentDate)?"-":CommonUtilities.getFrontendDateString(response[i].sentDate,"mm/dd/yyyy"),
           "lblDate":kony.sdk.isNullOrUndefined(approvalDate)?"-":CommonUtilities.getFrontendDateString(approvalDate,"mm/dd/yyyy"),
           "approvalDate":kony.sdk.isNullOrUndefined(response[i].approvalDate)?"-":CommonUtilities.getFrontendDateString(response[i].approvalDate,"mm/dd/yyyy"),
           "amount":configManager.getCurrencyCode()+""+CommonUtilities.formatCurrencyWithCommas(response[i].amount,true),
           "payee":kony.sdk.isNullOrUndefined(response[i].payee)?"-":response[i].payee,
           "frequency":kony.sdk.isNullOrUndefined(response[i].frequency)?"-":response[i].frequency,
           "recurrence":kony.sdk.isNullOrUndefined(response[i].recurrence)?"-":response[i].recurrence,
           "reference":kony.sdk.isNullOrUndefined(response[i].reference)?"-":response[i].reference,           
           "customerName":kony.sdk.isNullOrUndefined(response[i].customerName)?"-":response[i].customerName,
           "templateName":kony.sdk.isNullOrUndefined(response[i].templateName)?"-":response[i].templateName,
           "fileType":kony.sdk.isNullOrUndefined(response[i].fileType)?"-":response[i].fileType,
           "customerId":kony.sdk.isNullOrUndefined(response[i].customerId)?"-":response[i].customerId,
           "fileName":kony.sdk.isNullOrUndefined(response[i].fileName)?"-":response[i].fileName,
           "totalCreditAmount":kony.sdk.isNullOrUndefined(response[i].totalCreditAmount)?"-":response[i].totalCreditAmount,
           "numberOfCredits":kony.sdk.isNullOrUndefined(response[i].numberOfCredits)?"-":response[i].numberOfCredits,
           "numberOfDebits":kony.sdk.isNullOrUndefined(response[i].numberOfDebits)?"-":response[i].numberOfDebits,
           "numberOfPrenotes":kony.sdk.isNullOrUndefined(response[i].numberOfPrenotes)?"-":response[i].numberOfPrenotes,
           "numberOfRecords":kony.sdk.isNullOrUndefined(response[i].numberOfRecords)?"-":response[i].numberOfRecords,
           "confirmationNumber":kony.sdk.isNullOrUndefined(response[i].confirmationNumber)?"-":response[i].confirmationNumber,
          };
          setdataarray.push(parsedResponse);
        }
      }
      return(setdataarray);
    }catch(err){
      kony.print("err--"+err);
    }
  };
      ApprovalsReqModule_PresentationController.prototype.getRequestAllHistory = function (navObj) {
      try{
        var scopeObj = this;
        var approvalsReqManager = applicationManager.getApprovalsReqManager();
        approvalsReqManager.fetchAllMyRequestHistory(
          navObj,
          scopeObj.onFetchRequestAllHistorySuccess,
          scopeObj.onFetchRequestAllHistoryFailure,
        );
          }catch(e){
          applicationManager.getPresentationUtility().dismissLoadingScreen();
          kony.print("Exception in getRequestAllHistory"+e);}
      };
      
       ApprovalsReqModule_PresentationController.prototype.onFetchRequestAllHistorySuccess = function (responses) { 
         var proccessedResponse = ApprovalsReqModule_PresentationController.prototype.dataProcessorForRequestHistory(responses);
         var viewController = applicationManager.getPresentationUtility().getController('frmApprovalHistory', true);
         viewController.fetchRequestHistorySuccesscallback(proccessedResponse);
        };
        ApprovalsReqModule_PresentationController.prototype.onFetchRequestAllHistoryFailure = function( error ){
           applicationManager.getPresentationUtility().dismissLoadingScreen();
          var viewController = applicationManager.getPresentationUtility().getController('frmApprovalHistory', true);
           viewController.errorCallback(error);
        };
         ApprovalsReqModule_PresentationController.prototype.dataProcessorForRequestHistory = function (responsedata ) { 
    try{     
      var setdataarray=[];
      var configManager = applicationManager.getConfigurationManager();
      var isiPhone = applicationManager.getPresentationFormUtility().getDeviceName() === "iPhone";
      var response = responsedata.records;
      if(Array.isArray(response)){
        for(var i=0;i<response.length;i++){ 
          var statusImage;
          if(response[i].status === "Approved" || response[i].status === "approved") {
            statusImage = "approval.png"
          }
          else if(response[i].status === "Pending" || response[i].status === "pending") {
            statusImage = "pending.png"
          } else if(response[i].status === "Rejected" || response[i].status === "rejected") {
            statusImage = "reject.png"
          }
          else{
            statusImage = "withdrawn.png"
          }
          var sentDate = response[i].sentDate;
          sentDate = sentDate.split('T')[0];
		  var featureName;
          var featureActionName;
          if(response[i].featureName.length > 53){
            featureName=CommonUtilities.truncateStringWithGivenLength(response[i].featureName + "...", 53);
          }else{
            featureName=response[i].featureName;
          }
          if(response[i].featureActionName.length > 33){
            featureActionName=CommonUtilities.truncateStringWithGivenLength(response[i].featureActionName + "...", 34)
          }else{
            featureActionName=response[i].featureActionName;
          }
         var parsedResponse={
           "data":response[i],
           "requestId":kony.sdk.isNullOrUndefined(response[i].requestId)?"-":response[i].requestId,
           "featureActionId":kony.sdk.isNullOrUndefined(response[i].featureActionId)?"-":response[i].featureActionId,            
           "featureActionName":kony.sdk.isNullOrUndefined(response[i].featureActionName)?"-":response[i].featureActionName,
           "featureName":kony.sdk.isNullOrUndefined(response[i].featureName)?"-":response[i].featureName,
           "lblPaymentType":kony.sdk.isNullOrUndefined(response[i].featureName)?"-":featureName,
           "lblPaymentMode":kony.sdk.isNullOrUndefined(response[i].featureActionName)?"-":featureActionName,
           "limitGroupId":kony.sdk.isNullOrUndefined(response[i].limitGroupId)?"-":response[i].limitGroupId,
           "limitGroupName":kony.sdk.isNullOrUndefined(response[i].limitGroupName)?"-":response[i].limitGroupName,            
           "transactionId":kony.sdk.isNullOrUndefined(response[i].transactionId)?"-":response[i].transactionId,
           "contractId":kony.sdk.isNullOrUndefined(response[i].contractId)?"-":response[i].contractId,
           "companyId":kony.sdk.isNullOrUndefined(response[i].companyId)?"-":response[i].companyId,
           "accountId":kony.sdk.isNullOrUndefined(response[i].accountId)?"-":response[i].accountId,
           "imgStatus":statusImage,
           "status":response[i].status,
           "sentBy":kony.sdk.isNullOrUndefined(response[i].sentBy)?"-":response[i].sentBy,
           "lblName":{isVisible:false},
           "amIApprover":kony.sdk.isNullOrUndefined(response[i].amIApprover)?"-":response[i].amIApprover,
           "amICreator":kony.sdk.isNullOrUndefined(response[i].amICreator)?"-":response[i].amICreator,
           "requiredApprovals":kony.sdk.isNullOrUndefined(response[i].requiredApprovals)?"-":response[i].requiredApprovals,
           "receivedApprovals":kony.sdk.isNullOrUndefined(response[i].receivedApprovals)?"-":response[i].receivedApprovals,
           "actedByMeAlready":kony.sdk.isNullOrUndefined(response[i].actedByMeAlready)?"-":response[i].actedByMeAlready,
           "requestType":kony.sdk.isNullOrUndefined(response[i].requestType)?"-":response[i].requestType,            
           "processingDate":kony.sdk.isNullOrUndefined(response[i].processingDate)?"-":CommonUtilities.getFrontendDateString(response[i].processingDate,"mm/dd/yyyy"),
           "sentDate":kony.sdk.isNullOrUndefined(response[i].sentDate)?"-":CommonUtilities.getFrontendDateString(response[i].sentDate,"mm/dd/yyyy"),
           "lblDate":kony.sdk.isNullOrUndefined(sentDate)?"-":CommonUtilities.getFrontendDateString(sentDate,"mm/dd/yyyy"),
           "amount":configManager.getCurrencyCode()+""+CommonUtilities.formatCurrencyWithCommas(response[i].amount,true),
           "payee":kony.sdk.isNullOrUndefined(response[i].payee)?"-":response[i].payee,
           "frequency":kony.sdk.isNullOrUndefined(response[i].frequency)?"-":response[i].frequency,
           "recurrence":kony.sdk.isNullOrUndefined(response[i].recurrence)?"-":response[i].recurrence,
           "reference":kony.sdk.isNullOrUndefined(response[i].reference)?"-":response[i].reference,           
           "customerName":kony.sdk.isNullOrUndefined(response[i].customerName)?"-":response[i].customerName,
           "templateName":kony.sdk.isNullOrUndefined(response[i].templateName)?"-":response[i].templateName,
           "fileType":kony.sdk.isNullOrUndefined(response[i].fileType)?"-":response[i].fileType,
           "customerId":kony.sdk.isNullOrUndefined(response[i].customerId)?"-":response[i].customerId,
           "fileName":kony.sdk.isNullOrUndefined(response[i].fileName)?"-":response[i].fileName,
           "totalCreditAmount":kony.sdk.isNullOrUndefined(response[i].totalCreditAmount)?"-":response[i].totalCreditAmount,
           "numberOfCredits":kony.sdk.isNullOrUndefined(response[i].numberOfCredits)?"-":response[i].numberOfCredits,
           "numberOfDebits":kony.sdk.isNullOrUndefined(response[i].numberOfDebits)?"-":response[i].numberOfDebits,
           "numberOfPrenotes":kony.sdk.isNullOrUndefined(response[i].numberOfPrenotes)?"-":response[i].numberOfPrenotes,
           "numberOfRecords":kony.sdk.isNullOrUndefined(response[i].numberOfRecords)?"-":response[i].numberOfRecords,
           "confirmationNumber":kony.sdk.isNullOrUndefined(response[i].confirmationNumber)?"-":response[i].confirmationNumber,
         };
          setdataarray.push(parsedResponse);
        }
      }
      return(setdataarray);
    }catch(err){
      kony.print("err--"+err);
    }
  };
          return ApprovalsReqModule_PresentationController;
      });

