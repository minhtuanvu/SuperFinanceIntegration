define({
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  frmReviewPreShow : function(){
    var scope = this;
    if(applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone"){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.flxHeader.isVisible = false;
    }
    this.setProductData();
    this.setPersonalInfo();
    this.view.customHeader.flxBack.onClick = function(){
      var navMan=applicationManager.getNavigationManager();
      navMan.goBack();
    }
    this.view.customHeader.btnRight.onClick = this.onClose;
    this.view.btnSubmit.onClick = function(){
      scope.navToAck();
    };
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  onClose : function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
    accountMod.presentationController.showDashboard();
  },
  navToAck : function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var  NAOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewAccountOpeningModule");
    NAOMod.presentationController.createUserSelectProducts();
  },
  setProductData : function(){
    var scope = this,
        productslist = [],
        product;
    var navManager = applicationManager.getNavigationManager();
    var navData = navManager.getCustomInfo("frmNAOReviewProduct");
    if (navData && navData.selectedProducts) {
      product = navData.selectedProducts;
    }
    if (product) {
      for (var i = 0; i < product.length; i++) {
        product[i].imgCheckbox.isVisible=false;
        product[i].btnViewDetails.isVisible=false;
      }
      this.view.segReviewProduct.setData(product);
      this.view.forceLayout();
    }
  },
  setPersonalInfo: function(){
    var scope = this;
    var user ;
    var dataMap =  {
      "flxMain": "flxMain",
      "flxNAOPersonalDetails": "flxNAOPersonalDetails",
      "flxSeparator": "flxSeparator",
      "lblDetail": "lblDetail",
      "lblDetailValue": "lblDetailValue",
    };
    var navManager = applicationManager.getNavigationManager();
    var navData = navManager.getCustomInfo("frmNAOReviewProduct");
    if (navData && navData.user) {
      user = navData.user;
    }
    if(user!==""&&user!==undefined && user!==null){
      var data = [
        {
          "lblDetail": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.p2p.firstName"),
          "lblDetailValue": user.firstName,
          "template" : "flxNAOPersonalDetails"
        },
        {
          "lblDetail": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.p2p.lastName"),
          "lblDetailValue": user.lastName,
          "template" : "flxNAOPersonalDetails"
        },
        {
          "lblDetail": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.dob"),
          "lblDetailValue": user.dob,
          "template" : "flxNAOPersonalDetails"
        }];
      if(user.gender)
        data.push( {
          "lblDetail": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.gender"),
          "lblDetailValue": user.gender,
          "template" : "flxNAOPersonalDetails"
        });
      if(user.martialStatus)
        data.push(  {
          "lblDetail": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Profile.MaritalStatus"),
          "lblDetailValue": user.martialStatus,
          "template" : "flxNAOPersonalDetails"
        });
      if(user.dependents)
        data.push({
          "lblDetail": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Profile.Dependent"),
          "lblDetailValue": user.dependents,
          "template" : "flxNAOPersonalDetails"
        })
        if(user.address)
          data.push({
            "lblDetail": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Profile.Address"),
            "lblDetailValue": user.address,
            "template" : "flxNAOPersonalDetailsAddress"
          });
      if(user.martialStatus=="Married"){
        data.push({
          "lblDetail": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Profile.SpouseName"),
          "lblDetailValue": user.spouseName,
          "template" : "flxNAOPersonalDetails"
        })
      }
      this.view.segSSN.setData([{
        "lblDetail": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.enroll.SSN"),
        "lblDetailValue": applicationManager.getDataProcessorUtility().maskSSN(user.ssn),
        "template" : "flxNAOPersonalDetails"
      }])
      this.view.segPersonalInfo.widgetDataMap = dataMap;
      this.view.segPersonalInfo.setData(data);
    }
    this.view.forceLayout();
  },
  bindViewError : function(msg)
  {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var scopeObj = this;
    applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, msg);
  },
});