define(['CampaignUtility'], function(CampaignUtility){
  return{
  selectedProducts : [],
  segmentData : [],
  rowval:[],
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  preShow: function() {
    this.view.flxNoProducts.setVisibility(false);
    var userObj = applicationManager.getUserPreferencesManager();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if(userObj.isUserLoggedin()){
      this.view.flxRememberMyDevice.isVisible = true;
      this.view.flxCheckBox.onClick=this.toggleCheckBox;
     // this.view.btntclink.onClick=this.checkTncContentType;
    }else{
      this.view.flxRememberMyDevice.isVisible = false;
    }
    this.view.btnContinueSelectProducts.setEnabled(false);
    this.view.btnContinueSelectProducts.skin = "sknBtna0a0a0SSPReg26px";
    if (applicationManager.getPresentationFormUtility().getDeviceName() == "iPhone") {
      this.view.flxNoRecords.top = "56dp";
      this.view.flxGradient.isVisible = false;
    }
    if(applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone"){
      this.view.flxHeader.isVisible = true;
    }
    else{
      this.view.flxHeader.isVisible = false;
    }
    this.view.customHeader.flxBack.onClick=function()
    {
      var navMan=applicationManager.getNavigationManager();
      navMan.goBack();
    };
    this.view.customHeader.btnRight.onClick = this.onClose;
    this.setProductData();
    var scopeObj = this;
    var NewAccount = applicationManager.getLoggerManager();
    NewAccount.setCustomMetrics(this, false, "New Account Opening");
    this.view.btnContinueSelectProducts.onClick = function(){
      scopeObj.navToReview();
    };
    this.view.customSearchbox.tbxSearch.onTextChange = this.searchdata;
    this.view.segSelectProducts.onRowClick = function() {
      var rowindex = scopeObj.view.segSelectProducts.selectedRowIndex[1];
      var val = scopeObj.view.segSelectProducts.data[rowindex];
      var productid = val["productId"].text;
      var navManager = applicationManager.getNavigationManager();
      var navData = navManager.getCustomInfo("frmNAOSelectProduct");
      var products = navData.allproducts;
      var id = products.findIndex(x => x.productId === productid);
      if (scopeObj.rowval.indexOf(id) == -1) {
        scopeObj.selectedProducts.push(productid);
        scopeObj.rowval.push(id);
      } else {
        scopeObj.selectedProducts.splice(scopeObj.selectedProducts.indexOf(productid), 1);
        scopeObj.rowval.splice(scopeObj.rowval.indexOf(id), 1);
      }
      if (scopeObj.selectedProducts.length > 0 && scopeObj.view.imgTermsAccepted.src === "a.png") {
        scopeObj.view.btnContinueSelectProducts.setEnabled(true);
        scopeObj.view.btnContinueSelectProducts.skin = "sknBtn0095e4RoundedffffffSSP26px";
      } else {
        scopeObj.view.btnContinueSelectProducts.setEnabled(false);
        scopeObj.view.btnContinueSelectProducts.skin = "sknBtna0a0a0SSPReg26px";
      }
    };
    this.view.tbxSearch.onTouchEnd=this.searchProducts;
    this.view.customSearchbox.btnCancel.onClick = this.searchProducts;
    var btntxt=kony.i18n.getLocalizedString("kony.mb.TermsAndConditions.Title");
    this.view.lblRichTxt.text= kony.i18n.getLocalizedString("kony.mb.externalAccounts.termnsConditionsChk")+"  "+"<a href=''>"+btntxt+"</a>";
    this.view. lblRichTxt.linkSkin= "sknBtn0095e428px";
    this.view.lblRichTxt.onClick=this.checkTncContentType;
	var navManager = applicationManager.getNavigationManager();
    var flag = navManager.getCustomInfo("isCheckBoxChecked");
    if(!flag)
    this.view.imgTermsAccepted.src="tickmarkbox.png";
    navManager.setCustomInfo("isCheckBoxChecked",false);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    function campaignPopUpSuccess(response){
      CampaignUtility.showCampaign(response, scopeObj.view);
    }
    function campaignPopUpError(response){
      kony.print(response, "Campaign Not Found!");
    }
    CampaignUtility.fetchPopupCampaigns(campaignPopUpSuccess, campaignPopUpError);
  },
  checkTncContentType:function()
  {
    var navManager = applicationManager.getNavigationManager();
    navManager.setCustomInfo("isCheckBoxChecked",true); 
    var info = applicationManager.getNavigationManager().getCustomInfo("frmSupportInfo");
    if(info && info.contentTypeID == "URL"){
      kony.application.openURL(info.content);
    }
    else{
      this.navigateToTermsAndConditions();    
    }
  },
  navigateToTermsAndConditions : function(){
    var navManager = applicationManager.getNavigationManager();
    navManager.navigateTo("frmSupportInfo");
  },
  clearData : function(){
    this.rowval=[];
    this.selectedProducts =[];
  },
  onClose : function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
    accountMod.presentationController.showDashboard();
  },
  setProductData : function(){
    var scope = this,
        productslist = [],
        product;
    this.view.flxSelectProducts.isVisible = true;
    var navManager = applicationManager.getNavigationManager();
    var navData = navManager.getCustomInfo("frmNAOSelectProduct");
    if (navData && navData.allproducts) {
      product = navData.allproducts;
    }

    if (product) {
      for (var i = 0; i < product.length; i++) {
        var prolist = {
          "lblProductTitle": product[i]["productName"],
          "lblProductSubTitle": {
            "text": product[i]["productType"]
          },
          "lblProductInfo": {
            "text": product[i]["detailedDesc"]
          },
          "features": {
            "text": product[i]["features"]
          },
          "productId": {
            "text": product[i]["productId"]
          },
          "productType": {
            "text": product[i]["productType"]
          },
          "rates": {
            "text": product[i]["rates"]
          },
          "info": {
            "text": product[i]["info"]
          },
          "productTypeId":{
            "text": product[i]["productTypeId"]
          },
          "btnViewDetails": {
            "text": "View details"
            , "onClick": function(widget, context) {
              var r = context["rowIndex"];
              var data1 = context.widgetInfo.data[r];
              var navMan=applicationManager.getNavigationManager();
              navMan.setCustomInfo("frmNAOProductDetails",{productDescription: data1.lblProductInfo.text,productName:data1.lblProductTitle})
              var NAOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewAccountOpeningModule");
              NAOMod.presentationController.commonFunctionForNavigation("frmNAOProductDetails");
            }
          }
        };
        if (scope.rowval.indexOf(i) != -1){
          prolist["imgCheckbox"]= {
            "src": "remembermetick.png"
          }
        }
        else{
          prolist["imgCheckbox"]= {
            "src": "remeberme.png"
          }
        }
        productslist.push(prolist);
      }
      
      this.view.segSelectProducts.setData(productslist);
      this.view.segSelectProducts.selectedRowIndices=[[0.0,this.rowval]];
      this.segmentData=productslist;
      if (scope.selectedProducts.length > 0 && scope.view.imgTermsAccepted.src === "a.png") {
        scope.view.btnContinueSelectProducts.setEnabled(true);
        scope.view.btnContinueSelectProducts.skin = "sknBtn0095e4RoundedffffffSSP26px";
      } else {
        scope.view.btnContinueSelectProducts.setEnabled(false);
        scope.view.btnContinueSelectProducts.skin = "sknBtna0a0a0SSPReg26px";
      }
      this.view.flxHeaderSearchbox.isVisible = true;
      this.view.flxRememberMyDevice.setVisibility(true);
      this.searchProducts();
      this.view.forceLayout();
    }
    else {
      this.view.flxSearchMain.isVisible = false;
      this.view.flxHeaderSearchbox.isVisible = false;
      this.view.flxSeparator.isVisible = false;
      this.view.segSelectProducts.removeAll();
      this.view.flxNoProducts.setVisibility(true);
      this.view.flxRememberMyDevice.setVisibility(false);
    }
  },
  navToReview : function(){
    var  NAOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewAccountOpeningModule");
    NAOMod.presentationController.reviewProducts(this.selectedProducts,this.segmentData);
  },
  onSearchOne : function(){
    var scope =this;
    this.view.customSearchbox.tbxSearch.text="";
    this.view.flxSelectProducts.skin="sknFlxScrlffffff";
    if(applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone"){
      //this.view.flxHeader.isVisible = false;
      //this.view.flxSearch.isVisible = false;
      // this.view.flxHeaderSearchbox.isVisible = true;
      //  this.view.flxSearchMain.isVisible = false;
      //this.view.flxSelectProducts.top = "40dp";
      this.view.flxSearchMain.isVisible = false;
      this.view.flxHeader.isVisible=false;
      this.view.flxHeaderSearchbox.isVisible=true;
      this.view.flxSelectProducts.top="0dp";
    }
    else{
      //this.view.flxSearch.isVisible = false;
      kony.timer.schedule("timerId", function() {
        scope.view.customSearchbox.tbxSearch.setFocus(true);
      }, 0.2, false);
      // this.view.flxHeaderSearchbox.isVisible = true;
      // this.view.flxSearchMain.isVisible = false;
    }
    // this.view.customSearchbox.tbxSearch.setFocus(true);
    this.view.flxHeaderSearchbox.forceLayout();
    this.view.flxSearch.forceLayout();
  },
  cancelSearch : function(){
    this.view.customSearchbox.tbxSearch.text="";
    this.view.flxSelectProducts.skin="slfSbox";
    if(applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone"){
      //this.view.flxHeader.isVisible = true;
      //this.view.flxSearch.isVisible = true;
      this.view.flxHeaderSearchbox.isVisible=false;
      this.view.flxHeader.isVisible=true;
      this.view.flxSelectProducts.top="56dp";
      this.view.flxSearchMain.isVisible = true;
      //this.view.flxSelectProducts.top = "56dp";
    }
    else{
      //this.view.flxSearch.isVisible = true;
      this.view.flxHeaderSearchbox.isVisible = false;
      this.view.flxSearchMain.isVisible = true;
    }
    this.view.segSelectProducts.isVisible=true;
    this.view.flxNoRecords.isVisible=false;
    this.view.segSelectProducts.setData(this.segmentData);
    this.view.flxSearch.forceLayout();
    this.view.segSelectProducts.selectedRowIndices=[[0.0,this.rowval]];
  },
  onSearch : function(){
    var searchtext=this.view.customSearchbox.tbxSearch.text.toLowerCase();
    this.view.segSelectProducts.removeAll();
    var data = applicationManager.getDataProcessorUtility().commonSegmentSearch("lblProductTitle",searchtext,this.segmentData);
    if(data && data.length>0){
      this.view.segSelectProducts.isVisible=true;
      this.view.flxNoProducts.isVisible=false;
      this.view.segSelectProducts.setData(data);
    }
    else
    {
      this.view.flxNoProducts.isVisible=true;
      this.view.segSelectProducts.isVisible=false;
    }
  },
  toggleCheckBox:function()
  {
    if(this.view.imgTermsAccepted.src==="tickmarkbox.png")
    {
      	this.view.imgTermsAccepted.src="a.png";
		if(this.selectedProducts.length > 0){
        this.view.btnContinueSelectProducts.setEnabled(true);
        this.view.btnContinueSelectProducts.skin = "sknBtn0095e4RoundedffffffSSP26px";
      } 
    }
    else
    {
      this.view.imgTermsAccepted.src="tickmarkbox.png";
      this.view.btnContinueSelectProducts.setEnabled(false);
      this.view.btnContinueSelectProducts.skin = "sknBtna0a0a0SSPReg26px";
    }
  },
  searchProducts:function()
  {
    if (this.view.flxHeaderSearchbox.isVisible === true){
        this.view.flxSelectProducts.skin="slfSbox";
      //new code
		this.view.tbxSearch.setEnabled(true);
		this.view.tbxSearch.setFocus(false);
		this.view.customSearchbox.tbxSearch.setEnabled(false);
		this.view.customSearchbox.tbxSearch.setFocus(false);
		this.view.tbxSearch.text="";
		this.view.flxHeaderSearchbox.isVisible = false;
		//this.view.flxSeg.skin = "slFSbox";
		this.view.flxSearchMain.isVisible = true;
        this.view.flxSearchMain.forceLayout();
        if(applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone"){
			this.view.flxHeader.isVisible = true;
            this.view.flxSelectProducts.top="56dp";
        }
		if(this.segmentData.length>0){
			this.view.segSelectProducts.setData(this.segmentData);
			this.view.segSelectProducts.selectedRowIndices=[[0.0,this.rowval]];
			this.view.flxNoProducts.isVisible=false;
			this.view.segSelectProducts.isVisible=true;
            this.view.flxRememberMyDevice.setVisibility(true);
		}
		else{
			this.view.flxNoProducts.isVisible=true;
			this.view.segSelectProducts.isVisible=false;
			this.view.flxRememberMyDevice.setVisibility(false);
		}
    }
    else{
		this.view.tbxSearch.setEnabled(false);
		this.view.customSearchbox.tbxSearch.setEnabled(true);
		this.view.customSearchbox.tbxSearch.setFocus(true);
		this.view.flxSearchMain.isVisible = false;
        if(applicationManager.getPresentationFormUtility().getDeviceName() !== "iPhone"){
			this.view.flxHeader.isVisible=false;
			this.view.flxSelectProducts.top = "0dp";
        }
		this.view.customSearchbox.tbxSearch.text="";
		this.view.flxHeaderSearchbox.isVisible = true;
        this.view.flxSelectProducts.skin="sknFlxScrlffffff";
		this.view.flxSearch.forceLayout();
    }
  },
  searchdata:function()
  {
    var searchText = this.view.customSearchbox.tbxSearch.text.toLowerCase();
    this.view.segSelectProducts.removeAll();
    if(searchText)
    {
		var selpro= applicationManager.getDataProcessorUtility().commonSegmentSearch("lblProductTitle",searchText,this.segmentData);
		if(selpro.length>0){
			this.view.segSelectProducts.isVisible=true;
			this.view.flxNoProducts.isVisible=false;
			this.view.segSelectProducts.setData(selpro);
			this.view.flxRememberMyDevice.setVisibility(true);
			//this.view.segSelectProducts.selectedRowIndices=[[0.0,selpro.searchSelectedProductsList]];
        }
		else{
			this.view.flxNoProducts.isVisible=true;
			this.view.segSelectProducts.isVisible=false;
            this.view.flxRememberMyDevice.setVisibility(false);
        }
    }
    else
    {
		if(this.segmentData.length>0){
			this.view.segSelectProducts.isVisible=true;
			this.view.flxNoProducts.isVisible=false;
			this.view.segSelectProducts.setData(this.segmentData);
			this.view.segSelectProducts.selectedRowIndices=[[0.0,this.rowval]];
            this.view.flxRememberMyDevice.setVisibility(true);
        }
		else{
            this.view.flxNoProducts.isVisible=true;
			this.view.segSelectProducts.isVisible=false;
            this.view.flxRememberMyDevice.setVisibility(false);
        }
    }
  }
  };
});