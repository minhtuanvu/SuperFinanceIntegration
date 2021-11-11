define(["AsyncManager/BusinessControllers/BusinessController"], function(AsyncManager) {
    function NewAccountOpening_PresentationController() {
        scope_NewAccountOpeningPresentationController=this;
        kony.mvc.Presentation.BasePresenter.call(this);
        stringifiedProducts={};
        this.asyncManager = new AsyncManager();
        this.numberOfAsync = 2;
    }
    inheritsFrom(NewAccountOpening_PresentationController, kony.mvc.Presentation.BasePresenter);
    NewAccountOpening_PresentationController.prototype.initializePresentationController = function() {
    };
  NewAccountOpening_PresentationController.prototype.commonFunctionForNavigation = function(formName) {
    var navManager = applicationManager.getNavigationManager();
    navManager.navigateTo(formName);
  };
  NewAccountOpening_PresentationController.prototype.showAllProducts=function()
  {
    var BC=applicationManager.getProductManager();
    var navMan=applicationManager.getNavigationManager();
    var allProducts=BC.getProductsList();
    var controller = applicationManager.getPresentationUtility().getController('frmNAOSelectProduct', true);
    controller.clearData();
    if(allProducts){
      navMan.setCustomInfo("frmNAOSelectProduct",{"allproducts":allProducts});
      navMan.navigateTo("frmNAOSelectProduct");
    }
    else{
       scope_NewAccountOpeningPresentationController.fetchAllProducts();
    }
  };
  NewAccountOpening_PresentationController.prototype.fetchAllProductsAndTnc=function()
  {
    var BC=applicationManager.getProductManager();
    var allProducts=BC.getProductsList();
    var controller = applicationManager.getPresentationUtility().getController('frmNAOSelectProduct', true);
    controller.clearData();
    applicationManager.getPresentationUtility().showLoadingScreen();
    if(allProducts){
      scope_NewAccountOpeningPresentationController.getTermsandConditions();
    }
    else{
       scope_NewAccountOpeningPresentationController.asyncManager.initiateAsyncProcess(scope_NewAccountOpeningPresentationController.numberOfAsync);
       scope_NewAccountOpeningPresentationController.getTermsandConditionsForAsync();
       var proMan=applicationManager.getProductManager();
       proMan.fetchProductsList(this.fetchproductsSuccessCallback,this.fetchproductsErrorCallback);
    }
  };
  NewAccountOpening_PresentationController.prototype.fetchproductsSuccessCallback = function(res){
    scope_NewAccountOpeningPresentationController.asyncManager.setSuccessStatus(1, res);
    if(scope_NewAccountOpeningPresentationController.asyncManager.areAllservicesDone(scope_NewAccountOpeningPresentationController.numberOfAsync)){
        var proMan=applicationManager.getProductManager();
        proMan.setProductsList(scope_NewAccountOpeningPresentationController.asyncManager.getData(1));
        var BC=applicationManager.getProductManager();
        var navMan=applicationManager.getNavigationManager();
        var allProducts=BC.getProductsList();
        var configManager = applicationManager.getConfigurationManager();
        var tnC = scope_NewAccountOpeningPresentationController.asyncManager.getData(0);
        navMan.setCustomInfo("frmSupportInfo",{"richTextData":"<font face='SourceSansPro-Regular'>"+tnC.termsAndConditionsContent,"flowType":"NAO","contentTypeID":tnC.contentTypeId,"header":configManager.constants.TERMS});
        navMan.setCustomInfo("frmNAOSelectProduct",{"allproducts":allProducts});
        navMan.navigateTo("frmNAOSelectProduct");
    }
  };
  NewAccountOpening_PresentationController.prototype.fetchproductsErrorCallback = function(err){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  scope_NewAccountOpeningPresentationController.asyncManager.setErrorStatus(1, err);
  if (err["isServerUnreachable"]) {
      applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
   }else{
           var controller = applicationManager.getPresentationUtility().getController('frmDashboardAggregated', true);
         var errorMsg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.SomethingWrong");
         controller.bindGenericError(errorMsg);
     }
  };
  NewAccountOpening_PresentationController.prototype.getTermsandConditionsForAsync = function(){
    var config = applicationManager.getConfigurationManager();
   var locale=config.getLocale();
   var termsAndConditions=config.getTermsAndConditions();
    var param={
    "languageCode": termsAndConditions[locale],
     "termsAndConditionsCode": termsAndConditions["OpenNewAccount"]
  };
   var termsAndConditions = applicationManager.getTermsAndConditionsManager();
   termsAndConditions.fetchTermsAndConditionsPostLogin(param,this.fetchProductsAndTnCSuccessCallBack,this.fetchProductsAndTnCErrorCallback);
  };
  NewAccountOpening_PresentationController.prototype.fetchProductsAndTnCSuccessCallBack = function(res){
    scope_NewAccountOpeningPresentationController.asyncManager.setSuccessStatus(0, res);
    if(scope_NewAccountOpeningPresentationController.asyncManager.areAllservicesDone(scope_NewAccountOpeningPresentationController.numberOfAsync)){
          var proMan=applicationManager.getProductManager();
          proMan.setProductsList(scope_NewAccountOpeningPresentationController.asyncManager.getData(1));
          var BC=applicationManager.getProductManager();
          var navMan=applicationManager.getNavigationManager();
          var allProducts=BC.getProductsList();
          var configManager = applicationManager.getConfigurationManager();
          var tnC = scope_NewAccountOpeningPresentationController.asyncManager.getData(0);
          navMan.setCustomInfo("frmSupportInfo",{"richTextData":"<font face='SourceSansPro-Regular'>"+tnC.termsAndConditionsContent,"flowType":"NAO","contentTypeID":tnC.contentTypeId,"header":configManager.constants.TERMS});
          navMan.setCustomInfo("frmNAOSelectProduct",{"allproducts":allProducts});
          navMan.navigateTo("frmNAOSelectProduct");
    }
  };
  NewAccountOpening_PresentationController.prototype.fetchProductsAndTnCErrorCallback = function(err){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    scope_NewAccountOpeningPresentationController.asyncManager.setErrorStatus(0, err);
    if (err["isServerUnreachable"]) {
        applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
     }else{
             var controller = applicationManager.getPresentationUtility().getController('frmDashboardAggregated', true);
           var errorMsg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.SomethingWrong");
           controller.bindGenericError(errorMsg);
       }
  };
  NewAccountOpening_PresentationController.prototype.fetchAllProducts=function()
  {
    var proMan=applicationManager.getProductManager();
    proMan.fetchProductsList(this.productsSuccessCallback,this.productsErrorCallback);
  };
  /**
  * Success callback of fetch all products
  *@param {object} res response from the backend
  */
  NewAccountOpening_PresentationController.prototype.productsSuccessCallback=function(res)
  {
    var proMan=applicationManager.getProductManager();
    proMan.setProductsList(res);
    var BC=applicationManager.getProductManager();
    var navMan=applicationManager.getNavigationManager();
    var allProducts=BC.getProductsList();
    navMan.setCustomInfo("frmNAOSelectProduct",{"allproducts":allProducts});
    navMan.navigateTo("frmNAOSelectProduct");
  };
  /**
  * Error callback of fetch all products
  *@param {object} err response from the backend
  */
  NewAccountOpening_PresentationController.prototype.productsErrorCallback=function(error)
  {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    kony.print("error in productsErrorCallback");
    if (error["isServerUnreachable"])
      applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin",error);
    else
      kony.ui.Alert(error.errorMessage);
  };
  NewAccountOpening_PresentationController.prototype.reviewProducts=function(userproducts,productslist)
  {
    var userMan=applicationManager.getUserPreferencesManager();
    var navMan=applicationManager.getNavigationManager();
    var userData={}
    userData.firstName = userMan.getUserFirstName();
    userData.lastName = userMan.getUserLastName();
    var formatUtil=applicationManager.getFormatUtilManager();
    var dateobj=formatUtil.getDateObjectfromString(userMan.getUserDOB(),"YYYY-MM-DD");
    var formattedDate = formatUtil.getFormatedDateString(dateobj,formatUtil.getApplicationDateFormat());
    userData.dob = formattedDate;
    userData.martialStatus = userMan.getmaritalStatus();
    userData.spouseName =userMan.getspouseName();
    userData.dependents = userMan.getnoOfDependants();
    userData.gender = userMan.getUserGender();
    userData.address= userMan.getUserAddressLine1() + userMan.getUserAddressLine2();
    userData.ssn= userMan.getSSN();
    var list = [];
    var list2= [];
    for (var i = 0; i < userproducts.length; i++) {
      var index=productslist.findIndex(x => x.productId.text === userproducts[i]);
      var l = {
        productTypeId: productslist[index]["productTypeId"].text,
        productName: productslist[index]["lblProductTitle"],
        productType:productslist[index]["lblProductSubTitle"].text,
        productId:productslist[index]["productId"].text
      };
      l={product:JSON.stringify(l)};
      list.push(l);
      list2.push(productslist[index]);
    }
    list=JSON.stringify(list);
    scope_NewAccountOpeningPresentationController.stringifiedProducts = {
      "productLi": list.replace(/\"/g,"'").replace(/\\'/g,"\\\"")
    };
    navMan.setCustomInfo("frmNAOReviewProduct",{selectedProducts:list2, user:userData});
    navMan.navigateTo("frmNAOReviewProduct");
  };
  NewAccountOpening_PresentationController.prototype.createUserSelectProducts = function() {
    var accountBC = applicationManager.getAccountManager();
    accountBC.newAccountOpening(scope_NewAccountOpeningPresentationController.stringifiedProducts, presentationSuccessCallback, presentationErrorCallback);
    function presentationSuccessCallback(res) {
      var navMan=applicationManager.getNavigationManager();
      //navMan.setCustomInfo("frmNAOAck",{selectedProducts:list2});
      navMan.navigateTo("frmNAOAck");
    }
      function presentationErrorCallback(res) {
     applicationManager.getPresentationUtility().dismissLoadingScreen();
      if (res["isServerUnreachable"])
      {
        applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", res);
      }
      else{
       var controller = applicationManager.getPresentationUtility().getController('frmNAOReviewProduct', true);
       var msg = res["errorMessage"];
        if(kony.sdk.isNullOrUndefined(msg)){
			msg = "Error in createUserSelectProducts";
        }
       controller.bindViewError(msg);
      }    
    }
  };
   /**
  * get Terms and conditions
  */
  NewAccountOpening_PresentationController.prototype.getTermsandConditions = function(){
     var config = applicationManager.getConfigurationManager();
    var locale=config.getLocale();
    var termsAndConditions=config.getTermsAndConditions();
     var param={
     "languageCode": termsAndConditions[locale],
      "termsAndConditionsCode": termsAndConditions["OpenNewAccount"]
   };
    var termsAndConditions = applicationManager.getTermsAndConditionsManager();
    termsAndConditions.fetchTermsAndConditionsPostLogin(param,this.getTermsandConditionsSuccessCallBack,this.getTermsandConditionsErrorCallback);
  };
   NewAccountOpening_PresentationController.prototype.getTermsandConditionsSuccessCallBack = function(response){
    var navManager = applicationManager.getNavigationManager();
    var configManager = applicationManager.getConfigurationManager();
    navManager.setCustomInfo("frmSupportInfo",{"richTextData":"<font face='SourceSansPro-Regular'>"+response.termsAndConditionsContent,"flowType":"NAO","contentTypeID":response.contentTypeId,"header":configManager.constants.TERMS});
    var BC=applicationManager.getProductManager();
    var allProducts=BC.getProductsList();
    navManager.setCustomInfo("frmNAOSelectProduct",{"allproducts":allProducts});
    navManager.navigateTo("frmNAOSelectProduct");
   };
  NewAccountOpening_PresentationController.prototype.getTermsandConditionsErrorCallback = function(err){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (err["isServerUnreachable"]) {
        applicationManager.getPresentationInterruptHandler().showErrorMessage("postLogin", err);
     }else{
             var controller = applicationManager.getPresentationUtility().getController('frmDashboardAggregated', true);
           var errorMsg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.SomethingWrong");
           controller.bindGenericError(errorMsg);
       }
   };
    return NewAccountOpening_PresentationController;
});